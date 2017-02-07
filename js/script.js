
/* Set the width of the side navigation to 250px */

$(window).load(function(){
	// Animate loader off screen
	$(".se-pre-con").fadeOut();
});

(function() {
  "use strict";

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
    "#SkillsAndExperience":0,
    "#DesignAndArtworks":0,
    "#Projects":0,
    "ContactMe":0
  };
  sections["#Introductions"] = $("#Introduction").position().top;
  sections["#Education"] = $("#Education").position().top;
  sections["#SkillsAndExperience"] = $("#SkillsAndExperience").position().top;
  sections["#DesignAndArtworks"] = $("#DesignAndArtworks").position().top;
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
  $("#edButton").css({"background":"#900c3f","color":"#EEEBE3"});
  $("#expButton").css({"background":"#EEEBE3","color":"#900c3f"});
  $("#edTimeline").addClass("hidden-xs hidden-sm");
  $("#expTimeline").removeClass("hidden-xs hidden-sm");
});
$("#edButton").click(function(){
  $("#expButton").css({"background":"#900c3f","color":"#EEEBE3"});
  $("#edButton").css({"background":"#EEEBE3","color":"#900c3f"});
  $("#expTimeline").addClass("hidden-xs hidden-sm");
  $("#edTimeline").removeClass("hidden-xs hidden-sm");
});
$("#edButton").click();
