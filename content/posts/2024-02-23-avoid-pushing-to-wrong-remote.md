---
title: "Avoid pushing to a wrong remote in a git repo"
slug: avoid-pushing-to-wrong-remote
description: "Simple trick to avoid pushing to a wrong remote when using multiple remotes in git"
date: 2024-02-23 20:12:19
author: anarute
tags: ["git", "programming"]
fullscreen: false
---

If you work with open source, it is possible that in your local repository you
have added multiple remotes to work with. Let's say one for upstream and one for
your fork.

More often than I would expect, I end up pushing to upstream (if I have rights
to the repo) when I wanted to push my fork and it sometimes can be very
annoying.

A small trick I've been using to avoid this is simply erasing the push url for
the remote I don't want to push directly.

When you add a remote to your repo with `git remote add <remote_name>
<remote_url>`, git sets 2 urls for it: one for fetching changes and another for
pushing. This means for the same remote we could have different urls which gives
us flexibility to handle our workflow.

Running `git remote -v` you can see how the remotes are organized in your local
repo and you will see something like:

```
╰─➤  git remote -v
origin  git@github.com:anarute/anarute.github.io.git (fetch)
origin  git@github.com:anarute/anarute.github.io.git (push)
fork  git@github.com:otheruser/anarute.github.io.git (fetch)
fork  git@github.com:otheruser/anarute.github.io.git (push)
```

As a very simple way to avoid pushing to the remote you don't want, you can
override the remote's push url with `git remote set-url --push <remote_name>
no-push`, this way even if you try to push to it, git won't find a valid url and
you are safe from commiting things to the wrong place.

```
╰─➤  git push origin main
fatal: 'no-push' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists
```

While writing this post it also occurred to me that you can even set the fetch
url for the main repo and the push url for you fork, making the work between the
upstream and fork look like it's the same repo but in reality you are working
with two. I can imagine this being a bit radical and can lead to unwanted
scenarios when for some reason you do need to fetch from the fork, but maybe
it's worth experimenting and see what suites your workflow better.
