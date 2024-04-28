import { Locator, Page } from "@playwright/test";



export class FormPage {

    readonly page: Page;
    readonly title: Locator
    readonly firstName: Locator
    readonly middleInitial: Locator
    readonly lastName: Locator
    readonly fullName: Locator
    readonly company: Locator
    readonly position: Locator
    readonly address: Locator
    readonly address2: Locator
    readonly city: Locator
    readonly state: Locator



    constructor(page:Page){
        this.page = page
        this.title = this.page.locator('[name="01___title"]')
        this.firstName = this.page.locator('[name="02frstname"]')
        this.middleInitial = this.page.locator('[name="03middle_i"]')
        this.lastName = this.page.locator('[name="04lastname"]')
        this.fullName = this.page.locator('[name="04fullname"]')
        this.company = this.page.locator('[name="05_company"]')
        this.position = this.page.locator('[name="06position"]')
        this.address = this.page.locator('[name="10address1"]')
        this.address2 = this.page.locator('[name="11address2"]')
        this.city = this.page.locator('[name="13adr_city"]')
        this.state = this.page.locator('[name="14adrstate"]')
    }
}