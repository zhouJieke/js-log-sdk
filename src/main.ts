import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { init, Replay } from "./package/log/sdk.ts";
const app = createApp(App)



// 注入日志SDK
init({
  app: app,
  integrations: [
    new Replay()
  ]
})

app.mount('#app')
