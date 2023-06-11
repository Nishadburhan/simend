app.factory('Customer', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/sm/customer');
    },
    show : function(id) {
      return $http.get('sim/sm/customer/' + id);
    },
    save : function(customerData) {
      return $http({
        method: 'POST',
        url: 'sim/sm/customer',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(customerData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/sm/customer/' + id);
      return $http({
        method: 'POST',
        url: 'sim/sm/customer/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    getAttn:function(id) {
      return $http.get('sim/sm/customer/attention/getlist/' + id);
    },
    DropDown:function() {
      return $http.get('sim/pm/employee/ddmenu');
    }
  };

}]);
