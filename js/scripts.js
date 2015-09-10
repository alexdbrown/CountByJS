var count = function(number, counter) {
  var counting = [];

  for(var i = 0; i <= number; i+=counter) {
    counting.push(i);
  }
  return counting.join(", ");
};

$(document).ready(function() {

  //collecting information from the html form
  $("form#count-form").submit(function(event) {
    var number = parseInt($("input#number").val());
    var counter = parseInt($("input#counter").val());
    var result = count(number, counter);

    //defining span classes - you select the span and then put it into the text after the form
    $(".number").text(number);
    $(".counter").text(counter);
    $(".results").text(result);

    //showing the result div
    $("#result").show();
    event.preventDefault();

  });
});
