
app.controller('jobsiteCtrl', ['$scope','$http','$log','Jobsite','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Jobsite, Data, notify,cfpLoadingBar,AccessFactory,$state) {
	$scope.formData={
	'jsjobsitesid':0,
	// 'jscountryid':101
	};

	//permission


	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('83').then(function success(response) {
	// if(Data.get(response)==0){
	// $state.go('access');
	// }
	// if(Data.get(response)==1){
	// $scope.readresponse=Data.get(response);
	// $scope.disabled=true;
	// }
	// if(Data.get(response)==2){
	// $scope.writeresponse=Data.get(response);
	// $scope.data=true;
	// }
	// if(Data.get(response)==3){
	// $scope.fullresponse=Data.get(response);
	// $scope.data=true;
	// }
	// }, function error(response) {

	// });

	//end permission
	var selectedJobsites=[];

	Jobsite.DropDown('country').then(function success(response) {
		$scope.countries=Data.get(response);
	},function error(response) {

	});

	Jobsite.DropDown('province').then(function success(response) {
		$scope.provinces=Data.get(response);
	},function error(response) {

	});
	cfpLoadingBar.start();
	Jobsite.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.jobsites=Data.get(response);
		$scope.doPagination($scope.jobsites);

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
		$scope.formData={'jsjobsiteid':0};
		Jobsite.dfCountry().then(function success(response) {
			$scope.formData.jscountryid=response.data;
		}, function error(response) {

		});
		// console.log();
	};

	$scope.submitJobsite = function() {
		cfpLoadingBar.start();
		Jobsite.save($scope.formData).then(function success(response) {
			$scope.formData = {'jsjobsiteid':0};
			cfpLoadingBar.complete();
			$("#myModal").modal("hide");
			notify.custom('success','Jobsite Successfully Saved','Jobsite!');
			Jobsite.get().then(function success(getData) {
				$scope.jobsites=Data.get(getData);
				$scope.doPagination($scope.jobsites);
				}, function error(error) {
					$log.info(error);
				});
			}, function error(response) {
				cfpLoadingBar.complete();
				notify.custom('error','Error Occurred While Saving','Jobsite!');

		});
	};

	$scope.editRow=function(id){
		cfpLoadingBar.start();
		Jobsite.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			cfpLoadingBar.complete();
			$("#myModal").modal("show");
		},function error(response) {

		});
	};

	$scope.deleteJobsite = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Jobsite?",
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
					Jobsite.destroy(id).then(function success(response) {
						$("#myModal").modal("hide");
						swal("Deleted!", "Jobsite Successfully Deleted", "success");
						Jobsite.get().then(function success(getData) {
							$scope.jobsites = Data.get(getData);
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
	// 					selectedJobsites.push($(this).data('id'));
	// 		});
	// 	}else {
	// 		$(".boxes").prop('checked',false);
	// 		selectedJobsites=[];
	// 		console.log(selectedBranches);
	// 	}
	// });

}]);
