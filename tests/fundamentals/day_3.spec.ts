// Import playwright module
import { test, expect } from "@playwright/test";

test("My third playwright script", async ({ page }) => {
  // Step 1: Open website
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Restaurant/);
});
