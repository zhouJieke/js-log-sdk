import * as rrweb from 'rrweb';
import {uuid} from "./Builder";
import Http from "./Http";
import {ReplayConfig} from "./Interface/Replay.ts";


interface LogConfig {
  integrations: any[]
}


function init(config: LogConfig) {
  config.integrations.forEach((item: Replay) => {
    item.run()
  })
}







class Replay extends Http{
  private events: any = []
  private uuid: string = uuid()
  private readonly config: ReplayConfig
  private
  constructor(config: ReplayConfig) {
    super()
    // 加载配置
    this.config = config
    // 启动监听器
    this.startMonitor()
  }

  private startMonitor() {
    rrweb.record({
      emit: (event) => {
        this.events.push(event)
      }
    });
  }


  private static reset() {
    this.events = [];
    this.uuid = uuid()
  }



  public run() {
    setInterval(() => {
      this.reportLogs();
      this.reset()
    }, this.config.reportTime || 1000 * 10)
  }

  public static reportLogs() {
    // 如果没有日志，则不进行上报
    if (this.events.length <= 0) return;
    console.log(this.uuid, this.events)
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