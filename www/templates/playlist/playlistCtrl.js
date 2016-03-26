angular.module('starter.playlist', [])
.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.params = $stateParams.playlistId;
});
