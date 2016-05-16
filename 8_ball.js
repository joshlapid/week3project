
$(document).ready(function(){
  var answers = ["you're weak", "Fuggeddouboutit","I don't even know dawg", "I literally can't even","Hmmmmmmmm......","Maybe...","Ask me tomorrow."];

  // $(document).keypress(function(e){
  //   if(e.which===13) {
  //     randomAnswer();
  //   }
  // });


  function randomAnswer() {
    var inputQ = $("#inputQuestion").val();
    var ans = Math.floor(Math.random() * 7);
    $("#answerOutput").text(answers[ans]);
    $("#questionOutput").text(inputQ);

  }
  function myKeypressHandler(e) {
    if(e.which === 13) {
      randomAnswer();
    };
  }
  $("#inputQuestion").on(
    "keypress",
    myKeypressHandler
  )

  $("#submit").on(
    "click",
    randomAnswer
  )
});
