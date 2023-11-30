import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { init, Replay } from "./package/sdk.ts";
import router from "./router";
import {Network} from "./package/Network/Network.ts";
const app = createApp(App)



init({
  app: app,
  integrations: [
    new Replay(),
    new Network()
  ],
  router
})


app.use(router)
app.mount('#app')


