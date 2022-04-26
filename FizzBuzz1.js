console.log('Hello world!');

function printNumbers() {
    
    for (let i = 1; i <= 100; i++) {
        let displayWord = '';
        if (i % 3 === 0) {
            displayWord += 'Fizz';
        }
        if (i % 5 === 0) {
            displayWord += 'Buzz';
        }
        if (displayWord === '') {
            displayWord += i;
        }
        console.log(displayWord);
    } 
}
printNumbers();

