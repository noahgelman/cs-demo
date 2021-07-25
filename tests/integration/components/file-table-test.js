import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | file-table', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FileTable />`);

    assert.dom(this.element).hasText('File Table Goes Here');

    // Template block usage:
    await render(hbs`
      <FileTable>
        template block text
      </FileTable>
    `);

    assert.dom(this.element).hasText('File Table Goes Here');
  });
});
