import { BasePage } from "./BasePage.js";

export class MechanicalDesignPage extends BasePage {

    /**
   * @param {import('playwright').Page} page
   */

    constructor(page) {
     super(page);

     this.mechanicalDesignHeader = page.locator("(//span[text()='Mechanical design'])[1]"

     );

     this.mechanicalDesignArticle = page.locator("(//span[text()='Industrial and Mechanical Design'])"

        
     );

    }
}