const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',() =>{
       nav.classList.add('active') 
    })
}

if(close){
    close.addEventListener('click',() =>{
       nav.classList.remove('active') 
    })
}

// for toggle form

const loginform = document.getElementById("loginform");
const regform = document.getElementById("regform");
const indicator = document.getElementById("indicator");

function register(){
    regform.style.transform = "translateX(0px)";
    loginform.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";

}

function login(){
    regform.style.transform = "translateX(300px)";
    loginform.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";

}