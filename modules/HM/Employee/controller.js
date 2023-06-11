app.controller('employeeCtrl',['$scope','$http','$log','Employee','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Employee, Data, notify,cfpLoadingBar,AccessFactory,$state) {
	
	$scope.formData={'heemployeeid':0};

	var js=angular.element(document.querySelector('script'));
	
	//  Drop Downs
	Employee.DropDown('branch').then(function success(response) {
    	$scope.branches=Data.get(response);
  	},function error(response) {

	});
	  
	Employee.employees().then(function success(response) {
		$scope.supervisors=Data.get(response);
	}, function error(response) {

  	});
  
	Employee.DropDown('department').then(function success(response) {
    	$scope.departments=Data.get(response);
  	},function error(response) {

  	});

  	Employee.DropDown('designation').then(function success(response) {
    	$scope.designations=Data.get(response);
  	},function error(response) {

  	});

  	Employee.country().then(function success(response) {
    	$scope.countries=Data.get(response);
  	}, function error(response) {

  	});
  	// DropDown : End
	
	cfpLoadingBar.start();
	Employee.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.employees=Data.get(response);
		$scope.doPagination($scope.employees);
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
	  
	$scope.sameas;
  	$scope.sameAs=function(data,sameas) {
		if(sameas==true){
			$scope.formData.heresidentialaddress=data;	
		}
		else{
			$scope.formData.heresidentialaddress=" ";
		}
	};
	
	$scope.clearForm=function() {
		$scope.addtocntact=true;
		$scope.formData={'heemployeeid':0};
	};

	$scope.submitEmployee = function() {
    	cfpLoadingBar.start();
		Employee.save($scope.formData).then(function success(response) {
			if(Data.get(response).success) {
				$scope.formData = {'heemployeeid':0};
				cfpLoadingBar.complete();
				$("#myModal").modal("hide");
				notify.custom('success','Employee Successfully Saved','Employee');
				Employee.get().then(function success(getData) {
					$scope.employees=Data.get(getData);
					$scope.doPagination($scope.employees);
				}, function error(error) {
					$log.info(error);
				});
      		}else {
				cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_EmployeeCode") { 
					notify.custom('error','Employee Code Already Exists!','Employee');
				}
				else{
					notify.custom('error','Something went wrong!','Employee');
				}
      		}
		}, function error(response) {
			cfpLoadingBar.complete();
			notify.custom('error','Something went wrong!','Employee');
		});
	};

	$scope.editRow=function(id){
		$scope.addtocntact=false;
		cfpLoadingBar.start();
		Employee.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			cfpLoadingBar.complete();
			$("#myModal").modal("show");
		},function error(response) {

		});
	};

	$scope.deleteEmployee = function(id) {
		swal({
			title: "Are you sure?",
			text: "Do You Want To Delete This Employee?",
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
				Employee.destroy(id).then(function success(response){
					$("#myModal").modal("hide");
					swal("Deleted!", "Employee Successfully Deleted", "success");
					Employee.get().then(function success(getData) {
						$scope.employees = Data.get(getData);
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
	
	angular.element(document).ready(function () {
		$("#quantity").keypress(function (e) {
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				$("#errmsg").html("Digits Only").show().fadeOut("slow");
				return false;
		 	}	
		});
	});
}]);
