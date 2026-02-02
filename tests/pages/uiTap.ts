import { Locator, Page } from "@playwright/test";

export class UiTap
{
    page:Page
    clickmebtn:Locator
    linkbutton:Locator
    constructor(page)
    {
        this.page=page
        //this.clickmebtn=page.locator('[title="Click me"]')
        this.clickmebtn=page.getByText('Click me')
        //this.linkbutton=page.locator('[title="Link Button"]')
        this.linkbutton=page.getByText('Link Button')
    }

    public async clicklink()
    {
        await this.clickmebtn.click()
        await this.linkbutton.click()
    }
    public async url(url)
     {
        await this.page.goto(url)
        await this.page.waitForLoadState('load')
        await this.page.waitForURL(url)
     }

     public async mouseOver()
     {
        await this.clickmebtn.hover()
        await this.page.pause()
     }

}