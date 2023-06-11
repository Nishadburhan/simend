
app.controller('jobsCtrl',['$scope','$http','$log', '$timeout', 'Jobs','Data','notify','Excel','cfpLoadingBar','AccessFactory','$state','$rootScope', function($scope, $http, $log, $timeout, Jobs, Data, notify, Excel, cfpLoadingBar,AccessFactory,$state,$rootScope) {
  
  // console.log($stateParams.statusid);
  $scope.viewData={};
  // $scope.formData={'jjobid':$scope.viewData.jjobid,'jjobreference':$scope.viewData.jjobreference};
  $rootScope.filterData={
    'jstatusid':24
  };
  if($rootScope.statusvalue==true)
    {
      $rootScope.filterData.jstatusid=22;
    }
  	//permission
 
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('167').then(function success(response) {
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
  Jobs.findList($rootScope.filterData).then(function success(response) {
    cfpLoadingBar.complete();
    $scope.jobs=Data.get(response);
    $scope.doPagination($scope.jobs);
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
  Jobs.customer().then(function success(response) {
    $scope.customers=Data.get(response);
  },function error(response) {

  });

  Jobs.jobsites().then(function success(response) {
    $scope.jobsites=Data.get(response);
  }, function error(response) {

  });

  Jobs.branches().then(function success(response) {
    $scope.branches=Data.get(response);
  }, function error(response) {

  });

  Jobs.service().then(function success(response) {
    $scope.services=Data.get(response);
  }, function error(response) {

  });

  Jobs.status().then(function success(response) {
    $scope.status=Data.get(response);
  }, function error(response) {

  });

  $scope.searchList=function() {

      Jobs.findList($rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      });
  };

  $scope.clearForm=function() {
    $scope.viewData={};
  };

  $scope.resetButtons=function() {
    $scope.suspend=false;
    $scope.finished=false;
    $scope.skiped=false;
    $scope.reopen=false;
    $scope.revert=false;
    $scope.resume=false;
  };
  // console.log('works');
  $scope.saveJob=function() {
    // console.log();return;
    Jobs.save({'jjobid':$scope.viewData.jjobid, 'jjobreference': $scope.viewData.jjobreference}).then(function success(response) {
      if(Data.get(response).success==false && Data.get(response).message=="UQ_JobReference_notnull") {
        notify.custom('error','JobReference Reference is Already Exists!','Job');
      }else {

        notify.custom('success','Job Successfully Updated!','Job');
        Jobs.findList(  $rootScope.filterData).then(function success(response) {
          $scope.jobs=Data.get(response);
          $scope.doPagination($scope.jobs);
        }, function error(response) {

        })
      }
    }, function error(response) {
      notify.custom('error','Error Occured While Saving!','Job');
    });
  };


  $scope.editRow=function(id) {
    cfpLoadingBar.start();
    $scope.resetButtons();
    Jobs.show(id).then(function success(response) {
      cfpLoadingBar.complete();
      $scope.viewData=Data.get(response);
      switch ($scope.viewData.jstatusid) {
        case '22':
              $scope.suspend=true;
              $scope.skiped=true;
        break;
        case '24':
              $scope.suspend=true;
              $scope.skiped=true;
              $scope.finished=true;
        break;
        case '26':
              $scope.reopen=true;
        break;
        case '28':
              $scope.resume=true;
        break;
        case '30':
              $scope.revert=true;
        break;
        default:
              $scope.suspend=false;
              $scope.finished=false;
              $scope.skiped=false;
              $scope.reopen=false;
              $scope.revert=false;
              $scope.resume=false;

      };

      // console.log($scope.viewData);
    }, function error(response) {
      cfpLoadingBar.complete();
    });
  };

  $scope.jobFinished=function(id) {
    Jobs.finish(id).then(function success(response) {
      notify.custom('success','Job Updated as Finished!','Job');
        $scope.finished=false;
      Jobs.findList(  $rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      })
      $('#jobModal').modal('toggle');
    }, function error(response) {
      notify.custom('error','Error Occured While Updating!','Job');
    });
  };

  $scope.suspendJob=function(id) {
        $('#jobModal').modal('hide');

    swal({
      title: "Reason!",
      text: "Write a Reason to Suspend:",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputPlaceholder: "Write reason"
    },
    function(inputValue){
      if (inputValue === false){
        $('#jobModal').modal('toggle');
        return false;
      }

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }

      Jobs.suspend(id,inputValue).then(function success(response) {
          notify.custom('success','Job Suspended','Job');
          $scope.suspend=false;
          swal("Nice!", "You wrote: " + inputValue, "success");
          Jobs.findList(  $rootScope.filterData).then(function success(response) {
            $scope.jobs=Data.get(response);
          }, function error(response) {

          })
        }, function error(response) {
          notify.custom('error','Faild to Suspend The Job!','Job');
        });
    });

  };

  $scope.skipJob=function(id) {

    $('#jobModal').modal('hide');
    swal({
      title: "Skips!",
      text: "How Many Jobs Do You Want To Skip?:",
      type: "input",

      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      customClass: "mySwal",
      inputPlaceholder: "Eg:- 12"
    },
    function(inputValue){
    
        
      if (inputValue === false){
        $('#jobModal').modal('toggle');
        return false;
      }

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      if (isNaN(inputValue)) {
        swal.showInputError("Must input numbers!");
        
      }
      else{
         Jobs.skip(id,inputValue).then(function success(response) {
          notify.custom('success','Job Skipped','Job');
          swal("Nice!", inputValue+" Jobs Skipped!", "success");
          $scope.skiped=false;
          Jobs.findList($rootScope.filterData).then(function success(response) {
            $scope.jobs=Data.get(response);
          }, function error(response) {

          })
          // $('#jobModal').modal('toggle');
        }, function error(response) {
          notify.custom('error','Faild to Skip The Job!','Job');
        });

      }

     
  
    });

  };

  $scope.revertJob=function(id) {
    Jobs.revert(id).then(function success(response) {
      notify.custom('success','Job Reverted','Job');
      $scope.revert=false;
      Jobs.findList(  $rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      })
      $('#jobModal').modal('toggle');
    }, function error(response) {
      notify.custom('error','Faild to Revert The Job!','Job');
    });
  };

  $scope.resumeJob=function(id) {
    Jobs.resume(id).then(function success(response) {
      notify.custom('success','Job Resume','Job');
      $scope.resume=false;
      Jobs.findList($rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      })
      $('#jobModal').modal('toggle');
    }, function error(response) {
      notify.custom('error','Faild to Resume The Job!','Job');
    });
  };

  $scope.reopenJob=function(id) {
    Jobs.reopen(id).then(function success(response) {
      notify.custom('success','Job Reopen','Job');
      $scope.reopen=false;
      Jobs.findList($rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      })
      $('#jobModal').modal('toggle');
    }, function error(response) {
      notify.custom('error','Faild to Reopen The Job!','Job');
    });
  };

  $scope.exportToExcel=function(tableId){ // ex: '#my-table'
    // console.log(tableId);return;
			// $scope.exportHref=Excel.tableToExcel(tableId,'sheet name');
			// $timeout(function(){location.href=$scope.fileData.exportHref;},100); // trigger download
      var exportHref=Excel.tableToExcel(tableId,'sheet name');
      $timeout(function(){location.href=exportHref;},100);
		};
}]);
