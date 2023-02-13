function projectsController($scope, $timeout) {
  if($scope.previousLink !== 1){
    $scope.ClickNavbarLink(1);
  }

  $scope.projects=[
    {
      image:"Damage Control.png",
      name:"Game Development | Damage Control",
      link:"https://blastinghavoc.github.io/DamageControl/",
      description:"For Global Game Jam 2020, a game about the theme 'repair' where you follow the hero around trying to clean up his mess. Made using Unity.",
      category:"game-development"},
  {
      image:"Stack It Up.png",
      name:"Game Development | Stack It Up",
      link:"https://nashmia-riaz.github.io/StackItUp/",
      description:"A game made as a marketing tool for a fictional company, Stack It Up is a simplified version of Overcooked for mobile. Get in the antics of the burger making world! Designed and developed from scratch, made with Unity.",
      category:"game-development"},
  {
      image:"Perdita.png",
      name:"Game Development | Perdita",
      link:"https://github.com/nashmia-riaz/Perdita",
      description:"A horror game with procedurally-generated maps and a smart A* based AI. Made in OpenGL and C++.",
      category:"game-development"},
  {
      image:"14.png",
      name:"Floopy Birdie",
      link:"https://nashmia-riaz.github.io/kin-test-game/",
      description:"A game inspired from Flappy Bird, Floopy Birdie integrates Kin SDK with the game along with additional features such as the ability to revive player after death.",
      category:"game-development"},

    {image:"5.png",
    name:"Snek",
    link:"https://nashmia-riaz.github.io/Snek/",
    description:"A multiplayer take on the class Snake game, Snek was built from scratch on Unity. Originally intended to be multiplayer, Snek was later kept to local multiplayer due to limitations of UNet. The game allows up to 4 players to play at once against each other.",
    category:"game-development"},

    {image:"4.png",
    name:"UI Animations",
    link:"https://www.behance.net/gallery/69375175/A-Series-of-Minimal-UI-Animations",
    description:"Encompasses some UI animations that I've done for clients (and as a hobby) in the past. All were done on Adobe After Effects.",
    category:"graphic-design"},

    {image:"3.png",
    name:"Virtual Pakistan",
    link:"https://nashmia-riaz.github.io/ComputerGraphics/Virtual%20Pakistan%20Webgl/index.html",
    description:"Part of a university project, Virtual Pakistan aimed to explore famous monuments across Pakistan. The models were made in Blender and were kept low poly to cater to the limitations of mobile phones. The project was implemented in Unity.",
    category:"game-development"},
  ];

  $scope.isHidden = true;

  $scope.ClickProject = function (projectIndex){
    $scope.isHidden = false;
    $scope.projectName = $scope.projects[projectIndex].name;
    $scope.projectInfo = $scope.projects[projectIndex].description;
    $scope.projectLink = $scope.projects[projectIndex].link;
    $('.projectInfo').fadeIn();
  };

  $scope.ClickCross = function(){
    $('.projectInfo').fadeOut("slow", function(){
      $scope.isHidden=true;
    });
  }

  $scope.allFilter = function(){
    $('.grid').isotope({ filter: '*' });
  }

  $scope.GDFilter = function(){
    $('.grid').isotope({ filter: '.graphic-design' });
  }

  $scope.gameFilter = function(){
    $('.grid').isotope({ filter: '.game-development' });
  }

  $scope.otherFilter = function(){
    $('.grid').isotope({ filter: '.other' });
  }

  $timeout(function() {
      onRenderReadyStartIsotope();
  }, 1000);

}
