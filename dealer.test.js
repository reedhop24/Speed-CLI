const dealer = require('./dealer');
dealer['methodDeck']();

describe('Test dealer object', () => {
    test('Deck Player length should be 20', () => {
        expect(dealer['deckPlayer'].length).toEqual(20);
    });
    test('Deck Computer length should be 20', () => {
        expect(dealer['deckComputer'].length).toEqual(20);
    });
    test('Deck to Play should be 2', () => {
        expect(dealer['deckToPlay'].length).toEqual(2);
    });
    test('Deck to Draw should be 10', () => {
        expect(dealer['deckToDraw'].length).toEqual(10);
    });
});