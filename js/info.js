var app = angular.module("myApp",[]);

app.controller("myCtrl", function($scope,$compile){
  $scope.educations=[{
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
  $scope.experiences=[{
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

  $scope.designs = [
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

  $scope.artworks = [
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

  $scope.projectsLeft=[{
      "link":"1",
      "title":"CeeVee",
      "explanation":"CeeVee is an online resume building website that works dynamically."
    },
    {
      "link":"2",
      "title":"Online CV Template",
      "explanation":"A website template that I made to present your extensive online CV."
  }];

  $scope.projectsRight=[
  {
    "link":"3",
    "title":"Collaborative White Board",
    "explanation":"Collaborative white board made using PubNub"
  },
  {
    "link":"4",
    "title":"Fat Cat",
    "explanation":"Unity3D game made and coded entirely from scratch."
  }];

});
