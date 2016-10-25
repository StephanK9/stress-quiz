$(document).ready(function() {
$("#personality-quiz").submit(function(event) {
  event.preventDefault();

  var newArray = [];
  $("input:checkbox:checked").each(function() {
    var stressQuizMode = $(this).val();
    newArray.push(stressQuizMode);
  });

  var a = 0;
  var b = 0;
  var c = 0;


for (var index=0; index < newArray.length; index ++) {

  if (newArray[index] === "a") { a++

}  else if  ( newArray[index] === "b") { b++

}  else { c++ }

 }

if (a>b && a>c) {
  $("#quiz-responses").show();
}
else if (b>c) {
  $("#quiz2-responses").show();
}
 else {
   $("#quiz3-responses").show();
 }


 });
});
