import { Angular2HomeworkPage } from './app.po';

describe('angular2-homework App', function() {
  let page: Angular2HomeworkPage;

  beforeEach(() => {
    page = new Angular2HomeworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
