import Replay from './Replay/Replay.ts'
import {LogConfig} from "./Interface/Sdk.ts";
import {Router} from "./Router/Router.ts";


class Activation extends Router {
  public init(config: LogConfig) {
    super.initConfig(config)
    super.createRouterProbe(config.router)


    config.integrations.forEach((item: Replay) => {
      item.run()
    })
  }
}

const init = new Activation().init
export {
  init,
  Replay
}