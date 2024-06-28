import {IProps,Block} from "../../utils/Block";
import {mockUser} from "../../mocks/user-profile.mocks";
import {IUser} from "../../modelsInterface/IUser";

export interface IPageProfileProps extends IProps {
    user:IUser
}
export class PageProfile extends Block {
    constructor() {
        const props:IPageProfileProps= {
            events: {},
            user: mockUser,
        }
        super(props);
    }

    getChildren() {
        const {email,login,first_name,second_name,display_name,phone}=(this._props as IPageProfileProps).user;
        return (
            `{{{ InputWide label='Почта' type='email' name='email' validate=validate.email ref='email' readOnly=true value='${email}' }}}
            {{{ InputWide label='Логин' type='text' name='login' validate=validate.login ref='login' readOnly=true value='${login}'  }}}
            {{{ InputWide label='Имя' type='first_name' name='first_name' validate=validate.name ref='first_name' readOnly=true value='${first_name}'  }}}
            {{{ InputWide label='Фамилия' name='second_name' validate=validate.name ref='second_name' readOnly=true value='${second_name}'  }}}
            {{{ InputWide label='Имя в чате' name='display_name' validate=validate.name ref='display_name' readOnly=true  value='${display_name}' }}}
            {{{ InputWide label='Телефон'  name='phone' validate=validate.phone ref='phone' readOnly=true  value='${phone}' }}}
            `
        )
    }

    protected render(): string {
        return (`
            <form class="container">
                {{{ FormProfile user=user withButton=false  children="${this.getChildren()}" ref="form" buttonPage='chatPage' }}}
            </form>`)
    }
}
