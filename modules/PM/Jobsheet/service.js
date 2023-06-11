
app.factory('Jobsheet',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/pm/sheet');
    },
    show : function(id) {
      return $http.get('sim/pm/sheet/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/sheet',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    filterData : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/sheet/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/sheet/'+id);
      return $http({
        method: 'POST',
        url: 'sim/pm/sheet/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    details : function(id) {
      return $http.get('sim/pm/sheet/detail/'+id);
    },
    getChild : function(type, id, parent) {
      return $http.get('sim/pm/sheet/pivot/'+type+'/'+id+'/'+parent);
    },
    employee : function() {
      return $http.get('sim/hm/employee/ddmenu');
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
    dfConfig: function() {
      return $http.get('sim/pms/config/jobsheet/list');
    }
  };
}]);
