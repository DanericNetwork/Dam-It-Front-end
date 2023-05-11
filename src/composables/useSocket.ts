import io, { Socket } from "socket.io-client";

export class SocketConnection {
  public socket: Socket;

  constructor() {
    this.socket = io("http://localhost:3000", {
      auth: {
        sessionId: localStorage.getItem("session"),
      },
    });


    this.socket.on("connect", () => {
      console.log("connected");
    });
  }
}

export const socketServer = new SocketConnection().socket;
