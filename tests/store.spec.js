describe('Store', function () {
    'use strict';

    var Store;

    beforeEach(module('connect-flux'));

    beforeEach(inject(function (_LuxaFluxStore_) {
        Store = _LuxaFluxStore_;
    }));

    it('should have run token', function () {
        expect(true).toEqual(true);
    });

    // var TeamAssetsStore = ConnectFlux.createStore({
    //     initialize: function() {
    //         this.items = [];
    //     },

    //     handlers: {
    //         'ASSETS_LOAD_SUCCESS': 'loadAssetsSuccess',
    //         'ASSETS_LOAD_FAILED': 'loadAssetsFailed',
    //         'ASSETS_LOAD_FINALLY': 'loadAssetsFailed',
    //         'ASSET_CREATE': 'createAsset'
    //     },

    //     loadAssetsSuccess: function(assets) {
    //         this.items.push.apply(this.items, assets);
    //     },

    //     loadAssetsFailed: function() {
    //         this.items.length = 0;
    //     },

    //     createAsset: function(asset) {
    //         this.items.push(asset);
    //     }
    // });

    // var AssetActions = ConnectFlux.createActions({
    //     serviceActions: {
    //         'ASSETS_LOAD': 'loadAssets'
    //     },

    //     createAsset: function(asset) {
    //         this.dispatch('ASSET_CREATE', asset);
    //     },

    //     loadAssets: function(params) {
    //         return AssetResource.query(params).$promise;
    //     }
    // });

    // AssetActions.loadAssets({team_key: 'sbp'}).then(function() {
    //     console.log('all actions dispatched and handled');
    // });
});