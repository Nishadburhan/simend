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