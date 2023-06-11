app.controller('UserCtrl', ['$scope','$http','$log','User','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, User, Data, notify,cfpLoadingBar,AccessFactory,$state) {
    $scope.formData={
        'sucategory':'User',
        'suuserid':0
    }
	//permission

	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('61').then(function success(response) {
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
    User.get().then(function success(response) {
            $scope.users=Data.get(response);
            $scope.doPagination($scope.users);
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
    cfpLoadingBar.start();
    User.GetEmply().then(function success(response) {
        $scope.employeesdata=Data.get(response);
        cfpLoadingBar.complete();
    }, function error(err) {
        cfpLoadingBar.complete();
     });

    User.Getroledata().then(function success(response) {
        $scope.rolesbox=Data.get(response);
    }, function error(err) {
    });
    $scope.valuedata='select';
    $scope.update=function(dataid)
    { 
      if(dataid=='select')
    {
        $scope.formData.sucategory='User';
    }
    else{
        $scope.formData.sucategory='employee';
    }
    }
    $scope.saverole=function(datarole)
    { 
        $scope.formData.suroleid=datarole;
    }
     $scope.saveUser=function(){
                           cfpLoadingBar.start();
                           User.save($scope.formData).then(function success(response) {
                                if(Data.get(response).success ) {
                                     $scope.formData = {'suuserid':0, 'sucategory':'User',};
                                     cfpLoadingBar.complete();
                                     $("#myModal").modal("hide");
                                     notify.custom('success','user Successfully Saved!','user');
                                     User.get().then(function success(getData) {
                                       $scope.users=Data.get(getData);
                                       $scope.doPagination($scope.users);
                                      }, function error(error) {
                                     });
                                }else {
                                    cfpLoadingBar.complete();
                                    if(Data.get(response).message=="Invited_Registered_User") {
                                        notify.custom('error','User  Already Registered!','User');
                                    }
                                    else if( Data.get(response).message=="UQ_UserCode") { 
                                        notify.custom('error','User Code Already Exists!','UserCode');
                                    }
                                    else if( Data.get(response).message=="UQ_Email_Active") { 
                                        notify.custom('error','User  Already Invited!','User');
                                    }
                                    else{
                                        notify.custom('error','Something Wrong!','User');
                                    }
                                }
              
                            }, function error(response) {
                                document.getElementById("email").disabled = false;
                                cfpLoadingBar.complete();
                           });
    },
    $scope.editUser=function(id)
    { 
            if($scope.formData.suusertypeid==1){ 
                $scope.typeid=true;
            }
            cfpLoadingBar.start();
            User.editdata(id).then(function success(response) {
                $scope.formData=Data.get(response);
                    if( $scope.formData.suemail){
                            document.getElementById("email").disabled = true;
                    }
                    else{
                            document.getElementById("email").disabled = false;
                    }
                    cfpLoadingBar.complete();
                    $("#myModal").modal("show");
            }, function error(err) {
                cfpLoadingBar.complete();
                            
            });
    },
    $scope.deleteUser=function(id){
    swal({
                title: "Are you sure?",
                text: "Do You Want To Terminate This user?",
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
                        User.terminate(id).then(function success(response) {
                                $("#myModal").modal("hide");
                                swal("Deleted!", "User Successfully Terminated", "success");
                                User.get().then(function success(response) {
                                    $scope.users = Data.get(response);
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
    $scope.permissions=[{name:'access denid',permissionid:'0'},{name:'Read',permissionid:'1'},{name:'Write',permissionid:'2'},{name:'Full Controlled',permissionid:'3'}]
    angular.element(document).ready(function () {
            $(document).on("change", ".permission", function()
             { 
                 if(this.checked){
                    if($scope.formData.suuserid=='0') {
                        $scope.formData.permission.push({'pid':'0','perid':$scope.formData.suuserid,'permissionid':$(this).data('id')});
                    }else{
                        $scope.formData.permission.push({'pid':'0','perid':$scope.formData.suuserid,'permissionid':$(this).data('id')});
                    }
                 }
                else{
                    for(var i=0;i <$scope.permission.length; i++) {
                        if($scope.formData.permission[i].permissionid==$(this).data('id')){
                        
                            $scope.formData.permission.splice(i,1);
                        }
                
                    }
                }

            });
        });
    $scope.clear=function() {
            $('.module').prop('checked', false);
            $scope.formData={'suuserid':0, 'sucategory':'User', };
            document.getElementById("email").disabled = false;
         };
    $scope.clearForm=function()
    {
       
        $scope.clear();
        
    }    
        
}]);