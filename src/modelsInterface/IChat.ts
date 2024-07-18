import {IUser} from "./IUser";
import SocketIO from "../api/socket";
import {IChatMessage} from "./IChatMessage";

export interface IChat {
  id: number;
  title: string;
  avatar?: string;
  token?: string;
  unread_count: number;
  created_by: number;
  last_message?: ILastMessage;
  users?:IUser[];
  connection?:SocketIO|null;
  messages?:IChatMessage[]|null;
}

export interface ILastMessage {
  user: IUser;
  time: string;
  content: string;
}

export type IChatUsersData = {
  users: number[];
  chatId: number;
}
