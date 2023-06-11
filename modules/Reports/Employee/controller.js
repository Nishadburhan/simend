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