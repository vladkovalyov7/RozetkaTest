const { test, expect } = require("@playwright/test");
const { HomePage } = require('../pages/HomePage.js');
const { SearchPage } = require('../pages/SearchPage.js');
const { SmartphonesTVElectronicsPage } = require('../pages/SmartphonesTVElectronicsPage.js');
const { CartModel } = require('../pages/CartModel.js');
const { ProductPage } = require('../pages/ProductPage.js');

let homePage;
let searchPage;
let smartphonesTVElectronicsPage;
let cartModel;
let productPage;

test.describe("Check main functionality", () => {
    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        searchPage = new SearchPage(page);
        smartphonesTVElectronicsPage = new SmartphonesTVElectronicsPage(page);
        cartModel = new CartModel(page);
        productPage = new ProductPage(page);
        await homePage.navigate();
    });

    test('Add items to the basket', async({ page }) => {
        await expect(page).toHaveURL("https://rozetka.com.ua/ua/");
        await homePage.openSmartphonesTVElectronics();
        await smartphonesTVElectronicsPage.openTVs();
        await searchPage.buyTV();
        await searchPage.returnSmartphonesTvElectronics();
        await smartphonesTVElectronicsPage.openTablets();
        await searchPage.buyTablet();
        await searchPage.openCart();
        await cartModel.checkNameTV();
        await cartModel.checkNameTablet();
        await cartModel.checkSumProductInCart();
        await cartModel.checkDeleteProductInCart();
        await page.screenshot({path: 'screenshotAddedProduct.png'});
    });

    test('Verify if the price filter working correctly for the following marketplaces', async({ page }) => {
        await expect(page).toHaveURL("https://rozetka.com.ua/ua/");
        await homePage.openSmartphonesTVElectronics();
        await smartphonesTVElectronicsPage.openTVs();
        await searchPage.chooseTypeOfTVLG();
        await searchPage.chooseScreen32();
        await searchPage.chooseSortedFromCheapToExpensive();
        await searchPage.checkCheapElementOfTV();
        await searchPage.checkExpensiveElementOfTV();
        await page.screenshot({path: 'screenshotSort.png'});
    });

    test('Search the item', async({ page }) => {
        await expect(page).toHaveURL("https://rozetka.com.ua/ua/");
        await homePage.searchByProduct("Гиря чугунная Tiguar 16 кг (TI-KB0016RAW)");
        await homePage.clickSearchByProduct();
        await productPage.checkSearch();
        await page.screenshot({path: 'screenshotSearchProduct.png'});
    });

    test('Test is failed', async({ page }) => {
        await expect(page).toHaveURL("https://rozetka.com.u");
        await page.screenshot({path: 'screenshotFailed.png'});
    });
});