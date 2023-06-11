app.controller('quotationCtrl',['$scope','$http','$filter','Data','Quotation','notify','cfpLoadingBar','AccessFactory','$state','genPDF', function($scope,$http,$filter,Data,Quotation,notify,cfpLoadingBar,AccessFactory,$state,genPDF) {
  //$scope.editable=false;
  $scope.filterData={
    // 'qbranchid':0,
    // 'qcustomerid':0,
    // 'qquotedbyemployeeid':0
    'qstatusid':2
  };
  // $scope.disabled=true;
  $scope.detailsData={
    'rate':0,
    'unit':0,
    'frequency':0
  };
  $scope.formData={
    'qquotationid':0,
    'details':[]
  };
	//permission

 
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('163').then(function success(response) {
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


console.log($scope.formData);
  Quotation.templates().then(function success(response) {
    $scope.templates=Data.get(response);
  }, function error(response) {

  });




  Quotation.customer().then(function success(response) {
    $scope.customers=Data.get(response);
  },function error(response) {

  });

  Quotation.users().then(function success(response) {
    $scope.users=Data.get(response);
  },function error(response) {

  });

  Quotation.status().then(function success(response) {
    $scope.status=Data.get(response);
  },function error(response) {

  });

  Quotation.attentions().then(function success(response) {
    $scope.attentions=Data.get(response);
  }, function error(response) {

  });

  Quotation.jobsites().then(function success(response) {
    $scope.jobsites=Data.get(response);
  }, function error(response) {

  });

  Quotation.employees().then(function success(response) {
    $scope.employees=Data.get(response);
  }, function error(response) {

  });
  $scope.test=function(id) {
    // console.log(id);
  };

  $scope.doSum=function(unit, rate, freq) {
    var total;
    if($scope.formData.qjobtypeid>1) {

      total=parseFloat(unit)*parseFloat(rate)*parseFloat(freq);
    }else {
      total=parseFloat(unit)*parseFloat(rate);
    }
    return $scope.detailsData.total=total;
  };

  $scope.doSumOnline=function(unit, rate, freq) {
    $scope.formData.details.qdtotal=parseFloat(unit)*parseFloat(rate)*parseFloat(freq);
  };

  Quotation.branches().then(function success(response) {
    $scope.branches=Data.get(response);
  }, function error(response) {

  });

  Quotation.service().then(function success(response) {
    $scope.services=Data.get(response);
  }, function error(response) {

  });

  // Quotation.get().then(function success(response) {
  //
  // },function error(response) {
  //
  // });
  cfpLoadingBar.start();
  Quotation.findList($scope.filterData).then(function success(response) {
    
      $scope.quotations=Data.get(response);
      $scope.doPagination($scope.quotations);
      cfpLoadingBar.complete();
      // console.log('finded list');
    // console.log(Data.get(response));
  },function error(response) {
    cfpLoadingBar.complete();

  });

  $scope.doPagination=function(param) {
		$scope.totalItems = param.length;
		$scope.currentPage = 1;
		$scope.itemsPerPage=10;
		$scope.maxSize = 5;
		// $scope.bigTotalItems = 175;
		// $scope.bigCurrentPage = 1;
	}
	// console.log($scope.branches);
	
  
	$scope.setPage = function (pageNo) {
	  $scope.currentPage = pageNo;
	};

	$scope.setItemsPerPage = function(num) {
		$scope.itemsPerPage = num;
		$scope.currentPage = 1; //reset to first page
	}



  $scope.clearForm=function() {
    $scope.formData={'qquotationid':0, 'details':[]};
    Quotation.dfReference().then(function success(response) {
      $scope.formData.qcreferencetype=Data.get(response).qcreferencetype;
      $scope.formData.qcquotationconfigurationid=Data.get(response).qcquotationconfigurationid;
      $scope.formData.qvaliduntil=Data.fmDate(Data.get(response).qcquotationvaliditydays);
      $scope.formData.qquoteddate=Data.fmDate(str=null);
    }, function error(response) {

    });

    Quotation.dfTemplate().then(function success(response) {
      $scope.formData.qquotationtemplateid=Data.get(response).qtquotationtemplateid;
      Quotation.getBody($scope.formData.qquotationtemplateid).then(function success(response) {
        angular.forEach(Data.get(response), function(data) {
          $scope.formData.qdescriptiontop=data.qtdescriptiontop;
          $scope.formData.qdescriptionbottom=data.qtdescriptionbottom;
        });
      }, function error(response) {

      });
    }, function error(response) {

    });

    console.log($scope.formData);
  };

  $scope.applyTemplate=function(templateId) {
    Quotation.getBody(templateId).then(function success(response) {
      angular.forEach(Data.get(response), function(data) {
        $scope.formData.qdescriptiontop=data.qtdescriptiontop;
        $scope.formData.qdescriptionbottom=data.qtdescriptionbottom;
        notify.custom('success','New Template Applied!','Quotation');
      });
    }, function error(response) {

    });
  };

  $scope.searchList=function() {

      Quotation.findList($scope.filterData).then(function success(response) {
        $scope.quotations=Data.get(response);
      }, function error(response) {

      });
  };

  $scope.saveQuotation = function() {


    console.log($scope.formData.details);

    var total=0;
    for (i=0; i<$scope.formData.details.length; i++) {
       total += Number($scope.formData.details[i].qdtotal);

    }
$scope.formData.qgrandtotal=total;
  

    cfpLoadingBar.start();
    if($scope.formData.details.length<1) {
      notify.custom('error','Minimum One Details Required!','Details');
    }else {
      console.log($scope.formData); 
      Quotation.save($scope.formData).then(function success(response) { 
        console.log(Data.get(response));
        if(Data.get(response).success ){
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#myModal").modal('hide');
        notify.custom('success','Quotation Successfully Saved!','Quotation');
        Quotation.findList($scope.filterData).then(function success(getData) {
          $scope.quotations=Data.get(getData);
          $scope.doPagination($scope.quotations);
        }, function error(getData) {

        });
        }
        else{
          cfpLoadingBar.complete();
        if(Data.get(response).message=="UQ_QuotationReference") {
          notify.custom('error','Quotation Reference Code Already Exists!','Quotation');
      }
      else{
        notify.custom('error','Something went wrong!','Quotation');
      }
        }
      }, function error(response) {

      });
    }
  };

  $scope.editRow = function(id) {
 
    $scope.id=id;
    cfpLoadingBar.start();
    var detail, i=0, row;
    Quotation.show(id).then(function success(response) {
      row=Data.get(response);
      // i++;
      if(i==2) {
        row.details=detail;
        $scope.formData=row;
        $("#myModal").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
    }, function error(response) {

    });

    Quotation.details(id).then(function success(response) {
      detail=Data.get(response);
      console.log(detail);
      if(i==1) {
        row.details=detail;
        $scope.formData=row;
        $("#myModal").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=2;
      }

    }, function error(response) {

    });

    // $scope.formData.details=detail;
   
    Quotation.changecolumn(id).then(function success(response) {
      
      $scope.values=Data.get(response);
     
      if($scope.values.qhasunit=='1'){
          $scope.unitenable=true;
      }
      else{
          $scope.unitenable=false;
      }
      if($scope.values.qhasrate=='1'){
          $scope.rateenable=true;
      }
      else{
          $scope.rateenable=false;
      }
      if($scope.values.qhasfrequency=='1'){
          $scope.frequencyenable=true;
      } 
      else{
          $scope.frequencyenable=false;
      }
      if($scope.values.qhasmultiplejobsite=='1'){
          $scope.multiplejobsiteenable=true;
      }
     else{
          $scope.multiplejobsiteenable=false;
      }
       
      $scope.formData.qhascombo=$scope.values.qhascombo;
      $scope.formData.qhasrate=$scope.values.qhasrate;
      $scope.formData.qhasunit=$scope.values.qhasunit;
      $scope.formData.qhasfrequency=$scope.values.qhasfrequency;
      $scope.formData.qhasmultiplejobsite=$scope.values.qhasmultiplejobsite;
    }, function error(response) {

    });
 };

  var x =$scope.formData.qhasunit
  $scope.combenable=true;
  // $scope.rateenable=true;
  // $scope.multiplejobsiteenable=true;

  $scope.rateenable=true;
  $scope.unitenable=true;
  // $scope.frequencyenable=true;
  $scope.multiplejobsiteenable=false;
  // $scope.formData.qhasrate='1';
  // $scope.selected=function()
  // {
  //   $scope.formData.qhasrate='1';
  //   $scope.formData.qhasunit='1';
    
  // }


  $scope.changecolmn=function(data,value){
  
  if(value=='combo'){
     $scope.formData.qhascombo=data;
   }
  if(value=='rate'){
  $scope.formData.qhasrate=data;
  }
  if(value=='unit'){
  $scope.formData.qhasunit=data;
  }
  if(value=='frequency'){
  $scope.formData.qhasfrequency=data;
  }
  if(value=='multiplejobsite'){
  $scope.formData.qhasmultiplejobsite=data;
  }
 var x=data+value;
 if(x=='truecombo'){
  $scope.combenable=true;
 }
if(x=='falsecombo'){
  $scope.combenable=false;
  }  
if(x=='truerate'){
  $scope.rateenable=true;
  }
if(x=='falserate'){
  $scope.rateenable=false;
  } 
if(x=='trueunit'){
  $scope.unitenable=true;
  }
if(x=='falseunit'){
  $scope.unitenable=false;
  }  
if(x=='truefrequency'){
  $scope.frequencyenable=true;
  }
if(x=='falsefrequency'){
  $scope.frequencyenable=false;
  } 
if(x=='truemultiplejobsite'){
  $scope.multiplejobsiteenable=true;
  }
if(x=='falsemultiplejobsite'){
  $scope.multiplejobsiteenable=false;
  } 
 }

$scope.srreq=false;
$scope.pushDetail=function() {
  if($scope.detailsData.srid=='' || $scope.detailsData.srid==null ) {
      notify.custom('error','Service Required!','Details');
      $scope.srreq=true;
  }else{
     
      console.log($scope.detailsData);
      $scope.formData.details.push({
        'qdquotationdetailid':'0',
        'qdserviceid':$scope.detailsData.srid,
        'qdquotationid':$scope.formData.qquotationid,
        'qdjobsiteid':$scope.formData.qjobsiteid,
        'qdservicedescription':$scope.detailsData.desc,
        'qdunit':$scope.detailsData.unit,
        'qdrate':$scope.detailsData.rate,
        'qdfrequency':$scope.detailsData.frequency,
        'qdfrequencyperiodid':$scope.detailsData.base,
        'qdtotal':$scope.detailsData.total

      });
      
      $scope.srreq=false;
      $scope.detailsData={};
      notify.custom('success','Details Successfully Added!','Details');
      $("#focus").focus();
    }

  };

  $scope.grandTotal=function() {
    var total = 0;
    for(var i = 0; i < $scope.formData.details.length; i++){
        var details = $scope.formData.details[i];
        total += parseFloat(details.qdtotal);
    }
    return total;
  };

  $scope.removeDetail=function(id) {
    $scope.formData.details.splice(id,1);
    notify.custom('error','Details Successfully Removed!','Quotation!');
    $("#focus").focus();
  };
	$scope.deleteRow = function(id) {
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
					Quotation.destroy(id).then(function success(response) {
            $("#myModal").modal('hide');
						swal("Deleted!", "Quotation Successfully Deleted", "success");
						Quotation.findList($scope.filterData).then(function success(getData) {
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
  $scope.exportData=function(id) {
      var data={};
      Quotation.exportQuotation(id).then(function success(res) {
        data=Data.get(res);
    
    }, function error(err) {

    });

    Quotation.exportQuotationDetails(id).then(function success(res) {
      data.details=Data.get(res);
    }, function error(err) {

    });

    Quotation.company().then(function success(response) {
      data.company=Data.get(response);
      $scope.makePdf(data);
      
    }, function error(response) {

    });
   
  }
    
  $scope.makePdf=function(data) {
    console.log(data);
    // console.log(data);return;
 
    var dataTable=[]
    dataTable.push(
      [ 
            {text:'Description', style:'headers',border:[true, true, true, true]},
            // {text:'Jobsite',style:'headers'},
            // {text:'Description', style:'headers'},
            {text:'Unit', style:'headers'},
            {text:'Rate', style:'headers'},
            {text:'Frequency', style:'headers'},
            {text:'Total', style:'headers'}
          ]
    ) 

    angular.forEach(data.details, function(i) {
      var s=(i.qdfrequency>1 ? 's':'');
      dataTable.push(
        [
          {
            text:i.service+',\n'
            +i.qdservicedescription
            ,
            style:'tbodyRows',border:[true,true,true,true]},
          // {text:i.qdservicedescription, style:'tbodyRows'},
          // {text:'i.jobsite', style:'tbodyRows'},
          {text:i.qdunit.toString(), style:'tbodyRows'},
          {text:i.qdrate.toString(), style:'tbodyRows'},
          {text:i.qdfrequency.toString()+'/'+(i.qdfrequency>1 ? 'Month'+s:'Year'+s), style:'tbodyRows'},
          {text:i.qdtotal.toString(), style:'tbodyRows'}
        ]
      );

    });
   

    dataTable.push([
      {text:'Grand Total', alignment:'right', color:'black',margin:[0,3,0,0], bold:true, colSpan:4},
      {},
      {},
      {},
      {text:data.qgrandtotal, alignment:'center', margin:[0,3,0,0]}
      
      
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
                text:'Quotation',
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
                text: (data.qdescriptiontop == null ? '' : data.qdescriptiontop.replace(/<\/?[^>]+(>|$)/g, "")),
                fontSize:12
              },
            ],
            margin:[0,20,0,20]
          },
          {
            
            table: {
           
              headerRows: 1,
              widths: [ '*','*','*','*','*'],
              body:dataTable
             
            },
            layout:'lightHorizontalLines',
            margin:[0,0,0,5]
            
            
          },
          {
            text:'Total Charged : '+data.qgrandtotal+' (AED) ('+$filter('toWords')(data.qgrandtotal)+')',
            margin:[0,0,0,10]
          },
          {
            columns: [
              {
                text: (data.qdescriptionbottom == null ? "" : data.qdescriptionbottom.replace(/<\/?[^>]+(>|$)/g, "")),
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
