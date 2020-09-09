# Speed CLI

##### This repository is a little personal project I built to be the card game speed but on the command line. In the card game, there are two players and each of them are dealt 20 cards. They pick five up to be in their hand the rest is a draw pile. The remaining cards are divided into two decks and one card from either deck is lay face up. The point of the game is to get rid of all your cards by placing either one higher or one lower than the either of the cards face up. 

##### Since this is single player against the computer, I modified the rules of the game to be on a turn basis. Therefore the user goes then the computer goes and so on, if you are unable to make a move then input 'No Move' and if the computer also can't make a move then the two cards are swapped out for new ones. If the pile for the two cards in the middle runs out then the game is a stalemate and neither player wins. Otherwise it is first player to discard all of their cards wins.

##### This project was built using Node.js, Readline, and Jest.