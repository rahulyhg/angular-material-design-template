(function () {
    angular.module('asdaTheme', [])
        .config(configFunc);
    configFunc.$inject = ['$mdThemingProvider', 'asdaPrimary', 'asdaAccent', 'asdaWarn', 'asdaBackground'];
    function configFunc($mdThemingProvider, asdaPrimary, asdaAccent, asdaWarn, asdaBackground) {
        var deepCopy = JSON.parse(JSON.stringify(asdaPrimary));
        $mdThemingProvider
            .definePalette('asdaPrimary', deepCopy);

        $mdThemingProvider
            .definePalette('asdaAccent',
                           angular.copy(asdaAccent));

        $mdThemingProvider
            .definePalette('asdaWarn',
                           angular.copy(asdaWarn));

        $mdThemingProvider
            .definePalette('asdaBackground',
                           angular.copy(asdaBackground));

        $mdThemingProvider.theme('ASDA')
            .primaryPalette('asdaPrimary')
            .accentPalette('asdaAccent')
            .warnPalette('asdaWarn')
            .backgroundPalette('asdaBackground');
    }
}());
