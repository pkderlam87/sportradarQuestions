const widthBox = document.querySelector("#leftBox");
const heightBox = document.querySelector("#rightBox");
const message = document.querySelector("#message");

let widthBrowser = window.innerWidth;
widthBox.innerHTML = `The width of the window is ${widthBrowser} px`;
let heightBrowser = window.innerHeight;
heightBox.innerHTML = `The height of the window is ${heightBrowser}px`;
/**
 * This function gets the window width and height if it changes and shows the values in the boxes.
 */
function widthHeightWindow() {
    let newWidthBrowser = 0;
    let newHeightBrowser = 0;
    if (widthBrowser !== newWidthBrowser || heightBrowser !== newHeightBrowser) {
        newWidthBrowser = widthBrowser;
        newHeightBrowser = heightBrowser;
        window.addEventListener('resize', function (event) {
            newWidthBrowser = window.innerWidth;
            newHeightBrowser = window.innerHeight;
            widthBox.innerHTML = `The width of the window is ${newWidthBrowser} px`;
            heightBox.innerHTML = `The height of the window is ${newHeightBrowser} px`;
        });
    }
}
widthHeightWindow();
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
