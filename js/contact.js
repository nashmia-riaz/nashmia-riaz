function contactController($scope) {
    $scope.ClickNavbarLink(3);
    console.log("controller");
    autosize($('.message'));
    // var ta = document.querySelector('textarea');
    // ta.style.display = 'none';
    // autosize(ta);
    // ta.style.display = '';
    //
    // // Call the update method to recalculate the size:
    // autosize.update(ta);

    // $('textarea').autogrow();

    $scope.$on('$viewContentLoaded', function(){
      $('.se-pre-con').addClass("hidden");
    });

}
