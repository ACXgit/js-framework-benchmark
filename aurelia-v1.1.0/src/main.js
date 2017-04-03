import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia) {
  aurelia.use
    .defaultBindingLanguage()
    .defaultResources();

  await aurelia.start();
  aurelia.setRoot('app');
}