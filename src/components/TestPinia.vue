<script lang="ts">
// 没有使用组合式api时，用以下方式调用 状态管理
import { userStore } from '../stores/user';
import { mapState } from 'pinia';

export default {
  data() {
    return {
      title: '这是用来测试pinia的',
      store: userStore(),
    };
  },
  computed: {
    ...mapState(userStore, ['userAge', 'userAddress', 'getUserCar','getSchool']),
    ...mapState(userStore, {
      myFirstName: 'userFirstName',
      myLastName: 'userLastName',
    }),
  },
  mounted() {},
  methods: {
    addAge() {
      this.store.userAge++;
    },
  },
};
</script>

<template>
  <div class="test-wrap">
    <h3>{{ title }}</h3>
    <table border="1">
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>地址</th>
        <th>学校</th>
        <th>车</th>
      </tr>
      <tr>
        <td>{{ store.getUserName }}</td>
        <td>{{ userAge }}</td>
        <td>{{ userAddress }}</td>
        <td>{{ getSchool }}</td>
        <td>{{ getUserCar }}</td>
      </tr>
    </table>
    <div class="btn-wrap">
      <button @click="addAge">增加年龄</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test-wrap {
  border: 1px solid red;
  table {
    border-collapse: collapse;
  }
}
</style>
