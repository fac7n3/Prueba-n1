const menudiv = document.getElementById("menudiv")
const menuhamb = document.getElementById("menuhamb")
menuhamb.addEventListener("mouseenter", () => {
    menudiv.classList.remove("hidden")
})
menuhamb.addEventListener("mouseleave", () => {
    menudiv.classList.add("hidden")
})