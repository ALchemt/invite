function escape(button) {
    // Получаем размеры окна браузера
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Получаем размеры кнопки
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;
    
    // Вычисляем максимально допустимые координаты
    const maxX = windowWidth - buttonWidth - 20; // 20px отступ от края
    const maxY = windowHeight - buttonHeight - 20;
    
    // Генерируем случайные координаты
    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));
    
    // Устанавливаем позицию кнопки
    button.style.position = 'fixed';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.zIndex = '9999'; // Чтобы кнопка была поверх всех элементов
    
    // Добавляем плавную анимацию
    button.style.transition = 'all 0.3s ease';
}

function showSuccess() {
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
}

function createStars(i) {
    for (var i; i; i--) {
      drawStars();
    }
  }
  
  function drawStars(){
    var tmpStar = document.createElement('figure')
    tmpStar.className = "star";
    tmpStar.style.top = 100*Math.random()+'%';
    tmpStar.style.left = 100*Math.random()+'%';
    document.getElementById('stars').appendChild(tmpStar);
  }
  
  function selectStars() {
      stars = document.querySelectorAll(".star");
    console.log(stars)
  }
  
  function animateStars() {
        Array.prototype.forEach.call(stars, function(el, i){
        TweenMax.to(el, Math.random() * 0.5 + 0.5, {opacity: Math.random(), onComplete: animateStars});
      });
  }
  
  createStars(200);
  selectStars();
  animateStars();