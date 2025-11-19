$(document).ready(function () {
    // var swiper = new Swiper(".mySwiper", {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    // });
    $("nav a, .leaverequest").on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 777);
        e.preventDefault();
        return false;
    });

    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 10) {
            $('.header').addClass('scroll');
        } else {
            $('.header').removeClass('scroll');
        }
    });

})