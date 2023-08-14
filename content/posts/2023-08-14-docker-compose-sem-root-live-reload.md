---
title: "Rodando docker compose sem root e containers com live-reload no Fedora"
slug: docker-compose-sem-root-live-reload
date: 2023-08-14 10:00:00
author: anarute
tags: ["pt-br", "docker", "fedora"]
fullscreen: false
---

Nos últimos dias precisei dockerizar uma aplicação divida em 3 serviços:
monolito legado, novo front end em React e nova API com FastAPI. Com a chegada
de uma nova pessoa no time, resolvemos criar um docker-compose que rodasse todas
as aplicações juntas, incluindo o banco de dados e aplicação de autenticação, o
que facilitaria bastante o fluxo de desenvolvimento por não ter que configurar
manualmente todas as aplicações nem ter que subir uma por uma toda vez.

Meu principal requisito era criar um docker-compose de modo que os serviços
fossem atualizados automaticamente sem precisar buildar o container a cada
mudança, vulgo **live-reload**. O método que escolhi pra fazer isso foi com
volumes, já que pareceu a opção mais natural: docker espelha os arquivos de uma
pasta local com os arquivos do ambiente docker, assim qualquer modificação nos
volumes serão compartilhadas com os containers sem a necessidade de
reconstruir-los.

Como um teste simples inicial, criei uma aplicação com FastAPI, com um único
endpoint o mais simples possível:


```python
# src/main.py

from typing import Optional
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
```

O Dockerfile também super simples, seguindo os passos da [documentação do
FastAPI](https://fastapi.tiangolo.com/deployment/docker/):

```python
# Dockerfile

FROM python:3.9

WORKDIR /code

COPY ./requirements.txt /code/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt

COPY ./app /code/app

EXPOSE 8000

# A opção --reload é que faz o servidor recarregar quando há mudanças nos arquivos

CMD ["uvicorn", "app.main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
```

E no docker-compose, o segredo tá na configuração dos volumes:

```python
# docker-compose.yml

version: '3.7'

services:
  server:
    container_name: server
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./app:/code/app
    ports:
      - "8008:8008"
```

Aqui estamos dizendo que a pasta `app`, que nesse caso está no mesmo nível do
arquivo `docker-compose.yml` vai ser espelhada na pasta `/code/app` dentro do
container. Se você reparar no Dockerfile eu copio a pasta `./app` para
`/code/app`, assim o conteúdo das duas deveria ser o mesmo e é exatamente onde
estão os arquivos que eu modifico e que gostaria durante o desenvolvimento e que
gostaria que o servidor recarregasse ao serem modificados.

A princípio isso deveria funcionar, encontrei vários exemplos que faziam
exatemente isso e pareciam bem simples, mas por algum motivo não funcionava pra
mim. Assim que eu configurava o volume, as aplicações não funcionavam mais e
investigando um pouco parecia que os arquivos ou não eram mais copiados para o
container ou o container não tinha permissão de lê-los.

Como eu uso Fedora, no lugar Docker eu uso Podman, mas para docker compose usava
o pacote `docker-compose` mesmo e tinha que rodar docker-compose com sudo, o que
não era exatamente ideal já que uma das melhores vantagens do podman (além de
ser open source) é a possibilidade de rodar docker sem root. Comecei a achar que
o problema deveria estar relacionado a isso, já que tinha cara de problema de
permissões. Depois de postergar por meses, resolvi finalmente parar pra resolver
isso e passar a rodar docker-compose sem root. Essa foi a primeira parte da
solução, o que eu não contava é que em um artigo só eu acharia a solução para os
dois problemas: https://brandonrozek.com/blog/rootless-docker-compose-podman/


A solução veio em duas etapas, passar a rodar o socket do podman como meu
usuário e não mais com root:

```sh
systemctl --user enable podman.socket
systemctl --user start podman.socket
export DOCKER_HOST=unix:///run/user/$UID/podman/podman.sock
```

E no finalzinho do artigo, Brandon solta essa informação despretenciosamente que
foi o que me salvou:

> "If you want to add to add more volumes to the container, make sure it has the
> appropriate SELinux label if you’re using a distribution with it enabled."

`chcon -t container_file_t -R <volume_folder>`

No caso do meu exemplo, `chcon -t container_file_t -R app` foi o que resolveu.

Eu quebrei muita a cabeça até achar essa solução e finalmente consigo rodar
docker-compose sem root e usar live-reload!

Segue o repositório bem simples com exemplo que descrevi:
https://github.com/anarute/fastapi-live-reload

Se quiser ler um pouco mais sobre, recomendo [esse
artigo](https://www.freecodecamp.org/news/how-to-enable-live-reload-on-docker-based-applications/)
do Erick Wendel.
