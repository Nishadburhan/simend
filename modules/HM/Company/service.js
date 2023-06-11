app.factory('Profile', ['$http', function($http) {
    return {
        get:function() {
            return $http.get("M@ster786/tenant/company/get");

        },
        getCountry:function() {
            return $http.get("M@ster786/ddmenu/am/country");

        },
        getTimezone:function() {
            return $http.get("M@ster786/ddmenu/am/timezone");

        },
        getCurrency:function() {
            return $http.get("M@ster786/ddmenu/am/currency");

        },
        save: function(obj) {
            return $http({
              method: 'POST',
              url: 'M@ster786/tenant/company/post',
              headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
              data: $.param(obj)
            });
          }
        
    }
}]);