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

function renderReactTreeUsingJsonData(data, components) {
    const el = getComponentFromName(data.Content.type, components);
    return React.createElement(
        el, // element
        data.Content.props ? { ...data.Content.props } : null, // props,
        data.Children
            ? loopOnObjects(data.Children).map((comp) =>
                  renderReactTreeUsingJsonData(comp, components)
              )
            : null
    );
}

export default renderReactTreeUsingJsonData;
