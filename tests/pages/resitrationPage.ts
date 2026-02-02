import { Locator, Page } from "@playwright/test";

export class Registration
{
    page:Page
    month:Locator
    firstname:Locator
    surname:Locator
    emailid:Locator
    password:Locator
    date:Locator
    year:Locator
    gender:Locator
    constructor(page)
    {
        this.page=page
        this.date=page.locator('[id="day"]')
        this.month=page.locator('[id="month"]')    
        this.year=page.locator('[id="year"]')    
        this.firstname=page.locator('[name="firstname"]')
        this.surname=page.locator('[name="lastname"]')
        this.emailid=page.locator('[aria-label="Mobile number or email address"]')
        this.password=page.locator('[aria-label="New password"]')
        this.gender=page.locator('[type="radio"][id="sex"][value="1"]')
    }

    public async createNewAccountDetails(firstname,surname,emailid,password)
    {
        await this.firstname.fill(firstname)
        await this.surname.fill(surname)
        await this.emailid.fill(emailid)
        await this.password.fill(password)
        await this.gender.check()
    }
    public async setMonth(date,month,year)
    {
        await this.date.selectOption(date)
        await this.month.selectOption(month)
        await this.year.selectOption(year)
    }
}