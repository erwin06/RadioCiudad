angular.module('modAdminPage', ['ui.bootstrap.modal']).controller('adminPageCntrl', function ($scope, $modal, $cookies, $location, $rootScope, $http) {

    // -------------------------- Genérico -----------------------------------//

    if ($cookies.loggin != 'logged')
        $location.path('/admin');

    $scope.currentPage = "news";

    $scope.getClass = function (page) {
        if (page == $scope.currentPage)
            return 'btn-menu-active';
        return "";
    };

    $scope.logOut = function () {
        confirm.error("¿Está seguro que desea salir?", function (button) {
            if (button == 'Aceptar') {
                $cookies.loggin = 'l';
                $location.path('/admin');
                $rootScope.$apply();
            }
        });
    };


    // ---------------------- Cambiar password -------------------------------//

    $scope.openChangePassword = function () {
        $modal.open({
            templateUrl: 'views/modals/changePassword.html',
            controller: 'changePassword'
        });
    };

    // ------------------------- Noticias  -----------------------------------//

    $scope.newsStore = [];

    $scope.showNew = function (obj) {
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/viewNew.html',
            controller: 'newsView',
            resolve: {
                items: function () {
                    return obj;
                }
            }
        });

        modalInstance.result.then(function () {
            $scope.loadNews();
        });
    };

    $scope.addNews = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/addNews.html',
            controller: 'modalNewsCntrl'
        });

        modalInstance.result.then(function () {
            $scope.loadNews();
        });
    };

    $scope.loadNews = function () {

        var json = {
            operation: 'getNews',
            data: {}
        };

        $http.post(__URL__, json)
                .success(function (response) {
                    if (response.success) {
                        $scope.newsStore = response.result;
                    }
                }).error(function (asd) {
            console.log(asd);
        });
    };

    $scope.loadNews();

    // ----------------------------- Horarios ----------------------------------

    $scope.programsStore = [];

    $scope.showProg = function (obj) {
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/viewProg.html',
            controller: 'progView',
            resolve: {
                items: function () {
                    return obj;
                }
            }
        });

        modalInstance.result.then(function () {
            $scope.loadProgs();
        });
    };

    $scope.addProg = function () {
        var modalInstance = $modal.open({
            templateUrl: 'views/modals/addProg.html',
            controller: 'modalProgCntrl'
        });

        modalInstance.result.then(function () {
            $scope.loadProgs();
        });
    };

    $scope.loadProgs = function () {

        var json = {
            operation: 'getPrograms',
            data: {}
        };

        $http.post(__URL__, json)
                .success(function (response) {
                    console.log(response);
                    if (response.success) {
                        $scope.programsStore = response.result;
                    }
                }).error(function (asd) {
        });
    };

//    $scope.loadProgs();

    // ----------------------------- Comentarios ------------------------------

    $scope.commentsStore = [];


    $scope.loadComms = function () {

        var json = {
            operation: 'getComms',
            data: {}
        };

        $http.post(__URL__, json)
                .success(function (response) {
                    console.log(response);
                    if (response.success) {
                        $scope.commentsStore = response.result;
                    }
                }).error(function (asd) {
        });
    };

    $scope.deleteComment = function (idComm) {


        confirm.info("¿Está seguro que desea eliminar?", function (button) {
            if (button == 'Aceptar') {

                var json = {
                    operation: 'deleteComm',
                    data: {
                        id: idComm
                    }
                };

                $http.post(__URL__, json).success(function(){
                    $scope.loadComms();
                });
            }
        });

    };







});
