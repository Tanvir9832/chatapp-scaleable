import { Server } from 'socket.io';

class SocketService {
    private _io: Server;
    constructor() {
        this._io = new Server();
    }

    public initListeners() {
        const io = this.io;
        console.log('Socket Listener connected ');
        io.on('connect', async (socket) => {
            console.log(`New Socket Connected`, socket.id);

            socket.on('event:message', async ({ message }: { message: string }) => {
                console.log("New message ", message);
            })
        })
    }

    get io() {
        return this._io;
    }


}

export default SocketService;