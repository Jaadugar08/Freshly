var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 5000, // 5 seconds delay between slides
        disableOnInteraction: false, // Enable navigation during autoplay
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
