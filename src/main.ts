import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { init, Replay } from "./package/log/sdk.ts";

init({
  integrations: [
    new Replay({
      reportTime: 10 * 1000
    })
  ]
})

createApp(App).mount('#app')
