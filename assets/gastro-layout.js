window.addEventListener('load', () => {
  if (document.getElementById('app-container')) return;

  const body = document.body;
  const wrapper = document.createElement('div');
  wrapper.id = 'content-wrapper';

  while (body.firstChild) {
    wrapper.appendChild(body.firstChild);
  }

  const app = document.createElement('div');
  app.id = 'app-container';

  const sideNav = document.createElement('aside');
  sideNav.id = 'side-nav';
  const navTitle = document.createElement('h1');
  navTitle.textContent = 'Contenido';
  const navList = document.createElement('ul');
  sideNav.append(navTitle, navList);

  const contentArea = document.createElement('main');
  contentArea.id = 'content-area';
  contentArea.appendChild(wrapper);

  const aiPanel = document.createElement('aside');
  aiPanel.id = 'ai-panel';
  const iframe = document.createElement('iframe');
  iframe.src = '/ai_dashboard.html';
  aiPanel.appendChild(iframe);

  app.append(sideNav, contentArea, aiPanel);
  body.appendChild(app);

  let headings = wrapper.querySelectorAll('.content-section h2');
  if (headings.length === 0) {
    headings = wrapper.querySelectorAll('h2');
  }

  headings.forEach((h) => {
    if (!h.id) {
      h.id = h.textContent
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, '-');
    }
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent;

    a.addEventListener('click', (e) => {
      const targetId = a.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const accordionContent = targetElement.closest('.accordion-content');
        if (accordionContent) {
          const accordionItem = accordionContent.closest('.accordion-item');
          if (accordionItem) {
            const header = accordionItem.querySelector('.accordion-header');
            if (header && !accordionItem.classList.contains('active')) {
              header.click();
            }
            // Ensure content is fully expanded before scrolling
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }
        }
      }
    });

    li.appendChild(a);
    navList.appendChild(li);
  });
});
