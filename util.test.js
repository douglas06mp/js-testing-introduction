const { generateText, checkAndGenerate } = require('./util')
const puppeteer = require('puppeteer')

test('should output name and age', () => {
  const text = generateText('bob', 20)
  expect(text).toBe('bob (20 years old)')
  const text2 = generateText("ann", 25);
  expect(text2).toBe("ann (25 years old)");
})

test('should output data-less text', () => {
  const text = generateText('', null)
  expect(text).toBe(' (null years old)')
})

test('should generate a valid text output', () => {
  const text = checkAndGenerate('jack', 22)
  expect(text).toBe('jack (22 years old)')
})

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: true,
    //slowMo: 80,
    //args: ['--window-size=1920,1080']
  })
  const page = await browser.newPage()
  await page.goto("file:///D:/code/project/jsTestingIntro/index.html")
  await page.click('input#name')
  await page.type('input#name', 'Rose')
  await page.click("input#age")
  await page.type("input#age", "28")
  await page.click("#btnAddUser")
  const result = await page.$eval('.user-item', el => el.textContent)
  expect(result).toBe('Rose (28 years old)')
}, 10000)

