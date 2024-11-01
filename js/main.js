document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.to(".sec03 .inner", {
      y: "-100%",
      scrollTrigger: {
        trigger: ".sec03",
        pin:true,
        start: "top top",
        scrub:2,
        toggleActions: "play none none none",
      },
    });
  
    gsap.to(".sec04 .inner", {
      x: `${window.innerWidth - 5000}px`,
      scrollTrigger: {
        trigger: ".sec04",
        pin:true,
        start: "top top",
        end:"500% bottom",
        scrub:5,
        toggleActions: "play none none none",
        // markers:true,
      },

    });

    let sec05_conts = document.querySelectorAll('.sec05 .cont');
    sec05_conts.forEach((cont) => {
      let img = cont.querySelectorAll('.img_wrap img');
      let li = cont.querySelectorAll('ul li');
    
      li.forEach((li, idx) => {
        li.addEventListener('mouseenter', () => {
          img.forEach((img) => {
            img.classList.remove('active');
          });
          img[idx].classList.add('active');
        });
      });
    });

    var sec06Swiper = new Swiper(".sec06 .swiper", {
      slidesPerView:2.5,
      spaceBetween:16,
    });

    var sec07Swiper = new Swiper(".sec07 .swiper", {
      // slidesPerView:'auto',
      slidesPerView:3.9,
      spaceBetween:124,
      slidesOffsetBefore:263,
      slidesOffsetAfter:263,
      navigation: {
        nextEl: ".sec07 .next",
        prevEl: ".sec07 .prev",
      },
    });



  });
