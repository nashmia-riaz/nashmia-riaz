
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
var programmingHTML= "snippets/programming-snippet.html";
var artworksHTML = "snippets/artworks-snippet.html";
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
var switchMenuToActive = function (name) {

  var activeElements = document.getElementById("nav-list");

  for (var i=0; i<activeElements.childNodes.length; i++){
    if(activeElements.childNodes[i].className=='active'){
      activeElements.childNodes[i].className='';
    }
  }
  console.log("nav"+name+"Button");
  var nowActive = document.getElementById("nav"+name+"Button");
  nowActive.className+='active';
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {
    if(location.hash)
      $dc.showPage();
    else{
    $dc.loadHome();
    history.pushState('$dc.loadHome()',null,'#Home');}
});


dc.loadHome = function(){
  switchMenuToActive('Home');
  // On first load, show home view
  showLoading("#main-content");

  $('#nav-list').addClass(' header-hidden');
  // for (var i=0; i<activeElements.childNodes.length; i++){
  //   if(activeElements.childNodes[i].className=='active'){
  //     activeElements.childNodes[i].className='';
  //   }
  // }
  // console.log("nav"+name+"Button");
  // var nowActive = document.getElementById("nav"+name+"Button");
  // nowActive.className+='active';

    $ajaxUtils.sendGetRequest(
    homeHtml,
    function (responseText) {
      document.querySelector("#main-content")
        .innerHTML = responseText;
    },
    false);
}

dc.loadProgramming= function(){
  showLoading("#main-content");
  switchMenuToActive('Projects');
  $('#nav-list').removeClass('header-hidden');

     $ajaxUtils.sendGetRequest(
    programmingHTML,
    function (exampleHTML) {
      $.getJSON('/misc/programming.json', function(data) {
        var finalHtml = "<h1 id=\"pagetitleh1\">Projects</h1><div id=\"projects\">";
    // Loop over categories
    for (var i = 0; i < data.length; i++) {
      // Insert category values
      var html = exampleHTML;
      var name =  data[i].project.name;
      var description = data[i].project.description;
      var link = data[i].project.link;
      var imageNames = data[i].project.images;
      var date = data[i].project.date;
      var images = '';
      for (var j=0; j<imageNames.length;j++)
      {
          images+="<img src='images/projects/"+imageNames[j]+"'>";
      }

      var projectLink='';

      if(data[i].project.projectLink){
        projectLink = "<div id='gameLink'>Project can be seen in action <a href="+projectLink+">here</a>.</div>";
                      
      }
      
      html =
        insertProperty(html,
                       "projectLink",
                       projectLink);
      html =
        insertProperty(html, "name", name);
      html =
        insertProperty(html,
                       "description",
                       description);
      html =
        insertProperty(html,
                       "link",
                       link);
      html =
        insertProperty(html,
                       "images",
                       images);

      html =
        insertProperty(html,
                       "date",
                       date);
      
      finalHtml += html;
    }

    finalHtml += "<div class=\"col-lg-12 col-sd-12\"><hr></div></div>";

    document.querySelector("#main-content")
    .innerHTML=finalHtml;

  $('.fotorama').fotorama();
    });
    },
    false);
  // type='example';
  
  
   
}
dc.showPage = function(){
  if(document.location.hash == '#Home'){
    $dc.loadHome();
    history.pushState('$dc.loadHome()',null,'#Home');
  }
  else if (document.location.hash=='#Artworks'){
    $dc.loadArt('artworks');
    history.pushState('$dc.loadArt(\'artworks\')',null,'#Artworks');
  }
  else if (document.location.hash=='#Designs'){
    $dc.loadArt('designs');
    history.replaceState('$dc.loadArt(\'designs\')',null,'#Designs');
  }
  else if (document.location.hash=='#Projects'){
    $dc.loadProgramming();
    history.pushState('$dc.loadProgramming()','null','#Projects');
  }
  
}

dc.showPage2 = function(){
  if(document.location.hash == '#Home'){
    $dc.loadHome();
    // history.pushState('$dc.loadHome()',null,'#Home');
  }
  else if (document.location.hash=='#Artworks'){
    $dc.loadArt('artworks');
    // history.pushState('$dc.loadArt(\'artworks\')',null,'#Artworks');
  }
  else if (document.location.hash=='#Designs'){
    $dc.loadArt('designs');
    // history.replaceState('$dc.loadArt(\'designs\')',null,'#Designs');
  }
  else if (document.location.hash=='#Projects'){
    $dc.loadProgramming();
    // history.pushState('$dc.loadProgramming()','null','#Projects');
  }
  
}

/**************** BUILD ARTWORKS PAGE *********************/
dc.loadArt = function(type){
  showLoading("#main-content");
  switchMenuToActive(type);
  $('#nav-list').removeClass('header-hidden');
  $('#nav-list').addClass('header-visible');

  $ajaxUtils.sendGetRequest(artworksHTML,
    function(artsHTML){
      $.getJSON('/misc/'+type+'.json', function(data) {
        var finalHtml = "<h1 id=\"pagetitleh1\">"+type+"</h1><div class='container-fluid'><div class='row' id='artGrid'>";
    // Loop over categories
    var c=0;
    for (var i = 0; i < data.length; i++) {
      c++;
      // Insert category values
      var html = artsHTML;
      var filename =  data[i].image.filename;
      var name = data[i].image.name;
      var date = data[i].image.date;
      html =
        insertProperty(html, "name", name);
      html =
        insertProperty(html,
                       "filename",
                       filename);
      html =
        insertProperty(html,
                       "date",
                       date);
      html =
        insertProperty(html,
                       "type",
                       type);
      html =
        insertProperty(html,
                       "columncount",
                       c);
      

      finalHtml += html;

      if (c==3){
      c=0;    
     } 
    }

    finalHtml += "</div></div>";

    document.querySelector("#main-content")
    .innerHTML=finalHtml;

    });
    }, false);
  
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
  history.pushState(loc,null,'#'+name);
};



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
console.log('state change');  
    if(event || event.state) {
        // console.log(event.state);
        // eval(event.state);
        $dc.showPage2();
    }
}