angular.module('video-player')
.controller('videoList', function ($scope, $window) {
  $scope.videoList = $window.exampleVideoData
  $scope.firstVideo = $window.exampleVideoData[0];
  //$scope.source = https://www.youtube.com/embed/ + 
  // console.log($scope.$index)
})
.directive('videoList', function() {
  return {
    // TODO
    restrict: 'E',
    // controllerAs: 'ctrl',
    // bindToController: true,
    scope: {videoList: '<'},
    controller: 'videoList',
    scope: { },/////////////////////////////////////
    templateUrl: 'src/templates/videoList.html'
  };
});
