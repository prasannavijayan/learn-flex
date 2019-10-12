import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

const Flex_Variables = [
    {
        enabled: false,
        title: "height",
        value: '200px'
    }, {
        enabled: false,
        title: "padding",
        value: '20px'
    }, {
        enabled: true,
        title: "border",
        value: '1px solid black'
    }, {
        enabled: false,
        title: "display",
        value: 'flex'
    }, {
        enabled: false,
        title: "flex-grow",
        value: 1
    }, {
        enabled: false,
        title: "flex-shrink",
        value: 1
    }, {
        enabled: false,
        title: "justify-content",
        value: 'center'
    }, {
        enabled: false,
        title: "justify-content",
        value: 'space-around'
    }, {
        enabled: false,
        title: "justify-content",
        value: 'space-between'
    }, {
        enabled: false,
        title: "align-items",
        value: 'center'
    }
]

export default class CommonService extends Service {
    showTemplate       = true;
    @tracked children  = [];
    @tracked selected  = [];

    constructor() {
        super(...arguments);
        this.createVariables('', 1, 'ABC');
    }

    createVariables(item, id, text) {
        let record = this._objectAvailable( id, text );
        this.selected = record;
    }

    getChild( id, text) {
        return this._objectAvailable( id, text );
    }

    _jsonifyObject() {
        return JSON.parse( JSON.stringify( Flex_Variables ) );
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
