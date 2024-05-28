// Submit "Login Form"
import { expect } from '@playwright/test';

const username: string = process.env.EMAIL;
const password: string = process.env.PASSWORD;

export default async function loginForm({ page }): Promise<void> {
  const emailLocator = page.locator('[data-testid="email"]');
  const passwordLocator = page.locator('[data-testid="password"]');
  const loginLocator = page.locator('[data-testid="login"]');
  const notiLocator = page.locator().getByText();

  // Ensure the 'Welcome!' text is visible before proceeding
  await expect(page.getByText('Welcome!')).toBeVisible();

  // Fill in the email and password fields
  await emailLocator.fill(username);
  await passwordLocator.fill(password);

  // Click the login button
  await loginLocator.click();
  await page.waitForTimeout(10000);
  // Check if the notification is present
  if (await notiLocator.isVisible()) {
    // If the notification is present, click the login button again (assuming this is some kind of reCAPTCHA check)
    await loginLocator.click();
  }
}
