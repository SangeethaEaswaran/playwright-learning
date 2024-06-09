const {test} = require('@playwright/test')
test('First playwright test', async({browser})=>{
    console.log('browser', await browser)
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
})

test.only('Go to google',async({page})=>{
    await page.goto('https://google.com')
})