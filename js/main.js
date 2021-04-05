$(function () {
    //declare a new variable to count no. of operators in our expression.
  var operator = 0;

  //on click function that is working for every button with class number; represents all the buttons used in our design.
  $(".number").click(function () {
      //if the clicked button is a number
    if ($(this).hasClass("operator")) {
      $("#result").val($("#result").val() + $(this).text());

      //if clicked button is an operator
    } else if ($(this).hasClass("calc")) {
      operator++;
      //check if the entered operator is first or not.
      if (operator == 1) {
          //if the entered operator is the first one
        $("#result").val($("#result").val() + $(this).text());

      } else {

        //if it is not the forst operator entered.
        $("#result").val(eval($("#result").val()) + $(this).text());
      }

      //if clear is pressed, clear the input area and reset the no. of operator to 0 again.
    } else if ($(this).hasClass("clear")) {
      $("#result").val("");
      operator = 0;
    } else if ($(this).hasClass("equals")) {
        //if equals is pressed, show the equivalent result and reset operator count to 0. 
      $("#result").val(eval($("#result").val()));
      operator = 0;
    } else {
      alert("wrong input");
    }
  });
});
