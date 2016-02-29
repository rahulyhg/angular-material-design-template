describe('sampleProvider', function() {
    'use strict';

    // Provider instance
    var state, dynamicState;

    // Instanciates the module
    beforeEach(function() {
        module('ui.router');
        module('dynamicState.provider');
    });

    // Here we don't do any configuration to our provider
    describe('Default Configuration', function() {

        beforeEach(function() {
            inject(function($state) {
                state = $state;
            });
            inject(function($dynamicState) {
                dynamicState = $dynamicState;
            });
        });

        it('Should get the default value', function() {
            dynamicState.addState('test', 'Test', 0, 'test/path', null);
            expect(state.get('test')).to.deep.equal({url: "/Test", templateUrl: "test/path", index: 0, controller: null, name: "test"});
            dynamicState.addState('test2', 'Test2', 1, 'test2/path', 'testCtrl');
            expect(state.get('test2')).to.deep.equal({url: "/Test2", templateUrl: "test2/path", index: 1, controller: 'testCtrl', name: "test2"});
        });


    });
});
