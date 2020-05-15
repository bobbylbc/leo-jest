import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import LeoPatternLibraryVue from "leo-pattern-library-vue";

Vue.config.productionTip = false;

Vue.use(LeoPatternLibraryVue);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
