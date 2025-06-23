window.onload = () => {
  // Анимация падающих черепов
  setInterval(() => {
    const skull = document.createElement("div");
    skull.className = "skull";
    skull.textContent = Math.random() > 0.5 ? "💀" : "☠️";
    skull.style.left = Math.floor(Math.random() * 100) + "vw";
    skull.style.fontSize = 30 + Math.random() * 20 + "px";
    document.body.appendChild(skull);
    setTimeout(() => {
      skull.remove();
    }, 1500);
  }, 1000);

  // Модальное окно Discord
  function openModal() {
    document.getElementById("discordModal").style.display = "flex";
  }

  function closeModal() {
    document.getElementById("discordModal").style.display = "none";
  }

  // Закрытие модального окна при клике вне содержимого
  window.onclick = function (event) {
    const modal = document.getElementById("discordModal");
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  // Глобальные функции для вызова из HTML
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Музыка и кнопка запуска для мобильных
  const music = document.getElementById("bgMusic");
  const playBtn = document.getElementById("playButton");
  let played = false;

  function tryPlayMusic() {
    if (!played) {
      music.volume = 0.5;
      music.play().catch(() => {});
      played = true;
      if (playBtn) playBtn.style.display = "none";
    }
  }

  if (window.innerWidth > 768) {
    // Десктоп — автозапуск при любом взаимодействии, кнопка скрыта
    window.addEventListener("click", tryPlayMusic);
    window.addEventListener("touchstart", tryPlayMusic);
    window.addEventListener("keydown", tryPlayMusic);
    if (playBtn) playBtn.style.display = "none";
  } else {
    // Мобильные — показываем кнопку, запускаем по клику на неё
    if (playBtn) {
      playBtn.style.display = "block";
      playBtn.addEventListener("click", () => {
        music.play().then(() => {
          played = true;
          playBtn.style.display = "none";
        }).catch(() => {
          alert("Не удалось запустить музыку");
        });
      });
    }
  }
};
