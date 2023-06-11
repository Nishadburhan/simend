app.factory('Quotation', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/pm/quotation');
    },
    show : function(id) {
      return $http.get('sim/pm/quotation/' + id);
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    status: function() {
      return $http.get('sim/ddmenu/pm/status');
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/quotation',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    findList : function(data) {
      // return console.log(data);
      return $http({
        method: 'POST',
        url: 'sim/pm/quotation/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    dfTemplate : function() {
      return $http.get('sim/pms/template/quotation/defualtid');
    },
    dfReference : function() {
      return $http.get('sim/pms/config/quotation/list');
    },
    getBody : function(id) {
      return $http.get('sim/pms/template/quotation/body/'+id);
    },
    details : function(id) {
      return $http.get('sim/pm/quotation/detail/getlist/'+id);
    },
    templates : function() {
      return $http.get('sim/pms/template/quotation/ddmenu');
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/quotation/' + id);
      return $http({
        method: 'POST',
        url: 'sim/pm/quotation/'+id,
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
    },
    changecolumn : function(id) {
      return $http.get('sim/pm/quotation/'+id);
    },
    exportQuotation:function(id) {
      return $http.get('sim/pm/quotation/export/'+id);
    },
    exportQuotationDetails:function(id) {
      return $http.get('sim/pm/quotation/detail/export/'+id);
    },
    
  };

}]);
