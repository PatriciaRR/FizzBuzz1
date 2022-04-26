console.log('Hello world!');

function printNumbers () {
    let displayWord = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            displayWord = 'Fizz';
        }
        if (i % 5 === 0) {
            displayWord += 'Buzz';
        }
        else {
            displayWord = i;
        }
    }
    return console.log(displayWord);
}

printNumbers();

