const lightbox = document.createElement('object')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const slides = document.querySelectorAll("img.thumbnail")
slides.forEach(slide => {
    slide.addEventListener('click', e => {
        const img = document.createElement('img')
        
        lightbox.classList.add('active')
        img.src = slide.src
        lightbox.appendChild(img)
    })
})

const clips = document.querySelectorAll("video.clip")
clips.forEach(clip => {
    const anchor = clip.parentNode    
    anchor.addEventListener('click', e => {
        const video = document.createElement('video')
        const source = document.createElement('source')  
        
        lightbox.classList.add('active')      
        video.controls = true;
        video.autoplay = true;        
        source.src = clip.firstElementChild.src
        source.type  = "video/webm"
        
        video.appendChild(source)
        lightbox.appendChild(video)        
    })
})

lightbox.addEventListener('click', e => {
    lightbox.classList.remove('active');
    if(lightbox.firstChild) lightbox.removeChild(lightbox.firstChild)
})