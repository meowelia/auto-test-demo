import { test, expect } from '@playwright/test';

test('CSS SELECTOR DEMO', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await page.locator('//div[@class="navbar__items"]//a[3]').click();

  await page.locator('//a[@class="navbar__item navbar__link" and @href=\'/docs/api/class-playwright\']').click();

  await page.locator('//a[text()="API"]').click();

  await page.locator('//div[@class="navbar__inner"]//a[@href="/docs/api/class-playwright"]').click();

  await page.locator('//html/body/div[1]/nav/div[1]/div[1]/a[2]').click();

});