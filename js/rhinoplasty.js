var stepSwiper = new Swiper(".step-swiper", {
  slidesPerView: "auto", // 자동 슬라이드 크기 설정
  spaceBetween: 16, // 슬라이드 간의 간격
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,
  breakpoints: {
    // when window width is >= 932px
    932: {
      slidesPerView: "auto", // 자동 슬라이드 크기 설정
      spaceBetween: 20, // 슬라이드 간의 간격
      centeredSlides: true, // 가운데 정렬
      loop: true, // 루프 활성화
      // autoplay:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});
