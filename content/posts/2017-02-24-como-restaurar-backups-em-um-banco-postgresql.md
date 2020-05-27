---
title: "Como restaurar backups em um banco PostgreSQL"
description: "Guia básico para criar e restaurar um dump de um banco em PostgreSQL"
cover: https://images.unsplash.com/photo-1495669735947-8ebe33b049bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&h=1080&q=80
slug: como-restaurar-backups-em-um-banco-postgresql
date: 2017-02-24 14:30:43
author: anarute
tags: ["sysadmin", "postgresql", "databases", "db"]
fullscreen: false
---

De tempos em tempos eu preciso restaurar um backup de algum banco para outro ou
preencher o banco de um novo ambiente de desenvolvimento local com dados
para testes. Como não é uma tarefa diária, nem sempre me lembro como faz, então
resolvi juntar aqui o passo a passo até pra facilitar nas próximas vezes e talvez
possa também ajudar alguém.

Antes de poder restaurar algum backup, precisamos crear o dump! O comando utilizado
para isso é o `pg_dump` que já nos devolve um _dump_ da tabela inteira - se
quiser saber mais [clique aqui](https://www.postgresql.org/docs/current/static/app-pgdump.html)
para ler a documentação.

<pre>pg_dump dbname > backupfile.sql</pre>

No comando acima, extraímos todos os dados do banco (troque _dbname_ pelo nome 
da sua tabela) e jogamos em um arquivo `.sql`. Pronto, já temos o backup salvo. 
**Dica:** esse é um jeito bem fácil de manter backup de seus bancos. Recomendo 
criar um comando que faça esse backup e utilizar o 
[Cron](https://help.ubuntu.com/community/CronHowto) para fazer isso 
automaticamente sempre.

Para restaurar o backup num banco, o postegres também nos permite fazer isso de
um jeito bem simples, mas tem alguns detalhes:

1. o banco precisa existir com o mesmo nome do banco que foi extraído.
2. o banco não pode ter as tabelas criadas, senão vai dar conflito e a 
restauração não vai dar certo.

Nesse caso, se o banco já existir primeiro eu dou `dropdb db_name` que vai
deletar o banco (**IMPORTANTE**, eu só faço isso em bancos locais, porque isso
apaga **todos os dados** do banco, então **NUNCA** faça isso em produção a menos
que você saiba exatamente o que está fazendo. Dá justa causa, hein? Deus tá
vendo). Depois de deletar, precisamos recriá-la senão a restauração não vai
funcionar por não encontrar o banco. Para recriá-lo: `createdb db_name`

Por fim, para restaurar os dados, jogamos o arquivo no novo banco:

<pre>psql dbname < infile</pre>

Pronto, temos um banco restaurado! Para mim esse processo é fundamental em dois
momentos: quando por algum motivo - normalmente tenso - eu preciso restaurar o
banco em produção ou quando vou começar um novo ambiente de desenvolvimento e
preciso de dados para testar o app e as mudanças que estou fazendo.
