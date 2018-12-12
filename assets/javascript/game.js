var crystalCollectorGame = new CrystalCollectorGame();

crystalCollectorGame.reset();
crystalCollectorGame.log();

$(document).ready(function () {

    $("#crystals").on("click", ".crystal-image", function () {

        var crystalValue = ($(this).attr("data-crystalvalue"));

        crystalCollectorGame.makeAGuess(crystalValue);
    });

});