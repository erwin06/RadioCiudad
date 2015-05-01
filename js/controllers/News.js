angular.module('newsModal', ['ui.bootstrap.modal']).controller('newsCntrl', function ($scope, $modal, $http) {

    $scope.changeMaxNews = function (value) {
        $scope.currentPage = 0;
        $scope.newsFilter = "";
        $scope.currentMaxNews = value;
    };

    /**
     * Options de selects
     */
    $scope.options = {
        maxNews: [
            {value: 5},
            {value: 10},
            {value: 15}]
    };

    /**
     * Cantidad actual de noticias máximas
     */
    $scope.currentMaxNews = 5;
    $scope.currentPage = 0;


    $scope.numberOfPages = function () {
        return Math.ceil($scope.news.length / $scope.currentMaxNews);
    };

    $scope.openSearch = function () {
        $modal.open({
            templateUrl: 'views/modals/search.html',
        });
    };


    /**
     * 
     * hardcodeo
     * 
     */

    $scope.news = [
        {title: "Noticia 1", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 2", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 3", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 4", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 5", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 6", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 7", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 8", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 9", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 10", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 11", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 12", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 13", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 14", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"},
        {title: "Noticia 15", body: "Cuerpo", img: "resource/angry1.png", date: "2014-10-10"}
    ];
    
    
    $scope.loadNews = function () {

        var json = {
            operation: 'getNews',
            data: {}
        };

        $http.post(__URL__, json)
                .success(function (response) {
                    console.log(response);
                    if (response.success) {
                        $scope.news = response.result;
                    }
                }).error(function (asd) {
            console.log(asd);
        });
    };

    $scope.loadNews();


});




angular.module('newsModal').filter('startFrom', function () {
    return function (input, start) {
        return input.slice(start);
    };
});