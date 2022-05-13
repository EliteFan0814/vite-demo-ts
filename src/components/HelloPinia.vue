<script lang="ts">
// 使用 setup 函数方式来使用组合式api
// 导入全局状态userStore
import { userStore } from '../stores/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
export default {
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = userStore();
    // 监听store的改变
    store.$subscribe((mutation, state) => {
      console.log('HelloPinia', mutation, state);
    });
    const { userLastName, userFirstName, userAge, userAddress } =
      storeToRefs(store);
    return {
      userLastName,
      userFirstName,
      userAge,
      userAddress,
    };
  },
};
</script>

<template>
  <div class="test-wrap">
    <h3>{{ msg }}</h3>
    <table border="1">
      <tr>
        <th>姓名</th>
        <th>年龄</th>
        <th>地址</th>
      </tr>
      <tr>
        <td>{{ userLastName }}{{ userFirstName }}</td>
        <td>{{ userAge }}</td>
        <td>{{ userAddress }}</td>
      </tr>
    </table>
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
