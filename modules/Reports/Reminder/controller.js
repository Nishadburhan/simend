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