
$(function() {

  $("#game-screen").hide();

  $("#start-game").on("click",function() {

      $("#game-screen").fadeToggle(300);
  });




     $(window).keypress(function() {
         // jump function -----------

     $("#dog").css("animation", "jump 0.5s linear both");

    setTimeout(
        function() {

         $("#dog").css("animation", "none");

       }, 500);


     });

     // for obstacles .....

      var pipeco = $("#pipe").position().left();
    if ($ ("#dog").position().right() < pipeco+"100px")
        {
          $("pipe").remove();
        }


});
