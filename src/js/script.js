document.querySelector(".gamburger").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("body").classList.toggle("menu_open");
});


// slider
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000
    });
});