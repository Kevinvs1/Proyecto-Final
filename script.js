const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');



let form = document.forms['my-form'];
let menu = form.niveles;
let options = form.niveles.options;

form.onsubmit = function(e){
    e.preventDefault();
    let optionValue = this.niveles.value;
    if (optionValue == 'pequeño') {
        location.href = './game/laberintopequeño.html';
      } else if (optionValue == 'mediano') {
        location.href = './game/laberintomediano.html';
      } else if (optionValue == 'grande') {
        location.href = './game/laberintogrande.html';
      } else {
        location.href = './game/laberintomuygrande.html';
      }     
}
