let _imageArray = [];

class CrystalCollectorGame {

    constructor() {

        this.totalGames = 0;
        this.nbrWins = 0;
        this.nbrLosses = 0;

        this.gameInProgress = false;


        this.currentNbrToGuess = 0;
        this.crystalValues = [0, 0, 0, 0];
        this.currentGuess = 0;
        this.totalGuessedSoFar = 0;


        this.createImageArray();
    }


    static get imageArray() {
        return _imageArray;
    }

    createImageArray() {
        this.imageArray = [
            "./assets/images/Crystal1.png",
            "./assets/images/Crystal2.png",
            "./assets/images/Crystal3.png",
            "./assets/images/Crystal4.png",
        ];
    }


    reset() {
        this.gameInProgress = true;


        this.currentNbrToGuess = Math.floor(Math.random() * 102 + 19);


        for (var i in this.crystalValues) {
            this.crystalValues[i] = Math.floor(Math.random() * 12 + 1);
        }
        this.currentGuess = 0;
        this.totalGuessedSoFar = 0;


        this.displayCrystals(this.crystalValues);
        this.displayGameStatus();
    }

    makeAGuess(guessNbr) {

        this.currentGuess = parseInt(guessNbr, 10);
        this.totalGuessedSoFar += this.currentGuess;


        if (this.totalGuessedSoFar == this.currentNbrToGuess) {
            this.endGame(true);
        } else if (this.totalGuessedSoFar > this.currentNbrToGuess) {
            this.endGame(false);
        }


        this.displayGameStatus();
    }


    displayCrystals(arr) {

        $("#crystals").empty();

        for (var i in arr) {

            var imageCrystal = $("<img>");


            imageCrystal.addClass("crystal-image");


            imageCrystal.attr("src", this.imageArray[i]);


            imageCrystal.attr("data-crystalvalue", arr[i]);

            $("#crystals").append(imageCrystal);
        }
    }



    displayGameStatus() {

        $("#totalGames").text(this.totalGames);
        $("#nbrWins").text(this.nbrWins);
        $("#nbrLosses").text(this.nbrLosses);
        if (this.gameInProgress) {
            $("#gameMessage").text("playing ...");
        }


        $("#currentNbrToGuess").text(this.currentNbrToGuess);
        $("#currentGuess").text(this.currentGuess);
        $("#totalGuessedSoFar").text(this.totalGuessedSoFar);

    }


    endGame(winner) {
        var str;
        this.gameInProgress = false;


        this.totalGames += 1;


        if (winner) {
            str = "You WON! Good Job ";
            this.nbrWins += 1;
        } else {
            str = "You Lost";
            this.nbrLosses += 1;
        }


        this.displayGameStatus();

        alert(str);
        this.reset();
    }


    print() {


    }


    log() {

        console.log("totalGames:" + this.totalGames);
        console.log("nbrWins:" + this.nbrWins);
        console.log("nbrLosses:" + this.nbrLosses);
        console.log("gameInProgress:" + this.gameInProgress);
        console.log("currentNbrToGuess:" + this.currentNbrToGuess);
        console.log("currentGuess:" + this.currentGuess);
        console.log("totalGuessedSoFar:" + this.totalGuessedSoFar);
        console.log("currentGuess:" + this.currentGuess);
    }
}