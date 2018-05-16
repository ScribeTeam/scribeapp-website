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
})({74:[function(require,module,exports) {
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
},{}],73:[function(require,module,exports) {
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
},{"./bundle-url":74}],5:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"./macbook/macbook.png":8,"./imac/imac.png":9,"./macbook_2015/grey.png":10,"./macbook_2015/silver.png":11,"./macbook_2015/gold.png":12,"./iphone5/iphone5_port_black.png":13,"./iphone5/iphone5_land_black.png":14,"./iphone5/iphone5_port_white.png":15,"./iphone5/iphone5_land_white.png":16,"./iphone_se/iphone_se_port_black.png":17,"./iphone_se/iphone_se_land_black.png":18,"./iphone_se/iphone_se_port_white.png":19,"./iphone_se/iphone_se_land_white.png":20,"./iphone_se/iphone_se_port_gold.png":21,"./iphone_se/iphone_se_land_gold.png":22,"./iphone_se/iphone_se_port_rose.png":23,"./iphone_se/iphone_se_land_rose.png":24,"./iphone_6/iphone_6_port_black.png":25,"./iphone_6/iphone_6_land_black.png":26,"./iphone_6/iphone_6_port_white.png":27,"./iphone_6/iphone_6_land_white.png":29,"./iphone_6/iphone_6_port_gold.png":28,"./iphone_6/iphone_6_land_gold.png":30,"./iphone_6_plus/iphone_6_plus_black_port.png":31,"./iphone_6_plus/iphone_6_plus_black_land.png":32,"./iphone_6_plus/iphone_6_plus_white_port.png":33,"./iphone_6_plus/iphone_6_plus_white_land.png":34,"./iphone_6_plus/iphone_6_plus_gold_port.png":35,"./iphone_6_plus/iphone_6_plus_gold_land.png":36,"./ipad/ipad_port_black.png":37,"./ipad/ipad_port_white.png":38,"./ipad/ipad_land_black.png":39,"./ipad/ipad_land_white.png":40,"./ipad_air/ipad_air_gray_port.png":41,"./ipad_air/ipad_air_silver_port.png":42,"./ipad_air/ipad_air_gray_land.png":43,"./ipad_air/ipad_air_silver_land.png":45,"./ipad_air_2/ipad_air_2_gray_port.png":44,"./ipad_air_2/ipad_air_2_silver_port.png":46,"./ipad_air_2/ipad_air_2_gold_port.png":47,"./ipad_air_2/ipad_air_2_gray_land.png":48,"./ipad_air_2/ipad_air_2_silver_land.png":49,"./ipad_air_2/ipad_air_2_gold_land.png":50,"./ipad_pro/ipad_pro_port_black.png":51,"./ipad_pro/ipad_pro_port_silver.png":52,"./ipad_pro/ipad_pro_port_gold.png":53,"./ipad_pro/ipad_pro_land_black.png":54,"./ipad_pro/ipad_pro_land_silver.png":55,"./ipad_pro/ipad_pro_land_gold.png":56,"./galaxy_s3/s3_port_black.png":57,"./galaxy_s3/s3_land_black.png":58,"./galaxy_s3/s3_port_white.png":59,"./galaxy_s3/s3_land_white.png":60,"./galaxy_s5/galaxy_s5_port_black.png":61,"./galaxy_s5/galaxy_s5_land_black.png":62,"./galaxy_s5/galaxy_s5_port_white.png":63,"./galaxy_s5/galaxy_s5_land_white.png":64,"./galaxy_tab4/galaxy_tab4_land_black.png":65,"./galaxy_tab4/galaxy_tab4_land_white.png":66,"./lumia920/lumia920_port.png":67,"./lumia920/lumia920_land.png":68,"./nexus7/nexus7_port.png":69,"./nexus7/nexus7_land.png":70,"./surface/surface.png":71,"./samsung_tv/samsung_tv.png":72,"_css_loader":73}],75:[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '54224' + '/');
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
},{}],77:[function(require,module,exports) {
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
},{"./bundle-url":74}],0:[function(require,module,exports) {
var b=require(77);b.load([["macbook.9feb0b3b.png",8],["imac.71734375.png",9],["grey.73409a3e.png",10],["silver.75562300.png",11],["gold.57b845a2.png",12],["iphone5_port_black.c3bbdd3f.png",13],["iphone5_land_black.633eb7e4.png",14],["iphone5_port_white.506abaf7.png",15],["iphone5_land_white.c22075d8.png",16],["iphone_se_port_black.b6d9969c.png",17],["iphone_se_land_black.8065d679.png",18],["iphone_se_port_white.b6040384.png",19],["iphone_se_land_white.9dba62b6.png",20],["iphone_se_port_gold.3eb76615.png",21],["iphone_se_land_gold.8626f617.png",22],["iphone_se_port_rose.02fbaa2a.png",23],["iphone_se_land_rose.a6c43e62.png",24],["iphone_6_port_black.34255ac5.png",25],["iphone_6_land_black.1d0509a1.png",26],["iphone_6_port_white.2a818729.png",27],["iphone_6_land_white.5cd3d455.png",29],["iphone_6_port_gold.6df89348.png",28],["iphone_6_land_gold.def65a6e.png",30],["iphone_6_plus_black_port.643db91b.png",31],["iphone_6_plus_black_land.1fada3fc.png",32],["iphone_6_plus_white_port.fb8971e2.png",33],["iphone_6_plus_white_land.c52458b2.png",34],["iphone_6_plus_gold_port.aa06d256.png",35],["iphone_6_plus_gold_land.971f96ee.png",36],["ipad_port_black.a90113b5.png",37],["ipad_port_white.1768cf3b.png",38],["ipad_land_black.8b539561.png",39],["ipad_land_white.be11e1a8.png",40],["ipad_air_gray_port.7c84ac8d.png",41],["ipad_air_silver_port.341ca1c1.png",42],["ipad_air_gray_land.e4183974.png",43],["ipad_air_silver_land.f4f1efee.png",45],["ipad_air_2_gray_port.8094082c.png",44],["ipad_air_2_silver_port.f1848490.png",46],["ipad_air_2_gold_port.d0129d1f.png",47],["ipad_air_2_gray_land.172b5640.png",48],["ipad_air_2_silver_land.61dd7d24.png",49],["ipad_air_2_gold_land.d2ee4fe8.png",50],["ipad_pro_port_black.6ae5200b.png",51],["ipad_pro_port_silver.5b576e67.png",52],["ipad_pro_port_gold.659bd381.png",53],["ipad_pro_land_black.7c70953b.png",54],["ipad_pro_land_silver.257d2db6.png",55],["ipad_pro_land_gold.7db66584.png",56],["s3_port_black.fd922ebd.png",57],["s3_land_black.b711b3c4.png",58],["s3_port_white.3c9f2281.png",59],["s3_land_white.653d0ab5.png",60],["galaxy_s5_port_black.f748656a.png",61],["galaxy_s5_land_black.6f622c11.png",62],["galaxy_s5_port_white.97eaf74d.png",63],["galaxy_s5_land_white.636ed764.png",64],["galaxy_tab4_land_black.6f763c6d.png",65],["galaxy_tab4_land_white.aa4328f1.png",66],["lumia920_port.d3b15f27.png",67],["lumia920_land.71c5c2cd.png",68],["nexus7_port.d70f9e9d.png",69],["nexus7_land.eafe402b.png",70],["surface.43f7f036.png",71],["samsung_tv.ab6f6b4a.png",72]]);
},{}]},{},[75,0], null)