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

  /*
  await page.goto("https://www.dannie.cc/");
  await page.waitForTimeout(3000);

  let currentTitle = await page.title();

  const expectedTitle =
    "DANNIE.CC Electronics Design and Manufacturing Services";

  expect(currentTitle).toStrictEqual(expectedTitle);

  let currentUrl = page.url();

  const expectedUrl = "https://www.dannie.cc/";

  expect(currentUrl).toStrictEqual(expectedUrl);
  */
});

Given(
  "user able to see the Design,Manufacturing and About module on the main page",
  async function () {
    await page.goto("https://www.dannie.cc/");
    await page.waitForTimeout(3000);

    let currentUrl = page.url();

    const expectedUrl = "https://www.dannie.cc/";

    expect(currentUrl).toStrictEqual(expectedUrl);

    await dannieContactPage.designButton.isVisible();
    await dannieContactPage.manufakturingButton.isVisible();
    await dannieContactPage.aboutModule.isVisible();
  }
);

//Scenario Desing Module

Given("user able to see subpages of Design module", async function () {
  await page.goto("https://www.dannie.cc/");
  await page.waitForTimeout(3000);

  let currentUrl = page.url();

  const expectedUrl = "https://www.dannie.cc/";

  expect(currentUrl).toStrictEqual(expectedUrl);

  await page.waitForTimeout(3000);
  await dannieContactPage.designButton.isVisible();

  await page.getByText("DESIGN").first().hover();

  await page.waitForTimeout(5000);

  await page.getByText("PCBA Design").first().isVisible();

  await page.getByText("Mechanical Design").first().isVisible();

  await page.getByText("Embedded Software").first().isVisible();

  await page.waitForTimeout(3000);
});

Given(
  "user able to see PcbaPage under the Design module and click it",
  async function () {
    await page.goto("https://www.dannie.cc/");
    await page.waitForTimeout(3000);

    let currentUrl = page.url();

    const expectedUrl = "https://www.dannie.cc/";

    expect(currentUrl).toStrictEqual(expectedUrl);

    await page.waitForTimeout(3000);
    await dannieContactPage.designButton.isVisible();

    await page.getByText("DESIGN").first().hover();

    await page.waitForTimeout(5000);

    await page.getByText("PCBA Design").first().isVisible();

    await page.waitForTimeout(3000);

    await page
      .getByRole("link", { name: "PCBA Design", exact: true })
      .first()
      .click();

    await page.waitForTimeout(3000);

    let currentPcbaUrl = page.url();
    const ExpectedPcbaUrl = "https://www.dannie.cc/pcba-design";

    expect(currentPcbaUrl).toStrictEqual(ExpectedPcbaUrl);

    await pcbaDesignPage.pcbaDesignHeader.isVisible();
    await pcbaDesignPage.pcbaDesignHeader.isVisible();

    await dannieContactPage.ContactUsButton.scrollIntoViewIfNeeded();
  }
);

Given(
  "user able to see MechanicalPage under the Design module and click it",
  async function () {
    await page.goto("https://www.dannie.cc/");
    await page.waitForTimeout(3000);

    let currentUrl = page.url();

    const expectedUrl = "https://www.dannie.cc/";

    expect(currentUrl).toStrictEqual(expectedUrl);

    await page.waitForTimeout(3000);
    await dannieContactPage.designButton.isVisible();

    await page.getByText("DESIGN").first().hover();

    await page.waitForTimeout(3000);

    await page.getByText("Mechanical Design").first().isVisible();

    await page.waitForTimeout(3000);

    await page
      .getByRole("link", { name: "Mechanical Design", exact: true })
      .first()
      .click();

    await page.waitForTimeout(3000);

    let currentMechanicalUrl = page.url();
    const ExpectedMechanicalUrl = "https://www.dannie.cc/mechanical-design";

    expect(currentMechanicalUrl).toStrictEqual(ExpectedMechanicalUrl);

    await mechanicalDesignPage.mechanicalDesignHeader.isVisible();
    await mechanicalDesignPage.mechanicalDesignArticle.isVisible();
  }
);

Given(
  "user able to see EmbeddedSoftwarePage under the Design module and click it",
  async function () {
    await page.goto("https://www.dannie.cc/");
    await page.waitForTimeout(3000);

    let currentUrl = page.url();

    const expectedUrl = "https://www.dannie.cc/";

    expect(currentUrl).toStrictEqual(expectedUrl);

    await page.waitForTimeout(3000);
    await dannieContactPage.designButton.isVisible();

    await page.getByText("DESIGN").first().hover();

    await page.waitForTimeout(3000);

    await page.getByText("Embedded Software").first().isVisible();

    await page.waitForTimeout(3000);

    await page
      .getByRole("link", { name: "Embedded Software", exact: true })
      .first()
      .click();

    await page.waitForTimeout(3000);

    let currentMechanicalUrl = page.url();
    const ExpectedEmbeddedSwUrl = "https://www.dannie.cc/embedded-sw";

    expect(currentMechanicalUrl).toStrictEqual(ExpectedEmbeddedSwUrl);

    await embeddedSoftwarePage.embeddedSwHeader.isVisible();
    await embeddedSoftwarePage.embeddedSwArticle.isVisible();
  }
);

Given("user able to see subpages of Manufacturing Module", async function () {
  await page.goto("https://www.dannie.cc/");
  await page.waitForTimeout(3000);

  let currentUrl = page.url();

  const expectedUrl = "https://www.dannie.cc/";

  expect(currentUrl).toStrictEqual(expectedUrl);

  await page.waitForTimeout(3000);
  await dannieContactPage.designButton.isVisible();

  await page.getByText("MANUFACTURING").first().hover();

  await page.waitForTimeout(5000);

  await page.getByText("Components Supply").first().isVisible();

  await page.getByText("PCB Assembly").first().isVisible();

  await page.getByText("Box Build").first().isVisible();

  await page.waitForTimeout(3000);
});

Given(
  "user able to see ComponentsSupplyPage under the Manufacturing module and click it",
  async function () {
    await page.goto("https://www.dannie.cc/");
    await page.waitForTimeout(3000);

    let currentUrl = page.url();

    const expectedUrl = "https://www.dannie.cc/";

    expect(currentUrl).toStrictEqual(expectedUrl);

    await page.waitForTimeout(3000);
    await dannieContactPage.designButton.isVisible();

    await page.getByText("MANUFACTURING").first().hover();

    await page.waitForTimeout(5000);

    await page.getByText("Components Supply").first().isVisible();

    await page.waitForTimeout(3000);

    await page
      .getByRole("link", { name: "Components Supply", exact: true })
      .first()
      .click();

    await page.waitForTimeout(3000);

    let currentComponentSupplyUrl = page.url();
    const ExpectedComponentSupplyUrl = "https://www.dannie.cc/scm";

    expect(currentComponentSupplyUrl).toStrictEqual(ExpectedComponentSupplyUrl);

    /*
            await pcbaDesignPage.pcbaDesignHeader.isVisible();
            await pcbaDesignPage.pcbaDesignHeader.isVisible();

            */
  }
);

Given(
  "user able to see PcbAssemblPage under the Manufacturing module and click it",
  async function () {}
);

Given(
  "user able to see BoxBuildPage under the Manufacturing module and click it",
  async function () {}
);
