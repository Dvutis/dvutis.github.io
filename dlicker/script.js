let content1 = document.getElementById("content1")
let content2 = document.getElementById("content2")
let content3 = document.getElementById("content3")
let content4 = document.getElementById("content4")
let content5 = document.getElementById("content5")

content1.addEventListener("click", () => {
    content1.style.display = "block"
    content2.style.display = "none"
    content3.style.display = "none"
    content4.style.display = "none"
    content5.style.display = "none"
})
content2.addEventListener("click", () => {
    content1.style.display = "none"
    content2.style.display = "block"
    content3.style.display = "none"
    content4.style.display = "none"
    content5.style.display = "none"
})
content3.addEventListener("click", () => {
    content1.style.display = "none"
    content2.style.display = "none"
    content3.style.display = "block"
    content4.style.display = "none"
    content5.style.display = "none"
})
content4.addEventListener("click", () => {
    content1.style.display = "none"
    content2.style.display = "none"
    content3.style.display = "none"
    content4.style.display = "block"
    content5.style.display = "none"
})
content5.addEventListener("click", () => {
    content1.style.display = "none"
    content2.style.display = "none"
    content3.style.display = "none"
    content4.style.display = "none"
    content5.style.display = "block"
})

