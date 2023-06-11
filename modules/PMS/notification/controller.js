app.controller('notificationCtrl', ['$scope','$http','$log','notification','Data','notify','cfpLoadingBar','$timeout','AccessFactory','$state', function($scope, $http, $log, notification, Data, notify,cfpLoadingBar,$timeout,AccessFactory,$state) {
    $scope.formData={
        'notification':[]
    };
    // $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('63').then(function success(response) {
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
    $scope.arr = [];

    notification.getNotification().then(function success(response) {
 
        $scope.notification=Data.get(response);
        console.log($scope.notification)
        angular.element(document).ready(function() {
            $('.chk1').hide();
        });
        angular.forEach($scope.notification, function(key) {
         if(key.unison){
            $scope.formData.notification.push({
                    'unnotificationid':key.nnotificationid,
                    'unbase':key.base,
                     'unison':key.unison
                  });
            }
            
           
        });
       
        
        }, function error(err) {
    });
    $scope.dataas=false
   $scope.putkey=function(index){
        $scope.data="baseinput"+index;
        $scope.data=true
        $(".baseinput"+index).hide();
   }

    $scope.enabled = false;
    $scope.onOff = true;
    $scope.yesNo = true;
    $scope.valuedata=false;
    $scope.changedata=function(param,index,switchonoff){
        $(".baseoutput"+index).hide();
        $scope.unison=switchonoff;
        $scope.base=param.nnotification.includes("<base>");
        if(switchonoff=='1' &&  $scope.base==true){
             $(".baseoutput"+index).show();        
        }
        else{
            $(".baseoutput"+index).hide();
        }

        if($scope.base==false) {
        
        for(var i=0;i <$scope.formData.notification.length; i++) {
            if($scope.formData.notification[i].unnotificationid==param.nnotificationid){
                $scope.formData.notification.splice(i,1);
            }
        }
            $scope.formData.notification.push({
                'unnotificationid':param.nnotificationid,
                'unbase':0,
                'unison':$scope.unison
                });
        }
        if(switchonoff=='0'){
            console.log(param.nnotificationid)
            console.log($scope.formData)
            for(var i=0;i <$scope.formData.notification.length; i++) {
                if($scope.formData.notification[i].unnotificationid==param.nnotificationid){
                    $scope.formData.notification.splice(i,1);
                }
            }
        }
    }


    $scope.makeContainer=function(data,notification,trigger)
    {
        for(var i=0;i <$scope.formData.notification.length; i++) {
            if($scope.formData.notification[i].unnotificationid== notification.nnotificationid){
                $scope.formData.notification.splice(i,1);
            }
        }
            $scope.formData.notification.push({
                'unnotificationid': notification.nnotificationid,
                'unbase':data,
                'unison':trigger
            });
    }
            
     $scope.save=function()
     {
      
//   console.log($scope.formData);
        // angular.forEach($scope.formData, function(key,value) {
        //     console.log(value);
        // });
        console.log($scope.formData);
        notification.save($scope.formData).then(function success(response) {
        console.log(Data.get(response))
            if(Data.get(response).success ) {
                console.log(Data.get(response) )
                cfpLoadingBar.complete();
                    $("#myModal").modal("hide");
                    notify.custom('success','user Successfully Saved!','user');
                    notification.getNotification().then(function success(getData) {
                        $scope.notifcation=Data.get(getData);
                        console.log( $scope.notifcation)
                    }, function error(error) {

                    });
            }else {
                
                
            }
            
        }, function error(response) {
            
                cfpLoadingBar.complete();
        });
    }


// notification.save($scope.formData=[{'unnotificationid':1,'unbase': 'kth', 'unison':true}]).then(function success(response) {
//             if(Data.get(response).success ) {
//                     cfpLoadingBar.complete();
//                     $("#myModal").modal("hide");
//                     notify.custom('success','user Successfully Saved!','user');
//                     notification.getNotification().then(function success(getData) {
//                         $scope.notifcation=Data.get(getData);
//                         }, function error(error) {
//                         });
//             }else {
                
//            }

//             }, function error(response) {
            
//                 cfpLoadingBar.complete();
// });


}]);
// app.directive("switch",function(){return{restrict:"AE",replace:!0,transclude:!0,template:function(n,e){var s="";return s+="<span",s+=' class="switch'+(e.class?" "+e.class:"")+'"',s+=e.ngModel?' ng-click="'+e.ngModel+"=!"+e.ngModel+(e.ngChange?"; "+e.ngChange+'()"':'"'):"",s+=' ng-class="{ checked:'+e.ngModel+' }"',s+=">",s+="<small></small>",s+='<input type="checkbox"',s+=e.id?' id="'+e.id+'"':"",s+=e.name?' name="'+e.name+'"':"",s+=e.ngModel?' ng-model="'+e.ngModel+'"':"",s+=' style="display:none" />',s+='<span class="switch-text">',s+=e.on?'<span class="on">'+e.on+"</span>":"",s+=e.off?'<span class="off">'+e.off+"</span>":" ",s+="</span>"}}});