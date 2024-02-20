const maintitle =document.querySelector('#title')
let curvalue=0;
const btnIncrement =document.querySelector('#increment')
const btnReset =document.querySelector('#reset')
const btnDecrement =document.querySelector('#decrement')

btnIncrement.addEventListener('click',()=>{
    curvalue++;
    maintitle.textContent=curvalue;


})

btnDecrement.addEventListener('click',()=>{
    curvalue--;
    maintitle.textContent=curvalue;


})

btnReset.addEventListener('click',()=>{
    curvalue=0;
    maintitle.textContent=curvalue;


})