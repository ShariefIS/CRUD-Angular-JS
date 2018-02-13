var app = angular.module("myApp",[]);
app.controller("newContrl",function($scope,$http){
    $http.get("http://localhost:63095/api/Student/GetStudent")
    .then(function(response){
        $scope.students=response.data;
    });
    $http.get("http://localhost:63095/api/College/GetCollege")
    .then(function(response){
        $scope.college=response.data
    });
    $scope.Create=function(){
        $scope.index=null;
       document.forms['detailForm'].reset();
    }
    $scope.Edit=function(i) {
        
        $http({
        method : "GET",
        url :"http://localhost:63095/api/Student/GetStudents/"+i
    }).then(function mySuccess(response) {
        $scope.values = response.data;
        $scope.modalname = $scope.values.StudName;
    }, function myError(response) {
        $scope.console.error(response.statusText);
    });
    };
    $scope.Save=function(){
            x = {
                "ID": $scope.index,
                "Name":  $scope.name,
                "Category": $scope.catg,
                "Price":   $scope.price
            }
        $http.post("http://localhost:52800/api/Products/PostProduct",x)
        .then(function mySuccess(response){
            $scope.console.log("Data Successfully Saved");
        }, function myError(response) {
            $scope.console.error(response.statusText);
        });
        $scope.header = true;
        $timeout(function(){
            $scope.header = false;  
        },2000);
    };
    $scope.Delete = function(i){
        $scope.data.splice(i,1);
        $scope.del = true;
        $timeout(function(){
            $scope.del = false;  
        },2000);
    };
});