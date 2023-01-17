
describe ('Video player testing', () => {
  const user = {
  email: 'katekharytonova+1@gmail.com',
  password: '16012023'
}

  beforeEach(() => {
  cy.visit('/')
  });

  it('should login user', () =>{
  cy.get('.nav-opener').click();
  cy.contains('a', 'Log in').click();
  cy.get('#login-email').type(user.email);
  cy.get('#login-password').type(user.password);
  cy.contains('.btn-primary', 'Log in').click();
});

 it('play/pause the video', () =>{
  cy.login();
  cy.visit('/search?tagId=63c15afd7c2bda0013cbf5c7');
  cy.wait(5000);
  cy.get('.catalogItem__media-inner > .catalogItem__media-smallPreview').click();
  cy.get('.popupPlayVideo.playVideoButton').click();
  cy.get('.btnPlayVideo.playing').click();
  cy.get('.btnPlayVideo').click();
});

it('check of the sound',() => {
  cy.login();
  cy.visit('/search?tagId=63c15afd7c2bda0013cbf5c7');
  cy.wait(5000);
  cy.get('.catalogItem__media-smallPreview').click();
  cy.get('.btnVolumeVideo').click();
  cy.get('.btnPlayVideo').click();
  cy.get('.btnVolumeVideo').click();
  cy.get('.btnPlayVideo.playing').click();
});

it('the speed changing',() => {
  cy.login();
  cy.visit('/search?tagId=63c15afd7c2bda0013cbf5c7');
  cy.wait(5000);
  cy.get('.catalogItem__media-smallPreview').click();
  cy.get('[data-testid="playbackRate"] > .MenuOnHoverOpener').click();
  cy.contains('.PicsioMenuItem__text--primary', '1.5').click();
  cy.get('[data-testid="playbackRate"] > .MenuOnHoverOpener').click();
  cy.contains('.PicsioMenuItem__text--primary', 'normal').click().click();
});

it('the rewinding the video',() => {
  cy.login();
  cy.visit('/search?tagId=63c15afd7c2bda0013cbf5c7');
  cy.wait(5000);
  cy.get('.catalogItem__media-smallPreview').click();
  cy.get('[data-testid="actionRewindLeftButton"]').click();
  cy.get('[data-testid="actionRewindRightButton"]').click();
});

it('full screen mode',() => {
  cy.login();
  cy.visit('/search?tagId=63c15afd7c2bda0013cbf5c7');
  cy.wait(5000);
  cy.get('.catalogItem__media-smallPreview').click();
  cy.get('.btnPlayVideo').click();
  cy.get('.svg-icon.icon.icon-fullscreen').click();
  cy.get('.svg-icon.icon.icon-fullscreen').click();
  
});
})