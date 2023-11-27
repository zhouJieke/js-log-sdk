import Replay from './Replay.ts'

interface LogConfig {
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