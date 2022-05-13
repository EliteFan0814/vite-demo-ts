<script setup lang="ts">
// 使用插入 setup 直接使用组合式api
// 导入全局状态userStore
import { userStore } from '../stores/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
// 使用全局状态
const userInfo = userStore();
const { userLastName, userFirstName, userAge, userAddress } =
  storeToRefs(userInfo);
defineProps<{ msg: string }>();
// 监听store的改变
userInfo.$subscribe((mutation, state) => {
  console.log('HelloWorld',mutation, state);
});
const count = ref(0);
console.log('userInfo.store', userInfo.userFirstName);
</script>

<template>
  <div class="hello-wrap">
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
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
.hello-wrap {
  h1 {
    color: red;
  }
}
</style>
