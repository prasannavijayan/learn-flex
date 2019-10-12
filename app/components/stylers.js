import Component from '@glimmer/component';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class StylersComponent extends Component {

    @service common;

    @computed('common.selected', 'common.selected.0.title')
    get selected() {
        if ( this.common.selected.length > 0 ) {
            return this.common.selected[0].title;
        }
    }

    triggerUpdate() {
        set(this.common.selected[0], 'updated', this.common.selected[0].updated + 1);
    }

    @action 
    updateVariable(item) {
        set(item, 'enabled', !item.enabled);
        this.triggerUpdate();
    }

    @action
    updateSelectedJC(item) {
        set( this.common.selected[7], 'value', item);
        this.triggerUpdate();
    }
}
