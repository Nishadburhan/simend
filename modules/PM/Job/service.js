app.factory('Jobs',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/pm/job');
    },
    findList : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/job/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    default: function(param) {
      return $http.get('sim/pms/config/'+param+'/list');
    },
    show : function(id) {
      return $http.get('sim/pm/job/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/job',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    status: function() {
      return $http.get('sim/ddmenu/pm/status');
    },
    finish : function(id) {
      // return $http({
      //   method:'POST',
      //   url:'sim/pm/job/finish',
      //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
      //   data:$.param(data)
      // });
      return $http.post('sim/pm/job/finish/'+id);
    },
    suspend : function(id, reason) {
      return $http.post('sim/pm/job/suspended/'+id+'/'+reason);
    },
    reopen : function(id) {
      return $http.post('sim/pm/job/reopen/'+id);
    },
    resume : function(id) {
      return $http.post('sim/pm/job/resume/'+id);
    },
    revert : function(id) {
      return $http.post('sim/pm/job/revert/'+id);
    },
    skip : function(id, count) {
      return $http.post('sim/pm/job/skip/'+id+'/'+count);
    },
    jobsites : function() {
      return $http.get('sim/sm/jobsite/ddmenu');
    },
    branches : function() {
      return $http.get('sim/hm/branch/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
  };
}]);
