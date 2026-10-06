const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");

surpriseBtn.addEventListener("click", () => {
  surprise.classList.toggle("show");
  surpriseBtn.textContent = surprise.classList.contains("show")
    ? "close the surprise 🤎"
    : "click for a little surprise 🍌";
});
