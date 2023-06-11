app.controller('contactCtrl',['$scope','$http','$log','Contact','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Contact, Data, notify,cfpLoadingBar,AccessFactory,$state) {
  $scope.formData={'cbcontactbookid':0};

  	//permission


  // $scope.disabled=false;
  // $scope.data=false;
  // AccessFactory.Perission('122').then(function success(response) {
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
  cfpLoadingBar.start();
  Contact.get().then(function success(response) {
    cfpLoadingBar.complete();
    $scope.contacts=Data.get(response);
    $scope.doPagination($scope.contacts);
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
  $scope.clearForm=function() {
    $scope.formData={'cbcontactbookid':0};
  };

  $scope.saveContact=function() {
    cfpLoadingBar.start();
    Contact.save($scope.formData).then(function success(response) {
      $scope.clearForm();
      cfpLoadingBar.complete();
      $("#contactbook").modal("hide");
      notify.custom('success','Contact Successfully Saved!','ContactBook!');
      Contact.get().then(function success(getData) {
        $scope.contacts=Data.get(getData);
        $scope.doPagination($scope.contacts);
      }, function error(getData) {

      });
    }, function error(response) {
      cfpLoadingBar.complete();

    });
  };

  $scope.editRow=function(id) {
    cfpLoadingBar.start();
    Contact.show(id).then(function success(response) {
      $scope.formData=Data.get(response);
      cfpLoadingBar.complete();
      $("#contactbook").modal("show");
    }, function error(response) {

    });
  };

  $scope.deleteRow = function(id) {
    swal({
      title: "Are you sure?",
      text: "Do You Want To Delete This Contact?",
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
        Contact.destroy(id).then(function success(response) {
          swal("Deleted!", "Contact Successfully Deleted", "success");
          Contact.get().then(function success(getData) {
            $scope.contacts=Data.get(getData);
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
