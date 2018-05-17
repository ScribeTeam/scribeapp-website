// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({218:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],86:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":218}],6:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./macbook/macbook.png":88,"./imac/imac.png":89,"./macbook_2015/grey.png":90,"./macbook_2015/silver.png":91,"./macbook_2015/gold.png":92,"./iphone5/iphone5_port_black.png":93,"./iphone5/iphone5_land_black.png":94,"./iphone5/iphone5_port_white.png":95,"./iphone5/iphone5_land_white.png":96,"./iphone_se/iphone_se_port_black.png":97,"./iphone_se/iphone_se_land_black.png":98,"./iphone_se/iphone_se_port_white.png":99,"./iphone_se/iphone_se_land_white.png":100,"./iphone_se/iphone_se_port_gold.png":101,"./iphone_se/iphone_se_land_gold.png":102,"./iphone_se/iphone_se_port_rose.png":103,"./iphone_se/iphone_se_land_rose.png":104,"./iphone_6/iphone_6_port_black.png":105,"./iphone_6/iphone_6_land_black.png":106,"./iphone_6/iphone_6_port_white.png":107,"./iphone_6/iphone_6_land_white.png":108,"./iphone_6/iphone_6_port_gold.png":109,"./iphone_6/iphone_6_land_gold.png":110,"./iphone_6_plus/iphone_6_plus_black_port.png":111,"./iphone_6_plus/iphone_6_plus_black_land.png":112,"./iphone_6_plus/iphone_6_plus_white_port.png":113,"./iphone_6_plus/iphone_6_plus_white_land.png":114,"./iphone_6_plus/iphone_6_plus_gold_port.png":115,"./iphone_6_plus/iphone_6_plus_gold_land.png":116,"./ipad/ipad_port_black.png":117,"./ipad/ipad_port_white.png":118,"./ipad/ipad_land_black.png":119,"./ipad/ipad_land_white.png":120,"./ipad_air/ipad_air_gray_port.png":121,"./ipad_air/ipad_air_silver_port.png":122,"./ipad_air/ipad_air_gray_land.png":123,"./ipad_air/ipad_air_silver_land.png":124,"./ipad_air_2/ipad_air_2_gray_port.png":125,"./ipad_air_2/ipad_air_2_silver_port.png":126,"./ipad_air_2/ipad_air_2_gold_port.png":127,"./ipad_air_2/ipad_air_2_gray_land.png":128,"./ipad_air_2/ipad_air_2_silver_land.png":129,"./ipad_air_2/ipad_air_2_gold_land.png":130,"./ipad_pro/ipad_pro_port_black.png":131,"./ipad_pro/ipad_pro_port_silver.png":132,"./ipad_pro/ipad_pro_port_gold.png":133,"./ipad_pro/ipad_pro_land_black.png":134,"./ipad_pro/ipad_pro_land_silver.png":135,"./ipad_pro/ipad_pro_land_gold.png":136,"./galaxy_s3/s3_port_black.png":137,"./galaxy_s3/s3_land_black.png":138,"./galaxy_s3/s3_port_white.png":139,"./galaxy_s3/s3_land_white.png":140,"./galaxy_s5/galaxy_s5_port_black.png":141,"./galaxy_s5/galaxy_s5_land_black.png":142,"./galaxy_s5/galaxy_s5_port_white.png":143,"./galaxy_s5/galaxy_s5_land_white.png":144,"./galaxy_tab4/galaxy_tab4_land_black.png":145,"./galaxy_tab4/galaxy_tab4_land_white.png":146,"./lumia920/lumia920_port.png":147,"./lumia920/lumia920_land.png":148,"./nexus7/nexus7_port.png":149,"./nexus7/nexus7_land.png":150,"./surface/surface.png":151,"./samsung_tv/samsung_tv.png":152,"_css_loader":86}],219:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '63005' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
      // Clear the console after HMR
      console.clear();
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}],220:[function(require,module,exports) {
var getBundleURL = require('./bundle-url').getBundleURL;

function loadBundlesLazy(bundles) {
  if (!Array.isArray(bundles)) {
    bundles = [bundles];
  }

  var id = bundles[bundles.length - 1];

  try {
    return Promise.resolve(require(id));
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      return new LazyPromise(function (resolve, reject) {
        loadBundles(bundles).then(resolve, reject);
      });
    }

    throw err;
  }
}

function loadBundles(bundles) {
  var id = bundles[bundles.length - 1];

  return Promise.all(bundles.slice(0, -1).map(loadBundle)).then(function () {
    return require(id);
  });
}

var bundleLoaders = {};
function registerBundleLoader(type, loader) {
  bundleLoaders[type] = loader;
}

module.exports = exports = loadBundlesLazy;
exports.load = loadBundles;
exports.register = registerBundleLoader;

var bundles = {};
function loadBundle(bundle) {
  var id;
  if (Array.isArray(bundle)) {
    id = bundle[1];
    bundle = bundle[0];
  }

  if (bundles[bundle]) {
    return bundles[bundle];
  }

  var type = (bundle.substring(bundle.lastIndexOf('.') + 1, bundle.length) || bundle).toLowerCase();
  var bundleLoader = bundleLoaders[type];
  if (bundleLoader) {
    return bundles[bundle] = bundleLoader(getBundleURL() + bundle).then(function (resolved) {
      if (resolved) {
        module.bundle.modules[id] = [function (require, module) {
          module.exports = resolved;
        }, {}];
      }

      return resolved;
    });
  }
}

function LazyPromise(executor) {
  this.executor = executor;
  this.promise = null;
}

LazyPromise.prototype.then = function (onSuccess, onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.then(onSuccess, onError);
};

LazyPromise.prototype.catch = function (onError) {
  if (this.promise === null) this.promise = new Promise(this.executor);
  return this.promise.catch(onError);
};
},{"./bundle-url":218}],0:[function(require,module,exports) {
var b=require(220);b.load([["macbook.f991ce2e.png",88],["imac.ba974f85.png",89],["grey.608ae769.png",90],["silver.dc813edf.png",91],["gold.6565cf3d.png",92],["iphone5_port_black.1695b47b.png",93],["iphone5_land_black.52f20705.png",94],["iphone5_port_white.7f25f993.png",95],["iphone5_land_white.0208c580.png",96],["iphone_se_port_black.10c4f63e.png",97],["iphone_se_land_black.611eccf9.png",98],["iphone_se_port_white.b447e828.png",99],["iphone_se_land_white.68508962.png",100],["iphone_se_port_gold.74982522.png",101],["iphone_se_land_gold.62cd3b53.png",102],["iphone_se_port_rose.ba0a0cb9.png",103],["iphone_se_land_rose.de07b3af.png",104],["iphone_6_port_black.03c22003.png",105],["iphone_6_land_black.f40ead71.png",106],["iphone_6_port_white.52590290.png",107],["iphone_6_land_white.e3a1dddf.png",108],["iphone_6_port_gold.4fa1491e.png",109],["iphone_6_land_gold.8d9d7eeb.png",110],["iphone_6_plus_black_port.584cf380.png",111],["iphone_6_plus_black_land.25ccb1c3.png",112],["iphone_6_plus_white_port.f92e72ea.png",113],["iphone_6_plus_white_land.27d09a94.png",114],["iphone_6_plus_gold_port.43666fb9.png",115],["iphone_6_plus_gold_land.ef7650cf.png",116],["ipad_port_black.cdc2af12.png",117],["ipad_port_white.41755509.png",118],["ipad_land_black.c648ea43.png",119],["ipad_land_white.0817fa13.png",120],["ipad_air_gray_port.2517bab1.png",121],["ipad_air_silver_port.5db94e15.png",122],["ipad_air_gray_land.59b50130.png",123],["ipad_air_silver_land.5a1819ba.png",124],["ipad_air_2_gray_port.db5e6e1d.png",125],["ipad_air_2_silver_port.1694f2b2.png",126],["ipad_air_2_gold_port.60d4728c.png",127],["ipad_air_2_gray_land.ac38f496.png",128],["ipad_air_2_silver_land.c814b26f.png",129],["ipad_air_2_gold_land.e061dedb.png",130],["ipad_pro_port_black.cefbc119.png",131],["ipad_pro_port_silver.cfc6e1fc.png",132],["ipad_pro_port_gold.03084b99.png",133],["ipad_pro_land_black.e4dd720a.png",134],["ipad_pro_land_silver.0c154845.png",135],["ipad_pro_land_gold.d7dcf69d.png",136],["s3_port_black.b6fd2dd3.png",137],["s3_land_black.31aa819b.png",138],["s3_port_white.ceb24fd2.png",139],["s3_land_white.eaad126f.png",140],["galaxy_s5_port_black.25b9fdcb.png",141],["galaxy_s5_land_black.ef23146c.png",142],["galaxy_s5_port_white.30fe8fca.png",143],["galaxy_s5_land_white.21f5608f.png",144],["galaxy_tab4_land_black.9f8e1b8d.png",145],["galaxy_tab4_land_white.d06107ef.png",146],["lumia920_port.f2dd072a.png",147],["lumia920_land.a33f1350.png",148],["nexus7_port.2bef439f.png",149],["nexus7_land.b977e616.png",150],["surface.589c110c.png",151],["samsung_tv.a18fbcd9.png",152]]);
},{}]},{},[219,0], null)