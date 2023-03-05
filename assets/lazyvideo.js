document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));

    if ("IntersectionObserver" in window) {
        var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(video) {
            if (video.isIntersecting) {
                for (var source in video.target.children) {
                    var videoSource = video.target.children[source];
                    if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                        videoSource.src = videoSource.dataset.src;
                    }
                }
                if(window.mobileCheck()) {
                    video.target.setAttribute("controls", "true");
                    video.target.setAttribute("muted", "false");
                }
                video.target.load();
                video.target.play();
                video.target.classList.remove("lazy");
                lazyVideoObserver.unobserve(video.target);
            }
            });
        });

        lazyVideos.forEach(function(lazyVideo) {
            lazyVideoObserver.observe(lazyVideo);
        });
    }
});