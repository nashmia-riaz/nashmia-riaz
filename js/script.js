
/* Set the width of the side navigation to 250px */
var masonryWidth=0;

var sections = {
  "#Introduction":0,
  "#Education":0,
  "#Designs":0,
  "#Artworks":0,
  "#Projects":0,
  "#ContactMe":0
};
var isAndroid=false;
var docViewTop = $(".docScroller").scrollTop();
function initAnimate(){
  if(!isAndroid){
    if(docViewTop > sections["#Education"] || docViewTop < sections["#Education"]){
      $("#Education .mainHeading").fadeOut();
    }
      docViewTop = $(".docScroller").scrollTop();
      if(docViewTop<=sections["#Introduction"]){
        $("#Introduction>div").fadeIn(500);
      }
      else if(docViewTop > sections["#Introduction"]){
        $("#Introduction>div").fadeOut(0);
      }

      if(docViewTop > sections["#Education"] || docViewTop < sections["#Education"]){
        $("#Education .mainHeading").fadeOut();
        $("#edTimeline").css({"left":"-200px","opacity":"0"});
        $("#expTimeline").css({"right":"-200px","opacity":"0"});
      }
      if(docViewTop==sections["#Education"]){
        $("#Education .mainHeading").fadeIn();
        $("#edButton").fadeIn();
        $("#expButton").fadeIn();
        $("#edTimeline").animate({"left":"0px","opacity":"1"},500);
        $("#expTimeline").animate({"right":"0px","opacity":"1"},500);
      }

      if(docViewTop==sections["#Designs"]){
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

      if(docViewTop==sections["#Projects"]){
        $(".seeMore").show(500);
        $(".projectLeft").animate({"left":"0","opacity":"1"},500);
        $(".projectRight").animate({"right":"0","opacity":"1"},500);
      }
      if(docViewTop > sections["#Projects"] || docViewTop < sections["#Projects"]){
        $(".seeMore").hide(500);
        $(".projectLeft").css({"left":"-200px","opacity":"0"});
        $(".projectRight").css({"right":"-200px","opacity":"0"});
      }
  }
}
initAnimate();
if( /Android/i.test(navigator.userAgent) ) {
  isAndroid=true;
}
if(isAndroid){
  $(".item").css("opacity","1");
  $(".seeMore").css("position","relative");
}
function setMasonryWidth(){
  if($(window).width()<768){
    masonryWidth=90;
  }
  else if($(window).width()<992){
    masonryWidth=120;
  }
  else if($(window).width()<1200){
    masonryWidth=140;
  }
  else if($(window).width()>=1200){
    masonryWidth=140;
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
  if(!isAndroid){
    if(docViewTop > sections["#Education"] || docViewTop < sections["#Education"]){
      $("#Education .mainHeading").fadeOut(0);
    }
    if(docViewTop == sections["#Designs"]){
      $("#Designs").find('.item').each(function(i) {
              $(this).delay(i*100).animate({
                  'opacity' : 1,
              }, 500);
          });
    }
    if(docViewTop == sections["#Artworks"]){
      $("#Artworks").find('.item').each(function(i) {
              $(this).delay(i*100).animate({
                  'opacity' : 1,
              }, 500);
          });
    }
  }
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

  sections["#Introductions"] = 0;
  sections["#Education"] = parseInt($(".page").css("height"));
  sections["#Designs"] = parseInt($(".page").css("height"))*2;
  sections["#Artworks"] = parseInt($(".page").css("height"))*3;
  sections["#Projects"] = parseInt($(".page").css("height"))*4;
  sections["#ContactMe"] = parseInt($(".page").css("height"))*5;


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
        initAnimate();
      // if(!isAndroid){
      //   if(docViewTop > sections["#Education"] || docViewTop < sections["#Education"]){
      //     $("#Education .mainHeading").fadeOut();
      //   }
      //     docViewTop = $(".docScroller").scrollTop();
      //     if(docViewTop<=sections["#Introduction"]){
      //       $("#Introduction>div").fadeIn(500);
      //     }
      //     else if(docViewTop >= sections["#Introduction"]+height){
      //       $("#Introduction>div").fadeOut(0);
      //     }
      //
      //     if(docViewTop > sections["#Education"] || docViewTop < sections["#Education"]){
      //       $("#Education .mainHeading").fadeOut();
      //       $("#edTimeline").css({"left":"-200px","opacity":"0"});
      //       $("#expTimeline").css({"right":"-200px","opacity":"0"});
      //     }
      //     if(docViewTop==sections["#Education"]){
      //       $("#Education .mainHeading").fadeIn();
      //       $("#edButton").fadeIn();
      //       $("#expButton").fadeIn();
      //       $("#edTimeline").animate({"left":"0px","opacity":"1"},500);
      //       $("#expTimeline").animate({"right":"0px","opacity":"1"},500);
      //     }
      //
      //     if(docViewTop==sections["#Designs"]){
      //       $("#Designs").find('.item').each(function(i) {
      //               $(this).delay(i*100).animate({
      //                   'opacity' : 1,
      //               }, 500);
      //           });
      //     }
      //     if(docViewTop > sections["#Designs"] || docViewTop < sections["#Designs"]){
      //       $("#Designs").find('.item').each(function(i) {
      //               $(this).css({
      //                   'opacity' : '0',
      //               });
      //           });
      //     }
      //
      //     if(docViewTop==sections["#Artworks"]){
      //       $("#Artworks").find('.item').each(function(i) {
      //               $(this).delay(i*100).animate({
      //                   'opacity' : 1,
      //               }, 500);
      //           });
      //     }
      //     if(docViewTop > sections["#Artworks"] || docViewTop < sections["#Artworks"]){
      //       $("#Artworks").find('.item').each(function(i) {
      //               $(this).css({
      //                   'opacity' : '0',
      //               });
      //           });
      //     }
      //
      //     if(docViewTop==sections["#Projects"]){
      //
      //     }
      //     if(docViewTop > sections["#Projects"] || docViewTop < sections["#Projects"]){
      //
      //     }
      //
      // }

    });


})();//end function ready

$(window).bind('resize',function(event){
    setMasonryWidth();
    sections["#Introductions"] = 0;
    sections["#Education"] = parseInt($(".page").css("height"));
    sections["#Designs"] = parseInt($(".page").css("height"))*2;
    sections["#Artworks"] = parseInt($(".page").css("height"))*3;
    sections["#Projects"] = parseInt($(".page").css("height"))*4;
    sections["#ContactMe"] = parseInt($(".page").css("height"))*5;

    $(".project").find('.project').each(function(i) {
        var projectImgHeight = $(this).find('.projectImage').height();
        var projectImgWidth = $(this).find('.projectImage').width();

        var projectInfoHeight = projectImgHeight - 20;
        var projectInfoWidth = projectImgWidth;
        var projectInfoLeft = projectImgWidth/2 + 20;
        console.log(projectImgHeight);
        $(this).find('.projectInformation').css({"height":projectInfoHeight,"right":"50px"});
    });

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
