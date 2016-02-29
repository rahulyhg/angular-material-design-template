/*global angular */
(function () {
    angular.module('sidemenu')
        .directive('wmToolbarContentRight', wmToolbarContentRight);
    wmToolbarContentRight.$inject = ['$templateRequest', '$compile'];
    function wmToolbarContentRight ($templateRequest, $compile) {
        var directive;
        directive = {
            restrict: 'AE',
            scope: {
                menuItems: '='
            },
            replace: true,
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attr) {
            var templatePath;
            templatePath ='pages/toolbar-content/right-content.tpl.html';
            templatePath = templatePath.replace('TYPE', attr.menuType);
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }
}());
