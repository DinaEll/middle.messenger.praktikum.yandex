import {IProps,Block} from "../../core/block";
import {IUser} from "../../modelsInterface/IUser";
import {getUserName} from "../../utils/user.utils";


export interface IUserItemProps extends IProps {
    user:IUser,
    icon:'plus'|'delete';
    onClick?:()=>void;
}

export class UserItem extends Block {
    constructor(props: IUserItemProps) {
        super({
            ...props
        })
    }

    public renderForList=this.render;
    public get props(){
        return this._props as IUserItemProps;
    }
    protected render(): string {
        const { icon='',user} = this.props;
        return (`
            <div class='user-item' >
                 <p  class='user-item__name'>${getUserName(user, true)}</p>
                <div class='user-item__icon ${`user-item__icon_` + icon}' id='${user.id || ''}'></div>
            </div>
        `)
    }
}
