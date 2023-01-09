const toggleBtn = document.querySelector(".toggle");
const nav = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
    console.log(1)
});
