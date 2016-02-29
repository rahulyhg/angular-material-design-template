/*global angular */
/*jslint esnext: true */
(function () {
    'use strict';
    angular.module('sidemenu.factory', [])
        .provider('SideMenuFactory', [function () {
            var self;
            var sections;

            this.$get = function () {
                return {
                    sections: sections,

                    setSections: setSections,

                    toggleSelectSection: function (section) {
                        toggleSection(section);
                    },
                    isSectionSelected: function (section) {
                        return isSectionSelected(section);
                    },

                    selectPage: function (section, page) {
                        if (section && page) {
                            selectPage(section, page);
                        }
                    }
                };
            };

            function setSections (sectionObject) {
                sections = sectionObject;
            }

            function isSectionSelected(section) {
                if (section) {
                    return section.isOpen;
                }
            }
        }]);
}());
