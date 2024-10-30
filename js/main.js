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
      x: "-100%",
      scrollTrigger: {
        trigger: ".sec04",
        pin:true,
        start: "top top",
        scrub:2,
        toggleActions: "play none none none",
      },
    });



  });
