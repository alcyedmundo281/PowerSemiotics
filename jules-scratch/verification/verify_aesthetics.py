from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # Navigate to the correct page
    page.goto("http://localhost:3000/")

    # Wait for the main mission section to be visible
    page.wait_for_selector("#mision", timeout=5000)

    # Take a screenshot to verify the new design
    page.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)