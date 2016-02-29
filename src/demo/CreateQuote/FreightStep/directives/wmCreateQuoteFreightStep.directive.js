/*global angular */
/*jshint esnext: true */
(function () {
    angular.module('CreateQuote')
        .directive('wmCreateQuoteFreightStep', wmCreateQuoteFreightStep);

    wmCreateQuoteFreightStep.$inject = ['$templateRequest', '$compile'];

    function wmCreateQuoteFreightStep ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: CreateQuoteFreightStepController,
            controllerAs: 'createQuoteFreight',
            bindToController: true,
            link: linkFunc
        };

        function linkFunc (scope, element) {
            var templatePath;
            templatePath ='src/demo/CreateQuote/FreightStep/partials/form-freight.tpl.html';
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    CreateQuoteFreightStepController.$inject = ['$scope', '$timeout', 'CreateQuoteObject', 'CreateQuoteFormSteps', 'HideShowErrorSuccess'];

    function CreateQuoteFreightStepController ($scope, $timeout, CreateQuoteObject, CreateQuoteFormSteps, HideShowErrorSuccess) {
        var self;

        self = this;

        function getCurrentStep () {
            return HideShowErrorSuccess.GetCurrentStep(CreateQuoteFormSteps, 'shipment');
        }
        function setTabError () {
            HideShowErrorSuccess.SetTabError(getCurrentStep(), self.freightStepForm);
        }

        $timeout(function () {
            setTabError();
            $scope.$watch(() => {
                return self.freightStepForm.$valid;
            }, () => {
                setTabError();
            });
        }, 500);
        $timeout(function () {
            getCurrentStep().PreviouslyVisited = true;
        }, 750);

        $scope.$on('$stateChangeStart', ()=> {
            setTabError();
        });

        if (CreateQuoteObject === {}) {
            CreateQuoteObject.Freight = self.data;
        } else {
            self.data = CreateQuoteObject.Freight;
        }
    }
}());
