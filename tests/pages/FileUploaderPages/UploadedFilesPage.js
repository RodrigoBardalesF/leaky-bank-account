import BasePage from '#framework/ui/page/BasePage.js';
import { Label } from '#framework/ui/elements/index.js';

export default class UploadedFilesPage extends BasePage {
  // Implement Page Object
  constructor(page){
    super(new Label(page.getByRole('heading', { name: "File Uploaded" }), 'File Uploaded page unique element'), 'File Uploaded');
    this.uploadedFile = new Label(page.locator("#uploaded-files"),"Uploaded file name")
  }
  async getText(fileName){
    return await this.uploadedFile.getText(fileName)
  }

}
