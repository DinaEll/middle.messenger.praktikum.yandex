import  {IProps,Block} from "../../data/block";

interface IButtonProps extends IProps {
    type: 'arrow' | 'dots' | 'paperclip' | 'cancel' | 'number' | 'close',
    isSubmit?: boolean,
    caption: string,
    page: string,
    onClick: () => void
}

export class Button extends Block {
    constructor(props: IButtonProps) {
        super({
            ...props,
            events: {
                click: props.onClick || (() => {
                })
            }
        })
    }

    protected render(): string {
        const {isSubmit = false, type = '', caption = '', page = ''} = this._props as IButtonProps;
        return (`
            <button type='${isSubmit ? 'submit' : `button`}' class="button ${type ? "button-" + type : ""}"
            ${page ? `page="${page}"` : ''}>
                ${caption}
            </button>
        `)
    }
}
