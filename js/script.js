(function () {
  'use strict';

  var myApp = angular.module('resumeApp', ['ngRoute'])
  .controller('defaultController', defaultController)
  .controller('aboutController', aboutController)
  .controller('projectsController', projectsController)
  .controller('experienceController', experienceController)
  .controller('contactController', contactController);

  aboutController.$inject = ['$scope'];
  projectsController.$inject = ['$scope'];
  experienceController.$inject = ['$scope'];
  contactController.$inject = ['$scope'];
  defaultController.$inject = ['$scope'];

  myApp.config(function($routeProvider, $locationProvider) {
      $routeProvider

          // route for the home page
          .when('/', {redirectTo:'/About'
          })

          .when('/About', {
              templateUrl : 'html-snippets/About.html',
              controller  : 'aboutController'
          })

          .when('/Projects', {
              templateUrl : 'html-snippets/Projects.html',
              controller  : 'projectsController'
          })

          .when('/Experience', {
              templateUrl : 'html-snippets/Experience.html',
              controller  : 'experienceController'
          })

          .when('/Contact', {
              templateUrl : 'html-snippets/Contact.html',
              controller  : 'contactController'
          })
          .otherwise({ redirectTo: '/About' });

          // use the HTML5 History API
          $locationProvider.html5Mode(false).hashPrefix('');
  });

  function defaultController($scope) {
    $scope.navLinks=[{link:"About",isActive:false}, {link:"Projects",isActive:false}, {link:"Experience",isActive:false}, {link:"Contact",isActive:false}];
    $scope.previousLink=-1;
    $scope.dataHasLoaded;
    $scope.isViewLoading = false;

    $scope.ClickNavbarLink = function(linkIndex){
      if(linkIndex != $scope.previousLink){
        $('.se-pre-con').removeClass("hidden");
        $scope.dataHasLoaded = false;
        $scope.isViewLoading = true;
        $scope.navLinks[linkIndex].isActive = true;
        if($scope.previousLink>=0){
          $scope.navLinks[$scope.previousLink].isActive = false;
        }
        $scope.previousLink = linkIndex;
      }
    };

    $scope.load = function(){
      $('.se-pre-con').addClass("hidden");
    };
  }
    function aboutController($scope) {
      $scope.ClickNavbarLink(0);

      // $scope.$on('$viewContentLoaded', function(){
      //   $(window).load(function(){
      //     $('.se-pre-con').addClass("hidden");
      //   });
      // });
    }
})();
