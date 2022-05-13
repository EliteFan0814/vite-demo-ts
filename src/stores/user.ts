import { defineStore } from 'pinia';
import { studyStore } from './study';
export const userStore = defineStore('userStore', {
  state: () => {
    return {
      userLastName: '范',
      userFirstName: '培超',
      userAge: 28,
      userAddress: '中国',
      car: '路虎揽胜',
    };
  },
  getters: {
    getUserName(state) {
      return state.userLastName + state.userFirstName;
    },
    getUserCar(state) {
      return state.car + '白色';
    },
    getSchool() {
      const study = studyStore();
      return study.school;
    },
  },
  actions: {
    changeCar(newCar: string) {
      this.car = newCar;
    },
  },
});
