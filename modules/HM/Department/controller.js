app.controller('departmentCtrl',['$scope','$http','$log','Department','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Department, Data, notify,cfpLoadingBar,AccessFactory,$state) {
	$scope.formData={'hddepartmentid':0};
	
	Department.DropDown().then(function success(response) {
    	$scope.heads=Data.get(response);
  	},function error(response) {
	});
	
	cfpLoadingBar.start();
	Department.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.departments=Data.get(response);
		$scope.doPagination($scope.departments);
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
	  
	$scope.clearForm=function() {
  		$scope.formData={'hddepartmentid':0};
  	};

	$scope.submitDepartment = function() {
   		cfpLoadingBar.start();
		Department.save($scope.formData).then(function success(response) {
			if(Data.get(response).success) {
				$scope.formData = {'hddepartmentid':0};
				cfpLoadingBar.complete();
				$("#myModal").modal("hide");
				notify.custom('success','Department Successfully Saved!','Department');
				Department.get().then(function success(getData) {
					$scope.departments=Data.get(getData);
					$scope.doPagination($scope.departments);
					}, function error(error) {
						$log.info(error);
					});
			}else {
				cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_DepartmentCode") { 
					notify.custom('error','Department Code  Already Exists!','Department');
				}
				else{
					notify.custom('error','Something went wrong!','Department');
				}		
			}
		}, function error(response) {
			cfpLoadingBar.complete();
			notify.custom('error','Something went wrong!','Department');
		});
	};

	$scope.editRow=function(id){
	    cfpLoadingBar.start();
		Department.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			cfpLoadingBar.complete();
			$("#myModal").modal("show");
		},function error(response) {
		});
	};

	$scope.deleteDepartment = function(id) {
		swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Department?",
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
				Department.destroy(id).then(function success(response) {
					$("#myModal").modal("hide");
					swal("Deleted!", "Department Successfully Deleted", "success");
					Department.get().then(function success(getData) {
						$scope.departments = Data.get(getData);
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
}]);
