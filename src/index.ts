import _ from 'lodash';

console.log('index - Loaded');

var modules = window["WebpackTest"] || {};

const loadModule = name => {
    return new Promise((resolve, reject) => {

        let onLoad = () => {
            var m = modules[name].default;
            resolve(m)
        }

        if (modules[name])
        {
            onLoad();
            return;
        }

        const script = document.createElement('script');
        document.body.appendChild(script);
        script.onload = onLoad;
        script.onerror = reject;
        script.async = true;
        script.src = 'dist/' + name + '.js';
    });
};

function moduleAButton() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnModuleA';
    element.value = 'Module A';

    element.addEventListener('click', async function () {
        var m = await loadModule('a') as any;
        m.test();
    });

    return element;
}

function moduleBButton() {
    var element = document.createElement('input');

    element.type = 'button';
    element.name = 'btnModuleB';
    element.value = 'Module B';

    element.addEventListener('click', async function () {
        var m = await loadModule('b') as any;
        m.test();
    });

    return element;
}

document.addEventListener('DOMContentLoaded', () => {
    var section1 = document.getElementById('section1');

    section1.appendChild(moduleAButton());
    section1.appendChild(moduleBButton());
});