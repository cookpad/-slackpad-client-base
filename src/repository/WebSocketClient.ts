import Reply from '../model/Reply';

class WebScoketClient {
  websocket: WebSocket;

  constructor() {
    this.websocket = new WebSocket(`ws://your_end_point/ws`);
    this.bindLifecycleEvent(this.websocket);
  }

  private bindLifecycleEvent = (websocket: WebSocket) => {
    websocket.onopen = () => {
      console.log('ws:onOpened');
    };
    websocket.onmessage = e => {
      console.log(`ws:${e.data}`);
      const reply = this.convertToReply(e);
      //do something...
    };
    websocket.onerror = e => {
      console.log(`ws:onError: ${e.returnValue}`);
    };

    websocket.onclose = e => {
      console.log('ws:onClosed');
    };
  };

  private convertToReply = (event: { data: string }): Reply | null => {
    const data = event.data as string;
    const match = data.match(/\:(\w+)\s(\w+)\s(.+)/);
    if (match === null) {
      // Invalid format
      return null;
    }
    const [_, prefix, command, params] = match;
    return { prefix, command, params };
  };

  public join = (nickname: string) => {
    this.websocket.send(`user ["${nickname}"]`);
  };
}

export default new WebScoketClient();
