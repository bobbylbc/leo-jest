import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify, {
  theme: {
    primary: "#D52B1E",
    secondary: "#4D4D4D",
    accent: "#808080",
    error: "#B00020",
    info: "#101E8E",
    success: "#14AF27",
    warning: "#E2781A",
    disabled: "#CCCCCC"
  }
});
// Vue.use(Vuetify)

const opts = {};

export default new Vuetify(opts);
