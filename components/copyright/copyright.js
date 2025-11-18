const copyrightTemplate = document.createElement(`template`);
copyrightTemplate.innerHTML = `
    <style>
        @import url("./components/copyright/copyright.css");
    </style>

    <div>
        <p class="text terms">By continuing, you agree to our <a href="#" class="link">Terms of Service</a> & <a href="#" class="link">Privacy Policy</a></p>
        <p class="text copy">&copy 2024 TaskMaster | Made for University Students</p>
    </div>
`
;

class Copyright extends HTMLElement {
    constructor(){
        super();
        const shadowRoot = this.attachShadow({mode:`open`});
        const clone = copyrightTemplate.content.cloneNode(true);
        shadowRoot.append(clone);
    }
}

window.customElements.define(`copy-right`, Copyright);