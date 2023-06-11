app.factory('Trash', ['$http', function($http) {
    return {
        get: function() {

        },
        // Branch
            getTrashedBranches: function() {
                return $http.get('sim/hm/branch/trashedall');
            },

            restoreBranch: function(param) {
                return $http.post('sim/hm/branch/restore/'+param);
            },

            removeBranch: function(id, param) {
                return $http.post('sim/hm/branch/remove/'+id+'/'+param);
            },
        // End:Branch
        //department
            getTrasheddept: function() {
                return $http.get('sim/hm/department/trashedall');
            },
            restoreDept: function(param) {
                return $http.post('sim/hm/department/restore/'+param);
            },
            removeDept: function(id, param) {
                return $http.post('sim/hm/department/remove/'+id+'/'+param);
            },
            //End:Department
            //Employee
            getTrashedemployee: function() {
                return $http.get('sim/hm/employee/trashedall');
            },
            restoreEmpolee: function(id) {
                return $http.post('sim/hm/employee/restore/'+id);
            },
            removeemployee: function(id, param) {
                return $http.post('sim/hm/employee/remove/'+id+'/'+param);
            },
        //End:Employee
        //Designation
        getTrashedesignation: function() {
            return $http.get('sim/hm/designation/trashedall');
        },
        restoreDesignation: function(id) {
            return $http.post('sim/hm/designation/restore/'+id);
        },
        removeDesignation: function(id, param) {
            return $http.post('sim/hm/designation/remove/'+id+'/'+param);
        },
        //End:Designation
        //service
        getTrasheservice: function() {
            return $http.get('sim/sm/service/trashedall');
        },
         restoreservice: function(id) {
           return $http.post('sim/sm/service/restore/'+id);
         },
         removeservice: function(id, param) {
            return $http.post('sim/sm/service/remove/'+id+'/'+param);
        },
        //End:service
        //customer
        getTrasheCustomer: function() {
            return $http.get('sim/sm/customer/trashedall');
        },
         restorecustomer: function(id) {
           return $http.post('sim/sm/customer/restore/'+id);
         },
         removecustomer: function(id, param) {
            return $http.post('sim/sm/customer/remove/'+id+'/'+param);
        },
        //End:customer
        //jobsite
        getTrasheJob: function() {
            return $http.get('sim/sm/jobsite/trashedall');
        },
         restoreJob: function(id) {
           return $http.post('sim/sm/jobsite/restore/'+id);
         },
         removejob: function(id, param) {
            return $http.post('sim/sm/jobsite/remove/'+id+'/'+param);
        },
        //End:jobsite

        //project
        getTrasheproject: function() {
            return $http.get('sim/pm/project/trashedall');
        },
         restoreproject: function(id) {
           return $http.post('sim/pm/project/restore/'+id);
         },
         removeproject: function(id, param) {
            return $http.post('sim/pm/project/remove/'+id+'/'+param);
        },

        //End:project
        //invoice
        getTrasheinvoice: function() {
            return $http.get('sim/sma/invoice/trashedall');
        },
         restoreinvoice: function(id) {
           return $http.post('sim/sma/invoice/restore/'+id);
         },
         removeinvoice: function(id, param) {
            return $http.post('sim/sma/invoice/remove/'+id+'/'+param);
        },
        //End invoice
        //quotation
        getquotation: function() {
            return $http.get('sim/pm/quotation/trashedall');
        },
         restorequotation: function(id) {
           return $http.post('sim/pm/quotation/restore/'+id);
         },
         removequotation: function(id, param) {
            return $http.post('sim/pm/quotation/remove/'+id+'/'+param);
        },

        //end:quotation
        //remider
        getreminder: function() {
            return $http.get('sim/sut/reminder/trashedall');
        },
        restorereminder: function(id) {
           return $http.post('sim/sut/reminder/restore/'+id);
         },
         removereminder: function(id, param) {
            return $http.post('sim/sut/reminder/remove/'+id+'/'+param);
        },
        //End:reminder
        //contact
        getcontact: function() {
            return $http.get('sim/sut/contactbook/trashedall');
        },
         restorecontact: function(id) {
           return $http.post('sim/sut/contactbook/restore/'+id);
         },
         removecontact: function(id, param) {
            return $http.post('sim/sut/contactbook/remove/'+id+'/'+param);
        },
        //End:contact
            //role
            getrole: function() {
                return $http.get('sim/sap/role/trashedall');
            },
             restorerole: function(id) {
               return $http.post('sim/sap/role/restore/'+id);
             },
             removerole: function(id) {
                return $http.post('sim/sap/role/remove/'+id);
            },
            //End:role
             //templatequotation
             gettemplate: function() {
                return $http.get('sim/pms/template/quotation/trashedall');
            },
             restoretemplate: function(id) {
               return $http.post('sim/pms/template/quotation/restore/'+id);
             },
             removetemplate: function(id, param) {
                return $http.post('sim/pms/template/quotation/remove/'+id+'/'+param);
            },
            //End:templatequotation
              //schedule
              getschedule: function() {
                return $http.get('sim/pm/schedule/trashedall');
            },
             restoreschedule: function(id) {
               return $http.post('sim/pm/schedule/restore/'+id);
             },
             removeschedule: function(id, param) {
                return $http.post('sim/pm/schedule/remove/'+id+'/'+param);
            },
            //End:schedule
                 //expense
                 getexpense: function() {
                    return $http.get('sim/pm/expense/trashedall');
                },
                 restoreexpense: function(id) {
                   return $http.post('sim/pm/expense/restore/'+id);
                 },
                 removeexpense: function(id, param) {
                    return $http.post('sim/pm/expense/remove/'+id+'/'+param);
                },
                //End:expense
                           //jobsheet
                           getjobsheet: function() {
                            return $http.get('sim/pm/sheet/trashedall');
                        },
                         restorejobsheet: function(id) {
                           return $http.post('sim/pm/sheet/restore/'+id);
                         },
                         removejobsheet: function(id, param) {
                            return $http.post('sim/pm/sheet/remove/'+id+'/'+param);
                        },
                        //End:jobsheet
                         //templatequotation
             getcontract: function() {
                return $http.get('sim/pms/template/contract/trashedall');
            },
             restorecontract: function(id) {
               return $http.post('sim/pms/template/contract/restore/'+id);
             },
             removecontract: function(id, param) {
                return $http.post('sim/pms/template/contract/remove/'+id+'/'+param);
            },
            //End:templatequotation
            //templateinvoice
            getTinvoice: function() {
                return $http.get('sim/pms/template/invoice/trashedall');
            },
             restoreTinvoice: function(id) {
               return $http.post('sim/pms/template/invoice/restore/'+id);
             },
             removeTinvoice: function(id, param) {
                return $http.post('sim/pms/template/invoice/remove/'+id+'/'+param);
            },
            //End:templateinvoice
                        
                        
                        

    };
}]);