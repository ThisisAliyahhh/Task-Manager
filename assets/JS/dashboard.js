import "/components/button/button.js"
import "/components/logo/logo.js"

const pages = document.querySelectorAll(`.sidebar__button`);
const pageFile = document.querySelector(`.dashboard__page`); 
// the function generates the page path
const pagePath = pageName => {
    return  `/pages/${pageName}/${pageName}.html`
}

pages.forEach((page) => {
    page.addEventListener(`click`, (event) => {
        //get the text content of tags with the slot name button-label and converts it to lowercase
        let pageName = page.querySelector(`[slot="button-label"]`).textContent.toLowerCase();
        if (pageName === `dashboard`){
            pageName = `summary`;
        }

        //generate the file path
        const path = pagePath(pageName);
        console.log(path)
        // return pagePath(pageName);

        fetch(path)
            .then((response) => {
                return response.text()
            })
            .then((template) => {
                pageFile.innerHTML = template;
            })
            .catch(()=>{
                pageFile.innerHTML = `<h3>Not Found</h3>`;
            })
            })

});


// console.log(pageFile.get(`.sidebar__button`));

// const accessFile = accessPageFile.getAttribute(`data-access`);



// console.log(page)