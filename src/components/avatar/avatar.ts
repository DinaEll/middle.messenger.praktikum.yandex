import {IProps, Block} from "../../data/block";
import modalController from "../../data/modal-controller";
import { ModalAvatar} from "../index";
import {BASE_RESOURCES_URL} from "../../config";

interface IAvatarProps extends IProps {
    size: 'sm' | 'md',
    isLoadAvatar: boolean,
    onClickLoadAvatar: () => void,
    imageUrl: string
}

export class Avatar extends Block {
    constructor(props: IAvatarProps) {
        super({
            ...props,
            events: {
                click: () => {
                    if(!props.isLoadAvatar)return;
                    modalController.addModal((new ModalAvatar({
                        oldAvatar:window.store.getState().user?.avatar||'',
                        type:'user'
                    })) as unknown as Block);
                    modalController.openModal();
                }
            }
        })
    }

    public get props(){
        return this._props as IAvatarProps;
    }
    protected render(): string {
        const {size = 'md', isLoadAvatar = false, imageUrl = ''} = this.props;
        return (`
            <div class="avatar ${size}">
                ${imageUrl&&imageUrl.trim()!=='null'? `
                    <img src='${BASE_RESOURCES_URL+imageUrl}' alt="image avatar" class="avatar__image"/>` : ``}
                ${isLoadAvatar ? `
                    <div class="avatar__hover">
                        <div class="avatar__hover__text">Добавить новый Аватар</div>
                    </div>` : ""}
            </div>
                 `)
    }
}
