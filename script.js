document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('icon-sun');
  const moonIcon = document.getElementById('icon-moon');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('dark-theme')) {
      sunIcon.style.display = 'inline';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'inline';
    }
  });
});

if ('Notification' in window) {
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      new Notification('Welcome to Portal: Aperture Redux!', {
        body: 'Thanks for visiting the website, stay tuned for mod updates!',
        icon: 'icon.png'
      });
    }
  });
} else {
  console.log('This browser does not support desktop notifications.');
}
