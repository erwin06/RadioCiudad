'use strict';

// CONST
var __URL__ = 'services/index.php';

angular.module('inApp', [
    'ngRoute',
    'ngCookies',
    'inApap',
    'ui.bootstrap',
    'modMenu',
    'newsModal',
    'modAdminPage',
    'modAdmin',
    'modModalNews',
    'modModa',
    'modprogView',
    'modalProgCntrl',
    'changePassword',
    'modAbout',
    'modProg'
]).config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                .when('/adminPage', {
                    templateUrl: 'views/adminPage.html',
                    controller: 'adminPageCntrl'
                })
                .when('/admin', {
                    templateUrl: 'views/admin.html',
                    controller: 'adminCntrl'
                })
                .when('/about', {
                    templateUrl: 'views/about.html',
                    controller: 'aboutCntrl'
                })
                .when('/programs', {
                    templateUrl: 'views/programs.html',
                    controller: 'modProg'
                })
                .when('/news', {
                    templateUrl: 'views/news.html',
                    controller: 'newsCntrl'
                })
                .when('/main', {
                    templateUrl: 'views/main.html',
                    controller: 'newPackageCntrl'
                })
                .otherwise({
                    redirectTo: '/main'
                });
    }]);