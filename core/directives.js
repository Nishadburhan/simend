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
