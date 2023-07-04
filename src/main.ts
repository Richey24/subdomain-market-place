import { createApp } from 'vue'
import App from './App.vue'
import { createApp } from 'vue'
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'

// import $ from 'jquery';
// window.$ = $;
const app = createApp(App)
app.use(VueVideoPlayer)
app.mount('#app')
