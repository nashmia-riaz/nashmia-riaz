
var docViewTop = $(".docScroller").scrollTop();

$(window).load(function(){
	// Animate loader off screen
	$(".se-pre-con").fadeOut();

  $('.content').isotope({
  // options
    itemSelector: '.item',
    masonry:{
      columnWidth: 170,
      fitWidth: true
    }
  });


});

(function() {
  $.scrollify({
        section : ".page",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll:true,
        before:function() {},
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });
    AOS.init({
      easing: 'ease-in-out-sine'
    });
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

/****************PAGE ANIMATIONS *********************************/
    $(".docScroller").scroll(function () {

    });


})();//end function ready

$(window).bind('resize',function(event){

});
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
$(".content").on('mouseenter','.item',function () {
    $(this).css("z-index","5");
});

$(".content").on('mouseleave','.item',function () {
  $(this).delay(500).css("z-index","1");
});

$(".content").on('click','.item',function () {
  var imageLink = $(this).find("img").attr("src");
  var appendHTML = "<div class='imageLarge centerDiv'><img src='../"+imageLink+"'</div>";
  $(".displayImage").css("display","flex").html(appendHTML);
  $(".imageLarge").css({"opacity":"0"}).animate({
    opacity:1
  });

  $(document).mouseup(function (e)
  {
      var container = $(".imageLarge img");

      if (!container.is(e.target) && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $('.displayImage').hide();
          container.hide(500);
      }
  });
});
/********************************************************/
