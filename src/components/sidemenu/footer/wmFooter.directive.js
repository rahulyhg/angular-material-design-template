/*global angular */
(function () {
    'use strict';
    angular.module('sidemenu')
        .directive('wmFooter', wmFooter);

    wmFooter.$inject = ['$templateRequest', '$compile'];
    function wmFooter ($templateRequest, $compile) {
        var directive;

        directive = {
            restrict: 'AE',
            replace: true,
            link: linkFunc
        };

        return directive;

        function linkFunc (scope, element) {
            var templatePath;
            templatePath ='pages/footer/footer-content.tpl.html';
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }
}());
