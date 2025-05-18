function search() {
  const query = document.querySelector(".search-bar input").value;
  if (query.trim()) {
    alert(`Searching for: ${query}`);
    // Add custom search logic or redirection here
  }
}
