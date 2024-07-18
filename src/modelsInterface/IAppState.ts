import {IChat} from "./IChat";
import {IUser} from "./IUser";

export type IAppState = {
    error: string | null,
    user?: IUser | null,
    chats: IChat[]|null,
    currentChat: IChat|null,
}
