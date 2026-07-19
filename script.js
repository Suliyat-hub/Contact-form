document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const checkbox = document.getElementById("checkbox");
    const queryError = document.getElementById("query-error");
    const checkboxError = document.getElementById("checkbox-error");
    const successBox = document.getElementById("success-box");
    const generalLabel = document.getElementById("label-general");
    const supportLabel = document.getElementById("label-support");
    const generalRadio = document.getElementById("general");
    const supportRadio = document.getElementById("support");

    function setError(element, message) {
        element.textContent = message;
        element.style.display = "block";
    }

    function clearError(element) {
        element.textContent = "";
        element.style.display = "none";
    }

    function validateEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function updateBackground(type) {
        generalLabel.classList.toggle("selected", type === "general");
        supportLabel.classList.toggle("selected", type === "support");
    }

    generalRadio.addEventListener("change", function () {
        updateBackground("general");
    });

    supportRadio.addEventListener("change", function () {
        updateBackground("support");
    });

    form.addEventListener("submit", function (event) {
        let isValid = true;

        if (!firstName.value.trim()) {
            setError(document.getElementById("first-name-error"), "This field is required.");
            isValid = false;
        } else {
            clearError(document.getElementById("first-name-error"));
        }

        if (!lastName.value.trim()) {
            setError(document.getElementById("last-name-error"), "This field is required.");
            isValid = false;
        } else {
            clearError(document.getElementById("last-name-error"));
        }

        if (!email.value.trim() || !validateEmail(email.value)) {
            setError(document.getElementById("email-error"), "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError(document.getElementById("email-error"));
        }

        if (!generalRadio.checked && !supportRadio.checked) {
            setError(queryError, "Please select a query type.");
            isValid = false;
        } else {
            clearError(queryError);
        }

        if (!message.value.trim()) {
            setError(document.getElementById("message-error"), "This field is required.");
            isValid = false;
        } else {
            clearError(document.getElementById("message-error"));
        }

        if (!checkbox.checked) {
            setError(checkboxError, "To submit this form, please consent to being contacted.");
            isValid = false;
        } else {
            clearError(checkboxError);
        }

        if (!isValid) {
            event.preventDefault();
            successBox.style.display = "none";
            return;
        }

        event.preventDefault();
        successBox.textContent = "Thank you! Your message has been submitted successfully.";
        successBox.style.display = "flex";
        form.reset();
        generalLabel.classList.remove("selected");
        supportLabel.classList.remove("selected");
    });
});
