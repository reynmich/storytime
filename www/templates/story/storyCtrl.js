angular.module('starter.story', [])
.controller('StoryCtrl', function($scope, $stateParams, $timeout, $compile, StoriesService) {
  $scope.params = $stateParams;
  var storyObj = StoriesService.getStories()[0];
  $scope.inputsObject = storyObj.inputs;
  var inputsArray = Object.keys(storyObj.inputs);
  for (var i = 0, len = inputsArray.length; i < len; i++) {
      var inputRegex = new RegExp('"'+inputsArray[i]+'"','g');
      storyObj.html = storyObj.html.replace(inputRegex,'"inputsObject.'+inputsArray[i]+'.value"')
  }
  // TODO: un-hack this, for now necesarry because angular strips out attributes on span if used in ng-bind-html
  $timeout(function(){
    var storyDiv = document.getElementById('replace-with-html');
    storyDiv.innerHTML = storyObj.html;
    $compile(storyDiv)($scope);
  })
});
