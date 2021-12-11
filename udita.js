window.addEventListener("scroll", () => {
    if(window.scrollY > 200) {
        document.getElementById("headerContainer").style.background = "var(--alt-red-color)";
        document.getElementById("headerContainer").style.color = "white";
    } else {
        document.getElementById("headerContainer").style.background = "var(--main-dark-color)";
        document.getElementById("headerContainer").style.color = "var(--alt-red-color)";
    }
});