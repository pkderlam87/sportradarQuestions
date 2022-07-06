const widthBox = document.querySelector("#leftBox");
const heightBox = document.querySelector("#rightBox");
const message = document.querySelector("#message");


displayOn();
/**
 * This function gets the window width and height if it changes and shows the values in the boxes.
 */
window.addEventListener('resize', function (event) {
    displayOn();
});

function displayOn() {
    widthBox.innerHTML = `The width of the window is ${window.innerWidth} px`;
    heightBox.innerHTML = `The height of the window is ${window.innerHeight} px`;
}

/**
 * This function disables the right click in the left box and shows an alert.
 */
(function disableRightClick() {
    widthBox.addEventListener('contextmenu', function (event) {
        event.preventDefault();
        alert(`Right Click is disabled in the left box`);
    })
})();
/**
 * This function disables the left click in the right box and shows an alert.
 */
(function disableLeftClick() {
    heightBox.addEventListener('click', function (event) {
        event.preventDefault();
        alert(`Left Click is disabled in the right box`);
    })
})();
