import { Browser, chromium, firefox, webkit } from "@playwright/test";
import { browserConfig, testConfig } from "./test-configuration";

export class Browsers{

    
    async getBrowser() {
        const browserType = testConfig.browser
        const options = {
            headless: browserConfig.headless
        }

        var browser: Browser
        switch (browserType) {
            case 'chromium':
                browser = await chromium.launch(options)
                break;
            case 'firefox':
                browser = await firefox.launch(options)
            break;
            case 'webkit':
                browser = await webkit.launch(options)
                break
            default:
                browser = await chromium.launch(options)
                break;
        }
        return browser
    }

    
}