// JavaScript
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const question = item.querySelector('.accordion-question');
  const response = item.querySelector('.accordion-response');
  const chevron = question.querySelector('i');

  question.addEventListener('click', () => {
    console.log('Accordion item clicked!');

    // Close all other accordion items
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherResponse = otherItem.querySelector('.accordion-response');
        otherResponse.style.maxHeight = null;
        otherResponse.classList.remove('open');

        const otherChevron = otherItem.querySelector('.accordion-question i');
        otherChevron.classList.remove('fa-chevron-up');
        otherChevron.classList.add('fa-chevron-down');
      }
    });

    // Toggle the current accordion item
    if (response.classList.contains('open')) {
      response.style.maxHeight = null;
      response.classList.remove('open');

      chevron.classList.remove('fa-chevron-up');
      chevron.classList.add('fa-chevron-down');
    } else {
      response.style.maxHeight = `${response.scrollHeight}px`;
      response.classList.add('open');

      chevron.classList.remove('fa-chevron-down');
      chevron.classList.add('fa-chevron-up');
    }
  });
});