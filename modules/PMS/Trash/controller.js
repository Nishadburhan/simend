app.controller('trashCtrl',['$scope','$http','$log','Trash','Data','notify','cfpLoadingBar', function($scope, $http, $log, Trash, Data, notify,cfpLoadingBar) {
    
    // Get Trashed Items By Module
        // Branches
            // Get List
        cfpLoadingBar.start();
        Trash.getTrashedBranches().then(function success(response) {
            $scope.branches=Data.get(response);
            cfpLoadingBar.complete();
        }, function error(response) {
            cfpLoadingBar.complete();
            notify.custom('error',"Can't Fetch Branches",'Branches');
        });
            // 

            // Restore
                $scope.restoreBranch=function(id) {
                    cfpLoadingBar.start();
                    Trash.restoreBranch(id).then(function success(response) {
                        cfpLoadingBar.complete();
                        // notify.custom('success','Branch Restored!','Branches');
                        Trash.getTrashedBranches().then(function success(theData) {
                            $scope.branches=Data.get(theData);
                            cfpLoadingBar.complete();
                        }, function error(theData) {
                            cfpLoadingBar.complete();
                            notify.custom('error',"Can't Fetch Branches!",'Branches');
                        });
                    }, function error(response) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Restore This Branch!",'Branches');
                    });
                };
            // 

            // Remove
                // $scope.removeBranch=function(id) {
                    
                //     cfpLoadingBar.start();
                //     swal({
                //     title: "Reason!",
                //     text: "Write a Reason to Remove:",
                //     type: "input",
                //     showCancelButton: true,
                //     closeOnConfirm: true,
                //     animation: "slide-from-top",
                //     inputPlaceholder: "Write Something"
                //     },
                //     function(inputValue){
                //     if (inputValue === false){
                //         cfpLoadingBar.complete();
                //         return false;
                //     }

                //     if (inputValue === "") {
                //         cfpLoadingBar.complete();
                //         swal.showInputError("You need to write something!");
                //         return false
                //     }
                //         Trash.removeBranch(id, inputValue).then(function success(response) {
                //             cfpLoadingBar.complete();
                //             notify.custom('success','Branch Removed!','Branches');
                //             Trash.getTrashedBranches().then(function success(theData) {
                //                 $scope.branches=Data.get(theData);
                //                 cfpLoadingBar.complete();
                                
                //             }, function error(theData) {
                //                 cfpLoadingBar.complete();
                //                 notify.custom('error',"Can't Fetch Branches",'Branches');
                //             });
                //         }, function error(response) {
                //             cfpLoadingBar.complete();
                //             notify.custom('error',"Can't Remove This Branch!",'Branches');
                //         });
                   
                //     });
                    
                // };
                $scope.removeBranch = function(id) {
                    swal({
                      title: "Are you sure?",
                      text: "Do You Want To Delete This Branch?",
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
                        Trash.removeBranch(id).then(function success(response) {
                                $("#myModal").modal("hide");
                                swal("Deleted!", "Branch Successfully Deleted", "success");
                                Trash.getTrashedBranches().then(function success(getData) {
                                    $scope.branches = Data.get(getData);
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





            // 
        // End:Branches

        //Dpartment
                // Get List
                cfpLoadingBar.start();
                Trash.getTrasheddept().then(function success(response) {
                    $scope.department=Data.get(response);
                    cfpLoadingBar.complete();
                }, function error(response) {
                    cfpLoadingBar.complete();
                    notify.custom('error',"Can't Fetch Department",'Department');
                });


            // 
            // Restore
            $scope.restoreDept=function(id) {
                cfpLoadingBar.start();
                Trash.restoreDept(id).then(function success(response) {
                    cfpLoadingBar.complete();
                    // notify.custom('success','Branch Restored!','Branches');
                    Trash.getTrasheddept().then(function success(theData) {
                        $scope.department=Data.get(theData);
                        cfpLoadingBar.complete();
                    }, function error(theData) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Fetch Department!",'Department');
                    });
                }, function error(response) {
                    cfpLoadingBar.complete();
                    notify.custom('error',"Can't Restore This Department!",'Department');
                });
            };


               // Remove
            //    $scope.removeDeptmnt=function(id) {
                
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            
            //         Trash.removeDept(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','Department Removed!','Department');
            //             Trash.getTrasheddept().then(function success(theData) {
            //                 $scope.department=Data.get(theData);
            //                 cfpLoadingBar.complete();
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch Department",'Department');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This Department!",'Department');
            //         });
               
            //     });
                
            // };
            $scope.removeDeptmnt = function(id) {
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This Department?",
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
                    Trash.removeDept(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "Department Successfully Deleted", "success");
                            Trash.getTrasheddept().then(function success(getData) {
                                $scope.department = Data.get(getData);
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

        // End :department

    //employee

            // Get List
            cfpLoadingBar.start();
            Trash.getTrashedemployee().then(function success(response) {
                $scope.employees=Data.get(response);
                cfpLoadingBar.complete();
            }, function error(response) {
                cfpLoadingBar.complete();
                notify.custom('error',"Can't Fetch Employee",'Employee');
            });


            // 
            // Restore
            $scope.restoreEmployee=function(id) {
               
                cfpLoadingBar.start();
                Trash.restoreEmpolee(id).then(function success(response) {
                    cfpLoadingBar.complete();
                    // notify.custom('success','Branch Restored!','Branches');
                    Trash.getTrashedemployee().then(function success(theData) {
                        $scope.employees=Data.get(theData);
                        cfpLoadingBar.complete();
                    }, function error(theData) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Fetch Employee!",'Employee');
                    });
                }, function error(response) {
                    cfpLoadingBar.complete();
                    notify.custom('error',"Can't Restore This Employee!",'Employee');
                });
            };
              // Remove
            //   $scope.removeEmployee=function(id) {
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            //         Trash.removeemployee(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','employee Removed!','employee');
            //             Trash.getTrashedemployee().then(function success(theData) {
            //                 $scope.employees=Data.get(theData);
            //                 cfpLoadingBar.complete();
                            
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch employee",'employee');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This Department!",'employees');
            //         });
               
            //     });
                
            // };
            $scope.removeEmployee = function(id) {
            
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This Employee?",
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
                    Trash.removeemployee(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "Employee Successfully Deleted", "success");
                            Trash.getTrashedemployee().then(function success(getData) {
                                $scope.employees = Data.get(getData);
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
        // End :employee
        //Designation
             // Get List
             cfpLoadingBar.start();
             Trash.getTrashedesignation().then(function success(response) {
                 $scope.designations=Data.get(response);
                 cfpLoadingBar.complete();
             }, function error(response) {
                 cfpLoadingBar.complete();
                 notify.custom('error',"Can't Fetch Designation",'Designation');
             });
 
  
             // 
              // Restore
            $scope.restoreDesignation=function(id) {
    
                 cfpLoadingBar.start();
                 Trash.restoreDesignation(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getTrashedesignation().then(function success(theData) {
                         $scope.designations=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch Designation!",'Designation');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This Designation!",'Designation');
                 });
              };
              //remove
        //    $scope.removeDesignation=function(id) {
        //         cfpLoadingBar.start();
        //         swal({
        //         title: "Reason!",
        //         text: "Write a Reason to Remove:",
        //         type: "input",
        //         showCancelButton: true,
        //         closeOnConfirm: true,
        //         animation: "slide-from-top",
        //         inputPlaceholder: "Write Something"
        //         },
        //         function(inputValue){
        //         if (inputValue === false){
        //             cfpLoadingBar.complete();
        //             return false;
        //         }

        //         if (inputValue === "") {
        //             cfpLoadingBar.complete();
        //             swal.showInputError("You need to write something!");
        //             return false
        //         }
        //             Trash.removeDesignation(id, inputValue).then(function success(response) {
        //                 cfpLoadingBar.complete();
        //                 notify.custom('success','designation Removed!','designation');
        //                 Trash.getTrashedesignation().then(function success(theData) {
        //                     $scope.designations=Data.get(theData);
        //                     cfpLoadingBar.complete();
                            
        //                 }, function error(theData) {
        //                     cfpLoadingBar.complete();
        //                     notify.custom('error',"Can't Fetch designation",'designation');
        //                 });
        //             }, function error(response) {
        //                 cfpLoadingBar.complete();
        //                 notify.custom('error',"Can't Remove This designation!",'designation');
        //             });
               
        //         });
                
        //     };
        $scope.removeDesignation = function(id) {
            swal({
              title: "Are you sure?",
              text: "Do You Want To Delete This designations?",
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
                Trash.removeDesignation(id).then(function success(response) {
                        $("#myModal").modal("hide");
                        swal("Deleted!", "designations Successfully Deleted", "success");
                        Trash.getTrashedesignation().then(function success(getData) {
                            $scope.designations = Data.get(getData);
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
        // End :Designation
        //service
 
             // Get List
             cfpLoadingBar.start();
             Trash.getTrasheservice().then(function success(response) {
                 $scope.service=Data.get(response);
               
                 cfpLoadingBar.complete();
             }, function error(response) {
                 cfpLoadingBar.complete();
                 notify.custom('error',"Can't Fetch Service",'Service');
             });
  // Restore
             $scope.restoreService=function(id) {
            
    
                 cfpLoadingBar.start();
                 Trash.restoreservice(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getTrasheservice().then(function success(theData) {
                         $scope.service=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch Service!",'Service');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This Service!",'Service');
                 });
              };
         //remove
            //   $scope.removeService=function(id) {
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            //         Trash.removeservice(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','service Removed!','service');
            //             Trash.getTrasheservice().then(function success(theData) {
            //                 $scope.service=Data.get(theData);
            //                 cfpLoadingBar.complete();
                            
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch service",'service');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This service!",'service');
            //         });
               
            //     });
                
            // };
            $scope.removeService = function(id) {
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This service?",
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
                    Trash.removeservice(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "service Successfully Deleted", "success");
                            Trash.getTrasheservice().then(function success(getData) {
                                $scope.service = Data.get(getData);
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
             // 

        //End:service
        //customers
                // Get List
                cfpLoadingBar.start();
                Trash.getTrasheCustomer().then(function success(response) {
                    $scope.customers=Data.get(response);
                   
                    cfpLoadingBar.complete();
                }, function error(response) {
                    cfpLoadingBar.complete();
                    notify.custom('error',"Can't Fetch Customers",'Customers');
                });
                 // Restore
             $scope.restoreCustomer=function(id) {
                
                             cfpLoadingBar.start();
                             Trash.restorecustomer(id).then(function success(response) {
                                 cfpLoadingBar.complete();
                                 // notify.custom('success','Branch Restored!','Branches');
                                 Trash.getTrasheCustomer().then(function success(theData) {
                                     $scope.customers=Data.get(theData);
                                     cfpLoadingBar.complete();
                                 }, function error(theData) {
                                     cfpLoadingBar.complete();
                                     notify.custom('error',"Can't Fetch Customers!",'Customers');
                                 });
                             }, function error(response) {
                                 cfpLoadingBar.complete();
                                 notify.custom('error',"Can't Restore This Customers!",'Customers');
                             });
                          };
                     
              
                         // remoe
                        //  $scope.removeCustomer=function(id) {
                        //     cfpLoadingBar.start();
                        //     swal({
                        //     title: "Reason!",
                        //     text: "Write a Reason to Remove:",
                        //     type: "input",
                        //     showCancelButton: true,
                        //     closeOnConfirm: true,
                        //     animation: "slide-from-top",
                        //     inputPlaceholder: "Write Something"
                        //     },
                        //     function(inputValue){
                        //     if (inputValue === false){
                        //         cfpLoadingBar.complete();
                        //         return false;
                        //     }
            
                        //     if (inputValue === "") {
                        //         cfpLoadingBar.complete();
                        //         swal.showInputError("You need to write something!");
                        //         return false
                        //     }
                        //         Trash.removecustomer(id, inputValue).then(function success(response) {
                        //             cfpLoadingBar.complete();
                        //             notify.custom('success','customers Removed!','customers');
                        //             Trash.getTrasheCustomer().then(function success(theData) {
                        //                 $scope.customers=Data.get(theData);
                        //                 cfpLoadingBar.complete();
                                        
                        //             }, function error(theData) {
                        //                 cfpLoadingBar.complete();
                        //                 notify.custom('error',"Can't Fetch customers",'customers');
                        //             });
                        //         }, function error(response) {
                        //             cfpLoadingBar.complete();
                        //             notify.custom('error',"Can't Remove This customers!",'customers');
                        //         });
                           
                        //     });
                            
                        // };
                        $scope.removeCustomer = function(id) {
                            swal({
                              title: "Are you sure?",
                              text: "Do You Want To Delete This customers?",
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
                                Trash.removecustomer(id).then(function success(response) {
                                        $("#myModal").modal("hide");
                                        swal("Deleted!", "customers Successfully Deleted", "success");
                                        Trash.getTrasheCustomer().then(function success(getData) {
                                            $scope.customers = Data.get(getData);
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

        //End:customers

        //jobsite
        // Get List
        cfpLoadingBar.start();
        Trash.getTrasheJob().then(function success(response) {
            $scope.jobsite=Data.get(response);
            
            cfpLoadingBar.complete();
        }, function error(response) {
            cfpLoadingBar.complete();
            notify.custom('error',"Can't Fetch Jobsite",'Jobsite');
        });
          // Restore
          $scope.restoreJobSite=function(id) {
            
                         cfpLoadingBar.start();
                         Trash.restoreJob(id).then(function success(response) {
                             cfpLoadingBar.complete();
                             // notify.custom('success','Branch Restored!','Branches');
                             Trash.getTrasheJob().then(function success(theData) {
                                 $scope.jobsite=Data.get(theData);
                                 cfpLoadingBar.complete();
                             }, function error(theData) {
                                 cfpLoadingBar.complete();
                                 notify.custom('error',"Can't Fetch Jobsite!",'Jobsite');
                             });
                         }, function error(response) {
                             cfpLoadingBar.complete();
                             notify.custom('error',"Can't Restore This jobsite!",'jobsite');
                         });
                      };
                 //remove
                    //   $scope.removeJobSite=function(id) {
                    //     cfpLoadingBar.start();
                    //     swal({
                    //     title: "Reason!",
                    //     text: "Write a Reason to Remove:",
                    //     type: "input",
                    //     showCancelButton: true,
                    //     closeOnConfirm: true,
                    //     animation: "slide-from-top",
                    //     inputPlaceholder: "Write Something"
                    //     },
                    //     function(inputValue){
                    //     if (inputValue === false){
                    //         cfpLoadingBar.complete();
                    //         return false;
                    //     }
        
                    //     if (inputValue === "") {
                    //         cfpLoadingBar.complete();
                    //         swal.showInputError("You need to write something!");
                    //         return false
                    //     }
                    //         Trash.removejob(id, inputValue).then(function success(response) {
                    //             cfpLoadingBar.complete();
                    //             notify.custom('success','jobsite Removed!','jobsite');
                    //             Trash.getTrasheJob().then(function success(theData) {
                    //                 $scope.jobsite=Data.get(theData);
                    //                 cfpLoadingBar.complete();
                                    
                    //             }, function error(theData) {
                    //                 cfpLoadingBar.complete();
                    //                 notify.custom('error',"Can't Fetch jobsite",'jobsite');
                    //             });
                    //         }, function error(response) {
                    //             cfpLoadingBar.complete();
                    //             notify.custom('error',"Can't Remove This jobsite!",'jobsite');
                    //         });
                       
                    //     });
                        
                    // };
                    $scope.removeJobSite = function(id) {
                        swal({
                          title: "Are you sure?",
                          text: "Do You Want To Delete This jobsite?",
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
                            Trash.removejob(id).then(function success(response) {
                                    $("#myModal").modal("hide");
                                    swal("Deleted!", "jobsite Successfully Deleted", "success");
                                    Trash.getTrasheJob().then(function success(getData) {
                                        $scope.jobsite = Data.get(getData);
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
                     // 
        
        //End:jobsite
//project
// Get List
cfpLoadingBar.start();
Trash.getTrasheproject().then(function success(response) {
    $scope.projects=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch projects",'projects');
});
  // Restore
  $scope.restoreproject=function(id) {

                 cfpLoadingBar.start();
                 Trash.restoreproject(id).then(function success(response) {
                     //cfpLoadingBar.complete();
                      //notify.custom('success','projects Restored!','Branches');
                     Trash.getTrasheproject().then(function success(theData) {
                         $scope.projects=Data.get(theData);
                         //cfpLoadingBar.complete();
                     }, function error(theData) {
                         //cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch projects!",'projects');
                     });
                 }, function error(response) {
                     //cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This projects!",'projects');
                 });
              };
         //remove
              $scope.removeproject=function(id) {
                cfpLoadingBar.start();
                swal({
                title: "Reason!",
                text: "Write a Reason to Remove:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: true,
                animation: "slide-from-top",
                inputPlaceholder: "Write Something"
                },
                function(inputValue){
                if (inputValue === false){
                    cfpLoadingBar.complete();
                    return false;
                }

                if (inputValue === "") {
                    cfpLoadingBar.complete();
                    swal.showInputError("You need to write something!");
                    return false
                }
                    Trash.removeproject(id, inputValue).then(function success(response) {
                        cfpLoadingBar.complete();
                        notify.custom('success','project Removed!','project');
                        Trash.getTrasheproject().then(function success(theData) {
                            $scope.projects=Data.get(theData);
                            cfpLoadingBar.complete();
                            
                        }, function error(theData) {
                            cfpLoadingBar.complete();
                            notify.custom('error',"Can't Fetch project",'project');
                        });
                    }, function error(response) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Remove This project!",'project');
                    });
               
                });
                
            };

            
             // 







//End:project
//invoice
cfpLoadingBar.start();
Trash.getTrasheinvoice().then(function success(response) {
    $scope.invoice=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch invoice",'invoice');
});
  // Restore
  $scope.restoreinvoices=function(id) {

                 cfpLoadingBar.start();
                 Trash.restoreinvoice(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getTrasheinvoice().then(function success(theData) {
                         $scope.invoice=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch invoice!",'invoice');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This invoice!",'invoice');
                 });
              };
         //remove
              $scope.removeinvoices=function(id) {
                cfpLoadingBar.start();
                swal({
                title: "Reason!",
                text: "Write a Reason to Remove:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: true,
                animation: "slide-from-top",
                inputPlaceholder: "Write Something"
                },
                function(inputValue){
                if (inputValue === false){
                    cfpLoadingBar.complete();
                    return false;
                }

                if (inputValue === "") {
                    cfpLoadingBar.complete();
                    swal.showInputError("You need to write something!");
                    return false
                }
                    Trash.removeinvoice(id, inputValue).then(function success(response) {
                        cfpLoadingBar.complete();
                        notify.custom('success','invoice Removed!','invoice');
                        Trash.getTrasheinvoice().then(function success(theData) {
                            $scope.invoice=Data.get(theData);
                            cfpLoadingBar.complete();
                            
                        }, function error(theData) {
                            cfpLoadingBar.complete();
                            notify.custom('error',"Can't Fetch invoice",'invoice');
                        });
                    }, function error(response) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Remove This invoice!",'invoice');
                    });
               
                });
                
            };
             // 
//End invice
//quotation
cfpLoadingBar.start();
Trash.getquotation().then(function success(response) {
    $scope.quotations=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch quotation",'quotation');
});
  // Restore
  $scope.restorequotation=function(id) {

                 cfpLoadingBar.start();
                 Trash.restorequotation(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getquotation().then(function success(theData) {
                         $scope.quotations=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch quotation!",'quotation');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This quotation!",'quotation');
                 });
              };
         //remove
              $scope.removequotation=function(id) {
                cfpLoadingBar.start();
                swal({
                title: "Reason!",
                text: "Write a Reason to Remove:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: true,
                animation: "slide-from-top",
                inputPlaceholder: "Write Something"
                },
                function(inputValue){
                if (inputValue === false){
                    cfpLoadingBar.complete();
                    return false;
                }

                if (inputValue === "") {
                    cfpLoadingBar.complete();
                    swal.showInputError("You need to write something!");
                    return false
                }
                    Trash.removequotation(id, inputValue).then(function success(response) {
                        cfpLoadingBar.complete();
                        notify.custom('success','quotations Removed!','quotations');
                        Trash.getquotation().then(function success(theData) {
                            $scope.quotations=Data.get(theData);
                            cfpLoadingBar.complete();
                            
                        }, function error(theData) {
                            cfpLoadingBar.complete();
                            notify.custom('error',"Can't Fetch quotations",'quotations');
                        });
                    }, function error(response) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Remove This quotations!",'quotations');
                    });
               
                });
                
            };
             //

//End:quotation
//reminder
cfpLoadingBar.start();
Trash.getreminder().then(function success(response) {
    $scope.reminders=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch reminder",'reminder');
});
  // Restore
  $scope.restorereminder=function(id) {

                 cfpLoadingBar.start();
                 Trash.restorereminder(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getreminder().then(function success(theData) {
                         $scope.reminders=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch reminder!",'reminder');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This reminder!",'reminder');
                 });
              };
         //remove
            //   $scope.removereminder=function(id) {
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            //         Trash.removereminder(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','reminder Removed!','reminder');
            //             Trash.getreminder().then(function success(theData) {
            //                 $scope.reminders=Data.get(theData);
            //                 cfpLoadingBar.complete();
                            
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch reminder",'reminder');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This reminder!",'reminder');
            //         });
               
            //     });
                
            // };
            $scope.removereminder = function(id) {
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This reminders?",
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
                    Trash.removereminder(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "reminders Successfully Deleted", "success");
                            Trash.getreminder().then(function success(getData) {
                                $scope.reminders = Data.get(getData);
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
//End:reminder

//contact
cfpLoadingBar.start();
Trash.getcontact().then(function success(response) {
    $scope.contacts=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch contact",'contact');
});
  // restore
  $scope.restorecontact=function(id) {

                 cfpLoadingBar.start();
                 Trash.restorecontact(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getcontact().then(function success(theData) {
                         $scope.contacts=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch contact!",'contact');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This contact!",'contact');
                 });
              };
         //remove
            //   $scope.removecontact=function(id) {
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            //         Trash.removecontact(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','contacts Removed!','contacts');
            //             Trash.getcontact().then(function success(theData) {
            //                 $scope.contacts=Data.get(theData);
            //                 cfpLoadingBar.complete();
                            
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch contacts",'contacts');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This contacts!",'contacts');
            //         });
               
            //     });
                
            // };
            $scope.removecontact = function(id) {
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This contacts?",
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
                    Trash.removecontact(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "contacts Successfully Deleted", "success");
                            Trash.getcontact().then(function success(getData) {
                                $scope.contacts = Data.get(getData);
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
//End:contacts

//role
cfpLoadingBar.start();
Trash.getrole().then(function success(response) {
    $scope.roles=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch role",'role');
});
  // restore
  $scope.restorerole=function(id) {

                 cfpLoadingBar.start();
                 Trash.restorerole(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getrole().then(function success(theData) {
                         $scope.roles=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch role!",'role');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This role!",'role');
                 });
              };
         //remove
            //   $scope.removerole=function(id) {
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            //         Trash.removerole(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','role Removed!','role');
            //             Trash.getrole().then(function success(theData) {
            //                 $scope.roles=Data.get(theData);
            //                 cfpLoadingBar.complete();
                            
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch role",'role');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This role!",'role');
            //         });
               
            //     });
                
            // };
            $scope.removerole = function(id) {
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This roles?",
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
                    Trash.removerole(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "roles Successfully Deleted", "success");
                            Trash.getrole().then(function success(getData) {
                                $scope.roles = Data.get(getData);
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
//End:role
//template
cfpLoadingBar.start();
Trash.gettemplate().then(function success(response) {
    console.log(Data.get(response));
    $scope.templates=Data.get(response);
 
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch template",'template');
});
  // restore
  $scope.restoretemplate=function(id) {
    
                 cfpLoadingBar.start();
                 Trash.restoretemplate(id).then(function success(response) {
            
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.gettemplate().then(function success(theData) {
                         $scope.templates=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch template!",'template');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This template!",'template');
                 });
              };
         //remove
            //   $scope.removetemplate=function(id) {
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            //         Trash.removetemplate(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','template Removed!','template');
            //             Trash.gettemplate().then(function success(theData) {
            //                 $scope.templates=Data.get(theData);
            //                 cfpLoadingBar.complete();
                            
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch template",'template');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This template!",'template');
            //         });
               
            //     });
                
            // };
            $scope.removetemplate = function(id) {
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This templates?",
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
                    Trash.removetemplate(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "templates Successfully Deleted", "success");
                            Trash.gettemplate().then(function success(getData) {
                                $scope.templates = Data.get(getData);
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
//End:template
//schedule
cfpLoadingBar.start();
Trash.getschedule().then(function success(response) {
    $scope.schedules=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch schedule",'schedule');
});
  // restore
  $scope.restoreschedule=function(id) {

                 cfpLoadingBar.start();
                 Trash.restoreschedule(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getschedule().then(function success(theData) {
                         $scope.schedules=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch schedule!",'schedule');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This schedule!",'schedule');
                 });
              };
         //remove
              $scope.removeschedule=function(id) {
                cfpLoadingBar.start();
                swal({
                title: "Reason!",
                text: "Write a Reason to Remove:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: true,
                animation: "slide-from-top",
                inputPlaceholder: "Write Something"
                },
                function(inputValue){
                if (inputValue === false){
                    cfpLoadingBar.complete();
                    return false;
                }

                if (inputValue === "") {
                    cfpLoadingBar.complete();
                    swal.showInputError("You need to write something!");
                    return false
                }
                    Trash.removeschedule(id, inputValue).then(function success(response) {
                        cfpLoadingBar.complete();
                        notify.custom('success','template Removed!','template');
                        Trash.getschedule().then(function success(theData) {
                            $scope.schedules=Data.get(theData);
                            cfpLoadingBar.complete();
                            
                        }, function error(theData) {
                            cfpLoadingBar.complete();
                            notify.custom('error',"Can't Fetch schedule",'schedule');
                        });
                    }, function error(response) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Remove This schedule!",'schedule');
                    });
               
                });
                
            };
//End:schedule
//expense
cfpLoadingBar.start();
Trash.getexpense().then(function success(response) {
    $scope.expsheets=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch expense",'expense');
});
  // restore
  $scope.restoreexpense=function(id) {

                 cfpLoadingBar.start();
                 Trash.restoreexpense(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getexpense().then(function success(theData) {
                         $scope.expsheets=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch expense!",'expense');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This expense!",'expense');
                 });
              };
         //remove
              $scope.removeexpense=function(id) {
                cfpLoadingBar.start();
                swal({
                title: "Reason!",
                text: "Write a Reason to Remove:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: true,
                animation: "slide-from-top",
                inputPlaceholder: "Write Something"
                },
                function(inputValue){
                if (inputValue === false){
                    cfpLoadingBar.complete();
                    return false;
                }

                if (inputValue === "") {
                    cfpLoadingBar.complete();
                    swal.showInputError("You need to write something!");
                    return false
                }
                    Trash.removeexpense(id, inputValue).then(function success(response) {
                        cfpLoadingBar.complete();
                        notify.custom('success','template Removed!','template');
                        Trash.getexpense().then(function success(theData) {
                            $scope.expsheets=Data.get(theData);
                            cfpLoadingBar.complete();
                            
                        }, function error(theData) {
                            cfpLoadingBar.complete();
                            notify.custom('error',"Can't Fetch expense",'expense');
                        });
                    }, function error(response) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Remove This expense!",'expense');
                    });
               
                });
                
            };
//End:expsheets

//jobsheet
cfpLoadingBar.start();
Trash.getjobsheet().then(function success(response) {
    $scope.jobsheet=Data.get(response);
    
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch jobsheet",'role');
});
  // restore
  $scope.restorejobsheet=function(id) {

                 cfpLoadingBar.start();
                 Trash.restorejobsheet(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getjobsheet().then(function success(theData) {
                         $scope.jobsheet=Data.get(theData);
                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch jobsheet!",'jobsheet');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This jobsheet!",'jobsheet');
                 });
              };
         //remove
              $scope.removejobsheet=function(id) {
                cfpLoadingBar.start();
                swal({
                title: "Reason!",
                text: "Write a Reason to Remove:",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: true,
                animation: "slide-from-top",
                inputPlaceholder: "Write Something"
                },
                function(inputValue){
                if (inputValue === false){
                    cfpLoadingBar.complete();
                    return false;
                }

                if (inputValue === "") {
                    cfpLoadingBar.complete();
                    swal.showInputError("You need to write something!");
                    return false
                }
                    Trash.removejobsheet(id, inputValue).then(function success(response) {
                        cfpLoadingBar.complete();
                        notify.custom('success','jobsheet Removed!','jobsheet');
                        Trash.getjobsheet().then(function success(theData) {
                            $scope.jobsheet=Data.get(theData);
                            cfpLoadingBar.complete();
                            
                        }, function error(theData) {
                            cfpLoadingBar.complete();
                            notify.custom('error',"Can't Fetch jobsheet",'jobsheet');
                        });
                    }, function error(response) {
                        cfpLoadingBar.complete();
                        notify.custom('error',"Can't Remove This jobsheet!",'jobsheet');
                    });
               
                });
                
            };
//End:jobsheet


//contract

cfpLoadingBar.start();
Trash.getcontract().then(function success(response) {
    $scope.contracts=Data.get(response);
    console.log($scope.contracts);
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch contracts",'contracts');
});
  // restore
  $scope.restorecotract=function(id) {

                 cfpLoadingBar.start();
                 Trash.restorecontract(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getcontract().then(function success(theData) {
                         $scope.contracts=Data.get(theData);

                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch contracts!",'contracts');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This contracts!",'contracts');
                 });
              };
         //remove
            //   $scope.removecontract=function(id) {
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            //         Trash.removecontract(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','jobsheet Removed!','contracts');
            //             Trash.getcontract().then(function success(theData) {
            //                 $scope.contracts=Data.get(theData);
            //                 cfpLoadingBar.complete();
                            
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch contracts",'contracts');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This contracts!",'contracts');
            //         });
               
            //     });
                
            // };
            $scope.removecontract = function(id) {
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This contracts?",
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
                    Trash.removecontract(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "contracts Successfully Deleted", "success");
                            Trash.getcontract().then(function success(getData) {
                                $scope.contracts = Data.get(getData);
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

//contract


//Tinvoice

cfpLoadingBar.start();
Trash.getTinvoice().then(function success(response) {
    $scope.invoicesdata=Data.get(response);
    //console.log($scope.invoices);
    cfpLoadingBar.complete();
}, function error(response) {
    cfpLoadingBar.complete();
    notify.custom('error',"Can't Fetch invoices",'invoices');
});
  // restore
  $scope.restoreinvc=function(id) {

                 cfpLoadingBar.start();
                 Trash.restoreTinvoice(id).then(function success(response) {
                     cfpLoadingBar.complete();
                     // notify.custom('success','Branch Restored!','Branches');
                     Trash.getTinvoice().then(function success(theData) {
                         $scope.invoicesdata=Data.get(theData);

                         cfpLoadingBar.complete();
                     }, function error(theData) {
                         cfpLoadingBar.complete();
                         notify.custom('error',"Can't Fetch invoices!",'invoices');
                     });
                 }, function error(response) {
                     cfpLoadingBar.complete();
                     notify.custom('error',"Can't Restore This invoices!",'invoices');
                 });
              };
         //remove
            //   $scope.removeinvc=function(id) {
            //     cfpLoadingBar.start();
            //     swal({
            //     title: "Reason!",
            //     text: "Write a Reason to Remove:",
            //     type: "input",
            //     showCancelButton: true,
            //     closeOnConfirm: true,
            //     animation: "slide-from-top",
            //     inputPlaceholder: "Write Something"
            //     },
            //     function(inputValue){
            //     if (inputValue === false){
            //         cfpLoadingBar.complete();
            //         return false;
            //     }

            //     if (inputValue === "") {
            //         cfpLoadingBar.complete();
            //         swal.showInputError("You need to write something!");
            //         return false
            //     }
            //         Trash.removeTinvoice(id, inputValue).then(function success(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('success','invoice Removed!','invoice');
            //             Trash.getTinvoice().then(function success(theData) {
            //                 $scope.invoicesdata=Data.get(theData);
            //                 cfpLoadingBar.complete();
                            
            //             }, function error(theData) {
            //                 cfpLoadingBar.complete();
            //                 notify.custom('error',"Can't Fetch invoice",'invoice');
            //             });
            //         }, function error(response) {
            //             cfpLoadingBar.complete();
            //             notify.custom('error',"Can't Remove This invoice!",'invoice');
            //         });
               
            //     });
                
            // };
            $scope.removeinvc = function(id) {
                swal({
                  title: "Are you sure?",
                  text: "Do You Want To Delete This invoice?",
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
                    Trash.removeTinvoice(id).then(function success(response) {
                            $("#myModal").modal("hide");
                            swal("Deleted!", "invoice Successfully Deleted", "success");
                            Trash.getTinvoice().then(function success(getData) {
                                $scope.invoicesdata = Data.get(getData);
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

//contract




}]);