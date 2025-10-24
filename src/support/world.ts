import { Browser, BrowserContext, BrowserType, Page, chromium, firefox, webkit } from 'playwright';
import dotenv from 'dotenv';

dotenv.config();


export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;



  async init() {
   
      const launcher:BrowserType = process.env.BROWSER === 'firefox' ? firefox :process.env.BROWSER === 'webkit' ? webkit :chromium;
   if(launcher==chromium) {
   this.browser = await launcher.launch({ headless: process.env.HEADLESS=="true", timeout:60*1000 });
    this.context = await this.browser.newContext({
      storageState: 'auth.json',
      viewport:null
    });
    this.page = await this.context.newPage();
  }else{
    this.browser = await launcher.launch({headless: process.env.HEADLESS=="true"});
    this.context = await this.browser.newContext({
      storageState: 'auth.json',
      viewport:{ width: Number(process.env.WIDTH), height: Number(process.env.HEIGHT) },screen:{ width: Number(process.env.WIDTH), height: Number(process.env.HEIGHT) }
    });
    this.page = await this.context.newPage();
  }
    
  }

  async close() {
    await this.page.waitForTimeout(5000)
    await this.page.close();
    await this.context.close();
    await this.browser.close();
    
  }
}