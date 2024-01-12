"use strict";

const subscribeEmail = document.getElementById('subscribe-input');

document.getElementById('subsribe-btn').onclick = function() {
    let valid = subscribeEmail.value.includes('@gmail.com');
    if(valid)
    {
        let popup = document.getElementById('whyCeraVe-popup');
        popup.style.display = "flex";

        
        setTimeout(function() {
            popup.style.display = "none";
        }, 5000);  
    }
    else
    {
        alert('Please enter a valid email!');
    }
}

document.getElementsByClassName('popup-btn')[0].onclick = function() {
    document.getElementById('whyCeraVe-popup').style.display = "none";
}
