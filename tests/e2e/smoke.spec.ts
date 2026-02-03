import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/frontend/i);
});

test("artifact visibility test - will fail", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle(/WILL_FAIL/);
});
