const form = document.getElementById("subscribeForm");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Останавливаем отправку формы

  const formData = new FormData(form);
  // Вместо этого кода выполните логику отправки данных на сервер
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
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
