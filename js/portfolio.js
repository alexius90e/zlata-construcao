const portfolioShowMore = document.querySelector(".portfolio__show-more");

const portfolioAccordion = document.querySelector(".portfolio__cards_accordion");

portfolioShowMore.addEventListener("click", () => {
  if (portfolioAccordion.style.maxHeight) {
    portfolioAccordion.style.maxHeight = null;
  } else {
    portfolioAccordion.style.maxHeight = portfolioAccordion.scrollHeight + "px";
  }
});
