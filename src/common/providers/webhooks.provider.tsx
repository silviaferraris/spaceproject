/* import React, { createContext, useContext, useEffect } from "react";
import io from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../hooks/redux.hooks";
import socketConfig from "../config/gateway.config";

// @ts-ignore
const socket = io(socketConfig.serverUrlSocket);

const SocketContext = createContext(socket);

const WebhooksProvider = ({ children }: any) => {
  const dispatch = useAppDispatch();

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

const useSocket = () => {
  return useContext(SocketContext);
};

export { WebhooksProvider, useSocket };
 */
