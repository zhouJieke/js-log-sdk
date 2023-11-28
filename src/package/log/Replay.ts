import * as rrweb from 'rrweb';
import {uuid} from "./Builder";
import {Activate, ReplayConfig} from "./Interface/Replay.ts";
import Http from "./Http.ts";


// 视频监控插件
class Replay extends Http implements Activate{
  private events: any = []
  private eventId: string = uuid()
  private readonly config: ReplayConfig
  constructor(config?: ReplayConfig) {
    super()
    // 加载配置
    this.config = (config as ReplayConfig) || {}
    // 启动监听器
    this.startMonitor()
  }
  private startMonitor() {
    rrweb.record({
      slimDOMOptions: 'all',
      emit: (event) => {
        this.events.push(event)
      }
    });
  }
  private reset() {
    this.events = [];
    this.eventId = uuid()
  }
  public run() {
    setInterval(() => {
      this.reportLogs();
      this.reset()
    }, this.config.reportTime || 1000 * 30)
  }
  public reportLogs() {
    // 如果没有日志，则不进行上报
    if (this.events.length <= 0) return;
    this.httpReportLog(this.eventId, this.events)
  }
}


export default Replay