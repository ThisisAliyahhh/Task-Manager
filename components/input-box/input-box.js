const inputTemplates = document.createElement("template");

inputTemplates.innerHTML = `
    <style>
        @import url(/assets/CSS/reset.css);
        @import url("/components/input-box/input-box.css");

    </style>
    <div class="input-box__container">
        <label>
            <span class="label"></span>
            <div class="input__container">
                <slot name="input-icon"></slot>
                <input type="text" />
            </div>
            <slot name="message"></slot>
        </label>
    </div>
`

class Input extends HTMLElement {
    constructor (){
        super ();
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(inputTemplates.content.cloneNode(true));

    }


    static get observedAttributes(){
        return [`label`, `type`, `placeholder`, `required`];
    }

    get label(){
        return this.getAttribute(`label`);
    }

    set label(value){
        this.setAttribute(`label`, value);
    }

    attributeChangedCallback(attrName, oldVal, newVal){
        const labelName = this.shadowRoot.querySelector(`.label`);
        const inputField = this.shadowRoot.querySelector(`input`);
        if (attrName.toLowerCase() === `label`){
            labelName.textContent = newVal;
            inputField.name = newVal;
        }

        if (attrName.toLowerCase() === `type`){
            inputField.type = newVal;
        }

        if (attrName.toLowerCase() === `placeholder`){
            inputField.placeholder = newVal;
        }

        if (attrName.toLowerCase() === `required`){
            inputField.required = true;
            if (inputField.required === true){
                labelName.innerHTML += `<sup>*</sup>`;
            }
        }
    }
}


customElements.define(`input-box`, Input);