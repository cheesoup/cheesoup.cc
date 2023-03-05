---
layout: post
title:  "In C Machine (WIP)"
thumbnail: /assets/posts/in_c/thumbnail.png
tags: Motion, Web Design/Development, Sound Design, Interactive Installation
tools: Bela/C++, HTML5/CSS3, NodeJS, Various JavaScript libraries

categories: work
---

{% capture desc %}
The In C Machine is a local area network based web application that I am currently developing for my own leisure. It was originally planned for OCADU’s GradEX. It is based around Terry Riley’s minimalist composition/musical game ‘In C’, a classical piece in which an arbitrary number of players play through 53 looping phrases. After each repetition of a phrase, a player can decide whether they want to move onto the next phrase or stay on the current phrase and loop again. This results in huge wash harmony that all revolves around the tonal center of C. My goal for this project is to create a machine which would allow non-musicians to connect and play through this musical game together. To accomplish this, I built an entire web application from the ground up using a Bela which acted as a multi voice synthesizer and sequencer built specifically to play Terry Riley’s In C. Users could then access this backend by connecting to a WIFI router and going to a specified address in their browser. Currently, I’m trying to migrate this project onto better hardware.
{% endcapture %}

{% capture images %}
/assets/posts/in_c/photo0.jpg,
/assets/posts/in_c/photo1.jpg
{% endcapture %}

{% include posts.header.html description=desc %}
{% include posts.video.html
webm="/assets/posts/in_c/in_c_cut_edit.webm"
mp4="/assets/posts/in_c/in_c_cut_edit.mp4"
ratio="sixteennine" %}
{% include posts.thumbnails.html
alt="In C Machine" src=images style="double" %}
{% include posts.thumbnails.html
alt="In C Machine" src="/assets/posts/in_c/photo2.jpg" ratio="sixteennine" %}