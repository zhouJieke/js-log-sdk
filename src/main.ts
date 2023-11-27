import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { init, WebLog } from "./package/log/Log.ts";

init({
  integrations: [
    new WebLog.Replay({
      reportTime: 10 * 1000
    })
  ]
})

createApp(App).mount('#app')
