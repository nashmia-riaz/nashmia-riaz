
var docViewTop = $(".docScroller").scrollTop();
var sections = ["introduction", "education","designs","artworks","projects","contactme"];
$(window).load(function(){
  $("#mySidenav div").fadeOut(250);
	// Animate loader off screen
	$(".se-pre-con").fadeOut();

  var $grid = $('.content').isotope({
  // options
    itemSelector: '.item',
    masonry:{
      columnWidth: 170,
      fitWidth: true
    }
  });

  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  window.dispatchEvent(new Event('resize'));

});
(function() {
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
      var href = $(this).attr("href");
      var elementHash = $(this.hash);
      console.log(href);
      // $root.animate({
      //     scrollTop: sections[href]
      // }, 500, function () {
      //     window.location.hash = href;
      // });
      $('html, body').animate({
        scrollTop: elementHash.offset().top
        }, 500, function () {
            window.location.hash = href;
        });
      // $.scrollify("move",sections[href]);
      return false;
  });

    var height = $(window).height();
    var halfHeight = height/2;
    var IntroHeight = $("#Introduction>div").height();
    var setIntroHeight = halfHeight - (IntroHeight/2);
    $("#Introduction>div").css("padding-top",setIntroHeight);
    $(".sidenav").css("padding-top",setIntroHeight);

    function setSocialLinks(){
      $("#socialLinks a").find(".st0").css({"stroke":"#353535","transition":"0.5s"});
      $("#socialLinks a").find(".st1").css({"fill":"white","transition":"0.5s"});
      $("#socialLinks a").find(".st2").css({"fill":"#353535","transition":"0.5s"});
    }
    setSocialLinks();
    $("#socialLinks a").hover(function(){
      $(this).find(".st0").css({"stroke":"#353535","transition":"0.5s"});
      $(this).find(".st1").css({"fill":"#353535","transition":"0.5s"});
      $(this).find(".st2").css({"fill":"white","transition":"0.5s"});
    },
    function(){
      setSocialLinks();
    });

/****************PAGE ANIMATIONS *********************************/
    $(".docScroller").scroll(function () {

    });

    // $.scrollify({
    //       section : ".page",
    //       sectionName : "section-name",
    //       interstitialSection : "",
    //       easing: "easeOutExpo",
    //       scrollSpeed: 1100,
    //       offset : 0,
    //       scrollbars: true,
    //       // standardScrollElements: ".inside",
    //       setHeights: true,
    //       overflowScroll: true,
    //       updateHash: true,
    //       touchScroll:true,
    //       before:function() {},
    //       after:function() {},
    //       afterResize:function() {},
    //       afterRender:function() {}
    //   });
      AOS.init({
        easing: 'ease-in-out-sine'
      });
})();//end function ready

$(window).bind('resize',function(event){

});
/********************Toggle menu bar******************/
var isNavDisplayed = false;

$(".c-hamburger").click(function(){
  isNavDisplayed = !isNavDisplayed;

  if(isNavDisplayed === true){
    $("#mySidenav").css({"width":"250px","box-shadow":"0px 10px 10px 5px rgba(0,0,0,0.7)"});
    setTimeout(function(){
        $("#mySidenav div").fadeIn(250);

     }, 300);
  }
  else{
    $("#mySidenav div").fadeOut(250, function(){
    $("#mySidenav").css({"width":"0px","box-shadow":"0px 10px 10px 5px rgba(0,0,0,0)"});
    });
  }
});
/********************Toggle menu bar******************/
$("#expButton").click(function(){
  $("#edButton").css({"background":"#353535","color":"white"});
  $("#expButton").css({"background":"white","color":"#353535"});
  $("#edTimeline").animate().addClass("hidden-xs hidden-sm");
  $("#expTimeline").removeClass("hidden-xs hidden-sm");
});
$("#edButton").click(function(){
  $("#expButton").css({"background":"#353535","color":"white"});
  $("#edButton").css({"background":"white","color":"#353535"});
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
  var appendHTML = "<div class='imageLarge centerDiv'><img src='../"+imageLink+"'><span class='cross'></span></div>";
  $(".displayImage").css("display","flex").html(appendHTML);
  $(".imageLarge").css({"opacity":"0"}).animate({
    opacity:1
  });

  $(".cross").click(function(){
    $('.displayImage').hide();
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
