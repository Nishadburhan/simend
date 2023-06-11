app.factory('expSheet',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/pm/expense');
    },
    show : function(id) {
      return $http.get('sim/pm/expense/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/expense',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    filterData : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/expense/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    details : function(id) {
      return $http.get('sim/pm/expense/detail/'+id);
    },
    getChild : function(type, id, parent) {
      return $http.get('sim/pm/expense/pivot/'+type+'/'+id+'/'+parent);
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/expense/'+id);
      return $http({
        method: 'POST',
        url: 'sim/pm/expense/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    employee : function() {
      return $http.get('sim/hr/employee/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    findList : function(data) {
      // return console.log(data);
      return $http({
        method: 'POST',
        url: 'sim/pm/job/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    searchTitle: function(param) {
      return $http.get('sim/hm/designation/ddmenu');
    },
    dfConfig:function() {
      return $http.get('sim/pms/config/expensesheet/list');
    },
    getTitle: function() {
      return $http.get('sim/pm/expense/ddmenu');
    }
  };
}]);
