/*global angular */
/*jshint esnext: true */
(function () {
    angular.module('CreateQuote')
        .directive('wmCreateQuoteCostingStep', wmCreateQuoteCostingStep);

    wmCreateQuoteCostingStep.$inject = ['$templateRequest', '$compile'];

    function wmCreateQuoteCostingStep ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: CreateQuoteCostingStepController,
            controllerAs: 'createQuoteCosting',
            bindToController: true,
            link: linkFunc
        };

        function linkFunc (scope, element) {
            var templatePath;
            templatePath ='src/demo/CreateQuote/CostingStep/partials/form-costing.tpl.html';
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    CreateQuoteCostingStepController.$inject = ['$scope', '$timeout', 'CreateQuoteObject', 'CreateQuoteFormSteps', 'HideShowErrorSuccess'];

    function CreateQuoteCostingStepController ($scope, $timeout, CreateQuoteObject, CreateQuoteFormSteps, HideShowErrorSuccess) {
        var self;

        self = this;

        function getCurrentStep () {
            return HideShowErrorSuccess.GetCurrentStep(CreateQuoteFormSteps, 'costing');
        }
        function setTabError () {
            HideShowErrorSuccess.SetTabError(getCurrentStep(), self.costingStepForm);
        }

        $timeout(function () {
            setTabError();
            $scope.$watch(() => {
                return self.costingStepForm.$valid;
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
            CreateQuoteObject.Costing = self.data;
        } else {
            self.data = CreateQuoteObject.Costing;
        }
    }
}());
