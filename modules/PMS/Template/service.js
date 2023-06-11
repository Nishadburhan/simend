app.factory('Template', ['$http', function($http) {

  return {
    get : function(type) {
      return $http.get('sim/pms/template/'+type);
    },
    show : function(type, id) {
      return $http.get('sim/pms/template/'+type+'/'+ id);
    },
    save : function(type, Data) {
      return $http({
        method: 'POST',
        url: 'sim/pms/template/'+type,
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(Data)
      });
    },
    destroy : function(type, id) {
      // return $http.delete('sim/pms/template/'+type+'/'+ id);
      return $http({
        method: 'POST',
        url: 'sim/pms/template/'+type+'/'+id,
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
      return $http.get('sim/hr/employee/ddmenu');
    },
    Departments:function() {
      return $http.get('sim/hr/department/ddmenu');
    }
  };

}]);
