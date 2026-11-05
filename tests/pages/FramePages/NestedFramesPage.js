import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';
import FrameUtils from '#framework/utils/FrameUtils.js';

export default class NestedFramesPage extends BasePage {
  constructor(page) {
    super(new Label(page.locator('frame[name="frame-top"]'), 'MIDDLE'), 'Nested Frames Page');
    this.frameUtils = new FrameUtils(page);
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
        this.leftFrameLabel.getText()
    }

    async readRightFrame(){
        this.rightFrameLabel.getText()
    }

}
