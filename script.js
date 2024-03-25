document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Получение данных из формы
    const formData = new FormData(this);
    const profileData = {};
    for (const [key, value] of formData.entries()) {
      profileData[key] = value;
    }
  
    // Отправка данных на сервер
    fetch('ссылка_на_обработчик_формы', {
      method: 'POST',
      body: JSON.stringify(profileData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Profile created successfully!');
        // Очистка формы после успешной отправки
        this.reset();
      } else {
        alert('Failed to create profile. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });
  