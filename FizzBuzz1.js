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
        if (i % 11 === 0) {
            displayWord = 'Bong';
        }
        if (i % 13 === 0) {
            let indexOfB = displayWord.indexOf('B');
            if (indexOfB === -1) { 
                displayWord += 'Fezz'
            } else { 
                displayWord = displayWord.slice(0,indexOfB) + 'Fezz' + displayWord.slice(indexOfB);
            }
        }
        if (displayWord === '') {
            displayWord += i;
        }
        console.log(displayWord);
    } 
}
printStrings();

