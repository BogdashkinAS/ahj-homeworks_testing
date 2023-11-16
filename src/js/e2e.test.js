import puppetteer from 'puppeteer';
import validateCard from './validatecard.js';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000'; 

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: process.env.CI, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test("page rendering", async () => {
    await page.goto("http://localhost:9000");

    await page.waitForSelector("body");
  });

  test("active icon American Express and valid number", async () => {
    const validationFormInput = await page.$('.validation-form__input');
    const validationFormBtn = await page.$('.validation-form__btn');

    await validationFormInput.type('371449635398431');
    await validationFormBtn.click();

    await page.waitForSelector('.card_list.active');
  });

  test("active icon Mir and valid number", async () => {
    const validationFormInput = await page.$('.validation-form__input');
    const validationFormBtn = await page.$('.validation-form__btn');

    await validationFormInput.type('2200000000000053');
    await validationFormBtn.click();

    await page.waitForSelector('.card_list.active');
  });

  test("no valid number card", async () => {
    const validationFormInput = await page.$('.validation-form__input');
    const validationFormBtn = await page.$('.validation-form__btn');
    const result = await validateCard('3542959388556875');

    await validationFormInput.type('3542959388556875');
    await validationFormBtn.click();
    
    await expect(result).toBeFalsy();
  });

});
