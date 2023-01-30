import { createApp } from 'vue';
import { createPinia } from 'pinia';
import lodash from 'lodash';
import App from './App.vue';
const app = createApp(App);
app.use(createPinia());
app.config.globalProperties.msg = 'sdfdfsdf';
app.config.globalProperties.$_ = lodash;
app.mount('#app');
