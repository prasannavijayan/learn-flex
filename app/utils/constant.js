const flexVariables = [
    {
        enabled: false,
        title: "height",
        value: '200px',
        type: 'single',
        disabled: false
    }, {
        enabled: false,
        title: "padding",
        value: '20px',
        type: 'single',
        disabled: false
    }, {
        enabled: true,
        title: "border",
        value: '1px solid black',
        type: 'single',
        disabled: false
    }, {
        enabled: false,
        title: "display",
        value: 'flex',
        type: 'single',
        disabled: false
    }, {
        enabled: false,
        title: "flex-direction",
        value: '',
        values: ['row', 'column'],
        type: 'multiple',
        disabled: false
    }, {
        enabled: false,
        title: "flex-grow",
        value: 1,
        type: 'single',
        disabled: false
    }, {
        enabled: false,
        title: "flex-shrink",
        value: 1,
        type: 'single',
        disabled: false
    }, {
        enabled: false,
        title: "flex-wrap",
        value: '',
        values: ['wrap', 'no-wrap', 'wrap-reverse'],
        type: 'multiple',
        disabled: false
    }, {
        enabled: false,
        title: "justify-content",
        value: "",
        values: ['center', 'space-around', 'space-between'],
        type: 'multiple',
        disabled: false
    }, {
        enabled: false,
        title: "align-items",
        value: 'center',
        type: 'single',
        disabled: false
    }
]

export default flexVariables;