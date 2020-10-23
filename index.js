"use strict";
// Function to set the view height for mobile screens, since "height: 100vh" causes unexpected issues
function setViewHeight() {
    // We get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document (i.e :root{--vh;} in CSS)
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents)
}
setViewHeight();
// We listen to the resize event
window.addEventListener("resize", () => {
    // We execute the same script as before
    setViewHeight();
});
// Define tooltip
const tooltip = document.querySelector(".map-tooltip");
// Define the "paths" array of path elements
const paths = document.querySelectorAll(".svg-path");
// Loop through each path and attach different events
paths.forEach((path) => {
    // Attach mousenter event to the path and cause the tooltip to appear with the text from the "title" attribute as its content
    path.addEventListener("mouseenter", () => {
        tooltip.innerHTML = path.getAttribute("title");
        tooltip.style.display = "block";
    });
    // Attach mousemove event to the path and set the tooltip's position to the horizontal and vertical position of the "mousemove event" (We can use "top" and "left" because the tooltip's position is "absolute")
    // The clientX/clientY read-only property of the MouseEvent interface provides the horizontal/vertical coordinate within the application's viewport at which the event occurred (as opposed to the coordinate within the page).
    path.addEventListener("mousemove", (e) => {
        tooltip.style.top = `${e.clientY}px`;
        tooltip.style.left = `${e.clientX}px`;
    });
    // Attach mouseleave event to the path and set the display of the tooltip to none
    path.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
    });
});
