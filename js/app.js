'use strict';

// CONST
var __URL__ = 'services/index.php';

var myApp = angular.module('inApp', [
    'ngRoute',
    'ngCookies',
    'ui.bootstrap'
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                .when('/main', {
                    templateUrl: 'views/main.html',
                    controller: 'Main'
                })
                .otherwise({
                    redirectTo: '/main'
                });
    }]);