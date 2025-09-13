import { test, expect, Page } from '@playwright/test';
import { SecurityPage } from '../../pages/SecurityPage';

async function login(page: Page, username: string, password: string) {
  await page.goto('http://localhost:5173/sign-in');
  await page.getByRole('textbox', { name: 'Email address or username' }).fill(username);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(password);
  await page.getByRole('button', { name: 'Continue' }).click();
}

test('update password', 
    { tag: ["@Regression", "@Security" , "@UpdatePassword"] },
    async ({ page }) => {
  const username = 'jentest001';
  const password = 'jentest01';

  // Login
  await login(page, username, password);

  // Navigate to Security tab
  await page.getByRole('button', { name: 'Open user button' }).click();
  await page.getByRole('menuitem', { name: 'Manage account' }).click();
  const securityPage = new SecurityPage(page);
  await securityPage.openSecurityTab();

  // Update password (Save button click handled inside method)
  await securityPage.updatePassword(password);

  // Optional: reopen dialog to verify fields are cleared
  await securityPage.updatePasswordButton.click();
  await expect(securityPage.newPasswordInput).toHaveValue('');
  await expect(securityPage.confirmPasswordInput).toHaveValue('');

  // Close modal
  await page.getByRole('button', { name: 'Close modal' }).click();
});
