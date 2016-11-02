"use strict";
var protractor_1 = require('protractor');
var app_component_1 = require('../support/components/app.component');
var index_page_1 = require('../support/pages/index.page');
describe('QuickStart E2E Tests', function () {
    var appComponent;
    beforeAll(function () {
        appComponent = new app_component_1.AppComponent();
    });
    beforeEach(function () {
        index_page_1.IndexPage.openPage();
    });
    it('should open index page', function () {
        expect(protractor_1.browser.getTitle()).toEqual(index_page_1.IndexPage.title);
    });
    it('should display app.component heading', function () {
        expect(appComponent.h1.getText()).toEqual(appComponent.heading);
    });
});
//# sourceMappingURL=app.spec.js.map