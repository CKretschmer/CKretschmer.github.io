"use strict";
$(document).ready(function(){

  var myArray = [
[null, null, null],
[null, null, null],
[null, null, null],
]

var clickNumber = 0;

$(".boxes").click(function(){
  if($(this).hasClass("X")){
      alert("This box is already taken!")

      } else if($(this).hasClass("O")) {
      alert("This box is already taken!")

      } else {
       clickNumber += 1;
      if(clickNumber % 2 === 1){
        $(this).addClass("X")
        console.log(this)

      } else {
        $(this).addClass("O");
        console.log(this)
      }

  }

// function checkForWinner(container, picture){
//     if(container.find('.tl')hasClass('')
//       &&
//       container.find('.tm')hasClass('')
//       &&
//       container.find('.tr')hasClass('')

//     var win = 1

//     else if(container.find('.ml')hasClass('')
//       (container.find('.ml')hasClass('')
//       &&
//       container.find('.m')hasClass('')
//       &&
//       container.find('.mr')hasClass('')

//     var win = 1

//      else if(container.find('.ml')hasClass('')
//       (container.find('.bl')hasClass('')
//       &&
//       container.find('.bm')hasClass('')
//       &&
//       container.find('.br')hasClass('')

//     var win = 1

//      else if(container.find('.ml')hasClass('')
//      (container.find('.tl')hasClass('')
//       &&
//       container.find('.ml')hasClass('')
//       &&
//       container.find('.bl')hasClass('')

//      var win = 1

//      else if(container.find('.ml')hasClass('')
//      (container.find('.tm')hasClass('')
//      &&
//      container.find('.m')hasClass('')
//      &&
//      container.find('.bm')hasClass('')

//      var win = 1

//      else if(container.find('.ml')hasClass('')
//      (container.find('.tr')hasClass('')
//      &&
//      container.find('.mr')hasClass('')
//      &&
//      container.find('.br')hasClass('')

//      var win = 1

//      else if(container.find('.ml')hasClass('')
//      (container.find('.tl')hasClass('')
//      &&
//      container.find('.m')hasClass('')
//      &&
//      container.find('.br')hasClass('')

//      var win = 1

//      else if(container.find('.ml')hasClass('')
//      (container.find('.tr')hasClass('')
//      &&
//      container.find('.m')hasClass('')
//      &&
//      container.find('.bl')hasClass('')

//      var win = 1


// }

    document.getElementById("reset").onclick = function(){
      document.getElementById("").value = "";
    }


  });


    $("#mybutton").click(function(){
      console.log('pressed reset')
    })




});


