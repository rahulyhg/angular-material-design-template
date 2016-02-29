/*global angular */
/*jshint esnext: true */
(function () {
    angular.module('CreateQuote')
        .directive('wmCreateQuoteProductStep', wmCreateQuoteProductStep);

    wmCreateQuoteProductStep.$inject = ['$templateRequest', '$compile'];

    function wmCreateQuoteProductStep ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: CreateQuoteProductStepController,
            controllerAs: 'createQuoteProduct',
            bindToController: true,
            link: linkFunc
        };

        function linkFunc (scope, element) {
            var templatePath;
            templatePath ='src/demo/CreateQuote/ProductStep/partials/form-product.tpl.html';
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    CreateQuoteProductStepController.$inject = ['$scope', '$timeout', 'CreateQuoteObject', 'CreateQuoteFormSteps', 'HideShowErrorSuccess'];

    function CreateQuoteProductStepController ($scope, $timeout, CreateQuoteObject, CreateQuoteFormSteps, HideShowErrorSuccess) {
        var self;

        self = this;

        function getCurrentStep () {
            return HideShowErrorSuccess.GetCurrentStep(CreateQuoteFormSteps, 'product');
        }
        function setTabError () {
            HideShowErrorSuccess.SetTabError(getCurrentStep(), self.productStepForm);
        }

        $timeout(function () {
            setTabError();
            $scope.$watch(() => {
                return self.productStepForm.$valid;
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
            CreateQuoteObject.Product = self.data;
        } else {
            self.data = CreateQuoteObject.Product;
        }

        if (self.data.IsAssortment === undefined) {
            self.data.IsAssortment = false;
        }
        if (self.data.IsGlobalProduct === undefined) {
            self.data.IsGlobalProduct = false;
        }
    }
}());
