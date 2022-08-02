const hamburger = document.querySelector('#hamburger');
const kbsbMenu = document.querySelector('#kbsb-menu');
const kbsb = document.querySelector('#kbsb');
const kbsbPart = document.querySelector('#kbsb-part');
const img1 = document.querySelector('#img-1');
const imgFull = document.querySelector('#img-full');
const closeImg = document.querySelector('#close-img');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    kbsbMenu.classList.toggle('hidden');
});

kbsb.addEventListener('click', function(){
    kbsbPart.classList.toggle('hidden');
});

img1.addEventListener('click', function(){
    imgFull.classList.toggle('hidden');
});

closeImg.addEventListener('click', function(){
    imgFull.classList.toggle('hidden');
});

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}