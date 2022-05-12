import { defineStore } from 'pinia';
export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userLastName: '范',
      userFirstName: '培超',
      userAge: 28,
      userAddress: '中国',
    };
  },
  getters: {
    getUserName(state) {
      return state.userLastName + state.userFirstName;
    },
  },
});
