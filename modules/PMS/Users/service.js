app.factory('User', ['$http', function($http) {
    return {
        get:function() {
            return $http.get("sim/sap/user");
           },
           save: function(user) {
            return $http({
              method: 'POST',
              url: 'sim/sap/user',
              headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
              data: $.param(user)
            });
          },
          editdata:function(id) {
            return $http.get("sim/sap/user/"+id);
           },
           terminate: function(id) {
            return $http({
                method: 'POST',
                url:      "sim/sap/user/terminate/"+id,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(id)
              });
  
          },
          GetEmply:function() {
            return $http.get("sim/hm/employee/ddmenu");
           },
           Getroledata:function() {
            return $http.get("sim/sap/role");
           },


    }

}]);
