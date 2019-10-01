
window.Calaca = angular.module('calaca', ['elasticsearch', 'ngAnimate'],
    ['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }]
);
