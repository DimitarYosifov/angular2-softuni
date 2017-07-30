import { ServicesAndDependencyInjectionPage } from './app.po';

describe('services-and-dependency-injection App', function() {
  let page: ServicesAndDependencyInjectionPage;

  beforeEach(() => {
    page = new ServicesAndDependencyInjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
