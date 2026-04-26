// Import playwright module
import { test, expect } from "@playwright/test";

test("Add product to cart", async ({ page }) => {
  // Step 1: Open website
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Restaurant/);
  // Step 2: Define locators
  //   const searchBar = page.getByRole("combobox", { name: "Search" });
  const searchBar = page.getByPlaceholder("Search");
  // Step 3: Perform actions
  // Search with keywords
  await searchBar.fill("plate");

  await searchBar.press("Enter");
  // Step 4: Assertion
  //   await page.pause();
  //verify the search result page url contain plate
  //   await expect(page).toHaveURL(/search/);
  //   await expect(page).toHaveURL(/plate/);
  await expect(page).toHaveURL(/search.*plate/);
  await expect(page.getByRole("status")).toHaveText(/products/);
  //verify the counf facet in search result page
  const filters = page.getByRole("button", { name: /Filter by:/i });
  //   const filters = page.locator('main').getByRole('button', { name: /Filter by:/i })
  await expect(filters).toHaveCount(8);
  //add to cart button
  await page
    .locator(".boost-sd__product-item")
    .filter({ hasText: /Round Green Plastic Plate/i })
    .getByRole("button", { name: "Add to cart" })
    .click();
  //verify the search result page url contain cart
  await expect(page).toHaveURL(/cart/);
  //verify the heading contain cart

  await expect(page.getByRole("heading", { name: "CART" })).toBeVisible();
  page.locator(".cart-item").allTextContents();
  await expect(
    page.locator("//div[contains(@class,'cart-item')]/a/span"),
  ).toBeVisible();
  await expect(
    // page.locator("//div[contains(@class,'cart-item')]/a/span"),
    page
      .locator(".cart-item")
      .getByText(/Round Green Plastic Plate/i)
      .first(),
  ).toHaveText("Round Green Plastic Plate");
});
