import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import Vuetify from "vuetify";
import LeoPatternLibraryVue from "leo-pattern-library-vue";

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(LeoPatternLibraryVue);

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
