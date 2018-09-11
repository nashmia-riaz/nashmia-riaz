function projectsController($scope) {
  $scope.projects=[{
    image:"8.png",
    name:"App Design: Am Sporty",
    link:"https://www.behance.net/gallery/69738257/App-Design-Am-Sporty",
    description:"A series of app screens designed as part of a freelancing gig. Am Sporty was an AR sports app that was supposed to be the 'it' hub for everything related to sports. The colors to be used were red and black and that's all that the client specified.",
    category:"graphic-design"},

    {image:"7.png",
    name:"Ad Design: Trains From A-Z",
    link:"https://www.behance.net/gallery/69740887/Ad-Flyer-Design-Trains-From-A-Z",
    description:"As part of a freelancing job, this was a series of ads done for children's book called \"Trains From A-Z\". The client wanted something that was colorful and fun, all the while sleek and professional. The ads were meant to be used on social media.",
    category:"graphic-design"},

    {image:"6.png",
    name:"Web Design: Am Sporty",
    link:"https://www.behance.net/gallery/69718371/Web-Design-Am-Sporty",
    description:"The design for a website for Am Sporty; an AR sports app. The site was small and client wanted to keep the focus on the app and it's AR feature. The colors were same as the app - red and black. ",
    category:"graphic-design"},

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

    {image:"2.png",
    name:"CeeVee",
    link:"https://nashmia-riaz.github.io/CeeVee/",
    description:"Part of a university project, CeeVee was a resume building website (confusing, I know) where a user entered his/her credentials and it generated a PDF. It was intended for a web development project and used HTML, CSS and JQuery.",
    category:"other"},

    {image:"1.png",
    name:"Fat Cat",
    link:"https://nashmia-riaz.github.io/FatCat/",
    description:"One of my first projects, Fat Cat was meant for educational purposes only. It was built at the time (2014, my first year at university) to learn Unity. I even made a how-to blogpost to guide others who might be looking to learn Unity as beginners. Everything was implemented from scratch.",
    category:"game-development"}
  ];

  $scope.isHidden = true;

  $scope.ClickProject = function (projectIndex){
    $scope.isHidden = false;
    $scope.projectName = $scope.projects[projectIndex].name;
    $scope.projectInfo = $scope.projects[projectIndex].description;
    $('.projectInfo').fadeIn();
  };

  $scope.ClickCross = function(){
    $('.projectInfo').fadeOut("slow", function(){
      $scope.isHidden=true;
    });
  }
  // $scope.$on('$viewContentLoading', function(){
  //   $(".se-pre-con").fadeIn();
  // });
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
}
