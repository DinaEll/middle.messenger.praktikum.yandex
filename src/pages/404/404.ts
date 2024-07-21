import {Block} from "../../data/block";

export class Page404 extends Block {
    constructor() {
        super({events:{}});
    }

   protected render(): string {
        return (`
            <div class="container container-center">
                {{{ Error errorNumber="404" errorText="Не туда попали" page="pageChat" }}}
            </div>`)
    }
}
