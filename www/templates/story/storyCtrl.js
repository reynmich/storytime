angular.module('starter.story', [])
.controller('StoryCtrl', function($scope, $stateParams) {
  $scope.params = $stateParams;
});
