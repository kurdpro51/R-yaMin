// Toggle Information Pop-up
// Toggle Information Pop-up and Lock Scroll
function togglePopup(show) {
    const popup = document.querySelector('.pop-up');
    const body = document.body;

    if (show) {
        popup.style.display = 'flex';
        body.classList.add('no-scroll'); // Locks the background
    } else {
        popup.style.display = 'none';
        body.classList.remove('no-scroll'); // Restores scrolling
    }
}
// Image Preview Gallery Logic
document.getElementById('imageInput').addEventListener('change', function(event) {
    const gallery = document.getElementById('previewGallery');
    gallery.innerHTML = ''; // Clear previous previews
    
    const files = event.target.files;
    if (files) {
        [...files].forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imgContainer = document.createElement('div');
                imgContainer.style.cssText = "position:relative; width:80px; height:80px;";
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.cssText = "width:100%; height:100%; object-fit:cover; border-radius:8px; border:1px solid #ddd;";
                
                imgContainer.appendChild(img);
                gallery.appendChild(imgContainer);
            }
            reader.readAsDataURL(file);
        });
    }
});
