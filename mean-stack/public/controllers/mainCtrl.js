/**
 * Created by eak on 10/6/15.
 */
angular.module('mainCtrl', [])
    .controller('mainController', function ($rootScope, $location, Auth) {
        var vm = this;

        vm.loggedIn = Auth.isLoggedIn();

        $rootScope.$on('$routeChangeStart', function () {
            vm.loggedIn = Auth.isLoggedIn();

            Auth.getUser()
                .then(function (data) {
                    vm.user = data;
                });
        });

        vm.doLogin = function () {
            Auth.login(vm.loginData.username, vm.loginData.password)
                .then(function (data) {
                    $location.path('/users');
                });
        };

        vm.doLogout = function () {
            Auth.logout();

            vm.user = {};
            $location.path('/login');
        };
    });