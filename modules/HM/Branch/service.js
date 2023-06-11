app.factory('Branch', ['$http' ,function($http) {

  return {
    get : function() {
      return $http.get('sim/hm/branch');
    },
    show : function(id) {
      return $http.get('sim/hm/branch/' + id);
    },
    save : function(branchData) {
      return $http({
        method: 'POST',
        url: 'sim/hm/branch',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(branchData)
      });
    },
    destroy : function(id) {
      return $http({
        method: 'POST',
        url: 'sim/hm/branch/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    test:function(d) {
      return d;
    },
    DropDown:function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    Departments:function() {
      return $http.get('sim/hm/department/ddmenu');
    }
 

    
  };
}]);
