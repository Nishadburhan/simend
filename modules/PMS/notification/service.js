
app.factory('notification', ['$http' ,function($http) {

  return {
        getNotification : function() {
        return $http.get('sim/sap/notification');
    },
    save : function(Data) {
      // console.log($.param(Data));return;
      return $http({
        method: 'POST',
        url: 'sim/sap/notification',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(Data)
      });
    },
  };

}]);