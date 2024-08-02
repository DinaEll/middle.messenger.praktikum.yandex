import {getUser} from "./auth";
import Router from "../data/router";
import {BASE_URLS} from "../config";
import {IUser} from "../modelsInterface/IUser";
import {getChats, getChatToken, getChatUsers} from "./chat";
import {IChat} from "../modelsInterface/IChat";
import {openConnectMessages} from "./send-message";

const initialStateApp = async () => {
    const store = window.store.getState();
    let user = null;
    try {
        user = await getUser();
        if(user) {
            Router.getRouter().start();
        }
    } catch (error) {
        if (Router.getRouter().currentRoutePathName !== BASE_URLS['page-sign-up']) Router.getRouter().go(BASE_URLS['page-login']);
        setStateUser(null);
        return;
    }
    store.user = user as IUser;
    await updateChats();

}
const updateChats = async () => {
    let chats: IChat[] = [];
    try {
        chats = await getChats();
    } catch (error) {
        setStateChats(chats)
    }
    setStateChats(chats)

}
const initChatUsers = async (chat: IChat | null) => {
    if (!chat) return;
    let users: IUser[] = [];
    try {
        users = await getChatUsers(String(chat.id));
    } catch (error) {
        setStateUsers(chat, [])
    }
    setStateUsers(chat, users)
}
const initChatToken = async (chat: IChat | null) => {
    if (!chat) return;
    let token = '';
    try {
        token = await getChatToken(String(chat.id));
    } catch (error) {
        setStateToken(chat, token)
    }
    setStateToken(chat, token)
}
const setStateUser = (user?: IUser | null) => {
    window.store.set({user: user});
}
const setStateChats = (chats: IChat[] | null) => {
    window.store.set({chats: chats});
}
const setStateUsers = (chat: IChat, users: IUser[]) => {
    chat.users = [...users];
}
const setStateToken = (chat: IChat, token: string) => {
    chat.token = token;
}
const setStateCurrentChat = async (chat: IChat | null) => {
    await initChatUsers(chat);
    await initChatToken(chat);
    const user = window.store.getState().user;
    if (chat && user) {
        const foundedChat = window.store.getState().chats?.find(_chat => _chat.id === chat.id);
        if (foundedChat && chat.connection) {
            foundedChat.unread_count = 0;
        }
        openConnectMessages(chat, user);

    }
    window.store.set({currentChat: chat, chats: window.store.getState().chats});
}


export {
    initialStateApp,
    setStateUser,
    updateChats,
    setStateCurrentChat,
    setStateUsers,
    initChatToken,
    initChatUsers,
    setStateToken
}
