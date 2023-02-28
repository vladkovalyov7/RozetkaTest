
const {  expect } = require("@playwright/test");
exports.CartModel = class CartModel{
    constructor(page){
        this.page = page;
        this.checkTVButtonLocator = page.locator("a.cart-product__title").nth(2);
        this.checkTabletButtonLocator = page.locator('a.cart-product__title').nth(1);
        this.checkSumProductsInCartButtonLocator = page.locator("div.cart-receipt__sum-price");
        this.setDeleteProductButtonLocator = page.locator("[id='cartProductActions0']");
        this.deleteProductButtonLocator = page.locator("#cartProductActions0 > ul > li:nth-child(1) > rz-trash-icon > button");
    }
    async checkNameTV(){
        await expect (this.checkTVButtonLocator).toHaveText("Планшет Lenovo Tab M10 HD (2nd Gen) Wi-Fi 3/32GB Iron Grey (ZA6W0250UA)");
    }

    async checkNameTablet(){
        await expect(this.checkTabletButtonLocator).toHaveText("Телевізор Samsung UE43T5300AUXUA");
    }

    async checkSumProductInCart(){
        await expect(this.checkSumProductsInCartButtonLocator).toContainText("18 998₴");
    }

    async checkDeleteProductInCart(){
        await this.setDeleteProductButtonLocator.click();
        await expect(this.deleteProductButtonLocator).toBeVisible();
    }
}