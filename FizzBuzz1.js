console.log('Hello world!');

function printStrings() {
    
    for (let i = 1; i <= 105; i++) {
        let displayWord = '';
    //     if (i % 11 === 0) {
    //         displayWord = 'Bong';
    //         console.log(displayWord);
    //         continue;
    //    }
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
        if (displayWord === '') {
            displayWord += i;
        }
        console.log(displayWord);
    } 
}
printStrings();

