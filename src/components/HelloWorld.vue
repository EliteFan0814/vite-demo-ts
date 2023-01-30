<script setup lang="ts">
// 使用插入 setup 直接使用组合式api
// 导入全局状态userStore
import { userStore } from '../stores/user';
import { storeToRefs } from 'pinia';
import { ref, reactive } from 'vue';
// 使用全局状态
const userInfo = userStore();
const { userLastName, userFirstName, userAge, userAddress } =
  storeToRefs(userInfo);
defineProps<{ msg: string }>();
// 监听store的改变
userInfo.$subscribe((mutation, state) => {
  console.log('HelloWorld', mutation, state);
});
const count = ref(0);
const testObj = ref({ name: '宋晓青', age: 18, address: '上海' });
const handleChangeName = function () {
  testObj.value.name = '送小青';
};
const divStyle = reactive({ border: true, 'bg-color': true });
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
        <th>操作</th>
      </tr>
      <tr>
        <td>{{ userLastName }}{{ userFirstName }}</td>
        <td>{{ userAge }}</td>
        <td>{{ userAddress }}</td>
        <td></td>
      </tr>
      <tr>
        <td>{{ testObj.name }}</td>
        <td>{{ testObj.age }}</td>
        <td>{{ testObj.address }}</td>
        <td><button @click="handleChangeName">修改</button></td>
      </tr>
    </table>
  </div>
  <div :class="divStyle">hahaha</div>
</template>

<style lang="scss" scoped>
.hello-wrap {
  h1 {
    color: red;
  }
}
.border {
  border: 1px solid red;
}
.bg-color {
  background-color: red;
}
</style>
