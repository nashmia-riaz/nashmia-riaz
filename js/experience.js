function experienceController($scope) {
  $scope.ClickNavbarLink(2);
  $scope.educations = [{
      institute:"City, University of London",
      date:"2019-2020",
      details:"Masters in Computer Games Technology"
    },
    {
      institute:"NUST",
      date:"2014-2018",
      details:"Bachelors in Software Engineering"
    },
    {
      institute: "Beaconhouse School System",
      date:"2012-2014",
      details:"A levels"
    }];

    $scope.experiences = [{
      organisation:"Freelancer",
      date:"2017 - current",
      details:"Working as a freelance graphic designer and game developer"
    },
    {
      organisation:"Webtronix",
      date:"Summer Intern 2017",
      details:"Web intern for summer of 2017, worked on ASP.net"
    },
    {
      organisation:"Diode",
      date:"2015-2017",
      details:"Graphic Designer"
    }];

    $scope.$on('$viewContentLoaded', function(){
      $('.se-pre-con').addClass("hidden");
    });

}
