import Component from '@glimmer/component';
import { action, computed, get } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ElementsParentComponent extends Component {

    @service common;

    @computed('common.selected', 'common.selected.0.updated')
    get styles() {
        if ( this.common.selected.length === 0) { return Ember.String.htmlSafe(''); };

        let record = this.common.getChild( this.args.parentValue, this.args.text );
            let styles = record.map( i => {
                if ( i.enabled ) {
                    return `${i.title}: ${i.value}`;
                }
                return undefined;
            });
            return Ember.String.htmlSafe( styles.filter( i => i ).join(';') );
    }

    @action
    select( item, id, text ) {
        this.common.createVariables( item, id, text );
    }
}
