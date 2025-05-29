import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  dannieContactPage,
  embeddedSoftwarePage,
  mechanicalDesignPage,
  page,
  pcbaDesignPage,
} from "../../globalPagesSetup.js";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";
import { BasePage } from "../../pages/BasePage.js";

Given("user is on the main page", async function () {

  await dannieContactPage.navigateToMainPage();

  
});


         Then('user should see the Design module on the main page', async function () {
           await expect(dannieContactPage.designButton).toBeVisible();
           
         });

   

         Then('user should see the Manufacturing module on the main page', async function () {
            await expect(dannieContactPage.manufakturingButton).toBeVisible();
         });

  

         Then('user should see the About module on the main page', async function () {
           
          await expect(dannieContactPage.aboutModule).toBeVisible();
         });


//Scenario Desing Module
 
       
         When('user hovers over the Design module', async function () {
           
          const designModule = page.getByText("DESIGN").first();
           await expect(designModule).toBeVisible();
           await designModule.hover();
           await page.waitForTimeout(3000); 


         });


         
         Then(
           'user should see "PCBA" subpage under Design module',async function () {
            
            await (page.getByText("DESIGN").first()).hover();
            await page.waitForTimeout(3000);
              await expect(page.getByRole("link", { name: "PCBA Design", exact: true }).first()).toBeVisible();

              
      
            
         });

   

         Then(
           'user should see "Mechanical Design" subpage under Design module',
           async function () {
            
             await page.getByText("DESIGN").first().hover();
              await page.waitForTimeout(3000);
              page.wai
             await expect(
               page
                 .getByRole("link", { name: "Mechanical Design", exact: true })
                 .first()
             ).toBeVisible();

             
           }
         );

   

         Then(
           'user should see "Embedded Software" subpage under Design module',
           async function () {
            
             await page.getByText("DESIGN").first().hover();
              await page.waitForTimeout(3000);
             await expect(
               page
                 .getByRole("link", { name: "Embedded Software", exact: true })
                 .first()
             ).toBeVisible();
           }
         );


         

         When(
           'user clicks on {string} under Design module',

           async function (subpageName) {
             // First ensure we hover over Design module to show dropdown
             await page.waitForTimeout(3000);
             await page.getByText("DESIGN").first().hover();
             await page.waitForTimeout(3000);

             // Then click on the specific subpage
             const subpageLink = page
               .getByRole("link", { name: subpageName, exact: true })
               .first();
             await expect(subpageLink).toBeVisible();
             await subpageLink.click();
           }
         );

   

         Then(
           "user should be redirected to {string} page",async function (expected_url) {
             const pageUrl = page.url();
             expect(pageUrl).toStrictEqual(expected_url);
           }
         );