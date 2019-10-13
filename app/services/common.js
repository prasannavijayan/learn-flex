import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import flexVariables from '../utils/constant';

export default class CommonService extends Service {
    showTemplate       = true;
    @tracked children  = [];
    @tracked selected  = [];

    constructor() {
        super(...arguments);
        this.createVariables('parent', '101', 'Parent Element 101');
    }

    createVariables(item, id, text) {
        let record = this._objectAvailable( id, text );
        this.selected = record;
    }

    getSelectedObjectWithTitle( title ) {
        return this.selected.find( i => i.title === title );
    } 

    getChild( id, text) {
        return this._objectAvailable( id, text );
    }

    _jsonifyObject() {
        return JSON.parse( JSON.stringify( flexVariables ) );
    }

    _objectAvailable( id, text ) {
        let object = this.children.find( i => i[0].id === id );
        if ( object ) {
            return object;
        } else {
            let data = [ { id:id, noshow: true, updated: 0, title: text } , ...this._jsonifyObject() ];
            this.children.addObject( data );
            return this.children.find( i => i[0].id === id );
        }
    }
}
