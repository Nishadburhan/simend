app.controller('templateCtrl',['$scope','$http','$log','Template','Data','notify','cfpLoadingBar','AccessFactory','$state' ,function($scope, $http, $log, Template, Data, notify,cfpLoadingBar,AccessFactory,$state) {
  /*
  Controller  for Quotations
  */
  $scope.tempData={
    'qtquotationtemplateid':0
  };
  	//permission

	
  // $scope.disabled=false;
  // $scope.data=false;
  // AccessFactory.Perission('101').then(function success(response) {
  // if(Data.get(response)==0){
  //   $state.go('access');
  // }
  // if(Data.get(response)==1){
  //   $scope.readresponse=Data.get(response);
  //   $scope.disabled=true;
  // }
  // if(Data.get(response)==2){
  //   $scope.writeresponse=Data.get(response);
  //   $scope.data=true;
  // }
  // if(Data.get(response)==3){
  //   $scope.fullresponse=Data.get(response);
  //   $scope.data=true;
  // }
  // }, function error(response) {

  // });
//end permission
  // get Quotation Data
  cfpLoadingBar.start();
  Template.get('quotation').then(function success(response) {
    cfpLoadingBar.complete();
    $scope.quotations=Data.get(response);
    $scope.doPagination($scope.quotations);
  }, function error(response) {
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
  $scope.tempClear=function() {
    $scope.tempData={
      'qtquotationtemplateid':0
    };
    $scope.ctData={
      'ctcontracttemplateid':0
    };
    $scope.invData={
      'itinvoicetemplateid':0
    };
  };

  $scope.saveQuotation=function() {
    cfpLoadingBar.start();

    // console.log($scope.tempData);return;
    Template.save('quotation', $scope.tempData).then(function success(response) {
      if(Data.get(response).message=="UQ_QuotationTemplateName") {
        cfpLoadingBar.complete();
        notify.custom('error','Template Already Exists!','Quotation');
      }else {
        $scope.tempClear();
        cfpLoadingBar.complete();
        $("#qtModal").modal("hide");
        notify.custom('success','Quotation Successfully Added!','Quotation!');
        Template.get('quotation').then(function success(getData) {
          $scope.quotations=Data.get(getData);
          $scope.doPagination($scope.quotations);
        }, function error(getData) {

        });
      }

    }, function error(response) {
      cfpLoadingBar.complete();
      notify.custom('error','Error Occured While Saving!','Quotation!');

    });
  };

  $scope.editRow=function(id){
    cfpLoadingBar.start();
		Template.show('quotation',id).then(function success(response) {
			$scope.tempData=Data.get(response);
      cfpLoadingBar.complete();
      $("#qtModal").modal("show");
		},function error(response) {

		});
	};

  $scope.deleteQuotation = function(id) {
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
					Template.destroy('quotation', id).then(function success(response) {
            notify.custom('success','Quotation Successfully Deleted!','Quotation!');
            swal("Deleted!", "Quotation Successfully Deleted!", "success");
						Template.get('quotation').then(function success(getData) {
							$scope.quotations = Data.get(getData);
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
  // Quotation :End
  /*
  Controller for Contracts
  */
  $scope.ctData={'ctcontracttemplateid':0};
  // get Quotation Data
  Template.get('contract').then(function success(response) {
    $scope.contracts=Data.get(response);
    $scope.doPagination($scope.contracts);
  }, function error(response) {

  });
	// $scope.donePagination=function(param) {
	// 	$scope.totalItems = param.length;
	// 	$scope.currentPage = 1;
	// 	$scope.itemsPerPage=10;
	// 	$scope.maxSize = 5;
		
	// }
	// $scope.setPage = function (pageNo) {
	//   $scope.currentPage = pageNo;
	// };

	// $scope.setItemsPerPage = function(num) {
	// 	$scope.itemsPerPage = num;
	// 	$scope.currentPage = 1; //reset to first page
	// }
  $scope.saveContract=function() {
    cfpLoadingBar.start();
    Template.save('contract',$scope.ctData).then(function success(response) {
      if (Data.get(response).message=='UQ_ContractTemplateName') {
        cfpLoadingBar.complete();
        notify.custom('error','Template Already Exists!','Contract');

      }else {
        $scope.tempClear();
        cfpLoadingBar.complete();
        $("#ctModal").modal("hide");
        notify.custom('success','Contract Successfully Added!','Contract!');

        Template.get('contract').then(function success(getData) {
          $scope.contracts=Data.get(getData);
          $scope.doPagination($scope.contracts);
        }, function error(response) {

        });
      }
    }, function error(response) {
      cfpLoadingBar.complete();
      notify.custom('error','Error Occured While Saving!','Contract!');

    });
  };

  $scope.editContract=function(id){
    cfpLoadingBar.complete();

		Template.show('contract',id).then(function success(response) {

			$scope.ctData=Data.get(response);
      cfpLoadingBar.complete();
      $("#ctModal").modal("show");
		},function error(response) {
      cfpLoadingBar.complete();

		});
	};
  $scope.deleteContract = function(id) {
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
					Template.destroy('contract', id).then(function success(response) {
            notify.custom('success','Contract Successfully Deleted!','Contract!');
            swal("Deleted!", "Contract Successfully Deleted!", "success");
						Template.get('contract').then(function success(getData) {
							$scope.contracts = Data.get(getData);
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
  // Contracts :End
  /*
  Controller for Invoices
  */
  $scope.invData={'itinvoicetemplateid':0};
  // get Invoice Data
  Template.get('invoice').then(function success(response) {
    $scope.invoices=Data.get(response);
  }, function error(response) {

  });
  $scope.saveInvoice=function() {
    cfpLoadingBar.start();
    Template.save('invoice',$scope.invData).then(function success(response) {
      if (Data.get(response).message=='UQ_InvoiceTemplateName') {
        cfpLoadingBar.complete();
        notify.custom('error','InvoiceTemplateName Already Exists!','Invoice');
      }else {
        $scope.tempClear();
        cfpLoadingBar.complete();
        $("#inModal").modal("hide");
        notify.custom('success','Invoice Successfully Added!','Invoice!');

        Template.get('invoice').then(function success(getData) {
          $scope.invoices=Data.get(getData);
        }, function error(response) {

        });
      }
    }, function error(response) {
      cfpLoadingBar.complete();
      notify.custom('error','Error Occured While Saving!','Invoice!');

    });
  };

  $scope.editInvoice=function(id){
    cfpLoadingBar.start();
		Template.show('invoice',id).then(function success(response) {
			$scope.invData=Data.get(response);
      cfpLoadingBar.complete();
      $("#inModal").modal("show");
		},function error(response) {
      cfpLoadingBar.complete();

		});
	};
  $scope.deleteInvoice = function(id) {
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
					Template.destroy('invoice', id).then(function success(response) {
            notify.custom('success','Invoice Successfully Deleted!','Invoice!');
            swal("Deleted!", "Invoice Successfully Deleted!", "success");
						Template.get('invoice').then(function success(getData) {
							$scope.invoices = Data.get(getData);
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
  // Invoice :End

}]);
