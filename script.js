console.log('console.log: ' + 'test external js file to index.html');

function computerPlay () {
    let randomNumberChoice = Math.floor(Math.random() * 3) // this ranges from 0 to 2. not 1 to 3. this is why i labeled the cases accordingly
    switch (randomNumberChoice) {
        case 0: 
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors'; 
            break;
        default: 
            console.log('looks like you reach the default case. i am not sure how you would get to default.');
    }
    alert('alert ' + randomNumberChoice);
    console.log('console.log ' + randomNumberChoice);
    return 'return ' + randomNumberChoice;
}