const test = QUnit.test;
//function
function feedNyan(foodName, parentElement) {
    const span = document.createElement('span');
    span.classList.add(foodName, 'part');

    parentElement.appendChild(span);
    return parentElement.innerHTML;
}

test('test adding watermelon to nyancat', function(assert) {

//I have to do something with a parent element and innerHTML according to notes
//I need to use parentElement.appendChild() according to notes

    //Arrange
    // Set up your parameters and expectations
    const foodName = 'watermelon';
    const section = document.createElement('section');
    const expected = '<span class="part watermelon"></span>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = feedNyan(foodName, section);
    //Assert
    assert.equal(result, expected);
});