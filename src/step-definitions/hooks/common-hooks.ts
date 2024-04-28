import { ICustomWorld } from "./custom-world";
import {
    Browser
} from '@playwright/test'
import { After, Before } from '@cucumber/cucumber'
import { Browsers } from "../../helpers/browsers";
import { browserConfig } from "../../helpers/test-configuration";
import fileWriter from "../../helpers/reportPropertiesWriter";

let browser: Browser


Before(async function(this: ICustomWorld) {
    const options = {
                    viewport: browserConfig.viewport,
                    isMobile: browserConfig.isMobile
                    }
    browser = await new Browsers().getBrowser()
    this.context = await browser.newContext(options)
    this.page = await this.context.newPage()
});

After(async function(this: ICustomWorld) {
    fileWriter.createAllureEnvironmentFile()
    await this.page?.close()
    await this.context?.close()
    await browser.close()
});
