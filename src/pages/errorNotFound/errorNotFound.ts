import {Block} from "../../utils/Block";

export class ErrorNotFound extends Block {
    constructor() {
        super({events:{}});
    }

   protected render(): string {
        return (`
            <div class="container container-center">
                {{{ Error errorNumber="404" errorText="Не туда попали" page="chatPage" }}}
            </div>`)
    }
}
