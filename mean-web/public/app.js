/**
 * Created by eak on 10/7/15.
 */
var mainApplicationModuleName = "mean";

var mainApplicationModule = angular.module(mainApplicationModuleName, ['example']);

angular.element(document).ready(function () {
    angular.bootstrap(document, [mainApplicationModuleName])
});