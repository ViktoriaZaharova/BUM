$('[name="phone"]').mask('+7 (999) 999-99-99');

$('.reviews-slider').slick({
    slidesToShow: 6,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.completed-projects-slider').slick({
    slidesToShow: 3,
    centerMode: true,
    variableWidth: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                centerMode: false,
                variableWidth: false,
            }
        }
    ]
});

$('.product-preview').slick({
    slidesToShow: 3,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.product-max'
});

$('.product-max').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
});

$('.btn-burger').on('click', function (e) {
    e.preventDefault();
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

// активная ссылка меню
$('.sidebar-menu li a').each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location === link) {
        $(this).addClass('active');
    }
});
// end

$('.btn-sidebar').on('click', function (e) {
    e.preventDefault();
    $('.sidebar').fadeToggle();
});

$('.btn-close-sidebar').on('click', function (e) {
    e.preventDefault();
    $('.sidebar').fadeOut();
});

new WOW().init();