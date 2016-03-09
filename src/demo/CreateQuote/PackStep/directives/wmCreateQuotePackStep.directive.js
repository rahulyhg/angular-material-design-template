/*global angular */
/*jshint esnext: true */
(function () {
    angular.module('CreateQuote')
        .directive('wmCreateQuotePackStep', wmCreateQuotePackStep);

    wmCreateQuotePackStep.$inject = ['$templateRequest', '$compile'];

    function wmCreateQuotePackStep ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: CreateQuotePackStepController,
            controllerAs: 'createQuotePack',
            bindToController: true,
            link: linkFunc
        };

        function linkFunc (scope, element) {
            var templatePath;
            templatePath ='src/demo/CreateQuote/PackStep/partials/form-pack.tpl.html';
            $templateRequest(templatePath).then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    CreateQuotePackStepController.$inject = ['$scope', '$timeout', 'CreateQuoteObject', 'CreateQuoteFormSteps', 'HideShowErrorSuccess'];

    function CreateQuotePackStepController ($scope, $timeout, CreateQuoteObject, CreateQuoteFormSteps, HideShowErrorSuccess) {
        var self;

        self = this;

        self.Quote = CreateQuoteObject;

        function getCurrentStep () {
            return HideShowErrorSuccess.GetCurrentStep(CreateQuoteFormSteps, 'pack');
        }
        function setTabError () {
            HideShowErrorSuccess.SetTabError(getCurrentStep(), self.packStepForm);
        }

        function calculateSupplierPackCubicVolume () {
            self.data.SupplierPackVolume = isNaN(self.data.SupplierPackLength * self.data.SupplierPackWidth * self.data.SupplierPackHeight) ? 0 : self.data.SupplierPackLength * self.data.SupplierPackWidth * self.data.SupplierPackHeight / 1000000000;
        }

        function calculateWarehousePackCubicVolume() {
            self.data.WarehousePackVolume = isNaN(self.data.WarehousePackLength * self.data.WarehousePackWidth * self.data.WarehousePackHeight) ? 0 : self.data.WarehousePackLength * self.data.WarehousePackWidth * self.data.WarehousePackHeight / 1000000000;
        }

        $timeout(function () {
            setTabError();
            $scope.$watch(() => {
                return self.packStepForm.$valid;
            }, () => {
                setTabError();
            });
        }, 500);
        $timeout(function () {
            getCurrentStep().PreviouslyVisited = true;
        }, 750);

        $scope.$watch(() => {
            return self.data.SupplierPackLength;
        }, () => {
            calculateSupplierPackCubicVolume();
        });

        $scope.$watch(() => {
            return self.data.SupplierPackWidth;
        }, () => {
            calculateSupplierPackCubicVolume();
        });

        $scope.$watch(() => {
            return self.data.SupplierPackHeight;
        }, () => {
            calculateSupplierPackCubicVolume();
        });

        $scope.$watch(() => {
            return self.data.WarehousePackLength;
        }, () => {
            calculateWarehousePackCubicVolume();
        });

        $scope.$watch(() => {
            return self.data.WarehousePackWidth;
        }, () => {
            calculateWarehousePackCubicVolume();
        });

        $scope.$watch(() => {
            return self.data.WarehousePackHeight;
        }, () => {
            calculateWarehousePackCubicVolume();
        });

        $scope.$on('$stateChangeStart', ()=> {
            setTabError();
        });

        if (CreateQuoteObject === {}) {
            CreateQuoteObject.Pack = self.data;
        } else {
            self.data = CreateQuoteObject.Pack;
        }

    }
}());
