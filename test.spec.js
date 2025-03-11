import { test, expect } from '@playwright/test';



test('Homepage should load correctly', async ({ page }) => {
    await page.goto('http://localhost:3000');  // Make sure this matches your local server's port
    await expect(page.locator('h1')).toHaveText('Sydney Ewing');
  });

test('Header should load correctly', async ({page}) => {
    await page.goto('http://localhost:3000');
    await expect(page.getByText('About')).toBeVisible();
});
test('Project button', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const projectLink = page.getByRole('link', { name: 'Projects' });
    await expect(projectLink).toBeVisible();
    await projectLink.click();
});

test('home button', async ({page}) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByText('Home')).toBeVisible();
    await page.getByRole('link', {name: 'Home'}).click();
});

test('Image visible', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page.getByRole('img')).toBeVisible();
});

test('Contact is visible', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page.getByText('Contact')).toBeVisible();
});

