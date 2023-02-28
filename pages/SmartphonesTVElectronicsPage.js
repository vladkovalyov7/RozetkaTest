
exports.SmartphonesTVElectronicsPage = class SmartphonesTVElectronicsPage{
    constructor(page){
        this.page = page;
        this.TVsButtonLocator = page.locator('body > app-root > div > div > rz-super-portal > div > main > section > div:nth-child(3) > rz-dynamic-widgets > rz-widget-list:nth-child(3) > section > ul > li:nth-child(2) > rz-list-tile > div > a.tile-cats__heading.tile-cats__heading_type_center.ng-star-inserted');
        this.tabletsButtonLocator = page.locator("body > app-root > div > div > rz-super-portal > div > main > section > div:nth-child(3) > rz-dynamic-widgets > rz-widget-list:nth-child(3) > section > ul > li:nth-child(3) > rz-list-tile > div > a.tile-cats__heading.tile-cats__heading_type_center.ng-star-inserted");
    }


    async openTVs(){
        await this.TVsButtonLocator.click();
    }

    async openTablets(){
        await this.tabletsButtonLocator.click();
    }
}

