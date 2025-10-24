import { chromium } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

(async () => {
  const browser = await chromium.launch({ headless: false }); // show UI
  const context = await browser.newContext();

  const page = await context.newPage();
  await page.goto(`${process.env.BASE_URL}/login`);

  // 👇 Manually log in using your credentials
  console.log('🔹 Please log in manually...');
  await page.waitForTimeout(40000); // give yourself 40 seconds to log in manually

  // ✅ After login, save storage state (cookies + localStorage)
  await context.storageState({ path: 'auth.json' });
  console.log('✅ Login session saved to auth.json');

  await browser.close();
})();
