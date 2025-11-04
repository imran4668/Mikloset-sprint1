import {  Locator, Page, expect } from '@playwright/test';

export default class dashboardPage {
  readonly page: Page;
  readonly menu:Locator;
  readonly addYourStyle:Locator;
  readonly styleMe:Locator;
  readonly curateMe:Locator;
  readonly followMe:Locator;
  
  
  
  


  
  constructor(page: Page) {
    this.page = page;
    //menu items
    this.menu = page.locator('//*[@id="mainSectionContainer"]/div[1]/div[2]/ul/li[1]/a/p');
    this.addYourStyle=page.locator('//*[@id="mainSectionContainer"]/div[1]/div[2]/ul/li[2]/a/p');
    this.styleMe=page.locator('//*[@id="mainSectionContainer"]/div[1]/div[2]/ul/li[3]/a/p');
    this.curateMe=page.locator('//*[@id="mainSectionContainer"]/div[1]/div[2]/ul/li[4]/a/p');
    this.followMe=page.locator('//*[@id="mainSectionContainer"]/div[1]/div[2]/ul/li[5]/a/p');
    





   
  }

  async navigateToDashboard() {
    await this.page.goto(`${process.env.BASE_URL}/dashboard`);  
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(3000);
    console.log(`Mapsd to ${process.env.BASE_URL}/dashboard`);
  }
 


  }
