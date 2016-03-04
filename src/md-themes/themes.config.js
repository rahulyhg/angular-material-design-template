(function () {
    'use strict';
    angular.module('wmMdThemes', ['ngMaterial', 'themeConstants', 'asdaTheme', 'walmartTheme'])
        .config(configFunc);
    configFunc.$inject = ['$mdThemingProvider', 'mdThemeProvider'];
    function configFunc($mdThemingProvider, mdThemeProvider) {
        var activeTheme;
        activeTheme = 'Walmart';
        mdThemeProvider.globalProvider = $mdThemingProvider;
        mdThemeProvider.activeTheme = activeTheme;
        $mdThemingProvider.setDefaultTheme(activeTheme);
    }
}());

