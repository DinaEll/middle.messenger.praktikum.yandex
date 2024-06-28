import{IProps,Block} from "../../utils/Block";

interface IErrorProps extends IProps{
    errorNumber: string,
    pageGoBack: string,
    errorText: string,
}

export class Error extends Block {
    constructor(props: IErrorProps) {
        super(props);
    }
    protected render(): string {
        const { errorNumber='',pageGoBack='startPage',errorText=''} = this._props as IErrorProps;
        return (`
            <div class="error">
                <h1 class="error-number">${errorNumber}</h1>
                <h2 class="error-text">
                </h2>
                <h2 class="error-text">
                   ${errorText}
                </h2>
                {{{ Link page='${pageGoBack}' caption='На стартовую страничку'  }}}
            </div>
        `)
    }
}
