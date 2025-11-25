const buttonTemplate = document.createElement("template");
buttonTemplate.innerHTML = `
    <style>
        @import url(/assets/CSS/reset.css);
        @import url("/components/button/button.css");
    </style>
    <button class="button" part="button">
        <slot name="button-icon"></slot>
        <slot name="button-label"></slot>
    </button>
`
;

class Button extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.append(buttonTemplate.content.cloneNode(true));
    }

    static get observedAttributes(){
        return ["type"];
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        const button = this.shadowRoot.querySelector(`button`);
        if (attrName.lowerCase === `type`){
            button.type = newVal;
        }
    }
}

window.customElements.define(`app-button`, Button);