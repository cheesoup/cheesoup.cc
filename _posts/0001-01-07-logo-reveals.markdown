---
layout: post
title:  "'2C' Logo Reveals"
thumbnail: /assets/posts/logo_reveals/thumbnail.png
tags: Motion, Branding, Sound Design
tools: After Effects, Max 8, Processing

clips:
    reveal0 :
        webm : /assets/posts/logo_reveals/reveal0.webm
        mp4 : /assets/posts/logo_reveals/reveal0.mp4
    reveal1 :
        webm : /assets/posts/logo_reveals/reveal1.webm
        mp4 : /assets/posts/logo_reveals/reveal1.mp4

categories: work
---

{% capture desc %}
2C is a fictional experimental techno artist loosely based on myself which I came up with for this project. Rather than a traditional musician, 2C fancies themselves to be a “computer music designer”. Their primary inspirations for music are the worlds programming, pure mathematics, computer engineering, and digital futurism. These inspirations are pulled from IDM artists such as Aphex Twin, Squarepusher, and U-ziq. In order to express this obsession with the digital, I opted for a logo which took inspiration from early bitmap fonts. The first reveal focuses more on sharp movements and grid animation to accentuate the digital feel of the logo. The second reveal takes a bit more of a different approach, opting for a depthcore-inspired glitch college to further emphasize the computer-ness of it all.
{% endcapture %}

{% include posts.header.html description=desc %}

{% include posts.videogallery.html
clips=page.clips style="double" ratio="square"
%}

{% include posts.thumbnails.html
src="/assets/posts/logo_reveals/logovariations.png" alt="2C Alternate Logos" ratio="sixteennine"
%}

{% include posts.thumbnails.html
src="/assets/posts/logo_reveals/styleboard0.jpg, /assets/posts/logo_reveals/styleboard1.jpg"
alt="2C Logo Reveal Styleboards" style="double" ratio="fourthree"
%}