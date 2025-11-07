import {  Locator, Page, expect } from '@playwright/test';
import { promises } from 'dns';

export default class dashboardPage {
  readonly page: Page;
  //background
  readonly backgroundImage: Locator;
  backgroundImageUrl?: string | null;
  readonly backgroundFemale: string;
  readonly backgroundMale: string;
  readonly backgroundNeutral: string;
  //header sections
  
  
  


  
  constructor(page: Page) {
    this.page = page;
    //background
    this.backgroundImage = page.getByTestId("dashboard_background_image");    
    this.backgroundFemale = "https://d165yxf2dgd7o5.cloudfront.net/newDashBoardImage.webp";
    this.backgroundMale = "https://d165yxf2dgd7o5.cloudfront.net/menNewDashBoardImage.webp";
    this.backgroundNeutral = "https://d165yxf2dgd7o5.cloudfront.net/GNNewDashBoardImage.webp";
    //header sections

    
    




   
  }

  async navigateToDashboard() {
    await this.page.goto(`${process.env.BASE_URL}/dashboard`);  
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(3000);
    console.log(`Mapsd to ${process.env.BASE_URL}/dashboard`);
  }
  async verifyBackgroundImage(gender: string) {
    
    if (gender === 'female') {
      await this.verifyfemalebackground();       
    }
    else if (gender === 'male') { 
      await this.verifymalebackground();
    }
    else if (gender === 'neutral') {
      await this.verifyneutralbackground();
    }
    else {
      throw new Error(`Unknown gender: ${gender}`);
    }
  }
  async verifyfemalebackground(){
    this.backgroundImageUrl = await this.backgroundImage.getAttribute('style');
    expect(this.backgroundImageUrl).toContain(this.backgroundFemale);
  }
  async verifymalebackground(){
    this.backgroundImageUrl = await this.backgroundImage.getAttribute('style');
    expect(this.backgroundImageUrl).toContain(this.backgroundMale);
  }
  async verifyneutralbackground(){
  this.backgroundImageUrl = await this.backgroundImage.getAttribute('style');
    expect(this.backgroundImageUrl).toContain(this.backgroundNeutral);
  }
  async verifyCategories(expectedCategories: string[]) {
    for (const category of expectedCategories) {
      const categoryLocator = this.page.locator(`//div[@data-testid="categories_list"]/div/div/div/p[text()="${category}"]`);
      await expect(categoryLocator).toBeVisible();
    }
  }














}