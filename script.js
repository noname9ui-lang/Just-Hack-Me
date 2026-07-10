const passwordBox = document.querySelector("#passwordBox");
const userBox = document.querySelector("#userBox")
const loginPassword = "VerySecretPassword123";
const loginUser = "Wynle";
const loginHintOpen = document.querySelector("#loginHintOpen");
const loginHint = document.querySelector("#loginHint");

function hideElement(element) {
    element.style.display = "none"
};

function showElement(element) {
    element.style.display = "block"
};

hideElement(loginHint)

loginHintOpen.addEventListener("click", function() {
    if (loginHint.style.display === "block") {
        hideElement(loginHint);
    }
    else {
        showElement(loginHint);
    }
});

passwordBox.addEventListener("input", function() {
    if (passwordBox.value === loginPassword && userBox.value === loginUser) {
        console.log("Nice!")
    }
});