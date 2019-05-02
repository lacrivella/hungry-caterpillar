//create var that selects all fruits
import feedNyan from './feed-nyan.js';
const fruitBars = document.querySelectorAll('.fruit');
const cat = document.getElementById('cat');
//add event listener
for(let i = 0; i < fruitBars.length; i++) {
    const fruitBar = fruitBars[i];
    fruitBar.addEventListener('click', () => {

        feedNyan(fruitBar.value, cat);
    });
}

//need to connect gemBar with event listener
//will need to do a doc.querySelectorAll(.dance) and then do a remove all?
const powerUp = document.querySelectorAll('.color');

//will need to make function removeAllDancing with variable for dance, 
for(let i = 0; i < powerUp.length; i++) {
    const powerButton = powerUp[i];
    powerButton.addEventListener('click', () => {
        removeAllPower();
        addPower(powerUp.value);
    });
}
function addPower() {
    
}
function removeAllPower() {
    const barAll = document.querySelectorAll('span');
    for(let i = 0; i < barAll.length; i++) {
        const bar = barAll[i];
        bar.classList.remove('power');
    }
}

//make another function to add dancing parts? doc.queryselectorall that selects all of the corr. colors