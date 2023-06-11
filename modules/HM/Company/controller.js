app.controller('profileCtrl', ['$scope','$http','$log','Profile','Data','notify','cfpLoadingBar', function($scope, $http, $log, Profile, Data, notify,cfpLoadingBar) {
    $scope.formData=
    {

    };
    
    cfpLoadingBar.start();
    Profile.get().then(function success(response) {
        cfpLoadingBar.complete();
        $("#myModal").modal("show");
        $scope.formData=Data.get(response);
    }, function error(err) {
        cfpLoadingBar.complete();
    });

    Profile.getCountry().then(function success(response) {
        $scope.countries=Data.get(response);
    }, function error(err) {
    });

    Profile.getTimezone().then(function success(response) {
        $scope.timezones=Data.get(response);
    }, function error(err) {
    });

    Profile.getCurrency().then(function success(response) {
        $scope.currencies = Data.get(response);
    }, function error(err) {
    });

    $scope.data=function(value)
    {
        alert(value);
    }

    $scope.saveProfile=function(){
        cfpLoadingBar.start();
        Profile.save($scope.formData).then(function success(response) {
            cfpLoadingBar.complete();
            notify.custom('success',' Profile Successfully Saved!','Profile');
            Profile.get().then(function success(responsedata) {
                $scope.formData=responsedata.data;
            }, function error(err) {
				notify.custom('error','Something went wrong!','Profile');
            });
        }, function error(err) {
            cfpLoadingBar.complete();
    		notify.custom('error','Something went wrong!','Profile');
        });
    }
  
}]);
