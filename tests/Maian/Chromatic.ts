// ➖ Remove this line
// import { test, expect } from '@playwright/test';
// ➕ Add this line
import { test, expect } from "@chromatic-com/playwright";

// Then use as normal 👇
test("Homepage", async ({ page }) => {
    await page.goto("https://test.one.fandelo.com/t");

    await expect(page).toHaveTitle("Fandelo One");
    // ...
});