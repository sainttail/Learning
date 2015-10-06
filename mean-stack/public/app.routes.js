/**
 * Created by eak on 10/5/15.
 */
angular.module('app.routes', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/pages/home.html'
            })
            .when('login,', {
                templateUrl: 'views/pages/login.html',
                controller: 'mainController',
                controllerAs: 'login'
            });

        $locationProvider.html5Mode(true);
    });