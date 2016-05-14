function MainController($scope) {

  $scope.allTasks = [];

  $scope.addTask = function(taskString) {
  $scope.allTasks.push(taskString);
  $scope.task = '';
}

}


export { MainController };
