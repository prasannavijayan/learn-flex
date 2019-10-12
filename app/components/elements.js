import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ElementsComponent extends Component {

    @service common;
    @tracked styles_1 = undefined;

    updateStyles(id, styles) {
        this.styles_1 = Ember.String.htmlSafe(`${styles.title}: ${styles.value}`);
    }

    @action
    select( item, id ) {
        this.common.createVariables( item, id );
    }
}
