/*const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function ligarLamp(){
    lamp.src = './imgligada.jpg';
}
function desligarLamp(){
    lamp.scr = './img/desligada.jpg';
}
function quebrarLamp(){
    lamp.scr = './img/quebrada.jpg'
}
turnOn.addEventListener('click',ligarLamp)
turnOff.addEventListener('click',desligarLamp)
lamp.addEventListener('mouseover', ligarLamp)
lamp.addEventListener('mouseout',desligarLamp)
lamp.addEventListener('dblclick', quebrarLamp)*/

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function ligarLamp(){ 
    lamp.src = './img/ligada.jpg';
}
function quebrarLamp(){
    lamp.src = './img/quebrada.jpg';
}
function desligarLamp(){
    lamp.src = './img/desligada.jpg';
}
turnOn.addEventListener('click',ligarLamp)
turnOff.addEventListener('click',desligarLamp)
lamp.addEventListener('mouseover',ligarLamp)
lamp.addEventListener('mouseout',desligarLamp)
lamp.addEventListener('dblclick',quebrarLamp)