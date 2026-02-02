import { expect, Locator, Page } from "@playwright/test";

export class DemoQA
{
    page:Page
    firstname:Locator
    lastname:Locator
    email:Locator
    gender:Locator
    mobile:Locator
    birthday:Locator
    subjects:Locator
    hobbies:Locator
    selectfile:Locator
    address:Locator
    selectstate:Locator
    selectcity:Locator
    submit:Locator
    hobbies:Locator
    lblName:Locator
    constructor(page)
    {
        this.page=page
        this.firstname=page.locator('[id="firstName"]')
        this.lastname=page.locator('[id="lastName"]')
        this.email=page.locator('[id="userEmail"]')
        this.gender=page.getByText('Female')
        this.mobile=page.locator('[id="userNumber"]')
        this.birthday=page.locator('[id="dateOfBirthInput"]')
        this.subjects=page.locator('[id="subjectsContainer"] [class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
        this.hobbies=page.locator('[id="hobbies-checkbox-3"]')
        this.selectfile=page.locator('[id="uploadPicture"]')
        this.address=page.locator('[id="currentAddress"]')
        this.selectstate=page.locator('[id="state"]')
        this.selectcity=page.locator('[id="city"]')
        this.submit=page.locator('[id="submit"]')
        this.hobbies=page.getByText('Sports')
        this.lblName=page.locator('[id="userName-label"]')

    }

    public async FillRegistrationForm(firstName,lastName,email,mobile,address,hobbies)
    {
        await expect(this.lblName).toContainText('Name')
        await this.firstname.fill(firstName)
        await expect(this.firstname).toHaveValue(firstName)
        await this.lastname.fill(lastName)
        await this.email.fill(email)
        await this.mobile.fill(mobile)
        /*await this.subjects.click()
        await this.subjects.fill(subjects)
        await this.subjects.press('ArrowDown');
        await this.subjects.press('Enter');*/
        await this.hobbies.click()
        await this.address.fill(address)   
        await this.gender.click()     
        await expect(this.address).toContainClass("form-control")
        await expect(this.address).toHaveClass(/form/)
    }

    public async dropdown(stage,city)
    {
        await this.selectstate.click()
        await this.page.getByText(stage, { exact: true }).click();      
        await this.selectcity.click()
        await this.page.getByText(city, { exact: true }).click();    
    }

}