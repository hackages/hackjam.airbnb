import { HvaHackcampPage } from './app.po';

describe('hva-hackcamp App', () => {
  let page: HvaHackcampPage;

  beforeEach(() => {
    page = new HvaHackcampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
