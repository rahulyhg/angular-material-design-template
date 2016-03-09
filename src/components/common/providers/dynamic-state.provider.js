/*global angular */
/*jshint esnext: true */
(function () {
    'use strict';
    angular.module('dynamicState.provider', [])
        .provider('$dynamicState', ['$stateProvider', function ($stateProvider) {
            this.$get = function () {
                return {
                    /**
                     * @function addState
                     * @memberof dynamicState.provider
                     * @param {string} title - the title used to build state, url & find template
                     * @param {string} controllerAs - the controller to be used, if false, we don't add a controller (ie. 'UserController as user')
                     * @param {string} templatePrefix - either 'content', 'presentation' or null
                     * @author Alex Boisselle
                     * @description adds states to the dashboards state provider dynamically
                     * @returns {object} user - token and id of user
                     */
                    addState: function (state, title, index, template, controllerAs) {
                        $stateProvider.state(state, {
                            url: '/' + title,
                            templateUrl: template,
                            index: index !== null ? index : null,
                            controller: controllerAs ? controllerAs : null
                        });
                    },
                    addStateWithView: function (state, title, index, view, template, controllerAs) {
                        $stateProvider.state(state, {
                            url: '/' + title,
                            view: {
                                [view]: {
                                    templateUrl: template,
                                    controller: controllerAs ? controllerAs : null
                                }
                            }
                        });
                    }
                };
            };
        }]);
}());
