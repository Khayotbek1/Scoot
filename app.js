const toggleBtn = document.querySelector(".toggle");
const nav = document.querySelector(".sitenav");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});
