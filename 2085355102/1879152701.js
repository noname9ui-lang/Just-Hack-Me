const passwordBox = document.querySelector("#passwordBox");
const userBox = document.querySelector("#userBox")
const loginPassword = "VerySecretPassword123";
const loginUser = "Wynle";
const loginHintOpen = document.querySelector("#loginHintOpen");
const loginHint = document.querySelector("#loginHint");

function hideElement(element) {
    element.style.display = "none"
}

function showElement(element) {
    element.style.display = "block"
}

function nextLevel(currentLevel) {
    window.location.replace("7340670732.html")
}

hideElement(loginHint)

loginHintOpen.addEventListener("click", function() {
    if (loginHint.style.display === "block") {
        hideElement(loginHint);
    }
    else {
        showElement(loginHint);
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        if (passwordBox.value === loginPassword && userBox.value === loginUser) {
            console.log("Nice!")
            nextLevel(1);
        }
    }
});
