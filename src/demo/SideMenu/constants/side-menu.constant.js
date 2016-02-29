/*global angular */
(function () {
    'use strict';
    angular.module('SideMenu')
        .constant('SideMenuMenuItems', {
        title: 'Navigation',
        menuItems: [
            {
                name: 'Quote Management',
                type: 'toggle',
                icon: 'fa fa-gavel',
                isOpen: false,
                isChildActive: false,
                description: 'Create and Manage Quotes',
                pages: [
                    {
                        name: 'Create Quote',
                        state: 'container.form.general',
                        type: 'link',
                        icon: 'fa fa-pencil-square-o',
                        description: 'Create New Quote'
                    },
                    {
                        name: 'View/Edit Quote',
                        state: 'container.form.viewedit ',
                        type: 'link',
                        icon: 'fa fa-eye',
                        description: 'View or Update Quote'
                    },
                    {
                        name: 'Sample Tag',
                        state: 'container.quote.sampletag',
                        type: 'link',
                        icon: 'fa fa-barcode',
                        description: 'Generate and Print Sample Tag'
                    },
                    {
                        name: 'Reports',
                        type: 'toggle',
                        icon: 'fa fa-area-chart',
                        description: 'Quote Searches and Reports',
                        pages: [
                            {
                                name: 'Quote Summary Report',
                                state: 'container.quotesummary ',
                                type: 'link',
                                icon: 'fa fa-pie-chart',
                                description: 'Quote Summary Report'
                            },
                            {
                                name: 'Search Buy Plan',
                                state: 'container.quote.searchbuyplan',
                                type: 'link',
                                icon: 'fa fa-calendar'
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Shipment Schedule',
                type: 'toggle',
                icon: 'fa fa-ship',
                isOpen: false,
                isChildActive: false,
                description: 'Create and Manage Shipments',
                pages: [
                    {
                        name: 'Search Quote',
                        state: 'container.test',
                        type: 'link',
                        icon: 'fa fa-search',
                        description: 'Search Quote'
                    }
                ]
            }

//            stackedIcons: [
//                {
//                    icon: 'fa-circle',
//                    iconStyle: 'fa-stack-2x'
//                                                },
//                {
//                    icon: 'fa-search',
//                    iconStyle: 'fa-stack-1x fa-inverse'
//                                                }
//                                            ]
        ]
    });
}());
