/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, docScripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCorePolyfilled, hydratedCssClass, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    if (discoverPublicPath) {
        x = docScripts[docScripts.length - 1];
        if (x && x.src) {
            y = x.src.split('/').slice(0, -1);
            publicPath = (y.join('/')) + (y.length ? '/' : '') + urlNamespace + '/';
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + ((!urlContainsFlag(win) && supportsCustomElements(win) && supportsEsModules(x) && supportsFetch(win) && supportsCssVariables(win)) ? appCore : appCorePolyfilled);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', urlNamespace);
    doc.head.appendChild(x);
}
function urlContainsFlag(win) {
    return win.location.search.indexOf('core=es5') > -1;
}
function supportsEsModules(scriptElm) {
    // detect static ES module support
    const staticModule = 'noModule' in scriptElm;
    if (!staticModule) {
        return false;
    }
    // detect dynamic import support
    try {
        new Function('import("")');
        return true;
    }
    catch (err) {
        return false;
    }
}
function supportsCustomElements(win) {
    return win.customElements;
}
function supportsFetch(win) {
    return win.fetch;
}
function supportsCssVariables(win) {
    return (win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'));
}


init(win, doc, doc.scripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "FastMorph","fast-morph","/build/fast-morph/",true,"fast-morph.core.js","es5-build-disabled.js","hydrated",[["fast-morph","fast-morph",1,[["fastMorphEl",7]]]]);