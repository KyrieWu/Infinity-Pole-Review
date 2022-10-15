// import { createStore } from "delfin";

// export default createStore({
//   state: {
//     userInfo: {
//       id: 1,
//       username: "zhangsan",
//     },
//   },
//   actions: {
//     setUserInfo(store, userInfo) {
//       store.userInfo = userInfo;
//     },
//   },
// });

import { createStore } from "vuex";

export default createStore({
  state: {
    userInfo: {
      id: 1,
      username: "zhangsan",
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit("setUserInfo", userInfo);
    },
  },
});
