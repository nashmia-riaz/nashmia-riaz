
/* Set the width of the side navigation to 250px */
var masonryWidth=0;

function setMasonryWidth(){
  if($(window).width()<768){
    masonryWidth=90;
  }
  else if($(window).width()<992){
    masonryWidth=170;
  }
  else if($(window).width()<1200){
    masonryWidth=170;
  }
  else if($(window).width()>=1200){
    masonryWidth=170;
  }
}
setMasonryWidth();
$(window).load(function(){
	// Animate loader off screen
	$(".se-pre-con").fadeOut();

  $('.content').isotope({
    // options
    itemSelector: '.item',
    masonry:{
      columnWidth: masonryWidth,
      fitWidth: true
    }
  });
});
(function() {
  "use strict";
  // Initialize Masonry

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  }

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

  var sections = {
    "#Introduction":0,
    "#Education":0,
    "#Designs":0,
    "#Artworks":0,
    "#Projects":0,
    "ContactMe":0
  };
  sections["#Introductions"] = $("#Introduction").position().top;
  sections["#Education"] = $("#Education").position().top;
  sections["#Designs"] = $("#Designs").position().top;
  sections["#Artworks"] = $("#Artworks").position().top;
  sections["#Projects"] = $("#Projects").position().top;
  sections["#ContactMe"] = $("#ContactMe").position().top;

  var $root = $('html, body, .docScroller');
  $('#mySidenav a').click(function(e) {

    e.preventDefault();
      var href = $(this).attr('href');
      $root.animate({
          scrollTop: sections[href]
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

    var height = $(window).height();
    var halfHeight = height/2;
    var IntroHeight = $("#Introduction>div").height();
    var setIntroHeight = halfHeight - (IntroHeight/2);
    $("#Introduction>div").css("padding-top",setIntroHeight);
    $(".sidenav").css("padding-top",setIntroHeight);


    $("#socialLinks a").hover(function(){
      $(this).find(".st0").css({"stroke":"#EEEBE3","transition":"0.5s"});
      $(this).find(".st1").css({"fill":"#EEEBE3","transition":"0.5s"});
      $(this).find(".st2").css({"fill":"#151515","transition":"0.5s"});
    },
    function(){
      $(this).find(".st0").css({"stroke":"#151515","transition":"0.5s"});
      $(this).find(".st1").css({"fill":"#151515","transition":"0.5s"});
      $(this).find(".st2").css({"fill":"#EEEBE3","transition":"0.5s"});
    });

    var docViewTop = $(".docScroller").scrollTop();
    if(docViewTop > sections["#Education"] || docViewTop < sections["#Education"]){
    $("#Education .mainHeading").fadeOut();
    }
/****************PAGE ANIMATIONS *********************************/
    $(".docScroller").scroll(function () {
      docViewTop = $(".docScroller").scrollTop();
      if(docViewTop<=sections["#Introduction"]){
        $("#Introduction>div").fadeIn(500);
      }
      else if(docViewTop >= sections["#Introduction"]+height){
        $("#Introduction>div").fadeOut(0);
      }

      if(docViewTop > sections["#Education"] || docViewTop < sections["#Education"]){
      $("#Education .mainHeading").fadeOut();
        $("#edTimeline").css({"left":"-200px","opacity":"0"});
        $("#expTimeline").css({"right":"-200px","opacity":"0"});
      }
      if(docViewTop==sections["#Education"]){
      $("#Education .mainHeading").fadeIn();
        $("#edTimeline").animate({"left":"0px","opacity":"1"},500);
        $("#expTimeline").animate({"right":"0px","opacity":"1"},500);
      }

      if(docViewTop==sections["#Designs"]){
        // alert("animate");
        $("#Designs").find('.item').each(function(i) {
                $(this).delay(i*100).animate({
                    'opacity' : 1,
                }, 500);
            });
      }
      if(docViewTop > sections["#Designs"] || docViewTop < sections["#Designs"]){
        $("#Designs").find('.item').each(function(i) {
                $(this).css({
                    'opacity' : '0',
                });
            });
      }

      if(docViewTop==sections["#Artworks"]){
        // alert("animate");
        $("#Artworks").find('.item').each(function(i) {
                $(this).delay(i*100).animate({
                    'opacity' : 1,
                }, 500);
            });
      }
      if(docViewTop > sections["#Artworks"] || docViewTop < sections["#Artworks"]){
        $("#Artworks").find('.item').each(function(i) {
                $(this).css({
                    'opacity' : '0',
                });
            });
      }

    });

/****************PAGE ANIMATIONS *********************************/

$(".item img").hover(function(){alert("hover");},function(){alert("no hover");});

})();

/********************Toggle menu bar******************/
var isNavDisplayed = false;

$(".c-hamburger").click(function(){
  isNavDisplayed = !isNavDisplayed;

  if(isNavDisplayed === true)
    $("#mySidenav").css({"width":"250px","box-shadow":"0px 10px 10px 5px rgba(0,0,0,0.7)"});
  else
    $("#mySidenav").css({"width":"0px","box-shadow":"0px 10px 10px 5px rgba(0,0,0,0)"});
});
/********************Toggle menu bar******************/
$("#expButton").click(function(){
  $("#edButton").css({"background":"black","color":"white"});
  $("#expButton").css({"background":"white","color":"black"});
  $("#edTimeline").animate().addClass("hidden-xs hidden-sm");
  $("#expTimeline").removeClass("hidden-xs hidden-sm");
});
$("#edButton").click(function(){
  $("#expButton").css({"background":"black","color":"white"});
  $("#edButton").css({"background":"white","color":"black"});
  $("#expTimeline").addClass("hidden-xs hidden-sm");
  $("#edTimeline").removeClass("hidden-xs hidden-sm");
});
$("#edButton").click();
$("#profession").typed({
        strings: ["Web Developer.", "Designer &amp; Illustrator.","Programmer &amp; Software Engineer."],
        typeSpeed: 100,
        loop: true
      });
/********************************************************/
