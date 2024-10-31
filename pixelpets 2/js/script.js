$(".q1").hide();
$(".q2C").hide();
$(".q2D").hide();
$(".q3").hide();
$(".q4").hide();
$(".q5").hide();
$(".q6").hide();
$(".results").hide();

    $("#start").click(function () {
        $(".q1").show();
        $("#intro").hide();
    });

   
    $(".dog").click(function () {
        $(".q1").hide();
        $(".q2D").show();
    });

    $(".cat").click(function () {
        $(".q1").hide();
        $(".q2C").show();
    });

    $("#black").click(function () {
        $(".q2C").hide();
        $(".q3").show();
    });
    $("#grey").click(function () {
        $(".q2C").hide();
        $(".q3").show();
    });
    $("#beige").click(function () {
        $(".q2C").hide();
        $(".q3").show();
    });
    $("#whiteC").click(function () {
        $(".q2C").hide();
        $(".q3").show();
    });

    $("#whiteD").click(function () {
        $(".q2D").hide();
        $(".q3").show();
    });
    $("#corgi").click(function () {
        $(".q2D").hide();
        $(".q3").show();
    });
    $("#husky").click(function () {
        $(".q2D").hide();
        $(".q3").show();
    });
    $("#shepherd").click(function () {
        $(".q2D").hide();
        $(".q3").show();
    });

    $("#police").click(function () {
        $(".q3").hide();
        $(".q4").show();
    });
    $("#cowboyfit").click(function () {
        $(".q3").hide();
        $(".q4").show();
    });
    $("#ballerina").click(function () {
        $(".q3").hide();
        $(".q4").show();
    });
    $("#president").click(function () {
        $(".q3").hide();
        $(".q4").show();
    });
    $("#cowboyhat").click(function () {
        $(".q4").hide();
        $(".q5").show();
    });
    $("#halo").click(function () {
        $(".q4").hide();
        $(".q5").show();
    });
    $("#flower").click(function () {
        $(".q4").hide();
        $(".q5").show();
    });
    $("#tophat").click(function () {
        $(".q4").hide();
        $(".q5").show();
    });
    $("#mouse").click(function () {
        $(".q5").hide();
        $(".q6").show();
    });
    $("#yarn").click(function () {
        $(".q5").hide();
        $(".q6").show();
    });
    $("#ball").click(function () {
        $(".q5").hide();
        $(".q6").show();
    });
    $("#bone").click(function () {
        $(".q5").hide();
        $(".q6").show();
    });
    $("#submit").click(function () {
        $(".q6").hide();
        $(".results").show();
    });
    $("#playagain").click(function () {
        $(".results").hide();
        $("#intro").show();
    });