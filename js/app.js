var app = angular.module('myApp', ['ngTable','wt.responsive']);


app.factory('myFactory', function(){
   
    var data = [];   
    data['sales_target'] = 20;
    data['sales_curr'] = 15;
    data['sales_curr_perc'] = Math.round((data['sales_curr'] / data['sales_target']) * 100);
    data['sales_diff'] = Math.round(data['sales_curr'] - data['sales_target']);    
    data['cars_target'] = 20;
    data['cars_curr'] = 25;
    data['cars_curr_perc'] = Math.round((data['cars_curr'] / data['cars_target']) * 100);
    data['cars_diff'] = Math.round(data['cars_curr'] - data['cars_target']);
        
    return {
        data: data
    };
});

function getCSSClass(num,getDiv) {
    var div_panel = 'panel-default';
    var div_progressBar = 'progress-bar-info';

    if(num >= 0 && num <= 33){
        div_panel = 'panel-red';
        div_progressBar = 'progress-bar-danger';
    }else if(num > 33 && num <= 99){
        div_panel = 'panel-yellow';
        div_progressBar = 'progress-bar-warning';
    }else if(num == 100){
        div_panel = 'panel-green';
        div_progressBar = 'progress-bar-success';
    }else{
        div_panel = 'panel-green';
        div_progressBar = 'progress-bar-success';
    }
    //alert(num + '% = ' + divClass);
    if(getDiv === 'progress-bar') return div_progressBar;
    if(getDiv === 'panel') return div_panel;
}