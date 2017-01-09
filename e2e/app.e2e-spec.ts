import { AngularGH1Page } from './app.po';

describe('angular-gh1 App', function() {
  let page: AngularGH1Page;

  beforeEach(() => {
    page = new AngularGH1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
