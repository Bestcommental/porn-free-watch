// Sample Videos Data
const videos = [
    { id: 1, title: "Orange Sunset in 4K", views: "120K", channel: "Nature Vibes" },
    { id: 2, title: "Coding with Orange Theme", views: "45K", channel: "Dev Tips" },
    { id: 3, title: "Orange Juice Recipe", views: "80K", channel: "Cooking Master" },
    { id: 4, title: "Dark UI Design Tutorial", views: "95K", channel: "Design Hub" },
    { id: 5, title: "Orange Car Transformation", views: "1.2M", channel: "Auto Works" },
    { id: 6, title: "Night Coding Session", views: "30K", channel: "Code Flow" }
];

// Load videos on page load
document.addEventListener('DOMContentLoaded', () => {
    renderVideos();
    setupUploadModal();
});

// Render videos to grid
function renderVideos() {
    const grid = document.querySelector('.video-grid');
    grid.innerHTML = '';

    videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <img src="https://via.placeholder.com/300x170/333333/ff7b25?text=${encodeURIComponent(video.title)}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p>${video.channel} • ${video.views} views</p>
        `;
        card.onclick = () => alert(`Playing: ${video.title}`);
        grid.appendChild(card);
    });
}

// Upload Modal Logic
function setupUploadModal() {
    const modal = document.getElementById('uploadModal');
    const btn = document.getElementById('uploadBtn');
    const closeBtn = document.querySelector('.close');
    const form = document.getElementById('uploadForm');
    const videoInput = document.getElementById('videoUpload');
    const preview = document.getElementById('videoPreview');

    // Open modal
    btn.onclick = () => modal.style.display = 'flex';

    // Close modal
    closeBtn.onclick = () => {
        modal.style.display = 'none';
        preview.innerHTML = '';
        form.reset();
    };

    // Close when clicking outside
    window.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            preview.innerHTML = '';
            form.reset();
        }
    };

    // Preview video before upload
    videoInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            preview.innerHTML = `<video controls src="${videoUrl}"></video>`;
        }
    };

    // Form submission (mock)
    form.onsubmit = (e) => {
        e.preventDefault();
        alert('Video uploaded successfully (mock)');
        modal.style.display = 'none';
        form.reset();
        preview.innerHTML = '';
    };
}
