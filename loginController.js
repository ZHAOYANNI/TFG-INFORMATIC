app.controller("loginController", function($scope,$http, $location, $timeout){
    $scope.signUpInfo = {
        username: undefined,
        password: undefined,
        confirPass: undefined,
        email: undefined
    };
    $scope.loginInfo = {
        username: undefined,
        password: undefined
    };

    $scope.signUserUp = function(){
        var error1=false, error2=false, error3=false, error4=false, error5=false;
        $scope.error1=false;
        $scope.error2=false;
        $scope.error3=false;
        $scope.error4=false;
        $scope.error5=false;
        if($scope.signUpInfo.username == '' || $scope.signUpInfo.username == null){
            error1 = true;
            $scope.error1 = true;
        }
        if($scope.signUpInfo.password == null){
            error2 = true;
            $scope.error2 = true;
        }
        if($scope.signUpInfo.confirPass == null){
            error3 = true;
            $scope.error3 = true;
        }
        if($scope.signUpInfo.email == null){
            error4 = true;
            $scope.error4 = true;
        }
        if($scope.signUpInfo.password != null && $scope.signUpInfo.confirPass != null
             && $scope.signUpInfo.password != $scope.signUpInfo.confirPass){
                 error5 = true;
                 $scope.error5 = true;
        }
        if(!error1 && !error2 && !error3 && !error4 && !error5){
            $http({ 
                url: './endpoint/signup.php',
                method: 'POST',
                headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: {
                    username: $scope.signUpInfo.username,
                    password: $scope.signUpInfo.password,
                    email: $scope.signUpInfo.email
                },
            }).then(function success(response){
                if(response.data == "ERROR"){
                    $scope.errorExiste = true;
                }
                else{
                    $scope.exito = true;
                    $timeout(function(){
                        $location.path("/login");
                    }, 2000);
                    
                }
            }, function error(response){
                console.log("error");
            });
        }
    };

    $scope.userLogin = function(){
        var error1=false, error2=false;
        $scope.Error1=false;
        $scope.Error2=false;
        if($scope.loginInfo.username == null){
            error1 = true;
            $scope.Error1 = true;
        }
        if($scope.loginInfo.password == null){
            error2 = true;
            $scope.Error2 = true;
        }
       if(!error1 && !error2){
            var config = {
                url: 'endpoint/login.php',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: {
                    username: $scope.loginInfo.username,
                    password: $scope.loginInfo.password
                }
            }
        
            $http(config).then(function success(response){
                if(response.data == "ERROR"){
                    $scope.errorexiste = true;
                }
                else{
                    username = response.data;
                    $location.path("/user");
                }
            }, function error(response){
                console.log("error");
            });
        }
    }
})