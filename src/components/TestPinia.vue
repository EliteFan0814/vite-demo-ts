<script lang="ts">
// 没有使用组合式api时，用以下方式调用 状态管理
import { userStore } from '../stores/user';
import { mapState } from 'pinia';

export default {
  data() {
    return {
      title: '这是用来测试pinia的',
      store: userStore(),
      ht: '一种LiMn&lt;sub&gt;2&lt;/sub&gt;O&lt;sub&gt;4&lt;/sub&gt;/掺杂NASICON/Li&lt;sub&gt;4&lt;/sub&gt;Ti&lt;sub&gt;5&lt;/sub&gt;O&lt;sub&gt;12&lt;/sub&gt;全固态薄膜电池及制备方法',
      ht2: '一种LiMn<sub>2</sub>O<sub>4</sub>/掺杂NASICON/Li<sub>4</sub>Ti<sub>5</sub>O<sub>12</sub>全固态薄膜电池及制备方法',
    };
  },
  computed: {
    ...mapState(userStore, [
      'userAge',
      'userAddress',
      'getUserCar',
      'getSchool',
    ]),
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
    <p v-html="ht"></p>
    <p v-html="ht2"></p>
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
