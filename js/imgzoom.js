document.addEventListener('DOMContentLoaded', () => {
  const zoomModalEl = document.getElementById('imageZoomModal');
  const zoomModal = new bootstrap.Modal(zoomModalEl);
  const zoomImage = document.getElementById('zoomImage');
  const zoomClose = document.getElementById('zoomClose');

  document.querySelectorAll('img').forEach(img => {

    // ❌ исключаем svg, иконки, логотипы (если будут)
    if (img.closest('svg')) return;

    img.addEventListener('click', e => {
      e.stopPropagation();

      // ❌ не открываем пустые / служебные изображения
      if (!img.src) return;

      zoomImage.src = img.dataset.full || img.src;
      zoomModal.show();
    });
  });

  zoomClose.addEventListener('click', () => zoomModal.hide());

  zoomImage.addEventListener('click', () => zoomModal.hide());
});