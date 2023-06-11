app.factory('Contact',['$http', function($http) {
return {
  get : function() {
    return $http.get('sim/sut/contactbook');
  },
  show : function(id) {
    return $http.get('sim/sut/contactbook/'+id);
  },
  destroy : function(id) {
    // return $http.delete('sim/sut/contactbook/'+id);
    return $http({
      method: 'POST',
      url: 'sim/sut/contactbook/'+id,
      headers: { 
        "Content-Type" : "application/json",
        "X-HTTP-Method-Override": "DELETE"
      },
    });
  },
  save : function(data) {
    return $http({
      method: 'POST',
      url: 'sim/sut/contactbook',
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
      data: $.param(data)
    });
  },
  findlist : function(data) {
    return $http({
      method: 'POST',
      url: 'sim/sut/contactbook/findlist',
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
      data: $.param(data)
    });
  },
};

}]);
