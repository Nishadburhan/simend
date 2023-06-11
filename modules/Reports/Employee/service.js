app.factory('Report',['$http', function($http) {
    return {
        get:function(role) {
            // return $http({
            //     method: 'POST',
            //     url: 'sim/pm/project/report',
            //     headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            //     data: $.param(role)
            // });

            return $http.post('sim/pm/job/report');
        }
    }
}]);