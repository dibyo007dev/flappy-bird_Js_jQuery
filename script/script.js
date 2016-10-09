
$(function() {

  $("#start-game").on("click",function() {

      $("#game-screen").fadeToggle(300);
  });


 $(window).keypress(function() {
         // jump function -----------
      $("#dog").css("animation", "jump 0.5s linear both");


     });

     $("#dog").css("animation"," ");



});
