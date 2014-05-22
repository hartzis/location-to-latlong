'use strict';

var latlongApp = angular.module('locationToLatlongApp', [
    'ngResource',
    'ngRoute',
    'latlongControllers',
    'google-maps'

]);


latlongApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);