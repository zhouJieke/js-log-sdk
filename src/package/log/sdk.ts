import Replay from './Replay.ts'
import {App} from "@vue/runtime-core";

interface LogConfig {
  app: App,
  integrations: any[]
}


function init(config: LogConfig) {
  config.integrations.forEach((item: Replay) => {
    item.run()
  })
}


export {
  init,
  Replay
}