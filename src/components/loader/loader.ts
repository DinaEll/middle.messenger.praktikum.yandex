import {Block} from "../../core/block";

export class Loader extends Block {
    protected render(): string {
        return (`
            <span class="loader"></span>
        `)
    }
}
