timeApp.directive('showTime', function() {
    return {
        restrict: 'E',
        template: '<h2> The current time is {{time}}</h2>',
        link: function(scope, element, attrs) {
            var currentTime = new Date();
            scope.time = currentTime.toString();
        }
       
    }
});