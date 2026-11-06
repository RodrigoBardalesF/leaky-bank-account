// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import ArticlePage from './pages/ArticlePage';
import WikipediaMainPage from './pages/WikipediaMainPage';
import PageInformationPage from './pages/PageInformationPage';

test('Get bengal tiger page information', async ({customBrowser: browser}) => {
  const pageIdentifier = '221151';

  const mainPage = new WikipediaMainPage(browser.page);
  await mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);

  await mainPage.typeSearchRequest('Bengal tiger');
  await mainPage.searchClick();

  const articlePage = new ArticlePage(browser.page);
  await articlePage.waitForPageToLoad();
  expect(await articlePage.isPageOpened()).toBe(true);

  await articlePage.clickToolsMenuButton();
  await articlePage.clickPageInfoButton();

  const pageInfo = new PageInformationPage(browser.page);
  await pageInfo.waitForPageToLoad();
  expect(await pageInfo.isPageOpened()).toBe(true);
  const getTextFromPage = await pageInfo.getInfoID();
    
  expect(getTextFromPage).toEqual(pageIdentifier);
});
