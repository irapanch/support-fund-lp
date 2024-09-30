document
  .getElementById("subscribeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Останавливаем отправку формы

    // Открываем модальное окно
    document.getElementById("modalSubscribe").style.display = "flex";
    document.getElementById("backdrop").style.display = "flex";
    // Очищаем форму
    event.target.reset();
  });

document
  .getElementById("modalSubscribeClose")
  .addEventListener("click", closeModalSubs);
document.getElementById("backdrop").addEventListener("click", closeModalSubs);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModalSubs();
  }
});

function closeModalSubs() {
  document.getElementById("modalSubscribe").style.display = "none";
  document.getElementById("backdrop").style.display = "none";
  // Прокручиваем страницу вверх к хедеру
  window.scrollTo({ top: 0, behavior: "smooth" });
}
