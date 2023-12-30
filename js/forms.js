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

    console.log( { name, phone, email, subject, message })

    event.currentTarget.reset();

    fetch("../contact-form-handler.php", {
      method: "POST",
      data: { name, phone, email, subject, message },
    })
      .then(() => console.log("success"))
      .catch(() => console.log("error"));
  });
});
