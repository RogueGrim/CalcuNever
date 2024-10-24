const display = document.querySelector('.screen')
const num = document.querySelectorAll('.num')
const oper = document.querySelectorAll('#operator')
let a=0,b=0;

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

function percent(a,b){
    return (a/b)*100
}

num.forEach(function(button){
    button.addEventListener('click',function(){
        a += button.value
        display.textContent += button.value
    })
})

oper.forEach(function(button){
    button.addEventListener('click',function(){
        display.textContent += button.value
    })
})