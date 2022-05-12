module.exports = {
  getTextContent: async (page, selector) => {
    await page.waitForSelector(selector);
    return await page.$eval(selector, (element) => {
      return element.textContent;
    });
  },
  getHrefAttr: async (page, selector) => {
    await page.waitForSelector(selector);
    return await page.$eval(selector, (element) => {
      return element.href;
    });
  },
  submitTextByEnter: async (page, selector, text) => {
    const input = await page.$(selector);
    await input.focus();
    await input.type(text);
    await page.keyboard.press('Enter');
  },
  submitTextByClick: async (page, inputSelector, text, buttonSelector) => {
    const input = await page.$(inputSelector);
    await input.focus();
    await input.type(text);
    const button = await page.$(buttonSelector);
    await button.click();
  }
}
