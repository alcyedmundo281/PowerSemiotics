window.addEventListener('load', () => {
  if (document.getElementById('app-container')) return;

  const body = document.body;
  const originalChildren = Array.from(body.childNodes);
  body.innerHTML = '';

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
  const wrapper = document.createElement('div');
  wrapper.id = 'content-wrapper';
  originalChildren.forEach((child) => wrapper.appendChild(child));
  contentArea.appendChild(wrapper);

  app.append(sideNav, contentArea);
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
    li.appendChild(a);
    navList.appendChild(li);
  });
});
