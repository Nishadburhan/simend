app.factory('Task', ['$http', function($http) {
  return {
    get:function(type) {
      return $http.get('sim/pm/'+type);
    },
    show : function(type, id) {
      return $http.get('sim/pm/'+type+'/' + id);
    },
    save : function(type, Data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/'+type,
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(Data)
      });
    },
    destroy : function(type,id) {
      // return $http.delete('sim/pm/'+type+'/' + id);
      return $http({
        method: 'POST',
        url: 'sim/pm/'+type+'/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    filterTask: function(group) {
      var tasks;
      angular.forEach(group, function(data) {
        tasks=data.hmtasks;
      });
      return tasks;
    },
    employees: function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    users : function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    findlist : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/sut/contactbook/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
  };
}]);
