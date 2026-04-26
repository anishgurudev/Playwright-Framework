// Import playwright module
import { test, expect } from "@playwright/test";

test("My second playwright script", async ({ page }) => {
  // Step 1: Open website
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Restaurant/);
  // Step 2: Define locators
  const searchBar = page.getByRole("combobox", { name: "Search" });
  // Step 3: Perform actions
  // Search with keywords
  await searchBar.fill("plate");

  await searchBar.press("Enter");
  // Step 4: Assertion
  //   await page.pause();
  //verify the search result page url contain plate
  await expect(page).toHaveURL(/search/);

  await expect(page).toHaveURL(/plate/);
  await expect(page.getByRole("status")).toHaveText(/products/);
  //verify the counf facet in search result page
  await expect(
    page.locator(
      "//div[contains(@class,'filter-tree-vertical   ')]//button[contains(@class,'filter-option-title')]",
    ),
  ).toHaveCount(8);
  //   await page.pause();
});
