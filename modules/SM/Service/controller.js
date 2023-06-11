
app.controller('serviceCtrl', ['$scope','$http','$log','Service','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Service, Data, notify,cfpLoadingBar,AccessFactory,$state) {
  $scope.taskData={};
  $scope.formData={'sserviceid':0, 'tasks':[]};
  $scope.editable=false;
	var selectedservices=[];
	//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('84').then(function success(response) {
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
	Service.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.services=Data.get(response);
		$scope.doPagination($scope.services);
		console.log($scope.services);
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
  $scope.addTasks=function() {
		if($("#task").val()!='') {
			$scope.formData.tasks.push({sttask:$scope.taskData.task, stdescription:$scope.taskData.desc});
      // console.log($scope.formData);
      notify.custom('success','Task Successfully Added','Task');
			$scope.taskData={};
			$("#task").focus();
		}else{
			console.log('Task is Empty');
		}
	};
	// $scope.editAttns=function(index) {
	// 	// console.log($scope.formData.attentions.indexOf(id));
	// 	// console.log($scope.formData.attentions[index]);
	// 	$scope.attnData.attn=$scope.formData.attentions[index].caattention;
	// 	$scope.attnData.email=$scope.formData.attentions[index].caemail;
	// 	$scope.attnData.contact=$scope.formData.attentions[index].cacontact;
	// 	// $scope.formData.attentions.splice(data, 1);
	// }
	$scope.removeAttns=function(id) {
		$scope.formData.tasks.splice(id, 1);
	};

  Service.Departments().then(function success(response) {
    $scope.Departments=Data.get(response);
  }, function error(response) {

  });

	$scope.clearForm=function() {
		$scope.formData={'sserviceid':0, 'tasks':[]};
	};

	$scope.submitService = function() {
		console.log($scope.formData);
    cfpLoadingBar.start();
		Service.save($scope.formData).then(function success(response) {
			console.log(Data.get(response))
			if(Data.get(response).success) {
        $scope.formData={'sserviceid':0, 'tasks':[]};
        cfpLoadingBar.complete();
        $("#myModal").modal("hide");
        notify.custom('success','Service Successfully Saved!','Service!');
  			Service.get().then(function success(getData) {
					$scope.services=Data.get(getData);
					$scope.doPagination($scope.services);
  				}, function error(error) {
  					$log.info(error);
  				});
      }else {
        cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_ServiceCode") { 
					notify.custom('error','Service Code Code Already Exists!','Service');
			}
			else{
				notify.custom('error','Something went wrong!','Service');
			}
        // notify.custom("error",'Service Code Already Exists','Service!');
      }
			}, function error(response) {
        cfpLoadingBar.complete();
        notify.alert('error','Error Occurred While Saving','success');

		});
	};

	$scope.editRow=function(id){
    cfpLoadingBar.start();
    var detail, i=0;
		Service.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			console.log(	$scope.formData);
      if(i==2) {
        // $scope.formData=row;
        $scope.formData.tasks=detail;
        $("#myModal").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
		},function error(response) {

		});

    Service.task(id).then(function success(getTasks) {

      if(i==1) {
        // row.details=detail;
        $scope.formData.tasks=Data.get(getTasks);
        cfpLoadingBar.complete();
        $("#myModal").modal("show");
      }else {
        i=2;
        detail=Data.get(getTasks);
      }
    }, function error(getTasks) {

    });
	};



	$scope.deleteService = function(id) {
			// swal({
			//   title: "Are you sure?",
			//   text: "Do You Want To Delete This Service?",
			//   type: "warning",
			//   showCancelButton: true,
			//   confirmButtonColor: "#DD6B55",
			//   confirmButtonText: "Yes, delete it!",
			//   cancelButtonText: "No, cancel!",
			//   closeOnConfirm: false,
			//   closeOnCancel: false
			// },
			// function(isConfirm){
			//   if (isConfirm) {
			// 		Service.destroy(id).then(function success(response) {
      //       $("#myModal").modal("hide");
			// 			notify.custom("success", "Service Successfully Deleted", "success");
			// 			Service.get().then(function success(getData) {
			// 				$scope.services = Data.get(getData);
			// 			},function error(error) {

			// 			});

			// 		},function error(response) {
			// 			swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
			// 		});
			//   } else {
			//     swal("Cancelled", "Terminated The Process", "error");
			//   }
			// });
			
	swal({
		title: "Are you sure?",
		text: "Do You Want To Delete This Service?",
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
			Service.destroy(id).then(function success(response) {
							$("#myModal").modal("hide");
							swal("Deleted!", "User role Successfully Deleted", "success");
							Service.get().then(function success(response) {
									$scope.services = Data.get(response);
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
	// $("#selectAll").click(function() {
	// 	if(this.checked) {
	// 		$(".boxes").prop('checked',true);
	// 		$.each($(".boxes:checked"), function(){
	// 					selectedservices.push($(this).data('id'));
	// 		});
	// 	}else {
	// 		$(".boxes").prop('checked',false);
	// 		selectedservices=[];
	// 		console.log(selectedBranches);
	// 	}
	// });

}]);
