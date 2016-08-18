
var output = [];
var romanNumeralsOnes = ["","I","II","III","IV","V","VI","VII","VIII","IX","X"];
var romanNumeralsNums = []

  var convertToNumeral = function(input) {
  var userInput = input.valueOf();
  // var romanNumerals = ["I","V","X","L","C","D","M"];

  if (userInput <= 10) {
    output.push(romanNumeralsOnes[userInput]);
  }
  console.log(output);
}

// for (var i = 0; i < parseInt(userInput); i += 1) {
//   if (i+1 == userInput)
//   output.push(romanNumeralsOnes[i]);
// }




$(document).ready(function(){
  $("#form1").submit(function(event) {
    event.preventDefault();

    romanInput = parseInt($("#input1").val());
    romanOutput = convertToNumeral(romanInput);

    $("#output1").text(romanOutput);
  });
});
