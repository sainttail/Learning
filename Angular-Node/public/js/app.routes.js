/**
 * Created by eak on 10/5/15.
 */
angular.module('routerRoutes', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/pages/home.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .when('/about', {
                templateUrl: 'views/pages/about.html',
                controller: 'aboutController',
                controllerAs: 'about'
            })
            .when('/contact', {
                templateUrl: 'views/pages/contact.html',
                controller: 'contactController',
                controllerAs: 'contact'
            });
        $locationProvider.html5Mode(true);
    });