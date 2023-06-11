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