angular.module('starter.myStories', [])
.controller('MyStoriesCtrl', function($scope) {
  $scope.myStories = [
    { title: "Preparation for the Sun", id: 1, desc: "Sunblock and hats save the day when Intense Sunlight is needed to fight off bad guys", photoUrl:"http://worldartsme.com/images/small-sun-clipart-1.jpg" },
    { title: 'A Hurt Arm', id: 2 },
    { title: 'Our New Chickens', id: 3 },
    { title: 'Why Does Uncle John Smell Funny?', id: 4 },
    { title: 'Eat Your Vegetables', id: 5 },
    { title: 'More Cowbell', id: 6 }
  ];
})
