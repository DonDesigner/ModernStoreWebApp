import { ModernStoreAppPage } from './app.po';

describe('modern-store-app App', () => {
  let page: ModernStoreAppPage;

  beforeEach(() => {
    page = new ModernStoreAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
