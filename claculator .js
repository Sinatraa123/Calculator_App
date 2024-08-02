let display = document.getElementById("box-1");
let one = document.getElementById("box-2");
let two = document.getElementById("box-3");
let three = document.getElementById("box-4");
let four = document.getElementById("box-6");
let five = document.getElementById("box-7");
let six = document.getElementById("box-8");
let seven = document.getElementById("box-9");
let eight = document.getElementById("box-10");
let nine = document.getElementById("box-11");
let add = document.getElementById("box-5");
let sub = document.getElementById("box-12");
let mul = document.getElementById("box-13");
let div = document.getElementById("box-14");
let equals = document.getElementById("box-15");
let clear = document.getElementById("box-16");

one.addEventListener("click",()=>{
    display.textContent += "1";
    console.log(display);
})

two.addEventListener("click",()=>{
    display.textContent = display.textContent + "2";
})

three.addEventListener("click",()=>{
    display.textContent = display.textContent + "3";
})

four.addEventListener("click",()=>{
    display.textContent = display.textContent + "4";
})

five.addEventListener("click",()=>{
    display.textContent = display.textContent + "5";
})


six.addEventListener("click",()=>{
    display.textContent = display.textContent + "6";
})

seven.addEventListener("click",()=>{
    display.textContent = display.textContent + "7";
})

eight.addEventListener("click",()=>{
    display.textContent = display.textContent + "8";
})

nine.addEventListener("click",()=>{
    display.textContent = display.textContent + "9";
})

add.addEventListener("click",()=>{
    display.textContent = display.textContent + "+";
})

sub.addEventListener("click",()=>{
    display.textContent = display.textContent + "-";
})

mul.addEventListener("click",()=>{
    display.textContent = display.textContent + "*";
})

div.addEventListener("click",()=>{
    display.textContent = display.textContent + "/";
})

equals.addEventListener("click",calculate);

function calculate(){
    try{
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = "Error";
    }
    
}

clear.addEventListener("click",cleardisplay);

function cleardisplay(){
    display.textContent = "";
}