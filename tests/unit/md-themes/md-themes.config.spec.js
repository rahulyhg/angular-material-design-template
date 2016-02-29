describe('theme.config', function () {
    var $mdThemingProvider, mdThemeProvider;
    beforeEach(function () {
        angular.module('mdThemingProviderConfig', [])
            .config(function(_$mdThemingProvider_, _mdThemeProvider_) {
            $mdThemingProvider= _$mdThemingProvider_;
            mdThemeProvider = _mdThemeProvider_;
        });
        module('ngMaterial');
        module('themeConstants');
        module('asdaTheme');
        module('walmartTheme');
        inject();
    });
    it('should make $mdThemingProvider global on mdThemeProvider', function() {
        //TODO: Figure out how to successfully test this function
    });
});
