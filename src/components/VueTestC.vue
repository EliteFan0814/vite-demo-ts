<script setup lang="ts">
import { ref, watch } from 'vue';
const question = ref('');
const answer = ref('Questions usually contain a question mark. ;-)');
const answerImg = ref(null);
const getAnswer = async function () {
  answer.value = 'thinking...';
  try {
    const res = await fetch('https://yesno.wtf/api');
    const answerRes = await res.json();
    answer.value = answerRes.answer;
    answerImg.value = answerRes.image;
  } catch (e) {
    answer.value = 'This fucking question has no answer!';
  }
};
watch(question, (newQuestion, oldQuestion) => {
  if (newQuestion.includes('?')) {
    getAnswer();
  }
});
</script>
<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <p><img :src="answerImg" /></p>
</template>
