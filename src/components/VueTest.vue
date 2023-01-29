<script lang="ts">
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    click: this.$_.debounce(function () {
      // ... 对点击的响应 ...
      this.count++;
    }, 1500),
  },
};
</script>

<template>
  <div>{{ count }}</div>
  <button @click="click">增加1</button>
</template>
