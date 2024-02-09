var h = $('.main').height();
var level = 0;
var menuDown = false;

$(document).ready(() => {
    $('.headerDiv').css({ display: 'none' });
    $(document).scrollTop(0);
    $('.block').css({ height: $('.height_').height() })
});

$(window).on('scroll', () => {
    if ($(window).scrollTop() > 0) {
        $('.headerDiv').css({ display: 'block' });
        $('.top').css({ 'animation': 'opacity_on 0.5s forwards' });
    } else {
        $('.headerDiv').css({ display: 'none' });
        $('.top').css({ 'animation': 'opacity_none 0.5s forwards' });
    }
});

$(window).on('resize', () => {
    h = $('.main').height();
    $('html').stop().animate({ scrollTop: h * level });
    $('.block').css({ height: $('.height_').height() })
});

$('header img').click(() => {
    $('html').stop().animate({ scrollTop: 0 });
    level = 0;
    if (menuDown) {
        $('.mobileMenu').stop().slideUp(() => {
            $('.mobile i').css({ animation: 'rotate 0s reverse forwards' });
        });
        $('.mobileMenuBlinder').stop().animate({ opacity: 0 }, () => {
            $('.mobileMenuBlinder').css({ display: 'none' })
        });
        menuDown = false
    }
});

$('.top').click(() => {
    $('html').stop().animate({ scrollTop: 0 });
    level = 0;
    if (menuDown) {
        $('.mobileMenu').stop().slideUp(() => {
            $('.mobile i').css({ animation: 'rotate 0s reverse forwards' });
        });
        $('.mobileMenuBlinder').stop().animate({ opacity: 0 }, () => {
            $('.mobileMenuBlinder').css({ display: 'none' })
        });
        menuDown = false
    }
});

$('.mainMenu').children().each((index, element) => {
    $(element).click(() => {
        $('html').stop().animate({ scrollTop: h * (index + 1) });
        level = index + 1;
    });
});

$('.footer_menu').children().each((i, e) => {
    $(e).click(() => {
        console.log(i)
        $('html').stop().animate({ scrollTop: h * i });
        level = i;
    })
})

$('.mobileUlMenu').children().each((index, element) => {
    $(element).click(() => {
        $('html').stop().animate({ scrollTop: h * (index + 1) });
        level = index + 1;

        $('.mobileMenu').stop().slideUp(() => {
            $('.mobile i').css({ animation: 'rotate 0s reverse forwards' });
        });
        $('.mobileMenuBlinder').stop().animate({ opacity: 0 }, () => {
            $('.mobileMenuBlinder').css({ display: 'none' })
        });
        menuDown = false;
    });
});

$('.thumbnails').children().each((index, e) => {
    $(e).click(() => {
        if (e.classList.length == 2) {
            $('.img').addClass('filter');
            $(e).removeClass('filter');
            if (!($('.before').hasClass('display'))) {
                $('.before').addClass('display')
                $('.la_main_image').removeClass('display')
                $('.before').attr('src', $(e).children()[0].src)
                $('.la_main_image').stop().animate({ opacity: 0 })
                $('.before').stop().animate({ opacity: 1 })
            } else {
                $('.before').removeClass('display')
                $('.la_main_image').addClass('display')
                $('.la_main_image').attr('src', $(e).children()[0].src)
                $('.before').stop().animate({ opacity: 0 })
                $('.la_main_image').stop().animate({ opacity: 1 })
            }
        } else {

        }
    })
})

$('.mobileOnly').children().each((i, e) => {
    $(e).click(() => {
        if (e.classList.length == 1) {
            $('.mobileOnly').children().css({
                'font-weight': '600',
                'border-bottom': '0'
            })
            $(e).css({
                'font-weight': '800',
                'border-bottom': '2px solid #1c2c59'
            })
            $('.mobileOnly').children().removeClass('on')
            $(e).addClass('on')
            if (i == 0) {
                $('.time').stop().animate({ opacity: 0 }, 200, () => {
                    $('.map').stop().animate( { opacity: 1 }, 200)
                })
            } else {
                $('.map').stop().animate({ opacity: 0 }, 200, () => {
                    $('.time').stop().animate( { opacity: 1 }, 200)
                })
            }
        } else {

        }
    })
})

$('.mobile i').click(() => {
    if (menuDown === false) {
        $('.mobileMenu').stop().slideDown(() => {
            $('.mobile i').css({ animation: 'rotate 0s forwards' });
        });
        $('.mobileMenuBlinder').css({ display: 'block' })
        $('.mobileMenuBlinder').stop().animate({ opacity: 0.6 });
        menuDown = true
    } else {
        $('.mobileMenu').stop().slideUp(() => {
            $('.mobile i').css({ animation: 'rotate 0s reverse forwards' });
        });
        $('.mobileMenuBlinder').stop().animate({ opacity: 0 }, () => {
            $('.mobileMenuBlinder').css({ display: 'none' })
        });
        menuDown = false
    }
});

$('.mobileMenuBlinder').click(() => {
    $('.mobileMenu').stop().slideUp(() => {
        $('.mobile i').css({ animation: 'rotate 0s reverse forwards' });
    });
    $('.mobileMenuBlinder').stop().animate({ opacity: 0 }, () => {
        $('.mobileMenuBlinder').css({ display: 'none' })
    });
    menuDown = false
})