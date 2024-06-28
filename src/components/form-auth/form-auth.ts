import {IProps,Block} from "../../utils/Block";
import {ALL_VALIDATE_FIELDS, IValidateType} from "../../modelsInterface/IValidateType";

interface IFormAuthProps extends IProps {
    caption: string,
    children: string,
    onClickOkButton: (event:Event) => void,
    onClickCancelButton: (event:Event) => void,
    captionOk: string,
    captionCancel: string,
    pageOk:string,
    pageCancel:string,
    validate:IValidateType,
    onClickOk:(event:Event) => void,
}
export class FormAuth extends Block {
    constructor(props:IFormAuthProps) {
        props.validate= ALL_VALIDATE_FIELDS;
        super(props);
    }

    protected render(): string {
        const {caption='Login',children='',onClickCancelButton,captionOk,captionCancel,pageCancel}=this._props as IFormAuthProps;
        return(`
            <div class="container-form container-shadow">
            <h2 class="container-form-header">
                ${caption}
            </h2>
            <div>
                ${children}
            </div>
            <div class="container-form-buttons">
                {{{ Button caption="${captionOk}"  onClick=onClickOkButton }}}
                {{{ Link caption="${captionCancel}" page="${pageCancel}" onClick=${onClickCancelButton} }}}
            </div>
        </div>
        `)
    }
}
