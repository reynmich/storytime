angular.module('starter.directives', [])
.controller('StoryDirectiveController', ['$scope', function($scope) {
  $scope.test = 'test is working';
}])
.directive("story",function(){
  return {
    link: function(scope, element, attr){
        scope.test = 'link working',
        scope.atest = attr.atest
    },
    restrict: 'AE',
    template: 'result: {{test}}, attribute result: {{atest}}'
  };
});
