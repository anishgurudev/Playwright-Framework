import { test, expect } from "../../fixtures/testFixture";
import { HomePage } from "../../pages/HomePage";
import { DataUtils } from "../../utils/DataUtils";

const data = DataUtils.readJSON("test-data/testData.json");

// Expect a title "to contain" a substring.
test("has title", async ({ homePage, page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Restaurantware/);
});

test("Search Product Test", async ({ homePage, page }) => {
  await page.goto("/");
  // Click the get search bar & enter product from data
  await homePage.searchProduct(data.searchProduct);

  await expect(page).toHaveTitle(/Search/);

  //   const count = await homePage.getProductCount();

  //   expect(count).toBeGreaterThan(0);
});

// verify placeholder Text 'SEARCH 16,000+ PRODUCTS'
test("verify placeholder Text", async ({ homePage, page }) => {
  await page.goto("/");
  const searchBar = homePage.locators.searchBar();
  await expect(searchBar).toHaveAccessibleName("SEARCH 16,000+ PRODUCTS");
});
// test('verify placeholder Text', async ({ page }) => {
//   await page.goto('/');

//   const searchBox = page.getByRole('combobox', { name: /search/i });

//   await expect(searchBox).toHaveAccessibleName('SEARCH 16,000+ PRODUCTS');
// });
