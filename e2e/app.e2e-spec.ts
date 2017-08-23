import { TimberlineidahoPage } from './app.po';

describe('timberlineidaho App', function() {
  let page: TimberlineidahoPage;

  beforeEach(() => {
    page = new TimberlineidahoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
