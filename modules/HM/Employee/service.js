app.factory('Employee', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/hm/employee');
    },
    show : function(id) {
      return $http.get('sim/hm/employee/' + id);
    },
    save : function(employeeData) {
      return $http({
        method: 'POST',
        url: 'sim/hm/employee',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(employeeData)
      });
    },
    employees : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    destroy : function(id) {
      // return $http.delete('sim/hm/employee/' + id);
      return $http({
        method: 'POST',
        url: 'sim/hm/employee/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    DropDown:function(module) {
      return $http.get('sim/hm/'+module+'/ddmenu');
    },
    country :function() {
      return $http.get('M@ster786/ddmenu/am/country');
    }
  };

}]);
