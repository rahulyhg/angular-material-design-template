/*global angular */
(function () {
    'use strict';
    angular.module('QuoteForm', [])
        .constant('CreateQuoteFormSteps', {
        title: 'Create Quote',
        steps: [
            {
                State: 'general',
                Title: 'General',
                TemplatePath: '/pages/user-views/quote/form-general.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'product',
                Title: 'Product',
                TemplatePath: '/pages/user-views/quote/form-product.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'pack',
                Title: 'Pack',
                TemplatePath: '/pages/user-views/quote/form-pack.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'classification',
                Title: 'Classification',
                TemplatePath: '/pages/user-views/quote/form-classification.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'shipment',
                Title: 'Shipment',
                TemplatePath: '/pages/user-views/quote/form-shipment.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            },
            {
                State: 'costing',
                Title: 'Costing',
                TemplatePath: '/pages/user-views/quote/form-costing.tpl.html',
                ShowError: false,
                ShowComplete: false,
                PreviouslyVisited: false
            }
        ]
    });
}());
