document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enterBtn");
  const exitBtn = document.getElementById("exitBtn");
  const gate = document.getElementById("ageGate");

  if (localStorage.getItem("ageConfirmed") === "true") {
    gate.style.display = "none";
  }

  enterBtn.addEventListener("click", () => {
    localStorage.setItem("ageConfirmed", "true");
    gate.style.opacity = "0";
    gate.style.pointerEvents = "none";
    setTimeout(() => gate.style.display = "none", 500);
  });

  exitBtn.addEventListener("click", () => {
    window.location.href = "#";
  });
});

function search() {
  const query = document.querySelector(".search-bar input").value;
  if (query.trim()) {
    alert(`Searching for: ${query}`);
  }
}
