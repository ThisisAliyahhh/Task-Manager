import "/components/input-box/input-box.js";

const accessPageFile = document.querySelector(`[data-access]`);
const loginButton = document.querySelector(`.login`);
const signupButton = document.querySelector(`.signup`);
const accessHeader = document.querySelector(`.content__card__title`);
const accessDescription = document.querySelector(`.content__card__description`);

function loginAndSignupToggle(){
    loginButton.addEventListener(`click`, (event) => {
        event.preventDefault;
        event.stopPropagation;
        const accessButton = document.querySelector(`.yellow__button`).querySelector(`[slot="button-label"]`);
        accessButton.textContent = `Next Step`;
        accessHeader.textContent = `Welcome Back!`;
        accessDescription.textContent = `Enter your details to access your account`;
        loginButton.style.backgroundColor = `#ffffff`;
        signupButton.style.backgroundColor = `transparent`;

        // removes FullName input field
        const fullNameInput = document.querySelector(`.fullname`);
        fullNameInput.remove();

        const passwordMessage = document.querySelector(`input-box[label="Password"]`).querySelector(`[slot="message"]`);
        passwordMessage.remove();
    })

    signupButton.addEventListener(`click`, (event) => {
        event.preventDefault;
        event.stopPropagation;
        // creating new input-box 
        const accessPage = document.querySelector(`.access__content`);
        const accessInputContainer = document.createElement(`div`);
        accessInputContainer.classList.add(`access__input__container`, `fullname`);

        const inputBox = document.createElement(`input-box`);
        inputBox.setAttribute(`label`, `FullName`);
        inputBox.setAttribute(`type`, `text`);
        inputBox.setAttribute(`placeholder`, `John Doe`);
        inputBox.setAttribute(`required`, `true`);
        const inputIcon = document.createElement(`img`);
        inputIcon.setAttribute(`slot`, `input-icon`);
        inputIcon.setAttribute(`src`, `/assets/icons/user.svg`);
        inputBox.append(inputIcon);
        accessInputContainer.append(inputBox);

        accessPage.prepend(accessInputContainer);
        // End

        // adds password message
        const passwordMessage = document.createElement(`p`);
        passwordMessage.setAttribute(`slot`, `message`);
        passwordMessage.textContent = `Password must be at least 6 characters long`;
        const passwordInputBox = document.querySelector(`input-box[label="Password"]`)
        passwordInputBox.append(passwordMessage);

        //changes some contents
        accessHeader.textContent = `Join TaskMaster`;
        accessDescription.textContent = `Create an account to boost your productivity`;
        signupButton.style.backgroundColor = `#ffffff`;
        loginButton.style.backgroundColor = `transparent`;
        const accessButton = document.querySelector(`.yellow__button`).querySelector(`[slot="button-label"]`);
        accessButton.textContent = `Create Account`;
    })
}

const accessFile = accessPageFile.getAttribute(`data-access`);
fetch(accessFile)
    .then((response) => {
        return response.text()
    })
    .then((template) => {
        accessPageFile.innerHTML = template;
    })
    .catch(()=>{
        accessPageFile.innerHTML = `<h3>Not Found</h3>`;
    })


loginAndSignupToggle();
