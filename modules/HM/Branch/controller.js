app.controller('branchCtrl', ['$scope','$http','$log','Branch','Data','notify','cfpLoadingBar','$timeout','AccessFactory','$state', function($scope, $http, $log, Branch, Data, notify,cfpLoadingBar,$timeout,AccessFactory,$state) {

	var hrpIDs=[];

	$scope.formData={'hbbranchid':0, 'departments':[]};
	
	//List Departments
	Branch.Departments().then(function success(response) {
		$scope.departments=Data.get(response);
	}, function error(response) {
	});

	// Department List :End
	Branch.DropDown().then(function success(response) {
		$scope.managers=Data.get(response);
	}, function error(response) {
	});

	cfpLoadingBar.start();
	Branch.get().then(function success(response) {
		$scope.branches=Data.get(response);
		$scope.doPagination($scope.branches);
		cfpLoadingBar.complete();
		// return $scope.branches;
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
		$('.departs').prop('checked', false);
		$scope.formData={'hbbranchid':0, 'departments':[]};
	};

	$scope.submitBranch = function() {
		cfpLoadingBar.start();
		Branch.save($scope.formData).then(function success(response) { 
			if(Data.get(response).success) {
				$scope.formData = {'hbbranchid':0, 'departments':[]};
				$('.departs').prop('checked', false);
					cfpLoadingBar.complete();
					$("#myModal").modal("hide");
					notify.custom('success','Branch Successfully Saved!','Branch');
					Branch.get().then(function success(getData) {
						$scope.branches=Data.get(getData);
						$scope.doPagination($scope.branches);
						}, function error(error) {
							// $log.info(error);
						});
			}else {
				cfpLoadingBar.complete();
				if(Data.get(response).message=="UQ_BranchCode") {
                    notify.custom('error','Branch Code Already Exists!','Branch');
				}
				else{
					notify.custom('error','Something went wrong!','Branch');
				}
			}

			}, function error(response) {
				notify.custom('error','Something went wrong!','Branch');
				cfpLoadingBar.complete();
		});
	};

	$scope.editRow=function(id){
		cfpLoadingBar.start();
		Branch.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			angular.forEach($scope.formData.departments, function(key) {
					angular.element(document).ready(function () {
							$('input:checkbox[value='+key.hbddepartmentid+']').prop('checked', true);
					});
			});
			cfpLoadingBar.complete();
			$("#myModal").modal("show");
		},function error(response) {
			cfpLoadingBar.complete();
		});
	};

	$scope.deleteBranch = function(id) {
		swal({
		title: "Are you sure?",
		text: "Do You Want To Delete This Branch?",
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
				Branch.destroy(id).then(function success(response) {
					$("#myModal").modal("hide");
					swal("Deleted!", "Branch Successfully Deleted", "success");
					Branch.get().then(function success(getData) {
						$scope.branches = Data.get(getData);
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
	$(document).on("change", ".departs", function() {
	  if(this.checked) {
			if($scope.formData.hbbranchid=='0') {
				$scope.formData.departments.push({'hbdbranchdepartmentid':'0','hbdbranchid':$scope.formData.hbbranchid,'hbddepartmentid':$(this).data('id')});
			}else{
				$scope.formData.departments.push({'hbdbranchdepartmentid':'0','hbdbranchid':$scope.formData.hbbranchid,'hbddepartmentid':$(this).data('id')});
			}
		} else {
			// Remove From array if Exists
			for(var i=0;i <$scope.formData.departments.length; i++) {
				if($scope.formData.departments[i].hbddepartmentid==$(this).data('id')){
					$scope.formData.departments.splice(i,1);
				}
			}
		}

	});


	$("#btnExport").click(function(e) {
		
		e.preventDefault();
		
		var data_type = 'data:application/vnd.ms-excel';
		var table_div = document.getElementById('table_wrapper');

		var table_html = table_div.outerHTML.replace(/ /g, '%20');

		var a = document.createElement('table');
		
		a.href = data_type + ', ' + table_html;

			a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
			
			a.click();
	  });
});



}]);
