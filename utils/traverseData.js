import React from 'react';

function getComponentFromName(name, components) {
    return components.find((component) => component.name === name);
}

function loopOnObjects(obj) {
    const comps = [];
    for (const key in obj) {
        comps.push(obj[key]);
    }
    return comps;
}

function renderer(data, components) {
    const el = getComponentFromName(data.Content.type, components);
    return React.createElement(
        el, // root element
        data.Content.props && { ...data.Content.props }, // props,
        data.Children &&
            loopOnObjects(data.Children).map((comp) =>
                renderer(comp, components)
            )
    );
}

function traverseData(data, components) {
    return renderer(data, components);
}

export default traverseData;
