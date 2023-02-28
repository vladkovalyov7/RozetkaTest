
const {  expect } = require("@playwright/test");
exports.SearchPage = class SearchPage{
    page;
    constructor(page){
        this.page = page;
        this.ProductCardLocator = page.locator("//div[@class='goods-tile__inner']");
        this.buyProductButtonLocator = page.locator("#icon-basket");
        this.returnSmartphonesTvElectronicsButtonLocator = page.locator("body > app-root > div > div > rz-category > div > main > div:nth-child(1) > rz-breadcrumbs > ul > li.breadcrumbs__item.breadcrumbs__item--last.ng-star-inserted > a > span");
        this.cartButtonLocator = page.locator('body > app-root > div > div > rz-header > rz-main-header > header > div > div > ul > li.header-actions__item.header-actions__item--cart > rz-cart > button > svg > use');
        this.typeOfTVLGLocator = page.locator('a.checkbox-filter__link');
        this.sizeScreen32Locator = page.locator('a.tile-filter__link');
        this.cheapElementOfTVLocator = page.locator("span.goods-tile__price-value");
        this.expensiveElementOfTVLocator = page.locator("span.goods-tile__price-value");
    }

    async buyTV(){
        await this.ProductCardLocator.first().hover();
        await this.buyProductButtonLocator.first().click();
    }

    async buyTablet(){
        await this.ProductCardLocator.first().hover();
        await this.buyProductButtonLocator.first().click();
    }

    async openCart(){
        await this.cartButtonLocator.click();
    }

    async returnSmartphonesTvElectronics(){
        await this.returnSmartphonesTvElectronicsButtonLocator.click();
    }

    async chooseTypeOfTVLG(){
        await this.typeOfTVLGLocator.nth(7).click();
    }
    async chooseScreen32(){
        await this.sizeScreen32Locator.first().click();
    }
    async chooseSortedFromCheapToExpensive(){
        const selector = await this.page.$("_ngcontent-rz-client-c215");
        await selector?.selectOption("2").click();
    }
    async checkCheapElementOfTV(){
        await expect(this.cheapElementOfTVLocator.nth(1)).toContainText("9 999₴");
    }

    async checkExpensiveElementOfTV(){
        await expect(this.expensiveElementOfTVLocator.nth(3)).toContainText("12 499₴");
    }














}

