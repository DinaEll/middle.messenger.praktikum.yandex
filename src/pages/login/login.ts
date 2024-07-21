import {IProps, Block} from "../../data/block";
import {BASE_URLS} from "../../config";
import { signIn} from "../../services/auth";
import {IUser} from "../../modelsInterface/IUser";
import {StoreEvents} from "../../data/store";



export interface ILoginPageProps extends IProps {
    onLogin: (event: Event) => void;
    currentUser?: IUser|null;
}

export class LoginPage extends Block {
  constructor() {
    const onLogin=(event: Event) => {
      event.preventDefault();
      const login = this.refs.formLogin.getRefs()?.login.value();
      const password = this.refs.formLogin.getRefs()?.password.value();

      if (!login) {
        return;
      }
      if (!password) {
        return;
      }
      signIn({login, password}).catch((error)=>console.warn('login',error));

    };
    const props: ILoginPageProps = {
      events:{
        submit:(event: Event)=>{
          onLogin(event);
        }
      },
      onLogin: onLogin,
      currentUser:undefined,
    }
    window.store.on(StoreEvents.Updated, () => {
      this.props.currentUser = window.store.getState().user;
      this.setProps(this.props);
    });
    super(props);
  }
  public get props() {
    return this._props as ILoginPageProps;
  }

  protected render(): string {
    const {currentUser}=this.props;
    if(currentUser===undefined)
      return ` <div class="container container-center">
                 {{{Loader }}}
            </div>`;


    const children: string = `
        {{{ InputShort label='Login' type='text' name='login' validate=validate.login ref='login' }}}
        {{{ InputShort label='Password' type='password' name='password' validate=validate.password ref='password' }}}`;
    return (`
            <form class="container container-center">
                {{{ FormAuth
                        caption="Вход в КотЧат"
                        captionOk="Войти"
                        captionCancel="Зарегистрироваться"
                        onClickOkButton=onLogin
                        children="${children}"
                        ref="formLogin"
                        cancelLink="${BASE_URLS['page-sign-up']}"
                }}}
            </form>`)
  }
}
