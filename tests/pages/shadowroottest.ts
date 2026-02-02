import { Locator,Page } from "@playwright/test";

export class shadowRootTest
{
    page:Page
    searchtxt:Locator
    constructor(page)
    {
        this.page=page
        this.searchtxt=page.locator('book-input-decorator').locator('[id="input"]')
    }

    public async ClickTextBox(searchtxt)
    {
        await this.searchtxt.click()
        await this.searchtxt.fill(searchtxt)
    }
}