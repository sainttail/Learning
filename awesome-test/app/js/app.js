/**
 * Created by Eakawat on 10/4/2015 AD.
 */
angular.module('firstApp', [])
    .controller('mainController', function () {
        var vm = this;

        vm.message = "Hey there! Come and see how good I look!";

        vm.computers = [
            {name: "Macbook Pro", color: "Silver", nerdness: 7},
            {name: "Yoga Pro 2", color: "Gray", nerdness: 6},
            {name: "Chromebook", color: "Black", nerdness: 5}
        ];
    });