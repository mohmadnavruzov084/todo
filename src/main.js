import "./scss/main.scss";

// Элементы DOM
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.querySelector(".modal__close");

// Открытие модалки
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Блокируем скролл страницы
});

// Закрытие модалки (крестик)
closeModalBtn.addEventListener("click", () => {
    closeModal();
});

// Закрытие модалки (клик на оверлей)
overlay.addEventListener("click", () => {
    closeModal();
});

// Закрытие модалки (клавиша Esc)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
        closeModal();
    }
});

// Функция для закрытия модалки
function closeModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto"; // Возвращаем скролл
}
