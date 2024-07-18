import {IProps,Block} from "../../utils/Block";
import {mockUser} from "../../mocks/user-profile.mocks";
import {IUser} from "../../modelsInterface/IUser";
import {IPageProfileProps} from "../user-page/user-page";

export interface IChangeData extends IProps {
    onChange:(event:Event)=>void,
    user:IUser
}
export class ChangeData extends Block {
    constructor() {
        const props:IChangeData={
            events:{},
            user:mockUser,
            onChange: (event: Event) => {
                event.preventDefault();
                const login = this.refs.form.getRefs()?.login.value();
                const email = this.refs.form.getRefs()?.email.value();
                const phone = this.refs.form.getRefs()?.phone.value();
                const first_name = this.refs.form.getRefs()?.first_name.value();
                const second_name = this.refs.form.getRefs()?.second_name.value();
                const display_name = this.refs.form.getRefs()?.display_name.value();

                console.log({
                    login,
                    second_name,
                    first_name,
                    display_name,
                    phone,
                    email
                })
            }
        }
        super(props);
    }

    getChildren() {
        const {email,login,first_name,second_name,display_name,phone}=(this._props as IPageProfileProps).user;
        return (
            `{{{ InputWide label='Почта' type='email' name='email' validate=validate.email ref='email' readOnly=false value='${email}' }}}
            {{{ InputWide label='Логин' type='text' name='login' validate=validate.login ref='login' readOnly=false value='${login}'  }}}
            {{{ InputWide label='Имя' type='first_name' name='first_name' validate=validate.name ref='first_name' readOnly=false value='${first_name}'  }}}
            {{{ InputWide label='Фамилия' name='second_name' validate=validate.name ref='second_name' readOnly=false value='${second_name}'  }}}
            {{{ InputWide label='Имя в чате' name='display_name' validate=validate.name ref='display_name' readOnly=false  value='${display_name}' }}}
            {{{ InputWide label='Телефон'  name='phone' validate=validate.phone ref='phone' readOnly=false  value='${phone}' }}}

            `
        )
    }

    protected render(): string {
        return (`
            <form class="container">
                {{{ FormProfile user=user withButton=true  children="${this.getChildren()}" ref="form" buttonPage='pageProfile' onClickOkButton=onChange buttonText='Сохранить профиль' }}}
            </form>`)
    }
}
