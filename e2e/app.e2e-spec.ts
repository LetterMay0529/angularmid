import { AngularmidPage } from './app.po';

describe('angularmid App', function() {
  let page: AngularmidPage;

  beforeEach(() => {
    page = new AngularmidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
