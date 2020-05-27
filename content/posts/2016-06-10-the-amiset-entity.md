---
title: "The AmiSet Entity"
slug: the-amiset-entity
date: 2016-06-10 14:30:43
author: anarute
tags: ["outreachy", "FOSS", "taskcluster", "Mozilla"]
fullscreen: false
---

Taskcluster is a complex and big project and I'm working on a specific part of it: where we manage the Amazon instances and Machine Images (AMIs). As I've mentioned in my [last post](http://anarute.com/getting-started-with-taskcluster/), my job here starts by creating a new database entity called AMI set, which stores sets of AMIs keyed by region and virtualization type.

My work during the last two weeks were to understand how the AWS provisioner project is organized and how to create a new entity. Since I was creating something I knew nothing about, start coding seems to be the hardest part because I have no references of things I've done before and I need to learn basically everything. A good advice for newbies would be to chop everything into the smallest parts we can (I think this fits for almost every job and area).

I took the Worker Type entity as my starting point as suggested by [Dustin](http://code.v.igoro.us/) - my mentor - and wrote the AMI Set entity definition by checking what I could replicate from WorkerType and discarding what didn't make sense. Which ended up with this basic definition:

<pre>let AmiSet = base.Entity.configure({

properties: {
    id: base.Entity.types.String,
    amis: base.Entity.types.JSON,
    // Store the date of last modification for this entity
    lastModified: base.Entity.types.Date,
  },
});
</pre>

This is a very simple entity and its core part is the `amis` property, which needs to store the AMIs by region and virtualization type. The thing is, since it is a "generic" JSON object we need to decide how the object will be. We have mainly two options:

<pre>{
   "us-west-1": {
      "hvm": "ami-111",
      "pv": "ami-222"
  },
   "us-east-1": {
      "hvm": "ami-111",
      "pv": "ami-222"
  }
}
</pre>

Or

<pre>[
   {
      "region": "us-west-1",
      "hvm": "ami-111",
      "pv": "ami-222"
   },
   {
      "region": "us-east-1",
      "hvm": "ami-111",
      "pv": "ami-222"
   }
]
</pre>

As [@jhford pointed and @djmitche agrees](https://github.com/taskcluster/aws-provisioner/pull/85#discussion-diff-66091884):

> Whether we have a list of objects or a straight mapping is something that you'll have to pick. A list of objects is really nice because you can do really neat things with `Array.prototype.map` and `Array.prototype.filter`. A mapping is really nice because it's easier to address the values and it is impossible to have duplicates. Error checking with the object will be easier, but the list of objects is more in line with what we do elsewhere in the provisioner and probably what I'd prefer to see.

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype) we can see more methods that we can do with `Array.prototype`. As explained above, probably we'll go with the list of objects option.

After creating the entity I started adding its create and delete endpoints. The hardest part this time was to understand the functions and specially if I was dealing with instances, classes or properties.

The thing that made me learn the most were [the comments](https://github.com/taskcluster/aws-provisioner/pull/85) Dustin and John made in my Pull Request. It is really helpful to know the things you are doing right or wrong and to know where to go from there. So an important advice here is to start sending patches as soon as possible and don't fear making mistakes - they will happen anyway and we can only learn from them.
