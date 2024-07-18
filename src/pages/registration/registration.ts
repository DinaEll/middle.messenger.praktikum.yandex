import {IProps,Block} from "../../utils/Block";

export interface IRegistrationPage extends IProps {
    onLogin:(event:Event)=>void,
}
export class RegistrationPage extends Block {
    constructor() {
        const props:IRegistrationPage={
            events:{},
            onLogin:  (event: Event) => {
                event.preventDefault();
                const login = this.refs.form.getRefs()?.login.value();
                const email = this.refs.form.getRefs()?.email.value();
                const phone = this.refs.form.getRefs()?.phone.value();
                const first_name = this.refs.form.getRefs()?.first_name.value();
                const second_name = this.refs.form.getRefs()?.second_name.value();
                const password = this.refs.form.getRefs()?.password.value();
                const password2 = this.refs.form.getRefs()?.password2.value();

                console.log({
                    login,
                    password,
                    password2,
                    second_name,
                    first_name,
                    phone,
                    email
                })
            }
        }

        super(props);

    }

    getChildren() {
        return (
            `{{{ InputShort label='Почта' type='email' name='email' validate=validate.email ref='email' }}}
            {{{ InputShort label='Логин' type='text' name='login' validate=validate.login ref='login' }}}
            {{{ InputShort label='Имя' type='first_name' name='first_name' validate=validate.name ref='first_name' }}}
            {{{ InputShort label='Фамилия' name='second_name' validate=validate.name ref='second_name' }}}
            {{{ InputShort label='Телефон'  name='phone' validate=validate.phone ref='phone' }}}
            {{{ InputShort label='Пароль' type='password' name='password' validate=validate.password ref='password' }}}
            {{{ InputShort label='Пароль (еще раз)' type='password' name='password2' validate=validate.password ref='password2' }}}`
        )
    }

    protected render(): string {

        return (`
            <form class="container container-center">
                {{{ FormAuth caption="Регистрация" captionOk="Сохранить" captionCancel="Вернуться на стартовую страничку" pageOk="chat" pageCancel="startPage" onClickOkButton=onLogin children="${this.getChildren()}" ref="form" }}}
            </form>`)
    }
}
