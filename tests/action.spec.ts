import{test,expect} from "@playwright/test"
import { DemoQAButtons } from "./pages/demoQAButtons"
import { DemoQATextbox } from "./pages/demoQATextbox"   
import { Registration } from "./pages/resitrationPage"
import { DemoQA } from "./pages/demoQA"
import { DemoQAUploadDocument } from "./pages/demoQAUploadDocument"
import { DemoQADroppable } from "./pages/demoQADroppable"
import { DemoQAFrame } from "./pages/demoQAFrame"
import { shadowRootTest } from "./pages/shadowroottest"

test("click action",async({page})=>{
    const demoQAButtons = new DemoQAButtons(page)
    await demoQAButtons.url('https://demoqa.com/buttons')
    await demoQAButtons.clickaaction()
    await page.pause()
})

test("action textbox",async({page})=>{
    const demoQATextbox=new DemoQATextbox(page)
    const demoQAButtons = new DemoQAButtons(page)
    await demoQAButtons.url('https://demoqa.com/text-box')
    await demoQATextbox.textbox("shraddha shinde","mishraddha@gamil.com","pune 123","pune 456")
    await demoQATextbox.copyaddress()
    await page.pause()
})

test('registraction',async({page})=>{
    const registraction = new Registration(page)
    const demoQAButtons = new DemoQAButtons(page)
    await demoQAButtons.url('https://www.facebook.com/r.php?entry_point=login')
    await registraction.createNewAccountDetails("shraddha","shinde","mishraddha@gmail.com","test123")
    await registraction.setMonth("24","3","1990")
    await page.pause()
})

test("@demo1 demo QA registration",async({page})=>{
    const demoQA=new DemoQA(page)
    const demoQAButtons = new DemoQAButtons(page)
    console.log('BASE_URL:', process.env.baseurl);
    await demoQAButtons.url(process.env.baseurl)
    await demoQA.FillRegistrationForm("shraddha","more","mishraddha@gmail.com","9921088567","Pune","Maths")
    await demoQA.dropdown('Haryana','Panipat')
    await page.pause()
})

test("upload download file",async({page})=>{
    const demoQAUploadDocument=new DemoQAUploadDocument(page)
    const demoQAButtons = new DemoQAButtons(page)
    await demoQAButtons.url('https://demoqa.com/upload-download')
    await demoQAUploadDocument.uploadFile('tests/pages/demoQAUploadDocument.ts')
    await demoQAUploadDocument.downloadFile()
    await page.pause()
})

test("dragDrop",async({page})=>{
    const demoQADroppable=new DemoQADroppable(page)
    const demoQAButtons = new DemoQAButtons(page)
    await demoQAButtons.url('https://demoqa.com/droppable')
    await demoQADroppable.dragdrop()
    await page.pause()
})

test("demo QA Frame",async({page})=>{
    const demoQAFrame=new DemoQAFrame(page)
    const demoQAButtons = new DemoQAButtons(page)
    await demoQAButtons.url('https://demoqa.com/frames')
    await demoQAFrame.clickFrame()
    await page.pause()
})

test('shadow root textbox',async({page})=>{
    const shadowroottest=new shadowRootTest(page)
    const demoQAButtons = new DemoQAButtons(page)
    await demoQAButtons.url('https://books-pwakit.appspot.com/')
    await shadowroottest.ClickTextBox("shraddha")
    await page.pause()
})
