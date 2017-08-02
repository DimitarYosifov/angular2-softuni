import { ModulesAndRoutingPage } from './app.po';

describe('modules-and-routing App', function() {
  let page: ModulesAndRoutingPage;

  beforeEach(() => {
    page = new ModulesAndRoutingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
