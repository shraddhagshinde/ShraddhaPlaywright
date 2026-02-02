import { Locator, Page } from "@playwright/test";

export class DemoQAUploadDocument
{
    page:Page
    downloadbtn:Locator
    uploadfilebtn:Locator
    constructor(page)
    {
        this.page=page
        this.downloadbtn=page.locator('[id="downloadButton"]')
        this.uploadfilebtn=page.locator('[id="uploadFile"]')
    }

    public async uploadFile(path)
    {
        await this.uploadfilebtn.setInputFiles(path)
    }

    public async downloadFile()
    {
        const[download]=(await Promise.all([this.page.waitForEvent('download'),this.downloadbtn.click()]))
        await download.saveAs('download/test.jpeg')
    }
}