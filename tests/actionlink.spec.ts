import{test,expect, chromium} from "@playwright/test"
import { UiTap } from "./pages/uiTap"
import { HomeLoad } from "./pages/homeLoan"

test("link action",async({page})=>{
    const uiTap = new UiTap(page)
    await uiTap.url("http://uitestingplayground.com/mouseover")
    await uiTap.clicklink()
    await uiTap.mouseOver()
    await page.pause()
})

test("@Home Home Load",async({page})=>{
    const homeLoan=new HomeLoad(page)
    const uiTap = new UiTap(page)
    await uiTap.url("https://www.anz.com.au/personal/home-loans/calculators-tools/borrowing-power-calculator/")
    await homeLoan.LoanDetails("100,000","3","10,000","2000","0","100","0","10000")
    await homeLoan.handlebuttons("Residential investment")
    await homeLoan.handlebuttons("Joint")
    await page.pause()
    const broswer = await chromium.launch()
    const context = await broswer.newContext()
    const page3 = await context.newPage()
})


