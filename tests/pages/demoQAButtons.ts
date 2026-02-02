import { expect, Locator, Page } from "@playwright/test";

export class DemoQAButtons
{
    page:Page
    doubleclickme:Locator
    rightclickme:Locator
    clickme:Locator
    constructor(page)
    {
        this.page=page
        this.doubleclickme=page.locator('[id="doubleClickBtn"]')
        this.rightclickme=page.locator('[id="rightClickBtn"]')
        this.clickme=page.getByRole('button', { name: 'Click Me', exact: true })
    }

    public async clickaaction() 
    {
        await expect(this.clickme).toHaveCSS('background-color','rgb(0, 123, 255)')
        await this.clickme.click()
        await this.rightclickme.click({button:"right"})
        await this.doubleclickme.dblclick()
    }
     public async url(url)
     {
        await this.page.goto(url)
        await expect(this.page).toHaveURL(url)
        await expect(this.page).toHaveTitle("DEMOQA")
     }
}