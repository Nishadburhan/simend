var app=angular.module('simDiary', [
    'ui.router',                // Angular flexible routing
    'ngSanitize',               // Angular-sanitize
    'ui.bootstrap',             // AngularJS native directives for Bootstrap
    'angular-flot',             // Flot chart
    'angular-peity',            // Peity (small) charts
    'cgNotify',                 // Angular notify
    'chart.js',                   // Angular ChartJS
    'ngAnimate',                // Angular animations
    'ui.map',                   // Ui Map for Google maps
    'ui.calendar',              // UI Calendar
    'summernote',               // Summernote plugin
    'ngGrid',                   // Angular ng Grid
    'ui.tree',                  // Angular ui Tree
    'bm.bsTour',                // Angular bootstrap tour
    'datatables',               // Angular datatables plugin
    'xeditable',                // Angular-xeditable
    'ui.select',                // AngularJS ui-select
    'ui.sortable',              // AngularJS ui-sortable
    'ui.footable',              // FooTable
    'angular-chartist',         // Chartist
    'gridshore.c3js.chart',     // C3 charts
    'datatables.buttons',       // Datatables Buttons
    'angular-ladda',            // Ladda - loading buttons
    'ui.codemirror',            // Ui Codemirror
    'cfp.loadingBar'  ,     // Loader
    'angularjs-dropdown-multiselect'
    // 'ngMessages'
]);


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
   
   
app.controller('appCtrl',['$http', '$scope', '$timeout', '$window', function($http, $scope, $timeout, $window) {
  // For iCheck purpose only
      $scope.checkOne = true;

      /**
       * Sparkline bar chart data and options used in under Profile image on left navigation panel
       */
      

      
    // $scope.flotChartData = [
    //     {
    //         label: "bar",
    //         data: [ [1, 12], [2, 14], [3, 18], [4, 24], [5, 32], [6, 22] ]
    //     }
    // ];
    
    // $scope.flotBarOptions = {
    //     series: {
    //         bars: {
    //             show: true,
    //             barWidth: 0.8,
    //             fill: true,
    //             fillColor: {
    //                 colors: [ { opacity: 0.6 }, { opacity: 0.6 } ]
    //             },
    //             lineWidth: 1
    //         }
    //     },
    //     xaxis: {
    //         tickDecimals: 0
    //     },
    //     colors: ["#62cb31"],
    //     grid: {
    //         color: "#e4e5e7",
    //         hoverable: true,
    //         clickable: true,
    //         tickColor: "#D4D4D4",
    //         borderWidth: 0,
    //         borderColor: 'e4e5e7',
    //     },
    //     legend: {
    //         show: false
    //     },
    //     tooltip: true,
    //     tooltipOpts: {
    //         content: "x: %x, y: %y"
    //     }
    // };
    //   $scope.barProfileData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 11, 4];
    //   $scope.barProfileOptions = {
    //       type: 'bar',
    //       barWidth: 7,
    //       height: '30px',
    //       barColor: '#62cb31',
    //       negBarColor: '#53ac2a'
    //   };
    //   $scope.chartIncomeData = [
    //       {
    //           label: "line",
    //           data: [ [1, 10], [2, 26], [3, 16], [4, 36], [5, 32], [6, 51] ]
    //       }
    //   ];

    //   $scope.chartIncomeOptions = {
    //       series: {
    //           lines: {
    //               show: true,
    //               lineWidth: 0,
    //               fill: true,
    //               fillColor: "#64cc34"

    //           }
    //       },
    //       colors: ["#62cb31"],
    //       grid: {
    //           show: false
    //       },
    //       legend: {
    //           show: false
    //       }
    //   };

    //   /**
    //    * Tooltips and Popover - used for tooltips in components view
    //    */
    //   $scope.dynamicTooltip = 'Hello, World!';
    //   $scope.htmlTooltip = "I\'ve been made <b>bold</b>!";
    //   $scope.dynamicTooltipText  = 'Dynamic';
    //   $scope.dynamicPopover = 'Hello, World!';
    //   $scope.dynamicPopoverTitle = 'Title';

    //   /**
    //    * Pagination - used for pagination in components view
    //    */
    //   $scope.totalItems = 64;
    //   $scope.currentPage = 4;

    //   $scope.setPage = function (pageNo) {
    //       $scope.currentPage = pageNo;
    //   };

    //   /**
    //    * Typehead - used for typehead in components view
    //    */
    //   $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    //   // Any function returning a promise object can be used to load values asynchronously
    //   $scope.getLocation = function(val) {
    //       return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {
    //           params: {
    //               address: val,
    //               sensor: false
    //           }
    //       }).then(function(response){
    //               return response.data.results.map(function(item){
    //                   return item.formatted_address;
    //               });
    //           });
    //   };

    //   /**
    //    * Rating - used for rating in components view
    //    */
    //   $scope.rate = 7;
    //   $scope.max = 10;

    //   $scope.hoveringOver = function(value) {
    //       $scope.overStar = value;
    //       $scope.percent = 100 * (value / this.max);
    //   };

    //   /**
    //    * groups - used for Collapse panels in Tabs and Panels view
    //    */
    //   $scope.groups = [
    //       {
    //           title: 'Dynamic Group Header - 1',
    //           content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. '
    //       },
    //       {
    //           title: 'Dynamic Group Header - 2',
    //           content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. '
    //       }
    //   ];

    //   $scope.oneAtATime = true;

    //   /**
    //    * Some Flot chart data and options used in Dashboard
    //    */

    //   var data1 = [ [0, 55], [1, 48], [2, 40], [3, 36], [4, 40], [5, 60], [6, 50], [7, 51] ];
    //   var data2 = [ [0, 56], [1, 49], [2, 41], [3, 38], [4, 46], [5, 67], [6, 57], [7, 59] ];

    //   $scope.chartUsersData = [data1, data2];
    //   $scope.chartUsersOptions = {
    //       series: {
    //           splines: {
    //               show: true,
    //               tension: 0.4,
    //               lineWidth: 1,
    //               fill: 0.4
    //           },
    //       },
    //       grid: {
    //           tickColor: "#f0f0f0",
    //           borderWidth: 1,
    //           borderColor: 'f0f0f0',
    //           color: '#6a6c6f'
    //       },
    //       colors: [ "#62cb31", "#efefef"],
    //   };


    //   /**
    //    * Some Pie chart data and options
    //    */

    //   $scope.PieChart = {
    //       data: [1, 5],
    //       options: {
    //           fill: ["#62cb31", "#edf0f5"]
    //       }
    //   };

    //   $scope.PieChart2 = {
    //       data: [226, 360],
    //       options: {
    //           fill: ["#62cb31", "#edf0f5"]
    //       }
    //   };
    //   $scope.PieChart3 = {
    //       data: [0.52, 1.561],
    //       options: {
    //           fill: ["#62cb31", "#edf0f5"]
    //       }
    //   };
    //   $scope.PieChart4 = {
    //       data: [1, 4],
    //       options: {
    //           fill: ["#62cb31", "#edf0f5"]
    //       }
    //   };
    //   $scope.PieChart5 = {
    //       data: [226, 134],
    //       options: {
    //           fill: ["#62cb31", "#edf0f5"]
    //       }
    //   };
    //   $scope.PieChart6 = {
    //       data: [0.52, 1.041],
    //       options: {
    //           fill: ["#62cb31", "#edf0f5"]
    //       }
    //   };

    //   $scope.BarChart = {
    //       data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
    //       options: {
    //           fill: ["#dbdbdb", "#62cb31"],
    //       }
    //   };

    //   $scope.LineChart = {
    //       data: [5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 4, 7, 3, 2, 9, 8, 7, 4, 5, 1, 2, 9, 5, 4, 7],
    //       options: {
    //           fill: '#62cb31',
    //           stroke: '#62cb31',
    //           width: 64
    //       }
    //   };


    //   $scope.stanimation = 'bounceIn';
    //   $scope.runIt = true;
    //   $scope.runAnimation = function(){
  
    //       $scope.runIt = false;
    //       $timeout(function(){
    //           $scope.runIt = true;
    //       }, 100)

    //   };
}]);

/**
 * HOMER - Responsive Admin Theme
 * Copyright 2015 Webapplayers.com
 *
 */


  app.directive('findTotem',function() {
    return {
        restrict:'A',
        require:'ngModel',
        scope:{
          unit:'=',
          rate:'=',
          freq:'='
        },
        link: function(scope, element, attrs, ngModel) {
          // scope.$watch("unit", function(u) {
            element.bind('keydown', function(event) {
  
              event.preventDefault();
            });
          // });
        }
  
      };
  });

  app.directive('parseNum', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
          ngModel.$parsers.push(function(value) {
            return '' + value;
          });
          ngModel.$formatters.push(function(value) {
            return parseFloat(value);
          });
        }
      };
  });
  
  app.directive('convertToNumber', function() {
    return {
    require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            ngModel.$parsers.push(function(val) {
            return val != null ? parseInt(val, 10) : null;
            });
            ngModel.$formatters.push(function(val) {
            return val != null ? '' + val : null;
            });
        }
    };
  });

  
/**
 * pageTitle - Directive for set Page title - mata title
 */

app.directive('pageTitle',['$rootScope', '$timeout', function($rootScope, $timeout) {
    return {
        link: function(scope, element) {
            var listener = function(event, toState, toParams, fromState, fromParams) {
                // Default title
                var title = 'SIM | Service Industry Management System';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle) title = 'SIM | ' + toState.data.pageTitle;
                $timeout(function() {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    }
}]);

/**
 * sideNavigation - Directive for run metsiMenu on sidebar navigation
 */

app.directive('sideNavigation', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            element.metisMenu();

            // Colapse menu in mobile mode after click on element
            var menuElement = $('#side-menu a:not([href$="\\#"])');
            menuElement.click(function(){

                if ($(window).width() < 769) {
                    $("body").toggleClass("show-sidebar");
                }
            });

            // Check if sidebar scroll is enabled
            if($('body').hasClass('sidebar-scroll')) {
                var navigation = element.parent();
                navigation.slimScroll({
                    height: '100%',
                    opacity: 0.3,
                    size : 0,
                    wheelStep : 5,
                    allowPageScroll : true,
                });
            }


        }
    };
}]);

/**
 * minimalizaSidebar - Directive for minimalize sidebar
 */
app.directive('minimalizaMenu', ['$rootScope', function($rootScope) {
    return {
        restrict: 'EA',
        template: '<div class="header-link hide-menu" ng-click="minimalize()"><i class="fa fa-bars"></i></div>',
        controller: function ($scope, $element) {

            $scope.minimalize = function () {
            if ($(window).width() < 769) {
                    $("body").toggleClass("show-sidebar");
                } else {
                    $("body").toggleClass("hide-sidebar");
                }
            }
        }
    };
}]);



/**
 * sparkline - Directive for Sparkline chart
 */
app.directive('sparkline', function() {
    return {
        restrict: 'A',
        scope: {
            sparkData: '=',
            sparkOptions: '=',
        },
        link: function (scope, element, attrs) {
            scope.$watch(scope.sparkData, function () {
                render();
            });
            scope.$watch(scope.sparkOptions, function(){
                render();
            });
            var render = function () {
                $(element).sparkline(scope.sparkData, scope.sparkOptions);
            };
        }
    }
});


/**
 * icheck - Directive for custom checkbox icheck
 */

app.directive('icheck', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function($scope, element, $attrs, ngModel) {
            return $timeout(function() {
                var value;
                value = $attrs['value'];

                $scope.$watch($attrs['ngModel'], function(newValue){
                    $(element).iCheck('update');
                })

                return $(element).iCheck({
                    checkboxClass: 'icheckbox_square-green',
                    radioClass: 'iradio_square-green'

                }).on('ifChanged', function(event) {
                        if ($(element).attr('type') === 'checkbox' && $attrs['ngModel']) {
                            $scope.$apply(function() {
                                return ngModel.$setViewValue(event.target.checked);
                            });
                        }
                        if ($(element).attr('type') === 'radio' && $attrs['ngModel']) {
                            return $scope.$apply(function() {
                                return ngModel.$setViewValue(value);
                            });
                        }
                    });
            });
        }
    };
}]);



/**
 * panelTools - Directive for panel tools elements in right corner of panel
 */
app.directive('panelTools',['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/panel_tools.html',
        controller: function ($scope, $element) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var hpanel = $element.closest('div.hpanel');
                var icon = $element.find('i:first');
                var body = hpanel.find('div.panel-body');
                var footer = hpanel.find('div.panel-footer');
                body.slideToggle(300);
                footer.slideToggle(200);
                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                hpanel.toggleClass('').toggleClass('panel-collapse');
                $timeout(function () {
                    hpanel.resize();
                    hpanel.find('[id^=map-]').resize();
                }, 50);
            },

            // Function for close ibox
            $scope.closebox = function () {
                var hpanel = $element.closest('div.hpanel');
                hpanel.remove();
            }

        }
    };
}]);

/**
 * panelToolsFullscreen - Directive for panel tools elements in right corner of panel with fullscreen option
 */
app.directive('panelToolsFullscreen', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        scope: true,
        templateUrl: 'views/common/panel_tools_fullscreen.html',
        controller: function ($scope, $element) {
            // Function for collapse ibox
            $scope.showhide = function () {
                var hpanel = $element.closest('div.hpanel');
                var icon = $element.find('i:first');
                var body = hpanel.find('div.panel-body');
                var footer = hpanel.find('div.panel-footer');
                body.slideToggle(300);
                footer.slideToggle(200);
                // Toggle icon from up to down
                icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                hpanel.toggleClass('').toggleClass('panel-collapse');
                $timeout(function () {
                    hpanel.resize();
                    hpanel.find('[id^=map-]').resize();
                }, 50);
            };

            // Function for close ibox
            $scope.closebox = function () {
                var hpanel = $element.closest('div.hpanel');
                hpanel.remove();
                if($('body').hasClass('fullscreen-panel-mode')) { $('body').removeClass('fullscreen-panel-mode');}
            };

            // Function for fullscreen
            $scope.fullscreen = function () {
                var hpanel = $element.closest('div.hpanel');
                var icon = $element.find('i:first');
                $('body').toggleClass('fullscreen-panel-mode');
                icon.toggleClass('fa-expand').toggleClass('fa-compress');
                hpanel.toggleClass('fullscreen');
                setTimeout(function() {
                    $(window).trigger('resize');
                }, 100);
            }

        }
    };
}]);

/**
 * smallHeader - Directive for page title panel
 */
app.directive('smallHeader', function() {
    return {
        restrict: 'A',
        scope:true,
        controller: function ($scope, $element) {
            $scope.small = function() {
                var icon = $element.find('i:first');
                var breadcrumb  = $element.find('#hbreadcrumb');
                $element.toggleClass('small-header');
                breadcrumb.toggleClass('m-t-lg');
                icon.toggleClass('fa-arrow-up').toggleClass('fa-arrow-down');
            }
        }
    }
});

app.directive('animatePanel',['$timeout', '$state', function($timeout, $state) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            //Set defaul values for start animation and delay
            var startAnimation = 0;
            var delay = 0.06;   // secunds
            var start = Math.abs(delay) + startAnimation;

            // Store current state where directive was start
            var currentState = $state.current.name;

            // Set default values for attrs
            if(!attrs.effect) { attrs.effect = 'zoomIn'};
            if(attrs.delay) { delay = attrs.delay / 10 } else { delay = 0.06 };
            if(!attrs.child) { attrs.child = '.row > div'} else {attrs.child = "." + attrs.child};

            // Get all visible element and set opactiy to 0
            var panel = element.find(attrs.child);
            panel.addClass('opacity-0');

            // Count render time
            var renderTime = panel.length * delay * 1000 + 700;

            // Wrap to $timeout to execute after ng-repeat
            $timeout(function(){

                // Get all elements and add effect class
                panel = element.find(attrs.child);
                panel.addClass('stagger').addClass('animated-panel').addClass(attrs.effect);

                var panelsCount = panel.length + 10;
                var animateTime = (panelsCount * delay * 10000) / 10;

                // Add delay for each child elements
                panel.each(function (i, elm) {
                    start += delay;
                    var rounded = Math.round(start * 10) / 10;
                    $(elm).css('animation-delay', rounded + 's');
                    // Remove opacity 0 after finish
                    $(elm).removeClass('opacity-0');
                });

                // Clear animation after finish
                $timeout(function(){
                    $('.stagger').css('animation', '');
                    $('.stagger').removeClass(attrs.effect).removeClass('animated-panel').removeClass('stagger');
                    panel.resize();
                }, animateTime)

            });



        }
    }
}]);

app.directive('landingScrollspy', function() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.scrollspy({
                target: '.navbar-fixed-top',
                offset: 80
            });
        }
    }
})


/**
 * clockPicker - Directive for clock picker plugin
 */
app.directive('clockPicker', function() {
    return {
        restrict: 'A',
        link: function(scope, element) {
            element.clockpicker();
        }
    };
});

app.directive('dateTimePicker', function() {
    return {
        require: '?ngModel',
        restrict: 'AE',
        scope: {
            pick12HourFormat: '@',
            language: '@',
            useCurrent: '@',
            location: '@'
        },
        link: function (scope, elem, attrs) {
            elem.datetimepicker({
                pick12HourFormat: scope.pick12HourFormat,
                language: scope.language,
                useCurrent: scope.useCurrent
            })

            //Local event change
            elem.on('blur', function () {

                // For test
                //console.info('this', this);
                //console.info('scope', scope);
                //console.info('attrs', attrs);


                /*// returns moments.js format object
                 scope.dateTime = new Date(elem.data("DateTimePicker").getDate().format());
                 // Global change propagation
                 $rootScope.$broadcast("emit:dateTimePicker", {
                 location: scope.location,
                 action: 'changed',
                 dateTime: scope.dateTime,
                 example: scope.useCurrent
                 });
                 scope.$apply();*/
            })
        }
    };
});

app.directive('touchSpin', function() {
    return {
        restrict: 'A',
        scope: {
            spinOptions: '=',
        },
        link: function (scope, element, attrs) {
            scope.$watch(scope.spinOptions, function(){
                render();
            });
            var render = function () {
                $(element).TouchSpin(scope.spinOptions);
            };
        }
    }
});

app.directive('datepicker', function() {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, elem, attrs, ngModelCtrl) {
          var updateModel = function (dateText) {
            scope.$apply(function () {
              ngModelCtrl.$setViewValue(dateText);
            });
          };
          var options = {
            dateFormat: "yy-mm-dd",
            onSelect: function (dateText) {
              updateModel(dateText);
            }
          };
          elem.datepicker(options);
        }
    }
});

app.directive('redirector', ['$state','$rootScope', function($state,$rootScope) {
    return{
        restrict: 'AC',
        scope :{module:'='},
        link: function(scope, elem) {
            elem.bind('click', function() {
                // scope.$root.statusvalue=true;
                console.log(scope.module);
                angular.element(elem).addClass('active');
                console.log(scope.module);
                switch (scope.module) {
                    case 163:
                            $state.go('quotation');
                        break;
                    case 165:
                            $state.go('project');
                        break;
                    case  167:
                           
                            $state.go('jobs.job');
                            scope.$root.statusvalue=true;
                            
                        break;
                    case  191:
                            $state.go('invoice');
                        break;
                }
            });
        }
      }
}]);



app.directive('permissionchange', ['$state','AccessFactory','Data','$rootScope', function($state,AccessFactory,Data,$rootScope) {
    return{
        restrict: 'AC',
        scope :{module:'='},

        link: function(scope, elem) {
            elem.bind('click', function() {
                scope.$root.disabled=false;
                // console.log( scope.$root.disabled)
                // scope.$root.deletehide=false;
                AccessFactory.Perission(scope.module).then(function success(response) {
                    console.log(Data.get(response))
                if(Data.get(response)==0){
                    $state.go('access');
                }
                if(Data.get(response)==1){
                    // scope.$root.readresponse=Data.get(response);
                    scope.$root.disabled=true;
              
                }
                if(Data.get(response)==2){
                    // scope.$root.writeresponse=Data.get(response);
                    // scope.$root.data=true;
                    scope.$root.deletehide=true;
                  
                }
                if(Data.get(response)==3){
                   
                    scope.$root.disabled=false;
                    scope.$root.deletehide=false;
                }
                }, function error(response) {
            
                });


                // scope.$apply();
            });
        }
      }
}]);

// /**
//  *
//  * propsFilter
//  *
//  */


// app.filter('propsFilter', propsFilter);
app.filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    }
});


app.filter('fSum', function () {
  return function(data, prop) {
    var total=0;
    for (i=0; i<data.length; i++) {
       total += Number(data[i].esdamount);
    }
    return total;

  }
});

app.filter('capitalize', function() {
  return function(token) {
      return token.charAt(0).toUpperCase() + token.slice(1);
   }
});

app.filter('sumByColumn', function() {
  return function(collection, column) {
    var total = 0;
      
        collection.forEach(function (item) {
          total += parseInt(item[column]);
        });

      return total;
  }
});
app.filter('formatTime', function () {
    return function (time, format) {

      m = time % 60;
     h = (time-m)/60;
   var intime = h.toString() + ":" + (m<10?"0":"") + m.toString();

     
        return intime, format || 'h:mm';
    };

    
    })

    app.filter('timeconvertin', function () {
        return function(time)    {
            Number(time);
            m = time % 60;
            h = (time-m)/60;
            tt = 'AM';
            if(h>11){
                tt = 'PM';
                if(h > 12)
                    h = h % 12;
            }
            var intime = (h<10 ? "0" : "") + h.toString() + ":" + (m<10 ? "0" : "") + m.toString() + " " + tt;
            return intime;
        }
    })
    app.filter('stringnumber', function () {
        return function(data)   {
            var value=  Number(data);
            // Number(time);
            // m = time % 60;
            // h = (time-m)/60;
            // var intime = h.toString() + ":" + (m<10?"0":"") + m.toString();
            return value;
        }
    });

    app.filter('toWords', function() {
        return function(s) {
            var th = ['','Thousand','Million', 'Billion','Trillion'];
            var dg = ['Zero','One','Two','Three','Four', 'Five','Six','Seven','Eight','Nine']; 
            var tn = ['Ten','Eleven','Twelve','Thirteen', 'Fourteen','Fifteen','Sixteen', 'Seventeen','Eighteen','Nineteen'];
            var tw = ['Twenty','Thirty','Forty','Fifty', 'Sixty','Seventy','Eighty','Ninety']; 

            s = s.toString(); 
            s = s.replace(/[\, ]/g,''); 
            if (s != parseFloat(s)) return 'not a number'; 
            var x = s.indexOf('.'); 
            if (x == -1) x = s.length; 
            if (x > 9) return 'too big'; 
            var n = s.split(''); 
            var str = ''; 
            var sk = 0; 
            for (var i=0; i < x; i++) 
            {
                if ((x-i)%3==2) 
                {
                    if (n[i] == '1') 
                    {
                        str += tn[Number(n[i+1])] + ' '; 
                        i++; 
                        sk=1;
                    }
                    else if (n[i]!=0) 
                    {
                        str += tw[n[i]-2] + ' ';
                        sk=1;
                    }
                }
                else if (n[i]!=0) 
                {
                    str += dg[n[i]] +' '; 
                    if ((x-i)%3==0) str += 'hundred ';
                    sk=1;
                }
        
                if ((x-i)%3==1)
                {
                    if (sk) str += th[(x-i-1)/3] + ' ';
                    sk=0;
                }
            }
            if (x != s.length)
            {
                var y = s.length; 
                str += 'point '; 
                for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';
            }
            return str.replace(/\s+/g,' ');
        }
    })




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

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
    
        var _angularjsDropdownMultiselect = __webpack_require__(1);
    
        var _angularjsDropdownMultiselect2 = _interopRequireDefault(_angularjsDropdownMultiselect);
    
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
        angular.module('angularjs-dropdown-multiselect', []).directive('dmDropdownStaticInclude', ["$compile", function ($compile) {
            'ngInject';
    
            return function directive(scope, element, attrs) {
                var template = attrs.dmDropdownStaticInclude;
                var contents = element.html(template).contents();
                $compile(contents)(scope);
            };
        }]).directive('ngDropdownMultiselect', _angularjsDropdownMultiselect2.default);
    
    /***/ },
    /* 1 */
    /***/ function(module, exports, __webpack_require__) {
    
        'use strict';
    
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = dropdownMultiselectDirective;
    
        var _angularjsDropdownMultiselect = __webpack_require__(2);
    
        var _angularjsDropdownMultiselect2 = _interopRequireDefault(_angularjsDropdownMultiselect);
    
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
    
        function dropdownMultiselectDirective() {
            return {
                restrict: 'AE',
                scope: {
                    selectedModel: '=',
                    options: '=',
                    extraSettings: '=',
                    events: '=',
                    searchFilter: '=?',
                    translationTexts: '=',
                    disabled: '='
                },
                transclude: {
                    toggleDropdown: '?toggleDropdown'
                },
                controller: _angularjsDropdownMultiselect2.default,
                templateUrl: 'app/component/angularjs-dropdown-multiselect.html'
            };
        }
    
    /***/ },
    /* 2 */
    /***/ function(module, exports) {
    
        'use strict';
    
        dropdownMultiselectController.$inject = ["$scope", "$element", "$filter", "$document"];
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = dropdownMultiselectController;
        /*
            eslint no-param-reassign: [
                "error",
                {
                    "props": true,
                    "ignorePropertyModificationsFor": [
                        "$scope"
                    ]
                }
            ]
        */
    
        function contains(collection, target) {
            var containsTarget = false;
            collection.some(function (object) {
                if (object === target) {
                    containsTarget = true;
                    return true;
                }
                return false;
            });
            return containsTarget;
        }
    
        function getIndexByProperty(collection, objectToFind, property) {
            var index = -1;
            collection.some(function (option, ind) {
                if (option[property] === objectToFind[property]) {
                    index = ind;
                    return true;
                }
                return false;
            });
            return index;
        }
    
        function dropdownMultiselectController($scope, $element, $filter, $document) {
            'ngInject';
    
            var $dropdownTrigger = $element.children()[0];
            var externalEvents = {
                onItemSelect: angular.noop,
                onItemDeselect: angular.noop,
                onSelectAll: angular.noop,
                onDeselectAll: angular.noop,
                onInitDone: angular.noop,
                onMaxSelectionReached: angular.noop,
                onSelectionChanged: angular.noop,
                onClose: angular.noop
            };
    
            var settings = {
                dynamicTitle: true,
                scrollable: false,
                scrollableHeight: '300px',
                closeOnBlur: true,
                displayProp: 'label',
                enableSearch: false,
                clearSearchOnClose: false,
                selectionLimit: 0,
                showCheckAll: true,
                showUncheckAll: true,
                showEnableSearchButton: false,
                closeOnSelect: false,
                buttonClasses: 'btn btn-default',
                closeOnDeselect: false,
                groupBy: undefined,
                checkBoxes: false,
                groupByTextProvider: null,
                smartButtonMaxItems: 0,
                smartButtonTextConverter: angular.noop,
                styleActive: false,
                selectedToTop: false,
                keyboardControls: false,
                template: '{{getPropertyForObject(option, settings.displayProp)}}',
                searchField: '$',
                showAllSelectedText: false
            };
    
            var texts = {
                checkAll: 'Check All',
                uncheckAll: 'Uncheck All',
                selectionCount: 'checked',
                selectionOf: '/',
                searchPlaceholder: 'Search...',
                buttonDefaultText: 'Select',
                dynamicButtonTextSuffix: 'checked',
                disableSearch: 'Disable search',
                enableSearch: 'Enable search',
                selectGroup: 'Select all:',
                allSelectedText: 'All'
            };
    
            var input = {
                // searchFilter: $scope.searchFilter || ''
            };
    
            angular.extend(settings, $scope.extraSettings || []);
            angular.extend(externalEvents, $scope.events || []);
            angular.extend(texts, $scope.translationTexts);
    
            if (settings.closeOnBlur) {
                $document.on('click', function (e) {
                    if ($scope.open) {
                        var target = e.target.parentElement;
                        var parentFound = false;
    
                        while (angular.isDefined(target) && target !== null && !parentFound) {
                            if (!!target.className.split && contains(target.className.split(' '), 'multiselect-parent') && !parentFound) {
                                if (target === $dropdownTrigger) {
                                    parentFound = true;
                                }
                            }
                            target = target.parentElement;
                        }
    
                        if (!parentFound) {
                            $scope.$apply(function () {
                                $scope.close();
                            });
                        }
                    }
                });
            }
    
            angular.extend($scope, {
                toggleDropdown: toggleDropdown,
                checkboxClick: checkboxClick,
                externalEvents: externalEvents,
                settings: settings,
                texts: texts,
                input: input,
                close: close,
                selectCurrentGroup: selectCurrentGroup,
                getGroupLabel: getGroupLabel,
                getButtonText: getButtonText,
                getPropertyForObject: getPropertyForObject,
                selectAll: selectAll,
                deselectAll: deselectAll,
                setSelectedItem: setSelectedItem,
                isChecked: isChecked,
                keyDownLink: keyDownLink,
                keyDownSearchDefault: keyDownSearchDefault,
                keyDownSearch: keyDownSearch,
                getFilter: getFilter,
                toggleSearch: toggleSearch,
                keyDownToggleSearch: keyDownToggleSearch,
                orderFunction: orderFunction
            });
    
            $scope.externalEvents.onInitDone();
    
            function focusFirstOption() {
                setTimeout(function () {
                    var elementToFocus = angular.element($element)[0].querySelector('.option');
                    if (angular.isDefined(elementToFocus) && elementToFocus != null) {
                        elementToFocus.focus();
                    }
                }, 0);
            }
    
            function toggleDropdown() {

                if ($scope.open) {
                    $scope.close();
                } else {
                    $scope.open = true;
                }
                if ($scope.settings.keyboardControls) {
                    if ($scope.open) {
                        if ($scope.settings.selectionLimit === 1 && $scope.settings.enableSearch) {
                            setTimeout(function () {
                                angular.element($element)[0].querySelector('.searchField').focus();
                            }, 0);
                        } else {
                            focusFirstOption();
                        }
                    }
                }
                if ($scope.settings.enableSearch) {
                    if ($scope.open) {
                        setTimeout(function () {
                            angular.element($element)[0].querySelector('.searchField').focus();
                        }, 0);
                    }
                }
            }
    
            function checkboxClick($event, option) {
                $scope.setSelectedItem(option, false, true);
                $event.stopImmediatePropagation();
            }
    
            function close() {
                $scope.open = false;
                $scope.input.searchFilter = $scope.settings.clearSearchOnClose ? '' : $scope.input.searchFilter;
                $scope.externalEvents.onClose();
            }
    
            function selectCurrentGroup(currentGroup) {
                $scope.selectedModel.splice(0, $scope.selectedModel.length);
                $scope.options.forEach(function (item) {
                    if (item[$scope.settings.groupBy] === currentGroup) {
                        $scope.setSelectedItem(item, false, false);
                    }
                });
                $scope.externalEvents.onSelectionChanged();
            }
    
            function getGroupLabel(groupValue) {
                if ($scope.settings.groupByTextProvider !== null) {
                    return $scope.settings.groupByTextProvider(groupValue);
                }
    
                return groupValue;
            }
    
            function textWidth(text) {
                var $btn = $element.find('button');
                var canvas = document.createElement('canvas');
                var ctx = canvas.getContext('2d');
                ctx.font = $btn.css('font-size') + $btn.css('font-family');
                // http://stackoverflow.com/questions/38823353/chrome-canvas-2d-context-measuretext-giving-me-weird-results
                ctx.originalFont = $btn.css('font-size') + $btn.css('font-family');
                ctx.fillStyle = '#000000';
                return ctx.measureText(text).width;
            }
    
            function getButtonText() {
                if ($scope.settings.dynamicTitle && $scope.selectedModel && $scope.selectedModel.length > 0) {
                    if (angular.isFunction($scope.settings.smartButtonTextProvider)) {
                        return $scope.settings.smartButtonTextProvider($scope.selectedModel);
                    }
    
                    if ($scope.settings.smartButtonMaxItems > 0) {
                        var paddingWidth = 12 * 2;
                        var borderWidth = 1 * 2;
                        var dropdownIconWidth = 8;
                        var widthLimit = $element[0].offsetWidth - paddingWidth - borderWidth - dropdownIconWidth;
    
                        var itemsText = [];
    
                        angular.forEach($scope.options, function (optionItem) {
                            if ($scope.isChecked(optionItem)) {
                                var displayText = $scope.getPropertyForObject(optionItem, $scope.settings.displayProp);
                                var converterResponse = $scope.settings.smartButtonTextConverter(displayText, optionItem);
    
                                itemsText.push(converterResponse || displayText);
                            }
                        });
    
                        if ($scope.selectedModel.length > $scope.settings.smartButtonMaxItems) {
                            itemsText = itemsText.slice(0, $scope.settings.smartButtonMaxItems);
                            itemsText.push('...');
                        }
    
                        var result = itemsText.join(', ');
                        var index = result.length - 4;
                        if ($element[0].offsetWidth === 0) {
                            return result;
                        }
                        if (widthLimit <= textWidth('...')) {
                            return '...';
                        }
                        while (textWidth(result) > widthLimit) {
                            if (itemsText[itemsText.length - 1] !== '...') {
                                itemsText.push('...');
                                result = result + '...';
                                index = result.length - 4;
                            }
                            result = result.slice(0, index) + result.slice(index + 1);
                            index -= 1;
                        }
    
                        return result;
                    }
                    var totalSelected = angular.isDefined($scope.selectedModel) ? $scope.selectedModel.length : 0;
    
                    if (totalSelected === 0) {
                        return $scope.texts.buttonDefaultText;
                    }
    
                    if ($scope.settings.showAllSelectedText && totalSelected === $scope.options.length) {
                        return $scope.texts.allSelectedText;
                    }
    
                    return totalSelected + ' ' + $scope.texts.dynamicButtonTextSuffix;
                }
                return $scope.texts.buttonDefaultText;
            }
    
            function getPropertyForObject(object, property) {
                if (angular.isDefined(object) && Object.prototype.hasOwnProperty.call(object, property)) {
                    return object[property];
                }
    
                return undefined;
            }
    
            function selectAll() {
                $scope.deselectAll(true);
                $scope.externalEvents.onSelectAll();
    
                var searchResult = $filter('filter')($scope.options, $scope.getFilter($scope.input.searchFilter));
                angular.forEach(searchResult, function (value) {
                    $scope.setSelectedItem(value, true, false);
                });
                $scope.externalEvents.onSelectionChanged();
                $scope.selectedGroup = null;
            }
    
            function deselectAll() {
                var dontSendEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    
                if (!dontSendEvent) {
                    $scope.externalEvents.onDeselectAll();
                }
    
                $scope.selectedModel.splice(0, $scope.selectedModel.length);
                if (!dontSendEvent) {
                    $scope.externalEvents.onSelectionChanged();
                }
                $scope.selectedGroup = null;
            }
    
            function setSelectedItem(option) {
                var dontRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var fireSelectionChange = arguments[2];
    
                var exists = void 0;
                var indexOfOption = void 0;
                if (angular.isDefined(settings.idProperty)) {
                    exists = getIndexByProperty($scope.selectedModel, option, settings.idProperty) !== -1;
                    indexOfOption = getIndexByProperty($scope.selectedModel, option, settings.idProperty);
                } else {
                    exists = $scope.selectedModel.indexOf(option) !== -1;
                    indexOfOption = $scope.selectedModel.indexOf(option);
                }
    
                if (!dontRemove && exists) {
                    $scope.selectedModel.splice(indexOfOption, 1);
                    $scope.externalEvents.onItemDeselect(option);
                    if ($scope.settings.closeOnDeselect) {
                        $scope.close();
                    }
                } else if (!exists && ($scope.settings.selectionLimit === 0 || $scope.selectedModel.length < $scope.settings.selectionLimit)) {
                    $scope.selectedModel.push(option);
                    if (fireSelectionChange) {
                        $scope.externalEvents.onItemSelect(option);
                    }
                    if ($scope.settings.closeOnSelect) {
                        $scope.close();
                    }
                    if ($scope.settings.selectionLimit > 0 && $scope.selectedModel.length === $scope.settings.selectionLimit) {
                        $scope.externalEvents.onMaxSelectionReached();
                    }
                } else if ($scope.settings.selectionLimit === 1 && !exists && $scope.selectedModel.length === $scope.settings.selectionLimit) {
                    $scope.selectedModel.splice(0, 1);
                    $scope.selectedModel.push(option);
                    if (fireSelectionChange) {
                        $scope.externalEvents.onItemSelect(option);
                    }
                    if ($scope.settings.closeOnSelect) {
                        $scope.close();
                    }
                }
                if (fireSelectionChange) {
                    $scope.externalEvents.onSelectionChanged();
                }
                $scope.selectedGroup = null;
            }
    
            function isChecked(option) {
                if (angular.isDefined(settings.idProperty)) {
                    return getIndexByProperty($scope.selectedModel, option, settings.idProperty) !== -1;
                }
                return $scope.selectedModel.indexOf(option) !== -1;
            }
    
            function keyDownLink(event) {
         
                var sourceScope = angular.element(event.target).scope();
                var nextOption = void 0;
                var parent = event.target.parentNode;
                if (!$scope.settings.keyboardControls) {
                    return;
                }
                if (event.keyCode === 13 || event.keyCode === 32) {
                    // enter
                    event.preventDefault();
                    if (sourceScope.option) {
                        $scope.setSelectedItem(sourceScope.option, false, true);
                    } else if (event.target.id === 'deselectAll') {
                        $scope.deselectAll();
                    } else if (event.target.id === 'selectAll') {
                        $scope.selectAll();
                    }
                } else if (event.keyCode === 38) {
                    // up arrow
                    event.preventDefault();
                    if (parent.previousElementSibling) {
                        nextOption = parent.previousElementSibling.querySelector('a') || parent.previousElementSibling.querySelector('input');
                    }
                    while (!nextOption && !!parent) {
                        parent = parent.previousElementSibling;
                        if (parent) {
                            nextOption = parent.querySelector('a') || parent.querySelector('input');
                        }
                    }
                    if (nextOption) {
                        nextOption.focus();
                    }
                } else if (event.keyCode === 40) {
                    // down arrow
                    event.preventDefault();
                    if (parent.nextElementSibling) {
                        nextOption = parent.nextElementSibling.querySelector('a') || parent.nextElementSibling.querySelector('input');
                    }
                    while (!nextOption && !!parent) {
                        parent = parent.nextElementSibling;
                        if (parent) {
                            nextOption = parent.querySelector('a') || parent.querySelector('input');
                        }
                    }
                    if (nextOption) {
                        nextOption.focus();
                    }
                } else if (event.keyCode === 27) {
                    event.preventDefault();
    
                    $scope.toggleDropdown();
                }
            }
    
            function keyDownSearchDefault(event) {
                var parent = event.target.parentNode.parentNode;
                var nextOption = void 0;
                if (!$scope.settings.keyboardControls) {
                    return;
                }
                if (event.keyCode === 9 || event.keyCode === 40) {
                    // tab
                    event.preventDefault();
                    focusFirstOption();
                } else if (event.keyCode === 38) {
                    event.preventDefault();
                    if (parent.previousElementSibling) {
                        nextOption = parent.previousElementSibling.querySelector('a') || parent.previousElementSibling.querySelector('input');
                    }
                    while (!nextOption && !!parent) {
                        parent = parent.previousElementSibling;
                        if (parent) {
                            nextOption = parent.querySelector('a') || parent.querySelector('input');
                        }
                    }
                    if (nextOption) {
                        nextOption.focus();
                    }
                } else if (event.keyCode === 27) {
                    event.preventDefault();
    
                    $scope.toggleDropdown();
                }
            }
    
            function keyDownSearch(event, searchFilter) {
                var searchResult = void 0;
                if (!$scope.settings.keyboardControls) {
                    return;
                }
                if (event.keyCode === 13) {
                    if ($scope.settings.selectionLimit === 1 && $scope.settings.enableSearch) {
                        searchResult = $filter('filter')($scope.options, $scope.getFilter(searchFilter));
                        if (searchResult.length === 1) {
                            $scope.setSelectedItem(searchResult[0], false, true);
                        }
                    } else if ($scope.settings.enableSearch) {
                        $scope.selectAll();
                    }
                }
            }
    
            function getFilter(searchFilter) {
                var filter = {};
                filter[$scope.settings.searchField] = searchFilter;
                return filter;
            }
    
            function toggleSearch($event) {
                if ($event) {
                    $event.stopPropagation();
                }
                $scope.settings.enableSearch = !$scope.settings.enableSearch;
                if (!$scope.settings.enableSearch) {
                    $scope.input.searchFilter = '';
                }
            }
    
            function keyDownToggleSearch() {
                if (!$scope.settings.keyboardControls) {
                    return;
                }
                if (event.keyCode === 13) {
                    $scope.toggleSearch();
                    if ($scope.settings.enableSearch) {
                        setTimeout(function () {
                            angular.element($element)[0].querySelector('.searchField').focus();
                        }, 0);
                    } else {
                        focusFirstOption();
                    }
                }
            }
    
            function orderFunction(object1, object2) {
                if (angular.isUndefined(object2)) {
                    return -1;
                }
                if (angular.isUndefined(object1)) {
                    return 1;
                }
                if (object1.type !== 'object' || object2.type !== 'object') {
                    return object1.index < object2.index ? -1 : 1;
                }
                var v1 = object1.value;
                var v2 = object2.value;
                // first order by group
                if ($scope.settings.groupBy) {
                    if (v1[$scope.settings.groupBy] !== v2[$scope.settings.groupBy]) {
                        if (v1[$scope.settings.groupBy] < v2[$scope.settings.groupBy]) {
                            return 1;
                        }
                        return -1;
                    }
                }
                if (!$scope.settings.selectedToTop) {
                    return $scope.options.indexOf(v1) < $scope.options.indexOf(v2) ? -1 : 1;
                }
                // then order selected to top
                if (!$scope.isChecked(v1) && !$scope.isChecked(v2) || $scope.isChecked(v1) && $scope.isChecked(v2)) {
                    return $scope.options.indexOf(v1) < $scope.options.indexOf(v2) ? -1 : 1;
                }
                if ($scope.isChecked(v1)) {
                    return -1;
                }
                return 1;
            }
        }
    
    /***/ }
    /******/ ]);
    angular.module("angularjs-dropdown-multiselect").run(["$templateCache", function($templateCache) {
        $templateCache.put("app/component/angularjs-dropdown-multiselect.html","<div class=\"multiselect-parent btn-group dropdown-multiselect\" ng-class=\"{open: open}\"><div ng-transclude=toggleDropdown ng-click=toggleDropdown()><button ng-disabled=disabled type=button class=dropdown-toggle ng-class=settings.buttonClasses>{{getButtonText()}}&nbsp;<span class=caret></span></button></div><ul class=\"dropdown-menu dropdown-menu-form\" ng-if=open ng-style=\"{display: open ? \'block\' : \'none\', height : settings.scrollable ? settings.scrollableHeight : \'auto\', overflow: \'auto\' }\"><li ng-if=\"settings.showCheckAll && settings.selectionLimit === 0\"><a ng-keydown=keyDownLink($event) data-ng-click=selectAll() tabindex=-1 id=selectAll><span class=\"glyphicon glyphicon-ok\"></span> {{texts.checkAll}}</a></li><li ng-if=settings.showUncheckAll><a ng-keydown=keyDownLink($event) data-ng-click=deselectAll(); tabindex=-1 id=deselectAll><span class=\"glyphicon glyphicon-remove\"></span> {{texts.uncheckAll}}</a></li><li ng-if=\"settings.selectByGroups && ((settings.showCheckAll && settings.selectionLimit > 0) || settings.showUncheckAll)\" class=divider></li><li ng-repeat=\"currentGroup in settings.selectByGroups track by $index\" ng-click=selectCurrentGroup(currentGroup)><a ng-class=\"{\'dropdown-selected-group\': selectedGroup === currentGroup}\" tabindex=-1>{{::texts.selectGroup}} {{::getGroupLabel(currentGroup)}}</a></li><li ng-if=\"settings.selectByGroups && settings.showEnableSearchButton\" class=divider></li><li ng-if=\"settings.showEnableSearchButton && settings.enableSearch\"><a ng-keydown=\"keyDownLink($event); keyDownToggleSearch();\" ng-click=toggleSearch($event); tabindex=-1>{{texts.disableSearch}}</a></li><li ng-if=\"settings.showEnableSearchButton && !settings.enableSearch\"><a ng-keydown=\"keyDownLink($event); keyDownToggleSearch();\" ng-click=toggleSearch($event); tabindex=-1>{{texts.enableSearch}}</a></li><li ng-if=\"(settings.showCheckAll && settings.selectionLimit > 0) || settings.showUncheckAll || settings.showEnableSearchButton\" class=divider></li><li ng-if=settings.enableSearch class=divider></li><li ng-if=settings.groupBy ng-repeat-start=\"option in orderedItems = ( options | filter:getFilter(input.searchFilter) | orderBy:\'\':false:orderFunction)\" ng-show=\"getPropertyForObject(option, settings.groupBy) !== getPropertyForObject(orderedItems[$index - 1], settings.groupBy)\" role=presentation class=dropdown-header>{{ getGroupLabel(getPropertyForObject(option, settings.groupBy)) }}</li><li ng-if=settings.groupBy ng-class=\"{\'active\': isChecked(option) && settings.styleActive}\" ng-repeat-end role=presentation><a ng-keydown=\"option.disabled || keyDownLink($event)\" role=menuitem class=option tabindex=-1 ng-click=\"option.disabled || setSelectedItem(option, false, true)\" ng-disabled=option.disabled><div ng-if=settings.checkBoxes class=checkbox><label><input class=checkboxInput type=checkbox ng-click=\"checkboxClick($event, option)\" ng-checked=isChecked(option)> <span dm-dropdown-static-include={{settings.template}}></span></label></div><span ng-if=!settings.checkBoxes data-ng-class=\"{\'glyphicon glyphicon-ok\': isChecked(option)}\"></span> <span dm-dropdown-static-include={{settings.template}}></span></a></li><li ng-if=!settings.groupBy ng-class=\"{\'active\': isChecked(option) && settings.styleActive}\" role=presentation ng-repeat=\"option in options | filter:getFilter(input.searchFilter) | orderBy:\'\':false:orderFunction\"><a ng-keydown=\"option.disabled || keyDownLink($event)\" role=menuitem class=option tabindex=-1 ng-click=\"option.disabled || setSelectedItem(option, false, true)\" ng-disabled=option.disabled><div ng-if=settings.checkBoxes class=checkbox><label><input class=checkboxInput type=checkbox ng-click=\"checkboxClick($event, option)\" ng-checked=isChecked(option)> <span dm-dropdown-static-include={{settings.template}}></span></label></div><span ng-if=!settings.checkBoxes data-ng-class=\"{\'glyphicon glyphicon-ok\': isChecked(option)}\"></span> <span ng-if=!settings.checkBoxes dm-dropdown-static-include={{settings.template}}></span></a></li><li class=divider ng-show=\"settings.selectionLimit > 1\"></li><li role=presentation ng-show=\"settings.selectionLimit > 1\"><a role=menuitem>{{selectedModel.length}} {{texts.selectionOf}} {{settings.selectionLimit}} {{texts.selectionCount}} </a></li></ul></div>");}]);
app.controller('dashboardCtrl', ['$scope','$rootScope','$http','$log','Dashboard','Data','notify','cfpLoadingBar','$window', function($scope,$rootScope, $http, $log, Dashboard, Data, notify, cfpLoadingBar, $window) {
    $scope.singleBarLabels=[];
    $scope.singleBarData=[];
    Dashboard.get().then(function success(response) {
        var poles=[];
        angular.forEach(Data.get(response), function(data) {
            poles.push(Number(data.total));
            $scope.singleBarLabels.push(data.service);
    
        });
        $scope.singleBarData.push(poles);
       
    }, function error(response) {

    });
    
    
    
    $scope.singleBarSeries = ["Total Jobs"];


    $scope.singleBarOverride =  [
        {
            label: "Total Jobs",
            backgroundColor: "rgba(98,203,49,0.5)",
            borderColor: "rgba(98,203,49,0.8)",
            highlightFill: "rgba(98,203,49,0.75)",
            highlightStroke: "rgba(98,203,49,1)",
            borderWidth: 1,
            responsive:true,
            scaleBeginAtZero:true,
        }
    ];

    Dashboard.getReminders().then(function success(response) {
        $scope.nextWeekReminders=Data.get(response);
    }, function error(response) {

    });
 
    Dashboard.getToScheduleJobs().then(function success(response) {
        $scope.toScheduleJobs=Data.get(response);
    }, function error(response) {

    });

    Dashboard.getHeaderAlerts().then(function success(response) {
        // console.log(Data.get(response));
        $scope.headerAlerts=Data.get(response);
    }, function error(response) {

    });

    Dashboard.getAlerts().then(function success(response) {
        $scope.notifications=Data.get(response);
    }, function error(response) {

    });

    $scope.markReminderNiotified=function(id) {
        Dashboard.reminderNotified(id).then(function success(response) {

            Dashboard.getHeaderAlerts().then(function success(response) {
                // console.log(Data.get(response));
                $scope.headerAlerts=Data.get(response);
            }, function error(response) {
        
            });

        }, function error(response) {
            
        });
    };

    $scope.markTaskNotified=function(id) {
        Dashboard.taskNotified(id).then(function success(response) {
            Dashboard.getHeaderAlerts().then(function success(response) {
                // console.log(Data.get(response));
                $scope.headerAlerts=Data.get(response);
            }, function error(response) {
        
            });
        }, function error(response) {
            
        });
    }

    Dashboard.getTaskgroupDropDown().then(function success(response) {
        
        $scope.taskGroup=Data.get(response);
        cfpLoadingBar.complete();
        // $scope.tasks=Task.filterTask($scope.taskGroup);
        // console.log($scope.taskGroup);

        }, function error(response) {
        cfpLoadingBar.complete();

    });
    $scope.getTaskNotificationDetail=function(id) {
        cfpLoadingBar.start();
        Dashboard.taskDetail(id).then(function success(response) {
            $scope.taskForm=Data.get(response);
            $('#newTask').modal('toggle');
            cfpLoadingBar.complete();
        }, function error(response) {
            cfpLoadingBar.complete();
            
        });
    }

    
    $scope.getRminderNotificationDetail=function(id) {
        cfpLoadingBar.start();
        Dashboard.reminderDetail(id).then(function success(response) {
            $scope.formData=Data.get(response);
            $('#remindModel').modal('toggle');
            cfpLoadingBar.complete();
        }, function error(response) {
            cfpLoadingBar.complete();
        });
    }

    $scope.logoutApp=function() {
        cfpLoadingBar.start();
        $http.post('/logout').then(function success(response) {
            cfpLoadingBar.complete();
            $window.location.reload();
        }, function error(response) {
            $window.location.reload();
        });
    }
}]);
app.factory('Dashboard',['$http', function($http) {
 return{
     get:function(){
         return $http.get('sim/pm/job/todayjobs');
     },
     getReminders:function() {
         return $http.get('sim/sut/reminder/nextweek');
     },
     getHeaderAlerts:function() {
         return $http.get('sim/sap/notification/headalerts');
     },
     getAlerts:function() {
        return $http.get('sim/sap/notification/alerts');
     },
     taskDetail:function(id) {
         return $http.get('sim/pm/task/'+id);
     },
     reminderDetail:function(id) {
        return $http.get('sim/sut/reminder/' + id);
     },
     reminderNotified:function(id) {
          return $http.post('sim/sut/reminder/notified/'+id);
     },
     taskNotified:function(id) {
        return $http.post('sim/pm/task/notified/'+id);
     },
     getTaskgroupDropDown:function() {
         return $http.get('sim/pm/taskgroup');
     },
     getToScheduleJobs:function() {
        return $http.post('sim/pm/job/unscheduled');
    }

 }
}]);
app.controller('branchCtrl', ['$scope','$http','$log','Branch','Data','notify','cfpLoadingBar','$timeout','AccessFactory','$state', function($scope, $http, $log, Branch, Data, notify,cfpLoadingBar,$timeout,AccessFactory,$state) {

	var hrpIDs=[];

	$scope.formData={'hbbranchid':0, 'departments':[]};
	
	//List Departments
	Branch.Departments().then(function success(response) {
		$scope.departments=Data.get(response);
	}, function error(response) {
	});

	// Department List :End
	Branch.DropDown().then(function success(response) {
		$scope.managers=Data.get(response);
	}, function error(response) {
	});

	cfpLoadingBar.start();
	Branch.get().then(function success(response) {
		$scope.branches=Data.get(response);
		$scope.doPagination($scope.branches);
		cfpLoadingBar.complete();
		// return $scope.branches;
	},function error(response) {
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

	$scope.clearForm=function() {
		$('.departs').prop('checked', false);
		$scope.formData={'hbbranchid':0, 'departments':[]};
	};

	$scope.submitBranch = function() {
		cfpLoadingBar.start();
		Branch.save($scope.formData).then(function success(response) { 
			if(Data.get(response).success) {
				$scope.formData = {'hbbranchid':0, 'departments':[]};
				$('.departs').prop('checked', false);
					cfpLoadingBar.complete();
					$("#myModal").modal("hide");
					notify.custom('success','Branch Successfully Saved!','Branch');
					Branch.get().then(function success(getData) {
						$scope.branches=Data.get(getData);
						$scope.doPagination($scope.branches);
						}, function error(error) {
							// $log.info(error);
						});
			}else {
				cfpLoadingBar.complete();
				if(Data.get(response).message=="UQ_BranchCode") {
                    notify.custom('error','Branch Code Already Exists!','Branch');
				}
				else{
					notify.custom('error','Something went wrong!','Branch');
				}
			}

			}, function error(response) {
				notify.custom('error','Something went wrong!','Branch');
				cfpLoadingBar.complete();
		});
	};

	$scope.editRow=function(id){
		cfpLoadingBar.start();
		Branch.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			angular.forEach($scope.formData.departments, function(key) {
					angular.element(document).ready(function () {
							$('input:checkbox[value='+key.hbddepartmentid+']').prop('checked', true);
					});
			});
			cfpLoadingBar.complete();
			$("#myModal").modal("show");
		},function error(response) {
			cfpLoadingBar.complete();
		});
	};

	$scope.deleteBranch = function(id) {
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
				Branch.destroy(id).then(function success(response) {
					$("#myModal").modal("hide");
					swal("Deleted!", "Branch Successfully Deleted", "success");
					Branch.get().then(function success(getData) {
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

// jQuery
angular.element(document).ready(function () {
	$(document).on("change", ".departs", function() {
	  if(this.checked) {
			if($scope.formData.hbbranchid=='0') {
				$scope.formData.departments.push({'hbdbranchdepartmentid':'0','hbdbranchid':$scope.formData.hbbranchid,'hbddepartmentid':$(this).data('id')});
			}else{
				$scope.formData.departments.push({'hbdbranchdepartmentid':'0','hbdbranchid':$scope.formData.hbbranchid,'hbddepartmentid':$(this).data('id')});
			}
		} else {
			// Remove From array if Exists
			for(var i=0;i <$scope.formData.departments.length; i++) {
				if($scope.formData.departments[i].hbddepartmentid==$(this).data('id')){
					$scope.formData.departments.splice(i,1);
				}
			}
		}

	});


	$("#btnExport").click(function(e) {
		
		e.preventDefault();
		
		var data_type = 'data:application/vnd.ms-excel';
		var table_div = document.getElementById('table_wrapper');

		var table_html = table_div.outerHTML.replace(/ /g, '%20');

		var a = document.createElement('table');
		
		a.href = data_type + ', ' + table_html;

			a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
			
			a.click();
	  });
});



}]);

app.factory('Branch', ['$http' ,function($http) {

  return {
    get : function() {
      return $http.get('sim/hm/branch');
    },
    show : function(id) {
      return $http.get('sim/hm/branch/' + id);
    },
    save : function(branchData) {
      return $http({
        method: 'POST',
        url: 'sim/hm/branch',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(branchData)
      });
    },
    destroy : function(id) {
      return $http({
        method: 'POST',
        url: 'sim/hm/branch/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    test:function(d) {
      return d;
    },
    DropDown:function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    Departments:function() {
      return $http.get('sim/hm/department/ddmenu');
    }
 

    
  };
}]);

app.controller('profileCtrl', ['$scope','$http','$log','Profile','Data','notify','cfpLoadingBar', function($scope, $http, $log, Profile, Data, notify,cfpLoadingBar) {
    $scope.formData=
    {

    };
    
    cfpLoadingBar.start();
    Profile.get().then(function success(response) {
        cfpLoadingBar.complete();
        $("#myModal").modal("show");
        $scope.formData=Data.get(response);
    }, function error(err) {
        cfpLoadingBar.complete();
    });

    Profile.getCountry().then(function success(response) {
        $scope.countries=Data.get(response);
    }, function error(err) {
    });

    Profile.getTimezone().then(function success(response) {
        $scope.timezones=Data.get(response);
    }, function error(err) {
    });

    Profile.getCurrency().then(function success(response) {
        $scope.currencies = Data.get(response);
    }, function error(err) {
    });

    $scope.data=function(value)
    {
        alert(value);
    }

    $scope.saveProfile=function(){
        cfpLoadingBar.start();
        Profile.save($scope.formData).then(function success(response) {
            cfpLoadingBar.complete();
            notify.custom('success',' Profile Successfully Saved!','Profile');
            Profile.get().then(function success(responsedata) {
                $scope.formData=responsedata.data;
            }, function error(err) {
				notify.custom('error','Something went wrong!','Profile');
            });
        }, function error(err) {
            cfpLoadingBar.complete();
    		notify.custom('error','Something went wrong!','Profile');
        });
    }
  
}]);

app.factory('Profile', ['$http', function($http) {
    return {
        get:function() {
            return $http.get("M@ster786/tenant/company/get");

        },
        getCountry:function() {
            return $http.get("M@ster786/ddmenu/am/country");

        },
        getTimezone:function() {
            return $http.get("M@ster786/ddmenu/am/timezone");

        },
        getCurrency:function() {
            return $http.get("M@ster786/ddmenu/am/currency");

        },
        save: function(obj) {
            return $http({
              method: 'POST',
              url: 'M@ster786/tenant/company/post',
              headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
              data: $.param(obj)
            });
          }
        
    }
}]);
app.controller('departmentCtrl',['$scope','$http','$log','Department','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Department, Data, notify,cfpLoadingBar,AccessFactory,$state) {
	$scope.formData={'hddepartmentid':0};
	
	Department.DropDown().then(function success(response) {
    	$scope.heads=Data.get(response);
  	},function error(response) {
	});
	
	cfpLoadingBar.start();
	Department.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.departments=Data.get(response);
		$scope.doPagination($scope.departments);
	},function error(response) {
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
	  
	$scope.clearForm=function() {
  		$scope.formData={'hddepartmentid':0};
  	};

	$scope.submitDepartment = function() {
   		cfpLoadingBar.start();
		Department.save($scope.formData).then(function success(response) {
			if(Data.get(response).success) {
				$scope.formData = {'hddepartmentid':0};
				cfpLoadingBar.complete();
				$("#myModal").modal("hide");
				notify.custom('success','Department Successfully Saved!','Department');
				Department.get().then(function success(getData) {
					$scope.departments=Data.get(getData);
					$scope.doPagination($scope.departments);
					}, function error(error) {
						$log.info(error);
					});
			}else {
				cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_DepartmentCode") { 
					notify.custom('error','Department Code  Already Exists!','Department');
				}
				else{
					notify.custom('error','Something went wrong!','Department');
				}		
			}
		}, function error(response) {
			cfpLoadingBar.complete();
			notify.custom('error','Something went wrong!','Department');
		});
	};

	$scope.editRow=function(id){
	    cfpLoadingBar.start();
		Department.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			cfpLoadingBar.complete();
			$("#myModal").modal("show");
		},function error(response) {
		});
	};

	$scope.deleteDepartment = function(id) {
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
				Department.destroy(id).then(function success(response) {
					$("#myModal").modal("hide");
					swal("Deleted!", "Department Successfully Deleted", "success");
					Department.get().then(function success(getData) {
						$scope.departments = Data.get(getData);
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

app.factory('Department', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/hm/department');
    },
    show : function(id) {
      return $http.get('sim/hm/department/' + id);
    },
    save : function(departmentData) {
      return $http({
        method: 'POST',
        url: 'sim/hm/department',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(departmentData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/hm/department/' + id);
      return $http({
        method: 'POST',
        url: 'sim/hm/department/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    DropDown:function() {
      return $http.get('sim/hm/employee/ddmenu');
    }
  };

}]);

app.controller('designationCtrl',['$scope','$http','$log','Designation','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Designation, Data, notify,cfpLoadingBar,AccessFactory,$state) {
	$scope.formData={'hdgdesignationid':0};

	Designation.DropDown().then(function success(response) {
		$scope.managers=Data.get(response);
	}, function error(response) {

	});
	
	cfpLoadingBar.start();
	Designation.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.designations=Data.get(response);
		$scope.doPagination($scope.designations);
	},function error(response) {
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

  	$scope.clearForm=function() {
  		$scope.formData={'hdgdesignationid':0};
  	};

	$scope.submitDesignation = function() {
    	cfpLoadingBar.start();
		Designation.save($scope.formData).then(function success(response) {
			if(Data.get(response).success) {
				$scope.formData = {'hdgdesignationid':0};
				$("#myModal").modal("hide");
				cfpLoadingBar.complete();
				notify.custom('success','Designation Successfully Saved!','Designation');
				Designation.get().then(function success(getData) {
						$scope.designations=Data.get(getData);
						$scope.doPagination($scope.designations);
				}, function error(error) {
						$log.info(error);
				});
			}else {
				cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_DesignationCode") { 
					notify.custom('error','Designation Code Already Exists!','Designation');
				}
				else{
					notify.custom('error','Something went wrong!','Designation');
				}
			}
		}, function error(response) {
			cfpLoadingBar.complete();
			notify.custom('error','Something went wrong!','Designation');
		});
	};
	
	$scope.editRow=function(id){
		cfpLoadingBar.start();
		Designation.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			cfpLoadingBar.complete();
			$("#myModal").modal('show');
		},function error(response) {
		});
	};

	$scope.deleteDesignation = function(id) {
		swal({
			title: "Are you sure?",
			text: "Do You Want To Delete This Designation?",
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
				Designation.destroy(id).then(function success(response) {
					$("#myModal").modal('hide');
					swal("Deleted!", "Designation Successfully Deleted", "success");
					Designation.get().then(function success(getData) {
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
}]);

app.factory('Designation', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/hm/designation');
    },
    show : function(id) {
      return $http.get('sim/hm/designation/' + id);
    },
    save : function(designationData) {
      return $http({
        method: 'POST',
        url: 'sim/hm/designation',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(designationData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/hm/designation/' + id);
      return $http({
        method: 'POST',
        url: 'sim/hm/designation/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    DropDown:function() {
      return $http.get('sim/hm/employee/ddmenu');
    }
  };

}]);

app.controller('employeeCtrl',['$scope','$http','$log','Employee','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Employee, Data, notify,cfpLoadingBar,AccessFactory,$state) {
	
	$scope.formData={'heemployeeid':0};

	var js=angular.element(document.querySelector('script'));
	
	//  Drop Downs
	Employee.DropDown('branch').then(function success(response) {
    	$scope.branches=Data.get(response);
  	},function error(response) {

	});
	  
	Employee.employees().then(function success(response) {
		$scope.supervisors=Data.get(response);
	}, function error(response) {

  	});
  
	Employee.DropDown('department').then(function success(response) {
    	$scope.departments=Data.get(response);
  	},function error(response) {

  	});

  	Employee.DropDown('designation').then(function success(response) {
    	$scope.designations=Data.get(response);
  	},function error(response) {

  	});

  	Employee.country().then(function success(response) {
    	$scope.countries=Data.get(response);
  	}, function error(response) {

  	});
  	// DropDown : End
	
	cfpLoadingBar.start();
	Employee.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.employees=Data.get(response);
		$scope.doPagination($scope.employees);
	},function error(response) {
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
	  
	$scope.sameas;
  	$scope.sameAs=function(data,sameas) {
		if(sameas==true){
			$scope.formData.heresidentialaddress=data;	
		}
		else{
			$scope.formData.heresidentialaddress=" ";
		}
	};
	
	$scope.clearForm=function() {
		$scope.addtocntact=true;
		$scope.formData={'heemployeeid':0};
	};

	$scope.submitEmployee = function() {
    	cfpLoadingBar.start();
		Employee.save($scope.formData).then(function success(response) {
			if(Data.get(response).success) {
				$scope.formData = {'heemployeeid':0};
				cfpLoadingBar.complete();
				$("#myModal").modal("hide");
				notify.custom('success','Employee Successfully Saved','Employee');
				Employee.get().then(function success(getData) {
					$scope.employees=Data.get(getData);
					$scope.doPagination($scope.employees);
				}, function error(error) {
					$log.info(error);
				});
      		}else {
				cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_EmployeeCode") { 
					notify.custom('error','Employee Code Already Exists!','Employee');
				}
				else{
					notify.custom('error','Something went wrong!','Employee');
				}
      		}
		}, function error(response) {
			cfpLoadingBar.complete();
			notify.custom('error','Something went wrong!','Employee');
		});
	};

	$scope.editRow=function(id){
		$scope.addtocntact=false;
		cfpLoadingBar.start();
		Employee.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			cfpLoadingBar.complete();
			$("#myModal").modal("show");
		},function error(response) {

		});
	};

	$scope.deleteEmployee = function(id) {
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
				Employee.destroy(id).then(function success(response){
					$("#myModal").modal("hide");
					swal("Deleted!", "Employee Successfully Deleted", "success");
					Employee.get().then(function success(getData) {
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
	
	angular.element(document).ready(function () {
		$("#quantity").keypress(function (e) {
			if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
				$("#errmsg").html("Digits Only").show().fadeOut("slow");
				return false;
		 	}	
		});
	});
}]);

app.factory('Employee', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/hm/employee');
    },
    show : function(id) {
      return $http.get('sim/hm/employee/' + id);
    },
    save : function(employeeData) {
      return $http({
        method: 'POST',
        url: 'sim/hm/employee',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(employeeData)
      });
    },
    employees : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    destroy : function(id) {
      // return $http.delete('sim/hm/employee/' + id);
      return $http({
        method: 'POST',
        url: 'sim/hm/employee/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    DropDown:function(module) {
      return $http.get('sim/hm/'+module+'/ddmenu');
    },
    country :function() {
      return $http.get('M@ster786/ddmenu/am/country');
    }
  };

}]);


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

app.factory('expSheet',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/pm/expense');
    },
    show : function(id) {
      return $http.get('sim/pm/expense/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/expense',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    filterData : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/expense/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    details : function(id) {
      return $http.get('sim/pm/expense/detail/'+id);
    },
    getChild : function(type, id, parent) {
      return $http.get('sim/pm/expense/pivot/'+type+'/'+id+'/'+parent);
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/expense/'+id);
      return $http({
        method: 'POST',
        url: 'sim/pm/expense/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    employee : function() {
      return $http.get('sim/hr/employee/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    findList : function(data) {
      // return console.log(data);
      return $http({
        method: 'POST',
        url: 'sim/pm/job/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    searchTitle: function(param) {
      return $http.get('sim/hm/designation/ddmenu');
    },
    dfConfig:function() {
      return $http.get('sim/pms/config/expensesheet/list');
    },
    getTitle: function() {
      return $http.get('sim/pm/expense/ddmenu');
    }
  };
}]);


app.controller('jobsCtrl',['$scope','$http','$log', '$timeout', 'Jobs','Data','notify','Excel','cfpLoadingBar','AccessFactory','$state','$rootScope', function($scope, $http, $log, $timeout, Jobs, Data, notify, Excel, cfpLoadingBar,AccessFactory,$state,$rootScope) {
  
  // console.log($stateParams.statusid);
  $scope.viewData={};
  // $scope.formData={'jjobid':$scope.viewData.jjobid,'jjobreference':$scope.viewData.jjobreference};
  $rootScope.filterData={
    'jstatusid':24
  };
  if($rootScope.statusvalue==true)
    {
      $rootScope.filterData.jstatusid=22;
    }
  	//permission
 
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('167').then(function success(response) {
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
  Jobs.findList($rootScope.filterData).then(function success(response) {
    cfpLoadingBar.complete();
    $scope.jobs=Data.get(response);
    $scope.doPagination($scope.jobs);
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
  Jobs.customer().then(function success(response) {
    $scope.customers=Data.get(response);
  },function error(response) {

  });

  Jobs.jobsites().then(function success(response) {
    $scope.jobsites=Data.get(response);
  }, function error(response) {

  });

  Jobs.branches().then(function success(response) {
    $scope.branches=Data.get(response);
  }, function error(response) {

  });

  Jobs.service().then(function success(response) {
    $scope.services=Data.get(response);
  }, function error(response) {

  });

  Jobs.status().then(function success(response) {
    $scope.status=Data.get(response);
  }, function error(response) {

  });

  $scope.searchList=function() {

      Jobs.findList($rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      });
  };

  $scope.clearForm=function() {
    $scope.viewData={};
  };

  $scope.resetButtons=function() {
    $scope.suspend=false;
    $scope.finished=false;
    $scope.skiped=false;
    $scope.reopen=false;
    $scope.revert=false;
    $scope.resume=false;
  };
  // console.log('works');
  $scope.saveJob=function() {
    // console.log();return;
    Jobs.save({'jjobid':$scope.viewData.jjobid, 'jjobreference': $scope.viewData.jjobreference}).then(function success(response) {
      if(Data.get(response).success==false && Data.get(response).message=="UQ_JobReference_notnull") {
        notify.custom('error','JobReference Reference is Already Exists!','Job');
      }else {

        notify.custom('success','Job Successfully Updated!','Job');
        Jobs.findList(  $rootScope.filterData).then(function success(response) {
          $scope.jobs=Data.get(response);
          $scope.doPagination($scope.jobs);
        }, function error(response) {

        })
      }
    }, function error(response) {
      notify.custom('error','Error Occured While Saving!','Job');
    });
  };


  $scope.editRow=function(id) {
    cfpLoadingBar.start();
    $scope.resetButtons();
    Jobs.show(id).then(function success(response) {
      cfpLoadingBar.complete();
      $scope.viewData=Data.get(response);
      switch ($scope.viewData.jstatusid) {
        case '22':
              $scope.suspend=true;
              $scope.skiped=true;
        break;
        case '24':
              $scope.suspend=true;
              $scope.skiped=true;
              $scope.finished=true;
        break;
        case '26':
              $scope.reopen=true;
        break;
        case '28':
              $scope.resume=true;
        break;
        case '30':
              $scope.revert=true;
        break;
        default:
              $scope.suspend=false;
              $scope.finished=false;
              $scope.skiped=false;
              $scope.reopen=false;
              $scope.revert=false;
              $scope.resume=false;

      };

      // console.log($scope.viewData);
    }, function error(response) {
      cfpLoadingBar.complete();
    });
  };

  $scope.jobFinished=function(id) {
    Jobs.finish(id).then(function success(response) {
      notify.custom('success','Job Updated as Finished!','Job');
        $scope.finished=false;
      Jobs.findList(  $rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      })
      $('#jobModal').modal('toggle');
    }, function error(response) {
      notify.custom('error','Error Occured While Updating!','Job');
    });
  };

  $scope.suspendJob=function(id) {
        $('#jobModal').modal('hide');

    swal({
      title: "Reason!",
      text: "Write a Reason to Suspend:",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputPlaceholder: "Write reason"
    },
    function(inputValue){
      if (inputValue === false){
        $('#jobModal').modal('toggle');
        return false;
      }

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }

      Jobs.suspend(id,inputValue).then(function success(response) {
          notify.custom('success','Job Suspended','Job');
          $scope.suspend=false;
          swal("Nice!", "You wrote: " + inputValue, "success");
          Jobs.findList(  $rootScope.filterData).then(function success(response) {
            $scope.jobs=Data.get(response);
          }, function error(response) {

          })
        }, function error(response) {
          notify.custom('error','Faild to Suspend The Job!','Job');
        });
    });

  };

  $scope.skipJob=function(id) {

    $('#jobModal').modal('hide');
    swal({
      title: "Skips!",
      text: "How Many Jobs Do You Want To Skip?:",
      type: "input",

      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      customClass: "mySwal",
      inputPlaceholder: "Eg:- 12"
    },
    function(inputValue){
    
        
      if (inputValue === false){
        $('#jobModal').modal('toggle');
        return false;
      }

      if (inputValue === "") {
        swal.showInputError("You need to write something!");
        return false
      }
      if (isNaN(inputValue)) {
        swal.showInputError("Must input numbers!");
        
      }
      else{
         Jobs.skip(id,inputValue).then(function success(response) {
          notify.custom('success','Job Skipped','Job');
          swal("Nice!", inputValue+" Jobs Skipped!", "success");
          $scope.skiped=false;
          Jobs.findList($rootScope.filterData).then(function success(response) {
            $scope.jobs=Data.get(response);
          }, function error(response) {

          })
          // $('#jobModal').modal('toggle');
        }, function error(response) {
          notify.custom('error','Faild to Skip The Job!','Job');
        });

      }

     
  
    });

  };

  $scope.revertJob=function(id) {
    Jobs.revert(id).then(function success(response) {
      notify.custom('success','Job Reverted','Job');
      $scope.revert=false;
      Jobs.findList(  $rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      })
      $('#jobModal').modal('toggle');
    }, function error(response) {
      notify.custom('error','Faild to Revert The Job!','Job');
    });
  };

  $scope.resumeJob=function(id) {
    Jobs.resume(id).then(function success(response) {
      notify.custom('success','Job Resume','Job');
      $scope.resume=false;
      Jobs.findList($rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      })
      $('#jobModal').modal('toggle');
    }, function error(response) {
      notify.custom('error','Faild to Resume The Job!','Job');
    });
  };

  $scope.reopenJob=function(id) {
    Jobs.reopen(id).then(function success(response) {
      notify.custom('success','Job Reopen','Job');
      $scope.reopen=false;
      Jobs.findList($rootScope.filterData).then(function success(response) {
        $scope.jobs=Data.get(response);
      }, function error(response) {

      })
      $('#jobModal').modal('toggle');
    }, function error(response) {
      notify.custom('error','Faild to Reopen The Job!','Job');
    });
  };

  $scope.exportToExcel=function(tableId){ // ex: '#my-table'
    // console.log(tableId);return;
			// $scope.exportHref=Excel.tableToExcel(tableId,'sheet name');
			// $timeout(function(){location.href=$scope.fileData.exportHref;},100); // trigger download
      var exportHref=Excel.tableToExcel(tableId,'sheet name');
      $timeout(function(){location.href=exportHref;},100);
		};
}]);

app.factory('Jobs',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/pm/job');
    },
    findList : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/job/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    default: function(param) {
      return $http.get('sim/pms/config/'+param+'/list');
    },
    show : function(id) {
      return $http.get('sim/pm/job/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/job',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    status: function() {
      return $http.get('sim/ddmenu/pm/status');
    },
    finish : function(id) {
      // return $http({
      //   method:'POST',
      //   url:'sim/pm/job/finish',
      //   headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
      //   data:$.param(data)
      // });
      return $http.post('sim/pm/job/finish/'+id);
    },
    suspend : function(id, reason) {
      return $http.post('sim/pm/job/suspended/'+id+'/'+reason);
    },
    reopen : function(id) {
      return $http.post('sim/pm/job/reopen/'+id);
    },
    resume : function(id) {
      return $http.post('sim/pm/job/resume/'+id);
    },
    revert : function(id) {
      return $http.post('sim/pm/job/revert/'+id);
    },
    skip : function(id, count) {
      return $http.post('sim/pm/job/skip/'+id+'/'+count);
    },
    jobsites : function() {
      return $http.get('sim/sm/jobsite/ddmenu');
    },
    branches : function() {
      return $http.get('sim/hm/branch/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
  };
}]);


app.controller('scheduleCtrl',['$scope','$http','$log','$filter','Schedule','Data','notify','cfpLoadingBar','timefactory','AccessFactory','$state', function($scope, $http, $log, $filter, Schedule, Data, notify,cfpLoadingBar,timefactory,AccessFactory,$state) {
 
 
 
    $scope.formData={
      'jshjobscheduleid':0,
      'employees':[],
      'jobs':[]
    };
    $scope.searchData={
      'jstatusid':'22'
    };
    $scope.addon={};
    $scope.selectedJobs=[];
    $scope.filterData={
      'jshisactive':'1',
      'jshstatusid' : '52'
    };
    // suhail
    $scope.filterToSchedule={
      'days':'33'
    };

    $scope.filterJob={
      'job':{'jstatusid':'24'}
    };

  	//permission

	
    // $scope.disabled=false;
    // $scope.data=false;
    // AccessFactory.Perission('168').then(function success(response) {
    // if(Data.get(response)==0){
    //   $state.go('access');
    // }
    // if(Data.get(response)==1){
    //   $scope.readresponse=Data.get(response);
    //   $scope.disabled=true;
    // }
    // if(Data.get(response)==2){
    //   $scope.writeresponse=Data.get(response);
    //   $scope.data=true;
    // }
    // if(Data.get(response)==3){
    //   $scope.fullresponse=Data.get(response);
    //   $scope.data=true;
    // }
    // }, function error(response) {

    // });
//end permission
 Schedule.jobsites().then(function success(response) {
        $scope.jobsites=Data.get(response);
      }, function error(response) {
 });

  Schedule.customer().then(function success(response) {
    $scope.customers=Data.get(response);
  }, function error(response) {
  });

  Schedule.branches().then(function success(response) {
    $scope.branches=Data.get(response);
     }, function error(response) {
  });

  Schedule.service().then(function success(response) {
      $scope.services=Data.get(response);
      }, function error(response) {
  });

  cfpLoadingBar.start();
  Schedule.filterData($scope.filterData).then(function success(response) {
    $scope.schedules=Data.get(response);
    $scope.doPagination($scope.schedules);
    cfpLoadingBar.complete();
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
  Schedule.employee().then(function success(response) {
      $scope.employees=Data.get(response);
    }, function error(response) {
  });

  Schedule.users().then(function success(response) {
    $scope.users=Data.get(response);
    }, function error(response) {
  });
 $scope.find=function() {
    $scope.listJobs=[];
    Schedule.findList($scope.searchData).then(function success(response) {
        angular.forEach(Data.get(response), function(rows) {
          var flag=0;
          angular.forEach($scope.formData.jobs, function(jo) {
            if(rows.jjobid==jo.jspjobid) {
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
     Schedule.filterData($scope.filterData).then(function success(response) {
        $scope.schedules=Data.get(response);
      }, function error(response) {
      });
    };
  $scope.makeSelected=function(row,i) {
    $scope.formData.jobs.push({'jspjobid':row.jjobid,'jspjobscheduleid':$scope.formData.jshjobscheduleid});
    $scope.selectedJobs.push(row);
    $scope.listJobs.splice(i, 1);
   };

  $scope.removeFromSelected= function(row,i) {
    $scope.formData.jobs.splice(i,1);
    $scope.selectedJobs.splice(i,1);
  };
  $scope.theTeam=[];
  $scope.emid=false;
  $scope.samdata={};


   $scope.addTeam=function(id,data) {
     console.log(id)
     console.log(data.heemployeeid)
   
    $('#ship option:selected').css('display','none');

    if (id==null) {
      notify.custom('error','Please Select an Employee','Employee');
      $scope.emid=true;
    }else {
      $scope.formData.employees.push({'espemployeeid':id,'espjobscheduleid':$scope.formData.jshjobscheduleid});
      $scope.emid=false;
    }
  

  };
  // console.log(fem.espemployeeid);
  
  $scope.removeTeam=function(id) {
          console.log(id);
          console.log( $("#test"+id));
          var value=id-1;
        $scope.formData.employees.splice(value, 1);
    
           $("#test"+id).css('display','block');
     // });
  };
  $scope.reset=function() {
    $scope.formData={
      'jshjobscheduleid':0,
      'employees':[],
      'jobs':[]
    };
    $scope.searchData={};
    $scope.addon={};
    $scope.selectedJobs=[];
  };
  $scope.clearForm=function() {
    // $('#ship'+$scope.valdata+'option').css('display','none');
    $('#ship option').css('display','block')
      $scope.formData={
        'jshjobscheduleid':0,
        'employees':[],
        'jobs':[]
      };
      // $scope.searchData={
      //   'jstatusid':'22'
      // };
      // $scope.searchData={};
      $scope.addon={};
      $scope.selectedJobs=[];
      $scope.samdata={};
      Schedule.dfConfig().then(function success(response) {
        $scope.formData.scscheduleconfigurationid=Data.get(response).scscheduleconfigurationid;
        $scope.formData.screferencetype=Data.get(response).screferencetype;

      }, function error(response) {

      });

  };
  $scope.chane=function(val)
  {
    if(val=='1'){
    
      $scope.formData.jshstatusid='54';
    }
    if(val=='0'){
        $scope.formData.jshstatusid='52';
    }
  
  }
$scope.saveSchedule=function() {
//timein
    if($scope.formData.jshtimein == null){
        var minutein = 0;
    }
    else{
        $scope.myDate = new Date($scope.formData.jshtimein);
        var minutein = $scope.myDate.getMinutes();
        var hour = $scope.myDate.getHours();
        minutein = minutein + hour * 60;
    }
//timeout
    if($scope.formData.jshtimeout == null){
        var minuteout = minutein;
    }
    else{
        $scope.myDate = new Date($scope.formData.jshtimeout);
        var minuteout = $scope.myDate.getMinutes();
        var hour = $scope.myDate.getHours();
        minuteout = minuteout + hour * 60;
    }

    if(minutein > minuteout){
        notify.custom('error','Enter Valid Time In and Out', 'Time');
        return false;
    }
    else{
        $scope.formData.jshtimeout = minuteout;
        $scope.formData.jshtimein = minutein;
    }

    if ($scope.formData.jobs.length<1) {
      notify.custom('error','Jobs Not Selected','Details')
    }
    else {
      console.log($scope.formData);
      Schedule.save($scope.formData).then(function success(response) {
          if(Data.get(response).success ) {
            $scope.clearForm();
            $("#schedule").modal("hide");
            notify.custom('success','Schedule Successfully Saved!','Schedule');
            Schedule.filterData($scope.filterData).then(function success(getData) {
            $scope.schedules=Data.get(getData);
            $scope.doPagination($scope.schedules);
            }, function error(getData) {

            });
          }
          else{
              if(Data.get(response).message=="UQ_JobScheduleReference") {
                notify.custom('error','JobSchedule Reference  Already Exists!','JobSchedule');
              }
              else{
                    notify.custom('error','Something went wrong!','JobSchedule');
              }
          }
      }, function error(response) {
        notify.custom('error','Error Found While Saving!');
      });
    }
  };

  $scope.editRow=function(id) {
    console.log(id);
    $scope.clearForm();
    cfpLoadingBar.start();
    Schedule.show(id).then(function success(response) {
      cfpLoadingBar.complete();
      $("#myModal").modal("show");
      $scope.formData=Data.get(response);
      var intime= timefactory.timein($scope.formData.jshtimein);
      var outtime= timefactory.timein($scope.formData.jshtimeout);
     console.log("fhdhg"+$scope.formData.intime);
      $scope.formData={
          'jshtimein':intime,
          'jshtimeout':outtime,
          'jshcreatedon':$scope.formData.jshcreatedon,
          'jshdate':$scope.formData.jshdate,
          'jshdeletedon':$scope.formData.jshdeletedon,
          'jshheademployeeid':$scope.formData.jshheademployeeid,
          'jshisactive':$scope.formData.jshisactive,
          'jshjobscheduleid':$scope.formData.jshjobscheduleid,
          'jshmodifiedon':$scope.formData.jshmodifiedon,
          'jshreferencetype':$scope.formData.jshreferencetype,
          'jshremarks':$scope.formData.jshremarks,
          'jshscheduleconfigurationid':$scope.formData.shscheduleconfigurationid,
          'jshschedulereference':$scope.formData.jshschedulereference,
          'jshstatusid':$scope.formData.jshstatusid,
          ' jshuid': $scope.formData.jshuid };
       }, function error(response) {
      cfpLoadingBar.complete();
	 });

    Schedule.getChild('job', id, 'scheduleid').then(function success(response) {
        $scope.formData.jobs=[];
        $("#schedule").modal("show");
        angular.forEach(Data.get(response), function(data) {
          $scope.formData.jobs.push({'jspjobid':data.jspjobid,'jspjobscheduleid':data.jspjobscheduleid});
     });
      $scope.selectedJobs=Data.get(response);
    }, function error(response) {

    });
   Schedule.getChild('employee', id, 'scheduleid').then(function success(response) {
      $scope.formData.employees=[];
      $scope.formData.employees=Data.get(response);
   console.log(  $scope.formData.employees);
      angular.forEach(  $scope.formData.employees, function(key) {
      
        // $scope.valdata=key.espemployeeid;

        $("#test"+key.espemployeeid).css('display','none');
        // $('#"ship"'+$scope.valdata+'option:selected').css('display','none');
        // console.log( $('#ship'+$scope.valdata).val)
        //  $('#ship option').css('display','none');
              });
    
    }, function error(response) {
  });
  console.log( $scope.formData.employees);
  console.log($scope.valdata)


  
 };
// if($scope.formData.jshjobscheduleid=='0')
//   {
    // $scope.cli=function(data,val,d)
    // {
      
    //   console.log(data);
    //   console.log(val);
    //   console.log(d)
    //   console.log($("#test"+val));
    //   angular.forEach(data, function(key) {
    //     console.log($("#test"+key.heemployeeid));
    //     if(key.heemployeeid==val)
    //       {
    //         $("#test"+key.heemployeeid).css('display','none');
    //         // $('#ship option:selected').css('display','none');
    //         // $("#test"+key.heemployeeid+ 'option').remove();
    //         // console.log($("#test"+key.heemployeeid+ 'option:selected'));
    // // console.log(key);
    //       }
    //   });
      
    // }
  // }


 $scope.deleteSchedule = function(id) {
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
					Schedule.destroy(id).then(function success(response) {
            $("#schedule").modal("hide");
						swal("Deleted!", "Schedule Successfully Deleted", "success");
            Schedule.filterData($scope.filterData).then(function success(getData) {
              $scope.schedules=Data.get(getData);
            }, function error(getData) {

            });

					},function error(response) {
						swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
					});
			  } else {
			    swal("Cancelled", "Terminated The Process", "error");
			  }
			});
  };

    $scope.changetimein=function(timedatain){
        $scope.formData.jshtimein=timedatain;
    }
    $scope.changetimeout=function(timedataout){
      $scope.formData.jshtimeout=timedataout;
    }

    // suhail
    // filter to schedule
    $scope.searchToSchedule=function() {
        Schedule.filterToSchedule($scope.filterToSchedule).then(function success(response) {
            $scope.toSchedules=Data.get(response);
        }, function error(response) {
        });
    };

    cfpLoadingBar.start();
    Schedule.filterToSchedule($scope.filterToSchedule).then(function success(response) {
      $scope.toSchedules=Data.get(response);
      cfpLoadingBar.complete();
      }, function error(response) {
        cfpLoadingBar.complete();
    });

    // filter  job
    $scope.searchJob=function() {
      Schedule.filterJob($scope.filterJob).then(function success(response) {
          $scope.jobs=Data.get(response);
      }, function error(response) {
      });
  };

  cfpLoadingBar.start();
  Schedule.filterJob($scope.filterJob).then(function success(response) {
    $scope.jobs=Data.get(response);
    cfpLoadingBar.complete();
    }, function error(response) {
      cfpLoadingBar.complete();
  });
}]);

 

app.factory('Schedule',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/pm/schedule');
    },
    save : function(data) {
      return $http({
        method:'POST',
        url:'sim/pm/schedule',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    show : function(id) {
      return $http.get('sim/pm/schedule/'+id);
    },
    getChild : function(type, id, parent) {
      return $http.get('sim/pm/schedule/pivot/'+type+'/'+id+'/'+parent);
    },
    users:function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/schedule/' + id);
      return $http({
        method: 'POST',
        url: 'sim/pm/schedule/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    jobsites : function() {
      return $http.get('sim/sm/jobsite/ddmenu');
    },
    employee : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    branches : function() {
      return $http.get('sim/hm/branch/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    filterData : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/schedule/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    findList : function(data) {
      // return console.log(data);
      return $http({
        method: 'POST',
        url: 'sim/pm/job/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    dfConfig: function() {
      return $http.get('sim/pms/config/schedule/list');
    },
    //suhail
    filterToSchedule : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/job/unscheduled',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
 
    filterJob : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/schedule/jobs',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
  };
}]);


app.controller('jobsheetsCtrl',['$scope','$http','$log','Jobsheet','Data','notify','cfpLoadingBar','$rootScope','AccessFactory','$state','timefactory', function($scope, $http, $log, Jobsheet, Data, notify,cfpLoadingBar,$rootScope,AccessFactory,$state,timefactory) {
  $scope.formData={'jstjobsheetid':0,'employees':[], 'jobs':[]};
  $scope.searchData={};
  // $scope.searchData={
  //   "project": {
  //     'pcustomerid':1
  //   }
  // };

  $scope.selectedJobs=[];
  $scope.teamData={};
  $scope.theTeam=[];
  $scope.editable=false;
  $scope.filterData={
    'jstisactive':45
  };

 	//permission

	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('172').then(function success(response) {
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

  Jobsheet.customer().then(function success(response) {

    $scope.customers=Data.get(response);
    
  }, function error(response) {

  });

  Jobsheet.employee().then(function success(response) {
    $scope.employees=Data.get(response);
  }, function error(response) {

  });

  Jobsheet.users().then(function success(response) {
    $scope.users=Data.get(response);
  }, function error(response) {

  });
  cfpLoadingBar.start();
  Jobsheet.filterData($scope.filterData).then(function success(response) {
    cfpLoadingBar.complete();
    $scope.jobsheets=Data.get(response);
    $scope.doPagination($scope.jobsheets);
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
  Jobsheet.service().then(function success(response) {
    $scope.services=Data.get(response);
  }, function error(response) {

  });


  $scope.findJobs= function() {
console.log($scope.searchData);
    $scope.listJobs=[];
    Jobsheet.findList($scope.searchData).then(function success(response) {
      console.log(Data.get(response));
      // $scope.listJobs=Data.get(response);
      angular.forEach(Data.get(response), function(rows) {
        var flag=0;
        angular.forEach($scope.formData.jobs, function(job) {
          if(rows.jjobid==job.jtpjobid) {
            flag=1;
          }
        });
        if(flag==0) {
          $scope.listJobs.push(rows);
        }
      });
    }, function error(response) {

    });
    console.log( $scope.listJobs);
  };


  $scope.makeSelected= function(row, id) {
    $scope.selectedJobs.push(row);
    $scope.formData.jobs.push({'jtpjobid':row.jjobid,'jtpjobsheetid':$scope.formData.jstjobsheetid});
    $scope.listJobs.splice(id,1);


  };

  $scope.removeFromSelected=function(row, i) {
    $scope.formData.jobs.splice(i, 1);
    $scope.selectedJobs.splice(i, 1);

  };

  $scope.searchList=function() {
    // console.log($scope.filterData);return;
    Jobsheet.filterData($scope.filterData).then(function success(response) {
      $scope.jobsheets=Data.get(response);
    }, function error(response) {

    });
  };
  // $scope.teamData.ttworktm="00:00"
  $scope.saveworktime=function(data)
  {

      mout = data % 60;
      hout = (data-mout)/60;
    $scope.outtime = (hout<10?"0":"") + hout.toString() + ":" + (mout<10?"0":"") + mout.toString();
      parseInt($scope.outtime);
     
  }
  $scope.saveovertime=function(values)
  {

      m = values % 60;
      h = (values-m)/60;
      var ovrtime = (h<10?"0":"") + h.toString() + ":" + (m<10?"0":"") + m.toString();
      $scope.teamData.ovrtm=ovrtime;
    // console.log($scope.teamData.ttworktm);
  }
  $scope.req=false;
  $scope.addTeam=function(id) {
    console.log($scope.teamData.ttworktm);
    // mout = data % 60;
    // hout = (data-mout)/60;
    // var outtime = (hout<10?"0":"") + hout.toString() + ":" + (mout<10?"0":"") + mout.toString();
    // parseInt(outtime);
    // $scope.teamData.ttworktm=outtime;

var data =$scope.teamData.ttworktm;

    if ($scope.teamData.employee=="" || $scope.teamData.employee==undefined || $scope.teamData.employee==null) {
        $scope.req=true;
        notify.custom('error','Please Select an Employee','Employee');
    }else {
      $scope.req=false;
      $scope.formData.employees.push({
        'ewhjobsheetid':$scope.formData.jstjobsheetid,
        'ewhemployeeid':$scope.teamData.employee,
        'ewhtotalminutes':$scope.teamData.ttworktm,
        'ewhallowance':$scope.teamData.allws,
        'ewhotinminutes':$scope.teamData.ovrtm
      });
      $scope.teamData={};
    }
  };
  
  $scope.removeDetail=function(id) {
    $scope.formData.employees.splice(id,1);
  };

  

  $scope.clearForm=function() {
    $scope.selectedJobs=[];
    $scope.formData={'jstjobsheetid':0,
    'employees':[],
    'jobs':[]
  };

    Jobsheet.dfConfig().then(function success(response) {
      $scope.formData.jscjobsheetconfigurationid=Data.get(response).jscjobsheetconfigurationid;
      $scope.formData.jscreferencetype=Data.get(response).jscreferencetype;
    }, function error(response) {

    });
  };
  $scope.reset=function() {
    $scope.selectedJobs=[];
    $scope.formData={
      'jstjobsheetid':0,
      'employees':[],
      'jobs':[]
    };
  };
  $scope.changeworktime=function(data)
  {
   console.log(data);
  }
  $scope.saveSheet= function() {

 
    $scope.myDate = new Date($scope.formData.jsttimein);
    var minutein = $scope.myDate.getMinutes();
    var hour = $scope.myDate.getHours();
    minutein = minutein + hour * 60;
//timeout
    $scope.myDate = new Date($scope.formData.jsttimeout);
    var minuteout = $scope.myDate.getMinutes();
    hour = $scope.myDate.getHours();
    minuteout = minuteout + hour * 60;

    if(minutein > minuteout){
        notify.custom('error','Enter Valid Time In and Out', 'Time');
        return false;
    }
    else{
        $scope.formData.jsttimeout = minuteout;
        $scope.formData.jsttimein = minutein;
        console.log(  $scope.formData.jsttimein);
    }
    if($scope.formData.jobs.length<1 || $scope.formData.employees.length<1) {
        notify.custom('error','Employees Or Jobs are not Selected','Job');
    }else {

      // angular.forEach( $scope.formData.employees , function(key) {
      //  console.log(key.ewhtotalminutes);
      //  var str = parseInt(key.ewhtotalminutes);
      // //  str.split(" : ");
      //  console.log(str);
      // });

        Jobsheet.save($scope.formData).then(function success(response) {
        if(Data.get(response).success){
          $scope.reset();
          notify.custom('success','Jobsheet Successfully Saved!','Jobsheet!');
          Jobsheet.get().then(function success(getData) {
          $scope.jobsheets=Data.get(getData);
          $scope.doPagination($scope.jobsheets);
        }, function error(response) {

        });
        $("#jobsheet").modal("hide");
    } else {
    if(Data.get(response).message=="UQ_JobSheetReference") {
      notify.custom('error','JobSheet Reference Already Exists!','JobSheet');
    }
    else{
      notify.custom('error','Something went wrong!','JobSheet');
    }
    }

      }, function error(response) {

      });
    }
  };



  $scope.editRow = function(id) {
    $scope.reset();
    Jobsheet.show(id).then(function success(response) {
      $scope.formData=Data.get(response);
     
      var sheetintime= timefactory.timein($scope.formData.jsttimein);
      var sheetouttime= timefactory.timein($scope.formData.jsttimeout);
      $scope.formData.jsttimein=sheetintime;
      $scope.formData.jsttimeout=sheetouttime;
      console.log( $scope.sheetintime);
    }, function error(response) {

    });

    Jobsheet.details(id).then(function success(response) {
      $scope.formData.employees=Data.get(response);
    }, function error(response) {

    });

    Jobsheet.getChild('job', id, 'sheetid').then(function success(response) {
      $scope.formData.jobs=[];
      angular.forEach(Data.get(response), function(data) {

        $scope.formData.jobs.push({'jtpjobid':data.jtpjobid,'jtpjobsheetid':data.jtpjobsheetid});
        $scope.selectedJobs.push(data);
      });
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
        Jobsheet.destroy(id).then(function success(response) {
          swal("Deleted!", "JobSheet Successfully Deleted", "success");
          Jobsheet.get().then(function success(getData) {
            $scope.jobsheets=Data.get(getData);
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


app.factory('Jobsheet',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/pm/sheet');
    },
    show : function(id) {
      return $http.get('sim/pm/sheet/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/sheet',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    filterData : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/sheet/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/sheet/'+id);
      return $http({
        method: 'POST',
        url: 'sim/pm/sheet/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    details : function(id) {
      return $http.get('sim/pm/sheet/detail/'+id);
    },
    getChild : function(type, id, parent) {
      return $http.get('sim/pm/sheet/pivot/'+type+'/'+id+'/'+parent);
    },
    employee : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    findList : function(data) {
      // return console.log(data);
      return $http({
        method: 'POST',
        url: 'sim/pm/job/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    dfConfig: function() {
      return $http.get('sim/pms/config/jobsheet/list');
    }
  };
}]);

app.controller('projectCtrl',['$scope','$http','$filter','Data','Project','notify','cfpLoadingBar','AccessFactory','genPDF','$state', function($scope,$http,$filter,Data,Project,notify,cfpLoadingBar,AccessFactory, genPDF, $state) {
  $scope.editing=false;
  $scope.detailsData={
    'frequency':0,
    'unit':0,
    'rate':0
  };
  $scope.details=[];
  $scope.filterData={
    'pstatusid':12
  };
  $scope.formData={
    'pprojectid':0,
    'pjobtypeid':1,
    'details':[]
  };
  
  $scope.lpoData={
    'pprojectid':0,
    'pjobtypeid':2,
    'details':[]
  };

  $scope.instantData={
    'pprojectid':0,
    'pjobtypeid':3,
    'details':[]
  };

  /*
  Drop Downs
  */

	//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('165').then(function success(response) {
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


  Project.CtTemplates().then(function success(response) {
    $scope.cttemplates=Data.get(response);
  }, function error(response) {

  });

  Project.customer().then(function success(response) {
    $scope.customers=Data.get(response);
  },function error(response) {

  });

  Project.users().then(function success(response) {
    $scope.users=Data.get(response);
  },function error(response) {

  });

  Project.status().then(function success(response) {
    $scope.status=Data.get(response);
  },function error(response) {

  });

  Project.attentions().then(function success(response) {
    $scope.attentions=Data.get(response);
  }, function error(response) {

  });

  Project.jobsites().then(function success(response) {
    $scope.jobsites=Data.get(response);
  }, function error(response) {

  });

  Project.employees().then(function success(response) {
    $scope.employees=Data.get(response);
  }, function error(response) {

  });

  Project.branches().then(function success(response) {
    $scope.branches=Data.get(response);
  }, function error(response) {

  });

  Project.service().then(function success(response) {
    $scope.services=Data.get(response);
  }, function error(response) {

  });
  cfpLoadingBar.start();
  Project.findlist($scope.filterData).then(function success(response) {

    $scope.projects=Data.get(response);
    $scope.doPagination($scope.projects);
    cfpLoadingBar.complete();

  },function error(response) {
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
  

  Project.jobtype().then(function success(response) {
    $scope.jobtype=Data.get(response);
  }, function error(response) {

  });

  $scope.searchList=function() {
    cfpLoadingBar.start();
    Project.findlist($scope.filterData).then(function success(response) {
        $scope.projects=Data.get(response);
        cfpLoadingBar.complete();
    },function error(response) {

    });
  };

  $scope.sumFreq=function(unit, rate, freq) {
      $scope.detailsData.total=parseFloat(unit)*parseFloat(rate)*parseFloat(freq);
  };


  $scope.LPOsum=function(unit, rate) {
      $scope.detailsData.total=parseFloat(unit)*parseFloat(rate);
  };

  $scope.clearForm=function() {
    $scope.formData={
      'pprojectid':0,
      'pjobtypeid':1,
      'details':[]
    };

    $scope.lpoData={
      'pprojectid':0,
      'pjobtypeid':2,
      'details':[]
    };

    $scope.instantData={
      'pprojectid':0,
      'pjobtypeid':3,
      'details':[]
    };


  Project.defaults('contract').then(function success(response) {
    $scope.formData.cpccontractconfigurationid=Data.get(response).cpccontractconfigurationid;
    $scope.formData.cpcreferencetype=Data.get(response).cpcreferencetype;
  }, function error(response) {

  });

  Project.defaults('onetime').then(function success(response) {
    $scope.lpoData.opconetimeconfigurationid=Data.get(response).opconetimeconfigurationid;
    $scope.lpoData.opcreferencetype=Data.get(response).opcreferencetype;
    $scope.lpoData.opcreferencetype=$scope.lpoData.opcreferencetype;
  }, function error(response) {

  });

  Project.defaults('instant').then(function success(response) {
    $scope.instantData.ipcprojectconfigurationid=Data.get(response).ipcprojectconfigurationid;
    $scope.instantData.ipcreferencetype=Data.get(response).ipcreferencetype;

    $scope.instantData.ipcreferencetype= $scope.instantData.ipcreferencetype;
  }, function error(response) {

  });

  Project.dfTemplate().then(function success(response) {
    $scope.formData.pcontracttemplateid=Data.get(response).ctcontracttemplateid;
    Project.getBody($scope.formData.pcontracttemplateid).then(function success(getData) {
      angular.forEach(Data.get(getData), function(data) {
        $scope.formData.pdescriptiontop=data.ctdescriptiontop;
        $scope.formData.pdescriptionbottom=data.ctdescriptionbottom;
      });
    }, function error(getData) {

    });
  }, function error(response) {
  });

};
$scope.suspended=false;
$scope.resume=false;

$scope.suspend=function(id, ex) {
  $("#contract").modal("hide");
  $("#instantForm").modal("hide");
  $("#lpoForm").modal("hide");

  swal({
    title: "Reason!",
    text: "Write a Reason to Suspend:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Write Reason"
  },
  function(inputValue){
    if (inputValue === false) {
      switch (ex) {
        case 'c':
          $("#contract").modal("show");
          break;
        case 'l':
          $("#lpoForm").modal("show");
          break;
        case 'i':
          $("#instantForm").modal("show");
          break;

      }
      
      return false;
    }

    if (inputValue === "") {
      swal.showInputError("You need to write something!");
      return false
    }

    Project.suspend(id, inputValue).then(function success(response) {
      cfpLoadingBar.start();
      notify.custom('success','Project Suspended','Project');
      $scope.suspended=false;
      swal("Nice!", "You wrote: " + inputValue, "success");
      Project.findlist($scope.filterData).then(function success(fetch) {
        $scope.projects=Data.get(fetch);
        cfpLoadingBar.complete();
        // $("#contract").modal("toggle");
      },function error(fetch) {

      });
    }, function error(response) {

    });

  });
};

$scope.resumeProject=function(id) {
  cfpLoadingBar.start();
  Project.resume(id).then(function success(response) {
    notify.custom('success','Project Resumed','Project');
    $scope.resume=false;
    Project.findlist($scope.filterData).then(function success(fetch) {
      $scope.projects=Data.get(fetch);
      cfpLoadingBar.complete();
      $("#contract").modal("hide");
      $("#instantForm").modal("hide");
      $("#lpoForm").modal("hide");
    },function error(fetch) {

    });
  }, function error(response) {

  });
};

$scope.applyTemplate=function(templateId) {
  cfpLoadingBar.start();
  Project.getBody(templateId).then(function success(getData) {
    angular.forEach(Data.get(getData), function(data) {
      $scope.formData.pdescriptiontop=data.ctdescriptiontop;
      $scope.formData.pdescriptionbottom=data.ctdescriptionbottom;
      cfpLoadingBar.complete();
      notify.custom('success','New Template Applied!','Template');
    });
  }, function error(getData) {

  });
};

 
  $scope.findContractTotalJobs=function(data) {
    var base=$scope.formData.pbaseperiodid;
    var period=$scope.formData.pperiod;
    var totalJobs=0, pdjobs=0;


    angular.forEach(data, function(row) {
      if(row.pdfrequencyperiodid==base) {
        pdjobs=Number(row.pdfrequency)*period;
        row.pdtotaljobs=pdjobs;
      }else {
        pdjobs=Number(row.pdfrequency)*period*12;
        row.pdtotaljobs=pdjobs

      }
      //
      totalJobs+=pdjobs;
    });

    return totalJobs;
  };

  $scope.srreq=false;
  $scope.cpushDetail=function() {
    if($scope.detailsData.srid=='' || $scope.detailsData.srid==null ) {
      notify.custom('error','Service Required!','Details');
      $scope.srreq=true;
    }else{
  //  $scope.frquency= parseInt($scope.detailsData.frequency);
      $scope.formData.details.push({
        'pdprojectdetailid':'0',
        'pdserviceid':$scope.detailsData.srid,
        'pdprojectid':$scope.formData.pprojectid,
        'pdjobsiteid':$scope.formData.pjobsiteid,
        'pdservicedescription':$scope.detailsData.desc,
        'pdunit':$scope.detailsData.unit,
        'pdrate':$scope.detailsData.rate,
        'pdfrequency':$scope.detailsData.frequency,
        'pdfrequencyperiodid':$scope.detailsData.basePeriod,
        'pdtotal':$scope.detailsData.total

      });

      $scope.srreq=false;
      $scope.detailsData={};
      notify.custom('success','Details Successfully Added!','Project!');
      $("#focus").focus();
    }

  };
  $scope.detailEdit=function(data)
  {
    // $scope.formData.details.splice(id,1);
    $scope.formData.details=[];
    console.log(data.pdfrequency);
    $scope.formData.details.push({
      'pdprojectdetailid':data.pdprojectdetailid,
      'pdserviceid':data.pdserviceid,
      'pdprojectid':data.pdprojectid,
      'pdjobsiteid':data.pdjobsiteid,
      'pdservicedescription':data.pdservicedescription,
      'pdunit':data.pdunit,
      'pdrate':data.pdrate,
      'pdfrequency':data.pdfrequency,
      'pdfrequencyperiodid':data.pdfrequencyperiodid,
      'pdtotal':data.pdtotal,
       'isedit':1

    });
    console.log($scope.formData)
  }
 
  
  // $scope.saveContract = function() {
  //   // cfpLoadingBar.start();

 
  //  if($scope.formData.details.length<1) {
     
  //   notify.custom('error','Minimum One Details Required!','Details');
  //   }else {
      
  //          $scope.formData.ptotaljobs=$scope.findContractTotalJobs($scope.formData.details);
 

  //      Project.save($scope.formData).then(function success(response) {
         
  //     console.log("ok");
  //     console.log(responce);
  //     console.log((Data.get(response))); return;
  //       // $("#contract").modal("hide");
  //       if(Data.get(response).success){
     
  //     // cfpLoadingBar.complete();

  //       $scope.clearForm();
 
      
  //       notify.custom('success','Project Successfully Saved!','Project');
    
  //       Project.findlist($scope.filterData).then(function success(getData) {
  //         $scope.projects=Data.get(getData);
          
  //       }, function error(getData) {
     
  //       });
  //       }
  //       else
  //       {

  //          if(Data.get(response).message=="UQ_ProjectReference") {
  //               notify.custom('error','ProjectReference  Already  Exists!','Projects');
  //           }
  //           else{
  //             notify.custom('error','Something went wrong!','projects');
  //           }
                            
  //       }
  //     }, function error(response) {

  //     });
      
  //   }
  // };
  $scope.saveContract = function() {
    
    console.log($scope.formData); 
    
    cfpLoadingBar.start();
    if($scope.formData.details.length<1) {
      cfpLoadingBar.complete();
      notify.custom('error','Minimum One Details Required!','Details');
    }else {
      $scope.formData.ptotaljobs=$scope.findContractTotalJobs($scope.formData.details);
      
  console.log($scope.formData)
      Project.save($scope.formData).then(function success(response) {
        console.log("save")
        console.log(response)
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#contract").modal("hide");
        notify.custom('success','Project Successfully Saved!','Project');
        Project.findlist($scope.filterData).then(function success(getData) {
          $scope.projects=Data.get(getData);
          $scope.doPagination($scope.projects);
        }, function error(getData) {

        });
      }, function error(response) {
      console.log("error")
      console.log(response)
      });
    }
  };
  $scope.editRow = function(id) {
    cfpLoadingBar.start();
    var detail, i=0, row;
    Project.show(id).then(function success(response) {
      switch (Data.get(response).pstatusid) {
        case '14':
              $scope.resume=true;
          break;
        default:
            $scope.suspended=true;

      }
      // $scope.formData=Data.get(response);
      row=Data.get(response);
      // i++;
      if(i==2) {
        row.details=detail;
        $scope.formData=row;
        $("#contract").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
    }, function error(response) {

    });

    Project.details(id).then(function success(response) {
      // $scope.formData.details=Data.get(response);

        detail=Data.get(response);
        if(i==1) {
          row.details=detail;
          $scope.formData=row;
          $("#contract").modal("show");
          cfpLoadingBar.complete();
        }else {
          i=2;
        }
    }, function error(response) {

    });

  };


  $scope.CgrandTotal=function() {
    var total = 0;
    for(var i = 0; i < $scope.formData.details.length; i++){
        var details = $scope.formData.details[i];
        total += parseFloat(details.pdtotal);
    }
    $scope.formData.pgrandtotal=total;
    return total;
    
  };

  $scope.LgrandTotal=function() {
    var total = 0;
    for(var i = 0; i < $scope.lpoData.details.length; i++){
        var details = $scope.lpoData.details[i];
        total += parseFloat(details.pdtotal);
    }
    $scope.formData.pgrandtotal=total;
    return total;
  };

  $scope.IgrandTotal=function() {
    var total = 0;
    for(var i = 0; i < $scope.instantData.details.length; i++){
        var details = $scope.instantData.details[i];
        total += parseFloat(details.pdtotal);
        
    $scope.formData.pgrandtotal=total;
    }
    return total;
  };

  $scope.cremoveDetail=function(id) {
    $scope.formData.details.splice(id,1);
    notify.custom('error','Details Successfully Removed!','Project!');
    $("#focus").focus();
  };
  // OneTime Details
  $scope.opushDetail=function() {
    if($scope.detailsData.srid=='' || $scope.detailsData.srid==null ) {
      notify.custom('error','Service Required!','Details');
      $scope.srreq=true;
    }else{
      $scope.lpoData.details.push({
        'pdprojectdetailid':'0',
        'pdserviceid':$scope.detailsData.srid,
        'pdprojectid':$scope.formData.pprojectid,
        'pdjobsiteid':$scope.formData.pjobsiteid,
        'pdservicedescription':$scope.detailsData.desc,
        'pdunit':$scope.detailsData.unit,
        'pdrate':$scope.detailsData.rate,
        'pdfrequencyperiodid':$scope.detailsData.frequency,
        'pdtotaljobs':'1',
        'pdtotal':$scope.detailsData.total

      });
      $scope.srreq=false;
      $scope.detailsData={};
      notify.custom('success','Details Successfully Added!','Project!');
      $("#focus").focus();
    }


  };

  $scope.oremoveDetail=function(id) {
    $scope.lpoData.details.splice(id,1);
    notify.custom('error','Details Successfully Removed!','Project!');
    $("#focus").focus();
  };
// Instant Details
  $scope.ipushDetail=function() {
    if($scope.detailsData.srid=='' || $scope.detailsData.srid==null ) {
      notify.custom('error','Service Required!','Details');
      $scope.srreq=true;
    }else{
      $scope.instantData.details.push({
        'pdprojectdetailid':'0',
        'pdserviceid':$scope.detailsData.srid,
        'pdprojectid':$scope.formData.pprojectid,
        'pdjobsiteid':$scope.formData.pjobsiteid,
        'pdservicedescription':$scope.detailsData.desc,
        'pdunit':$scope.detailsData.unit,
        'pdrate':$scope.detailsData.rate,
        'pdfrequencyperiodid':$scope.detailsData.frequency,
        'pdtotaljobs':'1',
        'pdtotal':$scope.detailsData.total

      });

      $scope.srreq=false;
      $scope.detailsData={};

      notify.custom('success','Details Successfully Added!','Project!');
      $("#focus").focus();
    }
  };

  $scope.iremoveDetail=function(id) {
    $scope.instantData.details.splice(id,1);
    notify.custom('error','Details Successfully Removed!','Project!');
    $("#focus").focus();
  };

  $scope.saveLPO=function() {
    console.log($scope.formData); 
    cfpLoadingBar.start();

    $scope.lpoData.ptotaljobs=$scope.lpoData.details.length;
    if($scope.lpoData.details.length<1) {
      cfpLoadingBar.complete();
      notify.custom('error','Minimum One Details Required!','Details');
    }else {
      Project.save($scope.lpoData).then(function success(response) {
        if(Data.get(response).success){
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#lpoForm").modal("hide");
        notify.custom('success','Project Successfully Saved!','Project');
        Project.findlist($scope.filterData).then(function success(getData) {
          $scope.projects=Data.get(getData);
          $scope.doPagination($scope.projects);
        }, function error(getData) {

        });
        }
        else
        {

          if(Data.get(response).message=="UQ_LPOReference_notnull") {
                                    notify.custom('error','LPO Reference  Already Exists!','Project');
                                }
                                else if( Data.get(response).message=="UQ_ProjectReference") { 
                                    notify.custom('error','Project Reference  Already exists!','Project');
                                }
                                else{
                                    notify.custom('error','Something Wrong!','Project');
                                }


        }
      }, function error(response) {

      });
    }
  };

  $scope.editLPO = function(id) {
    cfpLoadingBar.start();
    var detail, i=0, row;

    Project.show(id).then(function success(response) {
      row=Data.get(response);
      // i++;
      if(i==2) {
        row.details=detail;
        $scope.lpoData=row;
        $("#lpoForm").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
    }, function error(response) {

    });

    Project.details(id).then(function success(response) {

      detail=Data.get(response);
      if(i==1) {
        row.details=detail;
        $scope.lpoData=row;
        $("#lpoForm").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=2;
      }
    }, function error(response) {

    });

  };

  $scope.saveInstant=function() {
    cfpLoadingBar.start(); 
    $scope.instantData.ptotaljobs=$scope.instantData.details.length;
    if($scope.instantData.details.length<1) {
      cfpLoadingBar.complete();
      notify.custom('error','Minimum One Details Required!','Details');
    }else {
      Project.save($scope.instantData).then(function success(response) {
        if(Data.get(response).success){
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#instantForm").modal("hide");
        notify.custom('success','Project Successfully Saved!','Project');
        Project.findlist($scope.filterData).then(function success(getData) {
          $scope.projects=Data.get(getData);
          $scope.doPagination($scope.projects);
        }, function error(getData) {

        });
        }
        else{
                  cfpLoadingBar.complete();
      if(Data.get(response).message=="UQ_ProjectReference") {

            notify.custom('error','Project Reference  Already Exists!','Project');
        }
        else{
					notify.custom('error','Something went wrong!','Project');
				}
        }

      }, function error(response) {
        cfpLoadingBar.complete();
      });
    }
  };

  $scope.editInstant = function(id) {
    cfpLoadingBar.start();
    var detail, i=0, row;
    Project.show(id).then(function success(response) {
      row=Data.get(response);
      // i++;
      if(i==2) {
        row.details=detail;
        $scope.instantData=row;
        $("#instantForm").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
    }, function error(response) {

    });

    Project.details(id).then(function success(response) {

      detail=Data.get(response);
      if(i==1) {
        row.details=detail;
        $scope.instantData=row;
        $("#instantForm").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=2;
      }
    }, function error(response) {

    });

  };

  $scope.deleteContract = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Project?",
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
					Project.destroy(id).then(function success(response) {
            $("#contract").modal("hide");
            $("#instantForm").modal("hide");
            $("#lpoForm").modal("hide");

						swal("Deleted!", "Project Successfully Deleted", "success");
						Project.findlist($scope.filterData).then(function success(getData) {
							$scope.projects = Data.get(getData);
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
    // console.log(id);
    var data={};
    console.log(id)
    Project.exportProject(id).then(function success(res) {
      data=Data.get(res);
      console.log(data);
    }, function error(err) {

    });

    Project.exportProjectDetails(id).then(function success(res) {
      data.details=Data.get(res);
    }, function error(err) {

    });

    Project.company().then(function success(response) {
      data.company=Data.get(response);
      $scope.makePdf(data);
      
    }, function error(response) {

    });
    
  },
  
  $scope.makePdf=function(data) {
    // console.log(data);return;
    console.log(data);
    var dataTable=[]
    dataTable.push(
      [ 
            // {text:'Service', style:'headers',border:[true, true, true, true]},
            {text:'Service', style:'headers'},
            {text:'Unit', style:'headers'},
            {text:'Rate', style:'headers'},
            {text:'Frequency', style:'headers'},
            {text:'Total', style:'headers'}
          ]
    )
    angular.forEach(data.details, function(i) {
      var s=(i.pdfrequency>1 ? 's':'');
      dataTable.push(
        [
          {
            text:i.service+'\n'
            +i.pdservicedescription
            , 
            style:'tbodyRows',
            border:[true,true,true,true]},
          // {text:i.pdservicedescription, style:'tbodyRows'},
          {text:i.pdunit.toString(), style:'tbodyRows'},
          {text:i.pdrate.toString(), style:'tbodyRows'},
          {text:i.pdfrequency.toString()+'/'+(i.pdfrequencyperiodid>1 ? 'Month'+s:'Year'+s), style:'tbodyRows'},
          {text:i.pdtotal.toString(), style:'tbodyRows'}
        ]
      );
    });

    dataTable.push([
      {text:'Grand Total', alignment:'right', color:'#black', margin:[0,3,0,0], colSpan:4},
      {},
      {},
      {},
      {text:data.pgrandtotal, alignment:'center', margin:[0,3,0,0]}
      
      
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
                text:'Contract',
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
                text: (data.pdescriptiontop == null ? '' : data.pdescriptiontop.replace(/<\/?[^>]+(>|$)/g, "")),
                fontSize:12
              },
            ],
            margin:[0,20,0,20]
          },
          {
            
            table: {
              // headers are automatically repeated if the table spans over multiple pages
              // you can declare how many rows should be treated as headers
              headerRows: 1,
              widths: [ '*','*','*','*','*'],
              body:dataTable
              // body: [
              //   [ 
              //     {text:'Service', style:'headers'},
              //     {text:'Description', style:'headers'},
              //     {text:'Unit', style:'headers'},
              //     {text:'Rate', style:'headers'},
              //     {text:'Period', style:'headers'},
              //     {text:'Total', style:'headers'}
              //   ],
              //   // [ { text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4','hoop' ]
              // ]
            },
            layout:'lightHorizontalLines',
            margin:[0,0,0,5]
            
            
          },
          {
            text:'Total Charged : '+data.pgrandtotal+' (AED) ('+$filter('toWords')(data.pgrandtotal)+')', 
            margin:10
          },
          {
            columns: [
              {
                text: (data.pdescriptionbottom == null ? '' : data.pdescriptionbottom.replace(/<\/?[^>]+(>|$)/g, "")),
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

app.factory('Project', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/pm/project');
    },
    show : function(id) {
      return $http.get('sim/pm/project/' + id);
    },
    suspend: function(id, reason) {
      return $http.post('sim/pm/project/suspended/'+id+'/'+reason);
    },
    resume: function(id) {
      return $http.post('sim/pm/project/resume/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/project',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    exportProject:function(id) {
      return $http.get('sim/pm/project/export/'+id);
    },
    exportProjectDetails:function(id) {
      return $http.get('sim/pm/project/detail/export/'+id);
    },
    getBody : function(id) {
      return $http.get('sim/pms/template/contract/body/'+id);
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    status: function() {
      return $http.get('sim/ddmenu/pm/status');
    },
    jobtype : function() {
      return $http.get('sim/ddmenu/pm/jobtype');
    },
    dfTemplate : function() {
      return $http.get('sim/pms/template/contract/defualtid');
    },
    details : function(id) {
      return $http.get('sim/pm/project/detail/'+id);
    },
    findlist : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/project/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    defaults : function(param) {
      return $http.get('sim/pms/config/project/'+param+'/list')
    },
    CtTemplates : function() {
      return $http.get('sim/pms/template/contract/ddmenu');
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/project/' + id);
      return $http({
        method: 'POST',
        url: 'sim/pm/project/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    company : function() {
      return $http.get('M@ster786/tenant/company/primary');
    },
    attentions : function() {
      return $http.get('sim/sm/customer/attention/ddmenu');
    },
    jobsites : function() {
      return $http.get('sim/sm/jobsite/ddmenu');
    },
    employees : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    branches : function() {
      return $http.get('sim/hm/branch/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    }
  };

}]);

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

app.factory('Quotation', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/pm/quotation');
    },
    show : function(id) {
      return $http.get('sim/pm/quotation/' + id);
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    status: function() {
      return $http.get('sim/ddmenu/pm/status');
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/quotation',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    findList : function(data) {
      // return console.log(data);
      return $http({
        method: 'POST',
        url: 'sim/pm/quotation/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    dfTemplate : function() {
      return $http.get('sim/pms/template/quotation/defualtid');
    },
    dfReference : function() {
      return $http.get('sim/pms/config/quotation/list');
    },
    getBody : function(id) {
      return $http.get('sim/pms/template/quotation/body/'+id);
    },
    details : function(id) {
      return $http.get('sim/pm/quotation/detail/getlist/'+id);
    },
    templates : function() {
      return $http.get('sim/pms/template/quotation/ddmenu');
    },
    destroy : function(id) {
      // return $http.delete('sim/pm/quotation/' + id);
      return $http({
        method: 'POST',
        url: 'sim/pm/quotation/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    company : function() {
      return $http.get('M@ster786/tenant/company/primary');
    },
    attentions : function() {
      return $http.get('sim/sm/customer/attention/ddmenu');
    },
    jobsites : function() {
      return $http.get('sim/sm/jobsite/ddmenu');
    },
    employees : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    branches : function() {
      return $http.get('sim/hm/branch/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    changecolumn : function(id) {
      return $http.get('sim/pm/quotation/'+id);
    },
    exportQuotation:function(id) {
      return $http.get('sim/pm/quotation/export/'+id);
    },
    exportQuotationDetails:function(id) {
      return $http.get('sim/pm/quotation/detail/export/'+id);
    },
    
  };

}]);


// Get Taskgroups
app.controller('taskCtrl', ['$scope','$rootScope','$http','$log','Task','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $rootScope, $http, $log, Task, Data, notify,cfpLoadingBar,AccessFactory,$state){
  $scope.groupData={
    'tgtaskgroupid':0
  };
	//permission
  
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('162').then(function success(response) {
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
  $scope.taskForm={
    'tktaskid':0,
    'users':[]
  };
  $scope.ok=function(data)
  {
console.log(data)
  }
  // Task.users().then(function success(response) {
  //   $scope.users=Data.get(response);
  // }, error function(response) {
  //
  // });
  // $scope.$on()
  
  $scope.clearForm=function() {
    $scope.taskForm={
      'tktaskid':0,
      'users':[],
    };
    $scope.groupData={
      'tgtaskgroupid':0
    };
    $('.notify').prop('checked', false);
  };

  Task.employees().then(function success(response) {
    console.log('users');
    $scope.employees=Data.get(response);
  }, function error(response) {

  });


  cfpLoadingBar.start();
  Task.get('taskgroup').then(function success(response) {

    $scope.taskGroup=Data.get(response);
    cfpLoadingBar.complete();
    // $scope.tasks=Task.filterTask($scope.taskGroup);
    // console.log($scope.taskGroup);

  }, function error(response) {
    cfpLoadingBar.complete();

  });

  // Task.users().then(function success(response) {
  //   $scope.users=Data.get(response);
  // }, function error(response) {

  // });

  Task.users().then(function success(response) {
    $scope.users=Data.get(response);
 
  }, function error(response) {

  });
  // $scope.resultsWithInfo = [{
  //   name: "Baseline",
  //   id: "something_unique1",
  //   idx: 1,
  //   eui: 100
  // }, {
  //   name: "Alt1",
  //   id: "something_unique2",
  //   idx: 2,
  //   eui: 90
  // }, {
  //   name: "Alt2",
  //   id: "something_unique3",
  //   idx: 3,
  //   eui: 80
  // }, {
  //   name: "Alt3",
  //   id: "something_unique4",
  //   idx: 4,
  //   eui: 75
  // }, {
  //   name: "Alt4",
  //   id: "something_unique5",
  //   idx: 5,
  //   eui: 60
  // }];

   // I want it to store the whole JSON object {id, name, idx, eui}
      $scope.selected_baselines = [];
      $scope.selected_baseline_settings = {
      	template: '<p id="selected{{option.suuserid}} " ><b><span  >{{option.suuserid}}</span>{{option.suusername}}</b></p>',
        searchField: 'name',
        enableSearch: true,
       
        selectedToTop: true // Doesn't work
      };

    console.log($scope.selected_userid);
    $scope.selected_baselines_customTexts = {buttonDefaultText: 'Select Users'};
    console.log( $scope.selected_baselines_customTexts);
  $scope.addTask=function(id) {
    $scope.taskData={
      'tktaskid':'0',
      'tktaskgroupid':id,
      'tkdescription':$(".taskDesc"+id).summernote("code"),
      'tktask':$(".addTask"+id).val(),
      'tkassignedemployeeid':$(".assign"+id).val(),
      'tkisnotifyassigner':$(".notif"+id).val(),
      'tkduedate':$(".due"+id).val()
    };


    // console.log($scope.taskData);return;
    Task.save('task', $scope.taskData).then(function success(response) {
      $(".addTask"+id).val('').focus();
      $(".taskDesc"+id).summernote("code","");
      // $("show").hide();
      notify.success();
      Task.get('taskgroup').then(function success(response) {
        $scope.taskGroup=Data.get(response);
      }, function error(response) {

      });
    }, function error(response) {

    });
  };
  $scope.selecteddata=[]
  $scope.changevalues=function(data){
  
  angular.element(document).ready(function () {
    $(document).on("change", ".notify", function() {
      if(this.checked) {
         $scope.utuserid=data.suuserid
        
          if($scope.taskForm.tktaskid=='0') {
                $scope.taskForm.users.push({'utuserid':$scope.utuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
          }
          else{
            $scope.taskForm.users.push({'utuserid':$scope.utuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
          }
      }
      else{
        $scope.utuserid=data.suuserid
        for(var i=0;i < $scope.taskForm.users.length; i++) {
             
              if($scope.taskForm.users[i].utuserid==$scope.utuserid){
 
                  $scope.taskForm.users.splice(i,1);
              }
        }
      
      }
    });
  });

  }


//   $scope.changevalues=function(data,index)
//   {
// console.log(this);
//   angular.element(document).ready(function () {

//    if(data=='YES')
//       {
//           $scope.utuserid=index.suuserid
        
//           if($scope.taskForm.tktaskid=='0') {
//                 $scope.taskForm.users.push({'utuserid':$scope.utuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
//           }
//           else{
//             $scope.taskForm.users.push({'utuserid':$scope.utuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
//           }
//     }
//     if(data=='NO')
//     {
//     // alert("fg")
//        console.log($scope.taskForm.users);
    
//       for(var i=0;i < $scope.taskForm.users.length; i++) {
//             console.log($scope.taskForm.users);
//             if($scope.taskForm.users[i].utuserid==data){
          
//                $scope.taskForm.users.splice(i,1);
//             }
// 			}
//     }
//   });
//   }
$scope.taskids=function(data)
{
  console.log(data)
  $scope.taskid=data;
}
  $scope.newTask=function() {
   console.log($scope.taskForm);
      // angular.forEach($scope.selected_baselines, function(key) {
      //   console.log(key.suuserid);
      //   console.log($scope.taskid)
      //   console.log($scope.taskForm.tktaskid);
      //   if($scope.taskForm.tktaskid=='0') {
      //  $scope.taskForm.users.push({'utuserid':key.suuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
      //   }
      //   else{
      //     $scope.taskForm.users.push({'utuserid':key.suuserid,'uttaskid':$scope.taskid,'utisnotify':1,'utisremovable':0});
      //   }
      // });  
      cfpLoadingBar.start();
     Task.save('task', $scope.taskForm).then(function success(response) {
      Task.get('taskgroup').then(function success(response) {
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#newTask").modal("hide");
        notify.success();
        $scope.taskGroup=Data.get(response);
      }, function error(response) {

      });
    }, function error(response) {

    });
  };
 
  $scope.editTask=function(id) {

    $scope.taskid=id;
    cfpLoadingBar.start();
    Task.show('task', id).then(function success(response) {
      $scope.taskForm=Data.get(response);
      console.log($scope.taskForm.users);
      angular.forEach($scope.taskForm.users, function(key) {
        // console.log(key.utuserid);
        $scope.selected_userid=key.utuserid;
      console.log( $scope.selected_userid);
      angular.element(document).ready(function () {
        // $('input:checkbox').filter('.roll').prop('checked', false);
        $('input:checkbox[value='+ $scope.selected_userid+']').prop('checked', true);
    });
        // console.log( $('p.'+ $scope.selected_userid));
      // $('.selected'+4).hide();
      });

      // console.log( $scope.taskForm.users.utuserid);
      cfpLoadingBar.complete();
      $("#newTask").modal("show");
    }, function error(response) {

    });
  

  };


  $scope.deleteTask=function(id) {
    
    
    swal({
      title: "Are you sure?",
      text: "Do You Want To Delete This Task?",
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
        Task.destroy('task',id).then(function success(response) {
          swal("Deleted!", "Task Successfully Deleted", "success");
          Task.get('taskgroup').then(function success(response) {
            $scope.taskGroup=Data.get(response);
          }, function error(response) {

          });

        },function error(response) {
          swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
        });
      } else {
        swal("Cancelled", "Terminated The Process", "error");
      }
    });
  };

  $scope.newGroup=function() {
    cfpLoadingBar.start();
    console.log($scope.groupData);
    Task.save('taskgroup', $scope.groupData).then(function success(response) {
      Task.get('taskgroup').then(function success(response) {
        notify.success();
        $scope.clearForm();
        cfpLoadingBar.complete();
        $("#newGroup").modal("hide");
        $scope.taskGroup=Data.get(response);
        console.log($scope.taskGroup);
      }, function error(response) {

      });
    }, function error(response) {

    });
  };
  $scope.editGroup=function(id) {
    console.log(id);
    cfpLoadingBar.start();

    Task.show('taskgroup', id).then(function success(response) {
      $scope.groupData=Data.get(response);
      cfpLoadingBar.complete();
      $("#newGroup").modal("show");
    }, function error(response) {

    });
  };
  $scope.deleteGroup = function(id) {
    swal({
      title: "Are you sure?",
      text: "Do You Want To Delete This Group?",
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
        Task.destroy('taskgroup',id).then(function success(response) {
          swal("Deleted!", "Group Successfully Deleted", "success");
          Task.get('taskgroup').then(function success(response) {
            $scope.taskGroup=Data.get(response);
          }, function error(response) {

          });

        },function error(response) {
          swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
        });
      } else {
        swal("Cancelled", "Terminated The Process", "error");
      }
    });
	};

  angular.element(document).ready(function () {
    $('.dropdown dd ul li').each(function(idx,el){ console.log(el); });
    $(".dropdown dt a").on('click', function () {
      $(".dropdown dd ul").slideToggle('fast');
  });
  
  $(".dropdown dd ul li a").on('click', function () {
      $(".dropdown dd ul").hide();
  });
 
  function getSelectedValue(id) {
    console.log($("#" + id).find("dt a span.value"))
      return $("#" + id).find("dt a span.value").html();
  }
  
  $(document).bind('click', function (e) {
      var $clicked = $(e.target);
      if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
  });
  
  
  $('.mutliSelect input[type="checkbox"]').on('click', function () {
  
      var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
          title = $(this).val() + ",";
  
      if ($(this).is(':checked')) {
          var html = '<span title="' + title + '">' + title + '</span>';
          $('.multiSel').append(html);
          $(".hida").hide();
      } else {
          $('span[title="' + title + '"]').remove();
          var ret = $(".hida");
          console.log(ret)
          $('.dropdown dt a').append(ret);
  
      }
  });
  });

}]);

app.factory('Task', ['$http', function($http) {
  return {
    get:function(type) {
      return $http.get('sim/pm/'+type);
    },
    show : function(type, id) {
      return $http.get('sim/pm/'+type+'/' + id);
    },
    save : function(type, Data) {
      return $http({
        method: 'POST',
        url: 'sim/pm/'+type,
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(Data)
      });
    },
    destroy : function(type,id) {
      // return $http.delete('sim/pm/'+type+'/' + id);
      return $http({
        method: 'POST',
        url: 'sim/pm/'+type+'/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    filterTask: function(group) {
      var tasks;
      angular.forEach(group, function(data) {
        tasks=data.hmtasks;
      });
      return tasks;
    },
    employees: function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    users : function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    findlist : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/sut/contactbook/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
  };
}]);

app.controller('configCtrl',['$scope','$http','$log','Config','Data','notify','cfpLoadingBar', function($scope, $http, $log, Config, Data, notify,cfpLoadingBar) {
  // Globals
    var num=-1;
    var mDay=new Date();
  // Variables for pushing Prefixes and Suffixes
    
    $scope.customShow=true;
    $scope.suffixCusomShow=true;

    $scope.showPreviewButton=true;
    $scope.showPreivew=false;

    $scope.delmiterShow=true;

    $scope.selectedPrefs=[];
    $scope.selectedSufs=[];
  //  Prefixes and Suffixes Static Object for iterate
    $scope.prefNsuf=[
      {'value':'branch', 'text':'BranchCode ', 'attr':true, 'period':0},
      {'value':'user', 'text':'UserCode ', 'attr':true, 'period':0},
      {'value':'custom', 'text':'CustomCode ', 'attr':true, 'period':0},
      {'value':'customer', 'text':'CustomerCode ', 'attr':true, 'period':0},
      {'value':'company', 'text':'CompanyCode ', 'attr':true, 'period':0},
      {'value':'service', 'text':'ServiceCode ', 'attr':true, 'period':0},
      {'value':'department', 'text':'DepartmentCode ', 'attr':true, 'period':0},
      {'value':'delimeter', 'text':'Delimiter ', 'attr':true, 'period':0},
      {'value':'day1', 'text':'Day(D) ', 'attr':true, 'period':4},
      {'value':'day2', 'text':'Day(DD) ', 'attr':true, 'period':4},
      {'value':'month1', 'text':'Month(M) ', 'attr':true, 'period':2},
      {'value':'month2', 'text':'Month(MM) ', 'attr':true, 'period':2},
      {'value':'year2', 'text':'Year(YY) ', 'attr':true, 'period':1},
      {'value':'year4', 'text':'Year(YYYY) ', 'attr':true, 'period':1}
    ];
    
    $scope.periodCity=[
      {'value':'0', 'text':'None'}
    ];
// End: Iterate Object
// Function For Making pattern
cfpLoadingBar.start();
  $scope.checkPeriods=function(period) {
    var i=false;
    angular.forEach($scope.selectedPrefs, function(p) {
      if(p.period==period) {
        i=true;
        return;
      }
    });

    angular.forEach($scope.selectedSufs, function(s) {
      if(s.period==period) {
        i=true;
        return;
      }
    });

    return i;
  };
  // Quotation
  $scope.makePcity=function() {
    $scope.periodCity=[];
    $scope.periodCity.push({'value':0, 'text':'None'});
    
    if($scope.checkPeriods(1)) {
      $scope.periodCity.push({'value':1, 'text':'Yearly'});

      if($scope.checkPeriods(2)) {
        $scope.periodCity.push({'value':2, 'text':'Monthly'});

        if($scope.checkPeriods(4)) {
          $scope.periodCity.push({'value':4, 'text':'Daily'});
        }
      }
    }
    
  };

  $scope.changeAffixesAttribute=function(params) {
    angular.forEach(params.split(','), function(param) {
      angular.forEach($scope.prefNsuf, function(affixes) {
        if(affixes.value==param) {
          affixes.attr=false;
        }
      });
    });
  }

  

  // Zero fill 
  $scope.zeroFill=function(width, startingNumber, len) {
    slength = String(startingNumber).length;
    if(slength<len && width) {
      len=len-slength;
      while (len--) 
        startingNumber = '0' + startingNumber;
      num=startingNumber;
    }else {
      num=startingNumber;
    }
  };
// End: Making Pattern
  $scope.prefixesAndSuffixesFromRemote=function(dataPattern, isPrefix) {
    if(dataPattern==null) {
      dataPattern=',';
    }
    angular.forEach(dataPattern.split(','), function(data) {
      angular.forEach($scope.prefNsuf, function(prefix) {
        if(data==prefix.value) {
          if(isPrefix) {
            $scope.selectedPrefs.push(prefix);
          }else{
            $scope.selectedSufs.push(prefix);
          }
          return;
        }
      });
    });
    
  }
// Get Quotaion Default Datas
  $scope.clearaffixes=function() {
    $scope.selectedPrefs=[];
    $scope.selectedSufs=[];
  }

  $scope.addPref=function(row, index) {
    $scope.selectedPrefs.push(row);
    $scope.makePcity();
  };

  $scope.removePref=function(row, index) {
    $scope.selectedPrefs.splice(index,1);
    $scope.makePcity();
  };

  $scope.addSufs=function(row, index) {
    $scope.selectedSufs.push(row);
    $scope.makePcity();
  };

  $scope.removeSuf=function(row, index) {
    $scope.selectedSufs.splice(index,1);
    $scope.makePcity();
  };

  $scope.quotationConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.get('quotation').then(function success(response) {

      
      $scope.formData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).qcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).qcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.formData.qcperiodicityid) {
          flag=1;
          $scope.formData.qcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.formData.qcperiodicityid=0;
      }
    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveQuotation=function() {
    cfpLoadingBar.start();
  
    $scope.formData.qcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.formData.qcreferenceprefixpattern+=p.value+',';
    });
    $scope.formData.qcreferenceprefixpattern=$scope.formData.qcreferenceprefixpattern.slice(0,-1);
    $scope.formData.qcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.formData.qcreferencesuffixpattern+=s.value+',';
    });
    $scope.formData.qcreferencesuffixpattern=$scope.formData.qcreferencesuffixpattern.slice(0,-1);
    Config.save('quotation',$scope.formData).then(function success(response) {
      notify.custom('success','Quotation Successfully Saved','Quotation');
      $scope.quotationConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Quotation!');
      cfpLoadingBar.complete();
    });
  };
  

  $scope.contractConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.project('contract').then(function success(response) {
      $scope.ctData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).cpcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).cpcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.ctData.cpcperiodicityid) {
          flag=1;
          $scope.ctData.cpcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.ctData.cpcperiodicityid=0;
      }
    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveContract=function() {
    cfpLoadingBar.start();
    $scope.ctData.cpcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.ctData.cpcreferenceprefixpattern+=p.value+',';
    });
    $scope.ctData.cpcreferenceprefixpattern=$scope.ctData.cpcreferenceprefixpattern.slice(0,-1);
    $scope.ctData.cpcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.ctData.cpcreferencesuffixpattern+=s.value+',';
    });
    $scope.ctData.cpcreferencesuffixpattern=$scope.ctData.cpcreferencesuffixpattern.slice(0,-1);
    Config.projectSave('contract',$scope.ctData).then(function success(response) {
      notify.custom('success','Contract Successfully Saved','Contract');
      $scope.contractConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Contract!');
      cfpLoadingBar.complete();
    });
  };

  $scope.invoiceConfig=function() {
    cfpLoadingBar.start();
    $scope.changeAffixesAttribute('service');
    $scope.clearaffixes();
    Config.config('invoice').then(function success(response) {
      $scope.invData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).icreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).icreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.invData.icperiodicityid) {
          flag=1;
          $scope.invData.icperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.invData.icperiodicityid=0;
      }
    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveInvoice=function() {
    cfpLoadingBar.start();
    $scope.invData.icreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.invData.icreferenceprefixpattern+=p.value+',';
    });
    $scope.invData.icreferenceprefixpattern=$scope.invData.icreferenceprefixpattern.slice(0,-1);
    $scope.invData.icreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.invData.icreferencesuffixpattern+=s.value+',';
    });
    $scope.invData.icreferencesuffixpattern=$scope.invData.icreferencesuffixpattern.slice(0,-1);
    Config.save('invoice',$scope.invData).then(function success(response) {
      notify.custom('success','Invoice Successfully Saved','Invoice');
      $scope.invoiceConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Invoice!');
      cfpLoadingBar.complete();
    });
  }

  $scope.jobConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.config('job').then(function success(response) {
      $scope.jobData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).jcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).jcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.jobData.jcperiodicityid) {
          flag=1;
          $scope.jobData.jcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.jobData.jcperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.jobSaving=function() {
    cfpLoadingBar.start();
    $scope.jobData.jcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.jobData.jcreferenceprefixpattern+=p.value+',';
    });
    $scope.jobData.jcreferenceprefixpattern=$scope.jobData.jcreferenceprefixpattern.slice(0,-1);
    $scope.jobData.jcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.jobData.jcreferencesuffixpattern+=s.value+',';
    });
    $scope.jobData.jcreferencesuffixpattern=$scope.jobData.jcreferencesuffixpattern.slice(0,-1);
    Config.save('job',$scope.jobData).then(function success(response) {
      notify.custom('success','Job Successfully Saved','Job');
      $scope.jobConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Job!');
      cfpLoadingBar.complete();
    });
  }

  $scope.instantConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.project('instant').then(function success(response) {
      $scope.instData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).ipcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).ipcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.instData.ipcperiodicityid) {
          flag=1;
          $scope.instData.ipcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.instData.ipcperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveInstant=function() {
    cfpLoadingBar.start();
    $scope.instData.ipcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.instData.ipcreferenceprefixpattern+=p.value+',';
    });
    $scope.instData.ipcreferenceprefixpattern=$scope.instData.ipcreferenceprefixpattern.slice(0,-1);
    $scope.instData.ipcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.instData.ipcreferencesuffixpattern+=s.value+',';
    });
    $scope.instData.ipcreferencesuffixpattern=$scope.instData.ipcreferencesuffixpattern.slice(0,-1);
    Config.projectSave('instant',$scope.instData).then(function success(response) {
      notify.custom('success','Instant Successfully Saved','Instant');
      $scope.instantConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Instant!');
      cfpLoadingBar.complete();
    });
  }

  $scope.expSheetConfig=function() {
    cfpLoadingBar.start();
    $scope.changeAffixesAttribute('customer,service,department,branch');
    $scope.clearaffixes();
    Config.config('expensesheet').then(function success(response) {
      $scope.expData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).escreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).escreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.expData.escperiodicityid) {
          flag=1;
          $scope.expData.escperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.expData.escperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveExpSheet=function() {
    cfpLoadingBar.start();
    $scope.expData.escreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.expData.escreferenceprefixpattern+=p.value+',';
    });
    $scope.expData.escreferenceprefixpattern=$scope.expData.escreferenceprefixpattern.slice(0,-1);
    $scope.expData.escreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.expData.escreferencesuffixpattern+=s.value+',';
    });
    $scope.expData.escreferencesuffixpattern=$scope.expData.escreferencesuffixpattern.slice(0,-1);
    Config.save('expensesheet',$scope.expData).then(function success(response) {
      notify.custom('success','Expensesheet Successfully Saved','Expensesheet');
      $scope.expSheetConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Expensesheet!');
      cfpLoadingBar.complete();
    });
  }

  $scope.jobsheetConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.config('jobsheet').then(function success(response) {
      $scope.jsData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).jscreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).jscreferenceprefixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.jsData.jscperiodicityid) {
          flag=1;
          $scope.jsData.jscperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.jsData.jscperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveJobSheet=function() {
    cfpLoadingBar.start();
    $scope.jsData.jscreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.jsData.jscreferenceprefixpattern+=p.value+',';
    });
    $scope.jsData.jscreferenceprefixpattern=$scope.jsData.jscreferenceprefixpattern.slice(0,-1);
    $scope.jsData.jscreferenceprefixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.jsData.jscreferenceprefixpattern+=s.value+',';
    });
    $scope.jsData.jscreferenceprefixpattern=$scope.jsData.jscreferenceprefixpattern.slice(0,-1);
    Config.save('jobsheet',$scope.jsData).then(function success(response) {
      notify.custom('success','Jobsheet Successfully Saved','Jobsheet');
      $scope.jobsheetConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Jobsheet!');
      cfpLoadingBar.complete();
    });
  }

  $scope.onetimeConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.project('onetime').then(function success(response) {
      $scope.oneTiData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).opcreferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).opcreferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.oneTiData.opcperiodicityid) {
          flag=1;
          $scope.oneTiData.opcperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.oneTiData.opcperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveOneTime=function() {
    cfpLoadingBar.start();
    $scope.oneTiData.opcreferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.oneTiData.opcreferenceprefixpattern+=p.value+',';
    });
    $scope.oneTiData.opcreferenceprefixpattern=$scope.oneTiData.opcreferenceprefixpattern.slice(0,-1);
    $scope.oneTiData.opcreferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.oneTiData.opcreferencesuffixpattern+=s.value+',';
    });
    $scope.oneTiData.opcreferencesuffixpattern=$scope.oneTiData.opcreferencesuffixpattern.slice(0,-1);
    Config.projectSave('onetime',$scope.oneTiData).then(function success(response) {
      notify.custom('success','Onetime Successfully Saved','Onetime');
      $scope.onetimeConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Onetime!');
      cfpLoadingBar.complete();
    });
  }

  $scope.scheduleConfig=function() {
    cfpLoadingBar.start();
    $scope.clearaffixes();
    Config.config('schedule').then(function success(response) {
      $scope.scheData=Data.get(response);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).screferenceprefixpattern, true);
      $scope.prefixesAndSuffixesFromRemote(Data.get(response).screferencesuffixpattern, false);
      $scope.makePcity();
      cfpLoadingBar.complete();
      var flag=0;
      angular.forEach($scope.periodCity, function(period) {
        if(period.value==$scope.scheData.scperiodicityid) {
          flag=1;
          $scope.scheData.scperiodicityid=period.value;
        }
      });
      
      if(flag==0) {
        $scope.scheData.scperiodicityid=0;
      }

    }, function error(response) {
      cfpLoadingBar.complete();
    });
  }

  $scope.saveSchedule=function() {
    cfpLoadingBar.start();
    $scope.scheData.screferenceprefixpattern='';
    angular.forEach($scope.selectedPrefs, function(p) {
      $scope.scheData.screferenceprefixpattern+=p.value+',';
    });
    $scope.scheData.screferenceprefixpattern=$scope.scheData.screferenceprefixpattern.slice(0,-1);
    $scope.scheData.screferencesuffixpattern='';
    angular.forEach($scope.selectedSufs, function(s) {
      $scope.scheData.screferencesuffixpattern+=s.value+',';
    });
    $scope.scheData.screferencesuffixpattern=$scope.scheData.screferencesuffixpattern.slice(0,-1);
    Config.save('schedule',$scope.scheData).then(function success(response) {
      notify.custom('success','Schedule Successfully Saved','Schedule');
      $scope.scheduleConfig();
      cfpLoadingBar.complete();
    }, function error(response) {
      notify.custom('error','Error Occured While Saving','Schedule!');
      cfpLoadingBar.complete();
    });
  }


  $scope.makePattern=function(width, startingNumber, len, prefixInput, delimiterInput, suffixInput) {
    $scope.zeroFill(width, startingNumber, len);
    $('#previewModal').modal('show');
    
    var prefix=[];
    var suffix=[];
  // Iterate Through Selected Prefixes
    angular.forEach($scope.selectedPrefs, function(p) {
      switch (p.value) {
        case 'day1':
              prefix.push(mDay.getDate());
          break;
        case 'day2':
            if(mDay.getDate()<10) {
              prefix.push('0'+mDay.getDate());
            }else {
              prefix.push(mDay.getDate());
            }
          break;
        case 'month1':
              prefix.push(mDay.getMonth()+1);
          break;
        case 'month2':
              if (("0" + (mDay.getMonth()+1)).slice(-2) <10) {
                prefix.push(("0" + (mDay.getMonth()+1)).slice(-2));
              }else {
                prefix.push(mDay.getMonth()+1);
              }
          break;
        case 'year2':
              prefix.push((mDay.getFullYear()).toString().slice(-2));
          break;
        case 'year4':
              prefix.push((mDay.getFullYear()));
          break;
        case 'delimeter':
            prefix.push($("#"+delimiterInput).val());
          break;
        case 'custom':
              prefix.push($("#"+prefixInput).val());
          break;
        default:
          prefix.push(p.value);
      }

    });
  // End: Selected Prefixes Iterate

  // Iterate Through Selected Suffixes
    angular.forEach($scope.selectedSufs, function(s) {
      switch (s.value) {
        case 'day1':
              suffix.push(mDay.getDate());
          break;
        case 'day2':
            if(mDay.getDate()<10) {
              suffix.push('0'+mDay.getDate());
            }else {
              suffix.push(mDay.getDate());
            }
          break;
        case 'month1':
              suffix.push(mDay.getMonth()+1);
          break;
        case 'month2':
              if (("0" + (mDay.getMonth()+1)).slice(-2) <10) {
                suffix.push(("0" + (mDay.getMonth()+1)).slice(-2));
              }else {
                suffix.push(mDay.getMonth()+1);
              }
          break;
        case 'year2':
              suffix.push((mDay.getFullYear()).toString().slice(-2));
          break;
        case 'year4':
              suffix.push((mDay.getFullYear()));
          break;
        case 'delimeter':
              suffix.push($("#"+delimiterInput).val());
          break;
        case 'custom':
              suffix.push($("#"+suffixInput).val());
          break;
        default:
          suffix.push(s.value);
      }

    });
  // End: Selected Suffixes Iterate

    // Making The Concated patter Preview
      // $scope.preview=prefix.join("")+num+suffix.join("");
      $scope.patternPreview=prefix.join("")+num+suffix.join("");
    // End: Preview
  }
}]);

app.factory('Config', ['$http', function($http) {

  return {
    get : function(type) {
      // quotation/row
      return $http.get('sim/pms/config/'+type+'/row');
    },
    project : function(param) {
      return $http.get('sim/pms/config/project/'+param+'/row');
    },

    config: function(param) {
      return $http.get('sim/pms/config/'+param+'/row');
    },
    projectSave : function(param, data) {
      return $http({
        method: 'POST',
        url: 'sim/pms/config/project/'+param,
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    save : function(type, Data) {
      return $http({
        method: 'POST',
        url: 'sim/pms/config/'+type,
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(Data)
      });
    },
    // destroy : function(id) {
    //   // return $http.delete('sim/hr/branch/' + id);
    // },
    searchTags: function(query) {
      return $http.get('sim/hm/branch/ddmenu');
    }
  };

}]);

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

app.factory('notification', ['$http' ,function($http) {

  return {
        getNotification : function() {
        return $http.get('sim/sap/notification');
    },
    save : function(Data) {
      // console.log($.param(Data));return;
      return $http({
        method: 'POST',
        url: 'sim/sap/notification',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(Data)
      });
    },
  };

}]);
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

app.factory('Role', ['$http', function($http) {

   return {
       get:function() {
        return $http.get("sim/sap/role");
       },
       save: function(role) {
        return $http({
          method: 'POST',
          url: 'sim/sap/role',
          headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
          data: $.param(role)
        });
      },
      EditData:function(id) {
        return $http.get("sim/sap/role/"+id);
       },
       DestroyRole : function(id) {
        // return $http.delete("sim/sap/role/"+id);
        return $http({
          method: 'POST',
          url: 'sim/sap/role/'+id,
          headers: { 
            "Content-Type" : "application/json",
            "X-HTTP-Method-Override": "DELETE"
          },
        });
      },
      GetModule:function() {
        return $http.get("sim/sap/modules");
       },
       EditModule:function(id) {
        return $http.get("sim/sap/role/modules/"+id);
       }
       
   }
}]);
app.controller('templateCtrl',['$scope','$http','$log','Template','Data','notify','cfpLoadingBar','AccessFactory','$state' ,function($scope, $http, $log, Template, Data, notify,cfpLoadingBar,AccessFactory,$state) {
  /*
  Controller  for Quotations
  */
  $scope.tempData={
    'qtquotationtemplateid':0
  };
  	//permission

	
  // $scope.disabled=false;
  // $scope.data=false;
  // AccessFactory.Perission('101').then(function success(response) {
  // if(Data.get(response)==0){
  //   $state.go('access');
  // }
  // if(Data.get(response)==1){
  //   $scope.readresponse=Data.get(response);
  //   $scope.disabled=true;
  // }
  // if(Data.get(response)==2){
  //   $scope.writeresponse=Data.get(response);
  //   $scope.data=true;
  // }
  // if(Data.get(response)==3){
  //   $scope.fullresponse=Data.get(response);
  //   $scope.data=true;
  // }
  // }, function error(response) {

  // });
//end permission
  // get Quotation Data
  cfpLoadingBar.start();
  Template.get('quotation').then(function success(response) {
    cfpLoadingBar.complete();
    $scope.quotations=Data.get(response);
    $scope.doPagination($scope.quotations);
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
  $scope.tempClear=function() {
    $scope.tempData={
      'qtquotationtemplateid':0
    };
    $scope.ctData={
      'ctcontracttemplateid':0
    };
    $scope.invData={
      'itinvoicetemplateid':0
    };
  };

  $scope.saveQuotation=function() {
    cfpLoadingBar.start();

    // console.log($scope.tempData);return;
    Template.save('quotation', $scope.tempData).then(function success(response) {
      if(Data.get(response).message=="UQ_QuotationTemplateName") {
        cfpLoadingBar.complete();
        notify.custom('error','Template Already Exists!','Quotation');
      }else {
        $scope.tempClear();
        cfpLoadingBar.complete();
        $("#qtModal").modal("hide");
        notify.custom('success','Quotation Successfully Added!','Quotation!');
        Template.get('quotation').then(function success(getData) {
          $scope.quotations=Data.get(getData);
          $scope.doPagination($scope.quotations);
        }, function error(getData) {

        });
      }

    }, function error(response) {
      cfpLoadingBar.complete();
      notify.custom('error','Error Occured While Saving!','Quotation!');

    });
  };

  $scope.editRow=function(id){
    cfpLoadingBar.start();
		Template.show('quotation',id).then(function success(response) {
			$scope.tempData=Data.get(response);
      cfpLoadingBar.complete();
      $("#qtModal").modal("show");
		},function error(response) {

		});
	};

  $scope.deleteQuotation = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Customer?",
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
					Template.destroy('quotation', id).then(function success(response) {
            notify.custom('success','Quotation Successfully Deleted!','Quotation!');
            swal("Deleted!", "Quotation Successfully Deleted!", "success");
						Template.get('quotation').then(function success(getData) {
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
  // Quotation :End
  /*
  Controller for Contracts
  */
  $scope.ctData={'ctcontracttemplateid':0};
  // get Quotation Data
  Template.get('contract').then(function success(response) {
    $scope.contracts=Data.get(response);
    $scope.doPagination($scope.contracts);
  }, function error(response) {

  });
	// $scope.donePagination=function(param) {
	// 	$scope.totalItems = param.length;
	// 	$scope.currentPage = 1;
	// 	$scope.itemsPerPage=10;
	// 	$scope.maxSize = 5;
		
	// }
	// $scope.setPage = function (pageNo) {
	//   $scope.currentPage = pageNo;
	// };

	// $scope.setItemsPerPage = function(num) {
	// 	$scope.itemsPerPage = num;
	// 	$scope.currentPage = 1; //reset to first page
	// }
  $scope.saveContract=function() {
    cfpLoadingBar.start();
    Template.save('contract',$scope.ctData).then(function success(response) {
      if (Data.get(response).message=='UQ_ContractTemplateName') {
        cfpLoadingBar.complete();
        notify.custom('error','Template Already Exists!','Contract');

      }else {
        $scope.tempClear();
        cfpLoadingBar.complete();
        $("#ctModal").modal("hide");
        notify.custom('success','Contract Successfully Added!','Contract!');

        Template.get('contract').then(function success(getData) {
          $scope.contracts=Data.get(getData);
          $scope.doPagination($scope.contracts);
        }, function error(response) {

        });
      }
    }, function error(response) {
      cfpLoadingBar.complete();
      notify.custom('error','Error Occured While Saving!','Contract!');

    });
  };

  $scope.editContract=function(id){
    cfpLoadingBar.complete();

		Template.show('contract',id).then(function success(response) {

			$scope.ctData=Data.get(response);
      cfpLoadingBar.complete();
      $("#ctModal").modal("show");
		},function error(response) {
      cfpLoadingBar.complete();

		});
	};
  $scope.deleteContract = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Customer?",
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
					Template.destroy('contract', id).then(function success(response) {
            notify.custom('success','Contract Successfully Deleted!','Contract!');
            swal("Deleted!", "Contract Successfully Deleted!", "success");
						Template.get('contract').then(function success(getData) {
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
  // Contracts :End
  /*
  Controller for Invoices
  */
  $scope.invData={'itinvoicetemplateid':0};
  // get Invoice Data
  Template.get('invoice').then(function success(response) {
    $scope.invoices=Data.get(response);
  }, function error(response) {

  });
  $scope.saveInvoice=function() {
    cfpLoadingBar.start();
    Template.save('invoice',$scope.invData).then(function success(response) {
      if (Data.get(response).message=='UQ_InvoiceTemplateName') {
        cfpLoadingBar.complete();
        notify.custom('error','InvoiceTemplateName Already Exists!','Invoice');
      }else {
        $scope.tempClear();
        cfpLoadingBar.complete();
        $("#inModal").modal("hide");
        notify.custom('success','Invoice Successfully Added!','Invoice!');

        Template.get('invoice').then(function success(getData) {
          $scope.invoices=Data.get(getData);
        }, function error(response) {

        });
      }
    }, function error(response) {
      cfpLoadingBar.complete();
      notify.custom('error','Error Occured While Saving!','Invoice!');

    });
  };

  $scope.editInvoice=function(id){
    cfpLoadingBar.start();
		Template.show('invoice',id).then(function success(response) {
			$scope.invData=Data.get(response);
      cfpLoadingBar.complete();
      $("#inModal").modal("show");
		},function error(response) {
      cfpLoadingBar.complete();

		});
	};
  $scope.deleteInvoice = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Customer?",
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
					Template.destroy('invoice', id).then(function success(response) {
            notify.custom('success','Invoice Successfully Deleted!','Invoice!');
            swal("Deleted!", "Invoice Successfully Deleted!", "success");
						Template.get('invoice').then(function success(getData) {
							$scope.invoices = Data.get(getData);
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
  // Invoice :End

}]);

app.factory('Template', ['$http', function($http) {

  return {
    get : function(type) {
      return $http.get('sim/pms/template/'+type);
    },
    show : function(type, id) {
      return $http.get('sim/pms/template/'+type+'/'+ id);
    },
    save : function(type, Data) {
      return $http({
        method: 'POST',
        url: 'sim/pms/template/'+type,
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(Data)
      });
    },
    destroy : function(type, id) {
      // return $http.delete('sim/pms/template/'+type+'/'+ id);
      return $http({
        method: 'POST',
        url: 'sim/pms/template/'+type+'/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    test:function(d) {
      return d;
    },
    DropDown:function() {
      return $http.get('sim/hr/employee/ddmenu');
    },
    Departments:function() {
      return $http.get('sim/hr/department/ddmenu');
    }
  };

}]);

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
app.factory('User', ['$http', function($http) {
    return {
        get:function() {
            return $http.get("sim/sap/user");
           },
           save: function(user) {
            return $http({
              method: 'POST',
              url: 'sim/sap/user',
              headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
              data: $.param(user)
            });
          },
          editdata:function(id) {
            return $http.get("sim/sap/user/"+id);
           },
           terminate: function(id) {
            return $http({
                method: 'POST',
                url:      "sim/sap/user/terminate/"+id,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(id)
              });
  
          },
          GetEmply:function() {
            return $http.get("sim/hm/employee/ddmenu");
           },
           Getroledata:function() {
            return $http.get("sim/sap/role");
           },


    }

}]);

app.controller('reportCtrl', ['$http', '$scope', '$log', 'notify', 'Report', 'Data', 'DTOptionsBuilder', 'DTColumnBuilder', function($http, $scope, $log, notify, Report, Data, DTOptionsBuilder, DTColumnBuilder) {
   
    $scope.dtOptions = DTOptionsBuilder.fromSource('sim/hm/employee/report')
    .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
    .withButtons([
        {extend: 'copy',className: 'btn-sm'},
        {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'print',className: 'btn-sm'}
    ]);
    
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('heemployeecode').withTitle('Project Reference'),
        DTColumnBuilder.newColumn('hebasicsalary').withTitle('Job Reference'),
        DTColumnBuilder.newColumn('heofficialcontact').withTitle('Contact'),
        DTColumnBuilder.newColumn('heofficialmail').withTitle('Email'),
        DTColumnBuilder.newColumn('hejoineddate').withTitle('Joined'),
        DTColumnBuilder.newColumn('hedob').withTitle('DOB'),
        DTColumnBuilder.newColumn('hegender').withTitle('Gender'),
        DTColumnBuilder.newColumn('hemaritalstatus').withTitle('Martial Status'),
        DTColumnBuilder.newColumn('hefathername').withTitle('Father Name'),
        DTColumnBuilder.newColumn('heemergencycontact').withTitle('Emergency Contact'),
        DTColumnBuilder.newColumn('hepersonalemail').withTitle('Personal Email'),
        DTColumnBuilder.newColumn('hepersonalcontact').withTitle('Personal Contact'),
        DTColumnBuilder.newColumn('branch').withTitle('Branch'),
        DTColumnBuilder.newColumn('department').withTitle('Department'),
        DTColumnBuilder.newColumn('supervisor').withTitle('Supervisor'),
        DTColumnBuilder.newColumn('nationality').withTitle('Nationality'),
        DTColumnBuilder.newColumn('employee').withTitle('Employee'),
    ];

}]);
app.factory('Report',['$http', function($http) {
    return {
        get:function(role) {
            // return $http({
            //     method: 'POST',
            //     url: 'sim/pm/project/report',
            //     headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            //     data: $.param(role)
            // });

            return $http.post('sim/pm/job/report');
        }
    }
}]);
app.controller('jobReportCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnBuilder', function($scope, DTOptionsBuilder, DTColumnBuilder) {
    $scope.dtOptions = DTOptionsBuilder.fromSource('sim/pm/job/report')
    .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
    .withButtons([
        {extend: 'copy',className: 'btn-sm'},
        {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'print',className: 'btn-sm'}
    ]);
    
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('pprojectreference').withTitle('Project Reference'),
        DTColumnBuilder.newColumn('jjobreference').withTitle('Job Reference'),
        DTColumnBuilder.newColumn('customer').withTitle('Customer'),
        DTColumnBuilder.newColumn('service').withTitle('Service'),
        DTColumnBuilder.newColumn('jobsite').withTitle('Job Site'),
        DTColumnBuilder.newColumn('head').withTitle('Head'),
        DTColumnBuilder.newColumn('date').withTitle('Date'),
        DTColumnBuilder.newColumn('timein').withTitle('TimeIn'),
        DTColumnBuilder.newColumn('timeout').withTitle('TimeOut'),
        DTColumnBuilder.newColumn('branch').withTitle('Branch'),
        DTColumnBuilder.newColumn('servicedescription').withTitle('Service Descritpion'),
        DTColumnBuilder.newColumn('unit').withTitle('Unit'),
        DTColumnBuilder.newColumn('rate').withTitle('Rate'),
        DTColumnBuilder.newColumn('total').withTitle('Total'),
        DTColumnBuilder.newColumn('batchno').withTitle('Batch'),
        
    ];
}]);
app.controller('jobsheetCtrl', ['$http', '$scope', '$log', 'notify', 'Report', 'Data', 'DTOptionsBuilder', 'DTColumnBuilder', function($http, $scope, $log, notify, Report, Data, DTOptionsBuilder, DTColumnBuilder) {
   
    $scope.dtOptions = DTOptionsBuilder.fromSource('sim/pm/sheet/report')
    .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
    .withButtons([
        {extend: 'copy',className: 'btn-sm'},
        {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'print',className: 'btn-sm'}
    ]);
    
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('jstsheetreference').withTitle('Sheet Reference'),
        DTColumnBuilder.newColumn('jststartdate').withTitle('Start Date'),
        DTColumnBuilder.newColumn('jsttimein').withTitle('Timein'),
        DTColumnBuilder.newColumn('jsttimeout').withTitle('Timeout'),
        DTColumnBuilder.newColumn('jstenddate').withTitle('End Date'),
        // DTColumnBuilder.newColumn('head').withTitle('Name'),
        // DTColumnBuilder.newColumn('hegender').withTitle('Gender'),
        // DTColumnBuilder.newColumn('hemaritalstatus').withTitle('Martial Status'),
        // DTColumnBuilder.newColumn('hefathername').withTitle('Father Name'),
        // DTColumnBuilder.newColumn('heemergencycontact').withTitle('Emergency Contact'),
        // DTColumnBuilder.newColumn('hepersonalemail').withTitle('Personal Email'),
        // DTColumnBuilder.newColumn('hepersonalcontact').withTitle('Personal Contact'),
        // DTColumnBuilder.newColumn('branch').withTitle('Branch'),
        // DTColumnBuilder.newColumn('department').withTitle('Department'),
        // DTColumnBuilder.newColumn('supervisor').withTitle('Supervisor'),
        // DTColumnBuilder.newColumn('nationality').withTitle('Nationality'),
        // DTColumnBuilder.newColumn('employee').withTitle('Employee'),
    ];

}]);
app.controller('projectReportCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnBuilder', function($scope, DTOptionsBuilder, DTColumnBuilder) {
    $scope.dtOptions = DTOptionsBuilder.fromSource('sim/pm/project/report')
    .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
    .withButtons([
        {extend: 'copy',className: 'btn-sm'},
        {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'print',className: 'btn-sm'}
    ]);
    
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('qquotationreference').withTitle('Quotation Reference'),
        DTColumnBuilder.newColumn('qquoteddate').withTitle('Quoted Date'),
        DTColumnBuilder.newColumn('qvaliduntil').withTitle('Validity'),
        DTColumnBuilder.newColumn('qsubject').withTitle('Subject'),
        DTColumnBuilder.newColumn('qperiod').withTitle('Quotation Period'),
        DTColumnBuilder.newColumn('qtotal').withTitle('Total'),
        DTColumnBuilder.newColumn('qgrandtotal').withTitle('Grand Total'),
        DTColumnBuilder.newColumn('customer').withTitle('Customer'),
        DTColumnBuilder.newColumn('quotedby').withTitle('Quoted By'),
        DTColumnBuilder.newColumn('branch').withTitle('Branch'),
        DTColumnBuilder.newColumn('jobtype').withTitle('JobType'),
        DTColumnBuilder.newColumn('period').withTitle('Period'),
        DTColumnBuilder.newColumn('status').withTitle('Status'),
        
    ];
}]);
app.controller('quotationReportCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnBuilder', function($scope, DTOptionsBuilder, DTColumnBuilder) {
    $scope.dtOptions = DTOptionsBuilder.fromSource('sim/pm/quotation/report')
    .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
    .withButtons([
        {extend: 'copy',className: 'btn-sm'},
        {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'print',className: 'btn-sm'}
    ]);
    
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('qquotationreference').withTitle('Quotation Reference'),
        DTColumnBuilder.newColumn('qquoteddate').withTitle('Quoted Date'),
        DTColumnBuilder.newColumn('qvaliduntil').withTitle('Validity'),
        DTColumnBuilder.newColumn('qsubject').withTitle('Subject'),
        DTColumnBuilder.newColumn('qperiod').withTitle('Quotation Period'),
        DTColumnBuilder.newColumn('qtotal').withTitle('Total'),
        DTColumnBuilder.newColumn('qgrandtotal').withTitle('Grand Total'),
        DTColumnBuilder.newColumn('customer').withTitle('Customer'),
        DTColumnBuilder.newColumn('quotedby').withTitle('Quoted By'),
        DTColumnBuilder.newColumn('branch').withTitle('Branch'),
        DTColumnBuilder.newColumn('jobtype').withTitle('JobType'),
        DTColumnBuilder.newColumn('period').withTitle('Period'),
        DTColumnBuilder.newColumn('status').withTitle('Status'),
        
    ];
}]);
app.controller('jobScheduleCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnBuilder', function($scope, DTOptionsBuilder, DTColumnBuilder) {
    $scope.dtOptions = DTOptionsBuilder.fromSource('sim/pm/schedule/report')
    .withDOM("<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp")
    .withButtons([
        {extend: 'copy',className: 'btn-sm'},
        {extend: 'csv',title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
        {extend: 'print',className: 'btn-sm'}
    ]);
    
    $scope.dtColumns = [
        DTColumnBuilder.newColumn('jshschedulereference').withTitle('Schedule Reference'),
        DTColumnBuilder.newColumn('jshdate').withTitle('Date'),
        DTColumnBuilder.newColumn('jshtimein').withTitle('TimeIn'),
        DTColumnBuilder.newColumn('jshtimeout').withTitle('TimeOut'),
        DTColumnBuilder.newColumn('head').withTitle('Head'),
        // DTColumnBuilder.newColumn('head').withTitle('Head'),
        // DTColumnBuilder.newColumn('date').withTitle('Date'),
        // DTColumnBuilder.newColumn('timein').withTitle('TimeIn'),
        // DTColumnBuilder.newColumn('timeout').withTitle('TimeOut'),
        // DTColumnBuilder.newColumn('branch').withTitle('Branch'),
        // DTColumnBuilder.newColumn('servicedescription').withTitle('Service Descritpion'),
        // DTColumnBuilder.newColumn('unit').withTitle('Unit'),
        // DTColumnBuilder.newColumn('rate').withTitle('Rate'),
        // DTColumnBuilder.newColumn('total').withTitle('Total'),
        // DTColumnBuilder.newColumn('batchno').withTitle('Batch'),
        
    ];
}]);

app.controller('customerCtrl', ['$scope','$http','$log','Customer','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Customer, Data, notify,cfpLoadingBar,AccessFactory,$state) {

	$scope.attnData={};
	$scope.formData={'cscustomerid':0,'attentions':[]};

		//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('81').then(function success(response) {
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
	Customer.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.customers=Data.get(response);
		$scope.doPagination($scope.customers);
	},function error(response) {
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
	$scope.clearForm=function() {
		$scope.formData={'cscustomerid':0,'attentions':[]};
	};
	$scope.addAttentions=function() {
		if($("#attn").val()!='') {
			$scope.formData.attentions.push({"caattention":$scope.attnData.attn, "cacustomerattentionid":0, "caemail":$scope.attnData.email, "cacontact":$scope.attnData.contact});

			$scope.attnData={};
			$("#attn").focus();

		}else{
		}
	};

	$scope.editAttns=function(index) {
		$scope.attnData.attn=$scope.formData.attentions[index].caattention;
		$scope.attnData.email=$scope.formData.attentions[index].caemail;
		$scope.attnData.contact=$scope.formData.attentions[index].cacontact;
	};

	$scope.removeAttns=function(id) {
		$scope.formData.attentions.splice(id, 1);
	};

	$scope.submitCustomer = function() {
		cfpLoadingBar.start();
		Customer.save($scope.formData).then(function success(response) {
			if(Data.get(response).success) {
				$scope.clearForm();
				cfpLoadingBar.complete();
				$("#myModal").modal("hide");
				notify.success('success','Customer Successfully Saved','Customer!');
				Customer.get().then(function success(getData) {
					$scope.customers=Data.get(getData);
					$scope.doPagination($scope.customers);
					}, function error(error) {
						$log.info(error);
					});
			}else {
				cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_CustomerCode") { 
					notify.custom('error','Customer Code Code Already Exists!','Customer');
				}
				else{
					notify.custom('error','Something went wrong!','Customer');
				}
				// notify.custom('error','Customer Code Already Exists','Customer!');
			}
			}, function error(response) {
				cfpLoadingBar.complete();
				notify.error('error','Error Occurred While Saving','Customer!');

		});
	};

	$scope.editRow=function(id){
		cfpLoadingBar.start();
		var detail, i=0;

		Customer.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			if(i==2) {
				// $scope.formData=row;
				$scope.formData.attentions=detail;
				$("#myModal").modal("show");
				cfpLoadingBar.complete();
			}else {
				i=1;
			}
		},function error(response) {

		});

		Customer.getAttn(id).then(function success(getAttns) {

			if(i==1) {
        // row.details=detail;
				$scope.formData.attentions=Data.get(getAttns);
        cfpLoadingBar.complete();
        $("#myModal").modal("show");
      }else {
        i=2;
        detail=Data.get(getAttns);
      }
		}, function error(getAttns) {

		});
	};

	$scope.deleteCustomer = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Customer?",
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
					Customer.destroy(id).then(function success(response) {
						$("#myModal").modal("hide");
						swal("Deleted!", "Customer Successfully Deleted", "success");
						Customer.get().then(function success(getData) {
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

// jQuery
angular.element(document).ready(function () {
	$(document).on("click", "#addAttn", function() {
		if($("#attn").val()=='') {

			alert('Attention Name Cannot be NUll');
		} else{

			var attn	=$("#attn").val();
			var email	=$("#email").val();
			var	contact =$("#contact").val();
			$scope.formData.attentions.push({caattention:attn, caemail:email, cacontact:contact});
		}
	});
});

}]);

app.factory('Customer', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/sm/customer');
    },
    show : function(id) {
      return $http.get('sim/sm/customer/' + id);
    },
    save : function(customerData) {
      return $http({
        method: 'POST',
        url: 'sim/sm/customer',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(customerData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/sm/customer/' + id);
      return $http({
        method: 'POST',
        url: 'sim/sm/customer/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    getAttn:function(id) {
      return $http.get('sim/sm/customer/attention/getlist/' + id);
    },
    DropDown:function() {
      return $http.get('sim/pm/employee/ddmenu');
    }
  };

}]);


app.controller('jobsiteCtrl', ['$scope','$http','$log','Jobsite','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Jobsite, Data, notify,cfpLoadingBar,AccessFactory,$state) {
	$scope.formData={
	'jsjobsitesid':0,
	// 'jscountryid':101
	};

	//permission


	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('83').then(function success(response) {
	// if(Data.get(response)==0){
	// $state.go('access');
	// }
	// if(Data.get(response)==1){
	// $scope.readresponse=Data.get(response);
	// $scope.disabled=true;
	// }
	// if(Data.get(response)==2){
	// $scope.writeresponse=Data.get(response);
	// $scope.data=true;
	// }
	// if(Data.get(response)==3){
	// $scope.fullresponse=Data.get(response);
	// $scope.data=true;
	// }
	// }, function error(response) {

	// });

	//end permission
	var selectedJobsites=[];

	Jobsite.DropDown('country').then(function success(response) {
		$scope.countries=Data.get(response);
	},function error(response) {

	});

	Jobsite.DropDown('province').then(function success(response) {
		$scope.provinces=Data.get(response);
	},function error(response) {

	});
	cfpLoadingBar.start();
	Jobsite.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.jobsites=Data.get(response);
		$scope.doPagination($scope.jobsites);

	},function error(response) {
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


	$scope.clearForm=function() {
		$scope.formData={'jsjobsiteid':0};
		Jobsite.dfCountry().then(function success(response) {
			$scope.formData.jscountryid=response.data;
		}, function error(response) {

		});
		// console.log();
	};

	$scope.submitJobsite = function() {
		cfpLoadingBar.start();
		Jobsite.save($scope.formData).then(function success(response) {
			$scope.formData = {'jsjobsiteid':0};
			cfpLoadingBar.complete();
			$("#myModal").modal("hide");
			notify.custom('success','Jobsite Successfully Saved','Jobsite!');
			Jobsite.get().then(function success(getData) {
				$scope.jobsites=Data.get(getData);
				$scope.doPagination($scope.jobsites);
				}, function error(error) {
					$log.info(error);
				});
			}, function error(response) {
				cfpLoadingBar.complete();
				notify.custom('error','Error Occurred While Saving','Jobsite!');

		});
	};

	$scope.editRow=function(id){
		cfpLoadingBar.start();
		Jobsite.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			cfpLoadingBar.complete();
			$("#myModal").modal("show");
		},function error(response) {

		});
	};

	$scope.deleteJobsite = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Jobsite?",
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
					Jobsite.destroy(id).then(function success(response) {
						$("#myModal").modal("hide");
						swal("Deleted!", "Jobsite Successfully Deleted", "success");
						Jobsite.get().then(function success(getData) {
							$scope.jobsites = Data.get(getData);
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

// jQuery
	// $("#selectAll").click(function() {
	// 	if(this.checked) {
	// 		$(".boxes").prop('checked',true);
	// 		$.each($(".boxes:checked"), function(){
	// 					selectedJobsites.push($(this).data('id'));
	// 		});
	// 	}else {
	// 		$(".boxes").prop('checked',false);
	// 		selectedJobsites=[];
	// 		console.log(selectedBranches);
	// 	}
	// });

}]);

app.factory('Jobsite', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/sm/jobsite');
    },
    show : function(id) {
      return $http.get('sim/sm/jobsite/' + id);
    },
    save : function(jobsiteData) {
      return $http({
        method: 'POST',
        url: 'sim/sm/jobsite',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(jobsiteData)
      });
    },
    dfCountry: function() {
      return $http.get('static/countryid');
    },
    destroy : function(id) {
      // return $http.delete('sim/sm/jobsite/' + id);
      return $http({
        method: 'POST',
        url: 'sim/sm/jobsite/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    test:function(d) {
      return d;
    },
    DropDown:function(fung) {
      return $http.get('M@ster786/ddmenu/am/'+fung+'/');
    }
  };

}]);


app.controller('serviceCtrl', ['$scope','$http','$log','Service','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Service, Data, notify,cfpLoadingBar,AccessFactory,$state) {
  $scope.taskData={};
  $scope.formData={'sserviceid':0, 'tasks':[]};
  $scope.editable=false;
	var selectedservices=[];
	//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('84').then(function success(response) {
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
	Service.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.services=Data.get(response);
		$scope.doPagination($scope.services);
		console.log($scope.services);
	},function error(response) {
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
  $scope.addTasks=function() {
		if($("#task").val()!='') {
			$scope.formData.tasks.push({sttask:$scope.taskData.task, stdescription:$scope.taskData.desc});
      // console.log($scope.formData);
      notify.custom('success','Task Successfully Added','Task');
			$scope.taskData={};
			$("#task").focus();
		}else{
			console.log('Task is Empty');
		}
	};
	// $scope.editAttns=function(index) {
	// 	// console.log($scope.formData.attentions.indexOf(id));
	// 	// console.log($scope.formData.attentions[index]);
	// 	$scope.attnData.attn=$scope.formData.attentions[index].caattention;
	// 	$scope.attnData.email=$scope.formData.attentions[index].caemail;
	// 	$scope.attnData.contact=$scope.formData.attentions[index].cacontact;
	// 	// $scope.formData.attentions.splice(data, 1);
	// }
	$scope.removeAttns=function(id) {
		$scope.formData.tasks.splice(id, 1);
	};

  Service.Departments().then(function success(response) {
    $scope.Departments=Data.get(response);
  }, function error(response) {

  });

	$scope.clearForm=function() {
		$scope.formData={'sserviceid':0, 'tasks':[]};
	};

	$scope.submitService = function() {
		console.log($scope.formData);
    cfpLoadingBar.start();
		Service.save($scope.formData).then(function success(response) {
			console.log(Data.get(response))
			if(Data.get(response).success) {
        $scope.formData={'sserviceid':0, 'tasks':[]};
        cfpLoadingBar.complete();
        $("#myModal").modal("hide");
        notify.custom('success','Service Successfully Saved!','Service!');
  			Service.get().then(function success(getData) {
					$scope.services=Data.get(getData);
					$scope.doPagination($scope.services);
  				}, function error(error) {
  					$log.info(error);
  				});
      }else {
        cfpLoadingBar.complete();
				if( Data.get(response).message=="UQ_ServiceCode") { 
					notify.custom('error','Service Code Code Already Exists!','Service');
			}
			else{
				notify.custom('error','Something went wrong!','Service');
			}
        // notify.custom("error",'Service Code Already Exists','Service!');
      }
			}, function error(response) {
        cfpLoadingBar.complete();
        notify.alert('error','Error Occurred While Saving','success');

		});
	};

	$scope.editRow=function(id){
    cfpLoadingBar.start();
    var detail, i=0;
		Service.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			console.log(	$scope.formData);
      if(i==2) {
        // $scope.formData=row;
        $scope.formData.tasks=detail;
        $("#myModal").modal("show");
        cfpLoadingBar.complete();
      }else {
        i=1;
      }
		},function error(response) {

		});

    Service.task(id).then(function success(getTasks) {

      if(i==1) {
        // row.details=detail;
        $scope.formData.tasks=Data.get(getTasks);
        cfpLoadingBar.complete();
        $("#myModal").modal("show");
      }else {
        i=2;
        detail=Data.get(getTasks);
      }
    }, function error(getTasks) {

    });
	};



	$scope.deleteService = function(id) {
			// swal({
			//   title: "Are you sure?",
			//   text: "Do You Want To Delete This Service?",
			//   type: "warning",
			//   showCancelButton: true,
			//   confirmButtonColor: "#DD6B55",
			//   confirmButtonText: "Yes, delete it!",
			//   cancelButtonText: "No, cancel!",
			//   closeOnConfirm: false,
			//   closeOnCancel: false
			// },
			// function(isConfirm){
			//   if (isConfirm) {
			// 		Service.destroy(id).then(function success(response) {
      //       $("#myModal").modal("hide");
			// 			notify.custom("success", "Service Successfully Deleted", "success");
			// 			Service.get().then(function success(getData) {
			// 				$scope.services = Data.get(getData);
			// 			},function error(error) {

			// 			});

			// 		},function error(response) {
			// 			swal("Cancelled", "Can't Delete Please Contact Administrator", "error");
			// 		});
			//   } else {
			//     swal("Cancelled", "Terminated The Process", "error");
			//   }
			// });
			
	swal({
		title: "Are you sure?",
		text: "Do You Want To Delete This Service?",
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
			Service.destroy(id).then(function success(response) {
							$("#myModal").modal("hide");
							swal("Deleted!", "User role Successfully Deleted", "success");
							Service.get().then(function success(response) {
									$scope.services = Data.get(response);
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






// jQuery
	// $("#selectAll").click(function() {
	// 	if(this.checked) {
	// 		$(".boxes").prop('checked',true);
	// 		$.each($(".boxes:checked"), function(){
	// 					selectedservices.push($(this).data('id'));
	// 		});
	// 	}else {
	// 		$(".boxes").prop('checked',false);
	// 		selectedservices=[];
	// 		console.log(selectedBranches);
	// 	}
	// });

}]);

app.factory('Service', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/sm/service');
    },
    show : function(id) {
      return $http.get('sim/sm/service/' + id);
    },
    save : function(serviceData) {
      return $http({
        method: 'POST',
        url: 'sim/sm/service',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(serviceData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/sm/service/' + id);
      return $http({
        method: 'POST',
        url: 'sim/sm/service/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    task: function(id) {
      return $http.get('sim/sm/service/task/getlist/'+id);
    },
    Departments:function(fung) {
      return $http.get('sim/hm/department/ddmenu');
    }
  };

}]);


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


app.factory('Invoice',['$http', function($http) {
  return {
    get : function() {
      return $http.get('sim/sma/invoice');
    },
    show : function(id) {
      return $http.get('sim/sma/invoice/'+id);
    },
    save : function(data) {
      return $http({
        method: 'POST',
        url: 'sim/sma/invoice',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    users: function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    status: function() {
      return $http.get('sim/ddmenu/pm/status');
    },
    branch: function() {
      return $http.get('sim/hm/branch/ddmenu')
    },
    destroy : function(id) {
      // return $http.delete('sim/sma/invoice/'+id);
      return $http({
        method: 'POST',
        url: 'sim/sma/invoice/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    customer : function() {
      return $http.get('sim/sm/customer/ddmenu');
    },
    company : function() {
      return $http.get('M@ster786/tenant/company/primary');
    },
    attentions : function() {
      return $http.get('sim/sm/customer/attention/ddmenu');
    },
    jobsites : function() {
      return $http.get('sim/sm/jobsite/ddmenu');
    },
    employees : function() {
      return $http.get('sim/hm/employee/ddmenu');
    },
    service : function() {
      return $http.get('sim/sm/service/ddmenu');
    },
    jobtype : function() {
      return $http.get('sim/ddmenu/pm/jobtype');
    },
    findProjects : function(data) {
      // return console.log(data);
      return $http({
        method: 'POST',
        url: 'sim/pm/project/findlist',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(data)
      });
    },
    findJobs : function(param, id) {
    //   // return console.log(data);
    //   return $http({
    //     method: 'POST',
    //     url: 'sim/pm/job/findlist',
    //     headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
    //     data: $.param(data)
    //   });
    return $http.get('sim/sma/invoice/'+param+'/'+id);
  },
  filterData : function(data) {
    return $http({
      method: 'POST',
      url: 'sim/sma/invoice/findlist',
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
      data: $.param(data)
    });
  },
  templates: function() {
    return $http.get('sim/pms/template/invoice');
  },
  dfConfig: function() {
    return $http.get('sim/pms/config/invoice/list');
  },
  exportInvoice:function(id) {
    return $http.get('sim/sma/invoice/export/'+id);
  },
  exportInvoiceDetails:function(id) {
    return $http.get('sim/sma/invoice/detail/'+id);
  },

  };
}]);

app.controller('contactCtrl',['$scope','$http','$log','Contact','Data','notify','cfpLoadingBar','AccessFactory','$state', function($scope, $http, $log, Contact, Data, notify,cfpLoadingBar,AccessFactory,$state) {
  $scope.formData={'cbcontactbookid':0};

  	//permission


  // $scope.disabled=false;
  // $scope.data=false;
  // AccessFactory.Perission('122').then(function success(response) {
  // if(Data.get(response)==0){
  //   $state.go('access');
  // }
  // if(Data.get(response)==1){
  //   $scope.readresponse=Data.get(response);
  //   $scope.disabled=true;
  // }
  // if(Data.get(response)==2){
  //   $scope.writeresponse=Data.get(response);
  //   $scope.data=true;
  // }
  // if(Data.get(response)==3){
  //   $scope.fullresponse=Data.get(response);
  //   $scope.data=true;
  // }
  // }, function error(response) {

  // });

//end permission
  cfpLoadingBar.start();
  Contact.get().then(function success(response) {
    cfpLoadingBar.complete();
    $scope.contacts=Data.get(response);
    $scope.doPagination($scope.contacts);
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
  $scope.clearForm=function() {
    $scope.formData={'cbcontactbookid':0};
  };

  $scope.saveContact=function() {
    cfpLoadingBar.start();
    Contact.save($scope.formData).then(function success(response) {
      $scope.clearForm();
      cfpLoadingBar.complete();
      $("#contactbook").modal("hide");
      notify.custom('success','Contact Successfully Saved!','ContactBook!');
      Contact.get().then(function success(getData) {
        $scope.contacts=Data.get(getData);
        $scope.doPagination($scope.contacts);
      }, function error(getData) {

      });
    }, function error(response) {
      cfpLoadingBar.complete();

    });
  };

  $scope.editRow=function(id) {
    cfpLoadingBar.start();
    Contact.show(id).then(function success(response) {
      $scope.formData=Data.get(response);
      cfpLoadingBar.complete();
      $("#contactbook").modal("show");
    }, function error(response) {

    });
  };

  $scope.deleteRow = function(id) {
    swal({
      title: "Are you sure?",
      text: "Do You Want To Delete This Contact?",
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
        Contact.destroy(id).then(function success(response) {
          swal("Deleted!", "Contact Successfully Deleted", "success");
          Contact.get().then(function success(getData) {
            $scope.contacts=Data.get(getData);
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

app.factory('Contact',['$http', function($http) {
return {
  get : function() {
    return $http.get('sim/sut/contactbook');
  },
  show : function(id) {
    return $http.get('sim/sut/contactbook/'+id);
  },
  destroy : function(id) {
    // return $http.delete('sim/sut/contactbook/'+id);
    return $http({
      method: 'POST',
      url: 'sim/sut/contactbook/'+id,
      headers: { 
        "Content-Type" : "application/json",
        "X-HTTP-Method-Override": "DELETE"
      },
    });
  },
  save : function(data) {
    return $http({
      method: 'POST',
      url: 'sim/sut/contactbook',
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
      data: $.param(data)
    });
  },
  findlist : function(data) {
    return $http({
      method: 'POST',
      url: 'sim/sut/contactbook/findlist',
      headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
      data: $.param(data)
    });
  },
};

}]);


app.controller('reminderCtrl', ['$scope','$http','$log','AccessFactory','Data','notify','cfpLoadingBar','$state','Reminder', function($scope, $http, $log, AccessFactory, Data, notify, cfpLoadingBar,$state,Reminder) {

  $scope.formData={
		'smrreminderid':0,
		'users':[]
	};
	//permission

	
	// $scope.disabled=false;
	// $scope.data=false;
	// AccessFactory.Perission('121').then(function success(response) {
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
	Reminder.get().then(function success(response) {
		cfpLoadingBar.complete();
		$scope.reminders=Data.get(response);
		$scope.doPagination($scope.reminders);
		console.log(	$scope.reminders)
	},function error(response) {
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
  
  Reminder.users().then(function success(response) {
    $scope.users=Data.get(response);
  }, function error(response) {

  });
// console.log(Data.fmDate('Wed Jun 14 2017 00:00:00 GMT+0530 (India Standard Time)'));
	$scope.clearForm=function() {
		$('.users').prop('checked', false);
		$scope.formData={
			'smrreminderid':0,
			'users':[]
		};
	};

	$scope.submitReminder = function() {
    cfpLoadingBar.start();
		Reminder.save($scope.formData).then(function success(response) {
      cfpLoadingBar.complete();
			$scope.clearForm();
			$('.users').prop('checked', false);
      $("#remindModel").modal("hide");
			notify.custom('success','Reminder Successfully Saved!','Reminder');
			Reminder.get().then(function success(getData) {
				$scope.reminders=Data.get(getData);
				$scope.doPagination($scope.reminders);
				}, function error(error) {
					$log.info(error);
				});
			}, function error(response) {
        cfpLoadingBar.complete();
        notify.custom('error','Error Found While Saving!','Reminder');
		});
	};

	$scope.editRow=function(id){

    cfpLoadingBar.start();
		Reminder.show(id).then(function success(response) {
			$scope.formData=Data.get(response);
			angular.forEach($scope.formData.users, function(key) {
				// console.log(key.h);
					angular.element(document).ready(function () {
							// $('input:checkbox').filter('.roll').prop('checked', false);
							$('input:checkbox[value='+key.uruserid+']').prop('checked', true);
					});
			});
			
      cfpLoadingBar.complete();
      $("#remindModel").modal("show");
		},function error(response) {
      cfpLoadingBar.complete();
      notify.custom('error','Error Found!','Reminder');

		});
	};

	$scope.deleteReminder = function(id) {
			swal({
			  title: "Are you sure?",
			  text: "Do You Want To Delete This Reminder?",
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
					Reminder.destroy(id).then(function success(response) {
            $("#remindModel").modal("hide");
						swal("Deleted!", "Reminder Successfully Deleted", "success");
						Reminder.get().then(function success(getData) {
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

// jQuery
angular.element(document).ready(function () {
	$(document).on("change", ".users", function() {
	  if(this.checked) {
			if($scope.formData.smrreminderid=='0') {
				console.log($scope.formData);
				$scope.formData.users.push({'uruserreminderid':'0','urreminderid':$scope.formData.smrreminderid,'uruserid':$(this).data('id')});
			}else{
				$scope.formData.users.push({'uruserreminderid':'0','urreminderid':$scope.formData.smrreminderid,'uruserid':$(this).data('id')});
			}
		} else {
			// Remove From array if Exists
			for(var i=0;i <$scope.formData.users.length; i++) {
				if($scope.formData.users[i].uruserid==$(this).data('id')){
					$scope.formData.users.splice(i,1);
				}
			}
		}

	});


});

}]);

app.factory('Reminder', ['$http', function($http) {

  return {
    get : function() {
      return $http.get('sim/sut/reminder');
    },
    // permission: function() {
    //   return $http.get('static/rolemodule/121');
    // },
    show : function(id) {
      return $http.get('sim/sut/reminder/' + id);
    },
    save : function(serviceData) {
      return $http({
        method: 'POST',
        url: 'sim/sut/reminder',
        headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
        data: $.param(serviceData)
      });
    },
    destroy : function(id) {
      // return $http.delete('sim/sut/reminder/' + id);
      return $http({
        method: 'POST',
        url: 'sim/sut/reminder/'+id,
        headers: { 
          "Content-Type" : "application/json",
          "X-HTTP-Method-Override": "DELETE"
        },
      });
    },
    test:function(d) {
      return d;
    },
    users:function() {
      return $http.get('sim/sap/user/ddmenu');
    },
    Departments:function(fung) {
      return $http.get('sim/hr/department/ddmenu');
    }
  };

}]);
