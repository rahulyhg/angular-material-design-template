/*global angular */
(function () {
    'use strict';
    angular.module('QuoteSummary')
        .factory('UpdateQuoteSummaryStatus', UpdateQuoteSummaryStatus);

    UpdateQuoteSummaryStatus.$inject = ['wmUndoToast'];

    function UpdateQuoteSummaryStatus(wmUndoToast) {

        return {
            SetStatus: setStatus
        };

        function setStatus(status, timeToShow) {
            var toastPositionObject;
            toastPositionObject = {
                bottom: false,
                top: true,
                left: false,
                right: true
            };
            wmUndoToast.LaunchUndoToast('Quotes Updating to ' + status, 'Undo', true, toastPositionObject, timeToShow).then((response) => {
                wmUndoToast.LaunchErrorToast(toastPositionObject, response);
            }, (response) => {
                wmUndoToast.LaunchSuccessToast(toastPositionObject);
            });
        }
    }
}());