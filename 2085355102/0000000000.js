var clock = 0;

function addSpan(text, parent, type) {
    const parentElem = document.querySelector(parent);
    const newSpan = document.createElement(type);

    newSpan.textContent = text;
    parentElem.append(newSpan);
}
function breakLine(parent) {
    const parentElem = document.querySelector(parent);
    const br = document.createElement("span");

    br.innerHTML = "<br>"
    parentElem.append(br);

}

function addVideo(src, width, height, parent) {
    const parentElem = document.querySelector(parent);
    const gif = document.createElement("img");

    gif.src = src
    gif.alt = ""
    gif.style.width = width+"px"
    gif.style.height = height+"px"
    parentElem.append(gif);
}

function tick() {
    clock = clock + 1
    console.log(clock)
    if (clock >= 30 && !(clock > 30)) {
        addSpan("Go away.", "#nothingHere", "span")
        breakLine("#nothingHere")
        breakLine("#nothingHere")
    }
    if (clock >= 60 && !(clock > 60)) {
        addSpan("Alr fine... I'll bring up the files.", "#nothingHere", "span")
        breakLine("#nothingHere")
        addSpan("This might take a while.", "#nothingHere", "span")
        breakLine("#nothingHere")
        breakLine("#nothingHere")
    }
    if (clock >= 120 && !(clock > 120)) {
        addSpan("Oki. i found the files. ", "#nothingHere", "span")
        breakLine("#nothingHere")
        addSpan("Here you go :3", "#nothingHere", "span")
        breakLine("#nothingHere")
        breakLine("#nothingHere")
    }
    if (clock >= 121 && !(clock > 121)) {
        addVideo("0220205083/7502681011.gif", 320, 320, "#nothingHere")
    }
}

setInterval(tick, 1000)
