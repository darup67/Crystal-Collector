# :gem: Crystal Collector :gem:
# Overview

Crystal Collector is a number guessing game using images of crystals to guess the number. It uses JQuery for DOM manipulation and Javascript for the game logic. The objective of the game is to guess a random number between 19-120. The game displays 4 crystals that are used to guess that number. Each crystal is assigned a random number between 1-12. When the user clicks a crystal, the number assigned to that crystal is added to the total guess for the user. The user continues to click one of the crystals to try and guess the target number. The game ends when the user guesses the number exacly or goes over. If they guess exactly they win, if they go over, they lose.

The game restarts whenever the player wins or loses while also keeping track of the number of wins/losses.
