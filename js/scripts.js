const widthBox = document.querySelector("#leftBox");
const heightBox = document.querySelector("#rightBox");

let widthBrowser = window.innerWidth;
widthBox.innerHTML = "The width of the window is" + " " + widthBrowser + " " + "px";
let heightBrowser = window.innerHeight;
heightBox.innerHTML = "The height of the window is" + " " + heightBrowser + " " + "px";
/**
 * This function get the window width and height if it changes and show the values in the boxes 
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
            widthBox.innerHTML = "The width of the window is" + " " + newWidthBrowser + " " + "px";
            heightBox.innerHTML = "The height of the window is" + " " + newHeightBrowser + " " + "px";
        });
    }
}
widthHeightWindow();
