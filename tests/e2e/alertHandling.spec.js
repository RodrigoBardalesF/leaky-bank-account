import { test, expect } from '@playwright/test';

test.describe("Handling alert test",()=>{

  const successfulMessage = 'You successfully clicked an alert';

  test.beforeEach(async ( { page }) => {
    await page.goto('https://the-internet.herokuapp.com');
  });

  test('successful message should be displayed after alert handling', async ({ page }) => {
    await page.getByRole('link', { name: 'JavaScript Alerts' }).click();

    page.on('dialog',async dialog => {
      console.log('Alert message appeared');
      await dialog.accept();
    })

    await page.getByRole('button',{name:'Click for JS Alert'}).click();
    expect(page.getByText('successfulMessage')).toBeVisible;
    
  });
})