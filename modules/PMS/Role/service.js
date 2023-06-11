app.factory('Role', ['$http', function($http) {

   return {
       get:function() {
        return $http.get("sim/sap/role");
       },
       save: function(role) {
        return $http({
          method: 'POST',
          url: 'sim/sap/role',
          headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
          data: $.param(role)
        });
      },
      EditData:function(id) {
        return $http.get("sim/sap/role/"+id);
       },
       DestroyRole : function(id) {
        // return $http.delete("sim/sap/role/"+id);
        return $http({
          method: 'POST',
          url: 'sim/sap/role/'+id,
          headers: { 
            "Content-Type" : "application/json",
            "X-HTTP-Method-Override": "DELETE"
          },
        });
      },
      GetModule:function() {
        return $http.get("sim/sap/modules");
       },
       EditModule:function(id) {
        return $http.get("sim/sap/role/modules/"+id);
       }
       
   }
}]);