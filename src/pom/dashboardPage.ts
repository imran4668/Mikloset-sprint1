import { Locator, Page } from '@playwright/test';

export default class dashboardPage {
  readonly page: Page;
  readonly dashboard: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dashboard = page.locator('//*[@id="root"]/section/div/div[1]/div[1]/h2');
  }

  async navigateToDashboard() {
  await this.page.waitForEvent('load');
  await this.page.waitForTimeout(5000)
    await this.page.goto(`${process.env.BASE_URL}/dashboard`);
    await this.page.waitForTimeout(5000)
    await this.page.waitForLoadState('networkidle');
    console.log(`${process.env.BASE_URL}/dashboard`)
   
  }



}