const modalSuccess = document.querySelector(".modal-success");
const modalForm = document.querySelector(".modal-callback .modal__form");
const contactsForm = document.querySelector(".contacts__form");
const forms = [modalForm, contactsForm];

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const phone = form.get("phone");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");

    console.log({ name, phone, email, subject, message });

    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));

    event.currentTarget.reset();

    fetch("../contact-form-handler.php", {
      method: "POST",
      data: { name, phone, email, subject, message },
    })
      .then(() => {
        modalSuccess.classList.add("active");
        setTimeout(() => modalSuccess.classList.remove("active"), 3000);
      })
      .catch(() => console.log("error"));
  });
});
