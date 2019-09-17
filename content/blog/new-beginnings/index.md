---
title: Feathers JS
date: "2019-08-17T22:40:32.169Z"
description: My experiments with Feathers JS.
---

# FeathersJs First Impression

Last day I came across, feathersjs which claims to speed up development exponentially. I spent a while setting up the application. The core idea is that we write services, which are can be automagically connected to create restend-points / socketio / primusjs or all three.

After spending a while on the project, I started feeling that feathersjs is an opinionated framework just like django where a lot of decisions are already made for us. We write services which lets us create crud applications. Hooks allows us to change the behaviour during runtime. 

A hook function is a function that takes the hook context as the parameter and returns that context or nothing. Hook functions run in the order they are registered and will only continue to the next once the current hook function completes.

I will be writing more about my experiments in the coming days ( if I continue working on the project. )

You can read more about the project here.

[Feathers](https://docs.feathersjs.com/guides/)

[Runnable code with instructions](https://github.com/ahumblenerd/feathersjs-experiments)