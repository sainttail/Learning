/**
 * Created by eak on 10/5/15.
 */
angular.module('myApp', ['userService'])
    .controller('mainController', function ($http) {
        var vm = this;

        $http.get('/api/users').then(function (data) {
            vm.users = data.users;
        });
    });