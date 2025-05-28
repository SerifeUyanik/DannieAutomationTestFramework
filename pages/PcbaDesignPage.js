import { BasePage } from "./BasePage.js";

export class PcbaDesignPage extends BasePage {

    /**
   * @param {import('playwright').Page} page
   */

    constructor(page) {
     super(page);

     this.pcbaDesignHeader = page.locator("(//span[text()='PCBA design'])[1]"

     );

     this.pcbaDesignArticle = page.locator("(//span[text()='A Complete PCBA Design Service'])"

        
     );

    }
}