//Code to manipulate DOM (function):
$(document).ready(function(){


  let winConditions = {
    "a1":
    [["#a1","#a2", "#a3"],
     ["#a1","#b1", "#c1"],
     ["#a1","#b2", "#c3"]],

     "#b2":
    [["#b1","#b2", "#b3"],
     ["#a2","#b2", "#c2"],
     ["#a3","#b2", "#c1"]],

    "#c3":
    [["#c1","#c2", "#c3"],
     ["#a3","#b3", "#c3"]], 

  };

  function isWinner(){

    if( $("#a1").text() ){
      console.log("checking #a1");
      if( ($("#a1").text() === $("#a2").text() && $("#a2").text() === $("#a3").text() ) ||
          ($("#a1").text() === $("#b1").text() && $("#b1").text() === $("#c1").text() ) ||
          ($("#a1").text() === $("#b2").text() && $("#b2").text() === $("#c3").text() ) ){
            return true;
          }

    } if ( $("#b2").text() ){
      console.log("checking #b2");
      if ( ( $("#b1").text() === $("#b2").text() && $("#b2").text() === $("#b3").text() ) ||
           ( $("#a2").text() === $("#b2").text() && $("#b2").text() === $("#c2").text() ) ||
           ( $("#a3").text() === $("#b2").text() && $("#b2").text() === $("#c1").text() ) ){
        return true;
      }

    } if ( $("#c3").text() ){
      console.log("checking #c3")
      if( ( $("#c1").text() === $("#c2").text() && $("#c2").text() === $("#c3").text() ) ||
          ( $("#a3").text() === $("#b3").text() && $("#b3").text() === $("#c3").text() ) ){
            return true;
          }
    }  
    return false;
  }

    //counting number of moves, (9 moves):
    let pCount = 0;
    let hasWinner = false;
    $(".box").on("click",
      function ticTacToe(event){
        if ( !hasWinner && !( $(this).text() )){
        if ((pCount % 2 === 0)){
          $(this).addClass("red");
          $(this).text("X");
        } else {
          $(this).text("0");
          $(this).addClass("blue");
        }
        pCount ++;
        if (isWinner()){
          hasWinner = true;
          return alert( $(this).text() + "Wins!!");
        } else if (pCount === 9) {
          hasWinner = false;
          pCount = 0;
          return alert("Tie!");
        }

       } else if ( $(this).text() ) {
          return alert("Chose another space");
        }
      }
      );


   $(".btn").on("click",
   function resetButton(event){
     $(".box").text("");
     $(".box.red").removeClass("red");
     $(".box.blue").removeClass("blue");
     pCount = 0;
     hasWinner = false;
     console.log(hasWinner);
   }
   );
   console.log(hasWinner);

   console.log("working");

});