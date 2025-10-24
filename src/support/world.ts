// src/support/world.ts
import { World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';

/**
 * This interface defines the "world" for each test scenario.
 * Cucumber will make this available as `this` in all step
 * definitions and hooks, as long as you type it:
 * * async function (this: ICustomWorld) { ... }
 * * We will add/remove properties (browser, context, page) in the hooks.
 */
export interface ICustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;
}