const display = document.querySelector('.screen')
const num = document.querySelectorAll('.num')
const oper = document.querySelectorAll('#operator')
const deci = document.querySelector('#decimal')
const sign = document.querySelector('.sign')
const head = document.querySelector('h1')
const equal = document.querySelector('.equal')
const display2 = document.querySelector('.screen2')
const clear = document.querySelector('.clear')

let a='',b='',sum='';
let storeinA = true
let add = false;
let sub = false;
let mul = false;
let div = false;
let percent = false;

const plus = document.querySelector('.add')
plus.addEventListener('click',()=> add=true )

const minus = document.querySelector('.subtract')
minus.addEventListener('click',()=> sub=true)

const mult = document.querySelector('.multiply')
mult.addEventListener('click',()=> mul=true)

const divd = document.querySelector('.divide')
mult.addEventListener('click',()=> div=true)

const per = document.querySelector('.percent')
per.addEventListener('click',()=>percent=true)

function operate(a,b){
    let numA = parseFloat(a)
    let numB =parseFloat(b)
    if(add){
        add = false
        sum = numA+numB
    }else if(sub){
        sub = false
        sum = numA-numB
    }else if(mul){
        mul = false
        sum =  numA*numB
    }else if(div){
        div = false
        sum =  numA/numB
    }else if(percent){
        percent = false
        sum =  (numA/numB)*100
    }
    display2.textContent = sum

}

clear.addEventListener('click',function(){
    display2.textContent = ''
    display.textContent = ''
    head.textContent=''
    deci.disabled = false
    storeinA = true
    add = false;
    sub = false;
    mul = false;
    div = false;
    percent = false;
    a='',b='',sum=''
})

sign.addEventListener('click',function(){
    if(storeinA){
        if(a.startsWith('-')){
            a = a.slice(1)
            head.textContent=''
        }else{
        a = '-' + a
        head.textContent = '-'
        }
    }else{
        if(b.startsWith('-')){
            b = b.slice(1)
            head.textContent=''
        }else{
        b = '-' + b
        head.textContent='-'
        }
    }
})

deci.addEventListener('click',function(){
    deci.disabled = true;
})

num.forEach(function(button){
    button.addEventListener('click',function(){
        if(storeinA){
        a += button.value
        display.textContent += button.value
        }else{
         b += button.value
         display.textContent +=button.value
        }
    })
})

oper.forEach(function(button){
    button.addEventListener('click',function(){
        display.textContent += button.value
        head.textContent=''
        storeinA =false
        deci.disabled = false
    })
})

equal.addEventListener('click',()=>operate(a,b))