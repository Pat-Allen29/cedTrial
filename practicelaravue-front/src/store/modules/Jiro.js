// ito namang `import Jiro` galing yan don sa src/api sundan niyo yung path
import Jiro from "@/api/modules/jiro/index";

// ito na yung state management na tinatawag, gumagamit ng Vuex

export default {
  state: {
    // dito sa state yung mga variables ninyo, sasamplean ko later
    jiroform: {},
  },

  getters: {
    // dito naman sa getters, dito niyo gagamitin yung state para iget kasi nga getters
    GET_NEW_JIRO_INFO: (state) => state.jiroform,
  },

  mutations: {
    // dito naman sa mutation, ito yung magiging setter, ito yung magseset ng value nung variable
    SET_NEW_JIRO_INFO: (state, data) => {
      state.jiroform = data;
    },
  },

  actions: {
    // actions, dito niyo na magagamit yung api niyo na galing din sa laravel
    addJiroInfo({ commit }, payload) {
      return new Promise((resolve, reject) => {
        Jiro.addJiroInfo(payload)
          .then((response) => {
            console.log(response);
            if (response.status === 200 || response.status === 201) {
              commit("SET_NEW_JIRO_INFO", response.data);
              resolve(response);
            } else if (response.status == "") {
              debugger;
            } else {
              console.log("Walang nagtrue");
            }
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
