// @ts-check
import { test, expect } from '#framework/ui/fixtures/browser.fixture.js';
import MainPage from './pages/MainPage.js';
import NewWindowPage from './pages/MultipleWindowsPages/NewWindowPage.js';
import OpenNewWindowPage from './pages/MultipleWindowsPages/OpenNewWindowPage.js';
import ConfigReader from '#framework/utils/ConfigReader.js';


test('interact with New Window', async ({ customBrowser: browser }) => {
  // Implement test case
  const data = ConfigReader.getTestData()
  const newWindowText = data.newWindowText;

  const openNewWindow = new OpenNewWindowPage()
  openNewWindow.waitForPageToLoad()
  expect(await openNewWindow.isPageOpened()).toBe(true)

  openNewWindow.clickForNewWindow()

  const newWindowPage = new NewWindowPage()
  newWindowPage.waitForPageToLoad()
  expect(await newWindowPage.isPageOpened()).toBe(true)

  const newWindowMessage = await newWindowPage.getNewWindowLabelText()
  expect(newWindowMessage).toEqual(newWindowText)

});
