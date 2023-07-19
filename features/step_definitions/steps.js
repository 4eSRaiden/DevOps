const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until, Capabilities } = require('selenium-webdriver');
const { expect } = require('chai');
const firefox = require('selenium-webdriver/firefox');

let driver;

Given('I am on the main page', async function() {
  let firefoxOptions = new firefox.Options();
  firefoxOptions.addArguments("--headless");
  driver = await new Builder().forBrowser('firefox').setFirefoxOptions(firefoxOptions).build();
  await driver.get('http://localhost:3000');
});

When('I click on the "privacy" button', async function() {
    const privacyButton = await driver.findElement(By.id('privacy'));
    await driver.executeScript('arguments[0].click()', privacyButton);
});

Then('I should be redirected to the privacy tab', async function() {
  // Wait until the URL contains '/privacy' before proceeding
  await driver.wait(() => driver.getCurrentUrl().then(url => url.includes('/privacy')), 10000);
  let currentUrl = await driver.getCurrentUrl();
  expect(currentUrl).to.include('/privacy');

  // Close the WebDriver
  await driver.quit();
});
