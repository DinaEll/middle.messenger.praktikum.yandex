import {IProps,Block} from "../../utils/Block";
import {IUser} from "../../modelsInterface/IUser";
import {ALL_VALIDATE_FIELDS, IValidateType} from "../../modelsInterface/IValidateType";

interface IFormProfileProps extends IProps{
    user:IUser,
    withButton:boolean,
    children: string,
    buttonText:string,
    buttonPage:string,
    buttonCancelPage:string,
    onClickOkButton: (event:Event) => void,
    validate:IValidateType,

}
export class FormProfile extends Block {
    constructor(props:IFormProfileProps) {
        props.validate= ALL_VALIDATE_FIELDS;

        super(props);
    }

    protected render(): string {
        const {user,withButton=false,children='',buttonText='',
            buttonCancelPage=''}=this._props as IFormProfileProps;
        const {avatar,first_name,second_name}=user;

        return(`

        <div class="profile">
            <div class="profile-avatar">
                {{{ Avatar image=${avatar} isLoadAvatar=true }}}
                <h2 class="profile-avatar-name">${first_name} ${second_name}</h2>
            </div>
            ${user ?
          `<div class = "profile-main" >
                ${children}
            </div>` : ''
        }
             ${withButton ?
          `<div class="profile__button">
                    {{{ Button caption="${buttonText}" onClick=onClickOkButton }}}
                </div>` :
          `<div class="profile-buttons">
                    {{{Link caption="Изменить профиль пользователя" page="changeData" type='success' linkLine=true  }}}
                    {{{Link caption="Изменить пароль" page="changePassword" type='success' linkLine=true  }}}
                    {{{Link caption="Выход" page="startPage" type='danger' }}}
                </div>`}
            </div>
            <div class="block-cancel">
                {{{ Button type="cancel" page="${buttonCancelPage}" }}}
            </div>
        `)
    }
}
