const modalCallback = document.querySelector(".modal-callback");

const openCallbackButtons = document.querySelectorAll(".open-callback-button");

openCallbackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalCallback.classList.add("active");
  });
});

modalCallback.addEventListener("click", (event) => {
  const isOverlay = event.target.classList.contains("modal");
  const isClose = event.target.classList.contains("modal__close");

  if (isOverlay || isClose) event.currentTarget.classList.remove("active");
});
