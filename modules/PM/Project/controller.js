app.controller('projectCtrl',['$scope','$http','$filter','Data','Project','notify','cfpLoadingBar','AccessFactory','genPDF','$state', function($scope,$http,$filter,Data,Project,notify,cfpLoadingBar,AccessFactory, genPDF, $state) {
  $scope.editing=false;
  $scope.detailsData={
    'frequency':0,
    'unit':0,
    'rate':0
  };
  $scope.details=[];
  $scope.filterData={
    'pstatusid':12
  };
  $scope.formData={
    'pprojectid':0,
    'pjobtypeid':1,
    'details':[]
  };
  
  $scope.lpoData={
    'pprojectid':0,
    'pjobtypeid':2,
    'details':[]
  };

  $scope.instantData={
    'pprojectid':0,
    'pjobtypeid':3,
    'details':[]
  };

  /*
  Drop Downs
  */

	//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('165').then(function success(response) {
  //   console.log(Data.get(response));
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


  Project.CtTemplates().then(function success(response) {
    $scope.cttemplates=Data.get(response);
  }, function error(response) {

  });

  Project.customer().then(function success(response) {
    $scope.customers=Data.get(response);
  },function error(response) {

  });

  Project.users().then(function success(response) {
    $scope.users=Data.get(response);
  },function error(response) {

  });

  Project.status().then(function success(response) {
    $scope.status=Data.get(response);
  },function error(response) {

  });

  Project.attentions().then(function success(response) {
    $scope.attentions=Data.get(response);
  }, function error(response) {

  });

  Project.jobsites().then(function success(response) {
    $scope.jobsites=Data.get(response);
  }, function error(response) {

  });

  Project.employees().then(function success(response) {
    $scope.employees=Data.get(response);
  }, function error(response) {

  });

  Project.branches().then(function success(response) {
    $scope.branches=Data.get(response);
  }, function error(response) {

  });

  Project.service().then(function success(response) {
    $scope.services=Data.get(response);
  }, function error(response) {

  });
  cfpLoadingBar.start();
  Project.findlist($scope.filterData).then(function success(response) {

    $scope.projects=Data.get(response);
    $scope.doPagination($scope.projects);
    cfpLoadingBar.complete();

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
  

  Project.jobtype().then(function success(response) {
    $scope.jobtype=Data.get(response);
  }, function error(response) {

  });

  $scope.searchList=function() {
    cfpLoadingBar.start();
    Project.findlist($scope.filterData).then(function success(response) {
        $scope.projects=Data.get(response);
        cfpLoadingBar.complete();
    },function error(response) {

    });
  };

  $scope.sumFreq=function(unit, rate, freq) {
      $scope.detailsData.total=parseFloat(unit)*parseFloat(rate)*parseFloat(freq);
  };


  $scope.LPOsum=function(unit, rate) {
      $scope.detailsData.total=parseFloat(unit)*parseFloat(rate);
  };

  $scope.clearForm=function() {
    $scope.formData={
      'pprojectid':0,
      'pjobtypeid':1,
      'details':[]
    };

    $scope.lpoData={
      'pprojectid':0,
      'pjobtypeid':2,
      'details':[]
    };

    $scope.instantData={
      'pprojectid':0,
      'pjobtypeid':3,
      'details':[]
    };


  Project.defaults('contract').then(function success(response) {
    $scope.formData.cpccontractconfigurationid=Data.get(response).cpccontractconfigurationid;
    $scope.formData.cpcreferencetype=Data.get(response).cpcreferencetype;
  }, function error(response) {

  });

  Project.defaults('onetime').then(function success(response) {
    $scope.lpoData.opconetimeconfigurationid=Data.get(response).opconetimeconfigurationid;
    $scope.lpoData.opcreferencetype=Data.get(response).opcreferencetype;
    $scope.lpoData.opcreferencetype=$scope.lpoData.opcreferencetype;
  }, function error(response) {

  });

  Project.defaults('instant').then(function success(response) {
    $scope.instantData.ipcprojectconfigurationid=Data.get(response).ipcprojectconfigurationid;
    $scope.instantData.ipcreferencetype=Data.get(response).ipcreferencetype;

    $scope.instantData.ipcreferencetype= $scope.instantData.ipcreferencetype;
  }, function error(response) {

  });

  Project.dfTemplate().then(function success(response) {
    $scope.formData.pcontracttemplateid=Data.get(response).ctcontracttemplateid;
    Project.getBody($scope.formData.pcontracttemplateid).then(function success(getData) {
      angular.forEach(Data.get(getData), function(data) {
        $scope.formData.pdescriptiontop=data.ctdescriptiontop;
        $scope.formData.pdescriptionbottom=data.ctdescriptionbottom;
      });
    }, function error(getData) {

    });
  }, function error(response) {
  });

};
$scope.suspended=false;
$scope.resume=false;

$scope.suspend=function(id, ex) {
  $("#contract").modal("hide");
  $("#instantForm").modal("hide");
  $("#lpoForm").modal("hide");

  swal({
    title: "Reason!",
    text: "Write a Reason to Suspend:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write Reason"
  },
  function(inputValue){
    if (inputValue === false) {
      switch (ex) {
        case 'c':
          $("#contract").modal("show");
          break;
        case 'l':
          $("#lpoForm").modal("show");
          break;
        case 'i':
          $("#instantForm").modal("show");
          break;

      }
      
      return false;
    }

    if (inputValue === "") {
      swal.showInputError("You need to write something!");
      return false
    }

    Project.suspend(id, inputValue).then(function success(response) {
      cfpLoadingBar.start();
      notify.custom('success','Project Suspended','Project');
      $scope.suspended=false;
      swal("Nice!", "You wrote: " + inputValue, "success");
      Project.findlist($scope.filterData).then(function success(fetch) {
        $scope.projects=Data.get(fetch);
        cfpLoadingBar.complete();
        // $("#contract").modal("toggle");
      },function error(fetch) {

      });
    }, function error(response) {

    });

  });
};

$scope.resumeProject=function(id) {
  cfpLoadingBar.start();
  Project.resume(id).then(function success(response) {
    notify.custom('success','Project Resumed','Project');
    $scope.resume=false;
    Project.findlist($scope.filterData).then(function success(fetch) {
      $scope.projects=Data.get(fetch);
      cfpLoadingBar.complete();
      $("#contract").modal("hide");
      $("#instantForm").modal("hide");
      $("#lpoForm").modal("hide");
    },function error(fetch) {

    });
  }, function error(response) {

  });
};

$scope.applyTemplate=function(templateId) {
  cfpLoadingBar.start();
  Project.getBody(templateId).then(function success(getData) {
    angular.forEach(Data.get(getData), function(data) {
      $scope.formData.pdescriptiontop=data.ctdescriptiontop;
      $scope.formData.pdescriptionbottom=data.ctdescriptionbottom;
      cfpLoadingBar.complete();
      notify.custom('success','New Template Applied!','Template');
    });
  }, function error(getData) {

  });
};

 
  $scope.findContractTotalJobs=function(data) {
    var base=$scope.formData.pbaseperiodid;
    var period=$scope.formData.pperiod;
    var totalJobs=0, pdjobs=0;


    angular.forEach(data, function(row) {
      if(row.pdfrequencyperiodid==base) {
        pdjobs=Number(row.pdfrequency)*period;
        row.pdtotaljobs=pdjobs;
      }else {
        pdjobs=Number(row.pdfrequency)*period*12;
        row.pdtotaljobs=pdjobs

      }
      //
      totalJobs+=pdjobs;
    });

    return totalJobs;
  };

  $scope.srreq=false;
  $scope.cpushDetail=function() {
    if($scope.detailsData.srid=='' || $scope.detailsData.srid==null ) {
      notify.custom('error','Service Required!','Details');
      $scope.srreq=true;
    }else{
  //  $scope.frquency= parseInt($scope.detailsData.frequency);
      $scope.formData.details.push({
        'pdprojectdetailid':'0',
        'pdserviceid':$scope.detailsData.srid,
        'pdprojectid':$scope.formData.pprojectid,
        'pdjobsiteid':$scope.formData.pjobsiteid,
        'pdservicedescription':$scope.detailsData.desc,
        'pdunit':$scope.detailsData.unit,
        'pdrate':$scope.detailsData.rate,
        'pdfrequency':$scope.detailsData.frequency,
        'pdfrequencyperiodid':$scope.detailsData.basePeriod,
        'pdtotal':$scope.detailsData.total

      });

      $scope.srreq=false;
      $scope.detailsData={};
      notify.custom('success','Details Successfully Added!','Project!');
      $("#focus").focus();
    }

  };
  $scope.detailEdit=function(data)
  {
    // $scope.formData.details.splice(id,1);
    $scope.formData.details=[];
    console.log(data.pdfrequency);
    $scope.formData.details.push({
      'pdprojectdetailid':data.pdprojectdetailid,
      'pdserviceid':data.pdserviceid,
      'pdprojectid':data.pdprojectid,
      'pdjobsiteid':data.pdjobsiteid,
      'pdservicedescription':data.pdservicedescription,
      'pdunit':data.pdunit,
      'pdrate':data.pdrate,
      'pdfrequency':data.pdfrequency,
      'pdfrequencyperiodid':data.pdfrequencyperiodid,
      'pdtotal':data.pdtotal,
       'isedit':1

    });
    console.log($scope.formData)
  }
 
  
  // $scope.saveContract = function() {
  //   // cfpLoadingBar.start();

 
  //  if($scope.formData.details.length<1) {
     
  //   notify.custom('error','Minimum One Details Required!','Details');
  //   }else {
      
  //          $scope.formData.ptotaljobs=$scope.findContractTotalJobs($scope.formData.details);
 

  //      Project.save($scope.formData).then(function success(response) {
         
  //     console.log("ok");
  //     console.log(responce);
  //     console.log((Data.get(response))); return;
  //       // $("#contract").modal("hide");
  //       if(Data.get(response).success){
     
  //     // cfpLoadingBar.complete();

  //       $scope.clearForm();
 
      
  //       notify.custom('success','Project Successfully Saved!','Project');
    
  //       Project.findlist($scope.filterData).then(function success(getData) {
  //         $scope.projects=Data.get(getData);
          
  //       }, function error(getData) {
     
  //       });
  //       }
  //       else
  //       {

  //          if(Data.get(response).message=="UQ_ProjectReference") {
  //               notify.custom('error','ProjectReference  Already  Exists!','Projects');
  //           }
  //           else{
  //             notify.custom('error','Something went wrong!','projects');
  //           }
                            
  //       }
  //     }, function error(response) {

  //     });
      
  //   }
  // };
  $scope.saveContract = function() {
    
    console.log($scope.formData); 
    
    cfpLoadingBar.start();
    if($scope.formData.details.length<1) {
      cfpLoadingBar.complete();
      notify.custom('error','Minimum One Details Required!','Details');
    }else {
      $scope.formData.ptotaljobs=$scope.findContractTotalJobs($scope.formData.details);
      
  console.log($scope.formData)
      Project.save($scope.formData).then(function success(response) {
        console.log("save")
        console.log(response)
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#contract").modal("hide");
        notify.custom('success','Project Successfully Saved!','Project');
        Project.findlist($scope.filterData).then(function success(getData) {
          $scope.projects=Data.get(getData);
          $scope.doPagination($scope.projects);
        }, function error(getData) {

        });
      }, function error(response) {
      console.log("error")
      console.log(response)
      });
    }
  };
  $scope.editRow = function(id) {
    cfpLoadingBar.start();
    var detail, i=0, row;
    Project.show(id).then(function success(response) {
      switch (Data.get(response).pstatusid) {
        case '14':
              $scope.resume=true;
          break;
        default:
            $scope.suspended=true;

      }
      // $scope.formData=Data.get(response);
      row=Data.get(response);
      // i++;
      if(i==2) {
        row.details=detail;
        $scope.formData=row;
        $("#contract").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
    }, function error(response) {

    });

    Project.details(id).then(function success(response) {
      // $scope.formData.details=Data.get(response);

        detail=Data.get(response);
        if(i==1) {
          row.details=detail;
          $scope.formData=row;
          $("#contract").modal("show");
          cfpLoadingBar.complete();
        }else {
          i=2;
        }
    }, function error(response) {

    });

  };


  $scope.CgrandTotal=function() {
    var total = 0;
    for(var i = 0; i < $scope.formData.details.length; i++){
        var details = $scope.formData.details[i];
        total += parseFloat(details.pdtotal);
    }
    $scope.formData.pgrandtotal=total;
    return total;
    
  };

  $scope.LgrandTotal=function() {
    var total = 0;
    for(var i = 0; i < $scope.lpoData.details.length; i++){
        var details = $scope.lpoData.details[i];
        total += parseFloat(details.pdtotal);
    }
    $scope.formData.pgrandtotal=total;
    return total;
  };

  $scope.IgrandTotal=function() {
    var total = 0;
    for(var i = 0; i < $scope.instantData.details.length; i++){
        var details = $scope.instantData.details[i];
        total += parseFloat(details.pdtotal);
        
    $scope.formData.pgrandtotal=total;
    }
    return total;
  };

  $scope.cremoveDetail=function(id) {
    $scope.formData.details.splice(id,1);
    notify.custom('error','Details Successfully Removed!','Project!');
    $("#focus").focus();
  };
  // OneTime Details
  $scope.opushDetail=function() {
    if($scope.detailsData.srid=='' || $scope.detailsData.srid==null ) {
      notify.custom('error','Service Required!','Details');
      $scope.srreq=true;
    }else{
      $scope.lpoData.details.push({
        'pdprojectdetailid':'0',
        'pdserviceid':$scope.detailsData.srid,
        'pdprojectid':$scope.formData.pprojectid,
        'pdjobsiteid':$scope.formData.pjobsiteid,
        'pdservicedescription':$scope.detailsData.desc,
        'pdunit':$scope.detailsData.unit,
        'pdrate':$scope.detailsData.rate,
        'pdfrequencyperiodid':$scope.detailsData.frequency,
        'pdtotaljobs':'1',
        'pdtotal':$scope.detailsData.total

      });
      $scope.srreq=false;
      $scope.detailsData={};
      notify.custom('success','Details Successfully Added!','Project!');
      $("#focus").focus();
    }


  };

  $scope.oremoveDetail=function(id) {
    $scope.lpoData.details.splice(id,1);
    notify.custom('error','Details Successfully Removed!','Project!');
    $("#focus").focus();
  };
// Instant Details
  $scope.ipushDetail=function() {
    if($scope.detailsData.srid=='' || $scope.detailsData.srid==null ) {
      notify.custom('error','Service Required!','Details');
      $scope.srreq=true;
    }else{
      $scope.instantData.details.push({
        'pdprojectdetailid':'0',
        'pdserviceid':$scope.detailsData.srid,
        'pdprojectid':$scope.formData.pprojectid,
        'pdjobsiteid':$scope.formData.pjobsiteid,
        'pdservicedescription':$scope.detailsData.desc,
        'pdunit':$scope.detailsData.unit,
        'pdrate':$scope.detailsData.rate,
        'pdfrequencyperiodid':$scope.detailsData.frequency,
        'pdtotaljobs':'1',
        'pdtotal':$scope.detailsData.total

      });

      $scope.srreq=false;
      $scope.detailsData={};

      notify.custom('success','Details Successfully Added!','Project!');
      $("#focus").focus();
    }
  };

  $scope.iremoveDetail=function(id) {
    $scope.instantData.details.splice(id,1);
    notify.custom('error','Details Successfully Removed!','Project!');
    $("#focus").focus();
  };

  $scope.saveLPO=function() {
    console.log($scope.formData); 
    cfpLoadingBar.start();

    $scope.lpoData.ptotaljobs=$scope.lpoData.details.length;
    if($scope.lpoData.details.length<1) {
      cfpLoadingBar.complete();
      notify.custom('error','Minimum One Details Required!','Details');
    }else {
      Project.save($scope.lpoData).then(function success(response) {
        if(Data.get(response).success){
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#lpoForm").modal("hide");
        notify.custom('success','Project Successfully Saved!','Project');
        Project.findlist($scope.filterData).then(function success(getData) {
          $scope.projects=Data.get(getData);
          $scope.doPagination($scope.projects);
        }, function error(getData) {

        });
        }
        else
        {

          if(Data.get(response).message=="UQ_LPOReference_notnull") {
                                    notify.custom('error','LPO Reference  Already Exists!','Project');
                                }
                                else if( Data.get(response).message=="UQ_ProjectReference") { 
                                    notify.custom('error','Project Reference  Already exists!','Project');
                                }
                                else{
                                    notify.custom('error','Something Wrong!','Project');
                                }


        }
      }, function error(response) {

      });
    }
  };

  $scope.editLPO = function(id) {
    cfpLoadingBar.start();
    var detail, i=0, row;

    Project.show(id).then(function success(response) {
      row=Data.get(response);
      // i++;
      if(i==2) {
        row.details=detail;
        $scope.lpoData=row;
        $("#lpoForm").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
    }, function error(response) {

    });

    Project.details(id).then(function success(response) {

      detail=Data.get(response);
      if(i==1) {
        row.details=detail;
        $scope.lpoData=row;
        $("#lpoForm").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=2;
      }
    }, function error(response) {

    });

  };

  $scope.saveInstant=function() {
    cfpLoadingBar.start(); 
    $scope.instantData.ptotaljobs=$scope.instantData.details.length;
    if($scope.instantData.details.length<1) {
      cfpLoadingBar.complete();
      notify.custom('error','Minimum One Details Required!','Details');
    }else {
      Project.save($scope.instantData).then(function success(response) {
        if(Data.get(response).success){
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#instantForm").modal("hide");
        notify.custom('success','Project Successfully Saved!','Project');
        Project.findlist($scope.filterData).then(function success(getData) {
          $scope.projects=Data.get(getData);
          $scope.doPagination($scope.projects);
        }, function error(getData) {

        });
        }
        else{
                  cfpLoadingBar.complete();
      if(Data.get(response).message=="UQ_ProjectReference") {

            notify.custom('error','Project Reference  Already Exists!','Project');
        }
        else{
					notify.custom('error','Something went wrong!','Project');
				}
        }

      }, function error(response) {
        cfpLoadingBar.complete();
      });
    }
  };

  $scope.editInstant = function(id) {
    cfpLoadingBar.start();
    var detail, i=0, row;
    Project.show(id).then(function success(response) {
      row=Data.get(response);
      // i++;
      if(i==2) {
        row.details=detail;
        $scope.instantData=row;
        $("#instantForm").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
    }, function error(response) {

    });

    Project.details(id).then(function success(response) {

      detail=Data.get(response);
      if(i==1) {
        row.details=detail;
        $scope.instantData=row;
        $("#instantForm").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=2;
      }
    }, function error(response) {

    });

  };

  $scope.deleteContract = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Project?",
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
					Project.destroy(id).then(function success(response) {
            $("#contract").modal("hide");
            $("#instantForm").modal("hide");
            $("#lpoForm").modal("hide");

						swal("Deleted!", "Project Successfully Deleted", "success");
						Project.findlist($scope.filterData).then(function success(getData) {
							$scope.projects = Data.get(getData);
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

  $scope.exportData=function(id) {
    // console.log(id);
    var data={};
    console.log(id)
    Project.exportProject(id).then(function success(res) {
      data=Data.get(res);
      console.log(data);
    }, function error(err) {

    });

    Project.exportProjectDetails(id).then(function success(res) {
      data.details=Data.get(res);
    }, function error(err) {

    });

    Project.company().then(function success(response) {
      data.company=Data.get(response);
      $scope.makePdf(data);
      
    }, function error(response) {

    });
    
  },
  
  $scope.makePdf=function(data) {
    // console.log(data);return;
    console.log(data);
    var dataTable=[]
    dataTable.push(
      [ 
            // {text:'Service', style:'headers',border:[true, true, true, true]},
            {text:'Service', style:'headers'},
            {text:'Unit', style:'headers'},
            {text:'Rate', style:'headers'},
            {text:'Frequency', style:'headers'},
            {text:'Total', style:'headers'}
          ]
    )
    angular.forEach(data.details, function(i) {
      var s=(i.pdfrequency>1 ? 's':'');
      dataTable.push(
        [
          {
            text:i.service+'\n'
            +i.pdservicedescription
            , 
            style:'tbodyRows',
            border:[true,true,true,true]},
          // {text:i.pdservicedescription, style:'tbodyRows'},
          {text:i.pdunit.toString(), style:'tbodyRows'},
          {text:i.pdrate.toString(), style:'tbodyRows'},
          {text:i.pdfrequency.toString()+'/'+(i.pdfrequencyperiodid>1 ? 'Month'+s:'Year'+s), style:'tbodyRows'},
          {text:i.pdtotal.toString(), style:'tbodyRows'}
        ]
      );
    });

    dataTable.push([
      {text:'Grand Total', alignment:'right', color:'#black', margin:[0,3,0,0], colSpan:4},
      {},
      {},
      {},
      {text:data.pgrandtotal, alignment:'center', margin:[0,3,0,0]}
      
      
    ]);

    var container=
    {
      
        content: [
          {
            columns:[
              {
                width:'*',
                text:''
              },
              {
                width:'*',
                text:'Contract',
                alignment:'center',
                bold:true,
                fontSize:20
              },
              {
                width:'*',
                text:''
              }
            ],
            margin:[0,(data.toppadding == null ? 100 : parseInt(data.toppadding)),0,0]
            
          },
          {
            columns: [
              {
                text: 'From',
                bold:true,
                fontSize:16
              },
              
              {
                text: 'To', 
                alignment:'right',
                bold:true,
                fontSize:16
              }
            ]
          },
          {
            columns: [
              {
                text: $filter('capitalize')(data.company.tcompanyname)+'\n'
                // text:'Sheikh Mohammed bin Rashid Al Maktoum'+'\n'
                +$filter('capitalize')(data.company.taddress)+'\n'
                +data.company.tphone+'\n'
                +data.company.temail+'\n',
                fontSize:14
              },
             
              {
                text: $filter('capitalize')(data.customer)+'\n'
                // text: $filter('capitalize')(data.customer)+'\n'
                +$filter('capitalize')(data.address)+'\n'
                +data.phone+'\n'
                +data.email, 
                alignment:'right',
                fontSize:14
              }
            ],
            margin:[0,0,0,10]
          },
          {
            columns: [
              {
                text: (data.pdescriptiontop == null ? '' : data.pdescriptiontop.replace(/<\/?[^>]+(>|$)/g, "")),
                fontSize:12
              },
            ],
            margin:[0,20,0,20]
          },
          {
            
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              widths: [ '*','*','*','*','*'],
              body:dataTable
              // body: [
              //   [ 
              //     {text:'Service', style:'headers'},
              //     {text:'Description', style:'headers'},
              //     {text:'Unit', style:'headers'},
              //     {text:'Rate', style:'headers'},
              //     {text:'Period', style:'headers'},
              //     {text:'Total', style:'headers'}
              //   ],
              //   // [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4','hoop' ]
              // ]
            },
            layout:'lightHorizontalLines',
            margin:[0,0,0,5]
            
            
          },
          {
            text:'Total Charged : '+data.pgrandtotal+' (AED) ('+$filter('toWords')(data.pgrandtotal)+')', 
            margin:10
          },
          {
            columns: [
              {
                text: (data.pdescriptionbottom == null ? '' : data.pdescriptionbottom.replace(/<\/?[^>]+(>|$)/g, "")),
                fontSize:12
              },
            ],
            margin:[0,0,0,20]
          },
          {
            columns:[
              {
                width:'*',
                text:'Name :'
              },
              {
                width:'*',
                text:''
              },
              {
                width:'*',
                text:'Name :'
              }
            ]
          },
          {
            columns:[
              {
                width:'*',
                text:'Signature :'
              },
              {
                width:'*',
                text:''
              },
              {
                width:'*',
                text:'Signature :'
              }
            ],
            margin:[0,0,0,(data.bottompadding == null ? 100 : parseInt(data.bottompadding))]
          }
      ],
      styles: {
        headers:{
          alignment:'center',
          // fillColor: '#2e8b57',
          margin:[0,0,0,2],
          bold:true
          
          
        },
        tbodyRows:{
          alignment:'center',
          margin:[0,3,0,3],
          italic:true
          
        }
      }
    };
    genPDF.print(container);
  }
  
}]);
