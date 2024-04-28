import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { MainPage } from "../../pages/main-page";


Given('Go to url {string}', async function (url:string) {
    await this.page.goto(url)
  });




