import { defineStore } from 'pinia';
export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userLastName: '范',
      userFirstName: '培超',
      userAge: 28,
      userAddress: '中国',
      car: '五菱宏光mini',
    };
  },
  getters: {
    getUserName(state) {
      return state.userLastName + state.userFirstName;
    },
    getUserCar(state) {
      return state.car + '白色';
    },
  },
  actions: {
    changeCar(newCar: string) {
      this.car = newCar;
    },
  },
});
