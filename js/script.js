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
          .when('/', {
              templateUrl : 'html-snippets/About.html',
              controller  : 'aboutController',
              resolve: {
                init: function() {
                  return function() {
                    console.log("LOAD HOME");
                    $scope.ClickNavbarLink(0);
                  }
                }
              }
          })

          .when('/About', {
              templateUrl : 'html-snippets/About.html',
              controller  : 'aboutController',
              resolve: {
                init: function() {
                  return function() {
                    console.log("LOAD HOME");
                    $scope.ClickNavbarLink(0);
                  }
                }
              }
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
          $locationProvider.html5Mode(true);
  });

  function defaultController($scope) {
    $scope.navLinks=[{link:"About",isActive:true}, {link:"Projects",isActive:false}, {link:"Experience",isActive:false}, {link:"Contact",isActive:false}];
    var previousLink = 0;
    $scope.dataHasLoaded;
    $scope.isViewLoading = false;

    $scope.ClickNavbarLink = function(linkIndex){
      if(linkIndex != previousLink){
        $scope.dataHasLoaded = false;
        $scope.isViewLoading = true;
        $scope.navLinks[linkIndex].isActive = true;
        $scope.navLinks[previousLink].isActive = false;
        previousLink = linkIndex;
      }
    };

    $scope.$on('$viewContentLoaded', function(){
      // $(window).load(function(){
        console.log("loaded");
      $('.se-pre-con').addClass("hidden");
        $scope.dataHasLoaded = true;
      // });
    });
    $scope.$on('$viewContentLoading', function (event, next, current) {
      $scope.isViewLoading = true;
      // $('.se-pre-con').fadeIn();
      console.log("Loading");
        $('.se-pre-con').removeClass("hidden");
    });
    // $scope.$on('$viewContentLoading', function(){
    //   $('.se-pre-con').removeClass("hidden");
    // });
  }
    function aboutController($scope) {}
})();
