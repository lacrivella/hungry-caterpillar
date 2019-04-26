import feedNyan from '../src/feed-nyan.js';
const test = QUnit.test;

test('test adding watermelon to nyancat', function(assert) {
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