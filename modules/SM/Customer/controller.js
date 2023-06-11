
app.controller('customerCtrl', ['$scope','$http','$log','Customer','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Customer, Data, notify,cfpLoadingBar,AccessFactory,$state) {

	$scope.attnData={};
	$scope.formData={'cscustomerid':0,'attentions':[]};

		//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('81').then(function success(response) {
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
	Customer.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.customers=Data.get(response);
		$scope.doPagination($scope.customers);
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
		$scope.formData={'cscustomerid':0,'attentions':[]};
	};
	$scope.addAttentions=function() {
		if($("#attn").val()!='') {
			$scope.formData.attentions.push({"caattention":$scope.attnData.attn, "cacustomerattentionid":0, "caemail":$scope.attnData.email, "cacontact":$scope.attnData.contact});

			$scope.attnData={};
			$("#attn").focus();

		}else{
		}
	};

	$scope.editAttns=function(index) {
		$scope.attnData.attn=$scope.formData.attentions[index].caattention;
		$scope.attnData.email=$scope.formData.attentions[index].caemail;
		$scope.attnData.contact=$scope.formData.attentions[index].cacontact;
	};

	$scope.removeAttns=function(id) {
		$scope.formData.attentions.splice(id, 1);
	};

	$scope.submitCustomer = function() {
		cfpLoadingBar.start();
		Customer.save($scope.formData).then(function success(response) {
			if(Data.get(response).success) {
				$scope.clearForm();
				cfpLoadingBar.complete();
				$("#myModal").modal("hide");
				notify.success('success','Customer Successfully Saved','Customer!');
				Customer.get().then(function success(getData) {
					$scope.customers=Data.get(getData);
					$scope.doPagination($scope.customers);
					}, function error(error) {
						$log.info(error);
					});
			}else {
				cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_CustomerCode") { 
					notify.custom('error','Customer Code Code Already Exists!','Customer');
				}
				else{
					notify.custom('error','Something went wrong!','Customer');
				}
				// notify.custom('error','Customer Code Already Exists','Customer!');
			}
			}, function error(response) {
				cfpLoadingBar.complete();
				notify.error('error','Error Occurred While Saving','Customer!');

		});
	};

	$scope.editRow=function(id){
		cfpLoadingBar.start();
		var detail, i=0;

		Customer.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			if(i==2) {
				// $scope.formData=row;
				$scope.formData.attentions=detail;
				$("#myModal").modal("show");
				cfpLoadingBar.complete();
			}else {
				i=1;
			}
		},function error(response) {

		});

		Customer.getAttn(id).then(function success(getAttns) {

			if(i==1) {
        // row.details=detail;
				$scope.formData.attentions=Data.get(getAttns);
        cfpLoadingBar.complete();
        $("#myModal").modal("show");
      }else {
        i=2;
        detail=Data.get(getAttns);
      }
		}, function error(getAttns) {

		});
	};

	$scope.deleteCustomer = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Customer?",
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
					Customer.destroy(id).then(function success(response) {
						$("#myModal").modal("hide");
						swal("Deleted!", "Customer Successfully Deleted", "success");
						Customer.get().then(function success(getData) {
							$scope.customers = Data.get(getData);
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
	$(document).on("click", "#addAttn", function() {
		if($("#attn").val()=='') {

			alert('Attention Name Cannot be NUll');
		} else{

			var attn	=$("#attn").val();
			var email	=$("#email").val();
			var	contact =$("#contact").val();
			$scope.formData.attentions.push({caattention:attn, caemail:email, cacontact:contact});
		}
	});
});

}]);
