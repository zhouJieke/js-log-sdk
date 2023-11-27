class Http {
  public httpReportLog(uuid: string, event: any[]) {
    fetch('http://localhost:3000/auth/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        event: event,
        id: uuid
      })
    }).then(() => {})

  }
}


export default Http