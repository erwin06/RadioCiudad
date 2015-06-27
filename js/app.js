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
                .when('/programs',{
                    templateUrl: 'views/programs.html',
                })
                .when('/about',{
                    templateUrl: 'views/about.html',
                })
                .otherwise({
                    redirectTo: '/main'
                });
    }]);