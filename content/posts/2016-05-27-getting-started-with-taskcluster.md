---
title: "Getting started with TaskCluster"
slug: getting-started-with-taskcluster
date: 2016-05-27 14:30:43
author: anarute
tags: ["outreachy", "FOSS", "taskcluster", "Mozilla"]
fullscreen: false
---

This was my first week working for Mozilla as an [Outreachy](https://gnome.org/outreachy/) intern. The first challenge was to understand Mozilla's culture and how to fit in. We had some meetings about how the program works and to get updates about TaskCluster, the project I'll be working at for the next 3 months. Mozilla has an awesome structure to receive new employees and I felt very welcomed, but that also means a lot of information to process and organize, which includes how to communicate with a fully remote team, setting up accounts, organizing meetings schedule, entering email lists, using Mozilla tools, joining IRC channels, etc.

After organizing all these new information, it is time to dive into TaskCluster! From [Taskcluster documentation](https://docs.taskcluster.net/) we can read:

> _TaskCluster_ is the task execution framework that supports Mozilla's continuous integration and release processes.

For me it took a while to understand what TaskCluster is and what it is used for, but the process of understanding it is giving me a lot of "ah-ha" moments, which is a great feeling that shows me that I'm already learning a lot. For those who want to learn more, [this page](https://docs.taskcluster.net/tutorial/what-is-tc) says a bit more about TaskCluster.

**My job at TaskCluster:** add robust AMI management to the TaskCluster AWS Provisioner. More details on bug [#1265390](https://bugzilla.mozilla.org/show_bug.cgi?id=1265390).

**My first task:** create AmiSet entity.

Before I'm able to code anything, I have a bunch of things to do and to understand - the first one is to control the anxiety of wanting to start to code right away...

I started by understanding the scope and all the parts involved. So a small glossary was very helpful for me:

- [AMI](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html): "An Amazon Machine Image (AMI) provides the information required to launch an instance, which is a virtual server in the cloud."
- [AWS](https://aws.amazon.com/): Amazon Web Services. A suite of cloud computing services offered by Amazon. Its [website](https://aws.amazon.com/start-now/) brings a bunch of useful tutorials.
- [AWS provisioner](https://github.com/taskcluster/aws-provisioner): "it is responsible for starting Amazon EC2 instances to perform tasks in the TaskCluster queue. It monitors queue lengths and uses spot bidding to maximize the cost-effectiveness of its resources."
- Azure Table Storage: Microsoft Azure Table storage service.
- [EC2](https://aws.amazon.com/ec2/): Amazon Elastic Compute Cloud. "It's a web service that provides resizable compute capacity in the cloud".
- Entity: in Azure context, "Tables store data as collections of entities. Entities are similar to rows. An entity has a primary key and a set of properties. A property is a name, typed-value pair, similar to a column." TaskCluster team has built a wrapper that is used in the project: [Azure Table Storage Entities](https://github.com/taskcluster/azure-entities).
- AMI Set: "An AMI Set is a collection of AMIs with a single name (its AMI Set ID). Each AMI in the set is keyed by its virtualization type ([PV or HVM](http://cloudacademy.com/blog/aws-ami-hvm-vs-pv-paravirtual-amazon/)) and by its AWS region."

Now that everything is much clearer, let's create AmiSet entity :) - uptades next week!
