import { expect, Locator,Page } from "@playwright/test";

export class HomeLoad
{
    page:Page
    btnSingle:Locator
    noOfDependants:Locator
    annualIncome:Locator
    OtherIncome:Locator
    monthyLivingExpenses:Locator
    currentHomeLoanPayment:Locator
    otherLoanReplayment:Locator
    monthlyCommitments:Locator
    caditcardLimit:Locator
    btnBorrowCalculator:Locator
    btnStartOver:Locator
    buttons:Locator
    constructor(page)
    {
        this.page=page
        this.btnSingle=page.getByText('Single')
        this.buttons=page.locator('[class="btn"]')
        this.noOfDependants=page.locator('[title="Number of dependants"]')
        this.annualIncome=page.locator('[aria-labelledby="q2q1"]')
        this.OtherIncome=page.locator('[aria-labelledby="q2q2"]')
        this.monthyLivingExpenses=page.locator('[aria-labelledby="q3q1"]')
        this.currentHomeLoanPayment=page.locator('[aria-labelledby="q3q2"]')
        this.otherLoanReplayment=page.locator('[aria-labelledby="q3q3"]')
        this.monthlyCommitments=page.locator('[aria-labelledby="q3q4"]')
        this.caditcardLimit=page.locator('[aria-labelledby="q3q5"]')
        this.btnBorrowCalculator=page.locator('[id="btnBorrowCalculater"]')
        this.btnStartOver=page.getByRole('button', { name: 'Start over' })
    }

    public async LoanDetails(annualincome,count,otherincome,livingexpenses,currenthomeloan,otherloanreplayment,monthlycommitment,creditcardlimit)
    {

       await expect(this.btnSingle).toContainText("Single") 
       await this.selectDependents(count)
       await this.annualIncome.fill(annualincome)
       await this.annualIncome.screenshot({path:'screenshot/locator.png'})
       await this.OtherIncome.fill(otherincome)
       await this.monthyLivingExpenses.fill(livingexpenses)
       await this.currentHomeLoanPayment.fill(currenthomeloan)
       await this.otherLoanReplayment.fill(otherloanreplayment)
       await this.monthlyCommitments.fill(monthlycommitment)
       await this.caditcardLimit.fill(creditcardlimit)
       await this.btnBorrowCalculator.click()
       await this.page.screenshot({path:'screenshot/screenshot.png'})
       await this.btnStartOver.scrollIntoViewIfNeeded()
      // await this.page.waitForTimeout(10000)
      await this.btnStartOver.waitFor({state:'visible'})
       await this.btnStartOver.click()
    }

    public async selectDependents(count)
    {
        await this.noOfDependants.selectOption(count)       
    }

    public async handlebuttons(buttonname)
    {
        let count=await this.buttons.count()
        for(let i=0;i<count;i++)
        {
            let text=await this.buttons.nth(i).textContent()
            console.log(text)
            console.log(buttonname)
            if(text === buttonname)
            {
                await this.buttons.nth(i).click()
                console.log("i am hear")
                break
            }
        }
    }
}
