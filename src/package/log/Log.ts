import * as rrweb from 'rrweb';
import {uuid} from "./Builder";
import Http from "./Http";


interface LogConfig {
  integrations: any[]
}


function init(config: LogConfig) {
  config.integrations.forEach((item) => {
    item.run()
  })
}







class Replay extends Http{
  private events: any[]
  private uuid: string
  constructor() {
    super()
    this.events = [];
    this.uuid = uuid()
    const _this = this
    rrweb.record({
      emit(event) {
        _this.events.push(event)
      },
    });
  }

  public run() {
    setInterval(() => {
      this.reportLogs();
      this.events = [];
      this.uuid = uuid()
    }, 1000 * 60)
  }

  public reportLogs() {
    this.httpReportLog(this.uuid, this.events)
  }


}

// 依赖库
const WebLog = {
  Replay
}


export {
  init,
  WebLog
}