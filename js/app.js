'use strict';

// CONST
var __URL__ = 'services/index.php';
var __IMAGE__URL__ = 'services/files/files/';

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
                .when('/news',{
                    templateUrl: 'views/news.html',
                })
                .when('/about',{
                    templateUrl: 'views/about.html'
                })
                .when('/admin',{
                    templateUrl: 'views/admin.html'
                })
                .otherwise({
                    redirectTo: '/main'
                });
    }]);

// -----------------------------------------------------------------------------

$(document).ready(function(){
    $("small").remove();
});