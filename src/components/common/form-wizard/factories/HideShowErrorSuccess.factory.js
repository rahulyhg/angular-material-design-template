/*global angular */
/*jshint esnext: true */
(function() {
    'use strict';
    angular.module('formWizard')
        .factory('HideShowErrorSuccess', HideShowErrorSuccess);

    HideShowErrorSuccess.$inject = [];

    function HideShowErrorSuccess () {
        var factory;

        factory = {
            GetCurrentStep: getCurrentStep,
            SetTabError: setTabError
        };

        return factory;

        function getCurrentStep (FormSteps, controllerState) {
            var activeStep;
            angular.forEach(FormSteps.steps, (step) => {
                if (step.State === controllerState) {
                    activeStep = step;
                }
            });
            return activeStep;
        }

        function setTabError (activeStep, form) {
            var tabError;

            tabError = setTabError;
            tabError.forceShowFieldError = function () {

                angular.forEach(Object.keys(form), (key) => {
                    if (key.indexOf('$') < 0 && Object.keys(form[key].$error).length > 0) {
                        form[key].$setDirty();
                        form[key].$setTouched();
                    }
                });
            };

            if (form.$invalid && (form.$dirty || activeStep.PreviouslyVisited)) {
                activeStep.ShowError = true;
                activeStep.ShowComplete = false;
                tabError.forceShowFieldError();
            } else if (form.$valid && (form.$dirty || activeStep.PreviouslyVisited)) {
                activeStep.ShowError = false;
                activeStep.ShowComplete = true;
            } else {
                activeStep.ShowError = false;
                activeStep.ShowComplete = false;
            }
        }
    }

}());
