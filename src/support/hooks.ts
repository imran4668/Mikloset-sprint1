// src/support/hooks.ts
import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser, BrowserType, chromium, firefox, webkit } from 'playwright';
import { ICustomWorld } from "./world"; // Import our new interface
import dotenv from 'dotenv';

dotenv.config();
setDefaultTimeout(60 * 1000);

let browser: Browser;

BeforeAll(async function () {
    const launcher: BrowserType = process.env.BROWSER === 'firefox' ? firefox :
                                 process.env.BROWSER === 'webkit' ? webkit :
                                 chromium;
    browser = await launcher.launch({ 
        headless: process.env.HEADLESS === "true",
        args: ["--start-maximized"] // Ensures maximized viewport for all browsers
    });
});

/**
 * Before: Runs BEFORE EACH scenario.
 * This is the key to test isolation.
 * We create a new context and page for every single test.
 */
Before(async function (this: ICustomWorld, { pickle }) {
    
    const tags = pickle.tags.map(tag => tag.name);
    let storageState: string | undefined = undefined;

    // Conditionally load auth state ONLY if a scenario is tagged.
    // Your login.feature should NOT have this tag.
    // Your dashboard.feature SHOULD have this tag.
    if (tags.includes('@loggedIn')) {
        storageState = 'auth.json';
    }

    // Create a new, clean context and page
    this.context = await browser.newContext({
        storageState: storageState,
        viewport: null, // Use maximized args from launch
        acceptDownloads: true,
    });
    
    this.page = await this.context.newPage();
});

/**
 * After: Runs AFTER EACH scenario.
 * This is where we take screenshots on failure and clean up.
 */
After(async function (this: ICustomWorld, { pickle, result }) {
    
    // === SCREENSHOT ON FAILURE ===
    // If the scenario failed, take a screenshot and attach it to the report.
    if (result?.status === Status.FAILED) {
        try {
            // 1. THIS IS THE FIX: Sanitize the name to be a safe filename
            //    It replaces spaces with '_' and removes all non-alphanumeric characters
            const safeName = pickle.name.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_-]/g, '');

            const screenshot = await this.page!.screenshot({ 
                // 2. Use the new 'safeName'
                path: `reports/screenshots/${safeName}.png`, 
                fullPage: true 
            });
            this.attach(screenshot, 'image/png');
        } catch (error) {
            console.error("Failed to take screenshot:", error);
        }
    }

    // === CLEANUP ===
    // Always close the page and context to ensure no state leaks
    if (this.page) {
        await this.page.close();
    }
    if (this.context) {
        await this.context.close();
    }
});

/**
 * AfterAll: Runs ONCE after all tests.
 * Its only job is to close the browser.
 */
AfterAll(async function () {
    if (browser) {
        await browser.close();
    }
});