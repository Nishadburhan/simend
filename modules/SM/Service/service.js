app.factory('Service', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/sm/service');
    },
    show : function(id) {
      return $http.get('sim/sm/service/' + id);
    },
    save : function(serviceData) {
      return $http({
        method: 'POST',
        url: 'sim/sm/service',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(serviceData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/sm/service/' + id);
      return $http({
        method: 'POST',
        url: 'sim/sm/service/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    task: function(id) {
      return $http.get('sim/sm/service/task/getlist/'+id);
    },
    Departments:function(fung) {
      return $http.get('sim/hm/department/ddmenu');
    }
  };

}]);
