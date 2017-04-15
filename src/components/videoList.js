angular.module('video-player')
.controller('videoListCtrl', function ($window) {
  this.videos = $window.exampleVideoData;
  this.firstVideo = $window.exampleVideoData[0];
  this.onClick = (video) => {
  	// this.firstVideo = $window.exampleVideoData[$index]
  	console.log('WORDEDSSDFSD');
  }

  //$scope.source = https://www.youtube.com/embed/ + 
  // console.log($scope.$index)
})
.directive('videoList', function() {
  return {
    // TODO
    restrict: 'E',
    controller: 'videoListCtrl',
    controllerAs: 'ctrl',
    // bindToController: true,
    // scope: {videoList: '<'},
    scope: { },/////////////////////////////////////
    templateUrl: 'src/templates/videoList.html'
  };
});
