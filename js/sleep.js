var sec07Swiper = new Swiper(".sec07 .swiper", {
    slidesPerView:'2',
    slidesPerView:1,
    spaceBetween:10,
    centerMode:true,
    // slidesOffsetBefore:16,
    // slidesOffsetAfter:16,
    navigation: {
        nextEl: ".sec07 .nb",
        prevEl: ".sec07 .pb",
    },
    initialSlide:1
});

var sec11Swiper = new Swiper(".sec11 .swiper", {
    slidesPerView:'1',
    slidesPerView:1,
    spaceBetween:40,
    breakpoints : {
        880 : {
            spaceBetween:16,
        }
    },
    // slidesOffsetBefore:16,
    // slidesOffsetAfter:16,
    navigation: {
        nextEl: ".sec11 .next",
        prevEl: ".sec11 .prev",
    },
    initialSlide:1
});

var stepSwiper = new Swiper(".step-swiper", {
    slidesPerView: 'auto',      // 자동 슬라이드 크기 설정
    spaceBetween: 16,           // 슬라이드 간의 간격
    slidesOffsetBefore:16,
    slidesOffsetAfter:16,
    breakpoints: {
      // when window width is >= 932px
      932: {
        slidesPerView: 'auto',      // 자동 슬라이드 크기 설정
        spaceBetween: 20,           // 슬라이드 간의 간격
        centeredSlides: true,       // 가운데 정렬
        loop: true,                 // 루프 활성화
        // autoplay:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
    }
  });
