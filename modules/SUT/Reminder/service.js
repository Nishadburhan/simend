app.factory('Reminder', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/sut/reminder');
    },
    // permission: function() {
    //   return $http.get('static/rolemodule/121');
    // },
    show : function(id) {
      return $http.get('sim/sut/reminder/' + id);
    },
    save : function(serviceData) {
      return $http({
        method: 'POST',
        url: 'sim/sut/reminder',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(serviceData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/sut/reminder/' + id);
      return $http({
        method: 'POST',
        url: 'sim/sut/reminder/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    test:function(d) {
      return d;
    },
    users:function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    Departments:function(fung) {
      return $http.get('sim/hr/department/ddmenu');
    }
  };

}]);
