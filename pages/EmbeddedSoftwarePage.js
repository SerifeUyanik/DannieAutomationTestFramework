import { BasePage } from "./BasePage.js";

export class EmbeddedSoftwarePage extends BasePage {

    /**
   * @param {import('playwright').Page} page
   */

    constructor(page) {
     super(page);

     this.embeddedSwHeader = page.locator("//span[text()='Embedded software']"

     );

     this.embeddedSwArticle = page.locator("//span[text()='Firmware and software f']"
        
     );

    }

}
