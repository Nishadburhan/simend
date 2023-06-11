
app.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', 'cfpLoadingBarProvider', function($stateProvider, $urlRouterProvider, $compileProvider, cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
  cfpLoadingBarProvider.includeBar = true;
  
  // Optimize load start with remove binding information inside the DOM element
  $compileProvider.debugInfoEnabled(false);

  // Set default state
  $urlRouterProvider.otherwise("/dashboard");
  $stateProvider

      // Landing page
      .state('landing', {
          url: "/landing_page",
          templateUrl: "views/landing_page.html",
          data: {
              pageTitle: 'Landing page',
              specialClass: 'landing-page'
          }
      })

      // Dashboard - Main page
      .state('dashboard', {
          url: "/dashboard",
          templateUrl: "views/dashboard.html",
          controller:'dashboardCtrl',
          data: {
              pageTitle: 'Dashboard'
          }
      })
      .state('quotation', {
        url: "/quotation",
        templateUrl:"views/quotation/list.php",
        controller:'quotationCtrl',
        data:{
          pageTitle:'Quotation'
        }
      })
      .state('project', {
        url: "/project",
        templateUrl:"views/project/list.php",
        controller:'projectCtrl',
        data:{
          pageTitle:'Project'
        }
      })
      .state('reports', {
        url: "/reports",
        templateUrl: "views/report/list.php",
        data: {
            pageTitle: 'Reports'
        }
      })
      .state('report', {
          abstract: true,
          url: "/report",
          templateUrl: "views/common/content.html",
          data: {
              pageTitle: 'Report'
          }
      })
      .state('employee_report', {
        url: "/employee_report",
        templateUrl:"views/report/report.html",
        controller:'reportCtrl',
        data:{
          pageTitle:'Project'
        }
      })
      .state('quotation_report', {
        url: "/quotation_report",
        templateUrl:"views/report/report.html",
        controller:'quotationReportCtrl',
        data:{
          pageTitle:'Quotation Report'
        }
      })
      .state('project_report', {
        url: "/project_report",
        templateUrl:"views/report/report.html",
        controller:'projectReportCtrl',
        data:{
          pageTitle:'Project Report'
        }
      })
      .state('job_report', {
        url: "/job_report",
        templateUrl:"views/report/report.html",
        controller:'jobReportCtrl',
        data:{
          pageTitle:'Job Report'
        }
      })
      .state('job_schedule_report', {
        url: "/job_schedule_report",
        templateUrl:"views/report/report.html",
        controller:'jobScheduleCtrl',
        data:{
          pageTitle:'Schedule Report'
        }
      })
      .state('jobs', {
          abstract: true,
          url: "/jobs",
          templateUrl: "views/common/content.html",
          data: {
              pageTitle: 'Settings'
          }
      })
      .state('jobs.job', {
        url: "/job",
        templateUrl:"views/jobs/list.php",
        controller:'jobsCtrl',
        data:{
          pageTitle:'Job'
        }
      })
       //
      // // Analytics
      .state('jobs.schedule', {
          url: "/schedule",
          controller:'scheduleCtrl',
          templateUrl: "views/schedule/lists.php",
          data: {
              pageTitle: 'Schedules'
          }
      })
      .state('jobs.jobsheet', {
          url: "/jobsheet",
          controller:'jobsheetsCtrl',
          templateUrl: "views/jobsheet/list.php",
          data: {
              pageTitle: 'Jobsheet'
          }
      })
      .state('jobs.expensesheet', {
          url: "/expensesheet",
          controller:'expsheetCtrl',
          templateUrl: "views/expensesheet/list.php",
          data: {
              pageTitle: 'Expense Sheet'
          }
      })
      .state('jobs.tasks', {
          url: "/tasks",
          controller:'taskCtrl',
          templateUrl: "views/tasks/list.php",
          data: {
              pageTitle: 'Tasks'
          }
      })
      .state('invoice', {
          url: "/invoice",
          controller:'invoiceCtrl',
          templateUrl: "views/invoice/list.php",
          data: {
              pageTitle: 'Invoice'
          }
      })
      // Interface
      .state('company_setup', {
          abstract: true,
          url: "/company_setup",
          templateUrl: "views/common/content.html",
          data: {
              pageTitle: 'Interface'
          }
      })
      .state('company_setup.profile', {
        url: "/profile",
        templateUrl:"views/company/profile.php",
        controller:'profileCtrl',
        data:{
          pageTitle:'ProfIle'
        }
      })
      .state('company_setup.branches', {
        url: "/branches",
        templateUrl:"views/branch/list.php",
        controller:'branchCtrl',
        data:{
          pageTitle:'Branches'
        }
      })
      
      .state('company_setup.departments', {
        url: "/departments",
        templateUrl:"views/department/list.php",
        controller:'departmentCtrl',
        data:{
          pageTitle:'Departments'
        }
      })
      .state('company_setup.employees', {
        url: "/employees",
        templateUrl:"views/employee/list.php",
        controller:'employeeCtrl',
        data:{
          pageTitle:'Employees'
        }
      })
      .state('company_setup.designations', {
        url: "/designations",
        templateUrl:"views/designation/list.php",
        controller:'designationCtrl',
        data:{
          pageTitle:'Designations'
        }
      })
      .state('company_setup.service', {
        url: "/service",
        templateUrl:"views/service/list.php",
        controller:'serviceCtrl',
        data:{
          pageTitle:'Servcies'
        }
      })
      .state('company_setup.customers', {
        url: "/customers",
        templateUrl:"views/customer/list.php",
        controller:'customerCtrl',
        data:{
          pageTitle:'Customers'
        }
      })
      .state('company_setup.jobsite', {
        url: "/jobsite",
        templateUrl:"views/jobsite/list.php",
        controller:'jobsiteCtrl',
        data:{
          pageTitle:'Jobsite'
        }
      })
      .state('utilities', {
          abstract: true,
          url: "/utilities",
          templateUrl: "views/common/content.html",
          data: {
              pageTitle: 'Utilities'
          }
      })
      .state('utilities.reminders', {
        url: "/reminders",
        templateUrl:"views/reminder/list.php",
        controller:'reminderCtrl',
        data:{
          pageTitle:'Reminders'
        }
      })
      .state('utilities.contactbook', {
        url: "/contactbook",
        templateUrl:"views/contactbook/list.php",
        controller:'contactCtrl',
        data:{
          pageTitle:'ContactBook'
        }
      })
      .state('settings', {
          abstract: true,
          url: "/settings",
          templateUrl: "views/common/content.html",
          data: {
              pageTitle: 'Settings'
          }
      })
      .state('settings.configuration', {
        url: "/configuration",
        templateUrl:"views/config/list.php",
        controller:'configCtrl',
        data:{
          pageTitle:'Configuration'
        }
      })
      .state('settings.role', {
        url: "/role",
        templateUrl:"views/role/userrole.php",
        controller:'roleCtrl',
        data:{
          pageTitle:'UserRole'
        }
      })

      .state('settings.user', {
        url: "/users",
        templateUrl:"views/users/users.php",
        controller:'UserCtrl',
        data:{
          pageTitle:'User'
        }
      })
      .state('settings.template', {
        url: "/template",
        templateUrl:"views/template/list.php",
        controller:'templateCtrl',
        data:{
          pageTitle:'Template'
        }
      })
         .state('settings.notification', {
        url: "/notification",
        templateUrl:"views/notification/list.php",
        controller:'notificationCtrl',
        data:{
          pageTitle:'notification'
        }
      })
      .state('settings.trash', {
        url: "/trash",
        templateUrl:"views/trash/list.php",
        controller:'trashCtrl',
        data:{
          pageTitle:'Trash'
        }
      })
      .state('access', {
        url: "/access",
        templateUrl:"views/access/access.html",
        // controller:'trashCtrl',
        data:{
          pageTitle:'Access Denied'
        }
      });
}]);

app.run(['$rootScope', '$state', 'editableOptions', function($rootScope, $state, editableOptions) {
    $rootScope.$state = $state;
    editableOptions.theme = 'bs3';
    $rootScope.timedropdown=[];
    $rootScope.selectedin = '';
    $rootScope.selectedout = '';
    // if( $scope.selecttime="Select")
    //   {
      for(var i=0;i<1440;i++)
        {
            h=parseInt(i/60);
            
            if(h<10)
            {
                h='0'+h;
            }
            m=i%60;
            if(m<10)
            {
              m='0'+m;
            }
            $rootScope.timedropdown.push(h+":"+m)
            //$("#timein").append($("<option>").attr('value',i).text(h+":"+m));
            //$("#timeout").append($("<option>").attr('value',i).text(h+":"+m));
        }
}]);
   
   