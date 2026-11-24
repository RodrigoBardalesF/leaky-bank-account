import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';
import FrameUtils from '#framework/utils/FrameUtils.js';

export default class NestedFramesPage extends BasePage {
  constructor(browser) {
    super(new Label(browser.page.locator('body'), 'Frames page unique locator'), 'Nested Frames Page');
    this.browser = browser;
    this.page = browser.page; 
    this.frameUtils = new FrameUtils(browser.page);
    this.leftFrameLabel = new Label(
      this.frameUtils.locatorInFrames(['[name="frame-top"]', '[name="frame-left"]'], 'body'),
      'Left Frame label'
    );
    
    this.rightFrameLabel = new Label( 
      this.frameUtils.locatorInFrames(['[name="frame-top"]', '[name="frame-right"]'], 'body'),
      'Right Frame label'
    );
  }

  async readLeftFrame(){
    return await this.leftFrameLabel.locator.innerText();
  }

  async readRightFrame(){
    return await this.rightFrameLabel.locator.innerText();
  }
}
