const {getTextContent, submitTextByEnter} = require("./lib/commands");

const url = 'https://github.com/';

describe.skip('Test suit', () => {
  let page;

  beforeEach(async () => {
    page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080
    });
    await page.goto(url);
  });

  afterEach(async () => {
    page.close();
  });

  test('Header test', async () => {
    const title = await page.title();
    console.log(title);
    expect(title).toBe('GitHub: Where the world builds software · GitHub');
  });

  test('Header test', async () => {
    const headerText = await getTextContent(page, 'h1');
    console.log(headerText);
    expect(headerText).toBe(' Where the world builds software ');
  });

  test.each([
    ['puppeteer', 'Search · puppeteer · GitHub'],
    ['korytoff', 'Search · korytoff · GitHub'],
  ])('Type "%s" in search field', async (searchString, expectedTitle) => {
    await submitTextByEnter(page, 'input.header-search-input', searchString);
    await page.waitForSelector('.codesearch-results h3');
    const title = await page.title();
    expect(title).toBe(expectedTitle);
  });

});

// (async () => {
//
//
//   // await page.emulate(puppeteer.devices['iPhone 6']);
//   // await page.setViewport({
//   //   width: 1920,
//   //   height: 1080
//   // });
//
//
//   const input = await page.$('input.header-search-input');
//   await input.type('korytoff');
//   await page.keyboard.press('Enter');
//
//   // const link = await page.$('a');
//   // await link.click();
//
//   {
//     await page.waitForSelector('.codesearch-results h3');
//     const title = await page.title();
//     console.log(title);
//   }
//
//   await browser.close();
// })();
