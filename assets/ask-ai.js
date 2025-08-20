// Dynamically create and inject the 'Ask AI' link on article pages
// The script looks for common content containers and attaches a link that
// captures the article text and redirects the user to the AI dashboard.
document.addEventListener('DOMContentLoaded', () => {
  const isNeurologySubpage =
    window.location.pathname.startsWith('/neurologia/');

  if (isNeurologySubpage) {
    const rightWidth = 384; // Tailwind w-96
    document.body.style.marginRight = `${rightWidth}px`;

    const rightPanel = document.createElement('div');
    rightPanel.className =
      'hidden lg:block fixed top-0 right-0 h-full w-96 border-l bg-white';
    const iframe = document.createElement('iframe');
    iframe.src = '/ai_dashboard.html';
    iframe.title = 'AI Dashboard';
    iframe.className = 'w-full h-full';
    rightPanel.appendChild(iframe);
    document.body.appendChild(rightPanel);
    return;
  }

  const targetContainer =
    document.querySelector('.download-button-container') ||
    document.querySelector('.text-center.mb-12') ||
    document.querySelector('.download-button')?.parentNode ||
    document.querySelector('main') ||
    document.body;

  const contentElement =
    document.querySelector('.content-section') ||
    document.getElementById('content-container') ||
    document.querySelector('main') ||
    document.body;

  if (!targetContainer || !contentElement) return;

  const askAiLink = document.createElement('a');
  askAiLink.href = '#';
  askAiLink.textContent =
    '¿Tiene preguntas sobre este artículo? Haga clic aquí para preguntar a la IA.';
  Object.assign(askAiLink.style, {
    display: 'block',
    textAlign: 'center',
    margin: '1.5rem 0',
    fontSize: '1.1em',
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#4f46e5',
  });

  askAiLink.addEventListener('click', (event) => {
    event.preventDefault();
    const articleText = contentElement.innerText;
    sessionStorage.setItem('articleContext', articleText);
    window.location.href = '/ai_dashboard.html?context=true';
  });

  if (targetContainer === document.body) {
    document.body.appendChild(askAiLink);
  } else {
    targetContainer.parentNode.insertBefore(
      askAiLink,
      targetContainer.nextSibling,
    );
  }
});
