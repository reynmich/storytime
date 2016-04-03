angular.module('starter.myStories', [])
.controller('MyStoriesCtrl', function($scope, StoriesService) {
  $scope.myStories = StoriesService.getStories();
})
