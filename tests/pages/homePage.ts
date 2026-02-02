import { Locator, Page } from "@playwright/test";

export class HomePage {
    page:Page
    email:Locator
    pasword:Locator
    signup:Locator
    createnewaccount:Locator
    constructor(page)
    {
        this.page=page
        this.email=page.locator('[name="email"]')
        this.pasword=page.locator('[name="pass"]')
        this.signup=page.locator('[name="login"]')
        this.createnewaccount=page.locator('[data-testid="open-registration-form-button"]')
    }
}