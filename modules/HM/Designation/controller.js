app.controller('designationCtrl',['$scope','$http','$log','Designation','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Designation, Data, notify,cfpLoadingBar,AccessFactory,$state) {
	$scope.formData={'hdgdesignationid':0};

	Designation.DropDown().then(function success(response) {
		$scope.managers=Data.get(response);
	}, function error(response) {

	});
	
	cfpLoadingBar.start();
	Designation.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.designations=Data.get(response);
		$scope.doPagination($scope.designations);
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
  		$scope.formData={'hdgdesignationid':0};
  	};

	$scope.submitDesignation = function() {
    	cfpLoadingBar.start();
		Designation.save($scope.formData).then(function success(response) {
			if(Data.get(response).success) {
				$scope.formData = {'hdgdesignationid':0};
				$("#myModal").modal("hide");
				cfpLoadingBar.complete();
				notify.custom('success','Designation Successfully Saved!','Designation');
				Designation.get().then(function success(getData) {
						$scope.designations=Data.get(getData);
						$scope.doPagination($scope.designations);
				}, function error(error) {
						$log.info(error);
				});
			}else {
				cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_DesignationCode") { 
					notify.custom('error','Designation Code Already Exists!','Designation');
				}
				else{
					notify.custom('error','Something went wrong!','Designation');
				}
			}
		}, function error(response) {
			cfpLoadingBar.complete();
			notify.custom('error','Something went wrong!','Designation');
		});
	};
	
	$scope.editRow=function(id){
		cfpLoadingBar.start();
		Designation.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			cfpLoadingBar.complete();
			$("#myModal").modal('show');
		},function error(response) {
		});
	};

	$scope.deleteDesignation = function(id) {
		swal({
			title: "Are you sure?",
			text: "Do You Want To Delete This Designation?",
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
				Designation.destroy(id).then(function success(response) {
					$("#myModal").modal('hide');
					swal("Deleted!", "Designation Successfully Deleted", "success");
					Designation.get().then(function success(getData) {
						$scope.designations = Data.get(getData);
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
