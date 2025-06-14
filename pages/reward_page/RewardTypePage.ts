import { expect, Locator, Page } from "@playwright/test";

export class RewardTypePage {
    readonly page: Page;
    readonly addButton: Locator;
    readonly rewardTypeButton: Locator;
    readonly editButton: Locator;
    readonly deleteButton: Locator;
    readonly searchButton: Locator;
    readonly clearSearch: Locator;
    readonly rewardTypeNameInput: Locator;
    readonly descriptionInput: Locator;
    readonly saveButton: Locator;
    readonly statusDropdownFormAdd: Locator;
    readonly lockStatus: Locator;
    readonly activityStatus: Locator;
    readonly requiredRewardTypeName: Locator;
    readonly inputSearch: Locator;
    readonly resultSearch: Locator;
    readonly statusDrodownSearch: Locator;
    readonly yesButton: Locator;
    readonly verifyActivityStatus: Locator;
    readonly verifyLockStatus: Locator;
    readonly verifyDuplicateNameError: Locator;

    constructor(page: Page) {
        this.page = page;
        this.verifyDuplicateNameError = page.locator("//li[contains(text(),'Tên đã tồn tại.')]");
        this.verifyLockStatus = page.locator("//span[@class='custom-size'][normalize-space()='Khóa']");
        this.verifyActivityStatus = page.locator("//span[@class='custom-size'][contains(text(),'Hoạt động')]");
        this.resultSearch = page.locator("//tr[@id='row-0']//span[contains(text(),'Khen thưởng 2')]");
        this.yesButton = page.locator("//span[normalize-space()='Có']");
        this.activityStatus = page.locator("//div[contains(text(),'Hoạt động')]");
        this.statusDrodownSearch = page.locator("//div[@class='v-field v-field--appended v-field--center-affix v-field--variant-outlined v-theme--lightColor7 v-locale--is-ltr']//div[@class='v-field__input']");
        this.inputSearch = page.locator("//form/div/div[1]/div/div/div/div[3]/div/input");
        this.requiredRewardTypeName = page.locator("//div[contains(text(),'Nhập tên loại khen thưởng')]");
        this.lockStatus = page.locator("//div[contains(text(),'Khóa')]");
        this.statusDropdownFormAdd = page.locator("//div[@class='v-field v-field--active v-field--appended v-field--center-affix v-field--dirty v-field--prepended v-field--variant-outlined v-theme--lightColor7 v-locale--is-ltr']//div[@class='v-field__input']");
        this.saveButton = page.locator("//span[contains(normalize-space(),'Lưu')]");
        this.rewardTypeNameInput = page.locator("//div[2]/div/div[1]/div/div/div/div[3]/div/input");
        this.descriptionInput = page.locator("//div[2]/div/div/div/div[3]/textarea");
        this.clearSearch = page.locator("//span[text()=' Xóa']");
        this.searchButton = page.locator("//span[contains(normalize-space(),'Tìm kiếm')]");
        this.deleteButton = page.locator("//tr[@id='row-0']//span[contains(text(),'Xóa')]");
        this.editButton = page.locator("//tr[@id='row-0']//span[contains(text(),'Sửa')]");
        this.addButton = page.locator("//span[normalize-space()='Thêm']");
        this.rewardTypeButton = page.locator("//div[contains(text(),'Loại khen thưởng')]");
    }

    async VerifyDuplicateNameError() {
        await expect(this.verifyDuplicateNameError).toBeVisible();
        const value = await this.verifyDuplicateNameError.textContent();
        console.log("🔍 Error found:", value);
        return value;
    }

    async VerifyActivityStatus() {
        await expect(this.verifyActivityStatus).toBeVisible();
        const value = await this.verifyActivityStatus.textContent();
        console.log("🔍 Status found:", value);
        return value;
    }

    async VerifyLockStatus() {
        await expect(this.verifyLockStatus).toBeVisible();
        const value = await this.verifyLockStatus.textContent();
        console.log("🔍 Status found:", value);
        return value;
    }

    async getResultSearch() {
        await expect(this.resultSearch).toBeVisible();
        await expect(this.resultSearch).toContainText('Khen thưởng');
        return this.resultSearch;
    }

    async clickYesButton() {
        await expect(this.yesButton).toBeVisible();
        await this.yesButton.click();
    }

    async clickStatusActivity() {
        await expect(this.activityStatus).toBeVisible();
        await this.activityStatus.click();
    }

    async clickStatusDropdownSearch() {
        await expect(this.statusDrodownSearch).toBeVisible();
        await this.statusDrodownSearch.click();
    }

    async getRequiredRewardTypeName() {
        await expect(this.requiredRewardTypeName).toBeVisible();
        await expect(this.requiredRewardTypeName).toHaveText('Nhập tên loại khen thưởng');
        return this.requiredRewardTypeName;
    }

    async clickStatusLock() {
        await expect(this.lockStatus).toBeVisible();
        await this.lockStatus.click();
    }

    async clickStatusDropdownFormAdd() {
        await expect(this.statusDropdownFormAdd).toBeVisible();
        await this.statusDropdownFormAdd.click();
    }

    async clickSaveButton() {
        await expect(this.saveButton).toBeVisible();
        await this.saveButton.click();
    }

    async fillRewardTypeNameInput(rewardTypeName: string) {
        await expect(this.rewardTypeNameInput).toBeVisible();
        await this.rewardTypeNameInput.fill(rewardTypeName);
    }

    async fillDescriptionInput(description: string) {
        await expect(this.descriptionInput).toBeVisible();
        await this.descriptionInput.fill(description);
    }

    async clickClearSearch() {
        await expect(this.clearSearch).toBeVisible();
        await this.clearSearch.click();
    }

    async clickSearchButton() {
        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();
    }

    async fillInputSearch(search: string) {
        await expect(this.inputSearch).toBeVisible();
        await this.inputSearch.fill(search);
    }

    async clickDeleteButton() {
        await expect(this.deleteButton).toBeVisible();
        await this.deleteButton.click();
    }

    async clickEditButton() {
        await expect(this.editButton).toBeVisible();
        await this.editButton.click();
    }

    async clickAddButton() {
        await expect(this.addButton).toBeVisible();
        await this.addButton.click();
    }

    async clickRewardTypeButton() {
        await expect(this.rewardTypeButton).toBeVisible();
        await this.rewardTypeButton.click();
    }
}
