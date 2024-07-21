import {Block} from "../../data/block";

export class AllPages extends Block {

  constructor() {
    super({events: {}});
  }

  protected render(): string {
    return (`
            <div class="container container-center">
                <div class="">
                    {{{Link caption="Авторизация"  type='success' page="login" }}}
                    {{{Link caption="Регистрация"  type='success' page="registrationPage" }}}
                    {{{Link caption="Посмотреть страничку пользователя"  type='success' page="pageProfile" }}}
                    {{{Link caption="Изменить страничку пользователя"  type='success' page="changeData" }}}
                    {{{Link caption="Изменить пароль пользователя"  type='success' page="changePassword" }}}
                    {{{Link caption="Чат"  type='success' page="pageChat" }}}
                    {{{Link caption="Посмотреть ошибку 404"  type='success' page="page404" }}}
                    {{{Link caption="Посмотреть ошибку 500"  type='success' page="page500" }}}
                </div>
            </div>
        `)
  }
}
