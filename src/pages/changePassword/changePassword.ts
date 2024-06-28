import {IProps,Block} from "../../utils/Block";
import {mockUser} from "../../mocks/user-profile.mocks";
import {IUser} from "../../modelsInterface/IUser";

export interface IChangePassword extends IProps {
    onChange:(event:Event)=>void,
    user:IUser
}
export class ChangePassword extends Block {

    constructor() {
        const props:IChangePassword={
            events:{},
            user:mockUser,
            onChange: (event: Event) => {

                event.preventDefault();
                const oldPassword = this.refs.form.getRefs()?.oldPassword.value();
                const newPassword = this.refs.form.getRefs()?.newPassword.value();
                const repeatPassword = this.refs.form.getRefs()?.repeatPassword.value();

                console.log({
                    oldPassword,
                    newPassword,
                    repeatPassword,
                })
            }
        }

        super(props);

    }

    getChildren() {
        return (
            `{{{ InputWide label='Старый пароль' type='password' name='oldPassword' validate=validate.password ref='oldPassword' readOnly=false  }}}
            {{{ InputWide label='Новый пароль' type='password' name='newPassword' validate=validate.password ref='newPassword' readOnly=false  }}}
            {{{ InputWide label='Повторите новый пароль' type='password' name='repeatPassword' validate=validate.password ref='repeatPassword' readOnly=false }}}

            `
        )
    }

    protected render(): string {
        return (`
            <form class="container">
                {{{ FormProfile user=user withButton=true  children="${this.getChildren()}" ref="form" buttonPage='pageProfile' onClickOkButton=onChange buttonText='Save Password' }}}
            </form>`)
    }
}
