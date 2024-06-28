import {IProps,Block} from "../../utils/Block";
import {mockUser} from "../../mocks/user-profile.mocks";
import {mockListChats} from "../../mocks/chat.mocks";
import {mockListMessages} from "../../mocks/chat-message.mocks";
import {IChat} from "../../modelsInterface/IChat";
import {IUser} from "../../modelsInterface/IUser";
import {IChatMessage} from "../../modelsInterface/IChatMessage";

export interface IChatPage extends IProps {
    currentUser:IUser,
    chatList:IChat[],
    messageList:IChatMessage[],
}
export class ChatPage extends Block {
        constructor() {
            const props:IChatPage={
                currentUser:mockUser,
                chatList:mockListChats,
                messageList:mockListMessages,
                events:{}
            }

            super(props);
    }

    protected render(): string {
        return (`
           <div class="chat-page">
                <div class="chat-page-left">
                    {{{ ChatList list=chatList }}}
                </div>
                <div class="chat-page-main">
                    {{{ MessageList messageList=messageList currentUser=currentUser }}}
                </div>
            </div>
        `)
    }
}
