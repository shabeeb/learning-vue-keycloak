// import Vue from "vue";
// import App from "./App.vue";
// import router from "./router";
// import store from "./store";
// import "./registerServiceWorker";
// // import Keycloak from "Keycloak";
// import * as keycloak from "keycloak-js";
// import VueLogger from "vuejs-logger";

// Vue.config.productionTip = false;

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { KeycloakService } from "./keycloakservice";
KeycloakService.init().success(authenticated => {
  // tslint:disable-next-line:no-unused-expression
  console.log("%c I'm in initialization ", "background: #222; color: #bada55");
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");

  console.log("authenticated", authenticated);
});
