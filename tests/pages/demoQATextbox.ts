import { expect, Locator, Page } from "@playwright/test";

export class DemoQATextbox
{
    page:Page
    fullnametxt:Locator
    email:Locator
    currentaddress:Locator
    permanentaddress:Locator
    submitbtn:Locator
    constructor(page)
    {
        this.page=page
        this.fullnametxt=page.locator('[id="userName"]')
        this.email=page.locator('[id="userEmail"]')
        this.currentaddress=page.locator('[id="currentAddress"]')
        this.permanentaddress=page.locator('[id="permanentAddress"]')
        this.submitbtn=page.locator('[id="submit"]')
    }
     public async textbox(fullname,email,currentaddress,permentaddress)
     {
        await expect.soft(this.submitbtn).toBeVisible()
        await this.submitbtn.scrollIntoViewIfNeeded()
        await this.fullnametxt.fill(fullname)
        await this.email.fill(email)
        await this.currentaddress.fill(currentaddress)
        await this.permanentaddress.fill(permentaddress)
        await this.permanentaddress.clear()
     }

     public async copyaddress()
     {
        await this.currentaddress.click()
        await this.page.keyboard.press('Control+A')
        await this.page.keyboard.press('Control+C')
        await this.permanentaddress.click()
        await this.page.keyboard.press('Control+V')
        await this.submitbtn.scrollIntoViewIfNeeded()
     }
}