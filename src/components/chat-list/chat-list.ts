import {IProps, Block} from "../../data/block";
import {IChat} from "../../modelsInterface/IChat";
import {IUser} from "../../modelsInterface/IUser";
import modalController from "../../data/modal-controller";
import ModalPrompt from "../modal-prompt";
import {createChat} from "../../services/chat";
import {updateChats, setStateCurrentChat} from "../../services/app";
import {StoreEvents} from "../../data/store";


interface IChatListProps extends IProps {
    list: IChat[],
    currentUser: IUser | null,
    showModalAddChat: () => void,
    setCurrentChat: (chat: string) => void
}

export class ChatList extends Block {
    constructor(props: IChatListProps) {

    props.currentUser = window.store.getState().user||null;
    props.list = window.store.getState().chats || [];
    props.showModalAddChat = () => {
      modalController.addModal((new ModalPrompt({
        caption: 'Добавить чат',
        labelText: 'Название чата',
        okText: 'Добавить чат',
        ref: "modal",
        okClick: (result: string) => {
          createChat(result)
            .then(async () => await updateChats())
            .catch((error)=>console.warn(error));
        },
      })) as unknown as Block);
      modalController.openModal();
    }
    props.setCurrentChat = (id: string) => {
      const chat = this.props.list.find(item => item.id === Number(id)) || null;
      setStateCurrentChat(chat).then(() => {
        this.setProps(this.props)
      })
    }


    super({
      ...props
    })

    window.store.on(StoreEvents.Updated, () => {
      this.props.currentUser = window.store.getState().user||null;
      this.props.list = window.store.getState().chats || [];
      this.setProps(this.props);
    });
  }

  public get props() {
    return this._props as IChatListProps;
  }

  getChats(list: IChat[]): string {
    if (!list || list.length === 0) return `<li class="chat-list__chats-empty">{{{Button caption="Добавить чат" type='link' onClick=showModalAddChat }}}</li>`;
    return list.map(chat => {
      return (`  {{{ChatItem
                    onClick=setCurrentChat
                    id='${chat.id} '
                    title='${chat.title} '
                    avatar='${chat.avatar} '
                    unread_count='${chat.unread_count > 0 ? String(chat.unread_count) : ''}'
                    last_message_content='${chat.last_message ? chat.last_message.content : 'Пока нет сообщений'} '
                    last_message_time='${chat.last_message ? chat.last_message.time : ''}' }}} `)
    }).join('')
  }

  protected render(): string {
    const {list, currentUser} = this.props;
    if (!currentUser) return `
            <div class="container container-center">
                 {{{Loader }}}
            </div>`

    return (`
            <div class="chat-list">
                <nav class="chat-list__header">
                ${currentUser && `{{{ Avatar imageUrl='${currentUser.avatar || ''}' size='sm' }}}`}
                {{{Button caption="Новый чат" type='link' onClick=showModalAddChat }}}
                 {{{Link caption="Профиль" href="/settings"  linkIcon=true }}}
                </nav>
                <ul class="chat-list__chats">
                    ${this.getChats(list)}
                </ul>
                <div class="chat-list__footer">

                </div>
            </div>
        `)
  }
}
