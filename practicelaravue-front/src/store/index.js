import Vue from "vue";
import Vuex from "vuex";

// dito mo iimport yung vuex na ginawa mo sa store/modules
import Jiro from "./modules/Jiro";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  modules: {
    Jiro,
  },
});
