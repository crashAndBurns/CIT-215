function toggleImages() {
    let imageElement = document.getElementsByTagName("img")[0];

    if (imageElement.getAttribute("src") === "arthurSaxons.jpg") {
        imageElement.setAttribute("src", "deathOfArthur.png");
        imageElement.setAttribute("alt", "The Death of Arthur");
    } else {
        imageElement.setAttribute("src", "arthurSaxons.jpg");
        imageElement.setAttribute("alt", "King Arthur Fighting the Saxons");
    }
}

function onMouseOver(itemToHighlight) {
    let elementToHightlight = document.getElementsByTagName("li")[itemToHighlight];
    elementToHightlight.style.backgroundColor = "red";
}
function onMouseOut(itemToClear) {
    let elementToClear= document.getElementsByTagName("li")[itemToClear];
    elementToClear.style.backgroundColor = "rgb(242, 220, 190)";
}