
app.controller('scheduleCtrl',['$scope','$http','$log','$filter','Schedule','Data','notify','cfpLoadingBar','timefactory','AccessFactory','$state', function($scope, $http, $log, $filter, Schedule, Data, notify,cfpLoadingBar,timefactory,AccessFactory,$state) {
 
 
 
    $scope.formData={
      'jshjobscheduleid':0,
      'employees':[],
      'jobs':[]
    };
    $scope.searchData={
      'jstatusid':'22'
    };
    $scope.addon={};
    $scope.selectedJobs=[];
    $scope.filterData={
      'jshisactive':'1',
      'jshstatusid' : '52'
    };
    // suhail
    $scope.filterToSchedule={
      'days':'33'
    };

    $scope.filterJob={
      'job':{'jstatusid':'24'}
    };

  	//permission

	
    // $scope.disabled=false;
    // $scope.data=false;
    // AccessFactory.Perission('168').then(function success(response) {
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
 Schedule.jobsites().then(function success(response) {
        $scope.jobsites=Data.get(response);
      }, function error(response) {
 });

  Schedule.customer().then(function success(response) {
    $scope.customers=Data.get(response);
  }, function error(response) {
  });

  Schedule.branches().then(function success(response) {
    $scope.branches=Data.get(response);
     }, function error(response) {
  });

  Schedule.service().then(function success(response) {
      $scope.services=Data.get(response);
      }, function error(response) {
  });

  cfpLoadingBar.start();
  Schedule.filterData($scope.filterData).then(function success(response) {
    $scope.schedules=Data.get(response);
    $scope.doPagination($scope.schedules);
    cfpLoadingBar.complete();
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
  Schedule.employee().then(function success(response) {
      $scope.employees=Data.get(response);
    }, function error(response) {
  });

  Schedule.users().then(function success(response) {
    $scope.users=Data.get(response);
    }, function error(response) {
  });
 $scope.find=function() {
    $scope.listJobs=[];
    Schedule.findList($scope.searchData).then(function success(response) {
        angular.forEach(Data.get(response), function(rows) {
          var flag=0;
          angular.forEach($scope.formData.jobs, function(jo) {
            if(rows.jjobid==jo.jspjobid) {
              flag=1;
            }

          });
          if(flag==0) {
            $scope.listJobs.push(rows);
          }
      });
     
      }, function error(response) {

      });

  };
  $scope.searchList=function() {
     Schedule.filterData($scope.filterData).then(function success(response) {
        $scope.schedules=Data.get(response);
      }, function error(response) {
      });
    };
  $scope.makeSelected=function(row,i) {
    $scope.formData.jobs.push({'jspjobid':row.jjobid,'jspjobscheduleid':$scope.formData.jshjobscheduleid});
    $scope.selectedJobs.push(row);
    $scope.listJobs.splice(i, 1);
   };

  $scope.removeFromSelected= function(row,i) {
    $scope.formData.jobs.splice(i,1);
    $scope.selectedJobs.splice(i,1);
  };
  $scope.theTeam=[];
  $scope.emid=false;
  $scope.samdata={};


   $scope.addTeam=function(id,data) {
     console.log(id)
     console.log(data.heemployeeid)
   
    $('#ship option:selected').css('display','none');

    if (id==null) {
      notify.custom('error','Please Select an Employee','Employee');
      $scope.emid=true;
    }else {
      $scope.formData.employees.push({'espemployeeid':id,'espjobscheduleid':$scope.formData.jshjobscheduleid});
      $scope.emid=false;
    }
  

  };
  // console.log(fem.espemployeeid);
  
  $scope.removeTeam=function(id) {
          console.log(id);
          console.log( $("#test"+id));
          var value=id-1;
        $scope.formData.employees.splice(value, 1);
    
           $("#test"+id).css('display','block');
     // });
  };
  $scope.reset=function() {
    $scope.formData={
      'jshjobscheduleid':0,
      'employees':[],
      'jobs':[]
    };
    $scope.searchData={};
    $scope.addon={};
    $scope.selectedJobs=[];
  };
  $scope.clearForm=function() {
    // $('#ship'+$scope.valdata+'option').css('display','none');
    $('#ship option').css('display','block')
      $scope.formData={
        'jshjobscheduleid':0,
        'employees':[],
        'jobs':[]
      };
      // $scope.searchData={
      //   'jstatusid':'22'
      // };
      // $scope.searchData={};
      $scope.addon={};
      $scope.selectedJobs=[];
      $scope.samdata={};
      Schedule.dfConfig().then(function success(response) {
        $scope.formData.scscheduleconfigurationid=Data.get(response).scscheduleconfigurationid;
        $scope.formData.screferencetype=Data.get(response).screferencetype;

      }, function error(response) {

      });

  };
  $scope.chane=function(val)
  {
    if(val=='1'){
    
      $scope.formData.jshstatusid='54';
    }
    if(val=='0'){
        $scope.formData.jshstatusid='52';
    }
  
  }
$scope.saveSchedule=function() {
//timein
    if($scope.formData.jshtimein == null){
        var minutein = 0;
    }
    else{
        $scope.myDate = new Date($scope.formData.jshtimein);
        var minutein = $scope.myDate.getMinutes();
        var hour = $scope.myDate.getHours();
        minutein = minutein + hour * 60;
    }
//timeout
    if($scope.formData.jshtimeout == null){
        var minuteout = minutein;
    }
    else{
        $scope.myDate = new Date($scope.formData.jshtimeout);
        var minuteout = $scope.myDate.getMinutes();
        var hour = $scope.myDate.getHours();
        minuteout = minuteout + hour * 60;
    }

    if(minutein > minuteout){
        notify.custom('error','Enter Valid Time In and Out', 'Time');
        return false;
    }
    else{
        $scope.formData.jshtimeout = minuteout;
        $scope.formData.jshtimein = minutein;
    }

    if ($scope.formData.jobs.length<1) {
      notify.custom('error','Jobs Not Selected','Details')
    }
    else {
      console.log($scope.formData);
      Schedule.save($scope.formData).then(function success(response) {
          if(Data.get(response).success ) {
            $scope.clearForm();
            $("#schedule").modal("hide");
            notify.custom('success','Schedule Successfully Saved!','Schedule');
            Schedule.filterData($scope.filterData).then(function success(getData) {
            $scope.schedules=Data.get(getData);
            $scope.doPagination($scope.schedules);
            }, function error(getData) {

            });
          }
          else{
              if(Data.get(response).message=="UQ_JobScheduleReference") {
                notify.custom('error','JobSchedule Reference  Already Exists!','JobSchedule');
              }
              else{
                    notify.custom('error','Something went wrong!','JobSchedule');
              }
          }
      }, function error(response) {
        notify.custom('error','Error Found While Saving!');
      });
    }
  };

  $scope.editRow=function(id) {
    console.log(id);
    $scope.clearForm();
    cfpLoadingBar.start();
    Schedule.show(id).then(function success(response) {
      cfpLoadingBar.complete();
      $("#myModal").modal("show");
      $scope.formData=Data.get(response);
      var intime= timefactory.timein($scope.formData.jshtimein);
      var outtime= timefactory.timein($scope.formData.jshtimeout);
     console.log("fhdhg"+$scope.formData.intime);
      $scope.formData={
          'jshtimein':intime,
          'jshtimeout':outtime,
          'jshcreatedon':$scope.formData.jshcreatedon,
          'jshdate':$scope.formData.jshdate,
          'jshdeletedon':$scope.formData.jshdeletedon,
          'jshheademployeeid':$scope.formData.jshheademployeeid,
          'jshisactive':$scope.formData.jshisactive,
          'jshjobscheduleid':$scope.formData.jshjobscheduleid,
          'jshmodifiedon':$scope.formData.jshmodifiedon,
          'jshreferencetype':$scope.formData.jshreferencetype,
          'jshremarks':$scope.formData.jshremarks,
          'jshscheduleconfigurationid':$scope.formData.shscheduleconfigurationid,
          'jshschedulereference':$scope.formData.jshschedulereference,
          'jshstatusid':$scope.formData.jshstatusid,
          ' jshuid': $scope.formData.jshuid };
       }, function error(response) {
      cfpLoadingBar.complete();
	 });

    Schedule.getChild('job', id, 'scheduleid').then(function success(response) {
        $scope.formData.jobs=[];
        $("#schedule").modal("show");
        angular.forEach(Data.get(response), function(data) {
          $scope.formData.jobs.push({'jspjobid':data.jspjobid,'jspjobscheduleid':data.jspjobscheduleid});
     });
      $scope.selectedJobs=Data.get(response);
    }, function error(response) {

    });
   Schedule.getChild('employee', id, 'scheduleid').then(function success(response) {
      $scope.formData.employees=[];
      $scope.formData.employees=Data.get(response);
   console.log(  $scope.formData.employees);
      angular.forEach(  $scope.formData.employees, function(key) {
      
        // $scope.valdata=key.espemployeeid;

        $("#test"+key.espemployeeid).css('display','none');
        // $('#"ship"'+$scope.valdata+'option:selected').css('display','none');
        // console.log( $('#ship'+$scope.valdata).val)
        //  $('#ship option').css('display','none');
              });
    
    }, function error(response) {
  });
  console.log( $scope.formData.employees);
  console.log($scope.valdata)


  
 };
// if($scope.formData.jshjobscheduleid=='0')
//   {
    // $scope.cli=function(data,val,d)
    // {
      
    //   console.log(data);
    //   console.log(val);
    //   console.log(d)
    //   console.log($("#test"+val));
    //   angular.forEach(data, function(key) {
    //     console.log($("#test"+key.heemployeeid));
    //     if(key.heemployeeid==val)
    //       {
    //         $("#test"+key.heemployeeid).css('display','none');
    //         // $('#ship option:selected').css('display','none');
    //         // $("#test"+key.heemployeeid+ 'option').remove();
    //         // console.log($("#test"+key.heemployeeid+ 'option:selected'));
    // // console.log(key);
    //       }
    //   });
      
    // }
  // }


 $scope.deleteSchedule = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Quotation?",
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
					Schedule.destroy(id).then(function success(response) {
            $("#schedule").modal("hide");
						swal("Deleted!", "Schedule Successfully Deleted", "success");
            Schedule.filterData($scope.filterData).then(function success(getData) {
              $scope.schedules=Data.get(getData);
            }, function error(getData) {

            });

					},function error(response) {
						swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
					});
			  } else {
			    swal("Cancelled", "Terminated The Process", "error");
			  }
			});
  };

    $scope.changetimein=function(timedatain){
        $scope.formData.jshtimein=timedatain;
    }
    $scope.changetimeout=function(timedataout){
      $scope.formData.jshtimeout=timedataout;
    }

    // suhail
    // filter to schedule
    $scope.searchToSchedule=function() {
        Schedule.filterToSchedule($scope.filterToSchedule).then(function success(response) {
            $scope.toSchedules=Data.get(response);
        }, function error(response) {
        });
    };

    cfpLoadingBar.start();
    Schedule.filterToSchedule($scope.filterToSchedule).then(function success(response) {
      $scope.toSchedules=Data.get(response);
      cfpLoadingBar.complete();
      }, function error(response) {
        cfpLoadingBar.complete();
    });

    // filter  job
    $scope.searchJob=function() {
      Schedule.filterJob($scope.filterJob).then(function success(response) {
          $scope.jobs=Data.get(response);
      }, function error(response) {
      });
  };

  cfpLoadingBar.start();
  Schedule.filterJob($scope.filterJob).then(function success(response) {
    $scope.jobs=Data.get(response);
    cfpLoadingBar.complete();
    }, function error(response) {
      cfpLoadingBar.complete();
  });
}]);

 