"use strict";

var selectedOption = null;

function selectOption(optionId) {
  if (selectedOption) {
    document.getElementById(selectedOption).classList.remove('selected');
  }
  selectedOption = optionId;
  document.getElementById(optionId).classList.add('selected');
}

let letsGo = document.getElementById('lets-go-btn');
let firstQP = document.getElementById('first-part-questioning-btn');
let secondQP = document.getElementById('second-part-questioning-btn');
let secondQPW = document.getElementById('second-part-questioning-btn-white');
let thirdQP = document.getElementById('third-part-questioning-btn');
let thirdQPW = document.getElementById('third-part-questioning-btn-white');
let finalButton = document.getElementById('final-step-finish');


let mainPart = document.getElementById('main-part');
let firstSection = document.getElementById('first-part-questioning');
let secondSection = document.getElementById('second-part-questioning');
let thirdSection = document.getElementById('third-part-questioning');
let finalSection = document.getElementById('lastPart');

let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let emailInput = document.getElementById('emailInput');

let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');
let circle3 = document.getElementById('circle3');
let line1 = document.getElementById('line1');
let line2 = document.getElementById('line2'); 
let main = document.getElementById('navigation');

letsGo.addEventListener('click',function(e){
  e.preventDefault();
  mainPart.style.display='none';
  firstSection.style.display='flex';
  main.style.display='flex';
})

firstQP.addEventListener('click', function(e) {
  e.preventDefault();
  if (selectedOption !== null) {
    firstSection.style.display = 'none';
    secondSection.style.display = 'flex';
    line1.style.backgroundColor='#0772BA'
    circle2.style.backgroundColor='#0772BA';
    circle2.style.width='16px';
    circle2.style.height='16px';
    circle1.style.width='10px';
    circle1.style.height='10px';
  } else {
    alert('Please select an option before continuing.');
  }
});

secondQP.addEventListener('click', function(e) {
  e.preventDefault();
  if (selectedOption !== null) {
    secondSection.style.display = 'none';
    thirdSection.style.display = 'flex';
    line2.style.backgroundColor='#0772BA'
    circle3.style.backgroundColor='#0772BA';
    circle3.style.width='16px';
    circle3.style.height='16px';
    circle2.style.width='10px';
    circle2.style.height='10px';
  } else {
    alert('Please select an option before continuing.');
  }
});

secondQPW.addEventListener('click',function(e){
  e.preventDefault();
  secondSection.style.display='none';
  firstSection.style.display='flex';
  circle1.style.backgroundColor='#0772BA';
  circle1.style.width='16px';
  circle1.style.height='16px';
  circle2.style.width='10px';
  circle2.style.height='10px';
})

thirdQP.addEventListener('click', function(e) {
  e.preventDefault();
  if (selectedOption !== null) {
    thirdSection.style.display = 'none';
    finalSection.style.display = 'flex';
    main.style.display='none';
  } else {
    alert('Please select an option before continuing.');
  }
});

thirdQPW.addEventListener('click',function(e){
  e.preventDefault();
  thirdSection.style.display='none';
  secondSection.style.display='flex';
  circle2.style.backgroundColor='#0772BA';
  circle2.style.width='16px';
  circle2.style.height='16px';
  circle3.style.width='10px';
  circle3.style.height='10px';
  
})



let whyCeraVePopup = document.getElementById('whyCeraVe-popup');

finalButton.addEventListener('click',function(e){
  e.preventDefault();
  let valid = emailInput.value.includes('@gmail.com'); 
  if(valid)
  {
    let popup = document.getElementById('whyCeraVe-popup');
    popup.style.display = "flex";

    
    setTimeout(function() {
        popup.style.display = "none";
        
    }, 5000);  
    
}
  else {
    
    alert('Please make sure to fill every field and correctly!');
  }
});


document.getElementById('popup-btn').addEventListener('click', function() {
    whyCeraVePopup.style.display = 'none'; 
});

