const summaryBoxTemplate = document.createElement(`template`);

summaryBoxTemplate.innerHTML = `
    <style>
        @import url(/assets/CSS/reset.css);
        @import url(/components/summary-box/summary-box.css);
    </style>

    <div class="summary__container">
        <div class="summary__header">
            <slot name="summary__heading" class="summary__heading">Active Tasks</slot>
            <slot name="summary__logo"></slot>
        </div>
        <div class="summary__info">
            <slot name="summary__data" class="summary__data">0</slot>
            <slot name="summary__title" class="summary__title">0 completed</slot>
        </div>
    </div>
`

class SummaryBox extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:`open`}).append(summaryBoxTemplate.content.cloneNode(true));
    }
}

customElements.define(`summary-box`, SummaryBox);