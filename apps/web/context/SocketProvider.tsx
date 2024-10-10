'use client'
import React, { useEffect } from "react";
import { io } from 'socket.io-client'

interface SocketProviderProps {
    children?: React.ReactNode
}

interface ISocketContext {
    sendMessage: (msg: string) => any;
}

const SocketContext = React.createContext<ISocketContext | null>(null);




export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const sendMessage: ISocketContext['sendMessage'] = (msg) => {
        console.log(msg);
    }
    useEffect(() => {
        const _socket = io('http://localhost:8080');
        return () => {
            _socket.disconnect();
        }
    }, [])
    return (
        <SocketContext.Provider value={{ sendMessage }}>
            {children}
        </SocketContext.Provider>
    )
}
