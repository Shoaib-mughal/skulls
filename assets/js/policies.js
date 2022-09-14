const buttons = [...document.querySelectorAll(".toggle--action")];
const policies = [...document.querySelectorAll(".toggle--content")];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((currentButton, index) => {
      currentButton.classList.remove("active");
      policies[index].classList.add("hidden");
    });
    button.classList.add("active");
    const policyNumber = button.dataset.target;
    document
      .querySelector(`.toggle--${policyNumber}`)
      .classList.remove("hidden");
  });
});
