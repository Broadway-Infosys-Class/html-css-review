$(function(){
    var operator = 0;
    $(".number").click(function(){
        if ($(this).hasClass("operator")){
        $("#result").val($("#result").val()+$(this).text());
        } else if ($(this).hasClass("calc")){
            operator++;
            if (operator == 1){
                $("#result").val($("#result").val()+$(this).text());
            } else {
            $("#result").val(eval($("#result").val())+$(this).text());
            }
        }
        else if ($(this).hasClass("clear")) {
            $("#result").val("");
            operator = 0;
        }
        else if ($(this).hasClass("equals")) {
            $("#result").val(eval($("#result").val()));
            operator = 0;
        }
        else {
            alert('wrong input');
        }
     });
  
  });
  