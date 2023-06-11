app.factory('Designation', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/hm/designation');
    },
    show : function(id) {
      return $http.get('sim/hm/designation/' + id);
    },
    save : function(designationData) {
      return $http({
        method: 'POST',
        url: 'sim/hm/designation',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(designationData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/hm/designation/' + id);
      return $http({
        method: 'POST',
        url: 'sim/hm/designation/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    DropDown:function() {
      return $http.get('sim/hm/employee/ddmenu');
    }
  };

}]);
