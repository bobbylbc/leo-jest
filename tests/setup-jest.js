// setup-jest.js
import Vue from "vue";
import lodash from "lodash";
import LeoPatternLibraryVue from "leo-pattern-library-vue";

Vue.use(LeoPatternLibraryVue);
global._ = lodash;
