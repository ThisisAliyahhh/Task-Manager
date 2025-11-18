const buttonTemplate = document.createElement("template");
buttonTemplate.innerHTML = `
    <style>
        @import url("./components/button/button.css");
    </style>
    <button class="button" part="button">
        <slot name="icon"></slot>
        <slot name="label"></slot>
    </button>
`
;

class Button extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode: "open"});
        const clone = buttonTemplate.content.cloneNode(true);
        shadowRoot.append(clone);
    }

    // static get customAttributes(){
    //     //c = color, bc = background r = border radius
    //     return ["c"]
    // }
}

window.customElements.define(`app-button`, Button);