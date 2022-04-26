console.log('Hello world!');

function printStrings() {
    
    for (let i = 1; i <= 500; i++) {
        let displayWord = [];
        if (i % 3 === 0) {
            displayWord.push('Fizz');
        }
        if (i % 5 === 0) {
            displayWord.push('Buzz');
        }
        if (i % 7 === 0) {
            displayWord.push('Bang');    
        }
        if (i % 11 === 0) {
            displayWord = ['Bong'];
        }
        if (i % 13 === 0) {
            let indexOfB = displayWord.findIndex(word => word.startsWith('B'));
            indexOfB === -1 ? displayWord.push('Fezz') : displayWord.splice(indexOfB, 0, 'Fezz') 
        }    
        if (i % 17 === 0) {
            displayWord = displayWord.reverse();
        }
        if (displayWord.length === 0) {
            console.log(i);
        }
        console.log(displayWord.join(''));
    } 
}
printStrings();

