// Search bar alert
function search() {
  const query = document.querySelector(".search-bar input").value;
  if (query.trim()) {
    alert(`Searching for: ${query}`);
  }
}

// Age verification
function enterSite() {
  document.getElementById("age-gate").style.display = "none";
  localStorage.setItem("ageVerified", "true");
}

function exitSite() {
  window.location.href = "https://www.google.com";
}

// Auto-hide age gate if already verified
window.onload = () => {
  if (localStorage.getItem("ageVerified") === "true") {
    document.getElementById("age-gate").style.display = "none";
  }
};
