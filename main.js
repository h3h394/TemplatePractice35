$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 30) {
        $("nav").css({ "box-shadow": "0px 2px 8px 0px rgba(50, 50, 50, 0.08)", "padding": "10px 0" });
    }
    else {
        $("nav").css({ "box-shadow": "none", "padding": "34px 0" });
    }
});


$('.menu a').on('click', function () {
    $('.menu .active').removeClass('active');
    $(this).addClass('active');
});


$('a[href*="#"]').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate(
        {
            scrollTop: $($(this).attr('href')).offset().top,
        },
        900,
        'linear'
    )
});

let menu = document.querySelector('.menu');
document.getElementById('burger').addEventListener('click', function () {
    menu.classList.toggle('hide');
});

let menuLinks = document.querySelectorAll('.menu a');

menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.toggle('hide');
    });
});