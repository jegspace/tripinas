import { test } from "@shared/base";
import { attachScreenshot } from "@shared/helpers";
import users from "../../test-data/users.json";
import { DashboardPage } from "@pages/DashboardPage";

const DASHBOARD_SCREENSHOT = "dashboard_verification_screenshot";

test.describe("Dashboard Test Suite", { tag: ["@RegressionTesting", "@SmokeTesting", "@Dashboard"] }, () => {
  let dashboardPage: DashboardPage;
  const authUser = users[0]; 

  test.beforeEach(async ({ page }) => {
    dashboardPage = new DashboardPage(page);

    // Login 
    await page.goto("http://localhost:5173/sign-in");
    await page.getByRole("textbox", { name: "Email address or username" }).fill(authUser.email);
    await page.getByRole("textbox", { name: "Password" }).fill(authUser.password);
    await page.getByRole("button", { name: "Continue" }).click();
  });

  test("Should validate dashboard and allow sign out", async ({ page }, testInfo) => {
    await test.step("Verify Dashboard and Profile", async () => {
      await dashboardPage.verifyDashboardVisible();
      await dashboardPage.verifyUserProfile(
        authUser.fullName,
        authUser.username,
        authUser.email
      );
    });

    await test.step("Sign Out", async () => {
      await dashboardPage.openUserMenu();
      await dashboardPage.signOut();
      await dashboardPage.verifySignedOut();
    });

    await test.step("Attach Screenshot", async () => {
      await attachScreenshot(page, testInfo, `${DASHBOARD_SCREENSHOT}_${authUser.username}`);
    });
  });
});
