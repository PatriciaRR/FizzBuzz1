console.log('Hello world!');

function printStrings() {
    
    for (let i = 1; i <= 105; i++) {
        let displayWord = '';
        if (i % 3 === 0) {
            displayWord += 'Fizz';
        }
        if (i % 5 === 0) {
            displayWord += 'Buzz';
        }
        if (i % 7 === 0) {
            displayWord += 'Bang';
        }
        if (displayWord === '') {
            displayWord += i;
        }
        console.log(displayWord);
    } 
}
printStrings();

