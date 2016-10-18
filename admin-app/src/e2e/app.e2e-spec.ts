import { GSSTimesheetPage } from './app.po';

describe('gss-timesheet App', function() {
  let page: GSSTimesheetPage;

  beforeEach(() => {
    page = new GSSTimesheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
