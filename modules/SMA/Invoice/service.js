
app.factory('Invoice',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/sma/invoice');
    },
    show : function(id) {
      return $http.get('sim/sma/invoice/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/sma/invoice',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    status: function() {
      return $http.get('sim/ddmenu/pm/status');
    },
    branch: function() {
      return $http.get('sim/hm/branch/ddmenu')
    },
    destroy : function(id) {
      // return $http.delete('sim/sma/invoice/'+id);
      return $http({
        method: 'POST',
        url: 'sim/sma/invoice/'+id,
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
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    jobtype : function() {
      return $http.get('sim/ddmenu/pm/jobtype');
    },
    findProjects : function(data) {
      // return console.log(data);
      return $http({
        method: 'POST',
        url: 'sim/pm/project/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    findJobs : function(param, id) {
    //   // return console.log(data);
    //   return $http({
    //     method: 'POST',
    //     url: 'sim/pm/job/findlist',
    //     headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
    //     data: $.param(data)
    //   });
    return $http.get('sim/sma/invoice/'+param+'/'+id);
  },
  filterData : function(data) {
    return $http({
      method: 'POST',
      url: 'sim/sma/invoice/findlist',
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
      data: $.param(data)
    });
  },
  templates: function() {
    return $http.get('sim/pms/template/invoice');
  },
  dfConfig: function() {
    return $http.get('sim/pms/config/invoice/list');
  },
  exportInvoice:function(id) {
    return $http.get('sim/sma/invoice/export/'+id);
  },
  exportInvoiceDetails:function(id) {
    return $http.get('sim/sma/invoice/detail/'+id);
  },

  };
}]);
