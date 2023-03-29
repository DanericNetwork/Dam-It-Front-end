import { io, Socket } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";
import { useRoom } from "../composables/useRoom";
import { useUser } from "../composables/useUser";

const { user, setUserId } = useUser();

export class SocketioService {
  private _socket: Socket;

  constructor() {
    this._socket = this.setupSocketConnection();
  }

  private setupSocketConnection(): Socket {
    let userId = user.value.userId;
    if(!userId) {
      setUserId(uuidv4());
      userId = user.value.userId;
    }
      
    const socket = io("http://localhost:3000", {
      auth: {
        userId: userId,
      },
    });

    return socket;
  }

  /**
   * Make a socket connection
   **/
  get socket(): Socket {
    return this._socket;
  }
}

export default new SocketioService();
