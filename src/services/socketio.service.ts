import { io, Socket } from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

export class SocketioService {
    private _socket: Socket;

    constructor() {
        this._socket = this.setupSocketConnection();
    }

    private setupSocketConnection(): Socket {
        const userId = sessionStorage.getItem('userId') || uuidv4() && sessionStorage.setItem('userId', uuidv4());
        return io('http://localhost:3000', {
            auth: {
                userId: sessionStorage.getItem('userId') || userId
            }
        });
    }

    /**
     * Make a socket connection
     **/
    get socket(): Socket {
        return this._socket;
    }
}

export default new SocketioService();