import {IProps,Block} from "../../utils/Block";
import {IChatMessage} from "../../modelsInterface/IChatMessage";
import {IUser} from "../../modelsInterface/IUser";
import { Message} from "../index";
import {IMessageProps} from "../message/message";
import {validateMessage} from "../../utils/validates.utils";

interface IMessageListProps extends IProps{
    messageList:IChatMessage[];
    currentUser:IUser;
    onBlurMessage?:()=>void;
    message?:string;
    onClickSend?:()=>void;
}

export class MessageList extends Block {
    constructor(props: IMessageListProps) {
        props.onBlurMessage= () => this.validate();
        props.onClickSend= () => {
            if(!validateMessage(this.valueMessage()))console.log('Send Message:'+this.valueMessage());
            else console.log('Error! Can not send!')
        }
        super(props);
    }
    public get props(){
        return this._props as IMessageListProps;
    }
    public valueMessage() {
        if (!this.validate()) {
            return '';
        }
        return this.refs?.message.value()
    }
    private validate() {
        const value =this.refs?.message.value();
        const error = validateMessage(value);

        this.props.message=value;
        if (error) {
            console.log('Message can not be blank')
            this.setProps(this.props);
            return false;
        }
        this.setProps(this.props);
        return true;
    }
    getListMessages(list:IChatMessage[]):string{
        if(!list||list.length===0)return '';
        return list.map(message=>{
            const messageBlock=new Message({message:message,myMessage:message.main||false} as IMessageProps)
            return(`
            <div class="message-list-main-message">
                ${messageBlock.renderForList()}
                </div>
            `)
        }).join('')
    }
    protected render(): string {
        const { messageList,currentUser,message='' } = this.props;
        const {avatar,display_name}=currentUser;
        return (`
           <div class="message-list">
                <div class="message-list-header">
                    <div class="message-list-header-avatar">
                        {{{ Avatar image=${avatar} size='sm'}}}
                        <span>${display_name}</span>
                    </div>
                    {{{ Button type="dots"}}}
                </div>
                <ul class="message-list-main">
                    ${this.getListMessages(messageList)}
                </ul>
                <div class="message-list-footer">
                    {{{ Button type="paperclip"}}}
                    {{{ Input
                        ref="message"
                        type="text"
                        classes="message-list__footer__input"
                        value='${message}'
                        placeholder="Message"
                        name="message"
                        onBlur=onBlurMessage
                    }}}
                    {{{ Button type="arrow" onClick=onClickSend}}}
                </div>
            </div>
        `)
    }
}
