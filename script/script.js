$(function() {
    $("#game-screen").hide();
    $("#start-game").on("click", function() {
        $("#game-screen").fadeIn(300);
    });

    $("#game-screen2").hide();  // score pop-up


    var count = 0;
    $(window).keypress(function() {
        // jump function -----------
        console.log("keypressed");
        var doggy = $("#dog").position();
        var obs = $(".pipe").position();
        var dogright = doggy.left + $("#dog").width();

        console.log("doggy's position :"+ dogright);
        console.log("Obsticle's position :"+obs.left);

        if (dogright - obs.left >= 0) {
            // success jump
            $("#dog").css("animation", "jump 0.5s linear both");
            setTimeout(
                function() {
                    $("#dog").css("animation", "none");
                    $(".pipe").remove();
                }, 500);
            ++count;
        } else if (dogright - obs.left < 0) {
            // false jump
            $("#dog").css("animation", "out 0.1s linear forwards");
            // stop whole animation
            //cloud
            $("#back").css("animation", "none");
            $("#back1").css("animation", "none");
            $("#back2").css("animation", "none");
            $("#back3").css("animation", "none");
            $("#back4").css("animation", "none");
            //ground
            $("#ground").css("animation", "none");
           //  pop-up of game over -

           // alert("your game is over and your point is : " + count);

           $("#game-screen2").fadeIn(300);

           $("#game-screen2 h2 span").append(count);


        }


        $("#dog").css("animation", "jump 0.5s linear both");
        setTimeout(
            function() {
                $("#dog").css("animation", "none");
            }, 500);

    });
});
