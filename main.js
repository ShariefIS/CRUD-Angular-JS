var app = angular.module("myApp",[]);
app.controller("myCtrl",function($scope,$timeout){
    $scope.Dept =["Backend","FrontEnd","FullStack"];
    $scope.data = [
        {Name:"Imadullah",Phone:123456789,Dept:"Backend",Email:"imad@xtreamit.com"},
        {Name:"Zoheb",Phone:9765431,Dept:"FrontEnd",Email:"Zoheb@xtreamit.com"},
        {Name:"Zeeshan",Phone:987654321,Dept:"FullStack",Email:"Zeshan@xtreamit.com"},
        {Name:"Imaduddin",Phone:159357456,Dept:"Backend",Email:"imad.Mohammed@xtreamit.com"}
    ];
    $scope.Create=function(){
        $scope.index= null;
        document.forms['detailForm'].reset();
    }
    $scope.Edit=function(i) {
        $scope.index=i;
      $scope.name=$scope.data[i].Name;
      $scope.phone=$scope.data[i].Phone;
      $scope.dept=$scope.data[i].Dept; 
      $scope.email=$scope.data[i].Email;  
    };
    $scope.Save=function(){
        if ($scope.index== null) {
            x={Name:$scope.name,Phone:$scope.phone,Dept:$scope.dept,Email:$scope.email};
            $scope.data.push(x);
        }
        else
        {
            i =$scope.index;
            $scope.data[i].Name=$scope.name;
            $scope.data[i].Phone=$scope.phone;
            $scope.data[i].Dept=$scope.dept;
            $scope.data[i].Email=$scope.email;
        }
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