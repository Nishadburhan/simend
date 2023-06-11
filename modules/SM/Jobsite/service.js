app.factory('Jobsite', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/sm/jobsite');
    },
    show : function(id) {
      return $http.get('sim/sm/jobsite/' + id);
    },
    save : function(jobsiteData) {
      return $http({
        method: 'POST',
        url: 'sim/sm/jobsite',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(jobsiteData)
      });
    },
    dfCountry: function() {
      return $http.get('static/countryid');
    },
    destroy : function(id) {
      // return $http.delete('sim/sm/jobsite/' + id);
      return $http({
        method: 'POST',
        url: 'sim/sm/jobsite/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    test:function(d) {
      return d;
    },
    DropDown:function(fung) {
      return $http.get('M@ster786/ddmenu/am/'+fung+'/');
    }
  };

}]);
