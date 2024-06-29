let scrollTop = $(window).scrollTop();

$(window).scroll(function(evt) {
    scrollTop = $(this).scrollTop();
});

$(document).ready(function() {
	// анимация меню
	$('.menu').click(function(e){
        e.preventDefault();
        (this.parentElement.classList.contains('active') === true) ? this.parentElement.classList.remove('active') : this.parentElement.classList.add('active');
        (this.classList.contains('active') === true) ? this.classList.remove('active') : this.classList.add('active');

        $('.header').toggleClass('active');
        $('body').on('click', function (e) {
            let div = $('.menu-links-wrapper, .menu');

            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.header, .menu').removeClass('active');
            }
        });
    });

    // якоря для ссылок
    $('.anchor[href^="#"]').click(function () {
        $('.header').removeClass('active'); 
       	$('.menu').removeClass('active');

        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top-150;
        $('html, body').animate( { scrollTop: destination }, 500, 'swing' );
        return false;
    });

    $('.submenu-links').closest('.menu-link').addClass('have-submenu');

    // подменю десктоп
    $('.menu-link.have-submenu').on('mouseover', function() {
        $(this).children('.submenu-links').addClass('active');
    });
    $('.menu-link.have-submenu').on('mouseleave', function() {
        $(this).children('.submenu-links').removeClass('active');
    });

    // аккордеон
    function openAccordion() {
        let wrap = $('.accordion-wrap');
        let accordion = wrap.find('.accordion-title');

        accordion.on('click', function () {
            let $this = $(this);
            let $parent = $(this).parent();
            let wrapper = $(this).parents('.accordion-wrap');
            let content = $this.next();

            if (content.is(':visible')) {
                if(wrapper.hasClass('single-accordion')) {
                    wrapper.children().find('.accordion-title').removeClass('active');
                    wrapper.children().find('.accordion-title').next().slideUp('fast');
                }
                $this.removeClass('active');
                $parent.removeClass('active');
                content.slideUp('fast');
            } else {
                if(wrapper.hasClass('single-accordion')) {
                    wrapper.children().find('.accordion-title').removeClass('active');
                    wrapper.children().find('.accordion-title').next().slideUp('fast');
                }
                $this.addClass('active');
                $parent.addClass('active');
                content.slideDown('fast');
            }

        });
    }
    openAccordion();

    // слайдеры
    let galery_slider = $('.galery-slider');
    if(galery_slider.length){
        galery_slider.owlCarousel({
            center: false,
            items: 4,
            loop: false,
            nav: true,
            dots: false,
            margin: 30,
            mouseDrag: false,
            touchDrag: true,
            navSpeed: 1300,
            responsive: {
                0: {
                    items: 2,
                    margin: 10,
                },
                481: {
                    items: 4,
                }
            }
        });
    }

    let partners_slider = $('.partners');
    if(partners_slider.length && $(window).innerWidth() <= 480){
        partners_slider.owlCarousel({
            center: false,
            items: 4,
            loop: false,
            nav: true,
            dots: false,
            margin: 10,
            mouseDrag: false,
            touchDrag: true,
            navSpeed: 1300,
            responsive: {
                0: {
                    items: 2,
                },
                481: {
                    items: 4,
                }
            }
        });
    }

    // открытие модалок
    $('body').on('click','.js-open-modal', function(e){
        e.preventDefault();
        let id = $(this).attr('href');
        $.fancybox.open({
            src: id,
            type: 'inline',
			touch: false
        });
    });

    // маски
    if ($('.phone-mask').length) {
        $('.phone-mask').inputmask({
            mask: "+79999999999",
            "clearIncomplete": true
        });
    }

});