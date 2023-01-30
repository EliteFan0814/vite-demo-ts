<script lang="ts">
export default {
  data() {
    return {
      question: undefined,
      answer: 'Questions usually contain a question mark. ;-)',
      answerImg:null
    };
  },
  watch: {
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes('?')) {
        this.getAnswer();
      }
    },
  },
  methods: {
    async getAnswer() {
      this.answer = 'thinking...';
      try {
        const res = await fetch('https://yesno.wtf/api');
        const { answer, forced, image } = await res.json();
        this.answer = answer
        this.answerImg = image
      } catch (e) {
        this.answer = 'This fucking question has no answer!';
      }
    },
  },
};
</script>

<template>
  <p>
    Ask a yes/no question:
    <input v-model="question" />
  </p>
  <p>{{ answer }}</p>
  <p><img :src="answerImg"></p>
</template>
