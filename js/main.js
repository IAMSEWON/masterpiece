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

    let sec05Moconts = document.querySelectorAll('.sec05_mo .cont');
    sec05Moconts.forEach((cont) => {
      let imgs = cont.querySelectorAll('.img_wrap img');
      let li = cont.querySelectorAll('ul li');
    
      li.forEach((li, idx,arr) => {
        li.addEventListener('click', () => {
          imgs.forEach((img) => {
            img.classList.remove('active');
          });
          arr.forEach((el) => {
            el.classList.remove('active');
          });
          li.classList.add('active');
          imgs[idx].classList.add('active');
        });
      });
    });

    var sec06Swiper = new Swiper(".sec06 .swiper", {
      centeredSlides: true,
      spaceBetween:9,
      initialSlide: 2,
      breakpoints: {
        880: {
          centeredSlides: false,
          initialSlide: 0,
          slidesPerView:1.5,
          spaceBetween:16,
        },
        1400: {
          centeredSlides: false,
          initialSlide: 0,
          slidesPerView:2.5,
          spaceBetween:16,
        }
      },
 
    });

    var sec07Swiper = new Swiper(".sec07 .swiper", {
      // slidesPerView:'auto',
      slidesPerView:1.4,
      spaceBetween:16,
      slidesOffsetBefore:34,
      slidesOffsetAfter:34,
      breakpoints: {
        880: {
          slidesPerView:3,
          spaceBetween:80,
          slidesOffsetBefore:263,
          slidesOffsetAfter:263,
        },
        1300: {
          slidesPerView:3.9,
          spaceBetween:124,
          slidesOffsetBefore:263,
          slidesOffsetAfter:263,
        }
      },
      navigation: {
        nextEl: ".sec07 .next",
        prevEl: ".sec07 .prev",
      },
    });

    var sec04MoSwiper = new Swiper(".sec04_mo .swiper", {
      // slidesPerView:'auto',
      slidesPerView:1.17,
      spaceBetween:12,
      slidesOffsetBefore:16,
      slidesOffsetAfter:16,
      navigation: {
        nextEl: ".sec07 .next",
        prevEl: ".sec07 .prev",
      },
    });



  });
