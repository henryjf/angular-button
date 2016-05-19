function MainController($scope) {

  //starts with 0 clicks
   $scope.buttonStatus = 0;

   $scope.label = 'likes';

  //register button click which
   $scope.clicked= function() {
     $scope.buttonStatus = $scope.buttonStatus + 1;
     //when buttonStatus=1, label should be 'like'
     if ($scope.buttonStatus === 1) {
       $scope.label = 'like';
     } else {
       $scope.label = 'likes';
     }
   }

}


export { MainController };
