$(document).ready(function() {
$("#personality-quiz").submit(function(event) {
  event.preventDefault();

  $("input:checkbox:checked").each(function(){
    var stressQuizMode = $(this).val();



  var result = newArray("input:checkbox:checked");
  var a = 0;
  var b = 0;
  var c = 0;

  for (index=0; index < result.length; index ++) {

  if (result === "a") {
  ("#quiz-responses").show(); }

  else if  ( result === "b") {
("#quiz2-responses").show(); }

 else (result === "c") {
   ("#quiz3-responses").show();
 }

 }

   });
 });
});
