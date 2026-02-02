
import { Locator,Page } from "@playwright/test";

export class DemoQAFrame
{
    page:Page
    sampleframe:Locator
    constructor(page)
    {
        this.page=page
        this.sampleframe= page.frameLocator('[id="frame1"]').locator('[id="sampleHeading"]')
    }

    public async clickFrame()
    {
        await this.sampleframe.click()
    }
}