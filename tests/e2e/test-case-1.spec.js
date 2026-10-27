import { test, expect} from '@playwright/test'

test.describe("Chain activties on site",() => {
    test.beforeEach(async ({page})=>{
        page.goto('https://practicesoftwaretesting.com/')
    });
    test("Click on brand MightyCraft Hardware",async ({page})=> {
        await page.getByRole('checkbox',{name:'MightyCraft Hardware'}).check();
        const dropwdown = page.getByRole('combobox',{name:'sort'})
        await dropwdown.selectOption({label: 'Price (Low - High)'})
        expect(page.getByText(' Screws '))
    });
});