function convertDoiElements() {
  const elements = document.querySelectorAll('p[data-testid="doi"]');

  elements.forEach((el) => {
    const doi = el.textContent.trim();

    // Avoid reprocessing
    if (el.querySelector('a')) return;

    const anchor = document.createElement('a');
    anchor.href = 'https://doi.org/' + encodeURIComponent(doi);
    anchor.textContent = doi;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';

    // Add underline style
    anchor.style.textDecoration = 'underline';
    anchor.style.color = 'inherit'; // preserve original text color

    // Replace content
    el.textContent = '';
    el.appendChild(anchor);
  });
}

// Run once on load
convertDoiElements();

// Optionally rerun if new elements are dynamically added
const observer = new MutationObserver(convertDoiElements);
observer.observe(document.body, { childList: true, subtree: true });

