
app.controller('expsheetCtrl',['$scope','$http','$log','expSheet','Data','notify','cfpLoadingBar','AccessFactory','$state','$filter', function($scope, $http, $log, expSheet, Data, notify,cfpLoadingBar,AccessFactory,$state,$filter) {
    $scope.formData={
        'pjejobexpenseid':0,
        'details':[],
        'jobs':[],
        'escreferencetype':'Automatic',
        'escexpensesheetconfigurationid':1
    };
    $scope.detailData={};
    $scope.searchData={};
    $scope.selectedJobs=[];
    $scope.editable=false;

    $scope.filterData={
        'pjeisactive':true
    };
  
    $scope.getLocation = function(val) {
        return $http.get('sim/pm/expense/ddmenu', {
        }).then(function(response){
            return response.data.map(function(item){
                return item.pjetitle;
            });
        });
    };

    expSheet.getTitle().then(function success(response) {
        $scope.ddtitles=Data.get(response);
    }, function error(response) {

    });

    cfpLoadingBar.start();
    expSheet.filterData($scope.filterData).then(function success(response) {
        cfpLoadingBar.complete();
        $scope.expsheets=Data.get(response);
        $scope.doPagination($scope.expsheets);
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

    $scope.modelOptions = {
        debounce: {
            default: 100,
            blur: 250
        },
        getterSetter: true
    };

    expSheet.customer().then(function success(response) {
        $scope.customers=Data.get(response);
    }, function error(response) {

    });

    expSheet.users().then(function success(response) {
        $scope.users=Data.get(response);
    }, function error(response) {

    });

    expSheet.service().then(function success(response) {
        $scope.services=Data.get(response);
    }, function error(response) {

    });

    $scope.findJobs= function() {
        $scope.listJobs=[];
        expSheet.findList($scope.searchData).then(function success(response) {
            angular.forEach(Data.get(response), function(rows) {
                var flag=0;
                angular.forEach($scope.formData.jobs, function(job) {
                    if (rows.jjobid==job.jepjobid) {
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
        cfpLoadingBar.start();          
        expSheet.filterData($scope.filterData).then(function success(response) {
            cfpLoadingBar.complete();                  
            $scope.expsheets=Data.get(response);
        }, function error(response) {
            cfpLoadingBar.complete();                  
        });
    };

    $scope.makeSelected= function(row, id) {
        $scope.selectedJobs.push(row);
        $scope.formData.jobs.push({'jepjobid':row.jjobid,'jepjobexpenseid':$scope.formData.pjejobexpenseid});
        $scope.listJobs.splice(id,1);
    };

    $scope.addDetail = function() {
        $scope.formData.details.push({
            'esdjobexpenseid':$scope.formData.jepjobid,
            'esddescription':$scope.detailData.desc,
            'esdamount':$scope.detailData.amount,
            'esdscanfilepath':$scope.detailData.fmpath
        });
        $scope.detailData={};
    };

    $scope.removeDetail=function(id) {
        $scope.formData.details.splice(id,1);
    };

    $scope.removeFromSelected=function(id) {
        $scope.formData.jobs.splice(id,1);
        $scope.selectedJobs.splice(id,1);
    };



    $scope.saveExpense=function() {
        var total=0;
        for (i=0; i<$scope.formData.details.length; i++) {
          total += Number($scope.formData.details[i].esdamount);
          $scope.formData.pjeamount=total;
        }
        if ($scope.formData.details.length<1 || $scope.formData.jobs.length<1) {
            notify.custom('error','Detail or Jobs are not Selected!','Details');
        }else {
            cfpLoadingBar.start();          
            expSheet.save($scope.formData).then(function success(response) {
                if(Data.get(response).success){
                    cfpLoadingBar.complete();                  
                    $scope.reset();
                    notify.custom('success','ExpenseSheet Successfully Saved!');
                    $("#expenseSheet").modal("hide");
                    expSheet.get().then(function success(response) {
                        $scope.expsheets=Data.get(response);
                        $scope.doPagination($scope.expsheets);
                    }, function error(response) {
                    });
                }
                else{
                    cfpLoadingBar.complete();                  
                    if(Data.get(response).message=="UQ_ExpenseSheetReference") {
                        notify.custom('error','ExpenseSheet Referencee Already Exists!','ExpenseSheet');
                    }
                    else{
                        notify.custom('error','Something went wrong!','ExpenseSheet');
                    }
                }
            }, function error(response) {
                cfpLoadingBar.complete();                  
                notify.custom('error','Something went wrong!','ExpenseSheet');
            });
        }
    };

    $scope.clearForm=function() {
        $scope.selectedJobs=[];
        $scope.formData={
            'pjejobexpenseid':0,
            'details':[],
            'jobs':[],
        };

        expSheet.dfConfig().then(function success(response) {
            $scope.formData.escexpensesheetconfigurationid=Data.get(response).escexpensesheetconfigurationid;
            $scope.formData.escreferencetype=Data.get(response).escreferencetype;
        }, function error(response) {

        });
    };

    $scope.reset=function() {
        $scope.selectedJobs=[];
        $scope.formData={
            'pjejobexpenseid':0,
            'details':[],
            'jobs':[],
        };
    };

    $scope.editRow =function(id) {
        $scope.reset();
        cfpLoadingBar.start();
        expSheet.show(id).then(function success(response) {
            cfpLoadingBar.complete();
            $("#myModal").modal("show");
            $scope.formData=Data.get(response);
            expSheet.details(id).then(function success(getData) {
              $scope.formData.details=Data.get(getData);
            }, function error(response) {

            });
        }, function error(response) {
            cfpLoadingBar.complete();
        });

        expSheet.getChild('job', id, 'expenseid').then(function success(response) {
            $scope.formData.jobs=[];
            angular.forEach(Data.get(response), function(data) {
                $scope.formData.jobs.push({'jepjobid':data.jepjobid,'jepjobexpenseid':data.jepjobexpenseid});
            });
            $scope.selectedJobs=Data.get(response);
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
                expSheet.destroy(id).then(function success(response) {
                    swal("Deleted!", "ExpenseSheet Successfully Deleted", "success");
                    expSheet.get().then(function success(getData) {
                      $scope.expsheets=Data.get(getData);
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
