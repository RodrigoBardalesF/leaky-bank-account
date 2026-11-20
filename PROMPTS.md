Prompt: 

Create a hook for a playwright fixture that can take a screenshot every time the test fails. Also, create an AfterEach hook option too for comparison, both need to work and be implemented with Allure on a Node project where playwright is used for end to end testing.

Answer: 

tests/fixtures/allure.fixture.js:
import { test as base } from '@playwright/test';
import { allure } from 'allure-playwright';

/**
 * Extended test fixture that automatically captures a screenshot and page source
 * when a test fails, and attaches both to the Allure report.
 */
export const test = base.extend({
    page: async ({ page }, use, testInfo) => {
        // Run the test
        await use(page);

        // Only run on failure
        if (testInfo.status !== testInfo.expectedStatus) {
            // Screenshot
            const screenshot = await page.screenshot();
            await allure.attachment(
                `Screenshot - ${testInfo.title}`,
                screenshot,
                'image/png'
            );

            // Page source (DOM)
            const html = await page.content();
            await allure.attachment(
                `Page Source - ${testInfo.title}`,
                html,
                'text/html'
            );

            // Optional: also attach the error message
            if (testInfo.error) {
                await allure.attachment(
                    `Error - ${testInfo.title}`,
                    testInfo.error.message,
                    'text/plain'
                );
            }
        }
    },
});

Use on test:

import { test } from './fixtures/allure.fixture.js';
import { expect } from '@playwright/test';
import { allure } from 'allure-playwright';

test('My test', async ({ page }) => {
    await allure.epic('My Epic');
    await allure.feature('My Feature');

    await test.step('Navigate', async () => {
        await page.goto('https://example.com');
    });

    await test.step('Assert something', async () => {
        await expect(page).toHaveTitle(/Example/);
    });
});

Option 2: afterEach Hook

tests/hooks/screenshot.hook.js:

import { test } from '@playwright/test';
import { allure } from 'allure-playwright';

test.afterEach(async ({ page }, testInfo) => {
    // Only run on failure
    if (testInfo.status !== testInfo.expectedStatus) {
        // Screenshot
        const screenshot = await page.screenshot();
        await allure.attachment(
            `Screenshot - ${testInfo.title}`,
            screenshot,
            'image/png'
        );

        // Page source (DOM)
        const html = await page.content();
        await allure.attachment(
            `Page Source - ${testInfo.title}`,
            html,
            'text/html'
        );

        // Optional: attach error message
        if (testInfo.error) {
            await allure.attachment(
                `Error - ${testInfo.title}`,
                testInfo.error.message,
                'text/plain'
            );
        }
    }
});

Use on test:

import { test, expect } from '@playwright/test';
import { allure } from 'allure-playwright';
import './hooks/screenshot.hook.js';  // ✅ Import the hook

test('My test', async ({ page }) => {
    await allure.epic('My Epic');
    await allure.feature('My Feature');

    await test.step('Navigate', async () => {
        await page.goto('https://example.com');
    });
});