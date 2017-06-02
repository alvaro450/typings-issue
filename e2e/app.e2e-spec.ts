import { TypingsIssuePage } from './app.po';

describe('typings-issue App', () => {
  let page: TypingsIssuePage;

  beforeEach(() => {
    page = new TypingsIssuePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
