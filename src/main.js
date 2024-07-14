import { createApp } from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/index';
import vuetify from './plugins/vuetify.js';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(vuetify);

app.mount('#app');
