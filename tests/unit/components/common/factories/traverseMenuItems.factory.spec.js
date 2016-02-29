/*global describe, beforeEach, module, inject, it, expect */
/*jshint -W030 */
(function () {
    'use strict';
    describe('menuSlide', function () {
        var scope, TraverseMenuItems;

        beforeEach(function () {
            module('common.factories');
            inject(function (_$rootScope_, _TraverseMenuItems_) {
                scope = _$rootScope_;
                TraverseMenuItems = _TraverseMenuItems_;
            });
        });

        it('both inputs undefined should return false', function () {
            var valueToTest;
            TraverseMenuItems.searchByName().then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.false;
        });
        it('menu items undefined should return false', function () {
            var valueToTest;
            TraverseMenuItems.searchByName('abc').then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.false;
        });
        it('input null should return empty array', function () {
            var valueToTest, menuItems;
            menuItems = [
                {
                    id: 1,
                    name: 'Test 1'
                },
                {
                    id: 2,
                    name: 'Test 2'
                },
                {
                    id: 3,
                    name: 'Test 3'
                }
            ];
            TraverseMenuItems.searchByName(null, menuItems).then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.deep.equal([]);
        });
        it('input test should return the full array', function () {
            var valueToTest, menuItems;
            menuItems = [
                {
                    id: 1,
                    name: 'Test 1'
                },
                {
                    id: 2,
                    name: 'Test 2'
                },
                {
                    id: 3,
                    name: 'Test 3'
                }
            ];
            TraverseMenuItems.searchByName('test', menuItems).then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.deep.equal(menuItems);
        });
        it('input xyz should return empty array', function () {
            var valueToTest, menuItems;
            menuItems = [
                {
                    id: 1,
                    name: 'Test 1'
                },
                {
                    id: 2,
                    name: 'Test 2'
                },
                {
                    id: 3,
                    name: 'Test 3'
                }
            ];
            TraverseMenuItems.searchByName('xyz', menuItems).then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.deep.equal([]);
        });
        it('input test 2 should return array of length one with equal to menuItems[1]', function () {
            var valueToTest, menuItems, returnedMenuItems;
            menuItems = [
                {
                    id: 1,
                    name: 'Test 1'
                },
                {
                    id: 2,
                    name: 'Test 2'
                },
                {
                    id: 3,
                    name: 'Test 3'
                }
            ];
            returnedMenuItems = [
                {
                    id: 2,
                    name: 'Test 2'
                }
            ];
            TraverseMenuItems.searchByName('test 2', menuItems).then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.deep.equal(returnedMenuItems);
        });
        it('input test with toggle returns only accessible pages ', function () {
            var valueToTest, menuItems, returnedMenuItems;
            menuItems = [
                {
                    id: 1,
                    name: 'Test 1',
                    type: 'link'
                },
                {
                    id: 2,
                    name: 'Test 2',
                    type: 'toggle',
                    pages: [
                        {
                            id: 's1',
                            name: 'Sub Test 1',
                            type: 'link'
                        },
                        {
                            id: 's2',
                            name: 'Sub Test 2',
                            type: 'link'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Test 3',
                    type: 'link'
                }
            ];
            returnedMenuItems = [
                {
                    id: 1,
                    name: 'Test 1',
                    type: 'link'
                },
                {
                    id: 's1',
                    name: 'Sub Test 1',
                    type: 'link'
                },
                {
                    id: 's2',
                    name: 'Sub Test 2',
                    type: 'link'
                },
                {
                    id: 3,
                    name: 'Test 3',
                    type: 'link'
                }
            ];
            TraverseMenuItems.searchByName('test', menuItems).then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.deep.equal(returnedMenuItems);
        });
        it('input null with toggle returns empty array ', function () {
            var valueToTest, menuItems, returnedMenuItems;
            menuItems = [
                {
                    id: 1,
                    name: 'Test 1',
                    type: 'link'
                },
                {
                    id: 2,
                    name: 'Test 2',
                    type: 'toggle',
                    pages: [
                        {
                            id: 's1',
                            name: 'Sub Test 1',
                            type: 'link'
                        },
                        {
                            id: 's2',
                            name: 'Sub Test 2',
                            type: 'link'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Test 3',
                    type: 'link'
                }
            ];
            returnedMenuItems = [
                {
                    id: 1,
                    name: 'Test 1',
                    type: 'link'
                },
                {
                    id: 's1',
                    name: 'Sub Test 1',
                    type: 'link'
                },
                {
                    id: 's2',
                    name: 'Sub Test 2',
                    type: 'link'
                },
                {
                    id: 3,
                    name: 'Test 3',
                    type: 'link'
                }
            ];
            TraverseMenuItems.searchByName(null, menuItems).then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.deep.equal([]);
        });
        it('input test with nested toggles returns only accessible pages ', function () {
            var valueToTest, menuItems, returnedMenuItems;
            menuItems = [
                {
                    id: 1,
                    name: 'Test 1',
                    type: 'link'
                },
                {
                    id: 2,
                    name: 'Test 2',
                    type: 'toggle',
                    pages: [
                        {
                            id: 's1',
                            name: 'Sub Test 1',
                            type: 'link'
                        },
                        {
                            id: 's2',
                            name: 'Sub Test 2',
                            type: 'toggle',
                            pages: [
                                {
                                    id: 'ss1',
                                    name: 'Sub Sub Test 1',
                                    type: 'link'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Test 3',
                    type: 'link'
                }
            ];
            returnedMenuItems = [
                {
                    id: 1,
                    name: 'Test 1',
                    type: 'link'
                },
                {
                    id: 's1',
                    name: 'Sub Test 1',
                    type: 'link'
                },
                {
                    id: 'ss1',
                    name: 'Sub Sub Test 1',
                    type: 'link'
                },
                {
                    id: 3,
                    name: 'Test 3',
                    type: 'link'
                }
            ];
            TraverseMenuItems.searchByName('test', menuItems).then(function (returnedValue) {
                valueToTest = returnedValue;
            });
            scope.$apply();
            expect(valueToTest).to.be.deep.equal(returnedMenuItems);
        });
    });
}());
