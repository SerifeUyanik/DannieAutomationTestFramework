import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { dannieContactPage,page } from "../../globalPagesSetup.js";
import { BrowserUtility } from "../../utilities/BrowserUtility.js";

 


       
         Given('user is on the contact page', async function () {

         

            await page.goto("https://www.dannie.cc/contacts");
            await page.waitForTimeout(3000);

            let currentTitle = await page.title();
            const expectedTitle ="Contacts | Dannie.cc";
            console.log(`The title of the page is :${currentTitle}`);

            await BrowserUtility.verify_title(page,"Contacts | Dannie.cc"); 
            
         

         });
       
          Given('user able to see feedback form text on the contact page', async function () {
           
            await page.goto("https://www.dannie.cc/contacts");
            await page.waitForTimeout(3000);

            await dannieContactPage.feedbackText.isVisible();
         

           


         });

          Given('user able to fill the form with valid credentials', async function () {    

            await page.goto("https://www.dannie.cc/contacts");
            await page.waitForTimeout(3000);

            await BrowserUtility.enter_input(dannieContactPage.emailBox,'beyza123@gmail.com');
           await BrowserUtility.enter_input(dannieContactPage.nameBox,'Serife Beyza');
           await BrowserUtility.enter_input(dannieContactPage.phoneBox,'+901234567789');
           await BrowserUtility.enter_input(dannieContactPage.commentTextArea,'I really appreciate for your time and energy!!!');
           


         });

   

         Then('user able to submit the form successfully', async function () {

             await page.goto("https://www.dannie.cc/contacts");
            await page.waitForTimeout(3000);

            await BrowserUtility.enter_input(dannieContactPage.emailBox,'beyza123@gmail.com');
           await BrowserUtility.enter_input(dannieContactPage.nameBox,'Serife Beyza');
           await BrowserUtility.enter_input(dannieContactPage.phoneBox,'+901234567789');
           await BrowserUtility.enter_input(dannieContactPage.commentTextArea,'Automation Testing with Playwright');
           

           await dannieContactPage.sendButton.isVisible();
           await dannieContactPage.sendButton.isEnabled();
           await dannieContactPage.sendButton.click();


         });
    

         