$(document).mousemove(function(e) {
    $("#cursor").css({
      left: e.pageX,
      top: e.pageY
    });
  });

$(".q1").hide();
$(".q2C").hide();
$(".q2D").hide();
$(".q3C").hide();
$(".q3D").hide();
$(".q4").hide();
$(".q5").hide();
$(".q6").hide();
$(".results").hide();
$(".product").hide();
$(".thanks").hide();
$(".audio").hide();

$(document).ready(function() {
    $("#start").click(function() {
      $(".audio")[0].play();
    });
  });

$("#start").click(function () {
    $(".q1").show();
    $("#intro").hide();
});

$("#catclick").click(function () {
    $(".q1").hide();
    $(".q2C").show();
});

$("#dogclick").click(function () {
    $(".q1").hide();
    $(".q2D").show();
});

$(".cats").click(function () {
    $(".q2C").hide();
    $(".q3C").show();
});
$(".dogs").click(function () {
    $(".q2D").hide();
    $(".q3D").show();
});

$(".outfit").click(function () {
    $(".q3D").hide();
    $(".q3C").hide();
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
    $(".product").show();
    $(".thanks").show();

});

// Choosing a Name
var affirmationObj, fieldObj;
affirmationObj = document.getElementById("namefield");
fieldObj = document.getElementById('name');
fieldObj.addEventListener('blur', function () {
    affirmationObj.innerHTML = this.value;
});

// Results

// Cat Color
document.getElementById("black").addEventListener("click", function () {
    document.getElementById("PCblack").style.display = "block";
});
document.getElementById("whiteC").addEventListener("click", function () {
    document.getElementById("PCwhite").style.display = "block";
});
document.getElementById("beige").addEventListener("click", function () {
    document.getElementById("PCbeige").style.display = "block";
});
document.getElementById("grey").addEventListener("click", function () {
    document.getElementById("PCgrey").style.display = "block";
});

// Dog Color
document.getElementById("corgi").addEventListener("click", function () {
    document.getElementById("PDcorgi").style.display = "block";
});
document.getElementById("husky").addEventListener("click", function () {
    document.getElementById("PDhusky").style.display = "block";
});
document.getElementById("shepherd").addEventListener("click", function () {
    document.getElementById("PDshepherd").style.display = "block";
});
document.getElementById("whiteD").addEventListener("click", function () {
    document.getElementById("PDwhite").style.display = "block";
});


//Fit check at end
document.getElementById("catcowboy").addEventListener("click", function () {
    document.getElementById("PCcowboy").style.display = "block";
});
document.getElementById("catangel").addEventListener("click", function () {
    document.getElementById("PCangel").style.display = "block";
});
document.getElementById("catdress").addEventListener("click", function () {
    document.getElementById("PCdress").style.display = "block";
});
document.getElementById("cattux").addEventListener("click", function () {
    document.getElementById("PCtux").style.display = "block";
});
document.getElementById("dogcowboy").addEventListener("click", function () {
    document.getElementById("PDcowboy").style.display = "block";
});
document.getElementById("dogangel").addEventListener("click", function () {
    document.getElementById("PDangel").style.display = "block";
});
document.getElementById("dogdress").addEventListener("click", function () {
    document.getElementById("PDtux").style.display = "block";
});
document.getElementById("dogtux").addEventListener("click", function () {
    document.getElementById("PDtux").style.display = "block";
});

//Accessory Display at end
document.getElementById("cowboyhat").addEventListener("click", function () {
    document.getElementById("Pcowboyhat").style.display = "block";
});
document.getElementById("halo").addEventListener("click", function () {
    document.getElementById("Phalo").style.display = "block";
});
document.getElementById("flower").addEventListener("click", function () {
    document.getElementById("Pflower").style.display = "block";
});
document.getElementById("tophat").addEventListener("click", function () {
    document.getElementById("Ptophat").style.display = "block";
});

//Toy Display at end
document.getElementById("mouse").addEventListener("click", function () {
    document.getElementById("Pmouse").style.display = "block";
});
document.getElementById("yarn").addEventListener("click", function () {
    document.getElementById("Pyarn").style.display = "block";
});
document.getElementById("ball").addEventListener("click", function () {
    document.getElementById("Pball").style.display = "block";
});
document.getElementById("bone").addEventListener("click", function () {
    document.getElementById("Pbone").style.display = "block";
});