let deck = ['2', '2', '2', '2', '3', '3', '3', '3', '4', '4', '4', '4', '5', '5', '5', '5', '6', '6', '6', '6', '7', '7', '7', '7', '8', '8', '8', '8', '9', '9', '9', '9', '10', '10', '10', '10', 'J', 'J', 'J', 'J', 'Q', 'Q', 'Q', 'Q', 'K', 'K', 'K', 'K', 'A', 'A', 'A', 'A'];
let initialTwo = [];
let drawToDown = [];
let deck1 = [];
let deck2 = [];

const randomGenerator = () => {
    let rand = Math.floor(Math.random()*deck.length)
    let card = deck[rand];
    deck.splice(rand, 1);
    return card;
}

for(let i = 0; i < 2; i++) {
    initialTwo.push(randomGenerator());
}

for(let j = 0; j < 10; j++) {
    drawToDown.push(randomGenerator());
}

var dealer = {
    methodDeck: () => {
        while(deck.length > 0) {
            deck1.push(randomGenerator());
            deck2.push(randomGenerator());
        }
    },
    methodCardPlayer: () => {
        let rand = Math.floor(Math.random()*deck1.length)
        let card = deck1[rand];
        deck1.splice(rand, 1);
        return card;
    },
    methodCardComputer: () => {
        let rand = Math.floor(Math.random()*deck2.length)
        let card = deck2[rand];
        deck2.splice(rand, 1);
        return card;
    },
    methodNewTwo: () => {
        initialTwo = [drawToDown.pop(), drawToDown.pop()];
        return initialTwo;
    },
    deckToPlay: initialTwo,
    deckToDraw: drawToDown,
    deckPlayer: deck1,
    deckComputer: deck2
}

module.exports = dealer;     