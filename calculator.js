let screen=document.getElementById('screen')
screen.value=0
let btn1 = document.getElementById('one')
let btn2 = document.getElementById('two')
let btn3 = document.getElementById('three')
let btn4 = document.getElementById('four')
let btn5 = document.getElementById('five')
let btn6 = document.getElementById('six')
let btn7 = document.getElementById('seven')
let btn8 = document.getElementById('eight')
let btn9 = document.getElementById('nine')
let btn0 = document.getElementById('zero')
let btnob = document.getElementById('ob')
let btncb = document.getElementById('cb')
let btndot = document.getElementById('dot')

let btnPlus = document.getElementById('plus')
let btnMinus = document.getElementById('minus')
let btnProd = document.getElementById('prod')
let btnDivd = document.getElementById('divd')
let btnEquals = document.getElementById('equals')

let btnDel=document.getElementById('del')
let btnC=document.getElementById('c')

btn0.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('0')
}
btn1.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('1')
}
btn2.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('2')
}
btn3.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('3')   
}
btn4.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('4')
}
btn5.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('5')
}
btn6.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('6')
}
btn7.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('7')   
}
btn8.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('8')
}
btn9.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('9')
}



btndot.onclick=()=>{
    Solve('.')
}
btnob.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve('(')
}
btncb.onclick=()=>{
    if (screen.value==0) {
        screen.value=''
    }
    Solve(')')
}



btnPlus.onclick=()=>{
    Solve('+')
}
btnMinus.onclick=()=>{
    Solve('-')
}
btnProd.onclick=()=>{
    Solve('*')
}
btnDivd.onclick=()=>{
    Solve('/')
}
btnEquals.onclick=()=>{
    Result()
}

btnDel.onclick=()=>{
    Delete('del')
}

btnC.onclick=()=>{
    Clear()
}


function Solve(val) {
    let screen=document.getElementById('screen')
    screen.value+=val;
}

function Result() {
    var num1 = document.getElementById('screen').value;
    var num2 = eval(num1);
    document.getElementById('screen').value = num2;
}

function Delete() {
    var screen = document.getElementById('screen');
        screen.value = screen.value.slice(0, -1);
        if (screen.value=='') {
            screen.value=0;
        }
    
}


function Clear() {
    var inp = document.getElementById('screen');
    inp.value = '0';
}