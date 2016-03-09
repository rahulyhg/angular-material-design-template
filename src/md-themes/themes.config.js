(function () {
    'use strict';
    angular.module('wmMdThemes', ['ngMaterial', 'themeConstants', 'asdaTheme', 'walmartTheme'])
        .config(configFunc)
        .run(runFunc);

    configFunc.$inject = ['$mdThemingProvider', 'mdThemeProvider'];

    function configFunc($mdThemingProvider, mdThemeProvider) {
        mdThemeProvider.globalProvider = $mdThemingProvider;
        $mdThemingProvider.alwaysWatchTheme(true);
    }

    runFunc.$inject = ['$rootScope', '$timeout', 'mdThemeProvider'];

    function runFunc ($rootScope, $timeout, mdThemeProvider) {

    }
}());

