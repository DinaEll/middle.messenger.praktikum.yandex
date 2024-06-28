import {IProps,Block} from "../../utils/Block";
import {IChat} from "../../modelsInterface/IChat";

export interface IChatItemProps extends IProps {
    chat:IChat,
}

export class ChatItem extends Block {
    constructor(props: IChatItemProps) {
        super(props);
    }

    public renderForList=this.render;
    protected render(): string {
        const { chat } = this._props as IChatItemProps;
        return (`
            <li class="chat-item">
                <div class="chat-item-avatar">
                  {{{ Avatar imageUrl=${chat.avatar} isLoadAvatar=false size='sm' }}}
                </div>
                <div class="chat-item-caption">
                    <div class="chat-item-caption-name">
                        ${chat.title}
                    </div>
                    <div class="chat-item__caption__time">
                        ${chat.last_message.time}
                    </div>
                </div>
                <div class="chat-item-message">
                    <div class="chat-item-message-content">
                        <p> ${chat.last_message.content}</p>
                    </div>
                    {{{ Button type="number" caption=${chat.unread_count}}}}
                </div>
            </li>
        `)
    }
}
