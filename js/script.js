$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
      $("#collapsable-nav").collapse('hide');
    
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {

var dc = {};
var nr = {};
dc.history=[];
var homeHtml = "snippets/home-snippet.html";
var allCategoriesUrl =
  "https://davids-restaurant.herokuapp.com/categories.json";
var categoriesTitleHtml = "snippets/categories-title-snippet.html";
var categoryHtml = "snippets/category-snippet.html";
var menuItemsUrl =
  "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
var menuItemsTitleHtml = "snippets/menu-items-title.html";
var menuItemHtml = "snippets/menu-item.html";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
}

// Remove the class 'active' from home and switch to Menu button
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#navMenuButton").className;
  if (classes.indexOf("active") == -1) {
    classes += " active";
    document.querySelector("#navMenuButton").className = classes;
  }
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
    $dc.loadHome();
    history.pushState('$dc.loadHome()','index.html#','index.html#');
});


dc.loadHome = function(){
  // On first load, show home view
  showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
      document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
}


/**************** BUILD ARTWORKS PAGE *********************/
dc.loadArt = function(type){
  showLoading("#main-content");
  $.getJSON('/misc/'+type+'.json', function(data) {
  var finalHtml = "<div class='container'><div class='row' id='artGrid'>";
  var c=0;
  for (var i=0; i<data.length; i++){
    c++;
    var imageFileName = data[i].image.filename;
    var imageName = data[i].image.name;
    var imageDate = data[i].image.date;
    var loc= "($dc.loadPicture(\'"+imageFileName+"\',\'"+type+"\'))" ;
    finalHtml += "<section id='column"+c+"' class='col-lg-4 col-sm-6'> <div id='artwork'>"+
    "<a id='pictureLink' href='#' onclick=\"(function(){"+
    "$dc.loadPicture('"+imageFileName+"','"+imageName+"','"+imageDate+"','"+type+"');\n"+
    "}());\"><img id='pictureArt'src='images/"+type+"/"+imageFileName+"'></a>"
    +"<div id='details'><p id='imgName'>"+imageName+"</p><p id='imgDate'>"+imageDate+"</p></div></img></div></section>";
    if (c==3){
      c=0;    
     } 

     // if((i+1)%2==0){
     //  finalHtml+="<hr class='hidden'>";}
   }
    finalHtml+="</div></div>";
    insertHtml("#main-content", finalHtml);
});
  // history.pushState(loc,null,null);
}
/**********************************************************/
dc.loadImg = function(filename, name, date, path){
  finalHtml = "<img id='singleImg' src='images/"+path+"/"+filename+"'>"+
  "<div id='imageName'>"+name+"</div><div id='imageDate'>"+date+"</div>";
  insertHtml("#main-content", finalHtml);
};
dc.loadPicture = function(filename, name, date, path){
  showLoading("#main-content");
  $dc.loadImg(filename,name,date,path);
  var loc= "$dc.loadImg('"+filename+"','"+name+"','"+date+"','"+path+"')";
  history.pushState(loc,null,null);
};

dc.loadProgramming = function(){
  showLoading("#main-content");
  $.getJSON('/misc/programming.json', function(data) {
  var finalHtml = "<div class='container'><div class='row' id='artGrid'>";
  var c=0;
  for (var i=0; i<data.length; i++){
    c++;
    var imageFileName = data[i].image.filename;
    var imageName = data[i].image.name;
    var imageDate = data[i].image.date;
    var loc= "($dc.loadPicture(\'"+imageFileName+"\',\'"+type+"\'))" ;
    finalHtml += "<section id='column"+c+"' class='col-lg-4 col-sm-6'> <div id='artwork'>"+
    "<a id='pictureLink' href='#' onclick=\"(function(){"+
    "$dc.loadPicture('"+imageFileName+"','"+type+"');\n"+
    "}());\"><img id='pictureArt'src='images/"+type+"/"+imageFileName+"'></a>"
    +"<div id='details'><p id='imgName'>"+imageName+"</p><p id='imgDate'>"+imageDate+"</p></div></img></div></section>";
    if (c==3){
      c=0;    
     } 

     // if((i+1)%2==0){
     //  finalHtml+="<hr class='hidden'>";}
   }
    finalHtml+="</div></div>";
    insertHtml("#main-content", finalHtml);
});
  // history.pushState(loc,null,null);
}

global.$dc = dc;




})(window);
/************************* SLOWLY SCROLL TO TOP ******************************/
$(document).ready(function(){

    //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('#backtotop').fadeIn();
    } else {
      $('#backtotop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('#backtotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});
/*****************************************************************************/

window.onpopstate = function(event) {    
    if(event && event.state) {
        console.log(event.state);
        eval(event.state);
    }
}