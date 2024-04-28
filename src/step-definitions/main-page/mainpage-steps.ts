import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { MainPage } from "../../pages/main-page";


Given('Go to the playwright website', async function () {
    const mainPage = new MainPage(this.page);

    await this.step("Visiting the main page", async function () {
      await mainPage.goto()
    });

    await this.step("Wait for the header", async function () {
      await mainPage.headerPlaywrightText.waitFor();
    })

  });

Then('Verify that the hero title is {string}', async function (heroTitleText: string) {
    const mainPage = new MainPage(this.page);
    await expect(mainPage.heroTitle).toHaveText(heroTitleText)
  });

When('Click get started button', async function () {
  const mainPage = new MainPage(this.page)
  await mainPage.getStartedLink.click()
});

