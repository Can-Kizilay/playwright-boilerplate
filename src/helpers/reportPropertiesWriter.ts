import { promises } from "fs";
import { browserConfig, testConfig } from "./test-configuration";
var os = require('os');

export class fileWriter{
    static createAllureEnvironmentFile() {

        const file= "os_type = " + os.type() + "\n" +
                    "os_release = " + os.release() + "\n" +
                    "os_platform = " + os.platform() + "\n" +
                    "browser = " + testConfig.browser + "\n" +
                    "headless = " + browserConfig.headless + "\n" +
                    "mobile = " + browserConfig.isMobile + "\n" +
                    "base_url = " + testConfig.baseUrl + "\n"


        promises.writeFile("allure-results/environment.properties", file, {
            flag: "w"
        }).then(() => {
            console.log("Finish Write")
        })
        console.log("Continue Working")
    }
}

export default fileWriter