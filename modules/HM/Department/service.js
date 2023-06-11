app.factory('Department', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/hm/department');
    },
    show : function(id) {
      return $http.get('sim/hm/department/' + id);
    },
    save : function(departmentData) {
      return $http({
        method: 'POST',
        url: 'sim/hm/department',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(departmentData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/hm/department/' + id);
      return $http({
        method: 'POST',
        url: 'sim/hm/department/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    DropDown:function() {
      return $http.get('sim/hm/employee/ddmenu');
    }
  };

}]);
