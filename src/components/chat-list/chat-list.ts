import {IProps,Block} from "../../utils/Block";
import {IChat} from "../../modelsInterface/IChat";
import {ChatItem} from "../index";
import {IChatItemProps} from "../chat-item/chat-item";

interface IChatListProps extends IProps {
   list:IChat[]
}

export class ChatList extends Block {
    constructor(props: IChatListProps) {
        super(props);
    }

   getChats(list:IChat[]):string{
        if(!list||list.length===0)return '';
        return list.map(chat=>{
            const chatBlock=new ChatItem({chat:chat} as IChatItemProps)
            return(`
                ${chatBlock.renderForList()}
            `)
        }).join('')
    }
    protected render(): string {
        const {list } = this._props as IChatListProps;

        return (`
            <div class="chat-list">
                <nav class="chat-list__header">
                    {{{Link caption="Profile" page="pageProfile"  linkIcon=true }}}
                </nav>
                <div class="chat-list__search">
                    {{{ InputSearch }}}
                </div>
                <ul class="chat-list__chats">
                    ${this.getChats(list)}
                </ul>
            </div>
        `)
    }
}
