const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')
const btn = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu() {
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
    btn.classList.toggle('ativar')
}

window.addEventListener("scroll", function () {
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 500)
})

$(document).ready(function () {
    $('.js-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
});