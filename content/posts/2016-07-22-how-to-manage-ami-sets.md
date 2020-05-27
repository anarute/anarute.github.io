---
title: "How to manage AMI sets"
slug: how-to-manage-ami-sets
date: 2016-07-22 14:30:43
author: anarute
tags: ["outreachy", "FOSS", "taskcluster", "Mozilla"]
fullscreen: false
---

After finishing the first version of the [AMI sets entity](http://anarute.com/the-amiset-entity/), now we need to be able to manage them.

Taskcluster has already a set of tools to manage its components and elements: the [taskcluster tools](https://tools.taskcluster.net/). In order to manage the AMI sets it was natural to build a tool for that. At first, our main goal is to build a minimal tool that allows us to list all the AMI sets known to the AWS provisioner and to add, edit and delete AMI sets.

The final shape of an AMI set is this:

<pre>"amis": 
  [
    {
      "region": "us-west-1",
      "hvm": "ami-111",
      "pv": "ami-222"
    }
  ]
</pre>

The ideal way to manage this is to allow the user to edit each field separately and check if the AMIs are valid automatically, but for now we are editing it as a JSON object since the back end already checks if the data is valid.

The taskcluster tools are built with [React](https://facebook.github.io/react/) and before this project I have never built anything with it. So to start, there's no better way than compare how all the other tools are built. I knew that I needed to figure out how to list the amiSets and how to embed a code editor to be used to edit and create amiSets, so my main examples were the [Roles tool](https://tools.taskcluster.net/auth/roles/) and the text editor from [Task Creator tool](https://tools.taskcluster.net/task-creator/). The editor used in taskcluster tools is [CodeMirror,](http://codemirror.net/) a text editor built in javascript for the browser.

My first step was to build the add amiSet function - after all, without amiSets I cannot test any other endpoint. I started to see progress when apparently no errors showed up when trying to add an amiSet, but to check if it really worked I needed the listing function, then the view function. After making this work, edit and delete were the final ones. A [first version](https://github.com/taskcluster/taskcluster-tools/pull/121) is already being reviewed and hopefully it will be published soon. We still have a lot of improvements to make but it seems good enough to move forward and start to incorporate the amiSets in the AWS provisioner architecture.

Even after testing the AMI sets entity endpoints in the back end, I wasn't sure if it was really working because I could only see that it passed the tests that I have built, but I couldn't really see the amiSets (_and I must say I'm a very visual person_) but now with the tool I finally can see them, and it is grateful to see that what you're doing is working! - until it breaks something, of course.
