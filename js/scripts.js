const widthBox = document.querySelector("#leftBox");
const heightBox = document.querySelector("#rightBox");


window.addEventListener('resize', function (event) {
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;
    widthBox.innerHTML = "The width of the window is" + " " + newWidth + " " + "px";
});
/*let widthBrowser = window.innerWidth;
function widthBrowserWindow() {
    let newWidthBrowser = 0;
    if (widthBrowser !== newWidthBrowser) {
        let newWidthBrowser = widthBrowser;
        widthBox.innerHTML = "The width of the window is" + " " + widthBrowser + " " + "px";
    }
}
widthBrowserWindow();*/
