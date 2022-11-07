let tabsBtn = document.querySelectorAll('.guests__item-btn');
let tabsItem = document.querySelectorAll('.tabs-item');
let closed = document.querySelector('.burger__closed');
let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let down = document.querySelector('.nav__down');
let menuLinks = document.querySelectorAll('.header__nav-link');
const element = document.querySelector('.selector');
const choices = new Choices(element, {
    searchEnabled: false
});



burger.addEventListener('click',
    function() {

        burger.classList.toggle('burger--active');

        menu.classList.toggle('nav--active');
        down.classList.toggle('nav__down--active');
        document.querySelector('.burger__closed').classList.toggle('is-active');

        document.body.classList.toggle('stop-scroll');


    });
closed.addEventListener('click', function() {
    document.querySelector('.burger').classList.toggle('burger--active');
    document.querySelector('.nav').classList.toggle('nav--active');
    document.querySelector('.nav__down').classList.toggle('nav__down--active');
    document.querySelector('.burger__closed').classList.toggle('is-active');
});
menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');

        menu.classList.remove('nav--active');

        down.classList.remove('nav__down--active');

        document.body.classList.remove('stop-scroll');

    })

});

function readMore() {
    var more = document.getElementById("more");
    var btn = document.getElementsByClassName("btn");

    if (more.style.display === "none") {
        more.style.display = "none";
        btn.innerHTML = "Еще подкасты";
    } else {
        btn.innerHTML = "Скрыть";
        more.style.display = "inline";


    }
}
$(function() {
    $("#accordion").accordion({
        collapsible: true
    });

});
tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn) { btn.classList.remove('guests__item-btn--active') });
        e.currentTarget.classList.add('guests__item-btn--active');

        tabsItem.forEach(function(element) {
            element.classList.remove('tabs__item--active')
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('tabs__item--active');
    });

});
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',


    },
    breakpoints: {
        995: {
            slidesPerView: 2,
            spaceBetween: 40,

        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }

});
const swiper1 = new Swiper('.playlists__swiper', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,

});

const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
        color: '#D52B1E',
        textDecoration: 'underlined',
        position: top,
    },
});

validation
    .addField('#name', [{
        rule: 'required',
        required: true,
        errorMessage: 'Ошибка'
    }, {
        rule: 'maxLength',
        value: 30,
    }, {
        rule: 'minLength',
        value: 2,
    }, ])
    .addField('#email', [{
        rule: 'required',
        errorMessage: 'Ошибка',
    }, {
        rule: 'email',
        errorMessage: 'Ошибка',
    }, ]);
$(function() {
    $('.header__accordion').accordion({
        collapsible: true
    });

});