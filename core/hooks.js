


app.factory('Data', function() {
  return {
    get:function(map) {
      return map.data;
    },
    filterTask:function(map) {
      // return map.;
    },
    fmDate: function(str) {
      // return str;
      var date = new Date();
      date.setDate(date.getDate() + Number(str));
      var mnth = ("0" + (date.getMonth()+1)).slice(-2);
      var day  = ("0" + date.getDate()).slice(-2);
    return [ date.getFullYear(), mnth, day ].join("-");
    },
    emObj : function(param) {
      var data;
      angular.forEach(param, function(data,i) {
        data=data;
      });
      return data;
    }

  };
});

app.factory('genPDF', function() {
  return{
    download:function(obj, name) {
      pdfMake.createPdf(obj).download(name+'.pdf');
    },

    open:function(obj) {
      pdfMake.createPdf(obj).open();
    },

    print:function(obj) {
      pdfMake.createPdf(obj).print();
    }
  };
});


app.factory('Excel', ['$window', function($window) {
  var uri='data:application/vnd.ms-excel;base64,',
    template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
    base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
    format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
  return {
    tableToExcel:function(tableId,worksheetName){
      var table=$(tableId),
        ctx={worksheet:worksheetName,table:table.html()},
        href=uri+base64(format(template,ctx));
      return href;
    }
  };
}]);

  app.factory('notify', function() {
  var pop={
    'title':'Are you sure?',
    'text':'Do You Want To Delete This?',
    'type':'warning'
  };
  return {
    notifyInit:function() {
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
    },
    success:function() {
      this.notifyInit();
      return toastr["success"]("Successfully Created!", "Success!");
    },
    error:function() {
      this.notifyInit();
      return toastr["error"]("An Error Occurred!","Error!");
    },
    info:function(msg,title) {
      this.notifyInit();
      return toastr["error"](msg,title);
    },
    warning:function(msg,title) {
      this.notifyInit();
      return toastr["error"](msg,title);
    },
    custom:function(type,msg,title) {
      this.notifyInit();
      return toastr[type](msg,title);
    },
    alert:function(title,msg,type) {
      swal(title,msg,type);
    },
    confirm:function() {
      swal({
			  title: pop.title,
			  text: pop.text,
			  type: pop.type,
			  showCancelButton: true,
			  confirmButtonColor: "#DD6B55",
			  confirmButtonText: "Yes, delete it!",
			  cancelButtonText: "No, cancel!",
			  closeOnConfirm: false,
			  closeOnCancel: false,
        showLoaderOnConfirm:true
			},
			function(isConfirm){
  			  if(isConfirm){
            swal("Deleted!", "Branch Successfully Deleted", "success");
          }else {
            swal("Deleted!", "Branch Successfully Deleted", "success");
  			  }
        });
    }
    // swal

  }
});


app.factory('timefactory', function() {
  return {
    timein:function(time ){
      m = time % 60;
      h = (time-m)/60;
      var date = new Date(99,1,1,h,m,0,0);
      return date;
    }
  }

});
// timefactory.timein($scope.formData.jshtimein);
// app.factory('timefactory', function() {
//   return {

//     timein:function(time ){
//       m = time % 60;
//       h = (time-m)/60;
//       ampm = 'AM';
//       if(h>12){
//         ampm = 'PM';
//         h = h % 12;        
//       }
//       var intime = (h<10?"0":"") +  h.toString() + ":" + (m<10?"0":"") + m.toString() + " " +ampm;
 
//       return intime;
//     },
   
//     timeout: function(timout) {
     
//       mout = timeout % 60;
//       hout = (timeout-mout)/60;
//      var outtime = hout.toString() + ":" + (mout<10?"0":"") + mout.toString();

//   return  outtime;
    
//   },


//   };
// });
app.factory('AccessFactory', function($http) {
  return {

    Perission:function(id)
    {
      return $http.get('static/rolemodule/'+id);
    }


  };
});

// app.factory('Pagination', function() {
//   return {
//     doPsgination:function(data) {
//       $scope.totalItems = param.length;
//       $scope.currentPage = 1;
//       $scope.itemsPerPage=2;
//       $scope.maxSize = 5;
//     },
//     setPage:function (pageNo) {
//       $scope.currentPage = pageNo;
//     },
//     setItemsPerPage:function(num) {
//       $scope.itemsPerPage = num;
//       $scope.currentPage = 1; //reset to first page
//     }
//   }
// });
