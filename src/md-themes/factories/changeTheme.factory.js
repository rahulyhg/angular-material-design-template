/*global angular */
(function () {
    'use strict';
    angular.module('wmMdThemes')
        .factory('ChangeTheme', ChangeTheme);
    
    ChangeTheme.$inject = ['$rootScope', 'mdThemeProvider'];
    
    function ChangeTheme ($rootScope, mdThemeProvider) {
        
        return {
            SwapThemes: swapThemes
        };
        
        function swapThemes (theme) {
            mdThemeProvider.activeTheme = theme;
            $rootScope.$broadcast('$activeThemeChanged');
            mdThemeProvider.globalProvider.setDefaultTheme(mdThemeProvider.activeTheme);
        }
    }
}());