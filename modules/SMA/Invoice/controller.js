
app.controller('invoiceCtrl',['$scope','$http','$log','Invoice','Data','notify','cfpLoadingBar','AccessFactory','$state', '$filter', 'genPDF', function($scope, $http, $log, Invoice, Data, notify, cfpLoadingBar, AccessFactory, $state, $filter, genPDF) {
  $scope.defaultData={'services':[]};
  $scope.primeKey=0;
  $scope.formData={
    'invinvoiceid':'0',
    'invtax':0,
    // 'icreferencetype':'Manual',
    'jobs':[],
    'invprojectid':0,
    'invtotalamount':200
  };
 
  $scope.searchData={};
  $scope.listProjects=[];
  $scope.visible=false;
  $scope.filterData={
    'invstatusid':42
  };
	//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('191').then(function success(response) {
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
//console.log(  $scope.sumdata);
// $scope.getTotal=function()
// {
//   //console.log(  $scope.sumdata);
//  'hai'
//   // var total = 0;
//   // for(var i = 0; i < $scope.sumdata.length; i++){
//   //   //console.log($scope.sumdata.length);
//   //     var product =  $scope.sumdata[i];
  
//   //     total += product ;
     
//   // }
//   // return total;
// }


  Invoice.customer().then(function success(response) {
    $scope.customers=Data.get(response);
  }, function error(response) {

  });

  Invoice.templates().then(function success(response) {
    $scope.templates=Data.get(response);
  }, function error(response) {

  });

  Invoice.branch().then(function success(response) {
    $scope.branches=Data.get(response);
  }, function error(response) {

  });

  Invoice.users().then(function success(response) {
    $scope.users=Data.get(response);
  }, function error(response) {

  });

  Invoice.status().then(function success(response) {
    $scope.status=Data.get(response);
  }, function error(response) {

  });

  Invoice.jobtype().then(function success(response) {
    $scope.jobtype=Data.get(response);
  }, function error(response) {

  });

  Invoice.attentions().then(function success(response) {
    $scope.attentions=Data.get(response);
  }, function error(response) {

  });

  Invoice.jobsites().then(function success(response) {
    $scope.jobsites=Data.get(response);
  }, function error(response) {

  });

  Invoice.employees().then(function success(response) {
    $scope.employees=Data.get(response);
    // console.log($scope.employees);
  }, function error(response) {

  });
  cfpLoadingBar.start();
  Invoice.filterData($scope.filterData).then(function success(response) {
    cfpLoadingBar.complete();
    $scope.invoices=Data.get(response);
    $scope.doPagination($scope.invoices);
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
  $scope.findProjects = function() {
    Invoice.findProjects($scope.searchData).then(function success(response) {

      $scope.listProjects=Data.get(response);
      // console.log($scope.listProjects);
    }, function error(response) {

    });
  };

  $scope.getTotal = function(){
    // console.log($scope.editstatus)

    // console.log($scope.defaultData.services);
      var total = 0;
      for(var i = 0; i < $scope.defaultData.services.length; i++){
          var services = $scope.defaultData.services[i];
          total += Number(services.pdtotal);
      }
      // console.log('Grand Total');
      // console.log(total);

      $scope.formData.invtotalamount=total;
      if($scope.editstatus==false)
      {
        $scope.formData.invgrandtotal=total;
      }
      //console.log($scope.discount)
      // $scope.formData.invgrandtotal=total;
  }

  
  $scope.getTotal();

$scope.discountvalue=function(data)
{
  
  // console.log($scope.formData.invgrandtotal);
  // console.log(data);
 
      $scope.formData.invdiscount=data;
      
      $scope.dicoutdata=Number(($scope.formData.invtotalamount)-($scope.formData.invdiscount));
      
      
      $scope.formData.invgrandtotal=$scope.dicoutdata;
    
    


}
// console.log( $scope.formData.invdiscount)

  $scope.clearForm=function() {
    $scope.editstatus=false;
    
    $scope.defaultData={'services':[]};
   
    $scope.formData={
      'invinvoiceid':0,
      'invtax':0,
      // 'icreferencetype':'Manual',
      'jobs':[],
      'invprojectid':0,
     
    };
    // $scope.formData={ };
    $scope.searchData={};
    $scope.listProjects=[];
   
    $scope.filterData={
      'invstatusid':42
    };
    Invoice.dfConfig().then(function success(response) {
      // console.log('Rsponse');
      // console.log(Data.get(response));
      // console.log('FData');
      // console.log($scope.formData);
      
      // return;
      $scope.formData.icinvoiceconfigurationid=Data.get(response).icinvoiceconfigurationid;
      $scope.formData.icreferencetype=Data.get(response).icreferencetype;
    },function  error(response) {

    });
    // $scope.defaultData={}
    // console.log($scope.formData)
  };



  $scope.printPdf=function() {

    
  };

  $scope.selectProject=function(row, id) {
    // console.log(row);
    $scope.defaultData=row;
    $scope.formData.invprojectid=row.pprojectid;
    // console.log($scope.formData);

    Invoice.findJobs('jobs', row.pprojectid).then(function success(response) {
      // console.log(Data.get(response));return;
      $scope.defaultData.services=Data.get(response);
      // $scope.formData={
      //   'invinvoiceid':'0',
      //   'invtax':0,
      //   // 'icreferencetype':'Manual',
      //   'jobs':[],
      //   'invprojectid':0,
      //   'invtotalamount':200
      // };
     
      angular.forEach(Data.get(response), function(data) {
        $scope.formData.jobs.push({'jjobid':data.jjobid, 'juid':data.juid});
        // console.log(data);
      });
      // console.log($scope.formData);
    }, function error(response) {

    });
  };
  // $scope.set
  // primeKey=1;
  $scope.searchList=function() {
    Invoice.filterData($scope.filterData).then(function success(response) {
      $scope.invoices=Data.get(response);
    }, function error(response) {

    });
  };
  
  $scope.saveInvoice =function () {
    if(isNaN($scope.formData.invgrandtotal)){

      $scope.formData.invgrandtotal=$scope.formData.invtotalamount;
    }

    if($scope.formData.invdiscount=='null'){

      $scope.formData.invdiscount=0;
    }

   Invoice.save($scope.formData).then(function success(response) {

      if(Data.get(response).success ){
      notify.custom("success","Invoice Successfully Saved!", "Invoice!");
      $("#Invoice").modal("hide");
      Invoice.filterData($scope.filterData).then(function success(getData) {
        $scope.invoices=Data.get(getData);
        $scope.doPagination($scope.invoices);
      }, function error(response) {

      });
      }else{
       if(Data.get(response).message=="UQ_InvoiceReference") {
        notify.custom('error','Invoice Reference Code Already Exists!','Invoice');
      }
      else{
        notify.custom('error','Something went wrong!','Invoice');
      }
      }
            $("#Invoice").modal("hide");
    }, function error(response) {

    });
  
  };

  $scope.editRow = function(id) {
    $scope.editstatus=true;
    cfpLoadingBar.start();
    Invoice.show(id).then(function success(response) {
      cfpLoadingBar.complete();
			$("#myModal").modal("show");
      $scope.formData=Data.get(response);
      $scope.formData={
        'invcreatedon':$scope.formData.invcreatedon,
        'invdate':$scope.formData.invdate,
        'invdeletedon':$scope.formData.invdeletedon,
        'invdiscount':$scope.formData.invdiscount,
        'invgrandtotal':$scope.formData.invgrandtotal,
        'invinvoiceconfigurationid':$scope.formData.invinvoiceconfigurationid,
        'invinvoiceid':$scope.formData.invinvoiceid,
        'invinvoicereference':$scope.formData.invinvoicereference,
        'invinvoicetemplateid':$scope.formData.invinvoicetemplateid,
        'invmodifiedon':$scope.formData.invmodifiedon,
        'invprojectid':$scope.formData.invprojectid,
        'invreceivedby':$scope.formData.invreceivedby,
        'invreferencetype':$scope.formData.invreferencetype,
        'invremarks':$scope.formData.invremarks,
        'invstatusid':$scope.formData.invstatusid,
        'invsubmittedbyemployeeid':$scope.formData.invsubmittedbyemployeeid,
        'invtax':$scope.formData.invtax,
        'invtotalamount':$scope.formData.invtotalamount,
        'invuid':$scope.formData.invuid,
       }
      // console.log($scope.formData);
    $scope.defaultData.pcustomerid=Data.get(response).customer;
      $scope.defaultData.pprojectreference=Data.get(response).projectreference;
      // $scope.formData.defaultData=Data.get(response);
    }, function error(response) {
      
      cfpLoadingBar.complete();
		
    });
   
    Invoice.findJobs('detail', id).then(function success(response) {
      // console.log('edit jobs');
        $scope.defaultData.services=Data.get(response);
       
        $scope.getTotal();
     
    }, function error(response) {

    });

  };

  $scope.deleteRow = function(id) {
    swal({
      title: "Are you sure?",
      text: "Do You Want To Delete This Invoice?",
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
        Invoice.destroy(id).then(function success(response) {
          swal("Deleted!", "ExpenseSheet Successfully Deleted", "success");
          Invoice.filterData($scope.filterData).then(function success(getData) {
            $scope.invoices=Data.get(getData);
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
    Invoice.exportInvoice(id).then(function success(res) {
      data=Data.get(res);
  
  }, function error(res) {

  });

  Invoice.exportInvoiceDetails(id).then(function success(res) {
    data.details=Data.get(res);
  }, function error(res) {

  });

  Invoice.company().then(function success(response) {
    data.company=Data.get(response);
    $scope.makePdf(data);
    
  }, function error(res) {

  });
 
}
$scope.makePdf=function(data) {
  // console.log(data);return
  console.log(data);

  var dataTable=[]
  dataTable.push(
    [ 
          {text:'Service', style:'headers',border:[true, true, true, true]},
          {text:'Description', style:'headers'},
          {text:'Unit', style:'headers'},
          {text:'Rate', style:'headers'},
          // {text:'Frequency - Period', style:'headers'},
          {text:'Total', style:'headers'}
        ]
  ) 

  angular.forEach(data.details, function(i) {
    var s=(i.qdfrequency>1 ? 's':'');
    dataTable.push(
      [
        {text:i.pdserviceid, style:'tbodyRows',border:[true,true,true,true]},
        {text:i.pdservicedescription, style:'tbodyRows'},
        {text:i.pdunit.toString(), style:'tbodyRows'},
        {text:i.pdrate.toString(), style:'tbodyRows'},
        // {text:i.pdfrequency.toString()+'/'+(i.pdfrequency>1 ? 'Month'+s:'Year'+s), style:'tbodyRows'},
        {text:i.pdtotal.toString(), style:'tbodyRows'}
      ]
    );

  });
 

  dataTable.push([
    {text:'Grand Total', alignment:'right', color:'#black', margin:[0,3,0,0], colSpan:4},
    {},
    {},
    {},
    {text:data.invgrandtotal, alignment:'center', margin:[0,3,0,0]}
    
    
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
              text:'Invoice',
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
        // {
        //   columns: [
        //     {
        //       text: data.pdescriptiontop.replace(/<\/?[^>]+(>|$)/g, ""),
        //       fontSize:12
        //     },
        //   ],
        //   margin:[0,20,0,20]
        // },
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
          text:'Total Charged : '+data.invgrandtotal+' (AED) ('+$filter('toWords')(data.invgrandtotal)+')', margin:10
        },
        // {
        //   columns: [
        //     {
        //       text: String(data.pdescriptionbottom.replace(/<\/?[^>]+(>|$)/g, "")),
        //       fontSize:12
        //     },
        //   ],
        //   margin:[0,0,0,20]
        // },
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
