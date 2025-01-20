(function () {
  const D = document.createElement("link").relList;
  if (D && D.supports && D.supports("modulepreload")) return;
  for (const F of document.querySelectorAll('link[rel="modulepreload"]')) b(F);
  new MutationObserver((F) => {
    for (const $ of F)
      if ($.type === "childList")
        for (const ce of $.addedNodes)
          ce.tagName === "LINK" && ce.rel === "modulepreload" && b(ce);
  }).observe(document, { childList: !0, subtree: !0 });
  function m(F) {
    const $ = {};
    return (
      F.integrity && ($.integrity = F.integrity),
      F.referrerPolicy && ($.referrerPolicy = F.referrerPolicy),
      F.crossOrigin === "use-credentials"
        ? ($.credentials = "include")
        : F.crossOrigin === "anonymous"
        ? ($.credentials = "omit")
        : ($.credentials = "same-origin"),
      $
    );
  }
  function b(F) {
    if (F.ep) return;
    F.ep = !0;
    const $ = m(F);
    fetch(F.href, $);
  }
})();
var Co = { exports: {} },
  vr = {},
  _o = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ca;
function Tf() {
  if (Ca) return I;
  Ca = 1;
  var R = Symbol.for("react.element"),
    D = Symbol.for("react.portal"),
    m = Symbol.for("react.fragment"),
    b = Symbol.for("react.strict_mode"),
    F = Symbol.for("react.profiler"),
    $ = Symbol.for("react.provider"),
    ce = Symbol.for("react.context"),
    fe = Symbol.for("react.forward_ref"),
    A = Symbol.for("react.suspense"),
    V = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    Q = Symbol.iterator;
  function ee(c) {
    return c === null || typeof c != "object"
      ? null
      : ((c = (Q && c[Q]) || c["@@iterator"]),
        typeof c == "function" ? c : null);
  }
  var He = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Be = Object.assign,
    ne = {};
  function K(c, y, M) {
    (this.props = c),
      (this.context = y),
      (this.refs = ne),
      (this.updater = M || He);
  }
  (K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (c, y) {
      if (typeof c != "object" && typeof c != "function" && c != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, c, y, "setState");
    }),
    (K.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, "forceUpdate");
    });
  function vn() {}
  vn.prototype = K.prototype;
  function an(c, y, M) {
    (this.props = c),
      (this.context = y),
      (this.refs = ne),
      (this.updater = M || He);
  }
  var qe = (an.prototype = new vn());
  (qe.constructor = an), Be(qe, K.prototype), (qe.isPureReactComponent = !0);
  var Se = Array.isArray,
    be = Object.prototype.hasOwnProperty,
    Pe = { current: null },
    Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(c, y, M) {
    var O,
      U = {},
      Y = null,
      G = null;
    if (y != null)
      for (O in (y.ref !== void 0 && (G = y.ref),
      y.key !== void 0 && (Y = "" + y.key),
      y))
        be.call(y, O) && !Te.hasOwnProperty(O) && (U[O] = y[O]);
    var H = arguments.length - 2;
    if (H === 1) U.children = M;
    else if (1 < H) {
      for (var te = Array(H), Ue = 0; Ue < H; Ue++) te[Ue] = arguments[Ue + 2];
      U.children = te;
    }
    if (c && c.defaultProps)
      for (O in ((H = c.defaultProps), H)) U[O] === void 0 && (U[O] = H[O]);
    return {
      $$typeof: R,
      type: c,
      key: Y,
      ref: G,
      props: U,
      _owner: Pe.current,
    };
  }
  function Nn(c, y) {
    return {
      $$typeof: R,
      type: c.type,
      key: y,
      ref: c.ref,
      props: c.props,
      _owner: c._owner,
    };
  }
  function gn(c) {
    return typeof c == "object" && c !== null && c.$$typeof === R;
  }
  function Kn(c) {
    var y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      c.replace(/[=:]/g, function (M) {
        return y[M];
      })
    );
  }
  var cn = /\/+/g;
  function je(c, y) {
    return typeof c == "object" && c !== null && c.key != null
      ? Kn("" + c.key)
      : y.toString(36);
  }
  function en(c, y, M, O, U) {
    var Y = typeof c;
    (Y === "undefined" || Y === "boolean") && (c = null);
    var G = !1;
    if (c === null) G = !0;
    else
      switch (Y) {
        case "string":
        case "number":
          G = !0;
          break;
        case "object":
          switch (c.$$typeof) {
            case R:
            case D:
              G = !0;
          }
      }
    if (G)
      return (
        (G = c),
        (U = U(G)),
        (c = O === "" ? "." + je(G, 0) : O),
        Se(U)
          ? ((M = ""),
            c != null && (M = c.replace(cn, "$&/") + "/"),
            en(U, y, M, "", function (Ue) {
              return Ue;
            }))
          : U != null &&
            (gn(U) &&
              (U = Nn(
                U,
                M +
                  (!U.key || (G && G.key === U.key)
                    ? ""
                    : ("" + U.key).replace(cn, "$&/") + "/") +
                  c
              )),
            y.push(U)),
        1
      );
    if (((G = 0), (O = O === "" ? "." : O + ":"), Se(c)))
      for (var H = 0; H < c.length; H++) {
        Y = c[H];
        var te = O + je(Y, H);
        G += en(Y, y, M, te, U);
      }
    else if (((te = ee(c)), typeof te == "function"))
      for (c = te.call(c), H = 0; !(Y = c.next()).done; )
        (Y = Y.value), (te = O + je(Y, H++)), (G += en(Y, y, M, te, U));
    else if (Y === "object")
      throw (
        ((y = String(c)),
        Error(
          "Objects are not valid as a React child (found: " +
            (y === "[object Object]"
              ? "object with keys {" + Object.keys(c).join(", ") + "}"
              : y) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return G;
  }
  function fn(c, y, M) {
    if (c == null) return c;
    var O = [],
      U = 0;
    return (
      en(c, O, "", "", function (Y) {
        return y.call(M, Y, U++);
      }),
      O
    );
  }
  function Le(c) {
    if (c._status === -1) {
      var y = c._result;
      (y = y()),
        y.then(
          function (M) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = M));
          },
          function (M) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = M));
          }
        ),
        c._status === -1 && ((c._status = 0), (c._result = y));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var oe = { current: null },
    k = { transition: null },
    T = {
      ReactCurrentDispatcher: oe,
      ReactCurrentBatchConfig: k,
      ReactCurrentOwner: Pe,
    };
  function x() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (I.Children = {
      map: fn,
      forEach: function (c, y, M) {
        fn(
          c,
          function () {
            y.apply(this, arguments);
          },
          M
        );
      },
      count: function (c) {
        var y = 0;
        return (
          fn(c, function () {
            y++;
          }),
          y
        );
      },
      toArray: function (c) {
        return (
          fn(c, function (y) {
            return y;
          }) || []
        );
      },
      only: function (c) {
        if (!gn(c))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return c;
      },
    }),
    (I.Component = K),
    (I.Fragment = m),
    (I.Profiler = F),
    (I.PureComponent = an),
    (I.StrictMode = b),
    (I.Suspense = A),
    (I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
    (I.act = x),
    (I.cloneElement = function (c, y, M) {
      if (c == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            c +
            "."
        );
      var O = Be({}, c.props),
        U = c.key,
        Y = c.ref,
        G = c._owner;
      if (y != null) {
        if (
          (y.ref !== void 0 && ((Y = y.ref), (G = Pe.current)),
          y.key !== void 0 && (U = "" + y.key),
          c.type && c.type.defaultProps)
        )
          var H = c.type.defaultProps;
        for (te in y)
          be.call(y, te) &&
            !Te.hasOwnProperty(te) &&
            (O[te] = y[te] === void 0 && H !== void 0 ? H[te] : y[te]);
      }
      var te = arguments.length - 2;
      if (te === 1) O.children = M;
      else if (1 < te) {
        H = Array(te);
        for (var Ue = 0; Ue < te; Ue++) H[Ue] = arguments[Ue + 2];
        O.children = H;
      }
      return { $$typeof: R, type: c.type, key: U, ref: Y, props: O, _owner: G };
    }),
    (I.createContext = function (c) {
      return (
        (c = {
          $$typeof: ce,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (c.Provider = { $$typeof: $, _context: c }),
        (c.Consumer = c)
      );
    }),
    (I.createElement = $e),
    (I.createFactory = function (c) {
      var y = $e.bind(null, c);
      return (y.type = c), y;
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (c) {
      return { $$typeof: fe, render: c };
    }),
    (I.isValidElement = gn),
    (I.lazy = function (c) {
      return { $$typeof: X, _payload: { _status: -1, _result: c }, _init: Le };
    }),
    (I.memo = function (c, y) {
      return { $$typeof: V, type: c, compare: y === void 0 ? null : y };
    }),
    (I.startTransition = function (c) {
      var y = k.transition;
      k.transition = {};
      try {
        c();
      } finally {
        k.transition = y;
      }
    }),
    (I.unstable_act = x),
    (I.useCallback = function (c, y) {
      return oe.current.useCallback(c, y);
    }),
    (I.useContext = function (c) {
      return oe.current.useContext(c);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (c) {
      return oe.current.useDeferredValue(c);
    }),
    (I.useEffect = function (c, y) {
      return oe.current.useEffect(c, y);
    }),
    (I.useId = function () {
      return oe.current.useId();
    }),
    (I.useImperativeHandle = function (c, y, M) {
      return oe.current.useImperativeHandle(c, y, M);
    }),
    (I.useInsertionEffect = function (c, y) {
      return oe.current.useInsertionEffect(c, y);
    }),
    (I.useLayoutEffect = function (c, y) {
      return oe.current.useLayoutEffect(c, y);
    }),
    (I.useMemo = function (c, y) {
      return oe.current.useMemo(c, y);
    }),
    (I.useReducer = function (c, y, M) {
      return oe.current.useReducer(c, y, M);
    }),
    (I.useRef = function (c) {
      return oe.current.useRef(c);
    }),
    (I.useState = function (c) {
      return oe.current.useState(c);
    }),
    (I.useSyncExternalStore = function (c, y, M) {
      return oe.current.useSyncExternalStore(c, y, M);
    }),
    (I.useTransition = function () {
      return oe.current.useTransition();
    }),
    (I.version = "18.3.1"),
    I
  );
}
var _a;
function To() {
  return _a || ((_a = 1), (_o.exports = Tf())), _o.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pa;
function Lf() {
  if (Pa) return vr;
  Pa = 1;
  var R = To(),
    D = Symbol.for("react.element"),
    m = Symbol.for("react.fragment"),
    b = Object.prototype.hasOwnProperty,
    F = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ce(fe, A, V) {
    var X,
      Q = {},
      ee = null,
      He = null;
    V !== void 0 && (ee = "" + V),
      A.key !== void 0 && (ee = "" + A.key),
      A.ref !== void 0 && (He = A.ref);
    for (X in A) b.call(A, X) && !$.hasOwnProperty(X) && (Q[X] = A[X]);
    if (fe && fe.defaultProps)
      for (X in ((A = fe.defaultProps), A)) Q[X] === void 0 && (Q[X] = A[X]);
    return {
      $$typeof: D,
      type: fe,
      key: ee,
      ref: He,
      props: Q,
      _owner: F.current,
    };
  }
  return (vr.Fragment = m), (vr.jsx = ce), (vr.jsxs = ce), vr;
}
var Na;
function Rf() {
  return Na || ((Na = 1), (Co.exports = Lf())), Co.exports;
}
var ge = Rf(),
  gr = To(),
  Tl = {},
  Po = { exports: {} },
  Fe = {},
  No = { exports: {} },
  zo = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Mf() {
  return (
    za ||
      ((za = 1),
      (function (R) {
        function D(k, T) {
          var x = k.length;
          k.push(T);
          e: for (; 0 < x; ) {
            var c = (x - 1) >>> 1,
              y = k[c];
            if (0 < F(y, T)) (k[c] = T), (k[x] = y), (x = c);
            else break e;
          }
        }
        function m(k) {
          return k.length === 0 ? null : k[0];
        }
        function b(k) {
          if (k.length === 0) return null;
          var T = k[0],
            x = k.pop();
          if (x !== T) {
            k[0] = x;
            e: for (var c = 0, y = k.length, M = y >>> 1; c < M; ) {
              var O = 2 * (c + 1) - 1,
                U = k[O],
                Y = O + 1,
                G = k[Y];
              if (0 > F(U, x))
                Y < y && 0 > F(G, U)
                  ? ((k[c] = G), (k[Y] = x), (c = Y))
                  : ((k[c] = U), (k[O] = x), (c = O));
              else if (Y < y && 0 > F(G, x)) (k[c] = G), (k[Y] = x), (c = Y);
              else break e;
            }
          }
          return T;
        }
        function F(k, T) {
          var x = k.sortIndex - T.sortIndex;
          return x !== 0 ? x : k.id - T.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var $ = performance;
          R.unstable_now = function () {
            return $.now();
          };
        } else {
          var ce = Date,
            fe = ce.now();
          R.unstable_now = function () {
            return ce.now() - fe;
          };
        }
        var A = [],
          V = [],
          X = 1,
          Q = null,
          ee = 3,
          He = !1,
          Be = !1,
          ne = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          vn = typeof clearTimeout == "function" ? clearTimeout : null,
          an = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function qe(k) {
          for (var T = m(V); T !== null; ) {
            if (T.callback === null) b(V);
            else if (T.startTime <= k)
              b(V), (T.sortIndex = T.expirationTime), D(A, T);
            else break;
            T = m(V);
          }
        }
        function Se(k) {
          if (((ne = !1), qe(k), !Be))
            if (m(A) !== null) (Be = !0), Le(be);
            else {
              var T = m(V);
              T !== null && oe(Se, T.startTime - k);
            }
        }
        function be(k, T) {
          (Be = !1), ne && ((ne = !1), vn($e), ($e = -1)), (He = !0);
          var x = ee;
          try {
            for (
              qe(T), Q = m(A);
              Q !== null && (!(Q.expirationTime > T) || (k && !Kn()));

            ) {
              var c = Q.callback;
              if (typeof c == "function") {
                (Q.callback = null), (ee = Q.priorityLevel);
                var y = c(Q.expirationTime <= T);
                (T = R.unstable_now()),
                  typeof y == "function"
                    ? (Q.callback = y)
                    : Q === m(A) && b(A),
                  qe(T);
              } else b(A);
              Q = m(A);
            }
            if (Q !== null) var M = !0;
            else {
              var O = m(V);
              O !== null && oe(Se, O.startTime - T), (M = !1);
            }
            return M;
          } finally {
            (Q = null), (ee = x), (He = !1);
          }
        }
        var Pe = !1,
          Te = null,
          $e = -1,
          Nn = 5,
          gn = -1;
        function Kn() {
          return !(R.unstable_now() - gn < Nn);
        }
        function cn() {
          if (Te !== null) {
            var k = R.unstable_now();
            gn = k;
            var T = !0;
            try {
              T = Te(!0, k);
            } finally {
              T ? je() : ((Pe = !1), (Te = null));
            }
          } else Pe = !1;
        }
        var je;
        if (typeof an == "function")
          je = function () {
            an(cn);
          };
        else if (typeof MessageChannel < "u") {
          var en = new MessageChannel(),
            fn = en.port2;
          (en.port1.onmessage = cn),
            (je = function () {
              fn.postMessage(null);
            });
        } else
          je = function () {
            K(cn, 0);
          };
        function Le(k) {
          (Te = k), Pe || ((Pe = !0), je());
        }
        function oe(k, T) {
          $e = K(function () {
            k(R.unstable_now());
          }, T);
        }
        (R.unstable_IdlePriority = 5),
          (R.unstable_ImmediatePriority = 1),
          (R.unstable_LowPriority = 4),
          (R.unstable_NormalPriority = 3),
          (R.unstable_Profiling = null),
          (R.unstable_UserBlockingPriority = 2),
          (R.unstable_cancelCallback = function (k) {
            k.callback = null;
          }),
          (R.unstable_continueExecution = function () {
            Be || He || ((Be = !0), Le(be));
          }),
          (R.unstable_forceFrameRate = function (k) {
            0 > k || 125 < k
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Nn = 0 < k ? Math.floor(1e3 / k) : 5);
          }),
          (R.unstable_getCurrentPriorityLevel = function () {
            return ee;
          }),
          (R.unstable_getFirstCallbackNode = function () {
            return m(A);
          }),
          (R.unstable_next = function (k) {
            switch (ee) {
              case 1:
              case 2:
              case 3:
                var T = 3;
                break;
              default:
                T = ee;
            }
            var x = ee;
            ee = T;
            try {
              return k();
            } finally {
              ee = x;
            }
          }),
          (R.unstable_pauseExecution = function () {}),
          (R.unstable_requestPaint = function () {}),
          (R.unstable_runWithPriority = function (k, T) {
            switch (k) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                k = 3;
            }
            var x = ee;
            ee = k;
            try {
              return T();
            } finally {
              ee = x;
            }
          }),
          (R.unstable_scheduleCallback = function (k, T, x) {
            var c = R.unstable_now();
            switch (
              (typeof x == "object" && x !== null
                ? ((x = x.delay),
                  (x = typeof x == "number" && 0 < x ? c + x : c))
                : (x = c),
              k)
            ) {
              case 1:
                var y = -1;
                break;
              case 2:
                y = 250;
                break;
              case 5:
                y = 1073741823;
                break;
              case 4:
                y = 1e4;
                break;
              default:
                y = 5e3;
            }
            return (
              (y = x + y),
              (k = {
                id: X++,
                callback: T,
                priorityLevel: k,
                startTime: x,
                expirationTime: y,
                sortIndex: -1,
              }),
              x > c
                ? ((k.sortIndex = x),
                  D(V, k),
                  m(A) === null &&
                    k === m(V) &&
                    (ne ? (vn($e), ($e = -1)) : (ne = !0), oe(Se, x - c)))
                : ((k.sortIndex = y), D(A, k), Be || He || ((Be = !0), Le(be))),
              k
            );
          }),
          (R.unstable_shouldYield = Kn),
          (R.unstable_wrapCallback = function (k) {
            var T = ee;
            return function () {
              var x = ee;
              ee = T;
              try {
                return k.apply(this, arguments);
              } finally {
                ee = x;
              }
            };
          });
      })(zo)),
    zo
  );
}
var Ta;
function If() {
  return Ta || ((Ta = 1), (No.exports = Mf())), No.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var La;
function Of() {
  if (La) return Fe;
  La = 1;
  var R = To(),
    D = If();
  function m(e) {
    for (
      var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        t = 1;
      t < arguments.length;
      t++
    )
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      n +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var b = new Set(),
    F = {};
  function $(e, n) {
    ce(e, n), ce(e + "Capture", n);
  }
  function ce(e, n) {
    for (F[e] = n, e = 0; e < n.length; e++) b.add(n[e]);
  }
  var fe = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    A = Object.prototype.hasOwnProperty,
    V =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    X = {},
    Q = {};
  function ee(e) {
    return A.call(Q, e)
      ? !0
      : A.call(X, e)
      ? !1
      : V.test(e)
      ? (Q[e] = !0)
      : ((X[e] = !0), !1);
  }
  function He(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : t !== null
          ? !t.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Be(e, n, t, r) {
    if (n === null || typeof n > "u" || He(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function ne(e, n, t, r, l, u, o) {
    (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
      (this.attributeName = r),
      (this.attributeNamespace = l),
      (this.mustUseProperty = t),
      (this.propertyName = e),
      (this.type = n),
      (this.sanitizeURL = u),
      (this.removeEmptyString = o);
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      K[e] = new ne(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var n = e[0];
      K[n] = new ne(n, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      K[e] = new ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      K[e] = new ne(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        K[e] = new ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      K[e] = new ne(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      K[e] = new ne(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      K[e] = new ne(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      K[e] = new ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var vn = /[\-:]([a-z])/g;
  function an(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var n = e.replace(vn, an);
      K[n] = new ne(n, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var n = e.replace(vn, an);
        K[n] = new ne(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var n = e.replace(vn, an);
      K[n] = new ne(
        n,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      K[e] = new ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (K.xlinkHref = new ne(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      K[e] = new ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function qe(e, n, t, r) {
    var l = K.hasOwnProperty(n) ? K[n] : null;
    (l !== null
      ? l.type !== 0
      : r ||
        !(2 < n.length) ||
        (n[0] !== "o" && n[0] !== "O") ||
        (n[1] !== "n" && n[1] !== "N")) &&
      (Be(n, t, l, r) && (t = null),
      r || l === null
        ? ee(n) &&
          (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
        : l.mustUseProperty
        ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
        : ((n = l.attributeName),
          (r = l.attributeNamespace),
          t === null
            ? e.removeAttribute(n)
            : ((l = l.type),
              (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
              r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var Se = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    be = Symbol.for("react.element"),
    Pe = Symbol.for("react.portal"),
    Te = Symbol.for("react.fragment"),
    $e = Symbol.for("react.strict_mode"),
    Nn = Symbol.for("react.profiler"),
    gn = Symbol.for("react.provider"),
    Kn = Symbol.for("react.context"),
    cn = Symbol.for("react.forward_ref"),
    je = Symbol.for("react.suspense"),
    en = Symbol.for("react.suspense_list"),
    fn = Symbol.for("react.memo"),
    Le = Symbol.for("react.lazy"),
    oe = Symbol.for("react.offscreen"),
    k = Symbol.iterator;
  function T(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (k && e[k]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var x = Object.assign,
    c;
  function y(e) {
    if (c === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        c = (n && n[1]) || "";
      }
    return (
      `
` +
      c +
      e
    );
  }
  var M = !1;
  function O(e, n) {
    if (!e || M) return "";
    M = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (
          ((n = function () {
            throw Error();
          }),
          Object.defineProperty(n.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (
          var l = p.stack.split(`
`),
            u = r.stack.split(`
`),
            o = l.length - 1,
            i = u.length - 1;
          1 <= o && 0 <= i && l[o] !== u[i];

        )
          i--;
        for (; 1 <= o && 0 <= i; o--, i--)
          if (l[o] !== u[i]) {
            if (o !== 1 || i !== 1)
              do
                if ((o--, i--, 0 > i || l[o] !== u[i])) {
                  var s =
                    `
` + l[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      s.includes("<anonymous>") &&
                      (s = s.replace("<anonymous>", e.displayName)),
                    s
                  );
                }
              while (1 <= o && 0 <= i);
            break;
          }
      }
    } finally {
      (M = !1), (Error.prepareStackTrace = t);
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function U(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = O(e.type, !1)), e;
      case 11:
        return (e = O(e.type.render, !1)), e;
      case 1:
        return (e = O(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Y(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case Pe:
        return "Portal";
      case Nn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case je:
        return "Suspense";
      case en:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Kn:
          return (e.displayName || "Context") + ".Consumer";
        case gn:
          return (e._context.displayName || "Context") + ".Provider";
        case cn:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case fn:
          return (
            (n = e.displayName || null), n !== null ? n : Y(e.type) || "Memo"
          );
        case Le:
          (n = e._payload), (e = e._init);
          try {
            return Y(e(n));
          } catch {}
      }
    return null;
  }
  function G(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = n.render),
          (e = e.displayName || e.name || ""),
          n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Y(n);
      case 8:
        return n === $e ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function H(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function te(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (n === "checkbox" || n === "radio")
    );
  }
  function Ue(e) {
    var n = te(e) ? "checked" : "value",
      t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
      r = "" + e[n];
    if (
      !e.hasOwnProperty(n) &&
      typeof t < "u" &&
      typeof t.get == "function" &&
      typeof t.set == "function"
    ) {
      var l = t.get,
        u = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            (r = "" + o), u.call(this, o);
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[n];
          },
        }
      );
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Lo(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = "";
    return (
      e && (r = te(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function kr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ll(e, n) {
    var t = n.checked;
    return x({}, n, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: t ?? e._wrapperState.initialChecked,
    });
  }
  function Ro(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue,
      r = n.checked != null ? n.checked : n.defaultChecked;
    (t = H(n.value != null ? n.value : t)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: t,
        controlled:
          n.type === "checkbox" || n.type === "radio"
            ? n.checked != null
            : n.value != null,
      });
  }
  function Mo(e, n) {
    (n = n.checked), n != null && qe(e, "checked", n, !1);
  }
  function Rl(e, n) {
    Mo(e, n);
    var t = H(n.value),
      r = n.type;
    if (t != null)
      r === "number"
        ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
        : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value")
      ? Ml(e, n.type, t)
      : n.hasOwnProperty("defaultValue") && Ml(e, n.type, H(n.defaultValue)),
      n.checked == null &&
        n.defaultChecked != null &&
        (e.defaultChecked = !!n.defaultChecked);
  }
  function Io(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (n.value !== void 0 && n.value !== null)
        )
      )
        return;
      (n = "" + e._wrapperState.initialValue),
        t || n === e.value || (e.value = n),
        (e.defaultValue = n);
    }
    (t = e.name),
      t !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      t !== "" && (e.name = t);
  }
  function Ml(e, n, t) {
    (n !== "number" || kr(e.ownerDocument) !== e) &&
      (t == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Mt = Array.isArray;
  function it(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        (l = n.hasOwnProperty("$" + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + H(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          (e[l].selected = !0), r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Il(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return x({}, n, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Oo(e, n) {
    var t = n.value;
    if (t == null) {
      if (((t = n.children), (n = n.defaultValue), t != null)) {
        if (n != null) throw Error(m(92));
        if (Mt(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), (t = n);
    }
    e._wrapperState = { initialValue: H(t) };
  }
  function Do(e, n) {
    var t = H(n.value),
      r = H(n.defaultValue);
    t != null &&
      ((t = "" + t),
      t !== e.value && (e.value = t),
      n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
      r != null && (e.defaultValue = "" + r);
  }
  function Fo(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue &&
      n !== "" &&
      n !== null &&
      (e.value = n);
  }
  function jo(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ol(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? jo(n)
      : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Sr,
    Uo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (n, t, r, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(n, t, r, l);
            });
          }
        : e;
    })(function (e, n) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = n;
      else {
        for (
          Sr = Sr || document.createElement("div"),
            Sr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
            n = Sr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; n.firstChild; ) e.appendChild(n.firstChild);
      }
    });
  function It(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Ot = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ia = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ot).forEach(function (e) {
    Ia.forEach(function (n) {
      (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (Ot[n] = Ot[e]);
    });
  });
  function Yo(e, n, t) {
    return n == null || typeof n == "boolean" || n === ""
      ? ""
      : t || typeof n != "number" || n === 0 || (Ot.hasOwnProperty(e) && Ot[e])
      ? ("" + n).trim()
      : n + "px";
  }
  function Wo(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0,
          l = Yo(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
      }
  }
  var Oa = x(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Dl(e, n) {
    if (n) {
      if (Oa[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (
          typeof n.dangerouslySetInnerHTML != "object" ||
          !("__html" in n.dangerouslySetInnerHTML)
        )
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var jl = null;
  function Ul(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Yl = null,
    st = null,
    at = null;
  function Vo(e) {
    if ((e = tr(e))) {
      if (typeof Yl != "function") throw Error(m(280));
      var n = e.stateNode;
      n && ((n = Br(n)), Yl(e.stateNode, e.type, n));
    }
  }
  function Ao(e) {
    st ? (at ? at.push(e) : (at = [e])) : (st = e);
  }
  function Ho() {
    if (st) {
      var e = st,
        n = at;
      if (((at = st = null), Vo(e), n)) for (e = 0; e < n.length; e++) Vo(n[e]);
    }
  }
  function Bo(e, n) {
    return e(n);
  }
  function $o() {}
  var Wl = !1;
  function Qo(e, n, t) {
    if (Wl) return e(n, t);
    Wl = !0;
    try {
      return Bo(e, n, t);
    } finally {
      (Wl = !1), (st !== null || at !== null) && ($o(), Ho());
    }
  }
  function Dt(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = Br(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Vl = !1;
  if (fe)
    try {
      var Ft = {};
      Object.defineProperty(Ft, "passive", {
        get: function () {
          Vl = !0;
        },
      }),
        window.addEventListener("test", Ft, Ft),
        window.removeEventListener("test", Ft, Ft);
    } catch {
      Vl = !1;
    }
  function Da(e, n, t, r, l, u, o, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (v) {
      this.onError(v);
    }
  }
  var jt = !1,
    Er = null,
    xr = !1,
    Al = null,
    Fa = {
      onError: function (e) {
        (jt = !0), (Er = e);
      },
    };
  function ja(e, n, t, r, l, u, o, i, s) {
    (jt = !1), (Er = null), Da.apply(Fa, arguments);
  }
  function Ua(e, n, t, r, l, u, o, i, s) {
    if ((ja.apply(this, arguments), jt)) {
      if (jt) {
        var p = Er;
        (jt = !1), (Er = null);
      } else throw Error(m(198));
      xr || ((xr = !0), (Al = p));
    }
  }
  function Xn(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Ko(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function Xo(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Ya(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = Xn(e)), n === null)) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Xo(l), e;
          if (u === r) return Xo(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) (t = l), (r = u);
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === t) {
            (o = !0), (t = l), (r = u);
            break;
          }
          if (i === r) {
            (o = !0), (r = l), (t = u);
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = u.child; i; ) {
            if (i === t) {
              (o = !0), (t = u), (r = l);
              break;
            }
            if (i === r) {
              (o = !0), (r = u), (t = l);
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Go(e) {
    return (e = Ya(e)), e !== null ? Zo(e) : null;
  }
  function Zo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Zo(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Jo = D.unstable_scheduleCallback,
    qo = D.unstable_cancelCallback,
    Wa = D.unstable_shouldYield,
    Va = D.unstable_requestPaint,
    se = D.unstable_now,
    Aa = D.unstable_getCurrentPriorityLevel,
    Hl = D.unstable_ImmediatePriority,
    bo = D.unstable_UserBlockingPriority,
    Cr = D.unstable_NormalPriority,
    Ha = D.unstable_LowPriority,
    ei = D.unstable_IdlePriority,
    _r = null,
    dn = null;
  function Ba(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function")
      try {
        dn.onCommitFiberRoot(_r, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var nn = Math.clz32 ? Math.clz32 : Ka,
    $a = Math.log,
    Qa = Math.LN2;
  function Ka(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - (($a(e) / Qa) | 0)) | 0;
  }
  var Pr = 64,
    Nr = 4194304;
  function Ut(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0,
      l = e.suspendedLanes,
      u = e.pingedLanes,
      o = t & 268435455;
    if (o !== 0) {
      var i = o & ~l;
      i !== 0 ? (r = Ut(i)) : ((u &= o), u !== 0 && (r = Ut(u)));
    } else (o = t & ~l), o !== 0 ? (r = Ut(o)) : u !== 0 && (r = Ut(u));
    if (r === 0) return 0;
    if (
      n !== 0 &&
      n !== r &&
      !(n & l) &&
      ((l = r & -r), (u = n & -n), l >= u || (l === 16 && (u & 4194240) !== 0))
    )
      return n;
    if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
      for (e = e.entanglements, n &= r; 0 < n; )
        (t = 31 - nn(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
    return r;
  }
  function Xa(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ga(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        u = e.pendingLanes;
      0 < u;

    ) {
      var o = 31 - nn(u),
        i = 1 << o,
        s = l[o];
      s === -1
        ? (!(i & t) || i & r) && (l[o] = Xa(i, n))
        : s <= n && (e.expiredLanes |= i),
        (u &= ~i);
    }
  }
  function Bl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function ni() {
    var e = Pr;
    return (Pr <<= 1), !(Pr & 4194240) && (Pr = 64), e;
  }
  function $l(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Yt(e, n, t) {
    (e.pendingLanes |= n),
      n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (n = 31 - nn(n)),
      (e[n] = t);
  }
  function Za(e, n) {
    var t = e.pendingLanes & ~n;
    (e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= n),
      (e.mutableReadLanes &= n),
      (e.entangledLanes &= n),
      (n = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - nn(t),
        u = 1 << l;
      (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~u);
    }
  }
  function Ql(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - nn(t),
        l = 1 << r;
      (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
    }
  }
  var B = 0;
  function ti(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var ri,
    Kl,
    li,
    ui,
    oi,
    Xl = !1,
    Tr = [],
    zn = null,
    Tn = null,
    Ln = null,
    Wt = new Map(),
    Vt = new Map(),
    Rn = [],
    Ja =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function ii(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
        break;
      case "pointerover":
      case "pointerout":
        Wt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Vt.delete(n.pointerId);
    }
  }
  function At(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: u,
          targetContainers: [l],
        }),
        n !== null && ((n = tr(n)), n !== null && Kl(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function qa(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return (zn = At(zn, e, n, t, r, l)), !0;
      case "dragenter":
        return (Tn = At(Tn, e, n, t, r, l)), !0;
      case "mouseover":
        return (Ln = At(Ln, e, n, t, r, l)), !0;
      case "pointerover":
        var u = l.pointerId;
        return Wt.set(u, At(Wt.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return (
          (u = l.pointerId), Vt.set(u, At(Vt.get(u) || null, e, n, t, r, l)), !0
        );
    }
    return !1;
  }
  function si(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Ko(t)), n !== null)) {
            (e.blockedOn = n),
              oi(e.priority, function () {
                li(t);
              });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Zl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        (jl = r), t.target.dispatchEvent(r), (jl = null);
      } else return (n = tr(t)), n !== null && Kl(n), (e.blockedOn = t), !1;
      n.shift();
    }
    return !0;
  }
  function ai(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function ba() {
    (Xl = !1),
      zn !== null && Lr(zn) && (zn = null),
      Tn !== null && Lr(Tn) && (Tn = null),
      Ln !== null && Lr(Ln) && (Ln = null),
      Wt.forEach(ai),
      Vt.forEach(ai);
  }
  function Ht(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      Xl ||
        ((Xl = !0),
        D.unstable_scheduleCallback(D.unstable_NormalPriority, ba)));
  }
  function Bt(e) {
    function n(l) {
      return Ht(l, e);
    }
    if (0 < Tr.length) {
      Ht(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      zn !== null && Ht(zn, e),
        Tn !== null && Ht(Tn, e),
        Ln !== null && Ht(Ln, e),
        Wt.forEach(n),
        Vt.forEach(n),
        t = 0;
      t < Rn.length;
      t++
    )
      (r = Rn[t]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && ((t = Rn[0]), t.blockedOn === null); )
      si(t), t.blockedOn === null && Rn.shift();
  }
  var ct = Se.ReactCurrentBatchConfig,
    Rr = !0;
  function ec(e, n, t, r) {
    var l = B,
      u = ct.transition;
    ct.transition = null;
    try {
      (B = 1), Gl(e, n, t, r);
    } finally {
      (B = l), (ct.transition = u);
    }
  }
  function nc(e, n, t, r) {
    var l = B,
      u = ct.transition;
    ct.transition = null;
    try {
      (B = 4), Gl(e, n, t, r);
    } finally {
      (B = l), (ct.transition = u);
    }
  }
  function Gl(e, n, t, r) {
    if (Rr) {
      var l = Zl(e, n, t, r);
      if (l === null) pu(e, n, r, Mr, t), ii(e, r);
      else if (qa(l, e, n, t, r)) r.stopPropagation();
      else if ((ii(e, r), n & 4 && -1 < Ja.indexOf(e))) {
        for (; l !== null; ) {
          var u = tr(l);
          if (
            (u !== null && ri(u),
            (u = Zl(e, n, t, r)),
            u === null && pu(e, n, r, Mr, t),
            u === l)
          )
            break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else pu(e, n, r, null, t);
    }
  }
  var Mr = null;
  function Zl(e, n, t, r) {
    if (((Mr = null), (e = Ul(r)), (e = Gn(e)), e !== null))
      if (((n = Xn(e)), n === null)) e = null;
      else if (((t = n.tag), t === 13)) {
        if (((e = Ko(n)), e !== null)) return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else n !== e && (e = null);
    return (Mr = e), null;
  }
  function ci(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Aa()) {
          case Hl:
            return 1;
          case bo:
            return 4;
          case Cr:
          case Ha:
            return 16;
          case ei:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mn = null,
    Jl = null,
    Ir = null;
  function fi() {
    if (Ir) return Ir;
    var e,
      n = Jl,
      t = n.length,
      r,
      l = "value" in Mn ? Mn.value : Mn.textContent,
      u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l[u - r]; r++);
    return (Ir = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Or(e) {
    var n = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Dr() {
    return !0;
  }
  function di() {
    return !1;
  }
  function Ye(e) {
    function n(t, r, l, u, o) {
      (this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = u),
        (this.target = o),
        (this.currentTarget = null);
      for (var i in e)
        e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(u) : u[i]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? Dr
          : di),
        (this.isPropagationStopped = di),
        this
      );
    }
    return (
      x(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = Dr));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = Dr));
        },
        persist: function () {},
        isPersistent: Dr,
      }),
      n
    );
  }
  var ft = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ql = Ye(ft),
    $t = x({}, ft, { view: 0, detail: 0 }),
    tc = Ye($t),
    bl,
    eu,
    Qt,
    Fr = x({}, $t, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: tu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Qt &&
              (Qt && e.type === "mousemove"
                ? ((bl = e.screenX - Qt.screenX), (eu = e.screenY - Qt.screenY))
                : (eu = bl = 0),
              (Qt = e)),
            bl);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : eu;
      },
    }),
    pi = Ye(Fr),
    rc = x({}, Fr, { dataTransfer: 0 }),
    lc = Ye(rc),
    uc = x({}, $t, { relatedTarget: 0 }),
    nu = Ye(uc),
    oc = x({}, ft, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ic = Ye(oc),
    sc = x({}, ft, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ac = Ye(sc),
    cc = x({}, ft, { data: 0 }),
    mi = Ye(cc),
    fc = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    pc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function mc(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = pc[e])
      ? !!n[e]
      : !1;
  }
  function tu() {
    return mc;
  }
  var hc = x({}, $t, {
      key: function (e) {
        if (e.key) {
          var n = fc[e.key] || e.key;
          if (n !== "Unidentified") return n;
        }
        return e.type === "keypress"
          ? ((e = Or(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? dc[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: tu,
      charCode: function (e) {
        return e.type === "keypress" ? Or(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Or(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    yc = Ye(hc),
    vc = x({}, Fr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    hi = Ye(vc),
    gc = x({}, $t, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: tu,
    }),
    wc = Ye(gc),
    kc = x({}, ft, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Sc = Ye(kc),
    Ec = x({}, Fr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    xc = Ye(Ec),
    Cc = [9, 13, 27, 32],
    ru = fe && "CompositionEvent" in window,
    Kt = null;
  fe && "documentMode" in document && (Kt = document.documentMode);
  var _c = fe && "TextEvent" in window && !Kt,
    yi = fe && (!ru || (Kt && 8 < Kt && 11 >= Kt)),
    vi = " ",
    gi = !1;
  function wi(e, n) {
    switch (e) {
      case "keyup":
        return Cc.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ki(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function Pc(e, n) {
    switch (e) {
      case "compositionend":
        return ki(n);
      case "keypress":
        return n.which !== 32 ? null : ((gi = !0), vi);
      case "textInput":
        return (e = n.data), e === vi && gi ? null : e;
      default:
        return null;
    }
  }
  function Nc(e, n) {
    if (dt)
      return e === "compositionend" || (!ru && wi(e, n))
        ? ((e = fi()), (Ir = Jl = Mn = null), (dt = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return yi && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var zc = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Si(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!zc[e.type] : n === "textarea";
  }
  function Ei(e, n, t, r) {
    Ao(r),
      (n = Vr(n, "onChange")),
      0 < n.length &&
        ((t = new ql("onChange", "change", null, t, r)),
        e.push({ event: t, listeners: n }));
  }
  var Xt = null,
    Gt = null;
  function Tc(e) {
    Wi(e, 0);
  }
  function jr(e) {
    var n = vt(e);
    if (Lo(n)) return e;
  }
  function Lc(e, n) {
    if (e === "change") return n;
  }
  var xi = !1;
  if (fe) {
    var lu;
    if (fe) {
      var uu = "oninput" in document;
      if (!uu) {
        var Ci = document.createElement("div");
        Ci.setAttribute("oninput", "return;"),
          (uu = typeof Ci.oninput == "function");
      }
      lu = uu;
    } else lu = !1;
    xi = lu && (!document.documentMode || 9 < document.documentMode);
  }
  function _i() {
    Xt && (Xt.detachEvent("onpropertychange", Pi), (Gt = Xt = null));
  }
  function Pi(e) {
    if (e.propertyName === "value" && jr(Gt)) {
      var n = [];
      Ei(n, Gt, e, Ul(e)), Qo(Tc, n);
    }
  }
  function Rc(e, n, t) {
    e === "focusin"
      ? (_i(), (Xt = n), (Gt = t), Xt.attachEvent("onpropertychange", Pi))
      : e === "focusout" && _i();
  }
  function Mc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return jr(Gt);
  }
  function Ic(e, n) {
    if (e === "click") return jr(n);
  }
  function Oc(e, n) {
    if (e === "input" || e === "change") return jr(n);
  }
  function Dc(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var tn = typeof Object.is == "function" ? Object.is : Dc;
  function Zt(e, n) {
    if (tn(e, n)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof n != "object" ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!A.call(n, l) || !tn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Ni(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zi(e, n) {
    var t = Ni(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (((r = e + t.textContent.length), e <= n && r >= n))
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Ni(t);
    }
  }
  function Ti(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
        ? !1
        : n && n.nodeType === 3
        ? Ti(e, n.parentNode)
        : "contains" in e
        ? e.contains(n)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(n) & 16)
        : !1
      : !1;
  }
  function Li() {
    for (var e = window, n = kr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = kr(e.document);
    }
    return n;
  }
  function ou(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        n === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Fc(e) {
    var n = Li(),
      t = e.focusedElem,
      r = e.selectionRange;
    if (
      n !== t &&
      t &&
      t.ownerDocument &&
      Ti(t.ownerDocument.documentElement, t)
    ) {
      if (r !== null && ou(t)) {
        if (
          ((n = r.start),
          (e = r.end),
          e === void 0 && (e = n),
          "selectionStart" in t)
        )
          (t.selectionStart = n),
            (t.selectionEnd = Math.min(e, t.value.length));
        else if (
          ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = t.textContent.length,
            u = Math.min(r.start, l);
          (r = r.end === void 0 ? u : Math.min(r.end, l)),
            !e.extend && u > r && ((l = r), (r = u), (u = l)),
            (l = zi(t, u));
          var o = zi(t, r);
          l &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((n = n.createRange()),
            n.setStart(l.node, l.offset),
            e.removeAllRanges(),
            u > r
              ? (e.addRange(n), e.extend(o.node, o.offset))
              : (n.setEnd(o.node, o.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; (e = e.parentNode); )
        e.nodeType === 1 &&
          n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        (e = n[t]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var jc = fe && "documentMode" in document && 11 >= document.documentMode,
    pt = null,
    iu = null,
    Jt = null,
    su = !1;
  function Ri(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    su ||
      pt == null ||
      pt !== kr(r) ||
      ((r = pt),
      "selectionStart" in r && ou(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Jt && Zt(Jt, r)) ||
        ((Jt = r),
        (r = Vr(iu, "onSelect")),
        0 < r.length &&
          ((n = new ql("onSelect", "select", null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = pt))));
  }
  function Ur(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t["Webkit" + e] = "webkit" + n),
      (t["Moz" + e] = "moz" + n),
      t
    );
  }
  var mt = {
      animationend: Ur("Animation", "AnimationEnd"),
      animationiteration: Ur("Animation", "AnimationIteration"),
      animationstart: Ur("Animation", "AnimationStart"),
      transitionend: Ur("Transition", "TransitionEnd"),
    },
    au = {},
    Mi = {};
  fe &&
    ((Mi = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete mt.animationend.animation,
      delete mt.animationiteration.animation,
      delete mt.animationstart.animation),
    "TransitionEvent" in window || delete mt.transitionend.transition);
  function Yr(e) {
    if (au[e]) return au[e];
    if (!mt[e]) return e;
    var n = mt[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in Mi) return (au[e] = n[t]);
    return e;
  }
  var Ii = Yr("animationend"),
    Oi = Yr("animationiteration"),
    Di = Yr("animationstart"),
    Fi = Yr("transitionend"),
    ji = new Map(),
    Ui =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function In(e, n) {
    ji.set(e, n), $(n, [e]);
  }
  for (var cu = 0; cu < Ui.length; cu++) {
    var fu = Ui[cu],
      Uc = fu.toLowerCase(),
      Yc = fu[0].toUpperCase() + fu.slice(1);
    In(Uc, "on" + Yc);
  }
  In(Ii, "onAnimationEnd"),
    In(Oi, "onAnimationIteration"),
    In(Di, "onAnimationStart"),
    In("dblclick", "onDoubleClick"),
    In("focusin", "onFocus"),
    In("focusout", "onBlur"),
    In(Fi, "onTransitionEnd"),
    ce("onMouseEnter", ["mouseout", "mouseover"]),
    ce("onMouseLeave", ["mouseout", "mouseover"]),
    ce("onPointerEnter", ["pointerout", "pointerover"]),
    ce("onPointerLeave", ["pointerout", "pointerover"]),
    $(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    $(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    $("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    $(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    $(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    $(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var qt =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Wc = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(qt)
    );
  function Yi(e, n, t) {
    var r = e.type || "unknown-event";
    (e.currentTarget = t), Ua(r, n, void 0, e), (e.currentTarget = null);
  }
  function Wi(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n)
          for (var o = r.length - 1; 0 <= o; o--) {
            var i = r[o],
              s = i.instance,
              p = i.currentTarget;
            if (((i = i.listener), s !== u && l.isPropagationStopped()))
              break e;
            Yi(l, i, p), (u = s);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((i = r[o]),
              (s = i.instance),
              (p = i.currentTarget),
              (i = i.listener),
              s !== u && l.isPropagationStopped())
            )
              break e;
            Yi(l, i, p), (u = s);
          }
      }
    }
    if (xr) throw ((e = Al), (xr = !1), (Al = null), e);
  }
  function J(e, n) {
    var t = n[wu];
    t === void 0 && (t = n[wu] = new Set());
    var r = e + "__bubble";
    t.has(r) || (Vi(n, e, 2, !1), t.add(r));
  }
  function du(e, n, t) {
    var r = 0;
    n && (r |= 4), Vi(t, e, r, n);
  }
  var Wr = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Wr]) {
      (e[Wr] = !0),
        b.forEach(function (t) {
          t !== "selectionchange" && (Wc.has(t) || du(t, !1, e), du(t, !0, e));
        });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Wr] || ((n[Wr] = !0), du("selectionchange", !1, n));
    }
  }
  function Vi(e, n, t, r) {
    switch (ci(n)) {
      case 1:
        var l = ec;
        break;
      case 4:
        l = nc;
        break;
      default:
        l = Gl;
    }
    (t = l.bind(null, n, t, e)),
      (l = void 0),
      !Vl ||
        (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
        ? e.addEventListener(n, t, { passive: l })
        : e.addEventListener(n, t, !1);
  }
  function pu(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l || (i.nodeType === 8 && i.parentNode === l)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if (
                (s === 3 || s === 4) &&
                ((s = o.stateNode.containerInfo),
                s === l || (s.nodeType === 8 && s.parentNode === l))
              )
                return;
              o = o.return;
            }
          for (; i !== null; ) {
            if (((o = Gn(i)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6)) {
              r = u = o;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    Qo(function () {
      var p = u,
        v = Ul(t),
        g = [];
      e: {
        var h = ji.get(e);
        if (h !== void 0) {
          var S = ql,
            C = e;
          switch (e) {
            case "keypress":
              if (Or(t) === 0) break e;
            case "keydown":
            case "keyup":
              S = yc;
              break;
            case "focusin":
              (C = "focus"), (S = nu);
              break;
            case "focusout":
              (C = "blur"), (S = nu);
              break;
            case "beforeblur":
            case "afterblur":
              S = nu;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = pi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = lc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = wc;
              break;
            case Ii:
            case Oi:
            case Di:
              S = ic;
              break;
            case Fi:
              S = Sc;
              break;
            case "scroll":
              S = tc;
              break;
            case "wheel":
              S = xc;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = ac;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = hi;
          }
          var _ = (n & 4) !== 0,
            ae = !_ && e === "scroll",
            f = _ ? (h !== null ? h + "Capture" : null) : h;
          _ = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (
              (d.tag === 5 &&
                w !== null &&
                ((d = w),
                f !== null &&
                  ((w = Dt(a, f)), w != null && _.push(er(a, w, d)))),
              ae)
            )
              break;
            a = a.return;
          }
          0 < _.length &&
            ((h = new S(h, C, null, t, v)), g.push({ event: h, listeners: _ }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (S = e === "mouseout" || e === "pointerout"),
            h &&
              t !== jl &&
              (C = t.relatedTarget || t.fromElement) &&
              (Gn(C) || C[wn]))
          )
            break e;
          if (
            (S || h) &&
            ((h =
              v.window === v
                ? v
                : (h = v.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            S
              ? ((C = t.relatedTarget || t.toElement),
                (S = p),
                (C = C ? Gn(C) : null),
                C !== null &&
                  ((ae = Xn(C)), C !== ae || (C.tag !== 5 && C.tag !== 6)) &&
                  (C = null))
              : ((S = null), (C = p)),
            S !== C)
          ) {
            if (
              ((_ = pi),
              (w = "onMouseLeave"),
              (f = "onMouseEnter"),
              (a = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((_ = hi),
                (w = "onPointerLeave"),
                (f = "onPointerEnter"),
                (a = "pointer")),
              (ae = S == null ? h : vt(S)),
              (d = C == null ? h : vt(C)),
              (h = new _(w, a + "leave", S, t, v)),
              (h.target = ae),
              (h.relatedTarget = d),
              (w = null),
              Gn(v) === p &&
                ((_ = new _(f, a + "enter", C, t, v)),
                (_.target = d),
                (_.relatedTarget = ae),
                (w = _)),
              (ae = w),
              S && C)
            )
              n: {
                for (_ = S, f = C, a = 0, d = _; d; d = ht(d)) a++;
                for (d = 0, w = f; w; w = ht(w)) d++;
                for (; 0 < a - d; ) (_ = ht(_)), a--;
                for (; 0 < d - a; ) (f = ht(f)), d--;
                for (; a--; ) {
                  if (_ === f || (f !== null && _ === f.alternate)) break n;
                  (_ = ht(_)), (f = ht(f));
                }
                _ = null;
              }
            else _ = null;
            S !== null && Ai(g, h, S, _, !1),
              C !== null && ae !== null && Ai(g, ae, C, _, !0);
          }
        }
        e: {
          if (
            ((h = p ? vt(p) : window),
            (S = h.nodeName && h.nodeName.toLowerCase()),
            S === "select" || (S === "input" && h.type === "file"))
          )
            var P = Lc;
          else if (Si(h))
            if (xi) P = Oc;
            else {
              P = Mc;
              var N = Rc;
            }
          else
            (S = h.nodeName) &&
              S.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (P = Ic);
          if (P && (P = P(e, p))) {
            Ei(g, P, t, v);
            break e;
          }
          N && N(e, h, p),
            e === "focusout" &&
              (N = h._wrapperState) &&
              N.controlled &&
              h.type === "number" &&
              Ml(h, "number", h.value);
        }
        switch (((N = p ? vt(p) : window), e)) {
          case "focusin":
            (Si(N) || N.contentEditable === "true") &&
              ((pt = N), (iu = p), (Jt = null));
            break;
          case "focusout":
            Jt = iu = pt = null;
            break;
          case "mousedown":
            su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (su = !1), Ri(g, t, v);
            break;
          case "selectionchange":
            if (jc) break;
          case "keydown":
          case "keyup":
            Ri(g, t, v);
        }
        var z;
        if (ru)
          e: {
            switch (e) {
              case "compositionstart":
                var L = "onCompositionStart";
                break e;
              case "compositionend":
                L = "onCompositionEnd";
                break e;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break e;
            }
            L = void 0;
          }
        else
          dt
            ? wi(e, t) && (L = "onCompositionEnd")
            : e === "keydown" &&
              t.keyCode === 229 &&
              (L = "onCompositionStart");
        L &&
          (yi &&
            t.locale !== "ko" &&
            (dt || L !== "onCompositionStart"
              ? L === "onCompositionEnd" && dt && (z = fi())
              : ((Mn = v),
                (Jl = "value" in Mn ? Mn.value : Mn.textContent),
                (dt = !0))),
          (N = Vr(p, L)),
          0 < N.length &&
            ((L = new mi(L, e, null, t, v)),
            g.push({ event: L, listeners: N }),
            z ? (L.data = z) : ((z = ki(t)), z !== null && (L.data = z)))),
          (z = _c ? Pc(e, t) : Nc(e, t)) &&
            ((p = Vr(p, "onBeforeInput")),
            0 < p.length &&
              ((v = new mi("onBeforeInput", "beforeinput", null, t, v)),
              g.push({ event: v, listeners: p }),
              (v.data = z)));
      }
      Wi(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Vr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e,
        u = l.stateNode;
      l.tag === 5 &&
        u !== null &&
        ((l = u),
        (u = Dt(e, t)),
        u != null && r.unshift(er(e, u, l)),
        (u = Dt(e, n)),
        u != null && r.push(er(e, u, l))),
        (e = e.return);
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ai(e, n, t, r, l) {
    for (var u = n._reactName, o = []; t !== null && t !== r; ) {
      var i = t,
        s = i.alternate,
        p = i.stateNode;
      if (s !== null && s === r) break;
      i.tag === 5 &&
        p !== null &&
        ((i = p),
        l
          ? ((s = Dt(t, u)), s != null && o.unshift(er(t, s, i)))
          : l || ((s = Dt(t, u)), s != null && o.push(er(t, s, i)))),
        (t = t.return);
    }
    o.length !== 0 && e.push({ event: n, listeners: o });
  }
  var Vc = /\r\n?/g,
    Ac = /\u0000|\uFFFD/g;
  function Hi(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Vc,
        `
`
      )
      .replace(Ac, "");
  }
  function Ar(e, n, t) {
    if (((n = Hi(n)), Hi(e) !== n && t)) throw Error(m(425));
  }
  function Hr() {}
  var mu = null,
    hu = null;
  function yu(e, n) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof n.children == "string" ||
      typeof n.children == "number" ||
      (typeof n.dangerouslySetInnerHTML == "object" &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var vu = typeof setTimeout == "function" ? setTimeout : void 0,
    Hc = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bi = typeof Promise == "function" ? Promise : void 0,
    Bc =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bi < "u"
        ? function (e) {
            return Bi.resolve(null).then(e).catch($c);
          }
        : vu;
  function $c(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gu(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === "/$")) {
          if (r === 0) {
            e.removeChild(l), Bt(n);
            return;
          }
          r--;
        } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
      t = l;
    } while (t);
    Bt(n);
  }
  function On(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function $i(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yt = Math.random().toString(36).slice(2),
    pn = "__reactFiber$" + yt,
    nr = "__reactProps$" + yt,
    wn = "__reactContainer$" + yt,
    wu = "__reactEvents$" + yt,
    Qc = "__reactListeners$" + yt,
    Kc = "__reactHandles$" + yt;
  function Gn(e) {
    var n = e[pn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[wn] || t[pn])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = $i(e); e !== null; ) {
            if ((t = e[pn])) return t;
            e = $i(e);
          }
        return n;
      }
      (e = t), (t = e.parentNode);
    }
    return null;
  }
  function tr(e) {
    return (
      (e = e[pn] || e[wn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function vt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function Br(e) {
    return e[nr] || null;
  }
  var ku = [],
    gt = -1;
  function Dn(e) {
    return { current: e };
  }
  function q(e) {
    0 > gt || ((e.current = ku[gt]), (ku[gt] = null), gt--);
  }
  function Z(e, n) {
    gt++, (ku[gt] = e.current), (e.current = n);
  }
  var Fn = {},
    Ee = Dn(Fn),
    Re = Dn(!1),
    Zn = Fn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return Fn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      u;
    for (u in t) l[u] = n[u];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = n),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function Me(e) {
    return (e = e.childContextTypes), e != null;
  }
  function $r() {
    q(Re), q(Ee);
  }
  function Qi(e, n, t) {
    if (Ee.current !== Fn) throw Error(m(168));
    Z(Ee, n), Z(Re, t);
  }
  function Ki(e, n, t) {
    var r = e.stateNode;
    if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
      return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, G(e) || "Unknown", l));
    return x({}, t, r);
  }
  function Qr(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Fn),
      (Zn = Ee.current),
      Z(Ee, e),
      Z(Re, Re.current),
      !0
    );
  }
  function Xi(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t
      ? ((e = Ki(e, n, Zn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        q(Re),
        q(Ee),
        Z(Ee, e))
      : q(Re),
      Z(Re, t);
  }
  var kn = null,
    Kr = !1,
    Su = !1;
  function Gi(e) {
    kn === null ? (kn = [e]) : kn.push(e);
  }
  function Xc(e) {
    (Kr = !0), Gi(e);
  }
  function jn() {
    if (!Su && kn !== null) {
      Su = !0;
      var e = 0,
        n = B;
      try {
        var t = kn;
        for (B = 1; e < t.length; e++) {
          var r = t[e];
          do r = r(!0);
          while (r !== null);
        }
        (kn = null), (Kr = !1);
      } catch (l) {
        throw (kn !== null && (kn = kn.slice(e + 1)), Jo(Hl, jn), l);
      } finally {
        (B = n), (Su = !1);
      }
    }
    return null;
  }
  var kt = [],
    St = 0,
    Xr = null,
    Gr = 0,
    Qe = [],
    Ke = 0,
    Jn = null,
    Sn = 1,
    En = "";
  function qn(e, n) {
    (kt[St++] = Gr), (kt[St++] = Xr), (Xr = e), (Gr = n);
  }
  function Zi(e, n, t) {
    (Qe[Ke++] = Sn), (Qe[Ke++] = En), (Qe[Ke++] = Jn), (Jn = e);
    var r = Sn;
    e = En;
    var l = 32 - nn(r) - 1;
    (r &= ~(1 << l)), (t += 1);
    var u = 32 - nn(n) + l;
    if (30 < u) {
      var o = l - (l % 5);
      (u = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Sn = (1 << (32 - nn(n) + l)) | (t << l) | r),
        (En = u + e);
    } else (Sn = (1 << u) | (t << l) | r), (En = e);
  }
  function Eu(e) {
    e.return !== null && (qn(e, 1), Zi(e, 1, 0));
  }
  function xu(e) {
    for (; e === Xr; )
      (Xr = kt[--St]), (kt[St] = null), (Gr = kt[--St]), (kt[St] = null);
    for (; e === Jn; )
      (Jn = Qe[--Ke]),
        (Qe[Ke] = null),
        (En = Qe[--Ke]),
        (Qe[Ke] = null),
        (Sn = Qe[--Ke]),
        (Qe[Ke] = null);
  }
  var We = null,
    Ve = null,
    re = !1,
    rn = null;
  function Ji(e, n) {
    var t = Je(5, null, null, 0);
    (t.elementType = "DELETED"),
      (t.stateNode = n),
      (t.return = e),
      (n = e.deletions),
      n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
  }
  function qi(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return (
          (n =
            n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
              ? null
              : n),
          n !== null
            ? ((e.stateNode = n), (We = e), (Ve = On(n.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
          n !== null ? ((e.stateNode = n), (We = e), (Ve = null), !0) : !1
        );
      case 13:
        return (
          (n = n.nodeType !== 8 ? null : n),
          n !== null
            ? ((t = Jn !== null ? { id: Sn, overflow: En } : null),
              (e.memoizedState = {
                dehydrated: n,
                treeContext: t,
                retryLane: 1073741824,
              }),
              (t = Je(18, null, null, 0)),
              (t.stateNode = n),
              (t.return = e),
              (e.child = t),
              (We = e),
              (Ve = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Cu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function _u(e) {
    if (re) {
      var n = Ve;
      if (n) {
        var t = n;
        if (!qi(e, n)) {
          if (Cu(e)) throw Error(m(418));
          n = On(t.nextSibling);
          var r = We;
          n && qi(e, n)
            ? Ji(r, t)
            : ((e.flags = (e.flags & -4097) | 2), (re = !1), (We = e));
        }
      } else {
        if (Cu(e)) throw Error(m(418));
        (e.flags = (e.flags & -4097) | 2), (re = !1), (We = e);
      }
    }
  }
  function bi(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    We = e;
  }
  function Zr(e) {
    if (e !== We) return !1;
    if (!re) return bi(e), (re = !0), !1;
    var n;
    if (
      ((n = e.tag !== 3) &&
        !(n = e.tag !== 5) &&
        ((n = e.type),
        (n = n !== "head" && n !== "body" && !yu(e.type, e.memoizedProps))),
      n && (n = Ve))
    ) {
      if (Cu(e)) throw (es(), Error(m(418)));
      for (; n; ) Ji(e, n), (n = On(n.nextSibling));
    }
    if ((bi(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ve = On(e.nextSibling);
                break e;
              }
              n--;
            } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
          }
          e = e.nextSibling;
        }
        Ve = null;
      }
    } else Ve = We ? On(e.stateNode.nextSibling) : null;
    return !0;
  }
  function es() {
    for (var e = Ve; e; ) e = On(e.nextSibling);
  }
  function Et() {
    (Ve = We = null), (re = !1);
  }
  function Pu(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  var Gc = Se.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (
      ((e = t.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (t._owner) {
        if (((t = t._owner), t)) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r,
          u = "" + e;
        return n !== null &&
          n.ref !== null &&
          typeof n.ref == "function" &&
          n.ref._stringRef === u
          ? n.ref
          : ((n = function (o) {
              var i = l.refs;
              o === null ? delete i[u] : (i[u] = o);
            }),
            (n._stringRef = u),
            n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Jr(e, n) {
    throw (
      ((e = Object.prototype.toString.call(n)),
      Error(
        m(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(n).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function ns(e) {
    var n = e._init;
    return n(e._payload);
  }
  function ts(e) {
    function n(f, a) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
      }
    }
    function t(f, a) {
      if (!e) return null;
      for (; a !== null; ) n(f, a), (a = a.sibling);
      return null;
    }
    function r(f, a) {
      for (f = new Map(); a !== null; )
        a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
      return f;
    }
    function l(f, a) {
      return (f = $n(f, a)), (f.index = 0), (f.sibling = null), f;
    }
    function u(f, a, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
              : ((f.flags |= 2), a))
          : ((f.flags |= 1048576), a)
      );
    }
    function o(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, a, d, w) {
      return a === null || a.tag !== 6
        ? ((a = go(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function s(f, a, d, w) {
      var P = d.type;
      return P === Te
        ? v(f, a, d.props.children, w, d.key)
        : a !== null &&
          (a.elementType === P ||
            (typeof P == "object" &&
              P !== null &&
              P.$$typeof === Le &&
              ns(P) === a.type))
        ? ((w = l(a, d.props)), (w.ref = rr(f, a, d)), (w.return = f), w)
        : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
          (w.ref = rr(f, a, d)),
          (w.return = f),
          w);
    }
    function p(f, a, d, w) {
      return a === null ||
        a.tag !== 4 ||
        a.stateNode.containerInfo !== d.containerInfo ||
        a.stateNode.implementation !== d.implementation
        ? ((a = wo(d, f.mode, w)), (a.return = f), a)
        : ((a = l(a, d.children || [])), (a.return = f), a);
    }
    function v(f, a, d, w, P) {
      return a === null || a.tag !== 7
        ? ((a = ot(d, f.mode, w, P)), (a.return = f), a)
        : ((a = l(a, d)), (a.return = f), a);
    }
    function g(f, a, d) {
      if ((typeof a == "string" && a !== "") || typeof a == "number")
        return (a = go("" + a, f.mode, d)), (a.return = f), a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return (
              (d = Sl(a.type, a.key, a.props, null, f.mode, d)),
              (d.ref = rr(f, null, a)),
              (d.return = f),
              d
            );
          case Pe:
            return (a = wo(a, f.mode, d)), (a.return = f), a;
          case Le:
            var w = a._init;
            return g(f, w(a._payload), d);
        }
        if (Mt(a) || T(a))
          return (a = ot(a, f.mode, d, null)), (a.return = f), a;
        Jr(f, a);
      }
      return null;
    }
    function h(f, a, d, w) {
      var P = a !== null ? a.key : null;
      if ((typeof d == "string" && d !== "") || typeof d == "number")
        return P !== null ? null : i(f, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === P ? s(f, a, d, w) : null;
          case Pe:
            return d.key === P ? p(f, a, d, w) : null;
          case Le:
            return (P = d._init), h(f, a, P(d._payload), w);
        }
        if (Mt(d) || T(d)) return P !== null ? null : v(f, a, d, w, null);
        Jr(f, d);
      }
      return null;
    }
    function S(f, a, d, w, P) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (f = f.get(d) || null), i(a, f, "" + w, P);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), s(a, f, w, P)
            );
          case Pe:
            return (
              (f = f.get(w.key === null ? d : w.key) || null), p(a, f, w, P)
            );
          case Le:
            var N = w._init;
            return S(f, a, d, N(w._payload), P);
        }
        if (Mt(w) || T(w)) return (f = f.get(d) || null), v(a, f, w, P, null);
        Jr(a, w);
      }
      return null;
    }
    function C(f, a, d, w) {
      for (
        var P = null, N = null, z = a, L = (a = 0), ve = null;
        z !== null && L < d.length;
        L++
      ) {
        z.index > L ? ((ve = z), (z = null)) : (ve = z.sibling);
        var W = h(f, z, d[L], w);
        if (W === null) {
          z === null && (z = ve);
          break;
        }
        e && z && W.alternate === null && n(f, z),
          (a = u(W, a, L)),
          N === null ? (P = W) : (N.sibling = W),
          (N = W),
          (z = ve);
      }
      if (L === d.length) return t(f, z), re && qn(f, L), P;
      if (z === null) {
        for (; L < d.length; L++)
          (z = g(f, d[L], w)),
            z !== null &&
              ((a = u(z, a, L)),
              N === null ? (P = z) : (N.sibling = z),
              (N = z));
        return re && qn(f, L), P;
      }
      for (z = r(f, z); L < d.length; L++)
        (ve = S(z, f, L, d[L], w)),
          ve !== null &&
            (e &&
              ve.alternate !== null &&
              z.delete(ve.key === null ? L : ve.key),
            (a = u(ve, a, L)),
            N === null ? (P = ve) : (N.sibling = ve),
            (N = ve));
      return (
        e &&
          z.forEach(function (Qn) {
            return n(f, Qn);
          }),
        re && qn(f, L),
        P
      );
    }
    function _(f, a, d, w) {
      var P = T(d);
      if (typeof P != "function") throw Error(m(150));
      if (((d = P.call(d)), d == null)) throw Error(m(151));
      for (
        var N = (P = null), z = a, L = (a = 0), ve = null, W = d.next();
        z !== null && !W.done;
        L++, W = d.next()
      ) {
        z.index > L ? ((ve = z), (z = null)) : (ve = z.sibling);
        var Qn = h(f, z, W.value, w);
        if (Qn === null) {
          z === null && (z = ve);
          break;
        }
        e && z && Qn.alternate === null && n(f, z),
          (a = u(Qn, a, L)),
          N === null ? (P = Qn) : (N.sibling = Qn),
          (N = Qn),
          (z = ve);
      }
      if (W.done) return t(f, z), re && qn(f, L), P;
      if (z === null) {
        for (; !W.done; L++, W = d.next())
          (W = g(f, W.value, w)),
            W !== null &&
              ((a = u(W, a, L)),
              N === null ? (P = W) : (N.sibling = W),
              (N = W));
        return re && qn(f, L), P;
      }
      for (z = r(f, z); !W.done; L++, W = d.next())
        (W = S(z, f, L, W.value, w)),
          W !== null &&
            (e && W.alternate !== null && z.delete(W.key === null ? L : W.key),
            (a = u(W, a, L)),
            N === null ? (P = W) : (N.sibling = W),
            (N = W));
      return (
        e &&
          z.forEach(function (zf) {
            return n(f, zf);
          }),
        re && qn(f, L),
        P
      );
    }
    function ae(f, a, d, w) {
      if (
        (typeof d == "object" &&
          d !== null &&
          d.type === Te &&
          d.key === null &&
          (d = d.props.children),
        typeof d == "object" && d !== null)
      ) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var P = d.key, N = a; N !== null; ) {
                if (N.key === P) {
                  if (((P = d.type), P === Te)) {
                    if (N.tag === 7) {
                      t(f, N.sibling),
                        (a = l(N, d.props.children)),
                        (a.return = f),
                        (f = a);
                      break e;
                    }
                  } else if (
                    N.elementType === P ||
                    (typeof P == "object" &&
                      P !== null &&
                      P.$$typeof === Le &&
                      ns(P) === N.type)
                  ) {
                    t(f, N.sibling),
                      (a = l(N, d.props)),
                      (a.ref = rr(f, N, d)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                  t(f, N);
                  break;
                } else n(f, N);
                N = N.sibling;
              }
              d.type === Te
                ? ((a = ot(d.props.children, f.mode, w, d.key)),
                  (a.return = f),
                  (f = a))
                : ((w = Sl(d.type, d.key, d.props, null, f.mode, w)),
                  (w.ref = rr(f, a, d)),
                  (w.return = f),
                  (f = w));
            }
            return o(f);
          case Pe:
            e: {
              for (N = d.key; a !== null; ) {
                if (a.key === N)
                  if (
                    a.tag === 4 &&
                    a.stateNode.containerInfo === d.containerInfo &&
                    a.stateNode.implementation === d.implementation
                  ) {
                    t(f, a.sibling),
                      (a = l(a, d.children || [])),
                      (a.return = f),
                      (f = a);
                    break e;
                  } else {
                    t(f, a);
                    break;
                  }
                else n(f, a);
                a = a.sibling;
              }
              (a = wo(d, f.mode, w)), (a.return = f), (f = a);
            }
            return o(f);
          case Le:
            return (N = d._init), ae(f, a, N(d._payload), w);
        }
        if (Mt(d)) return C(f, a, d, w);
        if (T(d)) return _(f, a, d, w);
        Jr(f, d);
      }
      return (typeof d == "string" && d !== "") || typeof d == "number"
        ? ((d = "" + d),
          a !== null && a.tag === 6
            ? (t(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
            : (t(f, a), (a = go(d, f.mode, w)), (a.return = f), (f = a)),
          o(f))
        : t(f, a);
    }
    return ae;
  }
  var xt = ts(!0),
    rs = ts(!1),
    qr = Dn(null),
    br = null,
    Ct = null,
    Nu = null;
  function zu() {
    Nu = Ct = br = null;
  }
  function Tu(e) {
    var n = qr.current;
    q(qr), (e._currentValue = n);
  }
  function Lu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        e === t)
      )
        break;
      e = e.return;
    }
  }
  function _t(e, n) {
    (br = e),
      (Nu = Ct = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & n && (Ie = !0), (e.firstContext = null));
  }
  function Xe(e) {
    var n = e._currentValue;
    if (Nu !== e)
      if (((e = { context: e, memoizedValue: n, next: null }), Ct === null)) {
        if (br === null) throw Error(m(308));
        (Ct = e), (br.dependencies = { lanes: 0, firstContext: e });
      } else Ct = Ct.next = e;
    return n;
  }
  var bn = null;
  function Ru(e) {
    bn === null ? (bn = [e]) : bn.push(e);
  }
  function ls(e, n, t, r) {
    var l = n.interleaved;
    return (
      l === null ? ((t.next = t), Ru(n)) : ((t.next = l.next), (l.next = t)),
      (n.interleaved = t),
      xn(e, r)
    );
  }
  function xn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      (e.childLanes |= n),
        (t = e.alternate),
        t !== null && (t.childLanes |= n),
        (t = e),
        (e = e.return);
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Mu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function us(e, n) {
    (e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Cn(e, n) {
    return {
      eventTime: e,
      lane: n,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Yn(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), j & 2)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        xn(e, t)
      );
    }
    return (
      (l = r.interleaved),
      l === null ? ((n.next = n), Ru(r)) : ((n.next = l.next), (l.next = n)),
      (r.interleaved = n),
      xn(e, t)
    );
  }
  function el(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
    ) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Ql(e, t);
    }
  }
  function os(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        u = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var o = {
            eventTime: t.eventTime,
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: t.callback,
            next: null,
          };
          u === null ? (l = u = o) : (u = u.next = o), (t = t.next);
        } while (t !== null);
        u === null ? (l = u = n) : (u = u.next = n);
      } else l = u = n;
      (t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = t);
      return;
    }
    (e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n);
  }
  function nl(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var u = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i,
        p = s.next;
      (s.next = null), o === null ? (u = p) : (o.next = p), (o = s);
      var v = e.alternate;
      v !== null &&
        ((v = v.updateQueue),
        (i = v.lastBaseUpdate),
        i !== o &&
          (i === null ? (v.firstBaseUpdate = p) : (i.next = p),
          (v.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var g = l.baseState;
      (o = 0), (v = p = s = null), (i = u);
      do {
        var h = i.lane,
          S = i.eventTime;
        if ((r & h) === h) {
          v !== null &&
            (v = v.next =
              {
                eventTime: S,
                lane: 0,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              });
          e: {
            var C = e,
              _ = i;
            switch (((h = n), (S = t), _.tag)) {
              case 1:
                if (((C = _.payload), typeof C == "function")) {
                  g = C.call(S, g, h);
                  break e;
                }
                g = C;
                break e;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = _.payload),
                  (h = typeof C == "function" ? C.call(S, g, h) : C),
                  h == null)
                )
                  break e;
                g = x({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          i.callback !== null &&
            i.lane !== 0 &&
            ((e.flags |= 64),
            (h = l.effects),
            h === null ? (l.effects = [i]) : h.push(i));
        } else
          (S = {
            eventTime: S,
            lane: h,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            v === null ? ((p = v = S), (s = g)) : (v = v.next = S),
            (o |= h);
        if (((i = i.next), i === null)) {
          if (((i = l.shared.pending), i === null)) break;
          (h = i),
            (i = h.next),
            (h.next = null),
            (l.lastBaseUpdate = h),
            (l.shared.pending = null);
        }
      } while (!0);
      if (
        (v === null && (s = g),
        (l.baseState = s),
        (l.firstBaseUpdate = p),
        (l.lastBaseUpdate = v),
        (n = l.shared.interleaved),
        n !== null)
      ) {
        l = n;
        do (o |= l.lane), (l = l.next);
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      (tt |= o), (e.lanes = o), (e.memoizedState = g);
    }
  }
  function is(e, n, t) {
    if (((e = n.effects), (n.effects = null), e !== null))
      for (n = 0; n < e.length; n++) {
        var r = e[n],
          l = r.callback;
        if (l !== null) {
          if (((r.callback = null), (r = t), typeof l != "function"))
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var lr = {},
    mn = Dn(lr),
    ur = Dn(lr),
    or = Dn(lr);
  function et(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function Iu(e, n) {
    switch ((Z(or, n), Z(ur, e), Z(mn, lr), (e = n.nodeType), e)) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ol(null, "");
        break;
      default:
        (e = e === 8 ? n.parentNode : n),
          (n = e.namespaceURI || null),
          (e = e.tagName),
          (n = Ol(n, e));
    }
    q(mn), Z(mn, n);
  }
  function Pt() {
    q(mn), q(ur), q(or);
  }
  function ss(e) {
    et(or.current);
    var n = et(mn.current),
      t = Ol(n, e.type);
    n !== t && (Z(ur, e), Z(mn, t));
  }
  function Ou(e) {
    ur.current === e && (q(mn), q(ur));
  }
  var le = Dn(0);
  function tl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (
          t !== null &&
          ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
    return null;
  }
  var Du = [];
  function Fu() {
    for (var e = 0; e < Du.length; e++)
      Du[e]._workInProgressVersionPrimary = null;
    Du.length = 0;
  }
  var rl = Se.ReactCurrentDispatcher,
    ju = Se.ReactCurrentBatchConfig,
    nt = 0,
    ue = null,
    pe = null,
    he = null,
    ll = !1,
    ir = !1,
    sr = 0,
    Zc = 0;
  function xe() {
    throw Error(m(321));
  }
  function Uu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!tn(e[t], n[t])) return !1;
    return !0;
  }
  function Yu(e, n, t, r, l, u) {
    if (
      ((nt = u),
      (ue = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (rl.current = e === null || e.memoizedState === null ? ef : nf),
      (e = t(r, l)),
      ir)
    ) {
      u = 0;
      do {
        if (((ir = !1), (sr = 0), 25 <= u)) throw Error(m(301));
        (u += 1),
          (he = pe = null),
          (n.updateQueue = null),
          (rl.current = tf),
          (e = t(r, l));
      } while (ir);
    }
    if (
      ((rl.current = il),
      (n = pe !== null && pe.next !== null),
      (nt = 0),
      (he = pe = ue = null),
      (ll = !1),
      n)
    )
      throw Error(m(300));
    return e;
  }
  function Wu() {
    var e = sr !== 0;
    return (sr = 0), e;
  }
  function hn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return he === null ? (ue.memoizedState = he = e) : (he = he.next = e), he;
  }
  function Ge() {
    if (pe === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = pe.next;
    var n = he === null ? ue.memoizedState : he.next;
    if (n !== null) (he = n), (pe = e);
    else {
      if (e === null) throw Error(m(310));
      (pe = e),
        (e = {
          memoizedState: pe.memoizedState,
          baseState: pe.baseState,
          baseQueue: pe.baseQueue,
          queue: pe.queue,
          next: null,
        }),
        he === null ? (ue.memoizedState = he = e) : (he = he.next = e);
    }
    return he;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Vu(e) {
    var n = Ge(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = pe,
      l = r.baseQueue,
      u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        (l.next = u.next), (u.next = o);
      }
      (r.baseQueue = l = u), (t.pending = null);
    }
    if (l !== null) {
      (u = l.next), (r = r.baseState);
      var i = (o = null),
        s = null,
        p = u;
      do {
        var v = p.lane;
        if ((nt & v) === v)
          s !== null &&
            (s = s.next =
              {
                lane: 0,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null,
              }),
            (r = p.hasEagerState ? p.eagerState : e(r, p.action));
        else {
          var g = {
            lane: v,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null,
          };
          s === null ? ((i = s = g), (o = r)) : (s = s.next = g),
            (ue.lanes |= v),
            (tt |= v);
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? (o = r) : (s.next = i),
        tn(r, n.memoizedState) || (Ie = !0),
        (n.memoizedState = r),
        (n.baseState = o),
        (n.baseQueue = s),
        (t.lastRenderedState = r);
    }
    if (((e = t.interleaved), e !== null)) {
      l = e;
      do (u = l.lane), (ue.lanes |= u), (tt |= u), (l = l.next);
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Au(e) {
    var n = Ge(),
      t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var o = (l = l.next);
      do (u = e(u, o.action)), (o = o.next);
      while (o !== l);
      tn(u, n.memoizedState) || (Ie = !0),
        (n.memoizedState = u),
        n.baseQueue === null && (n.baseState = u),
        (t.lastRenderedState = u);
    }
    return [u, r];
  }
  function as() {}
  function cs(e, n) {
    var t = ue,
      r = Ge(),
      l = n(),
      u = !tn(r.memoizedState, l);
    if (
      (u && ((r.memoizedState = l), (Ie = !0)),
      (r = r.queue),
      Hu(ps.bind(null, t, r, e), [e]),
      r.getSnapshot !== n || u || (he !== null && he.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        cr(9, ds.bind(null, t, r, l, n), void 0, null),
        ye === null)
      )
        throw Error(m(349));
      nt & 30 || fs(t, n, l);
    }
    return l;
  }
  function fs(e, n, t) {
    (e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = ue.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (ue.updateQueue = n),
          (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
  }
  function ds(e, n, t, r) {
    (n.value = t), (n.getSnapshot = r), ms(n) && hs(e);
  }
  function ps(e, n, t) {
    return t(function () {
      ms(n) && hs(e);
    });
  }
  function ms(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !tn(e, t);
    } catch {
      return !0;
    }
  }
  function hs(e) {
    var n = xn(e, 1);
    n !== null && sn(n, e, 1, -1);
  }
  function ys(e) {
    var n = hn();
    return (
      typeof e == "function" && (e = e()),
      (n.memoizedState = n.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ar,
        lastRenderedState: e,
      }),
      (n.queue = e),
      (e = e.dispatch = bc.bind(null, ue, e)),
      [n.memoizedState, e]
    );
  }
  function cr(e, n, t, r) {
    return (
      (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
      (n = ue.updateQueue),
      n === null
        ? ((n = { lastEffect: null, stores: null }),
          (ue.updateQueue = n),
          (n.lastEffect = e.next = e))
        : ((t = n.lastEffect),
          t === null
            ? (n.lastEffect = e.next = e)
            : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
      e
    );
  }
  function vs() {
    return Ge().memoizedState;
  }
  function ul(e, n, t, r) {
    var l = hn();
    (ue.flags |= e),
      (l.memoizedState = cr(1 | n, t, void 0, r === void 0 ? null : r));
  }
  function ol(e, n, t, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (pe !== null) {
      var o = pe.memoizedState;
      if (((u = o.destroy), r !== null && Uu(r, o.deps))) {
        l.memoizedState = cr(n, t, u, r);
        return;
      }
    }
    (ue.flags |= e), (l.memoizedState = cr(1 | n, t, u, r));
  }
  function gs(e, n) {
    return ul(8390656, 8, e, n);
  }
  function Hu(e, n) {
    return ol(2048, 8, e, n);
  }
  function ws(e, n) {
    return ol(4, 2, e, n);
  }
  function ks(e, n) {
    return ol(4, 4, e, n);
  }
  function Ss(e, n) {
    if (typeof n == "function")
      return (
        (e = e()),
        n(e),
        function () {
          n(null);
        }
      );
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function Es(e, n, t) {
    return (
      (t = t != null ? t.concat([e]) : null), ol(4, 4, Ss.bind(null, n, e), t)
    );
  }
  function Bu() {}
  function xs(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((t.memoizedState = [e, n]), e);
  }
  function Cs(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Uu(n, r[1])
      ? r[0]
      : ((e = e()), (t.memoizedState = [e, n]), e);
  }
  function _s(e, n, t) {
    return nt & 21
      ? (tn(t, n) ||
          ((t = ni()), (ue.lanes |= t), (tt |= t), (e.baseState = !0)),
        n)
      : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = t));
  }
  function Jc(e, n) {
    var t = B;
    (B = t !== 0 && 4 > t ? t : 4), e(!0);
    var r = ju.transition;
    ju.transition = {};
    try {
      e(!1), n();
    } finally {
      (B = t), (ju.transition = r);
    }
  }
  function Ps() {
    return Ge().memoizedState;
  }
  function qc(e, n, t) {
    var r = Hn(e);
    if (
      ((t = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ns(e))
    )
      zs(n, t);
    else if (((t = ls(e, n, t, r)), t !== null)) {
      var l = ze();
      sn(t, e, r, l), Ts(t, n, r);
    }
  }
  function bc(e, n, t) {
    var r = Hn(e),
      l = {
        lane: r,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Ns(e)) zs(n, l);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = n.lastRenderedReducer), u !== null)
      )
        try {
          var o = n.lastRenderedState,
            i = u(o, t);
          if (((l.hasEagerState = !0), (l.eagerState = i), tn(i, o))) {
            var s = n.interleaved;
            s === null
              ? ((l.next = l), Ru(n))
              : ((l.next = s.next), (s.next = l)),
              (n.interleaved = l);
            return;
          }
        } catch {
        } finally {
        }
      (t = ls(e, n, l, r)),
        t !== null && ((l = ze()), sn(t, e, r, l), Ts(t, n, r));
    }
  }
  function Ns(e) {
    var n = e.alternate;
    return e === ue || (n !== null && n === ue);
  }
  function zs(e, n) {
    ir = ll = !0;
    var t = e.pending;
    t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n);
  }
  function Ts(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      (r &= e.pendingLanes), (t |= r), (n.lanes = t), Ql(e, t);
    }
  }
  var il = {
      readContext: Xe,
      useCallback: xe,
      useContext: xe,
      useEffect: xe,
      useImperativeHandle: xe,
      useInsertionEffect: xe,
      useLayoutEffect: xe,
      useMemo: xe,
      useReducer: xe,
      useRef: xe,
      useState: xe,
      useDebugValue: xe,
      useDeferredValue: xe,
      useTransition: xe,
      useMutableSource: xe,
      useSyncExternalStore: xe,
      useId: xe,
      unstable_isNewReconciler: !1,
    },
    ef = {
      readContext: Xe,
      useCallback: function (e, n) {
        return (hn().memoizedState = [e, n === void 0 ? null : n]), e;
      },
      useContext: Xe,
      useEffect: gs,
      useImperativeHandle: function (e, n, t) {
        return (
          (t = t != null ? t.concat([e]) : null),
          ul(4194308, 4, Ss.bind(null, n, e), t)
        );
      },
      useLayoutEffect: function (e, n) {
        return ul(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        return ul(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = hn();
        return (
          (n = n === void 0 ? null : n),
          (e = e()),
          (t.memoizedState = [e, n]),
          e
        );
      },
      useReducer: function (e, n, t) {
        var r = hn();
        return (
          (n = t !== void 0 ? t(n) : n),
          (r.memoizedState = r.baseState = n),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (r.queue = e),
          (e = e.dispatch = qc.bind(null, ue, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = hn();
        return (e = { current: e }), (n.memoizedState = e);
      },
      useState: ys,
      useDebugValue: Bu,
      useDeferredValue: function (e) {
        return (hn().memoizedState = e);
      },
      useTransition: function () {
        var e = ys(!1),
          n = e[0];
        return (e = Jc.bind(null, e[1])), (hn().memoizedState = e), [n, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, n, t) {
        var r = ue,
          l = hn();
        if (re) {
          if (t === void 0) throw Error(m(407));
          t = t();
        } else {
          if (((t = n()), ye === null)) throw Error(m(349));
          nt & 30 || fs(r, n, t);
        }
        l.memoizedState = t;
        var u = { value: t, getSnapshot: n };
        return (
          (l.queue = u),
          gs(ps.bind(null, r, u, e), [e]),
          (r.flags |= 2048),
          cr(9, ds.bind(null, r, u, t, n), void 0, null),
          t
        );
      },
      useId: function () {
        var e = hn(),
          n = ye.identifierPrefix;
        if (re) {
          var t = En,
            r = Sn;
          (t = (r & ~(1 << (32 - nn(r) - 1))).toString(32) + t),
            (n = ":" + n + "R" + t),
            (t = sr++),
            0 < t && (n += "H" + t.toString(32)),
            (n += ":");
        } else (t = Zc++), (n = ":" + n + "r" + t.toString(32) + ":");
        return (e.memoizedState = n);
      },
      unstable_isNewReconciler: !1,
    },
    nf = {
      readContext: Xe,
      useCallback: xs,
      useContext: Xe,
      useEffect: Hu,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: ks,
      useMemo: Cs,
      useReducer: Vu,
      useRef: vs,
      useState: function () {
        return Vu(ar);
      },
      useDebugValue: Bu,
      useDeferredValue: function (e) {
        var n = Ge();
        return _s(n, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Vu(ar)[0],
          n = Ge().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    },
    tf = {
      readContext: Xe,
      useCallback: xs,
      useContext: Xe,
      useEffect: Hu,
      useImperativeHandle: Es,
      useInsertionEffect: ws,
      useLayoutEffect: ks,
      useMemo: Cs,
      useReducer: Au,
      useRef: vs,
      useState: function () {
        return Au(ar);
      },
      useDebugValue: Bu,
      useDeferredValue: function (e) {
        var n = Ge();
        return pe === null ? (n.memoizedState = e) : _s(n, pe.memoizedState, e);
      },
      useTransition: function () {
        var e = Au(ar)[0],
          n = Ge().memoizedState;
        return [e, n];
      },
      useMutableSource: as,
      useSyncExternalStore: cs,
      useId: Ps,
      unstable_isNewReconciler: !1,
    };
  function ln(e, n) {
    if (e && e.defaultProps) {
      (n = x({}, n)), (e = e.defaultProps);
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function $u(e, n, t, r) {
    (n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : x({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var sl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Xn(e) === e : !1;
    },
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = ze(),
        l = Hn(e),
        u = Cn(r, l);
      (u.payload = n),
        t != null && (u.callback = t),
        (n = Yn(e, u, l)),
        n !== null && (sn(n, e, l, r), el(n, e, l));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = ze(),
        l = Hn(e),
        u = Cn(r, l);
      (u.tag = 1),
        (u.payload = n),
        t != null && (u.callback = t),
        (n = Yn(e, u, l)),
        n !== null && (sn(n, e, l, r), el(n, e, l));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = ze(),
        r = Hn(e),
        l = Cn(t, r);
      (l.tag = 2),
        n != null && (l.callback = n),
        (n = Yn(e, l, r)),
        n !== null && (sn(n, e, r, t), el(n, e, r));
    },
  };
  function Ls(e, n, t, r, l, u, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, u, o)
        : n.prototype && n.prototype.isPureReactComponent
        ? !Zt(t, r) || !Zt(l, u)
        : !0
    );
  }
  function Rs(e, n, t) {
    var r = !1,
      l = Fn,
      u = n.contextType;
    return (
      typeof u == "object" && u !== null
        ? (u = Xe(u))
        : ((l = Me(n) ? Zn : Ee.current),
          (r = n.contextTypes),
          (u = (r = r != null) ? wt(e, l) : Fn)),
      (n = new n(t, u)),
      (e.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = sl),
      (e.stateNode = n),
      (n._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = u)),
      n
    );
  }
  function Ms(e, n, t, r) {
    (e = n.state),
      typeof n.componentWillReceiveProps == "function" &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == "function" &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && sl.enqueueReplaceState(n, n.state, null);
  }
  function Qu(e, n, t, r) {
    var l = e.stateNode;
    (l.props = t), (l.state = e.memoizedState), (l.refs = {}), Mu(e);
    var u = n.contextType;
    typeof u == "object" && u !== null
      ? (l.context = Xe(u))
      : ((u = Me(n) ? Zn : Ee.current), (l.context = wt(e, u))),
      (l.state = e.memoizedState),
      (u = n.getDerivedStateFromProps),
      typeof u == "function" && ($u(e, n, u, t), (l.state = e.memoizedState)),
      typeof n.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((n = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        n !== l.state && sl.enqueueReplaceState(l, l.state, null),
        nl(e, t, l, r),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Nt(e, n) {
    try {
      var t = "",
        r = n;
      do (t += U(r)), (r = r.return);
      while (r);
      var l = t;
    } catch (u) {
      l =
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Ku(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Xu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  var rf = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, n, t) {
    (t = Cn(-1, t)), (t.tag = 3), (t.payload = { element: null });
    var r = n.value;
    return (
      (t.callback = function () {
        hl || ((hl = !0), (ao = r)), Xu(e, n);
      }),
      t
    );
  }
  function Os(e, n, t) {
    (t = Cn(-1, t)), (t.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      (t.payload = function () {
        return r(l);
      }),
        (t.callback = function () {
          Xu(e, n);
        });
    }
    var u = e.stateNode;
    return (
      u !== null &&
        typeof u.componentDidCatch == "function" &&
        (t.callback = function () {
          Xu(e, n),
            typeof r != "function" &&
              (Vn === null ? (Vn = new Set([this])) : Vn.add(this));
          var o = n.stack;
          this.componentDidCatch(n.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      t
    );
  }
  function Ds(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new rf();
      var l = new Set();
      r.set(n, l);
    } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
    l.has(t) || (l.add(t), (e = gf.bind(null, e, n, t)), n.then(e, e));
  }
  function Fs(e) {
    do {
      var n;
      if (
        ((n = e.tag === 13) &&
          ((n = e.memoizedState),
          (n = n !== null ? n.dehydrated !== null : !0)),
        n)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function js(e, n, t, r, l) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = l), e)
      : (e === n
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (t.flags |= 131072),
            (t.flags &= -52805),
            t.tag === 1 &&
              (t.alternate === null
                ? (t.tag = 17)
                : ((n = Cn(-1, 1)), (n.tag = 2), Yn(t, n, 1))),
            (t.lanes |= 1)),
        e);
  }
  var lf = Se.ReactCurrentOwner,
    Ie = !1;
  function Ne(e, n, t, r) {
    n.child = e === null ? rs(n, null, t, r) : xt(n, e.child, t, r);
  }
  function Us(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return (
      _t(n, l),
      (r = Yu(e, n, t, r, u, l)),
      (t = Wu()),
      e !== null && !Ie
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          _n(e, n, l))
        : (re && t && Eu(n), (n.flags |= 1), Ne(e, n, r, l), n.child)
    );
  }
  function Ys(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" &&
        !vo(u) &&
        u.defaultProps === void 0 &&
        t.compare === null &&
        t.defaultProps === void 0
        ? ((n.tag = 15), (n.type = u), Ws(e, n, u, r, l))
        : ((e = Sl(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((u = e.child), !(e.lanes & l))) {
      var o = u.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Zt), t(o, r) && e.ref === n.ref)
      )
        return _n(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = $n(u, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Ws(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zt(u, r) && e.ref === n.ref)
        if (((Ie = !1), (n.pendingProps = r = u), (e.lanes & l) !== 0))
          e.flags & 131072 && (Ie = !0);
        else return (n.lanes = e.lanes), _n(e, n, l);
    }
    return Gu(e, n, t, r, l);
  }
  function Vs(e, n, t) {
    var r = n.pendingProps,
      l = r.children,
      u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Z(Tt, Ae),
          (Ae |= t);
      else {
        if (!(t & 1073741824))
          return (
            (e = u !== null ? u.baseLanes | t : t),
            (n.lanes = n.childLanes = 1073741824),
            (n.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (n.updateQueue = null),
            Z(Tt, Ae),
            (Ae |= e),
            null
          );
        (n.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = u !== null ? u.baseLanes : t),
          Z(Tt, Ae),
          (Ae |= r);
      }
    else
      u !== null ? ((r = u.baseLanes | t), (n.memoizedState = null)) : (r = t),
        Z(Tt, Ae),
        (Ae |= r);
    return Ne(e, n, l, t), n.child;
  }
  function As(e, n) {
    var t = n.ref;
    ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
      ((n.flags |= 512), (n.flags |= 2097152));
  }
  function Gu(e, n, t, r, l) {
    var u = Me(t) ? Zn : Ee.current;
    return (
      (u = wt(n, u)),
      _t(n, l),
      (t = Yu(e, n, t, r, u, l)),
      (r = Wu()),
      e !== null && !Ie
        ? ((n.updateQueue = e.updateQueue),
          (n.flags &= -2053),
          (e.lanes &= ~l),
          _n(e, n, l))
        : (re && r && Eu(n), (n.flags |= 1), Ne(e, n, t, l), n.child)
    );
  }
  function Hs(e, n, t, r, l) {
    if (Me(t)) {
      var u = !0;
      Qr(n);
    } else u = !1;
    if ((_t(n, l), n.stateNode === null))
      cl(e, n), Rs(n, t, r), Qu(n, t, r, l), (r = !0);
    else if (e === null) {
      var o = n.stateNode,
        i = n.memoizedProps;
      o.props = i;
      var s = o.context,
        p = t.contextType;
      typeof p == "object" && p !== null
        ? (p = Xe(p))
        : ((p = Me(t) ? Zn : Ee.current), (p = wt(n, p)));
      var v = t.getDerivedStateFromProps,
        g =
          typeof v == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      g ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((i !== r || s !== p) && Ms(n, o, r, p)),
        (Un = !1);
      var h = n.memoizedState;
      (o.state = h),
        nl(n, r, o, l),
        (s = n.memoizedState),
        i !== r || h !== s || Re.current || Un
          ? (typeof v == "function" && ($u(n, t, v, r), (s = n.memoizedState)),
            (i = Un || Ls(n, t, i, r, h, s, p))
              ? (g ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (n.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = s)),
            (o.props = r),
            (o.state = s),
            (o.context = p),
            (r = i))
          : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
            (r = !1));
    } else {
      (o = n.stateNode),
        us(e, n),
        (i = n.memoizedProps),
        (p = n.type === n.elementType ? i : ln(n.type, i)),
        (o.props = p),
        (g = n.pendingProps),
        (h = o.context),
        (s = t.contextType),
        typeof s == "object" && s !== null
          ? (s = Xe(s))
          : ((s = Me(t) ? Zn : Ee.current), (s = wt(n, s)));
      var S = t.getDerivedStateFromProps;
      (v =
        typeof S == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((i !== g || h !== s) && Ms(n, o, r, s)),
        (Un = !1),
        (h = n.memoizedState),
        (o.state = h),
        nl(n, r, o, l);
      var C = n.memoizedState;
      i !== g || h !== C || Re.current || Un
        ? (typeof S == "function" && ($u(n, t, S, r), (C = n.memoizedState)),
          (p = Un || Ls(n, t, p, r, h, C, s) || !1)
            ? (v ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, C, s),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, C, s)),
              typeof o.componentDidUpdate == "function" && (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (n.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = C)),
          (o.props = r),
          (o.state = C),
          (o.context = s),
          (r = p))
        : (typeof o.componentDidUpdate != "function" ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return Zu(e, n, t, r, u, l);
  }
  function Zu(e, n, t, r, l, u) {
    As(e, n);
    var o = (n.flags & 128) !== 0;
    if (!r && !o) return l && Xi(n, t, !1), _n(e, n, u);
    (r = n.stateNode), (lf.current = n);
    var i =
      o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (n.flags |= 1),
      e !== null && o
        ? ((n.child = xt(n, e.child, null, u)), (n.child = xt(n, null, i, u)))
        : Ne(e, n, i, u),
      (n.memoizedState = r.state),
      l && Xi(n, t, !0),
      n.child
    );
  }
  function Bs(e) {
    var n = e.stateNode;
    n.pendingContext
      ? Qi(e, n.pendingContext, n.pendingContext !== n.context)
      : n.context && Qi(e, n.context, !1),
      Iu(e, n.containerInfo);
  }
  function $s(e, n, t, r, l) {
    return Et(), Pu(l), (n.flags |= 256), Ne(e, n, t, r), n.child;
  }
  var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Qs(e, n, t) {
    var r = n.pendingProps,
      l = le.current,
      u = !1,
      o = (n.flags & 128) !== 0,
      i;
    if (
      ((i = o) ||
        (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      i
        ? ((u = !0), (n.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Z(le, l & 1),
      e === null)
    )
      return (
        _u(n),
        (e = n.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (n.mode & 1
              ? e.data === "$!"
                ? (n.lanes = 8)
                : (n.lanes = 1073741824)
              : (n.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            u
              ? ((r = n.mode),
                (u = n.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && u !== null
                  ? ((u.childLanes = 0), (u.pendingProps = o))
                  : (u = El(o, r, 0, null)),
                (e = ot(e, r, t, null)),
                (u.return = n),
                (e.return = n),
                (u.sibling = e),
                (n.child = u),
                (n.child.memoizedState = qu(t)),
                (n.memoizedState = Ju),
                e)
              : bu(n, o))
      );
    if (((l = e.memoizedState), l !== null && ((i = l.dehydrated), i !== null)))
      return uf(e, n, o, r, i, l, t);
    if (u) {
      (u = r.fallback), (o = n.mode), (l = e.child), (i = l.sibling);
      var s = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && n.child !== l
          ? ((r = n.child),
            (r.childLanes = 0),
            (r.pendingProps = s),
            (n.deletions = null))
          : ((r = $n(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
        i !== null ? (u = $n(i, u)) : ((u = ot(u, o, t, null)), (u.flags |= 2)),
        (u.return = n),
        (r.return = n),
        (r.sibling = u),
        (n.child = r),
        (r = u),
        (u = n.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? qu(t)
            : {
                baseLanes: o.baseLanes | t,
                cachePool: null,
                transitions: o.transitions,
              }),
        (u.memoizedState = o),
        (u.childLanes = e.childLanes & ~t),
        (n.memoizedState = Ju),
        r
      );
    }
    return (
      (u = e.child),
      (e = u.sibling),
      (r = $n(u, { mode: "visible", children: r.children })),
      !(n.mode & 1) && (r.lanes = t),
      (r.return = n),
      (r.sibling = null),
      e !== null &&
        ((t = n.deletions),
        t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
      (n.child = r),
      (n.memoizedState = null),
      r
    );
  }
  function bu(e, n) {
    return (
      (n = El({ mode: "visible", children: n }, e.mode, 0, null)),
      (n.return = e),
      (e.child = n)
    );
  }
  function al(e, n, t, r) {
    return (
      r !== null && Pu(r),
      xt(n, e.child, null, t),
      (e = bu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function uf(e, n, t, r, l, u, o) {
    if (t)
      return n.flags & 256
        ? ((n.flags &= -257), (r = Ku(Error(m(422)))), al(e, n, o, r))
        : n.memoizedState !== null
        ? ((n.child = e.child), (n.flags |= 128), null)
        : ((u = r.fallback),
          (l = n.mode),
          (r = El({ mode: "visible", children: r.children }, l, 0, null)),
          (u = ot(u, l, o, null)),
          (u.flags |= 2),
          (r.return = n),
          (u.return = n),
          (r.sibling = u),
          (n.child = r),
          n.mode & 1 && xt(n, e.child, null, o),
          (n.child.memoizedState = qu(o)),
          (n.memoizedState = Ju),
          u);
    if (!(n.mode & 1)) return al(e, n, o, null);
    if (l.data === "$!") {
      if (((r = l.nextSibling && l.nextSibling.dataset), r)) var i = r.dgst;
      return (
        (r = i), (u = Error(m(419))), (r = Ku(u, r, void 0)), al(e, n, o, r)
      );
    }
    if (((i = (o & e.childLanes) !== 0), Ie || i)) {
      if (((r = ye), r !== null)) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        (l = l & (r.suspendedLanes | o) ? 0 : l),
          l !== 0 &&
            l !== u.retryLane &&
            ((u.retryLane = l), xn(e, l), sn(r, e, l, -1));
      }
      return yo(), (r = Ku(Error(m(421)))), al(e, n, o, r);
    }
    return l.data === "$?"
      ? ((n.flags |= 128),
        (n.child = e.child),
        (n = wf.bind(null, e)),
        (l._reactRetry = n),
        null)
      : ((e = u.treeContext),
        (Ve = On(l.nextSibling)),
        (We = n),
        (re = !0),
        (rn = null),
        e !== null &&
          ((Qe[Ke++] = Sn),
          (Qe[Ke++] = En),
          (Qe[Ke++] = Jn),
          (Sn = e.id),
          (En = e.overflow),
          (Jn = n)),
        (n = bu(n, r.children)),
        (n.flags |= 4096),
        n);
  }
  function Ks(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Lu(e.return, n, t);
  }
  function eo(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
        })
      : ((u.isBackwards = n),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = r),
        (u.tail = t),
        (u.tailMode = l));
  }
  function Xs(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      u = r.tail;
    if ((Ne(e, n, r.children, t), (r = le.current), r & 2))
      (r = (r & 1) | 2), (n.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Ks(e, t, n);
          else if (e.tag === 19) Ks(e, t, n);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((Z(le, r), !(n.mode & 1))) n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            (e = t.alternate),
              e !== null && tl(e) === null && (l = t),
              (t = t.sibling);
          (t = l),
            t === null
              ? ((l = n.child), (n.child = null))
              : ((l = t.sibling), (t.sibling = null)),
            eo(n, !1, l, t, u);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && tl(e) === null)) {
              n.child = l;
              break;
            }
            (e = l.sibling), (l.sibling = t), (t = l), (l = e);
          }
          eo(n, !0, t, null, u);
          break;
        case "together":
          eo(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
  }
  function _n(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (tt |= n.lanes),
      !(t & n.childLanes))
    )
      return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (
        e = n.child, t = $n(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        (e = e.sibling),
          (t = t.sibling = $n(e, e.pendingProps)),
          (t.return = n);
      t.sibling = null;
    }
    return n.child;
  }
  function of(e, n, t) {
    switch (n.tag) {
      case 3:
        Bs(n), Et();
        break;
      case 5:
        ss(n);
        break;
      case 1:
        Me(n.type) && Qr(n);
        break;
      case 4:
        Iu(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context,
          l = n.memoizedProps.value;
        Z(qr, r._currentValue), (r._currentValue = l);
        break;
      case 13:
        if (((r = n.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (Z(le, le.current & 1), (n.flags |= 128), null)
            : t & n.child.childLanes
            ? Qs(e, n, t)
            : (Z(le, le.current & 1),
              (e = _n(e, n, t)),
              e !== null ? e.sibling : null);
        Z(le, le.current & 1);
        break;
      case 19:
        if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
          if (r) return Xs(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Z(le, le.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (n.lanes = 0), Vs(e, n, t);
    }
    return _n(e, n, t);
  }
  var Gs, no, Zs, Js;
  (Gs = function (e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }),
    (no = function () {}),
    (Zs = function (e, n, t, r) {
      var l = e.memoizedProps;
      if (l !== r) {
        (e = n.stateNode), et(mn.current);
        var u = null;
        switch (t) {
          case "input":
            (l = Ll(e, l)), (r = Ll(e, r)), (u = []);
            break;
          case "select":
            (l = x({}, l, { value: void 0 })),
              (r = x({}, r, { value: void 0 })),
              (u = []);
            break;
          case "textarea":
            (l = Il(e, l)), (r = Il(e, r)), (u = []);
            break;
          default:
            typeof l.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = Hr);
        }
        Dl(t, r);
        var o;
        t = null;
        for (p in l)
          if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
            if (p === "style") {
              var i = l[p];
              for (o in i) i.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (F.hasOwnProperty(p)
                  ? u || (u = [])
                  : (u = u || []).push(p, null));
        for (p in r) {
          var s = r[p];
          if (
            ((i = l != null ? l[p] : void 0),
            r.hasOwnProperty(p) && s !== i && (s != null || i != null))
          )
            if (p === "style")
              if (i) {
                for (o in i)
                  !i.hasOwnProperty(o) ||
                    (s && s.hasOwnProperty(o)) ||
                    (t || (t = {}), (t[o] = ""));
                for (o in s)
                  s.hasOwnProperty(o) &&
                    i[o] !== s[o] &&
                    (t || (t = {}), (t[o] = s[o]));
              } else t || (u || (u = []), u.push(p, t)), (t = s);
            else
              p === "dangerouslySetInnerHTML"
                ? ((s = s ? s.__html : void 0),
                  (i = i ? i.__html : void 0),
                  s != null && i !== s && (u = u || []).push(p, s))
                : p === "children"
                ? (typeof s != "string" && typeof s != "number") ||
                  (u = u || []).push(p, "" + s)
                : p !== "suppressContentEditableWarning" &&
                  p !== "suppressHydrationWarning" &&
                  (F.hasOwnProperty(p)
                    ? (s != null && p === "onScroll" && J("scroll", e),
                      u || i === s || (u = []))
                    : (u = u || []).push(p, s));
        }
        t && (u = u || []).push("style", t);
        var p = u;
        (n.updateQueue = p) && (n.flags |= 4);
      }
    }),
    (Js = function (e, n, t, r) {
      t !== r && (n.flags |= 4);
    });
  function fr(e, n) {
    if (!re)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), (n = n.sibling);
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), (t = t.sibling);
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ce(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 14680064),
          (r |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling);
    else
      for (l = e.child; l !== null; )
        (t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = t), n;
  }
  function sf(e, n, t) {
    var r = n.pendingProps;
    switch ((xu(n), n.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ce(n), null;
      case 1:
        return Me(n.type) && $r(), Ce(n), null;
      case 3:
        return (
          (r = n.stateNode),
          Pt(),
          q(Re),
          q(Ee),
          Fu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (Zr(n)
              ? (n.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
                ((n.flags |= 1024), rn !== null && (po(rn), (rn = null)))),
          no(e, n),
          Ce(n),
          null
        );
      case 5:
        Ou(n);
        var l = et(or.current);
        if (((t = n.type), e !== null && n.stateNode != null))
          Zs(e, n, t, r, l),
            e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return Ce(n), null;
          }
          if (((e = et(mn.current)), Zr(n))) {
            (r = n.stateNode), (t = n.type);
            var u = n.memoizedProps;
            switch (((r[pn] = n), (r[nr] = u), (e = (n.mode & 1) !== 0), t)) {
              case "dialog":
                J("cancel", r), J("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                J("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++) J(qt[l], r);
                break;
              case "source":
                J("error", r);
                break;
              case "img":
              case "image":
              case "link":
                J("error", r), J("load", r);
                break;
              case "details":
                J("toggle", r);
                break;
              case "input":
                Ro(r, u), J("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!u.multiple }),
                  J("invalid", r);
                break;
              case "textarea":
                Oo(r, u), J("invalid", r);
            }
            Dl(t, u), (l = null);
            for (var o in u)
              if (u.hasOwnProperty(o)) {
                var i = u[o];
                o === "children"
                  ? typeof i == "string"
                    ? r.textContent !== i &&
                      (u.suppressHydrationWarning !== !0 &&
                        Ar(r.textContent, i, e),
                      (l = ["children", i]))
                    : typeof i == "number" &&
                      r.textContent !== "" + i &&
                      (u.suppressHydrationWarning !== !0 &&
                        Ar(r.textContent, i, e),
                      (l = ["children", "" + i]))
                  : F.hasOwnProperty(o) &&
                    i != null &&
                    o === "onScroll" &&
                    J("scroll", r);
              }
            switch (t) {
              case "input":
                wr(r), Io(r, u, !0);
                break;
              case "textarea":
                wr(r), Fo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Hr);
            }
            (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
          } else {
            (o = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = jo(t)),
              e === "http://www.w3.org/1999/xhtml"
                ? t === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(t, { is: r.is }))
                  : ((e = o.createElement(t)),
                    t === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, t)),
              (e[pn] = n),
              (e[nr] = r),
              Gs(e, n, !1, !1),
              (n.stateNode = e);
            e: {
              switch (((o = Fl(t, r)), t)) {
                case "dialog":
                  J("cancel", e), J("close", e), (l = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  J("load", e), (l = r);
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++) J(qt[l], e);
                  l = r;
                  break;
                case "source":
                  J("error", e), (l = r);
                  break;
                case "img":
                case "image":
                case "link":
                  J("error", e), J("load", e), (l = r);
                  break;
                case "details":
                  J("toggle", e), (l = r);
                  break;
                case "input":
                  Ro(e, r), (l = Ll(e, r)), J("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (l = x({}, r, { value: void 0 })),
                    J("invalid", e);
                  break;
                case "textarea":
                  Oo(e, r), (l = Il(e, r)), J("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(t, l), (i = l);
              for (u in i)
                if (i.hasOwnProperty(u)) {
                  var s = i[u];
                  u === "style"
                    ? Wo(e, s)
                    : u === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0), s != null && Uo(e, s))
                    : u === "children"
                    ? typeof s == "string"
                      ? (t !== "textarea" || s !== "") && It(e, s)
                      : typeof s == "number" && It(e, "" + s)
                    : u !== "suppressContentEditableWarning" &&
                      u !== "suppressHydrationWarning" &&
                      u !== "autoFocus" &&
                      (F.hasOwnProperty(u)
                        ? s != null && u === "onScroll" && J("scroll", e)
                        : s != null && qe(e, u, s, o));
                }
              switch (t) {
                case "input":
                  wr(e), Io(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Fo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + H(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (u = r.value),
                    u != null
                      ? it(e, !!r.multiple, u, !1)
                      : r.defaultValue != null &&
                        it(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (n.flags |= 4);
          }
          n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
        }
        return Ce(n), null;
      case 6:
        if (e && n.stateNode != null) Js(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (((t = et(or.current)), et(mn.current), Zr(n))) {
            if (
              ((r = n.stateNode),
              (t = n.memoizedProps),
              (r[pn] = n),
              (u = r.nodeValue !== t) && ((e = We), e !== null))
            )
              switch (e.tag) {
                case 3:
                  Ar(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    Ar(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            u && (n.flags |= 4);
          } else
            (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
              (r[pn] = n),
              (n.stateNode = r);
        }
        return Ce(n), null;
      case 13:
        if (
          (q(le),
          (r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (re && Ve !== null && n.mode & 1 && !(n.flags & 128))
            es(), Et(), (n.flags |= 98560), (u = !1);
          else if (((u = Zr(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (
                ((u = n.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(m(317));
              u[pn] = n;
            } else
              Et(),
                !(n.flags & 128) && (n.memoizedState = null),
                (n.flags |= 4);
            Ce(n), (u = !1);
          } else rn !== null && (po(rn), (rn = null)), (u = !0);
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128
          ? ((n.lanes = t), n)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((n.child.flags |= 8192),
              n.mode & 1 &&
                (e === null || le.current & 1 ? me === 0 && (me = 3) : yo())),
            n.updateQueue !== null && (n.flags |= 4),
            Ce(n),
            null);
      case 4:
        return (
          Pt(),
          no(e, n),
          e === null && bt(n.stateNode.containerInfo),
          Ce(n),
          null
        );
      case 10:
        return Tu(n.type._context), Ce(n), null;
      case 17:
        return Me(n.type) && $r(), Ce(n), null;
      case 19:
        if ((q(le), (u = n.memoizedState), u === null)) return Ce(n), null;
        if (((r = (n.flags & 128) !== 0), (o = u.rendering), o === null))
          if (r) fr(u, !1);
          else {
            if (me !== 0 || (e !== null && e.flags & 128))
              for (e = n.child; e !== null; ) {
                if (((o = tl(e)), o !== null)) {
                  for (
                    n.flags |= 128,
                      fr(u, !1),
                      r = o.updateQueue,
                      r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                      n.subtreeFlags = 0,
                      r = t,
                      t = n.child;
                    t !== null;

                  )
                    (u = t),
                      (e = r),
                      (u.flags &= 14680066),
                      (o = u.alternate),
                      o === null
                        ? ((u.childLanes = 0),
                          (u.lanes = e),
                          (u.child = null),
                          (u.subtreeFlags = 0),
                          (u.memoizedProps = null),
                          (u.memoizedState = null),
                          (u.updateQueue = null),
                          (u.dependencies = null),
                          (u.stateNode = null))
                        : ((u.childLanes = o.childLanes),
                          (u.lanes = o.lanes),
                          (u.child = o.child),
                          (u.subtreeFlags = 0),
                          (u.deletions = null),
                          (u.memoizedProps = o.memoizedProps),
                          (u.memoizedState = o.memoizedState),
                          (u.updateQueue = o.updateQueue),
                          (u.type = o.type),
                          (e = o.dependencies),
                          (u.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (t = t.sibling);
                  return Z(le, (le.current & 1) | 2), n.child;
                }
                e = e.sibling;
              }
            u.tail !== null &&
              se() > Lt &&
              ((n.flags |= 128), (r = !0), fr(u, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = tl(o)), e !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = e.updateQueue),
                t !== null && ((n.updateQueue = t), (n.flags |= 4)),
                fr(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !o.alternate &&
                  !re)
              )
                return Ce(n), null;
            } else
              2 * se() - u.renderingStartTime > Lt &&
                t !== 1073741824 &&
                ((n.flags |= 128), (r = !0), fr(u, !1), (n.lanes = 4194304));
          u.isBackwards
            ? ((o.sibling = n.child), (n.child = o))
            : ((t = u.last),
              t !== null ? (t.sibling = o) : (n.child = o),
              (u.last = o));
        }
        return u.tail !== null
          ? ((n = u.tail),
            (u.rendering = n),
            (u.tail = n.sibling),
            (u.renderingStartTime = se()),
            (n.sibling = null),
            (t = le.current),
            Z(le, r ? (t & 1) | 2 : t & 1),
            n)
          : (Ce(n), null);
      case 22:
      case 23:
        return (
          ho(),
          (r = n.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
          r && n.mode & 1
            ? Ae & 1073741824 &&
              (Ce(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : Ce(n),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function af(e, n) {
    switch ((xu(n), n.tag)) {
      case 1:
        return (
          Me(n.type) && $r(),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Pt(),
          q(Re),
          q(Ee),
          Fu(),
          (e = n.flags),
          e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 5:
        return Ou(n), null;
      case 13:
        if (
          (q(le), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return (
          (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return q(le), null;
      case 4:
        return Pt(), null;
      case 10:
        return Tu(n.type._context), null;
      case 22:
      case 23:
        return ho(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1,
    _e = !1,
    cf = typeof WeakSet == "function" ? WeakSet : Set,
    E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          ie(e, n, r);
        }
      else t.current = null;
  }
  function to(e, n, t) {
    try {
      t();
    } catch (r) {
      ie(e, n, r);
    }
  }
  var qs = !1;
  function ff(e, n) {
    if (((mu = Rr), (e = Li()), ou(e))) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              u = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var o = 0,
              i = -1,
              s = -1,
              p = 0,
              v = 0,
              g = e,
              h = null;
            n: for (;;) {
              for (
                var S;
                g !== t || (l !== 0 && g.nodeType !== 3) || (i = o + l),
                  g !== u || (r !== 0 && g.nodeType !== 3) || (s = o + r),
                  g.nodeType === 3 && (o += g.nodeValue.length),
                  (S = g.firstChild) !== null;

              )
                (h = g), (g = S);
              for (;;) {
                if (g === e) break n;
                if (
                  (h === t && ++p === l && (i = o),
                  h === u && ++v === r && (s = o),
                  (S = g.nextSibling) !== null)
                )
                  break;
                (g = h), (h = g.parentNode);
              }
              g = S;
            }
            t = i === -1 || s === -1 ? null : { start: i, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      hu = { focusedElem: e, selectionRange: t }, Rr = !1, E = n;
      E !== null;

    )
      if (((n = E), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = n), (E = e);
      else
        for (; E !== null; ) {
          n = E;
          try {
            var C = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (C !== null) {
                    var _ = C.memoizedProps,
                      ae = C.memoizedState,
                      f = n.stateNode,
                      a = f.getSnapshotBeforeUpdate(
                        n.elementType === n.type ? _ : ln(n.type, _),
                        ae
                      );
                    f.__reactInternalSnapshotBeforeUpdate = a;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1
                    ? (d.textContent = "")
                    : d.nodeType === 9 &&
                      d.documentElement &&
                      d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            ie(n, n.return, w);
          }
          if (((e = n.sibling), e !== null)) {
            (e.return = n.return), (E = e);
            break;
          }
          E = n.return;
        }
    return (C = qs), (qs = !1), C;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var l = (r = r.next);
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          (l.destroy = void 0), u !== void 0 && to(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
    if (
      ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
    ) {
      var t = (n = n.next);
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ro(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : (n.current = e);
    }
  }
  function bs(e) {
    var n = e.alternate;
    n !== null && ((e.alternate = null), bs(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((n = e.stateNode),
        n !== null &&
          (delete n[pn],
          delete n[nr],
          delete n[wu],
          delete n[Qc],
          delete n[Kc])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function ea(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function na(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || ea(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function lo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        n
          ? t.nodeType === 8
            ? t.parentNode.insertBefore(e, n)
            : t.insertBefore(e, n)
          : (t.nodeType === 8
              ? ((n = t.parentNode), n.insertBefore(e, t))
              : ((n = t), n.appendChild(e)),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (lo(e, n, t), e = e.sibling; e !== null; )
        lo(e, n, t), (e = e.sibling);
  }
  function uo(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (uo(e, n, t), e = e.sibling; e !== null; )
        uo(e, n, t), (e = e.sibling);
  }
  var we = null,
    un = !1;
  function Wn(e, n, t) {
    for (t = t.child; t !== null; ) ta(e, n, t), (t = t.sibling);
  }
  function ta(e, n, t) {
    if (dn && typeof dn.onCommitFiberUnmount == "function")
      try {
        dn.onCommitFiberUnmount(_r, t);
      } catch {}
    switch (t.tag) {
      case 5:
        _e || zt(t, n);
      case 6:
        var r = we,
          l = un;
        (we = null),
          Wn(e, n, t),
          (we = r),
          (un = l),
          we !== null &&
            (un
              ? ((e = we),
                (t = t.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(t)
                  : e.removeChild(t))
              : we.removeChild(t.stateNode));
        break;
      case 18:
        we !== null &&
          (un
            ? ((e = we),
              (t = t.stateNode),
              e.nodeType === 8
                ? gu(e.parentNode, t)
                : e.nodeType === 1 && gu(e, t),
              Bt(e))
            : gu(we, t.stateNode));
        break;
      case 4:
        (r = we),
          (l = un),
          (we = t.stateNode.containerInfo),
          (un = !0),
          Wn(e, n, t),
          (we = r),
          (un = l);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !_e &&
          ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          l = r = r.next;
          do {
            var u = l,
              o = u.destroy;
            (u = u.tag),
              o !== void 0 && (u & 2 || u & 4) && to(t, n, o),
              (l = l.next);
          } while (l !== r);
        }
        Wn(e, n, t);
        break;
      case 1:
        if (
          !_e &&
          (zt(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = t.memoizedProps),
              (r.state = t.memoizedState),
              r.componentWillUnmount();
          } catch (i) {
            ie(t, n, i);
          }
        Wn(e, n, t);
        break;
      case 21:
        Wn(e, n, t);
        break;
      case 22:
        t.mode & 1
          ? ((_e = (r = _e) || t.memoizedState !== null), Wn(e, n, t), (_e = r))
          : Wn(e, n, t);
        break;
      default:
        Wn(e, n, t);
    }
  }
  function ra(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new cf()),
        n.forEach(function (r) {
          var l = kf.bind(null, e, r);
          t.has(r) || (t.add(r), r.then(l, l));
        });
    }
  }
  function on(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var u = e,
            o = n,
            i = o;
          e: for (; i !== null; ) {
            switch (i.tag) {
              case 5:
                (we = i.stateNode), (un = !1);
                break e;
              case 3:
                (we = i.stateNode.containerInfo), (un = !0);
                break e;
              case 4:
                (we = i.stateNode.containerInfo), (un = !0);
                break e;
            }
            i = i.return;
          }
          if (we === null) throw Error(m(160));
          ta(u, o, l), (we = null), (un = !1);
          var s = l.alternate;
          s !== null && (s.return = null), (l.return = null);
        } catch (p) {
          ie(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; ) la(n, e), (n = n.sibling);
  }
  function la(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((on(n, e), yn(e), r & 4)) {
          try {
            dr(3, e, e.return), dl(3, e);
          } catch (_) {
            ie(e, e.return, _);
          }
          try {
            dr(5, e, e.return);
          } catch (_) {
            ie(e, e.return, _);
          }
        }
        break;
      case 1:
        on(n, e), yn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (
          (on(n, e),
          yn(e),
          r & 512 && t !== null && zt(t, t.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            It(l, "");
          } catch (_) {
            ie(e, e.return, _);
          }
        }
        if (r & 4 && ((l = e.stateNode), l != null)) {
          var u = e.memoizedProps,
            o = t !== null ? t.memoizedProps : u,
            i = e.type,
            s = e.updateQueue;
          if (((e.updateQueue = null), s !== null))
            try {
              i === "input" && u.type === "radio" && u.name != null && Mo(l, u),
                Fl(i, o);
              var p = Fl(i, u);
              for (o = 0; o < s.length; o += 2) {
                var v = s[o],
                  g = s[o + 1];
                v === "style"
                  ? Wo(l, g)
                  : v === "dangerouslySetInnerHTML"
                  ? Uo(l, g)
                  : v === "children"
                  ? It(l, g)
                  : qe(l, v, g, p);
              }
              switch (i) {
                case "input":
                  Rl(l, u);
                  break;
                case "textarea":
                  Do(l, u);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!u.multiple;
                  var S = u.value;
                  S != null
                    ? it(l, !!u.multiple, S, !1)
                    : h !== !!u.multiple &&
                      (u.defaultValue != null
                        ? it(l, !!u.multiple, u.defaultValue, !0)
                        : it(l, !!u.multiple, u.multiple ? [] : "", !1));
              }
              l[nr] = u;
            } catch (_) {
              ie(e, e.return, _);
            }
        }
        break;
      case 6:
        if ((on(n, e), yn(e), r & 4)) {
          if (e.stateNode === null) throw Error(m(162));
          (l = e.stateNode), (u = e.memoizedProps);
          try {
            l.nodeValue = u;
          } catch (_) {
            ie(e, e.return, _);
          }
        }
        break;
      case 3:
        if (
          (on(n, e), yn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Bt(n.containerInfo);
          } catch (_) {
            ie(e, e.return, _);
          }
        break;
      case 4:
        on(n, e), yn(e);
        break;
      case 13:
        on(n, e),
          yn(e),
          (l = e.child),
          l.flags & 8192 &&
            ((u = l.memoizedState !== null),
            (l.stateNode.isHidden = u),
            !u ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (so = se())),
          r & 4 && ra(e);
        break;
      case 22:
        if (
          ((v = t !== null && t.memoizedState !== null),
          e.mode & 1 ? ((_e = (p = _e) || v), on(n, e), (_e = p)) : on(n, e),
          yn(e),
          r & 8192)
        ) {
          if (
            ((p = e.memoizedState !== null),
            (e.stateNode.isHidden = p) && !v && e.mode & 1)
          )
            for (E = e, v = e.child; v !== null; ) {
              for (g = E = v; E !== null; ) {
                switch (((h = E), (S = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    dr(4, h, h.return);
                    break;
                  case 1:
                    zt(h, h.return);
                    var C = h.stateNode;
                    if (typeof C.componentWillUnmount == "function") {
                      (r = h), (t = h.return);
                      try {
                        (n = r),
                          (C.props = n.memoizedProps),
                          (C.state = n.memoizedState),
                          C.componentWillUnmount();
                      } catch (_) {
                        ie(r, t, _);
                      }
                    }
                    break;
                  case 5:
                    zt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      ia(g);
                      continue;
                    }
                }
                S !== null ? ((S.return = h), (E = S)) : ia(g);
              }
              v = v.sibling;
            }
          e: for (v = null, g = e; ; ) {
            if (g.tag === 5) {
              if (v === null) {
                v = g;
                try {
                  (l = g.stateNode),
                    p
                      ? ((u = l.style),
                        typeof u.setProperty == "function"
                          ? u.setProperty("display", "none", "important")
                          : (u.display = "none"))
                      : ((i = g.stateNode),
                        (s = g.memoizedProps.style),
                        (o =
                          s != null && s.hasOwnProperty("display")
                            ? s.display
                            : null),
                        (i.style.display = Yo("display", o)));
                } catch (_) {
                  ie(e, e.return, _);
                }
              }
            } else if (g.tag === 6) {
              if (v === null)
                try {
                  g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                } catch (_) {
                  ie(e, e.return, _);
                }
            } else if (
              ((g.tag !== 22 && g.tag !== 23) ||
                g.memoizedState === null ||
                g === e) &&
              g.child !== null
            ) {
              (g.child.return = g), (g = g.child);
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              v === g && (v = null), (g = g.return);
            }
            v === g && (v = null),
              (g.sibling.return = g.return),
              (g = g.sibling);
          }
        }
        break;
      case 19:
        on(n, e), yn(e), r & 4 && ra(e);
        break;
      case 21:
        break;
      default:
        on(n, e), yn(e);
    }
  }
  function yn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (ea(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (It(l, ""), (r.flags &= -33));
            var u = na(e);
            uo(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              i = na(e);
            lo(e, i, o);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        ie(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function df(e, n, t) {
    (E = e), ua(e);
  }
  function ua(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E,
        u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || fl;
        if (!o) {
          var i = l.alternate,
            s = (i !== null && i.memoizedState !== null) || _e;
          i = fl;
          var p = _e;
          if (((fl = o), (_e = s) && !p))
            for (E = l; E !== null; )
              (o = E),
                (s = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? sa(l)
                  : s !== null
                  ? ((s.return = o), (E = s))
                  : sa(l);
          for (; u !== null; ) (E = u), ua(u), (u = u.sibling);
          (E = l), (fl = i), (_e = p);
        }
        oa(e);
      } else
        l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (E = u)) : oa(e);
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                _e || dl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !_e)
                  if (t === null) r.componentDidMount();
                  else {
                    var l =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : ln(n.type, t.memoizedProps);
                    r.componentDidUpdate(
                      l,
                      t.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var u = n.updateQueue;
                u !== null && is(n, u, r);
                break;
              case 3:
                var o = n.updateQueue;
                if (o !== null) {
                  if (((t = null), n.child !== null))
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  is(n, o, t);
                }
                break;
              case 5:
                var i = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = i;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var v = p.memoizedState;
                    if (v !== null) {
                      var g = v.dehydrated;
                      g !== null && Bt(g);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(m(163));
            }
          _e || (n.flags & 512 && ro(n));
        } catch (h) {
          ie(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (((t = n.sibling), t !== null)) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function ia(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        (t.return = n.return), (E = t);
        break;
      }
      E = n.return;
    }
  }
  function sa(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              ie(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                ie(n, l, s);
              }
            }
            var u = n.return;
            try {
              ro(n);
            } catch (s) {
              ie(n, u, s);
            }
            break;
          case 5:
            var o = n.return;
            try {
              ro(n);
            } catch (s) {
              ie(n, o, s);
            }
        }
      } catch (s) {
        ie(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        (i.return = n.return), (E = i);
        break;
      }
      E = n.return;
    }
  }
  var pf = Math.ceil,
    pl = Se.ReactCurrentDispatcher,
    oo = Se.ReactCurrentOwner,
    Ze = Se.ReactCurrentBatchConfig,
    j = 0,
    ye = null,
    de = null,
    ke = 0,
    Ae = 0,
    Tt = Dn(0),
    me = 0,
    pr = null,
    tt = 0,
    ml = 0,
    io = 0,
    mr = null,
    Oe = null,
    so = 0,
    Lt = 1 / 0,
    Pn = null,
    hl = !1,
    ao = null,
    Vn = null,
    yl = !1,
    An = null,
    vl = 0,
    hr = 0,
    co = null,
    gl = -1,
    wl = 0;
  function ze() {
    return j & 6 ? se() : gl !== -1 ? gl : (gl = se());
  }
  function Hn(e) {
    return e.mode & 1
      ? j & 2 && ke !== 0
        ? ke & -ke
        : Gc.transition !== null
        ? (wl === 0 && (wl = ni()), wl)
        : ((e = B),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ci(e.type))),
          e)
      : 1;
  }
  function sn(e, n, t, r) {
    if (50 < hr) throw ((hr = 0), (co = null), Error(m(185)));
    Yt(e, t, r),
      (!(j & 2) || e !== ye) &&
        (e === ye && (!(j & 2) && (ml |= t), me === 4 && Bn(e, ke)),
        De(e, r),
        t === 1 && j === 0 && !(n.mode & 1) && ((Lt = se() + 500), Kr && jn()));
  }
  function De(e, n) {
    var t = e.callbackNode;
    Ga(e, n);
    var r = zr(e, e === ye ? ke : 0);
    if (r === 0)
      t !== null && qo(t), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((n = r & -r), e.callbackPriority !== n)) {
      if ((t != null && qo(t), n === 1))
        e.tag === 0 ? Xc(ca.bind(null, e)) : Gi(ca.bind(null, e)),
          Bc(function () {
            !(j & 6) && jn();
          }),
          (t = null);
      else {
        switch (ti(r)) {
          case 1:
            t = Hl;
            break;
          case 4:
            t = bo;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = ei;
            break;
          default:
            t = Cr;
        }
        t = ga(t, aa.bind(null, e));
      }
      (e.callbackPriority = n), (e.callbackNode = t);
    }
  }
  function aa(e, n) {
    if (((gl = -1), (wl = 0), j & 6)) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = zr(e, e === ye ? ke : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = kl(e, r);
    else {
      n = r;
      var l = j;
      j |= 2;
      var u = da();
      (ye !== e || ke !== n) && ((Pn = null), (Lt = se() + 500), lt(e, n));
      do
        try {
          yf();
          break;
        } catch (i) {
          fa(e, i);
        }
      while (!0);
      zu(),
        (pl.current = u),
        (j = l),
        de !== null ? (n = 0) : ((ye = null), (ke = 0), (n = me));
    }
    if (n !== 0) {
      if (
        (n === 2 && ((l = Bl(e)), l !== 0 && ((r = l), (n = fo(e, l)))),
        n === 1)
      )
        throw ((t = pr), lt(e, 0), Bn(e, r), De(e, se()), t);
      if (n === 6) Bn(e, r);
      else {
        if (
          ((l = e.current.alternate),
          !(r & 30) &&
            !mf(l) &&
            ((n = kl(e, r)),
            n === 2 && ((u = Bl(e)), u !== 0 && ((r = u), (n = fo(e, u)))),
            n === 1))
        )
          throw ((t = pr), lt(e, 0), Bn(e, r), De(e, se()), t);
        switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, Oe, Pn);
            break;
          case 3:
            if (
              (Bn(e, r),
              (r & 130023424) === r && ((n = so + 500 - se()), 10 < n))
            ) {
              if (zr(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & r) !== r)) {
                ze(), (e.pingedLanes |= e.suspendedLanes & l);
                break;
              }
              e.timeoutHandle = vu(ut.bind(null, e, Oe, Pn), n);
              break;
            }
            ut(e, Oe, Pn);
            break;
          case 4:
            if ((Bn(e, r), (r & 4194240) === r)) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - nn(r);
              (u = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~u);
            }
            if (
              ((r = l),
              (r = se() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * pf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = vu(ut.bind(null, e, Oe, Pn), r);
              break;
            }
            ut(e, Oe, Pn);
            break;
          case 5:
            ut(e, Oe, Pn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return De(e, se()), e.callbackNode === t ? aa.bind(null, e) : null;
  }
  function fo(e, n) {
    var t = mr;
    return (
      e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256),
      (e = kl(e, n)),
      e !== 2 && ((n = Oe), (Oe = t), n !== null && po(n)),
      e
    );
  }
  function po(e) {
    Oe === null ? (Oe = e) : Oe.push.apply(Oe, e);
  }
  function mf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && ((t = t.stores), t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r],
              u = l.getSnapshot;
            l = l.value;
            try {
              if (!tn(u(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        (t.return = n), (n = t);
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
      }
    }
    return !0;
  }
  function Bn(e, n) {
    for (
      n &= ~io,
        n &= ~ml,
        e.suspendedLanes |= n,
        e.pingedLanes &= ~n,
        e = e.expirationTimes;
      0 < n;

    ) {
      var t = 31 - nn(n),
        r = 1 << t;
      (e[t] = -1), (n &= ~r);
    }
  }
  function ca(e) {
    if (j & 6) throw Error(m(327));
    Rt();
    var n = zr(e, 0);
    if (!(n & 1)) return De(e, se()), null;
    var t = kl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Bl(e);
      r !== 0 && ((n = r), (t = fo(e, r)));
    }
    if (t === 1) throw ((t = pr), lt(e, 0), Bn(e, n), De(e, se()), t);
    if (t === 6) throw Error(m(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = n),
      ut(e, Oe, Pn),
      De(e, se()),
      null
    );
  }
  function mo(e, n) {
    var t = j;
    j |= 1;
    try {
      return e(n);
    } finally {
      (j = t), j === 0 && ((Lt = se() + 500), Kr && jn());
    }
  }
  function rt(e) {
    An !== null && An.tag === 0 && !(j & 6) && Rt();
    var n = j;
    j |= 1;
    var t = Ze.transition,
      r = B;
    try {
      if (((Ze.transition = null), (B = 1), e)) return e();
    } finally {
      (B = r), (Ze.transition = t), (j = n), !(j & 6) && jn();
    }
  }
  function ho() {
    (Ae = Tt.current), q(Tt);
  }
  function lt(e, n) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var t = e.timeoutHandle;
    if ((t !== -1 && ((e.timeoutHandle = -1), Hc(t)), de !== null))
      for (t = de.return; t !== null; ) {
        var r = t;
        switch ((xu(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && $r();
            break;
          case 3:
            Pt(), q(Re), q(Ee), Fu();
            break;
          case 5:
            Ou(r);
            break;
          case 4:
            Pt();
            break;
          case 13:
            q(le);
            break;
          case 19:
            q(le);
            break;
          case 10:
            Tu(r.type._context);
            break;
          case 22:
          case 23:
            ho();
        }
        t = t.return;
      }
    if (
      ((ye = e),
      (de = e = $n(e.current, null)),
      (ke = Ae = n),
      (me = 0),
      (pr = null),
      (io = ml = tt = 0),
      (Oe = mr = null),
      bn !== null)
    ) {
      for (n = 0; n < bn.length; n++)
        if (((t = bn[n]), (r = t.interleaved), r !== null)) {
          t.interleaved = null;
          var l = r.next,
            u = t.pending;
          if (u !== null) {
            var o = u.next;
            (u.next = l), (r.next = o);
          }
          t.pending = r;
        }
      bn = null;
    }
    return e;
  }
  function fa(e, n) {
    do {
      var t = de;
      try {
        if ((zu(), (rl.current = il), ll)) {
          for (var r = ue.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), (r = r.next);
          }
          ll = !1;
        }
        if (
          ((nt = 0),
          (he = pe = ue = null),
          (ir = !1),
          (sr = 0),
          (oo.current = null),
          t === null || t.return === null)
        ) {
          (me = 1), (pr = n), (de = null);
          break;
        }
        e: {
          var u = e,
            o = t.return,
            i = t,
            s = n;
          if (
            ((n = ke),
            (i.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
          ) {
            var p = s,
              v = i,
              g = v.tag;
            if (!(v.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = v.alternate;
              h
                ? ((v.updateQueue = h.updateQueue),
                  (v.memoizedState = h.memoizedState),
                  (v.lanes = h.lanes))
                : ((v.updateQueue = null), (v.memoizedState = null));
            }
            var S = Fs(o);
            if (S !== null) {
              (S.flags &= -257),
                js(S, o, i, u, n),
                S.mode & 1 && Ds(u, p, n),
                (n = S),
                (s = p);
              var C = n.updateQueue;
              if (C === null) {
                var _ = new Set();
                _.add(s), (n.updateQueue = _);
              } else C.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Ds(u, p, n), yo();
                break e;
              }
              s = Error(m(426));
            }
          } else if (re && i.mode & 1) {
            var ae = Fs(o);
            if (ae !== null) {
              !(ae.flags & 65536) && (ae.flags |= 256),
                js(ae, o, i, u, n),
                Pu(Nt(s, i));
              break e;
            }
          }
          (u = s = Nt(s, i)),
            me !== 4 && (me = 2),
            mr === null ? (mr = [u]) : mr.push(u),
            (u = o);
          do {
            switch (u.tag) {
              case 3:
                (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                var f = Is(u, s, n);
                os(u, f);
                break e;
              case 1:
                i = s;
                var a = u.type,
                  d = u.stateNode;
                if (
                  !(u.flags & 128) &&
                  (typeof a.getDerivedStateFromError == "function" ||
                    (d !== null &&
                      typeof d.componentDidCatch == "function" &&
                      (Vn === null || !Vn.has(d))))
                ) {
                  (u.flags |= 65536), (n &= -n), (u.lanes |= n);
                  var w = Os(u, i, n);
                  os(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ma(t);
      } catch (P) {
        (n = P), de === t && t !== null && (de = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function da() {
    var e = pl.current;
    return (pl.current = il), e === null ? il : e;
  }
  function yo() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
      ye === null || (!(tt & 268435455) && !(ml & 268435455)) || Bn(ye, ke);
  }
  function kl(e, n) {
    var t = j;
    j |= 2;
    var r = da();
    (ye !== e || ke !== n) && ((Pn = null), lt(e, n));
    do
      try {
        hf();
        break;
      } catch (l) {
        fa(e, l);
      }
    while (!0);
    if ((zu(), (j = t), (pl.current = r), de !== null)) throw Error(m(261));
    return (ye = null), (ke = 0), me;
  }
  function hf() {
    for (; de !== null; ) pa(de);
  }
  function yf() {
    for (; de !== null && !Wa(); ) pa(de);
  }
  function pa(e) {
    var n = va(e.alternate, e, Ae);
    (e.memoizedProps = e.pendingProps),
      n === null ? ma(e) : (de = n),
      (oo.current = null);
  }
  function ma(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (((e = n.return), n.flags & 32768)) {
        if (((t = af(t, n)), t !== null)) {
          (t.flags &= 32767), (de = t);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (me = 6), (de = null);
          return;
        }
      } else if (((t = sf(t, n, Ae)), t !== null)) {
        de = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        de = n;
        return;
      }
      de = n = e;
    } while (n !== null);
    me === 0 && (me = 5);
  }
  function ut(e, n, t) {
    var r = B,
      l = Ze.transition;
    try {
      (Ze.transition = null), (B = 1), vf(e, n, t, r);
    } finally {
      (Ze.transition = l), (B = r);
    }
    return null;
  }
  function vf(e, n, t, r) {
    do Rt();
    while (An !== null);
    if (j & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
      throw Error(m(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var u = t.lanes | t.childLanes;
    if (
      (Za(e, u),
      e === ye && ((de = ye = null), (ke = 0)),
      (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
        yl ||
        ((yl = !0),
        ga(Cr, function () {
          return Rt(), null;
        })),
      (u = (t.flags & 15990) !== 0),
      t.subtreeFlags & 15990 || u)
    ) {
      (u = Ze.transition), (Ze.transition = null);
      var o = B;
      B = 1;
      var i = j;
      (j |= 4),
        (oo.current = null),
        ff(e, t),
        la(t, e),
        Fc(hu),
        (Rr = !!mu),
        (hu = mu = null),
        (e.current = t),
        df(t),
        Va(),
        (j = i),
        (B = o),
        (Ze.transition = u);
    } else e.current = t;
    if (
      (yl && ((yl = !1), (An = e), (vl = l)),
      (u = e.pendingLanes),
      u === 0 && (Vn = null),
      Ba(t.stateNode),
      De(e, se()),
      n !== null)
    )
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw ((hl = !1), (e = ao), (ao = null), e);
    return (
      vl & 1 && e.tag !== 0 && Rt(),
      (u = e.pendingLanes),
      u & 1 ? (e === co ? hr++ : ((hr = 0), (co = e))) : (hr = 0),
      jn(),
      null
    );
  }
  function Rt() {
    if (An !== null) {
      var e = ti(vl),
        n = Ze.transition,
        t = B;
      try {
        if (((Ze.transition = null), (B = 16 > e ? 16 : e), An === null))
          var r = !1;
        else {
          if (((e = An), (An = null), (vl = 0), j & 6)) throw Error(m(331));
          var l = j;
          for (j |= 4, E = e.current; E !== null; ) {
            var u = E,
              o = u.child;
            if (E.flags & 16) {
              var i = u.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var v = E;
                    switch (v.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, v, u);
                    }
                    var g = v.child;
                    if (g !== null) (g.return = v), (E = g);
                    else
                      for (; E !== null; ) {
                        v = E;
                        var h = v.sibling,
                          S = v.return;
                        if ((bs(v), v === p)) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = S), (E = h);
                          break;
                        }
                        E = S;
                      }
                  }
                }
                var C = u.alternate;
                if (C !== null) {
                  var _ = C.child;
                  if (_ !== null) {
                    C.child = null;
                    do {
                      var ae = _.sibling;
                      (_.sibling = null), (_ = ae);
                    } while (_ !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && o !== null) (o.return = u), (E = o);
            else
              e: for (; E !== null; ) {
                if (((u = E), u.flags & 2048))
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dr(9, u, u.return);
                  }
                var f = u.sibling;
                if (f !== null) {
                  (f.return = u.return), (E = f);
                  break e;
                }
                E = u.return;
              }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            o = E;
            var d = o.child;
            if (o.subtreeFlags & 2064 && d !== null) (d.return = o), (E = d);
            else
              e: for (o = a; E !== null; ) {
                if (((i = E), i.flags & 2048))
                  try {
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dl(9, i);
                    }
                  } catch (P) {
                    ie(i, i.return, P);
                  }
                if (i === o) {
                  E = null;
                  break e;
                }
                var w = i.sibling;
                if (w !== null) {
                  (w.return = i.return), (E = w);
                  break e;
                }
                E = i.return;
              }
          }
          if (
            ((j = l), jn(), dn && typeof dn.onPostCommitFiberRoot == "function")
          )
            try {
              dn.onPostCommitFiberRoot(_r, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (B = t), (Ze.transition = n);
      }
    }
    return !1;
  }
  function ha(e, n, t) {
    (n = Nt(t, n)),
      (n = Is(e, n, 1)),
      (e = Yn(e, n, 1)),
      (n = ze()),
      e !== null && (Yt(e, 1, n), De(e, n));
  }
  function ie(e, n, t) {
    if (e.tag === 3) ha(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          ha(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Vn === null || !Vn.has(r)))
          ) {
            (e = Nt(t, e)),
              (e = Os(n, e, 1)),
              (n = Yn(n, e, 1)),
              (e = ze()),
              n !== null && (Yt(n, 1, e), De(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function gf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n),
      (n = ze()),
      (e.pingedLanes |= e.suspendedLanes & t),
      ye === e &&
        (ke & t) === t &&
        (me === 4 || (me === 3 && (ke & 130023424) === ke && 500 > se() - so)
          ? lt(e, 0)
          : (io |= t)),
      De(e, n);
  }
  function ya(e, n) {
    n === 0 &&
      (e.mode & 1
        ? ((n = Nr), (Nr <<= 1), !(Nr & 130023424) && (Nr = 4194304))
        : (n = 1));
    var t = ze();
    (e = xn(e, n)), e !== null && (Yt(e, n, t), De(e, t));
  }
  function wf(e) {
    var n = e.memoizedState,
      t = 0;
    n !== null && (t = n.retryLane), ya(e, t);
  }
  function kf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), ya(e, t);
  }
  var va;
  va = function (e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Re.current) Ie = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128)) return (Ie = !1), of(e, n, t);
        Ie = !!(e.flags & 131072);
      }
    else (Ie = !1), re && n.flags & 1048576 && Zi(n, Gr, n.index);
    switch (((n.lanes = 0), n.tag)) {
      case 2:
        var r = n.type;
        cl(e, n), (e = n.pendingProps);
        var l = wt(n, Ee.current);
        _t(n, t), (l = Yu(null, n, r, e, l, t));
        var u = Wu();
        return (
          (n.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((n.tag = 1),
              (n.memoizedState = null),
              (n.updateQueue = null),
              Me(r) ? ((u = !0), Qr(n)) : (u = !1),
              (n.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              Mu(n),
              (l.updater = sl),
              (n.stateNode = l),
              (l._reactInternals = n),
              Qu(n, r, e, t),
              (n = Zu(null, n, r, !0, u, t)))
            : ((n.tag = 0), re && u && Eu(n), Ne(null, n, l, t), (n = n.child)),
          n
        );
      case 16:
        r = n.elementType;
        e: {
          switch (
            (cl(e, n),
            (e = n.pendingProps),
            (l = r._init),
            (r = l(r._payload)),
            (n.type = r),
            (l = n.tag = Ef(r)),
            (e = ln(r, e)),
            l)
          ) {
            case 0:
              n = Gu(null, n, r, e, t);
              break e;
            case 1:
              n = Hs(null, n, r, e, t);
              break e;
            case 11:
              n = Us(null, n, r, e, t);
              break e;
            case 14:
              n = Ys(null, n, r, ln(r.type, e), t);
              break e;
          }
          throw Error(m(306, r, ""));
        }
        return n;
      case 0:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          Gu(e, n, r, l, t)
        );
      case 1:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          Hs(e, n, r, l, t)
        );
      case 3:
        e: {
          if ((Bs(n), e === null)) throw Error(m(387));
          (r = n.pendingProps),
            (u = n.memoizedState),
            (l = u.element),
            us(e, n),
            nl(n, r, null, t);
          var o = n.memoizedState;
          if (((r = o.element), u.isDehydrated))
            if (
              ((u = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (n.updateQueue.baseState = u),
              (n.memoizedState = u),
              n.flags & 256)
            ) {
              (l = Nt(Error(m(423)), n)), (n = $s(e, n, r, t, l));
              break e;
            } else if (r !== l) {
              (l = Nt(Error(m(424)), n)), (n = $s(e, n, r, t, l));
              break e;
            } else
              for (
                Ve = On(n.stateNode.containerInfo.firstChild),
                  We = n,
                  re = !0,
                  rn = null,
                  t = rs(n, null, r, t),
                  n.child = t;
                t;

              )
                (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
          else {
            if ((Et(), r === l)) {
              n = _n(e, n, t);
              break e;
            }
            Ne(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return (
          ss(n),
          e === null && _u(n),
          (r = n.type),
          (l = n.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (o = l.children),
          yu(r, l) ? (o = null) : u !== null && yu(r, u) && (n.flags |= 32),
          As(e, n),
          Ne(e, n, o, t),
          n.child
        );
      case 6:
        return e === null && _u(n), null;
      case 13:
        return Qs(e, n, t);
      case 4:
        return (
          Iu(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = xt(n, null, r, t)) : Ne(e, n, r, t),
          n.child
        );
      case 11:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          Us(e, n, r, l, t)
        );
      case 7:
        return Ne(e, n, n.pendingProps, t), n.child;
      case 8:
        return Ne(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Ne(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (
            ((r = n.type._context),
            (l = n.pendingProps),
            (u = n.memoizedProps),
            (o = l.value),
            Z(qr, r._currentValue),
            (r._currentValue = o),
            u !== null)
          )
            if (tn(u.value, o)) {
              if (u.children === l.children && !Re.current) {
                n = _n(e, n, t);
                break e;
              }
            } else
              for (u = n.child, u !== null && (u.return = n); u !== null; ) {
                var i = u.dependencies;
                if (i !== null) {
                  o = u.child;
                  for (var s = i.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (u.tag === 1) {
                        (s = Cn(-1, t & -t)), (s.tag = 2);
                        var p = u.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var v = p.pending;
                          v === null
                            ? (s.next = s)
                            : ((s.next = v.next), (v.next = s)),
                            (p.pending = s);
                        }
                      }
                      (u.lanes |= t),
                        (s = u.alternate),
                        s !== null && (s.lanes |= t),
                        Lu(u.return, t, n),
                        (i.lanes |= t);
                      break;
                    }
                    s = s.next;
                  }
                } else if (u.tag === 10) o = u.type === n.type ? null : u.child;
                else if (u.tag === 18) {
                  if (((o = u.return), o === null)) throw Error(m(341));
                  (o.lanes |= t),
                    (i = o.alternate),
                    i !== null && (i.lanes |= t),
                    Lu(o, t, n),
                    (o = u.sibling);
                } else o = u.child;
                if (o !== null) o.return = u;
                else
                  for (o = u; o !== null; ) {
                    if (o === n) {
                      o = null;
                      break;
                    }
                    if (((u = o.sibling), u !== null)) {
                      (u.return = o.return), (o = u);
                      break;
                    }
                    o = o.return;
                  }
                u = o;
              }
          Ne(e, n, l.children, t), (n = n.child);
        }
        return n;
      case 9:
        return (
          (l = n.type),
          (r = n.pendingProps.children),
          _t(n, t),
          (l = Xe(l)),
          (r = r(l)),
          (n.flags |= 1),
          Ne(e, n, r, t),
          n.child
        );
      case 14:
        return (
          (r = n.type),
          (l = ln(r, n.pendingProps)),
          (l = ln(r.type, l)),
          Ys(e, n, r, l, t)
        );
      case 15:
        return Ws(e, n, n.type, n.pendingProps, t);
      case 17:
        return (
          (r = n.type),
          (l = n.pendingProps),
          (l = n.elementType === r ? l : ln(r, l)),
          cl(e, n),
          (n.tag = 1),
          Me(r) ? ((e = !0), Qr(n)) : (e = !1),
          _t(n, t),
          Rs(n, r, l),
          Qu(n, r, l, t),
          Zu(null, n, r, !0, e, t)
        );
      case 19:
        return Xs(e, n, t);
      case 22:
        return Vs(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ga(e, n) {
    return Jo(e, n);
  }
  function Sf(e, n, t, r) {
    (this.tag = e),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Je(e, n, t, r) {
    return new Sf(e, n, t, r);
  }
  function vo(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Ef(e) {
    if (typeof e == "function") return vo(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === cn)) return 11;
      if (e === fn) return 14;
    }
    return 2;
  }
  function $n(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = Je(e.tag, n, e.key, e.mode)),
          (t.elementType = e.elementType),
          (t.type = e.type),
          (t.stateNode = e.stateNode),
          (t.alternate = e),
          (e.alternate = t))
        : ((t.pendingProps = n),
          (t.type = e.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = e.flags & 14680064),
      (t.childLanes = e.childLanes),
      (t.lanes = e.lanes),
      (t.child = e.child),
      (t.memoizedProps = e.memoizedProps),
      (t.memoizedState = e.memoizedState),
      (t.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (t.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (t.sibling = e.sibling),
      (t.index = e.index),
      (t.ref = e.ref),
      t
    );
  }
  function Sl(e, n, t, r, l, u) {
    var o = 2;
    if (((r = e), typeof e == "function")) vo(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Te:
          return ot(t.children, l, u, n);
        case $e:
          (o = 8), (l |= 8);
          break;
        case Nn:
          return (
            (e = Je(12, t, n, l | 2)), (e.elementType = Nn), (e.lanes = u), e
          );
        case je:
          return (e = Je(13, t, n, l)), (e.elementType = je), (e.lanes = u), e;
        case en:
          return (e = Je(19, t, n, l)), (e.elementType = en), (e.lanes = u), e;
        case oe:
          return El(t, l, u, n);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case gn:
                o = 10;
                break e;
              case Kn:
                o = 9;
                break e;
              case cn:
                o = 11;
                break e;
              case fn:
                o = 14;
                break e;
              case Le:
                (o = 16), (r = null);
                break e;
            }
          throw Error(m(130, e == null ? e : typeof e, ""));
      }
    return (
      (n = Je(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = u), n
    );
  }
  function ot(e, n, t, r) {
    return (e = Je(7, e, r, n)), (e.lanes = t), e;
  }
  function El(e, n, t, r) {
    return (
      (e = Je(22, e, r, n)),
      (e.elementType = oe),
      (e.lanes = t),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function go(e, n, t) {
    return (e = Je(6, e, null, n)), (e.lanes = t), e;
  }
  function wo(e, n, t) {
    return (
      (n = Je(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  function xf(e, n, t, r, l) {
    (this.tag = n),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = $l(0)),
      (this.expirationTimes = $l(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $l(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null);
  }
  function ko(e, n, t, r, l, u, o, i, s) {
    return (
      (e = new xf(e, n, t, i, s)),
      n === 1 ? ((n = 1), u === !0 && (n |= 8)) : (n = 0),
      (u = Je(3, null, null, n)),
      (e.current = u),
      (u.stateNode = e),
      (u.memoizedState = {
        element: r,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Mu(u),
      e
    );
  }
  function Cf(e, n, t) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Pe,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: n,
      implementation: t,
    };
  }
  function wa(e) {
    if (!e) return Fn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Me(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Me(t)) return Ki(e, t, n);
    }
    return n;
  }
  function ka(e, n, t, r, l, u, o, i, s) {
    return (
      (e = ko(t, r, !0, e, l, u, o, i, s)),
      (e.context = wa(null)),
      (t = e.current),
      (r = ze()),
      (l = Hn(t)),
      (u = Cn(r, l)),
      (u.callback = n ?? null),
      Yn(t, u, l),
      (e.current.lanes = l),
      Yt(e, l, r),
      De(e, r),
      e
    );
  }
  function xl(e, n, t, r) {
    var l = n.current,
      u = ze(),
      o = Hn(l);
    return (
      (t = wa(t)),
      n.context === null ? (n.context = t) : (n.pendingContext = t),
      (n = Cn(u, o)),
      (n.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (n.callback = r),
      (e = Yn(l, n, o)),
      e !== null && (sn(e, l, o, u), el(e, l, o)),
      o
    );
  }
  function Cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Sa(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function So(e, n) {
    Sa(e, n), (e = e.alternate) && Sa(e, n);
  }
  var Ea =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Eo(e) {
    this._internalRoot = e;
  }
  (_l.prototype.render = Eo.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(m(409));
      xl(e, n, null, null);
    }),
    (_l.prototype.unmount = Eo.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          rt(function () {
            xl(null, e, null, null);
          }),
            (n[wn] = null);
        }
      });
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = ui();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++);
      Rn.splice(t, 0, e), t === 0 && si(e);
    }
  };
  function xo(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Pl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function xa() {}
  function _f(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function () {
          var p = Cl(o);
          u.call(p);
        };
      }
      var o = ka(n, r, e, 0, null, !1, !1, "", xa);
      return (
        (e._reactRootContainer = o),
        (e[wn] = o.current),
        bt(e.nodeType === 8 ? e.parentNode : e),
        rt(),
        o
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var p = Cl(s);
        i.call(p);
      };
    }
    var s = ko(e, 0, !1, null, null, !1, !1, "", xa);
    return (
      (e._reactRootContainer = s),
      (e[wn] = s.current),
      bt(e.nodeType === 8 ? e.parentNode : e),
      rt(function () {
        xl(n, s, t, r);
      }),
      s
    );
  }
  function Nl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var i = l;
        l = function () {
          var s = Cl(o);
          i.call(s);
        };
      }
      xl(n, o, e, l);
    } else o = _f(t, n, e, l, r);
    return Cl(o);
  }
  (ri = function (e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 &&
            (Ql(n, t | 1), De(n, se()), !(j & 6) && ((Lt = se() + 500), jn()));
        }
        break;
      case 13:
        rt(function () {
          var r = xn(e, 1);
          if (r !== null) {
            var l = ze();
            sn(r, e, 1, l);
          }
        }),
          So(e, 1);
    }
  }),
    (Kl = function (e) {
      if (e.tag === 13) {
        var n = xn(e, 134217728);
        if (n !== null) {
          var t = ze();
          sn(n, e, 134217728, t);
        }
        So(e, 134217728);
      }
    }),
    (li = function (e) {
      if (e.tag === 13) {
        var n = Hn(e),
          t = xn(e, n);
        if (t !== null) {
          var r = ze();
          sn(t, e, n, r);
        }
        So(e, n);
      }
    }),
    (ui = function () {
      return B;
    }),
    (oi = function (e, n) {
      var t = B;
      try {
        return (B = e), n();
      } finally {
        B = t;
      }
    }),
    (Yl = function (e, n, t) {
      switch (n) {
        case "input":
          if ((Rl(e, t), (n = t.name), t.type === "radio" && n != null)) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var l = Br(r);
                if (!l) throw Error(m(90));
                Lo(r), Rl(r, l);
              }
            }
          }
          break;
        case "textarea":
          Do(e, t);
          break;
        case "select":
          (n = t.value), n != null && it(e, !!t.multiple, n, !1);
      }
    }),
    (Bo = mo),
    ($o = rt);
  var Pf = { usingClientEntryPoint: !1, Events: [tr, vt, Br, Ao, Ho, mo] },
    yr = {
      findFiberByHostInstance: Gn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Nf = {
      bundleType: yr.bundleType,
      version: yr.version,
      rendererPackageName: yr.rendererPackageName,
      rendererConfig: yr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: Se.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = Go(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: yr.findFiberByHostInstance,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        (_r = zl.inject(Nf)), (dn = zl);
      } catch {}
  }
  return (
    (Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pf),
    (Fe.createPortal = function (e, n) {
      var t =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!xo(n)) throw Error(m(200));
      return Cf(e, n, null, t);
    }),
    (Fe.createRoot = function (e, n) {
      if (!xo(e)) throw Error(m(299));
      var t = !1,
        r = "",
        l = Ea;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
        (n = ko(e, 1, !1, null, null, t, !1, r, l)),
        (e[wn] = n.current),
        bt(e.nodeType === 8 ? e.parentNode : e),
        new Eo(n)
      );
    }),
    (Fe.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var n = e._reactInternals;
      if (n === void 0)
        throw typeof e.render == "function"
          ? Error(m(188))
          : ((e = Object.keys(e).join(",")), Error(m(268, e)));
      return (e = Go(n)), (e = e === null ? null : e.stateNode), e;
    }),
    (Fe.flushSync = function (e) {
      return rt(e);
    }),
    (Fe.hydrate = function (e, n, t) {
      if (!Pl(n)) throw Error(m(200));
      return Nl(null, e, n, !0, t);
    }),
    (Fe.hydrateRoot = function (e, n, t) {
      if (!xo(e)) throw Error(m(405));
      var r = (t != null && t.hydratedSources) || null,
        l = !1,
        u = "",
        o = Ea;
      if (
        (t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (n = ka(n, null, e, 1, t ?? null, l, !1, u, o)),
        (e[wn] = n.current),
        bt(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (t = r[e]),
            (l = t._getVersion),
            (l = l(t._source)),
            n.mutableSourceEagerHydrationData == null
              ? (n.mutableSourceEagerHydrationData = [t, l])
              : n.mutableSourceEagerHydrationData.push(t, l);
      return new _l(n);
    }),
    (Fe.render = function (e, n, t) {
      if (!Pl(n)) throw Error(m(200));
      return Nl(null, e, n, !1, t);
    }),
    (Fe.unmountComponentAtNode = function (e) {
      if (!Pl(e)) throw Error(m(40));
      return e._reactRootContainer
        ? (rt(function () {
            Nl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[wn] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Fe.unstable_batchedUpdates = mo),
    (Fe.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
      if (!Pl(t)) throw Error(m(200));
      if (e == null || e._reactInternals === void 0) throw Error(m(38));
      return Nl(e, n, t, !1, r);
    }),
    (Fe.version = "18.3.1-next-f1338f8080-20240426"),
    Fe
  );
}
var Ra;
function Df() {
  if (Ra) return Po.exports;
  Ra = 1;
  function R() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(R);
      } catch (D) {
        console.error(D);
      }
  }
  return R(), (Po.exports = Of()), Po.exports;
}
var Ma;
function Ff() {
  if (Ma) return Tl;
  Ma = 1;
  var R = Df();
  return (Tl.createRoot = R.createRoot), (Tl.hydrateRoot = R.hydrateRoot), Tl;
}
var jf = Ff();
function Uf() {
  const R = {
      "What types of motorcycles does Yamaha offer?":
        "Yamaha offers a wide range of motorcycles, including sportbikes (YZF-R series), cruisers (Star Venture, V Star), adventure touring bikes (Ténéré), dual-sport bikes (WR series), scooters (Vino, Zuma), and more.",
      "Where can I find a Yamaha dealer near me?":
        "You can use the Yamaha dealer locator on our official website (yamahamotorsports.com) to find a dealer in your area. Just enter your zip code or city.",
      "How can I contact Yamaha customer service?":
        "You can contact Yamaha customer service by phone at [Phone Number], or through the contact form on our website.",
      "Where can I find owner's manuals for my Yamaha motorcycle?":
        "Owner's manuals are available for download on the Yamaha Motorsports website in the support section.",
      "What is the warranty on Yamaha motorcycles?":
        "Yamaha motorcycles typically come with a [Duration] limited factory warranty. Specific warranty details can be found in your owner's manual or on our website.",
      "Does Yamaha offer financing options?":
        "Yes, Yamaha offers financing options through Yamaha Motor Finance Corporation (YMFC). You can learn more on our website or at your local dealer.",
      "Where can I find information about Yamaha events and promotions?":
        "Check the news and events section on the Yamaha Motorsports website for the latest updates on events, promotions, and special offers.",
      "What is the engine size of the Yamaha R1?":
        "The Yamaha R1 has a 998cc, liquid-cooled, inline 4-cylinder engine.",
      "What are the key features of the Yamaha Ténéré 700?":
        "The Ténéré 700 is known for its lightweight chassis, torquey CP2 engine, long-travel suspension, and rally-inspired design, making it ideal for adventure touring.",
      "What is the price of the Yamaha MT-07?":
        "Pricing varies by location and options. Please check with your local Yamaha dealer or visit our website for the most up-to-date pricing information.",
      "What is the difference between the R3 and the R7?":
        "The R3 is a lightweight entry-level sportbike with a 321cc twin-cylinder engine, while the R7 is a middleweight sportbike with a 689cc twin-cylinder engine offering more performance and advanced features.",
      "What are the color options for the Yamaha Zuma 125?":
        "The Yamaha Zuma 125 comes in a variety of colors that change by model year. Check the Yamaha website for current color options.",
      "Where can I buy Yamaha genuine parts?":
        "Yamaha genuine parts can be purchased through authorized Yamaha dealers or online at [Yamaha Parts Website].",
      "How do I find a Yamaha certified service center?":
        "Use the dealer locator on the Yamaha Motorsports website to find certified service centers in your area.",
      "What is the recommended maintenance schedule for my Yamaha motorcycle?":
        "The recommended maintenance schedule is outlined in your owner's manual. Following this schedule will ensure the longevity and performance of your motorcycle.",
      "How can I find the part number for a specific Yamaha part?":
        "You can find part numbers using the online parts catalog on the Yamaha Motorsports website or by consulting with your local Yamaha dealer.",
      "Does Yamaha sell motorcycle accessories?":
        "Yes, Yamaha offers a wide range of accessories for its motorcycles, including luggage, windscreens, performance parts, and more.",
      "Where can I buy Yamaha riding gear and apparel?":
        "Yamaha riding gear and apparel are available at authorized Yamaha dealers and on the Yamaha website.",
      "Does Yamaha make ATVs?":
        "Yes, Yamaha manufactures a line of ATVs, including sport, utility, and youth models.",
      "Does Yamaha make side-by-sides?":
        "Yes, Yamaha produces side-by-side vehicles, also known as UTVs, for recreational and utility use.",
      "Where can I find information about Yamaha off-road events?":
        "Information about Yamaha off-road events can usually be found on the Yamaha Motorsports website or through local Yamaha dealers.",
      "Does Yamaha make electric motorcycles or scooters?":
        "Yamaha is developing and releasing electric models. Please check our website for the latest information on electric vehicles.",
      "Where is Yamaha Motor Corporation located?":
        "Yamaha Motor Corporation is headquartered in Iwata, Shizuoka, Japan.",
      "Where can I find motorcycle safety tips?":
        "Yamaha encourages safe riding practices. You can find safety tips and resources on the Motorcycle Safety Foundation (MSF) website or through Yamaha's own safety programs.",
      "Where to buy Yamaha parts?":
        "Yamaha genuine parts can be purchased through authorized Yamaha dealers or online at [Yamaha Parts Website].",
      "How much does a Yamaha R1 cost?":
        "Pricing varies by location and options. Please check with your local Yamaha dealer or visit our website for the most up-to-date pricing information.",
      "Yamaha contact number":
        "You can contact Yamaha customer service by phone at [Phone Number], or through the contact form on our website.",
      "Where is the Yamaha shop?":
        "You can use the Yamaha dealer locator on our official website (yamahamotorsports.com) to find a dealer in your area. Just enter your zip code or city.",
    },
    [D, m] = gr.useState([]),
    [b, F] = gr.useState(""),
    $ = gr.useRef(null);
  gr.useEffect(() => {
    ce();
  }, [D]);
  const ce = () => {
      var V;
      (V = $.current) == null || V.scrollIntoView({ behavior: "smooth" });
    },
    fe = (V) => {
      const X = V.toLowerCase();
      for (const Q in R)
        if (Q.toLowerCase().includes(X) || X.includes(Q.toLowerCase()))
          return Q;
      return null;
    },
    A = (V) => {
      if ((V.preventDefault(), b.trim() === "")) return;
      m([...D, { text: b, user: !0 }]);
      const X = fe(b);
      setTimeout(() => {
        X
          ? m([
              ...D,
              { text: "👤 :- " + b, user: !0 },
              { text: "🤖 :-" + R[X], user: !1 },
            ])
          : b.toLowerCase() === "hi" || b.toLowerCase() === "hello"
          ? m([
              ...D,
              { text: "👤 :- " + b, user: !0 },
              {
                text: "🤖 :- Hello Sir! Welcome in Yamaha Moters. How can I help you today?",
                user: !1,
              },
            ])
          : m([
              ...D,
              { text: "👤 :-" + b, user: !0 },
              {
                text: "🤖 :-I'm sorry, I don't have an answer for that question. Please try again or contact us directly.",
                user: !1,
              },
            ]);
      }, 500),
        F("");
    };
  return ge.jsxs("div", {
    className: "body1",
    children: [
      ge.jsxs("div", {
        className: "chatbot-container",
        children: [
          ge.jsx("div", {
            className: "chat-header",
            children: ge.jsx("h2", { children: "Yamaha moters Chatbot" }),
          }),
          ge.jsxs("div", {
            className: "chat-messages",
            children: [
              D.map((V, X) =>
                ge.jsx(
                  "div",
                  {
                    className: `message ${
                      V.user ? "user-message" : "bot-message"
                    }`,
                    children: V.text,
                  },
                  X
                )
              ),
              ge.jsx("div", { ref: $ }),
              " ",
            ],
          }),
          ge.jsxs("form", {
            className: "chat-input",
            onSubmit: A,
            children: [
              ge.jsx("input", {
                type: "text",
                value: b,
                onChange: (V) => F(V.target.value),
                placeholder: "Type your message...",
              }),
              ge.jsx("button", { type: "submit", children: "Send" }),
            ],
          }),
        ],
      }),
      ge.jsxs("div", {
        className: "chatbot-container",
        children: [
          ge.jsx("div", {
            className: "chat-header",
            children: ge.jsx("h2", { children: "Asked Questions" }),
          }),
          ge.jsx("div", {
            className: "scrollable-cont",
            children: Object.keys(R).map((V, X) =>
              ge.jsx(
                "li",
                { children: ge.jsx("a", { onClick: () => F(V), children: V }) },
                X
              )
            ),
          }),
        ],
      }),
    ],
  });
}
jf.createRoot(document.getElementById("root")).render(
  ge.jsx(gr.StrictMode, { children: ge.jsx(Uf, {}) })
);
