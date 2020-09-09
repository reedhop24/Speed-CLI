
const dealer = require('./dealer');
const cardObj = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6, 
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 11,
    'Q': 12,
    'K': 13,
    'A': 14
}

dealer['methodDeck']();
let cardsToPlace = dealer['deckToPlay'];
let handPlayer = [dealer['methodCardPlayer'](),dealer['methodCardPlayer'](),dealer['methodCardPlayer'](),dealer['methodCardPlayer'](),dealer['methodCardPlayer']()];
let handComputer = [dealer['methodCardComputer'](),dealer['methodCardComputer'](),dealer['methodCardComputer'](),dealer['methodCardComputer'](),dealer['methodCardComputer']()];

const game = () => {
    if(dealer['deckToDraw'].length === 10 && dealer['deckPlayer'].length === 15 && dealer['deckComputer'].length === 15) {
        console.log('Welcome to Speed!');
        console.log('The objective of the game is to get rid of all your cards')
        console.log('Choose wisely...');
    }

    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const round = () => {
        if(handPlayer.length === 0 && dealer['deckPlayer'].length === 0) {
            console.log('\nGame Over!')
            console.log('You Win!');
            return;
        } else if(handComputer.length === 0 && dealer['deckComputer'].length === 0) {
            console.log('\nGame Over!');
            console.log('Computer Wins!');
            return;
        }
        console.log('Your Hand: ', handPlayer);
        console.log('Cards to Play: ', cardsToPlace);
        rl.question("Your Turn: ", function(choice) {
            if(choice != "No Move") {
                let validMove = false;
                for(let j = 0; j < handPlayer.length; j++) {
                    for(let i = 0; i < cardsToPlace.length; i++) {
                        if(!validMove) {
                            if(choice === handPlayer[j]) {
                                if(validateCards(choice, cardsToPlace[i])) {
                                    cardsToPlace[i] = choice;
                                    if(dealer['deckPlayer'].length > 0) {
                                        handPlayer.splice(handPlayer.indexOf(choice), 1, dealer['methodCardPlayer']());
                                    } else {
                                        handPlayer.splice(handPlayer.indexOf(choice), 1);
                                    }
                                    console.log('\nNice Choice!');
                                    console.log('Your Hand is now: ', handPlayer);
                                    console.log('The cards to play are now: ', cardsToPlace)
                                    console.log('Computers turn...');
                                    validMove = true;
                                    computer();
                                    break;
                                }
                            }
                        }
                    }
                }
                if(!validMove) {
                    console.log('Invalid Move, Try Again!');
                    return round();
                }
                round();
            } else {
                console.log('\nComputers turn...');
                if(!computer()) {
                    cardsToPlace = dealer['methodNewTwo']();
                    if(cardsToPlace[0] === undefined) {
                        console.log('\nGame Over!');
                        console.log('\nStalemate! No More cardsToPlace!');
                        return;
                    }
                    console.log('cards to play are now: ' + cardsToPlace);
                }
                round();
            }
        });
    };

    const computer = () => {
        let cardRemoved;
        let played = false;
        for(let i = 0; i < handComputer.length; i++) {
            for(let j = 0; j < cardsToPlace.length; j++) {
                if(!played) {
                    if(validateCards(cardsToPlace[j], handComputer[i])) {
                        cardRemoved = cardsToPlace[j];
                        cardsToPlace[j] = handComputer[i];
                        played = true;
                        if(dealer['deckComputer'].length > 0) {
                            handComputer.splice(handComputer.indexOf(cardsToPlace[j]), 1, dealer['methodCardComputer']());
                        } else {
                            handComputer.splice(handComputer.indexOf(cardsToPlace[j]), 1);
                        }
                    }
                }
            }
        }

        if(played) {
            console.log("\nComputer played on the card: " + cardRemoved);
            console.log("\nThe cardsToPlace to play are now: " + cardsToPlace)
        } else {
            console.log("\nComputer could not play a card! ");
        }

        return played;
    }

    const validateCards = (card1, card2) => {
        if(Math.abs(cardObj[card1]-cardObj[card2]) === 1) {
            return true;
        } else if(card1 === '2' && card2 === 'A' || card1 === 'A' && card2 === '2') {
            return true;
        } else {
            return false;
        }
    }

    round();
    
    rl.on("close", function() {
        process.exit(0);
    });
}

game();