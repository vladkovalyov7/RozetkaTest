
const {expect} = require("@playwright/test");
exports.ProductPage = class ProductPage {
    constructor(page) {
        this.page = page;
        this.productTitleLocator = page.locator("//h1[@class='product__title']");
    }

    async checkSearch(){
        await expect(this.productTitleLocator).toContainText(" Гиря чавунна Tiguar 16 кг (TI-KB0016RAW)");
    }
}