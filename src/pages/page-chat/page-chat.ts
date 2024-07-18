import {IProps, Block} from "../../data/block";

export class PageChat extends Block {

    constructor() {
        const props: IProps = {
            events: {}
        }
        super(props);
    }

    protected render(): string {
        return (`
           <div class="chat-page">
                <div class="chat-page-left">
                    {{{ ChatList }}}
                </div>
                <div class="chat-page-main">
                    {{{ MessageList }}}
                </div>
            </div>
        `)
    }
}
