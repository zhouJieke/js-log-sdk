import {App} from "@vue/runtime-core";
import {Router} from "vue-router";

export interface LogConfig {
  app: App,
  integrations: any[],
  router: Router
}

