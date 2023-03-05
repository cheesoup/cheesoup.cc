---
layout: post
title:  "A Tribute to Napster"
thumbnail: /assets/posts/tribute_to_napster/thumbnail.jpg
tags: Print, Illustration, Album Art
tools: InDesign, Illustrator

categories: work
---

{% capture desc %}
For this project, I was tasked to create a triptych representing a significant event in history. The event I chose to represent was the death of Napster, the original online file sharing network. To the music industry, Napster was historic as it marked the beginning of the end for music CDs and the market of physical music as a whole. It's only recently that vinyl has gained traction as the dominant physical medium once again. Despite vinyl's resurgence however, it's still no match for the might of online music. In a way, I was trying to be ironic by making a a vinyl record about music piracy. Through this piece, I attempt to explore the demise of Napster in three key steps: the period of free music (left), the following lawsuits (middle), and the resulting bankruptcy (right).
{% endcapture %}

{% capture images0 %}
/assets/posts/tribute_to_napster/photo0.jpg,
/assets/posts/tribute_to_napster/photo1.jpg
{% endcapture %}

{% capture images1 %}
/assets/posts/tribute_to_napster/left.png,
/assets/posts/tribute_to_napster/right.png
{% endcapture %}

{% include posts.header.html description=desc %}
{% include posts.thumbnails.html
alt="Napster Record Front & Back" src=images0 style="double" ratio="fourthree" %}
{% include posts.thumbnails.html
alt="Napster Record Spread"
src="/assets/posts/tribute_to_napster/thumbnail.jpg" ratio="sixteennine" %}
{% include posts.thumbnails.html
alt="Napster Record Digital Panels" src=images1 style="double" ratio="square" %}
{% include posts.thumbnails.html
alt="Iconography" src="/assets/posts/tribute_to_napster/icons.png" ratio="sixteennine" %}