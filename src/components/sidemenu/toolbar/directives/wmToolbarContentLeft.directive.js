/*global angular */
(function () {
    angular.module('sidemenu')
        .directive('wmToolbarContentLeft', wmToolbarContentLeft);
    wmToolbarContentLeft.$inject = ['$templateRequest', '$compile'];
    function wmToolbarContentLeft ($templateRequest, $compile) {
        var directive;
        directive = {
            restrict: 'AE',
            replace: true,
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element) {
            var templatePath;
            templatePath ='pages/toolbar-content/left-content.tpl.html';
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }
}());
