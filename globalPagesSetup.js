import { LeftMainPage } from "./pages/LeftMainPage.js";
import { PaymentPlanPage } from "./pages/PaymentPlanPage.js";
import { StartApplicationPage } from "./pages/StartApplicationPage.js";
import { ReviewPaymentPage } from "./pages/ReviewPaymentPage.js";
import {DannieContactPage} from "./pages/DannieContactPage.js";
import { PcbaDesignPage } from "./pages/PcbaDesignPage.js";

import { type } from "os";
import { MechanicalDesignPage } from "./pages/MechanicalDesignPage.js";
import { EmbeddedSoftwarePage } from "./pages/EmbeddedSoftwarePage.js";

// Import OTHER PAGES CLASSES HERE...



/**
 * @type {import('./pages/LeftMainPage.js').LeftMainPage}
 */
export let leftMainPage;

/**
 * @type {import('./pages/PaymentPlanPage.js').PaymentPlanPage}
 */
export let paymentPlanPage;

/**
 * @type {import('./pages/StartApplicationPage.js').StartApplicationPage}
 */
export let startApplicationPage;

/**
 * @type {import('./pages/ReviewPaymentPage.js').ReviewPaymentPage}
 */
export let reviewPaymentPage;
/** 
* @type {import('./pages/DannieContactPage.js').DannieContactPage}
*/export let dannieContactPage;

/** 
* @type {import('./pages/PcbaDesignPage.js').PcbaDesignPage}
*/export let pcbaDesignPage;

/** 
* @type {import('./pages/MechanicalDesignPage.js').MechanicalDesignPage}
*/export let mechanicalDesignPage;

/** 
* @type {import('./pages/EmbeddedSoftwarePage.js').EmbeddedSoftwarePage}
*/export let embeddedSoftwarePage;


/**
 * @type {import('playwright').Page}
 */
export let page;
// ADD OTHER PAGE CLASS REFERENCES HERE...






/**
 * Initializes the global page elements and instances for the automation framework.
 * 
 * @param {import('playwright').Page} argPage - The Playwright Page instance to be used for interacting with the web pages.
 * @returns {void} This function does not return any value.
 */
export const initElements = (argPage) => {
    page = argPage;
    leftMainPage = new LeftMainPage(page);
    paymentPlanPage = new PaymentPlanPage(page);
    startApplicationPage = new StartApplicationPage(page);
    reviewPaymentPage = new ReviewPaymentPage(page);
    dannieContactPage = new DannieContactPage(page);
    pcbaDesignPage = new PcbaDesignPage(page);
    mechanicalDesignPage = new MechanicalDesignPage(page);
    embeddedSoftwarePage = new EmbeddedSoftwarePage(page);

    // INITIALIZE PAGE INSTANCES HERE...



};
