(function () {
  const I = document.createElement('link').relList;
  if (I && I.supports && I.supports('modulepreload')) return;
  for (const x of document.querySelectorAll('link[rel="modulepreload"]')) u(x);
  new MutationObserver((x) => {
    for (const O of x)
      if (O.type === 'childList')
        for (const Y of O.addedNodes)
          Y.tagName === 'LINK' && Y.rel === 'modulepreload' && u(Y);
  }).observe(document, { childList: !0, subtree: !0 });
  function L(x) {
    const O = {};
    return (
      x.integrity && (O.integrity = x.integrity),
      x.referrerPolicy && (O.referrerPolicy = x.referrerPolicy),
      x.crossOrigin === 'use-credentials'
        ? (O.credentials = 'include')
        : x.crossOrigin === 'anonymous'
          ? (O.credentials = 'omit')
          : (O.credentials = 'same-origin'),
      O
    );
  }
  function u(x) {
    if (x.ep) return;
    x.ep = !0;
    const O = L(x);
    fetch(x.href, O);
  }
})();
(function () {
  const C = document.createElement('link').relList;
  if (C && C.supports && C.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) L(u);
  new MutationObserver((u) => {
    for (const x of u)
      if (x.type === 'childList')
        for (const O of x.addedNodes)
          O.tagName === 'LINK' && O.rel === 'modulepreload' && L(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function I(u) {
    const x = {};
    return (
      u.integrity && (x.integrity = u.integrity),
      u.referrerPolicy && (x.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (x.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (x.credentials = 'omit')
          : (x.credentials = 'same-origin'),
      x
    );
  }
  function L(u) {
    if (u.ep) return;
    u.ep = !0;
    const x = I(u);
    fetch(u.href, x);
  }
})();
(function () {
  const C = document.createElement('link').relList;
  if (C && C.supports && C.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) L(u);
  new MutationObserver((u) => {
    for (const x of u)
      if (x.type === 'childList')
        for (const O of x.addedNodes)
          O.tagName === 'LINK' && O.rel === 'modulepreload' && L(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function I(u) {
    const x = {};
    return (
      u.integrity && (x.integrity = u.integrity),
      u.referrerPolicy && (x.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (x.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (x.credentials = 'omit')
          : (x.credentials = 'same-origin'),
      x
    );
  }
  function L(u) {
    if (u.ep) return;
    u.ep = !0;
    const x = I(u);
    fetch(u.href, x);
  }
})();
(function () {
  const C = document.createElement('link').relList;
  if (C && C.supports && C.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) L(u);
  new MutationObserver((u) => {
    for (const x of u)
      if (x.type === 'childList')
        for (const O of x.addedNodes)
          O.tagName === 'LINK' && O.rel === 'modulepreload' && L(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function I(u) {
    const x = {};
    return (
      u.integrity && (x.integrity = u.integrity),
      u.referrerPolicy && (x.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (x.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (x.credentials = 'omit')
          : (x.credentials = 'same-origin'),
      x
    );
  }
  function L(u) {
    if (u.ep) return;
    u.ep = !0;
    const x = I(u);
    fetch(u.href, x);
  }
})();
(function () {
  const C = document.createElement('link').relList;
  if (C && C.supports && C.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) L(u);
  new MutationObserver((u) => {
    for (const x of u)
      if (x.type === 'childList')
        for (const O of x.addedNodes)
          O.tagName === 'LINK' && O.rel === 'modulepreload' && L(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function I(u) {
    const x = {};
    return (
      u.integrity && (x.integrity = u.integrity),
      u.referrerPolicy && (x.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (x.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (x.credentials = 'omit')
          : (x.credentials = 'same-origin'),
      x
    );
  }
  function L(u) {
    if (u.ep) return;
    u.ep = !0;
    const x = I(u);
    fetch(u.href, x);
  }
})();
(function () {
  const C = document.createElement('link').relList;
  if (C && C.supports && C.supports('modulepreload')) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) L(u);
  new MutationObserver((u) => {
    for (const x of u)
      if (x.type === 'childList')
        for (const O of x.addedNodes)
          O.tagName === 'LINK' && O.rel === 'modulepreload' && L(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function I(u) {
    const x = {};
    return (
      u.integrity && (x.integrity = u.integrity),
      u.referrerPolicy && (x.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === 'use-credentials'
        ? (x.credentials = 'include')
        : u.crossOrigin === 'anonymous'
          ? (x.credentials = 'omit')
          : (x.credentials = 'same-origin'),
      x
    );
  }
  function L(u) {
    if (u.ep) return;
    u.ep = !0;
    const x = I(u);
    fetch(u.href, x);
  }
})();
function Cd(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, 'default')
    ? C.default
    : C;
}
var fd = { exports: {} },
  kl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dd;
function Xm() {
  if (dd) return kl;
  dd = 1;
  var C = Symbol.for('react.transitional.element'),
    I = Symbol.for('react.fragment');
  function L(u, x, O) {
    var Y = null;
    if (
      (O !== void 0 && (Y = '' + O),
      x.key !== void 0 && (Y = '' + x.key),
      'key' in x)
    ) {
      O = {};
      for (var ye in x) ye !== 'key' && (O[ye] = x[ye]);
    } else O = x;
    return (
      (x = O.ref),
      { $$typeof: C, type: u, key: Y, ref: x !== void 0 ? x : null, props: O }
    );
  }
  return ((kl.Fragment = I), (kl.jsx = L), (kl.jsxs = L), kl);
}
var pd;
function Ym() {
  return (pd || ((pd = 1), (fd.exports = Xm())), fd.exports);
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
  var C = Symbol.for('react.transitional.element'),
    I = Symbol.for('react.portal'),
    L = Symbol.for('react.fragment'),
    u = Symbol.for('react.strict_mode'),
    x = Symbol.for('react.profiler'),
    O = Symbol.for('react.consumer'),
    Y = Symbol.for('react.context'),
    ye = Symbol.for('react.forward_ref'),
    j = Symbol.for('react.suspense'),
    E = Symbol.for('react.memo'),
    X = Symbol.for('react.lazy'),
    D = Symbol.for('react.activity'),
    fe = Symbol.iterator;
  function ue(f) {
    return f === null || typeof f != 'object'
      ? null
      : ((f = (fe && f[fe]) || f['@@iterator']),
        typeof f == 'function' ? f : null);
  }
  var Ie = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    De = Object.assign,
    Tn = {};
  function Ge(f, S, z) {
    ((this.props = f),
      (this.context = S),
      (this.refs = Tn),
      (this.updater = z || Ie));
  }
  ((Ge.prototype.isReactComponent = {}),
    (Ge.prototype.setState = function (f, S) {
      if (typeof f != 'object' && typeof f != 'function' && f != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.',
        );
      this.updater.enqueueSetState(this, f, S, 'setState');
    }),
    (Ge.prototype.forceUpdate = function (f) {
      this.updater.enqueueForceUpdate(this, f, 'forceUpdate');
    }));
  function Xn() {}
  Xn.prototype = Ge.prototype;
  function Oe(f, S, z) {
    ((this.props = f),
      (this.context = S),
      (this.refs = Tn),
      (this.updater = z || Ie));
  }
  var on = (Oe.prototype = new Xn());
  ((on.constructor = Oe), De(on, Ge.prototype), (on.isPureReactComponent = !0));
  var xn = Array.isArray;
  function Me() {}
  var K = { H: null, A: null, T: null, S: null },
    He = Object.prototype.hasOwnProperty;
  function En(f, S, z) {
    var _ = z.ref;
    return {
      $$typeof: C,
      type: f,
      key: S,
      ref: _ !== void 0 ? _ : null,
      props: z,
    };
  }
  function Bt(f, S) {
    return En(f.type, S, f.props);
  }
  function Cn(f) {
    return typeof f == 'object' && f !== null && f.$$typeof === C;
  }
  function Ue(f) {
    var S = { '=': '=0', ':': '=2' };
    return (
      '$' +
      f.replace(/[=:]/g, function (z) {
        return S[z];
      })
    );
  }
  var St = /\/+/g;
  function Ln(f, S) {
    return typeof f == 'object' && f !== null && f.key != null
      ? Ue('' + f.key)
      : S.toString(36);
  }
  function gn(f) {
    switch (f.status) {
      case 'fulfilled':
        return f.value;
      case 'rejected':
        throw f.reason;
      default:
        switch (
          (typeof f.status == 'string'
            ? f.then(Me, Me)
            : ((f.status = 'pending'),
              f.then(
                function (S) {
                  f.status === 'pending' &&
                    ((f.status = 'fulfilled'), (f.value = S));
                },
                function (S) {
                  f.status === 'pending' &&
                    ((f.status = 'rejected'), (f.reason = S));
                },
              )),
          f.status)
        ) {
          case 'fulfilled':
            return f.value;
          case 'rejected':
            throw f.reason;
        }
    }
    throw f;
  }
  function v(f, S, z, _, H) {
    var q = typeof f;
    (q === 'undefined' || q === 'boolean') && (f = null);
    var ne = !1;
    if (f === null) ne = !0;
    else
      switch (q) {
        case 'bigint':
        case 'string':
        case 'number':
          ne = !0;
          break;
        case 'object':
          switch (f.$$typeof) {
            case C:
            case I:
              ne = !0;
              break;
            case X:
              return ((ne = f._init), v(ne(f._payload), S, z, _, H));
          }
      }
    if (ne)
      return (
        (H = H(f)),
        (ne = _ === '' ? '.' + Ln(f, 0) : _),
        xn(H)
          ? ((z = ''),
            ne != null && (z = ne.replace(St, '$&/') + '/'),
            v(H, S, z, '', function (zr) {
              return zr;
            }))
          : H != null &&
            (Cn(H) &&
              (H = Bt(
                H,
                z +
                  (H.key == null || (f && f.key === H.key)
                    ? ''
                    : ('' + H.key).replace(St, '$&/') + '/') +
                  ne,
              )),
            S.push(H)),
        1
      );
    ne = 0;
    var Ae = _ === '' ? '.' : _ + ':';
    if (xn(f))
      for (var ve = 0; ve < f.length; ve++)
        ((_ = f[ve]), (q = Ae + Ln(_, ve)), (ne += v(_, S, z, q, H)));
    else if (((ve = ue(f)), typeof ve == 'function'))
      for (f = ve.call(f), ve = 0; !(_ = f.next()).done; )
        ((_ = _.value), (q = Ae + Ln(_, ve++)), (ne += v(_, S, z, q, H)));
    else if (q === 'object') {
      if (typeof f.then == 'function') return v(gn(f), S, z, _, H);
      throw (
        (S = String(f)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (S === '[object Object]'
              ? 'object with keys {' + Object.keys(f).join(', ') + '}'
              : S) +
            '). If you meant to render a collection of children, use an array instead.',
        )
      );
    }
    return ne;
  }
  function N(f, S, z) {
    if (f == null) return f;
    var _ = [],
      H = 0;
    return (
      v(f, _, '', '', function (q) {
        return S.call(z, q, H++);
      }),
      _
    );
  }
  function F(f) {
    if (f._status === -1) {
      var S = f._result;
      ((S = S()),
        S.then(
          function (z) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 1), (f._result = z));
          },
          function (z) {
            (f._status === 0 || f._status === -1) &&
              ((f._status = 2), (f._result = z));
          },
        ),
        f._status === -1 && ((f._status = 0), (f._result = S)));
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var le =
      typeof reportError == 'function'
        ? reportError
        : function (f) {
            if (
              typeof window == 'object' &&
              typeof window.ErrorEvent == 'function'
            ) {
              var S = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof f == 'object' &&
                  f !== null &&
                  typeof f.message == 'string'
                    ? String(f.message)
                    : String(f),
                error: f,
              });
              if (!window.dispatchEvent(S)) return;
            } else if (
              typeof process == 'object' &&
              typeof process.emit == 'function'
            ) {
              process.emit('uncaughtException', f);
              return;
            }
            console.error(f);
          },
    se = {
      map: N,
      forEach: function (f, S, z) {
        N(
          f,
          function () {
            S.apply(this, arguments);
          },
          z,
        );
      },
      count: function (f) {
        var S = 0;
        return (
          N(f, function () {
            S++;
          }),
          S
        );
      },
      toArray: function (f) {
        return (
          N(f, function (S) {
            return S;
          }) || []
        );
      },
      only: function (f) {
        if (!Cn(f))
          throw Error(
            'React.Children.only expected to receive a single React element child.',
          );
        return f;
      },
    };
  return (
    (M.Activity = D),
    (M.Children = se),
    (M.Component = Ge),
    (M.Fragment = L),
    (M.Profiler = x),
    (M.PureComponent = Oe),
    (M.StrictMode = u),
    (M.Suspense = j),
    (M.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (M.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (f) {
        return K.H.useMemoCache(f);
      },
    }),
    (M.cache = function (f) {
      return function () {
        return f.apply(null, arguments);
      };
    }),
    (M.cacheSignal = function () {
      return null;
    }),
    (M.cloneElement = function (f, S, z) {
      if (f == null)
        throw Error(
          'The argument must be a React element, but you passed ' + f + '.',
        );
      var _ = De({}, f.props),
        H = f.key;
      if (S != null)
        for (q in (S.key !== void 0 && (H = '' + S.key), S))
          !He.call(S, q) ||
            q === 'key' ||
            q === '__self' ||
            q === '__source' ||
            (q === 'ref' && S.ref === void 0) ||
            (_[q] = S[q]);
      var q = arguments.length - 2;
      if (q === 1) _.children = z;
      else if (1 < q) {
        for (var ne = Array(q), Ae = 0; Ae < q; Ae++)
          ne[Ae] = arguments[Ae + 2];
        _.children = ne;
      }
      return En(f.type, H, _);
    }),
    (M.createContext = function (f) {
      return (
        (f = {
          $$typeof: Y,
          _currentValue: f,
          _currentValue2: f,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (f.Provider = f),
        (f.Consumer = { $$typeof: O, _context: f }),
        f
      );
    }),
    (M.createElement = function (f, S, z) {
      var _,
        H = {},
        q = null;
      if (S != null)
        for (_ in (S.key !== void 0 && (q = '' + S.key), S))
          He.call(S, _) &&
            _ !== 'key' &&
            _ !== '__self' &&
            _ !== '__source' &&
            (H[_] = S[_]);
      var ne = arguments.length - 2;
      if (ne === 1) H.children = z;
      else if (1 < ne) {
        for (var Ae = Array(ne), ve = 0; ve < ne; ve++)
          Ae[ve] = arguments[ve + 2];
        H.children = Ae;
      }
      if (f && f.defaultProps)
        for (_ in ((ne = f.defaultProps), ne))
          H[_] === void 0 && (H[_] = ne[_]);
      return En(f, q, H);
    }),
    (M.createRef = function () {
      return { current: null };
    }),
    (M.forwardRef = function (f) {
      return { $$typeof: ye, render: f };
    }),
    (M.isValidElement = Cn),
    (M.lazy = function (f) {
      return { $$typeof: X, _payload: { _status: -1, _result: f }, _init: F };
    }),
    (M.memo = function (f, S) {
      return { $$typeof: E, type: f, compare: S === void 0 ? null : S };
    }),
    (M.startTransition = function (f) {
      var S = K.T,
        z = {};
      K.T = z;
      try {
        var _ = f(),
          H = K.S;
        (H !== null && H(z, _),
          typeof _ == 'object' &&
            _ !== null &&
            typeof _.then == 'function' &&
            _.then(Me, le));
      } catch (q) {
        le(q);
      } finally {
        (S !== null && z.types !== null && (S.types = z.types), (K.T = S));
      }
    }),
    (M.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (M.use = function (f) {
      return K.H.use(f);
    }),
    (M.useActionState = function (f, S, z) {
      return K.H.useActionState(f, S, z);
    }),
    (M.useCallback = function (f, S) {
      return K.H.useCallback(f, S);
    }),
    (M.useContext = function (f) {
      return K.H.useContext(f);
    }),
    (M.useDebugValue = function () {}),
    (M.useDeferredValue = function (f, S) {
      return K.H.useDeferredValue(f, S);
    }),
    (M.useEffect = function (f, S) {
      return K.H.useEffect(f, S);
    }),
    (M.useEffectEvent = function (f) {
      return K.H.useEffectEvent(f);
    }),
    (M.useId = function () {
      return K.H.useId();
    }),
    (M.useImperativeHandle = function (f, S, z) {
      return K.H.useImperativeHandle(f, S, z);
    }),
    (M.useInsertionEffect = function (f, S) {
      return K.H.useInsertionEffect(f, S);
    }),
    (M.useLayoutEffect = function (f, S) {
      return K.H.useLayoutEffect(f, S);
    }),
    (M.useMemo = function (f, S) {
      return K.H.useMemo(f, S);
    }),
    (M.useOptimistic = function (f, S) {
      return K.H.useOptimistic(f, S);
    }),
    (M.useReducer = function (f, S, z) {
      return K.H.useReducer(f, S, z);
    }),
    (M.useRef = function (f) {
      return K.H.useRef(f);
    }),
    (M.useState = function (f) {
      return K.H.useState(f);
    }),
    (M.useSyncExternalStore = function (f, S, z) {
      return K.H.useSyncExternalStore(f, S, z);
    }),
    (M.useTransition = function () {
      return K.H.useTransition();
    }),
    (M.version = '19.2.0'),
    M
  );
}
var gd;
function uu() {
  return (gd || ((gd = 1), (md.exports = Zm())), md.exports);
}
var Sn = uu();
const Jm = Cd(Sn);
var ou = { exports: {} },
  wl = {},
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
      (function (C) {
        function I(v, N) {
          var F = v.length;
          v.push(N);
          e: for (; 0 < F; ) {
            var le = (F - 1) >>> 1,
              se = v[le];
            if (0 < x(se, N)) ((v[le] = N), (v[F] = se), (F = le));
            else break e;
          }
        }
        function L(v) {
          return v.length === 0 ? null : v[0];
        }
        function u(v) {
          if (v.length === 0) return null;
          var N = v[0],
            F = v.pop();
          if (F !== N) {
            v[0] = F;
            e: for (var le = 0, se = v.length, f = se >>> 1; le < f; ) {
              var S = 2 * (le + 1) - 1,
                z = v[S],
                _ = S + 1,
                H = v[_];
              if (0 > x(z, F))
                _ < se && 0 > x(H, z)
                  ? ((v[le] = H), (v[_] = F), (le = _))
                  : ((v[le] = z), (v[S] = F), (le = S));
              else if (_ < se && 0 > x(H, F))
                ((v[le] = H), (v[_] = F), (le = _));
              else break e;
            }
          }
          return N;
        }
        function x(v, N) {
          var F = v.sortIndex - N.sortIndex;
          return F !== 0 ? F : v.id - N.id;
        }
        if (
          ((C.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var O = performance;
          C.unstable_now = function () {
            return O.now();
          };
        } else {
          var Y = Date,
            ye = Y.now();
          C.unstable_now = function () {
            return Y.now() - ye;
          };
        }
        var j = [],
          E = [],
          X = 1,
          D = null,
          fe = 3,
          ue = !1,
          Ie = !1,
          De = !1,
          Tn = !1,
          Ge = typeof setTimeout == 'function' ? setTimeout : null,
          Xn = typeof clearTimeout == 'function' ? clearTimeout : null,
          Oe = typeof setImmediate < 'u' ? setImmediate : null;
        function on(v) {
          for (var N = L(E); N !== null; ) {
            if (N.callback === null) u(E);
            else if (N.startTime <= v)
              (u(E), (N.sortIndex = N.expirationTime), I(j, N));
            else break;
            N = L(E);
          }
        }
        function xn(v) {
          if (((De = !1), on(v), !Ie))
            if (L(j) !== null) ((Ie = !0), Me || ((Me = !0), Ue()));
            else {
              var N = L(E);
              N !== null && gn(xn, N.startTime - v);
            }
        }
        var Me = !1,
          K = -1,
          He = 5,
          En = -1;
        function Bt() {
          return Tn ? !0 : !(C.unstable_now() - En < He);
        }
        function Cn() {
          if (((Tn = !1), Me)) {
            var v = C.unstable_now();
            En = v;
            var N = !0;
            try {
              e: {
                ((Ie = !1), De && ((De = !1), Xn(K), (K = -1)), (ue = !0));
                var F = fe;
                try {
                  n: {
                    for (
                      on(v), D = L(j);
                      D !== null && !(D.expirationTime > v && Bt());

                    ) {
                      var le = D.callback;
                      if (typeof le == 'function') {
                        ((D.callback = null), (fe = D.priorityLevel));
                        var se = le(D.expirationTime <= v);
                        if (((v = C.unstable_now()), typeof se == 'function')) {
                          ((D.callback = se), on(v), (N = !0));
                          break n;
                        }
                        (D === L(j) && u(j), on(v));
                      } else u(j);
                      D = L(j);
                    }
                    if (D !== null) N = !0;
                    else {
                      var f = L(E);
                      (f !== null && gn(xn, f.startTime - v), (N = !1));
                    }
                  }
                  break e;
                } finally {
                  ((D = null), (fe = F), (ue = !1));
                }
                N = void 0;
              }
            } finally {
              N ? Ue() : (Me = !1);
            }
          }
        }
        var Ue;
        if (typeof Oe == 'function')
          Ue = function () {
            Oe(Cn);
          };
        else if (typeof MessageChannel < 'u') {
          var St = new MessageChannel(),
            Ln = St.port2;
          ((St.port1.onmessage = Cn),
            (Ue = function () {
              Ln.postMessage(null);
            }));
        } else
          Ue = function () {
            Ge(Cn, 0);
          };
        function gn(v, N) {
          K = Ge(function () {
            v(C.unstable_now());
          }, N);
        }
        ((C.unstable_IdlePriority = 5),
          (C.unstable_ImmediatePriority = 1),
          (C.unstable_LowPriority = 4),
          (C.unstable_NormalPriority = 3),
          (C.unstable_Profiling = null),
          (C.unstable_UserBlockingPriority = 2),
          (C.unstable_cancelCallback = function (v) {
            v.callback = null;
          }),
          (C.unstable_forceFrameRate = function (v) {
            0 > v || 125 < v
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (He = 0 < v ? Math.floor(1e3 / v) : 5);
          }),
          (C.unstable_getCurrentPriorityLevel = function () {
            return fe;
          }),
          (C.unstable_next = function (v) {
            switch (fe) {
              case 1:
              case 2:
              case 3:
                var N = 3;
                break;
              default:
                N = fe;
            }
            var F = fe;
            fe = N;
            try {
              return v();
            } finally {
              fe = F;
            }
          }),
          (C.unstable_requestPaint = function () {
            Tn = !0;
          }),
          (C.unstable_runWithPriority = function (v, N) {
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
            var F = fe;
            fe = v;
            try {
              return N();
            } finally {
              fe = F;
            }
          }),
          (C.unstable_scheduleCallback = function (v, N, F) {
            var le = C.unstable_now();
            switch (
              (typeof F == 'object' && F !== null
                ? ((F = F.delay),
                  (F = typeof F == 'number' && 0 < F ? le + F : le))
                : (F = le),
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
              (se = F + se),
              (v = {
                id: X++,
                callback: N,
                priorityLevel: v,
                startTime: F,
                expirationTime: se,
                sortIndex: -1,
              }),
              F > le
                ? ((v.sortIndex = F),
                  I(E, v),
                  L(j) === null &&
                    v === L(E) &&
                    (De ? (Xn(K), (K = -1)) : (De = !0), gn(xn, F - le)))
                : ((v.sortIndex = se),
                  I(j, v),
                  Ie || ue || ((Ie = !0), Me || ((Me = !0), Ue()))),
              v
            );
          }),
          (C.unstable_shouldYield = Bt),
          (C.unstable_wrapCallback = function (v) {
            var N = fe;
            return function () {
              var F = fe;
              fe = N;
              try {
                return v.apply(this, arguments);
              } finally {
                fe = F;
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
var iu = { exports: {} },
  Re = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wd;
function th() {
  if (wd) return Re;
  wd = 1;
  var C = uu();
  function I(j) {
    var E = 'https://react.dev/errors/' + j;
    if (1 < arguments.length) {
      E += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var X = 2; X < arguments.length; X++)
        E += '&args[]=' + encodeURIComponent(arguments[X]);
    }
    return (
      'Minified React error #' +
      j +
      '; visit ' +
      E +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function L() {}
  var u = {
      d: {
        f: L,
        r: function () {
          throw Error(I(522));
        },
        D: L,
        C: L,
        L,
        m: L,
        X: L,
        S: L,
        M: L,
      },
      p: 0,
      findDOMNode: null,
    },
    x = Symbol.for('react.portal');
  function O(j, E, X) {
    var D =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: x,
      key: D == null ? null : '' + D,
      children: j,
      containerInfo: E,
      implementation: X,
    };
  }
  var Y = C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function ye(j, E) {
    if (j === 'font') return '';
    if (typeof E == 'string') return E === 'use-credentials' ? E : '';
  }
  return (
    (Re.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = u),
    (Re.createPortal = function (j, E) {
      var X =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(I(299));
      return O(j, E, null, X);
    }),
    (Re.flushSync = function (j) {
      var E = Y.T,
        X = u.p;
      try {
        if (((Y.T = null), (u.p = 2), j)) return j();
      } finally {
        ((Y.T = E), (u.p = X), u.d.f());
      }
    }),
    (Re.preconnect = function (j, E) {
      typeof j == 'string' &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == 'string'
                ? E === 'use-credentials'
                  ? E
                  : ''
                : void 0))
          : (E = null),
        u.d.C(j, E));
    }),
    (Re.prefetchDNS = function (j) {
      typeof j == 'string' && u.d.D(j);
    }),
    (Re.preinit = function (j, E) {
      if (typeof j == 'string' && E && typeof E.as == 'string') {
        var X = E.as,
          D = ye(X, E.crossOrigin),
          fe = typeof E.integrity == 'string' ? E.integrity : void 0,
          ue = typeof E.fetchPriority == 'string' ? E.fetchPriority : void 0;
        X === 'style'
          ? u.d.S(j, typeof E.precedence == 'string' ? E.precedence : void 0, {
              crossOrigin: D,
              integrity: fe,
              fetchPriority: ue,
            })
          : X === 'script' &&
            u.d.X(j, {
              crossOrigin: D,
              integrity: fe,
              fetchPriority: ue,
              nonce: typeof E.nonce == 'string' ? E.nonce : void 0,
            });
      }
    }),
    (Re.preinitModule = function (j, E) {
      if (typeof j == 'string')
        if (typeof E == 'object' && E !== null) {
          if (E.as == null || E.as === 'script') {
            var X = ye(E.as, E.crossOrigin);
            u.d.M(j, {
              crossOrigin: X,
              integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
              nonce: typeof E.nonce == 'string' ? E.nonce : void 0,
            });
          }
        } else E == null && u.d.M(j);
    }),
    (Re.preload = function (j, E) {
      if (
        typeof j == 'string' &&
        typeof E == 'object' &&
        E !== null &&
        typeof E.as == 'string'
      ) {
        var X = E.as,
          D = ye(X, E.crossOrigin);
        u.d.L(j, X, {
          crossOrigin: D,
          integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
          nonce: typeof E.nonce == 'string' ? E.nonce : void 0,
          type: typeof E.type == 'string' ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == 'string' ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == 'string' ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == 'string' ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == 'string' ? E.imageSizes : void 0,
          media: typeof E.media == 'string' ? E.media : void 0,
        });
      }
    }),
    (Re.preloadModule = function (j, E) {
      if (typeof j == 'string')
        if (E) {
          var X = ye(E.as, E.crossOrigin);
          u.d.m(j, {
            as: typeof E.as == 'string' && E.as !== 'script' ? E.as : void 0,
            crossOrigin: X,
            integrity: typeof E.integrity == 'string' ? E.integrity : void 0,
          });
        } else u.d.m(j);
    }),
    (Re.requestFormReset = function (j) {
      u.d.r(j);
    }),
    (Re.unstable_batchedUpdates = function (j, E) {
      return j(E);
    }),
    (Re.useFormState = function (j, E, X) {
      return Y.H.useFormState(j, E, X);
    }),
    (Re.useFormStatus = function () {
      return Y.H.useHostTransitionStatus();
    }),
    (Re.version = '19.2.0'),
    Re
  );
}
var Sd;
function rh() {
  if (Sd) return iu.exports;
  Sd = 1;
  function C() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C);
      } catch (I) {
        console.error(I);
      }
  }
  return (C(), (iu.exports = th()), iu.exports);
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
function lh() {
  if (xd) return wl;
  xd = 1;
  var C = nh(),
    I = uu(),
    L = rh();
  function u(e) {
    var n = 'https://react.dev/errors/' + e;
    if (1 < arguments.length) {
      n += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        n += '&args[]=' + encodeURIComponent(arguments[t]);
    }
    return (
      'Minified React error #' +
      e +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function x(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function O(e) {
    var n = e,
      t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do ((n = e), (n.flags & 4098) !== 0 && (t = n.return), (e = n.return));
      while (e);
    }
    return n.tag === 3 ? t : null;
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
  function j(e) {
    if (O(e) !== e) throw Error(u(188));
  }
  function E(e) {
    var n = e.alternate;
    if (!n) {
      if (((n = O(e)), n === null)) throw Error(u(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var a = l.alternate;
      if (a === null) {
        if (((r = l.return), r !== null)) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === a.child) {
        for (a = l.child; a; ) {
          if (a === t) return (j(l), e);
          if (a === r) return (j(l), n);
          a = a.sibling;
        }
        throw Error(u(188));
      }
      if (t.return !== r.return) ((t = l), (r = a));
      else {
        for (var o = !1, i = l.child; i; ) {
          if (i === t) {
            ((o = !0), (t = l), (r = a));
            break;
          }
          if (i === r) {
            ((o = !0), (r = l), (t = a));
            break;
          }
          i = i.sibling;
        }
        if (!o) {
          for (i = a.child; i; ) {
            if (i === t) {
              ((o = !0), (t = a), (r = l));
              break;
            }
            if (i === r) {
              ((o = !0), (r = a), (t = l));
              break;
            }
            i = i.sibling;
          }
          if (!o) throw Error(u(189));
        }
      }
      if (t.alternate !== r) throw Error(u(190));
    }
    if (t.tag !== 3) throw Error(u(188));
    return t.stateNode.current === t ? e : n;
  }
  function X(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((n = X(e)), n !== null)) return n;
      e = e.sibling;
    }
    return null;
  }
  var D = Object.assign,
    fe = Symbol.for('react.element'),
    ue = Symbol.for('react.transitional.element'),
    Ie = Symbol.for('react.portal'),
    De = Symbol.for('react.fragment'),
    Tn = Symbol.for('react.strict_mode'),
    Ge = Symbol.for('react.profiler'),
    Xn = Symbol.for('react.consumer'),
    Oe = Symbol.for('react.context'),
    on = Symbol.for('react.forward_ref'),
    xn = Symbol.for('react.suspense'),
    Me = Symbol.for('react.suspense_list'),
    K = Symbol.for('react.memo'),
    He = Symbol.for('react.lazy'),
    En = Symbol.for('react.activity'),
    Bt = Symbol.for('react.memo_cache_sentinel'),
    Cn = Symbol.iterator;
  function Ue(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Cn && e[Cn]) || e['@@iterator']),
        typeof e == 'function' ? e : null);
  }
  var St = Symbol.for('react.client.reference');
  function Ln(e) {
    if (e == null) return null;
    if (typeof e == 'function')
      return e.$$typeof === St ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case De:
        return 'Fragment';
      case Ge:
        return 'Profiler';
      case Tn:
        return 'StrictMode';
      case xn:
        return 'Suspense';
      case Me:
        return 'SuspenseList';
      case En:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (e.$$typeof) {
        case Ie:
          return 'Portal';
        case Oe:
          return e.displayName || 'Context';
        case Xn:
          return (e._context.displayName || 'Context') + '.Consumer';
        case on:
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
            n !== null ? n : Ln(e.type) || 'Memo'
          );
        case He:
          ((n = e._payload), (e = e._init));
          try {
            return Ln(e(n));
          } catch {}
      }
    return null;
  }
  var gn = Array.isArray,
    v = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    N = L.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    F = { pending: !1, data: null, method: null, action: null },
    le = [],
    se = -1;
  function f(e) {
    return { current: e };
  }
  function S(e) {
    0 > se || ((e.current = le[se]), (le[se] = null), se--);
  }
  function z(e, n) {
    (se++, (le[se] = e.current), (e.current = n));
  }
  var _ = f(null),
    H = f(null),
    q = f(null),
    ne = f(null);
  function Ae(e, n) {
    switch ((z(q, n), z(H, e), z(_, null), n.nodeType)) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Rf(e) : 0;
        break;
      default:
        if (((e = n.tagName), (n = n.namespaceURI)))
          ((n = Rf(n)), (e = Df(n, e)));
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
    (S(_), z(_, e));
  }
  function ve() {
    (S(_), S(H), S(q));
  }
  function zr(e) {
    e.memoizedState !== null && z(ne, e);
    var n = _.current,
      t = Df(n, e.type);
    n !== t && (z(H, e), z(_, t));
  }
  function Sl(e) {
    (H.current === e && (S(_), S(H)),
      ne.current === e && (S(ne), (gl._currentValue = F)));
  }
  var Ua, su;
  function xt(e) {
    if (Ua === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        ((Ua = (n && n[1]) || ''),
          (su =
            -1 <
            t.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < t.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      Ua +
      e +
      su
    );
  }
  var Ba = !1;
  function qa(e, n) {
    if (!e || Ba) return '';
    Ba = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
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
      r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var l = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        'name',
      );
      l &&
        l.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var a = r.DetermineComponentFrameRoot(),
        o = a[0],
        i = a[1];
      if (o && i) {
        var s = o.split(`
`),
          m = i.split(`
`);
        for (
          l = r = 0;
          r < s.length && !s[r].includes('DetermineComponentFrameRoot');

        )
          r++;
        for (; l < m.length && !m[l].includes('DetermineComponentFrameRoot'); )
          l++;
        if (r === s.length || l === m.length)
          for (
            r = s.length - 1, l = m.length - 1;
            1 <= r && 0 <= l && s[r] !== m[l];

          )
            l--;
        for (; 1 <= r && 0 <= l; r--, l--)
          if (s[r] !== m[l]) {
            if (r !== 1 || l !== 1)
              do
                if ((r--, l--, 0 > l || s[r] !== m[l])) {
                  var y =
                    `
` + s[r].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      y.includes('<anonymous>') &&
                      (y = y.replace('<anonymous>', e.displayName)),
                    y
                  );
                }
              while (1 <= r && 0 <= l);
            break;
          }
      }
    } finally {
      ((Ba = !1), (Error.prepareStackTrace = t));
    }
    return (t = e ? e.displayName || e.name : '') ? xt(t) : '';
  }
  function zd(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return xt(e.type);
      case 16:
        return xt('Lazy');
      case 13:
        return e.child !== n && n !== null
          ? xt('Suspense Fallback')
          : xt('Suspense');
      case 19:
        return xt('SuspenseList');
      case 0:
      case 15:
        return qa(e.type, !1);
      case 11:
        return qa(e.type.render, !1);
      case 1:
        return qa(e.type, !0);
      case 31:
        return xt('Activity');
      default:
        return '';
    }
  }
  function cu(e) {
    try {
      var n = '',
        t = null;
      do ((n += zd(e, t)), (t = e), (e = e.return));
      while (e);
      return n;
    } catch (r) {
      return (
        `
Error generating stack: ` +
        r.message +
        `
` +
        r.stack
      );
    }
  }
  var Va = Object.prototype.hasOwnProperty,
    $a = C.unstable_scheduleCallback,
    Wa = C.unstable_cancelCallback,
    Pd = C.unstable_shouldYield,
    _d = C.unstable_requestPaint,
    Xe = C.unstable_now,
    Td = C.unstable_getCurrentPriorityLevel,
    fu = C.unstable_ImmediatePriority,
    du = C.unstable_UserBlockingPriority,
    xl = C.unstable_NormalPriority,
    Ld = C.unstable_LowPriority,
    pu = C.unstable_IdlePriority,
    jd = C.log,
    Od = C.unstable_setDisableYieldValue,
    Pr = null,
    Ye = null;
  function Yn(e) {
    if (
      (typeof jd == 'function' && Od(e),
      Ye && typeof Ye.setStrictMode == 'function')
    )
      try {
        Ye.setStrictMode(Pr, e);
      } catch {}
  }
  var Ze = Math.clz32 ? Math.clz32 : Ad,
    Rd = Math.log,
    Dd = Math.LN2;
  function Ad(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Rd(e) / Dd) | 0)) | 0);
  }
  var El = 256,
    Cl = 262144,
    Nl = 4194304;
  function Et(e) {
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
  function zl(e, n, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var l = 0,
      a = e.suspendedLanes,
      o = e.pingedLanes;
    e = e.warmLanes;
    var i = r & 134217727;
    return (
      i !== 0
        ? ((r = i & ~a),
          r !== 0
            ? (l = Et(r))
            : ((o &= i),
              o !== 0
                ? (l = Et(o))
                : t || ((t = i & ~e), t !== 0 && (l = Et(t)))))
        : ((i = r & ~a),
          i !== 0
            ? (l = Et(i))
            : o !== 0
              ? (l = Et(o))
              : t || ((t = r & ~e), t !== 0 && (l = Et(t)))),
      l === 0
        ? 0
        : n !== 0 &&
            n !== l &&
            (n & a) === 0 &&
            ((a = l & -l),
            (t = n & -n),
            a >= t || (a === 32 && (t & 4194048) !== 0))
          ? n
          : l
    );
  }
  function _r(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Fd(e, n) {
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
  function mu() {
    var e = Nl;
    return ((Nl <<= 1), (Nl & 62914560) === 0 && (Nl = 4194304), e);
  }
  function Qa(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function Tr(e, n) {
    ((e.pendingLanes |= n),
      n !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Id(e, n, t, r, l, a) {
    var o = e.pendingLanes;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= t),
      (e.entangledLanes &= t),
      (e.errorRecoveryDisabledLanes &= t),
      (e.shellSuspendCounter = 0));
    var i = e.entanglements,
      s = e.expirationTimes,
      m = e.hiddenUpdates;
    for (t = o & ~t; 0 < t; ) {
      var y = 31 - Ze(t),
        w = 1 << y;
      ((i[y] = 0), (s[y] = -1));
      var h = m[y];
      if (h !== null)
        for (m[y] = null, y = 0; y < h.length; y++) {
          var g = h[y];
          g !== null && (g.lane &= -536870913);
        }
      t &= ~w;
    }
    (r !== 0 && hu(e, r, 0),
      a !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~n)));
  }
  function hu(e, n, t) {
    ((e.pendingLanes |= n), (e.suspendedLanes &= ~n));
    var r = 31 - Ze(n);
    ((e.entangledLanes |= n),
      (e.entanglements[r] = e.entanglements[r] | 1073741824 | (t & 261930)));
  }
  function gu(e, n) {
    var t = (e.entangledLanes |= n);
    for (e = e.entanglements; t; ) {
      var r = 31 - Ze(t),
        l = 1 << r;
      ((l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l));
    }
  }
  function yu(e, n) {
    var t = n & -n;
    return (
      (t = (t & 42) !== 0 ? 1 : Ka(t)),
      (t & (e.suspendedLanes | n)) !== 0 ? 0 : t
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
  function Ga(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function vu() {
    var e = N.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : ld(e.type));
  }
  function bu(e, n) {
    var t = N.p;
    try {
      return ((N.p = e), n());
    } finally {
      N.p = t;
    }
  }
  var Zn = Math.random().toString(36).slice(2),
    Pe = '__reactFiber$' + Zn,
    Be = '__reactProps$' + Zn,
    qt = '__reactContainer$' + Zn,
    Xa = '__reactEvents$' + Zn,
    Md = '__reactListeners$' + Zn,
    Hd = '__reactHandles$' + Zn,
    ku = '__reactResources$' + Zn,
    Lr = '__reactMarker$' + Zn;
  function Ya(e) {
    (delete e[Pe], delete e[Be], delete e[Xa], delete e[Md], delete e[Hd]);
  }
  function Vt(e) {
    var n = e[Pe];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if ((n = t[qt] || t[Pe])) {
        if (
          ((t = n.alternate),
          n.child !== null || (t !== null && t.child !== null))
        )
          for (e = Bf(e); e !== null; ) {
            if ((t = e[Pe])) return t;
            e = Bf(e);
          }
        return n;
      }
      ((e = t), (t = e.parentNode));
    }
    return null;
  }
  function $t(e) {
    if ((e = e[Pe] || e[qt])) {
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
  function jr(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(u(33));
  }
  function Wt(e) {
    var n = e[ku];
    return (
      n ||
        (n = e[ku] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function Ne(e) {
    e[Lr] = !0;
  }
  var wu = new Set(),
    Su = {};
  function Ct(e, n) {
    (Qt(e, n), Qt(e + 'Capture', n));
  }
  function Qt(e, n) {
    for (Su[e] = n, e = 0; e < n.length; e++) wu.add(n[e]);
  }
  var Ud = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    xu = {},
    Eu = {};
  function Bd(e) {
    return Va.call(Eu, e)
      ? !0
      : Va.call(xu, e)
        ? !1
        : Ud.test(e)
          ? (Eu[e] = !0)
          : ((xu[e] = !0), !1);
  }
  function Pl(e, n, t) {
    if (Bd(n))
      if (t === null) e.removeAttribute(n);
      else {
        switch (typeof t) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(n);
            return;
          case 'boolean':
            var r = n.toLowerCase().slice(0, 5);
            if (r !== 'data-' && r !== 'aria-') {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, '' + t);
      }
  }
  function _l(e, n, t) {
    if (t === null) e.removeAttribute(n);
    else {
      switch (typeof t) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, '' + t);
    }
  }
  function jn(e, n, t, r) {
    if (r === null) e.removeAttribute(t);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      e.setAttributeNS(n, t, '' + r);
    }
  }
  function un(e) {
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
  function Cu(e) {
    var n = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === 'input' &&
      (n === 'checkbox' || n === 'radio')
    );
  }
  function qd(e, n, t) {
    var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, n);
    if (
      !e.hasOwnProperty(n) &&
      typeof r < 'u' &&
      typeof r.get == 'function' &&
      typeof r.set == 'function'
    ) {
      var l = r.get,
        a = r.set;
      return (
        Object.defineProperty(e, n, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (o) {
            ((t = '' + o), a.call(this, o));
          },
        }),
        Object.defineProperty(e, n, { enumerable: r.enumerable }),
        {
          getValue: function () {
            return t;
          },
          setValue: function (o) {
            t = '' + o;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[n]);
          },
        }
      );
    }
  }
  function Za(e) {
    if (!e._valueTracker) {
      var n = Cu(e) ? 'checked' : 'value';
      e._valueTracker = qd(e, n, '' + e[n]);
    }
  }
  function Nu(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(),
      r = '';
    return (
      e && (r = Cu(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = r),
      e !== t ? (n.setValue(e), !0) : !1
    );
  }
  function Tl(e) {
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
  function Ja(e, n, t, r, l, a, o, i) {
    ((e.name = ''),
      o != null &&
      typeof o != 'function' &&
      typeof o != 'symbol' &&
      typeof o != 'boolean'
        ? (e.type = o)
        : e.removeAttribute('type'),
      n != null
        ? o === 'number'
          ? ((n === 0 && e.value === '') || e.value != n) &&
            (e.value = '' + un(n))
          : e.value !== '' + un(n) && (e.value = '' + un(n))
        : (o !== 'submit' && o !== 'reset') || e.removeAttribute('value'),
      n != null
        ? eo(e, o, un(n))
        : t != null
          ? eo(e, o, un(t))
          : r != null && e.removeAttribute('value'),
      l == null && a != null && (e.defaultChecked = !!a),
      l != null &&
        (e.checked = l && typeof l != 'function' && typeof l != 'symbol'),
      i != null &&
      typeof i != 'function' &&
      typeof i != 'symbol' &&
      typeof i != 'boolean'
        ? (e.name = '' + un(i))
        : e.removeAttribute('name'));
  }
  function zu(e, n, t, r, l, a, o, i) {
    if (
      (a != null &&
        typeof a != 'function' &&
        typeof a != 'symbol' &&
        typeof a != 'boolean' &&
        (e.type = a),
      n != null || t != null)
    ) {
      if (!((a !== 'submit' && a !== 'reset') || n != null)) {
        Za(e);
        return;
      }
      ((t = t != null ? '' + un(t) : ''),
        (n = n != null ? '' + un(n) : t),
        i || n === e.value || (e.value = n),
        (e.defaultValue = n));
    }
    ((r = r ?? l),
      (r = typeof r != 'function' && typeof r != 'symbol' && !!r),
      (e.checked = i ? e.checked : !!r),
      (e.defaultChecked = !!r),
      o != null &&
        typeof o != 'function' &&
        typeof o != 'symbol' &&
        typeof o != 'boolean' &&
        (e.name = o),
      Za(e));
  }
  function eo(e, n, t) {
    (n === 'number' && Tl(e.ownerDocument) === e) ||
      e.defaultValue === '' + t ||
      (e.defaultValue = '' + t);
  }
  function Kt(e, n, t, r) {
    if (((e = e.options), n)) {
      n = {};
      for (var l = 0; l < t.length; l++) n['$' + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        ((l = n.hasOwnProperty('$' + e[t].value)),
          e[t].selected !== l && (e[t].selected = l),
          l && r && (e[t].defaultSelected = !0));
    } else {
      for (t = '' + un(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          ((e[l].selected = !0), r && (e[l].defaultSelected = !0));
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Pu(e, n, t) {
    if (
      n != null &&
      ((n = '' + un(n)), n !== e.value && (e.value = n), t == null)
    ) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = t != null ? '' + un(t) : '';
  }
  function _u(e, n, t, r) {
    if (n == null) {
      if (r != null) {
        if (t != null) throw Error(u(92));
        if (gn(r)) {
          if (1 < r.length) throw Error(u(93));
          r = r[0];
        }
        t = r;
      }
      (t == null && (t = ''), (n = t));
    }
    ((t = un(n)),
      (e.defaultValue = t),
      (r = e.textContent),
      r === t && r !== '' && r !== null && (e.value = r),
      Za(e));
  }
  function Gt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var $d = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' ',
    ),
  );
  function Tu(e, n, t) {
    var r = n.indexOf('--') === 0;
    t == null || typeof t == 'boolean' || t === ''
      ? r
        ? e.setProperty(n, '')
        : n === 'float'
          ? (e.cssFloat = '')
          : (e[n] = '')
      : r
        ? e.setProperty(n, t)
        : typeof t != 'number' || t === 0 || $d.has(n)
          ? n === 'float'
            ? (e.cssFloat = t)
            : (e[n] = ('' + t).trim())
          : (e[n] = t + 'px');
  }
  function Lu(e, n, t) {
    if (n != null && typeof n != 'object') throw Error(u(62));
    if (((e = e.style), t != null)) {
      for (var r in t)
        !t.hasOwnProperty(r) ||
          (n != null && n.hasOwnProperty(r)) ||
          (r.indexOf('--') === 0
            ? e.setProperty(r, '')
            : r === 'float'
              ? (e.cssFloat = '')
              : (e[r] = ''));
      for (var l in n)
        ((r = n[l]), n.hasOwnProperty(l) && t[l] !== r && Tu(e, l, r));
    } else for (var a in n) n.hasOwnProperty(a) && Tu(e, a, n[a]);
  }
  function no(e) {
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
  function Ll(e) {
    return Qd.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function On() {}
  var to = null;
  function ro(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Xt = null,
    Yt = null;
  function ju(e) {
    var n = $t(e);
    if (n && (e = n.stateNode)) {
      var t = e[Be] || null;
      e: switch (((e = n.stateNode), n.type)) {
        case 'input':
          if (
            (Ja(
              e,
              t.value,
              t.defaultValue,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name,
            ),
            (n = t.name),
            t.type === 'radio' && n != null)
          ) {
            for (t = e; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                'input[name="' + yn('' + n) + '"][type="radio"]',
              ),
                n = 0;
              n < t.length;
              n++
            ) {
              var r = t[n];
              if (r !== e && r.form === e.form) {
                var l = r[Be] || null;
                if (!l) throw Error(u(90));
                Ja(
                  r,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name,
                );
              }
            }
            for (n = 0; n < t.length; n++)
              ((r = t[n]), r.form === e.form && Nu(r));
          }
          break e;
        case 'textarea':
          Pu(e, t.value, t.defaultValue);
          break e;
        case 'select':
          ((n = t.value), n != null && Kt(e, !!t.multiple, n, !1));
      }
    }
  }
  var lo = !1;
  function Ou(e, n, t) {
    if (lo) return e(n, t);
    lo = !0;
    try {
      var r = e(n);
      return r;
    } finally {
      if (
        ((lo = !1),
        (Xt !== null || Yt !== null) &&
          (va(), Xt && ((n = Xt), (e = Yt), (Yt = Xt = null), ju(n), e)))
      )
        for (n = 0; n < e.length; n++) ju(e[n]);
    }
  }
  function Or(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = t[Be] || null;
    if (r === null) return null;
    t = r[n];
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
        ((r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === 'button' ||
            e === 'input' ||
            e === 'select' ||
            e === 'textarea'
          ))),
          (e = !r));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (t && typeof t != 'function') throw Error(u(231, n, typeof t));
    return t;
  }
  var Rn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    ao = !1;
  if (Rn)
    try {
      var Rr = {};
      (Object.defineProperty(Rr, 'passive', {
        get: function () {
          ao = !0;
        },
      }),
        window.addEventListener('test', Rr, Rr),
        window.removeEventListener('test', Rr, Rr));
    } catch {
      ao = !1;
    }
  var Jn = null,
    oo = null,
    jl = null;
  function Ru() {
    if (jl) return jl;
    var e,
      n = oo,
      t = n.length,
      r,
      l = 'value' in Jn ? Jn.value : Jn.textContent,
      a = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++);
    var o = t - e;
    for (r = 1; r <= o && n[t - r] === l[a - r]; r++);
    return (jl = l.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ol(e) {
    var n = e.keyCode;
    return (
      'charCode' in e
        ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
        : (e = n),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Rl() {
    return !0;
  }
  function Du() {
    return !1;
  }
  function qe(e) {
    function n(t, r, l, a, o) {
      ((this._reactName = t),
        (this._targetInst = l),
        (this.type = r),
        (this.nativeEvent = a),
        (this.target = o),
        (this.currentTarget = null));
      for (var i in e)
        e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
      return (
        (this.isDefaultPrevented = (
          a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1
        )
          ? Rl
          : Du),
        (this.isPropagationStopped = Du),
        this
      );
    }
    return (
      D(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != 'unknown' && (t.returnValue = !1),
            (this.isDefaultPrevented = Rl));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != 'unknown' && (t.cancelBubble = !0),
            (this.isPropagationStopped = Rl));
        },
        persist: function () {},
        isPersistent: Rl,
      }),
      n
    );
  }
  var Nt = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Dl = qe(Nt),
    Dr = D({}, Nt, { view: 0, detail: 0 }),
    Kd = qe(Dr),
    io,
    uo,
    Ar,
    Al = D({}, Dr, {
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
      getModifierState: co,
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
          : (e !== Ar &&
              (Ar && e.type === 'mousemove'
                ? ((io = e.screenX - Ar.screenX), (uo = e.screenY - Ar.screenY))
                : (uo = io = 0),
              (Ar = e)),
            io);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : uo;
      },
    }),
    Au = qe(Al),
    Gd = D({}, Al, { dataTransfer: 0 }),
    Xd = qe(Gd),
    Yd = D({}, Dr, { relatedTarget: 0 }),
    so = qe(Yd),
    Zd = D({}, Nt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Jd = qe(Zd),
    ep = D({}, Nt, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    np = qe(ep),
    tp = D({}, Nt, { data: 0 }),
    Fu = qe(tp),
    rp = {
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
    lp = {
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
  function op(e) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(e)
      : (e = ap[e])
        ? !!n[e]
        : !1;
  }
  function co() {
    return op;
  }
  var ip = D({}, Dr, {
      key: function (e) {
        if (e.key) {
          var n = rp[e.key] || e.key;
          if (n !== 'Unidentified') return n;
        }
        return e.type === 'keypress'
          ? ((e = Ol(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? lp[e.keyCode] || 'Unidentified'
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
      getModifierState: co,
      charCode: function (e) {
        return e.type === 'keypress' ? Ol(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? Ol(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    up = qe(ip),
    sp = D({}, Al, {
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
    Iu = qe(sp),
    cp = D({}, Dr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: co,
    }),
    fp = qe(cp),
    dp = D({}, Nt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    pp = qe(dp),
    mp = D({}, Al, {
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
    gp = D({}, Nt, { newState: 0, oldState: 0 }),
    yp = qe(gp),
    vp = [9, 13, 27, 32],
    fo = Rn && 'CompositionEvent' in window,
    Fr = null;
  Rn && 'documentMode' in document && (Fr = document.documentMode);
  var bp = Rn && 'TextEvent' in window && !Fr,
    Mu = Rn && (!fo || (Fr && 8 < Fr && 11 >= Fr)),
    Hu = ' ',
    Uu = !1;
  function Bu(e, n) {
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
  function qu(e) {
    return (
      (e = e.detail),
      typeof e == 'object' && 'data' in e ? e.data : null
    );
  }
  var Zt = !1;
  function kp(e, n) {
    switch (e) {
      case 'compositionend':
        return qu(n);
      case 'keypress':
        return n.which !== 32 ? null : ((Uu = !0), Hu);
      case 'textInput':
        return ((e = n.data), e === Hu && Uu ? null : e);
      default:
        return null;
    }
  }
  function wp(e, n) {
    if (Zt)
      return e === 'compositionend' || (!fo && Bu(e, n))
        ? ((e = Ru()), (jl = oo = Jn = null), (Zt = !1), e)
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
        return Mu && n.locale !== 'ko' ? null : n.data;
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
  function Vu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === 'input' ? !!Sp[e.type] : n === 'textarea';
  }
  function $u(e, n, t, r) {
    (Xt ? (Yt ? Yt.push(r) : (Yt = [r])) : (Xt = r),
      (n = Ca(n, 'onChange')),
      0 < n.length &&
        ((t = new Dl('onChange', 'change', null, t, r)),
        e.push({ event: t, listeners: n })));
  }
  var Ir = null,
    Mr = null;
  function xp(e) {
    Pf(e, 0);
  }
  function Fl(e) {
    var n = jr(e);
    if (Nu(n)) return e;
  }
  function Wu(e, n) {
    if (e === 'change') return n;
  }
  var Qu = !1;
  if (Rn) {
    var po;
    if (Rn) {
      var mo = 'oninput' in document;
      if (!mo) {
        var Ku = document.createElement('div');
        (Ku.setAttribute('oninput', 'return;'),
          (mo = typeof Ku.oninput == 'function'));
      }
      po = mo;
    } else po = !1;
    Qu = po && (!document.documentMode || 9 < document.documentMode);
  }
  function Gu() {
    Ir && (Ir.detachEvent('onpropertychange', Xu), (Mr = Ir = null));
  }
  function Xu(e) {
    if (e.propertyName === 'value' && Fl(Mr)) {
      var n = [];
      ($u(n, Mr, e, ro(e)), Ou(xp, n));
    }
  }
  function Ep(e, n, t) {
    e === 'focusin'
      ? (Gu(), (Ir = n), (Mr = t), Ir.attachEvent('onpropertychange', Xu))
      : e === 'focusout' && Gu();
  }
  function Cp(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
      return Fl(Mr);
  }
  function Np(e, n) {
    if (e === 'click') return Fl(n);
  }
  function zp(e, n) {
    if (e === 'input' || e === 'change') return Fl(n);
  }
  function Pp(e, n) {
    return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
  }
  var Je = typeof Object.is == 'function' ? Object.is : Pp;
  function Hr(e, n) {
    if (Je(e, n)) return !0;
    if (
      typeof e != 'object' ||
      e === null ||
      typeof n != 'object' ||
      n === null
    )
      return !1;
    var t = Object.keys(e),
      r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!Va.call(n, l) || !Je(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Yu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zu(e, n) {
    var t = Yu(e);
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
      t = Yu(t);
    }
  }
  function Ju(e, n) {
    return e && n
      ? e === n
        ? !0
        : e && e.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? Ju(e, n.parentNode)
            : 'contains' in e
              ? e.contains(n)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(n) & 16)
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
    for (var n = Tl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == 'string';
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = Tl(e.document);
    }
    return n;
  }
  function ho(e) {
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
  var _p = Rn && 'documentMode' in document && 11 >= document.documentMode,
    Jt = null,
    go = null,
    Ur = null,
    yo = !1;
  function ns(e, n, t) {
    var r =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    yo ||
      Jt == null ||
      Jt !== Tl(r) ||
      ((r = Jt),
      'selectionStart' in r && ho(r)
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
      (Ur && Hr(Ur, r)) ||
        ((Ur = r),
        (r = Ca(go, 'onSelect')),
        0 < r.length &&
          ((n = new Dl('onSelect', 'select', null, n, t)),
          e.push({ event: n, listeners: r }),
          (n.target = Jt))));
  }
  function zt(e, n) {
    var t = {};
    return (
      (t[e.toLowerCase()] = n.toLowerCase()),
      (t['Webkit' + e] = 'webkit' + n),
      (t['Moz' + e] = 'moz' + n),
      t
    );
  }
  var er = {
      animationend: zt('Animation', 'AnimationEnd'),
      animationiteration: zt('Animation', 'AnimationIteration'),
      animationstart: zt('Animation', 'AnimationStart'),
      transitionrun: zt('Transition', 'TransitionRun'),
      transitionstart: zt('Transition', 'TransitionStart'),
      transitioncancel: zt('Transition', 'TransitionCancel'),
      transitionend: zt('Transition', 'TransitionEnd'),
    },
    vo = {},
    ts = {};
  Rn &&
    ((ts = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete er.animationend.animation,
      delete er.animationiteration.animation,
      delete er.animationstart.animation),
    'TransitionEvent' in window || delete er.transitionend.transition);
  function Pt(e) {
    if (vo[e]) return vo[e];
    if (!er[e]) return e;
    var n = er[e],
      t;
    for (t in n) if (n.hasOwnProperty(t) && t in ts) return (vo[e] = n[t]);
    return e;
  }
  var rs = Pt('animationend'),
    ls = Pt('animationiteration'),
    as = Pt('animationstart'),
    Tp = Pt('transitionrun'),
    Lp = Pt('transitionstart'),
    jp = Pt('transitioncancel'),
    os = Pt('transitionend'),
    is = new Map(),
    bo =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  bo.push('scrollEnd');
  function vn(e, n) {
    (is.set(e, n), Ct(n, [e]));
  }
  var Il =
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
    sn = [],
    nr = 0,
    ko = 0;
  function Ml() {
    for (var e = nr, n = (ko = nr = 0); n < e; ) {
      var t = sn[n];
      sn[n++] = null;
      var r = sn[n];
      sn[n++] = null;
      var l = sn[n];
      sn[n++] = null;
      var a = sn[n];
      if (((sn[n++] = null), r !== null && l !== null)) {
        var o = r.pending;
        (o === null ? (l.next = l) : ((l.next = o.next), (o.next = l)),
          (r.pending = l));
      }
      a !== 0 && us(t, l, a);
    }
  }
  function Hl(e, n, t, r) {
    ((sn[nr++] = e),
      (sn[nr++] = n),
      (sn[nr++] = t),
      (sn[nr++] = r),
      (ko |= r),
      (e.lanes |= r),
      (e = e.alternate),
      e !== null && (e.lanes |= r));
  }
  function wo(e, n, t, r) {
    return (Hl(e, n, t, r), Ul(e));
  }
  function _t(e, n) {
    return (Hl(e, null, null, n), Ul(e));
  }
  function us(e, n, t) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t);
    for (var l = !1, a = e.return; a !== null; )
      ((a.childLanes |= t),
        (r = a.alternate),
        r !== null && (r.childLanes |= t),
        a.tag === 22 &&
          ((e = a.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = a),
        (a = a.return));
    return e.tag === 3
      ? ((a = e.stateNode),
        l &&
          n !== null &&
          ((l = 31 - Ze(t)),
          (e = a.hiddenUpdates),
          (r = e[l]),
          r === null ? (e[l] = [n]) : r.push(n),
          (n.lane = t | 536870912)),
        a)
      : null;
  }
  function Ul(e) {
    if (50 < sl) throw ((sl = 0), (Ti = null), Error(u(185)));
    for (var n = e.return; n !== null; ) ((e = n), (n = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var tr = {};
  function Op(e, n, t, r) {
    ((this.tag = e),
      (this.key = t),
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
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function en(e, n, t, r) {
    return new Op(e, n, t, r);
  }
  function So(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Dn(e, n) {
    var t = e.alternate;
    return (
      t === null
        ? ((t = en(e.tag, n, e.key, e.mode)),
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
      (t.flags = e.flags & 65011712),
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
      (t.refCleanup = e.refCleanup),
      t
    );
  }
  function ss(e, n) {
    e.flags &= 65011714;
    var t = e.alternate;
    return (
      t === null
        ? ((e.childLanes = 0),
          (e.lanes = n),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = t.childLanes),
          (e.lanes = t.lanes),
          (e.child = t.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = t.memoizedProps),
          (e.memoizedState = t.memoizedState),
          (e.updateQueue = t.updateQueue),
          (e.type = t.type),
          (n = t.dependencies),
          (e.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      e
    );
  }
  function Bl(e, n, t, r, l, a) {
    var o = 0;
    if (((r = e), typeof e == 'function')) So(e) && (o = 1);
    else if (typeof e == 'string')
      o = Im(e, t, _.current)
        ? 26
        : e === 'html' || e === 'head' || e === 'body'
          ? 27
          : 5;
    else
      e: switch (e) {
        case En:
          return (
            (e = en(31, t, n, l)),
            (e.elementType = En),
            (e.lanes = a),
            e
          );
        case De:
          return Tt(t.children, l, a, n);
        case Tn:
          ((o = 8), (l |= 24));
          break;
        case Ge:
          return (
            (e = en(12, t, n, l | 2)),
            (e.elementType = Ge),
            (e.lanes = a),
            e
          );
        case xn:
          return (
            (e = en(13, t, n, l)),
            (e.elementType = xn),
            (e.lanes = a),
            e
          );
        case Me:
          return (
            (e = en(19, t, n, l)),
            (e.elementType = Me),
            (e.lanes = a),
            e
          );
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case Oe:
                o = 10;
                break e;
              case Xn:
                o = 9;
                break e;
              case on:
                o = 11;
                break e;
              case K:
                o = 14;
                break e;
              case He:
                ((o = 16), (r = null));
                break e;
            }
          ((o = 29),
            (t = Error(u(130, e === null ? 'null' : typeof e, ''))),
            (r = null));
      }
    return (
      (n = en(o, t, n, l)),
      (n.elementType = e),
      (n.type = r),
      (n.lanes = a),
      n
    );
  }
  function Tt(e, n, t, r) {
    return ((e = en(7, e, r, n)), (e.lanes = t), e);
  }
  function xo(e, n, t) {
    return ((e = en(6, e, null, n)), (e.lanes = t), e);
  }
  function cs(e) {
    var n = en(18, null, null, 0);
    return ((n.stateNode = e), n);
  }
  function Eo(e, n, t) {
    return (
      (n = en(4, e.children !== null ? e.children : [], e.key, n)),
      (n.lanes = t),
      (n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      n
    );
  }
  var fs = new WeakMap();
  function cn(e, n) {
    if (typeof e == 'object' && e !== null) {
      var t = fs.get(e);
      return t !== void 0
        ? t
        : ((n = { value: e, source: n, stack: cu(n) }), fs.set(e, n), n);
    }
    return { value: e, source: n, stack: cu(n) };
  }
  var rr = [],
    lr = 0,
    ql = null,
    Br = 0,
    fn = [],
    dn = 0,
    et = null,
    Nn = 1,
    zn = '';
  function An(e, n) {
    ((rr[lr++] = Br), (rr[lr++] = ql), (ql = e), (Br = n));
  }
  function ds(e, n, t) {
    ((fn[dn++] = Nn), (fn[dn++] = zn), (fn[dn++] = et), (et = e));
    var r = Nn;
    e = zn;
    var l = 32 - Ze(r) - 1;
    ((r &= ~(1 << l)), (t += 1));
    var a = 32 - Ze(n) + l;
    if (30 < a) {
      var o = l - (l % 5);
      ((a = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (l -= o),
        (Nn = (1 << (32 - Ze(n) + l)) | (t << l) | r),
        (zn = a + e));
    } else ((Nn = (1 << a) | (t << l) | r), (zn = e));
  }
  function Co(e) {
    e.return !== null && (An(e, 1), ds(e, 1, 0));
  }
  function No(e) {
    for (; e === ql; )
      ((ql = rr[--lr]), (rr[lr] = null), (Br = rr[--lr]), (rr[lr] = null));
    for (; e === et; )
      ((et = fn[--dn]),
        (fn[dn] = null),
        (zn = fn[--dn]),
        (fn[dn] = null),
        (Nn = fn[--dn]),
        (fn[dn] = null));
  }
  function ps(e, n) {
    ((fn[dn++] = Nn),
      (fn[dn++] = zn),
      (fn[dn++] = et),
      (Nn = n.id),
      (zn = n.overflow),
      (et = e));
  }
  var _e = null,
    de = null,
    G = !1,
    nt = null,
    pn = !1,
    zo = Error(u(519));
  function tt(e) {
    var n = Error(
      u(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? 'text'
          : 'HTML',
        '',
      ),
    );
    throw (qr(cn(n, e)), zo);
  }
  function ms(e) {
    var n = e.stateNode,
      t = e.type,
      r = e.memoizedProps;
    switch (((n[Pe] = e), (n[Be] = r), t)) {
      case 'dialog':
        ($('cancel', n), $('close', n));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        $('load', n);
        break;
      case 'video':
      case 'audio':
        for (t = 0; t < fl.length; t++) $(fl[t], n);
        break;
      case 'source':
        $('error', n);
        break;
      case 'img':
      case 'image':
      case 'link':
        ($('error', n), $('load', n));
        break;
      case 'details':
        $('toggle', n);
        break;
      case 'input':
        ($('invalid', n),
          zu(
            n,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0,
          ));
        break;
      case 'select':
        $('invalid', n);
        break;
      case 'textarea':
        ($('invalid', n), _u(n, r.value, r.defaultValue, r.children));
    }
    ((t = r.children),
      (typeof t != 'string' && typeof t != 'number' && typeof t != 'bigint') ||
      n.textContent === '' + t ||
      r.suppressHydrationWarning === !0 ||
      jf(n.textContent, t)
        ? (r.popover != null && ($('beforetoggle', n), $('toggle', n)),
          r.onScroll != null && $('scroll', n),
          r.onScrollEnd != null && $('scrollend', n),
          r.onClick != null && (n.onclick = On),
          (n = !0))
        : (n = !1),
      n || tt(e, !0));
  }
  function hs(e) {
    for (_e = e.return; _e; )
      switch (_e.tag) {
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
          _e = _e.return;
      }
  }
  function ar(e) {
    if (e !== _e) return !1;
    if (!G) return (hs(e), (G = !0), !1);
    var n = e.tag,
      t;
    if (
      ((t = n !== 3 && n !== 27) &&
        ((t = n === 5) &&
          ((t = e.type),
          (t =
            !(t !== 'form' && t !== 'button') || $i(e.type, e.memoizedProps))),
        (t = !t)),
      t && de && tt(e),
      hs(e),
      n === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      de = Uf(e);
    } else if (n === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(u(317));
      de = Uf(e);
    } else
      n === 27
        ? ((n = de), gt(e.type) ? ((e = Xi), (Xi = null), (de = e)) : (de = n))
        : (de = _e ? mn(e.stateNode.nextSibling) : null);
    return !0;
  }
  function Lt() {
    ((de = _e = null), (G = !1));
  }
  function Po() {
    var e = nt;
    return (
      e !== null &&
        (Qe === null ? (Qe = e) : Qe.push.apply(Qe, e), (nt = null)),
      e
    );
  }
  function qr(e) {
    nt === null ? (nt = [e]) : nt.push(e);
  }
  var _o = f(null),
    jt = null,
    Fn = null;
  function rt(e, n, t) {
    (z(_o, n._currentValue), (n._currentValue = t));
  }
  function In(e) {
    ((e._currentValue = _o.current), S(_o));
  }
  function To(e, n, t) {
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
  function Lo(e, n, t, r) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var a = l.dependencies;
      if (a !== null) {
        var o = l.child;
        a = a.firstContext;
        e: for (; a !== null; ) {
          var i = a;
          a = l;
          for (var s = 0; s < n.length; s++)
            if (i.context === n[s]) {
              ((a.lanes |= t),
                (i = a.alternate),
                i !== null && (i.lanes |= t),
                To(a.return, t, e),
                r || (o = null));
              break e;
            }
          a = i.next;
        }
      } else if (l.tag === 18) {
        if (((o = l.return), o === null)) throw Error(u(341));
        ((o.lanes |= t),
          (a = o.alternate),
          a !== null && (a.lanes |= t),
          To(o, t, e),
          (o = null));
      } else o = l.child;
      if (o !== null) o.return = l;
      else
        for (o = l; o !== null; ) {
          if (o === e) {
            o = null;
            break;
          }
          if (((l = o.sibling), l !== null)) {
            ((l.return = o.return), (o = l));
            break;
          }
          o = o.return;
        }
      l = o;
    }
  }
  function or(e, n, t, r) {
    e = null;
    for (var l = n, a = !1; l !== null; ) {
      if (!a) {
        if ((l.flags & 524288) !== 0) a = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var o = l.alternate;
        if (o === null) throw Error(u(387));
        if (((o = o.memoizedProps), o !== null)) {
          var i = l.type;
          Je(l.pendingProps.value, o.value) ||
            (e !== null ? e.push(i) : (e = [i]));
        }
      } else if (l === ne.current) {
        if (((o = l.alternate), o === null)) throw Error(u(387));
        o.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(gl) : (e = [gl]));
      }
      l = l.return;
    }
    (e !== null && Lo(n, e, t, r), (n.flags |= 262144));
  }
  function Vl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Je(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Ot(e) {
    ((jt = e),
      (Fn = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Te(e) {
    return gs(jt, e);
  }
  function $l(e, n) {
    return (jt === null && Ot(e), gs(e, n));
  }
  function gs(e, n) {
    var t = n._currentValue;
    if (((n = { context: n, memoizedValue: t, next: null }), Fn === null)) {
      if (e === null) throw Error(u(308));
      ((Fn = n),
        (e.dependencies = { lanes: 0, firstContext: n }),
        (e.flags |= 524288));
    } else Fn = Fn.next = n;
    return t;
  }
  var Rp =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (t, r) {
                  e.push(r);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                e.forEach(function (t) {
                  return t();
                }));
            };
          },
    Dp = C.unstable_scheduleCallback,
    Ap = C.unstable_NormalPriority,
    we = {
      $$typeof: Oe,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function jo() {
    return { controller: new Rp(), data: new Map(), refCount: 0 };
  }
  function Vr(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Dp(Ap, function () {
          e.controller.abort();
        }));
  }
  var $r = null,
    Oo = 0,
    ir = 0,
    ur = null;
  function Fp(e, n) {
    if ($r === null) {
      var t = ($r = []);
      ((Oo = 0),
        (ir = Ai()),
        (ur = {
          status: 'pending',
          value: void 0,
          then: function (r) {
            t.push(r);
          },
        }));
    }
    return (Oo++, n.then(ys, ys), n);
  }
  function ys() {
    if (--Oo === 0 && $r !== null) {
      ur !== null && (ur.status = 'fulfilled');
      var e = $r;
      (($r = null), (ir = 0), (ur = null));
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Ip(e, n) {
    var t = [],
      r = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (l) {
          t.push(l);
        },
      };
    return (
      e.then(
        function () {
          ((r.status = 'fulfilled'), (r.value = n));
          for (var l = 0; l < t.length; l++) (0, t[l])(n);
        },
        function (l) {
          for (r.status = 'rejected', r.reason = l, l = 0; l < t.length; l++)
            (0, t[l])(void 0);
        },
      ),
      r
    );
  }
  var vs = v.S;
  v.S = function (e, n) {
    ((nf = Xe()),
      typeof n == 'object' &&
        n !== null &&
        typeof n.then == 'function' &&
        Fp(e, n),
      vs !== null && vs(e, n));
  };
  var Rt = f(null);
  function Ro() {
    var e = Rt.current;
    return e !== null ? e : ce.pooledCache;
  }
  function Wl(e, n) {
    n === null ? z(Rt, Rt.current) : z(Rt, n.pool);
  }
  function bs() {
    var e = Ro();
    return e === null ? null : { parent: we._currentValue, pool: e };
  }
  var sr = Error(u(460)),
    Do = Error(u(474)),
    Ql = Error(u(542)),
    Kl = { then: function () {} };
  function ks(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function ws(e, n, t) {
    switch (
      ((t = e[t]),
      t === void 0 ? e.push(n) : t !== n && (n.then(On, On), (n = t)),
      n.status)
    ) {
      case 'fulfilled':
        return n.value;
      case 'rejected':
        throw ((e = n.reason), xs(e), e);
      default:
        if (typeof n.status == 'string') n.then(On, On);
        else {
          if (((e = ce), e !== null && 100 < e.shellSuspendCounter))
            throw Error(u(482));
          ((e = n),
            (e.status = 'pending'),
            e.then(
              function (r) {
                if (n.status === 'pending') {
                  var l = n;
                  ((l.status = 'fulfilled'), (l.value = r));
                }
              },
              function (r) {
                if (n.status === 'pending') {
                  var l = n;
                  ((l.status = 'rejected'), (l.reason = r));
                }
              },
            ));
        }
        switch (n.status) {
          case 'fulfilled':
            return n.value;
          case 'rejected':
            throw ((e = n.reason), xs(e), e);
        }
        throw ((At = n), sr);
    }
  }
  function Dt(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (t) {
      throw t !== null && typeof t == 'object' && typeof t.then == 'function'
        ? ((At = t), sr)
        : t;
    }
  }
  var At = null;
  function Ss() {
    if (At === null) throw Error(u(459));
    var e = At;
    return ((At = null), e);
  }
  function xs(e) {
    if (e === sr || e === Ql) throw Error(u(483));
  }
  var cr = null,
    Wr = 0;
  function Gl(e) {
    var n = Wr;
    return ((Wr += 1), cr === null && (cr = []), ws(cr, e, n));
  }
  function Qr(e, n) {
    ((n = n.props.ref), (e.ref = n !== void 0 ? n : null));
  }
  function Xl(e, n) {
    throw n.$$typeof === fe
      ? Error(u(525))
      : ((e = Object.prototype.toString.call(n)),
        Error(
          u(
            31,
            e === '[object Object]'
              ? 'object with keys {' + Object.keys(n).join(', ') + '}'
              : e,
          ),
        ));
  }
  function Es(e) {
    function n(d, c) {
      if (e) {
        var p = d.deletions;
        p === null ? ((d.deletions = [c]), (d.flags |= 16)) : p.push(c);
      }
    }
    function t(d, c) {
      if (!e) return null;
      for (; c !== null; ) (n(d, c), (c = c.sibling));
      return null;
    }
    function r(d) {
      for (var c = new Map(); d !== null; )
        (d.key !== null ? c.set(d.key, d) : c.set(d.index, d), (d = d.sibling));
      return c;
    }
    function l(d, c) {
      return ((d = Dn(d, c)), (d.index = 0), (d.sibling = null), d);
    }
    function a(d, c, p) {
      return (
        (d.index = p),
        e
          ? ((p = d.alternate),
            p !== null
              ? ((p = p.index), p < c ? ((d.flags |= 67108866), c) : p)
              : ((d.flags |= 67108866), c))
          : ((d.flags |= 1048576), c)
      );
    }
    function o(d) {
      return (e && d.alternate === null && (d.flags |= 67108866), d);
    }
    function i(d, c, p, b) {
      return c === null || c.tag !== 6
        ? ((c = xo(p, d.mode, b)), (c.return = d), c)
        : ((c = l(c, p)), (c.return = d), c);
    }
    function s(d, c, p, b) {
      var R = p.type;
      return R === De
        ? y(d, c, p.props.children, b, p.key)
        : c !== null &&
            (c.elementType === R ||
              (typeof R == 'object' &&
                R !== null &&
                R.$$typeof === He &&
                Dt(R) === c.type))
          ? ((c = l(c, p.props)), Qr(c, p), (c.return = d), c)
          : ((c = Bl(p.type, p.key, p.props, null, d.mode, b)),
            Qr(c, p),
            (c.return = d),
            c);
    }
    function m(d, c, p, b) {
      return c === null ||
        c.tag !== 4 ||
        c.stateNode.containerInfo !== p.containerInfo ||
        c.stateNode.implementation !== p.implementation
        ? ((c = Eo(p, d.mode, b)), (c.return = d), c)
        : ((c = l(c, p.children || [])), (c.return = d), c);
    }
    function y(d, c, p, b, R) {
      return c === null || c.tag !== 7
        ? ((c = Tt(p, d.mode, b, R)), (c.return = d), c)
        : ((c = l(c, p)), (c.return = d), c);
    }
    function w(d, c, p) {
      if (
        (typeof c == 'string' && c !== '') ||
        typeof c == 'number' ||
        typeof c == 'bigint'
      )
        return ((c = xo('' + c, d.mode, p)), (c.return = d), c);
      if (typeof c == 'object' && c !== null) {
        switch (c.$$typeof) {
          case ue:
            return (
              (p = Bl(c.type, c.key, c.props, null, d.mode, p)),
              Qr(p, c),
              (p.return = d),
              p
            );
          case Ie:
            return ((c = Eo(c, d.mode, p)), (c.return = d), c);
          case He:
            return ((c = Dt(c)), w(d, c, p));
        }
        if (gn(c) || Ue(c))
          return ((c = Tt(c, d.mode, p, null)), (c.return = d), c);
        if (typeof c.then == 'function') return w(d, Gl(c), p);
        if (c.$$typeof === Oe) return w(d, $l(d, c), p);
        Xl(d, c);
      }
      return null;
    }
    function h(d, c, p, b) {
      var R = c !== null ? c.key : null;
      if (
        (typeof p == 'string' && p !== '') ||
        typeof p == 'number' ||
        typeof p == 'bigint'
      )
        return R !== null ? null : i(d, c, '' + p, b);
      if (typeof p == 'object' && p !== null) {
        switch (p.$$typeof) {
          case ue:
            return p.key === R ? s(d, c, p, b) : null;
          case Ie:
            return p.key === R ? m(d, c, p, b) : null;
          case He:
            return ((p = Dt(p)), h(d, c, p, b));
        }
        if (gn(p) || Ue(p)) return R !== null ? null : y(d, c, p, b, null);
        if (typeof p.then == 'function') return h(d, c, Gl(p), b);
        if (p.$$typeof === Oe) return h(d, c, $l(d, p), b);
        Xl(d, p);
      }
      return null;
    }
    function g(d, c, p, b, R) {
      if (
        (typeof b == 'string' && b !== '') ||
        typeof b == 'number' ||
        typeof b == 'bigint'
      )
        return ((d = d.get(p) || null), i(c, d, '' + b, R));
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case ue:
            return (
              (d = d.get(b.key === null ? p : b.key) || null),
              s(c, d, b, R)
            );
          case Ie:
            return (
              (d = d.get(b.key === null ? p : b.key) || null),
              m(c, d, b, R)
            );
          case He:
            return ((b = Dt(b)), g(d, c, p, b, R));
        }
        if (gn(b) || Ue(b))
          return ((d = d.get(p) || null), y(c, d, b, R, null));
        if (typeof b.then == 'function') return g(d, c, p, Gl(b), R);
        if (b.$$typeof === Oe) return g(d, c, p, $l(c, b), R);
        Xl(c, b);
      }
      return null;
    }
    function P(d, c, p, b) {
      for (
        var R = null, Z = null, T = c, B = (c = 0), Q = null;
        T !== null && B < p.length;
        B++
      ) {
        T.index > B ? ((Q = T), (T = null)) : (Q = T.sibling);
        var J = h(d, T, p[B], b);
        if (J === null) {
          T === null && (T = Q);
          break;
        }
        (e && T && J.alternate === null && n(d, T),
          (c = a(J, c, B)),
          Z === null ? (R = J) : (Z.sibling = J),
          (Z = J),
          (T = Q));
      }
      if (B === p.length) return (t(d, T), G && An(d, B), R);
      if (T === null) {
        for (; B < p.length; B++)
          ((T = w(d, p[B], b)),
            T !== null &&
              ((c = a(T, c, B)),
              Z === null ? (R = T) : (Z.sibling = T),
              (Z = T)));
        return (G && An(d, B), R);
      }
      for (T = r(T); B < p.length; B++)
        ((Q = g(T, d, B, p[B], b)),
          Q !== null &&
            (e && Q.alternate !== null && T.delete(Q.key === null ? B : Q.key),
            (c = a(Q, c, B)),
            Z === null ? (R = Q) : (Z.sibling = Q),
            (Z = Q)));
      return (
        e &&
          T.forEach(function (wt) {
            return n(d, wt);
          }),
        G && An(d, B),
        R
      );
    }
    function A(d, c, p, b) {
      if (p == null) throw Error(u(151));
      for (
        var R = null, Z = null, T = c, B = (c = 0), Q = null, J = p.next();
        T !== null && !J.done;
        B++, J = p.next()
      ) {
        T.index > B ? ((Q = T), (T = null)) : (Q = T.sibling);
        var wt = h(d, T, J.value, b);
        if (wt === null) {
          T === null && (T = Q);
          break;
        }
        (e && T && wt.alternate === null && n(d, T),
          (c = a(wt, c, B)),
          Z === null ? (R = wt) : (Z.sibling = wt),
          (Z = wt),
          (T = Q));
      }
      if (J.done) return (t(d, T), G && An(d, B), R);
      if (T === null) {
        for (; !J.done; B++, J = p.next())
          ((J = w(d, J.value, b)),
            J !== null &&
              ((c = a(J, c, B)),
              Z === null ? (R = J) : (Z.sibling = J),
              (Z = J)));
        return (G && An(d, B), R);
      }
      for (T = r(T); !J.done; B++, J = p.next())
        ((J = g(T, d, B, J.value, b)),
          J !== null &&
            (e && J.alternate !== null && T.delete(J.key === null ? B : J.key),
            (c = a(J, c, B)),
            Z === null ? (R = J) : (Z.sibling = J),
            (Z = J)));
      return (
        e &&
          T.forEach(function (Gm) {
            return n(d, Gm);
          }),
        G && An(d, B),
        R
      );
    }
    function ie(d, c, p, b) {
      if (
        (typeof p == 'object' &&
          p !== null &&
          p.type === De &&
          p.key === null &&
          (p = p.props.children),
        typeof p == 'object' && p !== null)
      ) {
        switch (p.$$typeof) {
          case ue:
            e: {
              for (var R = p.key; c !== null; ) {
                if (c.key === R) {
                  if (((R = p.type), R === De)) {
                    if (c.tag === 7) {
                      (t(d, c.sibling),
                        (b = l(c, p.props.children)),
                        (b.return = d),
                        (d = b));
                      break e;
                    }
                  } else if (
                    c.elementType === R ||
                    (typeof R == 'object' &&
                      R !== null &&
                      R.$$typeof === He &&
                      Dt(R) === c.type)
                  ) {
                    (t(d, c.sibling),
                      (b = l(c, p.props)),
                      Qr(b, p),
                      (b.return = d),
                      (d = b));
                    break e;
                  }
                  t(d, c);
                  break;
                } else n(d, c);
                c = c.sibling;
              }
              p.type === De
                ? ((b = Tt(p.props.children, d.mode, b, p.key)),
                  (b.return = d),
                  (d = b))
                : ((b = Bl(p.type, p.key, p.props, null, d.mode, b)),
                  Qr(b, p),
                  (b.return = d),
                  (d = b));
            }
            return o(d);
          case Ie:
            e: {
              for (R = p.key; c !== null; ) {
                if (c.key === R)
                  if (
                    c.tag === 4 &&
                    c.stateNode.containerInfo === p.containerInfo &&
                    c.stateNode.implementation === p.implementation
                  ) {
                    (t(d, c.sibling),
                      (b = l(c, p.children || [])),
                      (b.return = d),
                      (d = b));
                    break e;
                  } else {
                    t(d, c);
                    break;
                  }
                else n(d, c);
                c = c.sibling;
              }
              ((b = Eo(p, d.mode, b)), (b.return = d), (d = b));
            }
            return o(d);
          case He:
            return ((p = Dt(p)), ie(d, c, p, b));
        }
        if (gn(p)) return P(d, c, p, b);
        if (Ue(p)) {
          if (((R = Ue(p)), typeof R != 'function')) throw Error(u(150));
          return ((p = R.call(p)), A(d, c, p, b));
        }
        if (typeof p.then == 'function') return ie(d, c, Gl(p), b);
        if (p.$$typeof === Oe) return ie(d, c, $l(d, p), b);
        Xl(d, p);
      }
      return (typeof p == 'string' && p !== '') ||
        typeof p == 'number' ||
        typeof p == 'bigint'
        ? ((p = '' + p),
          c !== null && c.tag === 6
            ? (t(d, c.sibling), (b = l(c, p)), (b.return = d), (d = b))
            : (t(d, c), (b = xo(p, d.mode, b)), (b.return = d), (d = b)),
          o(d))
        : t(d, c);
    }
    return function (d, c, p, b) {
      try {
        Wr = 0;
        var R = ie(d, c, p, b);
        return ((cr = null), R);
      } catch (T) {
        if (T === sr || T === Ql) throw T;
        var Z = en(29, T, null, d.mode);
        return ((Z.lanes = b), (Z.return = d), Z);
      } finally {
      }
    };
  }
  var Ft = Es(!0),
    Cs = Es(!1),
    lt = !1;
  function Ao(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Fo(e, n) {
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
  function at(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ot(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ee & 2) !== 0)) {
      var l = r.pending;
      return (
        l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
        (r.pending = n),
        (n = Ul(e)),
        us(e, null, t),
        n
      );
    }
    return (Hl(e, r, n, t), Ul(e));
  }
  function Kr(e, n, t) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194048) !== 0))
    ) {
      var r = n.lanes;
      ((r &= e.pendingLanes), (t |= r), (n.lanes = t), gu(e, t));
    }
  }
  function Io(e, n) {
    var t = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), t === r)) {
      var l = null,
        a = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var o = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null,
          };
          (a === null ? (l = a = o) : (a = a.next = o), (t = t.next));
        } while (t !== null);
        a === null ? (l = a = n) : (a = a.next = n);
      } else l = a = n;
      ((t = {
        baseState: r.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: a,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (e.updateQueue = t));
      return;
    }
    ((e = t.lastBaseUpdate),
      e === null ? (t.firstBaseUpdate = n) : (e.next = n),
      (t.lastBaseUpdate = n));
  }
  var Mo = !1;
  function Gr() {
    if (Mo) {
      var e = ur;
      if (e !== null) throw e;
    }
  }
  function Xr(e, n, t, r) {
    Mo = !1;
    var l = e.updateQueue;
    lt = !1;
    var a = l.firstBaseUpdate,
      o = l.lastBaseUpdate,
      i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i,
        m = s.next;
      ((s.next = null), o === null ? (a = m) : (o.next = m), (o = s));
      var y = e.alternate;
      y !== null &&
        ((y = y.updateQueue),
        (i = y.lastBaseUpdate),
        i !== o &&
          (i === null ? (y.firstBaseUpdate = m) : (i.next = m),
          (y.lastBaseUpdate = s)));
    }
    if (a !== null) {
      var w = l.baseState;
      ((o = 0), (y = m = s = null), (i = a));
      do {
        var h = i.lane & -536870913,
          g = h !== i.lane;
        if (g ? (W & h) === h : (r & h) === h) {
          (h !== 0 && h === ir && (Mo = !0),
            y !== null &&
              (y = y.next =
                {
                  lane: 0,
                  tag: i.tag,
                  payload: i.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var P = e,
              A = i;
            h = n;
            var ie = t;
            switch (A.tag) {
              case 1:
                if (((P = A.payload), typeof P == 'function')) {
                  w = P.call(ie, w, h);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = (P.flags & -65537) | 128;
              case 0:
                if (
                  ((P = A.payload),
                  (h = typeof P == 'function' ? P.call(ie, w, h) : P),
                  h == null)
                )
                  break e;
                w = D({}, w, h);
                break e;
              case 2:
                lt = !0;
            }
          }
          ((h = i.callback),
            h !== null &&
              ((e.flags |= 64),
              g && (e.flags |= 8192),
              (g = l.callbacks),
              g === null ? (l.callbacks = [h]) : g.push(h)));
        } else
          ((g = {
            lane: h,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null,
          }),
            y === null ? ((m = y = g), (s = w)) : (y = y.next = g),
            (o |= h));
        if (((i = i.next), i === null)) {
          if (((i = l.shared.pending), i === null)) break;
          ((g = i),
            (i = g.next),
            (g.next = null),
            (l.lastBaseUpdate = g),
            (l.shared.pending = null));
        }
      } while (!0);
      (y === null && (s = w),
        (l.baseState = s),
        (l.firstBaseUpdate = m),
        (l.lastBaseUpdate = y),
        a === null && (l.shared.lanes = 0),
        (ft |= o),
        (e.lanes = o),
        (e.memoizedState = w));
    }
  }
  function Ns(e, n) {
    if (typeof e != 'function') throw Error(u(191, e));
    e.call(n);
  }
  function zs(e, n) {
    var t = e.callbacks;
    if (t !== null)
      for (e.callbacks = null, e = 0; e < t.length; e++) Ns(t[e], n);
  }
  var fr = f(null),
    Yl = f(0);
  function Ps(e, n) {
    ((e = Qn), z(Yl, e), z(fr, n), (Qn = e | n.baseLanes));
  }
  function Ho() {
    (z(Yl, Qn), z(fr, fr.current));
  }
  function Uo() {
    ((Qn = Yl.current), S(fr), S(Yl));
  }
  var nn = f(null),
    bn = null;
  function it(e) {
    var n = e.alternate;
    (z(be, be.current & 1),
      z(nn, e),
      bn === null &&
        (n === null || fr.current !== null || n.memoizedState !== null) &&
        (bn = e));
  }
  function Bo(e) {
    (z(be, be.current), z(nn, e), bn === null && (bn = e));
  }
  function _s(e) {
    e.tag === 22
      ? (z(be, be.current), z(nn, e), bn === null && (bn = e))
      : ut();
  }
  function ut() {
    (z(be, be.current), z(nn, nn.current));
  }
  function tn(e) {
    (S(nn), bn === e && (bn = null), S(be));
  }
  var be = f(0);
  function Zl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && ((t = t.dehydrated), t === null || Ki(t) || Gi(t)))
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
  var Mn = 0,
    U = null,
    ae = null,
    Se = null,
    Jl = !1,
    dr = !1,
    It = !1,
    ea = 0,
    Yr = 0,
    pr = null,
    Mp = 0;
  function he() {
    throw Error(u(321));
  }
  function qo(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!Je(e[t], n[t])) return !1;
    return !0;
  }
  function Vo(e, n, t, r, l, a) {
    return (
      (Mn = a),
      (U = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (v.H = e === null || e.memoizedState === null ? dc : ai),
      (It = !1),
      (a = t(r, l)),
      (It = !1),
      dr && (a = Ls(n, t, r, l)),
      Ts(e),
      a
    );
  }
  function Ts(e) {
    v.H = el;
    var n = ae !== null && ae.next !== null;
    if (((Mn = 0), (Se = ae = U = null), (Jl = !1), (Yr = 0), (pr = null), n))
      throw Error(u(300));
    e === null ||
      xe ||
      ((e = e.dependencies), e !== null && Vl(e) && (xe = !0));
  }
  function Ls(e, n, t, r) {
    U = e;
    var l = 0;
    do {
      if ((dr && (pr = null), (Yr = 0), (dr = !1), 25 <= l))
        throw Error(u(301));
      if (((l += 1), (Se = ae = null), e.updateQueue != null)) {
        var a = e.updateQueue;
        ((a.lastEffect = null),
          (a.events = null),
          (a.stores = null),
          a.memoCache != null && (a.memoCache.index = 0));
      }
      ((v.H = pc), (a = n(t, r)));
    } while (dr);
    return a;
  }
  function Hp() {
    var e = v.H,
      n = e.useState()[0];
    return (
      (n = typeof n.then == 'function' ? Zr(n) : n),
      (e = e.useState()[0]),
      (ae !== null ? ae.memoizedState : null) !== e && (U.flags |= 1024),
      n
    );
  }
  function $o() {
    var e = ea !== 0;
    return ((ea = 0), e);
  }
  function Wo(e, n, t) {
    ((n.updateQueue = e.updateQueue), (n.flags &= -2053), (e.lanes &= ~t));
  }
  function Qo(e) {
    if (Jl) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        (n !== null && (n.pending = null), (e = e.next));
      }
      Jl = !1;
    }
    ((Mn = 0), (Se = ae = U = null), (dr = !1), (Yr = ea = 0), (pr = null));
  }
  function Fe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Se === null ? (U.memoizedState = Se = e) : (Se = Se.next = e), Se);
  }
  function ke() {
    if (ae === null) {
      var e = U.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ae.next;
    var n = Se === null ? U.memoizedState : Se.next;
    if (n !== null) ((Se = n), (ae = e));
    else {
      if (e === null)
        throw U.alternate === null ? Error(u(467)) : Error(u(310));
      ((ae = e),
        (e = {
          memoizedState: ae.memoizedState,
          baseState: ae.baseState,
          baseQueue: ae.baseQueue,
          queue: ae.queue,
          next: null,
        }),
        Se === null ? (U.memoizedState = Se = e) : (Se = Se.next = e));
    }
    return Se;
  }
  function na() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Zr(e) {
    var n = Yr;
    return (
      (Yr += 1),
      pr === null && (pr = []),
      (e = ws(pr, e, n)),
      (n = U),
      (Se === null ? n.memoizedState : Se.next) === null &&
        ((n = n.alternate),
        (v.H = n === null || n.memoizedState === null ? dc : ai)),
      e
    );
  }
  function ta(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return Zr(e);
      if (e.$$typeof === Oe) return Te(e);
    }
    throw Error(u(438, String(e)));
  }
  function Ko(e) {
    var n = null,
      t = U.updateQueue;
    if ((t !== null && (n = t.memoCache), n == null)) {
      var r = U.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (n = {
              data: r.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      t === null && ((t = na()), (U.updateQueue = t)),
      (t.memoCache = n),
      (t = n.data[n.index]),
      t === void 0)
    )
      for (t = n.data[n.index] = Array(e), r = 0; r < e; r++) t[r] = Bt;
    return (n.index++, t);
  }
  function Hn(e, n) {
    return typeof n == 'function' ? n(e) : n;
  }
  function ra(e) {
    var n = ke();
    return Go(n, ae, e);
  }
  function Go(e, n, t) {
    var r = e.queue;
    if (r === null) throw Error(u(311));
    r.lastRenderedReducer = t;
    var l = e.baseQueue,
      a = r.pending;
    if (a !== null) {
      if (l !== null) {
        var o = l.next;
        ((l.next = a.next), (a.next = o));
      }
      ((n.baseQueue = l = a), (r.pending = null));
    }
    if (((a = e.baseState), l === null)) e.memoizedState = a;
    else {
      n = l.next;
      var i = (o = null),
        s = null,
        m = n,
        y = !1;
      do {
        var w = m.lane & -536870913;
        if (w !== m.lane ? (W & w) === w : (Mn & w) === w) {
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
              w === ir && (y = !0));
          else if ((Mn & h) === h) {
            ((m = m.next), h === ir && (y = !0));
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
              s === null ? ((i = s = w), (o = a)) : (s = s.next = w),
              (U.lanes |= h),
              (ft |= h));
          ((w = m.action),
            It && t(a, w),
            (a = m.hasEagerState ? m.eagerState : t(a, w)));
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
            s === null ? ((i = s = h), (o = a)) : (s = s.next = h),
            (U.lanes |= w),
            (ft |= w));
        m = m.next;
      } while (m !== null && m !== n);
      if (
        (s === null ? (o = a) : (s.next = i),
        !Je(a, e.memoizedState) && ((xe = !0), y && ((t = ur), t !== null)))
      )
        throw t;
      ((e.memoizedState = a),
        (e.baseState = o),
        (e.baseQueue = s),
        (r.lastRenderedState = a));
    }
    return (l === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
  }
  function Xo(e) {
    var n = ke(),
      t = n.queue;
    if (t === null) throw Error(u(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch,
      l = t.pending,
      a = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var o = (l = l.next);
      do ((a = e(a, o.action)), (o = o.next));
      while (o !== l);
      (Je(a, n.memoizedState) || (xe = !0),
        (n.memoizedState = a),
        n.baseQueue === null && (n.baseState = a),
        (t.lastRenderedState = a));
    }
    return [a, r];
  }
  function js(e, n, t) {
    var r = U,
      l = ke(),
      a = G;
    if (a) {
      if (t === void 0) throw Error(u(407));
      t = t();
    } else t = n();
    var o = !Je((ae || l).memoizedState, t);
    if (
      (o && ((l.memoizedState = t), (xe = !0)),
      (l = l.queue),
      Jo(Ds.bind(null, r, l, e), [e]),
      l.getSnapshot !== n || o || (Se !== null && Se.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        mr(9, { destroy: void 0 }, Rs.bind(null, r, l, t, n), null),
        ce === null)
      )
        throw Error(u(349));
      a || (Mn & 127) !== 0 || Os(r, n, t);
    }
    return t;
  }
  function Os(e, n, t) {
    ((e.flags |= 16384),
      (e = { getSnapshot: n, value: t }),
      (n = U.updateQueue),
      n === null
        ? ((n = na()), (U.updateQueue = n), (n.stores = [e]))
        : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e)));
  }
  function Rs(e, n, t, r) {
    ((n.value = t), (n.getSnapshot = r), As(n) && Fs(e));
  }
  function Ds(e, n, t) {
    return t(function () {
      As(n) && Fs(e);
    });
  }
  function As(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !Je(e, t);
    } catch {
      return !0;
    }
  }
  function Fs(e) {
    var n = _t(e, 2);
    n !== null && Ke(n, e, 2);
  }
  function Yo(e) {
    var n = Fe();
    if (typeof e == 'function') {
      var t = e;
      if (((e = t()), It)) {
        Yn(!0);
        try {
          t();
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
        lastRenderedReducer: Hn,
        lastRenderedState: e,
      }),
      n
    );
  }
  function Is(e, n, t, r) {
    return ((e.baseState = t), Go(e, ae, typeof r == 'function' ? r : Hn));
  }
  function Up(e, n, t, r, l) {
    if (oa(e)) throw Error(u(485));
    if (((e = n.action), e !== null)) {
      var a = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (o) {
          a.listeners.push(o);
        },
      };
      (v.T !== null ? t(!0) : (a.isTransition = !1),
        r(a),
        (t = n.pending),
        t === null
          ? ((a.next = n.pending = a), Ms(n, a))
          : ((a.next = t.next), (n.pending = t.next = a)));
    }
  }
  function Ms(e, n) {
    var t = n.action,
      r = n.payload,
      l = e.state;
    if (n.isTransition) {
      var a = v.T,
        o = {};
      v.T = o;
      try {
        var i = t(l, r),
          s = v.S;
        (s !== null && s(o, i), Hs(e, n, i));
      } catch (m) {
        Zo(e, n, m);
      } finally {
        (a !== null && o.types !== null && (a.types = o.types), (v.T = a));
      }
    } else
      try {
        ((a = t(l, r)), Hs(e, n, a));
      } catch (m) {
        Zo(e, n, m);
      }
  }
  function Hs(e, n, t) {
    t !== null && typeof t == 'object' && typeof t.then == 'function'
      ? t.then(
          function (r) {
            Us(e, n, r);
          },
          function (r) {
            return Zo(e, n, r);
          },
        )
      : Us(e, n, t);
  }
  function Us(e, n, t) {
    ((n.status = 'fulfilled'),
      (n.value = t),
      Bs(n),
      (e.state = t),
      (n = e.pending),
      n !== null &&
        ((t = n.next),
        t === n ? (e.pending = null) : ((t = t.next), (n.next = t), Ms(e, t))));
  }
  function Zo(e, n, t) {
    var r = e.pending;
    if (((e.pending = null), r !== null)) {
      r = r.next;
      do ((n.status = 'rejected'), (n.reason = t), Bs(n), (n = n.next));
      while (n !== r);
    }
    e.action = null;
  }
  function Bs(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function qs(e, n) {
    return n;
  }
  function Vs(e, n) {
    if (G) {
      var t = ce.formState;
      if (t !== null) {
        e: {
          var r = U;
          if (G) {
            if (de) {
              n: {
                for (var l = de, a = pn; l.nodeType !== 8; ) {
                  if (!a) {
                    l = null;
                    break n;
                  }
                  if (((l = mn(l.nextSibling)), l === null)) {
                    l = null;
                    break n;
                  }
                }
                ((a = l.data), (l = a === 'F!' || a === 'F' ? l : null));
              }
              if (l) {
                ((de = mn(l.nextSibling)), (r = l.data === 'F!'));
                break e;
              }
            }
            tt(r);
          }
          r = !1;
        }
        r && (n = t[0]);
      }
    }
    return (
      (t = Fe()),
      (t.memoizedState = t.baseState = n),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qs,
        lastRenderedState: n,
      }),
      (t.queue = r),
      (t = sc.bind(null, U, r)),
      (r.dispatch = t),
      (r = Yo(!1)),
      (a = li.bind(null, U, !1, r.queue)),
      (r = Fe()),
      (l = { state: n, dispatch: null, action: e, pending: null }),
      (r.queue = l),
      (t = Up.bind(null, U, l, a, t)),
      (l.dispatch = t),
      (r.memoizedState = e),
      [n, t, !1]
    );
  }
  function $s(e) {
    var n = ke();
    return Ws(n, ae, e);
  }
  function Ws(e, n, t) {
    if (
      ((n = Go(e, n, qs)[0]),
      (e = ra(Hn)[0]),
      typeof n == 'object' && n !== null && typeof n.then == 'function')
    )
      try {
        var r = Zr(n);
      } catch (o) {
        throw o === sr ? Ql : o;
      }
    else r = n;
    n = ke();
    var l = n.queue,
      a = l.dispatch;
    return (
      t !== n.memoizedState &&
        ((U.flags |= 2048),
        mr(9, { destroy: void 0 }, Bp.bind(null, l, t), null)),
      [r, a, e]
    );
  }
  function Bp(e, n) {
    e.action = n;
  }
  function Qs(e) {
    var n = ke(),
      t = ae;
    if (t !== null) return Ws(n, t, e);
    (ke(), (n = n.memoizedState), (t = ke()));
    var r = t.queue.dispatch;
    return ((t.memoizedState = e), [n, r, !1]);
  }
  function mr(e, n, t, r) {
    return (
      (e = { tag: e, create: t, deps: r, inst: n, next: null }),
      (n = U.updateQueue),
      n === null && ((n = na()), (U.updateQueue = n)),
      (t = n.lastEffect),
      t === null
        ? (n.lastEffect = e.next = e)
        : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e)),
      e
    );
  }
  function Ks() {
    return ke().memoizedState;
  }
  function la(e, n, t, r) {
    var l = Fe();
    ((U.flags |= e),
      (l.memoizedState = mr(
        1 | n,
        { destroy: void 0 },
        t,
        r === void 0 ? null : r,
      )));
  }
  function aa(e, n, t, r) {
    var l = ke();
    r = r === void 0 ? null : r;
    var a = l.memoizedState.inst;
    ae !== null && r !== null && qo(r, ae.memoizedState.deps)
      ? (l.memoizedState = mr(n, a, t, r))
      : ((U.flags |= e), (l.memoizedState = mr(1 | n, a, t, r)));
  }
  function Gs(e, n) {
    la(8390656, 8, e, n);
  }
  function Jo(e, n) {
    aa(2048, 8, e, n);
  }
  function qp(e) {
    U.flags |= 4;
    var n = U.updateQueue;
    if (n === null) ((n = na()), (U.updateQueue = n), (n.events = [e]));
    else {
      var t = n.events;
      t === null ? (n.events = [e]) : t.push(e);
    }
  }
  function Xs(e) {
    var n = ke().memoizedState;
    return (
      qp({ ref: n, nextImpl: e }),
      function () {
        if ((ee & 2) !== 0) throw Error(u(440));
        return n.impl.apply(void 0, arguments);
      }
    );
  }
  function Ys(e, n) {
    return aa(4, 2, e, n);
  }
  function Zs(e, n) {
    return aa(4, 4, e, n);
  }
  function Js(e, n) {
    if (typeof n == 'function') {
      e = e();
      var t = n(e);
      return function () {
        typeof t == 'function' ? t() : n(null);
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
  function ec(e, n, t) {
    ((t = t != null ? t.concat([e]) : null), aa(4, 4, Js.bind(null, n, e), t));
  }
  function ei() {}
  function nc(e, n) {
    var t = ke();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return n !== null && qo(n, r[1]) ? r[0] : ((t.memoizedState = [e, n]), e);
  }
  function tc(e, n) {
    var t = ke();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    if (n !== null && qo(n, r[1])) return r[0];
    if (((r = e()), It)) {
      Yn(!0);
      try {
        e();
      } finally {
        Yn(!1);
      }
    }
    return ((t.memoizedState = [r, n]), r);
  }
  function ni(e, n, t) {
    return t === void 0 || ((Mn & 1073741824) !== 0 && (W & 261930) === 0)
      ? (e.memoizedState = n)
      : ((e.memoizedState = t), (e = rf()), (U.lanes |= e), (ft |= e), t);
  }
  function rc(e, n, t, r) {
    return Je(t, n)
      ? t
      : fr.current !== null
        ? ((e = ni(e, t, r)), Je(e, n) || (xe = !0), e)
        : (Mn & 42) === 0 || ((Mn & 1073741824) !== 0 && (W & 261930) === 0)
          ? ((xe = !0), (e.memoizedState = t))
          : ((e = rf()), (U.lanes |= e), (ft |= e), n);
  }
  function lc(e, n, t, r, l) {
    var a = N.p;
    N.p = a !== 0 && 8 > a ? a : 8;
    var o = v.T,
      i = {};
    ((v.T = i), li(e, !1, n, t));
    try {
      var s = l(),
        m = v.S;
      if (
        (m !== null && m(i, s),
        s !== null && typeof s == 'object' && typeof s.then == 'function')
      ) {
        var y = Ip(s, r);
        Jr(e, n, y, an(e));
      } else Jr(e, n, r, an(e));
    } catch (w) {
      Jr(e, n, { then: function () {}, status: 'rejected', reason: w }, an());
    } finally {
      ((N.p = a),
        o !== null && i.types !== null && (o.types = i.types),
        (v.T = o));
    }
  }
  function Vp() {}
  function ti(e, n, t, r) {
    if (e.tag !== 5) throw Error(u(476));
    var l = ac(e).queue;
    lc(
      e,
      l,
      n,
      F,
      t === null
        ? Vp
        : function () {
            return (oc(e), t(r));
          },
    );
  }
  function ac(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: F,
      baseState: F,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Hn,
        lastRenderedState: F,
      },
      next: null,
    };
    var t = {};
    return (
      (n.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Hn,
          lastRenderedState: t,
        },
        next: null,
      }),
      (e.memoizedState = n),
      (e = e.alternate),
      e !== null && (e.memoizedState = n),
      n
    );
  }
  function oc(e) {
    var n = ac(e);
    (n.next === null && (n = e.alternate.memoizedState),
      Jr(e, n.next.queue, {}, an()));
  }
  function ri() {
    return Te(gl);
  }
  function ic() {
    return ke().memoizedState;
  }
  function uc() {
    return ke().memoizedState;
  }
  function $p(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var t = an();
          e = at(t);
          var r = ot(n, e, t);
          (r !== null && (Ke(r, n, t), Kr(r, n, t)),
            (n = { cache: jo() }),
            (e.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function Wp(e, n, t) {
    var r = an();
    ((t = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      oa(e)
        ? cc(n, t)
        : ((t = wo(e, n, t, r)), t !== null && (Ke(t, e, r), fc(t, n, r))));
  }
  function sc(e, n, t) {
    var r = an();
    Jr(e, n, t, r);
  }
  function Jr(e, n, t, r) {
    var l = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (oa(e)) cc(n, l);
    else {
      var a = e.alternate;
      if (
        e.lanes === 0 &&
        (a === null || a.lanes === 0) &&
        ((a = n.lastRenderedReducer), a !== null)
      )
        try {
          var o = n.lastRenderedState,
            i = a(o, t);
          if (((l.hasEagerState = !0), (l.eagerState = i), Je(i, o)))
            return (Hl(e, n, l, 0), ce === null && Ml(), !1);
        } catch {
        } finally {
        }
      if (((t = wo(e, n, l, r)), t !== null))
        return (Ke(t, e, r), fc(t, n, r), !0);
    }
    return !1;
  }
  function li(e, n, t, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: Ai(),
        gesture: null,
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      oa(e))
    ) {
      if (n) throw Error(u(479));
    } else ((n = wo(e, t, r, 2)), n !== null && Ke(n, e, 2));
  }
  function oa(e) {
    var n = e.alternate;
    return e === U || (n !== null && n === U);
  }
  function cc(e, n) {
    dr = Jl = !0;
    var t = e.pending;
    (t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
      (e.pending = n));
  }
  function fc(e, n, t) {
    if ((t & 4194048) !== 0) {
      var r = n.lanes;
      ((r &= e.pendingLanes), (t |= r), (n.lanes = t), gu(e, t));
    }
  }
  var el = {
    readContext: Te,
    use: ta,
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
  el.useEffectEvent = he;
  var dc = {
      readContext: Te,
      use: ta,
      useCallback: function (e, n) {
        return ((Fe().memoizedState = [e, n === void 0 ? null : n]), e);
      },
      useContext: Te,
      useEffect: Gs,
      useImperativeHandle: function (e, n, t) {
        ((t = t != null ? t.concat([e]) : null),
          la(4194308, 4, Js.bind(null, n, e), t));
      },
      useLayoutEffect: function (e, n) {
        return la(4194308, 4, e, n);
      },
      useInsertionEffect: function (e, n) {
        la(4, 2, e, n);
      },
      useMemo: function (e, n) {
        var t = Fe();
        n = n === void 0 ? null : n;
        var r = e();
        if (It) {
          Yn(!0);
          try {
            e();
          } finally {
            Yn(!1);
          }
        }
        return ((t.memoizedState = [r, n]), r);
      },
      useReducer: function (e, n, t) {
        var r = Fe();
        if (t !== void 0) {
          var l = t(n);
          if (It) {
            Yn(!0);
            try {
              t(n);
            } finally {
              Yn(!1);
            }
          }
        } else l = n;
        return (
          (r.memoizedState = r.baseState = l),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: l,
          }),
          (r.queue = e),
          (e = e.dispatch = Wp.bind(null, U, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var n = Fe();
        return ((e = { current: e }), (n.memoizedState = e));
      },
      useState: function (e) {
        e = Yo(e);
        var n = e.queue,
          t = sc.bind(null, U, n);
        return ((n.dispatch = t), [e.memoizedState, t]);
      },
      useDebugValue: ei,
      useDeferredValue: function (e, n) {
        var t = Fe();
        return ni(t, e, n);
      },
      useTransition: function () {
        var e = Yo(!1);
        return (
          (e = lc.bind(null, U, e.queue, !0, !1)),
          (Fe().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, n, t) {
        var r = U,
          l = Fe();
        if (G) {
          if (t === void 0) throw Error(u(407));
          t = t();
        } else {
          if (((t = n()), ce === null)) throw Error(u(349));
          (W & 127) !== 0 || Os(r, n, t);
        }
        l.memoizedState = t;
        var a = { value: t, getSnapshot: n };
        return (
          (l.queue = a),
          Gs(Ds.bind(null, r, a, e), [e]),
          (r.flags |= 2048),
          mr(9, { destroy: void 0 }, Rs.bind(null, r, a, t, n), null),
          t
        );
      },
      useId: function () {
        var e = Fe(),
          n = ce.identifierPrefix;
        if (G) {
          var t = zn,
            r = Nn;
          ((t = (r & ~(1 << (32 - Ze(r) - 1))).toString(32) + t),
            (n = '_' + n + 'R_' + t),
            (t = ea++),
            0 < t && (n += 'H' + t.toString(32)),
            (n += '_'));
        } else ((t = Mp++), (n = '_' + n + 'r_' + t.toString(32) + '_'));
        return (e.memoizedState = n);
      },
      useHostTransitionStatus: ri,
      useFormState: Vs,
      useActionState: Vs,
      useOptimistic: function (e) {
        var n = Fe();
        n.memoizedState = n.baseState = e;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = t),
          (n = li.bind(null, U, !0, t)),
          (t.dispatch = n),
          [e, n]
        );
      },
      useMemoCache: Ko,
      useCacheRefresh: function () {
        return (Fe().memoizedState = $p.bind(null, U));
      },
      useEffectEvent: function (e) {
        var n = Fe(),
          t = { impl: e };
        return (
          (n.memoizedState = t),
          function () {
            if ((ee & 2) !== 0) throw Error(u(440));
            return t.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ai = {
      readContext: Te,
      use: ta,
      useCallback: nc,
      useContext: Te,
      useEffect: Jo,
      useImperativeHandle: ec,
      useInsertionEffect: Ys,
      useLayoutEffect: Zs,
      useMemo: tc,
      useReducer: ra,
      useRef: Ks,
      useState: function () {
        return ra(Hn);
      },
      useDebugValue: ei,
      useDeferredValue: function (e, n) {
        var t = ke();
        return rc(t, ae.memoizedState, e, n);
      },
      useTransition: function () {
        var e = ra(Hn)[0],
          n = ke().memoizedState;
        return [typeof e == 'boolean' ? e : Zr(e), n];
      },
      useSyncExternalStore: js,
      useId: ic,
      useHostTransitionStatus: ri,
      useFormState: $s,
      useActionState: $s,
      useOptimistic: function (e, n) {
        var t = ke();
        return Is(t, ae, e, n);
      },
      useMemoCache: Ko,
      useCacheRefresh: uc,
    };
  ai.useEffectEvent = Xs;
  var pc = {
    readContext: Te,
    use: ta,
    useCallback: nc,
    useContext: Te,
    useEffect: Jo,
    useImperativeHandle: ec,
    useInsertionEffect: Ys,
    useLayoutEffect: Zs,
    useMemo: tc,
    useReducer: Xo,
    useRef: Ks,
    useState: function () {
      return Xo(Hn);
    },
    useDebugValue: ei,
    useDeferredValue: function (e, n) {
      var t = ke();
      return ae === null ? ni(t, e, n) : rc(t, ae.memoizedState, e, n);
    },
    useTransition: function () {
      var e = Xo(Hn)[0],
        n = ke().memoizedState;
      return [typeof e == 'boolean' ? e : Zr(e), n];
    },
    useSyncExternalStore: js,
    useId: ic,
    useHostTransitionStatus: ri,
    useFormState: Qs,
    useActionState: Qs,
    useOptimistic: function (e, n) {
      var t = ke();
      return ae !== null
        ? Is(t, ae, e, n)
        : ((t.baseState = e), [e, t.queue.dispatch]);
    },
    useMemoCache: Ko,
    useCacheRefresh: uc,
  };
  pc.useEffectEvent = Xs;
  function oi(e, n, t, r) {
    ((n = e.memoizedState),
      (t = t(r, n)),
      (t = t == null ? n : D({}, n, t)),
      (e.memoizedState = t),
      e.lanes === 0 && (e.updateQueue.baseState = t));
  }
  var ii = {
    enqueueSetState: function (e, n, t) {
      e = e._reactInternals;
      var r = an(),
        l = at(r);
      ((l.payload = n),
        t != null && (l.callback = t),
        (n = ot(e, l, r)),
        n !== null && (Ke(n, e, r), Kr(n, e, r)));
    },
    enqueueReplaceState: function (e, n, t) {
      e = e._reactInternals;
      var r = an(),
        l = at(r);
      ((l.tag = 1),
        (l.payload = n),
        t != null && (l.callback = t),
        (n = ot(e, l, r)),
        n !== null && (Ke(n, e, r), Kr(n, e, r)));
    },
    enqueueForceUpdate: function (e, n) {
      e = e._reactInternals;
      var t = an(),
        r = at(t);
      ((r.tag = 2),
        n != null && (r.callback = n),
        (n = ot(e, r, t)),
        n !== null && (Ke(n, e, t), Kr(n, e, t)));
    },
  };
  function mc(e, n, t, r, l, a, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == 'function'
        ? e.shouldComponentUpdate(r, a, o)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Hr(t, r) || !Hr(l, a)
          : !0
    );
  }
  function hc(e, n, t, r) {
    ((e = n.state),
      typeof n.componentWillReceiveProps == 'function' &&
        n.componentWillReceiveProps(t, r),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(t, r),
      n.state !== e && ii.enqueueReplaceState(n, n.state, null));
  }
  function Mt(e, n) {
    var t = n;
    if ('ref' in n) {
      t = {};
      for (var r in n) r !== 'ref' && (t[r] = n[r]);
    }
    if ((e = e.defaultProps)) {
      t === n && (t = D({}, t));
      for (var l in e) t[l] === void 0 && (t[l] = e[l]);
    }
    return t;
  }
  function gc(e) {
    Il(e);
  }
  function yc(e) {
    console.error(e);
  }
  function vc(e) {
    Il(e);
  }
  function ia(e, n) {
    try {
      var t = e.onUncaughtError;
      t(n.value, { componentStack: n.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function bc(e, n, t) {
    try {
      var r = e.onCaughtError;
      r(t.value, {
        componentStack: t.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function ui(e, n, t) {
    return (
      (t = at(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        ia(e, n);
      }),
      t
    );
  }
  function kc(e) {
    return ((e = at(e)), (e.tag = 3), e);
  }
  function wc(e, n, t, r) {
    var l = t.type.getDerivedStateFromError;
    if (typeof l == 'function') {
      var a = r.value;
      ((e.payload = function () {
        return l(a);
      }),
        (e.callback = function () {
          bc(n, t, r);
        }));
    }
    var o = t.stateNode;
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (e.callback = function () {
        (bc(n, t, r),
          typeof l != 'function' &&
            (dt === null ? (dt = new Set([this])) : dt.add(this)));
        var i = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: i !== null ? i : '',
        });
      });
  }
  function Qp(e, n, t, r, l) {
    if (
      ((t.flags |= 32768),
      r !== null && typeof r == 'object' && typeof r.then == 'function')
    ) {
      if (
        ((n = t.alternate),
        n !== null && or(n, t, l, !0),
        (t = nn.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 31:
          case 13:
            return (
              bn === null ? ba() : t.alternate === null && ge === 0 && (ge = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = l),
              r === Kl
                ? (t.flags |= 16384)
                : ((n = t.updateQueue),
                  n === null ? (t.updateQueue = new Set([r])) : n.add(r),
                  Oi(e, r, l)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              r === Kl
                ? (t.flags |= 16384)
                : ((n = t.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (t.updateQueue = n))
                    : ((t = n.retryQueue),
                      t === null ? (n.retryQueue = new Set([r])) : t.add(r)),
                  Oi(e, r, l)),
              !1
            );
        }
        throw Error(u(435, t.tag));
      }
      return (Oi(e, r, l), ba(), !1);
    }
    if (G)
      return (
        (n = nn.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = l),
            r !== zo && ((e = Error(u(422), { cause: r })), qr(cn(e, t))))
          : (r !== zo && ((n = Error(u(423), { cause: r })), qr(cn(n, t))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (r = cn(r, t)),
            (l = ui(e.stateNode, r, l)),
            Io(e, l),
            ge !== 4 && (ge = 2)),
        !1
      );
    var a = Error(u(520), { cause: r });
    if (
      ((a = cn(a, t)),
      ul === null ? (ul = [a]) : ul.push(a),
      ge !== 4 && (ge = 2),
      n === null)
    )
      return !0;
    ((r = cn(r, t)), (t = n));
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (e = l & -l),
            (t.lanes |= e),
            (e = ui(t.stateNode, r, e)),
            Io(t, e),
            !1
          );
        case 1:
          if (
            ((n = t.type),
            (a = t.stateNode),
            (t.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == 'function' ||
                (a !== null &&
                  typeof a.componentDidCatch == 'function' &&
                  (dt === null || !dt.has(a)))))
          )
            return (
              (t.flags |= 65536),
              (l &= -l),
              (t.lanes |= l),
              (l = kc(l)),
              wc(l, e, t, r),
              Io(t, l),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var si = Error(u(461)),
    xe = !1;
  function Le(e, n, t, r) {
    n.child = e === null ? Cs(n, null, t, r) : Ft(n, e.child, t, r);
  }
  function Sc(e, n, t, r, l) {
    t = t.render;
    var a = n.ref;
    if ('ref' in r) {
      var o = {};
      for (var i in r) i !== 'ref' && (o[i] = r[i]);
    } else o = r;
    return (
      Ot(n),
      (r = Vo(e, n, t, o, a, l)),
      (i = $o()),
      e !== null && !xe
        ? (Wo(e, n, l), Un(e, n, l))
        : (G && i && Co(n), (n.flags |= 1), Le(e, n, r, l), n.child)
    );
  }
  function xc(e, n, t, r, l) {
    if (e === null) {
      var a = t.type;
      return typeof a == 'function' &&
        !So(a) &&
        a.defaultProps === void 0 &&
        t.compare === null
        ? ((n.tag = 15), (n.type = a), Ec(e, n, a, r, l))
        : ((e = Bl(t.type, null, r, n, n.mode, l)),
          (e.ref = n.ref),
          (e.return = n),
          (n.child = e));
    }
    if (((a = e.child), !yi(e, l))) {
      var o = a.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Hr), t(o, r) && e.ref === n.ref)
      )
        return Un(e, n, l);
    }
    return (
      (n.flags |= 1),
      (e = Dn(a, r)),
      (e.ref = n.ref),
      (e.return = n),
      (n.child = e)
    );
  }
  function Ec(e, n, t, r, l) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (Hr(a, r) && e.ref === n.ref)
        if (((xe = !1), (n.pendingProps = r = a), yi(e, l)))
          (e.flags & 131072) !== 0 && (xe = !0);
        else return ((n.lanes = e.lanes), Un(e, n, l));
    }
    return ci(e, n, t, r, l);
  }
  function Cc(e, n, t, r) {
    var l = r.children,
      a = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        n.stateNode === null &&
        (n.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      r.mode === 'hidden')
    ) {
      if ((n.flags & 128) !== 0) {
        if (((a = a !== null ? a.baseLanes | t : t), e !== null)) {
          for (r = n.child = e.child, l = 0; r !== null; )
            ((l = l | r.lanes | r.childLanes), (r = r.sibling));
          r = l & ~a;
        } else ((r = 0), (n.child = null));
        return Nc(e, n, a, t, r);
      }
      if ((t & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Wl(n, a !== null ? a.cachePool : null),
          a !== null ? Ps(n, a) : Ho(),
          _s(n));
      else
        return (
          (r = n.lanes = 536870912),
          Nc(e, n, a !== null ? a.baseLanes | t : t, t, r)
        );
    } else
      a !== null
        ? (Wl(n, a.cachePool), Ps(n, a), ut(), (n.memoizedState = null))
        : (e !== null && Wl(n, null), Ho(), ut());
    return (Le(e, n, l, t), n.child);
  }
  function nl(e, n) {
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
  function Nc(e, n, t, r, l) {
    var a = Ro();
    return (
      (a = a === null ? null : { parent: we._currentValue, pool: a }),
      (n.memoizedState = { baseLanes: t, cachePool: a }),
      e !== null && Wl(n, null),
      Ho(),
      _s(n),
      e !== null && or(e, n, r, !0),
      (n.childLanes = l),
      null
    );
  }
  function ua(e, n) {
    return (
      (n = ca({ mode: n.mode, children: n.children }, e.mode)),
      (n.ref = e.ref),
      (e.child = n),
      (n.return = e),
      n
    );
  }
  function zc(e, n, t) {
    return (
      Ft(n, e.child, null, t),
      (e = ua(n, n.pendingProps)),
      (e.flags |= 2),
      tn(n),
      (n.memoizedState = null),
      e
    );
  }
  function Kp(e, n, t) {
    var r = n.pendingProps,
      l = (n.flags & 128) !== 0;
    if (((n.flags &= -129), e === null)) {
      if (G) {
        if (r.mode === 'hidden')
          return ((e = ua(n, r)), (n.lanes = 536870912), nl(null, e));
        if (
          (Bo(n),
          (e = de)
            ? ((e = Hf(e, pn)),
              (e = e !== null && e.data === '&' ? e : null),
              e !== null &&
                ((n.memoizedState = {
                  dehydrated: e,
                  treeContext: et !== null ? { id: Nn, overflow: zn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = cs(e)),
                (t.return = n),
                (n.child = t),
                (_e = n),
                (de = null)))
            : (e = null),
          e === null)
        )
          throw tt(n);
        return ((n.lanes = 536870912), null);
      }
      return ua(n, r);
    }
    var a = e.memoizedState;
    if (a !== null) {
      var o = a.dehydrated;
      if ((Bo(n), l))
        if (n.flags & 256) ((n.flags &= -257), (n = zc(e, n, t)));
        else if (n.memoizedState !== null)
          ((n.child = e.child), (n.flags |= 128), (n = null));
        else throw Error(u(558));
      else if (
        (xe || or(e, n, t, !1), (l = (t & e.childLanes) !== 0), xe || l)
      ) {
        if (
          ((r = ce),
          r !== null && ((o = yu(r, t)), o !== 0 && o !== a.retryLane))
        )
          throw ((a.retryLane = o), _t(e, o), Ke(r, e, o), si);
        (ba(), (n = zc(e, n, t)));
      } else
        ((e = a.treeContext),
          (de = mn(o.nextSibling)),
          (_e = n),
          (G = !0),
          (nt = null),
          (pn = !1),
          e !== null && ps(n, e),
          (n = ua(n, r)),
          (n.flags |= 4096));
      return n;
    }
    return (
      (e = Dn(e.child, { mode: r.mode, children: r.children })),
      (e.ref = n.ref),
      (n.child = e),
      (e.return = n),
      e
    );
  }
  function sa(e, n) {
    var t = n.ref;
    if (t === null) e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof t != 'function' && typeof t != 'object') throw Error(u(284));
      (e === null || e.ref !== t) && (n.flags |= 4194816);
    }
  }
  function ci(e, n, t, r, l) {
    return (
      Ot(n),
      (t = Vo(e, n, t, r, void 0, l)),
      (r = $o()),
      e !== null && !xe
        ? (Wo(e, n, l), Un(e, n, l))
        : (G && r && Co(n), (n.flags |= 1), Le(e, n, t, l), n.child)
    );
  }
  function Pc(e, n, t, r, l, a) {
    return (
      Ot(n),
      (n.updateQueue = null),
      (t = Ls(n, r, t, l)),
      Ts(e),
      (r = $o()),
      e !== null && !xe
        ? (Wo(e, n, a), Un(e, n, a))
        : (G && r && Co(n), (n.flags |= 1), Le(e, n, t, a), n.child)
    );
  }
  function _c(e, n, t, r, l) {
    if ((Ot(n), n.stateNode === null)) {
      var a = tr,
        o = t.contextType;
      (typeof o == 'object' && o !== null && (a = Te(o)),
        (a = new t(r, a)),
        (n.memoizedState =
          a.state !== null && a.state !== void 0 ? a.state : null),
        (a.updater = ii),
        (n.stateNode = a),
        (a._reactInternals = n),
        (a = n.stateNode),
        (a.props = r),
        (a.state = n.memoizedState),
        (a.refs = {}),
        Ao(n),
        (o = t.contextType),
        (a.context = typeof o == 'object' && o !== null ? Te(o) : tr),
        (a.state = n.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == 'function' && (oi(n, t, o, r), (a.state = n.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
          typeof a.getSnapshotBeforeUpdate == 'function' ||
          (typeof a.UNSAFE_componentWillMount != 'function' &&
            typeof a.componentWillMount != 'function') ||
          ((o = a.state),
          typeof a.componentWillMount == 'function' && a.componentWillMount(),
          typeof a.UNSAFE_componentWillMount == 'function' &&
            a.UNSAFE_componentWillMount(),
          o !== a.state && ii.enqueueReplaceState(a, a.state, null),
          Xr(n, r, a, l),
          Gr(),
          (a.state = n.memoizedState)),
        typeof a.componentDidMount == 'function' && (n.flags |= 4194308),
        (r = !0));
    } else if (e === null) {
      a = n.stateNode;
      var i = n.memoizedProps,
        s = Mt(t, i);
      a.props = s;
      var m = a.context,
        y = t.contextType;
      ((o = tr), typeof y == 'object' && y !== null && (o = Te(y)));
      var w = t.getDerivedStateFromProps;
      ((y =
        typeof w == 'function' ||
        typeof a.getSnapshotBeforeUpdate == 'function'),
        (i = n.pendingProps !== i),
        y ||
          (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof a.componentWillReceiveProps != 'function') ||
          ((i || m !== o) && hc(n, a, r, o)),
        (lt = !1));
      var h = n.memoizedState;
      ((a.state = h),
        Xr(n, r, a, l),
        Gr(),
        (m = n.memoizedState),
        i || h !== m || lt
          ? (typeof w == 'function' && (oi(n, t, w, r), (m = n.memoizedState)),
            (s = lt || mc(n, t, s, r, h, m, o))
              ? (y ||
                  (typeof a.UNSAFE_componentWillMount != 'function' &&
                    typeof a.componentWillMount != 'function') ||
                  (typeof a.componentWillMount == 'function' &&
                    a.componentWillMount(),
                  typeof a.UNSAFE_componentWillMount == 'function' &&
                    a.UNSAFE_componentWillMount()),
                typeof a.componentDidMount == 'function' &&
                  (n.flags |= 4194308))
              : (typeof a.componentDidMount == 'function' &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = m)),
            (a.props = r),
            (a.state = m),
            (a.context = o),
            (r = s))
          : (typeof a.componentDidMount == 'function' && (n.flags |= 4194308),
            (r = !1)));
    } else {
      ((a = n.stateNode),
        Fo(e, n),
        (o = n.memoizedProps),
        (y = Mt(t, o)),
        (a.props = y),
        (w = n.pendingProps),
        (h = a.context),
        (m = t.contextType),
        (s = tr),
        typeof m == 'object' && m !== null && (s = Te(m)),
        (i = t.getDerivedStateFromProps),
        (m =
          typeof i == 'function' ||
          typeof a.getSnapshotBeforeUpdate == 'function') ||
          (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof a.componentWillReceiveProps != 'function') ||
          ((o !== w || h !== s) && hc(n, a, r, s)),
        (lt = !1),
        (h = n.memoizedState),
        (a.state = h),
        Xr(n, r, a, l),
        Gr());
      var g = n.memoizedState;
      o !== w ||
      h !== g ||
      lt ||
      (e !== null && e.dependencies !== null && Vl(e.dependencies))
        ? (typeof i == 'function' && (oi(n, t, i, r), (g = n.memoizedState)),
          (y =
            lt ||
            mc(n, t, y, r, h, g, s) ||
            (e !== null && e.dependencies !== null && Vl(e.dependencies)))
            ? (m ||
                (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                  typeof a.componentWillUpdate != 'function') ||
                (typeof a.componentWillUpdate == 'function' &&
                  a.componentWillUpdate(r, g, s),
                typeof a.UNSAFE_componentWillUpdate == 'function' &&
                  a.UNSAFE_componentWillUpdate(r, g, s)),
              typeof a.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof a.getSnapshotBeforeUpdate == 'function' &&
                (n.flags |= 1024))
            : (typeof a.componentDidUpdate != 'function' ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != 'function' ||
                (o === e.memoizedProps && h === e.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = g)),
          (a.props = r),
          (a.state = g),
          (a.context = s),
          (r = y))
        : (typeof a.componentDidUpdate != 'function' ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 4),
          typeof a.getSnapshotBeforeUpdate != 'function' ||
            (o === e.memoizedProps && h === e.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return (
      (a = r),
      sa(e, n),
      (r = (n.flags & 128) !== 0),
      a || r
        ? ((a = n.stateNode),
          (t =
            r && typeof t.getDerivedStateFromError != 'function'
              ? null
              : a.render()),
          (n.flags |= 1),
          e !== null && r
            ? ((n.child = Ft(n, e.child, null, l)),
              (n.child = Ft(n, null, t, l)))
            : Le(e, n, t, l),
          (n.memoizedState = a.state),
          (e = n.child))
        : (e = Un(e, n, l)),
      e
    );
  }
  function Tc(e, n, t, r) {
    return (Lt(), (n.flags |= 256), Le(e, n, t, r), n.child);
  }
  var fi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function di(e) {
    return { baseLanes: e, cachePool: bs() };
  }
  function pi(e, n, t) {
    return ((e = e !== null ? e.childLanes & ~t : 0), n && (e |= ln), e);
  }
  function Lc(e, n, t) {
    var r = n.pendingProps,
      l = !1,
      a = (n.flags & 128) !== 0,
      o;
    if (
      ((o = a) ||
        (o =
          e !== null && e.memoizedState === null ? !1 : (be.current & 2) !== 0),
      o && ((l = !0), (n.flags &= -129)),
      (o = (n.flags & 32) !== 0),
      (n.flags &= -33),
      e === null)
    ) {
      if (G) {
        if (
          (l ? it(n) : ut(),
          (e = de)
            ? ((e = Hf(e, pn)),
              (e = e !== null && e.data !== '&' ? e : null),
              e !== null &&
                ((n.memoizedState = {
                  dehydrated: e,
                  treeContext: et !== null ? { id: Nn, overflow: zn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = cs(e)),
                (t.return = n),
                (n.child = t),
                (_e = n),
                (de = null)))
            : (e = null),
          e === null)
        )
          throw tt(n);
        return (Gi(e) ? (n.lanes = 32) : (n.lanes = 536870912), null);
      }
      var i = r.children;
      return (
        (r = r.fallback),
        l
          ? (ut(),
            (l = n.mode),
            (i = ca({ mode: 'hidden', children: i }, l)),
            (r = Tt(r, l, t, null)),
            (i.return = n),
            (r.return = n),
            (i.sibling = r),
            (n.child = i),
            (r = n.child),
            (r.memoizedState = di(t)),
            (r.childLanes = pi(e, o, t)),
            (n.memoizedState = fi),
            nl(null, r))
          : (it(n), mi(n, i))
      );
    }
    var s = e.memoizedState;
    if (s !== null && ((i = s.dehydrated), i !== null)) {
      if (a)
        n.flags & 256
          ? (it(n), (n.flags &= -257), (n = hi(e, n, t)))
          : n.memoizedState !== null
            ? (ut(), (n.child = e.child), (n.flags |= 128), (n = null))
            : (ut(),
              (i = r.fallback),
              (l = n.mode),
              (r = ca({ mode: 'visible', children: r.children }, l)),
              (i = Tt(i, l, t, null)),
              (i.flags |= 2),
              (r.return = n),
              (i.return = n),
              (r.sibling = i),
              (n.child = r),
              Ft(n, e.child, null, t),
              (r = n.child),
              (r.memoizedState = di(t)),
              (r.childLanes = pi(e, o, t)),
              (n.memoizedState = fi),
              (n = nl(null, r)));
      else if ((it(n), Gi(i))) {
        if (((o = i.nextSibling && i.nextSibling.dataset), o)) var m = o.dgst;
        ((o = m),
          (r = Error(u(419))),
          (r.stack = ''),
          (r.digest = o),
          qr({ value: r, source: null, stack: null }),
          (n = hi(e, n, t)));
      } else if (
        (xe || or(e, n, t, !1), (o = (t & e.childLanes) !== 0), xe || o)
      ) {
        if (
          ((o = ce),
          o !== null && ((r = yu(o, t)), r !== 0 && r !== s.retryLane))
        )
          throw ((s.retryLane = r), _t(e, r), Ke(o, e, r), si);
        (Ki(i) || ba(), (n = hi(e, n, t)));
      } else
        Ki(i)
          ? ((n.flags |= 192), (n.child = e.child), (n = null))
          : ((e = s.treeContext),
            (de = mn(i.nextSibling)),
            (_e = n),
            (G = !0),
            (nt = null),
            (pn = !1),
            e !== null && ps(n, e),
            (n = mi(n, r.children)),
            (n.flags |= 4096));
      return n;
    }
    return l
      ? (ut(),
        (i = r.fallback),
        (l = n.mode),
        (s = e.child),
        (m = s.sibling),
        (r = Dn(s, { mode: 'hidden', children: r.children })),
        (r.subtreeFlags = s.subtreeFlags & 65011712),
        m !== null ? (i = Dn(m, i)) : ((i = Tt(i, l, t, null)), (i.flags |= 2)),
        (i.return = n),
        (r.return = n),
        (r.sibling = i),
        (n.child = r),
        nl(null, r),
        (r = n.child),
        (i = e.child.memoizedState),
        i === null
          ? (i = di(t))
          : ((l = i.cachePool),
            l !== null
              ? ((s = we._currentValue),
                (l = l.parent !== s ? { parent: s, pool: s } : l))
              : (l = bs()),
            (i = { baseLanes: i.baseLanes | t, cachePool: l })),
        (r.memoizedState = i),
        (r.childLanes = pi(e, o, t)),
        (n.memoizedState = fi),
        nl(e.child, r))
      : (it(n),
        (t = e.child),
        (e = t.sibling),
        (t = Dn(t, { mode: 'visible', children: r.children })),
        (t.return = n),
        (t.sibling = null),
        e !== null &&
          ((o = n.deletions),
          o === null ? ((n.deletions = [e]), (n.flags |= 16)) : o.push(e)),
        (n.child = t),
        (n.memoizedState = null),
        t);
  }
  function mi(e, n) {
    return (
      (n = ca({ mode: 'visible', children: n }, e.mode)),
      (n.return = e),
      (e.child = n)
    );
  }
  function ca(e, n) {
    return ((e = en(22, e, null, n)), (e.lanes = 0), e);
  }
  function hi(e, n, t) {
    return (
      Ft(n, e.child, null, t),
      (e = mi(n, n.pendingProps.children)),
      (e.flags |= 2),
      (n.memoizedState = null),
      e
    );
  }
  function jc(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    (r !== null && (r.lanes |= n), To(e.return, n, t));
  }
  function gi(e, n, t, r, l, a) {
    var o = e.memoizedState;
    o === null
      ? (e.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: t,
          tailMode: l,
          treeForkCount: a,
        })
      : ((o.isBackwards = n),
        (o.rendering = null),
        (o.renderingStartTime = 0),
        (o.last = r),
        (o.tail = t),
        (o.tailMode = l),
        (o.treeForkCount = a));
  }
  function Oc(e, n, t) {
    var r = n.pendingProps,
      l = r.revealOrder,
      a = r.tail;
    r = r.children;
    var o = be.current,
      i = (o & 2) !== 0;
    if (
      (i ? ((o = (o & 1) | 2), (n.flags |= 128)) : (o &= 1),
      z(be, o),
      Le(e, n, r, t),
      (r = G ? Br : 0),
      !i && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jc(e, t, n);
        else if (e.tag === 19) jc(e, t, n);
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
    switch (l) {
      case 'forwards':
        for (t = n.child, l = null; t !== null; )
          ((e = t.alternate),
            e !== null && Zl(e) === null && (l = t),
            (t = t.sibling));
        ((t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          gi(n, !1, l, t, a, r));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Zl(e) === null)) {
            n.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = t), (t = l), (l = e));
        }
        gi(n, !0, t, null, a, r);
        break;
      case 'together':
        gi(n, !1, null, null, void 0, r);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function Un(e, n, t) {
    if (
      (e !== null && (n.dependencies = e.dependencies),
      (ft |= n.lanes),
      (t & n.childLanes) === 0)
    )
      if (e !== null) {
        if ((or(e, n, t, !1), (t & n.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && n.child !== e.child) throw Error(u(153));
    if (n.child !== null) {
      for (
        e = n.child, t = Dn(e, e.pendingProps), n.child = t, t.return = n;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (t = t.sibling = Dn(e, e.pendingProps)),
          (t.return = n));
      t.sibling = null;
    }
    return n.child;
  }
  function yi(e, n) {
    return (e.lanes & n) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Vl(e)));
  }
  function Gp(e, n, t) {
    switch (n.tag) {
      case 3:
        (Ae(n, n.stateNode.containerInfo),
          rt(n, we, e.memoizedState.cache),
          Lt());
        break;
      case 27:
      case 5:
        zr(n);
        break;
      case 4:
        Ae(n, n.stateNode.containerInfo);
        break;
      case 10:
        rt(n, n.type, n.memoizedProps.value);
        break;
      case 31:
        if (n.memoizedState !== null) return ((n.flags |= 128), Bo(n), null);
        break;
      case 13:
        var r = n.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (it(n), (n.flags |= 128), null)
            : (t & n.child.childLanes) !== 0
              ? Lc(e, n, t)
              : (it(n), (e = Un(e, n, t)), e !== null ? e.sibling : null);
        it(n);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (
          ((r = (t & n.childLanes) !== 0),
          r || (or(e, n, t, !1), (r = (t & n.childLanes) !== 0)),
          l)
        ) {
          if (r) return Oc(e, n, t);
          n.flags |= 128;
        }
        if (
          ((l = n.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          z(be, be.current),
          r)
        )
          break;
        return null;
      case 22:
        return ((n.lanes = 0), Cc(e, n, t, n.pendingProps));
      case 24:
        rt(n, we, e.memoizedState.cache);
    }
    return Un(e, n, t);
  }
  function Rc(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps) xe = !0;
      else {
        if (!yi(e, t) && (n.flags & 128) === 0) return ((xe = !1), Gp(e, n, t));
        xe = (e.flags & 131072) !== 0;
      }
    else ((xe = !1), G && (n.flags & 1048576) !== 0 && ds(n, Br, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        e: {
          var r = n.pendingProps;
          if (((e = Dt(n.elementType)), (n.type = e), typeof e == 'function'))
            So(e)
              ? ((r = Mt(e, r)), (n.tag = 1), (n = _c(null, n, e, r, t)))
              : ((n.tag = 0), (n = ci(null, n, e, r, t)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === on) {
                ((n.tag = 11), (n = Sc(null, n, e, r, t)));
                break e;
              } else if (l === K) {
                ((n.tag = 14), (n = xc(null, n, e, r, t)));
                break e;
              }
            }
            throw ((n = Ln(e) || e), Error(u(306, n, '')));
          }
        }
        return n;
      case 0:
        return ci(e, n, n.type, n.pendingProps, t);
      case 1:
        return ((r = n.type), (l = Mt(r, n.pendingProps)), _c(e, n, r, l, t));
      case 3:
        e: {
          if ((Ae(n, n.stateNode.containerInfo), e === null))
            throw Error(u(387));
          r = n.pendingProps;
          var a = n.memoizedState;
          ((l = a.element), Fo(e, n), Xr(n, r, null, t));
          var o = n.memoizedState;
          if (
            ((r = o.cache),
            rt(n, we, r),
            r !== a.cache && Lo(n, [we], t, !0),
            Gr(),
            (r = o.element),
            a.isDehydrated)
          )
            if (
              ((a = { element: r, isDehydrated: !1, cache: o.cache }),
              (n.updateQueue.baseState = a),
              (n.memoizedState = a),
              n.flags & 256)
            ) {
              n = Tc(e, n, r, t);
              break e;
            } else if (r !== l) {
              ((l = cn(Error(u(424)), n)), qr(l), (n = Tc(e, n, r, t)));
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
                  _e = n,
                  G = !0,
                  nt = null,
                  pn = !0,
                  t = Cs(n, null, r, t),
                  n.child = t;
                t;

              )
                ((t.flags = (t.flags & -3) | 4096), (t = t.sibling));
            }
          else {
            if ((Lt(), r === l)) {
              n = Un(e, n, t);
              break e;
            }
            Le(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          sa(e, n),
          e === null
            ? (t = Wf(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = t)
              : G ||
                ((t = n.type),
                (e = n.pendingProps),
                (r = Na(q.current).createElement(t)),
                (r[Pe] = n),
                (r[Be] = e),
                je(r, t, e),
                Ne(r),
                (n.stateNode = r))
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
          zr(n),
          e === null &&
            G &&
            ((r = n.stateNode = qf(n.type, n.pendingProps, q.current)),
            (_e = n),
            (pn = !0),
            (l = de),
            gt(n.type) ? ((Xi = l), (de = mn(r.firstChild))) : (de = l)),
          Le(e, n, n.pendingProps.children, t),
          sa(e, n),
          e === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          e === null &&
            G &&
            ((l = r = de) &&
              ((r = Cm(r, n.type, n.pendingProps, pn)),
              r !== null
                ? ((n.stateNode = r),
                  (_e = n),
                  (de = mn(r.firstChild)),
                  (pn = !1),
                  (l = !0))
                : (l = !1)),
            l || tt(n)),
          zr(n),
          (l = n.type),
          (a = n.pendingProps),
          (o = e !== null ? e.memoizedProps : null),
          (r = a.children),
          $i(l, a) ? (r = null) : o !== null && $i(l, o) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((l = Vo(e, n, Hp, null, null, t)), (gl._currentValue = l)),
          sa(e, n),
          Le(e, n, r, t),
          n.child
        );
      case 6:
        return (
          e === null &&
            G &&
            ((e = t = de) &&
              ((t = Nm(t, n.pendingProps, pn)),
              t !== null
                ? ((n.stateNode = t), (_e = n), (de = null), (e = !0))
                : (e = !1)),
            e || tt(n)),
          null
        );
      case 13:
        return Lc(e, n, t);
      case 4:
        return (
          Ae(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          e === null ? (n.child = Ft(n, null, r, t)) : Le(e, n, r, t),
          n.child
        );
      case 11:
        return Sc(e, n, n.type, n.pendingProps, t);
      case 7:
        return (Le(e, n, n.pendingProps, t), n.child);
      case 8:
        return (Le(e, n, n.pendingProps.children, t), n.child);
      case 12:
        return (Le(e, n, n.pendingProps.children, t), n.child);
      case 10:
        return (
          (r = n.pendingProps),
          rt(n, n.type, r.value),
          Le(e, n, r.children, t),
          n.child
        );
      case 9:
        return (
          (l = n.type._context),
          (r = n.pendingProps.children),
          Ot(n),
          (l = Te(l)),
          (r = r(l)),
          (n.flags |= 1),
          Le(e, n, r, t),
          n.child
        );
      case 14:
        return xc(e, n, n.type, n.pendingProps, t);
      case 15:
        return Ec(e, n, n.type, n.pendingProps, t);
      case 19:
        return Oc(e, n, t);
      case 31:
        return Kp(e, n, t);
      case 22:
        return Cc(e, n, t, n.pendingProps);
      case 24:
        return (
          Ot(n),
          (r = Te(we)),
          e === null
            ? ((l = Ro()),
              l === null &&
                ((l = ce),
                (a = jo()),
                (l.pooledCache = a),
                a.refCount++,
                a !== null && (l.pooledCacheLanes |= t),
                (l = a)),
              (n.memoizedState = { parent: r, cache: l }),
              Ao(n),
              rt(n, we, l))
            : ((e.lanes & t) !== 0 && (Fo(e, n), Xr(n, null, null, t), Gr()),
              (l = e.memoizedState),
              (a = n.memoizedState),
              l.parent !== r
                ? ((l = { parent: r, cache: r }),
                  (n.memoizedState = l),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = l),
                  rt(n, we, r))
                : ((r = a.cache),
                  rt(n, we, r),
                  r !== l.cache && Lo(n, [we], t, !0))),
          Le(e, n, n.pendingProps.children, t),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(u(156, n.tag));
  }
  function Bn(e) {
    e.flags |= 4;
  }
  function vi(e, n, t, r, l) {
    if (((n = (e.mode & 32) !== 0) && (n = !1), n)) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (uf()) e.flags |= 8192;
        else throw ((At = Kl), Do);
    } else e.flags &= -16777217;
  }
  function Dc(e, n) {
    if (n.type !== 'stylesheet' || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Yf(n)))
      if (uf()) e.flags |= 8192;
      else throw ((At = Kl), Do);
  }
  function fa(e, n) {
    (n !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((n = e.tag !== 22 ? mu() : 536870912), (e.lanes |= n), (vr |= n)));
  }
  function tl(e, n) {
    if (!G)
      switch (e.tailMode) {
        case 'hidden':
          n = e.tail;
          for (var t = null; n !== null; )
            (n.alternate !== null && (t = n), (n = n.sibling));
          t === null ? (e.tail = null) : (t.sibling = null);
          break;
        case 'collapsed':
          t = e.tail;
          for (var r = null; t !== null; )
            (t.alternate !== null && (r = t), (t = t.sibling));
          r === null
            ? n || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function pe(e) {
    var n = e.alternate !== null && e.alternate.child === e.child,
      t = 0,
      r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        ((t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags & 65011712),
          (r |= l.flags & 65011712),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((t |= l.lanes | l.childLanes),
          (r |= l.subtreeFlags),
          (r |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= r), (e.childLanes = t), n);
  }
  function Xp(e, n, t) {
    var r = n.pendingProps;
    switch ((No(n), n.tag)) {
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
          (t = n.stateNode),
          (r = null),
          e !== null && (r = e.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          In(we),
          ve(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (e === null || e.child === null) &&
            (ar(n)
              ? Bn(n)
              : e === null ||
                (e.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), Po())),
          pe(n),
          null
        );
      case 26:
        var l = n.type,
          a = n.memoizedState;
        return (
          e === null
            ? (Bn(n),
              a !== null ? (pe(n), Dc(n, a)) : (pe(n), vi(n, l, null, r, t)))
            : a
              ? a !== e.memoizedState
                ? (Bn(n), pe(n), Dc(n, a))
                : (pe(n), (n.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== r && Bn(n),
                pe(n),
                vi(n, l, e, r, t)),
          null
        );
      case 27:
        if (
          (Sl(n),
          (t = q.current),
          (l = n.type),
          e !== null && n.stateNode != null)
        )
          e.memoizedProps !== r && Bn(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(u(166));
            return (pe(n), null);
          }
          ((e = _.current),
            ar(n) ? ms(n) : ((e = qf(l, r, t)), (n.stateNode = e), Bn(n)));
        }
        return (pe(n), null);
      case 5:
        if ((Sl(n), (l = n.type), e !== null && n.stateNode != null))
          e.memoizedProps !== r && Bn(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(u(166));
            return (pe(n), null);
          }
          if (((a = _.current), ar(n))) ms(n);
          else {
            var o = Na(q.current);
            switch (a) {
              case 1:
                a = o.createElementNS('http://www.w3.org/2000/svg', l);
                break;
              case 2:
                a = o.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                break;
              default:
                switch (l) {
                  case 'svg':
                    a = o.createElementNS('http://www.w3.org/2000/svg', l);
                    break;
                  case 'math':
                    a = o.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      l,
                    );
                    break;
                  case 'script':
                    ((a = o.createElement('div')),
                      (a.innerHTML = '<script><\/script>'),
                      (a = a.removeChild(a.firstChild)));
                    break;
                  case 'select':
                    ((a =
                      typeof r.is == 'string'
                        ? o.createElement('select', { is: r.is })
                        : o.createElement('select')),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size));
                    break;
                  default:
                    a =
                      typeof r.is == 'string'
                        ? o.createElement(l, { is: r.is })
                        : o.createElement(l);
                }
            }
            ((a[Pe] = n), (a[Be] = r));
            e: for (o = n.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6) a.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                ((o.child.return = o), (o = o.child));
                continue;
              }
              if (o === n) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === n) break e;
                o = o.return;
              }
              ((o.sibling.return = o.return), (o = o.sibling));
            }
            n.stateNode = a;
            e: switch ((je(a, l, r), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
            r && Bn(n);
          }
        }
        return (
          pe(n),
          vi(n, n.type, e === null ? null : e.memoizedProps, n.pendingProps, t),
          null
        );
      case 6:
        if (e && n.stateNode != null) e.memoizedProps !== r && Bn(n);
        else {
          if (typeof r != 'string' && n.stateNode === null) throw Error(u(166));
          if (((e = q.current), ar(n))) {
            if (
              ((e = n.stateNode),
              (t = n.memoizedProps),
              (r = null),
              (l = _e),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  r = l.memoizedProps;
              }
            ((e[Pe] = n),
              (e = !!(
                e.nodeValue === t ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                jf(e.nodeValue, t)
              )),
              e || tt(n, !0));
          } else
            ((e = Na(e).createTextNode(r)), (e[Pe] = n), (n.stateNode = e));
        }
        return (pe(n), null);
      case 31:
        if (((t = n.memoizedState), e === null || e.memoizedState !== null)) {
          if (((r = ar(n)), t !== null)) {
            if (e === null) {
              if (!r) throw Error(u(318));
              if (
                ((e = n.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(u(557));
              e[Pe] = n;
            } else
              (Lt(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (pe(n), (e = !1));
          } else
            ((t = Po()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = t),
              (e = !0));
          if (!e) return n.flags & 256 ? (tn(n), n) : (tn(n), null);
          if ((n.flags & 128) !== 0) throw Error(u(558));
        }
        return (pe(n), null);
      case 13:
        if (
          ((r = n.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = ar(n)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(u(318));
              if (
                ((l = n.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(u(317));
              l[Pe] = n;
            } else
              (Lt(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (pe(n), (l = !1));
          } else
            ((l = Po()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return n.flags & 256 ? (tn(n), n) : (tn(n), null);
        }
        return (
          tn(n),
          (n.flags & 128) !== 0
            ? ((n.lanes = t), n)
            : ((t = r !== null),
              (e = e !== null && e.memoizedState !== null),
              t &&
                ((r = n.child),
                (l = null),
                r.alternate !== null &&
                  r.alternate.memoizedState !== null &&
                  r.alternate.memoizedState.cachePool !== null &&
                  (l = r.alternate.memoizedState.cachePool.pool),
                (a = null),
                r.memoizedState !== null &&
                  r.memoizedState.cachePool !== null &&
                  (a = r.memoizedState.cachePool.pool),
                a !== l && (r.flags |= 2048)),
              t !== e && t && (n.child.flags |= 8192),
              fa(n, n.updateQueue),
              pe(n),
              null)
        );
      case 4:
        return (ve(), e === null && Hi(n.stateNode.containerInfo), pe(n), null);
      case 10:
        return (In(n.type), pe(n), null);
      case 19:
        if ((S(be), (r = n.memoizedState), r === null)) return (pe(n), null);
        if (((l = (n.flags & 128) !== 0), (a = r.rendering), a === null))
          if (l) tl(r, !1);
          else {
            if (ge !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = n.child; e !== null; ) {
                if (((a = Zl(e)), a !== null)) {
                  for (
                    n.flags |= 128,
                      tl(r, !1),
                      e = a.updateQueue,
                      n.updateQueue = e,
                      fa(n, e),
                      n.subtreeFlags = 0,
                      e = t,
                      t = n.child;
                    t !== null;

                  )
                    (ss(t, e), (t = t.sibling));
                  return (
                    z(be, (be.current & 1) | 2),
                    G && An(n, r.treeForkCount),
                    n.child
                  );
                }
                e = e.sibling;
              }
            r.tail !== null &&
              Xe() > ga &&
              ((n.flags |= 128), (l = !0), tl(r, !1), (n.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = Zl(a)), e !== null)) {
              if (
                ((n.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (n.updateQueue = e),
                fa(n, e),
                tl(r, !0),
                r.tail === null &&
                  r.tailMode === 'hidden' &&
                  !a.alternate &&
                  !G)
              )
                return (pe(n), null);
            } else
              2 * Xe() - r.renderingStartTime > ga &&
                t !== 536870912 &&
                ((n.flags |= 128), (l = !0), tl(r, !1), (n.lanes = 4194304));
          r.isBackwards
            ? ((a.sibling = n.child), (n.child = a))
            : ((e = r.last),
              e !== null ? (e.sibling = a) : (n.child = a),
              (r.last = a));
        }
        return r.tail !== null
          ? ((e = r.tail),
            (r.rendering = e),
            (r.tail = e.sibling),
            (r.renderingStartTime = Xe()),
            (e.sibling = null),
            (t = be.current),
            z(be, l ? (t & 1) | 2 : t & 1),
            G && An(n, r.treeForkCount),
            e)
          : (pe(n), null);
      case 22:
      case 23:
        return (
          tn(n),
          Uo(),
          (r = n.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== r && (n.flags |= 8192)
            : r && (n.flags |= 8192),
          r
            ? (t & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (pe(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : pe(n),
          (t = n.updateQueue),
          t !== null && fa(n, t.retryQueue),
          (t = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (t = e.memoizedState.cachePool.pool),
          (r = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (r = n.memoizedState.cachePool.pool),
          r !== t && (n.flags |= 2048),
          e !== null && S(Rt),
          null
        );
      case 24:
        return (
          (t = null),
          e !== null && (t = e.memoizedState.cache),
          n.memoizedState.cache !== t && (n.flags |= 2048),
          In(we),
          pe(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(u(156, n.tag));
  }
  function Yp(e, n) {
    switch ((No(n), n.tag)) {
      case 1:
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 3:
        return (
          In(we),
          ve(),
          (e = n.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((n.flags = (e & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Sl(n), null);
      case 31:
        if (n.memoizedState !== null) {
          if ((tn(n), n.alternate === null)) throw Error(u(340));
          Lt();
        }
        return (
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 13:
        if (
          (tn(n), (e = n.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(u(340));
          Lt();
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
        return (In(n.type), null);
      case 22:
      case 23:
        return (
          tn(n),
          Uo(),
          e !== null && S(Rt),
          (e = n.flags),
          e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
        );
      case 24:
        return (In(we), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ac(e, n) {
    switch ((No(n), n.tag)) {
      case 3:
        (In(we), ve());
        break;
      case 26:
      case 27:
      case 5:
        Sl(n);
        break;
      case 4:
        ve();
        break;
      case 31:
        n.memoizedState !== null && tn(n);
        break;
      case 13:
        tn(n);
        break;
      case 19:
        S(be);
        break;
      case 10:
        In(n.type);
        break;
      case 22:
      case 23:
        (tn(n), Uo(), e !== null && S(Rt));
        break;
      case 24:
        In(we);
    }
  }
  function rl(e, n) {
    try {
      var t = n.updateQueue,
        r = t !== null ? t.lastEffect : null;
      if (r !== null) {
        var l = r.next;
        t = l;
        do {
          if ((t.tag & e) === e) {
            r = void 0;
            var a = t.create,
              o = t.inst;
            ((r = a()), (o.destroy = r));
          }
          t = t.next;
        } while (t !== l);
      }
    } catch (i) {
      re(n, n.return, i);
    }
  }
  function st(e, n, t) {
    try {
      var r = n.updateQueue,
        l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        r = a;
        do {
          if ((r.tag & e) === e) {
            var o = r.inst,
              i = o.destroy;
            if (i !== void 0) {
              ((o.destroy = void 0), (l = n));
              var s = t,
                m = i;
              try {
                m();
              } catch (y) {
                re(l, s, y);
              }
            }
          }
          r = r.next;
        } while (r !== a);
      }
    } catch (y) {
      re(n, n.return, y);
    }
  }
  function Fc(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var t = e.stateNode;
      try {
        zs(n, t);
      } catch (r) {
        re(e, e.return, r);
      }
    }
  }
  function Ic(e, n, t) {
    ((t.props = Mt(e.type, e.memoizedProps)), (t.state = e.memoizedState));
    try {
      t.componentWillUnmount();
    } catch (r) {
      re(e, n, r);
    }
  }
  function ll(e, n) {
    try {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        typeof t == 'function' ? (e.refCleanup = t(r)) : (t.current = r);
      }
    } catch (l) {
      re(e, n, l);
    }
  }
  function Pn(e, n) {
    var t = e.ref,
      r = e.refCleanup;
    if (t !== null)
      if (typeof r == 'function')
        try {
          r();
        } catch (l) {
          re(e, n, l);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof t == 'function')
        try {
          t(null);
        } catch (l) {
          re(e, n, l);
        }
      else t.current = null;
  }
  function Mc(e) {
    var n = e.type,
      t = e.memoizedProps,
      r = e.stateNode;
    try {
      e: switch (n) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          t.autoFocus && r.focus();
          break e;
        case 'img':
          t.src ? (r.src = t.src) : t.srcSet && (r.srcset = t.srcSet);
      }
    } catch (l) {
      re(e, e.return, l);
    }
  }
  function bi(e, n, t) {
    try {
      var r = e.stateNode;
      (bm(r, e.type, t, n), (r[Be] = n));
    } catch (l) {
      re(e, e.return, l);
    }
  }
  function Hc(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && gt(e.type)) ||
      e.tag === 4
    );
  }
  function ki(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Hc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && gt(e.type)) ||
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
  function wi(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode),
        n
          ? (t.nodeType === 9
              ? t.body
              : t.nodeName === 'HTML'
                ? t.ownerDocument.body
                : t
            ).insertBefore(e, n)
          : ((n =
              t.nodeType === 9
                ? t.body
                : t.nodeName === 'HTML'
                  ? t.ownerDocument.body
                  : t),
            n.appendChild(e),
            (t = t._reactRootContainer),
            t != null || n.onclick !== null || (n.onclick = On)));
    else if (
      r !== 4 &&
      (r === 27 && gt(e.type) && ((t = e.stateNode), (n = null)),
      (e = e.child),
      e !== null)
    )
      for (wi(e, n, t), e = e.sibling; e !== null; )
        (wi(e, n, t), (e = e.sibling));
  }
  function da(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      ((e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e));
    else if (
      r !== 4 &&
      (r === 27 && gt(e.type) && (t = e.stateNode), (e = e.child), e !== null)
    )
      for (da(e, n, t), e = e.sibling; e !== null; )
        (da(e, n, t), (e = e.sibling));
  }
  function Uc(e) {
    var n = e.stateNode,
      t = e.memoizedProps;
    try {
      for (var r = e.type, l = n.attributes; l.length; )
        n.removeAttributeNode(l[0]);
      (je(n, r, t), (n[Pe] = e), (n[Be] = t));
    } catch (a) {
      re(e, e.return, a);
    }
  }
  var qn = !1,
    Ee = !1,
    Si = !1,
    Bc = typeof WeakSet == 'function' ? WeakSet : Set,
    ze = null;
  function Zp(e, n) {
    if (((e = e.containerInfo), (qi = Oa), (e = es(e)), ho(e))) {
      if ('selectionStart' in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = ((t = e.ownerDocument) && t.defaultView) || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset,
              a = r.focusNode;
            r = r.focusOffset;
            try {
              (t.nodeType, a.nodeType);
            } catch {
              t = null;
              break e;
            }
            var o = 0,
              i = -1,
              s = -1,
              m = 0,
              y = 0,
              w = e,
              h = null;
            n: for (;;) {
              for (
                var g;
                w !== t || (l !== 0 && w.nodeType !== 3) || (i = o + l),
                  w !== a || (r !== 0 && w.nodeType !== 3) || (s = o + r),
                  w.nodeType === 3 && (o += w.nodeValue.length),
                  (g = w.firstChild) !== null;

              )
                ((h = w), (w = g));
              for (;;) {
                if (w === e) break n;
                if (
                  (h === t && ++m === l && (i = o),
                  h === a && ++y === r && (s = o),
                  (g = w.nextSibling) !== null)
                )
                  break;
                ((w = h), (h = w.parentNode));
              }
              w = g;
            }
            t = i === -1 || s === -1 ? null : { start: i, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      Vi = { focusedElem: e, selectionRange: t }, Oa = !1, ze = n;
      ze !== null;

    )
      if (
        ((n = ze), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = n), (ze = e));
      else
        for (; ze !== null; ) {
          switch (((n = ze), (a = n.alternate), (e = n.flags), n.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = n.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (t = 0; t < e.length; t++)
                  ((l = e[t]), (l.ref.impl = l.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && a !== null) {
                ((e = void 0),
                  (t = n),
                  (l = a.memoizedProps),
                  (a = a.memoizedState),
                  (r = t.stateNode));
                try {
                  var P = Mt(t.type, l);
                  ((e = r.getSnapshotBeforeUpdate(P, a)),
                    (r.__reactInternalSnapshotBeforeUpdate = e));
                } catch (A) {
                  re(t, t.return, A);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = n.stateNode.containerInfo), (t = e.nodeType), t === 9)
                )
                  Qi(e);
                else if (t === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      Qi(e);
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
              if ((e & 1024) !== 0) throw Error(u(163));
          }
          if (((e = n.sibling), e !== null)) {
            ((e.return = n.return), (ze = e));
            break;
          }
          ze = n.return;
        }
  }
  function qc(e, n, t) {
    var r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ($n(e, t), r & 4 && rl(5, t));
        break;
      case 1:
        if (($n(e, t), r & 4))
          if (((e = t.stateNode), n === null))
            try {
              e.componentDidMount();
            } catch (o) {
              re(t, t.return, o);
            }
          else {
            var l = Mt(t.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              e.componentDidUpdate(l, n, e.__reactInternalSnapshotBeforeUpdate);
            } catch (o) {
              re(t, t.return, o);
            }
          }
        (r & 64 && Fc(t), r & 512 && ll(t, t.return));
        break;
      case 3:
        if (($n(e, t), r & 64 && ((e = t.updateQueue), e !== null))) {
          if (((n = null), t.child !== null))
            switch (t.child.tag) {
              case 27:
              case 5:
                n = t.child.stateNode;
                break;
              case 1:
                n = t.child.stateNode;
            }
          try {
            zs(e, n);
          } catch (o) {
            re(t, t.return, o);
          }
        }
        break;
      case 27:
        n === null && r & 4 && Uc(t);
      case 26:
      case 5:
        ($n(e, t), n === null && r & 4 && Mc(t), r & 512 && ll(t, t.return));
        break;
      case 12:
        $n(e, t);
        break;
      case 31:
        ($n(e, t), r & 4 && Wc(e, t));
        break;
      case 13:
        ($n(e, t),
          r & 4 && Qc(e, t),
          r & 64 &&
            ((e = t.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((t = im.bind(null, t)), zm(e, t)))));
        break;
      case 22:
        if (((r = t.memoizedState !== null || qn), !r)) {
          ((n = (n !== null && n.memoizedState !== null) || Ee), (l = qn));
          var a = Ee;
          ((qn = r),
            (Ee = n) && !a ? Wn(e, t, (t.subtreeFlags & 8772) !== 0) : $n(e, t),
            (qn = l),
            (Ee = a));
        }
        break;
      case 30:
        break;
      default:
        $n(e, t);
    }
  }
  function Vc(e) {
    var n = e.alternate;
    (n !== null && ((e.alternate = null), Vc(n)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((n = e.stateNode), n !== null && Ya(n)),
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
  function Vn(e, n, t) {
    for (t = t.child; t !== null; ) ($c(e, n, t), (t = t.sibling));
  }
  function $c(e, n, t) {
    if (Ye && typeof Ye.onCommitFiberUnmount == 'function')
      try {
        Ye.onCommitFiberUnmount(Pr, t);
      } catch {}
    switch (t.tag) {
      case 26:
        (Ee || Pn(t, n),
          Vn(e, n, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t)));
        break;
      case 27:
        Ee || Pn(t, n);
        var r = me,
          l = Ve;
        (gt(t.type) && ((me = t.stateNode), (Ve = !1)),
          Vn(e, n, t),
          pl(t.stateNode),
          (me = r),
          (Ve = l));
        break;
      case 5:
        Ee || Pn(t, n);
      case 6:
        if (
          ((r = me),
          (l = Ve),
          (me = null),
          Vn(e, n, t),
          (me = r),
          (Ve = l),
          me !== null)
        )
          if (Ve)
            try {
              (me.nodeType === 9
                ? me.body
                : me.nodeName === 'HTML'
                  ? me.ownerDocument.body
                  : me
              ).removeChild(t.stateNode);
            } catch (a) {
              re(t, n, a);
            }
          else
            try {
              me.removeChild(t.stateNode);
            } catch (a) {
              re(t, n, a);
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
                t.stateNode,
              ),
              Nr(e))
            : If(me, t.stateNode));
        break;
      case 4:
        ((r = me),
          (l = Ve),
          (me = t.stateNode.containerInfo),
          (Ve = !0),
          Vn(e, n, t),
          (me = r),
          (Ve = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (st(2, t, n), Ee || st(4, t, n), Vn(e, n, t));
        break;
      case 1:
        (Ee ||
          (Pn(t, n),
          (r = t.stateNode),
          typeof r.componentWillUnmount == 'function' && Ic(t, n, r)),
          Vn(e, n, t));
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        ((Ee = (r = Ee) || t.memoizedState !== null), Vn(e, n, t), (Ee = r));
        break;
      default:
        Vn(e, n, t);
    }
  }
  function Wc(e, n) {
    if (
      n.memoizedState === null &&
      ((e = n.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        Nr(e);
      } catch (t) {
        re(n, n.return, t);
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
        Nr(e);
      } catch (t) {
        re(n, n.return, t);
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
        throw Error(u(435, e.tag));
    }
  }
  function pa(e, n) {
    var t = Jp(e);
    n.forEach(function (r) {
      if (!t.has(r)) {
        t.add(r);
        var l = um.bind(null, e, r);
        r.then(l, l);
      }
    });
  }
  function $e(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r],
          a = e,
          o = n,
          i = o;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case 27:
              if (gt(i.type)) {
                ((me = i.stateNode), (Ve = !1));
                break e;
              }
              break;
            case 5:
              ((me = i.stateNode), (Ve = !1));
              break e;
            case 3:
            case 4:
              ((me = i.stateNode.containerInfo), (Ve = !0));
              break e;
          }
          i = i.return;
        }
        if (me === null) throw Error(u(160));
        ($c(a, o, l),
          (me = null),
          (Ve = !1),
          (a = l.alternate),
          a !== null && (a.return = null),
          (l.return = null));
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; ) (Kc(n, e), (n = n.sibling));
  }
  var kn = null;
  function Kc(e, n) {
    var t = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ($e(n, e),
          We(e),
          r & 4 && (st(3, e, e.return), rl(3, e), st(5, e, e.return)));
        break;
      case 1:
        ($e(n, e),
          We(e),
          r & 512 && (Ee || t === null || Pn(t, t.return)),
          r & 64 &&
            qn &&
            ((e = e.updateQueue),
            e !== null &&
              ((r = e.callbacks),
              r !== null &&
                ((t = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = t === null ? r : t.concat(r))))));
        break;
      case 26:
        var l = kn;
        if (
          ($e(n, e),
          We(e),
          r & 512 && (Ee || t === null || Pn(t, t.return)),
          r & 4)
        ) {
          var a = t !== null ? t.memoizedState : null;
          if (((r = e.memoizedState), t === null))
            if (r === null)
              if (e.stateNode === null) {
                e: {
                  ((r = e.type),
                    (t = e.memoizedProps),
                    (l = l.ownerDocument || l));
                  n: switch (r) {
                    case 'title':
                      ((a = l.getElementsByTagName('title')[0]),
                        (!a ||
                          a[Lr] ||
                          a[Pe] ||
                          a.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          a.hasAttribute('itemprop')) &&
                          ((a = l.createElement(r)),
                          l.head.insertBefore(
                            a,
                            l.querySelector('head > title'),
                          )),
                        je(a, r, t),
                        (a[Pe] = e),
                        Ne(a),
                        (r = a));
                      break e;
                    case 'link':
                      var o = Gf('link', 'href', l).get(r + (t.href || ''));
                      if (o) {
                        for (var i = 0; i < o.length; i++)
                          if (
                            ((a = o[i]),
                            a.getAttribute('href') ===
                              (t.href == null || t.href === ''
                                ? null
                                : t.href) &&
                              a.getAttribute('rel') ===
                                (t.rel == null ? null : t.rel) &&
                              a.getAttribute('title') ===
                                (t.title == null ? null : t.title) &&
                              a.getAttribute('crossorigin') ===
                                (t.crossOrigin == null ? null : t.crossOrigin))
                          ) {
                            o.splice(i, 1);
                            break n;
                          }
                      }
                      ((a = l.createElement(r)),
                        je(a, r, t),
                        l.head.appendChild(a));
                      break;
                    case 'meta':
                      if (
                        (o = Gf('meta', 'content', l).get(
                          r + (t.content || ''),
                        ))
                      ) {
                        for (i = 0; i < o.length; i++)
                          if (
                            ((a = o[i]),
                            a.getAttribute('content') ===
                              (t.content == null ? null : '' + t.content) &&
                              a.getAttribute('name') ===
                                (t.name == null ? null : t.name) &&
                              a.getAttribute('property') ===
                                (t.property == null ? null : t.property) &&
                              a.getAttribute('http-equiv') ===
                                (t.httpEquiv == null ? null : t.httpEquiv) &&
                              a.getAttribute('charset') ===
                                (t.charSet == null ? null : t.charSet))
                          ) {
                            o.splice(i, 1);
                            break n;
                          }
                      }
                      ((a = l.createElement(r)),
                        je(a, r, t),
                        l.head.appendChild(a));
                      break;
                    default:
                      throw Error(u(468, r));
                  }
                  ((a[Pe] = e), Ne(a), (r = a));
                }
                e.stateNode = r;
              } else Xf(l, e.type, e.stateNode);
            else e.stateNode = Kf(l, r, e.memoizedProps);
          else
            a !== r
              ? (a === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : a.count--,
                r === null
                  ? Xf(l, e.type, e.stateNode)
                  : Kf(l, r, e.memoizedProps))
              : r === null &&
                e.stateNode !== null &&
                bi(e, e.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        ($e(n, e),
          We(e),
          r & 512 && (Ee || t === null || Pn(t, t.return)),
          t !== null && r & 4 && bi(e, e.memoizedProps, t.memoizedProps));
        break;
      case 5:
        if (
          ($e(n, e),
          We(e),
          r & 512 && (Ee || t === null || Pn(t, t.return)),
          e.flags & 32)
        ) {
          l = e.stateNode;
          try {
            Gt(l, '');
          } catch (P) {
            re(e, e.return, P);
          }
        }
        (r & 4 &&
          e.stateNode != null &&
          ((l = e.memoizedProps), bi(e, l, t !== null ? t.memoizedProps : l)),
          r & 1024 && (Si = !0));
        break;
      case 6:
        if (($e(n, e), We(e), r & 4)) {
          if (e.stateNode === null) throw Error(u(162));
          ((r = e.memoizedProps), (t = e.stateNode));
          try {
            t.nodeValue = r;
          } catch (P) {
            re(e, e.return, P);
          }
        }
        break;
      case 3:
        if (
          ((_a = null),
          (l = kn),
          (kn = za(n.containerInfo)),
          $e(n, e),
          (kn = l),
          We(e),
          r & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Nr(n.containerInfo);
          } catch (P) {
            re(e, e.return, P);
          }
        Si && ((Si = !1), Gc(e));
        break;
      case 4:
        ((r = kn),
          (kn = za(e.stateNode.containerInfo)),
          $e(n, e),
          We(e),
          (kn = r));
        break;
      case 12:
        ($e(n, e), We(e));
        break;
      case 31:
        ($e(n, e),
          We(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), pa(e, r))));
        break;
      case 13:
        ($e(n, e),
          We(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (ha = Xe()),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), pa(e, r))));
        break;
      case 22:
        l = e.memoizedState !== null;
        var s = t !== null && t.memoizedState !== null,
          m = qn,
          y = Ee;
        if (
          ((qn = m || l),
          (Ee = y || s),
          $e(n, e),
          (Ee = y),
          (qn = m),
          We(e),
          r & 8192)
        )
          e: for (
            n = e.stateNode,
              n._visibility = l ? n._visibility & -2 : n._visibility | 1,
              l && (t === null || s || qn || Ee || Ht(e)),
              t = null,
              n = e;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (t === null) {
                s = t = n;
                try {
                  if (((a = s.stateNode), l))
                    ((o = a.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'));
                  else {
                    i = s.stateNode;
                    var w = s.memoizedProps.style,
                      h =
                        w != null && w.hasOwnProperty('display')
                          ? w.display
                          : null;
                    i.style.display =
                      h == null || typeof h == 'boolean' ? '' : ('' + h).trim();
                  }
                } catch (P) {
                  re(s, s.return, P);
                }
              }
            } else if (n.tag === 6) {
              if (t === null) {
                s = n;
                try {
                  s.stateNode.nodeValue = l ? '' : s.memoizedProps;
                } catch (P) {
                  re(s, s.return, P);
                }
              }
            } else if (n.tag === 18) {
              if (t === null) {
                s = n;
                try {
                  var g = s.stateNode;
                  l ? Mf(g, !0) : Mf(s.stateNode, !1);
                } catch (P) {
                  re(s, s.return, P);
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
              (t === n && (t = null), (n = n.return));
            }
            (t === n && (t = null),
              (n.sibling.return = n.return),
              (n = n.sibling));
          }
        r & 4 &&
          ((r = e.updateQueue),
          r !== null &&
            ((t = r.retryQueue),
            t !== null && ((r.retryQueue = null), pa(e, t))));
        break;
      case 19:
        ($e(n, e),
          We(e),
          r & 4 &&
            ((r = e.updateQueue),
            r !== null && ((e.updateQueue = null), pa(e, r))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ($e(n, e), We(e));
    }
  }
  function We(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var t, r = e.return; r !== null; ) {
          if (Hc(r)) {
            t = r;
            break;
          }
          r = r.return;
        }
        if (t == null) throw Error(u(160));
        switch (t.tag) {
          case 27:
            var l = t.stateNode,
              a = ki(e);
            da(e, a, l);
            break;
          case 5:
            var o = t.stateNode;
            t.flags & 32 && (Gt(o, ''), (t.flags &= -33));
            var i = ki(e);
            da(e, i, o);
            break;
          case 3:
          case 4:
            var s = t.stateNode.containerInfo,
              m = ki(e);
            wi(e, m, s);
            break;
          default:
            throw Error(u(161));
        }
      } catch (y) {
        re(e, e.return, y);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Gc(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        (Gc(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function $n(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (qc(e, n.alternate, n), (n = n.sibling));
  }
  function Ht(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (st(4, n, n.return), Ht(n));
          break;
        case 1:
          Pn(n, n.return);
          var t = n.stateNode;
          (typeof t.componentWillUnmount == 'function' && Ic(n, n.return, t),
            Ht(n));
          break;
        case 27:
          pl(n.stateNode);
        case 26:
        case 5:
          (Pn(n, n.return), Ht(n));
          break;
        case 22:
          n.memoizedState === null && Ht(n);
          break;
        case 30:
          Ht(n);
          break;
        default:
          Ht(n);
      }
      e = e.sibling;
    }
  }
  function Wn(e, n, t) {
    for (t = t && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var r = n.alternate,
        l = e,
        a = n,
        o = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          (Wn(l, a, t), rl(4, a));
          break;
        case 1:
          if (
            (Wn(l, a, t),
            (r = a),
            (l = r.stateNode),
            typeof l.componentDidMount == 'function')
          )
            try {
              l.componentDidMount();
            } catch (m) {
              re(r, r.return, m);
            }
          if (((r = a), (l = r.updateQueue), l !== null)) {
            var i = r.stateNode;
            try {
              var s = l.shared.hiddenCallbacks;
              if (s !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < s.length; l++)
                  Ns(s[l], i);
            } catch (m) {
              re(r, r.return, m);
            }
          }
          (t && o & 64 && Fc(a), ll(a, a.return));
          break;
        case 27:
          Uc(a);
        case 26:
        case 5:
          (Wn(l, a, t), t && r === null && o & 4 && Mc(a), ll(a, a.return));
          break;
        case 12:
          Wn(l, a, t);
          break;
        case 31:
          (Wn(l, a, t), t && o & 4 && Wc(l, a));
          break;
        case 13:
          (Wn(l, a, t), t && o & 4 && Qc(l, a));
          break;
        case 22:
          (a.memoizedState === null && Wn(l, a, t), ll(a, a.return));
          break;
        case 30:
          break;
        default:
          Wn(l, a, t);
      }
      n = n.sibling;
    }
  }
  function xi(e, n) {
    var t = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (t = e.memoizedState.cachePool.pool),
      (e = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (e = n.memoizedState.cachePool.pool),
      e !== t && (e != null && e.refCount++, t != null && Vr(t)));
  }
  function Ei(e, n) {
    ((e = null),
      n.alternate !== null && (e = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== e && (n.refCount++, e != null && Vr(e)));
  }
  function wn(e, n, t, r) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (Xc(e, n, t, r), (n = n.sibling));
  }
  function Xc(e, n, t, r) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (wn(e, n, t, r), l & 2048 && rl(9, n));
        break;
      case 1:
        wn(e, n, t, r);
        break;
      case 3:
        (wn(e, n, t, r),
          l & 2048 &&
            ((e = null),
            n.alternate !== null && (e = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== e && (n.refCount++, e != null && Vr(e))));
        break;
      case 12:
        if (l & 2048) {
          (wn(e, n, t, r), (e = n.stateNode));
          try {
            var a = n.memoizedProps,
              o = a.id,
              i = a.onPostCommit;
            typeof i == 'function' &&
              i(
                o,
                n.alternate === null ? 'mount' : 'update',
                e.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            re(n, n.return, s);
          }
        } else wn(e, n, t, r);
        break;
      case 31:
        wn(e, n, t, r);
        break;
      case 13:
        wn(e, n, t, r);
        break;
      case 23:
        break;
      case 22:
        ((a = n.stateNode),
          (o = n.alternate),
          n.memoizedState !== null
            ? a._visibility & 2
              ? wn(e, n, t, r)
              : al(e, n)
            : a._visibility & 2
              ? wn(e, n, t, r)
              : ((a._visibility |= 2),
                hr(e, n, t, r, (n.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && xi(o, n));
        break;
      case 24:
        (wn(e, n, t, r), l & 2048 && Ei(n.alternate, n));
        break;
      default:
        wn(e, n, t, r);
    }
  }
  function hr(e, n, t, r, l) {
    for (
      l = l && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child;
      n !== null;

    ) {
      var a = e,
        o = n,
        i = t,
        s = r,
        m = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (hr(a, o, i, s, l), rl(8, o));
          break;
        case 23:
          break;
        case 22:
          var y = o.stateNode;
          (o.memoizedState !== null
            ? y._visibility & 2
              ? hr(a, o, i, s, l)
              : al(a, o)
            : ((y._visibility |= 2), hr(a, o, i, s, l)),
            l && m & 2048 && xi(o.alternate, o));
          break;
        case 24:
          (hr(a, o, i, s, l), l && m & 2048 && Ei(o.alternate, o));
          break;
        default:
          hr(a, o, i, s, l);
      }
      n = n.sibling;
    }
  }
  function al(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var t = e,
          r = n,
          l = r.flags;
        switch (r.tag) {
          case 22:
            (al(t, r), l & 2048 && xi(r.alternate, r));
            break;
          case 24:
            (al(t, r), l & 2048 && Ei(r.alternate, r));
            break;
          default:
            al(t, r);
        }
        n = n.sibling;
      }
  }
  var ol = 8192;
  function gr(e, n, t) {
    if (e.subtreeFlags & ol)
      for (e = e.child; e !== null; ) (Yc(e, n, t), (e = e.sibling));
  }
  function Yc(e, n, t) {
    switch (e.tag) {
      case 26:
        (gr(e, n, t),
          e.flags & ol &&
            e.memoizedState !== null &&
            Mm(t, kn, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        gr(e, n, t);
        break;
      case 3:
      case 4:
        var r = kn;
        ((kn = za(e.stateNode.containerInfo)), gr(e, n, t), (kn = r));
        break;
      case 22:
        e.memoizedState === null &&
          ((r = e.alternate),
          r !== null && r.memoizedState !== null
            ? ((r = ol), (ol = 16777216), gr(e, n, t), (ol = r))
            : gr(e, n, t));
        break;
      default:
        gr(e, n, t);
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
  function il(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((ze = r), ef(r, e));
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
        (il(e), e.flags & 2048 && st(9, e, e.return));
        break;
      case 3:
        il(e);
        break;
      case 12:
        il(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null &&
        n._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((n._visibility &= -3), ma(e))
          : il(e);
        break;
      default:
        il(e);
    }
  }
  function ma(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          ((ze = r), ef(r, e));
        }
      Zc(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((n = e), n.tag)) {
        case 0:
        case 11:
        case 15:
          (st(8, n, n.return), ma(n));
          break;
        case 22:
          ((t = n.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), ma(n)));
          break;
        default:
          ma(n);
      }
      e = e.sibling;
    }
  }
  function ef(e, n) {
    for (; ze !== null; ) {
      var t = ze;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          st(8, t, n);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var r = t.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          Vr(t.memoizedState.cache);
      }
      if (((r = t.child), r !== null)) ((r.return = t), (ze = r));
      else
        e: for (t = e; ze !== null; ) {
          r = ze;
          var l = r.sibling,
            a = r.return;
          if ((Vc(r), r === t)) {
            ze = null;
            break e;
          }
          if (l !== null) {
            ((l.return = a), (ze = l));
            break e;
          }
          ze = a;
        }
    }
  }
  var em = {
      getCacheForType: function (e) {
        var n = Te(we),
          t = n.data.get(e);
        return (t === void 0 && ((t = e()), n.data.set(e, t)), t);
      },
      cacheSignal: function () {
        return Te(we).controller.signal;
      },
    },
    nm = typeof WeakMap == 'function' ? WeakMap : Map,
    ee = 0,
    ce = null,
    V = null,
    W = 0,
    te = 0,
    rn = null,
    ct = !1,
    yr = !1,
    Ci = !1,
    Qn = 0,
    ge = 0,
    ft = 0,
    Ut = 0,
    Ni = 0,
    ln = 0,
    vr = 0,
    ul = null,
    Qe = null,
    zi = !1,
    ha = 0,
    nf = 0,
    ga = 1 / 0,
    ya = null,
    dt = null,
    Ce = 0,
    pt = null,
    br = null,
    Kn = 0,
    Pi = 0,
    _i = null,
    tf = null,
    sl = 0,
    Ti = null;
  function an() {
    return (ee & 2) !== 0 && W !== 0 ? W & -W : v.T !== null ? Ai() : vu();
  }
  function rf() {
    if (ln === 0)
      if ((W & 536870912) === 0 || G) {
        var e = Cl;
        ((Cl <<= 1), (Cl & 3932160) === 0 && (Cl = 262144), (ln = e));
      } else ln = 536870912;
    return ((e = nn.current), e !== null && (e.flags |= 32), ln);
  }
  function Ke(e, n, t) {
    (((e === ce && (te === 2 || te === 9)) || e.cancelPendingCommit !== null) &&
      (kr(e, 0), mt(e, W, ln, !1)),
      Tr(e, t),
      ((ee & 2) === 0 || e !== ce) &&
        (e === ce &&
          ((ee & 2) === 0 && (Ut |= t), ge === 4 && mt(e, W, ln, !1)),
        _n(e)));
  }
  function lf(e, n, t) {
    if ((ee & 6) !== 0) throw Error(u(327));
    var r = (!t && (n & 127) === 0 && (n & e.expiredLanes) === 0) || _r(e, n),
      l = r ? lm(e, n) : ji(e, n, !0),
      a = r;
    do {
      if (l === 0) {
        yr && !r && mt(e, n, 0, !1);
        break;
      } else {
        if (((t = e.current.alternate), a && !tm(t))) {
          ((l = ji(e, n, !1)), (a = !1));
          continue;
        }
        if (l === 2) {
          if (((a = n), e.errorRecoveryDisabledLanes & a)) var o = 0;
          else
            ((o = e.pendingLanes & -536870913),
              (o = o !== 0 ? o : o & 536870912 ? 536870912 : 0));
          if (o !== 0) {
            n = o;
            e: {
              var i = e;
              l = ul;
              var s = i.current.memoizedState.isDehydrated;
              if ((s && (kr(i, o).flags |= 256), (o = ji(i, o, !1)), o !== 2)) {
                if (Ci && !s) {
                  ((i.errorRecoveryDisabledLanes |= a), (Ut |= a), (l = 4));
                  break e;
                }
                ((a = Qe),
                  (Qe = l),
                  a !== null &&
                    (Qe === null ? (Qe = a) : Qe.push.apply(Qe, a)));
              }
              l = o;
            }
            if (((a = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (kr(e, 0), mt(e, n, 0, !0));
          break;
        }
        e: {
          switch (((r = e), (a = l), a)) {
            case 0:
            case 1:
              throw Error(u(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              mt(r, n, ln, !ct);
              break e;
            case 2:
              Qe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(u(329));
          }
          if ((n & 62914560) === n && ((l = ha + 300 - Xe()), 10 < l)) {
            if ((mt(r, n, ln, !ct), zl(r, 0, !0) !== 0)) break e;
            ((Kn = n),
              (r.timeoutHandle = Af(
                af.bind(
                  null,
                  r,
                  t,
                  Qe,
                  ya,
                  zi,
                  n,
                  ln,
                  Ut,
                  vr,
                  ct,
                  a,
                  'Throttled',
                  -0,
                  0,
                ),
                l,
              )));
            break e;
          }
          af(r, t, Qe, ya, zi, n, ln, Ut, vr, ct, a, null, -0, 0);
        }
      }
      break;
    } while (!0);
    _n(e);
  }
  function af(e, n, t, r, l, a, o, i, s, m, y, w, h, g) {
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
        unsuspend: On,
      }),
        Yc(n, a, w));
      var P =
        (a & 62914560) === a ? ha - Xe() : (a & 4194048) === a ? nf - Xe() : 0;
      if (((P = Hm(w, P)), P !== null)) {
        ((Kn = a),
          (e.cancelPendingCommit = P(
            mf.bind(null, e, n, a, t, r, l, o, i, s, y, w, null, h, g),
          )),
          mt(e, a, o, !m));
        return;
      }
    }
    mf(e, n, a, t, r, l, o, i, s);
  }
  function tm(e) {
    for (var n = e; ; ) {
      var t = n.tag;
      if (
        (t === 0 || t === 11 || t === 15) &&
        n.flags & 16384 &&
        ((t = n.updateQueue), t !== null && ((t = t.stores), t !== null))
      )
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            a = l.getSnapshot;
          l = l.value;
          try {
            if (!Je(a(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
        ((t.return = n), (n = t));
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
  function mt(e, n, t, r) {
    ((n &= ~Ni),
      (n &= ~Ut),
      (e.suspendedLanes |= n),
      (e.pingedLanes &= ~n),
      r && (e.warmLanes |= n),
      (r = e.expirationTimes));
    for (var l = n; 0 < l; ) {
      var a = 31 - Ze(l),
        o = 1 << a;
      ((r[a] = -1), (l &= ~o));
    }
    t !== 0 && hu(e, t, n);
  }
  function va() {
    return (ee & 6) === 0 ? (cl(0), !1) : !0;
  }
  function Li() {
    if (V !== null) {
      if (te === 0) var e = V.return;
      else ((e = V), (Fn = jt = null), Qo(e), (cr = null), (Wr = 0), (e = V));
      for (; e !== null; ) (Ac(e.alternate, e), (e = e.return));
      V = null;
    }
  }
  function kr(e, n) {
    var t = e.timeoutHandle;
    (t !== -1 && ((e.timeoutHandle = -1), Sm(t)),
      (t = e.cancelPendingCommit),
      t !== null && ((e.cancelPendingCommit = null), t()),
      (Kn = 0),
      Li(),
      (ce = e),
      (V = t = Dn(e.current, null)),
      (W = n),
      (te = 0),
      (rn = null),
      (ct = !1),
      (yr = _r(e, n)),
      (Ci = !1),
      (vr = ln = Ni = Ut = ft = ge = 0),
      (Qe = ul = null),
      (zi = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= n; 0 < r; ) {
        var l = 31 - Ze(r),
          a = 1 << l;
        ((n |= e[l]), (r &= ~a));
      }
    return ((Qn = n), Ml(), t);
  }
  function of(e, n) {
    ((U = null),
      (v.H = el),
      n === sr || n === Ql
        ? ((n = Ss()), (te = 3))
        : n === Do
          ? ((n = Ss()), (te = 4))
          : (te =
              n === si
                ? 8
                : n !== null &&
                    typeof n == 'object' &&
                    typeof n.then == 'function'
                  ? 6
                  : 1),
      (rn = n),
      V === null && ((ge = 1), ia(e, cn(n, e.current))));
  }
  function uf() {
    var e = nn.current;
    return e === null
      ? !0
      : (W & 4194048) === W
        ? bn === null
        : (W & 62914560) === W || (W & 536870912) !== 0
          ? e === bn
          : !1;
  }
  function sf() {
    var e = v.H;
    return ((v.H = el), e === null ? el : e);
  }
  function cf() {
    var e = v.A;
    return ((v.A = em), e);
  }
  function ba() {
    ((ge = 4),
      ct || ((W & 4194048) !== W && nn.current !== null) || (yr = !0),
      ((ft & 134217727) === 0 && (Ut & 134217727) === 0) ||
        ce === null ||
        mt(ce, W, ln, !1));
  }
  function ji(e, n, t) {
    var r = ee;
    ee |= 2;
    var l = sf(),
      a = cf();
    ((ce !== e || W !== n) && ((ya = null), kr(e, n)), (n = !1));
    var o = ge;
    e: do
      try {
        if (te !== 0 && V !== null) {
          var i = V,
            s = rn;
          switch (te) {
            case 8:
              (Li(), (o = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              nn.current === null && (n = !0);
              var m = te;
              if (((te = 0), (rn = null), wr(e, i, s, m), t && yr)) {
                o = 0;
                break e;
              }
              break;
            default:
              ((m = te), (te = 0), (rn = null), wr(e, i, s, m));
          }
        }
        (rm(), (o = ge));
        break;
      } catch (y) {
        of(e, y);
      }
    while (!0);
    return (
      n && e.shellSuspendCounter++,
      (Fn = jt = null),
      (ee = r),
      (v.H = l),
      (v.A = a),
      V === null && ((ce = null), (W = 0), Ml()),
      o
    );
  }
  function rm() {
    for (; V !== null; ) ff(V);
  }
  function lm(e, n) {
    var t = ee;
    ee |= 2;
    var r = sf(),
      l = cf();
    ce !== e || W !== n
      ? ((ya = null), (ga = Xe() + 500), kr(e, n))
      : (yr = _r(e, n));
    e: do
      try {
        if (te !== 0 && V !== null) {
          n = V;
          var a = rn;
          n: switch (te) {
            case 1:
              ((te = 0), (rn = null), wr(e, n, a, 1));
              break;
            case 2:
            case 9:
              if (ks(a)) {
                ((te = 0), (rn = null), df(n));
                break;
              }
              ((n = function () {
                ((te !== 2 && te !== 9) || ce !== e || (te = 7), _n(e));
              }),
                a.then(n, n));
              break e;
            case 3:
              te = 7;
              break e;
            case 4:
              te = 5;
              break e;
            case 7:
              ks(a)
                ? ((te = 0), (rn = null), df(n))
                : ((te = 0), (rn = null), wr(e, n, a, 7));
              break;
            case 5:
              var o = null;
              switch (V.tag) {
                case 26:
                  o = V.memoizedState;
                case 5:
                case 27:
                  var i = V;
                  if (o ? Yf(o) : i.stateNode.complete) {
                    ((te = 0), (rn = null));
                    var s = i.sibling;
                    if (s !== null) V = s;
                    else {
                      var m = i.return;
                      m !== null ? ((V = m), ka(m)) : (V = null);
                    }
                    break n;
                  }
              }
              ((te = 0), (rn = null), wr(e, n, a, 5));
              break;
            case 6:
              ((te = 0), (rn = null), wr(e, n, a, 6));
              break;
            case 8:
              (Li(), (ge = 6));
              break e;
            default:
              throw Error(u(462));
          }
        }
        am();
        break;
      } catch (y) {
        of(e, y);
      }
    while (!0);
    return (
      (Fn = jt = null),
      (v.H = r),
      (v.A = l),
      (ee = t),
      V !== null ? 0 : ((ce = null), (W = 0), Ml(), ge)
    );
  }
  function am() {
    for (; V !== null && !Pd(); ) ff(V);
  }
  function ff(e) {
    var n = Rc(e.alternate, e, Qn);
    ((e.memoizedProps = e.pendingProps), n === null ? ka(e) : (V = n));
  }
  function df(e) {
    var n = e,
      t = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Pc(t, n, n.pendingProps, n.type, void 0, W);
        break;
      case 11:
        n = Pc(t, n, n.pendingProps, n.type.render, n.ref, W);
        break;
      case 5:
        Qo(n);
      default:
        (Ac(t, n), (n = V = ss(n, Qn)), (n = Rc(t, n, Qn)));
    }
    ((e.memoizedProps = e.pendingProps), n === null ? ka(e) : (V = n));
  }
  function wr(e, n, t, r) {
    ((Fn = jt = null), Qo(n), (cr = null), (Wr = 0));
    var l = n.return;
    try {
      if (Qp(e, l, n, t, W)) {
        ((ge = 1), ia(e, cn(t, e.current)), (V = null));
        return;
      }
    } catch (a) {
      if (l !== null) throw ((V = l), a);
      ((ge = 1), ia(e, cn(t, e.current)), (V = null));
      return;
    }
    n.flags & 32768
      ? (G || r === 1
          ? (e = !0)
          : yr || (W & 536870912) !== 0
            ? (e = !1)
            : ((ct = e = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = nn.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
        pf(n, e))
      : ka(n);
  }
  function ka(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        pf(n, ct);
        return;
      }
      e = n.return;
      var t = Xp(n.alternate, n, Qn);
      if (t !== null) {
        V = t;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        V = n;
        return;
      }
      V = n = e;
    } while (n !== null);
    ge === 0 && (ge = 5);
  }
  function pf(e, n) {
    do {
      var t = Yp(e.alternate, e);
      if (t !== null) {
        ((t.flags &= 32767), (V = t));
        return;
      }
      if (
        ((t = e.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !n && ((e = e.sibling), e !== null))
      ) {
        V = e;
        return;
      }
      V = e = t;
    } while (e !== null);
    ((ge = 6), (V = null));
  }
  function mf(e, n, t, r, l, a, o, i, s) {
    e.cancelPendingCommit = null;
    do wa();
    while (Ce !== 0);
    if ((ee & 6) !== 0) throw Error(u(327));
    if (n !== null) {
      if (n === e.current) throw Error(u(177));
      if (
        ((a = n.lanes | n.childLanes),
        (a |= ko),
        Id(e, t, a, o, i, s),
        e === ce && ((V = ce = null), (W = 0)),
        (br = n),
        (pt = e),
        (Kn = t),
        (Pi = a),
        (_i = l),
        (tf = r),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            sm(xl, function () {
              return (bf(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (r = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || r)
      ) {
        ((r = v.T), (v.T = null), (l = N.p), (N.p = 2), (o = ee), (ee |= 4));
        try {
          Zp(e, n, t);
        } finally {
          ((ee = o), (N.p = l), (v.T = r));
        }
      }
      ((Ce = 1), hf(), gf(), yf());
    }
  }
  function hf() {
    if (Ce === 1) {
      Ce = 0;
      var e = pt,
        n = br,
        t = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || t) {
        ((t = v.T), (v.T = null));
        var r = N.p;
        N.p = 2;
        var l = ee;
        ee |= 4;
        try {
          Kc(n, e);
          var a = Vi,
            o = es(e.containerInfo),
            i = a.focusedElem,
            s = a.selectionRange;
          if (
            o !== i &&
            i &&
            i.ownerDocument &&
            Ju(i.ownerDocument.documentElement, i)
          ) {
            if (s !== null && ho(i)) {
              var m = s.start,
                y = s.end;
              if ((y === void 0 && (y = m), 'selectionStart' in i))
                ((i.selectionStart = m),
                  (i.selectionEnd = Math.min(y, i.value.length)));
              else {
                var w = i.ownerDocument || document,
                  h = (w && w.defaultView) || window;
                if (h.getSelection) {
                  var g = h.getSelection(),
                    P = i.textContent.length,
                    A = Math.min(s.start, P),
                    ie = s.end === void 0 ? A : Math.min(s.end, P);
                  !g.extend && A > ie && ((o = ie), (ie = A), (A = o));
                  var d = Zu(i, A),
                    c = Zu(i, ie);
                  if (
                    d &&
                    c &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== d.node ||
                      g.anchorOffset !== d.offset ||
                      g.focusNode !== c.node ||
                      g.focusOffset !== c.offset)
                  ) {
                    var p = w.createRange();
                    (p.setStart(d.node, d.offset),
                      g.removeAllRanges(),
                      A > ie
                        ? (g.addRange(p), g.extend(c.node, c.offset))
                        : (p.setEnd(c.node, c.offset), g.addRange(p)));
                  }
                }
              }
            }
            for (w = [], g = i; (g = g.parentNode); )
              g.nodeType === 1 &&
                w.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof i.focus == 'function' && i.focus(), i = 0;
              i < w.length;
              i++
            ) {
              var b = w[i];
              ((b.element.scrollLeft = b.left), (b.element.scrollTop = b.top));
            }
          }
          ((Oa = !!qi), (Vi = qi = null));
        } finally {
          ((ee = l), (N.p = r), (v.T = t));
        }
      }
      ((e.current = n), (Ce = 2));
    }
  }
  function gf() {
    if (Ce === 2) {
      Ce = 0;
      var e = pt,
        n = br,
        t = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || t) {
        ((t = v.T), (v.T = null));
        var r = N.p;
        N.p = 2;
        var l = ee;
        ee |= 4;
        try {
          qc(e, n.alternate, n);
        } finally {
          ((ee = l), (N.p = r), (v.T = t));
        }
      }
      Ce = 3;
    }
  }
  function yf() {
    if (Ce === 4 || Ce === 3) {
      ((Ce = 0), _d());
      var e = pt,
        n = br,
        t = Kn,
        r = tf;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (Ce = 5)
        : ((Ce = 0), (br = pt = null), vf(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (
        (l === 0 && (dt = null),
        Ga(t),
        (n = n.stateNode),
        Ye && typeof Ye.onCommitFiberRoot == 'function')
      )
        try {
          Ye.onCommitFiberRoot(Pr, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        ((n = v.T), (l = N.p), (N.p = 2), (v.T = null));
        try {
          for (var a = e.onRecoverableError, o = 0; o < r.length; o++) {
            var i = r[o];
            a(i.value, { componentStack: i.stack });
          }
        } finally {
          ((v.T = n), (N.p = l));
        }
      }
      ((Kn & 3) !== 0 && wa(),
        _n(e),
        (l = e.pendingLanes),
        (t & 261930) !== 0 && (l & 42) !== 0
          ? e === Ti
            ? sl++
            : ((sl = 0), (Ti = e))
          : (sl = 0),
        cl(0));
    }
  }
  function vf(e, n) {
    (e.pooledCacheLanes &= n) === 0 &&
      ((n = e.pooledCache), n != null && ((e.pooledCache = null), Vr(n)));
  }
  function wa() {
    return (hf(), gf(), yf(), bf());
  }
  function bf() {
    if (Ce !== 5) return !1;
    var e = pt,
      n = Pi;
    Pi = 0;
    var t = Ga(Kn),
      r = v.T,
      l = N.p;
    try {
      ((N.p = 32 > t ? 32 : t), (v.T = null), (t = _i), (_i = null));
      var a = pt,
        o = Kn;
      if (((Ce = 0), (br = pt = null), (Kn = 0), (ee & 6) !== 0))
        throw Error(u(331));
      var i = ee;
      if (
        ((ee |= 4),
        Jc(a.current),
        Xc(a, a.current, o, t),
        (ee = i),
        cl(0, !1),
        Ye && typeof Ye.onPostCommitFiberRoot == 'function')
      )
        try {
          Ye.onPostCommitFiberRoot(Pr, a);
        } catch {}
      return !0;
    } finally {
      ((N.p = l), (v.T = r), vf(e, n));
    }
  }
  function kf(e, n, t) {
    ((n = cn(t, n)),
      (n = ui(e.stateNode, n, 2)),
      (e = ot(e, n, 2)),
      e !== null && (Tr(e, 2), _n(e)));
  }
  function re(e, n, t) {
    if (e.tag === 3) kf(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          kf(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (dt === null || !dt.has(r)))
          ) {
            ((e = cn(t, e)),
              (t = kc(2)),
              (r = ot(n, t, 2)),
              r !== null && (wc(t, r, n, e), Tr(r, 2), _n(r)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Oi(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new nm();
      var l = new Set();
      r.set(n, l);
    } else ((l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l)));
    l.has(t) ||
      ((Ci = !0), l.add(t), (e = om.bind(null, e, n, t)), n.then(e, e));
  }
  function om(e, n, t) {
    var r = e.pingCache;
    (r !== null && r.delete(n),
      (e.pingedLanes |= e.suspendedLanes & t),
      (e.warmLanes &= ~t),
      ce === e &&
        (W & t) === t &&
        (ge === 4 || (ge === 3 && (W & 62914560) === W && 300 > Xe() - ha)
          ? (ee & 2) === 0 && kr(e, 0)
          : (Ni |= t),
        vr === W && (vr = 0)),
      _n(e));
  }
  function wf(e, n) {
    (n === 0 && (n = mu()), (e = _t(e, n)), e !== null && (Tr(e, n), _n(e)));
  }
  function im(e) {
    var n = e.memoizedState,
      t = 0;
    (n !== null && (t = n.retryLane), wf(e, t));
  }
  function um(e, n) {
    var t = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode,
          l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(u(314));
    }
    (r !== null && r.delete(n), wf(e, t));
  }
  function sm(e, n) {
    return $a(e, n);
  }
  var Sa = null,
    Sr = null,
    Ri = !1,
    xa = !1,
    Di = !1,
    ht = 0;
  function _n(e) {
    (e !== Sr &&
      e.next === null &&
      (Sr === null ? (Sa = Sr = e) : (Sr = Sr.next = e)),
      (xa = !0),
      Ri || ((Ri = !0), fm()));
  }
  function cl(e, n) {
    if (!Di && xa) {
      Di = !0;
      do
        for (var t = !1, r = Sa; r !== null; ) {
          if (e !== 0) {
            var l = r.pendingLanes;
            if (l === 0) var a = 0;
            else {
              var o = r.suspendedLanes,
                i = r.pingedLanes;
              ((a = (1 << (31 - Ze(42 | e) + 1)) - 1),
                (a &= l & ~(o & ~i)),
                (a = a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
            }
            a !== 0 && ((t = !0), Cf(r, a));
          } else
            ((a = W),
              (a = zl(
                r,
                r === ce ? a : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
              )),
              (a & 3) === 0 || _r(r, a) || ((t = !0), Cf(r, a)));
          r = r.next;
        }
      while (t);
      Di = !1;
    }
  }
  function cm() {
    Sf();
  }
  function Sf() {
    xa = Ri = !1;
    var e = 0;
    ht !== 0 && wm() && (e = ht);
    for (var n = Xe(), t = null, r = Sa; r !== null; ) {
      var l = r.next,
        a = xf(r, n);
      (a === 0
        ? ((r.next = null),
          t === null ? (Sa = l) : (t.next = l),
          l === null && (Sr = t))
        : ((t = r), (e !== 0 || (a & 3) !== 0) && (xa = !0)),
        (r = l));
    }
    ((Ce !== 0 && Ce !== 5) || cl(e), ht !== 0 && (ht = 0));
  }
  function xf(e, n) {
    for (
      var t = e.suspendedLanes,
        r = e.pingedLanes,
        l = e.expirationTimes,
        a = e.pendingLanes & -62914561;
      0 < a;

    ) {
      var o = 31 - Ze(a),
        i = 1 << o,
        s = l[o];
      (s === -1
        ? ((i & t) === 0 || (i & r) !== 0) && (l[o] = Fd(i, n))
        : s <= n && (e.expiredLanes |= i),
        (a &= ~i));
    }
    if (
      ((n = ce),
      (t = W),
      (t = zl(
        e,
        e === n ? t : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (r = e.callbackNode),
      t === 0 ||
        (e === n && (te === 2 || te === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && Wa(r),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((t & 3) === 0 || _r(e, t)) {
      if (((n = t & -t), n === e.callbackPriority)) return n;
      switch ((r !== null && Wa(r), Ga(t))) {
        case 2:
        case 8:
          t = du;
          break;
        case 32:
          t = xl;
          break;
        case 268435456:
          t = pu;
          break;
        default:
          t = xl;
      }
      return (
        (r = Ef.bind(null, e)),
        (t = $a(t, r)),
        (e.callbackPriority = n),
        (e.callbackNode = t),
        n
      );
    }
    return (
      r !== null && r !== null && Wa(r),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Ef(e, n) {
    if (Ce !== 0 && Ce !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var t = e.callbackNode;
    if (wa() && e.callbackNode !== t) return null;
    var r = W;
    return (
      (r = zl(
        e,
        e === ce ? r : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      r === 0
        ? null
        : (lf(e, r, n),
          xf(e, Xe()),
          e.callbackNode != null && e.callbackNode === t
            ? Ef.bind(null, e)
            : null)
    );
  }
  function Cf(e, n) {
    if (wa()) return null;
    lf(e, n, !0);
  }
  function fm() {
    xm(function () {
      (ee & 6) !== 0 ? $a(fu, cm) : Sf();
    });
  }
  function Ai() {
    if (ht === 0) {
      var e = ir;
      (e === 0 && ((e = El), (El <<= 1), (El & 261888) === 0 && (El = 256)),
        (ht = e));
    }
    return ht;
  }
  function Nf(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : Ll('' + e);
  }
  function zf(e, n) {
    var t = n.ownerDocument.createElement('input');
    return (
      (t.name = n.name),
      (t.value = n.value),
      e.id && t.setAttribute('form', e.id),
      n.parentNode.insertBefore(t, n),
      (e = new FormData(e)),
      t.parentNode.removeChild(t),
      e
    );
  }
  function dm(e, n, t, r, l) {
    if (n === 'submit' && t && t.stateNode === l) {
      var a = Nf((l[Be] || null).action),
        o = r.submitter;
      o &&
        ((n = (n = o[Be] || null)
          ? Nf(n.formAction)
          : o.getAttribute('formAction')),
        n !== null && ((a = n), (o = null)));
      var i = new Dl('action', 'action', null, r, l);
      e.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (ht !== 0) {
                  var s = o ? zf(l, o) : new FormData(l);
                  ti(
                    t,
                    { pending: !0, data: s, method: l.method, action: a },
                    null,
                    s,
                  );
                }
              } else
                typeof a == 'function' &&
                  (i.preventDefault(),
                  (s = o ? zf(l, o) : new FormData(l)),
                  ti(
                    t,
                    { pending: !0, data: s, method: l.method, action: a },
                    a,
                    s,
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Fi = 0; Fi < bo.length; Fi++) {
    var Ii = bo[Fi],
      pm = Ii.toLowerCase(),
      mm = Ii[0].toUpperCase() + Ii.slice(1);
    vn(pm, 'on' + mm);
  }
  (vn(rs, 'onAnimationEnd'),
    vn(ls, 'onAnimationIteration'),
    vn(as, 'onAnimationStart'),
    vn('dblclick', 'onDoubleClick'),
    vn('focusin', 'onFocus'),
    vn('focusout', 'onBlur'),
    vn(Tp, 'onTransitionRun'),
    vn(Lp, 'onTransitionStart'),
    vn(jp, 'onTransitionCancel'),
    vn(os, 'onTransitionEnd'),
    Qt('onMouseEnter', ['mouseout', 'mouseover']),
    Qt('onMouseLeave', ['mouseout', 'mouseover']),
    Qt('onPointerEnter', ['pointerout', 'pointerover']),
    Qt('onPointerLeave', ['pointerout', 'pointerover']),
    Ct(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' ',
      ),
    ),
    Ct(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Ct('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ct(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ct(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ct(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var fl =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    hm = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(fl),
    );
  function Pf(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.event;
      r = r.listeners;
      e: {
        var a = void 0;
        if (n)
          for (var o = r.length - 1; 0 <= o; o--) {
            var i = r[o],
              s = i.instance,
              m = i.currentTarget;
            if (((i = i.listener), s !== a && l.isPropagationStopped()))
              break e;
            ((a = i), (l.currentTarget = m));
            try {
              a(l);
            } catch (y) {
              Il(y);
            }
            ((l.currentTarget = null), (a = s));
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((i = r[o]),
              (s = i.instance),
              (m = i.currentTarget),
              (i = i.listener),
              s !== a && l.isPropagationStopped())
            )
              break e;
            ((a = i), (l.currentTarget = m));
            try {
              a(l);
            } catch (y) {
              Il(y);
            }
            ((l.currentTarget = null), (a = s));
          }
      }
    }
  }
  function $(e, n) {
    var t = n[Xa];
    t === void 0 && (t = n[Xa] = new Set());
    var r = e + '__bubble';
    t.has(r) || (_f(n, e, 2, !1), t.add(r));
  }
  function Mi(e, n, t) {
    var r = 0;
    (n && (r |= 4), _f(t, e, r, n));
  }
  var Ea = '_reactListening' + Math.random().toString(36).slice(2);
  function Hi(e) {
    if (!e[Ea]) {
      ((e[Ea] = !0),
        wu.forEach(function (t) {
          t !== 'selectionchange' && (hm.has(t) || Mi(t, !1, e), Mi(t, !0, e));
        }));
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ea] || ((n[Ea] = !0), Mi('selectionchange', !1, n));
    }
  }
  function _f(e, n, t, r) {
    switch (ld(n)) {
      case 2:
        var l = qm;
        break;
      case 8:
        l = Vm;
        break;
      default:
        l = nu;
    }
    ((t = l.bind(null, n, t, e)),
      (l = void 0),
      !ao ||
        (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
        (l = !0),
      r
        ? l !== void 0
          ? e.addEventListener(n, t, { capture: !0, passive: l })
          : e.addEventListener(n, t, !0)
        : l !== void 0
          ? e.addEventListener(n, t, { passive: l })
          : e.addEventListener(n, t, !1));
  }
  function Ui(e, n, t, r, l) {
    var a = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var i = r.stateNode.containerInfo;
          if (i === l) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var s = o.tag;
              if ((s === 3 || s === 4) && o.stateNode.containerInfo === l)
                return;
              o = o.return;
            }
          for (; i !== null; ) {
            if (((o = Vt(i)), o === null)) return;
            if (((s = o.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              r = a = o;
              continue e;
            }
            i = i.parentNode;
          }
        }
        r = r.return;
      }
    Ou(function () {
      var m = a,
        y = ro(t),
        w = [];
      e: {
        var h = is.get(e);
        if (h !== void 0) {
          var g = Dl,
            P = e;
          switch (e) {
            case 'keypress':
              if (Ol(t) === 0) break e;
            case 'keydown':
            case 'keyup':
              g = up;
              break;
            case 'focusin':
              ((P = 'focus'), (g = so));
              break;
            case 'focusout':
              ((P = 'blur'), (g = so));
              break;
            case 'beforeblur':
            case 'afterblur':
              g = so;
              break;
            case 'click':
              if (t.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              g = Au;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              g = Xd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              g = fp;
              break;
            case rs:
            case ls:
            case as:
              g = Jd;
              break;
            case os:
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
              g = Iu;
              break;
            case 'toggle':
            case 'beforetoggle':
              g = yp;
          }
          var A = (n & 4) !== 0,
            ie = !A && (e === 'scroll' || e === 'scrollend'),
            d = A ? (h !== null ? h + 'Capture' : null) : h;
          A = [];
          for (var c = m, p; c !== null; ) {
            var b = c;
            if (
              ((p = b.stateNode),
              (b = b.tag),
              (b !== 5 && b !== 26 && b !== 27) ||
                p === null ||
                d === null ||
                ((b = Or(c, d)), b != null && A.push(dl(c, b, p))),
              ie)
            )
              break;
            c = c.return;
          }
          0 < A.length &&
            ((h = new g(h, P, null, t, y)), w.push({ event: h, listeners: A }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (
            ((h = e === 'mouseover' || e === 'pointerover'),
            (g = e === 'mouseout' || e === 'pointerout'),
            h &&
              t !== to &&
              (P = t.relatedTarget || t.fromElement) &&
              (Vt(P) || P[qt]))
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
              ? ((P = t.relatedTarget || t.toElement),
                (g = m),
                (P = P ? Vt(P) : null),
                P !== null &&
                  ((ie = O(P)),
                  (A = P.tag),
                  P !== ie || (A !== 5 && A !== 27 && A !== 6)) &&
                  (P = null))
              : ((g = null), (P = m)),
            g !== P)
          ) {
            if (
              ((A = Au),
              (b = 'onMouseLeave'),
              (d = 'onMouseEnter'),
              (c = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((A = Iu),
                (b = 'onPointerLeave'),
                (d = 'onPointerEnter'),
                (c = 'pointer')),
              (ie = g == null ? h : jr(g)),
              (p = P == null ? h : jr(P)),
              (h = new A(b, c + 'leave', g, t, y)),
              (h.target = ie),
              (h.relatedTarget = p),
              (b = null),
              Vt(y) === m &&
                ((A = new A(d, c + 'enter', P, t, y)),
                (A.target = p),
                (A.relatedTarget = ie),
                (b = A)),
              (ie = b),
              g && P)
            )
              n: {
                for (A = gm, d = g, c = P, p = 0, b = d; b; b = A(b)) p++;
                b = 0;
                for (var R = c; R; R = A(R)) b++;
                for (; 0 < p - b; ) ((d = A(d)), p--);
                for (; 0 < b - p; ) ((c = A(c)), b--);
                for (; p--; ) {
                  if (d === c || (c !== null && d === c.alternate)) {
                    A = d;
                    break n;
                  }
                  ((d = A(d)), (c = A(c)));
                }
                A = null;
              }
            else A = null;
            (g !== null && Tf(w, h, g, A, !1),
              P !== null && ie !== null && Tf(w, ie, P, A, !0));
          }
        }
        e: {
          if (
            ((h = m ? jr(m) : window),
            (g = h.nodeName && h.nodeName.toLowerCase()),
            g === 'select' || (g === 'input' && h.type === 'file'))
          )
            var Z = Wu;
          else if (Vu(h))
            if (Qu) Z = zp;
            else {
              Z = Cp;
              var T = Ep;
            }
          else
            ((g = h.nodeName),
              !g ||
              g.toLowerCase() !== 'input' ||
              (h.type !== 'checkbox' && h.type !== 'radio')
                ? m && no(m.elementType) && (Z = Wu)
                : (Z = Np));
          if (Z && (Z = Z(e, m))) {
            $u(w, Z, t, y);
            break e;
          }
          (T && T(e, h, m),
            e === 'focusout' &&
              m &&
              h.type === 'number' &&
              m.memoizedProps.value != null &&
              eo(h, 'number', h.value));
        }
        switch (((T = m ? jr(m) : window), e)) {
          case 'focusin':
            (Vu(T) || T.contentEditable === 'true') &&
              ((Jt = T), (go = m), (Ur = null));
            break;
          case 'focusout':
            Ur = go = Jt = null;
            break;
          case 'mousedown':
            yo = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((yo = !1), ns(w, t, y));
            break;
          case 'selectionchange':
            if (_p) break;
          case 'keydown':
          case 'keyup':
            ns(w, t, y);
        }
        var B;
        if (fo)
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
          Zt
            ? Bu(e, t) && (Q = 'onCompositionEnd')
            : e === 'keydown' &&
              t.keyCode === 229 &&
              (Q = 'onCompositionStart');
        (Q &&
          (Mu &&
            t.locale !== 'ko' &&
            (Zt || Q !== 'onCompositionStart'
              ? Q === 'onCompositionEnd' && Zt && (B = Ru())
              : ((Jn = y),
                (oo = 'value' in Jn ? Jn.value : Jn.textContent),
                (Zt = !0))),
          (T = Ca(m, Q)),
          0 < T.length &&
            ((Q = new Fu(Q, e, null, t, y)),
            w.push({ event: Q, listeners: T }),
            B ? (Q.data = B) : ((B = qu(t)), B !== null && (Q.data = B)))),
          (B = bp ? kp(e, t) : wp(e, t)) &&
            ((Q = Ca(m, 'onBeforeInput')),
            0 < Q.length &&
              ((T = new Fu('onBeforeInput', 'beforeinput', null, t, y)),
              w.push({ event: T, listeners: Q }),
              (T.data = B))),
          dm(w, e, m, t, y));
      }
      Pf(w, n);
    });
  }
  function dl(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Ca(e, n) {
    for (var t = n + 'Capture', r = []; e !== null; ) {
      var l = e,
        a = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          a === null ||
          ((l = Or(e, t)),
          l != null && r.unshift(dl(e, l, a)),
          (l = Or(e, n)),
          l != null && r.push(dl(e, l, a))),
        e.tag === 3)
      )
        return r;
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
  function Tf(e, n, t, r, l) {
    for (var a = n._reactName, o = []; t !== null && t !== r; ) {
      var i = t,
        s = i.alternate,
        m = i.stateNode;
      if (((i = i.tag), s !== null && s === r)) break;
      ((i !== 5 && i !== 26 && i !== 27) ||
        m === null ||
        ((s = m),
        l
          ? ((m = Or(t, a)), m != null && o.unshift(dl(t, m, s)))
          : l || ((m = Or(t, a)), m != null && o.push(dl(t, m, s)))),
        (t = t.return));
    }
    o.length !== 0 && e.push({ event: n, listeners: o });
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
  function jf(e, n) {
    return ((n = Lf(n)), Lf(e) === n);
  }
  function oe(e, n, t, r, l, a) {
    switch (t) {
      case 'children':
        typeof r == 'string'
          ? n === 'body' || (n === 'textarea' && r === '') || Gt(e, r)
          : (typeof r == 'number' || typeof r == 'bigint') &&
            n !== 'body' &&
            Gt(e, '' + r);
        break;
      case 'className':
        _l(e, 'class', r);
        break;
      case 'tabIndex':
        _l(e, 'tabindex', r);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        _l(e, t, r);
        break;
      case 'style':
        Lu(e, r, a);
        break;
      case 'data':
        if (n !== 'object') {
          _l(e, 'data', r);
          break;
        }
      case 'src':
      case 'href':
        if (r === '' && (n !== 'a' || t !== 'href')) {
          e.removeAttribute(t);
          break;
        }
        if (
          r == null ||
          typeof r == 'function' ||
          typeof r == 'symbol' ||
          typeof r == 'boolean'
        ) {
          e.removeAttribute(t);
          break;
        }
        ((r = Ll('' + r)), e.setAttribute(t, r));
        break;
      case 'action':
      case 'formAction':
        if (typeof r == 'function') {
          e.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof a == 'function' &&
            (t === 'formAction'
              ? (n !== 'input' && oe(e, n, 'name', l.name, l, null),
                oe(e, n, 'formEncType', l.formEncType, l, null),
                oe(e, n, 'formMethod', l.formMethod, l, null),
                oe(e, n, 'formTarget', l.formTarget, l, null))
              : (oe(e, n, 'encType', l.encType, l, null),
                oe(e, n, 'method', l.method, l, null),
                oe(e, n, 'target', l.target, l, null)));
        if (r == null || typeof r == 'symbol' || typeof r == 'boolean') {
          e.removeAttribute(t);
          break;
        }
        ((r = Ll('' + r)), e.setAttribute(t, r));
        break;
      case 'onClick':
        r != null && (e.onclick = On);
        break;
      case 'onScroll':
        r != null && $('scroll', e);
        break;
      case 'onScrollEnd':
        r != null && $('scrollend', e);
        break;
      case 'dangerouslySetInnerHTML':
        if (r != null) {
          if (typeof r != 'object' || !('__html' in r)) throw Error(u(61));
          if (((t = r.__html), t != null)) {
            if (l.children != null) throw Error(u(60));
            e.innerHTML = t;
          }
        }
        break;
      case 'multiple':
        e.multiple = r && typeof r != 'function' && typeof r != 'symbol';
        break;
      case 'muted':
        e.muted = r && typeof r != 'function' && typeof r != 'symbol';
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
          r == null ||
          typeof r == 'function' ||
          typeof r == 'boolean' ||
          typeof r == 'symbol'
        ) {
          e.removeAttribute('xlink:href');
          break;
        }
        ((t = Ll('' + r)),
          e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', t));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        r != null && typeof r != 'function' && typeof r != 'symbol'
          ? e.setAttribute(t, '' + r)
          : e.removeAttribute(t);
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
        r && typeof r != 'function' && typeof r != 'symbol'
          ? e.setAttribute(t, '')
          : e.removeAttribute(t);
        break;
      case 'capture':
      case 'download':
        r === !0
          ? e.setAttribute(t, '')
          : r !== !1 &&
              r != null &&
              typeof r != 'function' &&
              typeof r != 'symbol'
            ? e.setAttribute(t, r)
            : e.removeAttribute(t);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        r != null &&
        typeof r != 'function' &&
        typeof r != 'symbol' &&
        !isNaN(r) &&
        1 <= r
          ? e.setAttribute(t, r)
          : e.removeAttribute(t);
        break;
      case 'rowSpan':
      case 'start':
        r == null || typeof r == 'function' || typeof r == 'symbol' || isNaN(r)
          ? e.removeAttribute(t)
          : e.setAttribute(t, r);
        break;
      case 'popover':
        ($('beforetoggle', e), $('toggle', e), Pl(e, 'popover', r));
        break;
      case 'xlinkActuate':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', r);
        break;
      case 'xlinkArcrole':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', r);
        break;
      case 'xlinkRole':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', r);
        break;
      case 'xlinkShow':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', r);
        break;
      case 'xlinkTitle':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', r);
        break;
      case 'xlinkType':
        jn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', r);
        break;
      case 'xmlBase':
        jn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', r);
        break;
      case 'xmlLang':
        jn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', r);
        break;
      case 'xmlSpace':
        jn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', r);
        break;
      case 'is':
        Pl(e, 'is', r);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
          ((t = Wd.get(t) || t), Pl(e, t, r));
    }
  }
  function Bi(e, n, t, r, l, a) {
    switch (t) {
      case 'style':
        Lu(e, r, a);
        break;
      case 'dangerouslySetInnerHTML':
        if (r != null) {
          if (typeof r != 'object' || !('__html' in r)) throw Error(u(61));
          if (((t = r.__html), t != null)) {
            if (l.children != null) throw Error(u(60));
            e.innerHTML = t;
          }
        }
        break;
      case 'children':
        typeof r == 'string'
          ? Gt(e, r)
          : (typeof r == 'number' || typeof r == 'bigint') && Gt(e, '' + r);
        break;
      case 'onScroll':
        r != null && $('scroll', e);
        break;
      case 'onScrollEnd':
        r != null && $('scrollend', e);
        break;
      case 'onClick':
        r != null && (e.onclick = On);
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
        if (!Su.hasOwnProperty(t))
          e: {
            if (
              t[0] === 'o' &&
              t[1] === 'n' &&
              ((l = t.endsWith('Capture')),
              (n = t.slice(2, l ? t.length - 7 : void 0)),
              (a = e[Be] || null),
              (a = a != null ? a[t] : null),
              typeof a == 'function' && e.removeEventListener(n, a, l),
              typeof r == 'function')
            ) {
              (typeof a != 'function' &&
                a !== null &&
                (t in e
                  ? (e[t] = null)
                  : e.hasAttribute(t) && e.removeAttribute(t)),
                e.addEventListener(n, r, l));
              break e;
            }
            t in e
              ? (e[t] = r)
              : r === !0
                ? e.setAttribute(t, '')
                : Pl(e, t, r);
          }
    }
  }
  function je(e, n, t) {
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
        ($('error', e), $('load', e));
        var r = !1,
          l = !1,
          a;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var o = t[a];
            if (o != null)
              switch (a) {
                case 'src':
                  r = !0;
                  break;
                case 'srcSet':
                  l = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(u(137, n));
                default:
                  oe(e, n, a, o, t, null);
              }
          }
        (l && oe(e, n, 'srcSet', t.srcSet, t, null),
          r && oe(e, n, 'src', t.src, t, null));
        return;
      case 'input':
        $('invalid', e);
        var i = (a = o = l = null),
          s = null,
          m = null;
        for (r in t)
          if (t.hasOwnProperty(r)) {
            var y = t[r];
            if (y != null)
              switch (r) {
                case 'name':
                  l = y;
                  break;
                case 'type':
                  o = y;
                  break;
                case 'checked':
                  s = y;
                  break;
                case 'defaultChecked':
                  m = y;
                  break;
                case 'value':
                  a = y;
                  break;
                case 'defaultValue':
                  i = y;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (y != null) throw Error(u(137, n));
                  break;
                default:
                  oe(e, n, r, y, t, null);
              }
          }
        zu(e, a, i, s, m, o, l, !1);
        return;
      case 'select':
        ($('invalid', e), (r = o = a = null));
        for (l in t)
          if (t.hasOwnProperty(l) && ((i = t[l]), i != null))
            switch (l) {
              case 'value':
                a = i;
                break;
              case 'defaultValue':
                o = i;
                break;
              case 'multiple':
                r = i;
              default:
                oe(e, n, l, i, t, null);
            }
        ((n = a),
          (t = o),
          (e.multiple = !!r),
          n != null ? Kt(e, !!r, n, !1) : t != null && Kt(e, !!r, t, !0));
        return;
      case 'textarea':
        ($('invalid', e), (a = l = r = null));
        for (o in t)
          if (t.hasOwnProperty(o) && ((i = t[o]), i != null))
            switch (o) {
              case 'value':
                r = i;
                break;
              case 'defaultValue':
                l = i;
                break;
              case 'children':
                a = i;
                break;
              case 'dangerouslySetInnerHTML':
                if (i != null) throw Error(u(91));
                break;
              default:
                oe(e, n, o, i, t, null);
            }
        _u(e, r, l, a);
        return;
      case 'option':
        for (s in t)
          if (t.hasOwnProperty(s) && ((r = t[s]), r != null))
            switch (s) {
              case 'selected':
                e.selected =
                  r && typeof r != 'function' && typeof r != 'symbol';
                break;
              default:
                oe(e, n, s, r, t, null);
            }
        return;
      case 'dialog':
        ($('beforetoggle', e), $('toggle', e), $('cancel', e), $('close', e));
        break;
      case 'iframe':
      case 'object':
        $('load', e);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < fl.length; r++) $(fl[r], e);
        break;
      case 'image':
        ($('error', e), $('load', e));
        break;
      case 'details':
        $('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        ($('error', e), $('load', e));
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
        for (m in t)
          if (t.hasOwnProperty(m) && ((r = t[m]), r != null))
            switch (m) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(u(137, n));
              default:
                oe(e, n, m, r, t, null);
            }
        return;
      default:
        if (no(n)) {
          for (y in t)
            t.hasOwnProperty(y) &&
              ((r = t[y]), r !== void 0 && Bi(e, n, y, r, t, void 0));
          return;
        }
    }
    for (i in t)
      t.hasOwnProperty(i) && ((r = t[i]), r != null && oe(e, n, i, r, t, null));
  }
  function bm(e, n, t, r) {
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
        var l = null,
          a = null,
          o = null,
          i = null,
          s = null,
          m = null,
          y = null;
        for (g in t) {
          var w = t[g];
          if (t.hasOwnProperty(g) && w != null)
            switch (g) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                s = w;
              default:
                r.hasOwnProperty(g) || oe(e, n, g, null, r, w);
            }
        }
        for (var h in r) {
          var g = r[h];
          if (((w = t[h]), r.hasOwnProperty(h) && (g != null || w != null)))
            switch (h) {
              case 'type':
                a = g;
                break;
              case 'name':
                l = g;
                break;
              case 'checked':
                m = g;
                break;
              case 'defaultChecked':
                y = g;
                break;
              case 'value':
                o = g;
                break;
              case 'defaultValue':
                i = g;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (g != null) throw Error(u(137, n));
                break;
              default:
                g !== w && oe(e, n, h, g, r, w);
            }
        }
        Ja(e, o, i, s, m, y, a, l);
        return;
      case 'select':
        g = o = i = h = null;
        for (a in t)
          if (((s = t[a]), t.hasOwnProperty(a) && s != null))
            switch (a) {
              case 'value':
                break;
              case 'multiple':
                g = s;
              default:
                r.hasOwnProperty(a) || oe(e, n, a, null, r, s);
            }
        for (l in r)
          if (
            ((a = r[l]),
            (s = t[l]),
            r.hasOwnProperty(l) && (a != null || s != null))
          )
            switch (l) {
              case 'value':
                h = a;
                break;
              case 'defaultValue':
                i = a;
                break;
              case 'multiple':
                o = a;
              default:
                a !== s && oe(e, n, l, a, r, s);
            }
        ((n = i),
          (t = o),
          (r = g),
          h != null
            ? Kt(e, !!t, h, !1)
            : !!r != !!t &&
              (n != null ? Kt(e, !!t, n, !0) : Kt(e, !!t, t ? [] : '', !1)));
        return;
      case 'textarea':
        g = h = null;
        for (i in t)
          if (
            ((l = t[i]),
            t.hasOwnProperty(i) && l != null && !r.hasOwnProperty(i))
          )
            switch (i) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                oe(e, n, i, null, r, l);
            }
        for (o in r)
          if (
            ((l = r[o]),
            (a = t[o]),
            r.hasOwnProperty(o) && (l != null || a != null))
          )
            switch (o) {
              case 'value':
                h = l;
                break;
              case 'defaultValue':
                g = l;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (l != null) throw Error(u(91));
                break;
              default:
                l !== a && oe(e, n, o, l, r, a);
            }
        Pu(e, h, g);
        return;
      case 'option':
        for (var P in t)
          if (
            ((h = t[P]),
            t.hasOwnProperty(P) && h != null && !r.hasOwnProperty(P))
          )
            switch (P) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                oe(e, n, P, null, r, h);
            }
        for (s in r)
          if (
            ((h = r[s]),
            (g = t[s]),
            r.hasOwnProperty(s) && h !== g && (h != null || g != null))
          )
            switch (s) {
              case 'selected':
                e.selected =
                  h && typeof h != 'function' && typeof h != 'symbol';
                break;
              default:
                oe(e, n, s, h, r, g);
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
        for (var A in t)
          ((h = t[A]),
            t.hasOwnProperty(A) &&
              h != null &&
              !r.hasOwnProperty(A) &&
              oe(e, n, A, null, r, h));
        for (m in r)
          if (
            ((h = r[m]),
            (g = t[m]),
            r.hasOwnProperty(m) && h !== g && (h != null || g != null))
          )
            switch (m) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (h != null) throw Error(u(137, n));
                break;
              default:
                oe(e, n, m, h, r, g);
            }
        return;
      default:
        if (no(n)) {
          for (var ie in t)
            ((h = t[ie]),
              t.hasOwnProperty(ie) &&
                h !== void 0 &&
                !r.hasOwnProperty(ie) &&
                Bi(e, n, ie, void 0, r, h));
          for (y in r)
            ((h = r[y]),
              (g = t[y]),
              !r.hasOwnProperty(y) ||
                h === g ||
                (h === void 0 && g === void 0) ||
                Bi(e, n, y, h, r, g));
          return;
        }
    }
    for (var d in t)
      ((h = t[d]),
        t.hasOwnProperty(d) &&
          h != null &&
          !r.hasOwnProperty(d) &&
          oe(e, n, d, null, r, h));
    for (w in r)
      ((h = r[w]),
        (g = t[w]),
        !r.hasOwnProperty(w) ||
          h === g ||
          (h == null && g == null) ||
          oe(e, n, w, h, r, g));
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
        var e = 0, n = 0, t = performance.getEntriesByType('resource'), r = 0;
        r < t.length;
        r++
      ) {
        var l = t[r],
          a = l.transferSize,
          o = l.initiatorType,
          i = l.duration;
        if (a && i && Of(o)) {
          for (o = 0, i = l.responseEnd, r += 1; r < t.length; r++) {
            var s = t[r],
              m = s.startTime;
            if (m > i) break;
            var y = s.transferSize,
              w = s.initiatorType;
            y &&
              Of(w) &&
              ((s = s.responseEnd), (o += y * (s < i ? 1 : (i - m) / (s - m))));
          }
          if ((--r, (n += (8 * (a + o)) / (l.duration / 1e3)), e++, 10 < e))
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
  var qi = null,
    Vi = null;
  function Na(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Rf(e) {
    switch (e) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Df(e, n) {
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
  function $i(e, n) {
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
  var Wi = null;
  function wm() {
    var e = window.event;
    return e && e.type === 'popstate'
      ? e === Wi
        ? !1
        : ((Wi = e), !0)
      : ((Wi = null), !1);
  }
  var Af = typeof setTimeout == 'function' ? setTimeout : void 0,
    Sm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Ff = typeof Promise == 'function' ? Promise : void 0,
    xm =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Ff < 'u'
          ? function (e) {
              return Ff.resolve(null).then(e).catch(Em);
            }
          : Af;
  function Em(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function gt(e) {
    return e === 'head';
  }
  function If(e, n) {
    var t = n,
      r = 0;
    do {
      var l = t.nextSibling;
      if ((e.removeChild(t), l && l.nodeType === 8))
        if (((t = l.data), t === '/$' || t === '/&')) {
          if (r === 0) {
            (e.removeChild(l), Nr(n));
            return;
          }
          r--;
        } else if (
          t === '$' ||
          t === '$?' ||
          t === '$~' ||
          t === '$!' ||
          t === '&'
        )
          r++;
        else if (t === 'html') pl(e.ownerDocument.documentElement);
        else if (t === 'head') {
          ((t = e.ownerDocument.head), pl(t));
          for (var a = t.firstChild; a; ) {
            var o = a.nextSibling,
              i = a.nodeName;
            (a[Lr] ||
              i === 'SCRIPT' ||
              i === 'STYLE' ||
              (i === 'LINK' && a.rel.toLowerCase() === 'stylesheet') ||
              t.removeChild(a),
              (a = o));
          }
        } else t === 'body' && pl(e.ownerDocument.body);
      t = l;
    } while (t);
    Nr(n);
  }
  function Mf(e, n) {
    var t = e;
    e = 0;
    do {
      var r = t.nextSibling;
      if (
        (t.nodeType === 1
          ? n
            ? ((t._stashedDisplay = t.style.display),
              (t.style.display = 'none'))
            : ((t.style.display = t._stashedDisplay || ''),
              t.getAttribute('style') === '' && t.removeAttribute('style'))
          : t.nodeType === 3 &&
            (n
              ? ((t._stashedText = t.nodeValue), (t.nodeValue = ''))
              : (t.nodeValue = t._stashedText || '')),
        r && r.nodeType === 8)
      )
        if (((t = r.data), t === '/$')) {
          if (e === 0) break;
          e--;
        } else (t !== '$' && t !== '$?' && t !== '$~' && t !== '$!') || e++;
      t = r;
    } while (t);
  }
  function Qi(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var t = n;
      switch (((n = n.nextSibling), t.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (Qi(t), Ya(t));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (t.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(t);
    }
  }
  function Cm(e, n, t, r) {
    for (; e.nodeType === 1; ) {
      var l = t;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!r && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (r) {
        if (!e[Lr])
          switch (n) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((a = e.getAttribute('rel')),
                (a === 'stylesheet' && e.hasAttribute('data-precedence')) ||
                  a !== l.rel ||
                  e.getAttribute('href') !==
                    (l.href == null || l.href === '' ? null : l.href) ||
                  e.getAttribute('crossorigin') !==
                    (l.crossOrigin == null ? null : l.crossOrigin) ||
                  e.getAttribute('title') !==
                    (l.title == null ? null : l.title))
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((a = e.getAttribute('src')),
                (a !== (l.src == null ? null : l.src) ||
                  e.getAttribute('type') !== (l.type == null ? null : l.type) ||
                  e.getAttribute('crossorigin') !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  a &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (n === 'input' && e.type === 'hidden') {
        var a = l.name == null ? null : '' + l.name;
        if (l.type === 'hidden' && e.getAttribute('name') === a) return e;
      } else return e;
      if (((e = mn(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Nm(e, n, t) {
    if (n === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !t) ||
        ((e = mn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Hf(e, n) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
          !n) ||
        ((e = mn(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Ki(e) {
    return e.data === '$?' || e.data === '$~';
  }
  function Gi(e) {
    return (
      e.data === '$!' ||
      (e.data === '$?' && e.ownerDocument.readyState !== 'loading')
    );
  }
  function zm(e, n) {
    var t = e.ownerDocument;
    if (e.data === '$~') e._reactRetry = n;
    else if (e.data !== '$?' || t.readyState !== 'loading') n();
    else {
      var r = function () {
        (n(), t.removeEventListener('DOMContentLoaded', r));
      };
      (t.addEventListener('DOMContentLoaded', r), (e._reactRetry = r));
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
  var Xi = null;
  function Uf(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === '/$' || t === '/&') {
          if (n === 0) return mn(e.nextSibling);
          n--;
        } else
          (t !== '$' && t !== '$!' && t !== '$?' && t !== '$~' && t !== '&') ||
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
        var t = e.data;
        if (t === '$' || t === '$!' || t === '$?' || t === '$~' || t === '&') {
          if (n === 0) return e;
          n--;
        } else (t !== '/$' && t !== '/&') || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function qf(e, n, t) {
    switch (((n = Na(t)), e)) {
      case 'html':
        if (((e = n.documentElement), !e)) throw Error(u(452));
        return e;
      case 'head':
        if (((e = n.head), !e)) throw Error(u(453));
        return e;
      case 'body':
        if (((e = n.body), !e)) throw Error(u(454));
        return e;
      default:
        throw Error(u(451));
    }
  }
  function pl(e) {
    for (var n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
    Ya(e);
  }
  var hn = new Map(),
    Vf = new Set();
  function za(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Gn = N.d;
  N.d = { f: Pm, r: _m, D: Tm, C: Lm, L: jm, m: Om, X: Dm, S: Rm, M: Am };
  function Pm() {
    var e = Gn.f(),
      n = va();
    return e || n;
  }
  function _m(e) {
    var n = $t(e);
    n !== null && n.tag === 5 && n.type === 'form' ? oc(n) : Gn.r(e);
  }
  var xr = typeof document > 'u' ? null : document;
  function $f(e, n, t) {
    var r = xr;
    if (r && typeof n == 'string' && n) {
      var l = yn(n);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof t == 'string' && (l += '[crossorigin="' + t + '"]'),
        Vf.has(l) ||
          (Vf.add(l),
          (e = { rel: e, crossOrigin: t, href: n }),
          r.querySelector(l) === null &&
            ((n = r.createElement('link')),
            je(n, 'link', e),
            Ne(n),
            r.head.appendChild(n))));
    }
  }
  function Tm(e) {
    (Gn.D(e), $f('dns-prefetch', e, null));
  }
  function Lm(e, n) {
    (Gn.C(e, n), $f('preconnect', e, n));
  }
  function jm(e, n, t) {
    Gn.L(e, n, t);
    var r = xr;
    if (r && e && n) {
      var l = 'link[rel="preload"][as="' + yn(n) + '"]';
      n === 'image' && t && t.imageSrcSet
        ? ((l += '[imagesrcset="' + yn(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == 'string' &&
            (l += '[imagesizes="' + yn(t.imageSizes) + '"]'))
        : (l += '[href="' + yn(e) + '"]');
      var a = l;
      switch (n) {
        case 'style':
          a = Er(e);
          break;
        case 'script':
          a = Cr(e);
      }
      hn.has(a) ||
        ((e = D(
          {
            rel: 'preload',
            href: n === 'image' && t && t.imageSrcSet ? void 0 : e,
            as: n,
          },
          t,
        )),
        hn.set(a, e),
        r.querySelector(l) !== null ||
          (n === 'style' && r.querySelector(ml(a))) ||
          (n === 'script' && r.querySelector(hl(a))) ||
          ((n = r.createElement('link')),
          je(n, 'link', e),
          Ne(n),
          r.head.appendChild(n)));
    }
  }
  function Om(e, n) {
    Gn.m(e, n);
    var t = xr;
    if (t && e) {
      var r = n && typeof n.as == 'string' ? n.as : 'script',
        l =
          'link[rel="modulepreload"][as="' + yn(r) + '"][href="' + yn(e) + '"]',
        a = l;
      switch (r) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          a = Cr(e);
      }
      if (
        !hn.has(a) &&
        ((e = D({ rel: 'modulepreload', href: e }, n)),
        hn.set(a, e),
        t.querySelector(l) === null)
      ) {
        switch (r) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (t.querySelector(hl(a))) return;
        }
        ((r = t.createElement('link')),
          je(r, 'link', e),
          Ne(r),
          t.head.appendChild(r));
      }
    }
  }
  function Rm(e, n, t) {
    Gn.S(e, n, t);
    var r = xr;
    if (r && e) {
      var l = Wt(r).hoistableStyles,
        a = Er(e);
      n = n || 'default';
      var o = l.get(a);
      if (!o) {
        var i = { loading: 0, preload: null };
        if ((o = r.querySelector(ml(a)))) i.loading = 5;
        else {
          ((e = D({ rel: 'stylesheet', href: e, 'data-precedence': n }, t)),
            (t = hn.get(a)) && Yi(e, t));
          var s = (o = r.createElement('link'));
          (Ne(s),
            je(s, 'link', e),
            (s._p = new Promise(function (m, y) {
              ((s.onload = m), (s.onerror = y));
            })),
            s.addEventListener('load', function () {
              i.loading |= 1;
            }),
            s.addEventListener('error', function () {
              i.loading |= 2;
            }),
            (i.loading |= 4),
            Pa(o, n, r));
        }
        ((o = { type: 'stylesheet', instance: o, count: 1, state: i }),
          l.set(a, o));
      }
    }
  }
  function Dm(e, n) {
    Gn.X(e, n);
    var t = xr;
    if (t && e) {
      var r = Wt(t).hoistableScripts,
        l = Cr(e),
        a = r.get(l);
      a ||
        ((a = t.querySelector(hl(l))),
        a ||
          ((e = D({ src: e, async: !0 }, n)),
          (n = hn.get(l)) && Zi(e, n),
          (a = t.createElement('script')),
          Ne(a),
          je(a, 'link', e),
          t.head.appendChild(a)),
        (a = { type: 'script', instance: a, count: 1, state: null }),
        r.set(l, a));
    }
  }
  function Am(e, n) {
    Gn.M(e, n);
    var t = xr;
    if (t && e) {
      var r = Wt(t).hoistableScripts,
        l = Cr(e),
        a = r.get(l);
      a ||
        ((a = t.querySelector(hl(l))),
        a ||
          ((e = D({ src: e, async: !0, type: 'module' }, n)),
          (n = hn.get(l)) && Zi(e, n),
          (a = t.createElement('script')),
          Ne(a),
          je(a, 'link', e),
          t.head.appendChild(a)),
        (a = { type: 'script', instance: a, count: 1, state: null }),
        r.set(l, a));
    }
  }
  function Wf(e, n, t, r) {
    var l = (l = q.current) ? za(l) : null;
    if (!l) throw Error(u(446));
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof t.precedence == 'string' && typeof t.href == 'string'
          ? ((n = Er(t.href)),
            (t = Wt(l).hoistableStyles),
            (r = t.get(n)),
            r ||
              ((r = { type: 'style', instance: null, count: 0, state: null }),
              t.set(n, r)),
            r)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          t.rel === 'stylesheet' &&
          typeof t.href == 'string' &&
          typeof t.precedence == 'string'
        ) {
          e = Er(t.href);
          var a = Wt(l).hoistableStyles,
            o = a.get(e);
          if (
            (o ||
              ((l = l.ownerDocument || l),
              (o = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              a.set(e, o),
              (a = l.querySelector(ml(e))) &&
                !a._p &&
                ((o.instance = a), (o.state.loading = 5)),
              hn.has(e) ||
                ((t = {
                  rel: 'preload',
                  as: 'style',
                  href: t.href,
                  crossOrigin: t.crossOrigin,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy,
                }),
                hn.set(e, t),
                a || Fm(l, e, t, o.state))),
            n && r === null)
          )
            throw Error(u(528, ''));
          return o;
        }
        if (n && r !== null) throw Error(u(529, ''));
        return null;
      case 'script':
        return (
          (n = t.async),
          (t = t.src),
          typeof t == 'string' &&
          n &&
          typeof n != 'function' &&
          typeof n != 'symbol'
            ? ((n = Cr(t)),
              (t = Wt(l).hoistableScripts),
              (r = t.get(n)),
              r ||
                ((r = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(n, r)),
              r)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(u(444, e));
    }
  }
  function Er(e) {
    return 'href="' + yn(e) + '"';
  }
  function ml(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Qf(e) {
    return D({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function Fm(e, n, t, r) {
    e.querySelector('link[rel="preload"][as="style"][' + n + ']')
      ? (r.loading = 1)
      : ((n = e.createElement('link')),
        (r.preload = n),
        n.addEventListener('load', function () {
          return (r.loading |= 1);
        }),
        n.addEventListener('error', function () {
          return (r.loading |= 2);
        }),
        je(n, 'link', t),
        Ne(n),
        e.head.appendChild(n));
  }
  function Cr(e) {
    return '[src="' + yn(e) + '"]';
  }
  function hl(e) {
    return 'script[async]' + e;
  }
  function Kf(e, n, t) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case 'style':
          var r = e.querySelector('style[data-href~="' + yn(t.href) + '"]');
          if (r) return ((n.instance = r), Ne(r), r);
          var l = D({}, t, {
            'data-href': t.href,
            'data-precedence': t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (e.ownerDocument || e).createElement('style')),
            Ne(r),
            je(r, 'style', l),
            Pa(r, t.precedence, e),
            (n.instance = r)
          );
        case 'stylesheet':
          l = Er(t.href);
          var a = e.querySelector(ml(l));
          if (a) return ((n.state.loading |= 4), (n.instance = a), Ne(a), a);
          ((r = Qf(t)),
            (l = hn.get(l)) && Yi(r, l),
            (a = (e.ownerDocument || e).createElement('link')),
            Ne(a));
          var o = a;
          return (
            (o._p = new Promise(function (i, s) {
              ((o.onload = i), (o.onerror = s));
            })),
            je(a, 'link', r),
            (n.state.loading |= 4),
            Pa(a, t.precedence, e),
            (n.instance = a)
          );
        case 'script':
          return (
            (a = Cr(t.src)),
            (l = e.querySelector(hl(a)))
              ? ((n.instance = l), Ne(l), l)
              : ((r = t),
                (l = hn.get(a)) && ((r = D({}, t)), Zi(r, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement('script')),
                Ne(l),
                je(l, 'link', r),
                e.head.appendChild(l),
                (n.instance = l))
          );
        case 'void':
          return null;
        default:
          throw Error(u(443, n.type));
      }
    else
      n.type === 'stylesheet' &&
        (n.state.loading & 4) === 0 &&
        ((r = n.instance), (n.state.loading |= 4), Pa(r, t.precedence, e));
    return n.instance;
  }
  function Pa(e, n, t) {
    for (
      var r = t.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        l = r.length ? r[r.length - 1] : null,
        a = l,
        o = 0;
      o < r.length;
      o++
    ) {
      var i = r[o];
      if (i.dataset.precedence === n) a = i;
      else if (a !== l) break;
    }
    a
      ? a.parentNode.insertBefore(e, a.nextSibling)
      : ((n = t.nodeType === 9 ? t.head : t), n.insertBefore(e, n.firstChild));
  }
  function Yi(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.title == null && (e.title = n.title));
  }
  function Zi(e, n) {
    (e.crossOrigin == null && (e.crossOrigin = n.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy),
      e.integrity == null && (e.integrity = n.integrity));
  }
  var _a = null;
  function Gf(e, n, t) {
    if (_a === null) {
      var r = new Map(),
        l = (_a = new Map());
      l.set(t, r);
    } else ((l = _a), (r = l.get(t)), r || ((r = new Map()), l.set(t, r)));
    if (r.has(e)) return r;
    for (
      r.set(e, null), t = t.getElementsByTagName(e), l = 0;
      l < t.length;
      l++
    ) {
      var a = t[l];
      if (
        !(
          a[Lr] ||
          a[Pe] ||
          (e === 'link' && a.getAttribute('rel') === 'stylesheet')
        ) &&
        a.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var o = a.getAttribute(n) || '';
        o = e + o;
        var i = r.get(o);
        i ? i.push(a) : r.set(o, [a]);
      }
    }
    return r;
  }
  function Xf(e, n, t) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        t,
        n === 'title' ? e.querySelector('head > title') : null,
      ));
  }
  function Im(e, n, t) {
    if (t === 1 || n.itemProp != null) return !1;
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
  function Mm(e, n, t, r) {
    if (
      t.type === 'stylesheet' &&
      (typeof r.media != 'string' || matchMedia(r.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var l = Er(r.href),
          a = n.querySelector(ml(l));
        if (a) {
          ((n = a._p),
            n !== null &&
              typeof n == 'object' &&
              typeof n.then == 'function' &&
              (e.count++, (e = Ta.bind(e)), n.then(e, e)),
            (t.state.loading |= 4),
            (t.instance = a),
            Ne(a));
          return;
        }
        ((a = n.ownerDocument || n),
          (r = Qf(r)),
          (l = hn.get(l)) && Yi(r, l),
          (a = a.createElement('link')),
          Ne(a));
        var o = a;
        ((o._p = new Promise(function (i, s) {
          ((o.onload = i), (o.onerror = s));
        })),
          je(a, 'link', r),
          (t.instance = a));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(t, n),
        (n = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (e.count++,
          (t = Ta.bind(e)),
          n.addEventListener('load', t),
          n.addEventListener('error', t)));
    }
  }
  var Ji = 0;
  function Hm(e, n) {
    return (
      e.stylesheets && e.count === 0 && ja(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (t) {
            var r = setTimeout(function () {
              if ((e.stylesheets && ja(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                ((e.unsuspend = null), a());
              }
            }, 6e4 + n);
            0 < e.imgBytes && Ji === 0 && (Ji = 62500 * km());
            var l = setTimeout(
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
              (e.imgBytes > Ji ? 50 : 800) + n,
            );
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(r), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Ta() {
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
  function ja(e, n) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (La = new Map()),
        n.forEach(Um, e),
        (La = null),
        Ta.call(e)));
  }
  function Um(e, n) {
    if (!(n.state.loading & 4)) {
      var t = La.get(e);
      if (t) var r = t.get(null);
      else {
        ((t = new Map()), La.set(e, t));
        for (
          var l = e.querySelectorAll(
              'link[data-precedence],style[data-precedence]',
            ),
            a = 0;
          a < l.length;
          a++
        ) {
          var o = l[a];
          (o.nodeName === 'LINK' || o.getAttribute('media') !== 'not all') &&
            (t.set(o.dataset.precedence, o), (r = o));
        }
        r && t.set(null, r);
      }
      ((l = n.instance),
        (o = l.getAttribute('data-precedence')),
        (a = t.get(o) || r),
        a === r && t.set(null, l),
        t.set(o, l),
        this.count++,
        (r = Ta.bind(this)),
        l.addEventListener('load', r),
        l.addEventListener('error', r),
        a
          ? a.parentNode.insertBefore(l, a.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(l, e.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var gl = {
    $$typeof: Oe,
    Provider: null,
    Consumer: null,
    _currentValue: F,
    _currentValue2: F,
    _threadCount: 0,
  };
  function Bm(e, n, t, r, l, a, o, i, s) {
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
      (this.identifierPrefix = r),
      (this.onUncaughtError = l),
      (this.onCaughtError = a),
      (this.onRecoverableError = o),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function Zf(e, n, t, r, l, a, o, i, s, m, y, w) {
    return (
      (e = new Bm(e, n, t, o, s, m, y, w, i)),
      (n = 1),
      a === !0 && (n |= 24),
      (a = en(3, null, null, n)),
      (e.current = a),
      (a.stateNode = e),
      (n = jo()),
      n.refCount++,
      (e.pooledCache = n),
      n.refCount++,
      (a.memoizedState = { element: r, isDehydrated: t, cache: n }),
      Ao(a),
      e
    );
  }
  function Jf(e) {
    return e ? ((e = tr), e) : tr;
  }
  function ed(e, n, t, r, l, a) {
    ((l = Jf(l)),
      r.context === null ? (r.context = l) : (r.pendingContext = l),
      (r = at(n)),
      (r.payload = { element: t }),
      (a = a === void 0 ? null : a),
      a !== null && (r.callback = a),
      (t = ot(e, r, n)),
      t !== null && (Ke(t, e, n), Kr(t, e, n)));
  }
  function nd(e, n) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function eu(e, n) {
    (nd(e, n), (e = e.alternate) && nd(e, n));
  }
  function td(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = _t(e, 67108864);
      (n !== null && Ke(n, e, 67108864), eu(e, 67108864));
    }
  }
  function rd(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = an();
      n = Ka(n);
      var t = _t(e, n);
      (t !== null && Ke(t, e, n), eu(e, n));
    }
  }
  var Oa = !0;
  function qm(e, n, t, r) {
    var l = v.T;
    v.T = null;
    var a = N.p;
    try {
      ((N.p = 2), nu(e, n, t, r));
    } finally {
      ((N.p = a), (v.T = l));
    }
  }
  function Vm(e, n, t, r) {
    var l = v.T;
    v.T = null;
    var a = N.p;
    try {
      ((N.p = 8), nu(e, n, t, r));
    } finally {
      ((N.p = a), (v.T = l));
    }
  }
  function nu(e, n, t, r) {
    if (Oa) {
      var l = tu(r);
      if (l === null) (Ui(e, n, r, Ra, t), ad(e, r));
      else if (Wm(l, e, n, t, r)) r.stopPropagation();
      else if ((ad(e, r), n & 4 && -1 < $m.indexOf(e))) {
        for (; l !== null; ) {
          var a = $t(l);
          if (a !== null)
            switch (a.tag) {
              case 3:
                if (((a = a.stateNode), a.current.memoizedState.isDehydrated)) {
                  var o = Et(a.pendingLanes);
                  if (o !== 0) {
                    var i = a;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; o; ) {
                      var s = 1 << (31 - Ze(o));
                      ((i.entanglements[1] |= s), (o &= ~s));
                    }
                    (_n(a), (ee & 6) === 0 && ((ga = Xe() + 500), cl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((i = _t(a, 2)), i !== null && Ke(i, a, 2), va(), eu(a, 2));
            }
          if (((a = tu(r)), a === null && Ui(e, n, r, Ra, t), a === l)) break;
          l = a;
        }
        l !== null && r.stopPropagation();
      } else Ui(e, n, r, null, t);
    }
  }
  function tu(e) {
    return ((e = ro(e)), ru(e));
  }
  var Ra = null;
  function ru(e) {
    if (((Ra = null), (e = Vt(e)), e !== null)) {
      var n = O(e);
      if (n === null) e = null;
      else {
        var t = n.tag;
        if (t === 13) {
          if (((e = Y(n)), e !== null)) return e;
          e = null;
        } else if (t === 31) {
          if (((e = ye(n)), e !== null)) return e;
          e = null;
        } else if (t === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return ((Ra = e), null);
  }
  function ld(e) {
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
        switch (Td()) {
          case fu:
            return 2;
          case du:
            return 8;
          case xl:
          case Ld:
            return 32;
          case pu:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var lu = !1,
    yt = null,
    vt = null,
    bt = null,
    yl = new Map(),
    vl = new Map(),
    kt = [],
    $m =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      );
  function ad(e, n) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        yt = null;
        break;
      case 'dragenter':
      case 'dragleave':
        vt = null;
        break;
      case 'mouseover':
      case 'mouseout':
        bt = null;
        break;
      case 'pointerover':
      case 'pointerout':
        yl.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        vl.delete(n.pointerId);
    }
  }
  function bl(e, n, t, r, l, a) {
    return e === null || e.nativeEvent !== a
      ? ((e = {
          blockedOn: n,
          domEventName: t,
          eventSystemFlags: r,
          nativeEvent: a,
          targetContainers: [l],
        }),
        n !== null && ((n = $t(n)), n !== null && td(n)),
        e)
      : ((e.eventSystemFlags |= r),
        (n = e.targetContainers),
        l !== null && n.indexOf(l) === -1 && n.push(l),
        e);
  }
  function Wm(e, n, t, r, l) {
    switch (n) {
      case 'focusin':
        return ((yt = bl(yt, e, n, t, r, l)), !0);
      case 'dragenter':
        return ((vt = bl(vt, e, n, t, r, l)), !0);
      case 'mouseover':
        return ((bt = bl(bt, e, n, t, r, l)), !0);
      case 'pointerover':
        var a = l.pointerId;
        return (yl.set(a, bl(yl.get(a) || null, e, n, t, r, l)), !0);
      case 'gotpointercapture':
        return (
          (a = l.pointerId),
          vl.set(a, bl(vl.get(a) || null, e, n, t, r, l)),
          !0
        );
    }
    return !1;
  }
  function od(e) {
    var n = Vt(e.target);
    if (n !== null) {
      var t = O(n);
      if (t !== null) {
        if (((n = t.tag), n === 13)) {
          if (((n = Y(t)), n !== null)) {
            ((e.blockedOn = n),
              bu(e.priority, function () {
                rd(t);
              }));
            return;
          }
        } else if (n === 31) {
          if (((n = ye(t)), n !== null)) {
            ((e.blockedOn = n),
              bu(e.priority, function () {
                rd(t);
              }));
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
  function Da(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = tu(e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        ((to = r), t.target.dispatchEvent(r), (to = null));
      } else return ((n = $t(t)), n !== null && td(n), (e.blockedOn = t), !1);
      n.shift();
    }
    return !0;
  }
  function id(e, n, t) {
    Da(e) && t.delete(n);
  }
  function Qm() {
    ((lu = !1),
      yt !== null && Da(yt) && (yt = null),
      vt !== null && Da(vt) && (vt = null),
      bt !== null && Da(bt) && (bt = null),
      yl.forEach(id),
      vl.forEach(id));
  }
  function Aa(e, n) {
    e.blockedOn === n &&
      ((e.blockedOn = null),
      lu ||
        ((lu = !0),
        C.unstable_scheduleCallback(C.unstable_NormalPriority, Qm)));
  }
  var Fa = null;
  function ud(e) {
    Fa !== e &&
      ((Fa = e),
      C.unstable_scheduleCallback(C.unstable_NormalPriority, function () {
        Fa === e && (Fa = null);
        for (var n = 0; n < e.length; n += 3) {
          var t = e[n],
            r = e[n + 1],
            l = e[n + 2];
          if (typeof r != 'function') {
            if (ru(r || t) === null) continue;
            break;
          }
          var a = $t(t);
          a !== null &&
            (e.splice(n, 3),
            (n -= 3),
            ti(a, { pending: !0, data: l, method: t.method, action: r }, r, l));
        }
      }));
  }
  function Nr(e) {
    function n(s) {
      return Aa(s, e);
    }
    (yt !== null && Aa(yt, e),
      vt !== null && Aa(vt, e),
      bt !== null && Aa(bt, e),
      yl.forEach(n),
      vl.forEach(n));
    for (var t = 0; t < kt.length; t++) {
      var r = kt[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
    for (; 0 < kt.length && ((t = kt[0]), t.blockedOn === null); )
      (od(t), t.blockedOn === null && kt.shift());
    if (((t = (e.ownerDocument || e).$$reactFormReplay), t != null))
      for (r = 0; r < t.length; r += 3) {
        var l = t[r],
          a = t[r + 1],
          o = l[Be] || null;
        if (typeof a == 'function') o || ud(t);
        else if (o) {
          var i = null;
          if (a && a.hasAttribute('formAction')) {
            if (((l = a), (o = a[Be] || null))) i = o.formAction;
            else if (ru(l) !== null) continue;
          } else i = o.action;
          (typeof i == 'function' ? (t[r + 1] = i) : (t.splice(r, 3), (r -= 3)),
            ud(t));
        }
      }
  }
  function sd() {
    function e(a) {
      a.canIntercept &&
        a.info === 'react-transition' &&
        a.intercept({
          handler: function () {
            return new Promise(function (o) {
              return (l = o);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function n() {
      (l !== null && (l(), (l = null)), r || setTimeout(t, 20));
    }
    function t() {
      if (!r && !navigation.transition) {
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
      var r = !1,
        l = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', n),
        navigation.addEventListener('navigateerror', n),
        setTimeout(t, 100),
        function () {
          ((r = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', n),
            navigation.removeEventListener('navigateerror', n),
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function au(e) {
    this._internalRoot = e;
  }
  ((Ia.prototype.render = au.prototype.render =
    function (e) {
      var n = this._internalRoot;
      if (n === null) throw Error(u(409));
      var t = n.current,
        r = an();
      ed(t, r, e, n, null, null);
    }),
    (Ia.prototype.unmount = au.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var n = e.containerInfo;
          (ed(e.current, 2, null, e, null, null), va(), (n[qt] = null));
        }
      }));
  function Ia(e) {
    this._internalRoot = e;
  }
  Ia.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var n = vu();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < kt.length && n !== 0 && n < kt[t].priority; t++);
      (kt.splice(t, 0, e), t === 0 && od(e));
    }
  };
  var cd = I.version;
  if (cd !== '19.2.0') throw Error(u(527, cd, '19.2.0'));
  N.findDOMNode = function (e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == 'function'
        ? Error(u(188))
        : ((e = Object.keys(e).join(',')), Error(u(268, e)));
    return (
      (e = E(n)),
      (e = e !== null ? X(e) : null),
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
    var Ma = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ma.isDisabled && Ma.supportsFiber)
      try {
        ((Pr = Ma.inject(Km)), (Ye = Ma));
      } catch {}
  }
  return (
    (wl.createRoot = function (e, n) {
      if (!x(e)) throw Error(u(299));
      var t = !1,
        r = '',
        l = gc,
        a = yc,
        o = vc;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (t = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (l = n.onUncaughtError),
          n.onCaughtError !== void 0 && (a = n.onCaughtError),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (n = Zf(e, 1, !1, null, null, t, r, null, l, a, o, sd)),
        (e[qt] = n.current),
        Hi(e),
        new au(n)
      );
    }),
    (wl.hydrateRoot = function (e, n, t) {
      if (!x(e)) throw Error(u(299));
      var r = !1,
        l = '',
        a = gc,
        o = yc,
        i = vc,
        s = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
          t.onCaughtError !== void 0 && (o = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError),
          t.formState !== void 0 && (s = t.formState)),
        (n = Zf(e, 1, !0, n, t ?? null, r, l, s, a, o, i, sd)),
        (n.context = Jf(null)),
        (t = n.current),
        (r = an()),
        (r = Ka(r)),
        (l = at(r)),
        (l.callback = null),
        ot(t, l, r),
        (t = r),
        (n.current.lanes = t),
        Tr(n, t),
        _n(n),
        (e[qt] = n.current),
        Hi(e),
        new Ia(n)
      );
    }),
    (wl.version = '19.2.0'),
    wl
  );
}
var Ed;
function ah() {
  if (Ed) return ou.exports;
  Ed = 1;
  function C() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C);
      } catch (I) {
        console.error(I);
      }
  }
  return (C(), (ou.exports = lh()), ou.exports);
}
var oh = ah();
const ih = Cd(oh),
  uh = () =>
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
  Ha = ({
    icon: C,
    title: I,
    description: L,
    buttonText: u,
    onButtonClick: x,
    colorTheme: O,
  }) => {
    const Y = ch[O];
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
                children: C,
              }),
            }),
            k.jsx('h3', { className: 'text-2xl font-bold mb-2', children: I }),
            k.jsx('p', { className: 'text-gray-600', children: L }),
          ],
        }),
        k.jsx('div', {
          className: 'px-6 pb-6',
          children: k.jsx('button', {
            onClick: x,
            className: `w-full ${Y.bg} text-white font-bold py-3 px-4 rounded-lg hover:${Y.hoverBg} transition-colors duration-300`,
            children: u,
          }),
        }),
      ],
    });
  },
  fh = ({ isOpen: C, onClose: I }) =>
    C
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
                  onClick: I,
                  className:
                    'bg-teal-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors duration-300',
                  children: 'Cerrar',
                }),
              }),
            ],
          }),
        })
      : null,
  dh = ({ isOpen: C, onClose: I }) => {
    const [L, u] = Sn.useState(55),
      [x, O] = Sn.useState(50),
      [Y, ye] = Sn.useState(130),
      [j, E] = Sn.useState(120),
      [X, D] = Sn.useState(null),
      fe = () => {
        let ue = 0;
        (L > 60 && (ue += 2),
          x < 40 && (ue += 1),
          Y > 160 && (ue += 1),
          j > 140 && (ue += 2),
          D(ue * 5));
      };
    return C
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
                            value: L,
                            onChange: (ue) => u(parseInt(ue.target.value)),
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
                            value: x,
                            onChange: (ue) => O(parseInt(ue.target.value)),
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
                            onChange: (ue) => ye(parseInt(ue.target.value)),
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
                            value: j,
                            onChange: (ue) => E(parseInt(ue.target.value)),
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
                  X !== null &&
                    k.jsxs('div', {
                      className:
                        'mt-8 p-6 bg-indigo-100 rounded-lg text-center',
                      children: [
                        k.jsxs('h3', {
                          className: 'text-2xl font-bold text-indigo-800',
                          children: ['Riesgo Estimado: ', X, '%'],
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
                  onClick: I,
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
  ph = ({ isOpen: C, onClose: I }) => {
    const [L, u] = Sn.useState(null),
      [x, O] = Sn.useState(!1),
      Y = 'confirmacion',
      ye = (j) => {
        (u(j), O(!0));
      };
    return C
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
                            className: `block w-full text-left p-3 rounded-lg border ${L === 'anclaje' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Sesgo de Anclaje:',
                              }),
                              ' Confiar demasiado en la primera información obtenida.',
                            ],
                          }),
                          k.jsxs('button', {
                            onClick: () => ye('confirmacion'),
                            className: `block w-full text-left p-3 rounded-lg border ${L === 'confirmacion' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Sesgo de Confirmación:',
                              }),
                              ' Buscar e interpretar información que confirma las propias creencias preexistentes.',
                            ],
                          }),
                          k.jsxs('button', {
                            onClick: () => ye('disponibilidad'),
                            className: `block w-full text-left p-3 rounded-lg border ${L === 'disponibilidad' ? 'bg-gray-200' : ''}`,
                            children: [
                              k.jsx('strong', {
                                children: 'Heurístico de Disponibilidad:',
                              }),
                              ' Sobreestimar la probabilidad de eventos que son más fáciles de recordar.',
                            ],
                          }),
                        ],
                      }),
                      x &&
                        k.jsx('div', {
                          className: `mt-4 p-4 rounded-lg ${L === Y ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`,
                          children:
                            L === Y
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
                  onClick: I,
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
  mh = ({ isOpen: C, onClose: I }) =>
    C
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
                  onClick: I,
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
    const [C, I] = Sn.useState(null),
      L = Sn.useCallback((x) => {
        I(x);
      }, []),
      u = Sn.useCallback(() => {
        I(null);
      }, []);
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx(uh, {}),
        k.jsxs('main', {
          className: 'container mx-auto px-6 py-8',
          children: [
            k.jsx(sh, {}),
            k.jsxs('div', {
              className: 'grid grid-cols-1 md:grid-cols-2 gap-8',
              children: [
                k.jsx(Ha, {
                  icon: '🎯',
                  title: 'Misión: Diagnóstico Comunitario',
                  description:
                    'Han sido asignados a un centro de salud rural en la provincia de Chimborazo. Su primera tarea es analizar los datos de prevalencia de ECNT. Usen Google Sheets para descubrir los secretos que esconden los números.',
                  buttonText: 'Iniciar Misión',
                  colorTheme: 'teal',
                  onButtonClick: () => L('mision'),
                }),
                k.jsx(Ha, {
                  icon: '💡',
                  title: 'Herramienta: Calculadora de Riesgo',
                  description:
                    'La GPC del MSP enfatiza la estratificación del riesgo cardiovascular. Utilicen esta herramienta simplificada para evaluar el riesgo de un paciente y entender cómo guiar las decisiones clínicas en la atención primaria.',
                  buttonText: 'Abrir Herramienta',
                  colorTheme: 'indigo',
                  onButtonClick: () => L('calculadora'),
                }),
                k.jsx(Ha, {
                  icon: '🧠',
                  title: 'Desafío: El Sesgo Oculto',
                  description:
                    'El cerebro usa atajos, pero en medicina, estos pueden llevar a errores. Analicen un caso clínico real y pongan a prueba su capacidad para identificar los sesgos cognitivos que podrían afectar el diagnóstico. ¿Están listos?',
                  buttonText: 'Empezar Desafío',
                  colorTheme: 'amber',
                  onButtonClick: () => L('sesgo'),
                }),
                k.jsx(Ha, {
                  icon: '📚',
                  title: 'Biblioteca de Recursos',
                  description:
                    'Explora los conceptos teóricos del razonamiento clínico, la estadística y los sesgos cognitivos que sustentan tu práctica.',
                  buttonText: 'Abrir Biblioteca',
                  colorTheme: 'purple',
                  onButtonClick: () => L('recursos'),
                }),
              ],
            }),
          ],
        }),
        k.jsx(fh, { isOpen: C === 'mision', onClose: u }),
        k.jsx(dh, { isOpen: C === 'calculadora', onClose: u }),
        k.jsx(ph, { isOpen: C === 'sesgo', onClose: u }),
        k.jsx(mh, { isOpen: C === 'recursos', onClose: u }),
      ],
    });
  },
  Nd = document.getElementById('root');
if (!Nd) throw new Error('Could not find root element to mount to');
const gh = ih.createRoot(Nd);
gh.render(k.jsx(Jm.StrictMode, { children: k.jsx(hh, {}) }));
