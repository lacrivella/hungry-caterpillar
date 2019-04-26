const test = QUnit.test;
//function
function feedNyan(foodName) {

}

test('test adding watermelon to nyancat', function(assert) {

//I have to do something with a parent element and innerHTML according to notes
//I need to use parentElement.appendChild() according to notes

    //Arrange
    // Set up your parameters and expectations
    const foodName = 'watermelon';
    const expected = '<span class="part watermelon"></span>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = feedNyan(foodName);
    //Assert
    assert.equal(result, expected);
});