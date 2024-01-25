import { createContext, useContext } from "react";
import socketConfig from "../config/gateway.config";
import { useAppDispatch } from "../hooks/redux.hooks";

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
