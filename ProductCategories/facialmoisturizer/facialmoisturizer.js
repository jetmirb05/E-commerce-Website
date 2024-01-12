"use strict";

let popupButton = document.getElementById('green-popUp');
let contentPopup = document.getElementById('facialpopUp');
let closeButton = document.getElementById('facial-popUp-close-btn');
let mainpopUp = document.getElementById('main-popUp');

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        mainpopUp.style.display='flex';
    }, 2000); 
});


popupButton.addEventListener('click', function(e){
    e.preventDefault();
    contentPopup.style.display='flex';
    popupButton.style.marginTop='0px';
    
})

closeButton.addEventListener('click',function(e){
    e.preventDefault();
    contentPopup.style.display='none';
    popupButton.style.marginTop='400px';
})