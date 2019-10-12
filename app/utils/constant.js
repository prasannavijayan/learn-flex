const flexVariables = [
    {
        enabled: false,
        title: "height",
        value: '200px',
        type: 'single'
    }, {
        enabled: false,
        title: "padding",
        value: '20px',
        type: 'single'
    }, {
        enabled: true,
        title: "border",
        value: '1px solid black',
        type: 'single'
    }, {
        enabled: false,
        title: "display",
        value: 'flex',
        type: 'single'
    }, {
        enabled: false,
        title: "flex-grow",
        value: 1,
        type: 'single'
    }, {
        enabled: false,
        title: "flex-shrink",
        value: 1,
        type: 'single'
    }, {
        enabled: false,
        title: "justify-content",
        value: "",
        values: ['center', 'space-around', 'space-between'],
        type: 'multiple'
    }, {
        enabled: false,
        title: "align-items",
        value: 'center',
        type: 'single'
    }
]

export default flexVariables;