const puppeteer = require("puppeteer");
const {expect} = require('chai');
const {Given, When, Then, Before, setDefaultTimeout, After} = require("@cucumber/cucumber");
const {submitTextByEnter, getTextContent} = require("../../lib/commands");

setDefaultTimeout(60000);

Before(async function() {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    args: ['--window-size=1920,1080']
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080
  });
  this.browser = browser;
  this.page = page;
});

After(async function() {
  if (this.browser) {
    this.browser.close();
  }
});

Given(/^user is on "([^"]*)" page$/, async function(url) {
  return await this.page.goto(url);
});
When(/^user typing "([^"]*)" into search$/, async function(input) {
  return await submitTextByEnter(this.page, 'input.header-search-input', input);
});
Then(/^user sees first link as "([^"]*)"$/, async function(expected) {
  const actual = await getTextContent(this.page, '.repo-list-item a');
  expect(actual).contains(expected)
});
