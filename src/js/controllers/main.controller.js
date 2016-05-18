function MainController($scope) {

  $scope.buttonStatus = '0 Likes';
  $scope.clicked = function(x) {
    // if (clicks === 1)
    $scope.buttonStatus = '1 Like';

  if (x > 1)
    $scope.buttonStatus = x + ' Likes';
  }

}



export { MainController };
