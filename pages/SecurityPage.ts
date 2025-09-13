import { expect, Locator, Page } from "@playwright/test";

export class SecurityPage {
  readonly securityTab: Locator;
  readonly updatePasswordButton: Locator;
  readonly newPasswordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly saveButton: Locator;
  readonly showPasswordButtons: Locator;

  constructor(public readonly page: Page) {
    this.securityTab = page.getByRole("button", { name: "Security" });
    this.updatePasswordButton = page.getByRole("button", { name: "Update password" });
    this.newPasswordInput = page.getByRole("textbox", { name: "New password" });
    this.confirmPasswordInput = page.getByRole("textbox", { name: "Confirm password" });
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.showPasswordButtons = page.getByRole("button", { name: "Show password" });
  }

  async openSecurityTab(): Promise<void> {
    await this.securityTab.click();
    await expect(this.updatePasswordButton).toBeVisible();
  }

  async updatePassword(newPassword: string): Promise<void> {
    await this.updatePasswordButton.click();
    await expect(this.page.getByRole("dialog")).toContainText("Update password");

    // Fill new + confirm password
    await this.newPasswordInput.fill(newPassword);
    await this.showPasswordButtons.first().click();
    await this.confirmPasswordInput.fill(newPassword);

    // Save
    await expect(this.saveButton).toBeEnabled();
    await this.saveButton.click();
  }

  /**
   * Convenience wrapper to reset back to the original password
   */
  async resetPassword(originalPassword: string): Promise<void> {
    await this.updatePassword(originalPassword);
  }
}
