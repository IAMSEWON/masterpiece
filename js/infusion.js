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
