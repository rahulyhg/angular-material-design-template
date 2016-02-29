/*global angular */
/*jshint esnext: true */
(function () {
    angular.module('CreateQuote')
        .directive('wmCreateQuoteGeneralStep', wmCreateQuoteGeneralStep);

    wmCreateQuoteGeneralStep.$inject = ['$templateRequest', '$compile'];

    function wmCreateQuoteGeneralStep ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: CreateQuoteGeneralStepController,
            controllerAs: 'createQuoteGeneral',
            bindToController: true,
            link: linkFunc
        };

        function linkFunc (scope, element) {
            var templatePath;
            templatePath ='src/demo/CreateQuote/GeneralStep/partials/form-general.tpl.html';
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    CreateQuoteGeneralStepController.$inject = ['$scope', '$timeout', 'CreateQuoteObject', 'HideShowErrorSuccess', 'CreateQuoteFormSteps'];

    function CreateQuoteGeneralStepController ($scope, $timeout, CreateQuoteObject, HideShowErrorSuccess, CreateQuoteFormSteps) {
        var self;

        self = this;

        function getCurrentStep () {
            return HideShowErrorSuccess.GetCurrentStep(CreateQuoteFormSteps, 'general');
        }
        function setTabError () {
            HideShowErrorSuccess.SetTabError(getCurrentStep(), self.generalStepForm);
        }

        $timeout(function () {
            setTabError();
            $scope.$watch(() => {
                return self.generalStepForm.$valid;
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

        if (CreateQuoteObject.General === {}) {
            CreateQuoteObject.General = self.data;
        } else {
            self.data = CreateQuoteObject.General;
        }

        if (self.IsReQuote === undefined) {
            self.IsReQuote = false;
        }
    }
}());
