(function () {
  const q = document.createElement('link').relList;
  if (q && q.supports && q.supports('modulepreload')) return;
  for (const L of document.querySelectorAll('link[rel="modulepreload"]')) d(L);
  new MutationObserver((L) => {
    for (const $ of L)
      if ($.type === 'childList')
        for (const Y of $.addedNodes)
          Y.tagName === 'LINK' && Y.rel === 'modulepreload' && d(Y);
  }).observe(document, { childList: !0, subtree: !0 });
  function A(L) {
    const $ = {};
    return (
      L.integrity && ($.integrity = L.integrity),
      L.referrerPolicy && ($.referrerPolicy = L.referrerPolicy),
      L.crossOrigin === 'use-credentials'
        ? ($.credentials = 'include')
        : L.crossOrigin === 'anonymous'
          ? ($.credentials = 'omit')
          : ($.credentials = 'same-origin'),
      $
    );
  }
  function d(L) {
    if (L.ep) return;
    L.ep = !0;
    const $ = A(L);
    fetch(L.href, $);
  }
})();
(function () {
  const E = document.createElement('link').relList;
  if (E && E.supports && E.supports('modulepreload')) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) A(d);
  new MutationObserver((d) => {
    for (const L of d)
      if (L.type === 'childList')
        for (const $ of L.addedNodes)
          $.tagName === 'LINK' && $.rel === 'modulepreload' && A($);
  }).observe(document, { childList: !0, subtree: !0 });
  function q(d) {
    const L = {};
    return (
      d.integrity && (L.integrity = d.integrity),
      d.referrerPolicy && (L.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === 'use-credentials'
        ? (L.credentials = 'include')
        : d.crossOrigin === 'anonymous'
          ? (L.credentials = 'omit')
          : (L.credentials = 'same-origin'),
      L
    );
  }
  function A(d) {
    if (d.ep) return;
    d.ep = !0;
    const L = q(d);
    fetch(d.href, L);
  }
})();
function Cd(E) {
  return E && E.__esModule && Object.prototype.hasOwnProperty.call(E, 'default')
    ? E.default
    : E;
}
var fd = { exports: {} },
  ka = {};
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
  if (dd) return ka;
  dd = 1;
  var E = Symbol.for('react.transitional.element'),
    q = Symbol.for('react.fragment');
  function A(d, L, $) {
    var Y = null;
    if (
      ($ !== void 0 && (Y = '' + $),
      L.key !== void 0 && (Y = '' + L.key),
      'key' in L)
    ) {
      $ = {};
      for (var ye in L) ye !== 'key' && ($[ye] = L[ye]);
    } else $ = L;
    return (
      (L = $.ref),
      { $$typeof: E, type: d, key: Y, ref: L !== void 0 ? L : null, props: $ }
    );
  }
  return ((ka.Fragment = q), (ka.jsx = A), (ka.jsxs = A), ka);
}
var pd;
function Ym() {
  return (pd || ((pd = 1), (fd.exports = Gm())), fd.exports);
}
var k = Ym(),
  md = { exports: {} },
  M = {};
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
  if (hd) return M;
  hd = 1;
  var E = Symbol.for('react.transitional.element'),
    q = Symbol.for('react.portal'),
    A = Symbol.for('react.fragment'),
    d = Symbol.for('react.strict_mode'),
    L = Symbol.for('react.profiler'),
    $ = Symbol.for('react.consumer'),
    Y = Symbol.for('react.context'),
    ye = Symbol.for('react.forward_ref'),
    T = Symbol.for('react.suspense'),
    x = Symbol.for('react.memo'),
    G = Symbol.for('react.lazy'),
    j = Symbol.for('react.activity'),
    fe = Symbol.iterator;
  function se(c) {
    return c === null || typeof c != 'object'
      ? null
      : ((c = (fe && c[fe]) || c['@@iterator']),
        typeof c == 'function' ? c : null);
  }
  var De = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Re = Object.assign,
    Ln = {};
  function Xe(c, S, N) {
    ((this.props = c),
      (this.context = S),
      (this.refs = Ln),
      (this.updater = N || De));
  }
  ((Xe.prototype.isReactComponent = {}),
    (Xe.prototype.setState = function (c, S) {
      if (typeof c != 'object' && typeof c != 'function' && c != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, c, S, 'setState');
    }),
    (Xe.prototype.forceUpdate = function (c) {
      this.updater.enqueueForceUpdate(this, c, 'forceUpdate');
    }));
  function Gn() {}
  Gn.prototype = Xe.prototype;
  function je(c, S, N) {
    ((this.props = c),
      (this.context = S),
      (this.refs = Ln),
      (this.updater = N || De));
  }
  var un = (je.prototype = new Gn());
  ((un.constructor = je), Re(un, Xe.prototype), (un.isPureReactComponent = !0));
  var xn = Array.isArray;
  function Ie() {}
  var K = { H: null, A: null, T: null, S: null },
    $e = Object.prototype.hasOwnProperty;
  function En(c, S, N) {
    var _ = N.ref;
    return {
      $$typeof: E,
      type: c,
      key: S,
      ref: _ !== void 0 ? _ : null,
      props: N,
    };
  }
  function Br(c, S) {
    return En(c.type, S, c.props);
  }
  function Cn(c) {
    return typeof c == 'object' && c !== null && c.$$typeof === E;
  }
  function He(c) {
    var S = { '=': '=0', ':': '=2' };
    return (
      '$' +
      c.replace(/[=:]/g, function (N) {
        return S[N];
      })
    );
  }
  var Sr = /\/+/g;
  function Tn(c, S) {
    return typeof c == 'object' && c !== null && c.key != null
      ? He('' + c.key)
      : S.toString(36);
  }
  function gn(c) {
    switch (c.status) {
      case 'fulfilled':
        return c.value;
      case 'rejected':
        throw c.reason;
      default:
        switch (
          (typeof c.status == 'string'
            ? c.then(Ie, Ie)
            : ((c.status = 'pending'),
              c.then(
                function (S) {
                  c.status === 'pending' &&
                    ((c.status = 'fulfilled'), (c.value = S));
                },
                function (S) {
                  c.status === 'pending' &&
                    ((c.status = 'rejected'), (c.reason = S));
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
  function v(c, S, N, _, D) {
    var B = typeof c;
    (B === 'undefined' || B === 'boolean') && (c = null);
    var ne = !1;
    if (c === null) ne = !0;
    else
      switch (B) {
        case 'bigint':
        case 'string':
        case 'number':
          ne = !0;
          break;
        case 'object':
          switch (c.$$typeof) {
            case E:
            case q:
              ne = !0;
              break;
            case G:
              return ((ne = c._init), v(ne(c._payload), S, N, _, D));
          }
      }
    if (ne)
      return (
        (D = D(c)),
        (ne = _ === '' ? '.' + Tn(c, 0) : _),
        xn(D)
          ? ((N = ''),
            ne != null && (N = ne.replace(Sr, '$&/') + '/'),
            v(D, S, N, '', function (zt) {
              return zt;
            }))
          : D != null &&
            (Cn(D) &&
              (D = Br(
                D,
                N +
                  (D.key == null || (c && c.key === D.key)
                    ? ''
                    : ('' + D.key).replace(Sr, '$&/') + '/') +
                  ne,
              )),
            S.push(D)),
        1
      );
    ne = 0;
    var Ae = _ === '' ? '.' : _ + ':';
    if (xn(c))
      for (var ve = 0; ve < c.length; ve++)
        ((_ = c[ve]), (B = Ae + Tn(_, ve)), (ne += v(_, S, N, B, D)));
    else if (((ve = se(c)), typeof ve == 'function'))
      for (c = ve.call(c), ve = 0; !(_ = c.next()).done; )
        ((_ = _.value), (B = Ae + Tn(_, ve++)), (ne += v(_, S, N, B, D)));
    else if (B === 'object') {
      if (typeof c.then == 'function') return v(gn(c), S, N, _, D);
      throw (
        (S = String(c)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (S === '[object Object]'
              ? 'object with keys {' + Object.keys(c).join(', ') + '}'
              : S) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return ne;
  }
  function C(c, S, N) {
    if (c == null) return c;
    var _ = [],
      D = 0;
    return (
      v(c, _, '', '', function (B) {
        return S.call(N, B, D++);
      }),
      _
    );
  }
  function R(c) {
    if (c._status === -1) {
      var S = c._result;
      ((S = S()),
        S.then(
          function (N) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 1), (c._result = N));
          },
          function (N) {
            (c._status === 0 || c._status === -1) &&
              ((c._status = 2), (c._result = N));
          },
        ),
        c._status === -1 && ((c._status = 0), (c._result = S)));
    }
    if (c._status === 1) return c._result.default;
    throw c._result;
  }
  var ae =
      typeof reportError == 'function'
        ? reportError
        : function (c) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var S = new window.ErrorEvent('error', {
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
              if (!window.dispatchEvent(S)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', c);
              return;
            }
            console.error(c);
          },
    le = {
      map: C,
      forEach: function (c, S, N) {
        C(
          c,
          function () {
            S.apply(this, arguments);
          },
          N,
        );
      },
      count: function (c) {
        var S = 0;
        return (
          C(c, function () {
            S++;
          }),
          S
        );
      },
      toArray: function (c) {
        return (
          C(c, function (S) {
            return S;
          }) || []
        );
      },
      only: function (c) {
        if (!Cn(c))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return c;
      },
    };
  return (
    (M.Activity = j),
    (M.Children = le),
    (M.Component = Xe),
    (M.Fragment = A),
    (M.Profiler = L),
    (M.PureComponent = je),
    (M.StrictMode = d),
    (M.Suspense = T),
    (M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (M.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (c) {
        return K.H.useMemoCache(c);
      },
    }),
    (M.cache = function (c) {
      return function () {
        return c.apply(null, arguments);
      };
    }),
    (M.cacheSignal = function () {
      return null;
    }),
    (M.cloneElement = function (c, S, N) {
      if (c == null)
        throw Error(
          'The argument must be a React element, but you passed ' + c + '.',
        );
      var _ = Re({}, c.props),
        D = c.key;
      if (S != null)
        for (B in (S.key !== void 0 && (D = '' + S.key), S))
          !$e.call(S, B) ||
            B === 'key' ||
            B === '__self' ||
            B === '__source' ||
            (B === 'ref' && S.ref === void 0) ||
            (_[B] = S[B]);
      var B = arguments.length - 2;
      if (B === 1) _.children = N;
      else if (1 < B) {
        for (var ne = Array(B), Ae = 0; Ae < B; Ae++)
          ne[Ae] = arguments[Ae + 2];
        _.children = ne;
      }
      return En(c.type, D, _);
    }),
    (M.createContext = function (c) {
      return (
        (c = {
          $$typeof: Y,
          _currentValue: c,
          _currentValue2: c,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (c.Provider = c),
        (c.Consumer = { $$typeof: $, _context: c }),
        c
      );
    }),
    (M.createElement = function (c, S, N) {
      var _,
        D = {},
        B = null;
      if (S != null)
        for (_ in (S.key !== void 0 && (B = '' + S.key), S))
          $e.call(S, _) &&
            _ !== 'key' &&
            _ !== '__self' &&
            _ !== '__source' &&
            (D[_] = S[_]);
      var ne = arguments.length - 2;
      if (ne === 1) D.children = N;
      else if (1 < ne) {
        for (var Ae = Array(ne), ve = 0; ve < ne; ve++)
          Ae[ve] = arguments[ve + 2];
        D.children = Ae;
      }
      if (c && c.defaultProps)
        for (_ in ((ne = c.defaultProps), ne))
          D[_] === void 0 && (D[_] = ne[_]);
      return En(c, B, D);
    }),
    (M.createRef = function () {
      return { current: null };
    }),
    (M.forwardRef = function (c) {
      return { $$typeof: ye, render: c };
    }),
    (M.isValidElement = Cn),
    (M.lazy = function (c) {
      return { $$typeof: G, _payload: { _status: -1, _result: c }, _init: R };
    }),
    (M.memo = function (c, S) {
      return { $$typeof: x, type: c, compare: S === void 0 ? null : S };
    }),
    (M.startTransition = function (c) {
      var S = K.T,
        N = {};
      K.T = N;
      try {
        var _ = c(),
          D = K.S;
        (D !== null && D(N, _),
          typeof _ == 'object' &&
            _ !== null &&
            typeof _.then == 'function' &&
            _.then(Ie, ae));
      } catch (B) {
        ae(B);
      } finally {
        (S !== null && N.types !== null && (S.types = N.types), (K.T = S));
      }
    }),
    (M.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (M.use = function (c) {
      return K.H.use(c);
    }),
    (M.useActionState = function (c, S, N) {
      return K.H.useActionState(c, S, N);
    }),
    (M.useCallback = function (c, S) {
      return K.H.useCallback(c, S);
    }),
    (M.useContext = function (c) {
      return K.H.useContext(c);
    }),
    (M.useDebugValue = function () {}),
    (M.useDeferredValue = function (c, S) {
      return K.H.useDeferredValue(c, S);
    }),
    (M.useEffect = function (c, S) {
      return K.H.useEffect(c, S);
    }),
    (M.useEffectEvent = function (c) {
      return K.H.useEffectEvent(c);
    }),
    (M.useId = function () {
      return K.H.useId();
    }),
    (M.useImperativeHandle = function (c, S, N) {
      return K.H.useImperativeHandle(c, S, N);
    }),
    (M.useInsertionEffect = function (c, S) {
      return K.H.useInsertionEffect(c, S);
    }),
    (M.useLayoutEffect = function (c, S) {
      return K.H.useLayoutEffect(c, S);
    }),
    (M.useMemo = function (c, S) {
      return K.H.useMemo(c, S);
    }),
    (M.useOptimistic = function (c, S) {
      return K.H.useOptimistic(c, S);
    }),
    (M.useReducer = function (c, S, N) {
      return K.H.useReducer(c, S, N);
    }),
    (M.useRef = function (c) {
      return K.H.useRef(c);
    }),
    (M.useState = function (c) {
      return K.H.useState(c);
    }),
    (M.useSyncExternalStore = function (c, S, N) {
      return K.H.useSyncExternalStore(c, S, N);
    }),
    (M.useTransition = function () {
      return K.H.useTransition();
    }),
    (M.version = '19.2.0'),
    M
  );
}
var gd;
function ss() {
  return (gd || ((gd = 1), (md.exports = Zm())), md.exports);
}
var Sn = ss();
const Jm = Cd(Sn);
var is = { exports: {} },
  wa = {},
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
        function q(v, C) {
          var R = v.length;
          v.push(C);
          e: for (; 0 < R; ) {
            var ae = (R - 1) >>> 1,
              le = v[ae];
            if (0 < L(le, C)) ((v[ae] = C), (v[R] = le), (R = ae));
            else break e;
          }
        }
        function A(v) {
          return v.length === 0 ? null : v[0];
        }
        function d(v) {
          if (v.length === 0) return null;
          var C = v[0],
            R = v.pop();
          if (R !== C) {
            v[0] = R;
            e: for (var ae = 0, le = v.length, c = le >>> 1; ae < c; ) {
              var S = 2 * (ae + 1) - 1,
                N = v[S],
                _ = S + 1,
                D = v[_];
              if (0 > L(N, R))
                _ < le && 0 > L(D, N)
                  ? ((v[ae] = D), (v[_] = R), (ae = _))
                  : ((v[ae] = N), (v[S] = R), (ae = S));
              else if (_ < le && 0 > L(D, R))
                ((v[ae] = D), (v[_] = R), (ae = _));
              else break e;
            }
          }
          return C;
        }
        function L(v, C) {
          var R = v.sortIndex - C.sortIndex;
          return R !== 0 ? R : v.id - C.id;
        }
        if (
          ((E.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var $ = performance;
          E.unstable_now = function () {
            return $.now();
          };
        } else {
          var Y = Date,
            ye = Y.now();
          E.unstable_now = function () {
            return Y.now() - ye;
          };
        }
        var T = [],
          x = [],
          G = 1,
          j = null,
          fe = 3,
          se = !1,
          De = !1,
          Re = !1,
          Ln = !1,
          Xe = typeof setTimeout == 'function' ? setTimeout : null,
          Gn = typeof clearTimeout == 'function' ? clearTimeout : null,
          je = typeof setImmediate < 'u' ? setImmediate : null;
        function un(v) {
          for (var C = A(x); C !== null; ) {
            if (C.callback === null) d(x);
            else if (C.startTime <= v)
              (d(x), (C.sortIndex = C.expirationTime), q(T, C));
            else break;
            C = A(x);
          }
        }
        function xn(v) {
          if (((Re = !1), un(v), !De))
            if (A(T) !== null) ((De = !0), Ie || ((Ie = !0), He()));
            else {
              var C = A(x);
              C !== null && gn(xn, C.startTime - v);
            }
        }
        var Ie = !1,
          K = -1,
          $e = 5,
          En = -1;
        function Br() {
          return Ln ? !0 : !(E.unstable_now() - En < $e);
        }
        function Cn() {
          if (((Ln = !1), Ie)) {
            var v = E.unstable_now();
            En = v;
            var C = !0;
            try {
              e: {
                ((De = !1), Re && ((Re = !1), Gn(K), (K = -1)), (se = !0));
                var R = fe;
                try {
                  n: {
                    for (
                      un(v), j = A(T);
                      j !== null && !(j.expirationTime > v && Br());

                    ) {
                      var ae = j.callback;
                      if (typeof ae == 'function') {
                        ((j.callback = null), (fe = j.priorityLevel));
                        var le = ae(j.expirationTime <= v);
                        if (((v = E.unstable_now()), typeof le == 'function')) {
                          ((j.callback = le), un(v), (C = !0));
                          break n;
                        }
                        (j === A(T) && d(T), un(v));
                      } else d(T);
                      j = A(T);
                    }
                    if (j !== null) C = !0;
                    else {
                      var c = A(x);
                      (c !== null && gn(xn, c.startTime - v), (C = !1));
                    }
                  }
                  break e;
                } finally {
                  ((j = null), (fe = R), (se = !1));
                }
                C = void 0;
              }
            } finally {
              C ? He() : (Ie = !1);
            }
          }
        }
        var He;
        if (typeof je == 'function')
          He = function () {
            je(Cn);
          };
        else if (typeof MessageChannel < 'u') {
          var Sr = new MessageChannel(),
            Tn = Sr.port2;
          ((Sr.port1.onmessage = Cn),
            (He = function () {
              Tn.postMessage(null);
            }));
        } else
          He = function () {
            Xe(Cn, 0);
          };
        function gn(v, C) {
          K = Xe(function () {
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
              : ($e = 0 < v ? Math.floor(1e3 / v) : 5);
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
            var R = fe;
            fe = C;
            try {
              return v();
            } finally {
              fe = R;
            }
          }),
          (E.unstable_requestPaint = function () {
            Ln = !0;
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
            var R = fe;
            fe = v;
            try {
              return C();
            } finally {
              fe = R;
            }
          }),
          (E.unstable_scheduleCallback = function (v, C, R) {
            var ae = E.unstable_now();
            switch (
              (typeof R == 'object' && R !== null
                ? ((R = R.delay),
                  (R = typeof R == 'number' && 0 < R ? ae + R : ae))
                : (R = ae),
              v)
            ) {
              case 1:
                var le = -1;
                break;
              case 2:
                le = 250;
                break;
              case 5:
                le = 1073741823;
                break;
              case 4:
                le = 1e4;
                break;
              default:
                le = 5e3;
            }
            return (
              (le = R + le),
              (v = {
                id: G++,
                callback: C,
                priorityLevel: v,
                startTime: R,
                expirationTime: le,
                sortIndex: -1,
              }),
              R > ae
                ? ((v.sortIndex = R),
                  q(x, v),
                  A(T) === null &&
                    v === A(x) &&
                    (Re ? (Gn(K), (K = -1)) : (Re = !0), gn(xn, R - ae)))
                : ((v.sortIndex = le),
                  q(T, v),
                  De || se || ((De = !0), Ie || ((Ie = !0), He()))),
              v
            );
          }),
          (E.unstable_shouldYield = Br),
          (E.unstable_wrapCallback = function (v) {
            var C = fe;
            return function () {
              var R = fe;
              fe = C;
              try {
                return v.apply(this, arguments);
              } finally {
                fe = R;
              }
            };
          }));
      })(vd)),
    vd
  );
}
var kd;
function nh() {
  return (kd || ((kd = 1), (yd.exports = eh())), yd.exports);
}
var us = { exports: {} },
  Fe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function rh() {
  if (wd) return Fe;
  wd = 1;
  var E = ss();
  function q(T) {
    var x = 'https://react.dev/errors/' + T;
    if (1 < arguments.length) {
      x += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var G = 2; G < arguments.length; G++)
        x += '&args[]=' + encodeURIComponent(arguments[G]);
    }
    return (
      'Minified React error #' +
      T +
      '; visit ' +
      x +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function A() {}
  var d = {
      d: {
        f: A,
        r: function () {
          throw Error(q(522));
        },
        D: A,
        C: A,
        L: A,
        m: A,
        X: A,
        S: A,
        M: A,
      },
      p: 0,
      findDOMNode: null,
    },
    L = Symbol.for('react.portal');
  function $(T, x, G) {
    var j =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: L,
      key: j == null ? null : '' + j,
      children: T,
      containerInfo: x,
      implementation: G,
    };
  }
  var Y = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ye(T, x) {
    if (T === 'font') return '';
    if (typeof x == 'string') return x === 'use-credentials' ? x : '';
  }
  return (
    (Fe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = d),
    (Fe.createPortal = function (T, x) {
      var G =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || (x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11))
        throw Error(q(299));
      return $(T, x, null, G);
    }),
    (Fe.flushSync = function (T) {
      var x = Y.T,
        G = d.p;
      try {
        if (((Y.T = null), (d.p = 2), T)) return T();
      } finally {
        ((Y.T = x), (d.p = G), d.d.f());
      }
    }),
    (Fe.preconnect = function (T, x) {
      typeof T == 'string' &&
        (x
          ? ((x = x.crossOrigin),
            (x =
              typeof x == 'string'
                ? x === 'use-credentials'
                  ? x
                  : ''
                : void 0))
          : (x = null),
        d.d.C(T, x));
    }),
    (Fe.prefetchDNS = function (T) {
      typeof T == 'string' && d.d.D(T);
    }),
    (Fe.preinit = function (T, x) {
      if (typeof T == 'string' && x && typeof x.as == 'string') {
        var G = x.as,
          j = ye(G, x.crossOrigin),
          fe = typeof x.integrity == 'string' ? x.integrity : void 0,
          se = typeof x.fetchPriority == 'string' ? x.fetchPriority : void 0;
        G === 'style'
          ? d.d.S(T, typeof x.precedence == 'string' ? x.precedence : void 0, {
              crossOrigin: j,
              integrity: fe,
              fetchPriority: se,
            })
          : G === 'script' &&
            d.d.X(T, {
              crossOrigin: j,
              integrity: fe,
              fetchPriority: se,
              nonce: typeof x.nonce == 'string' ? x.nonce : void 0,
            });
      }
    }),
    (Fe.preinitModule = function (T, x) {
      if (typeof T == 'string')
        if (typeof x == 'object' && x !== null) {
          if (x.as == null || x.as === 'script') {
            var G = ye(x.as, x.crossOrigin);
            d.d.M(T, {
              crossOrigin: G,
              integrity: typeof x.integrity == 'string' ? x.integrity : void 0,
              nonce: typeof x.nonce == 'string' ? x.nonce : void 0,
            });
          }
        } else x == null && d.d.M(T);
    }),
    (Fe.preload = function (T, x) {
      if (
        typeof T == 'string' &&
        typeof x == 'object' &&
        x !== null &&
        typeof x.as == 'string'
      ) {
        var G = x.as,
          j = ye(G, x.crossOrigin);
        d.d.L(T, G, {
          crossOrigin: j,
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
    (Fe.preloadModule = function (T, x) {
      if (typeof T == 'string')
        if (x) {
          var G = ye(x.as, x.crossOrigin);
          d.d.m(T, {
            as: typeof x.as == 'string' && x.as !== 'script' ? x.as : void 0,
            crossOrigin: G,
            integrity: typeof x.integrity == 'string' ? x.integrity : void 0,
          });
        } else d.d.m(T);
    }),
    (Fe.requestFormReset = function (T) {
      d.d.r(T);
    }),
    (Fe.unstable_batchedUpdates = function (T, x) {
      return T(x);
    }),
    (Fe.useFormState = function (T, x, G) {
      return Y.H.useFormState(T, x, G);
    }),
    (Fe.useFormStatus = function () {
      return Y.H.useHostTransitionStatus();
    }),
    (Fe.version = '19.2.0'),
    Fe
  );
}
var Sd;
function th() {
  if (Sd) return us.exports;
  Sd = 1;
  function E() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E);
      } catch (q) {
        console.error(q);
      }
  }
  return (E(), (us.exports = rh()), us.exports);
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
function ah() {
  if (xd) return wa;
  xd = 1;
  var E = nh(),
    q = ss(),
    A = th();
  function d(e) {
    var n = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      n += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += '&args[]=' + encodeURIComponent(arguments[r]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function L(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function $(e) {
    var n = e,
      r = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do ((n = e), (n.flags & 4098) !== 0 && (r = n.return), (e = n.return));
      while (e);
    }
    return n.tag === 3 ? r : null;
  }
  function Y(e) {
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
  function ye(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (
        (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function T(e) {
    if ($(e) !== e) throw Error(d(188));
  }
  function x(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = $(e)), n === null)) throw Error(d(188));
      return n !== e ? null : e;
    }
    for (var r = e, t = n; ; ) {
      var a = r.return;
      if (a === null) break;
      var o = a.alternate;
      if (o === null) {
        if (((t = a.return), t !== null)) {
          r = t;
          continue;
        }
        break;
      }
      if (a.child === o.child) {
        for (o = a.child; o; ) {
          if (o === r) return (T(a), e);
          if (o === t) return (T(a), n);
          o = o.sibling;
        }
        throw Error(d(188));
      }
      if (r.return !== t.return) ((r = a), (t = o));
      else {
        for (var i = !1, u = a.child; u; ) {
          if (u === r) {
            ((i = !0), (r = a), (t = o));
            break;
          }
          if (u === t) {
            ((i = !0), (t = a), (r = o));
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = o.child; u; ) {
            if (u === r) {
              ((i = !0), (r = o), (t = a));
              break;
            }
            if (u === t) {
              ((i = !0), (t = o), (r = a));
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(d(189));
        }
      }
      if (r.alternate !== t) throw Error(d(190));
    }
    if (r.tag !== 3) throw Error(d(188));
    return r.stateNode.current === r ? e : n;
  }
  function G(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = G(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var j = Object.assign,
    fe = Symbol.for('react.element'),
    se = Symbol.for('react.transitional.element'),
    De = Symbol.for('react.portal'),
    Re = Symbol.for('react.fragment'),
    Ln = Symbol.for('react.strict_mode'),
    Xe = Symbol.for('react.profiler'),
    Gn = Symbol.for('react.consumer'),
    je = Symbol.for('react.context'),
    un = Symbol.for('react.forward_ref'),
    xn = Symbol.for('react.suspense'),
    Ie = Symbol.for('react.suspense_list'),
    K = Symbol.for('react.memo'),
    $e = Symbol.for('react.lazy'),
    En = Symbol.for('react.activity'),
    Br = Symbol.for('react.memo_cache_sentinel'),
    Cn = Symbol.iterator;
  function He(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Cn && e[Cn]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var Sr = Symbol.for('react.client.reference');
  function Tn(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === Sr ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case Re:
        return 'Fragment';
      case Xe:
        return 'Profiler';
      case Ln:
        return 'StrictMode';
      case xn:
        return 'Suspense';
      case Ie:
        return 'SuspenseList';
      case En:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case De:
          return 'Portal';
        case je:
          return e.displayName || 'Context';
        case Gn:
          return (e._context.displayName || 'Context') + '.Consumer';
        case un:
          var n = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = n.displayName || n.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case K:
          return (
            (n = e.displayName || null),
            n !== null ? n : Tn(e.type) || 'Memo'
          );
        case $e:
          ((n = e._payload), (e = e._init));
          try {
            return Tn(e(n));
          } catch {}
      }
    return null;
  }
  var gn = Array.isArray,
    v = q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    C = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = { pending: !1, data: null, method: null, action: null },
    ae = [],
    le = -1;
  function c(e) {
    return { current: e };
  }
  function S(e) {
    0 > le || ((e.current = ae[le]), (ae[le] = null), le--);
  }
  function N(e, n) {
    (le++, (ae[le] = e.current), (e.current = n));
  }
  var _ = c(null),
    D = c(null),
    B = c(null),
    ne = c(null);
  function Ae(e, n) {
    switch ((N(B, n), N(D, e), N(_, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Ff(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          ((n = Ff(n)), (e = Rf(n, e)));
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
    (S(_), N(_, e));
  }
  function ve() {
    (S(_), S(D), S(B));
  }
  function zt(e) {
    e.memoizedState !== null && N(ne, e);
    var n = _.current,
      r = Rf(n, e.type);
    n !== r && (N(D, e), N(_, r));
  }
  function Sa(e) {
    (D.current === e && (S(_), S(D)),
      ne.current === e && (S(ne), (ga._currentValue = R)));
  }
  var Bo, ls;
  function xr(e) {
    if (Bo === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        ((Bo = (n && n[1]) || ''),
          (ls =
            -1 <
            r.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < r.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      Bo +
      e +
      ls
    );
  }
  var Uo = !1;
  function Vo(e, n) {
    if (!e || Uo) return '';
    Uo = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var t = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var w = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(w.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(w, []);
                } catch (g) {
                  var h = g;
                }
                Reflect.construct(e, [], w);
              } else {
                try {
                  w.call();
                } catch (g) {
                  h = g;
                }
                e.call(w.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                h = g;
              }
              (w = e()) &&
                typeof w.catch == 'function' &&
                w.catch(function () {});
            }
          } catch (g) {
            if (g && h && typeof g.stack == 'string') return [g.stack, h.stack];
          }
          return [null, null];
        },
      };
      t.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var a = Object.getOwnPropertyDescriptor(
        t.DetermineComponentFrameRoot,
        'name',
      );
      a &&
        a.configurable &&
        Object.defineProperty(t.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var o = t.DetermineComponentFrameRoot(),
        i = o[0],
        u = o[1];
      if (i && u) {
        var s = i.split(`
`),
          m = u.split(`
`);
        for (
          a = t = 0;
          t < s.length && !s[t].includes('DetermineComponentFrameRoot');

        )
          t++;
        for (; a < m.length && !m[a].includes('DetermineComponentFrameRoot'); )
          a++;
        if (t === s.length || a === m.length)
          for (
            t = s.length - 1, a = m.length - 1;
            1 <= t && 0 <= a && s[t] !== m[a];

          )
            a--;
        for (; 1 <= t && 0 <= a; t--, a--)
          if (s[t] !== m[a]) {
            if (t !== 1 || a !== 1)
              do
                if ((t--, a--, 0 > a || s[t] !== m[a])) {
                  var y =
                    `
` + s[t].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      y.includes('<anonymous>') &&
                      (y = y.replace('<anonymous>', e.displayName)),
                    y
                  );
                }
              while (1 <= t && 0 <= a);
            break;
          }
      }
    } finally {
      ((Uo = !1), (Error.prepareStackTrace = r));
    }
    return (r = e ? e.displayName || e.name : '') ? xr(r) : '';
  }
  function zd(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return xr(e.type);
      case 16:
        return xr('Lazy');
      case 13:
        return e.child !== n && n !== null
          ? xr('Suspense Fallback')
          : xr('Suspense');
      case 19:
        return xr('SuspenseList');
      case 0:
      case 15:
        return Vo(e.type, !1);
      case 11:
        return Vo(e.type.render, !1);
      case 1:
        return Vo(e.type, !0);
      case 31:
        return xr('Activity');
      default:
        return '';
    }
  }
  function cs(e) {
    try {
      var n = '',
        r = null;
      do ((n += zd(e, r)), (r = e), (e = e.return));
      while (e);
      return n;
    } catch (t) {
      return (
        `
Error generating stack: ` +
        t.message +
        `
` +
        t.stack
      );
    }
  }
  var qo = Object.prototype.hasOwnProperty,
    Wo = E.unstable_scheduleCallback,
    Qo = E.unstable_cancelCallback,
    _d = E.unstable_shouldYield,
    Pd = E.unstable_requestPaint,
    Ge = E.unstable_now,
    Ld = E.unstable_getCurrentPriorityLevel,
    fs = E.unstable_ImmediatePriority,
    ds = E.unstable_UserBlockingPriority,
    xa = E.unstable_NormalPriority,
    Td = E.unstable_LowPriority,
    ps = E.unstable_IdlePriority,
    Od = E.log,
    jd = E.unstable_setDisableYieldValue,
    _t = null,
    Ye = null;
  function Yn(e) {
    if (
      (typeof Od == 'function' && jd(e),
      Ye && typeof Ye.setStrictMode == 'function')
    )
      try {
        Ye.setStrictMode(_t, e);
      } catch {}
  }
  var Ze = Math.clz32 ? Math.clz32 : Ad,
    Fd = Math.log,
    Rd = Math.LN2;
  function Ad(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Fd(e) / Rd) | 0)) | 0);
  }
  var Ea = 256,
    Ca = 262144,
    Na = 4194304;
  function Er(e) {
    var n = e & 42;
    if (n !== 0) return n;
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
  function za(e, n, r) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var a = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var u = t & 134217727;
    return (
      u !== 0
        ? ((t = u & ~o),
          t !== 0
            ? (a = Er(t))
            : ((i &= u),
              i !== 0
                ? (a = Er(i))
                : r || ((r = u & ~e), r !== 0 && (a = Er(r)))))
        : ((u = t & ~o),
          u !== 0
            ? (a = Er(u))
            : i !== 0
              ? (a = Er(i))
              : r || ((r = t & ~e), r !== 0 && (a = Er(r)))),
      a === 0
        ? 0
        : n !== 0 &&
            n !== a &&
            (n & o) === 0 &&
            ((o = a & -a),
            (r = n & -n),
            o >= r || (o === 32 && (r & 4194048) !== 0))
          ? n
          : a
    );
  }
  function Pt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Md(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
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
        return n + 5e3;
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
  function ms() {
    var e = Na;
    return ((Na <<= 1), (Na & 62914560) === 0 && (Na = 4194304), e);
  }
  function Ko(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function Lt(e, n) {
    ((e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Dd(e, n, r, t, a, o) {
    var i = e.pendingLanes;
    ((e.pendingLanes = r),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= r),
      (e.entangledLanes &= r),
      (e.errorRecoveryDisabledLanes &= r),
      (e.shellSuspendCounter = 0));
    var u = e.entanglements,
      s = e.expirationTimes,
      m = e.hiddenUpdates;
    for (r = i & ~r; 0 < r; ) {
      var y = 31 - Ze(r),
        w = 1 << y;
      ((u[y] = 0), (s[y] = -1));
      var h = m[y];
      if (h !== null)
        for (m[y] = null, y = 0; y < h.length; y++) {
          var g = h[y];
          g !== null && (g.lane &= -536870913);
        }
      r &= ~w;
    }
    (t !== 0 && hs(e, t, 0),
      o !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(i & ~n)));
  }
  function hs(e, n, r) {
    ((e.pendingLanes |= n), (e.suspendedLanes &= ~n));
    var t = 31 - Ze(n);
    ((e.entangledLanes |= n),
      (e.entanglements[t] = e.entanglements[t] | 1073741824 | (r & 261930)));
  }
  function gs(e, n) {
    var r = (e.entangledLanes |= n);
    for (e = e.entanglements; r; ) {
      var t = 31 - Ze(r),
        a = 1 << t;
      ((a & n) | (e[t] & n) && (e[t] |= n), (r &= ~a));
    }
  }
  function ys(e, n) {
    var r = n & -n;
    return (
      (r = (r & 42) !== 0 ? 1 : Xo(r)),
      (r & (e.suspendedLanes | n)) !== 0 ? 0 : r
    );
  }
  function Xo(e) {
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
  function Go(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function vs() {
    var e = C.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : ad(e.type));
  }
  function bs(e, n) {
    var r = C.p;
    try {
      return ((C.p = e), n());
    } finally {
      C.p = r;
    }
  }
  var Zn = Math.random().toString(36).slice(2),
    _e = '__reactFiber$' + Zn,
    Be = '__reactProps$' + Zn,
    Ur = '__reactContainer$' + Zn,
    Yo = '__reactEvents$' + Zn,
    Id = '__reactListeners$' + Zn,
    $d = '__reactHandles$' + Zn,
    ks = '__reactResources$' + Zn,
    Tt = '__reactMarker$' + Zn;
  function Zo(e) {
    (delete e[_e], delete e[Be], delete e[Yo], delete e[Id], delete e[$d]);
  }
  function Vr(e) {
    var n = e[_e];
    if (n) return n;
    for (var r = e.parentNode; r; ) {
      if ((n = r[Ur] || r[_e])) {
        if (
          ((r = n.alternate),
          n.child !== null || (r !== null && r.child !== null))
        )
          for (e = Bf(e); e !== null; ) {
            if ((r = e[_e])) return r;
            e = Bf(e);
          }
        return n;
      }
      ((e = r), (r = e.parentNode));
    }
    return null;
  }
  function qr(e) {
    if ((e = e[_e] || e[Ur])) {
      var n = e.tag;
      if (
        n === 5 ||
        n === 6 ||
        n === 13 ||
        n === 31 ||
        n === 26 ||
        n === 27 ||
        n === 3
      )
        return e;
    }
    return null;
  }
  function Ot(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(d(33));
  }
  function Wr(e) {
    var n = e[ks];
    return (
      n ||
        (n = e[ks] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function Ne(e) {
    e[Tt] = !0;
  }
  var ws = new Set(),
    Ss = {};
  function Cr(e, n) {
    (Qr(e, n), Qr(e + 'Capture', n));
  }
  function Qr(e, n) {
    for (Ss[e] = n, e = 0; e < n.length; e++) ws.add(n[e]);
  }
  var Hd = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    xs = {},
    Es = {};
  function Bd(e) {
    return qo.call(Es, e)
      ? !0
      : qo.call(xs, e)
        ? !1
        : Hd.test(e)
          ? (Es[e] = !0)
          : ((xs[e] = !0), !1);
  }
  function _a(e, n, r) {
    if (Bd(n))
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(n);
            return;
          case 'boolean':
            var t = n.toLowerCase().slice(0, 5);
            if (t !== 'data-' && t !== 'aria-') {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, '' + r);
      }
  }
  function Pa(e, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, '' + r);
    }
  }
  function On(e, n, r, t) {
    if (t === null) e.removeAttribute(r);
    else {
      switch (typeof t) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(n, r, '' + t);
    }
  }
  function sn(e) {
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
  function Cs(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (n === 'checkbox' || n === 'radio')
    );
  }
  function Ud(e, n, r) {
    var t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    if (
      !e.hasOwnProperty(n) &&
      typeof t < 'u' &&
      typeof t.get == 'function' &&
      typeof t.set == 'function'
    ) {
      var a = t.get,
        o = t.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (i) {
            ((r = '' + i), o.call(this, i));
          },
        }),
        Object.defineProperty(e, n, { enumerable: t.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (i) {
            r = '' + i;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function Jo(e) {
    if (!e._valueTracker) {
      var n = Cs(e) ? 'checked' : 'value';
      e._valueTracker = Ud(e, n, '' + e[n]);
    }
  }
  function Ns(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(),
      t = '';
    return (
      e && (t = Cs(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = t),
      e !== r ? (n.setValue(e), !0) : !1
    );
  }
  function La(e) {
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
  function yn(e) {
    return e.replace(Vd, function (n) {
      return '\\' + n.charCodeAt(0).toString(16) + ' ';
    });
  }
  function ei(e, n, r, t, a, o, i, u) {
    ((e.name = ''),
      i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean'
        ? (e.type = i)
        : e.removeAttribute('type'),
      n != null
        ? i === 'number'
          ? ((n === 0 && e.value === '') || e.value != n) &&
            (e.value = '' + sn(n))
          : e.value !== '' + sn(n) && (e.value = '' + sn(n))
        : (i !== 'submit' && i !== 'reset') || e.removeAttribute('value'),
      n != null
        ? ni(e, i, sn(n))
        : r != null
          ? ni(e, i, sn(r))
          : t != null && e.removeAttribute('value'),
      a == null && o != null && (e.defaultChecked = !!o),
      a != null &&
        (e.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      u != null &&
      typeof u != 'function' &&
      typeof u != 'symbol' &&
      typeof u != 'boolean'
        ? (e.name = '' + sn(u))
        : e.removeAttribute('name'));
  }
  function zs(e, n, r, t, a, o, i, u) {
    if (
      (o != null &&
        typeof o != 'function' &&
        typeof o != 'symbol' &&
        typeof o != 'boolean' &&
        (e.type = o),
      n != null || r != null)
    ) {
      if (!((o !== 'submit' && o !== 'reset') || n != null)) {
        Jo(e);
        return;
      }
      ((r = r != null ? '' + sn(r) : ''),
        (n = n != null ? '' + sn(n) : r),
        u || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((t = t ?? a),
      (t = typeof t != 'function' && typeof t != 'symbol' && !!t),
      (e.checked = u ? e.checked : !!t),
      (e.defaultChecked = !!t),
      i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (e.name = i),
      Jo(e));
  }
  function ni(e, n, r) {
    (n === 'number' && La(e.ownerDocument) === e) ||
      e.defaultValue === '' + r ||
      (e.defaultValue = '' + r);
  }
  function Kr(e, n, r, t) {
    if (((e = e.options), n)) {
      n = {};
      for (var a = 0; a < r.length; a++) n['$' + r[a]] = !0;
      for (r = 0; r < e.length; r++)
        ((a = n.hasOwnProperty('$' + e[r].value)),
          e[r].selected !== a && (e[r].selected = a),
          a && t && (e[r].defaultSelected = !0));
    } else {
      for (r = '' + sn(r), n = null, a = 0; a < e.length; a++) {
        if (e[a].value === r) {
          ((e[a].selected = !0), t && (e[a].defaultSelected = !0));
          return;
        }
        n !== null || e[a].disabled || (n = e[a]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function _s(e, n, r) {
    if (
      n != null &&
      ((n = '' + sn(n)), n !== e.value && (e.value = n), r == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? '' + sn(r) : '';
  }
  function Ps(e, n, r, t) {
    if (n == null) {
      if (t != null) {
        if (r != null) throw Error(d(92));
        if (gn(t)) {
          if (1 < t.length) throw Error(d(93));
          t = t[0];
        }
        r = t;
      }
      (r == null && (r = ''), (n = r));
    }
    ((r = sn(n)),
      (e.defaultValue = r),
      (t = e.textContent),
      t === r && t !== '' && t !== null && (e.value = t),
      Jo(e));
  }
  function Xr(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var qd = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Ls(e, n, r) {
    var t = n.indexOf('--') === 0;
    r == null || typeof r == 'boolean' || r === ''
      ? t
        ? e.setProperty(n, '')
        : n === 'float'
          ? (e.cssFloat = '')
          : (e[n] = '')
      : t
        ? e.setProperty(n, r)
        : typeof r != 'number' || r === 0 || qd.has(n)
          ? n === 'float'
            ? (e.cssFloat = r)
            : (e[n] = ('' + r).trim())
          : (e[n] = r + 'px');
  }
  function Ts(e, n, r) {
    if (n != null && typeof n != 'object') throw Error(d(62));
    if (((e = e.style), r != null)) {
      for (var t in r)
        !r.hasOwnProperty(t) ||
          (n != null && n.hasOwnProperty(t)) ||
          (t.indexOf('--') === 0
            ? e.setProperty(t, '')
            : t === 'float'
              ? (e.cssFloat = '')
              : (e[t] = ''));
      for (var a in n)
        ((t = n[a]), n.hasOwnProperty(a) && r[a] !== t && Ls(e, a, t));
    } else for (var o in n) n.hasOwnProperty(o) && Ls(e, o, n[o]);
  }
  function ri(e) {
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
  function Ta(e) {
    return Qd.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function jn() {}
  var ti = null;
  function ai(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Gr = null,
    Yr = null;
  function Os(e) {
    var n = qr(e);
    if (n && (e = n.stateNode)) {
      var r = e[Be] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case 'input':
          if (
            (ei(
              e,
              r.value,
              r.defaultValue,
              r.defaultValue,
              r.checked,
              r.defaultChecked,
              r.type,
              r.name,
            ),
            (n = r.name),
            r.type === 'radio' && n != null)
          ) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                'input[name="' + yn('' + n) + '"][type="radio"]',
              ),
                n = 0;
              n < r.length;
              n++
            ) {
              var t = r[n];
              if (t !== e && t.form === e.form) {
                var a = t[Be] || null;
                if (!a) throw Error(d(90));
                ei(
                  t,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name,
                );
              }
            }
            for (n = 0; n < r.length; n++)
              ((t = r[n]), t.form === e.form && Ns(t));
          }
          break e;
        case 'textarea':
          _s(e, r.value, r.defaultValue);
          break e;
        case 'select':
          ((n = r.value), n != null && Kr(e, !!r.multiple, n, !1));
      }
    }
  }
  var oi = !1;
  function js(e, n, r) {
    if (oi) return e(n, r);
    oi = !0;
    try {
      var t = e(n);
      return t;
    } finally {
      if (
        ((oi = !1),
        (Gr !== null || Yr !== null) &&
          (bo(), Gr && ((n = Gr), (e = Yr), (Yr = Gr = null), Os(n), e)))
      )
        for (n = 0; n < e.length; n++) Os(e[n]);
    }
  }
  function jt(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var t = r[Be] || null;
    if (t === null) return null;
    r = t[n];
    e: switch (n) {
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
        ((t = !t.disabled) ||
          ((e = e.type),
          (t = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !t));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != 'function') throw Error(d(231, n, typeof r));
    return r;
  }
  var Fn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    ii = !1;
  if (Fn)
    try {
      var Ft = {};
      (Object.defineProperty(Ft, 'passive', {
        get: function () {
          ii = !0;
        },
      }),
        window.addEventListener('test', Ft, Ft),
        window.removeEventListener('test', Ft, Ft));
    } catch {
      ii = !1;
    }
  var Jn = null,
    ui = null,
    Oa = null;
  function Fs() {
    if (Oa) return Oa;
    var e,
      n = ui,
      r = n.length,
      t,
      a = 'value' in Jn ? Jn.value : Jn.textContent,
      o = a.length;
    for (e = 0; e < r && n[e] === a[e]; e++);
    var i = r - e;
    for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
    return (Oa = a.slice(e, 1 < t ? 1 - t : void 0));
  }
  function ja(e) {
    var n = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Fa() {
    return !0;
  }
  function Rs() {
    return !1;
  }
  function Ue(e) {
    function n(r, t, a, o, i) {
      ((this._reactName = r),
        (this._targetInst = a),
        (this.type = t),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null));
      for (var u in e)
        e.hasOwnProperty(u) && ((r = e[u]), (this[u] = r ? r(o) : o[u]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? Fa
          : Rs),
        (this.isPropagationStopped = Rs),
        this
      );
    }
    return (
      j(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var r = this.nativeEvent;
          r &&
            (r.preventDefault
              ? r.preventDefault()
              : typeof r.returnValue != 'unknown' && (r.returnValue = !1),
            (this.isDefaultPrevented = Fa));
        },
        stopPropagation: function () {
          var r = this.nativeEvent;
          r &&
            (r.stopPropagation
              ? r.stopPropagation()
              : typeof r.cancelBubble != 'unknown' && (r.cancelBubble = !0),
            (this.isPropagationStopped = Fa));
        },
        persist: function () {},
        isPersistent: Fa,
      }),
      n
    );
  }
  var Nr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ra = Ue(Nr),
    Rt = j({}, Nr, { view: 0, detail: 0 }),
    Kd = Ue(Rt),
    si,
    li,
    At,
    Aa = j({}, Rt, {
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
      getModifierState: fi,
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
          : (e !== At &&
              (At && e.type === 'mousemove'
                ? ((si = e.screenX - At.screenX), (li = e.screenY - At.screenY))
                : (li = si = 0),
              (At = e)),
            si);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : li;
      },
    }),
    As = Ue(Aa),
    Xd = j({}, Aa, { dataTransfer: 0 }),
    Gd = Ue(Xd),
    Yd = j({}, Rt, { relatedTarget: 0 }),
    ci = Ue(Yd),
    Zd = j({}, Nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jd = Ue(Zd),
    ep = j({}, Nr, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    np = Ue(ep),
    rp = j({}, Nr, { data: 0 }),
    Ms = Ue(rp),
    tp = {
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
    ap = {
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
    op = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function ip(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = op[e])
        ? !!n[e]
        : !1;
  }
  function fi() {
    return ip;
  }
  var up = j({}, Rt, {
      key: function (e) {
        if (e.key) {
          var n = tp[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return e.type === 'keypress'
          ? ((e = ja(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? ap[e.keyCode] || 'Unidentified'
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
      getModifierState: fi,
      charCode: function (e) {
        return e.type === 'keypress' ? ja(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ja(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    sp = Ue(up),
    lp = j({}, Aa, {
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
    Ds = Ue(lp),
    cp = j({}, Rt, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fi,
    }),
    fp = Ue(cp),
    dp = j({}, Nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pp = Ue(dp),
    mp = j({}, Aa, {
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
    hp = Ue(mp),
    gp = j({}, Nr, { newState: 0, oldState: 0 }),
    yp = Ue(gp),
    vp = [9, 13, 27, 32],
    di = Fn && 'CompositionEvent' in window,
    Mt = null;
  Fn && 'documentMode' in document && (Mt = document.documentMode);
  var bp = Fn && 'TextEvent' in window && !Mt,
    Is = Fn && (!di || (Mt && 8 < Mt && 11 >= Mt)),
    $s = ' ',
    Hs = !1;
  function Bs(e, n) {
    switch (e) {
      case 'keyup':
        return vp.indexOf(n.keyCode) !== -1;
      case 'keydown':
        return n.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Us(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var Zr = !1;
  function kp(e, n) {
    switch (e) {
      case 'compositionend':
        return Us(n);
      case 'keypress':
        return n.which !== 32 ? null : ((Hs = !0), $s);
      case 'textInput':
        return ((e = n.data), e === $s && Hs ? null : e);
      default:
        return null;
    }
  }
  function wp(e, n) {
    if (Zr)
      return e === 'compositionend' || (!di && Bs(e, n))
        ? ((e = Fs()), (Oa = ui = Jn = null), (Zr = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case 'compositionend':
        return Is && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var Sp = {
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
  function Vs(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!Sp[e.type] : n === 'textarea';
  }
  function qs(e, n, r, t) {
    (Gr ? (Yr ? Yr.push(t) : (Yr = [t])) : (Gr = t),
      (n = No(n, 'onChange')),
      0 < n.length &&
        ((r = new Ra('onChange', 'change', null, r, t)),
        e.push({ event: r, listeners: n })));
  }
  var Dt = null,
    It = null;
  function xp(e) {
    _f(e, 0);
  }
  function Ma(e) {
    var n = Ot(e);
    if (Ns(n)) return e;
  }
  function Ws(e, n) {
    if (e === 'change') return n;
  }
  var Qs = !1;
  if (Fn) {
    var pi;
    if (Fn) {
      var mi = 'oninput' in document;
      if (!mi) {
        var Ks = document.createElement('div');
        (Ks.setAttribute('oninput', 'return;'),
          (mi = typeof Ks.oninput == 'function'));
      }
      pi = mi;
    } else pi = !1;
    Qs = pi && (!document.documentMode || 9 < document.documentMode);
  }
  function Xs() {
    Dt && (Dt.detachEvent('onpropertychange', Gs), (It = Dt = null));
  }
  function Gs(e) {
    if (e.propertyName === 'value' && Ma(It)) {
      var n = [];
      (qs(n, It, e, ai(e)), js(xp, n));
    }
  }
  function Ep(e, n, r) {
    e === 'focusin'
      ? (Xs(), (Dt = n), (It = r), Dt.attachEvent('onpropertychange', Gs))
      : e === 'focusout' && Xs();
  }
  function Cp(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Ma(It);
  }
  function Np(e, n) {
    if (e === 'click') return Ma(n);
  }
  function zp(e, n) {
    if (e === 'input' || e === 'change') return Ma(n);
  }
  function _p(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Je = typeof Object.is == 'function' ? Object.is : _p;
  function $t(e, n) {
    if (Je(e, n)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof n != 'object' ||
      n === null
    )
      return !1;
    var r = Object.keys(e),
      t = Object.keys(n);
    if (r.length !== t.length) return !1;
    for (t = 0; t < r.length; t++) {
      var a = r[t];
      if (!qo.call(n, a) || !Je(e[a], n[a])) return !1;
    }
    return !0;
  }
  function Ys(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zs(e, n) {
    var r = Ys(e);
    e = 0;
    for (var t; r; ) {
      if (r.nodeType === 3) {
        if (((t = e + r.textContent.length), e <= n && t >= n))
          return { node: r, offset: n - e };
        e = t;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Ys(r);
    }
  }
  function Js(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Js(e, n.parentNode)
            : 'contains' in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function el(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var n = La(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == 'string';
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = La(e.document);
    }
    return n;
  }
  function hi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      n &&
      ((n === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        n === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  var Pp = Fn && 'documentMode' in document && 11 >= document.documentMode,
    Jr = null,
    gi = null,
    Ht = null,
    yi = !1;
  function nl(e, n, r) {
    var t =
      r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    yi ||
      Jr == null ||
      Jr !== La(t) ||
      ((t = Jr),
      'selectionStart' in t && hi(t)
        ? (t = { start: t.selectionStart, end: t.selectionEnd })
        : ((t = (
            (t.ownerDocument && t.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (t = {
            anchorNode: t.anchorNode,
            anchorOffset: t.anchorOffset,
            focusNode: t.focusNode,
            focusOffset: t.focusOffset,
          })),
      (Ht && $t(Ht, t)) ||
        ((Ht = t),
        (t = No(gi, 'onSelect')),
        0 < t.length &&
          ((n = new Ra('onSelect', 'select', null, n, r)),
          e.push({ event: n, listeners: t }),
          (n.target = Jr))));
  }
  function zr(e, n) {
    var r = {};
    return (
      (r[e.toLowerCase()] = n.toLowerCase()),
      (r['Webkit' + e] = 'webkit' + n),
      (r['Moz' + e] = 'moz' + n),
      r
    );
  }
  var et = {
      animationend: zr('Animation', 'AnimationEnd'),
      animationiteration: zr('Animation', 'AnimationIteration'),
      animationstart: zr('Animation', 'AnimationStart'),
      transitionrun: zr('Transition', 'TransitionRun'),
      transitionstart: zr('Transition', 'TransitionStart'),
      transitioncancel: zr('Transition', 'TransitionCancel'),
      transitionend: zr('Transition', 'TransitionEnd'),
    },
    vi = {},
    rl = {};
  Fn &&
    ((rl = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete et.animationend.animation,
      delete et.animationiteration.animation,
      delete et.animationstart.animation),
    'TransitionEvent' in window || delete et.transitionend.transition);
  function _r(e) {
    if (vi[e]) return vi[e];
    if (!et[e]) return e;
    var n = et[e],
      r;
    for (r in n) if (n.hasOwnProperty(r) && r in rl) return (vi[e] = n[r]);
    return e;
  }
  var tl = _r('animationend'),
    al = _r('animationiteration'),
    ol = _r('animationstart'),
    Lp = _r('transitionrun'),
    Tp = _r('transitionstart'),
    Op = _r('transitioncancel'),
    il = _r('transitionend'),
    ul = new Map(),
    bi =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  bi.push('scrollEnd');
  function vn(e, n) {
    (ul.set(e, n), Cr(n, [e]));
  }
  var Da =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var n = new window.ErrorEvent('error', {
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
              if (!window.dispatchEvent(n)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', e);
              return;
            }
            console.error(e);
          },
    ln = [],
    nt = 0,
    ki = 0;
  function Ia() {
    for (var e = nt, n = (ki = nt = 0); n < e; ) {
      var r = ln[n];
      ln[n++] = null;
      var t = ln[n];
      ln[n++] = null;
      var a = ln[n];
      ln[n++] = null;
      var o = ln[n];
      if (((ln[n++] = null), t !== null && a !== null)) {
        var i = t.pending;
        (i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
          (t.pending = a));
      }
      o !== 0 && sl(r, a, o);
    }
  }
  function $a(e, n, r, t) {
    ((ln[nt++] = e),
      (ln[nt++] = n),
      (ln[nt++] = r),
      (ln[nt++] = t),
      (ki |= t),
      (e.lanes |= t),
      (e = e.alternate),
      e !== null && (e.lanes |= t));
  }
  function wi(e, n, r, t) {
    return ($a(e, n, r, t), Ha(e));
  }
  function Pr(e, n) {
    return ($a(e, null, null, n), Ha(e));
  }
  function sl(e, n, r) {
    e.lanes |= r;
    var t = e.alternate;
    t !== null && (t.lanes |= r);
    for (var a = !1, o = e.return; o !== null; )
      ((o.childLanes |= r),
        (t = o.alternate),
        t !== null && (t.childLanes |= r),
        o.tag === 22 &&
          ((e = o.stateNode), e === null || e._visibility & 1 || (a = !0)),
        (e = o),
        (o = o.return));
    return e.tag === 3
      ? ((o = e.stateNode),
        a &&
          n !== null &&
          ((a = 31 - Ze(r)),
          (e = o.hiddenUpdates),
          (t = e[a]),
          t === null ? (e[a] = [n]) : t.push(n),
          (n.lane = r | 536870912)),
        o)
      : null;
  }
  function Ha(e) {
    if (50 < la) throw ((la = 0), (Lu = null), Error(d(185)));
    for (var n = e.return; n !== null; ) ((e = n), (n = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var rt = {};
  function jp(e, n, r, t) {
    ((this.tag = e),
      (this.key = r),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = t),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function en(e, n, r, t) {
    return new jp(e, n, r, t);
  }
  function Si(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Rn(e, n) {
    var r = e.alternate;
    return (
      r === null
        ? ((r = en(e.tag, n, e.key, e.mode)),
          (r.elementType = e.elementType),
          (r.type = e.type),
          (r.stateNode = e.stateNode),
          (r.alternate = e),
          (e.alternate = r))
        : ((r.pendingProps = n),
          (r.type = e.type),
          (r.flags = 0),
          (r.subtreeFlags = 0),
          (r.deletions = null)),
      (r.flags = e.flags & 65011712),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (n = e.dependencies),
      (r.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      (r.refCleanup = e.refCleanup),
      r
    );
  }
  function ll(e, n) {
    e.flags &= 65011714;
    var r = e.alternate;
    return (
      r === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = r.childLanes),
          (e.lanes = r.lanes),
          (e.child = r.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = r.memoizedProps),
          (e.memoizedState = r.memoizedState),
          (e.updateQueue = r.updateQueue),
          (e.type = r.type),
          (n = r.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function Ba(e, n, r, t, a, o) {
    var i = 0;
    if (((t = e), typeof e == 'function')) Si(e) && (i = 1);
    else if (typeof e == 'string')
      i = Dm(e, r, _.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case En:
          return (
            (e = en(31, r, n, a)),
            (e.elementType = En),
            (e.lanes = o),
            e
          );
        case Re:
          return Lr(r.children, a, o, n);
        case Ln:
          ((i = 8), (a |= 24));
          break;
        case Xe:
          return (
            (e = en(12, r, n, a | 2)),
            (e.elementType = Xe),
            (e.lanes = o),
            e
          );
        case xn:
          return (
            (e = en(13, r, n, a)),
            (e.elementType = xn),
            (e.lanes = o),
            e
          );
        case Ie:
          return (
            (e = en(19, r, n, a)),
            (e.elementType = Ie),
            (e.lanes = o),
            e
          );
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case je:
                i = 10;
                break e;
              case Gn:
                i = 9;
                break e;
              case un:
                i = 11;
                break e;
              case K:
                i = 14;
                break e;
              case $e:
                ((i = 16), (t = null));
                break e;
            }
          ((i = 29),
            (r = Error(d(130, e === null ? 'null' : typeof e, ''))),
            (t = null));
      }
    return (
      (n = en(i, r, n, a)),
      (n.elementType = e),
      (n.type = t),
      (n.lanes = o),
      n
    );
  }
  function Lr(e, n, r, t) {
    return ((e = en(7, e, t, n)), (e.lanes = r), e);
  }
  function xi(e, n, r) {
    return ((e = en(6, e, null, n)), (e.lanes = r), e);
  }
  function cl(e) {
    var n = en(18, null, null, 0);
    return ((n.stateNode = e), n);
  }
  function Ei(e, n, r) {
    return (
      (n = en(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = r),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var fl = new WeakMap();
  function cn(e, n) {
    if (typeof e == 'object' && e !== null) {
      var r = fl.get(e);
      return r !== void 0
        ? r
        : ((n = { value: e, source: n, stack: cs(n) }), fl.set(e, n), n);
    }
    return { value: e, source: n, stack: cs(n) };
  }
  var tt = [],
    at = 0,
    Ua = null,
    Bt = 0,
    fn = [],
    dn = 0,
    er = null,
    Nn = 1,
    zn = '';
  function An(e, n) {
    ((tt[at++] = Bt), (tt[at++] = Ua), (Ua = e), (Bt = n));
  }
  function dl(e, n, r) {
    ((fn[dn++] = Nn), (fn[dn++] = zn), (fn[dn++] = er), (er = e));
    var t = Nn;
    e = zn;
    var a = 32 - Ze(t) - 1;
    ((t &= ~(1 << a)), (r += 1));
    var o = 32 - Ze(n) + a;
    if (30 < o) {
      var i = a - (a % 5);
      ((o = (t & ((1 << i) - 1)).toString(32)),
        (t >>= i),
        (a -= i),
        (Nn = (1 << (32 - Ze(n) + a)) | (r << a) | t),
        (zn = o + e));
    } else ((Nn = (1 << o) | (r << a) | t), (zn = e));
  }
  function Ci(e) {
    e.return !== null && (An(e, 1), dl(e, 1, 0));
  }
  function Ni(e) {
    for (; e === Ua; )
      ((Ua = tt[--at]), (tt[at] = null), (Bt = tt[--at]), (tt[at] = null));
    for (; e === er; )
      ((er = fn[--dn]),
        (fn[dn] = null),
        (zn = fn[--dn]),
        (fn[dn] = null),
        (Nn = fn[--dn]),
        (fn[dn] = null));
  }
  function pl(e, n) {
    ((fn[dn++] = Nn),
      (fn[dn++] = zn),
      (fn[dn++] = er),
      (Nn = n.id),
      (zn = n.overflow),
      (er = e));
  }
  var Pe = null,
    de = null,
    X = !1,
    nr = null,
    pn = !1,
    zi = Error(d(519));
  function rr(e) {
    var n = Error(
      d(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? 'text'
          : 'HTML',
        '',
      ),
    );
    throw (Ut(cn(n, e)), zi);
  }
  function ml(e) {
    var n = e.stateNode,
      r = e.type,
      t = e.memoizedProps;
    switch (((n[_e] = e), (n[Be] = t), r)) {
      case 'dialog':
        (V('cancel', n), V('close', n));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        V('load', n);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < fa.length; r++) V(fa[r], n);
        break;
      case 'source':
        V('error', n);
        break;
      case 'img':
      case 'image':
      case 'link':
        (V('error', n), V('load', n));
        break;
      case 'details':
        V('toggle', n);
        break;
      case 'input':
        (V('invalid', n),
          zs(
            n,
            t.value,
            t.defaultValue,
            t.checked,
            t.defaultChecked,
            t.type,
            t.name,
            !0,
          ));
        break;
      case 'select':
        V('invalid', n);
        break;
      case 'textarea':
        (V('invalid', n), Ps(n, t.value, t.defaultValue, t.children));
    }
    ((r = t.children),
      (typeof r != 'string' && typeof r != 'number' && typeof r != 'bigint') ||
      n.textContent === '' + r ||
      t.suppressHydrationWarning === !0 ||
      Of(n.textContent, r)
        ? (t.popover != null && (V('beforetoggle', n), V('toggle', n)),
          t.onScroll != null && V('scroll', n),
          t.onScrollEnd != null && V('scrollend', n),
          t.onClick != null && (n.onclick = jn),
          (n = !0))
        : (n = !1),
      n || rr(e, !0));
  }
  function hl(e) {
    for (Pe = e.return; Pe; )
      switch (Pe.tag) {
        case 5:
        case 31:
        case 13:
          pn = !1;
          return;
        case 27:
        case 3:
          pn = !0;
          return;
        default:
          Pe = Pe.return;
      }
  }
  function ot(e) {
    if (e !== Pe) return !1;
    if (!X) return (hl(e), (X = !0), !1);
    var n = e.tag,
      r;
    if (
      ((r = n !== 3 && n !== 27) &&
        ((r = n === 5) &&
          ((r = e.type),
          (r =
            !(r !== 'form' && r !== 'button') || qu(e.type, e.memoizedProps))),
        (r = !r)),
      r && de && rr(e),
      hl(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(d(317));
      de = Hf(e);
    } else if (n === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(d(317));
      de = Hf(e);
    } else
      n === 27
        ? ((n = de), gr(e.type) ? ((e = Gu), (Gu = null), (de = e)) : (de = n))
        : (de = Pe ? mn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Tr() {
    ((de = Pe = null), (X = !1));
  }
  function _i() {
    var e = nr;
    return (
      e !== null &&
        (Qe === null ? (Qe = e) : Qe.push.apply(Qe, e), (nr = null)),
      e
    );
  }
  function Ut(e) {
    nr === null ? (nr = [e]) : nr.push(e);
  }
  var Pi = c(null),
    Or = null,
    Mn = null;
  function tr(e, n, r) {
    (N(Pi, n._currentValue), (n._currentValue = r));
  }
  function Dn(e) {
    ((e._currentValue = Pi.current), S(Pi));
  }
  function Li(e, n, r) {
    for (; e !== null; ) {
      var t = e.alternate;
      if (
        ((e.childLanes & n) !== n
          ? ((e.childLanes |= n), t !== null && (t.childLanes |= n))
          : t !== null && (t.childLanes & n) !== n && (t.childLanes |= n),
        e === r)
      )
        break;
      e = e.return;
    }
  }
  function Ti(e, n, r, t) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var o = a.dependencies;
      if (o !== null) {
        var i = a.child;
        o = o.firstContext;
        e: for (; o !== null; ) {
          var u = o;
          o = a;
          for (var s = 0; s < n.length; s++)
            if (u.context === n[s]) {
              ((o.lanes |= r),
                (u = o.alternate),
                u !== null && (u.lanes |= r),
                Li(o.return, r, e),
                t || (i = null));
              break e;
            }
          o = u.next;
        }
      } else if (a.tag === 18) {
        if (((i = a.return), i === null)) throw Error(d(341));
        ((i.lanes |= r),
          (o = i.alternate),
          o !== null && (o.lanes |= r),
          Li(i, r, e),
          (i = null));
      } else i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((a = i.sibling), a !== null)) {
            ((a.return = i.return), (i = a));
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function it(e, n, r, t) {
    e = null;
    for (var a = n, o = !1; a !== null; ) {
      if (!o) {
        if ((a.flags & 524288) !== 0) o = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error(d(387));
        if (((i = i.memoizedProps), i !== null)) {
          var u = a.type;
          Je(a.pendingProps.value, i.value) ||
            (e !== null ? e.push(u) : (e = [u]));
        }
      } else if (a === ne.current) {
        if (((i = a.alternate), i === null)) throw Error(d(387));
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(ga) : (e = [ga]));
      }
      a = a.return;
    }
    (e !== null && Ti(n, e, r, t), (n.flags |= 262144));
  }
  function Va(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Je(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function jr(e) {
    ((Or = e),
      (Mn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Le(e) {
    return gl(Or, e);
  }
  function qa(e, n) {
    return (Or === null && jr(e), gl(e, n));
  }
  function gl(e, n) {
    var r = n._currentValue;
    if (((n = { context: n, memoizedValue: r, next: null }), Mn === null)) {
      if (e === null) throw Error(d(308));
      ((Mn = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288));
    } else Mn = Mn.next = n;
    return r;
  }
  var Fp =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (r, t) {
                  e.push(t);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                e.forEach(function (r) {
                  return r();
                }));
            };
          },
    Rp = E.unstable_scheduleCallback,
    Ap = E.unstable_NormalPriority,
    we = {
      $$typeof: je,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Oi() {
    return { controller: new Fp(), data: new Map(), refCount: 0 };
  }
  function Vt(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Rp(Ap, function () {
          e.controller.abort();
        }));
  }
  var qt = null,
    ji = 0,
    ut = 0,
    st = null;
  function Mp(e, n) {
    if (qt === null) {
      var r = (qt = []);
      ((ji = 0),
        (ut = Au()),
        (st = {
          status: 'pending',
          value: void 0,
          then: function (t) {
            r.push(t);
          },
        }));
    }
    return (ji++, n.then(yl, yl), n);
  }
  function yl() {
    if (--ji === 0 && qt !== null) {
      st !== null && (st.status = 'fulfilled');
      var e = qt;
      ((qt = null), (ut = 0), (st = null));
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Dp(e, n) {
    var r = [],
      t = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (a) {
          r.push(a);
        },
      };
    return (
      e.then(
        function () {
          ((t.status = 'fulfilled'), (t.value = n));
          for (var a = 0; a < r.length; a++) (0, r[a])(n);
        },
        function (a) {
          for (t.status = 'rejected', t.reason = a, a = 0; a < r.length; a++)
            (0, r[a])(void 0);
        },
      ),
      t
    );
  }
  var vl = v.S;
  v.S = function (e, n) {
    ((nf = Ge()),
      typeof n == 'object' &&
        n !== null &&
        typeof n.then == 'function' &&
        Mp(e, n),
      vl !== null && vl(e, n));
  };
  var Fr = c(null);
  function Fi() {
    var e = Fr.current;
    return e !== null ? e : ce.pooledCache;
  }
  function Wa(e, n) {
    n === null ? N(Fr, Fr.current) : N(Fr, n.pool);
  }
  function bl() {
    var e = Fi();
    return e === null ? null : { parent: we._currentValue, pool: e };
  }
  var lt = Error(d(460)),
    Ri = Error(d(474)),
    Qa = Error(d(542)),
    Ka = { then: function () {} };
  function kl(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function wl(e, n, r) {
    switch (
      ((r = e[r]),
      r === void 0 ? e.push(n) : r !== n && (n.then(jn, jn), (n = r)),
      n.status)
    ) {
      case 'fulfilled':
        return n.value;
      case 'rejected':
        throw ((e = n.reason), xl(e), e);
      default:
        if (typeof n.status == 'string') n.then(jn, jn);
        else {
          if (((e = ce), e !== null && 100 < e.shellSuspendCounter))
            throw Error(d(482));
          ((e = n),
            (e.status = 'pending'),
            e.then(
              function (t) {
                if (n.status === 'pending') {
                  var a = n;
                  ((a.status = 'fulfilled'), (a.value = t));
                }
              },
              function (t) {
                if (n.status === 'pending') {
                  var a = n;
                  ((a.status = 'rejected'), (a.reason = t));
                }
              },
            ));
        }
        switch (n.status) {
          case 'fulfilled':
            return n.value;
          case 'rejected':
            throw ((e = n.reason), xl(e), e);
        }
        throw ((Ar = n), lt);
    }
  }
  function Rr(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (r) {
      throw r !== null && typeof r == 'object' && typeof r.then == 'function'
        ? ((Ar = r), lt)
        : r;
    }
  }
  var Ar = null;
  function Sl() {
    if (Ar === null) throw Error(d(459));
    var e = Ar;
    return ((Ar = null), e);
  }
  function xl(e) {
    if (e === lt || e === Qa) throw Error(d(483));
  }
  var ct = null,
    Wt = 0;
  function Xa(e) {
    var n = Wt;
    return ((Wt += 1), ct === null && (ct = []), wl(ct, e, n));
  }
  function Qt(e, n) {
    ((n = n.props.ref), (e.ref = n !== void 0 ? n : null));
  }
  function Ga(e, n) {
    throw n.$$typeof === fe
      ? Error(d(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          d(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(n).join(', ') + '}'
              : e,
          ),
        ));
  }
  function El(e) {
    function n(f, l) {
      if (e) {
        var p = f.deletions;
        p === null ? ((f.deletions = [l]), (f.flags |= 16)) : p.push(l);
      }
    }
    function r(f, l) {
      if (!e) return null;
      for (; l !== null; ) (n(f, l), (l = l.sibling));
      return null;
    }
    function t(f) {
      for (var l = new Map(); f !== null; )
        (f.key !== null ? l.set(f.key, f) : l.set(f.index, f), (f = f.sibling));
      return l;
    }
    function a(f, l) {
      return ((f = Rn(f, l)), (f.index = 0), (f.sibling = null), f);
    }
    function o(f, l, p) {
      return (
        (f.index = p),
        e
          ? ((p = f.alternate),
            p !== null
              ? ((p = p.index), p < l ? ((f.flags |= 67108866), l) : p)
              : ((f.flags |= 67108866), l))
          : ((f.flags |= 1048576), l)
      );
    }
    function i(f) {
      return (e && f.alternate === null && (f.flags |= 67108866), f);
    }
    function u(f, l, p, b) {
      return l === null || l.tag !== 6
        ? ((l = xi(p, f.mode, b)), (l.return = f), l)
        : ((l = a(l, p)), (l.return = f), l);
    }
    function s(f, l, p, b) {
      var O = p.type;
      return O === Re
        ? y(f, l, p.props.children, b, p.key)
        : l !== null &&
            (l.elementType === O ||
              (typeof O == 'object' &&
                O !== null &&
                O.$$typeof === $e &&
                Rr(O) === l.type))
          ? ((l = a(l, p.props)), Qt(l, p), (l.return = f), l)
          : ((l = Ba(p.type, p.key, p.props, null, f.mode, b)),
            Qt(l, p),
            (l.return = f),
            l);
    }
    function m(f, l, p, b) {
      return l === null ||
        l.tag !== 4 ||
        l.stateNode.containerInfo !== p.containerInfo ||
        l.stateNode.implementation !== p.implementation
        ? ((l = Ei(p, f.mode, b)), (l.return = f), l)
        : ((l = a(l, p.children || [])), (l.return = f), l);
    }
    function y(f, l, p, b, O) {
      return l === null || l.tag !== 7
        ? ((l = Lr(p, f.mode, b, O)), (l.return = f), l)
        : ((l = a(l, p)), (l.return = f), l);
    }
    function w(f, l, p) {
      if (
        (typeof l == 'string' && l !== '') ||
        typeof l == 'number' ||
        typeof l == 'bigint'
      )
        return ((l = xi('' + l, f.mode, p)), (l.return = f), l);
      if (typeof l == 'object' && l !== null) {
        switch (l.$$typeof) {
          case se:
            return (
              (p = Ba(l.type, l.key, l.props, null, f.mode, p)),
              Qt(p, l),
              (p.return = f),
              p
            );
          case De:
            return ((l = Ei(l, f.mode, p)), (l.return = f), l);
          case $e:
            return ((l = Rr(l)), w(f, l, p));
        }
        if (gn(l) || He(l))
          return ((l = Lr(l, f.mode, p, null)), (l.return = f), l);
        if (typeof l.then == 'function') return w(f, Xa(l), p);
        if (l.$$typeof === je) return w(f, qa(f, l), p);
        Ga(f, l);
      }
      return null;
    }
    function h(f, l, p, b) {
      var O = l !== null ? l.key : null;
      if (
        (typeof p == 'string' && p !== '') ||
        typeof p == 'number' ||
        typeof p == 'bigint'
      )
        return O !== null ? null : u(f, l, '' + p, b);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case se:
            return p.key === O ? s(f, l, p, b) : null;
          case De:
            return p.key === O ? m(f, l, p, b) : null;
          case $e:
            return ((p = Rr(p)), h(f, l, p, b));
        }
        if (gn(p) || He(p)) return O !== null ? null : y(f, l, p, b, null);
        if (typeof p.then == 'function') return h(f, l, Xa(p), b);
        if (p.$$typeof === je) return h(f, l, qa(f, p), b);
        Ga(f, p);
      }
      return null;
    }
    function g(f, l, p, b, O) {
      if (
        (typeof b == 'string' && b !== '') ||
        typeof b == 'number' ||
        typeof b == 'bigint'
      )
        return ((f = f.get(p) || null), u(l, f, '' + b, O));
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case se:
            return (
              (f = f.get(b.key === null ? p : b.key) || null),
              s(l, f, b, O)
            );
          case De:
            return (
              (f = f.get(b.key === null ? p : b.key) || null),
              m(l, f, b, O)
            );
          case $e:
            return ((b = Rr(b)), g(f, l, p, b, O));
        }
        if (gn(b) || He(b))
          return ((f = f.get(p) || null), y(l, f, b, O, null));
        if (typeof b.then == 'function') return g(f, l, p, Xa(b), O);
        if (b.$$typeof === je) return g(f, l, p, qa(l, b), O);
        Ga(l, b);
      }
      return null;
    }
    function z(f, l, p, b) {
      for (
        var O = null, Z = null, P = l, H = (l = 0), Q = null;
        P !== null && H < p.length;
        H++
      ) {
        P.index > H ? ((Q = P), (P = null)) : (Q = P.sibling);
        var J = h(f, P, p[H], b);
        if (J === null) {
          P === null && (P = Q);
          break;
        }
        (e && P && J.alternate === null && n(f, P),
          (l = o(J, l, H)),
          Z === null ? (O = J) : (Z.sibling = J),
          (Z = J),
          (P = Q));
      }
      if (H === p.length) return (r(f, P), X && An(f, H), O);
      if (P === null) {
        for (; H < p.length; H++)
          ((P = w(f, p[H], b)),
            P !== null &&
              ((l = o(P, l, H)),
              Z === null ? (O = P) : (Z.sibling = P),
              (Z = P)));
        return (X && An(f, H), O);
      }
      for (P = t(P); H < p.length; H++)
        ((Q = g(P, f, H, p[H], b)),
          Q !== null &&
            (e && Q.alternate !== null && P.delete(Q.key === null ? H : Q.key),
            (l = o(Q, l, H)),
            Z === null ? (O = Q) : (Z.sibling = Q),
            (Z = Q)));
      return (
        e &&
          P.forEach(function (wr) {
            return n(f, wr);
          }),
        X && An(f, H),
        O
      );
    }
    function F(f, l, p, b) {
      if (p == null) throw Error(d(151));
      for (
        var O = null, Z = null, P = l, H = (l = 0), Q = null, J = p.next();
        P !== null && !J.done;
        H++, J = p.next()
      ) {
        P.index > H ? ((Q = P), (P = null)) : (Q = P.sibling);
        var wr = h(f, P, J.value, b);
        if (wr === null) {
          P === null && (P = Q);
          break;
        }
        (e && P && wr.alternate === null && n(f, P),
          (l = o(wr, l, H)),
          Z === null ? (O = wr) : (Z.sibling = wr),
          (Z = wr),
          (P = Q));
      }
      if (J.done) return (r(f, P), X && An(f, H), O);
      if (P === null) {
        for (; !J.done; H++, J = p.next())
          ((J = w(f, J.value, b)),
            J !== null &&
              ((l = o(J, l, H)),
              Z === null ? (O = J) : (Z.sibling = J),
              (Z = J)));
        return (X && An(f, H), O);
      }
      for (P = t(P); !J.done; H++, J = p.next())
        ((J = g(P, f, H, J.value, b)),
          J !== null &&
            (e && J.alternate !== null && P.delete(J.key === null ? H : J.key),
            (l = o(J, l, H)),
            Z === null ? (O = J) : (Z.sibling = J),
            (Z = J)));
      return (
        e &&
          P.forEach(function (Xm) {
            return n(f, Xm);
          }),
        X && An(f, H),
        O
      );
    }
    function ue(f, l, p, b) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === Re &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case se:
            e: {
              for (var O = p.key; l !== null; ) {
                if (l.key === O) {
                  if (((O = p.type), O === Re)) {
                    if (l.tag === 7) {
                      (r(f, l.sibling),
                        (b = a(l, p.props.children)),
                        (b.return = f),
                        (f = b));
                      break e;
                    }
                  } else if (
                    l.elementType === O ||
                    (typeof O == 'object' &&
                      O !== null &&
                      O.$$typeof === $e &&
                      Rr(O) === l.type)
                  ) {
                    (r(f, l.sibling),
                      (b = a(l, p.props)),
                      Qt(b, p),
                      (b.return = f),
                      (f = b));
                    break e;
                  }
                  r(f, l);
                  break;
                } else n(f, l);
                l = l.sibling;
              }
              p.type === Re
                ? ((b = Lr(p.props.children, f.mode, b, p.key)),
                  (b.return = f),
                  (f = b))
                : ((b = Ba(p.type, p.key, p.props, null, f.mode, b)),
                  Qt(b, p),
                  (b.return = f),
                  (f = b));
            }
            return i(f);
          case De:
            e: {
              for (O = p.key; l !== null; ) {
                if (l.key === O)
                  if (
                    l.tag === 4 &&
                    l.stateNode.containerInfo === p.containerInfo &&
                    l.stateNode.implementation === p.implementation
                  ) {
                    (r(f, l.sibling),
                      (b = a(l, p.children || [])),
                      (b.return = f),
                      (f = b));
                    break e;
                  } else {
                    r(f, l);
                    break;
                  }
                else n(f, l);
                l = l.sibling;
              }
              ((b = Ei(p, f.mode, b)), (b.return = f), (f = b));
            }
            return i(f);
          case $e:
            return ((p = Rr(p)), ue(f, l, p, b));
        }
        if (gn(p)) return z(f, l, p, b);
        if (He(p)) {
          if (((O = He(p)), typeof O != 'function')) throw Error(d(150));
          return ((p = O.call(p)), F(f, l, p, b));
        }
        if (typeof p.then == 'function') return ue(f, l, Xa(p), b);
        if (p.$$typeof === je) return ue(f, l, qa(f, p), b);
        Ga(f, p);
      }
      return (typeof p == 'string' && p !== '') ||
        typeof p == 'number' ||
        typeof p == 'bigint'
        ? ((p = '' + p),
          l !== null && l.tag === 6
            ? (r(f, l.sibling), (b = a(l, p)), (b.return = f), (f = b))
            : (r(f, l), (b = xi(p, f.mode, b)), (b.return = f), (f = b)),
          i(f))
        : r(f, l);
    }
    return function (f, l, p, b) {
      try {
        Wt = 0;
        var O = ue(f, l, p, b);
        return ((ct = null), O);
      } catch (P) {
        if (P === lt || P === Qa) throw P;
        var Z = en(29, P, null, f.mode);
        return ((Z.lanes = b), (Z.return = f), Z);
      } finally {
      }
    };
  }
  var Mr = El(!0),
    Cl = El(!1),
    ar = !1;
  function Ai(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Mi(e, n) {
    ((e = e.updateQueue),
      n.updateQueue === e &&
        (n.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function or(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ir(e, n, r) {
    var t = e.updateQueue;
    if (t === null) return null;
    if (((t = t.shared), (ee & 2) !== 0)) {
      var a = t.pending;
      return (
        a === null ? (n.next = n) : ((n.next = a.next), (a.next = n)),
        (t.pending = n),
        (n = Ha(e)),
        sl(e, null, r),
        n
      );
    }
    return ($a(e, t, n, r), Ha(e));
  }
  function Kt(e, n, r) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (r & 4194048) !== 0))
    ) {
      var t = n.lanes;
      ((t &= e.pendingLanes), (r |= t), (n.lanes = r), gs(e, r));
    }
  }
  function Di(e, n) {
    var r = e.updateQueue,
      t = e.alternate;
    if (t !== null && ((t = t.updateQueue), r === t)) {
      var a = null,
        o = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
        do {
          var i = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null,
          };
          (o === null ? (a = o = i) : (o = o.next = i), (r = r.next));
        } while (r !== null);
        o === null ? (a = o = n) : (o = o.next = n);
      } else a = o = n;
      ((r = {
        baseState: t.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: o,
        shared: t.shared,
        callbacks: t.callbacks,
      }),
        (e.updateQueue = r));
      return;
    }
    ((e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = n) : (e.next = n),
      (r.lastBaseUpdate = n));
  }
  var Ii = !1;
  function Xt() {
    if (Ii) {
      var e = st;
      if (e !== null) throw e;
    }
  }
  function Gt(e, n, r, t) {
    Ii = !1;
    var a = e.updateQueue;
    ar = !1;
    var o = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      u = a.shared.pending;
    if (u !== null) {
      a.shared.pending = null;
      var s = u,
        m = s.next;
      ((s.next = null), i === null ? (o = m) : (i.next = m), (i = s));
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (u = y.lastBaseUpdate),
        u !== i &&
          (u === null ? (y.firstBaseUpdate = m) : (u.next = m),
          (y.lastBaseUpdate = s)));
    }
    if (o !== null) {
      var w = a.baseState;
      ((i = 0), (y = m = s = null), (u = o));
      do {
        var h = u.lane & -536870913,
          g = h !== u.lane;
        if (g ? (W & h) === h : (t & h) === h) {
          (h !== 0 && h === ut && (Ii = !0),
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
            var z = e,
              F = u;
            h = n;
            var ue = r;
            switch (F.tag) {
              case 1:
                if (((z = F.payload), typeof z == 'function')) {
                  w = z.call(ue, w, h);
                  break e;
                }
                w = z;
                break e;
              case 3:
                z.flags = (z.flags & -65537) | 128;
              case 0:
                if (
                  ((z = F.payload),
                  (h = typeof z == 'function' ? z.call(ue, w, h) : z),
                  h == null)
                )
                  break e;
                w = j({}, w, h);
                break e;
              case 2:
                ar = !0;
            }
          }
          ((h = u.callback),
            h !== null &&
              ((e.flags |= 64),
              g && (e.flags |= 8192),
              (g = a.callbacks),
              g === null ? (a.callbacks = [h]) : g.push(h)));
        } else
          ((g = {
            lane: h,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null,
          }),
            y === null ? ((m = y = g), (s = w)) : (y = y.next = g),
            (i |= h));
        if (((u = u.next), u === null)) {
          if (((u = a.shared.pending), u === null)) break;
          ((g = u),
            (u = g.next),
            (g.next = null),
            (a.lastBaseUpdate = g),
            (a.shared.pending = null));
        }
      } while (!0);
      (y === null && (s = w),
        (a.baseState = s),
        (a.firstBaseUpdate = m),
        (a.lastBaseUpdate = y),
        o === null && (a.shared.lanes = 0),
        (fr |= i),
        (e.lanes = i),
        (e.memoizedState = w));
    }
  }
  function Nl(e, n) {
    if (typeof e != 'function') throw Error(d(191, e));
    e.call(n);
  }
  function zl(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++) Nl(r[e], n);
  }
  var ft = c(null),
    Ya = c(0);
  function _l(e, n) {
    ((e = Qn), N(Ya, e), N(ft, n), (Qn = e | n.baseLanes));
  }
  function $i() {
    (N(Ya, Qn), N(ft, ft.current));
  }
  function Hi() {
    ((Qn = Ya.current), S(ft), S(Ya));
  }
  var nn = c(null),
    bn = null;
  function ur(e) {
    var n = e.alternate;
    (N(be, be.current & 1),
      N(nn, e),
      bn === null &&
        (n === null || ft.current !== null || n.memoizedState !== null) &&
        (bn = e));
  }
  function Bi(e) {
    (N(be, be.current), N(nn, e), bn === null && (bn = e));
  }
  function Pl(e) {
    e.tag === 22
      ? (N(be, be.current), N(nn, e), bn === null && (bn = e))
      : sr();
  }
  function sr() {
    (N(be, be.current), N(nn, nn.current));
  }
  function rn(e) {
    (S(nn), bn === e && (bn = null), S(be));
  }
  var be = c(0);
  function Za(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && ((r = r.dehydrated), r === null || Ku(r) || Xu(r)))
          return n;
      } else if (
        n.tag === 19 &&
        (n.memoizedProps.revealOrder === 'forwards' ||
          n.memoizedProps.revealOrder === 'backwards' ||
          n.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          n.memoizedProps.revealOrder === 'together')
      ) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  var In = 0,
    I = null,
    oe = null,
    Se = null,
    Ja = !1,
    dt = !1,
    Dr = !1,
    eo = 0,
    Yt = 0,
    pt = null,
    Ip = 0;
  function he() {
    throw Error(d(321));
  }
  function Ui(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!Je(e[r], n[r])) return !1;
    return !0;
  }
  function Vi(e, n, r, t, a, o) {
    return (
      (In = o),
      (I = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (v.H = e === null || e.memoizedState === null ? dc : ou),
      (Dr = !1),
      (o = r(t, a)),
      (Dr = !1),
      dt && (o = Tl(n, r, t, a)),
      Ll(e),
      o
    );
  }
  function Ll(e) {
    v.H = ea;
    var n = oe !== null && oe.next !== null;
    if (((In = 0), (Se = oe = I = null), (Ja = !1), (Yt = 0), (pt = null), n))
      throw Error(d(300));
    e === null ||
      xe ||
      ((e = e.dependencies), e !== null && Va(e) && (xe = !0));
  }
  function Tl(e, n, r, t) {
    I = e;
    var a = 0;
    do {
      if ((dt && (pt = null), (Yt = 0), (dt = !1), 25 <= a))
        throw Error(d(301));
      if (((a += 1), (Se = oe = null), e.updateQueue != null)) {
        var o = e.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((v.H = pc), (o = n(r, t)));
    } while (dt);
    return o;
  }
  function $p() {
    var e = v.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == 'function' ? Zt(n) : n),
      (e = e.useState()[0]),
      (oe !== null ? oe.memoizedState : null) !== e && (I.flags |= 1024),
      n
    );
  }
  function qi() {
    var e = eo !== 0;
    return ((eo = 0), e);
  }
  function Wi(e, n, r) {
    ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~r));
  }
  function Qi(e) {
    if (Ja) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        (n !== null && (n.pending = null), (e = e.next));
      }
      Ja = !1;
    }
    ((In = 0), (Se = oe = I = null), (dt = !1), (Yt = eo = 0), (pt = null));
  }
  function Me() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Se === null ? (I.memoizedState = Se = e) : (Se = Se.next = e), Se);
  }
  function ke() {
    if (oe === null) {
      var e = I.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = oe.next;
    var n = Se === null ? I.memoizedState : Se.next;
    if (n !== null) ((Se = n), (oe = e));
    else {
      if (e === null)
        throw I.alternate === null ? Error(d(467)) : Error(d(310));
      ((oe = e),
        (e = {
          memoizedState: oe.memoizedState,
          baseState: oe.baseState,
          baseQueue: oe.baseQueue,
          queue: oe.queue,
          next: null,
        }),
        Se === null ? (I.memoizedState = Se = e) : (Se = Se.next = e));
    }
    return Se;
  }
  function no() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zt(e) {
    var n = Yt;
    return (
      (Yt += 1),
      pt === null && (pt = []),
      (e = wl(pt, e, n)),
      (n = I),
      (Se === null ? n.memoizedState : Se.next) === null &&
        ((n = n.alternate),
        (v.H = n === null || n.memoizedState === null ? dc : ou)),
      e
    );
  }
  function ro(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Zt(e);
      if (e.$$typeof === je) return Le(e);
    }
    throw Error(d(438, String(e)));
  }
  function Ki(e) {
    var n = null,
      r = I.updateQueue;
    if ((r !== null && (n = r.memoCache), n == null)) {
      var t = I.alternate;
      t !== null &&
        ((t = t.updateQueue),
        t !== null &&
          ((t = t.memoCache),
          t != null &&
            (n = {
              data: t.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      r === null && ((r = no()), (I.updateQueue = r)),
      (r.memoCache = n),
      (r = n.data[n.index]),
      r === void 0)
    )
      for (r = n.data[n.index] = Array(e), t = 0; t < e; t++) r[t] = Br;
    return (n.index++, r);
  }
  function $n(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function to(e) {
    var n = ke();
    return Xi(n, oe, e);
  }
  function Xi(e, n, r) {
    var t = e.queue;
    if (t === null) throw Error(d(311));
    t.lastRenderedReducer = r;
    var a = e.baseQueue,
      o = t.pending;
    if (o !== null) {
      if (a !== null) {
        var i = a.next;
        ((a.next = o.next), (o.next = i));
      }
      ((n.baseQueue = a = o), (t.pending = null));
    }
    if (((o = e.baseState), a === null)) e.memoizedState = o;
    else {
      n = a.next;
      var u = (i = null),
        s = null,
        m = n,
        y = !1;
      do {
        var w = m.lane & -536870913;
        if (w !== m.lane ? (W & w) === w : (In & w) === w) {
          var h = m.revertLane;
          if (h === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: m.action,
                  hasEagerState: m.hasEagerState,
                  eagerState: m.eagerState,
                  next: null,
                }),
              w === ut && (y = !0));
          else if ((In & h) === h) {
            ((m = m.next), h === ut && (y = !0));
            continue;
          } else
            ((w = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null,
            }),
              s === null ? ((u = s = w), (i = o)) : (s = s.next = w),
              (I.lanes |= h),
              (fr |= h));
          ((w = m.action),
            Dr && r(o, w),
            (o = m.hasEagerState ? m.eagerState : r(o, w)));
        } else
          ((h = {
            lane: w,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null,
          }),
            s === null ? ((u = s = h), (i = o)) : (s = s.next = h),
            (I.lanes |= w),
            (fr |= w));
        m = m.next;
      } while (m !== null && m !== n);
      if (
        (s === null ? (i = o) : (s.next = u),
        !Je(o, e.memoizedState) && ((xe = !0), y && ((r = st), r !== null)))
      )
        throw r;
      ((e.memoizedState = o),
        (e.baseState = i),
        (e.baseQueue = s),
        (t.lastRenderedState = o));
    }
    return (a === null && (t.lanes = 0), [e.memoizedState, t.dispatch]);
  }
  function Gi(e) {
    var n = ke(),
      r = n.queue;
    if (r === null) throw Error(d(311));
    r.lastRenderedReducer = e;
    var t = r.dispatch,
      a = r.pending,
      o = n.memoizedState;
    if (a !== null) {
      r.pending = null;
      var i = (a = a.next);
      do ((o = e(o, i.action)), (i = i.next));
      while (i !== a);
      (Je(o, n.memoizedState) || (xe = !0),
        (n.memoizedState = o),
        n.baseQueue === null && (n.baseState = o),
        (r.lastRenderedState = o));
    }
    return [o, t];
  }
  function Ol(e, n, r) {
    var t = I,
      a = ke(),
      o = X;
    if (o) {
      if (r === void 0) throw Error(d(407));
      r = r();
    } else r = n();
    var i = !Je((oe || a).memoizedState, r);
    if (
      (i && ((a.memoizedState = r), (xe = !0)),
      (a = a.queue),
      Ji(Rl.bind(null, t, a, e), [e]),
      a.getSnapshot !== n || i || (Se !== null && Se.memoizedState.tag & 1))
    ) {
      if (
        ((t.flags |= 2048),
        mt(9, { destroy: void 0 }, Fl.bind(null, t, a, r, n), null),
        ce === null)
      )
        throw Error(d(349));
      o || (In & 127) !== 0 || jl(t, n, r);
    }
    return r;
  }
  function jl(e, n, r) {
    ((e.flags |= 16384),
      (e = { getSnapshot: n, value: r }),
      (n = I.updateQueue),
      n === null
        ? ((n = no()), (I.updateQueue = n), (n.stores = [e]))
        : ((r = n.stores), r === null ? (n.stores = [e]) : r.push(e)));
  }
  function Fl(e, n, r, t) {
    ((n.value = r), (n.getSnapshot = t), Al(n) && Ml(e));
  }
  function Rl(e, n, r) {
    return r(function () {
      Al(n) && Ml(e);
    });
  }
  function Al(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !Je(e, r);
    } catch {
      return !0;
    }
  }
  function Ml(e) {
    var n = Pr(e, 2);
    n !== null && Ke(n, e, 2);
  }
  function Yi(e) {
    var n = Me();
    if (typeof e == 'function') {
      var r = e;
      if (((e = r()), Dr)) {
        Yn(!0);
        try {
          r();
        } finally {
          Yn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = e),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: e,
      }),
      n
    );
  }
  function Dl(e, n, r, t) {
    return ((e.baseState = r), Xi(e, oe, typeof t == 'function' ? t : $n));
  }
  function Hp(e, n, r, t, a) {
    if (io(e)) throw Error(d(485));
    if (((e = n.action), e !== null)) {
      var o = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          o.listeners.push(i);
        },
      };
      (v.T !== null ? r(!0) : (o.isTransition = !1),
        t(o),
        (r = n.pending),
        r === null
          ? ((o.next = n.pending = o), Il(n, o))
          : ((o.next = r.next), (n.pending = r.next = o)));
    }
  }
  function Il(e, n) {
    var r = n.action,
      t = n.payload,
      a = e.state;
    if (n.isTransition) {
      var o = v.T,
        i = {};
      v.T = i;
      try {
        var u = r(a, t),
          s = v.S;
        (s !== null && s(i, u), $l(e, n, u));
      } catch (m) {
        Zi(e, n, m);
      } finally {
        (o !== null && i.types !== null && (o.types = i.types), (v.T = o));
      }
    } else
      try {
        ((o = r(a, t)), $l(e, n, o));
      } catch (m) {
        Zi(e, n, m);
      }
  }
  function $l(e, n, r) {
    r !== null && typeof r == 'object' && typeof r.then == 'function'
      ? r.then(
          function (t) {
            Hl(e, n, t);
          },
          function (t) {
            return Zi(e, n, t);
          },
        )
      : Hl(e, n, r);
  }
  function Hl(e, n, r) {
    ((n.status = 'fulfilled'),
      (n.value = r),
      Bl(n),
      (e.state = r),
      (n = e.pending),
      n !== null &&
        ((r = n.next),
        r === n ? (e.pending = null) : ((r = r.next), (n.next = r), Il(e, r))));
  }
  function Zi(e, n, r) {
    var t = e.pending;
    if (((e.pending = null), t !== null)) {
      t = t.next;
      do ((n.status = 'rejected'), (n.reason = r), Bl(n), (n = n.next));
      while (n !== t);
    }
    e.action = null;
  }
  function Bl(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Ul(e, n) {
    return n;
  }
  function Vl(e, n) {
    if (X) {
      var r = ce.formState;
      if (r !== null) {
        e: {
          var t = I;
          if (X) {
            if (de) {
              n: {
                for (var a = de, o = pn; a.nodeType !== 8; ) {
                  if (!o) {
                    a = null;
                    break n;
                  }
                  if (((a = mn(a.nextSibling)), a === null)) {
                    a = null;
                    break n;
                  }
                }
                ((o = a.data), (a = o === 'F!' || o === 'F' ? a : null));
              }
              if (a) {
                ((de = mn(a.nextSibling)), (t = a.data === 'F!'));
                break e;
              }
            }
            rr(t);
          }
          t = !1;
        }
        t && (n = r[0]);
      }
    }
    return (
      (r = Me()),
      (r.memoizedState = r.baseState = n),
      (t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ul,
        lastRenderedState: n,
      }),
      (r.queue = t),
      (r = lc.bind(null, I, t)),
      (t.dispatch = r),
      (t = Yi(!1)),
      (o = au.bind(null, I, !1, t.queue)),
      (t = Me()),
      (a = { state: n, dispatch: null, action: e, pending: null }),
      (t.queue = a),
      (r = Hp.bind(null, I, a, o, r)),
      (a.dispatch = r),
      (t.memoizedState = e),
      [n, r, !1]
    );
  }
  function ql(e) {
    var n = ke();
    return Wl(n, oe, e);
  }
  function Wl(e, n, r) {
    if (
      ((n = Xi(e, n, Ul)[0]),
      (e = to($n)[0]),
      typeof n == 'object' && n !== null && typeof n.then == 'function')
    )
      try {
        var t = Zt(n);
      } catch (i) {
        throw i === lt ? Qa : i;
      }
    else t = n;
    n = ke();
    var a = n.queue,
      o = a.dispatch;
    return (
      r !== n.memoizedState &&
        ((I.flags |= 2048),
        mt(9, { destroy: void 0 }, Bp.bind(null, a, r), null)),
      [t, o, e]
    );
  }
  function Bp(e, n) {
    e.action = n;
  }
  function Ql(e) {
    var n = ke(),
      r = oe;
    if (r !== null) return Wl(n, r, e);
    (ke(), (n = n.memoizedState), (r = ke()));
    var t = r.queue.dispatch;
    return ((r.memoizedState = e), [n, t, !1]);
  }
  function mt(e, n, r, t) {
    return (
      (e = { tag: e, create: r, deps: t, inst: n, next: null }),
      (n = I.updateQueue),
      n === null && ((n = no()), (I.updateQueue = n)),
      (r = n.lastEffect),
      r === null
        ? (n.lastEffect = e.next = e)
        : ((t = r.next), (r.next = e), (e.next = t), (n.lastEffect = e)),
      e
    );
  }
  function Kl() {
    return ke().memoizedState;
  }
  function ao(e, n, r, t) {
    var a = Me();
    ((I.flags |= e),
      (a.memoizedState = mt(
        1 | n,
        { destroy: void 0 },
        r,
        t === void 0 ? null : t,
      )));
  }
  function oo(e, n, r, t) {
    var a = ke();
    t = t === void 0 ? null : t;
    var o = a.memoizedState.inst;
    oe !== null && t !== null && Ui(t, oe.memoizedState.deps)
      ? (a.memoizedState = mt(n, o, r, t))
      : ((I.flags |= e), (a.memoizedState = mt(1 | n, o, r, t)));
  }
  function Xl(e, n) {
    ao(8390656, 8, e, n);
  }
  function Ji(e, n) {
    oo(2048, 8, e, n);
  }
  function Up(e) {
    I.flags |= 4;
    var n = I.updateQueue;
    if (n === null) ((n = no()), (I.updateQueue = n), (n.events = [e]));
    else {
      var r = n.events;
      r === null ? (n.events = [e]) : r.push(e);
    }
  }
  function Gl(e) {
    var n = ke().memoizedState;
    return (
      Up({ ref: n, nextImpl: e }),
      function () {
        if ((ee & 2) !== 0) throw Error(d(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function Yl(e, n) {
    return oo(4, 2, e, n);
  }
  function Zl(e, n) {
    return oo(4, 4, e, n);
  }
  function Jl(e, n) {
    if (typeof n == 'function') {
      e = e();
      var r = n(e);
      return function () {
        typeof r == 'function' ? r() : n(null);
      };
    }
    if (n != null)
      return (
        (e = e()),
        (n.current = e),
        function () {
          n.current = null;
        }
      );
  }
  function ec(e, n, r) {
    ((r = r != null ? r.concat([e]) : null), oo(4, 4, Jl.bind(null, n, e), r));
  }
  function eu() {}
  function nc(e, n) {
    var r = ke();
    n = n === void 0 ? null : n;
    var t = r.memoizedState;
    return n !== null && Ui(n, t[1]) ? t[0] : ((r.memoizedState = [e, n]), e);
  }
  function rc(e, n) {
    var r = ke();
    n = n === void 0 ? null : n;
    var t = r.memoizedState;
    if (n !== null && Ui(n, t[1])) return t[0];
    if (((t = e()), Dr)) {
      Yn(!0);
      try {
        e();
      } finally {
        Yn(!1);
      }
    }
    return ((r.memoizedState = [t, n]), t);
  }
  function nu(e, n, r) {
    return r === void 0 || ((In & 1073741824) !== 0 && (W & 261930) === 0)
      ? (e.memoizedState = n)
      : ((e.memoizedState = r), (e = tf()), (I.lanes |= e), (fr |= e), r);
  }
  function tc(e, n, r, t) {
    return Je(r, n)
      ? r
      : ft.current !== null
        ? ((e = nu(e, r, t)), Je(e, n) || (xe = !0), e)
        : (In & 42) === 0 || ((In & 1073741824) !== 0 && (W & 261930) === 0)
          ? ((xe = !0), (e.memoizedState = r))
          : ((e = tf()), (I.lanes |= e), (fr |= e), n);
  }
  function ac(e, n, r, t, a) {
    var o = C.p;
    C.p = o !== 0 && 8 > o ? o : 8;
    var i = v.T,
      u = {};
    ((v.T = u), au(e, !1, n, r));
    try {
      var s = a(),
        m = v.S;
      if (
        (m !== null && m(u, s),
        s !== null && typeof s == 'object' && typeof s.then == 'function')
      ) {
        var y = Dp(s, t);
        Jt(e, n, y, on(e));
      } else Jt(e, n, t, on(e));
    } catch (w) {
      Jt(e, n, { then: function () {}, status: 'rejected', reason: w }, on());
    } finally {
      ((C.p = o),
        i !== null && u.types !== null && (i.types = u.types),
        (v.T = i));
    }
  }
  function Vp() {}
  function ru(e, n, r, t) {
    if (e.tag !== 5) throw Error(d(476));
    var a = oc(e).queue;
    ac(
      e,
      a,
      n,
      R,
      r === null
        ? Vp
        : function () {
            return (ic(e), r(t));
          },
    );
  }
  function oc(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: R,
      baseState: R,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: R,
      },
      next: null,
    };
    var r = {};
    return (
      (n.next = {
        memoizedState: r,
        baseState: r,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $n,
          lastRenderedState: r,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function ic(e) {
    var n = oc(e);
    (n.next === null && (n = e.alternate.memoizedState),
      Jt(e, n.next.queue, {}, on()));
  }
  function tu() {
    return Le(ga);
  }
  function uc() {
    return ke().memoizedState;
  }
  function sc() {
    return ke().memoizedState;
  }
  function qp(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = on();
          e = or(r);
          var t = ir(n, e, r);
          (t !== null && (Ke(t, n, r), Kt(t, n, r)),
            (n = { cache: Oi() }),
            (e.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function Wp(e, n, r) {
    var t = on();
    ((r = {
      lane: t,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      io(e)
        ? cc(n, r)
        : ((r = wi(e, n, r, t)), r !== null && (Ke(r, e, t), fc(r, n, t))));
  }
  function lc(e, n, r) {
    var t = on();
    Jt(e, n, r, t);
  }
  function Jt(e, n, r, t) {
    var a = {
      lane: t,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (io(e)) cc(n, a);
    else {
      var o = e.alternate;
      if (
        e.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = n.lastRenderedReducer), o !== null)
      )
        try {
          var i = n.lastRenderedState,
            u = o(i, r);
          if (((a.hasEagerState = !0), (a.eagerState = u), Je(u, i)))
            return ($a(e, n, a, 0), ce === null && Ia(), !1);
        } catch {
        } finally {
        }
      if (((r = wi(e, n, a, t)), r !== null))
        return (Ke(r, e, t), fc(r, n, t), !0);
    }
    return !1;
  }
  function au(e, n, r, t) {
    if (
      ((t = {
        lane: 2,
        revertLane: Au(),
        gesture: null,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      io(e))
    ) {
      if (n) throw Error(d(479));
    } else ((n = wi(e, r, t, 2)), n !== null && Ke(n, e, 2));
  }
  function io(e) {
    var n = e.alternate;
    return e === I || (n !== null && n === I);
  }
  function cc(e, n) {
    dt = Ja = !0;
    var r = e.pending;
    (r === null ? (n.next = n) : ((n.next = r.next), (r.next = n)),
      (e.pending = n));
  }
  function fc(e, n, r) {
    if ((r & 4194048) !== 0) {
      var t = n.lanes;
      ((t &= e.pendingLanes), (r |= t), (n.lanes = r), gs(e, r));
    }
  }
  var ea = {
    readContext: Le,
    use: ro,
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
  ea.useEffectEvent = he;
  var dc = {
      readContext: Le,
      use: ro,
      useCallback: function (e, n) {
        return ((Me().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: Le,
      useEffect: Xl,
      useImperativeHandle: function (e, n, r) {
        ((r = r != null ? r.concat([e]) : null),
          ao(4194308, 4, Jl.bind(null, n, e), r));
      },
      useLayoutEffect: function (e, n) {
        return ao(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        ao(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var r = Me();
        n = n === void 0 ? null : n;
        var t = e();
        if (Dr) {
          Yn(!0);
          try {
            e();
          } finally {
            Yn(!1);
          }
        }
        return ((r.memoizedState = [t, n]), t);
      },
      useReducer: function (e, n, r) {
        var t = Me();
        if (r !== void 0) {
          var a = r(n);
          if (Dr) {
            Yn(!0);
            try {
              r(n);
            } finally {
              Yn(!1);
            }
          }
        } else a = n;
        return (
          (t.memoizedState = t.baseState = a),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: a,
          }),
          (t.queue = e),
          (e = e.dispatch = Wp.bind(null, I, e)),
          [t.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Me();
        return ((e = { current: e }), (n.memoizedState = e));
      },
      useState: function (e) {
        e = Yi(e);
        var n = e.queue,
          r = lc.bind(null, I, n);
        return ((n.dispatch = r), [e.memoizedState, r]);
      },
      useDebugValue: eu,
      useDeferredValue: function (e, n) {
        var r = Me();
        return nu(r, e, n);
      },
      useTransition: function () {
        var e = Yi(!1);
        return (
          (e = ac.bind(null, I, e.queue, !0, !1)),
          (Me().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, r) {
        var t = I,
          a = Me();
        if (X) {
          if (r === void 0) throw Error(d(407));
          r = r();
        } else {
          if (((r = n()), ce === null)) throw Error(d(349));
          (W & 127) !== 0 || jl(t, n, r);
        }
        a.memoizedState = r;
        var o = { value: r, getSnapshot: n };
        return (
          (a.queue = o),
          Xl(Rl.bind(null, t, o, e), [e]),
          (t.flags |= 2048),
          mt(9, { destroy: void 0 }, Fl.bind(null, t, o, r, n), null),
          r
        );
      },
      useId: function () {
        var e = Me(),
          n = ce.identifierPrefix;
        if (X) {
          var r = zn,
            t = Nn;
          ((r = (t & ~(1 << (32 - Ze(t) - 1))).toString(32) + r),
            (n = '_' + n + 'R_' + r),
            (r = eo++),
            0 < r && (n += 'H' + r.toString(32)),
            (n += '_'));
        } else ((r = Ip++), (n = '_' + n + 'r_' + r.toString(32) + '_'));
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: tu,
      useFormState: Vl,
      useActionState: Vl,
      useOptimistic: function (e) {
        var n = Me();
        n.memoizedState = n.baseState = e;
        var r = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = r),
          (n = au.bind(null, I, !0, r)),
          (r.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: Ki,
      useCacheRefresh: function () {
        return (Me().memoizedState = qp.bind(null, I));
      },
      useEffectEvent: function (e) {
        var n = Me(),
          r = { impl: e };
        return (
          (n.memoizedState = r),
          function () {
            if ((ee & 2) !== 0) throw Error(d(440));
            return r.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ou = {
      readContext: Le,
      use: ro,
      useCallback: nc,
      useContext: Le,
      useEffect: Ji,
      useImperativeHandle: ec,
      useInsertionEffect: Yl,
      useLayoutEffect: Zl,
      useMemo: rc,
      useReducer: to,
      useRef: Kl,
      useState: function () {
        return to($n);
      },
      useDebugValue: eu,
      useDeferredValue: function (e, n) {
        var r = ke();
        return tc(r, oe.memoizedState, e, n);
      },
      useTransition: function () {
        var e = to($n)[0],
          n = ke().memoizedState;
        return [typeof e == 'boolean' ? e : Zt(e), n];
      },
      useSyncExternalStore: Ol,
      useId: uc,
      useHostTransitionStatus: tu,
      useFormState: ql,
      useActionState: ql,
      useOptimistic: function (e, n) {
        var r = ke();
        return Dl(r, oe, e, n);
      },
      useMemoCache: Ki,
      useCacheRefresh: sc,
    };
  ou.useEffectEvent = Gl;
  var pc = {
    readContext: Le,
    use: ro,
    useCallback: nc,
    useContext: Le,
    useEffect: Ji,
    useImperativeHandle: ec,
    useInsertionEffect: Yl,
    useLayoutEffect: Zl,
    useMemo: rc,
    useReducer: Gi,
    useRef: Kl,
    useState: function () {
      return Gi($n);
    },
    useDebugValue: eu,
    useDeferredValue: function (e, n) {
      var r = ke();
      return oe === null ? nu(r, e, n) : tc(r, oe.memoizedState, e, n);
    },
    useTransition: function () {
      var e = Gi($n)[0],
        n = ke().memoizedState;
      return [typeof e == 'boolean' ? e : Zt(e), n];
    },
    useSyncExternalStore: Ol,
    useId: uc,
    useHostTransitionStatus: tu,
    useFormState: Ql,
    useActionState: Ql,
    useOptimistic: function (e, n) {
      var r = ke();
      return oe !== null
        ? Dl(r, oe, e, n)
        : ((r.baseState = e), [e, r.queue.dispatch]);
    },
    useMemoCache: Ki,
    useCacheRefresh: sc,
  };
  pc.useEffectEvent = Gl;
  function iu(e, n, r, t) {
    ((n = e.memoizedState),
      (r = r(t, n)),
      (r = r == null ? n : j({}, n, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r));
  }
  var uu = {
    enqueueSetState: function (e, n, r) {
      e = e._reactInternals;
      var t = on(),
        a = or(t);
      ((a.payload = n),
        r != null && (a.callback = r),
        (n = ir(e, a, t)),
        n !== null && (Ke(n, e, t), Kt(n, e, t)));
    },
    enqueueReplaceState: function (e, n, r) {
      e = e._reactInternals;
      var t = on(),
        a = or(t);
      ((a.tag = 1),
        (a.payload = n),
        r != null && (a.callback = r),
        (n = ir(e, a, t)),
        n !== null && (Ke(n, e, t), Kt(n, e, t)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var r = on(),
        t = or(r);
      ((t.tag = 2),
        n != null && (t.callback = n),
        (n = ir(e, t, r)),
        n !== null && (Ke(n, e, r), Kt(n, e, r)));
    },
  };
  function mc(e, n, r, t, a, o, i) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(t, o, i)
        : n.prototype && n.prototype.isPureReactComponent
          ? !$t(r, t) || !$t(a, o)
          : !0
    );
  }
  function hc(e, n, r, t) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == 'function' &&
        n.componentWillReceiveProps(r, t),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(r, t),
      n.state !== e && uu.enqueueReplaceState(n, n.state, null));
  }
  function Ir(e, n) {
    var r = n;
    if ('ref' in n) {
      r = {};
      for (var t in n) t !== 'ref' && (r[t] = n[t]);
    }
    if ((e = e.defaultProps)) {
      r === n && (r = j({}, r));
      for (var a in e) r[a] === void 0 && (r[a] = e[a]);
    }
    return r;
  }
  function gc(e) {
    Da(e);
  }
  function yc(e) {
    console.error(e);
  }
  function vc(e) {
    Da(e);
  }
  function uo(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (t) {
      setTimeout(function () {
        throw t;
      });
    }
  }
  function bc(e, n, r) {
    try {
      var t = e.onCaughtError;
      t(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function su(e, n, r) {
    return (
      (r = or(r)),
      (r.tag = 3),
      (r.payload = { element: null }),
      (r.callback = function () {
        uo(e, n);
      }),
      r
    );
  }
  function kc(e) {
    return ((e = or(e)), (e.tag = 3), e);
  }
  function wc(e, n, r, t) {
    var a = r.type.getDerivedStateFromError;
    if (typeof a == 'function') {
      var o = t.value;
      ((e.payload = function () {
        return a(o);
      }),
        (e.callback = function () {
          bc(n, r, t);
        }));
    }
    var i = r.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (e.callback = function () {
        (bc(n, r, t),
          typeof a != 'function' &&
            (dr === null ? (dr = new Set([this])) : dr.add(this)));
        var u = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: u !== null ? u : '',
        });
      });
  }
  function Qp(e, n, r, t, a) {
    if (
      ((r.flags |= 32768),
      t !== null && typeof t == 'object' && typeof t.then == 'function')
    ) {
      if (
        ((n = r.alternate),
        n !== null && it(n, r, a, !0),
        (r = nn.current),
        r !== null)
      ) {
        switch (r.tag) {
          case 31:
          case 13:
            return (
              bn === null ? ko() : r.alternate === null && ge === 0 && (ge = 3),
              (r.flags &= -257),
              (r.flags |= 65536),
              (r.lanes = a),
              t === Ka
                ? (r.flags |= 16384)
                : ((n = r.updateQueue),
                  n === null ? (r.updateQueue = new Set([t])) : n.add(t),
                  ju(e, t, a)),
              !1
            );
          case 22:
            return (
              (r.flags |= 65536),
              t === Ka
                ? (r.flags |= 16384)
                : ((n = r.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([t]),
                      }),
                      (r.updateQueue = n))
                    : ((r = n.retryQueue),
                      r === null ? (n.retryQueue = new Set([t])) : r.add(t)),
                  ju(e, t, a)),
              !1
            );
        }
        throw Error(d(435, r.tag));
      }
      return (ju(e, t, a), ko(), !1);
    }
    if (X)
      return (
        (n = nn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = a),
            t !== zi && ((e = Error(d(422), { cause: t })), Ut(cn(e, r))))
          : (t !== zi && ((n = Error(d(423), { cause: t })), Ut(cn(n, r))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (t = cn(t, r)),
            (a = su(e.stateNode, t, a)),
            Di(e, a),
            ge !== 4 && (ge = 2)),
        !1
      );
    var o = Error(d(520), { cause: t });
    if (
      ((o = cn(o, r)),
      sa === null ? (sa = [o]) : sa.push(o),
      ge !== 4 && (ge = 2),
      n === null)
    )
      return !0;
    ((t = cn(t, r)), (r = n));
    do {
      switch (r.tag) {
        case 3:
          return (
            (r.flags |= 65536),
            (e = a & -a),
            (r.lanes |= e),
            (e = su(r.stateNode, t, e)),
            Di(r, e),
            !1
          );
        case 1:
          if (
            ((n = r.type),
            (o = r.stateNode),
            (r.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == 'function' ||
                (o !== null &&
                  typeof o.componentDidCatch == 'function' &&
                  (dr === null || !dr.has(o)))))
          )
            return (
              (r.flags |= 65536),
              (a &= -a),
              (r.lanes |= a),
              (a = kc(a)),
              wc(a, e, r, t),
              Di(r, a),
              !1
            );
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var lu = Error(d(461)),
    xe = !1;
  function Te(e, n, r, t) {
    n.child = e === null ? Cl(n, null, r, t) : Mr(n, e.child, r, t);
  }
  function Sc(e, n, r, t, a) {
    r = r.render;
    var o = n.ref;
    if ('ref' in t) {
      var i = {};
      for (var u in t) u !== 'ref' && (i[u] = t[u]);
    } else i = t;
    return (
      jr(n),
      (t = Vi(e, n, r, i, o, a)),
      (u = qi()),
      e !== null && !xe
        ? (Wi(e, n, a), Hn(e, n, a))
        : (X && u && Ci(n), (n.flags |= 1), Te(e, n, t, a), n.child)
    );
  }
  function xc(e, n, r, t, a) {
    if (e === null) {
      var o = r.type;
      return typeof o == 'function' &&
        !Si(o) &&
        o.defaultProps === void 0 &&
        r.compare === null
        ? ((n.tag = 15), (n.type = o), Ec(e, n, o, t, a))
        : ((e = Ba(r.type, null, t, n, n.mode, a)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((o = e.child), !yu(e, a))) {
      var i = o.memoizedProps;
      if (
        ((r = r.compare), (r = r !== null ? r : $t), r(i, t) && e.ref === n.ref)
      )
        return Hn(e, n, a);
    }
    return (
      (n.flags |= 1),
      (e = Rn(o, t)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Ec(e, n, r, t, a) {
    if (e !== null) {
      var o = e.memoizedProps;
      if ($t(o, t) && e.ref === n.ref)
        if (((xe = !1), (n.pendingProps = t = o), yu(e, a)))
          (e.flags & 131072) !== 0 && (xe = !0);
        else return ((n.lanes = e.lanes), Hn(e, n, a));
    }
    return cu(e, n, r, t, a);
  }
  function Cc(e, n, r, t) {
    var a = t.children,
      o = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.mode === 'hidden')
    ) {
      if ((n.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | r : r), e !== null)) {
          for (t = n.child = e.child, a = 0; t !== null; )
            ((a = a | t.lanes | t.childLanes), (t = t.sibling));
          t = a & ~o;
        } else ((t = 0), (n.child = null));
        return Nc(e, n, o, r, t);
      }
      if ((r & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Wa(n, o !== null ? o.cachePool : null),
          o !== null ? _l(n, o) : $i(),
          Pl(n));
      else
        return (
          (t = n.lanes = 536870912),
          Nc(e, n, o !== null ? o.baseLanes | r : r, r, t)
        );
    } else
      o !== null
        ? (Wa(n, o.cachePool), _l(n, o), sr(), (n.memoizedState = null))
        : (e !== null && Wa(n, null), $i(), sr());
    return (Te(e, n, a, r), n.child);
  }
  function na(e, n) {
    return (
      (e !== null && e.tag === 22) ||
        n.stateNode !== null ||
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.sibling
    );
  }
  function Nc(e, n, r, t, a) {
    var o = Fi();
    return (
      (o = o === null ? null : { parent: we._currentValue, pool: o }),
      (n.memoizedState = { baseLanes: r, cachePool: o }),
      e !== null && Wa(n, null),
      $i(),
      Pl(n),
      e !== null && it(e, n, t, !0),
      (n.childLanes = a),
      null
    );
  }
  function so(e, n) {
    return (
      (n = co({ mode: n.mode, children: n.children }, e.mode)),
      (n.ref = e.ref),
      (e.child = n),
      (n.return = e),
      n
    );
  }
  function zc(e, n, r) {
    return (
      Mr(n, e.child, null, r),
      (e = so(n, n.pendingProps)),
      (e.flags |= 2),
      rn(n),
      (n.memoizedState = null),
      e
    );
  }
  function Kp(e, n, r) {
    var t = n.pendingProps,
      a = (n.flags & 128) !== 0;
    if (((n.flags &= -129), e === null)) {
      if (X) {
        if (t.mode === 'hidden')
          return ((e = so(n, t)), (n.lanes = 536870912), na(null, e));
        if (
          (Bi(n),
          (e = de)
            ? ((e = $f(e, pn)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((n.memoizedState = {
                  dehydrated: e,
                  treeContext: er !== null ? { id: Nn, overflow: zn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = cl(e)),
                (r.return = n),
                (n.child = r),
                (Pe = n),
                (de = null)))
            : (e = null),
          e === null)
        )
          throw rr(n);
        return ((n.lanes = 536870912), null);
      }
      return so(n, t);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var i = o.dehydrated;
      if ((Bi(n), a))
        if (n.flags & 256) ((n.flags &= -257), (n = zc(e, n, r)));
        else if (n.memoizedState !== null)
          ((n.child = e.child), (n.flags |= 128), (n = null));
        else throw Error(d(558));
      else if (
        (xe || it(e, n, r, !1), (a = (r & e.childLanes) !== 0), xe || a)
      ) {
        if (
          ((t = ce),
          t !== null && ((i = ys(t, r)), i !== 0 && i !== o.retryLane))
        )
          throw ((o.retryLane = i), Pr(e, i), Ke(t, e, i), lu);
        (ko(), (n = zc(e, n, r)));
      } else
        ((e = o.treeContext),
          (de = mn(i.nextSibling)),
          (Pe = n),
          (X = !0),
          (nr = null),
          (pn = !1),
          e !== null && pl(n, e),
          (n = so(n, t)),
          (n.flags |= 4096));
      return n;
    }
    return (
      (e = Rn(e.child, { mode: t.mode, children: t.children })),
      (e.ref = n.ref),
      (n.child = e),
      (e.return = n),
      e
    );
  }
  function lo(e, n) {
    var r = n.ref;
    if (r === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != 'function' && typeof r != 'object') throw Error(d(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function cu(e, n, r, t, a) {
    return (
      jr(n),
      (r = Vi(e, n, r, t, void 0, a)),
      (t = qi()),
      e !== null && !xe
        ? (Wi(e, n, a), Hn(e, n, a))
        : (X && t && Ci(n), (n.flags |= 1), Te(e, n, r, a), n.child)
    );
  }
  function _c(e, n, r, t, a, o) {
    return (
      jr(n),
      (n.updateQueue = null),
      (r = Tl(n, t, r, a)),
      Ll(e),
      (t = qi()),
      e !== null && !xe
        ? (Wi(e, n, o), Hn(e, n, o))
        : (X && t && Ci(n), (n.flags |= 1), Te(e, n, r, o), n.child)
    );
  }
  function Pc(e, n, r, t, a) {
    if ((jr(n), n.stateNode === null)) {
      var o = rt,
        i = r.contextType;
      (typeof i == 'object' && i !== null && (o = Le(i)),
        (o = new r(t, o)),
        (n.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = uu),
        (n.stateNode = o),
        (o._reactInternals = n),
        (o = n.stateNode),
        (o.props = t),
        (o.state = n.memoizedState),
        (o.refs = {}),
        Ai(n),
        (i = r.contextType),
        (o.context = typeof i == 'object' && i !== null ? Le(i) : rt),
        (o.state = n.memoizedState),
        (i = r.getDerivedStateFromProps),
        typeof i == 'function' && (iu(n, r, i, t), (o.state = n.memoizedState)),
        typeof r.getDerivedStateFromProps == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function' ||
          (typeof o.UNSAFE_componentWillMount != 'function' &&
            typeof o.componentWillMount != 'function') ||
          ((i = o.state),
          typeof o.componentWillMount == 'function' && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == 'function' &&
            o.UNSAFE_componentWillMount(),
          i !== o.state && uu.enqueueReplaceState(o, o.state, null),
          Gt(n, t, o, a),
          Xt(),
          (o.state = n.memoizedState)),
        typeof o.componentDidMount == 'function' && (n.flags |= 4194308),
        (t = !0));
    } else if (e === null) {
      o = n.stateNode;
      var u = n.memoizedProps,
        s = Ir(r, u);
      o.props = s;
      var m = o.context,
        y = r.contextType;
      ((i = rt), typeof y == 'object' && y !== null && (i = Le(y)));
      var w = r.getDerivedStateFromProps;
      ((y =
        typeof w == 'function' ||
        typeof o.getSnapshotBeforeUpdate == 'function'),
        (u = n.pendingProps !== u),
        y ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((u || m !== i) && hc(n, o, t, i)),
        (ar = !1));
      var h = n.memoizedState;
      ((o.state = h),
        Gt(n, t, o, a),
        Xt(),
        (m = n.memoizedState),
        u || h !== m || ar
          ? (typeof w == 'function' && (iu(n, r, w, t), (m = n.memoizedState)),
            (s = ar || mc(n, r, s, t, h, m, i))
              ? (y ||
                  (typeof o.UNSAFE_componentWillMount != 'function' &&
                    typeof o.componentWillMount != 'function') ||
                  (typeof o.componentWillMount == 'function' &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == 'function' &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == 'function' &&
                  (n.flags |= 4194308))
              : (typeof o.componentDidMount == 'function' &&
                  (n.flags |= 4194308),
                (n.memoizedProps = t),
                (n.memoizedState = m)),
            (o.props = t),
            (o.state = m),
            (o.context = i),
            (t = s))
          : (typeof o.componentDidMount == 'function' && (n.flags |= 4194308),
            (t = !1)));
    } else {
      ((o = n.stateNode),
        Mi(e, n),
        (i = n.memoizedProps),
        (y = Ir(r, i)),
        (o.props = y),
        (w = n.pendingProps),
        (h = o.context),
        (m = r.contextType),
        (s = rt),
        typeof m == 'object' && m !== null && (s = Le(m)),
        (u = r.getDerivedStateFromProps),
        (m =
          typeof u == 'function' ||
          typeof o.getSnapshotBeforeUpdate == 'function') ||
          (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof o.componentWillReceiveProps != 'function') ||
          ((i !== w || h !== s) && hc(n, o, t, s)),
        (ar = !1),
        (h = n.memoizedState),
        (o.state = h),
        Gt(n, t, o, a),
        Xt());
      var g = n.memoizedState;
      i !== w ||
      h !== g ||
      ar ||
      (e !== null && e.dependencies !== null && Va(e.dependencies))
        ? (typeof u == 'function' && (iu(n, r, u, t), (g = n.memoizedState)),
          (y =
            ar ||
            mc(n, r, y, t, h, g, s) ||
            (e !== null && e.dependencies !== null && Va(e.dependencies)))
            ? (m ||
                (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                  typeof o.componentWillUpdate != 'function') ||
                (typeof o.componentWillUpdate == 'function' &&
                  o.componentWillUpdate(t, g, s),
                typeof o.UNSAFE_componentWillUpdate == 'function' &&
                  o.UNSAFE_componentWillUpdate(t, g, s)),
              typeof o.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == 'function' &&
                (n.flags |= 1024))
            : (typeof o.componentDidUpdate != 'function' ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = t),
              (n.memoizedState = g)),
          (o.props = t),
          (o.state = g),
          (o.context = s),
          (t = y))
        : (typeof o.componentDidUpdate != 'function' ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != 'function' ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 1024),
          (t = !1));
    }
    return (
      (o = t),
      lo(e, n),
      (t = (n.flags & 128) !== 0),
      o || t
        ? ((o = n.stateNode),
          (r =
            t && typeof r.getDerivedStateFromError != 'function'
              ? null
              : o.render()),
          (n.flags |= 1),
          e !== null && t
            ? ((n.child = Mr(n, e.child, null, a)),
              (n.child = Mr(n, null, r, a)))
            : Te(e, n, r, a),
          (n.memoizedState = o.state),
          (e = n.child))
        : (e = Hn(e, n, a)),
      e
    );
  }
  function Lc(e, n, r, t) {
    return (Tr(), (n.flags |= 256), Te(e, n, r, t), n.child);
  }
  var fu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function du(e) {
    return { baseLanes: e, cachePool: bl() };
  }
  function pu(e, n, r) {
    return ((e = e !== null ? e.childLanes & ~r : 0), n && (e |= an), e);
  }
  function Tc(e, n, r) {
    var t = n.pendingProps,
      a = !1,
      o = (n.flags & 128) !== 0,
      i;
    if (
      ((i = o) ||
        (i =
          e !== null && e.memoizedState === null ? !1 : (be.current & 2) !== 0),
      i && ((a = !0), (n.flags &= -129)),
      (i = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (X) {
        if (
          (a ? ur(n) : sr(),
          (e = de)
            ? ((e = $f(e, pn)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((n.memoizedState = {
                  dehydrated: e,
                  treeContext: er !== null ? { id: Nn, overflow: zn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (r = cl(e)),
                (r.return = n),
                (n.child = r),
                (Pe = n),
                (de = null)))
            : (e = null),
          e === null)
        )
          throw rr(n);
        return (Xu(e) ? (n.lanes = 32) : (n.lanes = 536870912), null);
      }
      var u = t.children;
      return (
        (t = t.fallback),
        a
          ? (sr(),
            (a = n.mode),
            (u = co({ mode: 'hidden', children: u }, a)),
            (t = Lr(t, a, r, null)),
            (u.return = n),
            (t.return = n),
            (u.sibling = t),
            (n.child = u),
            (t = n.child),
            (t.memoizedState = du(r)),
            (t.childLanes = pu(e, i, r)),
            (n.memoizedState = fu),
            na(null, t))
          : (ur(n), mu(n, u))
      );
    }
    var s = e.memoizedState;
    if (s !== null && ((u = s.dehydrated), u !== null)) {
      if (o)
        n.flags & 256
          ? (ur(n), (n.flags &= -257), (n = hu(e, n, r)))
          : n.memoizedState !== null
            ? (sr(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (sr(),
              (u = t.fallback),
              (a = n.mode),
              (t = co({ mode: 'visible', children: t.children }, a)),
              (u = Lr(u, a, r, null)),
              (u.flags |= 2),
              (t.return = n),
              (u.return = n),
              (t.sibling = u),
              (n.child = t),
              Mr(n, e.child, null, r),
              (t = n.child),
              (t.memoizedState = du(r)),
              (t.childLanes = pu(e, i, r)),
              (n.memoizedState = fu),
              (n = na(null, t)));
      else if ((ur(n), Xu(u))) {
        if (((i = u.nextSibling && u.nextSibling.dataset), i)) var m = i.dgst;
        ((i = m),
          (t = Error(d(419))),
          (t.stack = ''),
          (t.digest = i),
          Ut({ value: t, source: null, stack: null }),
          (n = hu(e, n, r)));
      } else if (
        (xe || it(e, n, r, !1), (i = (r & e.childLanes) !== 0), xe || i)
      ) {
        if (
          ((i = ce),
          i !== null && ((t = ys(i, r)), t !== 0 && t !== s.retryLane))
        )
          throw ((s.retryLane = t), Pr(e, t), Ke(i, e, t), lu);
        (Ku(u) || ko(), (n = hu(e, n, r)));
      } else
        Ku(u)
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = s.treeContext),
            (de = mn(u.nextSibling)),
            (Pe = n),
            (X = !0),
            (nr = null),
            (pn = !1),
            e !== null && pl(n, e),
            (n = mu(n, t.children)),
            (n.flags |= 4096));
      return n;
    }
    return a
      ? (sr(),
        (u = t.fallback),
        (a = n.mode),
        (s = e.child),
        (m = s.sibling),
        (t = Rn(s, { mode: 'hidden', children: t.children })),
        (t.subtreeFlags = s.subtreeFlags & 65011712),
        m !== null ? (u = Rn(m, u)) : ((u = Lr(u, a, r, null)), (u.flags |= 2)),
        (u.return = n),
        (t.return = n),
        (t.sibling = u),
        (n.child = t),
        na(null, t),
        (t = n.child),
        (u = e.child.memoizedState),
        u === null
          ? (u = du(r))
          : ((a = u.cachePool),
            a !== null
              ? ((s = we._currentValue),
                (a = a.parent !== s ? { parent: s, pool: s } : a))
              : (a = bl()),
            (u = { baseLanes: u.baseLanes | r, cachePool: a })),
        (t.memoizedState = u),
        (t.childLanes = pu(e, i, r)),
        (n.memoizedState = fu),
        na(e.child, t))
      : (ur(n),
        (r = e.child),
        (e = r.sibling),
        (r = Rn(r, { mode: 'visible', children: t.children })),
        (r.return = n),
        (r.sibling = null),
        e !== null &&
          ((i = n.deletions),
          i === null ? ((n.deletions = [e]), (n.flags |= 16)) : i.push(e)),
        (n.child = r),
        (n.memoizedState = null),
        r);
  }
  function mu(e, n) {
    return (
      (n = co({ mode: 'visible', children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function co(e, n) {
    return ((e = en(22, e, null, n)), (e.lanes = 0), e);
  }
  function hu(e, n, r) {
    return (
      Mr(n, e.child, null, r),
      (e = mu(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function Oc(e, n, r) {
    e.lanes |= n;
    var t = e.alternate;
    (t !== null && (t.lanes |= n), Li(e.return, n, r));
  }
  function gu(e, n, r, t, a, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: t,
          tail: r,
          tailMode: a,
          treeForkCount: o,
        })
      : ((i.isBackwards = n),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = t),
        (i.tail = r),
        (i.tailMode = a),
        (i.treeForkCount = o));
  }
  function jc(e, n, r) {
    var t = n.pendingProps,
      a = t.revealOrder,
      o = t.tail;
    t = t.children;
    var i = be.current,
      u = (i & 2) !== 0;
    if (
      (u ? ((i = (i & 1) | 2), (n.flags |= 128)) : (i &= 1),
      N(be, i),
      Te(e, n, t, r),
      (t = X ? Bt : 0),
      !u && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Oc(e, r, n);
        else if (e.tag === 19) Oc(e, r, n);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (a) {
      case 'forwards':
        for (r = n.child, a = null; r !== null; )
          ((e = r.alternate),
            e !== null && Za(e) === null && (a = r),
            (r = r.sibling));
        ((r = a),
          r === null
            ? ((a = n.child), (n.child = null))
            : ((a = r.sibling), (r.sibling = null)),
          gu(n, !1, a, r, o, t));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (r = null, a = n.child, n.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Za(e) === null)) {
            n.child = a;
            break;
          }
          ((e = a.sibling), (a.sibling = r), (r = a), (a = e));
        }
        gu(n, !0, r, null, o, t);
        break;
      case 'together':
        gu(n, !1, null, null, void 0, t);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Hn(e, n, r) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (fr |= n.lanes),
      (r & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((it(e, n, r, !1), (r & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(d(153));
    if (n.child !== null) {
      for (
        e = n.child, r = Rn(e, e.pendingProps), n.child = r, r.return = n;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (r = r.sibling = Rn(e, e.pendingProps)),
          (r.return = n));
      r.sibling = null;
    }
    return n.child;
  }
  function yu(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Va(e)));
  }
  function Xp(e, n, r) {
    switch (n.tag) {
      case 3:
        (Ae(n, n.stateNode.containerInfo),
          tr(n, we, e.memoizedState.cache),
          Tr());
        break;
      case 27:
      case 5:
        zt(n);
        break;
      case 4:
        Ae(n, n.stateNode.containerInfo);
        break;
      case 10:
        tr(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return ((n.flags |= 128), Bi(n), null);
        break;
      case 13:
        var t = n.memoizedState;
        if (t !== null)
          return t.dehydrated !== null
            ? (ur(n), (n.flags |= 128), null)
            : (r & n.child.childLanes) !== 0
              ? Tc(e, n, r)
              : (ur(n), (e = Hn(e, n, r)), e !== null ? e.sibling : null);
        ur(n);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (
          ((t = (r & n.childLanes) !== 0),
          t || (it(e, n, r, !1), (t = (r & n.childLanes) !== 0)),
          a)
        ) {
          if (t) return jc(e, n, r);
          n.flags |= 128;
        }
        if (
          ((a = n.memoizedState),
          a !== null &&
            ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          N(be, be.current),
          t)
        )
          break;
        return null;
      case 22:
        return ((n.lanes = 0), Cc(e, n, r, n.pendingProps));
      case 24:
        tr(n, we, e.memoizedState.cache);
    }
    return Hn(e, n, r);
  }
  function Fc(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) xe = !0;
      else {
        if (!yu(e, r) && (n.flags & 128) === 0) return ((xe = !1), Xp(e, n, r));
        xe = (e.flags & 131072) !== 0;
      }
    else ((xe = !1), X && (n.flags & 1048576) !== 0 && dl(n, Bt, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          var t = n.pendingProps;
          if (((e = Rr(n.elementType)), (n.type = e), typeof e == 'function'))
            Si(e)
              ? ((t = Ir(e, t)), (n.tag = 1), (n = Pc(null, n, e, t, r)))
              : ((n.tag = 0), (n = cu(null, n, e, t, r)));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === un) {
                ((n.tag = 11), (n = Sc(null, n, e, t, r)));
                break e;
              } else if (a === K) {
                ((n.tag = 14), (n = xc(null, n, e, t, r)));
                break e;
              }
            }
            throw ((n = Tn(e) || e), Error(d(306, n, '')));
          }
        }
        return n;
      case 0:
        return cu(e, n, n.type, n.pendingProps, r);
      case 1:
        return ((t = n.type), (a = Ir(t, n.pendingProps)), Pc(e, n, t, a, r));
      case 3:
        e: {
          if ((Ae(n, n.stateNode.containerInfo), e === null))
            throw Error(d(387));
          t = n.pendingProps;
          var o = n.memoizedState;
          ((a = o.element), Mi(e, n), Gt(n, t, null, r));
          var i = n.memoizedState;
          if (
            ((t = i.cache),
            tr(n, we, t),
            t !== o.cache && Ti(n, [we], r, !0),
            Xt(),
            (t = i.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: t, isDehydrated: !1, cache: i.cache }),
              (n.updateQueue.baseState = o),
              (n.memoizedState = o),
              n.flags & 256)
            ) {
              n = Lc(e, n, t, r);
              break e;
            } else if (t !== a) {
              ((a = cn(Error(d(424)), n)), Ut(a), (n = Lc(e, n, t, r)));
              break e;
            } else {
              switch (((e = n.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                de = mn(e.firstChild),
                  Pe = n,
                  X = !0,
                  nr = null,
                  pn = !0,
                  r = Cl(n, null, t, r),
                  n.child = r;
                r;

              )
                ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
            }
          else {
            if ((Tr(), t === a)) {
              n = Hn(e, n, r);
              break e;
            }
            Te(e, n, t, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          lo(e, n),
          e === null
            ? (r = Wf(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = r)
              : X ||
                ((r = n.type),
                (e = n.pendingProps),
                (t = zo(B.current).createElement(r)),
                (t[_e] = n),
                (t[Be] = e),
                Oe(t, r, e),
                Ne(t),
                (n.stateNode = t))
            : (n.memoizedState = Wf(
                n.type,
                e.memoizedProps,
                n.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          zt(n),
          e === null &&
            X &&
            ((t = n.stateNode = Uf(n.type, n.pendingProps, B.current)),
            (Pe = n),
            (pn = !0),
            (a = de),
            gr(n.type) ? ((Gu = a), (de = mn(t.firstChild))) : (de = a)),
          Te(e, n, n.pendingProps.children, r),
          lo(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            X &&
            ((a = t = de) &&
              ((t = Cm(t, n.type, n.pendingProps, pn)),
              t !== null
                ? ((n.stateNode = t),
                  (Pe = n),
                  (de = mn(t.firstChild)),
                  (pn = !1),
                  (a = !0))
                : (a = !1)),
            a || rr(n)),
          zt(n),
          (a = n.type),
          (o = n.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (t = o.children),
          qu(a, o) ? (t = null) : i !== null && qu(a, i) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((a = Vi(e, n, $p, null, null, r)), (ga._currentValue = a)),
          lo(e, n),
          Te(e, n, t, r),
          n.child
        );
      case 6:
        return (
          e === null &&
            X &&
            ((e = r = de) &&
              ((r = Nm(r, n.pendingProps, pn)),
              r !== null
                ? ((n.stateNode = r), (Pe = n), (de = null), (e = !0))
                : (e = !1)),
            e || rr(n)),
          null
        );
      case 13:
        return Tc(e, n, r);
      case 4:
        return (
          Ae(n, n.stateNode.containerInfo),
          (t = n.pendingProps),
          e === null ? (n.child = Mr(n, null, t, r)) : Te(e, n, t, r),
          n.child
        );
      case 11:
        return Sc(e, n, n.type, n.pendingProps, r);
      case 7:
        return (Te(e, n, n.pendingProps, r), n.child);
      case 8:
        return (Te(e, n, n.pendingProps.children, r), n.child);
      case 12:
        return (Te(e, n, n.pendingProps.children, r), n.child);
      case 10:
        return (
          (t = n.pendingProps),
          tr(n, n.type, t.value),
          Te(e, n, t.children, r),
          n.child
        );
      case 9:
        return (
          (a = n.type._context),
          (t = n.pendingProps.children),
          jr(n),
          (a = Le(a)),
          (t = t(a)),
          (n.flags |= 1),
          Te(e, n, t, r),
          n.child
        );
      case 14:
        return xc(e, n, n.type, n.pendingProps, r);
      case 15:
        return Ec(e, n, n.type, n.pendingProps, r);
      case 19:
        return jc(e, n, r);
      case 31:
        return Kp(e, n, r);
      case 22:
        return Cc(e, n, r, n.pendingProps);
      case 24:
        return (
          jr(n),
          (t = Le(we)),
          e === null
            ? ((a = Fi()),
              a === null &&
                ((a = ce),
                (o = Oi()),
                (a.pooledCache = o),
                o.refCount++,
                o !== null && (a.pooledCacheLanes |= r),
                (a = o)),
              (n.memoizedState = { parent: t, cache: a }),
              Ai(n),
              tr(n, we, a))
            : ((e.lanes & r) !== 0 && (Mi(e, n), Gt(n, null, null, r), Xt()),
              (a = e.memoizedState),
              (o = n.memoizedState),
              a.parent !== t
                ? ((a = { parent: t, cache: t }),
                  (n.memoizedState = a),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = a),
                  tr(n, we, t))
                : ((t = o.cache),
                  tr(n, we, t),
                  t !== a.cache && Ti(n, [we], r, !0))),
          Te(e, n, n.pendingProps.children, r),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(d(156, n.tag));
  }
  function Bn(e) {
    e.flags |= 4;
  }
  function vu(e, n, r, t, a) {
    if (((n = (e.mode & 32) !== 0) && (n = !1), n)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (sf()) e.flags |= 8192;
        else throw ((Ar = Ka), Ri);
    } else e.flags &= -16777217;
  }
  function Rc(e, n) {
    if (n.type !== 'stylesheet' || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Yf(n)))
      if (sf()) e.flags |= 8192;
      else throw ((Ar = Ka), Ri);
  }
  function fo(e, n) {
    (n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? ms() : 536870912), (e.lanes |= n), (vt |= n)));
  }
  function ra(e, n) {
    if (!X)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail;
          for (var r = null; n !== null; )
            (n.alternate !== null && (r = n), (n = n.sibling));
          r === null ? (e.tail = null) : (r.sibling = null);
          break;
        case 'collapsed':
          r = e.tail;
          for (var t = null; r !== null; )
            (r.alternate !== null && (t = r), (r = r.sibling));
          t === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (t.sibling = null);
      }
  }
  function pe(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      t = 0;
    if (n)
      for (var a = e.child; a !== null; )
        ((r |= a.lanes | a.childLanes),
          (t |= a.subtreeFlags & 65011712),
          (t |= a.flags & 65011712),
          (a.return = e),
          (a = a.sibling));
    else
      for (a = e.child; a !== null; )
        ((r |= a.lanes | a.childLanes),
          (t |= a.subtreeFlags),
          (t |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= t), (e.childLanes = r), n);
  }
  function Gp(e, n, r) {
    var t = n.pendingProps;
    switch ((Ni(n), n.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (pe(n), null);
      case 1:
        return (pe(n), null);
      case 3:
        return (
          (r = n.stateNode),
          (t = null),
          e !== null && (t = e.memoizedState.cache),
          n.memoizedState.cache !== t && (n.flags |= 2048),
          Dn(we),
          ve(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ot(n)
              ? Bn(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), _i())),
          pe(n),
          null
        );
      case 26:
        var a = n.type,
          o = n.memoizedState;
        return (
          e === null
            ? (Bn(n),
              o !== null ? (pe(n), Rc(n, o)) : (pe(n), vu(n, a, null, t, r)))
            : o
              ? o !== e.memoizedState
                ? (Bn(n), pe(n), Rc(n, o))
                : (pe(n), (n.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== t && Bn(n),
                pe(n),
                vu(n, a, e, t, r)),
          null
        );
      case 27:
        if (
          (Sa(n),
          (r = B.current),
          (a = n.type),
          e !== null && n.stateNode != null)
        )
          e.memoizedProps !== t && Bn(n);
        else {
          if (!t) {
            if (n.stateNode === null) throw Error(d(166));
            return (pe(n), null);
          }
          ((e = _.current),
            ot(n) ? ml(n) : ((e = Uf(a, t, r)), (n.stateNode = e), Bn(n)));
        }
        return (pe(n), null);
      case 5:
        if ((Sa(n), (a = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== t && Bn(n);
        else {
          if (!t) {
            if (n.stateNode === null) throw Error(d(166));
            return (pe(n), null);
          }
          if (((o = _.current), ot(n))) ml(n);
          else {
            var i = zo(B.current);
            switch (o) {
              case 1:
                o = i.createElementNS('http://www.w3.org/2000/svg', a);
                break;
              case 2:
                o = i.createElementNS('http://www.w3.org/1998/Math/MathML', a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    o = i.createElementNS('http://www.w3.org/2000/svg', a);
                    break;
                  case 'math':
                    o = i.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      a,
                    );
                    break;
                  case 'script':
                    ((o = i.createElement('div')),
                      (o.innerHTML = '<script><\/script>'),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case 'select':
                    ((o =
                      typeof t.is == 'string'
                        ? i.createElement('select', { is: t.is })
                        : i.createElement('select')),
                      t.multiple
                        ? (o.multiple = !0)
                        : t.size && (o.size = t.size));
                    break;
                  default:
                    o =
                      typeof t.is == 'string'
                        ? i.createElement(a, { is: t.is })
                        : i.createElement(a);
                }
            }
            ((o[_e] = n), (o[Be] = t));
            e: for (i = n.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) o.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === n) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === n) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            n.stateNode = o;
            e: switch ((Oe(o, a, t), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                t = !!t.autoFocus;
                break e;
              case 'img':
                t = !0;
                break e;
              default:
                t = !1;
            }
            t && Bn(n);
          }
        }
        return (
          pe(n),
          vu(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, r),
          null
        );
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== t && Bn(n);
        else {
          if (typeof t != 'string' && n.stateNode === null) throw Error(d(166));
          if (((e = B.current), ot(n))) {
            if (
              ((e = n.stateNode),
              (r = n.memoizedProps),
              (t = null),
              (a = Pe),
              a !== null)
            )
              switch (a.tag) {
                case 27:
                case 5:
                  t = a.memoizedProps;
              }
            ((e[_e] = n),
              (e = !!(
                e.nodeValue === r ||
                (t !== null && t.suppressHydrationWarning === !0) ||
                Of(e.nodeValue, r)
              )),
              e || rr(n, !0));
          } else
            ((e = zo(e).createTextNode(t)), (e[_e] = n), (n.stateNode = e));
        }
        return (pe(n), null);
      case 31:
        if (((r = n.memoizedState), e === null || e.memoizedState !== null)) {
          if (((t = ot(n)), r !== null)) {
            if (e === null) {
              if (!t) throw Error(d(318));
              if (
                ((e = n.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(d(557));
              e[_e] = n;
            } else
              (Tr(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (pe(n), (e = !1));
          } else
            ((r = _i()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = r),
              (e = !0));
          if (!e) return n.flags & 256 ? (rn(n), n) : (rn(n), null);
          if ((n.flags & 128) !== 0) throw Error(d(558));
        }
        return (pe(n), null);
      case 13:
        if (
          ((t = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = ot(n)), t !== null && t.dehydrated !== null)) {
            if (e === null) {
              if (!a) throw Error(d(318));
              if (
                ((a = n.memoizedState),
                (a = a !== null ? a.dehydrated : null),
                !a)
              )
                throw Error(d(317));
              a[_e] = n;
            } else
              (Tr(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (pe(n), (a = !1));
          } else
            ((a = _i()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return n.flags & 256 ? (rn(n), n) : (rn(n), null);
        }
        return (
          rn(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = r), n)
            : ((r = t !== null),
              (e = e !== null && e.memoizedState !== null),
              r &&
                ((t = n.child),
                (a = null),
                t.alternate !== null &&
                  t.alternate.memoizedState !== null &&
                  t.alternate.memoizedState.cachePool !== null &&
                  (a = t.alternate.memoizedState.cachePool.pool),
                (o = null),
                t.memoizedState !== null &&
                  t.memoizedState.cachePool !== null &&
                  (o = t.memoizedState.cachePool.pool),
                o !== a && (t.flags |= 2048)),
              r !== e && r && (n.child.flags |= 8192),
              fo(n, n.updateQueue),
              pe(n),
              null)
        );
      case 4:
        return (ve(), e === null && $u(n.stateNode.containerInfo), pe(n), null);
      case 10:
        return (Dn(n.type), pe(n), null);
      case 19:
        if ((S(be), (t = n.memoizedState), t === null)) return (pe(n), null);
        if (((a = (n.flags & 128) !== 0), (o = t.rendering), o === null))
          if (a) ra(t, !1);
          else {
            if (ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((o = Za(e)), o !== null)) {
                  for (
                    n.flags |= 128,
                      ra(t, !1),
                      e = o.updateQueue,
                      n.updateQueue = e,
                      fo(n, e),
                      n.subtreeFlags = 0,
                      e = r,
                      r = n.child;
                    r !== null;

                  )
                    (ll(r, e), (r = r.sibling));
                  return (
                    N(be, (be.current & 1) | 2),
                    X && An(n, t.treeForkCount),
                    n.child
                  );
                }
                e = e.sibling;
              }
            t.tail !== null &&
              Ge() > yo &&
              ((n.flags |= 128), (a = !0), ra(t, !1), (n.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Za(o)), e !== null)) {
              if (
                ((n.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                fo(n, e),
                ra(t, !0),
                t.tail === null &&
                  t.tailMode === 'hidden' &&
                  !o.alternate &&
                  !X)
              )
                return (pe(n), null);
            } else
              2 * Ge() - t.renderingStartTime > yo &&
                r !== 536870912 &&
                ((n.flags |= 128), (a = !0), ra(t, !1), (n.lanes = 4194304));
          t.isBackwards
            ? ((o.sibling = n.child), (n.child = o))
            : ((e = t.last),
              e !== null ? (e.sibling = o) : (n.child = o),
              (t.last = o));
        }
        return t.tail !== null
          ? ((e = t.tail),
            (t.rendering = e),
            (t.tail = e.sibling),
            (t.renderingStartTime = Ge()),
            (e.sibling = null),
            (r = be.current),
            N(be, a ? (r & 1) | 2 : r & 1),
            X && An(n, t.treeForkCount),
            e)
          : (pe(n), null);
      case 22:
      case 23:
        return (
          rn(n),
          Hi(),
          (t = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== t && (n.flags |= 8192)
            : t && (n.flags |= 8192),
          t
            ? (r & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (pe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : pe(n),
          (r = n.updateQueue),
          r !== null && fo(n, r.retryQueue),
          (r = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (r = e.memoizedState.cachePool.pool),
          (t = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (t = n.memoizedState.cachePool.pool),
          t !== r && (n.flags |= 2048),
          e !== null && S(Fr),
          null
        );
      case 24:
        return (
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          Dn(we),
          pe(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(d(156, n.tag));
  }
  function Yp(e, n) {
    switch ((Ni(n), n.tag)) {
      case 1:
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          Dn(we),
          ve(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Sa(n), null);
      case 31:
        if (n.memoizedState !== null) {
          if ((rn(n), n.alternate === null)) throw Error(d(340));
          Tr();
        }
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 13:
        if (
          (rn(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(d(340));
          Tr();
        }
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 19:
        return (S(be), null);
      case 4:
        return (ve(), null);
      case 10:
        return (Dn(n.type), null);
      case 22:
      case 23:
        return (
          rn(n),
          Hi(),
          e !== null && S(Fr),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return (Dn(we), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ac(e, n) {
    switch ((Ni(n), n.tag)) {
      case 3:
        (Dn(we), ve());
        break;
      case 26:
      case 27:
      case 5:
        Sa(n);
        break;
      case 4:
        ve();
        break;
      case 31:
        n.memoizedState !== null && rn(n);
        break;
      case 13:
        rn(n);
        break;
      case 19:
        S(be);
        break;
      case 10:
        Dn(n.type);
        break;
      case 22:
      case 23:
        (rn(n), Hi(), e !== null && S(Fr));
        break;
      case 24:
        Dn(we);
    }
  }
  function ta(e, n) {
    try {
      var r = n.updateQueue,
        t = r !== null ? r.lastEffect : null;
      if (t !== null) {
        var a = t.next;
        r = a;
        do {
          if ((r.tag & e) === e) {
            t = void 0;
            var o = r.create,
              i = r.inst;
            ((t = o()), (i.destroy = t));
          }
          r = r.next;
        } while (r !== a);
      }
    } catch (u) {
      te(n, n.return, u);
    }
  }
  function lr(e, n, r) {
    try {
      var t = n.updateQueue,
        a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        t = o;
        do {
          if ((t.tag & e) === e) {
            var i = t.inst,
              u = i.destroy;
            if (u !== void 0) {
              ((i.destroy = void 0), (a = n));
              var s = r,
                m = u;
              try {
                m();
              } catch (y) {
                te(a, s, y);
              }
            }
          }
          t = t.next;
        } while (t !== o);
      }
    } catch (y) {
      te(n, n.return, y);
    }
  }
  function Mc(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        zl(n, r);
      } catch (t) {
        te(e, e.return, t);
      }
    }
  }
  function Dc(e, n, r) {
    ((r.props = Ir(e.type, e.memoizedProps)), (r.state = e.memoizedState));
    try {
      r.componentWillUnmount();
    } catch (t) {
      te(e, n, t);
    }
  }
  function aa(e, n) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var t = e.stateNode;
            break;
          case 30:
            t = e.stateNode;
            break;
          default:
            t = e.stateNode;
        }
        typeof r == 'function' ? (e.refCleanup = r(t)) : (r.current = t);
      }
    } catch (a) {
      te(e, n, a);
    }
  }
  function _n(e, n) {
    var r = e.ref,
      t = e.refCleanup;
    if (r !== null)
      if (typeof t == 'function')
        try {
          t();
        } catch (a) {
          te(e, n, a);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof r == 'function')
        try {
          r(null);
        } catch (a) {
          te(e, n, a);
        }
      else r.current = null;
  }
  function Ic(e) {
    var n = e.type,
      r = e.memoizedProps,
      t = e.stateNode;
    try {
      e: switch (n) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          r.autoFocus && t.focus();
          break e;
        case 'img':
          r.src ? (t.src = r.src) : r.srcSet && (t.srcset = r.srcSet);
      }
    } catch (a) {
      te(e, e.return, a);
    }
  }
  function bu(e, n, r) {
    try {
      var t = e.stateNode;
      (bm(t, e.type, r, n), (t[Be] = n));
    } catch (a) {
      te(e, e.return, a);
    }
  }
  function $c(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && gr(e.type)) ||
      e.tag === 4
    );
  }
  function ku(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || $c(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && gr(e.type)) ||
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
  function wu(e, n, r) {
    var t = e.tag;
    if (t === 5 || t === 6)
      ((e = e.stateNode),
        n
          ? (r.nodeType === 9
              ? r.body
              : r.nodeName === 'HTML'
                ? r.ownerDocument.body
                : r
            ).insertBefore(e, n)
          : ((n =
              r.nodeType === 9
                ? r.body
                : r.nodeName === 'HTML'
                  ? r.ownerDocument.body
                  : r),
            n.appendChild(e),
            (r = r._reactRootContainer),
            r != null || n.onclick !== null || (n.onclick = jn)));
    else if (
      t !== 4 &&
      (t === 27 && gr(e.type) && ((r = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (wu(e, n, r), e = e.sibling; e !== null; )
        (wu(e, n, r), (e = e.sibling));
  }
  function po(e, n, r) {
    var t = e.tag;
    if (t === 5 || t === 6)
      ((e = e.stateNode), n ? r.insertBefore(e, n) : r.appendChild(e));
    else if (
      t !== 4 &&
      (t === 27 && gr(e.type) && (r = e.stateNode), (e = e.child), e !== null)
    )
      for (po(e, n, r), e = e.sibling; e !== null; )
        (po(e, n, r), (e = e.sibling));
  }
  function Hc(e) {
    var n = e.stateNode,
      r = e.memoizedProps;
    try {
      for (var t = e.type, a = n.attributes; a.length; )
        n.removeAttributeNode(a[0]);
      (Oe(n, t, r), (n[_e] = e), (n[Be] = r));
    } catch (o) {
      te(e, e.return, o);
    }
  }
  var Un = !1,
    Ee = !1,
    Su = !1,
    Bc = typeof WeakSet == 'function' ? WeakSet : Set,
    ze = null;
  function Zp(e, n) {
    if (((e = e.containerInfo), (Uu = Fo), (e = el(e)), hi(e))) {
      if ('selectionStart' in e)
        var r = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          r = ((r = e.ownerDocument) && r.defaultView) || window;
          var t = r.getSelection && r.getSelection();
          if (t && t.rangeCount !== 0) {
            r = t.anchorNode;
            var a = t.anchorOffset,
              o = t.focusNode;
            t = t.focusOffset;
            try {
              (r.nodeType, o.nodeType);
            } catch {
              r = null;
              break e;
            }
            var i = 0,
              u = -1,
              s = -1,
              m = 0,
              y = 0,
              w = e,
              h = null;
            n: for (;;) {
              for (
                var g;
                w !== r || (a !== 0 && w.nodeType !== 3) || (u = i + a),
                  w !== o || (t !== 0 && w.nodeType !== 3) || (s = i + t),
                  w.nodeType === 3 && (i += w.nodeValue.length),
                  (g = w.firstChild) !== null;

              )
                ((h = w), (w = g));
              for (;;) {
                if (w === e) break n;
                if (
                  (h === r && ++m === a && (u = i),
                  h === o && ++y === t && (s = i),
                  (g = w.nextSibling) !== null)
                )
                  break;
                ((w = h), (h = w.parentNode));
              }
              w = g;
            }
            r = u === -1 || s === -1 ? null : { start: u, end: s };
          } else r = null;
        }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (
      Vu = { focusedElem: e, selectionRange: r }, Fo = !1, ze = n;
      ze !== null;

    )
      if (
        ((n = ze), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = n), (ze = e));
      else
        for (; ze !== null; ) {
          switch (((n = ze), (o = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = n.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (r = 0; r < e.length; r++)
                  ((a = e[r]), (a.ref.impl = a.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && o !== null) {
                ((e = void 0),
                  (r = n),
                  (a = o.memoizedProps),
                  (o = o.memoizedState),
                  (t = r.stateNode));
                try {
                  var z = Ir(r.type, a);
                  ((e = t.getSnapshotBeforeUpdate(z, o)),
                    (t.__reactInternalSnapshotBeforeUpdate = e));
                } catch (F) {
                  te(r, r.return, F);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (r = e.nodeType), r === 9)
                )
                  Qu(e);
                else if (r === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Qu(e);
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
              if ((e & 1024) !== 0) throw Error(d(163));
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), (ze = e));
            break;
          }
          ze = n.return;
        }
  }
  function Uc(e, n, r) {
    var t = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        (qn(e, r), t & 4 && ta(5, r));
        break;
      case 1:
        if ((qn(e, r), t & 4))
          if (((e = r.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (i) {
              te(r, r.return, i);
            }
          else {
            var a = Ir(r.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(a, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              te(r, r.return, i);
            }
          }
        (t & 64 && Mc(r), t & 512 && aa(r, r.return));
        break;
      case 3:
        if ((qn(e, r), t & 64 && ((e = r.updateQueue), e !== null))) {
          if (((n = null), r.child !== null))
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            zl(e, n);
          } catch (i) {
            te(r, r.return, i);
          }
        }
        break;
      case 27:
        n === null && t & 4 && Hc(r);
      case 26:
      case 5:
        (qn(e, r), n === null && t & 4 && Ic(r), t & 512 && aa(r, r.return));
        break;
      case 12:
        qn(e, r);
        break;
      case 31:
        (qn(e, r), t & 4 && Wc(e, r));
        break;
      case 13:
        (qn(e, r),
          t & 4 && Qc(e, r),
          t & 64 &&
            ((e = r.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((r = um.bind(null, r)), zm(e, r)))));
        break;
      case 22:
        if (((t = r.memoizedState !== null || Un), !t)) {
          ((n = (n !== null && n.memoizedState !== null) || Ee), (a = Un));
          var o = Ee;
          ((Un = t),
            (Ee = n) && !o ? Wn(e, r, (r.subtreeFlags & 8772) !== 0) : qn(e, r),
            (Un = a),
            (Ee = o));
        }
        break;
      case 30:
        break;
      default:
        qn(e, r);
    }
  }
  function Vc(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), Vc(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && Zo(n)),
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
  function Vn(e, n, r) {
    for (r = r.child; r !== null; ) (qc(e, n, r), (r = r.sibling));
  }
  function qc(e, n, r) {
    if (Ye && typeof Ye.onCommitFiberUnmount == 'function')
      try {
        Ye.onCommitFiberUnmount(_t, r);
      } catch {}
    switch (r.tag) {
      case 26:
        (Ee || _n(r, n),
          Vn(e, n, r),
          r.memoizedState
            ? r.memoizedState.count--
            : r.stateNode && ((r = r.stateNode), r.parentNode.removeChild(r)));
        break;
      case 27:
        Ee || _n(r, n);
        var t = me,
          a = Ve;
        (gr(r.type) && ((me = r.stateNode), (Ve = !1)),
          Vn(e, n, r),
          pa(r.stateNode),
          (me = t),
          (Ve = a));
        break;
      case 5:
        Ee || _n(r, n);
      case 6:
        if (
          ((t = me),
          (a = Ve),
          (me = null),
          Vn(e, n, r),
          (me = t),
          (Ve = a),
          me !== null)
        )
          if (Ve)
            try {
              (me.nodeType === 9
                ? me.body
                : me.nodeName === 'HTML'
                  ? me.ownerDocument.body
                  : me
              ).removeChild(r.stateNode);
            } catch (o) {
              te(r, n, o);
            }
          else
            try {
              me.removeChild(r.stateNode);
            } catch (o) {
              te(r, n, o);
            }
        break;
      case 18:
        me !== null &&
          (Ve
            ? ((e = me),
              Df(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === 'HTML'
                    ? e.ownerDocument.body
                    : e,
                r.stateNode,
              ),
              Nt(e))
            : Df(me, r.stateNode));
        break;
      case 4:
        ((t = me),
          (a = Ve),
          (me = r.stateNode.containerInfo),
          (Ve = !0),
          Vn(e, n, r),
          (me = t),
          (Ve = a));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (lr(2, r, n), Ee || lr(4, r, n), Vn(e, n, r));
        break;
      case 1:
        (Ee ||
          (_n(r, n),
          (t = r.stateNode),
          typeof t.componentWillUnmount == 'function' && Dc(r, n, t)),
          Vn(e, n, r));
        break;
      case 21:
        Vn(e, n, r);
        break;
      case 22:
        ((Ee = (t = Ee) || r.memoizedState !== null), Vn(e, n, r), (Ee = t));
        break;
      default:
        Vn(e, n, r);
    }
  }
  function Wc(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Nt(e);
      } catch (r) {
        te(n, n.return, r);
      }
    }
  }
  function Qc(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Nt(e);
      } catch (r) {
        te(n, n.return, r);
      }
  }
  function Jp(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return (n === null && (n = e.stateNode = new Bc()), n);
      case 22:
        return (
          (e = e.stateNode),
          (n = e._retryCache),
          n === null && (n = e._retryCache = new Bc()),
          n
        );
      default:
        throw Error(d(435, e.tag));
    }
  }
  function mo(e, n) {
    var r = Jp(e);
    n.forEach(function (t) {
      if (!r.has(t)) {
        r.add(t);
        var a = sm.bind(null, e, t);
        t.then(a, a);
      }
    });
  }
  function qe(e, n) {
    var r = n.deletions;
    if (r !== null)
      for (var t = 0; t < r.length; t++) {
        var a = r[t],
          o = e,
          i = n,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 27:
              if (gr(u.type)) {
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
        if (me === null) throw Error(d(160));
        (qc(o, i, a),
          (me = null),
          (Ve = !1),
          (o = a.alternate),
          o !== null && (o.return = null),
          (a.return = null));
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; ) (Kc(n, e), (n = n.sibling));
  }
  var kn = null;
  function Kc(e, n) {
    var r = e.alternate,
      t = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (qe(n, e),
          We(e),
          t & 4 && (lr(3, e, e.return), ta(3, e), lr(5, e, e.return)));
        break;
      case 1:
        (qe(n, e),
          We(e),
          t & 512 && (Ee || r === null || _n(r, r.return)),
          t & 64 &&
            Un &&
            ((e = e.updateQueue),
            e !== null &&
              ((t = e.callbacks),
              t !== null &&
                ((r = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = r === null ? t : r.concat(t))))));
        break;
      case 26:
        var a = kn;
        if (
          (qe(n, e),
          We(e),
          t & 512 && (Ee || r === null || _n(r, r.return)),
          t & 4)
        ) {
          var o = r !== null ? r.memoizedState : null;
          if (((t = e.memoizedState), r === null))
            if (t === null)
              if (e.stateNode === null) {
                e: {
                  ((t = e.type),
                    (r = e.memoizedProps),
                    (a = a.ownerDocument || a));
                  n: switch (t) {
                    case 'title':
                      ((o = a.getElementsByTagName('title')[0]),
                        (!o ||
                          o[Tt] ||
                          o[_e] ||
                          o.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          o.hasAttribute('itemprop')) &&
                          ((o = a.createElement(t)),
                          a.head.insertBefore(
                            o,
                            a.querySelector('head > title'),
                          )),
                        Oe(o, t, r),
                        (o[_e] = e),
                        Ne(o),
                        (t = o));
                      break e;
                    case 'link':
                      var i = Xf('link', 'href', a).get(t + (r.href || ''));
                      if (i) {
                        for (var u = 0; u < i.length; u++)
                          if (
                            ((o = i[u]),
                            o.getAttribute('href') ===
                              (r.href == null || r.href === ''
                                ? null
                                : r.href) &&
                              o.getAttribute('rel') ===
                                (r.rel == null ? null : r.rel) &&
                              o.getAttribute('title') ===
                                (r.title == null ? null : r.title) &&
                              o.getAttribute('crossorigin') ===
                                (r.crossOrigin == null ? null : r.crossOrigin))
                          ) {
                            i.splice(u, 1);
                            break n;
                          }
                      }
                      ((o = a.createElement(t)),
                        Oe(o, t, r),
                        a.head.appendChild(o));
                      break;
                    case 'meta':
                      if (
                        (i = Xf('meta', 'content', a).get(
                          t + (r.content || ''),
                        ))
                      ) {
                        for (u = 0; u < i.length; u++)
                          if (
                            ((o = i[u]),
                            o.getAttribute('content') ===
                              (r.content == null ? null : '' + r.content) &&
                              o.getAttribute('name') ===
                                (r.name == null ? null : r.name) &&
                              o.getAttribute('property') ===
                                (r.property == null ? null : r.property) &&
                              o.getAttribute('http-equiv') ===
                                (r.httpEquiv == null ? null : r.httpEquiv) &&
                              o.getAttribute('charset') ===
                                (r.charSet == null ? null : r.charSet))
                          ) {
                            i.splice(u, 1);
                            break n;
                          }
                      }
                      ((o = a.createElement(t)),
                        Oe(o, t, r),
                        a.head.appendChild(o));
                      break;
                    default:
                      throw Error(d(468, t));
                  }
                  ((o[_e] = e), Ne(o), (t = o));
                }
                e.stateNode = t;
              } else Gf(a, e.type, e.stateNode);
            else e.stateNode = Kf(a, t, e.memoizedProps);
          else
            o !== t
              ? (o === null
                  ? r.stateNode !== null &&
                    ((r = r.stateNode), r.parentNode.removeChild(r))
                  : o.count--,
                t === null
                  ? Gf(a, e.type, e.stateNode)
                  : Kf(a, t, e.memoizedProps))
              : t === null &&
                e.stateNode !== null &&
                bu(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 27:
        (qe(n, e),
          We(e),
          t & 512 && (Ee || r === null || _n(r, r.return)),
          r !== null && t & 4 && bu(e, e.memoizedProps, r.memoizedProps));
        break;
      case 5:
        if (
          (qe(n, e),
          We(e),
          t & 512 && (Ee || r === null || _n(r, r.return)),
          e.flags & 32)
        ) {
          a = e.stateNode;
          try {
            Xr(a, '');
          } catch (z) {
            te(e, e.return, z);
          }
        }
        (t & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), bu(e, a, r !== null ? r.memoizedProps : a)),
          t & 1024 && (Su = !0));
        break;
      case 6:
        if ((qe(n, e), We(e), t & 4)) {
          if (e.stateNode === null) throw Error(d(162));
          ((t = e.memoizedProps), (r = e.stateNode));
          try {
            r.nodeValue = t;
          } catch (z) {
            te(e, e.return, z);
          }
        }
        break;
      case 3:
        if (
          ((Lo = null),
          (a = kn),
          (kn = _o(n.containerInfo)),
          qe(n, e),
          (kn = a),
          We(e),
          t & 4 && r !== null && r.memoizedState.isDehydrated)
        )
          try {
            Nt(n.containerInfo);
          } catch (z) {
            te(e, e.return, z);
          }
        Su && ((Su = !1), Xc(e));
        break;
      case 4:
        ((t = kn),
          (kn = _o(e.stateNode.containerInfo)),
          qe(n, e),
          We(e),
          (kn = t));
        break;
      case 12:
        (qe(n, e), We(e));
        break;
      case 31:
        (qe(n, e),
          We(e),
          t & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), mo(e, t))));
        break;
      case 13:
        (qe(n, e),
          We(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (r !== null && r.memoizedState !== null) &&
            (go = Ge()),
          t & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), mo(e, t))));
        break;
      case 22:
        a = e.memoizedState !== null;
        var s = r !== null && r.memoizedState !== null,
          m = Un,
          y = Ee;
        if (
          ((Un = m || a),
          (Ee = y || s),
          qe(n, e),
          (Ee = y),
          (Un = m),
          We(e),
          t & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = a ? n._visibility & -2 : n._visibility | 1,
              a && (r === null || s || Un || Ee || $r(e)),
              r = null,
              n = e;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (r === null) {
                s = r = n;
                try {
                  if (((o = s.stateNode), a))
                    ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'));
                  else {
                    u = s.stateNode;
                    var w = s.memoizedProps.style,
                      h =
                        w != null && w.hasOwnProperty('display')
                          ? w.display
                          : null;
                    u.style.display =
                      h == null || typeof h == 'boolean' ? '' : ('' + h).trim();
                  }
                } catch (z) {
                  te(s, s.return, z);
                }
              }
            } else if (n.tag === 6) {
              if (r === null) {
                s = n;
                try {
                  s.stateNode.nodeValue = a ? '' : s.memoizedProps;
                } catch (z) {
                  te(s, s.return, z);
                }
              }
            } else if (n.tag === 18) {
              if (r === null) {
                s = n;
                try {
                  var g = s.stateNode;
                  a ? If(g, !0) : If(s.stateNode, !1);
                } catch (z) {
                  te(s, s.return, z);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === e) &&
              n.child !== null
            ) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              (r === n && (r = null), (n = n.return));
            }
            (r === n && (r = null),
              (n.sibling.return = n.return),
              (n = n.sibling));
          }
        t & 4 &&
          ((t = e.updateQueue),
          t !== null &&
            ((r = t.retryQueue),
            r !== null && ((t.retryQueue = null), mo(e, r))));
        break;
      case 19:
        (qe(n, e),
          We(e),
          t & 4 &&
            ((t = e.updateQueue),
            t !== null && ((e.updateQueue = null), mo(e, t))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (qe(n, e), We(e));
    }
  }
  function We(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, t = e.return; t !== null; ) {
          if ($c(t)) {
            r = t;
            break;
          }
          t = t.return;
        }
        if (r == null) throw Error(d(160));
        switch (r.tag) {
          case 27:
            var a = r.stateNode,
              o = ku(e);
            po(e, o, a);
            break;
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Xr(i, ''), (r.flags &= -33));
            var u = ku(e);
            po(e, u, i);
            break;
          case 3:
          case 4:
            var s = r.stateNode.containerInfo,
              m = ku(e);
            wu(e, m, s);
            break;
          default:
            throw Error(d(161));
        }
      } catch (y) {
        te(e, e.return, y);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Xc(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        (Xc(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function qn(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (Uc(e, n.alternate, n), (n = n.sibling));
  }
  function $r(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (lr(4, n, n.return), $r(n));
          break;
        case 1:
          _n(n, n.return);
          var r = n.stateNode;
          (typeof r.componentWillUnmount == 'function' && Dc(n, n.return, r),
            $r(n));
          break;
        case 27:
          pa(n.stateNode);
        case 26:
        case 5:
          (_n(n, n.return), $r(n));
          break;
        case 22:
          n.memoizedState === null && $r(n);
          break;
        case 30:
          $r(n);
          break;
        default:
          $r(n);
      }
      e = e.sibling;
    }
  }
  function Wn(e, n, r) {
    for (r = r && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var t = n.alternate,
        a = e,
        o = n,
        i = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (Wn(a, o, r), ta(4, o));
          break;
        case 1:
          if (
            (Wn(a, o, r),
            (t = o),
            (a = t.stateNode),
            typeof a.componentDidMount == 'function')
          )
            try {
              a.componentDidMount();
            } catch (m) {
              te(t, t.return, m);
            }
          if (((t = o), (a = t.updateQueue), a !== null)) {
            var u = t.stateNode;
            try {
              var s = a.shared.hiddenCallbacks;
              if (s !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < s.length; a++)
                  Nl(s[a], u);
            } catch (m) {
              te(t, t.return, m);
            }
          }
          (r && i & 64 && Mc(o), aa(o, o.return));
          break;
        case 27:
          Hc(o);
        case 26:
        case 5:
          (Wn(a, o, r), r && t === null && i & 4 && Ic(o), aa(o, o.return));
          break;
        case 12:
          Wn(a, o, r);
          break;
        case 31:
          (Wn(a, o, r), r && i & 4 && Wc(a, o));
          break;
        case 13:
          (Wn(a, o, r), r && i & 4 && Qc(a, o));
          break;
        case 22:
          (o.memoizedState === null && Wn(a, o, r), aa(o, o.return));
          break;
        case 30:
          break;
        default:
          Wn(a, o, r);
      }
      n = n.sibling;
    }
  }
  function xu(e, n) {
    var r = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (r = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== r && (e != null && e.refCount++, r != null && Vt(r)));
  }
  function Eu(e, n) {
    ((e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && Vt(e)));
  }
  function wn(e, n, r, t) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (Gc(e, n, r, t), (n = n.sibling));
  }
  function Gc(e, n, r, t) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (wn(e, n, r, t), a & 2048 && ta(9, n));
        break;
      case 1:
        wn(e, n, r, t);
        break;
      case 3:
        (wn(e, n, r, t),
          a & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && Vt(e))));
        break;
      case 12:
        if (a & 2048) {
          (wn(e, n, r, t), (e = n.stateNode));
          try {
            var o = n.memoizedProps,
              i = o.id,
              u = o.onPostCommit;
            typeof u == 'function' &&
              u(
                i,
                n.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            te(n, n.return, s);
          }
        } else wn(e, n, r, t);
        break;
      case 31:
        wn(e, n, r, t);
        break;
      case 13:
        wn(e, n, r, t);
        break;
      case 23:
        break;
      case 22:
        ((o = n.stateNode),
          (i = n.alternate),
          n.memoizedState !== null
            ? o._visibility & 2
              ? wn(e, n, r, t)
              : oa(e, n)
            : o._visibility & 2
              ? wn(e, n, r, t)
              : ((o._visibility |= 2),
                ht(e, n, r, t, (n.subtreeFlags & 10256) !== 0 || !1)),
          a & 2048 && xu(i, n));
        break;
      case 24:
        (wn(e, n, r, t), a & 2048 && Eu(n.alternate, n));
        break;
      default:
        wn(e, n, r, t);
    }
  }
  function ht(e, n, r, t, a) {
    for (
      a = a && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child;
      n !== null;

    ) {
      var o = e,
        i = n,
        u = r,
        s = t,
        m = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (ht(o, i, u, s, a), ta(8, i));
          break;
        case 23:
          break;
        case 22:
          var y = i.stateNode;
          (i.memoizedState !== null
            ? y._visibility & 2
              ? ht(o, i, u, s, a)
              : oa(o, i)
            : ((y._visibility |= 2), ht(o, i, u, s, a)),
            a && m & 2048 && xu(i.alternate, i));
          break;
        case 24:
          (ht(o, i, u, s, a), a && m & 2048 && Eu(i.alternate, i));
          break;
        default:
          ht(o, i, u, s, a);
      }
      n = n.sibling;
    }
  }
  function oa(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e,
          t = n,
          a = t.flags;
        switch (t.tag) {
          case 22:
            (oa(r, t), a & 2048 && xu(t.alternate, t));
            break;
          case 24:
            (oa(r, t), a & 2048 && Eu(t.alternate, t));
            break;
          default:
            oa(r, t);
        }
        n = n.sibling;
      }
  }
  var ia = 8192;
  function gt(e, n, r) {
    if (e.subtreeFlags & ia)
      for (e = e.child; e !== null; ) (Yc(e, n, r), (e = e.sibling));
  }
  function Yc(e, n, r) {
    switch (e.tag) {
      case 26:
        (gt(e, n, r),
          e.flags & ia &&
            e.memoizedState !== null &&
            Im(r, kn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        gt(e, n, r);
        break;
      case 3:
      case 4:
        var t = kn;
        ((kn = _o(e.stateNode.containerInfo)), gt(e, n, r), (kn = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = ia), (ia = 16777216), gt(e, n, r), (ia = t))
            : gt(e, n, r));
        break;
      default:
        gt(e, n, r);
    }
  }
  function Zc(e) {
    var n = e.alternate;
    if (n !== null && ((e = n.child), e !== null)) {
      n.child = null;
      do ((n = e.sibling), (e.sibling = null), (e = n));
      while (e !== null);
    }
  }
  function ua(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var t = n[r];
          ((ze = t), ef(t, e));
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
        (ua(e), e.flags & 2048 && lr(9, e, e.return));
        break;
      case 3:
        ua(e);
        break;
      case 12:
        ua(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), ho(e))
          : ua(e);
        break;
      default:
        ua(e);
    }
  }
  function ho(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var t = n[r];
          ((ze = t), ef(t, e));
        }
      Zc(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          (lr(8, n, n.return), ho(n));
          break;
        case 22:
          ((r = n.stateNode),
            r._visibility & 2 && ((r._visibility &= -3), ho(n)));
          break;
        default:
          ho(n);
      }
      e = e.sibling;
    }
  }
  function ef(e, n) {
    for (; ze !== null; ) {
      var r = ze;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          lr(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var t = r.memoizedState.cachePool.pool;
            t != null && t.refCount++;
          }
          break;
        case 24:
          Vt(r.memoizedState.cache);
      }
      if (((t = r.child), t !== null)) ((t.return = r), (ze = t));
      else
        e: for (r = e; ze !== null; ) {
          t = ze;
          var a = t.sibling,
            o = t.return;
          if ((Vc(t), t === r)) {
            ze = null;
            break e;
          }
          if (a !== null) {
            ((a.return = o), (ze = a));
            break e;
          }
          ze = o;
        }
    }
  }
  var em = {
      getCacheForType: function (e) {
        var n = Le(we),
          r = n.data.get(e);
        return (r === void 0 && ((r = e()), n.data.set(e, r)), r);
      },
      cacheSignal: function () {
        return Le(we).controller.signal;
      },
    },
    nm = typeof WeakMap == 'function' ? WeakMap : Map,
    ee = 0,
    ce = null,
    U = null,
    W = 0,
    re = 0,
    tn = null,
    cr = !1,
    yt = !1,
    Cu = !1,
    Qn = 0,
    ge = 0,
    fr = 0,
    Hr = 0,
    Nu = 0,
    an = 0,
    vt = 0,
    sa = null,
    Qe = null,
    zu = !1,
    go = 0,
    nf = 0,
    yo = 1 / 0,
    vo = null,
    dr = null,
    Ce = 0,
    pr = null,
    bt = null,
    Kn = 0,
    _u = 0,
    Pu = null,
    rf = null,
    la = 0,
    Lu = null;
  function on() {
    return (ee & 2) !== 0 && W !== 0 ? W & -W : v.T !== null ? Au() : vs();
  }
  function tf() {
    if (an === 0)
      if ((W & 536870912) === 0 || X) {
        var e = Ca;
        ((Ca <<= 1), (Ca & 3932160) === 0 && (Ca = 262144), (an = e));
      } else an = 536870912;
    return ((e = nn.current), e !== null && (e.flags |= 32), an);
  }
  function Ke(e, n, r) {
    (((e === ce && (re === 2 || re === 9)) || e.cancelPendingCommit !== null) &&
      (kt(e, 0), mr(e, W, an, !1)),
      Lt(e, r),
      ((ee & 2) === 0 || e !== ce) &&
        (e === ce &&
          ((ee & 2) === 0 && (Hr |= r), ge === 4 && mr(e, W, an, !1)),
        Pn(e)));
  }
  function af(e, n, r) {
    if ((ee & 6) !== 0) throw Error(d(327));
    var t = (!r && (n & 127) === 0 && (n & e.expiredLanes) === 0) || Pt(e, n),
      a = t ? am(e, n) : Ou(e, n, !0),
      o = t;
    do {
      if (a === 0) {
        yt && !t && mr(e, n, 0, !1);
        break;
      } else {
        if (((r = e.current.alternate), o && !rm(r))) {
          ((a = Ou(e, n, !1)), (o = !1));
          continue;
        }
        if (a === 2) {
          if (((o = n), e.errorRecoveryDisabledLanes & o)) var i = 0;
          else
            ((i = e.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            n = i;
            e: {
              var u = e;
              a = sa;
              var s = u.current.memoizedState.isDehydrated;
              if ((s && (kt(u, i).flags |= 256), (i = Ou(u, i, !1)), i !== 2)) {
                if (Cu && !s) {
                  ((u.errorRecoveryDisabledLanes |= o), (Hr |= o), (a = 4));
                  break e;
                }
                ((o = Qe),
                  (Qe = a),
                  o !== null &&
                    (Qe === null ? (Qe = o) : Qe.push.apply(Qe, o)));
              }
              a = i;
            }
            if (((o = !1), a !== 2)) continue;
          }
        }
        if (a === 1) {
          (kt(e, 0), mr(e, n, 0, !0));
          break;
        }
        e: {
          switch (((t = e), (o = a), o)) {
            case 0:
            case 1:
              throw Error(d(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              mr(t, n, an, !cr);
              break e;
            case 2:
              Qe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(d(329));
          }
          if ((n & 62914560) === n && ((a = go + 300 - Ge()), 10 < a)) {
            if ((mr(t, n, an, !cr), za(t, 0, !0) !== 0)) break e;
            ((Kn = n),
              (t.timeoutHandle = Af(
                of.bind(
                  null,
                  t,
                  r,
                  Qe,
                  vo,
                  zu,
                  n,
                  an,
                  Hr,
                  vt,
                  cr,
                  o,
                  'Throttled',
                  -0,
                  0,
                ),
                a,
              )));
            break e;
          }
          of(t, r, Qe, vo, zu, n, an, Hr, vt, cr, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Pn(e);
  }
  function of(e, n, r, t, a, o, i, u, s, m, y, w, h, g) {
    if (
      ((e.timeoutHandle = -1),
      (w = n.subtreeFlags),
      w & 8192 || (w & 16785408) === 16785408)
    ) {
      ((w = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: jn,
      }),
        Yc(n, o, w));
      var z =
        (o & 62914560) === o ? go - Ge() : (o & 4194048) === o ? nf - Ge() : 0;
      if (((z = $m(w, z)), z !== null)) {
        ((Kn = o),
          (e.cancelPendingCommit = z(
            mf.bind(null, e, n, o, r, t, a, i, u, s, y, w, null, h, g),
          )),
          mr(e, o, i, !m));
        return;
      }
    }
    mf(e, n, o, r, t, a, i, u, s);
  }
  function rm(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if (
        (r === 0 || r === 11 || r === 15) &&
        n.flags & 16384 &&
        ((r = n.updateQueue), r !== null && ((r = r.stores), r !== null))
      )
        for (var t = 0; t < r.length; t++) {
          var a = r[t],
            o = a.getSnapshot;
          a = a.value;
          try {
            if (!Je(o(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((r = n.child), n.subtreeFlags & 16384 && r !== null))
        ((r.return = n), (n = r));
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function mr(e, n, r, t) {
    ((n &= ~Nu),
      (n &= ~Hr),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      t && (e.warmLanes |= n),
      (t = e.expirationTimes));
    for (var a = n; 0 < a; ) {
      var o = 31 - Ze(a),
        i = 1 << o;
      ((t[o] = -1), (a &= ~i));
    }
    r !== 0 && hs(e, r, n);
  }
  function bo() {
    return (ee & 6) === 0 ? (ca(0), !1) : !0;
  }
  function Tu() {
    if (U !== null) {
      if (re === 0) var e = U.return;
      else ((e = U), (Mn = Or = null), Qi(e), (ct = null), (Wt = 0), (e = U));
      for (; e !== null; ) (Ac(e.alternate, e), (e = e.return));
      U = null;
    }
  }
  function kt(e, n) {
    var r = e.timeoutHandle;
    (r !== -1 && ((e.timeoutHandle = -1), Sm(r)),
      (r = e.cancelPendingCommit),
      r !== null && ((e.cancelPendingCommit = null), r()),
      (Kn = 0),
      Tu(),
      (ce = e),
      (U = r = Rn(e.current, null)),
      (W = n),
      (re = 0),
      (tn = null),
      (cr = !1),
      (yt = Pt(e, n)),
      (Cu = !1),
      (vt = an = Nu = Hr = fr = ge = 0),
      (Qe = sa = null),
      (zu = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var t = e.entangledLanes;
    if (t !== 0)
      for (e = e.entanglements, t &= n; 0 < t; ) {
        var a = 31 - Ze(t),
          o = 1 << a;
        ((n |= e[a]), (t &= ~o));
      }
    return ((Qn = n), Ia(), r);
  }
  function uf(e, n) {
    ((I = null),
      (v.H = ea),
      n === lt || n === Qa
        ? ((n = Sl()), (re = 3))
        : n === Ri
          ? ((n = Sl()), (re = 4))
          : (re =
              n === lu
                ? 8
                : n !== null &&
                    typeof n == 'object' &&
                    typeof n.then == 'function'
                  ? 6
                  : 1),
      (tn = n),
      U === null && ((ge = 1), uo(e, cn(n, e.current))));
  }
  function sf() {
    var e = nn.current;
    return e === null
      ? !0
      : (W & 4194048) === W
        ? bn === null
        : (W & 62914560) === W || (W & 536870912) !== 0
          ? e === bn
          : !1;
  }
  function lf() {
    var e = v.H;
    return ((v.H = ea), e === null ? ea : e);
  }
  function cf() {
    var e = v.A;
    return ((v.A = em), e);
  }
  function ko() {
    ((ge = 4),
      cr || ((W & 4194048) !== W && nn.current !== null) || (yt = !0),
      ((fr & 134217727) === 0 && (Hr & 134217727) === 0) ||
        ce === null ||
        mr(ce, W, an, !1));
  }
  function Ou(e, n, r) {
    var t = ee;
    ee |= 2;
    var a = lf(),
      o = cf();
    ((ce !== e || W !== n) && ((vo = null), kt(e, n)), (n = !1));
    var i = ge;
    e: do
      try {
        if (re !== 0 && U !== null) {
          var u = U,
            s = tn;
          switch (re) {
            case 8:
              (Tu(), (i = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              nn.current === null && (n = !0);
              var m = re;
              if (((re = 0), (tn = null), wt(e, u, s, m), r && yt)) {
                i = 0;
                break e;
              }
              break;
            default:
              ((m = re), (re = 0), (tn = null), wt(e, u, s, m));
          }
        }
        (tm(), (i = ge));
        break;
      } catch (y) {
        uf(e, y);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (Mn = Or = null),
      (ee = t),
      (v.H = a),
      (v.A = o),
      U === null && ((ce = null), (W = 0), Ia()),
      i
    );
  }
  function tm() {
    for (; U !== null; ) ff(U);
  }
  function am(e, n) {
    var r = ee;
    ee |= 2;
    var t = lf(),
      a = cf();
    ce !== e || W !== n
      ? ((vo = null), (yo = Ge() + 500), kt(e, n))
      : (yt = Pt(e, n));
    e: do
      try {
        if (re !== 0 && U !== null) {
          n = U;
          var o = tn;
          n: switch (re) {
            case 1:
              ((re = 0), (tn = null), wt(e, n, o, 1));
              break;
            case 2:
            case 9:
              if (kl(o)) {
                ((re = 0), (tn = null), df(n));
                break;
              }
              ((n = function () {
                ((re !== 2 && re !== 9) || ce !== e || (re = 7), Pn(e));
              }),
                o.then(n, n));
              break e;
            case 3:
              re = 7;
              break e;
            case 4:
              re = 5;
              break e;
            case 7:
              kl(o)
                ? ((re = 0), (tn = null), df(n))
                : ((re = 0), (tn = null), wt(e, n, o, 7));
              break;
            case 5:
              var i = null;
              switch (U.tag) {
                case 26:
                  i = U.memoizedState;
                case 5:
                case 27:
                  var u = U;
                  if (i ? Yf(i) : u.stateNode.complete) {
                    ((re = 0), (tn = null));
                    var s = u.sibling;
                    if (s !== null) U = s;
                    else {
                      var m = u.return;
                      m !== null ? ((U = m), wo(m)) : (U = null);
                    }
                    break n;
                  }
              }
              ((re = 0), (tn = null), wt(e, n, o, 5));
              break;
            case 6:
              ((re = 0), (tn = null), wt(e, n, o, 6));
              break;
            case 8:
              (Tu(), (ge = 6));
              break e;
            default:
              throw Error(d(462));
          }
        }
        om();
        break;
      } catch (y) {
        uf(e, y);
      }
    while (!0);
    return (
      (Mn = Or = null),
      (v.H = t),
      (v.A = a),
      (ee = r),
      U !== null ? 0 : ((ce = null), (W = 0), Ia(), ge)
    );
  }
  function om() {
    for (; U !== null && !_d(); ) ff(U);
  }
  function ff(e) {
    var n = Fc(e.alternate, e, Qn);
    ((e.memoizedProps = e.pendingProps), n === null ? wo(e) : (U = n));
  }
  function df(e) {
    var n = e,
      r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = _c(r, n, n.pendingProps, n.type, void 0, W);
        break;
      case 11:
        n = _c(r, n, n.pendingProps, n.type.render, n.ref, W);
        break;
      case 5:
        Qi(n);
      default:
        (Ac(r, n), (n = U = ll(n, Qn)), (n = Fc(r, n, Qn)));
    }
    ((e.memoizedProps = e.pendingProps), n === null ? wo(e) : (U = n));
  }
  function wt(e, n, r, t) {
    ((Mn = Or = null), Qi(n), (ct = null), (Wt = 0));
    var a = n.return;
    try {
      if (Qp(e, a, n, r, W)) {
        ((ge = 1), uo(e, cn(r, e.current)), (U = null));
        return;
      }
    } catch (o) {
      if (a !== null) throw ((U = a), o);
      ((ge = 1), uo(e, cn(r, e.current)), (U = null));
      return;
    }
    n.flags & 32768
      ? (X || t === 1
          ? (e = !0)
          : yt || (W & 536870912) !== 0
            ? (e = !1)
            : ((cr = e = !0),
              (t === 2 || t === 9 || t === 3 || t === 6) &&
                ((t = nn.current),
                t !== null && t.tag === 13 && (t.flags |= 16384))),
        pf(n, e))
      : wo(n);
  }
  function wo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        pf(n, cr);
        return;
      }
      e = n.return;
      var r = Gp(n.alternate, n, Qn);
      if (r !== null) {
        U = r;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        U = n;
        return;
      }
      U = n = e;
    } while (n !== null);
    ge === 0 && (ge = 5);
  }
  function pf(e, n) {
    do {
      var r = Yp(e.alternate, e);
      if (r !== null) {
        ((r.flags &= 32767), (U = r));
        return;
      }
      if (
        ((r = e.return),
        r !== null &&
          ((r.flags |= 32768), (r.subtreeFlags = 0), (r.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        U = e;
        return;
      }
      U = e = r;
    } while (e !== null);
    ((ge = 6), (U = null));
  }
  function mf(e, n, r, t, a, o, i, u, s) {
    e.cancelPendingCommit = null;
    do So();
    while (Ce !== 0);
    if ((ee & 6) !== 0) throw Error(d(327));
    if (n !== null) {
      if (n === e.current) throw Error(d(177));
      if (
        ((o = n.lanes | n.childLanes),
        (o |= ki),
        Dd(e, r, o, i, u, s),
        e === ce && ((U = ce = null), (W = 0)),
        (bt = n),
        (pr = e),
        (Kn = r),
        (_u = o),
        (Pu = a),
        (rf = t),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            lm(xa, function () {
              return (bf(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (t = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || t)
      ) {
        ((t = v.T), (v.T = null), (a = C.p), (C.p = 2), (i = ee), (ee |= 4));
        try {
          Zp(e, n, r);
        } finally {
          ((ee = i), (C.p = a), (v.T = t));
        }
      }
      ((Ce = 1), hf(), gf(), yf());
    }
  }
  function hf() {
    if (Ce === 1) {
      Ce = 0;
      var e = pr,
        n = bt,
        r = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || r) {
        ((r = v.T), (v.T = null));
        var t = C.p;
        C.p = 2;
        var a = ee;
        ee |= 4;
        try {
          Kc(n, e);
          var o = Vu,
            i = el(e.containerInfo),
            u = o.focusedElem,
            s = o.selectionRange;
          if (
            i !== u &&
            u &&
            u.ownerDocument &&
            Js(u.ownerDocument.documentElement, u)
          ) {
            if (s !== null && hi(u)) {
              var m = s.start,
                y = s.end;
              if ((y === void 0 && (y = m), 'selectionStart' in u))
                ((u.selectionStart = m),
                  (u.selectionEnd = Math.min(y, u.value.length)));
              else {
                var w = u.ownerDocument || document,
                  h = (w && w.defaultView) || window;
                if (h.getSelection) {
                  var g = h.getSelection(),
                    z = u.textContent.length,
                    F = Math.min(s.start, z),
                    ue = s.end === void 0 ? F : Math.min(s.end, z);
                  !g.extend && F > ue && ((i = ue), (ue = F), (F = i));
                  var f = Zs(u, F),
                    l = Zs(u, ue);
                  if (
                    f &&
                    l &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== f.node ||
                      g.anchorOffset !== f.offset ||
                      g.focusNode !== l.node ||
                      g.focusOffset !== l.offset)
                  ) {
                    var p = w.createRange();
                    (p.setStart(f.node, f.offset),
                      g.removeAllRanges(),
                      F > ue
                        ? (g.addRange(p), g.extend(l.node, l.offset))
                        : (p.setEnd(l.node, l.offset), g.addRange(p)));
                  }
                }
              }
            }
            for (w = [], g = u; (g = g.parentNode); )
              g.nodeType === 1 &&
                w.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof u.focus == 'function' && u.focus(), u = 0;
              u < w.length;
              u++
            ) {
              var b = w[u];
              ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
            }
          }
          ((Fo = !!Uu), (Vu = Uu = null));
        } finally {
          ((ee = a), (C.p = t), (v.T = r));
        }
      }
      ((e.current = n), (Ce = 2));
    }
  }
  function gf() {
    if (Ce === 2) {
      Ce = 0;
      var e = pr,
        n = bt,
        r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        ((r = v.T), (v.T = null));
        var t = C.p;
        C.p = 2;
        var a = ee;
        ee |= 4;
        try {
          Uc(e, n.alternate, n);
        } finally {
          ((ee = a), (C.p = t), (v.T = r));
        }
      }
      Ce = 3;
    }
  }
  function yf() {
    if (Ce === 4 || Ce === 3) {
      ((Ce = 0), Pd());
      var e = pr,
        n = bt,
        r = Kn,
        t = rf;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Ce = 5)
        : ((Ce = 0), (bt = pr = null), vf(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (
        (a === 0 && (dr = null),
        Go(r),
        (n = n.stateNode),
        Ye && typeof Ye.onCommitFiberRoot == 'function')
      )
        try {
          Ye.onCommitFiberRoot(_t, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (t !== null) {
        ((n = v.T), (a = C.p), (C.p = 2), (v.T = null));
        try {
          for (var o = e.onRecoverableError, i = 0; i < t.length; i++) {
            var u = t[i];
            o(u.value, { componentStack: u.stack });
          }
        } finally {
          ((v.T = n), (C.p = a));
        }
      }
      ((Kn & 3) !== 0 && So(),
        Pn(e),
        (a = e.pendingLanes),
        (r & 261930) !== 0 && (a & 42) !== 0
          ? e === Lu
            ? la++
            : ((la = 0), (Lu = e))
          : (la = 0),
        ca(0));
    }
  }
  function vf(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), Vt(n)));
  }
  function So() {
    return (hf(), gf(), yf(), bf());
  }
  function bf() {
    if (Ce !== 5) return !1;
    var e = pr,
      n = _u;
    _u = 0;
    var r = Go(Kn),
      t = v.T,
      a = C.p;
    try {
      ((C.p = 32 > r ? 32 : r), (v.T = null), (r = Pu), (Pu = null));
      var o = pr,
        i = Kn;
      if (((Ce = 0), (bt = pr = null), (Kn = 0), (ee & 6) !== 0))
        throw Error(d(331));
      var u = ee;
      if (
        ((ee |= 4),
        Jc(o.current),
        Gc(o, o.current, i, r),
        (ee = u),
        ca(0, !1),
        Ye && typeof Ye.onPostCommitFiberRoot == 'function')
      )
        try {
          Ye.onPostCommitFiberRoot(_t, o);
        } catch {}
      return !0;
    } finally {
      ((C.p = a), (v.T = t), vf(e, n));
    }
  }
  function kf(e, n, r) {
    ((n = cn(r, n)),
      (n = su(e.stateNode, n, 2)),
      (e = ir(e, n, 2)),
      e !== null && (Lt(e, 2), Pn(e)));
  }
  function te(e, n, r) {
    if (e.tag === 3) kf(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          kf(n, e, r);
          break;
        } else if (n.tag === 1) {
          var t = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof t.componentDidCatch == 'function' &&
              (dr === null || !dr.has(t)))
          ) {
            ((e = cn(r, e)),
              (r = kc(2)),
              (t = ir(n, r, 2)),
              t !== null && (wc(r, t, n, e), Lt(t, 2), Pn(t)));
            break;
          }
        }
        n = n.return;
      }
  }
  function ju(e, n, r) {
    var t = e.pingCache;
    if (t === null) {
      t = e.pingCache = new nm();
      var a = new Set();
      t.set(n, a);
    } else ((a = t.get(n)), a === void 0 && ((a = new Set()), t.set(n, a)));
    a.has(r) ||
      ((Cu = !0), a.add(r), (e = im.bind(null, e, n, r)), n.then(e, e));
  }
  function im(e, n, r) {
    var t = e.pingCache;
    (t !== null && t.delete(n),
      (e.pingedLanes |= e.suspendedLanes & r),
      (e.warmLanes &= ~r),
      ce === e &&
        (W & r) === r &&
        (ge === 4 || (ge === 3 && (W & 62914560) === W && 300 > Ge() - go)
          ? (ee & 2) === 0 && kt(e, 0)
          : (Nu |= r),
        vt === W && (vt = 0)),
      Pn(e));
  }
  function wf(e, n) {
    (n === 0 && (n = ms()), (e = Pr(e, n)), e !== null && (Lt(e, n), Pn(e)));
  }
  function um(e) {
    var n = e.memoizedState,
      r = 0;
    (n !== null && (r = n.retryLane), wf(e, r));
  }
  function sm(e, n) {
    var r = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var t = e.stateNode,
          a = e.memoizedState;
        a !== null && (r = a.retryLane);
        break;
      case 19:
        t = e.stateNode;
        break;
      case 22:
        t = e.stateNode._retryCache;
        break;
      default:
        throw Error(d(314));
    }
    (t !== null && t.delete(n), wf(e, r));
  }
  function lm(e, n) {
    return Wo(e, n);
  }
  var xo = null,
    St = null,
    Fu = !1,
    Eo = !1,
    Ru = !1,
    hr = 0;
  function Pn(e) {
    (e !== St &&
      e.next === null &&
      (St === null ? (xo = St = e) : (St = St.next = e)),
      (Eo = !0),
      Fu || ((Fu = !0), fm()));
  }
  function ca(e, n) {
    if (!Ru && Eo) {
      Ru = !0;
      do
        for (var r = !1, t = xo; t !== null; ) {
          if (e !== 0) {
            var a = t.pendingLanes;
            if (a === 0) var o = 0;
            else {
              var i = t.suspendedLanes,
                u = t.pingedLanes;
              ((o = (1 << (31 - Ze(42 | e) + 1)) - 1),
                (o &= a & ~(i & ~u)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((r = !0), Cf(t, o));
          } else
            ((o = W),
              (o = za(
                t,
                t === ce ? o : 0,
                t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || Pt(t, o) || ((r = !0), Cf(t, o)));
          t = t.next;
        }
      while (r);
      Ru = !1;
    }
  }
  function cm() {
    Sf();
  }
  function Sf() {
    Eo = Fu = !1;
    var e = 0;
    hr !== 0 && wm() && (e = hr);
    for (var n = Ge(), r = null, t = xo; t !== null; ) {
      var a = t.next,
        o = xf(t, n);
      (o === 0
        ? ((t.next = null),
          r === null ? (xo = a) : (r.next = a),
          a === null && (St = r))
        : ((r = t), (e !== 0 || (o & 3) !== 0) && (Eo = !0)),
        (t = a));
    }
    ((Ce !== 0 && Ce !== 5) || ca(e), hr !== 0 && (hr = 0));
  }
  function xf(e, n) {
    for (
      var r = e.suspendedLanes,
        t = e.pingedLanes,
        a = e.expirationTimes,
        o = e.pendingLanes & -62914561;
      0 < o;

    ) {
      var i = 31 - Ze(o),
        u = 1 << i,
        s = a[i];
      (s === -1
        ? ((u & r) === 0 || (u & t) !== 0) && (a[i] = Md(u, n))
        : s <= n && (e.expiredLanes |= u),
        (o &= ~u));
    }
    if (
      ((n = ce),
      (r = W),
      (r = za(
        e,
        e === n ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (t = e.callbackNode),
      r === 0 ||
        (e === n && (re === 2 || re === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        t !== null && t !== null && Qo(t),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((r & 3) === 0 || Pt(e, r)) {
      if (((n = r & -r), n === e.callbackPriority)) return n;
      switch ((t !== null && Qo(t), Go(r))) {
        case 2:
        case 8:
          r = ds;
          break;
        case 32:
          r = xa;
          break;
        case 268435456:
          r = ps;
          break;
        default:
          r = xa;
      }
      return (
        (t = Ef.bind(null, e)),
        (r = Wo(r, t)),
        (e.callbackPriority = n),
        (e.callbackNode = r),
        n
      );
    }
    return (
      t !== null && t !== null && Qo(t),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Ef(e, n) {
    if (Ce !== 0 && Ce !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var r = e.callbackNode;
    if (So() && e.callbackNode !== r) return null;
    var t = W;
    return (
      (t = za(
        e,
        e === ce ? t : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      t === 0
        ? null
        : (af(e, t, n),
          xf(e, Ge()),
          e.callbackNode != null && e.callbackNode === r
            ? Ef.bind(null, e)
            : null)
    );
  }
  function Cf(e, n) {
    if (So()) return null;
    af(e, n, !0);
  }
  function fm() {
    xm(function () {
      (ee & 6) !== 0 ? Wo(fs, cm) : Sf();
    });
  }
  function Au() {
    if (hr === 0) {
      var e = ut;
      (e === 0 && ((e = Ea), (Ea <<= 1), (Ea & 261888) === 0 && (Ea = 256)),
        (hr = e));
    }
    return hr;
  }
  function Nf(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Ta('' + e);
  }
  function zf(e, n) {
    var r = n.ownerDocument.createElement('input');
    return (
      (r.name = n.name),
      (r.value = n.value),
      e.id && r.setAttribute('form', e.id),
      n.parentNode.insertBefore(r, n),
      (e = new FormData(e)),
      r.parentNode.removeChild(r),
      e
    );
  }
  function dm(e, n, r, t, a) {
    if (n === 'submit' && r && r.stateNode === a) {
      var o = Nf((a[Be] || null).action),
        i = t.submitter;
      i &&
        ((n = (n = i[Be] || null)
          ? Nf(n.formAction)
          : i.getAttribute('formAction')),
        n !== null && ((o = n), (i = null)));
      var u = new Ra('action', 'action', null, t, a);
      e.push({
        event: u,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (t.defaultPrevented) {
                if (hr !== 0) {
                  var s = i ? zf(a, i) : new FormData(a);
                  ru(
                    r,
                    { pending: !0, data: s, method: a.method, action: o },
                    null,
                    s,
                  );
                }
              } else
                typeof o == 'function' &&
                  (u.preventDefault(),
                  (s = i ? zf(a, i) : new FormData(a)),
                  ru(
                    r,
                    { pending: !0, data: s, method: a.method, action: o },
                    o,
                    s,
                  ));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  for (var Mu = 0; Mu < bi.length; Mu++) {
    var Du = bi[Mu],
      pm = Du.toLowerCase(),
      mm = Du[0].toUpperCase() + Du.slice(1);
    vn(pm, 'on' + mm);
  }
  (vn(tl, 'onAnimationEnd'),
    vn(al, 'onAnimationIteration'),
    vn(ol, 'onAnimationStart'),
    vn('dblclick', 'onDoubleClick'),
    vn('focusin', 'onFocus'),
    vn('focusout', 'onBlur'),
    vn(Lp, 'onTransitionRun'),
    vn(Tp, 'onTransitionStart'),
    vn(Op, 'onTransitionCancel'),
    vn(il, 'onTransitionEnd'),
    Qr('onMouseEnter', ['mouseout', 'mouseover']),
    Qr('onMouseLeave', ['mouseout', 'mouseover']),
    Qr('onPointerEnter', ['pointerout', 'pointerover']),
    Qr('onPointerLeave', ['pointerout', 'pointerover']),
    Cr(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Cr(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Cr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Cr(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Cr(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Cr(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var fa =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    hm = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(fa),
    );
  function _f(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var t = e[r],
        a = t.event;
      t = t.listeners;
      e: {
        var o = void 0;
        if (n)
          for (var i = t.length - 1; 0 <= i; i--) {
            var u = t[i],
              s = u.instance,
              m = u.currentTarget;
            if (((u = u.listener), s !== o && a.isPropagationStopped()))
              break e;
            ((o = u), (a.currentTarget = m));
            try {
              o(a);
            } catch (y) {
              Da(y);
            }
            ((a.currentTarget = null), (o = s));
          }
        else
          for (i = 0; i < t.length; i++) {
            if (
              ((u = t[i]),
              (s = u.instance),
              (m = u.currentTarget),
              (u = u.listener),
              s !== o && a.isPropagationStopped())
            )
              break e;
            ((o = u), (a.currentTarget = m));
            try {
              o(a);
            } catch (y) {
              Da(y);
            }
            ((a.currentTarget = null), (o = s));
          }
      }
    }
  }
  function V(e, n) {
    var r = n[Yo];
    r === void 0 && (r = n[Yo] = new Set());
    var t = e + '__bubble';
    r.has(t) || (Pf(n, e, 2, !1), r.add(t));
  }
  function Iu(e, n, r) {
    var t = 0;
    (n && (t |= 4), Pf(r, e, t, n));
  }
  var Co = '_reactListening' + Math.random().toString(36).slice(2);
  function $u(e) {
    if (!e[Co]) {
      ((e[Co] = !0),
        ws.forEach(function (r) {
          r !== 'selectionchange' && (hm.has(r) || Iu(r, !1, e), Iu(r, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Co] || ((n[Co] = !0), Iu('selectionchange', !1, n));
    }
  }
  function Pf(e, n, r, t) {
    switch (ad(n)) {
      case 2:
        var a = Um;
        break;
      case 8:
        a = Vm;
        break;
      default:
        a = ns;
    }
    ((r = a.bind(null, n, r, e)),
      (a = void 0),
      !ii ||
        (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
        (a = !0),
      t
        ? a !== void 0
          ? e.addEventListener(n, r, { capture: !0, passive: a })
          : e.addEventListener(n, r, !0)
        : a !== void 0
          ? e.addEventListener(n, r, { passive: a })
          : e.addEventListener(n, r, !1));
  }
  function Hu(e, n, r, t, a) {
    var o = t;
    if ((n & 1) === 0 && (n & 2) === 0 && t !== null)
      e: for (;;) {
        if (t === null) return;
        var i = t.tag;
        if (i === 3 || i === 4) {
          var u = t.stateNode.containerInfo;
          if (u === a) break;
          if (i === 4)
            for (i = t.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === a)
                return;
              i = i.return;
            }
          for (; u !== null; ) {
            if (((i = Vr(u)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              t = o = i;
              continue e;
            }
            u = u.parentNode;
          }
        }
        t = t.return;
      }
    js(function () {
      var m = o,
        y = ai(r),
        w = [];
      e: {
        var h = ul.get(e);
        if (h !== void 0) {
          var g = Ra,
            z = e;
          switch (e) {
            case 'keypress':
              if (ja(r) === 0) break e;
            case 'keydown':
            case 'keyup':
              g = sp;
              break;
            case 'focusin':
              ((z = 'focus'), (g = ci));
              break;
            case 'focusout':
              ((z = 'blur'), (g = ci));
              break;
            case 'beforeblur':
            case 'afterblur':
              g = ci;
              break;
            case 'click':
              if (r.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              g = As;
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
            case tl:
            case al:
            case ol:
              g = Jd;
              break;
            case il:
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
              g = np;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              g = Ds;
              break;
            case 'toggle':
            case 'beforetoggle':
              g = yp;
          }
          var F = (n & 4) !== 0,
            ue = !F && (e === 'scroll' || e === 'scrollend'),
            f = F ? (h !== null ? h + 'Capture' : null) : h;
          F = [];
          for (var l = m, p; l !== null; ) {
            var b = l;
            if (
              ((p = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                p === null ||
                f === null ||
                ((b = jt(l, f)), b != null && F.push(da(l, b, p))),
              ue)
            )
              break;
            l = l.return;
          }
          0 < F.length &&
            ((h = new g(h, z, null, r, y)), w.push({ event: h, listeners: F }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((h = e === 'mouseover' || e === 'pointerover'),
            (g = e === 'mouseout' || e === 'pointerout'),
            h &&
              r !== ti &&
              (z = r.relatedTarget || r.fromElement) &&
              (Vr(z) || z[Ur]))
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
              ? ((z = r.relatedTarget || r.toElement),
                (g = m),
                (z = z ? Vr(z) : null),
                z !== null &&
                  ((ue = $(z)),
                  (F = z.tag),
                  z !== ue || (F !== 5 && F !== 27 && F !== 6)) &&
                  (z = null))
              : ((g = null), (z = m)),
            g !== z)
          ) {
            if (
              ((F = As),
              (b = 'onMouseLeave'),
              (f = 'onMouseEnter'),
              (l = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((F = Ds),
                (b = 'onPointerLeave'),
                (f = 'onPointerEnter'),
                (l = 'pointer')),
              (ue = g == null ? h : Ot(g)),
              (p = z == null ? h : Ot(z)),
              (h = new F(b, l + 'leave', g, r, y)),
              (h.target = ue),
              (h.relatedTarget = p),
              (b = null),
              Vr(y) === m &&
                ((F = new F(f, l + 'enter', z, r, y)),
                (F.target = p),
                (F.relatedTarget = ue),
                (b = F)),
              (ue = b),
              g && z)
            )
              n: {
                for (F = gm, f = g, l = z, p = 0, b = f; b; b = F(b)) p++;
                b = 0;
                for (var O = l; O; O = F(O)) b++;
                for (; 0 < p - b; ) ((f = F(f)), p--);
                for (; 0 < b - p; ) ((l = F(l)), b--);
                for (; p--; ) {
                  if (f === l || (l !== null && f === l.alternate)) {
                    F = f;
                    break n;
                  }
                  ((f = F(f)), (l = F(l)));
                }
                F = null;
              }
            else F = null;
            (g !== null && Lf(w, h, g, F, !1),
              z !== null && ue !== null && Lf(w, ue, z, F, !0));
          }
        }
        e: {
          if (
            ((h = m ? Ot(m) : window),
            (g = h.nodeName && h.nodeName.toLowerCase()),
            g === 'select' || (g === 'input' && h.type === 'file'))
          )
            var Z = Ws;
          else if (Vs(h))
            if (Qs) Z = zp;
            else {
              Z = Cp;
              var P = Ep;
            }
          else
            ((g = h.nodeName),
              !g ||
              g.toLowerCase() !== 'input' ||
              (h.type !== 'checkbox' && h.type !== 'radio')
                ? m && ri(m.elementType) && (Z = Ws)
                : (Z = Np));
          if (Z && (Z = Z(e, m))) {
            qs(w, Z, r, y);
            break e;
          }
          (P && P(e, h, m),
            e === 'focusout' &&
              m &&
              h.type === 'number' &&
              m.memoizedProps.value != null &&
              ni(h, 'number', h.value));
        }
        switch (((P = m ? Ot(m) : window), e)) {
          case 'focusin':
            (Vs(P) || P.contentEditable === 'true') &&
              ((Jr = P), (gi = m), (Ht = null));
            break;
          case 'focusout':
            Ht = gi = Jr = null;
            break;
          case 'mousedown':
            yi = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((yi = !1), nl(w, r, y));
            break;
          case 'selectionchange':
            if (Pp) break;
          case 'keydown':
          case 'keyup':
            nl(w, r, y);
        }
        var H;
        if (di)
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
          Zr
            ? Bs(e, r) && (Q = 'onCompositionEnd')
            : e === 'keydown' &&
              r.keyCode === 229 &&
              (Q = 'onCompositionStart');
        (Q &&
          (Is &&
            r.locale !== 'ko' &&
            (Zr || Q !== 'onCompositionStart'
              ? Q === 'onCompositionEnd' && Zr && (H = Fs())
              : ((Jn = y),
                (ui = 'value' in Jn ? Jn.value : Jn.textContent),
                (Zr = !0))),
          (P = No(m, Q)),
          0 < P.length &&
            ((Q = new Ms(Q, e, null, r, y)),
            w.push({ event: Q, listeners: P }),
            H ? (Q.data = H) : ((H = Us(r)), H !== null && (Q.data = H)))),
          (H = bp ? kp(e, r) : wp(e, r)) &&
            ((Q = No(m, 'onBeforeInput')),
            0 < Q.length &&
              ((P = new Ms('onBeforeInput', 'beforeinput', null, r, y)),
              w.push({ event: P, listeners: Q }),
              (P.data = H))),
          dm(w, e, m, r, y));
      }
      _f(w, n);
    });
  }
  function da(e, n, r) {
    return { instance: e, listener: n, currentTarget: r };
  }
  function No(e, n) {
    for (var r = n + 'Capture', t = []; e !== null; ) {
      var a = e,
        o = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          o === null ||
          ((a = jt(e, r)),
          a != null && t.unshift(da(e, a, o)),
          (a = jt(e, n)),
          a != null && t.push(da(e, a, o))),
        e.tag === 3)
      )
        return t;
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
  function Lf(e, n, r, t, a) {
    for (var o = n._reactName, i = []; r !== null && r !== t; ) {
      var u = r,
        s = u.alternate,
        m = u.stateNode;
      if (((u = u.tag), s !== null && s === t)) break;
      ((u !== 5 && u !== 26 && u !== 27) ||
        m === null ||
        ((s = m),
        a
          ? ((m = jt(r, o)), m != null && i.unshift(da(r, m, s)))
          : a || ((m = jt(r, o)), m != null && i.push(da(r, m, s)))),
        (r = r.return));
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var ym = /\r\n?/g,
    vm = /\u0000|\uFFFD/g;
  function Tf(e) {
    return (typeof e == 'string' ? e : '' + e)
      .replace(
        ym,
        `
`,
      )
      .replace(vm, '');
  }
  function Of(e, n) {
    return ((n = Tf(n)), Tf(e) === n);
  }
  function ie(e, n, r, t, a, o) {
    switch (r) {
      case 'children':
        typeof t == 'string'
          ? n === 'body' || (n === 'textarea' && t === '') || Xr(e, t)
          : (typeof t == 'number' || typeof t == 'bigint') &&
            n !== 'body' &&
            Xr(e, '' + t);
        break;
      case 'className':
        Pa(e, 'class', t);
        break;
      case 'tabIndex':
        Pa(e, 'tabindex', t);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Pa(e, r, t);
        break;
      case 'style':
        Ts(e, t, o);
        break;
      case 'data':
        if (n !== 'object') {
          Pa(e, 'data', t);
          break;
        }
      case 'src':
      case 'href':
        if (t === '' && (n !== 'a' || r !== 'href')) {
          e.removeAttribute(r);
          break;
        }
        if (
          t == null ||
          typeof t == 'function' ||
          typeof t == 'symbol' ||
          typeof t == 'boolean'
        ) {
          e.removeAttribute(r);
          break;
        }
        ((t = Ta('' + t)), e.setAttribute(r, t));
        break;
      case 'action':
      case 'formAction':
        if (typeof t == 'function') {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == 'function' &&
            (r === 'formAction'
              ? (n !== 'input' && ie(e, n, 'name', a.name, a, null),
                ie(e, n, 'formEncType', a.formEncType, a, null),
                ie(e, n, 'formMethod', a.formMethod, a, null),
                ie(e, n, 'formTarget', a.formTarget, a, null))
              : (ie(e, n, 'encType', a.encType, a, null),
                ie(e, n, 'method', a.method, a, null),
                ie(e, n, 'target', a.target, a, null)));
        if (t == null || typeof t == 'symbol' || typeof t == 'boolean') {
          e.removeAttribute(r);
          break;
        }
        ((t = Ta('' + t)), e.setAttribute(r, t));
        break;
      case 'onClick':
        t != null && (e.onclick = jn);
        break;
      case 'onScroll':
        t != null && V('scroll', e);
        break;
      case 'onScrollEnd':
        t != null && V('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (t != null) {
          if (typeof t != 'object' || !('__html' in t)) throw Error(d(61));
          if (((r = t.__html), r != null)) {
            if (a.children != null) throw Error(d(60));
            e.innerHTML = r;
          }
        }
        break;
      case 'multiple':
        e.multiple = t && typeof t != 'function' && typeof t != 'symbol';
        break;
      case 'muted':
        e.muted = t && typeof t != 'function' && typeof t != 'symbol';
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
          t == null ||
          typeof t == 'function' ||
          typeof t == 'boolean' ||
          typeof t == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((r = Ta('' + t)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', r));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        t != null && typeof t != 'function' && typeof t != 'symbol'
          ? e.setAttribute(r, '' + t)
          : e.removeAttribute(r);
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
        t && typeof t != 'function' && typeof t != 'symbol'
          ? e.setAttribute(r, '')
          : e.removeAttribute(r);
        break;
      case 'capture':
      case 'download':
        t === !0
          ? e.setAttribute(r, '')
          : t !== !1 &&
              t != null &&
              typeof t != 'function' &&
              typeof t != 'symbol'
            ? e.setAttribute(r, t)
            : e.removeAttribute(r);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        t != null &&
        typeof t != 'function' &&
        typeof t != 'symbol' &&
        !isNaN(t) &&
        1 <= t
          ? e.setAttribute(r, t)
          : e.removeAttribute(r);
        break;
      case 'rowSpan':
      case 'start':
        t == null || typeof t == 'function' || typeof t == 'symbol' || isNaN(t)
          ? e.removeAttribute(r)
          : e.setAttribute(r, t);
        break;
      case 'popover':
        (V('beforetoggle', e), V('toggle', e), _a(e, 'popover', t));
        break;
      case 'xlinkActuate':
        On(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', t);
        break;
      case 'xlinkArcrole':
        On(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', t);
        break;
      case 'xlinkRole':
        On(e, 'http://www.w3.org/1999/xlink', 'xlink:role', t);
        break;
      case 'xlinkShow':
        On(e, 'http://www.w3.org/1999/xlink', 'xlink:show', t);
        break;
      case 'xlinkTitle':
        On(e, 'http://www.w3.org/1999/xlink', 'xlink:title', t);
        break;
      case 'xlinkType':
        On(e, 'http://www.w3.org/1999/xlink', 'xlink:type', t);
        break;
      case 'xmlBase':
        On(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', t);
        break;
      case 'xmlLang':
        On(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', t);
        break;
      case 'xmlSpace':
        On(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', t);
        break;
      case 'is':
        _a(e, 'is', t);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < r.length) ||
          (r[0] !== 'o' && r[0] !== 'O') ||
          (r[1] !== 'n' && r[1] !== 'N')) &&
          ((r = Wd.get(r) || r), _a(e, r, t));
    }
  }
  function Bu(e, n, r, t, a, o) {
    switch (r) {
      case 'style':
        Ts(e, t, o);
        break;
      case 'dangerouslySetInnerHTML':
        if (t != null) {
          if (typeof t != 'object' || !('__html' in t)) throw Error(d(61));
          if (((r = t.__html), r != null)) {
            if (a.children != null) throw Error(d(60));
            e.innerHTML = r;
          }
        }
        break;
      case 'children':
        typeof t == 'string'
          ? Xr(e, t)
          : (typeof t == 'number' || typeof t == 'bigint') && Xr(e, '' + t);
        break;
      case 'onScroll':
        t != null && V('scroll', e);
        break;
      case 'onScrollEnd':
        t != null && V('scrollend', e);
        break;
      case 'onClick':
        t != null && (e.onclick = jn);
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
        if (!Ss.hasOwnProperty(r))
          e: {
            if (
              r[0] === 'o' &&
              r[1] === 'n' &&
              ((a = r.endsWith('Capture')),
              (n = r.slice(2, a ? r.length - 7 : void 0)),
              (o = e[Be] || null),
              (o = o != null ? o[r] : null),
              typeof o == 'function' && e.removeEventListener(n, o, a),
              typeof t == 'function')
            ) {
              (typeof o != 'function' &&
                o !== null &&
                (r in e
                  ? (e[r] = null)
                  : e.hasAttribute(r) && e.removeAttribute(r)),
                e.addEventListener(n, t, a));
              break e;
            }
            r in e
              ? (e[r] = t)
              : t === !0
                ? e.setAttribute(r, '')
                : _a(e, r, t);
          }
    }
  }
  function Oe(e, n, r) {
    switch (n) {
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
        (V('error', e), V('load', e));
        var t = !1,
          a = !1,
          o;
        for (o in r)
          if (r.hasOwnProperty(o)) {
            var i = r[o];
            if (i != null)
              switch (o) {
                case 'src':
                  t = !0;
                  break;
                case 'srcSet':
                  a = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(d(137, n));
                default:
                  ie(e, n, o, i, r, null);
              }
          }
        (a && ie(e, n, 'srcSet', r.srcSet, r, null),
          t && ie(e, n, 'src', r.src, r, null));
        return;
      case 'input':
        V('invalid', e);
        var u = (o = i = a = null),
          s = null,
          m = null;
        for (t in r)
          if (r.hasOwnProperty(t)) {
            var y = r[t];
            if (y != null)
              switch (t) {
                case 'name':
                  a = y;
                  break;
                case 'type':
                  i = y;
                  break;
                case 'checked':
                  s = y;
                  break;
                case 'defaultChecked':
                  m = y;
                  break;
                case 'value':
                  o = y;
                  break;
                case 'defaultValue':
                  u = y;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (y != null) throw Error(d(137, n));
                  break;
                default:
                  ie(e, n, t, y, r, null);
              }
          }
        zs(e, o, u, s, m, i, a, !1);
        return;
      case 'select':
        (V('invalid', e), (t = i = o = null));
        for (a in r)
          if (r.hasOwnProperty(a) && ((u = r[a]), u != null))
            switch (a) {
              case 'value':
                o = u;
                break;
              case 'defaultValue':
                i = u;
                break;
              case 'multiple':
                t = u;
              default:
                ie(e, n, a, u, r, null);
            }
        ((n = o),
          (r = i),
          (e.multiple = !!t),
          n != null ? Kr(e, !!t, n, !1) : r != null && Kr(e, !!t, r, !0));
        return;
      case 'textarea':
        (V('invalid', e), (o = a = t = null));
        for (i in r)
          if (r.hasOwnProperty(i) && ((u = r[i]), u != null))
            switch (i) {
              case 'value':
                t = u;
                break;
              case 'defaultValue':
                a = u;
                break;
              case 'children':
                o = u;
                break;
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(d(91));
                break;
              default:
                ie(e, n, i, u, r, null);
            }
        Ps(e, t, a, o);
        return;
      case 'option':
        for (s in r)
          if (r.hasOwnProperty(s) && ((t = r[s]), t != null))
            switch (s) {
              case 'selected':
                e.selected =
                  t && typeof t != 'function' && typeof t != 'symbol';
                break;
              default:
                ie(e, n, s, t, r, null);
            }
        return;
      case 'dialog':
        (V('beforetoggle', e), V('toggle', e), V('cancel', e), V('close', e));
        break;
      case 'iframe':
      case 'object':
        V('load', e);
        break;
      case 'video':
      case 'audio':
        for (t = 0; t < fa.length; t++) V(fa[t], e);
        break;
      case 'image':
        (V('error', e), V('load', e));
        break;
      case 'details':
        V('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (V('error', e), V('load', e));
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
        for (m in r)
          if (r.hasOwnProperty(m) && ((t = r[m]), t != null))
            switch (m) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(d(137, n));
              default:
                ie(e, n, m, t, r, null);
            }
        return;
      default:
        if (ri(n)) {
          for (y in r)
            r.hasOwnProperty(y) &&
              ((t = r[y]), t !== void 0 && Bu(e, n, y, t, r, void 0));
          return;
        }
    }
    for (u in r)
      r.hasOwnProperty(u) && ((t = r[u]), t != null && ie(e, n, u, t, r, null));
  }
  function bm(e, n, r, t) {
    switch (n) {
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
        var a = null,
          o = null,
          i = null,
          u = null,
          s = null,
          m = null,
          y = null;
        for (g in r) {
          var w = r[g];
          if (r.hasOwnProperty(g) && w != null)
            switch (g) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                s = w;
              default:
                t.hasOwnProperty(g) || ie(e, n, g, null, t, w);
            }
        }
        for (var h in t) {
          var g = t[h];
          if (((w = r[h]), t.hasOwnProperty(h) && (g != null || w != null)))
            switch (h) {
              case 'type':
                o = g;
                break;
              case 'name':
                a = g;
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
                if (g != null) throw Error(d(137, n));
                break;
              default:
                g !== w && ie(e, n, h, g, t, w);
            }
        }
        ei(e, i, u, s, m, y, o, a);
        return;
      case 'select':
        g = i = u = h = null;
        for (o in r)
          if (((s = r[o]), r.hasOwnProperty(o) && s != null))
            switch (o) {
              case 'value':
                break;
              case 'multiple':
                g = s;
              default:
                t.hasOwnProperty(o) || ie(e, n, o, null, t, s);
            }
        for (a in t)
          if (
            ((o = t[a]),
            (s = r[a]),
            t.hasOwnProperty(a) && (o != null || s != null))
          )
            switch (a) {
              case 'value':
                h = o;
                break;
              case 'defaultValue':
                u = o;
                break;
              case 'multiple':
                i = o;
              default:
                o !== s && ie(e, n, a, o, t, s);
            }
        ((n = u),
          (r = i),
          (t = g),
          h != null
            ? Kr(e, !!r, h, !1)
            : !!t != !!r &&
              (n != null ? Kr(e, !!r, n, !0) : Kr(e, !!r, r ? [] : '', !1)));
        return;
      case 'textarea':
        g = h = null;
        for (u in r)
          if (
            ((a = r[u]),
            r.hasOwnProperty(u) && a != null && !t.hasOwnProperty(u))
          )
            switch (u) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                ie(e, n, u, null, t, a);
            }
        for (i in t)
          if (
            ((a = t[i]),
            (o = r[i]),
            t.hasOwnProperty(i) && (a != null || o != null))
          )
            switch (i) {
              case 'value':
                h = a;
                break;
              case 'defaultValue':
                g = a;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (a != null) throw Error(d(91));
                break;
              default:
                a !== o && ie(e, n, i, a, t, o);
            }
        _s(e, h, g);
        return;
      case 'option':
        for (var z in r)
          if (
            ((h = r[z]),
            r.hasOwnProperty(z) && h != null && !t.hasOwnProperty(z))
          )
            switch (z) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                ie(e, n, z, null, t, h);
            }
        for (s in t)
          if (
            ((h = t[s]),
            (g = r[s]),
            t.hasOwnProperty(s) && h !== g && (h != null || g != null))
          )
            switch (s) {
              case 'selected':
                e.selected =
                  h && typeof h != 'function' && typeof h != 'symbol';
                break;
              default:
                ie(e, n, s, h, t, g);
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
        for (var F in r)
          ((h = r[F]),
            r.hasOwnProperty(F) &&
              h != null &&
              !t.hasOwnProperty(F) &&
              ie(e, n, F, null, t, h));
        for (m in t)
          if (
            ((h = t[m]),
            (g = r[m]),
            t.hasOwnProperty(m) && h !== g && (h != null || g != null))
          )
            switch (m) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (h != null) throw Error(d(137, n));
                break;
              default:
                ie(e, n, m, h, t, g);
            }
        return;
      default:
        if (ri(n)) {
          for (var ue in r)
            ((h = r[ue]),
              r.hasOwnProperty(ue) &&
                h !== void 0 &&
                !t.hasOwnProperty(ue) &&
                Bu(e, n, ue, void 0, t, h));
          for (y in t)
            ((h = t[y]),
              (g = r[y]),
              !t.hasOwnProperty(y) ||
                h === g ||
                (h === void 0 && g === void 0) ||
                Bu(e, n, y, h, t, g));
          return;
        }
    }
    for (var f in r)
      ((h = r[f]),
        r.hasOwnProperty(f) &&
          h != null &&
          !t.hasOwnProperty(f) &&
          ie(e, n, f, null, t, h));
    for (w in t)
      ((h = t[w]),
        (g = r[w]),
        !t.hasOwnProperty(w) ||
          h === g ||
          (h == null && g == null) ||
          ie(e, n, w, h, t, g));
  }
  function jf(e) {
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
        var e = 0, n = 0, r = performance.getEntriesByType('resource'), t = 0;
        t < r.length;
        t++
      ) {
        var a = r[t],
          o = a.transferSize,
          i = a.initiatorType,
          u = a.duration;
        if (o && u && jf(i)) {
          for (i = 0, u = a.responseEnd, t += 1; t < r.length; t++) {
            var s = r[t],
              m = s.startTime;
            if (m > u) break;
            var y = s.transferSize,
              w = s.initiatorType;
            y &&
              jf(w) &&
              ((s = s.responseEnd), (i += y * (s < u ? 1 : (u - m) / (s - m))));
          }
          if ((--t, (n += (8 * (o + i)) / (a.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == 'number')
      ? e
      : 5;
  }
  var Uu = null,
    Vu = null;
  function zo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ff(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Rf(e, n) {
    if (e === 0)
      switch (n) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === 'foreignObject' ? 0 : e;
  }
  function qu(e, n) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      typeof n.children == 'bigint' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Wu = null;
  function wm() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === Wu
        ? !1
        : ((Wu = e), !0)
      : ((Wu = null), !1);
  }
  var Af = typeof setTimeout == 'function' ? setTimeout : void 0,
    Sm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Mf = typeof Promise == 'function' ? Promise : void 0,
    xm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Mf < 'u'
          ? function (e) {
              return Mf.resolve(null).then(e).catch(Em);
            }
          : Af;
  function Em(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gr(e) {
    return e === 'head';
  }
  function Df(e, n) {
    var r = n,
      t = 0;
    do {
      var a = r.nextSibling;
      if ((e.removeChild(r), a && a.nodeType === 8))
        if (((r = a.data), r === '/$' || r === '/&')) {
          if (t === 0) {
            (e.removeChild(a), Nt(n));
            return;
          }
          t--;
        } else if (
          r === '$' ||
          r === '$?' ||
          r === '$~' ||
          r === '$!' ||
          r === '&'
        )
          t++;
        else if (r === 'html') pa(e.ownerDocument.documentElement);
        else if (r === 'head') {
          ((r = e.ownerDocument.head), pa(r));
          for (var o = r.firstChild; o; ) {
            var i = o.nextSibling,
              u = o.nodeName;
            (o[Tt] ||
              u === 'SCRIPT' ||
              u === 'STYLE' ||
              (u === 'LINK' && o.rel.toLowerCase() === 'stylesheet') ||
              r.removeChild(o),
              (o = i));
          }
        } else r === 'body' && pa(e.ownerDocument.body);
      r = a;
    } while (r);
    Nt(n);
  }
  function If(e, n) {
    var r = e;
    e = 0;
    do {
      var t = r.nextSibling;
      if (
        (r.nodeType === 1
          ? n
            ? ((r._stashedDisplay = r.style.display),
              (r.style.display = 'none'))
            : ((r.style.display = r._stashedDisplay || ''),
              r.getAttribute('style') === '' && r.removeAttribute('style'))
          : r.nodeType === 3 &&
            (n
              ? ((r._stashedText = r.nodeValue), (r.nodeValue = ''))
              : (r.nodeValue = r._stashedText || '')),
        t && t.nodeType === 8)
      )
        if (((r = t.data), r === '/$')) {
          if (e === 0) break;
          e--;
        } else (r !== '$' && r !== '$?' && r !== '$~' && r !== '$!') || e++;
      r = t;
    } while (r);
  }
  function Qu(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (((n = n.nextSibling), r.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Qu(r), Zo(r));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (r.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(r);
    }
  }
  function Cm(e, n, r, t) {
    for (; e.nodeType === 1; ) {
      var a = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!t && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (t) {
        if (!e[Tt])
          switch (n) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((o = e.getAttribute('rel')),
                (o === 'stylesheet' && e.hasAttribute('data-precedence')) ||
                  o !== a.rel ||
                  e.getAttribute('href') !==
                    (a.href == null || a.href === '' ? null : a.href) ||
                  e.getAttribute('crossorigin') !==
                    (a.crossOrigin == null ? null : a.crossOrigin) ||
                  e.getAttribute('title') !==
                    (a.title == null ? null : a.title))
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((o = e.getAttribute('src')),
                (o !== (a.src == null ? null : a.src) ||
                  e.getAttribute('type') !== (a.type == null ? null : a.type) ||
                  e.getAttribute('crossorigin') !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  o &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === 'input' && e.type === 'hidden') {
        var o = a.name == null ? null : '' + a.name;
        if (a.type === 'hidden' && e.getAttribute('name') === o) return e;
      } else return e;
      if (((e = mn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Nm(e, n, r) {
    if (n === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !r) ||
        ((e = mn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function $f(e, n) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !n) ||
        ((e = mn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ku(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Xu(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function zm(e, n) {
    var r = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = n;
    else if (e.data !== '$?' || r.readyState !== 'loading') n();
    else {
      var t = function () {
        (n(), r.removeEventListener('DOMContentLoaded', t));
      };
      (r.addEventListener('DOMContentLoaded', t), (e._reactRetry = t));
    }
  }
  function mn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = e.data),
          n === '$' ||
            n === '$!' ||
            n === '$?' ||
            n === '$~' ||
            n === '&' ||
            n === 'F!' ||
            n === 'F')
        )
          break;
        if (n === '/$' || n === '/&') return null;
      }
    }
    return e;
  }
  var Gu = null;
  function Hf(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '/$' || r === '/&') {
          if (n === 0) return mn(e.nextSibling);
          n--;
        } else
          (r !== '$' && r !== '$!' && r !== '$?' && r !== '$~' && r !== '&') ||
            n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Bf(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === '$' || r === '$!' || r === '$?' || r === '$~' || r === '&') {
          if (n === 0) return e;
          n--;
        } else (r !== '/$' && r !== '/&') || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Uf(e, n, r) {
    switch (((n = zo(r)), e)) {
      case 'html':
        if (((e = n.documentElement), !e)) throw Error(d(452));
        return e;
      case 'head':
        if (((e = n.head), !e)) throw Error(d(453));
        return e;
      case 'body':
        if (((e = n.body), !e)) throw Error(d(454));
        return e;
      default:
        throw Error(d(451));
    }
  }
  function pa(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    Zo(e);
  }
  var hn = new Map(),
    Vf = new Set();
  function _o(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Xn = C.d;
  C.d = { f: _m, r: Pm, D: Lm, C: Tm, L: Om, m: jm, X: Rm, S: Fm, M: Am };
  function _m() {
    var e = Xn.f(),
      n = bo();
    return e || n;
  }
  function Pm(e) {
    var n = qr(e);
    n !== null && n.tag === 5 && n.type === 'form' ? ic(n) : Xn.r(e);
  }
  var xt = typeof document > 'u' ? null : document;
  function qf(e, n, r) {
    var t = xt;
    if (t && typeof n == 'string' && n) {
      var a = yn(n);
      ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof r == 'string' && (a += '[crossorigin="' + r + '"]'),
        Vf.has(a) ||
          (Vf.add(a),
          (e = { rel: e, crossOrigin: r, href: n }),
          t.querySelector(a) === null &&
            ((n = t.createElement('link')),
            Oe(n, 'link', e),
            Ne(n),
            t.head.appendChild(n))));
    }
  }
  function Lm(e) {
    (Xn.D(e), qf('dns-prefetch', e, null));
  }
  function Tm(e, n) {
    (Xn.C(e, n), qf('preconnect', e, n));
  }
  function Om(e, n, r) {
    Xn.L(e, n, r);
    var t = xt;
    if (t && e && n) {
      var a = 'link[rel="preload"][as="' + yn(n) + '"]';
      n === 'image' && r && r.imageSrcSet
        ? ((a += '[imagesrcset="' + yn(r.imageSrcSet) + '"]'),
          typeof r.imageSizes == 'string' &&
            (a += '[imagesizes="' + yn(r.imageSizes) + '"]'))
        : (a += '[href="' + yn(e) + '"]');
      var o = a;
      switch (n) {
        case 'style':
          o = Et(e);
          break;
        case 'script':
          o = Ct(e);
      }
      hn.has(o) ||
        ((e = j(
          {
            rel: 'preload',
            href: n === 'image' && r && r.imageSrcSet ? void 0 : e,
            as: n,
          },
          r,
        )),
        hn.set(o, e),
        t.querySelector(a) !== null ||
          (n === 'style' && t.querySelector(ma(o))) ||
          (n === 'script' && t.querySelector(ha(o))) ||
          ((n = t.createElement('link')),
          Oe(n, 'link', e),
          Ne(n),
          t.head.appendChild(n)));
    }
  }
  function jm(e, n) {
    Xn.m(e, n);
    var r = xt;
    if (r && e) {
      var t = n && typeof n.as == 'string' ? n.as : 'script',
        a =
          'link[rel="modulepreload"][as="' + yn(t) + '"][href="' + yn(e) + '"]',
        o = a;
      switch (t) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          o = Ct(e);
      }
      if (
        !hn.has(o) &&
        ((e = j({ rel: 'modulepreload', href: e }, n)),
        hn.set(o, e),
        r.querySelector(a) === null)
      ) {
        switch (t) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (r.querySelector(ha(o))) return;
        }
        ((t = r.createElement('link')),
          Oe(t, 'link', e),
          Ne(t),
          r.head.appendChild(t));
      }
    }
  }
  function Fm(e, n, r) {
    Xn.S(e, n, r);
    var t = xt;
    if (t && e) {
      var a = Wr(t).hoistableStyles,
        o = Et(e);
      n = n || 'default';
      var i = a.get(o);
      if (!i) {
        var u = { loading: 0, preload: null };
        if ((i = t.querySelector(ma(o)))) u.loading = 5;
        else {
          ((e = j({ rel: 'stylesheet', href: e, 'data-precedence': n }, r)),
            (r = hn.get(o)) && Yu(e, r));
          var s = (i = t.createElement('link'));
          (Ne(s),
            Oe(s, 'link', e),
            (s._p = new Promise(function (m, y) {
              ((s.onload = m), (s.onerror = y));
            })),
            s.addEventListener('load', function () {
              u.loading |= 1;
            }),
            s.addEventListener('error', function () {
              u.loading |= 2;
            }),
            (u.loading |= 4),
            Po(i, n, t));
        }
        ((i = { type: 'stylesheet', instance: i, count: 1, state: u }),
          a.set(o, i));
      }
    }
  }
  function Rm(e, n) {
    Xn.X(e, n);
    var r = xt;
    if (r && e) {
      var t = Wr(r).hoistableScripts,
        a = Ct(e),
        o = t.get(a);
      o ||
        ((o = r.querySelector(ha(a))),
        o ||
          ((e = j({ src: e, async: !0 }, n)),
          (n = hn.get(a)) && Zu(e, n),
          (o = r.createElement('script')),
          Ne(o),
          Oe(o, 'link', e),
          r.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        t.set(a, o));
    }
  }
  function Am(e, n) {
    Xn.M(e, n);
    var r = xt;
    if (r && e) {
      var t = Wr(r).hoistableScripts,
        a = Ct(e),
        o = t.get(a);
      o ||
        ((o = r.querySelector(ha(a))),
        o ||
          ((e = j({ src: e, async: !0, type: 'module' }, n)),
          (n = hn.get(a)) && Zu(e, n),
          (o = r.createElement('script')),
          Ne(o),
          Oe(o, 'link', e),
          r.head.appendChild(o)),
        (o = { type: 'script', instance: o, count: 1, state: null }),
        t.set(a, o));
    }
  }
  function Wf(e, n, r, t) {
    var a = (a = B.current) ? _o(a) : null;
    if (!a) throw Error(d(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof r.precedence == 'string' && typeof r.href == 'string'
          ? ((n = Et(r.href)),
            (r = Wr(a).hoistableStyles),
            (t = r.get(n)),
            t ||
              ((t = { type: 'style', instance: null, count: 0, state: null }),
              r.set(n, t)),
            t)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          r.rel === 'stylesheet' &&
          typeof r.href == 'string' &&
          typeof r.precedence == 'string'
        ) {
          e = Et(r.href);
          var o = Wr(a).hoistableStyles,
            i = o.get(e);
          if (
            (i ||
              ((a = a.ownerDocument || a),
              (i = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(e, i),
              (o = a.querySelector(ma(e))) &&
                !o._p &&
                ((i.instance = o), (i.state.loading = 5)),
              hn.has(e) ||
                ((r = {
                  rel: 'preload',
                  as: 'style',
                  href: r.href,
                  crossOrigin: r.crossOrigin,
                  integrity: r.integrity,
                  media: r.media,
                  hrefLang: r.hrefLang,
                  referrerPolicy: r.referrerPolicy,
                }),
                hn.set(e, r),
                o || Mm(a, e, r, i.state))),
            n && t === null)
          )
            throw Error(d(528, ''));
          return i;
        }
        if (n && t !== null) throw Error(d(529, ''));
        return null;
      case 'script':
        return (
          (n = r.async),
          (r = r.src),
          typeof r == 'string' &&
          n &&
          typeof n != 'function' &&
          typeof n != 'symbol'
            ? ((n = Ct(r)),
              (r = Wr(a).hoistableScripts),
              (t = r.get(n)),
              t ||
                ((t = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                r.set(n, t)),
              t)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(d(444, e));
    }
  }
  function Et(e) {
    return 'href="' + yn(e) + '"';
  }
  function ma(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Qf(e) {
    return j({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Mm(e, n, r, t) {
    e.querySelector('link[rel="preload"][as="style"][' + n + ']')
      ? (t.loading = 1)
      : ((n = e.createElement('link')),
        (t.preload = n),
        n.addEventListener('load', function () {
          return (t.loading |= 1);
        }),
        n.addEventListener('error', function () {
          return (t.loading |= 2);
        }),
        Oe(n, 'link', r),
        Ne(n),
        e.head.appendChild(n));
  }
  function Ct(e) {
    return '[src="' + yn(e) + '"]';
  }
  function ha(e) {
    return 'script[async]' + e;
  }
  function Kf(e, n, r) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case 'style':
          var t = e.querySelector('style[data-href~="' + yn(r.href) + '"]');
          if (t) return ((n.instance = t), Ne(t), t);
          var a = j({}, r, {
            'data-href': r.href,
            'data-precedence': r.precedence,
            href: null,
            precedence: null,
          });
          return (
            (t = (e.ownerDocument || e).createElement('style')),
            Ne(t),
            Oe(t, 'style', a),
            Po(t, r.precedence, e),
            (n.instance = t)
          );
        case 'stylesheet':
          a = Et(r.href);
          var o = e.querySelector(ma(a));
          if (o) return ((n.state.loading |= 4), (n.instance = o), Ne(o), o);
          ((t = Qf(r)),
            (a = hn.get(a)) && Yu(t, a),
            (o = (e.ownerDocument || e).createElement('link')),
            Ne(o));
          var i = o;
          return (
            (i._p = new Promise(function (u, s) {
              ((i.onload = u), (i.onerror = s));
            })),
            Oe(o, 'link', t),
            (n.state.loading |= 4),
            Po(o, r.precedence, e),
            (n.instance = o)
          );
        case 'script':
          return (
            (o = Ct(r.src)),
            (a = e.querySelector(ha(o)))
              ? ((n.instance = a), Ne(a), a)
              : ((t = r),
                (a = hn.get(o)) && ((t = j({}, r)), Zu(t, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement('script')),
                Ne(a),
                Oe(a, 'link', t),
                e.head.appendChild(a),
                (n.instance = a))
          );
        case 'void':
          return null;
        default:
          throw Error(d(443, n.type));
      }
    else
      n.type === 'stylesheet' &&
        (n.state.loading & 4) === 0 &&
        ((t = n.instance), (n.state.loading |= 4), Po(t, r.precedence, e));
    return n.instance;
  }
  function Po(e, n, r) {
    for (
      var t = r.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        a = t.length ? t[t.length - 1] : null,
        o = a,
        i = 0;
      i < t.length;
      i++
    ) {
      var u = t[i];
      if (u.dataset.precedence === n) o = u;
      else if (o !== a) break;
    }
    o
      ? o.parentNode.insertBefore(e, o.nextSibling)
      : ((n = r.nodeType === 9 ? r.head : r), n.insertBefore(e, n.firstChild));
  }
  function Yu(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title));
  }
  function Zu(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity));
  }
  var Lo = null;
  function Xf(e, n, r) {
    if (Lo === null) {
      var t = new Map(),
        a = (Lo = new Map());
      a.set(r, t);
    } else ((a = Lo), (t = a.get(r)), t || ((t = new Map()), a.set(r, t)));
    if (t.has(e)) return t;
    for (
      t.set(e, null), r = r.getElementsByTagName(e), a = 0;
      a < r.length;
      a++
    ) {
      var o = r[a];
      if (
        !(
          o[Tt] ||
          o[_e] ||
          (e === 'link' && o.getAttribute('rel') === 'stylesheet')
        ) &&
        o.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var i = o.getAttribute(n) || '';
        i = e + i;
        var u = t.get(i);
        u ? u.push(o) : t.set(i, [o]);
      }
    }
    return t;
  }
  function Gf(e, n, r) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        r,
        n === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function Dm(e, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof n.precedence != 'string' ||
          typeof n.href != 'string' ||
          n.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof n.rel != 'string' ||
          typeof n.href != 'string' ||
          n.href === '' ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case 'stylesheet':
            return (
              (e = n.disabled),
              typeof n.precedence == 'string' && e == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          n.async &&
          typeof n.async != 'function' &&
          typeof n.async != 'symbol' &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function Yf(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0);
  }
  function Im(e, n, r, t) {
    if (
      r.type === 'stylesheet' &&
      (typeof t.media != 'string' || matchMedia(t.media).matches !== !1) &&
      (r.state.loading & 4) === 0
    ) {
      if (r.instance === null) {
        var a = Et(t.href),
          o = n.querySelector(ma(a));
        if (o) {
          ((n = o._p),
            n !== null &&
              typeof n == 'object' &&
              typeof n.then == 'function' &&
              (e.count++, (e = To.bind(e)), n.then(e, e)),
            (r.state.loading |= 4),
            (r.instance = o),
            Ne(o));
          return;
        }
        ((o = n.ownerDocument || n),
          (t = Qf(t)),
          (a = hn.get(a)) && Yu(t, a),
          (o = o.createElement('link')),
          Ne(o));
        var i = o;
        ((i._p = new Promise(function (u, s) {
          ((i.onload = u), (i.onerror = s));
        })),
          Oe(o, 'link', t),
          (r.instance = o));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(r, n),
        (n = r.state.preload) &&
          (r.state.loading & 3) === 0 &&
          (e.count++,
          (r = To.bind(e)),
          n.addEventListener('load', r),
          n.addEventListener('error', r)));
    }
  }
  var Ju = 0;
  function $m(e, n) {
    return (
      e.stylesheets && e.count === 0 && jo(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (r) {
            var t = setTimeout(function () {
              if ((e.stylesheets && jo(e, e.stylesheets), e.unsuspend)) {
                var o = e.unsuspend;
                ((e.unsuspend = null), o());
              }
            }, 6e4 + n);
            0 < e.imgBytes && Ju === 0 && (Ju = 62500 * km());
            var a = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && jo(e, e.stylesheets), e.unsuspend))
                ) {
                  var o = e.unsuspend;
                  ((e.unsuspend = null), o());
                }
              },
              (e.imgBytes > Ju ? 50 : 800) + n,
            );
            return (
              (e.unsuspend = r),
              function () {
                ((e.unsuspend = null), clearTimeout(t), clearTimeout(a));
              }
            );
          }
        : null
    );
  }
  function To() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) jo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var Oo = null;
  function jo(e, n) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Oo = new Map()),
        n.forEach(Hm, e),
        (Oo = null),
        To.call(e)));
  }
  function Hm(e, n) {
    if (!(n.state.loading & 4)) {
      var r = Oo.get(e);
      if (r) var t = r.get(null);
      else {
        ((r = new Map()), Oo.set(e, r));
        for (
          var a = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            o = 0;
          o < a.length;
          o++
        ) {
          var i = a[o];
          (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
            (r.set(i.dataset.precedence, i), (t = i));
        }
        t && r.set(null, t);
      }
      ((a = n.instance),
        (i = a.getAttribute('data-precedence')),
        (o = r.get(i) || t),
        o === t && r.set(null, a),
        r.set(i, a),
        this.count++,
        (t = To.bind(this)),
        a.addEventListener('load', t),
        a.addEventListener('error', t),
        o
          ? o.parentNode.insertBefore(a, o.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(a, e.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var ga = {
    $$typeof: je,
    Provider: null,
    Consumer: null,
    _currentValue: R,
    _currentValue2: R,
    _threadCount: 0,
  };
  function Bm(e, n, r, t, a, o, i, u, s) {
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
      (this.expirationTimes = Ko(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ko(0)),
      (this.hiddenUpdates = Ko(null)),
      (this.identifierPrefix = t),
      (this.onUncaughtError = a),
      (this.onCaughtError = o),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function Zf(e, n, r, t, a, o, i, u, s, m, y, w) {
    return (
      (e = new Bm(e, n, r, i, s, m, y, w, u)),
      (n = 1),
      o === !0 && (n |= 24),
      (o = en(3, null, null, n)),
      (e.current = o),
      (o.stateNode = e),
      (n = Oi()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (o.memoizedState = { element: t, isDehydrated: r, cache: n }),
      Ai(o),
      e
    );
  }
  function Jf(e) {
    return e ? ((e = rt), e) : rt;
  }
  function ed(e, n, r, t, a, o) {
    ((a = Jf(a)),
      t.context === null ? (t.context = a) : (t.pendingContext = a),
      (t = or(n)),
      (t.payload = { element: r }),
      (o = o === void 0 ? null : o),
      o !== null && (t.callback = o),
      (r = ir(e, t, n)),
      r !== null && (Ke(r, e, n), Kt(r, e, n)));
  }
  function nd(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function es(e, n) {
    (nd(e, n), (e = e.alternate) && nd(e, n));
  }
  function rd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Pr(e, 67108864);
      (n !== null && Ke(n, e, 67108864), es(e, 67108864));
    }
  }
  function td(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = on();
      n = Xo(n);
      var r = Pr(e, n);
      (r !== null && Ke(r, e, n), es(e, n));
    }
  }
  var Fo = !0;
  function Um(e, n, r, t) {
    var a = v.T;
    v.T = null;
    var o = C.p;
    try {
      ((C.p = 2), ns(e, n, r, t));
    } finally {
      ((C.p = o), (v.T = a));
    }
  }
  function Vm(e, n, r, t) {
    var a = v.T;
    v.T = null;
    var o = C.p;
    try {
      ((C.p = 8), ns(e, n, r, t));
    } finally {
      ((C.p = o), (v.T = a));
    }
  }
  function ns(e, n, r, t) {
    if (Fo) {
      var a = rs(t);
      if (a === null) (Hu(e, n, t, Ro, r), od(e, t));
      else if (Wm(a, e, n, r, t)) t.stopPropagation();
      else if ((od(e, t), n & 4 && -1 < qm.indexOf(e))) {
        for (; a !== null; ) {
          var o = qr(a);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var i = Er(o.pendingLanes);
                  if (i !== 0) {
                    var u = o;
                    for (u.pendingLanes |= 2, u.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - Ze(i));
                      ((u.entanglements[1] |= s), (i &= ~s));
                    }
                    (Pn(o), (ee & 6) === 0 && ((yo = Ge() + 500), ca(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((u = Pr(o, 2)), u !== null && Ke(u, o, 2), bo(), es(o, 2));
            }
          if (((o = rs(t)), o === null && Hu(e, n, t, Ro, r), o === a)) break;
          a = o;
        }
        a !== null && t.stopPropagation();
      } else Hu(e, n, t, null, r);
    }
  }
  function rs(e) {
    return ((e = ai(e)), ts(e));
  }
  var Ro = null;
  function ts(e) {
    if (((Ro = null), (e = Vr(e)), e !== null)) {
      var n = $(e);
      if (n === null) e = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (((e = Y(n)), e !== null)) return e;
          e = null;
        } else if (r === 31) {
          if (((e = ye(n)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return ((Ro = e), null);
  }
  function ad(e) {
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
        switch (Ld()) {
          case fs:
            return 2;
          case ds:
            return 8;
          case xa:
          case Td:
            return 32;
          case ps:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var as = !1,
    yr = null,
    vr = null,
    br = null,
    ya = new Map(),
    va = new Map(),
    kr = [],
    qm =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function od(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        yr = null;
        break;
      case 'dragenter':
      case 'dragleave':
        vr = null;
        break;
      case 'mouseover':
      case 'mouseout':
        br = null;
        break;
      case 'pointerover':
      case 'pointerout':
        ya.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        va.delete(n.pointerId);
    }
  }
  function ba(e, n, r, t, a, o) {
    return e === null || e.nativeEvent !== o
      ? ((e = {
          blockedOn: n,
          domEventName: r,
          eventSystemFlags: t,
          nativeEvent: o,
          targetContainers: [a],
        }),
        n !== null && ((n = qr(n)), n !== null && rd(n)),
        e)
      : ((e.eventSystemFlags |= t),
        (n = e.targetContainers),
        a !== null && n.indexOf(a) === -1 && n.push(a),
        e);
  }
  function Wm(e, n, r, t, a) {
    switch (n) {
      case 'focusin':
        return ((yr = ba(yr, e, n, r, t, a)), !0);
      case 'dragenter':
        return ((vr = ba(vr, e, n, r, t, a)), !0);
      case 'mouseover':
        return ((br = ba(br, e, n, r, t, a)), !0);
      case 'pointerover':
        var o = a.pointerId;
        return (ya.set(o, ba(ya.get(o) || null, e, n, r, t, a)), !0);
      case 'gotpointercapture':
        return (
          (o = a.pointerId),
          va.set(o, ba(va.get(o) || null, e, n, r, t, a)),
          !0
        );
    }
    return !1;
  }
  function id(e) {
    var n = Vr(e.target);
    if (n !== null) {
      var r = $(n);
      if (r !== null) {
        if (((n = r.tag), n === 13)) {
          if (((n = Y(r)), n !== null)) {
            ((e.blockedOn = n),
              bs(e.priority, function () {
                td(r);
              }));
            return;
          }
        } else if (n === 31) {
          if (((n = ye(r)), n !== null)) {
            ((e.blockedOn = n),
              bs(e.priority, function () {
                td(r);
              }));
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ao(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = rs(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var t = new r.constructor(r.type, r);
        ((ti = t), r.target.dispatchEvent(t), (ti = null));
      } else return ((n = qr(r)), n !== null && rd(n), (e.blockedOn = r), !1);
      n.shift();
    }
    return !0;
  }
  function ud(e, n, r) {
    Ao(e) && r.delete(n);
  }
  function Qm() {
    ((as = !1),
      yr !== null && Ao(yr) && (yr = null),
      vr !== null && Ao(vr) && (vr = null),
      br !== null && Ao(br) && (br = null),
      ya.forEach(ud),
      va.forEach(ud));
  }
  function Mo(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      as ||
        ((as = !0),
        E.unstable_scheduleCallback(E.unstable_NormalPriority, Qm)));
  }
  var Do = null;
  function sd(e) {
    Do !== e &&
      ((Do = e),
      E.unstable_scheduleCallback(E.unstable_NormalPriority, function () {
        Do === e && (Do = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n],
            t = e[n + 1],
            a = e[n + 2];
          if (typeof t != 'function') {
            if (ts(t || r) === null) continue;
            break;
          }
          var o = qr(r);
          o !== null &&
            (e.splice(n, 3),
            (n -= 3),
            ru(o, { pending: !0, data: a, method: r.method, action: t }, t, a));
        }
      }));
  }
  function Nt(e) {
    function n(s) {
      return Mo(s, e);
    }
    (yr !== null && Mo(yr, e),
      vr !== null && Mo(vr, e),
      br !== null && Mo(br, e),
      ya.forEach(n),
      va.forEach(n));
    for (var r = 0; r < kr.length; r++) {
      var t = kr[r];
      t.blockedOn === e && (t.blockedOn = null);
    }
    for (; 0 < kr.length && ((r = kr[0]), r.blockedOn === null); )
      (id(r), r.blockedOn === null && kr.shift());
    if (((r = (e.ownerDocument || e).$$reactFormReplay), r != null))
      for (t = 0; t < r.length; t += 3) {
        var a = r[t],
          o = r[t + 1],
          i = a[Be] || null;
        if (typeof o == 'function') i || sd(r);
        else if (i) {
          var u = null;
          if (o && o.hasAttribute('formAction')) {
            if (((a = o), (i = o[Be] || null))) u = i.formAction;
            else if (ts(a) !== null) continue;
          } else u = i.action;
          (typeof u == 'function' ? (r[t + 1] = u) : (r.splice(t, 3), (t -= 3)),
            sd(r));
        }
      }
  }
  function ld() {
    function e(o) {
      o.canIntercept &&
        o.info === 'react-transition' &&
        o.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (a = i);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function n() {
      (a !== null && (a(), (a = null)), t || setTimeout(r, 20));
    }
    function r() {
      if (!t && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var t = !1,
        a = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', n),
        navigation.addEventListener('navigateerror', n),
        setTimeout(r, 100),
        function () {
          ((t = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', n),
            navigation.removeEventListener('navigateerror', n),
            a !== null && (a(), (a = null)));
        }
      );
    }
  }
  function os(e) {
    this._internalRoot = e;
  }
  ((Io.prototype.render = os.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(d(409));
      var r = n.current,
        t = on();
      ed(r, t, e, n, null, null);
    }),
    (Io.prototype.unmount = os.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (ed(e.current, 2, null, e, null, null), bo(), (n[Ur] = null));
        }
      }));
  function Io(e) {
    this._internalRoot = e;
  }
  Io.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = vs();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < kr.length && n !== 0 && n < kr[r].priority; r++);
      (kr.splice(r, 0, e), r === 0 && id(e));
    }
  };
  var cd = q.version;
  if (cd !== '19.2.0') throw Error(d(527, cd, '19.2.0'));
  C.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == 'function'
        ? Error(d(188))
        : ((e = Object.keys(e).join(',')), Error(d(268, e)));
    return (
      (e = x(n)),
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
    var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$o.isDisabled && $o.supportsFiber)
      try {
        ((_t = $o.inject(Km)), (Ye = $o));
      } catch {}
  }
  return (
    (wa.createRoot = function (e, n) {
      if (!L(e)) throw Error(d(299));
      var r = !1,
        t = '',
        a = gc,
        o = yc,
        i = vc;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (r = !0),
          n.identifierPrefix !== void 0 && (t = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (a = n.onUncaughtError),
          n.onCaughtError !== void 0 && (o = n.onCaughtError),
          n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (n = Zf(e, 1, !1, null, null, r, t, null, a, o, i, ld)),
        (e[Ur] = n.current),
        $u(e),
        new os(n)
      );
    }),
    (wa.hydrateRoot = function (e, n, r) {
      if (!L(e)) throw Error(d(299));
      var t = !1,
        a = '',
        o = gc,
        i = yc,
        u = vc,
        s = null;
      return (
        r != null &&
          (r.unstable_strictMode === !0 && (t = !0),
          r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
          r.onUncaughtError !== void 0 && (o = r.onUncaughtError),
          r.onCaughtError !== void 0 && (i = r.onCaughtError),
          r.onRecoverableError !== void 0 && (u = r.onRecoverableError),
          r.formState !== void 0 && (s = r.formState)),
        (n = Zf(e, 1, !0, n, r ?? null, t, a, s, o, i, u, ld)),
        (n.context = Jf(null)),
        (r = n.current),
        (t = on()),
        (t = Xo(t)),
        (a = or(t)),
        (a.callback = null),
        ir(r, a, t),
        (r = t),
        (n.current.lanes = r),
        Lt(n, r),
        Pn(n),
        (e[Ur] = n.current),
        $u(e),
        new Io(n)
      );
    }),
    (wa.version = '19.2.0'),
    wa
  );
}
var Ed;
function oh() {
  if (Ed) return is.exports;
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
      } catch (q) {
        console.error(q);
      }
  }
  return (E(), (is.exports = ah()), is.exports);
}
var ih = oh();
const uh = Cd(ih),
  sh = () =>
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
  lh = () =>
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
  Ho = ({
    icon: E,
    title: q,
    description: A,
    buttonText: d,
    onButtonClick: L,
    colorTheme: $,
  }) => {
    const Y = ch[$];
    return k.jsxs('div', {
      className: 'bg-white rounded-lg shadow-lg overflow-hidden flex flex-col',
      children: [
        k.jsxs('div', {
          className: 'p-6 flex-grow',
          children: [
            k.jsx('div', {
              className: `w-16 h-16 rounded-full ${Y.iconBg} flex items-center justify-center mb-4`,
              children: k.jsx('span', {
                className: `text-3xl ${Y.iconText}`,
                children: E,
              }),
            }),
            k.jsx('h3', { className: 'text-2xl font-bold mb-2', children: q }),
            k.jsx('p', { className: 'text-gray-600', children: A }),
          ],
        }),
        k.jsx('div', {
          className: 'px-6 pb-6',
          children: k.jsx('button', {
            onClick: L,
            className: `w-full ${Y.bg} text-white font-bold py-3 px-4 rounded-lg hover:${Y.hoverBg} transition-colors duration-300`,
            children: d,
          }),
        }),
      ],
    });
  },
  fh = ({ isOpen: E, onClose: q }) =>
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
                  onClick: q,
                  className:
                    'bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300',
                  children: 'Cerrar',
                }),
              }),
            ],
          }),
        })
      : null,
  dh = ({ isOpen: E, onClose: q }) => {
    const [A, d] = Sn.useState(55),
      [L, $] = Sn.useState(50),
      [Y, ye] = Sn.useState(130),
      [T, x] = Sn.useState(120),
      [G, j] = Sn.useState(null),
      fe = () => {
        let se = 0;
        (A > 60 && (se += 2),
          L < 40 && (se += 1),
          Y > 160 && (se += 1),
          T > 140 && (se += 2),
          j(se * 5));
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
                            value: A,
                            onChange: (se) => d(parseInt(se.target.value)),
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
                            value: L,
                            onChange: (se) => $(parseInt(se.target.value)),
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
                            value: Y,
                            onChange: (se) => ye(parseInt(se.target.value)),
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
                            value: T,
                            onChange: (se) => x(parseInt(se.target.value)),
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
                  onClick: q,
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
  ph = ({ isOpen: E, onClose: q }) => {
    const [A, d] = Sn.useState(null),
      [L, $] = Sn.useState(!1),
      Y = 'confirmacion',
      ye = (T) => {
        (d(T), $(!0));
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
                            className: `block w-full text-left p-3 rounded-lg border ${A === 'anclaje' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Sesgo de Anclaje:',
                              }),
                              ' Confiar demasiado en la primera información obtenida.',
                            ],
                          }),
                          k.jsxs('button', {
                            onClick: () => ye('confirmacion'),
                            className: `block w-full text-left p-3 rounded-lg border ${A === 'confirmacion' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Sesgo de Confirmación:',
                              }),
                              ' Buscar e interpretar información que confirma las propias creencias preexistentes.',
                            ],
                          }),
                          k.jsxs('button', {
                            onClick: () => ye('disponibilidad'),
                            className: `block w-full text-left p-3 rounded-lg border ${A === 'disponibilidad' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Heurístico de Disponibilidad:',
                              }),
                              ' Sobreestimar la probabilidad de eventos que son más fáciles de recordar.',
                            ],
                          }),
                        ],
                      }),
                      L &&
                        k.jsx('div', {
                          className: `mt-4 p-4 rounded-lg ${A === Y ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                          children:
                            A === Y
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
                  onClick: q,
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
  mh = ({ isOpen: E, onClose: q }) =>
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
                  onClick: q,
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
    const [E, q] = Sn.useState(null),
      A = Sn.useCallback((L) => {
        q(L);
      }, []),
      d = Sn.useCallback(() => {
        q(null);
      }, []);
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx(sh, {}),
        k.jsxs('main', {
          className: 'container mx-auto px-6 py-8',
          children: [
            k.jsx(lh, {}),
            k.jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-8',
              children: [
                k.jsx(Ho, {
                  icon: '🎯',
                  title: 'Misión: Diagnóstico Comunitario',
                  description:
                    'Han sido asignados a un centro de salud rural en la provincia de Chimborazo. Su primera tarea es analizar los datos de prevalencia de ECNT. Usen Google Sheets para descubrir los secretos que esconden los números.',
                  buttonText: 'Iniciar Misión',
                  colorTheme: 'teal',
                  onButtonClick: () => A('mision'),
                }),
                k.jsx(Ho, {
                  icon: '💡',
                  title: 'Herramienta: Calculadora de Riesgo',
                  description:
                    'La GPC del MSP enfatiza la estratificación del riesgo cardiovascular. Utilicen esta herramienta simplificada para evaluar el riesgo de un paciente y entender cómo guiar las decisiones clínicas en la atención primaria.',
                  buttonText: 'Abrir Herramienta',
                  colorTheme: 'indigo',
                  onButtonClick: () => A('calculadora'),
                }),
                k.jsx(Ho, {
                  icon: '🧠',
                  title: 'Desafío: El Sesgo Oculto',
                  description:
                    'El cerebro usa atajos, pero en medicina, estos pueden llevar a errores. Analicen un caso clínico real y pongan a prueba su capacidad para identificar los sesgos cognitivos que podrían afectar el diagnóstico. ¿Están listos?',
                  buttonText: 'Empezar Desafío',
                  colorTheme: 'amber',
                  onButtonClick: () => A('sesgo'),
                }),
                k.jsx(Ho, {
                  icon: '📚',
                  title: 'Biblioteca de Recursos',
                  description:
                    'Explora los conceptos teóricos del razonamiento clínico, la estadística y los sesgos cognitivos que sustentan tu práctica.',
                  buttonText: 'Abrir Biblioteca',
                  colorTheme: 'purple',
                  onButtonClick: () => A('recursos'),
                }),
              ],
            }),
          ],
        }),
        k.jsx(fh, { isOpen: E === 'mision', onClose: d }),
        k.jsx(dh, { isOpen: E === 'calculadora', onClose: d }),
        k.jsx(ph, { isOpen: E === 'sesgo', onClose: d }),
        k.jsx(mh, { isOpen: E === 'recursos', onClose: d }),
      ],
    });
  },
  Nd = document.getElementById('root');
if (!Nd) throw new Error('Could not find root element to mount to');
const gh = uh.createRoot(Nd);
gh.render(k.jsx(Jm.StrictMode, { children: k.jsx(hh, {}) }));
