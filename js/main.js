$(document).ready(function () {

    $("nav a, .leaverequest, .scrolllink").on("click", function (e) {
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

    // if ($('.burger2').length) {
    //     (function () {
    //         var burger2;
    //         burger2 = document.querySelector(".burger2");
    //         burger2.addEventListener("click", function () {
    //             return burger2.classList.toggle("on");
    //         });

    //     }).call(this);
    // }

    // $('.burger').click(function () {
    //     $('header.header').toggleClass('show');
    //     $('body').toggleClass('hidden');
    // })


    // const header = document.querySelector('header');
    // if (!header) return;
    // if (header.querySelector('.overlay')) return;
    // const overlay = document.createElement('div');
    // overlay.className = 'overlay';
    // header.appendChild(overlay);

    // $('.overlay').on('click', function () {
    //     $('header.header').removeClass('show');
    //     $('body').removeClass('hidden');
    //     $('.burger').removeClass('on');
    // })

})