import pako from 'pako'
import {fromByteArray} from 'base64-js'

class Http {
  // 压缩算法
  private compress(event: any): string {
    const compressed = pako.deflate(event, {
      level: 9
    })
    return fromByteArray(compressed);
  }

  // 日志上报
  public httpReportLog(uuid: string, event: any[]) {
    fetch('http://localhost:5080/rrweb/upload', {
      method: 'POST',
      body: this.compress(JSON.stringify({
        uuid,
        data: event
      }))
    }).then(() => {
    })
  }
}


export default Http