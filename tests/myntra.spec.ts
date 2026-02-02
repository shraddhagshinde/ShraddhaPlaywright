import{test,expect} from "@playwright/test"
import { UiTap } from "./pages/uiTap"
import { myntra } from "./pages/myntra"

test("link action",async({page})=>{
    const uiTap = new UiTap(page)
    const myntra1 = new myntra(page)
    await uiTap.url("https://www.myntra.com/tops")
    const page1= await myntra1.clickproduct1()
    const myntra2 = new myntra(page1)
    await myntra2.enterpincode("411009")
    await page1.waitForTimeout(10000)
    const page2 = await myntra1.clickproduct2()
    const myntra3 = new myntra(page2)
    await myntra3.enterpincode("485697") 
    await page.pause()
})
