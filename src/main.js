import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Si l'utilisateur tente de se co sur une page privé alors qu'il
// n'est pas connecté, alors il serra redirigé automatiquement vers
// la page home
// Si une page n'existe pas alors il y aura une page 404

createApp(App).use(store).use(router).mount('#app');
