
const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Increase timeout to 30s
        await page.goto('http://localhost:3000/gastroenterologia/pancreatitis_aguda/index.html', { waitUntil: 'networkidle0', timeout: 30000 });

        const title = await page.title();
        console.log(`Page Title: ${title}`);

        const content = await page.content();

        if (content.includes('Nivel 1') && content.includes('Residente de Gastroenterología')) {
            console.log('SUCCESS: React app mounted correctly.');
        } else {
            console.log('FAILURE: React app content not found.');
        }

        await browser.close();
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
})();
