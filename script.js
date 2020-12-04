$(document).ready( function() {
$(".quest2").hide();



$(".num01").on("click",function(){
  $(".num01").css("opacity","1");
$("button .num02").css("opacity","0.5");
$(".num03").css("opacity","0.5");
  $(".quest2").hide();
    $(".quest3").hide();
  $(".quest1").show();
  $(".quest1").css("opacity","1");
var krissy_question2 = "KQ1.mp4";
var pun = "Cq1.mp4";
var nir = "NQ1.mp4";
var mal = "AQ1.mp4";
var As = "AsQ1.mp4";
var an = "AnQ1.mp4";
$('.Krissy').attr('src', krissy_question2);
$('.Rekha').attr('src', pun);
$('.Nirmala').attr('src', nir);
$('.Aastha').attr('src', As);
$('.Mallu').attr('src', mal);

$('.Anjali').attr('src', an);
});





$(".num02").on("click",function(){
  $(".num02").css("opacity","1");
$(".num01").css("opacity","0.5");
$(".num03").css("opacity","0.5");
  $(".quest1").hide();
  $(".quest2").show();
  $(".quest2").css("opacity","1");
   $(".quest1").css("opacity","0");
        $(".quest3").css("opacity","0");

var krissy_question2 = "KQ2.mp4";
var pun = "Cq2.mp4";
var nir = "NQ2.mp4";
var mal = "AQ2.mp4";
var As = "AsQ2.mp4";
var an = "AnQ2.mp4";
$('.Krissy').attr('src', krissy_question2);
$('.Rekha').attr('src', pun);
$('.Nirmala').attr('src', nir);
$('.Aastha').attr('src', As);
$('.Mallu').attr('src', mal);

$('.Anjali').attr('src', an);
});

$(".num03").on("click",function(){
  $(".num03").css("opacity","1");
$(".num02").css("opacity","0.5");
$(".num01").css("opacity","0.5");
  $(".quest2").hide();
  $(".quest3").show();
    $(".quest3").css("opacity","1");
     $(".quest1").css("opacity","0");
        $(".quest2").css("opacity","0");
        var krissy_question3 = "KQ3.mp4";
$('.Krissy').attr('src', krissy_question3);
var krissy_question2 = "KQ3.mp4";
var pun = "Cq3.mp4";
var nir = "NQ3.mp4";
var mal = "AQ3.mp4";
var As = "AsQ3.mp4";
var an = "AnQ3.mp4";
$('.Krissy').attr('src', krissy_question2);
$('.Rekha').attr('src', pun);
$('.Nirmala').attr('src', nir);
$('.Aastha').attr('src', As);
$('.Mallu').attr('src', mal);
$('.Anjali').attr('src', an);
});




$(".q").on("mouseenter",function(){
  $(".toplayer2").css("opacity","0.2");
   
});

$(".q").on("mouseleave",function(){
  $(".toplayer2").css("opacity","1");
});

  $(".transcript).window.location.replace("https://mayameapen123.github.io/Convoabout.github.io/");
  $(".about).window.location.replace("https://mayameapen123.github.io/convo2.github.io/");
  
});


