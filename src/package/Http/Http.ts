import pako from 'pako'
import {fromByteArray} from 'base64-js'

class Http {
  // 压缩算法
  private compress(event: any): string {
    const compressed = pako.deflate(JSON.stringify(event), {
      level: 9
    })
    return fromByteArray(compressed);
  }
  // 日志上报
  public httpReportLog(eventId: string, event: any[]) {
    fetch('http://localhost:5080/rrweb/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify({
        eventId,
        data: this.compress(event)
      })
    }).then(() => {
    })
  }
}


export default Http