// This api will come in the next version

import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://dev-128783.oktapreview.com',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/front/dist/pages/login',

  // URL of the SPA to redirect the user after silent refresh
  // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: '0oahnz4g7i6VEea9a0h7',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile email',

  // silentRefreshShowIFrame: true,

  // showDebugInformation: true,

  // sessionChecksEnabled: false
};
