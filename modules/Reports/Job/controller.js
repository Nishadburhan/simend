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