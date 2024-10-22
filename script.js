// window.document.body.style.backgroundColor = "lightblue";

const takingMenuu = document.querySelector('.js-menu');
const showContent = document.querySelector('.hidden-content');

takingMenuu.addEventListener('click', ()=> {
    showContent.classList.toggle('show-content');
});