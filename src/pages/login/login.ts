import {IProps,Block} from "../../utils/Block";

export interface ILoginPageProps extends IProps {
    onLogin:(event:Event)=>void
}
export class Login extends Block {
    constructor() {
        const props:ILoginPageProps={
            events:{},
            onLogin: (event:Event) => {
                event.preventDefault();
                const login =  this.refs.formLogin.getRefs()?.login.value();
                const password =  this.refs.formLogin.getRefs()?.password.value();

                console.log({
                    login,
                    password
                })
            }
        }

        super(props);
    }

    protected render(): string {
        const children:string=`
        {{{ InputShort label='Логин' type='text' name='login' validate=validate.login ref='login' }}}
        {{{ InputShort label='Пароль' type='password' name='password' validate=validate.password ref='password' }}}`
        return(`
            <form class="container container-center">
                {{{ FormAuth caption="Авторизация" captionOk="Авторизоваться" captionCancel="Вернуться на стартовую страничку" pageOk="chat" pageCancel="startPage" onClickOkButton=onLogin children="${children}" ref="formLogin" }}}
            </form>`)
    }
}
