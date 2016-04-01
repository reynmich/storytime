angular.module('starter.story', [])
.controller('StoryCtrl', function($scope, $stateParams) {
  $scope.params = $stateParams;
  $scope.storyObj = {
    title: "Preperation for the Sun",
    desc: "Sunblock and hats save the day when Intense Sunlight is needed to fight off bad guys",
    tags: ['friend','vehicle','sunscreen','sunblock','darkness','sunlight'],
    id: 1,
    inputs:{
      main:       { title:'Main Character'},
      sub:        { title:'Second Character'},
      vehicle:    { title:'Favorite Vehicle'},
      vgroup:     { title:'Villian Group'},
      vvecicle:   { title:"Villian's Vehicle"}
    },
    text:''
  };
});
