import { GpsidahoPage } from './app.po';

describe('gpsidaho App', function() {
  let page: GpsidahoPage;

  beforeEach(() => {
    page = new GpsidahoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
