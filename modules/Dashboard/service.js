app.factory('Dashboard',['$http', function($http) {
 return{
     get:function(){
         return $http.get('sim/pm/job/todayjobs');
     },
     getReminders:function() {
         return $http.get('sim/sut/reminder/nextweek');
     },
     getHeaderAlerts:function() {
         return $http.get('sim/sap/notification/headalerts');
     },
     getAlerts:function() {
        return $http.get('sim/sap/notification/alerts');
     },
     taskDetail:function(id) {
         return $http.get('sim/pm/task/'+id);
     },
     reminderDetail:function(id) {
        return $http.get('sim/sut/reminder/' + id);
     },
     reminderNotified:function(id) {
          return $http.post('sim/sut/reminder/notified/'+id);
     },
     taskNotified:function(id) {
        return $http.post('sim/pm/task/notified/'+id);
     },
     getTaskgroupDropDown:function() {
         return $http.get('sim/pm/taskgroup');
     },
     getToScheduleJobs:function() {
        return $http.post('sim/pm/job/unscheduled');
    }

 }
}]);