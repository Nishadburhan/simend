app.controller('dashboardCtrl', ['$scope','$rootScope','$http','$log','Dashboard','Data','notify','cfpLoadingBar','$window', function($scope,$rootScope, $http, $log, Dashboard, Data, notify, cfpLoadingBar, $window) {
    $scope.singleBarLabels=[];
    $scope.singleBarData=[];
    Dashboard.get().then(function success(response) {
        var poles=[];
        angular.forEach(Data.get(response), function(data) {
            poles.push(Number(data.total));
            $scope.singleBarLabels.push(data.service);
    
        });
        $scope.singleBarData.push(poles);
       
    }, function error(response) {

    });
    
    
    
    $scope.singleBarSeries = ["Total Jobs"];


    $scope.singleBarOverride =  [
        {
            label: "Total Jobs",
            backgroundColor: "rgba(98,203,49,0.5)",
            borderColor: "rgba(98,203,49,0.8)",
            highlightFill: "rgba(98,203,49,0.75)",
            highlightStroke: "rgba(98,203,49,1)",
            borderWidth: 1,
            responsive:true,
            scaleBeginAtZero:true,
        }
    ];

    Dashboard.getReminders().then(function success(response) {
        $scope.nextWeekReminders=Data.get(response);
    }, function error(response) {

    });
 
    Dashboard.getToScheduleJobs().then(function success(response) {
        $scope.toScheduleJobs=Data.get(response);
    }, function error(response) {

    });

    Dashboard.getHeaderAlerts().then(function success(response) {
        // console.log(Data.get(response));
        $scope.headerAlerts=Data.get(response);
    }, function error(response) {

    });

    Dashboard.getAlerts().then(function success(response) {
        $scope.notifications=Data.get(response);
    }, function error(response) {

    });

    $scope.markReminderNiotified=function(id) {
        Dashboard.reminderNotified(id).then(function success(response) {

            Dashboard.getHeaderAlerts().then(function success(response) {
                // console.log(Data.get(response));
                $scope.headerAlerts=Data.get(response);
            }, function error(response) {
        
            });

        }, function error(response) {
            
        });
    };

    $scope.markTaskNotified=function(id) {
        Dashboard.taskNotified(id).then(function success(response) {
            Dashboard.getHeaderAlerts().then(function success(response) {
                // console.log(Data.get(response));
                $scope.headerAlerts=Data.get(response);
            }, function error(response) {
        
            });
        }, function error(response) {
            
        });
    }

    Dashboard.getTaskgroupDropDown().then(function success(response) {
        
        $scope.taskGroup=Data.get(response);
        cfpLoadingBar.complete();
        // $scope.tasks=Task.filterTask($scope.taskGroup);
        // console.log($scope.taskGroup);

        }, function error(response) {
        cfpLoadingBar.complete();

    });
    $scope.getTaskNotificationDetail=function(id) {
        cfpLoadingBar.start();
        Dashboard.taskDetail(id).then(function success(response) {
            $scope.taskForm=Data.get(response);
            $('#newTask').modal('toggle');
            cfpLoadingBar.complete();
        }, function error(response) {
            cfpLoadingBar.complete();
            
        });
    }

    
    $scope.getRminderNotificationDetail=function(id) {
        cfpLoadingBar.start();
        Dashboard.reminderDetail(id).then(function success(response) {
            $scope.formData=Data.get(response);
            $('#remindModel').modal('toggle');
            cfpLoadingBar.complete();
        }, function error(response) {
            cfpLoadingBar.complete();
        });
    }

    $scope.logoutApp=function() {
        cfpLoadingBar.start();
        $http.post('/logout').then(function success(response) {
            cfpLoadingBar.complete();
            $window.location.reload();
        }, function error(response) {
            $window.location.reload();
        });
    }
}]);