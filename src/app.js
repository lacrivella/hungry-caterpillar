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

// making those colors power up!
const powerUp = document.querySelectorAll('.color');

for(let i = 0; i < powerUp.length; i++) {
    const powerButton = powerUp[i];
    powerButton.addEventListener('click', () => {
        removeAllPower();
        addPower(powerButton.value);
    });
}
function addPower(colorUp) {
    const barAll = document.querySelectorAll('span');
    for(let i = 0; i < barAll.length; i++) {
        const bar = barAll[i];
        if(bar.classList.contains(colorUp)) {
            bar.classList.add('power');
        }
    }
}
function removeAllPower() {
    const barAll = document.querySelectorAll('span');
    for(let i = 0; i < barAll.length; i++) {
        const bar = barAll[i];
        bar.classList.remove('power');
    }
}