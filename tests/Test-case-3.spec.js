// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import ArticlePage from './pages/ArticlePage';
import WikipediaMainPage from './pages/WikipediaMainPage';

test('Change language and search for Gabriel Garcia Marquez', async ({customBrowser: browser}) => {

  const writerHeader= 'Gabriel García Márquez';

  const mainPage = new WikipediaMainPage(browser.page);
  await mainPage.waitForPageToLoad();
  expect(await mainPage.isPageOpened()).toBe(true);

  await mainPage.selectSpanishLanguage();
  await mainPage.typeSearchRequest('Gabriel García Márquez');
  await mainPage.searchClick();

  const articlePage = new ArticlePage(browser.page);
  await articlePage.waitForPageToLoad();
  expect(await articlePage.isPageOpened()).toBe(true);

  const headerTitle = await articlePage.getMainHeader();
  
  expect(headerTitle).toEqual(writerHeader);
});
