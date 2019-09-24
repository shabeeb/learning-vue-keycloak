import Keycloak from "keycloak-js";
export class KeycloakService {
  static keycloak = Keycloak({
    realm: "kycloakDemo",
    url: "http://localhost:8080/auth",
    clientId: "vue-test"
  });
  static init() {
    return KeycloakService.keycloak.init({ onLoad: "login-required" });
  }
  static login() {
    KeycloakService.keycloak.login();
  }

  static logout() {
    KeycloakService.keycloak.logout();
  }

  static isAuthenticated() {
    return KeycloakService.keycloak.authenticated;
  }
}
