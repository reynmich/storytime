angular.module('starter.playlists', [])
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: "McQueen's Big Race", id: 1 },
    { title: 'A Hurt Arm', id: 2 },
    { title: 'Our New Chickens', id: 3 },
    { title: 'Why Does Uncle John Smell Funny?', id: 4 },
    { title: 'Eat Your Vegetables', id: 5 },
    { title: 'More Cowbell', id: 6 }
  ];
})
