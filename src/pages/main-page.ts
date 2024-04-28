import { expect, type Locator, type Page } from '@playwright/test';
import { testConfig } from '../helpers/test-configuration';

export class MainPage {
    readonly page: Page;
    readonly getStartedLink: Locator;
    readonly heroTitle: Locator
    readonly headerPlaywrightText: Locator


    constructor(page: Page) {
        this.page = page;
        this.getStartedLink = this.page.locator('a', { hasText: 'Get started' }).first();
        this.heroTitle = this.page.locator('.hero__title')
        this.headerPlaywrightText = this.page.locator('nav >> a >> text="Playwright"').first()
    }   

    async gotoBasePage(){
        await this.page.goto(testConfig.baseUrl)
    }
}