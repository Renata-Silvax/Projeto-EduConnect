// //selecionar os itens clicados
// let menuItem = document.querySelectorAll('.item-menu')

// function selectink() {
//     menuItem.forEach((item) =>
//         item.classList.remove('ativo')
//     )
//     this.classList.add('ativo')
// }

// menuItem.forEach((item) =>
//     item.addEventListener('click', selectink)
// )

// //expandir o menu

// let btnExp = document.querySelector('#btn-exp')
// let menuSide = document.querySelector('.menu-lateral')

// btnExp.addEventListener('click', function () {
//     menuSide.classList.toggle('expadir')
// })

// Selecionar os itens clicados
// Selecionar os itens clicados no menu
let menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item) => item.classList.remove('ativo'));
    this.classList.add('ativo');
}

menuItem.forEach((item) => item.addEventListener('click', selectLink));

// Expandir o menu lateral
let btnExp = document.querySelector('#btn-exp');
let menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function () {
    menuSide.classList.toggle('expandir');
});

