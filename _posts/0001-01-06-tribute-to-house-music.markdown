---
layout: post
title:  "A Tribute to House Music"
thumbnail: /assets/posts/tribute_to_house_music/thumbnail.jpg
tags: Print, Poster, Publication
tools: InDesign

categories: work
---

{% capture desc %}
This project was primarily inspired by Midtown 180 Blues, an album by Terre Thaemlitz (aka DJ Sprinkles) which offers discourse about the gentrification of house and garage music and the resulting disconnection from its LGBTQ origins. My goal was to provide a map to explore the influence that led to both house and garage music and the influence both music scenes have had since. While doing so, I wanted to keep the queerness of house music front and center. In doing so, I hoped to send the message that all electronic dance music is indebted to the LGBTQ struggles of the 80s-90s. Each genre listed above are contemporaries and are represented with analogous typefaces. In contrast, the genres listed below were influenced by those above. The booklet features an article originally written by Sydney Grant offering insight into the culture revolving the early club scenes as well as information about how the poster is laid out.
{% endcapture %}

{% capture images %}
/assets/posts/tribute_to_house_music/booklet0.jpg,
/assets/posts/tribute_to_house_music/booklet1.jpg,
/assets/posts/tribute_to_house_music/booklet3.jpg,
/assets/posts/tribute_to_house_music/booklet5.jpg
{% endcapture %}

{% include posts.header.html description=desc %}
{% include posts.thumbnails.html
alt="House Music Poster" src="/assets/posts/tribute_to_house_music/thumbnail.jpg" ratio="sixteennine" %}
{% include posts.thumbnails.html
alt="House Music Booklet" src=images style="double" ratio="sixteennine" %}