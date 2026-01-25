function togglePopup(show) {
    const popup = document.querySelector('.pop-up');
    
    if (show) {
        popup.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    } else {
        popup.style.display = 'none';
        document.body.style.overflow = 'auto';   
    }
}
const imageInput = document.getElementById('imageInput');
  const gallery = document.getElementById('previewGallery');

  imageInput.onchange = function(event) {
    gallery.innerHTML = '';

    const files = event.target.files;

    if (files) {
        Array.from(files).forEach(file => {
            const reader = new FileReader();

            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '150px';
                img.style.height = '150px';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '8px';
                
                gallery.appendChild(img);
            };

            reader.readAsDataURL(file);
        });
    }
  };