const cursor = document.getElementById('custom-cursor');

function handleMouseMove(e) {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
}

// Only enable on screens wider than 600px
if (window.innerWidth > 600) {
  document.addEventListener('mousemove', handleMouseMove);
} else {
  // Ensure it's hidden even if JS runs first
  if (cursor) cursor.style.display = 'none';
}

// Optional: handle window resize dynamically
window.addEventListener('resize', () => {
  if (window.innerWidth <= 600) {
    document.removeEventListener('mousemove', handleMouseMove);
    if (cursor) cursor.style.display = 'none';
  } else {
    document.addEventListener('mousemove', handleMouseMove);
    if (cursor) cursor.style.display = 'block';
  }
});