$('.Banner_slider').slick({
    arrows: false,
    dots: true,
});

$('.Reviews_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: `<i class="fa-solid fa-angle-left leftArrow"></i>`,
    nextArrow: `<i class="fa-solid fa-angle-right rightArrow"></i>`,
    centerMode: true,
    centerPadding: '0',
});