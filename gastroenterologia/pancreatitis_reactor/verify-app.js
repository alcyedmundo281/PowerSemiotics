
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try {
        await page.goto('http://localhost:3000/gastroenterologia/pancreatitis_aguda/index.html', { waitUntil: 'networkidle0' });

        // Check title
        const title = await page.title();
        console.log(`Page Title: ${title}`);

        // Check specific text content
        const content = await page.content();

        if (content.includes('Nivel 1') && content.includes('Residente de Gastroenterología')) {
            console.log('SUCCESS: React app mounted correctly.');
        } else {
            console.log('FAILURE: React app content not found.');
            console.log('Sample content:', content.substring(0, 500));
        }

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await browser.close();
    }
})();
