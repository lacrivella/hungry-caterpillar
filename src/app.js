//create var that selects all fruits
const fruitBars = document.querySelectorAll('.fruit');

//add event listener
for(let i = 0; i < fruitBars.length; i++) {
    const fruitBar = fruitBars[i];
    fruitBar.addEventListener('click', () => {
        console.log(fruitBar.value);
    });
}