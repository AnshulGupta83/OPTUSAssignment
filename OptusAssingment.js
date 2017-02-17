/**
 * Optus Assignment
 */

$(function() {
   var valueOne = 0;
   var valueTwo = 20;
   var value = 0;
   var flag = false;
   var optId;
   var index = 0;
   progressbar = $("#progressbarOne");
   var progressLabelOne = $(".progress-label-one");
   var progressLabelTwo = $(".progress-label-two");
   $("#progressbarOne").progressbar({
     value: valueOne,
   });
   $("#progressbarTwo").progressbar({
     value: valueTwo,
   });

   $('#ProgressBarsList').change(function() {
     optId = $(this).find('option:selected').attr('id');

     if (optId == 'progressbarOne') {
       progressbar = $("#progressbarOne");
       value = valueOne;
       index = 0;
     } else {
       progressbar = $("#progressbarTwo");
       value = valueTwo;
       index = 1;
     }
   })
   $("button")
     .on(
       "click",
       function(event) {
         var target = $(event.target);
         var progressbarValue = progressbar
           .find(".ui-progressbar-value");

         if (target.is("#addButton25")) {
           value = value + 25;
         } else if (target.is("#addButton30")) {
           value = value + 30;
         } else if (target.is("#subtractButton46")) {
           value = value - 46;
         } else if (target.is("#subtractButton35")) {
           value = value - 35;
         }
         if (value >= 100) {
           progressbarValue.css({
             "background": '#FF0000'
           });
         } else if (value >= 0 && value < 100) {
           progressbarValue.css({
             "background": '#DDDDDD'
           });
         } else {
           value = 0;
         }
         progressbar.progressbar('value', value);
         if (index == 0) {
           valueOne = value;
         } else {
           valueTwo = value;
         }
         progressLabelOne.text(valueOne + "%");
         progressLabelTwo.text(valueTwo + "%");
       });
   progressLabelOne.text(valueOne + "%");
   progressLabelTwo.text(valueTwo + "%");
 });

