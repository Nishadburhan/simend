app.controller('roleCtrl', ['$scope','$http','$log','Role','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Role, Data, notify,cfpLoadingBar,AccessFactory,$state) {
    $scope.formData={
        'rroleid':0,
        'modules':[],
    }
    	//permission
    // $scope.disabled=false;
    // $scope.data=false;
    // AccessFactory.Perission('65').then(function success(response) {
    // if(Data.get(response)==0){
    //     $state.go('access');
    // }
    // if(Data.get(response)==1){
    //     $scope.readresponse=Data.get(response);
    //     $scope.disabled=true;
    // }
    // if(Data.get(response)==2){
    //     $scope.writeresponse=Data.get(response);
    //     $scope.data=true;
    // }
    // if(Data.get(response)==3){
    //     $scope.fullresponse=Data.get(response);
    //     $scope.data=true;
    // }
    // }, function error(response) {

    // });
 //end permission
    cfpLoadingBar.start();
     Role.get().then(function success(response) {
        $scope.roles=Data.get(response);
        $scope.doPagination($scope.roles);
            cfpLoadingBar.complete();
        }, function error(err) {
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
     $scope.permissions=[
        {name:'access denid',permissionid:0},
        {name:'Read',permissionid:1},
        {name:'Write',permissionid:2},
        {name:'Full Controlled',permissionid:3}
    ];
    Role.GetModule().then(function success(response) {
        $scope.modules=Data.get(response);
    }, function error(err) {
     });
    $scope.clearform=function()
    {
        $scope.clear()
    }
    $scope.saveUserRole=function()
    {  
        cfpLoadingBar.start();
        Role.save($scope.formData).then(function success(response) {
            if(Data.get(response).success) {
                $scope.formData = {'rroleid':0,'modules':[]};
                    cfpLoadingBar.complete();
                    $("#myModal").modal("hide");
                    notify.custom('success','User Role Successfully Saved!','user');
                    Role.get().then(function success(getData) {
                        $scope.roles=Data.get(getData);
                        $scope.doPagination($scope.roles);
                        }, function error(error) {
                        });
            }else {
                cfpLoadingBar.complete();
                if(Data.get(response).message=="UQ_RoleName") {
                    notify.custom('error','Role  Name Already Exists!','Role');
                }
                else{
                    notify.custom('error','Something went wrong!','Role');
                }
            }

            }, function error(response) {
                cfpLoadingBar.complete();

        });
       
     }

	$scope.clear=function() {
        $('.clr').prop('selected', false);
        $scope.formData={'rroleid':0,'modules':[]};
	};
    $scope.EditRole=function(id)
    { 
        $scope.clear()
        cfpLoadingBar.start();
        Role.EditData(id).then(function success(response) {
                $scope.formData=Data.get(response);

                cfpLoadingBar.complete();
                $("#myModal").modal("show");
        }, function error(err) {
                    cfpLoadingBar.complete();
            }, function error(response) {

        });

        Role.EditModule(id).then(function success(response) {
            
            $scope.formData.modules=Data.get(response);
             angular.forEach(Data.get(response), function(key) {
                            angular.element(document).ready(function () {
                                 $('.data'+key.rmmoduleid).val(key.rmpermissionid);     
                               });
                            });
               }, function error(err) {
        });
                 
    }
    $scope.DeleteRole=function(id)
    { 
            swal({
                title: "Are you sure?",
                text: "Do You Want To Delete This user role?",
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
                    Role.DestroyRole(id).then(function success(response) {
                          $("#myModal").modal("hide");
                          swal("Deleted!", "User role Successfully Deleted", "success");
                          Role.get().then(function success(response) {
                              $scope.roles = Data.get(response);
                          },function error(error) {
  
                          });
  
                      },function error(response) {
                          swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
                      });
                } else {
                  swal("Cancelled", "Terminated The Process", "error");
                }
              });
    }
 
    $scope.update=function(dataid,mid)
    {
       
         if(!isNaN(dataid)){
            if($scope.formData.rroleid=='0') {
                $scope.formData.modules.push({'rmrolemoduleid':'0','rmroleid':$scope.formData.rroleid,'rmmoduleid':mid,'rmpermissionid':dataid});
            }else{
                $scope.formData.modules.push({'rmrolemoduleid':'0','rmroleid':$scope.formData.rroleid,'rmmoduleid':mid,'rmpermissionid':dataid});
            }
        }
        
    }
  
}]);
