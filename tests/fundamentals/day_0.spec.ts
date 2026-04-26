// Import playwright module
import { test, expect } from "@playwright/test";

test("My first playwright script", async ({ page }) => {
  // Step 1: Open website
  await page.goto("https://www.google.com/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
  // Step 2: Define locators
  const searchBar = page.getByRole("combobox", { name: "Search" });
  // Step 3: Perform actions
  // Search with keywords
  await searchBar.fill("iphone");
  // Step 4: Assertion
  // await page.pause();
  await expect(page.getByText("iphone 17", { exact: true })).toHaveText(
    /iphone/,
  );
});
