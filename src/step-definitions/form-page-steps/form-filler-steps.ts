import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { FormPage } from "../../pages/form-page";



When('Fill the form elements', async function () {
  const formPage = await new FormPage(this.page)
  await formPage.title.fill("testtesttesttesttesttesttest")
  await formPage.firstName.fill("testtesttesttesttesttesttest")
  await formPage.middleInitial.fill("testtesttesttesttesttesttest")
  await formPage.lastName.fill("testtesttesttesttesttesttest")
  await formPage.fullName.fill("testtesttesttesttesttesttest")
  await formPage.company.fill("testtesttesttesttesttesttest")
  await formPage.position.fill("testtesttesttesttesttesttest")
  await formPage.address.fill("testtesttesttesttesttesttest")
  await formPage.address2.fill("testtesttesttesttesttesttest")
  await formPage.city.fill("testtesttesttesttesttesttest")
  await formPage.state.fill("testtesttesttesttesttesttest")
});