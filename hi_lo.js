$(document).ready(function(){
  var counter = 0;//Variable for 7 chance counter
  var compGuess = Math.floor(Math.random() * 100 + 1); //Assigns compGuess a random number between 1-100
  var name = prompt("Welcome, what your name, fool?");
  var wins = 0;
  var losses = 0;

  function compareNums() {
    var userGuess = $("#user_guess").val();

    if (compGuess > parseInt(userGuess)) {
      $("#output").text((userGuess + " is too low"));
      counter++;
      $("#user_guess").val("");
    }
    if (counter >= 7){
      $("#output").text("You have guessed too many times, you suck!");
      losses++;
      $("#lossesOutput").text("Losses:" + losses);
      compGuess = Math.floor(Math.random() * 100 + 1);
      counter = 0;
      $("#user_guess").val("");
    }
    if (compGuess < parseInt(userGuess)) {
      $("#output").text((userGuess + " is too high"));
      counter++;
      $("#user_guess").val("");
    }
    if (isNaN(userGuess) === true) {
      $("#output").text(("Please enter a valid number, fool."));
      $("#user_guess").val("");
    }
    if (userGuess > 100){
      $("#output").text(("Please enter a  number between 1 and 100, fool."));
      $("#user_guess").val("");
    }
    if (parseInt(userGuess) === compGuess) {
      $("#output").text(("You Win " + name + "!!!!"));
      wins++;
      $("#winsOutput").text("Wins:" + wins);
      compGuess = Math.floor(Math.random() * 100 + 1);
      counter = 0;
      $("#user_guess").val("");
    }
  };


  $("#submit").on(
    "click",
    compareNums
  )
  function myKeypressHandler(e) {
    if(e.which === 13) {
      compareNums();
    };
  }

  $("#user_guess").on(
    "keypress",
    myKeypressHandler
  )

});
