app.factory('Project', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/pm/project');
    },
    show : function(id) {
      return $http.get('sim/pm/project/' + id);
    },
    suspend: function(id, reason) {
      return $http.post('sim/pm/project/suspended/'+id+'/'+reason);
    },
    resume: function(id) {
      return $http.post('sim/pm/project/resume/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/project',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    exportProject:function(id) {
      return $http.get('sim/pm/project/export/'+id);
    },
    exportProjectDetails:function(id) {
      return $http.get('sim/pm/project/detail/export/'+id);
    },
    getBody : function(id) {
      return $http.get('sim/pms/template/contract/body/'+id);
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    status: function() {
      return $http.get('sim/ddmenu/pm/status');
    },
    jobtype : function() {
      return $http.get('sim/ddmenu/pm/jobtype');
    },
    dfTemplate : function() {
      return $http.get('sim/pms/template/contract/defualtid');
    },
    details : function(id) {
      return $http.get('sim/pm/project/detail/'+id);
    },
    findlist : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/project/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    defaults : function(param) {
      return $http.get('sim/pms/config/project/'+param+'/list')
    },
    CtTemplates : function() {
      return $http.get('sim/pms/template/contract/ddmenu');
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/project/' + id);
      return $http({
        method: 'POST',
        url: 'sim/pm/project/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    company : function() {
      return $http.get('M@ster786/tenant/company/primary');
    },
    attentions : function() {
      return $http.get('sim/sm/customer/attention/ddmenu');
    },
    jobsites : function() {
      return $http.get('sim/sm/jobsite/ddmenu');
    },
    employees : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    branches : function() {
      return $http.get('sim/hm/branch/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    }
  };

}]);
