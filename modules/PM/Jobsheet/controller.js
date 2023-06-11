
app.controller('jobsheetsCtrl',['$scope','$http','$log','Jobsheet','Data','notify','cfpLoadingBar','$rootScope','AccessFactory','$state','timefactory', function($scope, $http, $log, Jobsheet, Data, notify,cfpLoadingBar,$rootScope,AccessFactory,$state,timefactory) {
  $scope.formData={'jstjobsheetid':0,'employees':[], 'jobs':[]};
  $scope.searchData={};
  // $scope.searchData={
  //   "project": {
  //     'pcustomerid':1
  //   }
  // };

  $scope.selectedJobs=[];
  $scope.teamData={};
  $scope.theTeam=[];
  $scope.editable=false;
  $scope.filterData={
    'jstisactive':45
  };

 	//permission

	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('172').then(function success(response) {
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

  Jobsheet.customer().then(function success(response) {

    $scope.customers=Data.get(response);
    
  }, function error(response) {

  });

  Jobsheet.employee().then(function success(response) {
    $scope.employees=Data.get(response);
  }, function error(response) {

  });

  Jobsheet.users().then(function success(response) {
    $scope.users=Data.get(response);
  }, function error(response) {

  });
  cfpLoadingBar.start();
  Jobsheet.filterData($scope.filterData).then(function success(response) {
    cfpLoadingBar.complete();
    $scope.jobsheets=Data.get(response);
    $scope.doPagination($scope.jobsheets);
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
  Jobsheet.service().then(function success(response) {
    $scope.services=Data.get(response);
  }, function error(response) {

  });


  $scope.findJobs= function() {
console.log($scope.searchData);
    $scope.listJobs=[];
    Jobsheet.findList($scope.searchData).then(function success(response) {
      console.log(Data.get(response));
      // $scope.listJobs=Data.get(response);
      angular.forEach(Data.get(response), function(rows) {
        var flag=0;
        angular.forEach($scope.formData.jobs, function(job) {
          if(rows.jjobid==job.jtpjobid) {
            flag=1;
          }
        });
        if(flag==0) {
          $scope.listJobs.push(rows);
        }
      });
    }, function error(response) {

    });
    console.log( $scope.listJobs);
  };


  $scope.makeSelected= function(row, id) {
    $scope.selectedJobs.push(row);
    $scope.formData.jobs.push({'jtpjobid':row.jjobid,'jtpjobsheetid':$scope.formData.jstjobsheetid});
    $scope.listJobs.splice(id,1);


  };

  $scope.removeFromSelected=function(row, i) {
    $scope.formData.jobs.splice(i, 1);
    $scope.selectedJobs.splice(i, 1);

  };

  $scope.searchList=function() {
    // console.log($scope.filterData);return;
    Jobsheet.filterData($scope.filterData).then(function success(response) {
      $scope.jobsheets=Data.get(response);
    }, function error(response) {

    });
  };
  // $scope.teamData.ttworktm="00:00"
  $scope.saveworktime=function(data)
  {

      mout = data % 60;
      hout = (data-mout)/60;
    $scope.outtime = (hout<10?"0":"") + hout.toString() + ":" + (mout<10?"0":"") + mout.toString();
      parseInt($scope.outtime);
     
  }
  $scope.saveovertime=function(values)
  {

      m = values % 60;
      h = (values-m)/60;
      var ovrtime = (h<10?"0":"") + h.toString() + ":" + (m<10?"0":"") + m.toString();
      $scope.teamData.ovrtm=ovrtime;
    // console.log($scope.teamData.ttworktm);
  }
  $scope.req=false;
  $scope.addTeam=function(id) {
    console.log($scope.teamData.ttworktm);
    // mout = data % 60;
    // hout = (data-mout)/60;
    // var outtime = (hout<10?"0":"") + hout.toString() + ":" + (mout<10?"0":"") + mout.toString();
    // parseInt(outtime);
    // $scope.teamData.ttworktm=outtime;

var data =$scope.teamData.ttworktm;

    if ($scope.teamData.employee=="" || $scope.teamData.employee==undefined || $scope.teamData.employee==null) {
        $scope.req=true;
        notify.custom('error','Please Select an Employee','Employee');
    }else {
      $scope.req=false;
      $scope.formData.employees.push({
        'ewhjobsheetid':$scope.formData.jstjobsheetid,
        'ewhemployeeid':$scope.teamData.employee,
        'ewhtotalminutes':$scope.teamData.ttworktm,
        'ewhallowance':$scope.teamData.allws,
        'ewhotinminutes':$scope.teamData.ovrtm
      });
      $scope.teamData={};
    }
  };
  
  $scope.removeDetail=function(id) {
    $scope.formData.employees.splice(id,1);
  };

  

  $scope.clearForm=function() {
    $scope.selectedJobs=[];
    $scope.formData={'jstjobsheetid':0,
    'employees':[],
    'jobs':[]
  };

    Jobsheet.dfConfig().then(function success(response) {
      $scope.formData.jscjobsheetconfigurationid=Data.get(response).jscjobsheetconfigurationid;
      $scope.formData.jscreferencetype=Data.get(response).jscreferencetype;
    }, function error(response) {

    });
  };
  $scope.reset=function() {
    $scope.selectedJobs=[];
    $scope.formData={
      'jstjobsheetid':0,
      'employees':[],
      'jobs':[]
    };
  };
  $scope.changeworktime=function(data)
  {
   console.log(data);
  }
  $scope.saveSheet= function() {

 
    $scope.myDate = new Date($scope.formData.jsttimein);
    var minutein = $scope.myDate.getMinutes();
    var hour = $scope.myDate.getHours();
    minutein = minutein + hour * 60;
//timeout
    $scope.myDate = new Date($scope.formData.jsttimeout);
    var minuteout = $scope.myDate.getMinutes();
    hour = $scope.myDate.getHours();
    minuteout = minuteout + hour * 60;

    if(minutein > minuteout){
        notify.custom('error','Enter Valid Time In and Out', 'Time');
        return false;
    }
    else{
        $scope.formData.jsttimeout = minuteout;
        $scope.formData.jsttimein = minutein;
        console.log(  $scope.formData.jsttimein);
    }
    if($scope.formData.jobs.length<1 || $scope.formData.employees.length<1) {
        notify.custom('error','Employees Or Jobs are not Selected','Job');
    }else {

      // angular.forEach( $scope.formData.employees , function(key) {
      //  console.log(key.ewhtotalminutes);
      //  var str = parseInt(key.ewhtotalminutes);
      // //  str.split(" : ");
      //  console.log(str);
      // });

        Jobsheet.save($scope.formData).then(function success(response) {
        if(Data.get(response).success){
          $scope.reset();
          notify.custom('success','Jobsheet Successfully Saved!','Jobsheet!');
          Jobsheet.get().then(function success(getData) {
          $scope.jobsheets=Data.get(getData);
          $scope.doPagination($scope.jobsheets);
        }, function error(response) {

        });
        $("#jobsheet").modal("hide");
    } else {
    if(Data.get(response).message=="UQ_JobSheetReference") {
      notify.custom('error','JobSheet Reference Already Exists!','JobSheet');
    }
    else{
      notify.custom('error','Something went wrong!','JobSheet');
    }
    }

      }, function error(response) {

      });
    }
  };



  $scope.editRow = function(id) {
    $scope.reset();
    Jobsheet.show(id).then(function success(response) {
      $scope.formData=Data.get(response);
     
      var sheetintime= timefactory.timein($scope.formData.jsttimein);
      var sheetouttime= timefactory.timein($scope.formData.jsttimeout);
      $scope.formData.jsttimein=sheetintime;
      $scope.formData.jsttimeout=sheetouttime;
      console.log( $scope.sheetintime);
    }, function error(response) {

    });

    Jobsheet.details(id).then(function success(response) {
      $scope.formData.employees=Data.get(response);
    }, function error(response) {

    });

    Jobsheet.getChild('job', id, 'sheetid').then(function success(response) {
      $scope.formData.jobs=[];
      angular.forEach(Data.get(response), function(data) {

        $scope.formData.jobs.push({'jtpjobid':data.jtpjobid,'jtpjobsheetid':data.jtpjobsheetid});
        $scope.selectedJobs.push(data);
      });
    }, function error(response) {

    });


  };

  $scope.deleteSheet=function(id) {
    swal({
      title: "Are you sure?",
      text: "Do You Want To Delete This JobSheet?",
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
        Jobsheet.destroy(id).then(function success(response) {
          swal("Deleted!", "JobSheet Successfully Deleted", "success");
          Jobsheet.get().then(function success(getData) {
            $scope.jobsheets=Data.get(getData);
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
