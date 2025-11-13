(function () {
  const B = document.createElement('link').relList;
  if (B && B.supports && B.supports('modulepreload')) return;
  for (const z of document.querySelectorAll('link[rel="modulepreload"]')) f(z);
  new MutationObserver((z) => {
    for (const D of z)
      if (D.type === 'childList')
        for (const X of D.addedNodes)
          X.tagName === 'LINK' && X.rel === 'modulepreload' && f(X);
  }).observe(document, { childList: !0, subtree: !0 });
  function O(z) {
    const D = {};
    return (
      z.integrity && (D.integrity = z.integrity),
      z.referrerPolicy && (D.referrerPolicy = z.referrerPolicy),
      z.crossOrigin === 'use-credentials'
        ? (D.credentials = 'include')
        : z.crossOrigin === 'anonymous'
          ? (D.credentials = 'omit')
          : (D.credentials = 'same-origin'),
      D
    );
  }
  function f(z) {
    if (z.ep) return;
    z.ep = !0;
    const D = O(z);
    fetch(z.href, D);
  }
})();
(function () {
  const E = document.createElement('link').relList;
  if (E && E.supports && E.supports('modulepreload')) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) O(f);
  new MutationObserver((f) => {
    for (const z of f)
      if (z.type === 'childList')
        for (const D of z.addedNodes)
          D.tagName === 'LINK' && D.rel === 'modulepreload' && O(D);
  }).observe(document, { childList: !0, subtree: !0 });
  function B(f) {
    const z = {};
    return (
      f.integrity && (z.integrity = f.integrity),
      f.referrerPolicy && (z.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === 'use-credentials'
        ? (z.credentials = 'include')
        : f.crossOrigin === 'anonymous'
          ? (z.credentials = 'omit')
          : (z.credentials = 'same-origin'),
      z
    );
  }
  function O(f) {
    if (f.ep) return;
    f.ep = !0;
    const z = B(f);
    fetch(f.href, z);
  }
})();
(function () {
  const E = document.createElement('link').relList;
  if (E && E.supports && E.supports('modulepreload')) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) O(f);
  new MutationObserver((f) => {
    for (const z of f)
      if (z.type === 'childList')
        for (const D of z.addedNodes)
          D.tagName === 'LINK' && D.rel === 'modulepreload' && O(D);
  }).observe(document, { childList: !0, subtree: !0 });
  function B(f) {
    const z = {};
    return (
      f.integrity && (z.integrity = f.integrity),
      f.referrerPolicy && (z.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === 'use-credentials'
        ? (z.credentials = 'include')
        : f.crossOrigin === 'anonymous'
          ? (z.credentials = 'omit')
          : (z.credentials = 'same-origin'),
      z
    );
  }
  function O(f) {
    if (f.ep) return;
    f.ep = !0;
    const z = B(f);
    fetch(f.href, z);
  }
})();
function Cd(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, 'default')
    ? E.default
    : E;
}
var fd = { exports: {} },
  kr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd;
function Gm() {
  if (dd) return kr;
  dd = 1;
  var E = Symbol.for('react.transitional.element'),
    B = Symbol.for('react.fragment');
  function O(f, z, D) {
    var X = null;
    if (
      (D !== void 0 && (X = '' + D),
      z.key !== void 0 && (X = '' + z.key),
      'key' in z)
    ) {
      D = {};
      for (var ye in z) ye !== 'key' && (D[ye] = z[ye]);
    } else D = z;
    return (
      (z = D.ref),
      { $$typeof: E, type: f, key: X, ref: z !== void 0 ? z : null, props: D }
    );
  }
  return ((kr.Fragment = B), (kr.jsx = O), (kr.jsxs = O), kr);
}
var pd;
function Xm() {
  return (pd || ((pd = 1), (fd.exports = Gm())), fd.exports);
}
var k = Xm(),
  md = { exports: {} },
  I = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hd;
function Zm() {
  if (hd) return I;
  hd = 1;
  var E = Symbol.for('react.transitional.element'),
    B = Symbol.for('react.portal'),
    O = Symbol.for('react.fragment'),
    f = Symbol.for('react.strict_mode'),
    z = Symbol.for('react.profiler'),
    D = Symbol.for('react.consumer'),
    X = Symbol.for('react.context'),
    ye = Symbol.for('react.forward_ref'),
    L = Symbol.for('react.suspense'),
    x = Symbol.for('react.memo'),
    G = Symbol.for('react.lazy'),
    A = Symbol.for('react.activity'),
    fe = Symbol.iterator;
  function oe(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (fe && c[fe]) || c['@@iterator']),
        typeof c == 'function' ? c : null);
  }
  var Ie = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Re = Object.assign,
    Tt = {};
  function Ye(c, w, N) {
    ((this.props = c),
      (this.context = w),
      (this.refs = Tt),
      (this.updater = N || Ie));
  }
  ((Ye.prototype.isReactComponent = {}),
    (Ye.prototype.setState = function (c, w) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, c, w, 'setState');
    }),
    (Ye.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    }));
  function Yt() {}
  Yt.prototype = Ye.prototype;
  function Oe(c, w, N) {
    ((this.props = c),
      (this.context = w),
      (this.refs = Tt),
      (this.updater = N || Ie));
  }
  var it = (Oe.prototype = new Yt());
  ((it.constructor = Oe), Re(it, Ye.prototype), (it.isPureReactComponent = !0));
  var wt = Array.isArray;
  function Fe() {}
  var K = { H: null, A: null, T: null, S: null },
    Ue = Object.prototype.hasOwnProperty;
  function xt(c, w, N) {
    var T = N.ref;
    return {
      $$typeof: E,
      type: c,
      key: w,
      ref: T !== void 0 ? T : null,
      props: N,
    };
  }
  function Bn(c, w) {
    return xt(c.type, w, c.props);
  }
  function Et(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === E;
  }
  function $e(c) {
    var w = { '=': '=0', ':': '=2' };
    return (
      '$' +
      c.replace(/[=:]/g, function (N) {
        return w[N];
      })
    );
  }
  var wn = /\/+/g;
  function Pt(c, w) {
    return typeof c == 'object' && c !== null && c.key != null
      ? $e('' + c.key)
      : w.toString(36);
  }
  function ht(c) {
    switch (c.status) {
      case 'fulfilled':
        return c.value;
      case 'rejected':
        throw c.reason;
      default:
        switch (
          (typeof c.status == 'string'
            ? c.then(Fe, Fe)
            : ((c.status = 'pending'),
              c.then(
                function (w) {
                  c.status === 'pending' &&
                    ((c.status = 'fulfilled'), (c.value = w));
                },
                function (w) {
                  c.status === 'pending' &&
                    ((c.status = 'rejected'), (c.reason = w));
                },
              )),
          c.status)
        ) {
          case 'fulfilled':
            return c.value;
          case 'rejected':
            throw c.reason;
        }
    }
    throw c;
  }
  function v(c, w, N, T, F) {
    var q = typeof c;
    (q === 'undefined' || q === 'boolean') && (c = null);
    var te = !1;
    if (c === null) te = !0;
    else
      switch (q) {
        case 'bigint':
        case 'string':
        case 'number':
          te = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case E:
            case B:
              te = !0;
              break;
            case G:
              return ((te = c._init), v(te(c._payload), w, N, T, F));
          }
      }
    if (te)
      return (
        (F = F(c)),
        (te = T === '' ? '.' + Pt(c, 0) : T),
        wt(F)
          ? ((N = ''),
            te != null && (N = te.replace(wn, '$&/') + '/'),
            v(F, w, N, '', function (zl) {
              return zl;
            }))
          : F != null &&
            (Et(F) &&
              (F = Bn(
                F,
                N +
                  (F.key == null || (c && c.key === F.key)
                    ? ''
                    : ('' + F.key).replace(wn, '$&/') + '/') +
                  te,
              )),
            w.push(F)),
        1
      );
    te = 0;
    var Me = T === '' ? '.' : T + ':';
    if (wt(c))
      for (var ve = 0; ve < c.length; ve++)
        ((T = c[ve]), (q = Me + Pt(T, ve)), (te += v(T, w, N, q, F)));
    else if (((ve = oe(c)), typeof ve == 'function'))
      for (c = ve.call(c), ve = 0; !(T = c.next()).done; )
        ((T = T.value), (q = Me + Pt(T, ve++)), (te += v(T, w, N, q, F)));
    else if (q === 'object') {
      if (typeof c.then == 'function') return v(ht(c), w, N, T, F);
      throw (
        (w = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (w === '[object Object]'
              ? 'object with keys {' + Object.keys(c).join(', ') + '}'
              : w) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return te;
  }
  function C(c, w, N) {
    if (c == null) return c;
    var T = [],
      F = 0;
    return (
      v(c, T, '', '', function (q) {
        return w.call(N, q, F++);
      }),
      T
    );
  }
  function M(c) {
    if (c._status === -1) {
      var w = c._result;
      ((w = w()),
        w.then(
          function (N) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = N));
          },
          function (N) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = N));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = w)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var re =
      typeof reportError == 'function'
        ? reportError
        : function (c) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var w = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof c == 'object' &&
                  c !== null &&
                  typeof c.message == 'string'
                    ? String(c.message)
                    : String(c),
                error: c,
              });
              if (!window.dispatchEvent(w)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', c);
              return;
            }
            console.error(c);
          },
    se = {
      map: C,
      forEach: function (c, w, N) {
        C(
          c,
          function () {
            w.apply(this, arguments);
          },
          N,
        );
      },
      count: function (c) {
        var w = 0;
        return (
          C(c, function () {
            w++;
          }),
          w
        );
      },
      toArray: function (c) {
        return (
          C(c, function (w) {
            return w;
          }) || []
        );
      },
      only: function (c) {
        if (!Et(c))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return c;
      },
    };
  return (
    (I.Activity = A),
    (I.Children = se),
    (I.Component = Ye),
    (I.Fragment = O),
    (I.Profiler = z),
    (I.PureComponent = Oe),
    (I.StrictMode = f),
    (I.Suspense = L),
    (I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (I.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (c) {
        return K.H.useMemoCache(c);
      },
    }),
    (I.cache = function (c) {
      return function () {
        return c.apply(null, arguments);
      };
    }),
    (I.cacheSignal = function () {
      return null;
    }),
    (I.cloneElement = function (c, w, N) {
      if (c == null)
        throw Error(
          'The argument must be a React element, but you passed ' + c + '.',
        );
      var T = Re({}, c.props),
        F = c.key;
      if (w != null)
        for (q in (w.key !== void 0 && (F = '' + w.key), w))
          !Ue.call(w, q) ||
            q === 'key' ||
            q === '__self' ||
            q === '__source' ||
            (q === 'ref' && w.ref === void 0) ||
            (T[q] = w[q]);
      var q = arguments.length - 2;
      if (q === 1) T.children = N;
      else if (1 < q) {
        for (var te = Array(q), Me = 0; Me < q; Me++)
          te[Me] = arguments[Me + 2];
        T.children = te;
      }
      return xt(c.type, F, T);
    }),
    (I.createContext = function (c) {
      return (
        (c = {
          $$typeof: X,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (c.Provider = c),
        (c.Consumer = { $$typeof: D, _context: c }),
        c
      );
    }),
    (I.createElement = function (c, w, N) {
      var T,
        F = {},
        q = null;
      if (w != null)
        for (T in (w.key !== void 0 && (q = '' + w.key), w))
          Ue.call(w, T) &&
            T !== 'key' &&
            T !== '__self' &&
            T !== '__source' &&
            (F[T] = w[T]);
      var te = arguments.length - 2;
      if (te === 1) F.children = N;
      else if (1 < te) {
        for (var Me = Array(te), ve = 0; ve < te; ve++)
          Me[ve] = arguments[ve + 2];
        F.children = Me;
      }
      if (c && c.defaultProps)
        for (T in ((te = c.defaultProps), te))
          F[T] === void 0 && (F[T] = te[T]);
      return xt(c, q, F);
    }),
    (I.createRef = function () {
      return { current: null };
    }),
    (I.forwardRef = function (c) {
      return { $$typeof: ye, render: c };
    }),
    (I.isValidElement = Et),
    (I.lazy = function (c) {
      return { $$typeof: G, _payload: { _status: -1, _result: c }, _init: M };
    }),
    (I.memo = function (c, w) {
      return { $$typeof: x, type: c, compare: w === void 0 ? null : w };
    }),
    (I.startTransition = function (c) {
      var w = K.T,
        N = {};
      K.T = N;
      try {
        var T = c(),
          F = K.S;
        (F !== null && F(N, T),
          typeof T == 'object' &&
            T !== null &&
            typeof T.then == 'function' &&
            T.then(Fe, re));
      } catch (q) {
        re(q);
      } finally {
        (w !== null && N.types !== null && (w.types = N.types), (K.T = w));
      }
    }),
    (I.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (I.use = function (c) {
      return K.H.use(c);
    }),
    (I.useActionState = function (c, w, N) {
      return K.H.useActionState(c, w, N);
    }),
    (I.useCallback = function (c, w) {
      return K.H.useCallback(c, w);
    }),
    (I.useContext = function (c) {
      return K.H.useContext(c);
    }),
    (I.useDebugValue = function () {}),
    (I.useDeferredValue = function (c, w) {
      return K.H.useDeferredValue(c, w);
    }),
    (I.useEffect = function (c, w) {
      return K.H.useEffect(c, w);
    }),
    (I.useEffectEvent = function (c) {
      return K.H.useEffectEvent(c);
    }),
    (I.useId = function () {
      return K.H.useId();
    }),
    (I.useImperativeHandle = function (c, w, N) {
      return K.H.useImperativeHandle(c, w, N);
    }),
    (I.useInsertionEffect = function (c, w) {
      return K.H.useInsertionEffect(c, w);
    }),
    (I.useLayoutEffect = function (c, w) {
      return K.H.useLayoutEffect(c, w);
    }),
    (I.useMemo = function (c, w) {
      return K.H.useMemo(c, w);
    }),
    (I.useOptimistic = function (c, w) {
      return K.H.useOptimistic(c, w);
    }),
    (I.useReducer = function (c, w, N) {
      return K.H.useReducer(c, w, N);
    }),
    (I.useRef = function (c) {
      return K.H.useRef(c);
    }),
    (I.useState = function (c) {
      return K.H.useState(c);
    }),
    (I.useSyncExternalStore = function (c, w, N) {
      return K.H.useSyncExternalStore(c, w, N);
    }),
    (I.useTransition = function () {
      return K.H.useTransition();
    }),
    (I.version = '19.2.0'),
    I
  );
}
var gd;
function uo() {
  return (gd || ((gd = 1), (md.exports = Zm())), md.exports);
}
var St = uo();
const Jm = Cd(St);
var ao = { exports: {} },
  Sr = {},
  yd = { exports: {} },
  vd = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd;
function eh() {
  return (
    bd ||
      ((bd = 1),
      (function (E) {
        function B(v, C) {
          var M = v.length;
          v.push(C);
          e: for (; 0 < M; ) {
            var re = (M - 1) >>> 1,
              se = v[re];
            if (0 < z(se, C)) ((v[re] = C), (v[M] = se), (M = re));
            else break e;
          }
        }
        function O(v) {
          return v.length === 0 ? null : v[0];
        }
        function f(v) {
          if (v.length === 0) return null;
          var C = v[0],
            M = v.pop();
          if (M !== C) {
            v[0] = M;
            e: for (var re = 0, se = v.length, c = se >>> 1; re < c; ) {
              var w = 2 * (re + 1) - 1,
                N = v[w],
                T = w + 1,
                F = v[T];
              if (0 > z(N, M))
                T < se && 0 > z(F, N)
                  ? ((v[re] = F), (v[T] = M), (re = T))
                  : ((v[re] = N), (v[w] = M), (re = w));
              else if (T < se && 0 > z(F, M))
                ((v[re] = F), (v[T] = M), (re = T));
              else break e;
            }
          }
          return C;
        }
        function z(v, C) {
          var M = v.sortIndex - C.sortIndex;
          return M !== 0 ? M : v.id - C.id;
        }
        if (
          ((E.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var D = performance;
          E.unstable_now = function () {
            return D.now();
          };
        } else {
          var X = Date,
            ye = X.now();
          E.unstable_now = function () {
            return X.now() - ye;
          };
        }
        var L = [],
          x = [],
          G = 1,
          A = null,
          fe = 3,
          oe = !1,
          Ie = !1,
          Re = !1,
          Tt = !1,
          Ye = typeof setTimeout == 'function' ? setTimeout : null,
          Yt = typeof clearTimeout == 'function' ? clearTimeout : null,
          Oe = typeof setImmediate < 'u' ? setImmediate : null;
        function it(v) {
          for (var C = O(x); C !== null; ) {
            if (C.callback === null) f(x);
            else if (C.startTime <= v)
              (f(x), (C.sortIndex = C.expirationTime), B(L, C));
            else break;
            C = O(x);
          }
        }
        function wt(v) {
          if (((Re = !1), it(v), !Ie))
            if (O(L) !== null) ((Ie = !0), Fe || ((Fe = !0), $e()));
            else {
              var C = O(x);
              C !== null && ht(wt, C.startTime - v);
            }
        }
        var Fe = !1,
          K = -1,
          Ue = 5,
          xt = -1;
        function Bn() {
          return Tt ? !0 : !(E.unstable_now() - xt < Ue);
        }
        function Et() {
          if (((Tt = !1), Fe)) {
            var v = E.unstable_now();
            xt = v;
            var C = !0;
            try {
              e: {
                ((Ie = !1), Re && ((Re = !1), Yt(K), (K = -1)), (oe = !0));
                var M = fe;
                try {
                  t: {
                    for (
                      it(v), A = O(L);
                      A !== null && !(A.expirationTime > v && Bn());

                    ) {
                      var re = A.callback;
                      if (typeof re == 'function') {
                        ((A.callback = null), (fe = A.priorityLevel));
                        var se = re(A.expirationTime <= v);
                        if (((v = E.unstable_now()), typeof se == 'function')) {
                          ((A.callback = se), it(v), (C = !0));
                          break t;
                        }
                        (A === O(L) && f(L), it(v));
                      } else f(L);
                      A = O(L);
                    }
                    if (A !== null) C = !0;
                    else {
                      var c = O(x);
                      (c !== null && ht(wt, c.startTime - v), (C = !1));
                    }
                  }
                  break e;
                } finally {
                  ((A = null), (fe = M), (oe = !1));
                }
                C = void 0;
              }
            } finally {
              C ? $e() : (Fe = !1);
            }
          }
        }
        var $e;
        if (typeof Oe == 'function')
          $e = function () {
            Oe(Et);
          };
        else if (typeof MessageChannel < 'u') {
          var wn = new MessageChannel(),
            Pt = wn.port2;
          ((wn.port1.onmessage = Et),
            ($e = function () {
              Pt.postMessage(null);
            }));
        } else
          $e = function () {
            Ye(Et, 0);
          };
        function ht(v, C) {
          K = Ye(function () {
            v(E.unstable_now());
          }, C);
        }
        ((E.unstable_IdlePriority = 5),
          (E.unstable_ImmediatePriority = 1),
          (E.unstable_LowPriority = 4),
          (E.unstable_NormalPriority = 3),
          (E.unstable_Profiling = null),
          (E.unstable_UserBlockingPriority = 2),
          (E.unstable_cancelCallback = function (v) {
            v.callback = null;
          }),
          (E.unstable_forceFrameRate = function (v) {
            0 > v || 125 < v
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (Ue = 0 < v ? Math.floor(1e3 / v) : 5);
          }),
          (E.unstable_getCurrentPriorityLevel = function () {
            return fe;
          }),
          (E.unstable_next = function (v) {
            switch (fe) {
              case 1:
              case 2:
              case 3:
                var C = 3;
                break;
              default:
                C = fe;
            }
            var M = fe;
            fe = C;
            try {
              return v();
            } finally {
              fe = M;
            }
          }),
          (E.unstable_requestPaint = function () {
            Tt = !0;
          }),
          (E.unstable_runWithPriority = function (v, C) {
            switch (v) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                v = 3;
            }
            var M = fe;
            fe = v;
            try {
              return C();
            } finally {
              fe = M;
            }
          }),
          (E.unstable_scheduleCallback = function (v, C, M) {
            var re = E.unstable_now();
            switch (
              (typeof M == 'object' && M !== null
                ? ((M = M.delay),
                  (M = typeof M == 'number' && 0 < M ? re + M : re))
                : (M = re),
              v)
            ) {
              case 1:
                var se = -1;
                break;
              case 2:
                se = 250;
                break;
              case 5:
                se = 1073741823;
                break;
              case 4:
                se = 1e4;
                break;
              default:
                se = 5e3;
            }
            return (
              (se = M + se),
              (v = {
                id: G++,
                callback: C,
                priorityLevel: v,
                startTime: M,
                expirationTime: se,
                sortIndex: -1,
              }),
              M > re
                ? ((v.sortIndex = M),
                  B(x, v),
                  O(L) === null &&
                    v === O(x) &&
                    (Re ? (Yt(K), (K = -1)) : (Re = !0), ht(wt, M - re)))
                : ((v.sortIndex = se),
                  B(L, v),
                  Ie || oe || ((Ie = !0), Fe || ((Fe = !0), $e()))),
              v
            );
          }),
          (E.unstable_shouldYield = Bn),
          (E.unstable_wrapCallback = function (v) {
            var C = fe;
            return function () {
              var M = fe;
              fe = C;
              try {
                return v.apply(this, arguments);
              } finally {
                fe = M;
              }
            };
          }));
      })(vd)),
    vd
  );
}
var kd;
function th() {
  return (kd || ((kd = 1), (yd.exports = eh())), yd.exports);
}
var io = { exports: {} },
  Ae = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd;
function nh() {
  if (Sd) return Ae;
  Sd = 1;
  var E = uo();
  function B(L) {
    var x = 'https://react.dev/errors/' + L;
    if (1 < arguments.length) {
      x += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var G = 2; G < arguments.length; G++)
        x += '&args[]=' + encodeURIComponent(arguments[G]);
    }
    return (
      'Minified React error #' +
      L +
      '; visit ' +
      x +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function O() {}
  var f = {
      d: {
        f: O,
        r: function () {
          throw Error(B(522));
        },
        D: O,
        C: O,
        L: O,
        m: O,
        X: O,
        S: O,
        M: O,
      },
      p: 0,
      findDOMNode: null,
    },
    z = Symbol.for('react.portal');
  function D(L, x, G) {
    var A =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: z,
      key: A == null ? null : '' + A,
      children: L,
      containerInfo: x,
      implementation: G,
    };
  }
  var X = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ye(L, x) {
    if (L === 'font') return '';
    if (typeof x == 'string') return x === 'use-credentials' ? x : '';
  }
  return (
    (Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (Ae.createPortal = function (L, x) {
      var G =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11))
        throw Error(B(299));
      return D(L, x, null, G);
    }),
    (Ae.flushSync = function (L) {
      var x = X.T,
        G = f.p;
      try {
        if (((X.T = null), (f.p = 2), L)) return L();
      } finally {
        ((X.T = x), (f.p = G), f.d.f());
      }
    }),
    (Ae.preconnect = function (L, x) {
      typeof L == 'string' &&
        (x
          ? ((x = x.crossOrigin),
            (x =
              typeof x == 'string'
                ? x === 'use-credentials'
                  ? x
                  : ''
                : void 0))
          : (x = null),
        f.d.C(L, x));
    }),
    (Ae.prefetchDNS = function (L) {
      typeof L == 'string' && f.d.D(L);
    }),
    (Ae.preinit = function (L, x) {
      if (typeof L == 'string' && x && typeof x.as == 'string') {
        var G = x.as,
          A = ye(G, x.crossOrigin),
          fe = typeof x.integrity == 'string' ? x.integrity : void 0,
          oe = typeof x.fetchPriority == 'string' ? x.fetchPriority : void 0;
        G === 'style'
          ? f.d.S(L, typeof x.precedence == 'string' ? x.precedence : void 0, {
              crossOrigin: A,
              integrity: fe,
              fetchPriority: oe,
            })
          : G === 'script' &&
            f.d.X(L, {
              crossOrigin: A,
              integrity: fe,
              fetchPriority: oe,
              nonce: typeof x.nonce == 'string' ? x.nonce : void 0,
            });
      }
    }),
    (Ae.preinitModule = function (L, x) {
      if (typeof L == 'string')
        if (typeof x == 'object' && x !== null) {
          if (x.as == null || x.as === 'script') {
            var G = ye(x.as, x.crossOrigin);
            f.d.M(L, {
              crossOrigin: G,
              integrity: typeof x.integrity == 'string' ? x.integrity : void 0,
              nonce: typeof x.nonce == 'string' ? x.nonce : void 0,
            });
          }
        } else x == null && f.d.M(L);
    }),
    (Ae.preload = function (L, x) {
      if (
        typeof L == 'string' &&
        typeof x == 'object' &&
        x !== null &&
        typeof x.as == 'string'
      ) {
        var G = x.as,
          A = ye(G, x.crossOrigin);
        f.d.L(L, G, {
          crossOrigin: A,
          integrity: typeof x.integrity == 'string' ? x.integrity : void 0,
          nonce: typeof x.nonce == 'string' ? x.nonce : void 0,
          type: typeof x.type == 'string' ? x.type : void 0,
          fetchPriority:
            typeof x.fetchPriority == 'string' ? x.fetchPriority : void 0,
          referrerPolicy:
            typeof x.referrerPolicy == 'string' ? x.referrerPolicy : void 0,
          imageSrcSet:
            typeof x.imageSrcSet == 'string' ? x.imageSrcSet : void 0,
          imageSizes: typeof x.imageSizes == 'string' ? x.imageSizes : void 0,
          media: typeof x.media == 'string' ? x.media : void 0,
        });
      }
    }),
    (Ae.preloadModule = function (L, x) {
      if (typeof L == 'string')
        if (x) {
          var G = ye(x.as, x.crossOrigin);
          f.d.m(L, {
            as: typeof x.as == 'string' && x.as !== 'script' ? x.as : void 0,
            crossOrigin: G,
            integrity: typeof x.integrity == 'string' ? x.integrity : void 0,
          });
        } else f.d.m(L);
    }),
    (Ae.requestFormReset = function (L) {
      f.d.r(L);
    }),
    (Ae.unstable_batchedUpdates = function (L, x) {
      return L(x);
    }),
    (Ae.useFormState = function (L, x, G) {
      return X.H.useFormState(L, x, G);
    }),
    (Ae.useFormStatus = function () {
      return X.H.useHostTransitionStatus();
    }),
    (Ae.version = '19.2.0'),
    Ae
  );
}
var wd;
function lh() {
  if (wd) return io.exports;
  wd = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (B) {
        console.error(B);
      }
  }
  return (E(), (io.exports = nh()), io.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xd;
function rh() {
  if (xd) return Sr;
  xd = 1;
  var E = th(),
    B = uo(),
    O = lh();
  function f(e) {
    var t = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      t += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      t +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function z(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function D(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function X(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ye(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function L(e) {
    if (D(e) !== e) throw Error(f(188));
  }
  function x(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = D(e)), t === null)) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var r = n.return;
      if (r === null) break;
      var a = r.alternate;
      if (a === null) {
        if (((l = r.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (r.child === a.child) {
        for (a = r.child; a; ) {
          if (a === n) return (L(r), e);
          if (a === l) return (L(r), t);
          a = a.sibling;
        }
        throw Error(f(188));
      }
      if (n.return !== l.return) ((n = r), (l = a));
      else {
        for (var i = !1, u = r.child; u; ) {
          if (u === n) {
            ((i = !0), (n = r), (l = a));
            break;
          }
          if (u === l) {
            ((i = !0), (l = r), (n = a));
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = a.child; u; ) {
            if (u === n) {
              ((i = !0), (n = a), (l = r));
              break;
            }
            if (u === l) {
              ((i = !0), (l = a), (n = r));
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(f(189));
        }
      }
      if (n.alternate !== l) throw Error(f(190));
    }
    if (n.tag !== 3) throw Error(f(188));
    return n.stateNode.current === n ? e : t;
  }
  function G(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = G(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var A = Object.assign,
    fe = Symbol.for('react.element'),
    oe = Symbol.for('react.transitional.element'),
    Ie = Symbol.for('react.portal'),
    Re = Symbol.for('react.fragment'),
    Tt = Symbol.for('react.strict_mode'),
    Ye = Symbol.for('react.profiler'),
    Yt = Symbol.for('react.consumer'),
    Oe = Symbol.for('react.context'),
    it = Symbol.for('react.forward_ref'),
    wt = Symbol.for('react.suspense'),
    Fe = Symbol.for('react.suspense_list'),
    K = Symbol.for('react.memo'),
    Ue = Symbol.for('react.lazy'),
    xt = Symbol.for('react.activity'),
    Bn = Symbol.for('react.memo_cache_sentinel'),
    Et = Symbol.iterator;
  function $e(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Et && e[Et]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var wn = Symbol.for('react.client.reference');
  function Pt(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === wn ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Re:
        return 'Fragment';
      case Ye:
        return 'Profiler';
      case Tt:
        return 'StrictMode';
      case wt:
        return 'Suspense';
      case Fe:
        return 'SuspenseList';
      case xt:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ie:
          return 'Portal';
        case Oe:
          return e.displayName || 'Context';
        case Yt:
          return (e._context.displayName || 'Context') + '.Consumer';
        case it:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case K:
          return (
            (t = e.displayName || null),
            t !== null ? t : Pt(e.type) || 'Memo'
          );
        case Ue:
          ((t = e._payload), (e = e._init));
          try {
            return Pt(e(t));
          } catch {}
      }
    return null;
  }
  var ht = Array.isArray,
    v = B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    C = O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    M = { pending: !1, data: null, method: null, action: null },
    re = [],
    se = -1;
  function c(e) {
    return { current: e };
  }
  function w(e) {
    0 > se || ((e.current = re[se]), (re[se] = null), se--);
  }
  function N(e, t) {
    (se++, (re[se] = e.current), (e.current = t));
  }
  var T = c(null),
    F = c(null),
    q = c(null),
    te = c(null);
  function Me(e, t) {
    switch ((N(q, t), N(F, e), N(T, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Af(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Af(t)), (e = Rf(t, e)));
        else
          switch (e) {
            case 'svg':
              e = 1;
              break;
            case 'math':
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (w(T), N(T, e));
  }
  function ve() {
    (w(T), w(F), w(q));
  }
  function zl(e) {
    e.memoizedState !== null && N(te, e);
    var t = T.current,
      n = Rf(t, e.type);
    t !== n && (N(F, e), N(T, n));
  }
  function wr(e) {
    (F.current === e && (w(T), w(F)),
      te.current === e && (w(te), (gr._currentValue = M)));
  }
  var $a, oo;
  function xn(e) {
    if ($a === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        (($a = (t && t[1]) || ''),
          (oo =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      $a +
      e +
      oo
    );
  }
  var Ba = !1;
  function qa(e, t) {
    if (!e || Ba) return '';
    Ba = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var S = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(S.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(S, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(e, [], S);
              } else {
                try {
                  S.call();
                } catch (g) {
                  h = g;
                }
                e.call(S.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (S = e()) &&
                typeof S.catch == 'function' &&
                S.catch(function () {});
            }
          } catch (g) {
            if (g && h && typeof g.stack == 'string') return [g.stack, h.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var r = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        'name',
      );
      r &&
        r.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var a = l.DetermineComponentFrameRoot(),
        i = a[0],
        u = a[1];
      if (i && u) {
        var o = i.split(`
`),
          m = u.split(`
`);
        for (
          r = l = 0;
          l < o.length && !o[l].includes('DetermineComponentFrameRoot');

        )
          l++;
        for (; r < m.length && !m[r].includes('DetermineComponentFrameRoot'); )
          r++;
        if (l === o.length || r === m.length)
          for (
            l = o.length - 1, r = m.length - 1;
            1 <= l && 0 <= r && o[l] !== m[r];

          )
            r--;
        for (; 1 <= l && 0 <= r; l--, r--)
          if (o[l] !== m[r]) {
            if (l !== 1 || r !== 1)
              do
                if ((l--, r--, 0 > r || o[l] !== m[r])) {
                  var y =
                    `
` + o[l].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      y.includes('<anonymous>') &&
                      (y = y.replace('<anonymous>', e.displayName)),
                    y
                  );
                }
              while (1 <= l && 0 <= r);
            break;
          }
      }
    } finally {
      ((Ba = !1), (Error.prepareStackTrace = n));
    }
    return (n = e ? e.displayName || e.name : '') ? xn(n) : '';
  }
  function zd(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return xn(e.type);
      case 16:
        return xn('Lazy');
      case 13:
        return e.child !== t && t !== null
          ? xn('Suspense Fallback')
          : xn('Suspense');
      case 19:
        return xn('SuspenseList');
      case 0:
      case 15:
        return qa(e.type, !1);
      case 11:
        return qa(e.type.render, !1);
      case 1:
        return qa(e.type, !0);
      case 31:
        return xn('Activity');
      default:
        return '';
    }
  }
  function so(e) {
    try {
      var t = '',
        n = null;
      do ((t += zd(e, n)), (n = e), (e = e.return));
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  var Va = Object.prototype.hasOwnProperty,
    Ha = E.unstable_scheduleCallback,
    Wa = E.unstable_cancelCallback,
    _d = E.unstable_shouldYield,
    Td = E.unstable_requestPaint,
    Ge = E.unstable_now,
    Pd = E.unstable_getCurrentPriorityLevel,
    co = E.unstable_ImmediatePriority,
    fo = E.unstable_UserBlockingPriority,
    xr = E.unstable_NormalPriority,
    Ld = E.unstable_LowPriority,
    po = E.unstable_IdlePriority,
    jd = E.log,
    Od = E.unstable_setDisableYieldValue,
    _l = null,
    Xe = null;
  function Gt(e) {
    if (
      (typeof jd == 'function' && Od(e),
      Xe && typeof Xe.setStrictMode == 'function')
    )
      try {
        Xe.setStrictMode(_l, e);
      } catch {}
  }
  var Ze = Math.clz32 ? Math.clz32 : Md,
    Ad = Math.log,
    Rd = Math.LN2;
  function Md(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ad(e) / Rd) | 0)) | 0);
  }
  var Er = 256,
    Cr = 262144,
    Nr = 4194304;
  function En(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
      case 128:
        return 128;
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
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function zr(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var r = 0,
      a = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var u = l & 134217727;
    return (
      u !== 0
        ? ((l = u & ~a),
          l !== 0
            ? (r = En(l))
            : ((i &= u),
              i !== 0
                ? (r = En(i))
                : n || ((n = u & ~e), n !== 0 && (r = En(n)))))
        : ((u = l & ~a),
          u !== 0
            ? (r = En(u))
            : i !== 0
              ? (r = En(i))
              : n || ((n = l & ~e), n !== 0 && (r = En(n)))),
      r === 0
        ? 0
        : t !== 0 &&
            t !== r &&
            (t & a) === 0 &&
            ((a = r & -r),
            (n = t & -t),
            a >= n || (a === 32 && (n & 4194048) !== 0))
          ? t
          : r
    );
  }
  function Tl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Dd(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
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
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mo() {
    var e = Nr;
    return ((Nr <<= 1), (Nr & 62914560) === 0 && (Nr = 4194304), e);
  }
  function Qa(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Pl(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Id(e, t, n, l, r, a) {
    var i = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var u = e.entanglements,
      o = e.expirationTimes,
      m = e.hiddenUpdates;
    for (n = i & ~n; 0 < n; ) {
      var y = 31 - Ze(n),
        S = 1 << y;
      ((u[y] = 0), (o[y] = -1));
      var h = m[y];
      if (h !== null)
        for (m[y] = null, y = 0; y < h.length; y++) {
          var g = h[y];
          g !== null && (g.lane &= -536870913);
        }
      n &= ~S;
    }
    (l !== 0 && ho(e, l, 0),
      a !== 0 && r === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(i & ~t)));
  }
  function ho(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - Ze(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 261930)));
  }
  function go(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Ze(n),
        r = 1 << l;
      ((r & t) | (e[l] & t) && (e[l] |= t), (n &= ~r));
    }
  }
  function yo(e, t) {
    var n = t & -t;
    return (
      (n = (n & 42) !== 0 ? 1 : Ka(n)),
      (n & (e.suspendedLanes | t)) !== 0 ? 0 : n
    );
  }
  function Ka(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
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
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ya(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function vo() {
    var e = C.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : rd(e.type));
  }
  function bo(e, t) {
    var n = C.p;
    try {
      return ((C.p = e), t());
    } finally {
      C.p = n;
    }
  }
  var Xt = Math.random().toString(36).slice(2),
    _e = '__reactFiber$' + Xt,
    Be = '__reactProps$' + Xt,
    qn = '__reactContainer$' + Xt,
    Ga = '__reactEvents$' + Xt,
    Fd = '__reactListeners$' + Xt,
    Ud = '__reactHandles$' + Xt,
    ko = '__reactResources$' + Xt,
    Ll = '__reactMarker$' + Xt;
  function Xa(e) {
    (delete e[_e], delete e[Be], delete e[Ga], delete e[Fd], delete e[Ud]);
  }
  function Vn(e) {
    var t = e[_e];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[qn] || n[_e])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Bf(e); e !== null; ) {
            if ((n = e[_e])) return n;
            e = Bf(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Hn(e) {
    if ((e = e[_e] || e[qn])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function jl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function Wn(e) {
    var t = e[ko];
    return (
      t ||
        (t = e[ko] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Ne(e) {
    e[Ll] = !0;
  }
  var So = new Set(),
    wo = {};
  function Cn(e, t) {
    (Qn(e, t), Qn(e + 'Capture', t));
  }
  function Qn(e, t) {
    for (wo[e] = t, e = 0; e < t.length; e++) So.add(t[e]);
  }
  var $d = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    xo = {},
    Eo = {};
  function Bd(e) {
    return Va.call(Eo, e)
      ? !0
      : Va.call(xo, e)
        ? !1
        : $d.test(e)
          ? (Eo[e] = !0)
          : ((xo[e] = !0), !1);
  }
  function _r(e, t, n) {
    if (Bd(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, '' + n);
      }
  }
  function Tr(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, '' + n);
    }
  }
  function Lt(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, '' + l);
    }
  }
  function ut(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return e;
      default:
        return '';
    }
  }
  function Co(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (t === 'checkbox' || t === 'radio')
    );
  }
  function qd(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var r = l.get,
        a = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return r.call(this);
          },
          set: function (i) {
            ((n = '' + i), a.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (i) {
            n = '' + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Za(e) {
    if (!e._valueTracker) {
      var t = Co(e) ? 'checked' : 'value';
      e._valueTracker = qd(e, t, '' + e[t]);
    }
  }
  function No(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = Co(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Pr(e) {
    if (
      ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vd = /[\n"\\]/g;
  function gt(e) {
    return e.replace(Vd, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function Ja(e, t, n, l, r, a, i, u) {
    ((e.name = ''),
      i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean'
        ? (e.type = i)
        : e.removeAttribute('type'),
      t != null
        ? i === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) &&
            (e.value = '' + ut(t))
          : e.value !== '' + ut(t) && (e.value = '' + ut(t))
        : (i !== 'submit' && i !== 'reset') || e.removeAttribute('value'),
      t != null
        ? ei(e, i, ut(t))
        : n != null
          ? ei(e, i, ut(n))
          : l != null && e.removeAttribute('value'),
      r == null && a != null && (e.defaultChecked = !!a),
      r != null &&
        (e.checked = r && typeof r != 'function' && typeof r != 'symbol'),
      u != null &&
      typeof u != 'function' &&
      typeof u != 'symbol' &&
      typeof u != 'boolean'
        ? (e.name = '' + ut(u))
        : e.removeAttribute('name'));
  }
  function zo(e, t, n, l, r, a, i, u) {
    if (
      (a != null &&
        typeof a != 'function' &&
        typeof a != 'symbol' &&
        typeof a != 'boolean' &&
        (e.type = a),
      t != null || n != null)
    ) {
      if (!((a !== 'submit' && a !== 'reset') || t != null)) {
        Za(e);
        return;
      }
      ((n = n != null ? '' + ut(n) : ''),
        (t = t != null ? '' + ut(t) : n),
        u || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? r),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = u ? e.checked : !!l),
      (e.defaultChecked = !!l),
      i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (e.name = i),
      Za(e));
  }
  function ei(e, t, n) {
    (t === 'number' && Pr(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function Kn(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var r = 0; r < n.length; r++) t['$' + n[r]] = !0;
      for (n = 0; n < e.length; n++)
        ((r = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== r && (e[n].selected = r),
          r && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + ut(n), t = null, r = 0; r < e.length; r++) {
        if (e[r].value === n) {
          ((e[r].selected = !0), l && (e[r].defaultSelected = !0));
          return;
        }
        t !== null || e[r].disabled || (t = e[r]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function _o(e, t, n) {
    if (
      t != null &&
      ((t = '' + ut(t)), t !== e.value && (e.value = t), n == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + ut(n) : '';
  }
  function To(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(f(92));
        if (ht(l)) {
          if (1 < l.length) throw Error(f(93));
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = ut(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l),
      Za(e));
  }
  function Yn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hd = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Po(e, t, n) {
    var l = t.indexOf('--') === 0;
    n == null || typeof n == 'boolean' || n === ''
      ? l
        ? e.setProperty(t, '')
        : t === 'float'
          ? (e.cssFloat = '')
          : (e[t] = '')
      : l
        ? e.setProperty(t, n)
        : typeof n != 'number' || n === 0 || Hd.has(t)
          ? t === 'float'
            ? (e.cssFloat = n)
            : (e[t] = ('' + n).trim())
          : (e[t] = n + 'px');
  }
  function Lo(e, t, n) {
    if (t != null && typeof t != 'object') throw Error(f(62));
    if (((e = e.style), n != null)) {
      for (var l in n)
        !n.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf('--') === 0
            ? e.setProperty(l, '')
            : l === 'float'
              ? (e.cssFloat = '')
              : (e[l] = ''));
      for (var r in t)
        ((l = t[r]), t.hasOwnProperty(r) && n[r] !== l && Po(e, r, l));
    } else for (var a in t) t.hasOwnProperty(a) && Po(e, a, t[a]);
  }
  function ti(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Wd = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    Qd =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Lr(e) {
    return Qd.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function jt() {}
  var ni = null;
  function li(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Gn = null,
    Xn = null;
  function jo(e) {
    var t = Hn(e);
    if (t && (e = t.stateNode)) {
      var n = e[Be] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (Ja(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + gt('' + t) + '"][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var r = l[Be] || null;
                if (!r) throw Error(f(90));
                Ja(
                  l,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                );
              }
            }
            for (t = 0; t < n.length; t++)
              ((l = n[t]), l.form === e.form && No(l));
          }
          break e;
        case 'textarea':
          _o(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && Kn(e, !!n.multiple, t, !1));
      }
    }
  }
  var ri = !1;
  function Oo(e, t, n) {
    if (ri) return e(t, n);
    ri = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((ri = !1),
        (Gn !== null || Xn !== null) &&
          (va(), Gn && ((t = Gn), (e = Xn), (Xn = Gn = null), jo(t), e)))
      )
        for (t = 0; t < e.length; t++) jo(e[t]);
    }
  }
  function Ol(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Be] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(f(231, t, typeof n));
    return n;
  }
  var Ot = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    ai = !1;
  if (Ot)
    try {
      var Al = {};
      (Object.defineProperty(Al, 'passive', {
        get: function () {
          ai = !0;
        },
      }),
        window.addEventListener('test', Al, Al),
        window.removeEventListener('test', Al, Al));
    } catch {
      ai = !1;
    }
  var Zt = null,
    ii = null,
    jr = null;
  function Ao() {
    if (jr) return jr;
    var e,
      t = ii,
      n = t.length,
      l,
      r = 'value' in Zt ? Zt.value : Zt.textContent,
      a = r.length;
    for (e = 0; e < n && t[e] === r[e]; e++);
    var i = n - e;
    for (l = 1; l <= i && t[n - l] === r[a - l]; l++);
    return (jr = r.slice(e, 1 < l ? 1 - l : void 0));
  }
  function Or(e) {
    var t = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Ar() {
    return !0;
  }
  function Ro() {
    return !1;
  }
  function qe(e) {
    function t(n, l, r, a, i) {
      ((this._reactName = n),
        (this._targetInst = r),
        (this.type = l),
        (this.nativeEvent = a),
        (this.target = i),
        (this.currentTarget = null));
      for (var u in e)
        e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(a) : a[u]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? Ar
          : Ro),
        (this.isPropagationStopped = Ro),
        this
      );
    }
    return (
      A(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = Ar));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = Ar));
        },
        persist: function () {},
        isPersistent: Ar,
      }),
      t
    );
  }
  var Nn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Rr = qe(Nn),
    Rl = A({}, Nn, { view: 0, detail: 0 }),
    Kd = qe(Rl),
    ui,
    oi,
    Ml,
    Mr = A({}, Rl, {
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
      getModifierState: ci,
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
        return 'movementX' in e
          ? e.movementX
          : (e !== Ml &&
              (Ml && e.type === 'mousemove'
                ? ((ui = e.screenX - Ml.screenX), (oi = e.screenY - Ml.screenY))
                : (oi = ui = 0),
              (Ml = e)),
            ui);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : oi;
      },
    }),
    Mo = qe(Mr),
    Yd = A({}, Mr, { dataTransfer: 0 }),
    Gd = qe(Yd),
    Xd = A({}, Rl, { relatedTarget: 0 }),
    si = qe(Xd),
    Zd = A({}, Nn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jd = qe(Zd),
    ep = A({}, Nn, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    tp = qe(ep),
    np = A({}, Nn, { data: 0 }),
    Do = qe(np),
    lp = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    rp = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    ap = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function ip(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = ap[e])
        ? !!t[e]
        : !1;
  }
  function ci() {
    return ip;
  }
  var up = A({}, Rl, {
      key: function (e) {
        if (e.key) {
          var t = lp[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = Or(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? rp[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ci,
      charCode: function (e) {
        return e.type === 'keypress' ? Or(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Or(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    op = qe(up),
    sp = A({}, Mr, {
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
    Io = qe(sp),
    cp = A({}, Rl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ci,
    }),
    fp = qe(cp),
    dp = A({}, Nn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pp = qe(dp),
    mp = A({}, Mr, {
      deltaX: function (e) {
        return 'deltaX' in e
          ? e.deltaX
          : 'wheelDeltaX' in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    hp = qe(mp),
    gp = A({}, Nn, { newState: 0, oldState: 0 }),
    yp = qe(gp),
    vp = [9, 13, 27, 32],
    fi = Ot && 'CompositionEvent' in window,
    Dl = null;
  Ot && 'documentMode' in document && (Dl = document.documentMode);
  var bp = Ot && 'TextEvent' in window && !Dl,
    Fo = Ot && (!fi || (Dl && 8 < Dl && 11 >= Dl)),
    Uo = ' ',
    $o = !1;
  function Bo(e, t) {
    switch (e) {
      case 'keyup':
        return vp.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function qo(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var Zn = !1;
  function kp(e, t) {
    switch (e) {
      case 'compositionend':
        return qo(t);
      case 'keypress':
        return t.which !== 32 ? null : (($o = !0), Uo);
      case 'textInput':
        return ((e = t.data), e === Uo && $o ? null : e);
      default:
        return null;
    }
  }
  function Sp(e, t) {
    if (Zn)
      return e === 'compositionend' || (!fi && Bo(e, t))
        ? ((e = Ao()), (jr = ii = Zt = null), (Zn = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Fo && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  var wp = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  function Vo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!wp[e.type] : t === 'textarea';
  }
  function Ho(e, t, n, l) {
    (Gn ? (Xn ? Xn.push(l) : (Xn = [l])) : (Gn = l),
      (t = Ca(t, 'onChange')),
      0 < t.length &&
        ((n = new Rr('onChange', 'change', null, n, l)),
        e.push({ event: n, listeners: t })));
  }
  var Il = null,
    Fl = null;
  function xp(e) {
    _f(e, 0);
  }
  function Dr(e) {
    var t = jl(e);
    if (No(t)) return e;
  }
  function Wo(e, t) {
    if (e === 'change') return t;
  }
  var Qo = !1;
  if (Ot) {
    var di;
    if (Ot) {
      var pi = 'oninput' in document;
      if (!pi) {
        var Ko = document.createElement('div');
        (Ko.setAttribute('oninput', 'return;'),
          (pi = typeof Ko.oninput == 'function'));
      }
      di = pi;
    } else di = !1;
    Qo = di && (!document.documentMode || 9 < document.documentMode);
  }
  function Yo() {
    Il && (Il.detachEvent('onpropertychange', Go), (Fl = Il = null));
  }
  function Go(e) {
    if (e.propertyName === 'value' && Dr(Fl)) {
      var t = [];
      (Ho(t, Fl, e, li(e)), Oo(xp, t));
    }
  }
  function Ep(e, t, n) {
    e === 'focusin'
      ? (Yo(), (Il = t), (Fl = n), Il.attachEvent('onpropertychange', Go))
      : e === 'focusout' && Yo();
  }
  function Cp(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Dr(Fl);
  }
  function Np(e, t) {
    if (e === 'click') return Dr(t);
  }
  function zp(e, t) {
    if (e === 'input' || e === 'change') return Dr(t);
  }
  function _p(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Je = typeof Object.is == 'function' ? Object.is : _p;
  function Ul(e, t) {
    if (Je(e, t)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof t != 'object' ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var r = n[l];
      if (!Va.call(t, r) || !Je(e[r], t[r])) return !1;
    }
    return !0;
  }
  function Xo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zo(e, t) {
    var n = Xo(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t))
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Xo(n);
    }
  }
  function Jo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Jo(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function es(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = Pr(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Pr(e.document);
    }
    return t;
  }
  function mi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var Tp = Ot && 'documentMode' in document && 11 >= document.documentMode,
    Jn = null,
    hi = null,
    $l = null,
    gi = !1;
  function ts(e, t, n) {
    var l =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gi ||
      Jn == null ||
      Jn !== Pr(l) ||
      ((l = Jn),
      'selectionStart' in l && mi(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      ($l && Ul($l, l)) ||
        (($l = l),
        (l = Ca(hi, 'onSelect')),
        0 < l.length &&
          ((t = new Rr('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Jn))));
  }
  function zn(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  var el = {
      animationend: zn('Animation', 'AnimationEnd'),
      animationiteration: zn('Animation', 'AnimationIteration'),
      animationstart: zn('Animation', 'AnimationStart'),
      transitionrun: zn('Transition', 'TransitionRun'),
      transitionstart: zn('Transition', 'TransitionStart'),
      transitioncancel: zn('Transition', 'TransitionCancel'),
      transitionend: zn('Transition', 'TransitionEnd'),
    },
    yi = {},
    ns = {};
  Ot &&
    ((ns = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete el.animationend.animation,
      delete el.animationiteration.animation,
      delete el.animationstart.animation),
    'TransitionEvent' in window || delete el.transitionend.transition);
  function _n(e) {
    if (yi[e]) return yi[e];
    if (!el[e]) return e;
    var t = el[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ns) return (yi[e] = t[n]);
    return e;
  }
  var ls = _n('animationend'),
    rs = _n('animationiteration'),
    as = _n('animationstart'),
    Pp = _n('transitionrun'),
    Lp = _n('transitionstart'),
    jp = _n('transitioncancel'),
    is = _n('transitionend'),
    us = new Map(),
    vi =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  vi.push('scrollEnd');
  function yt(e, t) {
    (us.set(e, t), Cn(t, [e]));
  }
  var Ir =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == 'object' &&
                  e !== null &&
                  typeof e.message == 'string'
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', e);
              return;
            }
            console.error(e);
          },
    ot = [],
    tl = 0,
    bi = 0;
  function Fr() {
    for (var e = tl, t = (bi = tl = 0); t < e; ) {
      var n = ot[t];
      ot[t++] = null;
      var l = ot[t];
      ot[t++] = null;
      var r = ot[t];
      ot[t++] = null;
      var a = ot[t];
      if (((ot[t++] = null), l !== null && r !== null)) {
        var i = l.pending;
        (i === null ? (r.next = r) : ((r.next = i.next), (i.next = r)),
          (l.pending = r));
      }
      a !== 0 && os(n, r, a);
    }
  }
  function Ur(e, t, n, l) {
    ((ot[tl++] = e),
      (ot[tl++] = t),
      (ot[tl++] = n),
      (ot[tl++] = l),
      (bi |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function ki(e, t, n, l) {
    return (Ur(e, t, n, l), $r(e));
  }
  function Tn(e, t) {
    return (Ur(e, null, null, t), $r(e));
  }
  function os(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var r = !1, a = e.return; a !== null; )
      ((a.childLanes |= n),
        (l = a.alternate),
        l !== null && (l.childLanes |= n),
        a.tag === 22 &&
          ((e = a.stateNode), e === null || e._visibility & 1 || (r = !0)),
        (e = a),
        (a = a.return));
    return e.tag === 3
      ? ((a = e.stateNode),
        r &&
          t !== null &&
          ((r = 31 - Ze(n)),
          (e = a.hiddenUpdates),
          (l = e[r]),
          l === null ? (e[r] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        a)
      : null;
  }
  function $r(e) {
    if (50 < sr) throw ((sr = 0), (Tu = null), Error(f(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var nl = {};
  function Op(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function et(e, t, n, l) {
    return new Op(e, t, n, l);
  }
  function Si(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function At(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = et(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      n
    );
  }
  function ss(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Br(e, t, n, l, r, a) {
    var i = 0;
    if (((l = e), typeof e == 'function')) Si(e) && (i = 1);
    else if (typeof e == 'string')
      i = Im(e, n, T.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case xt:
          return (
            (e = et(31, n, t, r)),
            (e.elementType = xt),
            (e.lanes = a),
            e
          );
        case Re:
          return Pn(n.children, r, a, t);
        case Tt:
          ((i = 8), (r |= 24));
          break;
        case Ye:
          return (
            (e = et(12, n, t, r | 2)),
            (e.elementType = Ye),
            (e.lanes = a),
            e
          );
        case wt:
          return (
            (e = et(13, n, t, r)),
            (e.elementType = wt),
            (e.lanes = a),
            e
          );
        case Fe:
          return (
            (e = et(19, n, t, r)),
            (e.elementType = Fe),
            (e.lanes = a),
            e
          );
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Oe:
                i = 10;
                break e;
              case Yt:
                i = 9;
                break e;
              case it:
                i = 11;
                break e;
              case K:
                i = 14;
                break e;
              case Ue:
                ((i = 16), (l = null));
                break e;
            }
          ((i = 29),
            (n = Error(f(130, e === null ? 'null' : typeof e, ''))),
            (l = null));
      }
    return (
      (t = et(i, n, t, r)),
      (t.elementType = e),
      (t.type = l),
      (t.lanes = a),
      t
    );
  }
  function Pn(e, t, n, l) {
    return ((e = et(7, e, l, t)), (e.lanes = n), e);
  }
  function wi(e, t, n) {
    return ((e = et(6, e, null, t)), (e.lanes = n), e);
  }
  function cs(e) {
    var t = et(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function xi(e, t, n) {
    return (
      (t = et(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var fs = new WeakMap();
  function st(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = fs.get(e);
      return n !== void 0
        ? n
        : ((t = { value: e, source: t, stack: so(t) }), fs.set(e, t), t);
    }
    return { value: e, source: t, stack: so(t) };
  }
  var ll = [],
    rl = 0,
    qr = null,
    Bl = 0,
    ct = [],
    ft = 0,
    Jt = null,
    Ct = 1,
    Nt = '';
  function Rt(e, t) {
    ((ll[rl++] = Bl), (ll[rl++] = qr), (qr = e), (Bl = t));
  }
  function ds(e, t, n) {
    ((ct[ft++] = Ct), (ct[ft++] = Nt), (ct[ft++] = Jt), (Jt = e));
    var l = Ct;
    e = Nt;
    var r = 32 - Ze(l) - 1;
    ((l &= ~(1 << r)), (n += 1));
    var a = 32 - Ze(t) + r;
    if (30 < a) {
      var i = r - (r % 5);
      ((a = (l & ((1 << i) - 1)).toString(32)),
        (l >>= i),
        (r -= i),
        (Ct = (1 << (32 - Ze(t) + r)) | (n << r) | l),
        (Nt = a + e));
    } else ((Ct = (1 << a) | (n << r) | l), (Nt = e));
  }
  function Ei(e) {
    e.return !== null && (Rt(e, 1), ds(e, 1, 0));
  }
  function Ci(e) {
    for (; e === qr; )
      ((qr = ll[--rl]), (ll[rl] = null), (Bl = ll[--rl]), (ll[rl] = null));
    for (; e === Jt; )
      ((Jt = ct[--ft]),
        (ct[ft] = null),
        (Nt = ct[--ft]),
        (ct[ft] = null),
        (Ct = ct[--ft]),
        (ct[ft] = null));
  }
  function ps(e, t) {
    ((ct[ft++] = Ct),
      (ct[ft++] = Nt),
      (ct[ft++] = Jt),
      (Ct = t.id),
      (Nt = t.overflow),
      (Jt = e));
  }
  var Te = null,
    de = null,
    Y = !1,
    en = null,
    dt = !1,
    Ni = Error(f(519));
  function tn(e) {
    var t = Error(
      f(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? 'text'
          : 'HTML',
        '',
      ),
    );
    throw (ql(st(t, e)), Ni);
  }
  function ms(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[_e] = e), (t[Be] = l), n)) {
      case 'dialog':
        (H('cancel', t), H('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        H('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < fr.length; n++) H(fr[n], t);
        break;
      case 'source':
        H('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (H('error', t), H('load', t));
        break;
      case 'details':
        H('toggle', t);
        break;
      case 'input':
        (H('invalid', t),
          zo(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0,
          ));
        break;
      case 'select':
        H('invalid', t);
        break;
      case 'textarea':
        (H('invalid', t), To(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      jf(t.textContent, n)
        ? (l.popover != null && (H('beforetoggle', t), H('toggle', t)),
          l.onScroll != null && H('scroll', t),
          l.onScrollEnd != null && H('scrollend', t),
          l.onClick != null && (t.onclick = jt),
          (t = !0))
        : (t = !1),
      t || tn(e, !0));
  }
  function hs(e) {
    for (Te = e.return; Te; )
      switch (Te.tag) {
        case 5:
        case 31:
        case 13:
          dt = !1;
          return;
        case 27:
        case 3:
          dt = !0;
          return;
        default:
          Te = Te.return;
      }
  }
  function al(e) {
    if (e !== Te) return !1;
    if (!Y) return (hs(e), (Y = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type),
          (n =
            !(n !== 'form' && n !== 'button') || Vu(e.type, e.memoizedProps))),
        (n = !n)),
      n && de && tn(e),
      hs(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      de = $f(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      de = $f(e);
    } else
      t === 27
        ? ((t = de), gn(e.type) ? ((e = Yu), (Yu = null), (de = e)) : (de = t))
        : (de = Te ? pt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Ln() {
    ((de = Te = null), (Y = !1));
  }
  function zi() {
    var e = en;
    return (
      e !== null &&
        (Qe === null ? (Qe = e) : Qe.push.apply(Qe, e), (en = null)),
      e
    );
  }
  function ql(e) {
    en === null ? (en = [e]) : en.push(e);
  }
  var _i = c(null),
    jn = null,
    Mt = null;
  function nn(e, t, n) {
    (N(_i, t._currentValue), (t._currentValue = n));
  }
  function Dt(e) {
    ((e._currentValue = _i.current), w(_i));
  }
  function Ti(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Pi(e, t, n, l) {
    var r = e.child;
    for (r !== null && (r.return = e); r !== null; ) {
      var a = r.dependencies;
      if (a !== null) {
        var i = r.child;
        a = a.firstContext;
        e: for (; a !== null; ) {
          var u = a;
          a = r;
          for (var o = 0; o < t.length; o++)
            if (u.context === t[o]) {
              ((a.lanes |= n),
                (u = a.alternate),
                u !== null && (u.lanes |= n),
                Ti(a.return, n, e),
                l || (i = null));
              break e;
            }
          a = u.next;
        }
      } else if (r.tag === 18) {
        if (((i = r.return), i === null)) throw Error(f(341));
        ((i.lanes |= n),
          (a = i.alternate),
          a !== null && (a.lanes |= n),
          Ti(i, n, e),
          (i = null));
      } else i = r.child;
      if (i !== null) i.return = r;
      else
        for (i = r; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((r = i.sibling), r !== null)) {
            ((r.return = i.return), (i = r));
            break;
          }
          i = i.return;
        }
      r = i;
    }
  }
  function il(e, t, n, l) {
    e = null;
    for (var r = t, a = !1; r !== null; ) {
      if (!a) {
        if ((r.flags & 524288) !== 0) a = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var i = r.alternate;
        if (i === null) throw Error(f(387));
        if (((i = i.memoizedProps), i !== null)) {
          var u = r.type;
          Je(r.pendingProps.value, i.value) ||
            (e !== null ? e.push(u) : (e = [u]));
        }
      } else if (r === te.current) {
        if (((i = r.alternate), i === null)) throw Error(f(387));
        i.memoizedState.memoizedState !== r.memoizedState.memoizedState &&
          (e !== null ? e.push(gr) : (e = [gr]));
      }
      r = r.return;
    }
    (e !== null && Pi(t, e, n, l), (t.flags |= 262144));
  }
  function Vr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Je(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function On(e) {
    ((jn = e),
      (Mt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Pe(e) {
    return gs(jn, e);
  }
  function Hr(e, t) {
    return (jn === null && On(e), gs(e, t));
  }
  function gs(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), Mt === null)) {
      if (e === null) throw Error(f(308));
      ((Mt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Mt = Mt.next = t;
    return n;
  }
  var Ap =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    Rp = E.unstable_scheduleCallback,
    Mp = E.unstable_NormalPriority,
    Se = {
      $$typeof: Oe,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Li() {
    return { controller: new Ap(), data: new Map(), refCount: 0 };
  }
  function Vl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Rp(Mp, function () {
          e.controller.abort();
        }));
  }
  var Hl = null,
    ji = 0,
    ul = 0,
    ol = null;
  function Dp(e, t) {
    if (Hl === null) {
      var n = (Hl = []);
      ((ji = 0),
        (ul = Ru()),
        (ol = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (ji++, t.then(ys, ys), t);
  }
  function ys() {
    if (--ji === 0 && Hl !== null) {
      ol !== null && (ol.status = 'fulfilled');
      var e = Hl;
      ((Hl = null), (ul = 0), (ol = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ip(e, t) {
    var n = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (r) {
          n.push(r);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = t));
          for (var r = 0; r < n.length; r++) (0, n[r])(t);
        },
        function (r) {
          for (l.status = 'rejected', l.reason = r, r = 0; r < n.length; r++)
            (0, n[r])(void 0);
        },
      ),
      l
    );
  }
  var vs = v.S;
  v.S = function (e, t) {
    ((tf = Ge()),
      typeof t == 'object' &&
        t !== null &&
        typeof t.then == 'function' &&
        Dp(e, t),
      vs !== null && vs(e, t));
  };
  var An = c(null);
  function Oi() {
    var e = An.current;
    return e !== null ? e : ce.pooledCache;
  }
  function Wr(e, t) {
    t === null ? N(An, An.current) : N(An, t.pool);
  }
  function bs() {
    var e = Oi();
    return e === null ? null : { parent: Se._currentValue, pool: e };
  }
  var sl = Error(f(460)),
    Ai = Error(f(474)),
    Qr = Error(f(542)),
    Kr = { then: function () {} };
  function ks(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Ss(e, t, n) {
    switch (
      ((n = e[n]),
      n === void 0 ? e.push(t) : n !== t && (t.then(jt, jt), (t = n)),
      t.status)
    ) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), xs(e), e);
      default:
        if (typeof t.status == 'string') t.then(jt, jt);
        else {
          if (((e = ce), e !== null && 100 < e.shellSuspendCounter))
            throw Error(f(482));
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (l) {
                if (t.status === 'pending') {
                  var r = t;
                  ((r.status = 'fulfilled'), (r.value = l));
                }
              },
              function (l) {
                if (t.status === 'pending') {
                  var r = t;
                  ((r.status = 'rejected'), (r.reason = l));
                }
              },
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), xs(e), e);
        }
        throw ((Mn = t), sl);
    }
  }
  function Rn(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == 'object' && typeof n.then == 'function'
        ? ((Mn = n), sl)
        : n;
    }
  }
  var Mn = null;
  function ws() {
    if (Mn === null) throw Error(f(459));
    var e = Mn;
    return ((Mn = null), e);
  }
  function xs(e) {
    if (e === sl || e === Qr) throw Error(f(483));
  }
  var cl = null,
    Wl = 0;
  function Yr(e) {
    var t = Wl;
    return ((Wl += 1), cl === null && (cl = []), Ss(cl, e, t));
  }
  function Ql(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Gr(e, t) {
    throw t.$$typeof === fe
      ? Error(f(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          f(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e,
          ),
        ));
  }
  function Es(e) {
    function t(d, s) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [s]), (d.flags |= 16)) : p.push(s);
      }
    }
    function n(d, s) {
      if (!e) return null;
      for (; s !== null; ) (t(d, s), (s = s.sibling));
      return null;
    }
    function l(d) {
      for (var s = new Map(); d !== null; )
        (d.key !== null ? s.set(d.key, d) : s.set(d.index, d), (d = d.sibling));
      return s;
    }
    function r(d, s) {
      return ((d = At(d, s)), (d.index = 0), (d.sibling = null), d);
    }
    function a(d, s, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null
              ? ((p = p.index), p < s ? ((d.flags |= 67108866), s) : p)
              : ((d.flags |= 67108866), s))
          : ((d.flags |= 1048576), s)
      );
    }
    function i(d) {
      return (e && d.alternate === null && (d.flags |= 67108866), d);
    }
    function u(d, s, p, b) {
      return s === null || s.tag !== 6
        ? ((s = wi(p, d.mode, b)), (s.return = d), s)
        : ((s = r(s, p)), (s.return = d), s);
    }
    function o(d, s, p, b) {
      var j = p.type;
      return j === Re
        ? y(d, s, p.props.children, b, p.key)
        : s !== null &&
            (s.elementType === j ||
              (typeof j == 'object' &&
                j !== null &&
                j.$$typeof === Ue &&
                Rn(j) === s.type))
          ? ((s = r(s, p.props)), Ql(s, p), (s.return = d), s)
          : ((s = Br(p.type, p.key, p.props, null, d.mode, b)),
            Ql(s, p),
            (s.return = d),
            s);
    }
    function m(d, s, p, b) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== p.containerInfo ||
        s.stateNode.implementation !== p.implementation
        ? ((s = xi(p, d.mode, b)), (s.return = d), s)
        : ((s = r(s, p.children || [])), (s.return = d), s);
    }
    function y(d, s, p, b, j) {
      return s === null || s.tag !== 7
        ? ((s = Pn(p, d.mode, b, j)), (s.return = d), s)
        : ((s = r(s, p)), (s.return = d), s);
    }
    function S(d, s, p) {
      if (
        (typeof s == 'string' && s !== '') ||
        typeof s == 'number' ||
        typeof s == 'bigint'
      )
        return ((s = wi('' + s, d.mode, p)), (s.return = d), s);
      if (typeof s == 'object' && s !== null) {
        switch (s.$$typeof) {
          case oe:
            return (
              (p = Br(s.type, s.key, s.props, null, d.mode, p)),
              Ql(p, s),
              (p.return = d),
              p
            );
          case Ie:
            return ((s = xi(s, d.mode, p)), (s.return = d), s);
          case Ue:
            return ((s = Rn(s)), S(d, s, p));
        }
        if (ht(s) || $e(s))
          return ((s = Pn(s, d.mode, p, null)), (s.return = d), s);
        if (typeof s.then == 'function') return S(d, Yr(s), p);
        if (s.$$typeof === Oe) return S(d, Hr(d, s), p);
        Gr(d, s);
      }
      return null;
    }
    function h(d, s, p, b) {
      var j = s !== null ? s.key : null;
      if (
        (typeof p == 'string' && p !== '') ||
        typeof p == 'number' ||
        typeof p == 'bigint'
      )
        return j !== null ? null : u(d, s, '' + p, b);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case oe:
            return p.key === j ? o(d, s, p, b) : null;
          case Ie:
            return p.key === j ? m(d, s, p, b) : null;
          case Ue:
            return ((p = Rn(p)), h(d, s, p, b));
        }
        if (ht(p) || $e(p)) return j !== null ? null : y(d, s, p, b, null);
        if (typeof p.then == 'function') return h(d, s, Yr(p), b);
        if (p.$$typeof === Oe) return h(d, s, Hr(d, p), b);
        Gr(d, p);
      }
      return null;
    }
    function g(d, s, p, b, j) {
      if (
        (typeof b == 'string' && b !== '') ||
        typeof b == 'number' ||
        typeof b == 'bigint'
      )
        return ((d = d.get(p) || null), u(s, d, '' + b, j));
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case oe:
            return (
              (d = d.get(b.key === null ? p : b.key) || null),
              o(s, d, b, j)
            );
          case Ie:
            return (
              (d = d.get(b.key === null ? p : b.key) || null),
              m(s, d, b, j)
            );
          case Ue:
            return ((b = Rn(b)), g(d, s, p, b, j));
        }
        if (ht(b) || $e(b))
          return ((d = d.get(p) || null), y(s, d, b, j, null));
        if (typeof b.then == 'function') return g(d, s, p, Yr(b), j);
        if (b.$$typeof === Oe) return g(d, s, p, Hr(s, b), j);
        Gr(s, b);
      }
      return null;
    }
    function _(d, s, p, b) {
      for (
        var j = null, Z = null, P = s, $ = (s = 0), Q = null;
        P !== null && $ < p.length;
        $++
      ) {
        P.index > $ ? ((Q = P), (P = null)) : (Q = P.sibling);
        var J = h(d, P, p[$], b);
        if (J === null) {
          P === null && (P = Q);
          break;
        }
        (e && P && J.alternate === null && t(d, P),
          (s = a(J, s, $)),
          Z === null ? (j = J) : (Z.sibling = J),
          (Z = J),
          (P = Q));
      }
      if ($ === p.length) return (n(d, P), Y && Rt(d, $), j);
      if (P === null) {
        for (; $ < p.length; $++)
          ((P = S(d, p[$], b)),
            P !== null &&
              ((s = a(P, s, $)),
              Z === null ? (j = P) : (Z.sibling = P),
              (Z = P)));
        return (Y && Rt(d, $), j);
      }
      for (P = l(P); $ < p.length; $++)
        ((Q = g(P, d, $, p[$], b)),
          Q !== null &&
            (e && Q.alternate !== null && P.delete(Q.key === null ? $ : Q.key),
            (s = a(Q, s, $)),
            Z === null ? (j = Q) : (Z.sibling = Q),
            (Z = Q)));
      return (
        e &&
          P.forEach(function (Sn) {
            return t(d, Sn);
          }),
        Y && Rt(d, $),
        j
      );
    }
    function R(d, s, p, b) {
      if (p == null) throw Error(f(151));
      for (
        var j = null, Z = null, P = s, $ = (s = 0), Q = null, J = p.next();
        P !== null && !J.done;
        $++, J = p.next()
      ) {
        P.index > $ ? ((Q = P), (P = null)) : (Q = P.sibling);
        var Sn = h(d, P, J.value, b);
        if (Sn === null) {
          P === null && (P = Q);
          break;
        }
        (e && P && Sn.alternate === null && t(d, P),
          (s = a(Sn, s, $)),
          Z === null ? (j = Sn) : (Z.sibling = Sn),
          (Z = Sn),
          (P = Q));
      }
      if (J.done) return (n(d, P), Y && Rt(d, $), j);
      if (P === null) {
        for (; !J.done; $++, J = p.next())
          ((J = S(d, J.value, b)),
            J !== null &&
              ((s = a(J, s, $)),
              Z === null ? (j = J) : (Z.sibling = J),
              (Z = J)));
        return (Y && Rt(d, $), j);
      }
      for (P = l(P); !J.done; $++, J = p.next())
        ((J = g(P, d, $, J.value, b)),
          J !== null &&
            (e && J.alternate !== null && P.delete(J.key === null ? $ : J.key),
            (s = a(J, s, $)),
            Z === null ? (j = J) : (Z.sibling = J),
            (Z = J)));
      return (
        e &&
          P.forEach(function (Ym) {
            return t(d, Ym);
          }),
        Y && Rt(d, $),
        j
      );
    }
    function ue(d, s, p, b) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === Re &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case oe:
            e: {
              for (var j = p.key; s !== null; ) {
                if (s.key === j) {
                  if (((j = p.type), j === Re)) {
                    if (s.tag === 7) {
                      (n(d, s.sibling),
                        (b = r(s, p.props.children)),
                        (b.return = d),
                        (d = b));
                      break e;
                    }
                  } else if (
                    s.elementType === j ||
                    (typeof j == 'object' &&
                      j !== null &&
                      j.$$typeof === Ue &&
                      Rn(j) === s.type)
                  ) {
                    (n(d, s.sibling),
                      (b = r(s, p.props)),
                      Ql(b, p),
                      (b.return = d),
                      (d = b));
                    break e;
                  }
                  n(d, s);
                  break;
                } else t(d, s);
                s = s.sibling;
              }
              p.type === Re
                ? ((b = Pn(p.props.children, d.mode, b, p.key)),
                  (b.return = d),
                  (d = b))
                : ((b = Br(p.type, p.key, p.props, null, d.mode, b)),
                  Ql(b, p),
                  (b.return = d),
                  (d = b));
            }
            return i(d);
          case Ie:
            e: {
              for (j = p.key; s !== null; ) {
                if (s.key === j)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === p.containerInfo &&
                    s.stateNode.implementation === p.implementation
                  ) {
                    (n(d, s.sibling),
                      (b = r(s, p.children || [])),
                      (b.return = d),
                      (d = b));
                    break e;
                  } else {
                    n(d, s);
                    break;
                  }
                else t(d, s);
                s = s.sibling;
              }
              ((b = xi(p, d.mode, b)), (b.return = d), (d = b));
            }
            return i(d);
          case Ue:
            return ((p = Rn(p)), ue(d, s, p, b));
        }
        if (ht(p)) return _(d, s, p, b);
        if ($e(p)) {
          if (((j = $e(p)), typeof j != 'function')) throw Error(f(150));
          return ((p = j.call(p)), R(d, s, p, b));
        }
        if (typeof p.then == 'function') return ue(d, s, Yr(p), b);
        if (p.$$typeof === Oe) return ue(d, s, Hr(d, p), b);
        Gr(d, p);
      }
      return (typeof p == 'string' && p !== '') ||
        typeof p == 'number' ||
        typeof p == 'bigint'
        ? ((p = '' + p),
          s !== null && s.tag === 6
            ? (n(d, s.sibling), (b = r(s, p)), (b.return = d), (d = b))
            : (n(d, s), (b = wi(p, d.mode, b)), (b.return = d), (d = b)),
          i(d))
        : n(d, s);
    }
    return function (d, s, p, b) {
      try {
        Wl = 0;
        var j = ue(d, s, p, b);
        return ((cl = null), j);
      } catch (P) {
        if (P === sl || P === Qr) throw P;
        var Z = et(29, P, null, d.mode);
        return ((Z.lanes = b), (Z.return = d), Z);
      } finally {
      }
    };
  }
  var Dn = Es(!0),
    Cs = Es(!1),
    ln = !1;
  function Ri(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mi(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function rn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function an(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), (ee & 2) !== 0)) {
      var r = l.pending;
      return (
        r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (l.pending = t),
        (t = $r(e)),
        os(e, null, n),
        t
      );
    }
    return (Ur(e, l, t, n), $r(e));
  }
  function Kl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
    ) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), go(e, n));
    }
  }
  function Di(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var r = null,
        a = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (a === null ? (r = a = i) : (a = a.next = i), (n = n.next));
        } while (n !== null);
        a === null ? (r = a = t) : (a = a.next = t);
      } else r = a = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: a,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  var Ii = !1;
  function Yl() {
    if (Ii) {
      var e = ol;
      if (e !== null) throw e;
    }
  }
  function Gl(e, t, n, l) {
    Ii = !1;
    var r = e.updateQueue;
    ln = !1;
    var a = r.firstBaseUpdate,
      i = r.lastBaseUpdate,
      u = r.shared.pending;
    if (u !== null) {
      r.shared.pending = null;
      var o = u,
        m = o.next;
      ((o.next = null), i === null ? (a = m) : (i.next = m), (i = o));
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (u = y.lastBaseUpdate),
        u !== i &&
          (u === null ? (y.firstBaseUpdate = m) : (u.next = m),
          (y.lastBaseUpdate = o)));
    }
    if (a !== null) {
      var S = r.baseState;
      ((i = 0), (y = m = o = null), (u = a));
      do {
        var h = u.lane & -536870913,
          g = h !== u.lane;
        if (g ? (W & h) === h : (l & h) === h) {
          (h !== 0 && h === ul && (Ii = !0),
            y !== null &&
              (y = y.next =
                {
                  lane: 0,
                  tag: u.tag,
                  payload: u.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var _ = e,
              R = u;
            h = t;
            var ue = n;
            switch (R.tag) {
              case 1:
                if (((_ = R.payload), typeof _ == 'function')) {
                  S = _.call(ue, S, h);
                  break e;
                }
                S = _;
                break e;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = R.payload),
                  (h = typeof _ == 'function' ? _.call(ue, S, h) : _),
                  h == null)
                )
                  break e;
                S = A({}, S, h);
                break e;
              case 2:
                ln = !0;
            }
          }
          ((h = u.callback),
            h !== null &&
              ((e.flags |= 64),
              g && (e.flags |= 8192),
              (g = r.callbacks),
              g === null ? (r.callbacks = [h]) : g.push(h)));
        } else
          ((g = {
            lane: h,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            y === null ? ((m = y = g), (o = S)) : (y = y.next = g),
            (i |= h));
        if (((u = u.next), u === null)) {
          if (((u = r.shared.pending), u === null)) break;
          ((g = u),
            (u = g.next),
            (g.next = null),
            (r.lastBaseUpdate = g),
            (r.shared.pending = null));
        }
      } while (!0);
      (y === null && (o = S),
        (r.baseState = o),
        (r.firstBaseUpdate = m),
        (r.lastBaseUpdate = y),
        a === null && (r.shared.lanes = 0),
        (fn |= i),
        (e.lanes = i),
        (e.memoizedState = S));
    }
  }
  function Ns(e, t) {
    if (typeof e != 'function') throw Error(f(191, e));
    e.call(t);
  }
  function zs(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++) Ns(n[e], t);
  }
  var fl = c(null),
    Xr = c(0);
  function _s(e, t) {
    ((e = Wt), N(Xr, e), N(fl, t), (Wt = e | t.baseLanes));
  }
  function Fi() {
    (N(Xr, Wt), N(fl, fl.current));
  }
  function Ui() {
    ((Wt = Xr.current), w(fl), w(Xr));
  }
  var tt = c(null),
    vt = null;
  function un(e) {
    var t = e.alternate;
    (N(be, be.current & 1),
      N(tt, e),
      vt === null &&
        (t === null || fl.current !== null || t.memoizedState !== null) &&
        (vt = e));
  }
  function $i(e) {
    (N(be, be.current), N(tt, e), vt === null && (vt = e));
  }
  function Ts(e) {
    e.tag === 22
      ? (N(be, be.current), N(tt, e), vt === null && (vt = e))
      : on();
  }
  function on() {
    (N(be, be.current), N(tt, tt.current));
  }
  function nt(e) {
    (w(tt), vt === e && (vt = null), w(be));
  }
  var be = c(0);
  function Zr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || Qu(n) || Ku(n)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === 'forwards' ||
          t.memoizedProps.revealOrder === 'backwards' ||
          t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          t.memoizedProps.revealOrder === 'together')
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var It = 0,
    U = null,
    ae = null,
    we = null,
    Jr = !1,
    dl = !1,
    In = !1,
    ea = 0,
    Xl = 0,
    pl = null,
    Fp = 0;
  function he() {
    throw Error(f(321));
  }
  function Bi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Je(e[n], t[n])) return !1;
    return !0;
  }
  function qi(e, t, n, l, r, a) {
    return (
      (It = a),
      (U = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (v.H = e === null || e.memoizedState === null ? dc : ru),
      (In = !1),
      (a = n(l, r)),
      (In = !1),
      dl && (a = Ls(t, n, l, r)),
      Ps(e),
      a
    );
  }
  function Ps(e) {
    v.H = er;
    var t = ae !== null && ae.next !== null;
    if (((It = 0), (we = ae = U = null), (Jr = !1), (Xl = 0), (pl = null), t))
      throw Error(f(300));
    e === null ||
      xe ||
      ((e = e.dependencies), e !== null && Vr(e) && (xe = !0));
  }
  function Ls(e, t, n, l) {
    U = e;
    var r = 0;
    do {
      if ((dl && (pl = null), (Xl = 0), (dl = !1), 25 <= r))
        throw Error(f(301));
      if (((r += 1), (we = ae = null), e.updateQueue != null)) {
        var a = e.updateQueue;
        ((a.lastEffect = null),
          (a.events = null),
          (a.stores = null),
          a.memoCache != null && (a.memoCache.index = 0));
      }
      ((v.H = pc), (a = t(n, l)));
    } while (dl);
    return a;
  }
  function Up() {
    var e = v.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? Zl(t) : t),
      (e = e.useState()[0]),
      (ae !== null ? ae.memoizedState : null) !== e && (U.flags |= 1024),
      t
    );
  }
  function Vi() {
    var e = ea !== 0;
    return ((ea = 0), e);
  }
  function Hi(e, t, n) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
  }
  function Wi(e) {
    if (Jr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Jr = !1;
    }
    ((It = 0), (we = ae = U = null), (dl = !1), (Xl = ea = 0), (pl = null));
  }
  function De() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (we === null ? (U.memoizedState = we = e) : (we = we.next = e), we);
  }
  function ke() {
    if (ae === null) {
      var e = U.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ae.next;
    var t = we === null ? U.memoizedState : we.next;
    if (t !== null) ((we = t), (ae = e));
    else {
      if (e === null)
        throw U.alternate === null ? Error(f(467)) : Error(f(310));
      ((ae = e),
        (e = {
          memoizedState: ae.memoizedState,
          baseState: ae.baseState,
          baseQueue: ae.baseQueue,
          queue: ae.queue,
          next: null,
        }),
        we === null ? (U.memoizedState = we = e) : (we = we.next = e));
    }
    return we;
  }
  function ta() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zl(e) {
    var t = Xl;
    return (
      (Xl += 1),
      pl === null && (pl = []),
      (e = Ss(pl, e, t)),
      (t = U),
      (we === null ? t.memoizedState : we.next) === null &&
        ((t = t.alternate),
        (v.H = t === null || t.memoizedState === null ? dc : ru)),
      e
    );
  }
  function na(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Zl(e);
      if (e.$$typeof === Oe) return Pe(e);
    }
    throw Error(f(438, String(e)));
  }
  function Qi(e) {
    var t = null,
      n = U.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = U.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (r) {
                return r.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = ta()), (U.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = Bn;
    return (t.index++, n);
  }
  function Ft(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function la(e) {
    var t = ke();
    return Ki(t, ae, e);
  }
  function Ki(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = n;
    var r = e.baseQueue,
      a = l.pending;
    if (a !== null) {
      if (r !== null) {
        var i = r.next;
        ((r.next = a.next), (a.next = i));
      }
      ((t.baseQueue = r = a), (l.pending = null));
    }
    if (((a = e.baseState), r === null)) e.memoizedState = a;
    else {
      t = r.next;
      var u = (i = null),
        o = null,
        m = t,
        y = !1;
      do {
        var S = m.lane & -536870913;
        if (S !== m.lane ? (W & S) === S : (It & S) === S) {
          var h = m.revertLane;
          if (h === 0)
            (o !== null &&
              (o = o.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              S === ul && (y = !0));
          else if ((It & h) === h) {
            ((m = m.next), h === ul && (y = !0));
            continue;
          } else
            ((S = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              o === null ? ((u = o = S), (i = a)) : (o = o.next = S),
              (U.lanes |= h),
              (fn |= h));
          ((S = m.action),
            In && n(a, S),
            (a = m.hasEagerState ? m.eagerState : n(a, S)));
        } else
          ((h = {
            lane: S,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            o === null ? ((u = o = h), (i = a)) : (o = o.next = h),
            (U.lanes |= S),
            (fn |= S));
        m = m.next;
      } while (m !== null && m !== t);
      if (
        (o === null ? (i = a) : (o.next = u),
        !Je(a, e.memoizedState) && ((xe = !0), y && ((n = ol), n !== null)))
      )
        throw n;
      ((e.memoizedState = a),
        (e.baseState = i),
        (e.baseQueue = o),
        (l.lastRenderedState = a));
    }
    return (r === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Yi(e) {
    var t = ke(),
      n = t.queue;
    if (n === null) throw Error(f(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      r = n.pending,
      a = t.memoizedState;
    if (r !== null) {
      n.pending = null;
      var i = (r = r.next);
      do ((a = e(a, i.action)), (i = i.next));
      while (i !== r);
      (Je(a, t.memoizedState) || (xe = !0),
        (t.memoizedState = a),
        t.baseQueue === null && (t.baseState = a),
        (n.lastRenderedState = a));
    }
    return [a, l];
  }
  function js(e, t, n) {
    var l = U,
      r = ke(),
      a = Y;
    if (a) {
      if (n === void 0) throw Error(f(407));
      n = n();
    } else n = t();
    var i = !Je((ae || r).memoizedState, n);
    if (
      (i && ((r.memoizedState = n), (xe = !0)),
      (r = r.queue),
      Zi(Rs.bind(null, l, r, e), [e]),
      r.getSnapshot !== t || i || (we !== null && we.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        ml(9, { destroy: void 0 }, As.bind(null, l, r, n, t), null),
        ce === null)
      )
        throw Error(f(349));
      a || (It & 127) !== 0 || Os(l, t, n);
    }
    return n;
  }
  function Os(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = U.updateQueue),
      t === null
        ? ((t = ta()), (U.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function As(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), Ms(t) && Ds(e));
  }
  function Rs(e, t, n) {
    return n(function () {
      Ms(t) && Ds(e);
    });
  }
  function Ms(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Je(e, n);
    } catch {
      return !0;
    }
  }
  function Ds(e) {
    var t = Tn(e, 2);
    t !== null && Ke(t, e, 2);
  }
  function Gi(e) {
    var t = De();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), In)) {
        Gt(!0);
        try {
          n();
        } finally {
          Gt(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: e,
      }),
      t
    );
  }
  function Is(e, t, n, l) {
    return ((e.baseState = n), Ki(e, ae, typeof l == 'function' ? l : Ft));
  }
  function $p(e, t, n, l, r) {
    if (ia(e)) throw Error(f(485));
    if (((e = t.action), e !== null)) {
      var a = {
        payload: r,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          a.listeners.push(i);
        },
      };
      (v.T !== null ? n(!0) : (a.isTransition = !1),
        l(a),
        (n = t.pending),
        n === null
          ? ((a.next = t.pending = a), Fs(t, a))
          : ((a.next = n.next), (t.pending = n.next = a)));
    }
  }
  function Fs(e, t) {
    var n = t.action,
      l = t.payload,
      r = e.state;
    if (t.isTransition) {
      var a = v.T,
        i = {};
      v.T = i;
      try {
        var u = n(r, l),
          o = v.S;
        (o !== null && o(i, u), Us(e, t, u));
      } catch (m) {
        Xi(e, t, m);
      } finally {
        (a !== null && i.types !== null && (a.types = i.types), (v.T = a));
      }
    } else
      try {
        ((a = n(r, l)), Us(e, t, a));
      } catch (m) {
        Xi(e, t, m);
      }
  }
  function Us(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? n.then(
          function (l) {
            $s(e, t, l);
          },
          function (l) {
            return Xi(e, t, l);
          },
        )
      : $s(e, t, n);
  }
  function $s(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      Bs(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next),
        n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Fs(e, n))));
  }
  function Xi(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), Bs(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function Bs(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function qs(e, t) {
    return t;
  }
  function Vs(e, t) {
    if (Y) {
      var n = ce.formState;
      if (n !== null) {
        e: {
          var l = U;
          if (Y) {
            if (de) {
              t: {
                for (var r = de, a = dt; r.nodeType !== 8; ) {
                  if (!a) {
                    r = null;
                    break t;
                  }
                  if (((r = pt(r.nextSibling)), r === null)) {
                    r = null;
                    break t;
                  }
                }
                ((a = r.data), (r = a === 'F!' || a === 'F' ? r : null));
              }
              if (r) {
                ((de = pt(r.nextSibling)), (l = r.data === 'F!'));
                break e;
              }
            }
            tn(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = De()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qs,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = sc.bind(null, U, l)),
      (l.dispatch = n),
      (l = Gi(!1)),
      (a = lu.bind(null, U, !1, l.queue)),
      (l = De()),
      (r = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = r),
      (n = $p.bind(null, U, r, a, n)),
      (r.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function Hs(e) {
    var t = ke();
    return Ws(t, ae, e);
  }
  function Ws(e, t, n) {
    if (
      ((t = Ki(e, t, qs)[0]),
      (e = la(Ft)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = Zl(t);
      } catch (i) {
        throw i === sl ? Qr : i;
      }
    else l = t;
    t = ke();
    var r = t.queue,
      a = r.dispatch;
    return (
      n !== t.memoizedState &&
        ((U.flags |= 2048),
        ml(9, { destroy: void 0 }, Bp.bind(null, r, n), null)),
      [l, a, e]
    );
  }
  function Bp(e, t) {
    e.action = t;
  }
  function Qs(e) {
    var t = ke(),
      n = ae;
    if (n !== null) return Ws(t, n, e);
    (ke(), (t = t.memoizedState), (n = ke()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function ml(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = U.updateQueue),
      t === null && ((t = ta()), (U.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function Ks() {
    return ke().memoizedState;
  }
  function ra(e, t, n, l) {
    var r = De();
    ((U.flags |= e),
      (r.memoizedState = ml(
        1 | t,
        { destroy: void 0 },
        n,
        l === void 0 ? null : l,
      )));
  }
  function aa(e, t, n, l) {
    var r = ke();
    l = l === void 0 ? null : l;
    var a = r.memoizedState.inst;
    ae !== null && l !== null && Bi(l, ae.memoizedState.deps)
      ? (r.memoizedState = ml(t, a, n, l))
      : ((U.flags |= e), (r.memoizedState = ml(1 | t, a, n, l)));
  }
  function Ys(e, t) {
    ra(8390656, 8, e, t);
  }
  function Zi(e, t) {
    aa(2048, 8, e, t);
  }
  function qp(e) {
    U.flags |= 4;
    var t = U.updateQueue;
    if (t === null) ((t = ta()), (U.updateQueue = t), (t.events = [e]));
    else {
      var n = t.events;
      n === null ? (t.events = [e]) : n.push(e);
    }
  }
  function Gs(e) {
    var t = ke().memoizedState;
    return (
      qp({ ref: t, nextImpl: e }),
      function () {
        if ((ee & 2) !== 0) throw Error(f(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Xs(e, t) {
    return aa(4, 2, e, t);
  }
  function Zs(e, t) {
    return aa(4, 4, e, t);
  }
  function Js(e, t) {
    if (typeof t == 'function') {
      e = e();
      var n = t(e);
      return function () {
        typeof n == 'function' ? n() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function ec(e, t, n) {
    ((n = n != null ? n.concat([e]) : null), aa(4, 4, Js.bind(null, t, e), n));
  }
  function Ji() {}
  function tc(e, t) {
    var n = ke();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Bi(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function nc(e, t) {
    var n = ke();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Bi(t, l[1])) return l[0];
    if (((l = e()), In)) {
      Gt(!0);
      try {
        e();
      } finally {
        Gt(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function eu(e, t, n) {
    return n === void 0 || ((It & 1073741824) !== 0 && (W & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = lf()), (U.lanes |= e), (fn |= e), n);
  }
  function lc(e, t, n, l) {
    return Je(n, t)
      ? n
      : fl.current !== null
        ? ((e = eu(e, n, l)), Je(e, t) || (xe = !0), e)
        : (It & 42) === 0 || ((It & 1073741824) !== 0 && (W & 261930) === 0)
          ? ((xe = !0), (e.memoizedState = n))
          : ((e = lf()), (U.lanes |= e), (fn |= e), t);
  }
  function rc(e, t, n, l, r) {
    var a = C.p;
    C.p = a !== 0 && 8 > a ? a : 8;
    var i = v.T,
      u = {};
    ((v.T = u), lu(e, !1, t, n));
    try {
      var o = r(),
        m = v.S;
      if (
        (m !== null && m(u, o),
        o !== null && typeof o == 'object' && typeof o.then == 'function')
      ) {
        var y = Ip(o, l);
        Jl(e, t, y, at(e));
      } else Jl(e, t, l, at(e));
    } catch (S) {
      Jl(e, t, { then: function () {}, status: 'rejected', reason: S }, at());
    } finally {
      ((C.p = a),
        i !== null && u.types !== null && (i.types = u.types),
        (v.T = i));
    }
  }
  function Vp() {}
  function tu(e, t, n, l) {
    if (e.tag !== 5) throw Error(f(476));
    var r = ac(e).queue;
    rc(
      e,
      r,
      t,
      M,
      n === null
        ? Vp
        : function () {
            return (ic(e), n(l));
          },
    );
  }
  function ac(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: M,
      baseState: M,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ft,
        lastRenderedState: M,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ft,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function ic(e) {
    var t = ac(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Jl(e, t.next.queue, {}, at()));
  }
  function nu() {
    return Pe(gr);
  }
  function uc() {
    return ke().memoizedState;
  }
  function oc() {
    return ke().memoizedState;
  }
  function Hp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = at();
          e = rn(n);
          var l = an(t, e, n);
          (l !== null && (Ke(l, t, n), Kl(l, t, n)),
            (t = { cache: Li() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Wp(e, t, n) {
    var l = at();
    ((n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      ia(e)
        ? cc(t, n)
        : ((n = ki(e, t, n, l)), n !== null && (Ke(n, e, l), fc(n, t, l))));
  }
  function sc(e, t, n) {
    var l = at();
    Jl(e, t, n, l);
  }
  function Jl(e, t, n, l) {
    var r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (ia(e)) cc(t, r);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = t.lastRenderedReducer), a !== null)
      )
        try {
          var i = t.lastRenderedState,
            u = a(i, n);
          if (((r.hasEagerState = !0), (r.eagerState = u), Je(u, i)))
            return (Ur(e, t, r, 0), ce === null && Fr(), !1);
        } catch {
        } finally {
        }
      if (((n = ki(e, t, r, l)), n !== null))
        return (Ke(n, e, l), fc(n, t, l), !0);
    }
    return !1;
  }
  function lu(e, t, n, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: Ru(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ia(e))
    ) {
      if (t) throw Error(f(479));
    } else ((t = ki(e, n, l, 2)), t !== null && Ke(t, e, 2));
  }
  function ia(e) {
    var t = e.alternate;
    return e === U || (t !== null && t === U);
  }
  function cc(e, t) {
    dl = Jr = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function fc(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), go(e, n));
    }
  }
  var er = {
    readContext: Pe,
    use: na,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useLayoutEffect: he,
    useInsertionEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useSyncExternalStore: he,
    useId: he,
    useHostTransitionStatus: he,
    useFormState: he,
    useActionState: he,
    useOptimistic: he,
    useMemoCache: he,
    useCacheRefresh: he,
  };
  er.useEffectEvent = he;
  var dc = {
      readContext: Pe,
      use: na,
      useCallback: function (e, t) {
        return ((De().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Pe,
      useEffect: Ys,
      useImperativeHandle: function (e, t, n) {
        ((n = n != null ? n.concat([e]) : null),
          ra(4194308, 4, Js.bind(null, t, e), n));
      },
      useLayoutEffect: function (e, t) {
        return ra(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        ra(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = De();
        t = t === void 0 ? null : t;
        var l = e();
        if (In) {
          Gt(!0);
          try {
            e();
          } finally {
            Gt(!1);
          }
        }
        return ((n.memoizedState = [l, t]), l);
      },
      useReducer: function (e, t, n) {
        var l = De();
        if (n !== void 0) {
          var r = n(t);
          if (In) {
            Gt(!0);
            try {
              n(t);
            } finally {
              Gt(!1);
            }
          }
        } else r = t;
        return (
          (l.memoizedState = l.baseState = r),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: r,
          }),
          (l.queue = e),
          (e = e.dispatch = Wp.bind(null, U, e)),
          [l.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = De();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Gi(e);
        var t = e.queue,
          n = sc.bind(null, U, t);
        return ((t.dispatch = n), [e.memoizedState, n]);
      },
      useDebugValue: Ji,
      useDeferredValue: function (e, t) {
        var n = De();
        return eu(n, e, t);
      },
      useTransition: function () {
        var e = Gi(!1);
        return (
          (e = rc.bind(null, U, e.queue, !0, !1)),
          (De().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, n) {
        var l = U,
          r = De();
        if (Y) {
          if (n === void 0) throw Error(f(407));
          n = n();
        } else {
          if (((n = t()), ce === null)) throw Error(f(349));
          (W & 127) !== 0 || Os(l, t, n);
        }
        r.memoizedState = n;
        var a = { value: n, getSnapshot: t };
        return (
          (r.queue = a),
          Ys(Rs.bind(null, l, a, e), [e]),
          (l.flags |= 2048),
          ml(9, { destroy: void 0 }, As.bind(null, l, a, n, t), null),
          n
        );
      },
      useId: function () {
        var e = De(),
          t = ce.identifierPrefix;
        if (Y) {
          var n = Nt,
            l = Ct;
          ((n = (l & ~(1 << (32 - Ze(l) - 1))).toString(32) + n),
            (t = '_' + t + 'R_' + n),
            (n = ea++),
            0 < n && (t += 'H' + n.toString(32)),
            (t += '_'));
        } else ((n = Fp++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: nu,
      useFormState: Vs,
      useActionState: Vs,
      useOptimistic: function (e) {
        var t = De();
        t.memoizedState = t.baseState = e;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = n),
          (t = lu.bind(null, U, !0, n)),
          (n.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Qi,
      useCacheRefresh: function () {
        return (De().memoizedState = Hp.bind(null, U));
      },
      useEffectEvent: function (e) {
        var t = De(),
          n = { impl: e };
        return (
          (t.memoizedState = n),
          function () {
            if ((ee & 2) !== 0) throw Error(f(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ru = {
      readContext: Pe,
      use: na,
      useCallback: tc,
      useContext: Pe,
      useEffect: Zi,
      useImperativeHandle: ec,
      useInsertionEffect: Xs,
      useLayoutEffect: Zs,
      useMemo: nc,
      useReducer: la,
      useRef: Ks,
      useState: function () {
        return la(Ft);
      },
      useDebugValue: Ji,
      useDeferredValue: function (e, t) {
        var n = ke();
        return lc(n, ae.memoizedState, e, t);
      },
      useTransition: function () {
        var e = la(Ft)[0],
          t = ke().memoizedState;
        return [typeof e == 'boolean' ? e : Zl(e), t];
      },
      useSyncExternalStore: js,
      useId: uc,
      useHostTransitionStatus: nu,
      useFormState: Hs,
      useActionState: Hs,
      useOptimistic: function (e, t) {
        var n = ke();
        return Is(n, ae, e, t);
      },
      useMemoCache: Qi,
      useCacheRefresh: oc,
    };
  ru.useEffectEvent = Gs;
  var pc = {
    readContext: Pe,
    use: na,
    useCallback: tc,
    useContext: Pe,
    useEffect: Zi,
    useImperativeHandle: ec,
    useInsertionEffect: Xs,
    useLayoutEffect: Zs,
    useMemo: nc,
    useReducer: Yi,
    useRef: Ks,
    useState: function () {
      return Yi(Ft);
    },
    useDebugValue: Ji,
    useDeferredValue: function (e, t) {
      var n = ke();
      return ae === null ? eu(n, e, t) : lc(n, ae.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Yi(Ft)[0],
        t = ke().memoizedState;
      return [typeof e == 'boolean' ? e : Zl(e), t];
    },
    useSyncExternalStore: js,
    useId: uc,
    useHostTransitionStatus: nu,
    useFormState: Qs,
    useActionState: Qs,
    useOptimistic: function (e, t) {
      var n = ke();
      return ae !== null
        ? Is(n, ae, e, t)
        : ((n.baseState = e), [e, n.queue.dispatch]);
    },
    useMemoCache: Qi,
    useCacheRefresh: oc,
  };
  pc.useEffectEvent = Gs;
  function au(e, t, n, l) {
    ((t = e.memoizedState),
      (n = n(l, t)),
      (n = n == null ? t : A({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var iu = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var l = at(),
        r = rn(l);
      ((r.payload = t),
        n != null && (r.callback = n),
        (t = an(e, r, l)),
        t !== null && (Ke(t, e, l), Kl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var l = at(),
        r = rn(l);
      ((r.tag = 1),
        (r.payload = t),
        n != null && (r.callback = n),
        (t = an(e, r, l)),
        t !== null && (Ke(t, e, l), Kl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = at(),
        l = rn(n);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = an(e, l, n)),
        t !== null && (Ke(t, e, n), Kl(t, e, n)));
    },
  };
  function mc(e, t, n, l, r, a, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(l, a, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Ul(n, l) || !Ul(r, a)
          : !0
    );
  }
  function hc(e, t, n, l) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== e && iu.enqueueReplaceState(t, t.state, null));
  }
  function Fn(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = A({}, n));
      for (var r in e) n[r] === void 0 && (n[r] = e[r]);
    }
    return n;
  }
  function gc(e) {
    Ir(e);
  }
  function yc(e) {
    console.error(e);
  }
  function vc(e) {
    Ir(e);
  }
  function ua(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function bc(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function uu(e, t, n) {
    return (
      (n = rn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        ua(e, t);
      }),
      n
    );
  }
  function kc(e) {
    return ((e = rn(e)), (e.tag = 3), e);
  }
  function Sc(e, t, n, l) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == 'function') {
      var a = l.value;
      ((e.payload = function () {
        return r(a);
      }),
        (e.callback = function () {
          bc(t, n, l);
        }));
    }
    var i = n.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (e.callback = function () {
        (bc(t, n, l),
          typeof r != 'function' &&
            (dn === null ? (dn = new Set([this])) : dn.add(this)));
        var u = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: u !== null ? u : '',
        });
      });
  }
  function Qp(e, t, n, l, r) {
    if (
      ((n.flags |= 32768),
      l !== null && typeof l == 'object' && typeof l.then == 'function')
    ) {
      if (
        ((t = n.alternate),
        t !== null && il(t, n, r, !0),
        (n = tt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              vt === null ? ba() : n.alternate === null && ge === 0 && (ge = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = r),
              l === Kr
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  ju(e, l, r)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Kr
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue),
                      n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  ju(e, l, r)),
              !1
            );
        }
        throw Error(f(435, n.tag));
      }
      return (ju(e, l, r), ba(), !1);
    }
    if (Y)
      return (
        (t = tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = r),
            l !== Ni && ((e = Error(f(422), { cause: l })), ql(st(e, n))))
          : (l !== Ni && ((t = Error(f(423), { cause: l })), ql(st(t, n))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (r &= -r),
            (e.lanes |= r),
            (l = st(l, n)),
            (r = uu(e.stateNode, l, r)),
            Di(e, r),
            ge !== 4 && (ge = 2)),
        !1
      );
    var a = Error(f(520), { cause: l });
    if (
      ((a = st(a, n)),
      or === null ? (or = [a]) : or.push(a),
      ge !== 4 && (ge = 2),
      t === null)
    )
      return !0;
    ((l = st(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = r & -r),
            (n.lanes |= e),
            (e = uu(n.stateNode, l, e)),
            Di(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (a = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (a !== null &&
                  typeof a.componentDidCatch == 'function' &&
                  (dn === null || !dn.has(a)))))
          )
            return (
              (n.flags |= 65536),
              (r &= -r),
              (n.lanes |= r),
              (r = kc(r)),
              Sc(r, e, n, l),
              Di(n, r),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ou = Error(f(461)),
    xe = !1;
  function Le(e, t, n, l) {
    t.child = e === null ? Cs(t, null, n, l) : Dn(t, e.child, n, l);
  }
  function wc(e, t, n, l, r) {
    n = n.render;
    var a = t.ref;
    if ('ref' in l) {
      var i = {};
      for (var u in l) u !== 'ref' && (i[u] = l[u]);
    } else i = l;
    return (
      On(t),
      (l = qi(e, t, n, i, a, r)),
      (u = Vi()),
      e !== null && !xe
        ? (Hi(e, t, r), Ut(e, t, r))
        : (Y && u && Ei(t), (t.flags |= 1), Le(e, t, l, r), t.child)
    );
  }
  function xc(e, t, n, l, r) {
    if (e === null) {
      var a = n.type;
      return typeof a == 'function' &&
        !Si(a) &&
        a.defaultProps === void 0 &&
        n.compare === null
        ? ((t.tag = 15), (t.type = a), Ec(e, t, a, l, r))
        : ((e = Br(n.type, null, l, t, t.mode, r)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((a = e.child), !gu(e, r))) {
      var i = a.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ul), n(i, l) && e.ref === t.ref)
      )
        return Ut(e, t, r);
    }
    return (
      (t.flags |= 1),
      (e = At(a, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Ec(e, t, n, l, r) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Ul(a, l) && e.ref === t.ref)
        if (((xe = !1), (t.pendingProps = l = a), gu(e, r)))
          (e.flags & 131072) !== 0 && (xe = !0);
        else return ((t.lanes = e.lanes), Ut(e, t, r));
    }
    return su(e, t, n, l, r);
  }
  function Cc(e, t, n, l) {
    var r = l.children,
      a = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === 'hidden')
    ) {
      if ((t.flags & 128) !== 0) {
        if (((a = a !== null ? a.baseLanes | n : n), e !== null)) {
          for (l = t.child = e.child, r = 0; l !== null; )
            ((r = r | l.lanes | l.childLanes), (l = l.sibling));
          l = r & ~a;
        } else ((l = 0), (t.child = null));
        return Nc(e, t, a, n, l);
      }
      if ((n & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Wr(t, a !== null ? a.cachePool : null),
          a !== null ? _s(t, a) : Fi(),
          Ts(t));
      else
        return (
          (l = t.lanes = 536870912),
          Nc(e, t, a !== null ? a.baseLanes | n : n, n, l)
        );
    } else
      a !== null
        ? (Wr(t, a.cachePool), _s(t, a), on(), (t.memoizedState = null))
        : (e !== null && Wr(t, null), Fi(), on());
    return (Le(e, t, r, n), t.child);
  }
  function tr(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Nc(e, t, n, l, r) {
    var a = Oi();
    return (
      (a = a === null ? null : { parent: Se._currentValue, pool: a }),
      (t.memoizedState = { baseLanes: n, cachePool: a }),
      e !== null && Wr(t, null),
      Fi(),
      Ts(t),
      e !== null && il(e, t, l, !0),
      (t.childLanes = r),
      null
    );
  }
  function oa(e, t) {
    return (
      (t = ca({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function zc(e, t, n) {
    return (
      Dn(t, e.child, null, n),
      (e = oa(t, t.pendingProps)),
      (e.flags |= 2),
      nt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Kp(e, t, n) {
    var l = t.pendingProps,
      r = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Y) {
        if (l.mode === 'hidden')
          return ((e = oa(t, l)), (t.lanes = 536870912), tr(null, e));
        if (
          ($i(t),
          (e = de)
            ? ((e = Uf(e, dt)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Jt !== null ? { id: Ct, overflow: Nt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = cs(e)),
                (n.return = t),
                (t.child = n),
                (Te = t),
                (de = null)))
            : (e = null),
          e === null)
        )
          throw tn(t);
        return ((t.lanes = 536870912), null);
      }
      return oa(t, l);
    }
    var a = e.memoizedState;
    if (a !== null) {
      var i = a.dehydrated;
      if (($i(t), r))
        if (t.flags & 256) ((t.flags &= -257), (t = zc(e, t, n)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(f(558));
      else if (
        (xe || il(e, t, n, !1), (r = (n & e.childLanes) !== 0), xe || r)
      ) {
        if (
          ((l = ce),
          l !== null && ((i = yo(l, n)), i !== 0 && i !== a.retryLane))
        )
          throw ((a.retryLane = i), Tn(e, i), Ke(l, e, i), ou);
        (ba(), (t = zc(e, t, n)));
      } else
        ((e = a.treeContext),
          (de = pt(i.nextSibling)),
          (Te = t),
          (Y = !0),
          (en = null),
          (dt = !1),
          e !== null && ps(t, e),
          (t = oa(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = At(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function sa(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object') throw Error(f(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function su(e, t, n, l, r) {
    return (
      On(t),
      (n = qi(e, t, n, l, void 0, r)),
      (l = Vi()),
      e !== null && !xe
        ? (Hi(e, t, r), Ut(e, t, r))
        : (Y && l && Ei(t), (t.flags |= 1), Le(e, t, n, r), t.child)
    );
  }
  function _c(e, t, n, l, r, a) {
    return (
      On(t),
      (t.updateQueue = null),
      (n = Ls(t, l, n, r)),
      Ps(e),
      (l = Vi()),
      e !== null && !xe
        ? (Hi(e, t, a), Ut(e, t, a))
        : (Y && l && Ei(t), (t.flags |= 1), Le(e, t, n, a), t.child)
    );
  }
  function Tc(e, t, n, l, r) {
    if ((On(t), t.stateNode === null)) {
      var a = nl,
        i = n.contextType;
      (typeof i == 'object' && i !== null && (a = Pe(i)),
        (a = new n(l, a)),
        (t.memoizedState =
          a.state !== null && a.state !== void 0 ? a.state : null),
        (a.updater = iu),
        (t.stateNode = a),
        (a._reactInternals = t),
        (a = t.stateNode),
        (a.props = l),
        (a.state = t.memoizedState),
        (a.refs = {}),
        Ri(t),
        (i = n.contextType),
        (a.context = typeof i == 'object' && i !== null ? Pe(i) : nl),
        (a.state = t.memoizedState),
        (i = n.getDerivedStateFromProps),
        typeof i == 'function' && (au(t, n, i, l), (a.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof a.getSnapshotBeforeUpdate == 'function' ||
          (typeof a.UNSAFE_componentWillMount != 'function' &&
            typeof a.componentWillMount != 'function') ||
          ((i = a.state),
          typeof a.componentWillMount == 'function' && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == 'function' &&
            a.UNSAFE_componentWillMount(),
          i !== a.state && iu.enqueueReplaceState(a, a.state, null),
          Gl(t, l, a, r),
          Yl(),
          (a.state = t.memoizedState)),
        typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
        (l = !0));
    } else if (e === null) {
      a = t.stateNode;
      var u = t.memoizedProps,
        o = Fn(n, u);
      a.props = o;
      var m = a.context,
        y = n.contextType;
      ((i = nl), typeof y == 'object' && y !== null && (i = Pe(y)));
      var S = n.getDerivedStateFromProps;
      ((y =
        typeof S == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function'),
        (u = t.pendingProps !== u),
        y ||
          (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof a.componentWillReceiveProps != 'function') ||
          ((u || m !== i) && hc(t, a, l, i)),
        (ln = !1));
      var h = t.memoizedState;
      ((a.state = h),
        Gl(t, l, a, r),
        Yl(),
        (m = t.memoizedState),
        u || h !== m || ln
          ? (typeof S == 'function' && (au(t, n, S, l), (m = t.memoizedState)),
            (o = ln || mc(t, n, o, l, h, m, i))
              ? (y ||
                  (typeof a.UNSAFE_componentWillMount != 'function' &&
                    typeof a.componentWillMount != 'function') ||
                  (typeof a.componentWillMount == 'function' &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == 'function' &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == 'function' &&
                  (t.flags |= 4194308))
              : (typeof a.componentDidMount == 'function' &&
                  (t.flags |= 4194308),
                (t.memoizedProps = l),
                (t.memoizedState = m)),
            (a.props = l),
            (a.state = m),
            (a.context = i),
            (l = o))
          : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
            (l = !1)));
    } else {
      ((a = t.stateNode),
        Mi(e, t),
        (i = t.memoizedProps),
        (y = Fn(n, i)),
        (a.props = y),
        (S = t.pendingProps),
        (h = a.context),
        (m = n.contextType),
        (o = nl),
        typeof m == 'object' && m !== null && (o = Pe(m)),
        (u = n.getDerivedStateFromProps),
        (m =
          typeof u == 'function' ||
          typeof a.getSnapshotBeforeUpdate == 'function') ||
          (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof a.componentWillReceiveProps != 'function') ||
          ((i !== S || h !== o) && hc(t, a, l, o)),
        (ln = !1),
        (h = t.memoizedState),
        (a.state = h),
        Gl(t, l, a, r),
        Yl());
      var g = t.memoizedState;
      i !== S ||
      h !== g ||
      ln ||
      (e !== null && e.dependencies !== null && Vr(e.dependencies))
        ? (typeof u == 'function' && (au(t, n, u, l), (g = t.memoizedState)),
          (y =
            ln ||
            mc(t, n, y, l, h, g, o) ||
            (e !== null && e.dependencies !== null && Vr(e.dependencies)))
            ? (m ||
                (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                  typeof a.componentWillUpdate != 'function') ||
                (typeof a.componentWillUpdate == 'function' &&
                  a.componentWillUpdate(l, g, o),
                typeof a.UNSAFE_componentWillUpdate == 'function' &&
                  a.UNSAFE_componentWillUpdate(l, g, o)),
              typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == 'function' &&
                (t.flags |= 1024))
            : (typeof a.componentDidUpdate != 'function' ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != 'function' ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = g)),
          (a.props = l),
          (a.state = g),
          (a.context = o),
          (l = y))
        : (typeof a.componentDidUpdate != 'function' ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != 'function' ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (a = l),
      sa(e, t),
      (l = (t.flags & 128) !== 0),
      a || l
        ? ((a = t.stateNode),
          (n =
            l && typeof n.getDerivedStateFromError != 'function'
              ? null
              : a.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = Dn(t, e.child, null, r)),
              (t.child = Dn(t, null, n, r)))
            : Le(e, t, n, r),
          (t.memoizedState = a.state),
          (e = t.child))
        : (e = Ut(e, t, r)),
      e
    );
  }
  function Pc(e, t, n, l) {
    return (Ln(), (t.flags |= 256), Le(e, t, n, l), t.child);
  }
  var cu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function fu(e) {
    return { baseLanes: e, cachePool: bs() };
  }
  function du(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= rt), e);
  }
  function Lc(e, t, n) {
    var l = t.pendingProps,
      r = !1,
      a = (t.flags & 128) !== 0,
      i;
    if (
      ((i = a) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (be.current & 2) !== 0),
      i && ((r = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Y) {
        if (
          (r ? un(t) : on(),
          (e = de)
            ? ((e = Uf(e, dt)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: Jt !== null ? { id: Ct, overflow: Nt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = cs(e)),
                (n.return = t),
                (t.child = n),
                (Te = t),
                (de = null)))
            : (e = null),
          e === null)
        )
          throw tn(t);
        return (Ku(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var u = l.children;
      return (
        (l = l.fallback),
        r
          ? (on(),
            (r = t.mode),
            (u = ca({ mode: 'hidden', children: u }, r)),
            (l = Pn(l, r, n, null)),
            (u.return = t),
            (l.return = t),
            (u.sibling = l),
            (t.child = u),
            (l = t.child),
            (l.memoizedState = fu(n)),
            (l.childLanes = du(e, i, n)),
            (t.memoizedState = cu),
            tr(null, l))
          : (un(t), pu(t, u))
      );
    }
    var o = e.memoizedState;
    if (o !== null && ((u = o.dehydrated), u !== null)) {
      if (a)
        t.flags & 256
          ? (un(t), (t.flags &= -257), (t = mu(e, t, n)))
          : t.memoizedState !== null
            ? (on(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (on(),
              (u = l.fallback),
              (r = t.mode),
              (l = ca({ mode: 'visible', children: l.children }, r)),
              (u = Pn(u, r, n, null)),
              (u.flags |= 2),
              (l.return = t),
              (u.return = t),
              (l.sibling = u),
              (t.child = l),
              Dn(t, e.child, null, n),
              (l = t.child),
              (l.memoizedState = fu(n)),
              (l.childLanes = du(e, i, n)),
              (t.memoizedState = cu),
              (t = tr(null, l)));
      else if ((un(t), Ku(u))) {
        if (((i = u.nextSibling && u.nextSibling.dataset), i)) var m = i.dgst;
        ((i = m),
          (l = Error(f(419))),
          (l.stack = ''),
          (l.digest = i),
          ql({ value: l, source: null, stack: null }),
          (t = mu(e, t, n)));
      } else if (
        (xe || il(e, t, n, !1), (i = (n & e.childLanes) !== 0), xe || i)
      ) {
        if (
          ((i = ce),
          i !== null && ((l = yo(i, n)), l !== 0 && l !== o.retryLane))
        )
          throw ((o.retryLane = l), Tn(e, l), Ke(i, e, l), ou);
        (Qu(u) || ba(), (t = mu(e, t, n)));
      } else
        Qu(u)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = o.treeContext),
            (de = pt(u.nextSibling)),
            (Te = t),
            (Y = !0),
            (en = null),
            (dt = !1),
            e !== null && ps(t, e),
            (t = pu(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return r
      ? (on(),
        (u = l.fallback),
        (r = t.mode),
        (o = e.child),
        (m = o.sibling),
        (l = At(o, { mode: 'hidden', children: l.children })),
        (l.subtreeFlags = o.subtreeFlags & 65011712),
        m !== null ? (u = At(m, u)) : ((u = Pn(u, r, n, null)), (u.flags |= 2)),
        (u.return = t),
        (l.return = t),
        (l.sibling = u),
        (t.child = l),
        tr(null, l),
        (l = t.child),
        (u = e.child.memoizedState),
        u === null
          ? (u = fu(n))
          : ((r = u.cachePool),
            r !== null
              ? ((o = Se._currentValue),
                (r = r.parent !== o ? { parent: o, pool: o } : r))
              : (r = bs()),
            (u = { baseLanes: u.baseLanes | n, cachePool: r })),
        (l.memoizedState = u),
        (l.childLanes = du(e, i, n)),
        (t.memoizedState = cu),
        tr(e.child, l))
      : (un(t),
        (n = e.child),
        (e = n.sibling),
        (n = At(n, { mode: 'visible', children: l.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [e]), (t.flags |= 16)) : i.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function pu(e, t) {
    return (
      (t = ca({ mode: 'visible', children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function ca(e, t) {
    return ((e = et(22, e, null, t)), (e.lanes = 0), e);
  }
  function mu(e, t, n) {
    return (
      Dn(t, e.child, null, n),
      (e = pu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function jc(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), Ti(e.return, t, n));
  }
  function hu(e, t, n, l, r, a) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: r,
          treeForkCount: a,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = l),
        (i.tail = n),
        (i.tailMode = r),
        (i.treeForkCount = a));
  }
  function Oc(e, t, n) {
    var l = t.pendingProps,
      r = l.revealOrder,
      a = l.tail;
    l = l.children;
    var i = be.current,
      u = (i & 2) !== 0;
    if (
      (u ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      N(be, i),
      Le(e, t, l, n),
      (l = Y ? Bl : 0),
      !u && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jc(e, n, t);
        else if (e.tag === 19) jc(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (r) {
      case 'forwards':
        for (n = t.child, r = null; n !== null; )
          ((e = n.alternate),
            e !== null && Zr(e) === null && (r = n),
            (n = n.sibling));
        ((n = r),
          n === null
            ? ((r = t.child), (t.child = null))
            : ((r = n.sibling), (n.sibling = null)),
          hu(t, !1, r, n, a, l));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, r = t.child, t.child = null; r !== null; ) {
          if (((e = r.alternate), e !== null && Zr(e) === null)) {
            t.child = r;
            break;
          }
          ((e = r.sibling), (r.sibling = n), (n = r), (r = e));
        }
        hu(t, !0, n, null, a, l);
        break;
      case 'together':
        hu(t, !1, null, null, void 0, l);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ut(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (fn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((il(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        e = t.child, n = At(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = At(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function gu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Vr(e)));
  }
  function Yp(e, t, n) {
    switch (t.tag) {
      case 3:
        (Me(t, t.stateNode.containerInfo),
          nn(t, Se, e.memoizedState.cache),
          Ln());
        break;
      case 27:
      case 5:
        zl(t);
        break;
      case 4:
        Me(t, t.stateNode.containerInfo);
        break;
      case 10:
        nn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), $i(t), null);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (un(t), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? Lc(e, t, n)
              : (un(t), (e = Ut(e, t, n)), e !== null ? e.sibling : null);
        un(t);
        break;
      case 19:
        var r = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (il(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          r)
        ) {
          if (l) return Oc(e, t, n);
          t.flags |= 128;
        }
        if (
          ((r = t.memoizedState),
          r !== null &&
            ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
          N(be, be.current),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Cc(e, t, n, t.pendingProps));
      case 24:
        nn(t, Se, e.memoizedState.cache);
    }
    return Ut(e, t, n);
  }
  function Ac(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) xe = !0;
      else {
        if (!gu(e, n) && (t.flags & 128) === 0) return ((xe = !1), Yp(e, t, n));
        xe = (e.flags & 131072) !== 0;
      }
    else ((xe = !1), Y && (t.flags & 1048576) !== 0 && ds(t, Bl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (((e = Rn(t.elementType)), (t.type = e), typeof e == 'function'))
            Si(e)
              ? ((l = Fn(e, l)), (t.tag = 1), (t = Tc(null, t, e, l, n)))
              : ((t.tag = 0), (t = su(null, t, e, l, n)));
          else {
            if (e != null) {
              var r = e.$$typeof;
              if (r === it) {
                ((t.tag = 11), (t = wc(null, t, e, l, n)));
                break e;
              } else if (r === K) {
                ((t.tag = 14), (t = xc(null, t, e, l, n)));
                break e;
              }
            }
            throw ((t = Pt(e) || e), Error(f(306, t, '')));
          }
        }
        return t;
      case 0:
        return su(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (r = Fn(l, t.pendingProps)), Tc(e, t, l, r, n));
      case 3:
        e: {
          if ((Me(t, t.stateNode.containerInfo), e === null))
            throw Error(f(387));
          l = t.pendingProps;
          var a = t.memoizedState;
          ((r = a.element), Mi(e, t), Gl(t, l, null, n));
          var i = t.memoizedState;
          if (
            ((l = i.cache),
            nn(t, Se, l),
            l !== a.cache && Pi(t, [Se], n, !0),
            Yl(),
            (l = i.element),
            a.isDehydrated)
          )
            if (
              ((a = { element: l, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = a),
              (t.memoizedState = a),
              t.flags & 256)
            ) {
              t = Pc(e, t, l, n);
              break e;
            } else if (l !== r) {
              ((r = st(Error(f(424)), t)), ql(r), (t = Pc(e, t, l, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                de = pt(e.firstChild),
                  Te = t,
                  Y = !0,
                  en = null,
                  dt = !0,
                  n = Cs(t, null, l, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((Ln(), l === r)) {
              t = Ut(e, t, n);
              break e;
            }
            Le(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          sa(e, t),
          e === null
            ? (n = Wf(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : Y ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Na(q.current).createElement(n)),
                (l[_e] = t),
                (l[Be] = e),
                je(l, n, e),
                Ne(l),
                (t.stateNode = l))
            : (t.memoizedState = Wf(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          zl(t),
          e === null &&
            Y &&
            ((l = t.stateNode = qf(t.type, t.pendingProps, q.current)),
            (Te = t),
            (dt = !0),
            (r = de),
            gn(t.type) ? ((Yu = r), (de = pt(l.firstChild))) : (de = r)),
          Le(e, t, t.pendingProps.children, n),
          sa(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Y &&
            ((r = l = de) &&
              ((l = Cm(l, t.type, t.pendingProps, dt)),
              l !== null
                ? ((t.stateNode = l),
                  (Te = t),
                  (de = pt(l.firstChild)),
                  (dt = !1),
                  (r = !0))
                : (r = !1)),
            r || tn(t)),
          zl(t),
          (r = t.type),
          (a = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (l = a.children),
          Vu(r, a) ? (l = null) : i !== null && Vu(r, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((r = qi(e, t, Up, null, null, n)), (gr._currentValue = r)),
          sa(e, t),
          Le(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            Y &&
            ((e = n = de) &&
              ((n = Nm(n, t.pendingProps, dt)),
              n !== null
                ? ((t.stateNode = n), (Te = t), (de = null), (e = !0))
                : (e = !1)),
            e || tn(t)),
          null
        );
      case 13:
        return Lc(e, t, n);
      case 4:
        return (
          Me(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Dn(t, null, l, n)) : Le(e, t, l, n),
          t.child
        );
      case 11:
        return wc(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Le(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Le(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (Le(e, t, t.pendingProps.children, n), t.child);
      case 10:
        return (
          (l = t.pendingProps),
          nn(t, t.type, l.value),
          Le(e, t, l.children, n),
          t.child
        );
      case 9:
        return (
          (r = t.type._context),
          (l = t.pendingProps.children),
          On(t),
          (r = Pe(r)),
          (l = l(r)),
          (t.flags |= 1),
          Le(e, t, l, n),
          t.child
        );
      case 14:
        return xc(e, t, t.type, t.pendingProps, n);
      case 15:
        return Ec(e, t, t.type, t.pendingProps, n);
      case 19:
        return Oc(e, t, n);
      case 31:
        return Kp(e, t, n);
      case 22:
        return Cc(e, t, n, t.pendingProps);
      case 24:
        return (
          On(t),
          (l = Pe(Se)),
          e === null
            ? ((r = Oi()),
              r === null &&
                ((r = ce),
                (a = Li()),
                (r.pooledCache = a),
                a.refCount++,
                a !== null && (r.pooledCacheLanes |= n),
                (r = a)),
              (t.memoizedState = { parent: l, cache: r }),
              Ri(t),
              nn(t, Se, r))
            : ((e.lanes & n) !== 0 && (Mi(e, t), Gl(t, null, null, n), Yl()),
              (r = e.memoizedState),
              (a = t.memoizedState),
              r.parent !== l
                ? ((r = { parent: l, cache: l }),
                  (t.memoizedState = r),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = r),
                  nn(t, Se, l))
                : ((l = a.cache),
                  nn(t, Se, l),
                  l !== r.cache && Pi(t, [Se], n, !0))),
          Le(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  function $t(e) {
    e.flags |= 4;
  }
  function yu(e, t, n, l, r) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (r & 335544128) === r))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (of()) e.flags |= 8192;
        else throw ((Mn = Kr), Ai);
    } else e.flags &= -16777217;
  }
  function Rc(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Xf(t)))
      if (of()) e.flags |= 8192;
      else throw ((Mn = Kr), Ai);
  }
  function fa(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? mo() : 536870912), (e.lanes |= t), (vl |= t)));
  }
  function nr(e, t) {
    if (!Y)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      for (var r = e.child; r !== null; )
        ((n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags & 65011712),
          (l |= r.flags & 65011712),
          (r.return = e),
          (r = r.sibling));
    else
      for (r = e.child; r !== null; )
        ((n |= r.lanes | r.childLanes),
          (l |= r.subtreeFlags),
          (l |= r.flags),
          (r.return = e),
          (r = r.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function Gp(e, t, n) {
    var l = t.pendingProps;
    switch ((Ci(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (pe(t), null);
      case 1:
        return (pe(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          Dt(Se),
          ve(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (al(t)
              ? $t(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), zi())),
          pe(t),
          null
        );
      case 26:
        var r = t.type,
          a = t.memoizedState;
        return (
          e === null
            ? ($t(t),
              a !== null ? (pe(t), Rc(t, a)) : (pe(t), yu(t, r, null, l, n)))
            : a
              ? a !== e.memoizedState
                ? ($t(t), pe(t), Rc(t, a))
                : (pe(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== l && $t(t),
                pe(t),
                yu(t, r, e, l, n)),
          null
        );
      case 27:
        if (
          (wr(t),
          (n = q.current),
          (r = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== l && $t(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(f(166));
            return (pe(t), null);
          }
          ((e = T.current),
            al(t) ? ms(t) : ((e = qf(r, l, n)), (t.stateNode = e), $t(t)));
        }
        return (pe(t), null);
      case 5:
        if ((wr(t), (r = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && $t(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(f(166));
            return (pe(t), null);
          }
          if (((a = T.current), al(t))) ms(t);
          else {
            var i = Na(q.current);
            switch (a) {
              case 1:
                a = i.createElementNS('http://www.w3.org/2000/svg', r);
                break;
              case 2:
                a = i.createElementNS('http://www.w3.org/1998/Math/MathML', r);
                break;
              default:
                switch (r) {
                  case 'svg':
                    a = i.createElementNS('http://www.w3.org/2000/svg', r);
                    break;
                  case 'math':
                    a = i.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      r,
                    );
                    break;
                  case 'script':
                    ((a = i.createElement('div')),
                      (a.innerHTML = '<script><\/script>'),
                      (a = a.removeChild(a.firstChild)));
                    break;
                  case 'select':
                    ((a =
                      typeof l.is == 'string'
                        ? i.createElement('select', { is: l.is })
                        : i.createElement('select')),
                      l.multiple
                        ? (a.multiple = !0)
                        : l.size && (a.size = l.size));
                    break;
                  default:
                    a =
                      typeof l.is == 'string'
                        ? i.createElement(r, { is: l.is })
                        : i.createElement(r);
                }
            }
            ((a[_e] = t), (a[Be] = l));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) a.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = a;
            e: switch ((je(a, r, l), r)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                l = !!l.autoFocus;
                break e;
              case 'img':
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && $t(t);
          }
        }
        return (
          pe(t),
          yu(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && $t(t);
        else {
          if (typeof l != 'string' && t.stateNode === null) throw Error(f(166));
          if (((e = q.current), al(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (l = null),
              (r = Te),
              r !== null)
            )
              switch (r.tag) {
                case 27:
                case 5:
                  l = r.memoizedProps;
              }
            ((e[_e] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                jf(e.nodeValue, n)
              )),
              e || tn(t, !0));
          } else
            ((e = Na(e).createTextNode(l)), (e[_e] = t), (t.stateNode = e));
        }
        return (pe(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = al(t)), n !== null)) {
            if (e === null) {
              if (!l) throw Error(f(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(f(557));
              e[_e] = t;
            } else
              (Ln(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (pe(t), (e = !1));
          } else
            ((n = zi()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (nt(t), t) : (nt(t), null);
          if ((t.flags & 128) !== 0) throw Error(f(558));
        }
        return (pe(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((r = al(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!r) throw Error(f(318));
              if (
                ((r = t.memoizedState),
                (r = r !== null ? r.dehydrated : null),
                !r)
              )
                throw Error(f(317));
              r[_e] = t;
            } else
              (Ln(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (pe(t), (r = !1));
          } else
            ((r = zi()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = r),
              (r = !0));
          if (!r) return t.flags & 256 ? (nt(t), t) : (nt(t), null);
        }
        return (
          nt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = n), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (r = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (r = l.alternate.memoizedState.cachePool.pool),
                (a = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (a = l.memoizedState.cachePool.pool),
                a !== r && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              fa(t, t.updateQueue),
              pe(t),
              null)
        );
      case 4:
        return (ve(), e === null && Fu(t.stateNode.containerInfo), pe(t), null);
      case 10:
        return (Dt(t.type), pe(t), null);
      case 19:
        if ((w(be), (l = t.memoizedState), l === null)) return (pe(t), null);
        if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
          if (r) nr(l, !1);
          else {
            if (ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((a = Zr(e)), a !== null)) {
                  for (
                    t.flags |= 128,
                      nr(l, !1),
                      e = a.updateQueue,
                      t.updateQueue = e,
                      fa(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;

                  )
                    (ss(n, e), (n = n.sibling));
                  return (
                    N(be, (be.current & 1) | 2),
                    Y && Rt(t, l.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            l.tail !== null &&
              Ge() > ga &&
              ((t.flags |= 128), (r = !0), nr(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = Zr(a)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                fa(t, e),
                nr(l, !0),
                l.tail === null &&
                  l.tailMode === 'hidden' &&
                  !a.alternate &&
                  !Y)
              )
                return (pe(t), null);
            } else
              2 * Ge() - l.renderingStartTime > ga &&
                n !== 536870912 &&
                ((t.flags |= 128), (r = !0), nr(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((a.sibling = t.child), (t.child = a))
            : ((e = l.last),
              e !== null ? (e.sibling = a) : (t.child = a),
              (l.last = a));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = Ge()),
            (e.sibling = null),
            (n = be.current),
            N(be, r ? (n & 1) | 2 : n & 1),
            Y && Rt(t, l.treeForkCount),
            e)
          : (pe(t), null);
      case 22:
      case 23:
        return (
          nt(t),
          Ui(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? (n & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : pe(t),
          (n = t.updateQueue),
          n !== null && fa(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && w(An),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          Dt(Se),
          pe(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Xp(e, t) {
    switch ((Ci(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Dt(Se),
          ve(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (wr(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((nt(t), t.alternate === null)) throw Error(f(340));
          Ln();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (nt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          Ln();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (w(be), null);
      case 4:
        return (ve(), null);
      case 10:
        return (Dt(t.type), null);
      case 22:
      case 23:
        return (
          nt(t),
          Ui(),
          e !== null && w(An),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (Dt(Se), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Mc(e, t) {
    switch ((Ci(t), t.tag)) {
      case 3:
        (Dt(Se), ve());
        break;
      case 26:
      case 27:
      case 5:
        wr(t);
        break;
      case 4:
        ve();
        break;
      case 31:
        t.memoizedState !== null && nt(t);
        break;
      case 13:
        nt(t);
        break;
      case 19:
        w(be);
        break;
      case 10:
        Dt(t.type);
        break;
      case 22:
      case 23:
        (nt(t), Ui(), e !== null && w(An));
        break;
      case 24:
        Dt(Se);
    }
  }
  function lr(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        n = r;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var a = n.create,
              i = n.inst;
            ((l = a()), (i.destroy = l));
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (u) {
      le(t, t.return, u);
    }
  }
  function sn(e, t, n) {
    try {
      var l = t.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var a = r.next;
        l = a;
        do {
          if ((l.tag & e) === e) {
            var i = l.inst,
              u = i.destroy;
            if (u !== void 0) {
              ((i.destroy = void 0), (r = t));
              var o = n,
                m = u;
              try {
                m();
              } catch (y) {
                le(r, o, y);
              }
            }
          }
          l = l.next;
        } while (l !== a);
      }
    } catch (y) {
      le(t, t.return, y);
    }
  }
  function Dc(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        zs(t, n);
      } catch (l) {
        le(e, e.return, l);
      }
    }
  }
  function Ic(e, t, n) {
    ((n.props = Fn(e.type, e.memoizedProps)), (n.state = e.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (l) {
      le(e, t, l);
    }
  }
  function rr(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == 'function' ? (e.refCleanup = n(l)) : (n.current = l);
      }
    } catch (r) {
      le(e, t, r);
    }
  }
  function zt(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          l();
        } catch (r) {
          le(e, t, r);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          n(null);
        } catch (r) {
          le(e, t, r);
        }
      else n.current = null;
  }
  function Fc(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          n.autoFocus && l.focus();
          break e;
        case 'img':
          n.src ? (l.src = n.src) : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (r) {
      le(e, e.return, r);
    }
  }
  function vu(e, t, n) {
    try {
      var l = e.stateNode;
      (bm(l, e.type, n, t), (l[Be] = t));
    } catch (r) {
      le(e, e.return, r);
    }
  }
  function Uc(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && gn(e.type)) ||
      e.tag === 4
    );
  }
  function bu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Uc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && gn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ku(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === 'HTML'
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t)
          : ((t =
              n.nodeType === 9
                ? n.body
                : n.nodeName === 'HTML'
                  ? n.ownerDocument.body
                  : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = jt)));
    else if (
      l !== 4 &&
      (l === 27 && gn(e.type) && ((n = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (ku(e, t, n), e = e.sibling; e !== null; )
        (ku(e, t, n), (e = e.sibling));
  }
  function da(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (
      l !== 4 &&
      (l === 27 && gn(e.type) && (n = e.stateNode), (e = e.child), e !== null)
    )
      for (da(e, t, n), e = e.sibling; e !== null; )
        (da(e, t, n), (e = e.sibling));
  }
  function $c(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      for (var l = e.type, r = t.attributes; r.length; )
        t.removeAttributeNode(r[0]);
      (je(t, l, n), (t[_e] = e), (t[Be] = n));
    } catch (a) {
      le(e, e.return, a);
    }
  }
  var Bt = !1,
    Ee = !1,
    Su = !1,
    Bc = typeof WeakSet == 'function' ? WeakSet : Set,
    ze = null;
  function Zp(e, t) {
    if (((e = e.containerInfo), (Bu = Oa), (e = es(e)), mi(e))) {
      if ('selectionStart' in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var r = l.anchorOffset,
              a = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, a.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              u = -1,
              o = -1,
              m = 0,
              y = 0,
              S = e,
              h = null;
            t: for (;;) {
              for (
                var g;
                S !== n || (r !== 0 && S.nodeType !== 3) || (u = i + r),
                  S !== a || (l !== 0 && S.nodeType !== 3) || (o = i + l),
                  S.nodeType === 3 && (i += S.nodeValue.length),
                  (g = S.firstChild) !== null;

              )
                ((h = S), (S = g));
              for (;;) {
                if (S === e) break t;
                if (
                  (h === n && ++m === r && (u = i),
                  h === a && ++y === l && (o = i),
                  (g = S.nextSibling) !== null)
                )
                  break;
                ((S = h), (h = S.parentNode));
              }
              S = g;
            }
            n = u === -1 || o === -1 ? null : { start: u, end: o };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      qu = { focusedElem: e, selectionRange: n }, Oa = !1, ze = t;
      ze !== null;

    )
      if (
        ((t = ze), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (ze = e));
      else
        for (; ze !== null; ) {
          switch (((t = ze), (a = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (n = 0; n < e.length; n++)
                  ((r = e[n]), (r.ref.impl = r.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && a !== null) {
                ((e = void 0),
                  (n = t),
                  (r = a.memoizedProps),
                  (a = a.memoizedState),
                  (l = n.stateNode));
                try {
                  var _ = Fn(n.type, r);
                  ((e = l.getSnapshotBeforeUpdate(_, a)),
                    (l.__reactInternalSnapshotBeforeUpdate = e));
                } catch (R) {
                  le(n, n.return, R);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
                )
                  Wu(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Wu(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(f(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (ze = e));
            break;
          }
          ze = t.return;
        }
  }
  function qc(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (Vt(e, n), l & 4 && lr(5, n));
        break;
      case 1:
        if ((Vt(e, n), l & 4))
          if (((e = n.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (i) {
              le(n, n.return, i);
            }
          else {
            var r = Fn(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(r, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              le(n, n.return, i);
            }
          }
        (l & 64 && Dc(n), l & 512 && rr(n, n.return));
        break;
      case 3:
        if ((Vt(e, n), l & 64 && ((e = n.updateQueue), e !== null))) {
          if (((t = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            zs(e, t);
          } catch (i) {
            le(n, n.return, i);
          }
        }
        break;
      case 27:
        t === null && l & 4 && $c(n);
      case 26:
      case 5:
        (Vt(e, n), t === null && l & 4 && Fc(n), l & 512 && rr(n, n.return));
        break;
      case 12:
        Vt(e, n);
        break;
      case 31:
        (Vt(e, n), l & 4 && Wc(e, n));
        break;
      case 13:
        (Vt(e, n),
          l & 4 && Qc(e, n),
          l & 64 &&
            ((e = n.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((n = um.bind(null, n)), zm(e, n)))));
        break;
      case 22:
        if (((l = n.memoizedState !== null || Bt), !l)) {
          ((t = (t !== null && t.memoizedState !== null) || Ee), (r = Bt));
          var a = Ee;
          ((Bt = l),
            (Ee = t) && !a ? Ht(e, n, (n.subtreeFlags & 8772) !== 0) : Vt(e, n),
            (Bt = r),
            (Ee = a));
        }
        break;
      case 30:
        break;
      default:
        Vt(e, n);
    }
  }
  function Vc(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Vc(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Xa(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var me = null,
    Ve = !1;
  function qt(e, t, n) {
    for (n = n.child; n !== null; ) (Hc(e, t, n), (n = n.sibling));
  }
  function Hc(e, t, n) {
    if (Xe && typeof Xe.onCommitFiberUnmount == 'function')
      try {
        Xe.onCommitFiberUnmount(_l, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ee || zt(n, t),
          qt(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ee || zt(n, t);
        var l = me,
          r = Ve;
        (gn(n.type) && ((me = n.stateNode), (Ve = !1)),
          qt(e, t, n),
          pr(n.stateNode),
          (me = l),
          (Ve = r));
        break;
      case 5:
        Ee || zt(n, t);
      case 6:
        if (
          ((l = me),
          (r = Ve),
          (me = null),
          qt(e, t, n),
          (me = l),
          (Ve = r),
          me !== null)
        )
          if (Ve)
            try {
              (me.nodeType === 9
                ? me.body
                : me.nodeName === 'HTML'
                  ? me.ownerDocument.body
                  : me
              ).removeChild(n.stateNode);
            } catch (a) {
              le(n, t, a);
            }
          else
            try {
              me.removeChild(n.stateNode);
            } catch (a) {
              le(n, t, a);
            }
        break;
      case 18:
        me !== null &&
          (Ve
            ? ((e = me),
              If(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                n.stateNode,
              ),
              Nl(e))
            : If(me, n.stateNode));
        break;
      case 4:
        ((l = me),
          (r = Ve),
          (me = n.stateNode.containerInfo),
          (Ve = !0),
          qt(e, t, n),
          (me = l),
          (Ve = r));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (sn(2, n, t), Ee || sn(4, n, t), qt(e, t, n));
        break;
      case 1:
        (Ee ||
          (zt(n, t),
          (l = n.stateNode),
          typeof l.componentWillUnmount == 'function' && Ic(n, t, l)),
          qt(e, t, n));
        break;
      case 21:
        qt(e, t, n);
        break;
      case 22:
        ((Ee = (l = Ee) || n.memoizedState !== null), qt(e, t, n), (Ee = l));
        break;
      default:
        qt(e, t, n);
    }
  }
  function Wc(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Nl(e);
      } catch (n) {
        le(t, t.return, n);
      }
    }
  }
  function Qc(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Nl(e);
      } catch (n) {
        le(t, t.return, n);
      }
  }
  function Jp(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Bc()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Bc()),
          t
        );
      default:
        throw Error(f(435, e.tag));
    }
  }
  function pa(e, t) {
    var n = Jp(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        n.add(l);
        var r = om.bind(null, e, l);
        l.then(r, r);
      }
    });
  }
  function He(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var r = n[l],
          a = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 27:
              if (gn(u.type)) {
                ((me = u.stateNode), (Ve = !1));
                break e;
              }
              break;
            case 5:
              ((me = u.stateNode), (Ve = !1));
              break e;
            case 3:
            case 4:
              ((me = u.stateNode.containerInfo), (Ve = !0));
              break e;
          }
          u = u.return;
        }
        if (me === null) throw Error(f(160));
        (Hc(a, i, r),
          (me = null),
          (Ve = !1),
          (a = r.alternate),
          a !== null && (a.return = null),
          (r.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Kc(t, e), (t = t.sibling));
  }
  var bt = null;
  function Kc(e, t) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (He(t, e),
          We(e),
          l & 4 && (sn(3, e, e.return), lr(3, e), sn(5, e, e.return)));
        break;
      case 1:
        (He(t, e),
          We(e),
          l & 512 && (Ee || n === null || zt(n, n.return)),
          l & 64 &&
            Bt &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((n = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = n === null ? l : n.concat(l))))));
        break;
      case 26:
        var r = bt;
        if (
          (He(t, e),
          We(e),
          l & 512 && (Ee || n === null || zt(n, n.return)),
          l & 4)
        ) {
          var a = n !== null ? n.memoizedState : null;
          if (((l = e.memoizedState), n === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  ((l = e.type),
                    (n = e.memoizedProps),
                    (r = r.ownerDocument || r));
                  t: switch (l) {
                    case 'title':
                      ((a = r.getElementsByTagName('title')[0]),
                        (!a ||
                          a[Ll] ||
                          a[_e] ||
                          a.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          a.hasAttribute('itemprop')) &&
                          ((a = r.createElement(l)),
                          r.head.insertBefore(
                            a,
                            r.querySelector('head > title'),
                          )),
                        je(a, l, n),
                        (a[_e] = e),
                        Ne(a),
                        (l = a));
                      break e;
                    case 'link':
                      var i = Yf('link', 'href', r).get(l + (n.href || ''));
                      if (i) {
                        for (var u = 0; u < i.length; u++)
                          if (
                            ((a = i[u]),
                            a.getAttribute('href') ===
                              (n.href == null || n.href === ''
                                ? null
                                : n.href) &&
                              a.getAttribute('rel') ===
                                (n.rel == null ? null : n.rel) &&
                              a.getAttribute('title') ===
                                (n.title == null ? null : n.title) &&
                              a.getAttribute('crossorigin') ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            i.splice(u, 1);
                            break t;
                          }
                      }
                      ((a = r.createElement(l)),
                        je(a, l, n),
                        r.head.appendChild(a));
                      break;
                    case 'meta':
                      if (
                        (i = Yf('meta', 'content', r).get(
                          l + (n.content || ''),
                        ))
                      ) {
                        for (u = 0; u < i.length; u++)
                          if (
                            ((a = i[u]),
                            a.getAttribute('content') ===
                              (n.content == null ? null : '' + n.content) &&
                              a.getAttribute('name') ===
                                (n.name == null ? null : n.name) &&
                              a.getAttribute('property') ===
                                (n.property == null ? null : n.property) &&
                              a.getAttribute('http-equiv') ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              a.getAttribute('charset') ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            i.splice(u, 1);
                            break t;
                          }
                      }
                      ((a = r.createElement(l)),
                        je(a, l, n),
                        r.head.appendChild(a));
                      break;
                    default:
                      throw Error(f(468, l));
                  }
                  ((a[_e] = e), Ne(a), (l = a));
                }
                e.stateNode = l;
              } else Gf(r, e.type, e.stateNode);
            else e.stateNode = Kf(r, l, e.memoizedProps);
          else
            a !== l
              ? (a === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : a.count--,
                l === null
                  ? Gf(r, e.type, e.stateNode)
                  : Kf(r, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                vu(e, e.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (He(t, e),
          We(e),
          l & 512 && (Ee || n === null || zt(n, n.return)),
          n !== null && l & 4 && vu(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (He(t, e),
          We(e),
          l & 512 && (Ee || n === null || zt(n, n.return)),
          e.flags & 32)
        ) {
          r = e.stateNode;
          try {
            Yn(r, '');
          } catch (_) {
            le(e, e.return, _);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((r = e.memoizedProps), vu(e, r, n !== null ? n.memoizedProps : r)),
          l & 1024 && (Su = !0));
        break;
      case 6:
        if ((He(t, e), We(e), l & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          ((l = e.memoizedProps), (n = e.stateNode));
          try {
            n.nodeValue = l;
          } catch (_) {
            le(e, e.return, _);
          }
        }
        break;
      case 3:
        if (
          ((Ta = null),
          (r = bt),
          (bt = za(t.containerInfo)),
          He(t, e),
          (bt = r),
          We(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Nl(t.containerInfo);
          } catch (_) {
            le(e, e.return, _);
          }
        Su && ((Su = !1), Yc(e));
        break;
      case 4:
        ((l = bt),
          (bt = za(e.stateNode.containerInfo)),
          He(t, e),
          We(e),
          (bt = l));
        break;
      case 12:
        (He(t, e), We(e));
        break;
      case 31:
        (He(t, e),
          We(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), pa(e, l))));
        break;
      case 13:
        (He(t, e),
          We(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (ha = Ge()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), pa(e, l))));
        break;
      case 22:
        r = e.memoizedState !== null;
        var o = n !== null && n.memoizedState !== null,
          m = Bt,
          y = Ee;
        if (
          ((Bt = m || r),
          (Ee = y || o),
          He(t, e),
          (Ee = y),
          (Bt = m),
          We(e),
          l & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = r ? t._visibility & -2 : t._visibility | 1,
              r && (n === null || o || Bt || Ee || Un(e)),
              n = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                o = n = t;
                try {
                  if (((a = o.stateNode), r))
                    ((i = a.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'));
                  else {
                    u = o.stateNode;
                    var S = o.memoizedProps.style,
                      h =
                        S != null && S.hasOwnProperty('display')
                          ? S.display
                          : null;
                    u.style.display =
                      h == null || typeof h == 'boolean' ? '' : ('' + h).trim();
                  }
                } catch (_) {
                  le(o, o.return, _);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                o = t;
                try {
                  o.stateNode.nodeValue = r ? '' : o.memoizedProps;
                } catch (_) {
                  le(o, o.return, _);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                o = t;
                try {
                  var g = o.stateNode;
                  r ? Ff(g, !0) : Ff(o.stateNode, !1);
                } catch (_) {
                  le(o, o.return, _);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (n === t && (n = null), (t = t.return));
            }
            (n === t && (n = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((n = l.retryQueue),
            n !== null && ((l.retryQueue = null), pa(e, n))));
        break;
      case 19:
        (He(t, e),
          We(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), pa(e, l))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (He(t, e), We(e));
    }
  }
  function We(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Uc(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(f(160));
        switch (n.tag) {
          case 27:
            var r = n.stateNode,
              a = bu(e);
            da(e, a, r);
            break;
          case 5:
            var i = n.stateNode;
            n.flags & 32 && (Yn(i, ''), (n.flags &= -33));
            var u = bu(e);
            da(e, u, i);
            break;
          case 3:
          case 4:
            var o = n.stateNode.containerInfo,
              m = bu(e);
            ku(e, m, o);
            break;
          default:
            throw Error(f(161));
        }
      } catch (y) {
        le(e, e.return, y);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yc(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (Yc(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Vt(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (qc(e, t.alternate, t), (t = t.sibling));
  }
  function Un(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (sn(4, t, t.return), Un(t));
          break;
        case 1:
          zt(t, t.return);
          var n = t.stateNode;
          (typeof n.componentWillUnmount == 'function' && Ic(t, t.return, n),
            Un(t));
          break;
        case 27:
          pr(t.stateNode);
        case 26:
        case 5:
          (zt(t, t.return), Un(t));
          break;
        case 22:
          t.memoizedState === null && Un(t);
          break;
        case 30:
          Un(t);
          break;
        default:
          Un(t);
      }
      e = e.sibling;
    }
  }
  function Ht(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        r = e,
        a = t,
        i = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          (Ht(r, a, n), lr(4, a));
          break;
        case 1:
          if (
            (Ht(r, a, n),
            (l = a),
            (r = l.stateNode),
            typeof r.componentDidMount == 'function')
          )
            try {
              r.componentDidMount();
            } catch (m) {
              le(l, l.return, m);
            }
          if (((l = a), (r = l.updateQueue), r !== null)) {
            var u = l.stateNode;
            try {
              var o = r.shared.hiddenCallbacks;
              if (o !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < o.length; r++)
                  Ns(o[r], u);
            } catch (m) {
              le(l, l.return, m);
            }
          }
          (n && i & 64 && Dc(a), rr(a, a.return));
          break;
        case 27:
          $c(a);
        case 26:
        case 5:
          (Ht(r, a, n), n && l === null && i & 4 && Fc(a), rr(a, a.return));
          break;
        case 12:
          Ht(r, a, n);
          break;
        case 31:
          (Ht(r, a, n), n && i & 4 && Wc(r, a));
          break;
        case 13:
          (Ht(r, a, n), n && i & 4 && Qc(r, a));
          break;
        case 22:
          (a.memoizedState === null && Ht(r, a, n), rr(a, a.return));
          break;
        case 30:
          break;
        default:
          Ht(r, a, n);
      }
      t = t.sibling;
    }
  }
  function wu(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && e.refCount++, n != null && Vl(n)));
  }
  function xu(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Vl(e)));
  }
  function kt(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Gc(e, t, n, l), (t = t.sibling));
  }
  function Gc(e, t, n, l) {
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (kt(e, t, n, l), r & 2048 && lr(9, t));
        break;
      case 1:
        kt(e, t, n, l);
        break;
      case 3:
        (kt(e, t, n, l),
          r & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Vl(e))));
        break;
      case 12:
        if (r & 2048) {
          (kt(e, t, n, l), (e = t.stateNode));
          try {
            var a = t.memoizedProps,
              i = a.id,
              u = a.onPostCommit;
            typeof u == 'function' &&
              u(
                i,
                t.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (o) {
            le(t, t.return, o);
          }
        } else kt(e, t, n, l);
        break;
      case 31:
        kt(e, t, n, l);
        break;
      case 13:
        kt(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        ((a = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? a._visibility & 2
              ? kt(e, t, n, l)
              : ar(e, t)
            : a._visibility & 2
              ? kt(e, t, n, l)
              : ((a._visibility |= 2),
                hl(e, t, n, l, (t.subtreeFlags & 10256) !== 0 || !1)),
          r & 2048 && wu(i, t));
        break;
      case 24:
        (kt(e, t, n, l), r & 2048 && xu(t.alternate, t));
        break;
      default:
        kt(e, t, n, l);
    }
  }
  function hl(e, t, n, l, r) {
    for (
      r = r && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;

    ) {
      var a = e,
        i = t,
        u = n,
        o = l,
        m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (hl(a, i, u, o, r), lr(8, i));
          break;
        case 23:
          break;
        case 22:
          var y = i.stateNode;
          (i.memoizedState !== null
            ? y._visibility & 2
              ? hl(a, i, u, o, r)
              : ar(a, i)
            : ((y._visibility |= 2), hl(a, i, u, o, r)),
            r && m & 2048 && wu(i.alternate, i));
          break;
        case 24:
          (hl(a, i, u, o, r), r && m & 2048 && xu(i.alternate, i));
          break;
        default:
          hl(a, i, u, o, r);
      }
      t = t.sibling;
    }
  }
  function ar(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          r = l.flags;
        switch (l.tag) {
          case 22:
            (ar(n, l), r & 2048 && wu(l.alternate, l));
            break;
          case 24:
            (ar(n, l), r & 2048 && xu(l.alternate, l));
            break;
          default:
            ar(n, l);
        }
        t = t.sibling;
      }
  }
  var ir = 8192;
  function gl(e, t, n) {
    if (e.subtreeFlags & ir)
      for (e = e.child; e !== null; ) (Xc(e, t, n), (e = e.sibling));
  }
  function Xc(e, t, n) {
    switch (e.tag) {
      case 26:
        (gl(e, t, n),
          e.flags & ir &&
            e.memoizedState !== null &&
            Fm(n, bt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        gl(e, t, n);
        break;
      case 3:
      case 4:
        var l = bt;
        ((bt = za(e.stateNode.containerInfo)), gl(e, t, n), (bt = l));
        break;
      case 22:
        e.memoizedState === null &&
          ((l = e.alternate),
          l !== null && l.memoizedState !== null
            ? ((l = ir), (ir = 16777216), gl(e, t, n), (ir = l))
            : gl(e, t, n));
        break;
      default:
        gl(e, t, n);
    }
  }
  function Zc(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ur(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((ze = l), ef(l, e));
        }
      Zc(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (Jc(e), (e = e.sibling));
  }
  function Jc(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ur(e), e.flags & 2048 && sn(9, e, e.return));
        break;
      case 3:
        ur(e);
        break;
      case 12:
        ur(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ma(e))
          : ur(e);
        break;
      default:
        ur(e);
    }
  }
  function ma(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ((ze = l), ef(l, e));
        }
      Zc(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (sn(8, t, t.return), ma(t));
          break;
        case 22:
          ((n = t.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), ma(t)));
          break;
        default:
          ma(t);
      }
      e = e.sibling;
    }
  }
  function ef(e, t) {
    for (; ze !== null; ) {
      var n = ze;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          sn(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Vl(n.memoizedState.cache);
      }
      if (((l = n.child), l !== null)) ((l.return = n), (ze = l));
      else
        e: for (n = e; ze !== null; ) {
          l = ze;
          var r = l.sibling,
            a = l.return;
          if ((Vc(l), l === n)) {
            ze = null;
            break e;
          }
          if (r !== null) {
            ((r.return = a), (ze = r));
            break e;
          }
          ze = a;
        }
    }
  }
  var em = {
      getCacheForType: function (e) {
        var t = Pe(Se),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return Pe(Se).controller.signal;
      },
    },
    tm = typeof WeakMap == 'function' ? WeakMap : Map,
    ee = 0,
    ce = null,
    V = null,
    W = 0,
    ne = 0,
    lt = null,
    cn = !1,
    yl = !1,
    Eu = !1,
    Wt = 0,
    ge = 0,
    fn = 0,
    $n = 0,
    Cu = 0,
    rt = 0,
    vl = 0,
    or = null,
    Qe = null,
    Nu = !1,
    ha = 0,
    tf = 0,
    ga = 1 / 0,
    ya = null,
    dn = null,
    Ce = 0,
    pn = null,
    bl = null,
    Qt = 0,
    zu = 0,
    _u = null,
    nf = null,
    sr = 0,
    Tu = null;
  function at() {
    return (ee & 2) !== 0 && W !== 0 ? W & -W : v.T !== null ? Ru() : vo();
  }
  function lf() {
    if (rt === 0)
      if ((W & 536870912) === 0 || Y) {
        var e = Cr;
        ((Cr <<= 1), (Cr & 3932160) === 0 && (Cr = 262144), (rt = e));
      } else rt = 536870912;
    return ((e = tt.current), e !== null && (e.flags |= 32), rt);
  }
  function Ke(e, t, n) {
    (((e === ce && (ne === 2 || ne === 9)) || e.cancelPendingCommit !== null) &&
      (kl(e, 0), mn(e, W, rt, !1)),
      Pl(e, n),
      ((ee & 2) === 0 || e !== ce) &&
        (e === ce &&
          ((ee & 2) === 0 && ($n |= n), ge === 4 && mn(e, W, rt, !1)),
        _t(e)));
  }
  function rf(e, t, n) {
    if ((ee & 6) !== 0) throw Error(f(327));
    var l = (!n && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Tl(e, t),
      r = l ? rm(e, t) : Lu(e, t, !0),
      a = l;
    do {
      if (r === 0) {
        yl && !l && mn(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), a && !nm(n))) {
          ((r = Lu(e, t, !1)), (a = !1));
          continue;
        }
        if (r === 2) {
          if (((a = t), e.errorRecoveryDisabledLanes & a)) var i = 0;
          else
            ((i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            e: {
              var u = e;
              r = or;
              var o = u.current.memoizedState.isDehydrated;
              if ((o && (kl(u, i).flags |= 256), (i = Lu(u, i, !1)), i !== 2)) {
                if (Eu && !o) {
                  ((u.errorRecoveryDisabledLanes |= a), ($n |= a), (r = 4));
                  break e;
                }
                ((a = Qe),
                  (Qe = r),
                  a !== null &&
                    (Qe === null ? (Qe = a) : Qe.push.apply(Qe, a)));
              }
              r = i;
            }
            if (((a = !1), r !== 2)) continue;
          }
        }
        if (r === 1) {
          (kl(e, 0), mn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), (a = r), a)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              mn(l, t, rt, !cn);
              break e;
            case 2:
              Qe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if ((t & 62914560) === t && ((r = ha + 300 - Ge()), 10 < r)) {
            if ((mn(l, t, rt, !cn), zr(l, 0, !0) !== 0)) break e;
            ((Qt = t),
              (l.timeoutHandle = Mf(
                af.bind(
                  null,
                  l,
                  n,
                  Qe,
                  ya,
                  Nu,
                  t,
                  rt,
                  $n,
                  vl,
                  cn,
                  a,
                  'Throttled',
                  -0,
                  0,
                ),
                r,
              )));
            break e;
          }
          af(l, n, Qe, ya, Nu, t, rt, $n, vl, cn, a, null, -0, 0);
        }
      }
      break;
    } while (!0);
    _t(e);
  }
  function af(e, t, n, l, r, a, i, u, o, m, y, S, h, g) {
    if (
      ((e.timeoutHandle = -1),
      (S = t.subtreeFlags),
      S & 8192 || (S & 16785408) === 16785408)
    ) {
      ((S = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: jt,
      }),
        Xc(t, a, S));
      var _ =
        (a & 62914560) === a ? ha - Ge() : (a & 4194048) === a ? tf - Ge() : 0;
      if (((_ = Um(S, _)), _ !== null)) {
        ((Qt = a),
          (e.cancelPendingCommit = _(
            mf.bind(null, e, t, a, n, l, r, i, u, o, y, S, null, h, g),
          )),
          mn(e, a, i, !m));
        return;
      }
    }
    mf(e, t, a, n, l, r, i, u, o);
  }
  function nm(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var r = n[l],
            a = r.getSnapshot;
          r = r.value;
          try {
            if (!Je(a(), r)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function mn(e, t, n, l) {
    ((t &= ~Cu),
      (t &= ~$n),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var r = t; 0 < r; ) {
      var a = 31 - Ze(r),
        i = 1 << a;
      ((l[a] = -1), (r &= ~i));
    }
    n !== 0 && ho(e, n, t);
  }
  function va() {
    return (ee & 6) === 0 ? (cr(0), !1) : !0;
  }
  function Pu() {
    if (V !== null) {
      if (ne === 0) var e = V.return;
      else ((e = V), (Mt = jn = null), Wi(e), (cl = null), (Wl = 0), (e = V));
      for (; e !== null; ) (Mc(e.alternate, e), (e = e.return));
      V = null;
    }
  }
  function kl(e, t) {
    var n = e.timeoutHandle;
    (n !== -1 && ((e.timeoutHandle = -1), wm(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      (Qt = 0),
      Pu(),
      (ce = e),
      (V = n = At(e.current, null)),
      (W = t),
      (ne = 0),
      (lt = null),
      (cn = !1),
      (yl = Tl(e, t)),
      (Eu = !1),
      (vl = rt = Cu = $n = fn = ge = 0),
      (Qe = or = null),
      (Nu = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var r = 31 - Ze(l),
          a = 1 << r;
        ((t |= e[r]), (l &= ~a));
      }
    return ((Wt = t), Fr(), n);
  }
  function uf(e, t) {
    ((U = null),
      (v.H = er),
      t === sl || t === Qr
        ? ((t = ws()), (ne = 3))
        : t === Ai
          ? ((t = ws()), (ne = 4))
          : (ne =
              t === ou
                ? 8
                : t !== null &&
                    typeof t == 'object' &&
                    typeof t.then == 'function'
                  ? 6
                  : 1),
      (lt = t),
      V === null && ((ge = 1), ua(e, st(t, e.current))));
  }
  function of() {
    var e = tt.current;
    return e === null
      ? !0
      : (W & 4194048) === W
        ? vt === null
        : (W & 62914560) === W || (W & 536870912) !== 0
          ? e === vt
          : !1;
  }
  function sf() {
    var e = v.H;
    return ((v.H = er), e === null ? er : e);
  }
  function cf() {
    var e = v.A;
    return ((v.A = em), e);
  }
  function ba() {
    ((ge = 4),
      cn || ((W & 4194048) !== W && tt.current !== null) || (yl = !0),
      ((fn & 134217727) === 0 && ($n & 134217727) === 0) ||
        ce === null ||
        mn(ce, W, rt, !1));
  }
  function Lu(e, t, n) {
    var l = ee;
    ee |= 2;
    var r = sf(),
      a = cf();
    ((ce !== e || W !== t) && ((ya = null), kl(e, t)), (t = !1));
    var i = ge;
    e: do
      try {
        if (ne !== 0 && V !== null) {
          var u = V,
            o = lt;
          switch (ne) {
            case 8:
              (Pu(), (i = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var m = ne;
              if (((ne = 0), (lt = null), Sl(e, u, o, m), n && yl)) {
                i = 0;
                break e;
              }
              break;
            default:
              ((m = ne), (ne = 0), (lt = null), Sl(e, u, o, m));
          }
        }
        (lm(), (i = ge));
        break;
      } catch (y) {
        uf(e, y);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Mt = jn = null),
      (ee = l),
      (v.H = r),
      (v.A = a),
      V === null && ((ce = null), (W = 0), Fr()),
      i
    );
  }
  function lm() {
    for (; V !== null; ) ff(V);
  }
  function rm(e, t) {
    var n = ee;
    ee |= 2;
    var l = sf(),
      r = cf();
    ce !== e || W !== t
      ? ((ya = null), (ga = Ge() + 500), kl(e, t))
      : (yl = Tl(e, t));
    e: do
      try {
        if (ne !== 0 && V !== null) {
          t = V;
          var a = lt;
          t: switch (ne) {
            case 1:
              ((ne = 0), (lt = null), Sl(e, t, a, 1));
              break;
            case 2:
            case 9:
              if (ks(a)) {
                ((ne = 0), (lt = null), df(t));
                break;
              }
              ((t = function () {
                ((ne !== 2 && ne !== 9) || ce !== e || (ne = 7), _t(e));
              }),
                a.then(t, t));
              break e;
            case 3:
              ne = 7;
              break e;
            case 4:
              ne = 5;
              break e;
            case 7:
              ks(a)
                ? ((ne = 0), (lt = null), df(t))
                : ((ne = 0), (lt = null), Sl(e, t, a, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var u = V;
                  if (i ? Xf(i) : u.stateNode.complete) {
                    ((ne = 0), (lt = null));
                    var o = u.sibling;
                    if (o !== null) V = o;
                    else {
                      var m = u.return;
                      m !== null ? ((V = m), ka(m)) : (V = null);
                    }
                    break t;
                  }
              }
              ((ne = 0), (lt = null), Sl(e, t, a, 5));
              break;
            case 6:
              ((ne = 0), (lt = null), Sl(e, t, a, 6));
              break;
            case 8:
              (Pu(), (ge = 6));
              break e;
            default:
              throw Error(f(462));
          }
        }
        am();
        break;
      } catch (y) {
        uf(e, y);
      }
    while (!0);
    return (
      (Mt = jn = null),
      (v.H = l),
      (v.A = r),
      (ee = n),
      V !== null ? 0 : ((ce = null), (W = 0), Fr(), ge)
    );
  }
  function am() {
    for (; V !== null && !_d(); ) ff(V);
  }
  function ff(e) {
    var t = Ac(e.alternate, e, Wt);
    ((e.memoizedProps = e.pendingProps), t === null ? ka(e) : (V = t));
  }
  function df(e) {
    var t = e,
      n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = _c(n, t, t.pendingProps, t.type, void 0, W);
        break;
      case 11:
        t = _c(n, t, t.pendingProps, t.type.render, t.ref, W);
        break;
      case 5:
        Wi(t);
      default:
        (Mc(n, t), (t = V = ss(t, Wt)), (t = Ac(n, t, Wt)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? ka(e) : (V = t));
  }
  function Sl(e, t, n, l) {
    ((Mt = jn = null), Wi(t), (cl = null), (Wl = 0));
    var r = t.return;
    try {
      if (Qp(e, r, t, n, W)) {
        ((ge = 1), ua(e, st(n, e.current)), (V = null));
        return;
      }
    } catch (a) {
      if (r !== null) throw ((V = r), a);
      ((ge = 1), ua(e, st(n, e.current)), (V = null));
      return;
    }
    t.flags & 32768
      ? (Y || l === 1
          ? (e = !0)
          : yl || (W & 536870912) !== 0
            ? (e = !1)
            : ((cn = e = !0),
              (l === 2 || l === 9 || l === 3 || l === 6) &&
                ((l = tt.current),
                l !== null && l.tag === 13 && (l.flags |= 16384))),
        pf(t, e))
      : ka(t);
  }
  function ka(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        pf(t, cn);
        return;
      }
      e = t.return;
      var n = Gp(t.alternate, t, Wt);
      if (n !== null) {
        V = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        V = t;
        return;
      }
      V = t = e;
    } while (t !== null);
    ge === 0 && (ge = 5);
  }
  function pf(e, t) {
    do {
      var n = Xp(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (V = n));
        return;
      }
      if (
        ((n = e.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        V = e;
        return;
      }
      V = e = n;
    } while (e !== null);
    ((ge = 6), (V = null));
  }
  function mf(e, t, n, l, r, a, i, u, o) {
    e.cancelPendingCommit = null;
    do Sa();
    while (Ce !== 0);
    if ((ee & 6) !== 0) throw Error(f(327));
    if (t !== null) {
      if (t === e.current) throw Error(f(177));
      if (
        ((a = t.lanes | t.childLanes),
        (a |= bi),
        Id(e, n, a, i, u, o),
        e === ce && ((V = ce = null), (W = 0)),
        (bl = t),
        (pn = e),
        (Qt = n),
        (zu = a),
        (_u = r),
        (nf = l),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            sm(xr, function () {
              return (bf(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (l = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || l)
      ) {
        ((l = v.T), (v.T = null), (r = C.p), (C.p = 2), (i = ee), (ee |= 4));
        try {
          Zp(e, t, n);
        } finally {
          ((ee = i), (C.p = r), (v.T = l));
        }
      }
      ((Ce = 1), hf(), gf(), yf());
    }
  }
  function hf() {
    if (Ce === 1) {
      Ce = 0;
      var e = pn,
        t = bl,
        n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        ((n = v.T), (v.T = null));
        var l = C.p;
        C.p = 2;
        var r = ee;
        ee |= 4;
        try {
          Kc(t, e);
          var a = qu,
            i = es(e.containerInfo),
            u = a.focusedElem,
            o = a.selectionRange;
          if (
            i !== u &&
            u &&
            u.ownerDocument &&
            Jo(u.ownerDocument.documentElement, u)
          ) {
            if (o !== null && mi(u)) {
              var m = o.start,
                y = o.end;
              if ((y === void 0 && (y = m), 'selectionStart' in u))
                ((u.selectionStart = m),
                  (u.selectionEnd = Math.min(y, u.value.length)));
              else {
                var S = u.ownerDocument || document,
                  h = (S && S.defaultView) || window;
                if (h.getSelection) {
                  var g = h.getSelection(),
                    _ = u.textContent.length,
                    R = Math.min(o.start, _),
                    ue = o.end === void 0 ? R : Math.min(o.end, _);
                  !g.extend && R > ue && ((i = ue), (ue = R), (R = i));
                  var d = Zo(u, R),
                    s = Zo(u, ue);
                  if (
                    d &&
                    s &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== d.node ||
                      g.anchorOffset !== d.offset ||
                      g.focusNode !== s.node ||
                      g.focusOffset !== s.offset)
                  ) {
                    var p = S.createRange();
                    (p.setStart(d.node, d.offset),
                      g.removeAllRanges(),
                      R > ue
                        ? (g.addRange(p), g.extend(s.node, s.offset))
                        : (p.setEnd(s.node, s.offset), g.addRange(p)));
                  }
                }
              }
            }
            for (S = [], g = u; (g = g.parentNode); )
              g.nodeType === 1 &&
                S.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof u.focus == 'function' && u.focus(), u = 0;
              u < S.length;
              u++
            ) {
              var b = S[u];
              ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
            }
          }
          ((Oa = !!Bu), (qu = Bu = null));
        } finally {
          ((ee = r), (C.p = l), (v.T = n));
        }
      }
      ((e.current = t), (Ce = 2));
    }
  }
  function gf() {
    if (Ce === 2) {
      Ce = 0;
      var e = pn,
        t = bl,
        n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        ((n = v.T), (v.T = null));
        var l = C.p;
        C.p = 2;
        var r = ee;
        ee |= 4;
        try {
          qc(e, t.alternate, t);
        } finally {
          ((ee = r), (C.p = l), (v.T = n));
        }
      }
      Ce = 3;
    }
  }
  function yf() {
    if (Ce === 4 || Ce === 3) {
      ((Ce = 0), Td());
      var e = pn,
        t = bl,
        n = Qt,
        l = nf;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (Ce = 5)
        : ((Ce = 0), (bl = pn = null), vf(e, e.pendingLanes));
      var r = e.pendingLanes;
      if (
        (r === 0 && (dn = null),
        Ya(n),
        (t = t.stateNode),
        Xe && typeof Xe.onCommitFiberRoot == 'function')
      )
        try {
          Xe.onCommitFiberRoot(_l, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((t = v.T), (r = C.p), (C.p = 2), (v.T = null));
        try {
          for (var a = e.onRecoverableError, i = 0; i < l.length; i++) {
            var u = l[i];
            a(u.value, { componentStack: u.stack });
          }
        } finally {
          ((v.T = t), (C.p = r));
        }
      }
      ((Qt & 3) !== 0 && Sa(),
        _t(e),
        (r = e.pendingLanes),
        (n & 261930) !== 0 && (r & 42) !== 0
          ? e === Tu
            ? sr++
            : ((sr = 0), (Tu = e))
          : (sr = 0),
        cr(0));
    }
  }
  function vf(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Vl(t)));
  }
  function Sa() {
    return (hf(), gf(), yf(), bf());
  }
  function bf() {
    if (Ce !== 5) return !1;
    var e = pn,
      t = zu;
    zu = 0;
    var n = Ya(Qt),
      l = v.T,
      r = C.p;
    try {
      ((C.p = 32 > n ? 32 : n), (v.T = null), (n = _u), (_u = null));
      var a = pn,
        i = Qt;
      if (((Ce = 0), (bl = pn = null), (Qt = 0), (ee & 6) !== 0))
        throw Error(f(331));
      var u = ee;
      if (
        ((ee |= 4),
        Jc(a.current),
        Gc(a, a.current, i, n),
        (ee = u),
        cr(0, !1),
        Xe && typeof Xe.onPostCommitFiberRoot == 'function')
      )
        try {
          Xe.onPostCommitFiberRoot(_l, a);
        } catch {}
      return !0;
    } finally {
      ((C.p = r), (v.T = l), vf(e, t));
    }
  }
  function kf(e, t, n) {
    ((t = st(n, t)),
      (t = uu(e.stateNode, t, 2)),
      (e = an(e, t, 2)),
      e !== null && (Pl(e, 2), _t(e)));
  }
  function le(e, t, n) {
    if (e.tag === 3) kf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          kf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' &&
              (dn === null || !dn.has(l)))
          ) {
            ((e = st(n, e)),
              (n = kc(2)),
              (l = an(t, n, 2)),
              l !== null && (Sc(n, l, t, e), Pl(l, 2), _t(l)));
            break;
          }
        }
        t = t.return;
      }
  }
  function ju(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new tm();
      var r = new Set();
      l.set(t, r);
    } else ((r = l.get(t)), r === void 0 && ((r = new Set()), l.set(t, r)));
    r.has(n) ||
      ((Eu = !0), r.add(n), (e = im.bind(null, e, t, n)), t.then(e, e));
  }
  function im(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      ce === e &&
        (W & n) === n &&
        (ge === 4 || (ge === 3 && (W & 62914560) === W && 300 > Ge() - ha)
          ? (ee & 2) === 0 && kl(e, 0)
          : (Cu |= n),
        vl === W && (vl = 0)),
      _t(e));
  }
  function Sf(e, t) {
    (t === 0 && (t = mo()), (e = Tn(e, t)), e !== null && (Pl(e, t), _t(e)));
  }
  function um(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Sf(e, n));
  }
  function om(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          r = e.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    (l !== null && l.delete(t), Sf(e, n));
  }
  function sm(e, t) {
    return Ha(e, t);
  }
  var wa = null,
    wl = null,
    Ou = !1,
    xa = !1,
    Au = !1,
    hn = 0;
  function _t(e) {
    (e !== wl &&
      e.next === null &&
      (wl === null ? (wa = wl = e) : (wl = wl.next = e)),
      (xa = !0),
      Ou || ((Ou = !0), fm()));
  }
  function cr(e, t) {
    if (!Au && xa) {
      Au = !0;
      do
        for (var n = !1, l = wa; l !== null; ) {
          if (e !== 0) {
            var r = l.pendingLanes;
            if (r === 0) var a = 0;
            else {
              var i = l.suspendedLanes,
                u = l.pingedLanes;
              ((a = (1 << (31 - Ze(42 | e) + 1)) - 1),
                (a &= r & ~(i & ~u)),
                (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
            }
            a !== 0 && ((n = !0), Cf(l, a));
          } else
            ((a = W),
              (a = zr(
                l,
                l === ce ? a : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
              )),
              (a & 3) === 0 || Tl(l, a) || ((n = !0), Cf(l, a)));
          l = l.next;
        }
      while (n);
      Au = !1;
    }
  }
  function cm() {
    wf();
  }
  function wf() {
    xa = Ou = !1;
    var e = 0;
    hn !== 0 && Sm() && (e = hn);
    for (var t = Ge(), n = null, l = wa; l !== null; ) {
      var r = l.next,
        a = xf(l, t);
      (a === 0
        ? ((l.next = null),
          n === null ? (wa = r) : (n.next = r),
          r === null && (wl = n))
        : ((n = l), (e !== 0 || (a & 3) !== 0) && (xa = !0)),
        (l = r));
    }
    ((Ce !== 0 && Ce !== 5) || cr(e), hn !== 0 && (hn = 0));
  }
  function xf(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        r = e.expirationTimes,
        a = e.pendingLanes & -62914561;
      0 < a;

    ) {
      var i = 31 - Ze(a),
        u = 1 << i,
        o = r[i];
      (o === -1
        ? ((u & n) === 0 || (u & l) !== 0) && (r[i] = Dd(u, t))
        : o <= t && (e.expiredLanes |= u),
        (a &= ~u));
    }
    if (
      ((t = ce),
      (n = W),
      (n = zr(
        e,
        e === t ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (l = e.callbackNode),
      n === 0 ||
        (e === t && (ne === 2 || ne === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && Wa(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((n & 3) === 0 || Tl(e, n)) {
      if (((t = n & -n), t === e.callbackPriority)) return t;
      switch ((l !== null && Wa(l), Ya(n))) {
        case 2:
        case 8:
          n = fo;
          break;
        case 32:
          n = xr;
          break;
        case 268435456:
          n = po;
          break;
        default:
          n = xr;
      }
      return (
        (l = Ef.bind(null, e)),
        (n = Ha(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (
      l !== null && l !== null && Wa(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Ef(e, t) {
    if (Ce !== 0 && Ce !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (Sa() && e.callbackNode !== n) return null;
    var l = W;
    return (
      (l = zr(
        e,
        e === ce ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      l === 0
        ? null
        : (rf(e, l, t),
          xf(e, Ge()),
          e.callbackNode != null && e.callbackNode === n
            ? Ef.bind(null, e)
            : null)
    );
  }
  function Cf(e, t) {
    if (Sa()) return null;
    rf(e, t, !0);
  }
  function fm() {
    xm(function () {
      (ee & 6) !== 0 ? Ha(co, cm) : wf();
    });
  }
  function Ru() {
    if (hn === 0) {
      var e = ul;
      (e === 0 && ((e = Er), (Er <<= 1), (Er & 261888) === 0 && (Er = 256)),
        (hn = e));
    }
    return hn;
  }
  function Nf(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Lr('' + e);
  }
  function zf(e, t) {
    var n = t.ownerDocument.createElement('input');
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function dm(e, t, n, l, r) {
    if (t === 'submit' && n && n.stateNode === r) {
      var a = Nf((r[Be] || null).action),
        i = l.submitter;
      i &&
        ((t = (t = i[Be] || null)
          ? Nf(t.formAction)
          : i.getAttribute('formAction')),
        t !== null && ((a = t), (i = null)));
      var u = new Rr('action', 'action', null, l, r);
      e.push({
        event: u,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (hn !== 0) {
                  var o = i ? zf(r, i) : new FormData(r);
                  tu(
                    n,
                    { pending: !0, data: o, method: r.method, action: a },
                    null,
                    o,
                  );
                }
              } else
                typeof a == 'function' &&
                  (u.preventDefault(),
                  (o = i ? zf(r, i) : new FormData(r)),
                  tu(
                    n,
                    { pending: !0, data: o, method: r.method, action: a },
                    a,
                    o,
                  ));
            },
            currentTarget: r,
          },
        ],
      });
    }
  }
  for (var Mu = 0; Mu < vi.length; Mu++) {
    var Du = vi[Mu],
      pm = Du.toLowerCase(),
      mm = Du[0].toUpperCase() + Du.slice(1);
    yt(pm, 'on' + mm);
  }
  (yt(ls, 'onAnimationEnd'),
    yt(rs, 'onAnimationIteration'),
    yt(as, 'onAnimationStart'),
    yt('dblclick', 'onDoubleClick'),
    yt('focusin', 'onFocus'),
    yt('focusout', 'onBlur'),
    yt(Pp, 'onTransitionRun'),
    yt(Lp, 'onTransitionStart'),
    yt(jp, 'onTransitionCancel'),
    yt(is, 'onTransitionEnd'),
    Qn('onMouseEnter', ['mouseout', 'mouseover']),
    Qn('onMouseLeave', ['mouseout', 'mouseover']),
    Qn('onPointerEnter', ['pointerout', 'pointerover']),
    Qn('onPointerLeave', ['pointerout', 'pointerover']),
    Cn(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Cn(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Cn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Cn(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Cn(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Cn(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var fr =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    hm = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(fr),
    );
  function _f(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n],
        r = l.event;
      l = l.listeners;
      e: {
        var a = void 0;
        if (t)
          for (var i = l.length - 1; 0 <= i; i--) {
            var u = l[i],
              o = u.instance,
              m = u.currentTarget;
            if (((u = u.listener), o !== a && r.isPropagationStopped()))
              break e;
            ((a = u), (r.currentTarget = m));
            try {
              a(r);
            } catch (y) {
              Ir(y);
            }
            ((r.currentTarget = null), (a = o));
          }
        else
          for (i = 0; i < l.length; i++) {
            if (
              ((u = l[i]),
              (o = u.instance),
              (m = u.currentTarget),
              (u = u.listener),
              o !== a && r.isPropagationStopped())
            )
              break e;
            ((a = u), (r.currentTarget = m));
            try {
              a(r);
            } catch (y) {
              Ir(y);
            }
            ((r.currentTarget = null), (a = o));
          }
      }
    }
  }
  function H(e, t) {
    var n = t[Ga];
    n === void 0 && (n = t[Ga] = new Set());
    var l = e + '__bubble';
    n.has(l) || (Tf(t, e, 2, !1), n.add(l));
  }
  function Iu(e, t, n) {
    var l = 0;
    (t && (l |= 4), Tf(n, e, l, t));
  }
  var Ea = '_reactListening' + Math.random().toString(36).slice(2);
  function Fu(e) {
    if (!e[Ea]) {
      ((e[Ea] = !0),
        So.forEach(function (n) {
          n !== 'selectionchange' && (hm.has(n) || Iu(n, !1, e), Iu(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ea] || ((t[Ea] = !0), Iu('selectionchange', !1, t));
    }
  }
  function Tf(e, t, n, l) {
    switch (rd(t)) {
      case 2:
        var r = qm;
        break;
      case 8:
        r = Vm;
        break;
      default:
        r = eo;
    }
    ((n = r.bind(null, t, n, e)),
      (r = void 0),
      !ai ||
        (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
        (r = !0),
      l
        ? r !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: r })
          : e.addEventListener(t, n, !0)
        : r !== void 0
          ? e.addEventListener(t, n, { passive: r })
          : e.addEventListener(t, n, !1));
  }
  function Uu(e, t, n, l, r) {
    var a = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (;;) {
        if (l === null) return;
        var i = l.tag;
        if (i === 3 || i === 4) {
          var u = l.stateNode.containerInfo;
          if (u === r) break;
          if (i === 4)
            for (i = l.return; i !== null; ) {
              var o = i.tag;
              if ((o === 3 || o === 4) && i.stateNode.containerInfo === r)
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = Vn(u)), i === null)) return;
            if (((o = i.tag), o === 5 || o === 6 || o === 26 || o === 27)) {
              l = a = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        l = l.return;
      }
    Oo(function () {
      var m = a,
        y = li(n),
        S = [];
      e: {
        var h = us.get(e);
        if (h !== void 0) {
          var g = Rr,
            _ = e;
          switch (e) {
            case 'keypress':
              if (Or(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              g = op;
              break;
            case 'focusin':
              ((_ = 'focus'), (g = si));
              break;
            case 'focusout':
              ((_ = 'blur'), (g = si));
              break;
            case 'beforeblur':
            case 'afterblur':
              g = si;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              g = Mo;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              g = Gd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              g = fp;
              break;
            case ls:
            case rs:
            case as:
              g = Jd;
              break;
            case is:
              g = pp;
              break;
            case 'scroll':
            case 'scrollend':
              g = Kd;
              break;
            case 'wheel':
              g = hp;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              g = tp;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              g = Io;
              break;
            case 'toggle':
            case 'beforetoggle':
              g = yp;
          }
          var R = (t & 4) !== 0,
            ue = !R && (e === 'scroll' || e === 'scrollend'),
            d = R ? (h !== null ? h + 'Capture' : null) : h;
          R = [];
          for (var s = m, p; s !== null; ) {
            var b = s;
            if (
              ((p = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                p === null ||
                d === null ||
                ((b = Ol(s, d)), b != null && R.push(dr(s, b, p))),
              ue)
            )
              break;
            s = s.return;
          }
          0 < R.length &&
            ((h = new g(h, _, null, n, y)), S.push({ event: h, listeners: R }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((h = e === 'mouseover' || e === 'pointerover'),
            (g = e === 'mouseout' || e === 'pointerout'),
            h &&
              n !== ni &&
              (_ = n.relatedTarget || n.fromElement) &&
              (Vn(_) || _[qn]))
          )
            break e;
          if (
            (g || h) &&
            ((h =
              y.window === y
                ? y
                : (h = y.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            g
              ? ((_ = n.relatedTarget || n.toElement),
                (g = m),
                (_ = _ ? Vn(_) : null),
                _ !== null &&
                  ((ue = D(_)),
                  (R = _.tag),
                  _ !== ue || (R !== 5 && R !== 27 && R !== 6)) &&
                  (_ = null))
              : ((g = null), (_ = m)),
            g !== _)
          ) {
            if (
              ((R = Mo),
              (b = 'onMouseLeave'),
              (d = 'onMouseEnter'),
              (s = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((R = Io),
                (b = 'onPointerLeave'),
                (d = 'onPointerEnter'),
                (s = 'pointer')),
              (ue = g == null ? h : jl(g)),
              (p = _ == null ? h : jl(_)),
              (h = new R(b, s + 'leave', g, n, y)),
              (h.target = ue),
              (h.relatedTarget = p),
              (b = null),
              Vn(y) === m &&
                ((R = new R(d, s + 'enter', _, n, y)),
                (R.target = p),
                (R.relatedTarget = ue),
                (b = R)),
              (ue = b),
              g && _)
            )
              t: {
                for (R = gm, d = g, s = _, p = 0, b = d; b; b = R(b)) p++;
                b = 0;
                for (var j = s; j; j = R(j)) b++;
                for (; 0 < p - b; ) ((d = R(d)), p--);
                for (; 0 < b - p; ) ((s = R(s)), b--);
                for (; p--; ) {
                  if (d === s || (s !== null && d === s.alternate)) {
                    R = d;
                    break t;
                  }
                  ((d = R(d)), (s = R(s)));
                }
                R = null;
              }
            else R = null;
            (g !== null && Pf(S, h, g, R, !1),
              _ !== null && ue !== null && Pf(S, ue, _, R, !0));
          }
        }
        e: {
          if (
            ((h = m ? jl(m) : window),
            (g = h.nodeName && h.nodeName.toLowerCase()),
            g === 'select' || (g === 'input' && h.type === 'file'))
          )
            var Z = Wo;
          else if (Vo(h))
            if (Qo) Z = zp;
            else {
              Z = Cp;
              var P = Ep;
            }
          else
            ((g = h.nodeName),
              !g ||
              g.toLowerCase() !== 'input' ||
              (h.type !== 'checkbox' && h.type !== 'radio')
                ? m && ti(m.elementType) && (Z = Wo)
                : (Z = Np));
          if (Z && (Z = Z(e, m))) {
            Ho(S, Z, n, y);
            break e;
          }
          (P && P(e, h, m),
            e === 'focusout' &&
              m &&
              h.type === 'number' &&
              m.memoizedProps.value != null &&
              ei(h, 'number', h.value));
        }
        switch (((P = m ? jl(m) : window), e)) {
          case 'focusin':
            (Vo(P) || P.contentEditable === 'true') &&
              ((Jn = P), (hi = m), ($l = null));
            break;
          case 'focusout':
            $l = hi = Jn = null;
            break;
          case 'mousedown':
            gi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((gi = !1), ts(S, n, y));
            break;
          case 'selectionchange':
            if (Tp) break;
          case 'keydown':
          case 'keyup':
            ts(S, n, y);
        }
        var $;
        if (fi)
          e: {
            switch (e) {
              case 'compositionstart':
                var Q = 'onCompositionStart';
                break e;
              case 'compositionend':
                Q = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                Q = 'onCompositionUpdate';
                break e;
            }
            Q = void 0;
          }
        else
          Zn
            ? Bo(e, n) && (Q = 'onCompositionEnd')
            : e === 'keydown' &&
              n.keyCode === 229 &&
              (Q = 'onCompositionStart');
        (Q &&
          (Fo &&
            n.locale !== 'ko' &&
            (Zn || Q !== 'onCompositionStart'
              ? Q === 'onCompositionEnd' && Zn && ($ = Ao())
              : ((Zt = y),
                (ii = 'value' in Zt ? Zt.value : Zt.textContent),
                (Zn = !0))),
          (P = Ca(m, Q)),
          0 < P.length &&
            ((Q = new Do(Q, e, null, n, y)),
            S.push({ event: Q, listeners: P }),
            $ ? (Q.data = $) : (($ = qo(n)), $ !== null && (Q.data = $)))),
          ($ = bp ? kp(e, n) : Sp(e, n)) &&
            ((Q = Ca(m, 'onBeforeInput')),
            0 < Q.length &&
              ((P = new Do('onBeforeInput', 'beforeinput', null, n, y)),
              S.push({ event: P, listeners: Q }),
              (P.data = $))),
          dm(S, e, m, n, y));
      }
      _f(S, t);
    });
  }
  function dr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Ca(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var r = e,
        a = r.stateNode;
      if (
        ((r = r.tag),
        (r !== 5 && r !== 26 && r !== 27) ||
          a === null ||
          ((r = Ol(e, n)),
          r != null && l.unshift(dr(e, r, a)),
          (r = Ol(e, t)),
          r != null && l.push(dr(e, r, a))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function gm(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Pf(e, t, n, l, r) {
    for (var a = t._reactName, i = []; n !== null && n !== l; ) {
      var u = n,
        o = u.alternate,
        m = u.stateNode;
      if (((u = u.tag), o !== null && o === l)) break;
      ((u !== 5 && u !== 26 && u !== 27) ||
        m === null ||
        ((o = m),
        r
          ? ((m = Ol(n, a)), m != null && i.unshift(dr(n, m, o)))
          : r || ((m = Ol(n, a)), m != null && i.push(dr(n, m, o)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var ym = /\r\n?/g,
    vm = /\u0000|\uFFFD/g;
  function Lf(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        ym,
        `
`,
      )
      .replace(vm, '');
  }
  function jf(e, t) {
    return ((t = Lf(t)), Lf(e) === t);
  }
  function ie(e, t, n, l, r, a) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? t === 'body' || (t === 'textarea' && l === '') || Yn(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') &&
            t !== 'body' &&
            Yn(e, '' + l);
        break;
      case 'className':
        Tr(e, 'class', l);
        break;
      case 'tabIndex':
        Tr(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Tr(e, n, l);
        break;
      case 'style':
        Lo(e, l, a);
        break;
      case 'data':
        if (t !== 'object') {
          Tr(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || n !== 'href')) {
          e.removeAttribute(n);
          break;
        }
        if (
          l == null ||
          typeof l == 'function' ||
          typeof l == 'symbol' ||
          typeof l == 'boolean'
        ) {
          e.removeAttribute(n);
          break;
        }
        ((l = Lr('' + l)), e.setAttribute(n, l));
        break;
      case 'action':
      case 'formAction':
        if (typeof l == 'function') {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof a == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && ie(e, t, 'name', r.name, r, null),
                ie(e, t, 'formEncType', r.formEncType, r, null),
                ie(e, t, 'formMethod', r.formMethod, r, null),
                ie(e, t, 'formTarget', r.formTarget, r, null))
              : (ie(e, t, 'encType', r.encType, r, null),
                ie(e, t, 'method', r.method, r, null),
                ie(e, t, 'target', r.target, r, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        ((l = Lr('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (e.onclick = jt);
        break;
      case 'onScroll':
        l != null && H('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && H('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(f(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(f(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          l == null ||
          typeof l == 'function' ||
          typeof l == 'boolean' ||
          typeof l == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((n = Lr('' + l)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', n));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '' + l)
          : e.removeAttribute(n);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '')
          : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(n, '')
          : l !== !1 &&
              l != null &&
              typeof l != 'function' &&
              typeof l != 'symbol'
            ? e.setAttribute(n, l)
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null &&
        typeof l != 'function' &&
        typeof l != 'symbol' &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(n, l)
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(n)
          : e.setAttribute(n, l);
        break;
      case 'popover':
        (H('beforetoggle', e), H('toggle', e), _r(e, 'popover', l));
        break;
      case 'xlinkActuate':
        Lt(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        Lt(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        Lt(e, 'http://www.w3.org/1999/xlink', 'xlink:role', l);
        break;
      case 'xlinkShow':
        Lt(e, 'http://www.w3.org/1999/xlink', 'xlink:show', l);
        break;
      case 'xlinkTitle':
        Lt(e, 'http://www.w3.org/1999/xlink', 'xlink:title', l);
        break;
      case 'xlinkType':
        Lt(e, 'http://www.w3.org/1999/xlink', 'xlink:type', l);
        break;
      case 'xmlBase':
        Lt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', l);
        break;
      case 'xmlLang':
        Lt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', l);
        break;
      case 'xmlSpace':
        Lt(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', l);
        break;
      case 'is':
        _r(e, 'is', l);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== 'o' && n[0] !== 'O') ||
          (n[1] !== 'n' && n[1] !== 'N')) &&
          ((n = Wd.get(n) || n), _r(e, n, l));
    }
  }
  function $u(e, t, n, l, r, a) {
    switch (n) {
      case 'style':
        Lo(e, l, a);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l)) throw Error(f(61));
          if (((n = l.__html), n != null)) {
            if (r.children != null) throw Error(f(60));
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? Yn(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Yn(e, '' + l);
        break;
      case 'onScroll':
        l != null && H('scroll', e);
        break;
      case 'onScrollEnd':
        l != null && H('scrollend', e);
        break;
      case 'onClick':
        l != null && (e.onclick = jt);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!wo.hasOwnProperty(n))
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((r = n.endsWith('Capture')),
              (t = n.slice(2, r ? n.length - 7 : void 0)),
              (a = e[Be] || null),
              (a = a != null ? a[n] : null),
              typeof a == 'function' && e.removeEventListener(t, a, r),
              typeof l == 'function')
            ) {
              (typeof a != 'function' &&
                a !== null &&
                (n in e
                  ? (e[n] = null)
                  : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, r));
              break e;
            }
            n in e
              ? (e[n] = l)
              : l === !0
                ? e.setAttribute(n, '')
                : _r(e, n, l);
          }
    }
  }
  function je(e, t, n) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (H('error', e), H('load', e));
        var l = !1,
          r = !1,
          a;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var i = n[a];
            if (i != null)
              switch (a) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  r = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(f(137, t));
                default:
                  ie(e, t, a, i, n, null);
              }
          }
        (r && ie(e, t, 'srcSet', n.srcSet, n, null),
          l && ie(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        H('invalid', e);
        var u = (a = i = r = null),
          o = null,
          m = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var y = n[l];
            if (y != null)
              switch (l) {
                case 'name':
                  r = y;
                  break;
                case 'type':
                  i = y;
                  break;
                case 'checked':
                  o = y;
                  break;
                case 'defaultChecked':
                  m = y;
                  break;
                case 'value':
                  a = y;
                  break;
                case 'defaultValue':
                  u = y;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (y != null) throw Error(f(137, t));
                  break;
                default:
                  ie(e, t, l, y, n, null);
              }
          }
        zo(e, a, u, o, m, i, r, !1);
        return;
      case 'select':
        (H('invalid', e), (l = i = a = null));
        for (r in n)
          if (n.hasOwnProperty(r) && ((u = n[r]), u != null))
            switch (r) {
              case 'value':
                a = u;
                break;
              case 'defaultValue':
                i = u;
                break;
              case 'multiple':
                l = u;
              default:
                ie(e, t, r, u, n, null);
            }
        ((t = a),
          (n = i),
          (e.multiple = !!l),
          t != null ? Kn(e, !!l, t, !1) : n != null && Kn(e, !!l, n, !0));
        return;
      case 'textarea':
        (H('invalid', e), (a = r = l = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((u = n[i]), u != null))
            switch (i) {
              case 'value':
                l = u;
                break;
              case 'defaultValue':
                r = u;
                break;
              case 'children':
                a = u;
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(f(91));
                break;
              default:
                ie(e, t, i, u, n, null);
            }
        To(e, l, r, a);
        return;
      case 'option':
        for (o in n)
          if (n.hasOwnProperty(o) && ((l = n[o]), l != null))
            switch (o) {
              case 'selected':
                e.selected =
                  l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                ie(e, t, o, l, n, null);
            }
        return;
      case 'dialog':
        (H('beforetoggle', e), H('toggle', e), H('cancel', e), H('close', e));
        break;
      case 'iframe':
      case 'object':
        H('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < fr.length; l++) H(fr[l], e);
        break;
      case 'image':
        (H('error', e), H('load', e));
        break;
      case 'details':
        H('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (H('error', e), H('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (m in n)
          if (n.hasOwnProperty(m) && ((l = n[m]), l != null))
            switch (m) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(f(137, t));
              default:
                ie(e, t, m, l, n, null);
            }
        return;
      default:
        if (ti(t)) {
          for (y in n)
            n.hasOwnProperty(y) &&
              ((l = n[y]), l !== void 0 && $u(e, t, y, l, n, void 0));
          return;
        }
    }
    for (u in n)
      n.hasOwnProperty(u) && ((l = n[u]), l != null && ie(e, t, u, l, n, null));
  }
  function bm(e, t, n, l) {
    switch (t) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var r = null,
          a = null,
          i = null,
          u = null,
          o = null,
          m = null,
          y = null;
        for (g in n) {
          var S = n[g];
          if (n.hasOwnProperty(g) && S != null)
            switch (g) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                o = S;
              default:
                l.hasOwnProperty(g) || ie(e, t, g, null, l, S);
            }
        }
        for (var h in l) {
          var g = l[h];
          if (((S = n[h]), l.hasOwnProperty(h) && (g != null || S != null)))
            switch (h) {
              case 'type':
                a = g;
                break;
              case 'name':
                r = g;
                break;
              case 'checked':
                m = g;
                break;
              case 'defaultChecked':
                y = g;
                break;
              case 'value':
                i = g;
                break;
              case 'defaultValue':
                u = g;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (g != null) throw Error(f(137, t));
                break;
              default:
                g !== S && ie(e, t, h, g, l, S);
            }
        }
        Ja(e, i, u, o, m, y, a, r);
        return;
      case 'select':
        g = i = u = h = null;
        for (a in n)
          if (((o = n[a]), n.hasOwnProperty(a) && o != null))
            switch (a) {
              case 'value':
                break;
              case 'multiple':
                g = o;
              default:
                l.hasOwnProperty(a) || ie(e, t, a, null, l, o);
            }
        for (r in l)
          if (
            ((a = l[r]),
            (o = n[r]),
            l.hasOwnProperty(r) && (a != null || o != null))
          )
            switch (r) {
              case 'value':
                h = a;
                break;
              case 'defaultValue':
                u = a;
                break;
              case 'multiple':
                i = a;
              default:
                a !== o && ie(e, t, r, a, l, o);
            }
        ((t = u),
          (n = i),
          (l = g),
          h != null
            ? Kn(e, !!n, h, !1)
            : !!l != !!n &&
              (t != null ? Kn(e, !!n, t, !0) : Kn(e, !!n, n ? [] : '', !1)));
        return;
      case 'textarea':
        g = h = null;
        for (u in n)
          if (
            ((r = n[u]),
            n.hasOwnProperty(u) && r != null && !l.hasOwnProperty(u))
          )
            switch (u) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ie(e, t, u, null, l, r);
            }
        for (i in l)
          if (
            ((r = l[i]),
            (a = n[i]),
            l.hasOwnProperty(i) && (r != null || a != null))
          )
            switch (i) {
              case 'value':
                h = r;
                break;
              case 'defaultValue':
                g = r;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (r != null) throw Error(f(91));
                break;
              default:
                r !== a && ie(e, t, i, r, l, a);
            }
        _o(e, h, g);
        return;
      case 'option':
        for (var _ in n)
          if (
            ((h = n[_]),
            n.hasOwnProperty(_) && h != null && !l.hasOwnProperty(_))
          )
            switch (_) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                ie(e, t, _, null, l, h);
            }
        for (o in l)
          if (
            ((h = l[o]),
            (g = n[o]),
            l.hasOwnProperty(o) && h !== g && (h != null || g != null))
          )
            switch (o) {
              case 'selected':
                e.selected =
                  h && typeof h != 'function' && typeof h != 'symbol';
                break;
              default:
                ie(e, t, o, h, l, g);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var R in n)
          ((h = n[R]),
            n.hasOwnProperty(R) &&
              h != null &&
              !l.hasOwnProperty(R) &&
              ie(e, t, R, null, l, h));
        for (m in l)
          if (
            ((h = l[m]),
            (g = n[m]),
            l.hasOwnProperty(m) && h !== g && (h != null || g != null))
          )
            switch (m) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (h != null) throw Error(f(137, t));
                break;
              default:
                ie(e, t, m, h, l, g);
            }
        return;
      default:
        if (ti(t)) {
          for (var ue in n)
            ((h = n[ue]),
              n.hasOwnProperty(ue) &&
                h !== void 0 &&
                !l.hasOwnProperty(ue) &&
                $u(e, t, ue, void 0, l, h));
          for (y in l)
            ((h = l[y]),
              (g = n[y]),
              !l.hasOwnProperty(y) ||
                h === g ||
                (h === void 0 && g === void 0) ||
                $u(e, t, y, h, l, g));
          return;
        }
    }
    for (var d in n)
      ((h = n[d]),
        n.hasOwnProperty(d) &&
          h != null &&
          !l.hasOwnProperty(d) &&
          ie(e, t, d, null, l, h));
    for (S in l)
      ((h = l[S]),
        (g = n[S]),
        !l.hasOwnProperty(S) ||
          h === g ||
          (h == null && g == null) ||
          ie(e, t, S, h, l, g));
  }
  function Of(e) {
    switch (e) {
      case 'css':
      case 'script':
      case 'font':
      case 'img':
      case 'image':
      case 'input':
      case 'link':
        return !0;
      default:
        return !1;
    }
  }
  function km() {
    if (typeof performance.getEntriesByType == 'function') {
      for (
        var e = 0, t = 0, n = performance.getEntriesByType('resource'), l = 0;
        l < n.length;
        l++
      ) {
        var r = n[l],
          a = r.transferSize,
          i = r.initiatorType,
          u = r.duration;
        if (a && u && Of(i)) {
          for (i = 0, u = r.responseEnd, l += 1; l < n.length; l++) {
            var o = n[l],
              m = o.startTime;
            if (m > u) break;
            var y = o.transferSize,
              S = o.initiatorType;
            y &&
              Of(S) &&
              ((o = o.responseEnd), (i += y * (o < u ? 1 : (u - m) / (o - m))));
          }
          if ((--l, (t += (8 * (a + i)) / (r.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var Bu = null,
    qu = null;
  function Na(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Af(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Rf(e, t) {
    if (e === 0)
      switch (t) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === 'foreignObject' ? 0 : e;
  }
  function Vu(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Hu = null;
  function Sm() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === Hu
        ? !1
        : ((Hu = e), !0)
      : ((Hu = null), !1);
  }
  var Mf = typeof setTimeout == 'function' ? setTimeout : void 0,
    wm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Df = typeof Promise == 'function' ? Promise : void 0,
    xm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Df < 'u'
          ? function (e) {
              return Df.resolve(null).then(e).catch(Em);
            }
          : Mf;
  function Em(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gn(e) {
    return e === 'head';
  }
  function If(e, t) {
    var n = t,
      l = 0;
    do {
      var r = n.nextSibling;
      if ((e.removeChild(n), r && r.nodeType === 8))
        if (((n = r.data), n === '/$' || n === '/&')) {
          if (l === 0) {
            (e.removeChild(r), Nl(t));
            return;
          }
          l--;
        } else if (
          n === '$' ||
          n === '$?' ||
          n === '$~' ||
          n === '$!' ||
          n === '&'
        )
          l++;
        else if (n === 'html') pr(e.ownerDocument.documentElement);
        else if (n === 'head') {
          ((n = e.ownerDocument.head), pr(n));
          for (var a = n.firstChild; a; ) {
            var i = a.nextSibling,
              u = a.nodeName;
            (a[Ll] ||
              u === 'SCRIPT' ||
              u === 'STYLE' ||
              (u === 'LINK' && a.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(a),
              (a = i));
          }
        } else n === 'body' && pr(e.ownerDocument.body);
      n = r;
    } while (n);
    Nl(t);
  }
  function Ff(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = 'none'))
            : ((n.style.display = n._stashedDisplay || ''),
              n.getAttribute('style') === '' && n.removeAttribute('style'))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ''))
              : (n.nodeValue = n._stashedText || '')),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === '/$')) {
          if (e === 0) break;
          e--;
        } else (n !== '$' && n !== '$?' && n !== '$~' && n !== '$!') || e++;
      n = l;
    } while (n);
  }
  function Wu(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Wu(n), Xa(n));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(n);
    }
  }
  function Cm(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var r = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[Ll])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((a = e.getAttribute('rel')),
                (a === 'stylesheet' && e.hasAttribute('data-precedence')) ||
                  a !== r.rel ||
                  e.getAttribute('href') !==
                    (r.href == null || r.href === '' ? null : r.href) ||
                  e.getAttribute('crossorigin') !==
                    (r.crossOrigin == null ? null : r.crossOrigin) ||
                  e.getAttribute('title') !==
                    (r.title == null ? null : r.title))
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((a = e.getAttribute('src')),
                (a !== (r.src == null ? null : r.src) ||
                  e.getAttribute('type') !== (r.type == null ? null : r.type) ||
                  e.getAttribute('crossorigin') !==
                    (r.crossOrigin == null ? null : r.crossOrigin)) &&
                  a &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        var a = r.name == null ? null : '' + r.name;
        if (r.type === 'hidden' && e.getAttribute('name') === a) return e;
      } else return e;
      if (((e = pt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Nm(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !n) ||
        ((e = pt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Uf(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = pt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Qu(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Ku(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function zm(e, t) {
    var n = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = t;
    else if (e.data !== '$?' || n.readyState !== 'loading') t();
    else {
      var l = function () {
        (t(), n.removeEventListener('DOMContentLoaded', l));
      };
      (n.addEventListener('DOMContentLoaded', l), (e._reactRetry = l));
    }
  }
  function pt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === '$' ||
            t === '$!' ||
            t === '$?' ||
            t === '$~' ||
            t === '&' ||
            t === 'F!' ||
            t === 'F')
        )
          break;
        if (t === '/$' || t === '/&') return null;
      }
    }
    return e;
  }
  var Yu = null;
  function $f(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '/$' || n === '/&') {
          if (t === 0) return pt(e.nextSibling);
          t--;
        } else
          (n !== '$' && n !== '$!' && n !== '$?' && n !== '$~' && n !== '&') ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Bf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === '$' || n === '$!' || n === '$?' || n === '$~' || n === '&') {
          if (t === 0) return e;
          t--;
        } else (n !== '/$' && n !== '/&') || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function qf(e, t, n) {
    switch (((t = Na(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e)) throw Error(f(452));
        return e;
      case 'head':
        if (((e = t.head), !e)) throw Error(f(453));
        return e;
      case 'body':
        if (((e = t.body), !e)) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  function pr(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Xa(e);
  }
  var mt = new Map(),
    Vf = new Set();
  function za(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Kt = C.d;
  C.d = { f: _m, r: Tm, D: Pm, C: Lm, L: jm, m: Om, X: Rm, S: Am, M: Mm };
  function _m() {
    var e = Kt.f(),
      t = va();
    return e || t;
  }
  function Tm(e) {
    var t = Hn(e);
    t !== null && t.tag === 5 && t.type === 'form' ? ic(t) : Kt.r(e);
  }
  var xl = typeof document > 'u' ? null : document;
  function Hf(e, t, n) {
    var l = xl;
    if (l && typeof t == 'string' && t) {
      var r = gt(t);
      ((r = 'link[rel="' + e + '"][href="' + r + '"]'),
        typeof n == 'string' && (r += '[crossorigin="' + n + '"]'),
        Vf.has(r) ||
          (Vf.add(r),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(r) === null &&
            ((t = l.createElement('link')),
            je(t, 'link', e),
            Ne(t),
            l.head.appendChild(t))));
    }
  }
  function Pm(e) {
    (Kt.D(e), Hf('dns-prefetch', e, null));
  }
  function Lm(e, t) {
    (Kt.C(e, t), Hf('preconnect', e, t));
  }
  function jm(e, t, n) {
    Kt.L(e, t, n);
    var l = xl;
    if (l && e && t) {
      var r = 'link[rel="preload"][as="' + gt(t) + '"]';
      t === 'image' && n && n.imageSrcSet
        ? ((r += '[imagesrcset="' + gt(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == 'string' &&
            (r += '[imagesizes="' + gt(n.imageSizes) + '"]'))
        : (r += '[href="' + gt(e) + '"]');
      var a = r;
      switch (t) {
        case 'style':
          a = El(e);
          break;
        case 'script':
          a = Cl(e);
      }
      mt.has(a) ||
        ((e = A(
          {
            rel: 'preload',
            href: t === 'image' && n && n.imageSrcSet ? void 0 : e,
            as: t,
          },
          n,
        )),
        mt.set(a, e),
        l.querySelector(r) !== null ||
          (t === 'style' && l.querySelector(mr(a))) ||
          (t === 'script' && l.querySelector(hr(a))) ||
          ((t = l.createElement('link')),
          je(t, 'link', e),
          Ne(t),
          l.head.appendChild(t)));
    }
  }
  function Om(e, t) {
    Kt.m(e, t);
    var n = xl;
    if (n && e) {
      var l = t && typeof t.as == 'string' ? t.as : 'script',
        r =
          'link[rel="modulepreload"][as="' + gt(l) + '"][href="' + gt(e) + '"]',
        a = r;
      switch (l) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          a = Cl(e);
      }
      if (
        !mt.has(a) &&
        ((e = A({ rel: 'modulepreload', href: e }, t)),
        mt.set(a, e),
        n.querySelector(r) === null)
      ) {
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (n.querySelector(hr(a))) return;
        }
        ((l = n.createElement('link')),
          je(l, 'link', e),
          Ne(l),
          n.head.appendChild(l));
      }
    }
  }
  function Am(e, t, n) {
    Kt.S(e, t, n);
    var l = xl;
    if (l && e) {
      var r = Wn(l).hoistableStyles,
        a = El(e);
      t = t || 'default';
      var i = r.get(a);
      if (!i) {
        var u = { loading: 0, preload: null };
        if ((i = l.querySelector(mr(a)))) u.loading = 5;
        else {
          ((e = A({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
            (n = mt.get(a)) && Gu(e, n));
          var o = (i = l.createElement('link'));
          (Ne(o),
            je(o, 'link', e),
            (o._p = new Promise(function (m, y) {
              ((o.onload = m), (o.onerror = y));
            })),
            o.addEventListener('load', function () {
              u.loading |= 1;
            }),
            o.addEventListener('error', function () {
              u.loading |= 2;
            }),
            (u.loading |= 4),
            _a(i, t, l));
        }
        ((i = { type: 'stylesheet', instance: i, count: 1, state: u }),
          r.set(a, i));
      }
    }
  }
  function Rm(e, t) {
    Kt.X(e, t);
    var n = xl;
    if (n && e) {
      var l = Wn(n).hoistableScripts,
        r = Cl(e),
        a = l.get(r);
      a ||
        ((a = n.querySelector(hr(r))),
        a ||
          ((e = A({ src: e, async: !0 }, t)),
          (t = mt.get(r)) && Xu(e, t),
          (a = n.createElement('script')),
          Ne(a),
          je(a, 'link', e),
          n.head.appendChild(a)),
        (a = { type: 'script', instance: a, count: 1, state: null }),
        l.set(r, a));
    }
  }
  function Mm(e, t) {
    Kt.M(e, t);
    var n = xl;
    if (n && e) {
      var l = Wn(n).hoistableScripts,
        r = Cl(e),
        a = l.get(r);
      a ||
        ((a = n.querySelector(hr(r))),
        a ||
          ((e = A({ src: e, async: !0, type: 'module' }, t)),
          (t = mt.get(r)) && Xu(e, t),
          (a = n.createElement('script')),
          Ne(a),
          je(a, 'link', e),
          n.head.appendChild(a)),
        (a = { type: 'script', instance: a, count: 1, state: null }),
        l.set(r, a));
    }
  }
  function Wf(e, t, n, l) {
    var r = (r = q.current) ? za(r) : null;
    if (!r) throw Error(f(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((t = El(n.href)),
            (n = Wn(r).hoistableStyles),
            (l = n.get(t)),
            l ||
              ((l = { type: 'style', instance: null, count: 0, state: null }),
              n.set(t, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          n.rel === 'stylesheet' &&
          typeof n.href == 'string' &&
          typeof n.precedence == 'string'
        ) {
          e = El(n.href);
          var a = Wn(r).hoistableStyles,
            i = a.get(e);
          if (
            (i ||
              ((r = r.ownerDocument || r),
              (i = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              a.set(e, i),
              (a = r.querySelector(mr(e))) &&
                !a._p &&
                ((i.instance = a), (i.state.loading = 5)),
              mt.has(e) ||
                ((n = {
                  rel: 'preload',
                  as: 'style',
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                mt.set(e, n),
                a || Dm(r, e, n, i.state))),
            t && l === null)
          )
            throw Error(f(528, ''));
          return i;
        }
        if (t && l !== null) throw Error(f(529, ''));
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' &&
          t &&
          typeof t != 'function' &&
          typeof t != 'symbol'
            ? ((t = Cl(n)),
              (n = Wn(r).hoistableScripts),
              (l = n.get(t)),
              l ||
                ((l = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(t, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, e));
    }
  }
  function El(e) {
    return 'href="' + gt(e) + '"';
  }
  function mr(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Qf(e) {
    return A({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Dm(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = 1)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= 1);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= 2);
        }),
        je(t, 'link', n),
        Ne(t),
        e.head.appendChild(t));
  }
  function Cl(e) {
    return '[src="' + gt(e) + '"]';
  }
  function hr(e) {
    return 'script[async]' + e;
  }
  function Kf(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + gt(n.href) + '"]');
          if (l) return ((t.instance = l), Ne(l), l);
          var r = A({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Ne(l),
            je(l, 'style', r),
            _a(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          r = El(n.href);
          var a = e.querySelector(mr(r));
          if (a) return ((t.state.loading |= 4), (t.instance = a), Ne(a), a);
          ((l = Qf(n)),
            (r = mt.get(r)) && Gu(l, r),
            (a = (e.ownerDocument || e).createElement('link')),
            Ne(a));
          var i = a;
          return (
            (i._p = new Promise(function (u, o) {
              ((i.onload = u), (i.onerror = o));
            })),
            je(a, 'link', l),
            (t.state.loading |= 4),
            _a(a, n.precedence, e),
            (t.instance = a)
          );
        case 'script':
          return (
            (a = Cl(n.src)),
            (r = e.querySelector(hr(a)))
              ? ((t.instance = r), Ne(r), r)
              : ((l = n),
                (r = mt.get(a)) && ((l = A({}, n)), Xu(l, r)),
                (e = e.ownerDocument || e),
                (r = e.createElement('script')),
                Ne(r),
                je(r, 'link', l),
                e.head.appendChild(r),
                (t.instance = r))
          );
        case 'void':
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & 4) === 0 &&
        ((l = t.instance), (t.state.loading |= 4), _a(l, n.precedence, e));
    return t.instance;
  }
  function _a(e, t, n) {
    for (
      var l = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        r = l.length ? l[l.length - 1] : null,
        a = r,
        i = 0;
      i < l.length;
      i++
    ) {
      var u = l[i];
      if (u.dataset.precedence === t) a = u;
      else if (a !== r) break;
    }
    a
      ? a.parentNode.insertBefore(e, a.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function Gu(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Xu(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var Ta = null;
  function Yf(e, t, n) {
    if (Ta === null) {
      var l = new Map(),
        r = (Ta = new Map());
      r.set(n, l);
    } else ((r = Ta), (l = r.get(n)), l || ((l = new Map()), r.set(n, l)));
    if (l.has(e)) return l;
    for (
      l.set(e, null), n = n.getElementsByTagName(e), r = 0;
      r < n.length;
      r++
    ) {
      var a = n[r];
      if (
        !(
          a[Ll] ||
          a[_e] ||
          (e === 'link' && a.getAttribute('rel') === 'stylesheet')
        ) &&
        a.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var i = a.getAttribute(t) || '';
        i = e + i;
        var u = l.get(i);
        u ? u.push(a) : l.set(i, [a]);
      }
    }
    return l;
  }
  function Gf(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        n,
        t === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function Im(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof t.precedence != 'string' ||
          typeof t.href != 'string' ||
          t.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.disabled),
              typeof t.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          t.async &&
          typeof t.async != 'function' &&
          typeof t.async != 'symbol' &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Xf(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function Fm(e, t, n, l) {
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var r = El(l.href),
          a = t.querySelector(mr(r));
        if (a) {
          ((t = a._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (e.count++, (e = Pa.bind(e)), t.then(e, e)),
            (n.state.loading |= 4),
            (n.instance = a),
            Ne(a));
          return;
        }
        ((a = t.ownerDocument || t),
          (l = Qf(l)),
          (r = mt.get(r)) && Gu(l, r),
          (a = a.createElement('link')),
          Ne(a));
        var i = a;
        ((i._p = new Promise(function (u, o) {
          ((i.onload = u), (i.onerror = o));
        })),
          je(a, 'link', l),
          (n.instance = a));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (e.count++,
          (n = Pa.bind(e)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  var Zu = 0;
  function Um(e, t) {
    return (
      e.stylesheets && e.count === 0 && ja(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (n) {
            var l = setTimeout(function () {
              if ((e.stylesheets && ja(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                ((e.unsuspend = null), a());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Zu === 0 && (Zu = 62500 * km());
            var r = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && ja(e, e.stylesheets), e.unsuspend))
                ) {
                  var a = e.unsuspend;
                  ((e.unsuspend = null), a());
                }
              },
              (e.imgBytes > Zu ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = n),
              function () {
                ((e.unsuspend = null), clearTimeout(l), clearTimeout(r));
              }
            );
          }
        : null
    );
  }
  function Pa() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ja(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var La = null;
  function ja(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (La = new Map()),
        t.forEach($m, e),
        (La = null),
        Pa.call(e)));
  }
  function $m(e, t) {
    if (!(t.state.loading & 4)) {
      var n = La.get(e);
      if (n) var l = n.get(null);
      else {
        ((n = new Map()), La.set(e, n));
        for (
          var r = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            a = 0;
          a < r.length;
          a++
        ) {
          var i = r[a];
          (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
            (n.set(i.dataset.precedence, i), (l = i));
        }
        l && n.set(null, l);
      }
      ((r = t.instance),
        (i = r.getAttribute('data-precedence')),
        (a = n.get(i) || l),
        a === l && n.set(null, r),
        n.set(i, r),
        this.count++,
        (l = Pa.bind(this)),
        r.addEventListener('load', l),
        r.addEventListener('error', l),
        a
          ? a.parentNode.insertBefore(r, a.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(r, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var gr = {
    $$typeof: Oe,
    Provider: null,
    Consumer: null,
    _currentValue: M,
    _currentValue2: M,
    _threadCount: 0,
  };
  function Bm(e, t, n, l, r, a, i, u, o) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Qa(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Qa(0)),
      (this.hiddenUpdates = Qa(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = r),
      (this.onCaughtError = a),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = o),
      (this.incompleteTransitions = new Map()));
  }
  function Zf(e, t, n, l, r, a, i, u, o, m, y, S) {
    return (
      (e = new Bm(e, t, n, i, o, m, y, S, u)),
      (t = 1),
      a === !0 && (t |= 24),
      (a = et(3, null, null, t)),
      (e.current = a),
      (a.stateNode = e),
      (t = Li()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (a.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Ri(a),
      e
    );
  }
  function Jf(e) {
    return e ? ((e = nl), e) : nl;
  }
  function ed(e, t, n, l, r, a) {
    ((r = Jf(r)),
      l.context === null ? (l.context = r) : (l.pendingContext = r),
      (l = rn(t)),
      (l.payload = { element: n }),
      (a = a === void 0 ? null : a),
      a !== null && (l.callback = a),
      (n = an(e, l, t)),
      n !== null && (Ke(n, e, t), Kl(n, e, t)));
  }
  function td(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ju(e, t) {
    (td(e, t), (e = e.alternate) && td(e, t));
  }
  function nd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Tn(e, 67108864);
      (t !== null && Ke(t, e, 67108864), Ju(e, 67108864));
    }
  }
  function ld(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = at();
      t = Ka(t);
      var n = Tn(e, t);
      (n !== null && Ke(n, e, t), Ju(e, t));
    }
  }
  var Oa = !0;
  function qm(e, t, n, l) {
    var r = v.T;
    v.T = null;
    var a = C.p;
    try {
      ((C.p = 2), eo(e, t, n, l));
    } finally {
      ((C.p = a), (v.T = r));
    }
  }
  function Vm(e, t, n, l) {
    var r = v.T;
    v.T = null;
    var a = C.p;
    try {
      ((C.p = 8), eo(e, t, n, l));
    } finally {
      ((C.p = a), (v.T = r));
    }
  }
  function eo(e, t, n, l) {
    if (Oa) {
      var r = to(l);
      if (r === null) (Uu(e, t, l, Aa, n), ad(e, l));
      else if (Wm(r, e, t, n, l)) l.stopPropagation();
      else if ((ad(e, l), t & 4 && -1 < Hm.indexOf(e))) {
        for (; r !== null; ) {
          var a = Hn(r);
          if (a !== null)
            switch (a.tag) {
              case 3:
                if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                  var i = En(a.pendingLanes);
                  if (i !== 0) {
                    var u = a;
                    for (u.pendingLanes |= 2, u.entangledLanes |= 2; i; ) {
                      var o = 1 << (31 - Ze(i));
                      ((u.entanglements[1] |= o), (i &= ~o));
                    }
                    (_t(a), (ee & 6) === 0 && ((ga = Ge() + 500), cr(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((u = Tn(a, 2)), u !== null && Ke(u, a, 2), va(), Ju(a, 2));
            }
          if (((a = to(l)), a === null && Uu(e, t, l, Aa, n), a === r)) break;
          r = a;
        }
        r !== null && l.stopPropagation();
      } else Uu(e, t, l, null, n);
    }
  }
  function to(e) {
    return ((e = li(e)), no(e));
  }
  var Aa = null;
  function no(e) {
    if (((Aa = null), (e = Vn(e)), e !== null)) {
      var t = D(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = X(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = ye(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Aa = e), null);
  }
  function rd(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (Pd()) {
          case co:
            return 2;
          case fo:
            return 8;
          case xr:
          case Ld:
            return 32;
          case po:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lo = !1,
    yn = null,
    vn = null,
    bn = null,
    yr = new Map(),
    vr = new Map(),
    kn = [],
    Hm =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function ad(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        yn = null;
        break;
      case 'dragenter':
      case 'dragleave':
        vn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        bn = null;
        break;
      case 'pointerover':
      case 'pointerout':
        yr.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        vr.delete(t.pointerId);
    }
  }
  function br(e, t, n, l, r, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: a,
          targetContainers: [r],
        }),
        t !== null && ((t = Hn(t)), t !== null && nd(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        r !== null && t.indexOf(r) === -1 && t.push(r),
        e);
  }
  function Wm(e, t, n, l, r) {
    switch (t) {
      case 'focusin':
        return ((yn = br(yn, e, t, n, l, r)), !0);
      case 'dragenter':
        return ((vn = br(vn, e, t, n, l, r)), !0);
      case 'mouseover':
        return ((bn = br(bn, e, t, n, l, r)), !0);
      case 'pointerover':
        var a = r.pointerId;
        return (yr.set(a, br(yr.get(a) || null, e, t, n, l, r)), !0);
      case 'gotpointercapture':
        return (
          (a = r.pointerId),
          vr.set(a, br(vr.get(a) || null, e, t, n, l, r)),
          !0
        );
    }
    return !1;
  }
  function id(e) {
    var t = Vn(e.target);
    if (t !== null) {
      var n = D(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = X(n)), t !== null)) {
            ((e.blockedOn = t),
              bo(e.priority, function () {
                ld(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = ye(n)), t !== null)) {
            ((e.blockedOn = t),
              bo(e.priority, function () {
                ld(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ra(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = to(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n);
        ((ni = l), n.target.dispatchEvent(l), (ni = null));
      } else return ((t = Hn(n)), t !== null && nd(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function ud(e, t, n) {
    Ra(e) && n.delete(t);
  }
  function Qm() {
    ((lo = !1),
      yn !== null && Ra(yn) && (yn = null),
      vn !== null && Ra(vn) && (vn = null),
      bn !== null && Ra(bn) && (bn = null),
      yr.forEach(ud),
      vr.forEach(ud));
  }
  function Ma(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      lo ||
        ((lo = !0),
        E.unstable_scheduleCallback(E.unstable_NormalPriority, Qm)));
  }
  var Da = null;
  function od(e) {
    Da !== e &&
      ((Da = e),
      E.unstable_scheduleCallback(E.unstable_NormalPriority, function () {
        Da === e && (Da = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            r = e[t + 2];
          if (typeof l != 'function') {
            if (no(l || n) === null) continue;
            break;
          }
          var a = Hn(n);
          a !== null &&
            (e.splice(t, 3),
            (t -= 3),
            tu(a, { pending: !0, data: r, method: n.method, action: l }, l, r));
        }
      }));
  }
  function Nl(e) {
    function t(o) {
      return Ma(o, e);
    }
    (yn !== null && Ma(yn, e),
      vn !== null && Ma(vn, e),
      bn !== null && Ma(bn, e),
      yr.forEach(t),
      vr.forEach(t));
    for (var n = 0; n < kn.length; n++) {
      var l = kn[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < kn.length && ((n = kn[0]), n.blockedOn === null); )
      (id(n), n.blockedOn === null && kn.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var r = n[l],
          a = n[l + 1],
          i = r[Be] || null;
        if (typeof a == 'function') i || od(n);
        else if (i) {
          var u = null;
          if (a && a.hasAttribute('formAction')) {
            if (((r = a), (i = a[Be] || null))) u = i.formAction;
            else if (no(r) !== null) continue;
          } else u = i.action;
          (typeof u == 'function' ? (n[l + 1] = u) : (n.splice(l, 3), (l -= 3)),
            od(n));
        }
      }
  }
  function sd() {
    function e(a) {
      a.canIntercept &&
        a.info === 'react-transition' &&
        a.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (r = i);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (r !== null && (r(), (r = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var a = navigation.currentEntry;
        a &&
          a.url != null &&
          navigation.navigate(a.url, {
            state: a.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var l = !1,
        r = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            r !== null && (r(), (r = null)));
        }
      );
    }
  }
  function ro(e) {
    this._internalRoot = e;
  }
  ((Ia.prototype.render = ro.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var n = t.current,
        l = at();
      ed(n, l, e, t, null, null);
    }),
    (Ia.prototype.unmount = ro.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (ed(e.current, 2, null, e, null, null), va(), (t[qn] = null));
        }
      }));
  function Ia(e) {
    this._internalRoot = e;
  }
  Ia.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = vo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < kn.length && t !== 0 && t < kn[n].priority; n++);
      (kn.splice(n, 0, e), n === 0 && id(e));
    }
  };
  var cd = B.version;
  if (cd !== '19.2.0') throw Error(f(527, cd, '19.2.0'));
  C.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == 'function'
        ? Error(f(188))
        : ((e = Object.keys(e).join(',')), Error(f(268, e)));
    return (
      (e = x(t)),
      (e = e !== null ? G(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Km = {
    bundleType: 0,
    version: '19.2.0',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: v,
    reconcilerVersion: '19.2.0',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Fa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fa.isDisabled && Fa.supportsFiber)
      try {
        ((_l = Fa.inject(Km)), (Xe = Fa));
      } catch {}
  }
  return (
    (Sr.createRoot = function (e, t) {
      if (!z(e)) throw Error(f(299));
      var n = !1,
        l = '',
        r = gc,
        a = yc,
        i = vc;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (r = t.onUncaughtError),
          t.onCaughtError !== void 0 && (a = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Zf(e, 1, !1, null, null, n, l, null, r, a, i, sd)),
        (e[qn] = t.current),
        Fu(e),
        new ro(t)
      );
    }),
    (Sr.hydrateRoot = function (e, t, n) {
      if (!z(e)) throw Error(f(299));
      var l = !1,
        r = '',
        a = gc,
        i = yc,
        u = vc,
        o = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (a = n.onUncaughtError),
          n.onCaughtError !== void 0 && (i = n.onCaughtError),
          n.onRecoverableError !== void 0 && (u = n.onRecoverableError),
          n.formState !== void 0 && (o = n.formState)),
        (t = Zf(e, 1, !0, t, n ?? null, l, r, o, a, i, u, sd)),
        (t.context = Jf(null)),
        (n = t.current),
        (l = at()),
        (l = Ka(l)),
        (r = rn(l)),
        (r.callback = null),
        an(n, r, l),
        (n = l),
        (t.current.lanes = n),
        Pl(t, n),
        _t(t),
        (e[qn] = t.current),
        Fu(e),
        new Ia(t)
      );
    }),
    (Sr.version = '19.2.0'),
    Sr
  );
}
var Ed;
function ah() {
  if (Ed) return ao.exports;
  Ed = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (B) {
        console.error(B);
      }
  }
  return (E(), (ao.exports = rh()), ao.exports);
}
var ih = ah();
const uh = Cd(ih),
  oh = () =>
    k.jsx('header', {
      className: 'bg-blue-600 text-white shadow-md',
      children: k.jsxs('div', {
        className: 'container mx-auto px-6 py-4',
        children: [
          k.jsx('h1', {
            className: 'text-3xl font-bold',
            children: 'Estadísticos al Descubierto: Misión Ecuador',
          }),
          k.jsx('p', {
            className: 'mt-2 text-lg',
            children: 'Una aventura de aprendizaje en medicina y datos',
          }),
        ],
      }),
    }),
  sh = () =>
    k.jsxs('section', {
      className: 'text-center py-12',
      children: [
        k.jsx('h2', {
          className: 'text-4xl font-bold mb-4',
          children: '¡Bienvenido a la Misión!',
        }),
        k.jsx('p', {
          className: 'text-xl text-gray-700 max-w-3xl mx-auto',
          children:
            'Has sido seleccionado para una misión crucial en el corazón de Ecuador. Como profesional de la salud, te enfrentarás a desafíos que pondrán a prueba tu razonamiento clínico y tus habilidades para interpretar datos. Tu aventura para desentrañar los misterios de la salud comunitaria empieza ahora.',
        }),
      ],
    }),
  ch = {
    teal: {
      bg: 'bg-teal-500',
      hoverBg: 'bg-teal-600',
      iconBg: 'bg-teal-100',
      iconText: 'text-teal-600',
    },
    indigo: {
      bg: 'bg-indigo-500',
      hoverBg: 'bg-indigo-600',
      iconBg: 'bg-indigo-100',
      iconText: 'text-indigo-600',
    },
    amber: {
      bg: 'bg-amber-500',
      hoverBg: 'bg-amber-600',
      iconBg: 'bg-amber-100',
      iconText: 'text-amber-600',
    },
    purple: {
      bg: 'bg-purple-500',
      hoverBg: 'bg-purple-600',
      iconBg: 'bg-purple-100',
      iconText: 'text-purple-600',
    },
  },
  Ua = ({
    icon: E,
    title: B,
    description: O,
    buttonText: f,
    onButtonClick: z,
    colorTheme: D,
  }) => {
    const X = ch[D];
    return k.jsxs('div', {
      className: 'bg-white rounded-lg shadow-lg overflow-hidden flex flex-col',
      children: [
        k.jsxs('div', {
          className: 'p-6 flex-grow',
          children: [
            k.jsx('div', {
              className: `w-16 h-16 rounded-full ${X.iconBg} flex items-center justify-center mb-4`,
              children: k.jsx('span', {
                className: `text-3xl ${X.iconText}`,
                children: E,
              }),
            }),
            k.jsx('h3', { className: 'text-2xl font-bold mb-2', children: B }),
            k.jsx('p', { className: 'text-gray-600', children: O }),
          ],
        }),
        k.jsx('div', {
          className: 'px-6 pb-6',
          children: k.jsx('button', {
            onClick: z,
            className: `w-full ${X.bg} text-white font-bold py-3 px-4 rounded-lg hover:${X.hoverBg} transition-colors duration-300`,
            children: f,
          }),
        }),
      ],
    });
  },
  fh = ({ isOpen: E, onClose: B }) =>
    E
      ? k.jsx('div', {
          className:
            'fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4',
          children: k.jsxs('div', {
            className: 'bg-white rounded-lg shadow-2xl max-w-2xl w-full',
            children: [
              k.jsxs('div', {
                className: 'p-8',
                children: [
                  k.jsx('h2', {
                    className: 'text-3xl font-bold mb-4 text-teal-600',
                    children: 'Misión: Diagnóstico Comunitario',
                  }),
                  k.jsxs('div', {
                    className: 'text-gray-700 space-y-4',
                    children: [
                      k.jsxs('p', {
                        children: [
                          k.jsx('strong', { children: 'Escenario:' }),
                          ' Han sido asignados a un centro de salud rural en la provincia de Chimborazo, una región con una rica herencia cultural y desafíos de salud únicos. La población local depende de su pericia para comprender y abordar sus problemas de salud más apremiantes.',
                        ],
                      }),
                      k.jsxs('p', {
                        children: [
                          k.jsx('strong', { children: 'Objetivo:' }),
                          ' Su primera tarea es realizar un diagnóstico de salud comunitaria centrado en Enfermedades Crónicas No Transmisibles (ECNT). El Ministerio de Salud Pública ha recopilado datos de prevalencia, pero necesitan ser analizados para revelar las historias que esconden.',
                        ],
                      }),
                      k.jsxs('p', {
                        children: [
                          k.jsx('strong', { children: 'Herramientas:' }),
                          ' Se les ha proporcionado acceso a una hoja de cálculo de Google Sheets con los datos anonimizados. Deberán usar sus habilidades de análisis de datos para:',
                        ],
                      }),
                      k.jsxs('ul', {
                        className: 'list-disc list-inside space-y-2 pl-4',
                        children: [
                          k.jsx('li', {
                            children:
                              'Calcular la prevalencia de hipertensión, diabetes y obesidad.',
                          }),
                          k.jsx('li', {
                            children:
                              'Identificar los grupos de edad y género más afectados.',
                          }),
                          k.jsx('li', {
                            children:
                              'Visualizar los datos para comunicar sus hallazgos de manera efectiva.',
                          }),
                        ],
                      }),
                      k.jsx('p', {
                        children:
                          'Esta misión es el primer paso para desarrollar intervenciones de salud pública que realmente marquen la diferencia en la comunidad.',
                      }),
                    ],
                  }),
                ],
              }),
              k.jsx('div', {
                className: 'bg-gray-100 px-8 py-4 text-right',
                children: k.jsx('button', {
                  onClick: B,
                  className:
                    'bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300',
                  children: 'Cerrar',
                }),
              }),
            ],
          }),
        })
      : null,
  dh = ({ isOpen: E, onClose: B }) => {
    const [O, f] = St.useState(55),
      [z, D] = St.useState(50),
      [X, ye] = St.useState(130),
      [L, x] = St.useState(120),
      [G, A] = St.useState(null),
      fe = () => {
        let oe = 0;
        (O > 60 && (oe += 2),
          z < 40 && (oe += 1),
          X > 160 && (oe += 1),
          L > 140 && (oe += 2),
          A(oe * 5));
      };
    return E
      ? k.jsx('div', {
          className:
            'fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4',
          children: k.jsxs('div', {
            className: 'bg-white rounded-lg shadow-2xl max-w-2xl w-full',
            children: [
              k.jsxs('div', {
                className: 'p-8',
                children: [
                  k.jsx('h2', {
                    className: 'text-3xl font-bold mb-4 text-indigo-600',
                    children:
                      'Herramienta: Calculadora de Riesgo Cardiovascular',
                  }),
                  k.jsx('p', {
                    className: 'text-gray-700 mb-6',
                    children:
                      'Utilice esta herramienta simplificada para estimar el riesgo cardiovascular a 10 años. Ingrese los datos del paciente para obtener una evaluación basada en factores clave.',
                  }),
                  k.jsxs('div', {
                    className: 'grid grid-cols-1 md:grid-cols-2 gap-6',
                    children: [
                      k.jsxs('div', {
                        children: [
                          k.jsx('label', {
                            className: 'block text-gray-700 font-bold mb-2',
                            children: 'Edad',
                          }),
                          k.jsx('input', {
                            type: 'number',
                            value: O,
                            onChange: (oe) => f(parseInt(oe.target.value)),
                            className: 'w-full p-2 border rounded',
                          }),
                        ],
                      }),
                      k.jsxs('div', {
                        children: [
                          k.jsx('label', {
                            className: 'block text-gray-700 font-bold mb-2',
                            children: 'Colesterol HDL (mg/dL)',
                          }),
                          k.jsx('input', {
                            type: 'number',
                            value: z,
                            onChange: (oe) => D(parseInt(oe.target.value)),
                            className: 'w-full p-2 border rounded',
                          }),
                        ],
                      }),
                      k.jsxs('div', {
                        children: [
                          k.jsx('label', {
                            className: 'block text-gray-700 font-bold mb-2',
                            children: 'Colesterol LDL (mg/dL)',
                          }),
                          k.jsx('input', {
                            type: 'number',
                            value: X,
                            onChange: (oe) => ye(parseInt(oe.target.value)),
                            className: 'w-full p-2 border rounded',
                          }),
                        ],
                      }),
                      k.jsxs('div', {
                        children: [
                          k.jsx('label', {
                            className: 'block text-gray-700 font-bold mb-2',
                            children: 'Presión Arterial Sistólica (mmHg)',
                          }),
                          k.jsx('input', {
                            type: 'number',
                            value: L,
                            onChange: (oe) => x(parseInt(oe.target.value)),
                            className: 'w-full p-2 border rounded',
                          }),
                        ],
                      }),
                    ],
                  }),
                  k.jsx('div', {
                    className: 'text-center mt-8',
                    children: k.jsx('button', {
                      onClick: fe,
                      className:
                        'bg-indigo-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-indigo-600 transition-colors duration-300',
                      children: 'Calcular Riesgo',
                    }),
                  }),
                  G !== null &&
                    k.jsxs('div', {
                      className:
                        'mt-8 p-6 bg-indigo-100 rounded-lg text-center',
                      children: [
                        k.jsxs('h3', {
                          className: 'text-2xl font-bold text-indigo-800',
                          children: ['Riesgo Estimado: ', G, '%'],
                        }),
                        k.jsx('p', {
                          className: 'text-indigo-700 mt-2',
                          children:
                            'Este es un valor de referencia. Consulte las guías clínicas para una evaluación completa.',
                        }),
                      ],
                    }),
                ],
              }),
              k.jsx('div', {
                className: 'bg-gray-100 px-8 py-4 text-right',
                children: k.jsx('button', {
                  onClick: B,
                  className:
                    'bg-gray-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-gray-600 transition-colors duration-300',
                  children: 'Cerrar',
                }),
              }),
            ],
          }),
        })
      : null;
  },
  ph = ({ isOpen: E, onClose: B }) => {
    const [O, f] = St.useState(null),
      [z, D] = St.useState(!1),
      X = 'confirmacion',
      ye = (L) => {
        (f(L), D(!0));
      };
    return E
      ? k.jsx('div', {
          className:
            'fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4',
          children: k.jsxs('div', {
            className: 'bg-white rounded-lg shadow-2xl max-w-2xl w-full',
            children: [
              k.jsxs('div', {
                className: 'p-8',
                children: [
                  k.jsx('h2', {
                    className: 'text-3xl font-bold mb-4 text-amber-600',
                    children: 'Desafío: El Sesgo Oculto',
                  }),
                  k.jsxs('div', {
                    className: 'text-gray-700 space-y-4',
                    children: [
                      k.jsx('p', {
                        className: 'font-bold',
                        children: 'Caso Clínico:',
                      }),
                      k.jsx('p', {
                        children:
                          'Un paciente de 45 años, fumador, se presenta con dolor torácico atípico. El médico de urgencias, al ver el antecedente de tabaquismo, rápidamente sospecha de un síndrome coronario agudo y se enfoca en las pruebas cardíacas, minimizando otros posibles diagnósticos como el reflujo gastroesofágico o la costocondritis, a pesar de que el dolor se alivia con antiácidos.',
                      }),
                      k.jsx('p', {
                        className: 'font-bold mt-4',
                        children:
                          '¿Qué sesgo cognitivo es más evidente en este caso?',
                      }),
                      k.jsxs('div', {
                        className: 'space-y-3',
                        children: [
                          k.jsxs('button', {
                            onClick: () => ye('anclaje'),
                            className: `block w-full text-left p-3 rounded-lg border ${O === 'anclaje' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Sesgo de Anclaje:',
                              }),
                              ' Confiar demasiado en la primera información obtenida.',
                            ],
                          }),
                          k.jsxs('button', {
                            onClick: () => ye('confirmacion'),
                            className: `block w-full text-left p-3 rounded-lg border ${O === 'confirmacion' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Sesgo de Confirmación:',
                              }),
                              ' Buscar e interpretar información que confirma las propias creencias preexistentes.',
                            ],
                          }),
                          k.jsxs('button', {
                            onClick: () => ye('disponibilidad'),
                            className: `block w-full text-left p-3 rounded-lg border ${O === 'disponibilidad' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Heurístico de Disponibilidad:',
                              }),
                              ' Sobreestimar la probabilidad de eventos que son más fáciles de recordar.',
                            ],
                          }),
                        ],
                      }),
                      z &&
                        k.jsx('div', {
                          className: `mt-4 p-4 rounded-lg ${O === X ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                          children:
                            O === X
                              ? k.jsxs('p', {
                                  children: [
                                    k.jsx('strong', { children: '¡Correcto!' }),
                                    ' El médico se centró en confirmar su sospecha inicial (problema cardíaco) debido al tabaquismo, ignorando evidencia que apuntaba a otras causas.',
                                  ],
                                })
                              : k.jsxs('p', {
                                  children: [
                                    k.jsx('strong', {
                                      children: 'Inténtalo de nuevo.',
                                    }),
                                    ' Si bien otros sesgos pueden estar presentes, el más prominente aquí es la tendencia a buscar y favorecer información que confirma una hipótesis inicial.',
                                  ],
                                }),
                        }),
                    ],
                  }),
                ],
              }),
              k.jsx('div', {
                className: 'bg-gray-100 px-8 py-4 text-right',
                children: k.jsx('button', {
                  onClick: B,
                  className:
                    'bg-amber-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-300',
                  children: 'Cerrar',
                }),
              }),
            ],
          }),
        })
      : null;
  },
  mh = ({ isOpen: E, onClose: B }) =>
    E
      ? k.jsx('div', {
          className:
            'fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4',
          children: k.jsxs('div', {
            className: 'bg-white rounded-lg shadow-2xl max-w-2xl w-full',
            children: [
              k.jsxs('div', {
                className: 'p-8',
                children: [
                  k.jsx('h2', {
                    className: 'text-3xl font-bold mb-6 text-purple-600',
                    children: 'Biblioteca de Recursos',
                  }),
                  k.jsxs('div', {
                    className: 'space-y-6',
                    children: [
                      k.jsxs('div', {
                        children: [
                          k.jsx('h3', {
                            className:
                              'text-2xl font-semibold mb-2 text-purple-800',
                            children: 'Razonamiento Clínico',
                          }),
                          k.jsx('p', {
                            className: 'text-gray-700',
                            children:
                              'El arte y la ciencia de pensar a través de un problema clínico. Incluye el razonamiento deductivo, inductivo y abductivo. La clave es la metacognición: pensar sobre cómo estás pensando.',
                          }),
                        ],
                      }),
                      k.jsxs('div', {
                        children: [
                          k.jsx('h3', {
                            className:
                              'text-2xl font-semibold mb-2 text-purple-800',
                            children: 'Estadística para Médicos',
                          }),
                          k.jsxs('ul', {
                            className:
                              'list-disc list-inside space-y-2 pl-4 text-gray-700',
                            children: [
                              k.jsxs('li', {
                                children: [
                                  k.jsx('strong', { children: 'Prevalencia:' }),
                                  ' La proporción de una población que tiene una enfermedad en un momento específico.',
                                ],
                              }),
                              k.jsxs('li', {
                                children: [
                                  k.jsx('strong', { children: 'Incidencia:' }),
                                  ' La tasa de nuevos casos de una enfermedad en un período de tiempo.',
                                ],
                              }),
                              k.jsxs('li', {
                                children: [
                                  k.jsx('strong', {
                                    children: 'Sensibilidad y Especificidad:',
                                  }),
                                  ' Medidas de la precisión de una prueba diagnóstica.',
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      k.jsxs('div', {
                        children: [
                          k.jsx('h3', {
                            className:
                              'text-2xl font-semibold mb-2 text-purple-800',
                            children: 'Sesgos Cognitivos Comunes',
                          }),
                          k.jsx('p', {
                            className: 'text-gray-700',
                            children:
                              'Atajos mentales que pueden llevar a errores diagnósticos. Reconocerlos es el primer paso para mitigarlos. Incluyen el sesgo de confirmación, anclaje, disponibilidad y más.',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              k.jsx('div', {
                className: 'bg-gray-100 px-8 py-4 text-right',
                children: k.jsx('button', {
                  onClick: B,
                  className:
                    'bg-purple-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-purple-600 transition-colors duration-300',
                  children: 'Cerrar',
                }),
              }),
            ],
          }),
        })
      : null,
  hh = () => {
    const [E, B] = St.useState(null),
      O = St.useCallback((z) => {
        B(z);
      }, []),
      f = St.useCallback(() => {
        B(null);
      }, []);
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx(oh, {}),
        k.jsxs('main', {
          className: 'container mx-auto px-6 py-8',
          children: [
            k.jsx(sh, {}),
            k.jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-8',
              children: [
                k.jsx(Ua, {
                  icon: '🎯',
                  title: 'Misión: Diagnóstico Comunitario',
                  description:
                    'Han sido asignados a un centro de salud rural en la provincia de Chimborazo. Su primera tarea es analizar los datos de prevalencia de ECNT. Usen Google Sheets para descubrir los secretos que esconden los números.',
                  buttonText: 'Iniciar Misión',
                  colorTheme: 'teal',
                  onButtonClick: () => O('mision'),
                }),
                k.jsx(Ua, {
                  icon: '💡',
                  title: 'Herramienta: Calculadora de Riesgo',
                  description:
                    'La GPC del MSP enfatiza la estratificación del riesgo cardiovascular. Utilicen esta herramienta simplificada para evaluar el riesgo de un paciente y entender cómo guiar las decisiones clínicas en la atención primaria.',
                  buttonText: 'Abrir Herramienta',
                  colorTheme: 'indigo',
                  onButtonClick: () => O('calculadora'),
                }),
                k.jsx(Ua, {
                  icon: '🧠',
                  title: 'Desafío: El Sesgo Oculto',
                  description:
                    'El cerebro usa atajos, pero en medicina, estos pueden llevar a errores. Analicen un caso clínico real y pongan a prueba su capacidad para identificar los sesgos cognitivos que podrían afectar el diagnóstico. ¿Están listos?',
                  buttonText: 'Empezar Desafío',
                  colorTheme: 'amber',
                  onButtonClick: () => O('sesgo'),
                }),
                k.jsx(Ua, {
                  icon: '📚',
                  title: 'Biblioteca de Recursos',
                  description:
                    'Explora los conceptos teóricos del razonamiento clínico, la estadística y los sesgos cognitivos que sustentan tu práctica.',
                  buttonText: 'Abrir Biblioteca',
                  colorTheme: 'purple',
                  onButtonClick: () => O('recursos'),
                }),
              ],
            }),
          ],
        }),
        k.jsx(fh, { isOpen: E === 'mision', onClose: f }),
        k.jsx(dh, { isOpen: E === 'calculadora', onClose: f }),
        k.jsx(ph, { isOpen: E === 'sesgo', onClose: f }),
        k.jsx(mh, { isOpen: E === 'recursos', onClose: f }),
      ],
    });
  },
  Nd = document.getElementById('root');
if (!Nd) throw new Error('Could not find root element to mount to');
const gh = uh.createRoot(Nd);
gh.render(k.jsx(Jm.StrictMode, { children: k.jsx(hh, {}) }));
