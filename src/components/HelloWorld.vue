<script setup lang="ts">
// 导入全局状态userStore
import { userStore } from '../stores/user';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
// 使用全局状态
const userInfo = userStore();
defineProps<{ msg: string }>();

const count = ref(0);
// const userName = userInfo.getters.getUserName;
// const userName = userInfo.store.userLastName;
console.log('userInfo.store', userInfo.value);
</script>

<template>
  <div class="hello-wrap">
    <h1>{{ msg }}</h1>
    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
</template>

<style lang="scss" scoped>
.hello-wrap {
  h1 {
    color: red;
  }
}
</style>
