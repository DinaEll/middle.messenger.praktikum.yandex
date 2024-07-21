import {IProps, Block} from "../../data/block.ts";
import {IChat} from "../../modelsInterface/IChat.ts";
import modalController from "../../data/modal-controller.ts";
import {ModalAvatar, ModalChatUsers} from "../index.ts";


interface IMenuChatProps extends IProps {
    currentChat: IChat | null,
    isOpenedMenu: boolean,
    addUser: () => void,
    deleteUser: () => void,
    changeAvatarChat: () => void,
    closeMenu: () => void,
}

export class MenuChat extends Block {
    constructor(props: IMenuChatProps) {
        props.currentChat = window.store.getState().currentChat;
        props.addUser = () => {
            modalController.addModal((new ModalChatUsers({
                users: [],
                type: 'add',
                ref: "modal",
                okClick: (result: string) => {
                    console.log(result);
                },
            })) as unknown as Block);
            modalController.openModal();
            this.props.closeMenu();
        }
        props.deleteUser = () => {
            modalController.addModal((new ModalChatUsers({
                users: window.store.getState().currentChat?.users || [],
                type: 'delete',
                ref: "modal",
                okClick: (result: string) => {
                    console.log(result);
                },
            })) as unknown as Block);
            modalController.openModal();
            this.props.closeMenu();
        }
        props.changeAvatarChat = () => {
            modalController.addModal((new ModalAvatar({
                oldAvatar:window.store.getState().currentChat?.avatar||'',
                type:'chat'
            })) as unknown as Block);
            modalController.openModal();
            this.props.closeMenu();
        }

        super({
            ...props
        })
    }

    public get props() {
        return this._props as IMenuChatProps;
    }

    protected render(): string {
        const {isOpenedMenu = false} = this.props;
        return (`
            <nav class='${`menu menu-chat container-shadow ${isOpenedMenu ? 'opened' : 'hide'}`}'>
                <ul >
                    {{{ MenuItem caption='Добавить пользователя' onClick=addUser icon='plus' }}}
                    {{{ MenuItem caption='Удалить пользователя' onClick=deleteUser icon='delete' }}}
                    {{{ MenuItem caption='Изменить картинку чата' onClick=changeAvatarChat icon='avatar' }}}
                </ul>
            </nav>
        `)
    }
}
