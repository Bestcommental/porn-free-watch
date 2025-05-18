// Open a video (mock function)
function openVideo(videoId) {
    alert(`Playing video: ${videoId}`);
    // In a real app, this would load a video player page
}

// Search functionality
document.querySelector('.search-bar button').addEventListener('click', () => {
    const query = document.querySelector('.search-bar input').value;
    alert(`Searching for: ${query}`);
});

// Toggle sidebar on mobile (optional)
// You can expand this with more features like dark mode, etc.
