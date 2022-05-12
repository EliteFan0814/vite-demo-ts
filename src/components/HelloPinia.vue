<script lang="ts">
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
    const store = useStore();
    const { name, doubleCount } = storeToRefs(store);
    return {
      // store,
    };
  },
};
</script>

<template>
  <div class="hello-wrap">
    <h1>{{ msg }}</h1>
    <h1>111</h1>
  </div>
</template>

<style lang="scss" scoped>
.hello-wrap {
  h1 {
    color: red;
  }
}
</style>
