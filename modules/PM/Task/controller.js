
// Get Taskgroups
app.controller('taskCtrl', ['$scope','$rootScope','$http','$log','Task','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $rootScope, $http, $log, Task, Data, notify,cfpLoadingBar,AccessFactory,$state){
  $scope.groupData={
    'tgtaskgroupid':0
  };
	//permission
  
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('162').then(function success(response) {
	// if(Data.get(response)==0){
	// 	$state.go('access');
	// }
	// if(Data.get(response)==1){
	// 	$scope.readresponse=Data.get(response);
	// 	$scope.disabled=true;
	// } 
	// if(Data.get(response)==2){
	// 	$scope.writeresponse=Data.get(response);
	// 	$scope.data=true;
	// }
	// if(Data.get(response)==3){
	// 	$scope.fullresponse=Data.get(response);
	// 	$scope.data=true;
	// }
	// }, function error(response) {

	// });
//end permission
  $scope.taskForm={
    'tktaskid':0,
    'users':[]
  };
  $scope.ok=function(data)
  {
console.log(data)
  }
  // Task.users().then(function success(response) {
  //   $scope.users=Data.get(response);
  // }, error function(response) {
  //
  // });
  // $scope.$on()
  
  $scope.clearForm=function() {
    $scope.taskForm={
      'tktaskid':0,
      'users':[],
    };
    $scope.groupData={
      'tgtaskgroupid':0
    };
    $('.notify').prop('checked', false);
  };

  Task.employees().then(function success(response) {
    console.log('users');
    $scope.employees=Data.get(response);
  }, function error(response) {

  });


  cfpLoadingBar.start();
  Task.get('taskgroup').then(function success(response) {

    $scope.taskGroup=Data.get(response);
    cfpLoadingBar.complete();
    // $scope.tasks=Task.filterTask($scope.taskGroup);
    // console.log($scope.taskGroup);

  }, function error(response) {
    cfpLoadingBar.complete();

  });

  // Task.users().then(function success(response) {
  //   $scope.users=Data.get(response);
  // }, function error(response) {

  // });

  Task.users().then(function success(response) {
    $scope.users=Data.get(response);
 
  }, function error(response) {

  });
  // $scope.resultsWithInfo = [{
  //   name: "Baseline",
  //   id: "something_unique1",
  //   idx: 1,
  //   eui: 100
  // }, {
  //   name: "Alt1",
  //   id: "something_unique2",
  //   idx: 2,
  //   eui: 90
  // }, {
  //   name: "Alt2",
  //   id: "something_unique3",
  //   idx: 3,
  //   eui: 80
  // }, {
  //   name: "Alt3",
  //   id: "something_unique4",
  //   idx: 4,
  //   eui: 75
  // }, {
  //   name: "Alt4",
  //   id: "something_unique5",
  //   idx: 5,
  //   eui: 60
  // }];

   // I want it to store the whole JSON object {id, name, idx, eui}
      $scope.selected_baselines = [];
      $scope.selected_baseline_settings = {
      	template: '<p id="selected{{option.suuserid}} " ><b><span  >{{option.suuserid}}</span>{{option.suusername}}</b></p>',
        searchField: 'name',
        enableSearch: true,
       
        selectedToTop: true // Doesn't work
      };

    console.log($scope.selected_userid);
    $scope.selected_baselines_customTexts = {buttonDefaultText: 'Select Users'};
    console.log( $scope.selected_baselines_customTexts);
  $scope.addTask=function(id) {
    $scope.taskData={
      'tktaskid':'0',
      'tktaskgroupid':id,
      'tkdescription':$(".taskDesc"+id).summernote("code"),
      'tktask':$(".addTask"+id).val(),
      'tkassignedemployeeid':$(".assign"+id).val(),
      'tkisnotifyassigner':$(".notif"+id).val(),
      'tkduedate':$(".due"+id).val()
    };


    // console.log($scope.taskData);return;
    Task.save('task', $scope.taskData).then(function success(response) {
      $(".addTask"+id).val('').focus();
      $(".taskDesc"+id).summernote("code","");
      // $("show").hide();
      notify.success();
      Task.get('taskgroup').then(function success(response) {
        $scope.taskGroup=Data.get(response);
      }, function error(response) {

      });
    }, function error(response) {

    });
  };
  $scope.selecteddata=[]
  $scope.changevalues=function(data){
  
  angular.element(document).ready(function () {
    $(document).on("change", ".notify", function() {
      if(this.checked) {
         $scope.utuserid=data.suuserid
        
          if($scope.taskForm.tktaskid=='0') {
                $scope.taskForm.users.push({'utuserid':$scope.utuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
          }
          else{
            $scope.taskForm.users.push({'utuserid':$scope.utuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
          }
      }
      else{
        $scope.utuserid=data.suuserid
        for(var i=0;i < $scope.taskForm.users.length; i++) {
             
              if($scope.taskForm.users[i].utuserid==$scope.utuserid){
 
                  $scope.taskForm.users.splice(i,1);
              }
        }
      
      }
    });
  });

  }


//   $scope.changevalues=function(data,index)
//   {
// console.log(this);
//   angular.element(document).ready(function () {

//    if(data=='YES')
//       {
//           $scope.utuserid=index.suuserid
        
//           if($scope.taskForm.tktaskid=='0') {
//                 $scope.taskForm.users.push({'utuserid':$scope.utuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
//           }
//           else{
//             $scope.taskForm.users.push({'utuserid':$scope.utuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
//           }
//     }
//     if(data=='NO')
//     {
//     // alert("fg")
//        console.log($scope.taskForm.users);
    
//       for(var i=0;i < $scope.taskForm.users.length; i++) {
//             console.log($scope.taskForm.users);
//             if($scope.taskForm.users[i].utuserid==data){
          
//                $scope.taskForm.users.splice(i,1);
//             }
// 			}
//     }
//   });
//   }
$scope.taskids=function(data)
{
  console.log(data)
  $scope.taskid=data;
}
  $scope.newTask=function() {
   console.log($scope.taskForm);
      // angular.forEach($scope.selected_baselines, function(key) {
      //   console.log(key.suuserid);
      //   console.log($scope.taskid)
      //   console.log($scope.taskForm.tktaskid);
      //   if($scope.taskForm.tktaskid=='0') {
      //  $scope.taskForm.users.push({'utuserid':key.suuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
      //   }
      //   else{
      //     $scope.taskForm.users.push({'utuserid':key.suuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
      //   }
      // });  
      cfpLoadingBar.start();
     Task.save('task', $scope.taskForm).then(function success(response) {
      Task.get('taskgroup').then(function success(response) {
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#newTask").modal("hide");
        notify.success();
        $scope.taskGroup=Data.get(response);
      }, function error(response) {

      });
    }, function error(response) {

    });
  };
 
  $scope.editTask=function(id) {

    $scope.taskid=id;
    cfpLoadingBar.start();
    Task.show('task', id).then(function success(response) {
      $scope.taskForm=Data.get(response);
      console.log($scope.taskForm.users);
      angular.forEach($scope.taskForm.users, function(key) {
        // console.log(key.utuserid);
        $scope.selected_userid=key.utuserid;
      console.log( $scope.selected_userid);
      angular.element(document).ready(function () {
        // $('input:checkbox').filter('.roll').prop('checked', false);
        $('input:checkbox[value='+ $scope.selected_userid+']').prop('checked', true);
    });
        // console.log( $('p.'+ $scope.selected_userid));
      // $('.selected'+4).hide();
      });

      // console.log( $scope.taskForm.users.utuserid);
      cfpLoadingBar.complete();
      $("#newTask").modal("show");
    }, function error(response) {

    });
  

  };


  $scope.deleteTask=function(id) {
    
    
    swal({
      title: "Are you sure?",
      text: "Do You Want To Delete This Task?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        Task.destroy('task',id).then(function success(response) {
          swal("Deleted!", "Task Successfully Deleted", "success");
          Task.get('taskgroup').then(function success(response) {
            $scope.taskGroup=Data.get(response);
          }, function error(response) {

          });

        },function error(response) {
          swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
        });
      } else {
        swal("Cancelled", "Terminated The Process", "error");
      }
    });
  };

  $scope.newGroup=function() {
    cfpLoadingBar.start();
    console.log($scope.groupData);
    Task.save('taskgroup', $scope.groupData).then(function success(response) {
      Task.get('taskgroup').then(function success(response) {
        notify.success();
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#newGroup").modal("hide");
        $scope.taskGroup=Data.get(response);
        console.log($scope.taskGroup);
      }, function error(response) {

      });
    }, function error(response) {

    });
  };
  $scope.editGroup=function(id) {
    console.log(id);
    cfpLoadingBar.start();

    Task.show('taskgroup', id).then(function success(response) {
      $scope.groupData=Data.get(response);
      cfpLoadingBar.complete();
      $("#newGroup").modal("show");
    }, function error(response) {

    });
  };
  $scope.deleteGroup = function(id) {
    swal({
      title: "Are you sure?",
      text: "Do You Want To Delete This Group?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function(isConfirm){
      if (isConfirm) {
        Task.destroy('taskgroup',id).then(function success(response) {
          swal("Deleted!", "Group Successfully Deleted", "success");
          Task.get('taskgroup').then(function success(response) {
            $scope.taskGroup=Data.get(response);
          }, function error(response) {

          });

        },function error(response) {
          swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
        });
      } else {
        swal("Cancelled", "Terminated The Process", "error");
      }
    });
	};

  angular.element(document).ready(function () {
    $('.dropdown dd ul li').each(function(idx,el){ console.log(el); });
    $(".dropdown dt a").on('click', function () {
      $(".dropdown dd ul").slideToggle('fast');
  });
  
  $(".dropdown dd ul li a").on('click', function () {
      $(".dropdown dd ul").hide();
  });
 
  function getSelectedValue(id) {
    console.log($("#" + id).find("dt a span.value"))
      return $("#" + id).find("dt a span.value").html();
  }
  
  $(document).bind('click', function (e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
  });
  
  
  $('.mutliSelect input[type="checkbox"]').on('click', function () {
  
      var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
          title = $(this).val() + ",";
  
      if ($(this).is(':checked')) {
          var html = '<span title="' + title + '">' + title + '</span>';
          $('.multiSel').append(html);
          $(".hida").hide();
      } else {
          $('span[title="' + title + '"]').remove();
          var ret = $(".hida");
          console.log(ret)
          $('.dropdown dt a').append(ret);
  
      }
  });
  });

}]);
