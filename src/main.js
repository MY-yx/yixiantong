import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import './assets/styles/common.scss';
import './assets/styles/resets.css';
import './assets/styles/border.css';
import './assets/styles/iconfont.css';
import './assets/js/fastclick';
import './assets/js/common';

const app = createApp(App);
app.use(store).use(router);
app.mount('#app');
