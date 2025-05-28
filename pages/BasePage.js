import { expect } from '@playwright/test';
import { BrowserUtility } from '../utilities/BrowserUtility.js';

export class BasePage  {

  /**
   * @param {import('playwright').Page} page
   */
  constructor(page) {
    this.page = page;

    this.designButton= page.locator("//button[@aria-label='More DESIGN pages']"

    );
    this.designLink = page.locator("//li[@id='comp-ktsqirgt0']"

    );
    this.pcbaLink = page.locator("//li[@id='comp-ktsqirgt0']//a[@href='https://www.dannie.cc/pcba-design']");

    this.manufakturingButton=page.locator("//button[@aria-label='More MANUFACTURING pages']"

    );
    
    this.aboutModule =page.locator("//button[@aria-label='More ABOUT pages']"

      
    );

    this.pcbaLinkNew = page.locator("//a[@data-testid='linkElement' and text()='PCBA Design']"

      
    );

    this.ContactUsButton = page.locator("//span[text()='CONTACT US']"

    );
  }


  
  async login(){
    const code = Buffer.from(`${process.env.SEP_USERNAME}:${process.env.SEP_PASSWORD}`).toString("base64");
    await this.page.setExtraHTTPHeaders({Authorization: `Basic ${code}`,});
    await this.page.goto(process.env.SEP_URL);
    BrowserUtility.verify_title(this.page, 'Checkout | Cydeo');
    await this.page.waitForTimeout(700);
  }

  


  // Helper function for navigation
 async navigateToMainPage() {
   // Constants
   const BASE_URL = "https://www.dannie.cc/";
   const EXPECTED_TITLE =
     "DANNIE.CC Electronics Design and Manufacturing Services";
   await this.page.goto(BASE_URL);
   await this.page.waitForTimeout(3000);

   // Verify we're on the correct page
   const currentUrl = this.page.url();
   const currentTitle = await this.page.title();
   expect(currentUrl).toBe(BASE_URL);
   expect(currentTitle).toBe(EXPECTED_TITLE);
 }

}