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

    getRecord( item ) {
        let splitted = item.split('___');
        return { record: this.common.getSelectedObjectWithTitle( splitted[1] ), value: splitted[0] };
    }

    @action 
    updateVariable(item) {
        set(item, 'enabled', !item.enabled);
        this.triggerUpdate();
    }

    @action
    selectMultiple(item) {
        
        let data = this.getRecord( item );

        set( data.record , 'value', data.value );
        this.triggerUpdate();
    }
}
