app.controller('navController',function($scope){
   alert('hi');
    $('#side-menu').metisMenu();
});
app.controller('headerController', function($scope,myFactory) {
    $scope.data = myFactory.data;
    $scope.sales_target = $scope.data['sales_target'];
    $scope.sales_curr = $scope.data['sales_curr'];
    $scope.sales_curr_perc = $scope.data['sales_curr_perc'];
    $scope.sales_diff = $scope.data['sales_diff'];    
    
    $scope.cars_target = $scope.data['cars_target'];
    $scope.cars_curr = $scope.data['cars_curr'];
    $scope.cars_curr_perc = $scope.data['cars_curr_perc'];
    $scope.cars_diff = $scope.data['cars_diff'];
    
    $scope.progressBarSales = getCSSClass( $scope.sales_curr_perc,'progress-bar' );
    $scope.progressBarCars = getCSSClass( $scope.cars_curr_perc,'progress-bar' );
});

app.controller('summaryController', function($scope,myFactory) {
    $scope.data = myFactory.data;
    
    $scope.sales_target = $scope.data['sales_target'];
    $scope.sales_curr = $scope.data['sales_curr'];
    $scope.sales_curr_perc = $scope.data['sales_curr_perc'];
    $scope.sales_diff = $scope.data['sales_diff'];    
    
    $scope.cars_target = $scope.data['cars_target'];
    $scope.cars_curr = $scope.data['cars_curr'];
    $scope.cars_curr_perc = $scope.data['cars_curr_perc'];
    $scope.cars_diff = $scope.data['cars_diff'];
    
    if($scope.cars_diff==0){
        $scope.cars_diff = '✔';
    }else if($scope.cars_diff > 0){
         $scope.cars_diff = '+' + $scope.cars_diff;
    }
        
    $scope.panelSales = getCSSClass( ($scope.sales_curr / $scope.sales_target) * 100,'panel' );
    $scope.panelCars = getCSSClass( ($scope.cars_curr / $scope.cars_target) * 100,'panel' );
    
});



app.controller('staffController', function ($scope, $http, $filter, ngTableParams) {
    $scope.sortType = 'first_name'; // set the default sort type
    $scope.sortReverse = false;  // set the default sort order
    $scope.searchStaff = '';     // set the default search/filter term

    $scope.users = null;
    $scope.users = $http.get('json/staff.json')
    .success(function (data) {
        //alert('1. ' + data);
        $scope.users = data;

        $scope.usersTable = new ngTableParams({
            page: 1,
            count: 10        
        }, {
            total: $scope.users.length, 
            getData: function ($defer, params) {
                $scope.data = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
                $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
                $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
                $defer.resolve($scope.data);
            }

        });

     })
     .error(function (data, status, headers, config) {
         //alert('1.2 ' + data);
     });
});