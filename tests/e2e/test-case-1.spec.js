import { test, expect} from '@playwright/test'

test.describe("Chain activties on site",() => {
    test.beforeEach(async ({page})=>{
        page.goto('https://practicesoftwaretesting.com/')
    });
    test("Click on brand MightyCraft Hardware",async ({page})=> {

        await page.getByRole('checkbox',{name:'MightyCraft Hardware'}).check();
        const dropwdown = page.getByRole('combobox',{name:'sort'})
        await dropwdown.selectOption({label: 'Price (Low - High)'})
        await expect(page.locator('.card-title').first()).toHaveText('Screws', { timeout: 10000 });

        const prices = await page.locator('.card').evaluateAll(cards =>
        cards.map(card => {
            const priceText = card.querySelector('[data-test="product-price"]')?.textContent;
            return parseFloat(priceText?.replace('$', '') || '0');
        })
        );
        console.log(prices);
        const sortedPrices = [...prices].sort((a, b) => a - b);
        expect(prices).toEqual(sortedPrices);

        await page.locator('.card-title').first().click()
        expect(page.getByText('Specifications'))
        await page.getByRole('button',{name:'Add to cart'}).click()
        await page.getByRole('link',{name:'cart'}).click()
        expect(page.getByText('Quantity'))

        const cellValue = await page.locator('table tr').nth(1).locator('td').nth(2).innerText();
        const result = cellValue.replace(/\$/, ""); 
        const multiplyByThree = parseFloat(result) * 3

        await page.getByRole('spinbutton').fill('3')
        expect(page.getByText('$'+`${multiplyByThree}`))
    });
});