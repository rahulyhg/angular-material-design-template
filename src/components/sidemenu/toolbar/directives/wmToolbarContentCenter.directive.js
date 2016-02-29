/*global angular */
(function () {
    angular.module('sidemenu')
        .directive('wmToolbarContentCenter', wmToolbarContentCenter);
    wmToolbarContentCenter.$inject = ['$templateRequest', '$compile'];
    function wmToolbarContentCenter ($templateRequest, $compile) {
        var directive;
        directive = {
            restrict: 'AE',
            replace: true,
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, element, attr) {
            var templatePath;
            $templateRequest('pages/toolbar-content/center-content.tpl.html').then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }
}());
