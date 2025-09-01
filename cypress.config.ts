import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
      defaultCommandTimeout : 15000,

      viewportHeight : 900,
      viewportWidth : 1400,

      setupNodeEvents(on, config) {
          on('before:browser:launch', (browser, launchOptions) => {
                  if (browser.name === 'chrome') {
                      launchOptions.args.push('--disable-web-security');
                      launchOptions.args.push('--disable-features=VizDisplayCompositor');
                  }
                  return launchOptions;
          });

    },
      supportFile :'cypress/support/e2e.ts',
  },
});
