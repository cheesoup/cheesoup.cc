---
layout: post
title:  "Leitmotiv/Seiko 3"
thumbnail: /assets/posts/lietmotiv_seiko/thumbnail0.jpg
tags: Motion, Animation
tools: After Effects

clips:
    clip0 :
        webm : /assets/posts/lietmotiv_seiko/clip1_edit.webm
        mp4 : /assets/posts/lietmotiv_seiko/clip1_edit.mp4
    clip1 :
        webm : /assets/posts/lietmotiv_seiko/clip2_edit.webm
        mp4 : /assets/posts/lietmotiv_seiko/clip2_edit.mp4
    clip2 :
        webm : /assets/posts/lietmotiv_seiko/clip3_edit.webm
        mp4 : /assets/posts/lietmotiv_seiko/clip3_edit.mp4
    clip3 :
        webm : /assets/posts/lietmotiv_seiko/clip4_edit.webm
        mp4 : /assets/posts/lietmotiv_seiko/clip4_edit.mp4

categories: work
---
{% capture desc %}
Leitmotivs, as made famous by Richard Wagner, are musical cues which are used to identify a specific character or themes throughout a narrative. Oftentimes, leitmotivs are transformed throughout a given work to reflect the status of the character or theme they represent. They are often merged with other leitmotivs as a means of representing character interaction. For this project, I was tasked with creating a one and half minute motion graphic which could represent this idea of leitmotivs. I chose to create an animated music video for Yasuaki Shimizu’s ‘Seiko 3’. The goal I had in mind was to visually represent the song’s development and the evolution of its primary motif over time through use of illustrated flora. Unfortunately due to copyright, I cannot upload this piece with audio without the risk of strike. I apologize.
{% endcapture %}

{% include posts.header.html description=desc %}
{% include posts.video.html
webm="/assets/posts/lietmotiv_seiko/clip0_edit.webm"
mp4="/assets/posts/lietmotiv_seiko/clip0_edit.mp4"
ratio="sixteennine" %}
{% include posts.videogallery.html
clips=page.clips style="double" ratio="sixteennine" %}