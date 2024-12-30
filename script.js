const bars = document.getElementById("bars");
const nitems =document.getElementById("nitems");
function test() {
    console.log("clicked")
}
bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    nitems.classList.toggle("come");
});

// ------------------------------ Three ------------------------------


