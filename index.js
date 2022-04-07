function writeCards(names) {
    const greetings = [];
    for (const person of names){
        greetings.push(`Thank you, ${person}, for the wonderful surprise gift!`);        
    }
    return greetings
};

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
};