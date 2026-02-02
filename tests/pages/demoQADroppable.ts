import { Locator, Page } from "@playwright/test";

export class DemoQADroppable
{
    page:Page
    simpledragme:Locator
    simpledrophere:Locator
    tabaccept:Locator
    acceptable:Locator
    notacceptable:Locator
    acceptdrophere:Locator
    tabprevent:Locator
    preventdragme:Locator
    preventouterdrop:Locator
    preventinnerdrop:Locator
    preventouterdrop2:Locator
    preventinnerdrop2:Locator
    tabrevert:Locator
    willrevert:Locator
    notrevert:Locator
    rvertdrophere:Locator
    constructor(page)
    {
       this.page=page
        this.simpledragme=page.locator('[id="draggable"]')
        this.simpledrophere=page.locator('[id="simpleDropContainer"] [id="droppable"]')
        this.tabaccept=page.locator('[id="droppableExample-tab-accept"]')
        this.acceptable=page.locator('[id="acceptable"]')
        this.notacceptable=page.locator('[id="notAcceptable"]')
        this.acceptdrophere=page.locator('[id="acceptDropContainer"] [id="droppable"]')
        this.tabprevent=page.locator('[id="droppableExample-tab-preventPropogation"]')
        this.preventdragme=page.locator('[id="dragBox"]')
        this.preventouterdrop=page.locator('[id="notGreedyDropBox"]')
        this.preventinnerdrop=page.locator('[id="notGreedyInnerDropBox"]')
        this.preventouterdrop2=page.locator('[id="greedyDropBox"]')
        this.preventinnerdrop2=page.locator('[id="greedyDropBoxInner"]')
        this.tabrevert=page.locator('[id="droppableExample-tab-revertable"]')
        this.willrevert=page.locator('[id="revertable"]')
        this.notrevert=page.locator('[id="notRevertable"]')
        this.rvertdrophere=page.locator('[id="droppable"]')
    }

    public async dragdrop()
    {
        await this.simpledragme.dragTo(this.simpledrophere)
    }
}