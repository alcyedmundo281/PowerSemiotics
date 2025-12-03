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

  // Select both Accordion Headers and Content Headings
  const accordionHeaders = Array.from(
    wrapper.querySelectorAll('.accordion-header'),
  );
  let contentHeadings = Array.from(
    wrapper.querySelectorAll('.content-section h2'),
  );

  // Fallback if no specific content section is found
  if (contentHeadings.length === 0 && accordionHeaders.length === 0) {
    contentHeadings = Array.from(wrapper.querySelectorAll('h2'));
  }

  // Combine them in appearance order
  const allNavItems = [...accordionHeaders, ...contentHeadings].sort(
    (a, b) =>
      a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
  );

  allNavItems.forEach((el) => {
    // Generate ID if missing
    if (!el.id) {
      el.id = el.textContent
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/gi, '-');
    }

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${el.id}`;
    a.textContent = el.textContent;

    // Indent h2s that are inside an accordion content (to show hierarchy)
    if (el.tagName.toLowerCase() === 'h2') {
      a.style.paddingLeft = '1.5rem';
      a.style.fontSize = '0.95em';
    } else {
      a.style.fontWeight = 'bold';
    }

    a.addEventListener('click', (e) => {
      // Prevent default jump to handle smooth interaction manually
      // But we need the hash in URL? Usually fine to let it propagate, but we want custom scroll logic.
      // e.preventDefault(); // Optional, but let's stick to simple logic + enhancement

      const targetId = a.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Case 1: Target is an Accordion Header
        if (targetElement.classList.contains('accordion-header')) {
          // If it's a header, we just want to toggle it open if closed
          const accordionItem = targetElement.closest('.accordion-item');
          if (accordionItem && !accordionItem.classList.contains('active')) {
            targetElement.click();
          }
          // Scroll to it
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        // Case 2: Target is inside an Accordion Content
        else {
          const accordionContent = targetElement.closest('.accordion-content');
          if (accordionContent) {
            const accordionItem = accordionContent.closest('.accordion-item');
            if (accordionItem) {
              const header = accordionItem.querySelector('.accordion-header');
              if (header && !accordionItem.classList.contains('active')) {
                header.click();
              }
              // Ensure content is fully expanded before scrolling (increased timeout)
              setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
              }, 600);
            }
          } else {
            // Case 3: Target is outside any accordion
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });

    li.appendChild(a);
    navList.appendChild(li);
  });
});
