import { Locator,Page } from "@playwright/test";

export class myntra
{
    page:Page
    product:Locator
    product2:Locator
    productpincode:Locator
    constructor(page)
    {
        this.page=page
        this.product=page.locator('[class="product-productMetaInfo"]').nth(0)
        this.product2=page.locator('[class="product-productMetaInfo"]').nth(1)    
        this.productpincode=page.locator('[name="pincode"]')    
    }

    public async clickproduct1()
    {
        const newpagepromise = this.page.waitForEvent('popup')
        await this.product.click()
        const page1 = await newpagepromise
        return page1
    }

    public async clickproduct2()
    {
        const newpagepromise = this.page.waitForEvent('popup')
        await this.product2.click()
        const page1 = await newpagepromise
        return page1
    }

    public async enterpincode(code)
    {
        await this.productpincode.fill(code)
    }
}


