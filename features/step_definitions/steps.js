const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

let driver;

Given('I am on the main page', async function() {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:3000');
});

When('I click on the "privacy" button', async function() {
    const privacyButton = await driver.findElement(By.id('privacy'));
    await driver.executeScript('arguments[0].click()', privacyButton);
});

Then('I should be redirected to the privacy tab', async function() {
  let currentUrl = await driver.getCurrentUrl();
  expect(currentUrl).to.include('/privacy');

  // Close the WebDriver
  await driver.quit();
});
