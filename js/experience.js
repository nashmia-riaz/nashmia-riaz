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
    }];

    $scope.experiences = [{
      organisation:"Purramid Learning",
      date:"2020 - Current",
      details:"Lead Developer"
    },
    {
      organisation:"Knockout Nation",
      date:"2018-2019",
      details:"Lead Developer"
    }];

    $scope.$on('$viewContentLoaded', function(){
      $('.se-pre-con').addClass("hidden");
    });

}
