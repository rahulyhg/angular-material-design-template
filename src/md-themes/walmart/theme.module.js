(function () {
    angular.module('walmartTheme', [])
        .config(configFunc);
    configFunc.$inject = ['$mdThemingProvider', 'walmartPrimary', 'walmartAccent', 'walmartWarn', 'walmartBackground'];
    function configFunc($mdThemingProvider, walmartPrimary, walmartAccent, walmartWarn, walmartBackground) {
        $mdThemingProvider
            .definePalette('walmartPrimary',
                           angular.copy(walmartPrimary));

        $mdThemingProvider
            .definePalette('walmartAccent',
                           angular.copy(walmartAccent));

        $mdThemingProvider
            .definePalette('walmartWarn',
                           angular.copy(walmartWarn));

        $mdThemingProvider
            .definePalette('walmartBackground',
                           angular.copy(walmartBackground));

        $mdThemingProvider.theme('Walmart')
            .primaryPalette('walmartPrimary')
            .accentPalette('walmartAccent')
            .warnPalette('walmartWarn')
            .backgroundPalette('walmartBackground');
    }
}());
