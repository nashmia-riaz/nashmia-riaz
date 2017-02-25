var educations=[{
   "No":"1",
   "Pos":"Bachelors",
   "Year":"2014-Current",
   "Institute":"SEECS, NUST",
   "Grade":"3.40",
   "Major":"Software Engineering",
   "Last":" "
  },
  {
     "No":"2",
     "Pos":"A Levels",
     "Year":"2012-2014",
     "Institute":"Beaconhouse School System",
     "Grade":"3 As",
     "Major":"Math & Sciences",
     "Last":" "
  },
  {
     "No":"3",
     "Pos":"O Levels",
     "Year":"2009-2012",
     "Institute":"Beaconhouse School System",
     "Grade":"8 As",
     "Major":"Math & Sciences",
     "Last":"last"
  }
];
var experiences=[{
   "No":"1",
   "Pos":"Designer",
   "Year":"2016-Current",
   "Institute":"Diode",
   "Grade":" ",
   "Major":" ",
   "Last":" "
 },
 {
   "No":"2",
   "Pos":"Designer",
   "Year":"2016-2017",
   "Institute":"NIMUN",
   "Grade":" ",
   "Major":" ",
   "Last":" "
 },
 {
    "No":"3",
    "Pos":"Head Designer",
    "Year":"2016-2017",
    "Institute":"IEEE SEECS",
    "Grade":" ",
    "Major":" ",
    "Last":"last"
   }
];

var designs = [
  {
    "link":"1"
  },
  {
    "link":"2"
  },
  {
    "link":"3"
  },
  {
    "link":"4"
  },
  {
    "link":"5"
  },
  {
    "link":"6"
  },
  {
    "link":"7"
  },
  {
    "link":"8"
  },
  {
    "link":"9"
  },
  {
    "link":"10"
  },
  {
    "link":"11"
  },
  {
    "link":"12"
  },
  {
    "link":"13"
  },
  {
    "link":"14"
  },
  {
    "link":"15"
  }
];

var artworks = [
  {
    "link":"1"
  },
  {
    "link":"2"
  },
  {
    "link":"3"
  },
  {
    "link":"4"
  },
  {
    "link":"5"
  },
  {
    "link":"6"
  },
  {
    "link":"7"
  },
  {
    "link":"8"
  },
  {
    "link":"9"
  },
  {
    "link":"10"
  },
  {
    "link":"11"
  },
  {
    "link":"12"
  },
  {
    "link":"13"
  },
  {
    "link":"14"
  },
  {
    "link":"15"
  }
];

var projects=[{
    "link":"1",
    "title":"CeeVee",
    "explanation":"CeeVee is an online resume building website that works dynamically.",
    "GithubLink":"",
    "LiveLink":""
  },
  {
    "link":"2",
    "title":"Online CV Template",
    "explanation":"A website template that I made to present your extensive online CV.",
    "GithubLink":"https://github.com/nashmia-riaz/OldResume",
    "LiveLink":"http://nashmia-riaz.github.io/OldResume"
},
{
  "link":"3",
  "title":"Collaborative White Board",
  "explanation":"Collaborative white board made using PubNub",
  "GithubLink":"",
  "LiveLink":""
},
{
  "link":"4",
  "title":"Fat Cat",
  "explanation":"Unity3D game made and coded entirely from scratch.",
  "GithubLink":"",
  "LiveLink":""
}];


function replaceInBrackets(string,toReplace,replaceWith){
  return string.replace("{{"+toReplace+"}}", replaceWith);
}
function getHtml(path){
  var result ="";
  $.ajax({
        url: path,
        type: 'get',
        dataType: 'html',
        async: false,
        success: function(data) {
            result = data;
        }
     });
     return result;
}

function populateEdTimeline(){
  var html="";
  var section = getHtml("../html-snippets/edTimeline.html");
  for(var x in educations){
    var section1 = replaceInBrackets(section,"ed.Last",educations[x].Last);
    section1 = replaceInBrackets(section1,"ed.No",educations[x].No);
    section1 = replaceInBrackets(section1,"ed.Year",educations[x].Year);
    section1 = replaceInBrackets(section1,"ed.Institute",educations[x].Institute);
    section1 = replaceInBrackets(section1,"ed.Pos",educations[x].Pos);
    section1 = replaceInBrackets(section1,"ed.Grade",educations[x].Grade);
    section1 = replaceInBrackets(section1,"ed.Major",educations[x].Major);

    html+=section1;
  }
  $("#edTimeline .timeline").html(html);
  // return html;
}

function populateExTimeline(){
  var html="";
  var section = getHtml("../html-snippets/exTimeline.html");
  for(var x in educations){
    var section1 = replaceInBrackets(section,"ex.Last",experiences[x].Last);
    section1 = replaceInBrackets(section1,"ex.No",experiences[x].No);
    section1 = replaceInBrackets(section1,"ex.Year",experiences[x].Year);
    section1 = replaceInBrackets(section1,"ex.Institute",experiences[x].Institute);
    section1 = replaceInBrackets(section1,"ex.Pos",experiences[x].Pos);

    html+=section1;
  }

  $("#expTimeline .timeline").html(html);
}

function populateDesigns(){
  var html="";
  var item = getHtml("../html-snippets/designs.html");
  for(var x in designs){
    var section1 = replaceInBrackets(item,"x.link",designs[x].link);
    // section1 = replaceInBrackets(item,"delay",((parseInt(x,10)+1)*10).toString());
    html+=section1;
  }

  $("#Designs #DesignsGrid").html(html);
}

function populateArtworks(){
  var html="";
  var item = getHtml("../html-snippets/artworks.html");
  for(var x in artworks){
    var section1 = replaceInBrackets(item,"xy.link",artworks[x].link);

    html+=section1;
  }
  $("#Artworks .grid .container").html(html);
}

function populateProjects(){
  var item = getHtml("../html-snippets/projects.html");
  var html = "";
  for(var x in projects){
    if(x%2===0){
      html += "<div class='container'><div class='row'>";
    }
    var section1 = replaceInBrackets(item,"link",projects[x].link);
    section1 = replaceInBrackets(section1,"title",projects[x].title);
    section1 = replaceInBrackets(section1,"explanation",projects[x].explanation);
    section1 = replaceInBrackets(section1,"LiveLink",projects[x].LiveLink);
    section1 = replaceInBrackets(section1,"GithubLink",projects[x].GithubLink);

    html+=section1;
    if(x%2===1){
      html += "</div></div>";
    }
  }
  $(".projectsDiv").html(html);
}

(function(){
  populateEdTimeline();
  populateExTimeline();
  populateDesigns();
  populateArtworks();
  populateProjects();
})();
