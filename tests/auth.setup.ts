import { test as setup } from "@playwright/test";
import { STORAGE_STATE } from "../playwright.config";
import { LoginPage } from "@pages/LoginPage";
import * as dotenv from 'dotenv';
dotenv.config({ path: require('path').resolve(__dirname, '../.env') });

if (!process.env.TEST_EMAIL || !process.env.TEST_PASSWORD) {
  throw new Error('TEST_EMAIL and TEST_PASSWORD must be set in .env');
}

setup("Authenticate and save storage state", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateTo();
  await loginPage.login(process.env.TEST_EMAIL!, process.env.TEST_PASSWORD!);
  await loginPage.verifyLoginSuccessful();
  await page.context().storageState({ path: STORAGE_STATE });
  console.log("Authentication successful, storage state saved.");
});