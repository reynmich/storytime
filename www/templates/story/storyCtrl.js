angular.module('starter.story', [])
.controller('StoryCtrl', function($scope, $stateParams) {
  $scope.params = $stateParams;
  $scope.storyObj = {
    title: "McQueen's Big Race",
    id: 1,
    inputs:['main', 'sub','superhero','villian'], 
    text:'the {{main}} was friends with the {{sub}}, who loved the {{superhero}} and fought against the {{villian}}'
  };
  $scope
});
