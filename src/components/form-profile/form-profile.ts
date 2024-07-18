import {IProps,Block} from "../../data/block";
import {IUser} from "../../modelsInterface/IUser";
import {ALL_VALIDATE_FIELDS, IValidateType} from "../../modelsInterface/IValidateType";
import {logOut} from "../../services/auth";

interface IFormProfileProps extends IProps {
    user?: IUser | null,
    withButton: boolean,
    children: string,
    buttonText: string,
    onClickOkButton: (event: Event) => void,
    onChangeStateForm: (isEditPassword: boolean, isEditProfile: boolean) => void,
    onLogOut: (event: Event) => void,
    onCancel: (event: Event) => void,
    onClickLink: (event: Event) => void,
    validate: IValidateType,

}

export class FormProfile extends Block {

    constructor(props: IFormProfileProps) {

        props.validate = ALL_VALIDATE_FIELDS;
        props.onLogOut = (event: Event) => {
            event.preventDefault();
            logOut().catch((error) => console.warn(error))
        };
        props.onClickLink = (event: Event) => {
            event.preventDefault();
            event.stopPropagation();
            const id=(event.target as Element).id;
            if(id==='edit_password')this.props.onChangeStateForm(true,false);
            if(id==='edit_profile')this.props.onChangeStateForm(false,true);
        };

        props.user = window.store.getState().user;
        super(props);
    }

    public get props() {
        return this._props as IFormProfileProps;
    }

    protected render(): string {
        const {user, withButton = false, children = '', buttonText = ''} = this.props;
        if (!user) return '';
        const {avatar = '', first_name, second_name} = user;
        return (`

        <div class="profile">
            <div class="profile__avatar">
                {{{ Avatar imageUrl='${avatar || ''}' isLoadAvatar=true }}}
                <h2 class="profile__avatar__name">${first_name} ${second_name}</h2>
            </div>
            ${user ?
            `<div class = "profile__main" >
                ${children}
            </div>` : ''
        }
             ${withButton ?
            `<div class="profile__button">
                    {{{ Button caption="${buttonText}" onClick=onClickOkButton isSubmit=true}}}
                </div>` :
          `<div class="profile__buttons">
                    {{{Link caption="Изменить профиль пользователя" href='' type='success' linkLine=true onClick=onClickLink id='edit_profile'}}}
                    {{{Link caption="Изменить пароль" href='' type='success' linkLine=true onClick=onClickLink id='edit_password'}}}
                    {{{Button caption="Выход" onClick=onLogOut type='link' }}}
                </div>`
        }
             <div class="block-cancel">
                {{{ Button type="cancel"  onClick=onCancel}}}
            </div>
        </div>

        `)
    }
}
