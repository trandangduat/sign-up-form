let header = document.querySelector("#right-section > #header");
let headerTextContainer = document.querySelector("#right-section > #header > h1");
let submitButton = document.getElementById("submit");

function typingEffect (textContainer) {
    let text = textContainer.innerHTML;
    textContainer.innerHTML = '';
    function update() {
        if (text.length == 0) {
            return;
        }
        textContainer.innerHTML += text[0];
        text = text.slice(1);
        setTimeout(update, 100);
    }
    setTimeout(update, 1000);
}

function confirmPassword() {
    let passwords = document.querySelectorAll("input[type='password']");
    return (passwords[0].value == passwords[1].value);
}

function validate() {
    document.querySelectorAll("input").forEach((e) => {
        e.addEventListener("blur", () => {
            if (e.value != '') {
                // let inputName = e.getAttribute("name");
                // let inputLabel = document.querySelector(`label[for=${inputName}]`);
                // inputLabel.setAttribute("class", "filled");
            }
            let allInput = document.querySelectorAll("input");
            let countFilledInputs = 0;
            for (let i = 0; i < allInput.length; i++) {
                countFilledInputs += (allInput[i].value != '');
            }
            if (countFilledInputs == allInput.length) {
                if (confirmPassword()) {
                    submitButton.setAttribute("class", "active");
                } else {
                    console.log("password not match");
                }
            }
        });
    });
}

typingEffect(headerTextContainer);
validate();

