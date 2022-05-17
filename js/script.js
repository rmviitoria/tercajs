function somar (){
    numero1 = Number(num1.value)
    numero2 = Number(num2.value)
    return numero1 +" + "+numero2+" ="+(numero1+numero2)
}
function subtrair(){
    numero1 = Number(num1.value)
    numero2 = Number(num2.value)
    return numero1 +" - "+numero2+" = "+(numero1-numero2)
}
function multiplicar(){
    numero1 = Number(num1.value)
    numero2 = Number(num2.value)
    return numero1 +" * "+numero2+" = "+(numero1*numero2)
}
function dividir(){
    numero1 = Number(num1.value)
    numero2 = Number(num2.value)
    return numero1 +" / "+numero2+" = "+(numero1/numero2)
}
let bot1= document.getElementById('bot1');
let result = document.getElementById('res1')
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')

bot1.addEventListener('click', ()=>{
    result.innerHTML= somar ()
})
bot2.addEventListener('click', ()=>{
    result.innerHTML = subtrair()
})
bot3.addEventListener('click', ()=>{
    result.innerHTML = multiplicar()
})
bot4.addEventListener('click', ()=>{
    result.innerHTML= dividir()
})