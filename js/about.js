// About page — all interactivity handled by shared script.js
document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.getElementById("lvlAboutGallery");
  const slides = gallery.getElementsByClassName("gallery-item");
  let currentIndex = 0;
  let slideTimeout;
  let isUserInteracting = false;
  let interactionTimer;

  function initGallery() {
    if (slides.length === 0) return;
    playSlide(0);

    // Track when user manually swipes to update indices and handle loops gracefully
    gallery.addEventListener('scroll', () => {
      if (isUserInteracting) {
        const slideWidth = gallery.clientWidth;
        const newIndex = Math.round(gallery.scrollLeft / slideWidth);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < slides.length) {
          currentIndex = newIndex;
          // Play current video if swiped manually into a video block
          const currentSlide = slides[currentIndex];
          if (currentSlide.getAttribute("data-type") === "video") {
            const video = currentSlide.querySelector("video");
            if (video && video.paused) {
              video.play().catch(() => {});
            }
          }
        }
      }
    });

    // Detect touch inputs to temporarily halt automation mechanics
    gallery.addEventListener('touchstart', userInteractionTrigger, {passive: true});
    gallery.addEventListener('mousedown', userInteractionTrigger);
  }

  function userInteractionTrigger() {
    isUserInteracting = true;
    clearTimeout(slideTimeout);
    clearTimeout(interactionTimer);

    // If user drops interaction, wait 6 seconds before turning auto loop back engine on
    interactionTimer = setTimeout(() => {
      isUserInteracting = false;
      playSlide(currentIndex);
    }, 6000);
  }

  function playSlide(index) {
    if (isUserInteracting) return;
    currentIndex = index;
    
    gallery.scrollTo({
      left: slides[index].offsetLeft,
      behavior: 'smooth'
    });

    clearTimeout(slideTimeout);

    const currentSlide = slides[index];
    const type = currentSlide.getAttribute("data-type");

    // Manage engine tracks
    Array.from(slides).forEach(slide => {
      const vid = slide.querySelector("video");
      if (vid) {
        vid.pause();
        vid.currentTime = 0;
      }
    });

    if (type === "video") {
      const video = currentSlide.querySelector("video");
      if (video) {
        let playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            video.onended = function() {
              if (!isUserInteracting) nextSlide();
            };
          }).catch(() => {
            slideTimeout = setTimeout(nextSlide, 3000);
          });
        }
      } else {
        slideTimeout = setTimeout(nextSlide, 3000);
      }
    } else {
      slideTimeout = setTimeout(nextSlide, 3000);
    }
  }

  function nextSlide() {
    if (isUserInteracting) return;
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) {
      nextIndex = 0;
    }
    playSlide(nextIndex);
  }

  setTimeout(initGallery, 500);
});
