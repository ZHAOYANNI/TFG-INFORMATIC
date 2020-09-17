app.controller("logOut", function($scope, $location){
    $scope.logOut = function(){
        username="";
        $scope.showText = true;
        $scope.showLoginOption = false;
    }

    $scope.cancel=function(){
      $location.path("/");
    }

    $scope.inicial=function(){
        if(username != ""){
          $scope.showLoginOption = true;
          $scope.showText = false;
        }
        else{
          alert("Sorry, you can't log out if you aren't logged in.");
          $location.path("/");
        }
      }
})