function myScrollLeft() {
    document.getElementById("story-list").scrollLeft -= 5;
}
function myScrollRight() {
    document.getElementById("story-list").scrollLeft += 5;
}
function displayScrollLeftBtn() {
    if(document.getElementById("story-list").scrollLeft !== 0) {
        document.getElementById("btn-left-scroll").style.display = "flex";
    }
    else {
        document.getElementById("btn-left-scroll").style.display = "none";
    }
}