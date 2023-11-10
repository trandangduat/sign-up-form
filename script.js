let header = document.querySelector("#right-section > #header");
let headerTextContainer = document.querySelector("#right-section > #header > h1");
let submitButton = document.getElementById("submit");
let confirmPasswordStatus = document.querySelector("label[for='password-confirm'] i");

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
            let allInput = document.querySelectorAll("input");
            let countFilledInputs = 0;
            for (let i = 0; i < allInput.length; i++) {
                countFilledInputs += (allInput[i].value != '');
            }
            confirmPasswordStatus.className = (confirmPassword() ? "fa-solid fa-check good" : "fa-solid fa-xmark");
            if (countFilledInputs == allInput.length) {
                submitButton.setAttribute("class", "active");
                submitButton.style.zIndex = "1";
            }
        });
    });
}

// Show a tooltip with password rules when hovering on
// the small 'i' icon next to the Password label
function tooltipPasswordRules() {
    let tooltipIndicator = document.querySelector("label[for='password'] > i");
    let tooltipContainer = document.createElement('p');
    tooltipContainer.setAttribute("id", "tooltip");
    tooltipContainer.innerHTML = "Password must at least:<br> - Have 8 characters<br> - Have 1 digit and 1 letter";
    document.body.appendChild(tooltipContainer);
    tooltipIndicator.addEventListener("mouseover", () => {
        tooltipContainer.style.display = 'block';
        document.addEventListener('mousemove', (event) => {
            const x = event.clientX;
            const y = event.clientY;
            tooltipContainer.style.left = x + 'px';
            tooltipContainer.style.top = (y + 20) + 'px';
        });
    });
    tooltipIndicator.addEventListener("mouseout", () => {
        tooltipContainer.style.display = 'none';
    });
}

//
typingEffect(headerTextContainer);
tooltipPasswordRules();
validate();