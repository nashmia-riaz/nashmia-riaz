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

    {
      image:"Merkurdrome.png",
      name:"Logo Design | Merkurdrome",
      link:"https://www.behance.net/gallery/77445117/Logo-Design-MERKURDROME",
      description:"Logo design and branding brief done for Merkurdrome - a nightclub near Berlin themed after the planet Mercury.",
      category:"graphic-design"},

    {
    image:"bldup-03.png",
    name:"Web Design | In The Know",
    link:"https://www.behance.net/gallery/74131263/Web-Design-In-The-Know",
    description:"A web redesign concept proposed for the site In The Know. Site includes any colors of the brand and their app.",
    category:"graphic-design"},

    {image:"5.png",
    name:"Snek",
    link:"https://nashmia-riaz.github.io/Snek/",
    description:"A multiplayer take on the class Snake game, Snek was built from scratch on Unity. Originally intended to be multiplayer, Snek was later kept to local multiplayer due to limitations of UNet. The game allows up to 4 players to play at once against each other.",
    category:"game-development"},

    {
    image:"13.png",
    name:"Animated Banner for Waterz",
    link:"https://www.behance.net/gallery/72735225/Animated-Banner-Waterz",
    description:"This was an animated banner done to bring some color and life to the site for Waterz, a service in the UK that aims to reduce plastic water bottle usage by installing refilling stations everywhere.",
    category:"graphic-design"},

    {image:"11.png",
    name:"GGPrizes Logo",
    link:"https://www.behance.net/gallery/72365439/Logo-Design-GGPrizes",
    description:"GGPrizes is a brand that does give aways for gamers, mainly Fortnite players. This was a really fun project and the client was very helpful in communicating what he wanted.",
    category:"graphic-design"},

    {image:"10.png",
    name:"SOPlayer Logo",
    link:"https://www.behance.net/gallery/71286167/SOPlayer-Logo-Business-Cards",
    description:"A logo done for an online video player that supports multiple platforms.",
    category:"graphic-design"},

    {image:"9.png",
      name:"Logofolio",
      link:"https://www.behance.net/gallery/70838699/Logofolio",
      description:"Various logos I've done over the past year or so for different companies. Some were just ideas while other ended up being finalised.",
      category:"graphic-design"},

    {image:"8.png",
    name:"App Design: Am Sporty",
    link:"https://www.behance.net/gallery/69738257/App-Design-Am-Sporty",
    description:"A series of app screens designed as part of a freelancing gig. Am Sporty was an AR sports app that was supposed to be the 'it' hub for everything related to sports. The colors to be used were red and black and that's all that the client specified.",
    category:"graphic-design"},

    {image:"6.png",
    name:"Web Design: Am Sporty",
    link:"https://www.behance.net/gallery/69718371/Web-Design-Am-Sporty",
    description:"The design for a website for Am Sporty; an AR sports app. The site was small and client wanted to keep the focus on the app and it's AR feature. The colors were same as the app - red and black. ",
    category:"graphic-design"},

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
