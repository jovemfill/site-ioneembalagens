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

