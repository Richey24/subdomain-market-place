import { createApp } from 'vue'
import App from './App.vue'

import $ from 'jquery';
(window as any).$ = $;

createApp(App).mount('#app')
