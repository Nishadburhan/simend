
app.factory('Schedule',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/pm/schedule');
    },
    save : function(data) {
      return $http({
        method:'POST',
        url:'sim/pm/schedule',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    show : function(id) {
      return $http.get('sim/pm/schedule/'+id);
    },
    getChild : function(type, id, parent) {
      return $http.get('sim/pm/schedule/pivot/'+type+'/'+id+'/'+parent);
    },
    users:function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/schedule/' + id);
      return $http({
        method: 'POST',
        url: 'sim/pm/schedule/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    jobsites : function() {
      return $http.get('sim/sm/jobsite/ddmenu');
    },
    employee : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    branches : function() {
      return $http.get('sim/hm/branch/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    filterData : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/schedule/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
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
      return $http.get('sim/pms/config/schedule/list');
    },
    //suhail
    filterToSchedule : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/job/unscheduled',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
 
    filterJob : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/schedule/jobs',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
  };
}]);
