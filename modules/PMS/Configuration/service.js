app.factory('Config', ['$http', function($http) {

  return {
    get : function(type) {
      // quotation/row
      return $http.get('sim/pms/config/'+type+'/row');
    },
    project : function(param) {
      return $http.get('sim/pms/config/project/'+param+'/row');
    },

    config: function(param) {
      return $http.get('sim/pms/config/'+param+'/row');
    },
    projectSave : function(param, data) {
      return $http({
        method: 'POST',
        url: 'sim/pms/config/project/'+param,
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    save : function(type, Data) {
      return $http({
        method: 'POST',
        url: 'sim/pms/config/'+type,
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(Data)
      });
    },
    // destroy : function(id) {
    //   // return $http.delete('sim/hr/branch/' + id);
    // },
    searchTags: function(query) {
      return $http.get('sim/hm/branch/ddmenu');
    }
  };

}]);
