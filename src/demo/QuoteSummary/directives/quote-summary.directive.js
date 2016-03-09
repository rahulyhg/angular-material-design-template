/*global angular */
(function () {
    'use strict';
    angular.module('QuoteSummary')
        .directive('wmQuoteSummary', wmQuoteSummary);

    wmQuoteSummary.$inject = ['$templateRequest', '$compile'];

    function wmQuoteSummary ($templateRequest, $compile) {
        return {
            restrict: 'AE',
            scope: {},
            controller: QuoteSummaryController,
            controllerAs: 'quoteSummary',
            link: linkFunc
        };

        function linkFunc (scope, element) {
            $templateRequest('src/demo/QuoteSummary/partials/quote-summary.tpl.html').then(function (html) {
                var template;
                template = angular.element(html);
                element.append(template);
                $compile(template)(scope);
            });
        }
    }

    QuoteSummaryController.$inject = ['i18nService', 'uiGridExporterConstants', 'UpdateQuoteSummaryStatus'];

    function QuoteSummaryController (i18nService, uiGridExporterConstants, UpdateQuoteSummaryStatus) {
        var self, i, data;

        self = this;

        self.gridOptions = {
            maxVisibleColumnCount: 10,
            showGridFooter: false,
            enableSorting: true,
            enableFiltering: true,
            enableGridMenu: true,
            enableGridToolbar: true,
            exporterCsvFilename: 'Quote Summary Report.csv',
            selectedStatus: {},
            gridTitle: 'Quote Summary',
            data: '',
            columnDefs: [
                {
                    field: 'name'
                },
                {
                    field: 'gender'
                },
                {
                    field: 'company',
                    enableSorting: false
                }
            ],
            quoteSummaryReports: [
                {
                    id: null,
                    selectedDisplay: null,
                    title: 'Clear',
                    action: function (report) {
                        self.gridOptions.selectedQuoteSummaryReport = report;
                        self.gridOptions.exporterCsvFilename = 'Quote Summary Report.csv';
                    }
                },
                {
                    id: 1,
                    selectedDisplay: 'Morning Report',
                    title: 'Morning Report',
                    action: function (report) {
                        self.gridOptions.selectedQuoteSummaryReport = report;
                        self.gridOptions.exporterCsvFilename = report.title + '.csv';
                    }
                },
                {
                    id: 2,
                    selectedDisplay: 'Customs Report',
                    title: 'Customs Report',
                    action: function (report) {
                        self.gridOptions.selectedQuoteSummaryReport = report;
                        self.gridOptions.exporterCsvFilename = report.title + '.csv';
                    }
                },
                {
                    id: 3,
                    selectedDisplay: 'Daily Planner',
                    title: 'Daily Planner',
                    action: function (report) {
                        self.gridOptions.selectedQuoteSummaryReport = report;
                        self.gridOptions.exporterCsvFilename = report.title + '.csv';
                    }
                },
                {
                    id: 4,
                    selectedDisplay: 'Gap Analysis',
                    title: 'Gap Analysis',
                    action: function (report) {
                        self.gridOptions.selectedQuoteSummaryReport = report;
                        self.gridOptions.exporterCsvFilename = report.title + '.csv';
                    }
                }
            ],
            quoteStatuses: [
                {
                    id: null,
                    text: 'Select Status',
                    action: function (status) {
                        self.gridOptions.selectedStatus = status;
                    }
                },
                {
                    id: 1,
                    text: 'Submitted',
                    action: function (status) {
                        self.gridOptions.selectedStatus = status;
                    }
                },
                {
                    id: 2,
                    text: 'Pending',
                    action: function (status) {
                        self.gridOptions.selectedStatus = status;
                    }
                },
                {
                    id: 3,
                    text: 'Pending Complete',
                    action: function (status) {
                        self.gridOptions.selectedStatus = status;
                    }
                },
                {
                    id: 4,
                    text: 'Committed',
                    action: function (status) {
                        self.gridOptions.selectedStatus = status;
                    }
                },
                {
                    id: 5,
                    text: 'Rejected',
                    action: function (status) {
                        self.gridOptions.selectedStatus = status;
                    }
                }
            ],
            exportMenuItems: [
                {
                    title: i18nService.getSafeText('gridMenu.exporterAllAsCsv'),
                    action: function ($event) {
                        self.grid1Api.exporter.csvExport(uiGridExporterConstants.ALL, uiGridExporterConstants.ALL);
                    },
                    shown: function () {
                        return self.grid1Api.grid.options.exporterMenuCsv && self.grid1Api.grid.options.exporterMenuAllData;
                    }
                },
                {
                    title: i18nService.getSafeText('gridMenu.exporterVisibleAsCsv'),
                    action: function ($event) {
                        self.grid1Api.exporter.csvExport(uiGridExporterConstants.VISIBLE, uiGridExporterConstants.VISIBLE);
                    },
                    shown: function () {
                        return self.grid1Api.grid.options.exporterMenuCsv && self.grid1Api.grid.options.exporterMenuVisibleData;
                    }
                },
                {
                    title: i18nService.getSafeText('gridMenu.exporterSelectedAsCsv'),
                    action: function ($event) {
                        self.grid1Api.exporter.csvExport(uiGridExporterConstants.SELECTED, uiGridExporterConstants.VISIBLE);
                    },
                    shown: function () {
                        return self.grid1Api.grid.options.exporterMenuCsv && self.grid1Api.grid.options.exporterMenuSelectedData &&
                            (self.grid1Api.grid.api.selection && self.grid1Api.grid.api.selection.getSelectedRows().length > 0);
                    },
                },
                {
                    title: i18nService.getSafeText('gridMenu.exporterAllAsPdf'),
                    action: function ($event) {
                        self.grid1Api.exporter.pdfExport(uiGridExporterConstants.ALL, uiGridExporterConstants.ALL);
                    },
                    shown: function () {
                        return self.grid1Api.grid.options.exporterMenuPdf && self.grid1Api.grid.options.exporterMenuAllData;
                    },
                },
                {
                    title: i18nService.getSafeText('gridMenu.exporterVisibleAsPdf'),
                    action: function ($event) {
                        self.grid1Api.exporter.pdfExport(uiGridExporterConstants.VISIBLE, uiGridExporterConstants.VISIBLE);
                    },
                    shown: function () {
                        return self.grid1Api.grid.options.exporterMenuPdf && self.grid1Api.grid.options.exporterMenuVisibleData;
                    },
                },
                {
                    title: i18nService.getSafeText('gridMenu.exporterSelectedAsPdf'),
                    action: function ($event) {
                        self.grid1Api.exporter.pdfExport(uiGridExporterConstants.SELECTED, uiGridExporterConstants.VISIBLE);
                    },
                    shown: function () {
                        return self.grid1Api.grid.options.exporterMenuPdf && self.grid1Api.grid.options.exporterMenuSelectedData &&
                            (self.grid1Api.grid.api.selection && self.grid1Api.grid.api.selection.getSelectedRows().length > 0);
                    },
                }
            ],
            gridMenuCustomItems: [
                        {
                            title: 'Export',
                            order: 200
                        },
                        {
                            title: i18nService.getSafeText('gridMenu.exporterAllAsCsv'),
                            action: function ($event) {
                                self.grid1Api.grid.api.exporter.csvExport(uiGridExporterConstants.ALL, uiGridExporterConstants.ALL);
                            },
                            shown: function () {
                                return self.grid1Api.grid.options.exporterMenuCsv && self.grid1Api.grid.options.exporterMenuAllData;
                            },
                            order: 201
                        }, {
                            title: i18nService.getSafeText('gridMenu.exporterVisibleAsCsv'),
                            action: function ($event) {
                                self.grid1Api.grid.api.exporter.csvExport(uiGridExporterConstants.VISIBLE, uiGridExporterConstants.VISIBLE);
                            },
                            shown: function () {
                                return self.grid1Api.grid.options.exporterMenuCsv && self.grid1Api.grid.options.exporterMenuVisibleData;
                        },
                            order: 202
                        }, {
                            title: i18nService.getSafeText('gridMenu.exporterSelectedAsCsv'),
                            action: function ($event) {
                                self.grid1Api.grid.api.exporter.csvExport(uiGridExporterConstants.SELECTED, uiGridExporterConstants.VISIBLE);
                            },
                            shown: function () {
                                return self.grid1Api.grid.options.exporterMenuCsv && self.grid1Api.grid.options.exporterMenuSelectedData && (self.grid1Api.grid.api.selection && self.grid1Api.grid.api.selection.getSelectedRows().length > 0);
                            },
                            order: 203
                        }, {
                            title: i18nService.getSafeText('gridMenu.exporterAllAsPdf'),
                            action: function ($event) {
                                self.grid1Api.grid.api.exporter.pdfExport(uiGridExporterConstants.ALL, uiGridExporterConstants.ALL);
                            },
                            shown: function () {
                                return self.grid1Api.grid.options.exporterMenuPdf && self.grid1Api.grid.options.exporterMenuAllData;
                            },
                            order: 204
                        }, {
                            title: i18nService.getSafeText('gridMenu.exporterVisibleAsPdf'),
                            action: function ($event) {
                                self.grid1Api.grid.api.exporter.pdfExport(uiGridExporterConstants.VISIBLE, uiGridExporterConstants.VISIBLE);
                            },
                            shown: function () {
                                return self.grid1Api.grid.options.exporterMenuCsv && self.grid1Api.grid.options.exporterMenuVisibleData;
                            },
                            order: 205
                        }, {
                            title: i18nService.getSafeText('gridMenu.exporterSelectedAsPdf'),
                            action: function ($event) {
                                self.grid1Api.grid.api.exporter.pdfExport(uiGridExporterConstants.SELECTED, uiGridExporterConstants.VISIBLE);
                            },
                            shown: function () {
                                return self.grid1Api.grid.options.exporterMenuPdf && self.grid1Api.grid.options.exporterMenuSelectedData && (self.grid1Api.grid.api.selection && self.grid1Api.grid.api.selection.getSelectedRows().length > 0);
                            },
                            order: 206
                        },
                        {
                            id: null,
                            title: 'Update Status',
                            action: function (status) {
                                self.gridOptions.selectedStatus = status;
                            },
                            disabledCondition: 'grid.api.selection && !grid.api.selection.getSelectedRows().length > 0',
                            order: 500
                        },
                        {
                            id: 2,
                            title: 'In Review',
                            action: function (event, status) {
                                UpdateQuoteSummaryStatus.SetStatus(status.title, 5000);
                            },
                            order: 502
                        },
                        {
                            id: 3,
                            title: 'Pending',
                            action: function (event, status) {
                                UpdateQuoteSummaryStatus.SetStatus(status.title, 5000);
                            },
                            order: 503
                        },
                        {
                            id: 4,
                            title: 'Pending Complete',
                            action: function (event, status) {
                                UpdateQuoteSummaryStatus.SetStatus(status.title, 5000);
                            },
                            order: 504
                        },
                        {
                            id: 5,
                            title: 'Committed',
                            action: function (event, status) {
                                UpdateQuoteSummaryStatus.SetStatus(status.title, 5000);
                            },
                            order: 505
                        },
                        {
                            id: 6,
                            title: 'Rejected',
                            action: function (event, status) {
                                UpdateQuoteSummaryStatus.SetStatus(status.title, 5000);
                            },
                            order: 506
                        },
                        {
                          title: 'Reports',
                          order: 600
                        },
                        {
                            id: null,
                            selectedDisplay: null,
                            title: 'Clear',
                            action: function (report) {
                                self.gridOptions.exporterCsvFilename = 'Quote Summary Report.csv';
                            },
                            order: 601
                        },
                        {
                            id: 1,
                            selectedDisplay: 'Morning Report',
                            title: 'Morning Report',
                            action: function (report) {
                                self.gridOptions.selectedQuoteSummaryReport = report;
                                self.gridOptions.exporterCsvFilename = report.title + '.csv';
                            },
                            order: 602
                        },
                        {
                            id: 2,
                            selectedDisplay: 'Customs Report',
                            title: 'Customs Report',
                            action: function (report) {
                                self.gridOptions.selectedQuoteSummaryReport = report;
                                self.gridOptions.exporterCsvFilename = report.title + '.csv';
                            },
                            order: 603
                        },
                        {
                            id: 3,
                            selectedDisplay: 'Daily Planner',
                            title: 'Daily Planner',
                            action: function (report) {
                                self.gridOptions.selectedQuoteSummaryReport = report;
                                self.gridOptions.exporterCsvFilename = report.title + '.csv';
                            },
                            order: 604
                        },
                        {
                            id: 4,
                            selectedDisplay: 'Gap Analysis',
                            title: 'Gap Analysis',
                            action: function (report) {
                                self.gridOptions.selectedQuoteSummaryReport = report;
                                self.gridOptions.exporterCsvFilename = report.title + '.csv';
                            },
                            order: 605
                        }
          ],
            onRegisterApi: function (gridApi) {
                self.grid1Api = gridApi;
            }
        };

        data = [];

        for (i = 0; i < 25; i += 1) {
            data.push({
                name: 'Name ' + i,
                gender: 'Gender ' + i,
                company: 'Company ' + i
            });
        }

        self.gridOptions.data = data;
    }
}());
