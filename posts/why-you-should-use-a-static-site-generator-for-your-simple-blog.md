---
title: Why you should use a static site generator for your simple blog.
date: 2020-07-28T20:26:10.976Z
heroImage: /static/img/robot-production-line.jpg
author: Shane Chambry
subtitle: Even if you're not a developer
tags:
  - post
  - tools
  - tips
  - opinion
---
<p>Static site generators are a relatively new idea and there are many tools to choose from in this space, but the general idea is this: if you don't have extremely dynamic data, why use server-side templating? Proponents of SSGs are not arguing to hardcode your entire site - just that you *generate* the pages from your data ahead of time and serve it static. Advantages? No custom server, faster page loads, free hosting, and more. I was not completely convinced at first, as there are some cheap or free-to-start hosting options out there (see AWS lambda and Heroku), but given some options for pseudo-dynamic functionality, my interest was piqued for at least one case: that of a blog.</p>

<h2>I AM SPEED</h2>

<p>I just finished transitioning this blog from a hosted site with server-side templating using handlebars. The main issue is that heroku dynos go to sleep after 30 minutes of inactivity. Upon loading the page for the first time, a user will normally have to wait for the dyno to start for up to 30 seconds. I don't know about you, but I would assume that any normal website was down under those curcumstances. With a static site generator, not only do you not need a server, but you don't have to wait for your templates to generate, so page loads are snappy AF.</p>

<h2>Choices, choices</h2>

<p>In the space of static site generators, there are so many options that a developer won't know which direction to go at first. I could try to tell you how to pick one, but [it's been done](https://snipcart.com/blog/choose-best-static-site-generator). It suffices to say that they range from simple and clean to robust and full featured. I went with 11ty (Eleventy) because it is very simple, allows for flexiblity, works with templating engines I'm already used to, and has community templates for a variety of hosting, CMS, and template engine strategies. I was able to port my whole site over in a few nights.</p>

<h2>What about a CMS?</h2>

<p>Even for a simple blog, there is one feature you need that is traditionally dynamic, which is a CMS, or content management system. Most CMS options provide authentication, storage, and permissions, at least. For me, and I'd argue any single blogger, does not need these features. If you're a proficient coder, just store your posts in your repo! There are other options, though, like netlify CMS, which also stores your posts (or any template data) in your repo but with a canned UI that makes the experience of blogging feel complete.</p>

<h2>But, I'm not a dev, I need wordpress or wix</h2>

<p>Enter Publii, a desktop application with a CMS that lives on your desktop! This is pretty much free advertisement for them, but I think their tool is really great. While developers will find it restricting, non-devs can create a simple blog with SEO and other options built-in from a template very quickly. The cost of maintaining such a site would boil down to just the cost of the domain name!