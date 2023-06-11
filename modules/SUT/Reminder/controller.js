
app.controller('reminderCtrl', ['$scope','$http','$log','AccessFactory','Data','notify','cfpLoadingBar','$state','Reminder', function($scope, $http, $log, AccessFactory, Data, notify, cfpLoadingBar,$state,Reminder) {

  $scope.formData={
		'smrreminderid':0,
		'users':[]
	};
	//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('121').then(function success(response) {
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
	cfpLoadingBar.start();
	Reminder.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.reminders=Data.get(response);
		$scope.doPagination($scope.reminders);
		console.log(	$scope.reminders)
	},function error(response) {
		cfpLoadingBar.complete();
	});
	$scope.doPagination=function(param) {
		$scope.totalItems = param.length;
		$scope.currentPage = 1;
		$scope.itemsPerPage=10;
		$scope.maxSize = 5;
		
	}
	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	};

	$scope.setItemsPerPage = function(num) {
		$scope.itemsPerPage = num;
		$scope.currentPage = 1; //reset to first page
	}
  
  Reminder.users().then(function success(response) {
    $scope.users=Data.get(response);
  }, function error(response) {

  });
// console.log(Data.fmDate('Wed Jun 14 2017 00:00:00 GMT+0530 (India Standard Time)'));
	$scope.clearForm=function() {
		$('.users').prop('checked', false);
		$scope.formData={
			'smrreminderid':0,
			'users':[]
		};
	};

	$scope.submitReminder = function() {
    cfpLoadingBar.start();
		Reminder.save($scope.formData).then(function success(response) {
      cfpLoadingBar.complete();
			$scope.clearForm();
			$('.users').prop('checked', false);
      $("#remindModel").modal("hide");
			notify.custom('success','Reminder Successfully Saved!','Reminder');
			Reminder.get().then(function success(getData) {
				$scope.reminders=Data.get(getData);
				$scope.doPagination($scope.reminders);
				}, function error(error) {
					$log.info(error);
				});
			}, function error(response) {
        cfpLoadingBar.complete();
        notify.custom('error','Error Found While Saving!','Reminder');
		});
	};

	$scope.editRow=function(id){

    cfpLoadingBar.start();
		Reminder.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			angular.forEach($scope.formData.users, function(key) {
				// console.log(key.h);
					angular.element(document).ready(function () {
							// $('input:checkbox').filter('.roll').prop('checked', false);
							$('input:checkbox[value='+key.uruserid+']').prop('checked', true);
					});
			});
			
      cfpLoadingBar.complete();
      $("#remindModel").modal("show");
		},function error(response) {
      cfpLoadingBar.complete();
      notify.custom('error','Error Found!','Reminder');

		});
	};

	$scope.deleteReminder = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Reminder?",
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
					Reminder.destroy(id).then(function success(response) {
            $("#remindModel").modal("hide");
						swal("Deleted!", "Reminder Successfully Deleted", "success");
						Reminder.get().then(function success(getData) {
							$scope.reminders = Data.get(getData);
						},function error(error) {

						});

					},function error(response) {
						swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
					});
			  } else {
			    swal("Cancelled", "Terminated The Process", "error");
			  }
			});
	};

// jQuery
angular.element(document).ready(function () {
	$(document).on("change", ".users", function() {
	  if(this.checked) {
			if($scope.formData.smrreminderid=='0') {
				console.log($scope.formData);
				$scope.formData.users.push({'uruserreminderid':'0','urreminderid':$scope.formData.smrreminderid,'uruserid':$(this).data('id')});
			}else{
				$scope.formData.users.push({'uruserreminderid':'0','urreminderid':$scope.formData.smrreminderid,'uruserid':$(this).data('id')});
			}
		} else {
			// Remove From array if Exists
			for(var i=0;i <$scope.formData.users.length; i++) {
				if($scope.formData.users[i].uruserid==$(this).data('id')){
					$scope.formData.users.splice(i,1);
				}
			}
		}

	});


});

}]);
