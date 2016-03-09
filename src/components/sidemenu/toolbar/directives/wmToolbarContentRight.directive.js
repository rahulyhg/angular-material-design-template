/*global angular */
(function () {
    angular.module('sidemenu')
        .directive('wmToolbarContentRight', wmToolbarContentRight);
    wmToolbarContentRight.$inject = ['$compile', '$templateRequest', 'CompileTemplate'];
    function wmToolbarContentRight ($compile, $templateRequest, CompileTemplate) {
        var directive;
        directive = {
            restrict: 'AE',
            scope: {
                menuItems: '='
            },
            controller: wmToolbarContentRightController,
            controllerAs: 'toolbarContentRight',
            bindToController: true,
            replace: true,
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element) {
            var templatePath;
            templatePath ='pages/toolbar-content/right-content.tpl.html';
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    wmToolbarContentRightController.$inject = ['ChangeTheme'];

    function wmToolbarContentRightController (ChangeTheme) {
        var self;

        self = this;

        self.SwapThemes = function (theme) {
            ChangeTheme.SwapThemes(theme);
        }

        self.templatePath = 'pages/toolbar-content/right-content.tpl.html';
    }

}());
