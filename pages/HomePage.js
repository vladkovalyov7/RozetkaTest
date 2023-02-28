

exports.HomePage = class HomePage{
    constructor(page){
        this.page = page;
        this.smartphonesTVElectronicsButtonLocator = page.locator('body > app-root > div > div > rz-main-page > div > aside > rz-main-page-sidebar > div.fat-wrap > rz-sidebar-fat-menu > div > ul > li:nth-child(2) > a');
        this.searchInputLocator = page.locator("[name='search']");
        this.searchButtonLocator = page.locator("//button[@class='button button_color_green button_size_medium search-form__submit ng-star-inserted']");
    }

    async navigate(){
        await this.page.goto("https://rozetka.com.ua/");
    }

    async openSmartphonesTVElectronics(){
        await this.smartphonesTVElectronicsButtonLocator.click();
    }

    async searchByProduct(value){
        await this.searchInputLocator.fill(value);
    }
    async clickSearchByProduct(){
        await this.searchButtonLocator.click();
    }





}

