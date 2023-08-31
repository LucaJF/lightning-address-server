/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.17.1.
 * Original file: /npm/vue3-toastify@0.1.11/dist/esm/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
import {
  reactive as e,
  toRaw as t,
  createApp as n,
  nextTick as o,
  defineComponent as a,
  createVNode as i,
  ref as s,
  computed as r,
  watchEffect as l,
  onMounted as u,
  onUnmounted as d,
  Fragment as c,
  mergeProps as p,
  isVNode as m,
  h as f,
  cloneVNode as y
} from './vue_3.3.4.esm-browser.prod.js'
const v = {
    TOP_LEFT: 'top-left',
    TOP_RIGHT: 'top-right',
    TOP_CENTER: 'top-center',
    BOTTOM_LEFT: 'bottom-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_CENTER: 'bottom-center'
  },
  g = {LIGHT: 'light', DARK: 'dark', COLORED: 'colored', AUTO: 'auto'},
  E = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DEFAULT: 'default'
  },
  S = {
    dangerouslyHTMLString: !1,
    multiple: !0,
    position: v.TOP_RIGHT,
    autoClose: 5e3,
    transition: 'bounce',
    hideProgressBar: !1,
    pauseOnHover: !0,
    pauseOnFocusLoss: !0,
    closeOnClick: !0,
    className: '',
    bodyClassName: '',
    style: {},
    progressClassName: '',
    progressStyle: {},
    role: 'alert',
    theme: 'light'
  },
  C = {...S, rtl: !1, newestOnTop: !1, toastClassName: ''}
var A = (e => (
    (e[(e.COLLAPSE_DURATION = 300)] = 'COLLAPSE_DURATION'),
    (e[(e.DEBOUNCE_DURATION = 50)] = 'DEBOUNCE_DURATION'),
    (e.CSS_NAMESPACE = 'Toastify'),
    e
  ))(A || {}),
  T = (e => ((e.ENTRANCE_ANIMATION_END = 'd'), e))(T || {})
const _ = {
    enter: 'Toastify--animate Toastify__bounce-enter',
    exit: 'Toastify--animate Toastify__bounce-exit',
    appendPosition: !0
  },
  h = {
    enter: 'Toastify--animate Toastify__slide-enter',
    exit: 'Toastify--animate Toastify__slide-exit',
    appendPosition: !0
  },
  I = {
    enter: 'Toastify--animate Toastify__zoom-enter',
    exit: 'Toastify--animate Toastify__zoom-exit'
  },
  N = {
    enter: 'Toastify--animate Toastify__flip-enter',
    exit: 'Toastify--animate Toastify__flip-exit'
  }
function O(e) {
  let t = _
  if (e && 'string' != typeof e) t = e
  else
    switch (e) {
      case 'flip':
        t = N
        break
      case 'zoom':
        t = I
        break
      case 'slide':
        t = h
    }
  return t
}
const L = 'will-unmount'
function b(e) {
  var t
  const {position: n, containerClassName: o, rtl: a = !1, style: i = {}} = e,
    s = A.CSS_NAMESPACE,
    r = (function (e = v.TOP_RIGHT) {
      return `${A.CSS_NAMESPACE}__toast-container--${e}`
    })(n),
    l = document.querySelector(`.${s}`),
    u = document.querySelector(`.${r}`),
    d = !(!u || (null != (t = u.className) && t.includes(L))),
    c = l || document.createElement('div'),
    p = document.createElement('div')
  ;(p.className = (function (e, t, n = !1) {
    const o = [
      `${A.CSS_NAMESPACE}__toast-container`,
      `${A.CSS_NAMESPACE}__toast-container--${e}`,
      n ? `${A.CSS_NAMESPACE}__toast-container--rtl` : null
    ]
      .filter(Boolean)
      .join(' ')
    return V(t)
      ? t({position: e, rtl: n, defaultClassName: o})
      : `${o} ${t || ''}`
  })(n, o, a)),
    (p.dataset.testid = `${A.CSS_NAMESPACE}__toast-container--${n}`),
    (p.id = (function (e) {
      return e.containerId || String(e.position)
    })(e))
  for (const e in i)
    if (Object.prototype.hasOwnProperty.call(i, e)) {
      const t = i[e]
      p.style[e] = t
    }
  return (
    l || ((c.className = A.CSS_NAMESPACE), document.body.appendChild(c)),
    d || c.appendChild(p),
    p
  )
}
function P(e) {
  var t, n, o
  const a =
      'string' == typeof e
        ? e
        : (null == (t = e.currentTarget) ? void 0 : t.id) ||
          (null == (n = e.target) ? void 0 : n.id),
    i = document.getElementById(a)
  i && i.removeEventListener('animationend', P, !1)
  try {
    q[a].unmount(),
      null == (o = document.getElementById(a)) || o.remove(),
      delete q[a],
      delete U[a]
  } catch {}
}
const q = e({})
function $(e, t) {
  const n = document.getElementById(String(t))
  n && (q[n.id] = e)
}
function B(e, t = !0) {
  const n = String(e)
  if (!q[n]) return
  const o = document.getElementById(n)
  o && o.classList.add(L),
    t
      ? ((function (e) {
          for (const t in U) if (t === e) for (const e of U[t] || []) w(e)
        })(e),
        o && o.addEventListener('animationend', P, !1))
      : P(n),
    (x.items = x.items.filter(t => t.containerId !== e))
}
function M(e) {
  for (const t in q) B(t, e)
  x.items = []
}
function w(e, t) {
  const n = document.getElementById(e.toastId)
  if (n) {
    let o = e
    o = {...o, ...O(o.transition)}
    const a = o.appendPosition ? `${o.exit}--${o.position}` : o.exit
    ;(n.className += ` ${a}`), t && t(n)
  }
}
function F(e) {
  return document.getElementById(e)
}
function R(e) {
  var n
  const o = m(e.content) ? t(e.content.props) : null
  return null != o ? o : t(null != (n = e.data) ? n : {})
}
function D() {
  if (x.items.length > 0) {
    const e = x.items.shift()
    z(null == e ? void 0 : e.toastContent, null == e ? void 0 : e.toastProps)
  }
}
const U = e({}),
  x = e({items: []})
function k() {
  const e = t(U)
  return Object.values(e).reduce((e, t) => [...e, ...t], [])
}
function H(e) {
  return k().find(t => t.toastId === e)
}
function z(e, t = {}) {
  if (
    (function (e) {
      const t = F(e.containerId)
      return t && t.classList.contains(L)
    })(t)
  ) {
    const n = F(t.containerId)
    n && n.addEventListener('animationend', j.bind(null, e, t), !1)
  } else j(e, t)
}
function j(e, t = {}) {
  const a = F(t.containerId)
  a && a.removeEventListener('animationend', j.bind(null, e, t), !1)
  const i = U[t.containerId] || [],
    s = i.length > 0
  if (
    !s &&
    !(function (e = v.TOP_RIGHT) {
      return !!document.querySelector(
        `.${A.CSS_NAMESPACE}__toast-container--${e}`
      )
    })(t.position)
  ) {
    const e = b(t),
      o = n(ce, t)
    o.mount(e), $(o, e.id)
  }
  s && (t.position = i[0].position),
    o(() => {
      t.updateId ? G.update(t) : G.add(e, t)
    })
}
const G = {
    add(e, t) {
      const {containerId: n = ''} = t
      n &&
        ((U[n] = U[n] || []),
        U[n].find(e => e.toastId === t.toastId) ||
          setTimeout(() => {
            var e, o
            t.newestOnTop
              ? null == (e = U[n]) || e.unshift(t)
              : null == (o = U[n]) || o.push(t),
              t.onOpen && t.onOpen(R(t))
          }, t.delay || 0))
    },
    remove(e) {
      if (e) {
        const t = (function (e) {
          const t = k().find(t => t.toastId === e)
          return null == t ? void 0 : t.containerId
        })(e)
        if (t) {
          const n = U[t]
          let a = n.find(t => t.toastId === e)
          ;(U[t] = n.filter(t => t.toastId !== e)),
            !U[t].length &&
              !(function (e) {
                return e
                  ? x.items.filter(t => t.containerId === e).length > 0
                  : x.items.length > 0
              })(t) &&
              B(t, !1),
            D(),
            o(() => {
              null != a && a.onClose && (a.onClose(R(a)), (a = void 0))
            })
        }
      }
    },
    update(e = {}) {
      const {containerId: t = ''} = e
      if (t && e.updateId) {
        U[t] = U[t] || []
        const n = U[t].find(t => t.toastId === e.toastId)
        n &&
          setTimeout(() => {
            for (const t in e)
              if (Object.prototype.hasOwnProperty.call(e, t)) {
                const o = e[t]
                n[t] = o
              }
          }, e.delay || 0)
      }
    },
    clear(e, t = !0) {
      e ? B(e, t) : M(t)
    },
    dismissCallback(e) {
      var t
      const n = null == (t = e.currentTarget) ? void 0 : t.id,
        o = document.getElementById(n)
      o &&
        (o.removeEventListener('animationend', G.dismissCallback, !1),
        setTimeout(() => {
          G.remove(n)
        }))
    },
    dismiss(e) {
      if (e) {
        const t = k()
        for (const n of t)
          if (n.toastId === e) {
            w(n, e => {
              e.addEventListener('animationend', G.dismissCallback, !1)
            })
            break
          }
      }
    }
  },
  K = e({}),
  W = e({})
function Z() {
  return Math.random().toString(36).substring(2, 9)
}
function Q(e) {
  return 'string' == typeof e
}
function V(e) {
  return 'function' == typeof e
}
function X(...e) {
  return p(...e)
}
function Y(e) {
  return !!(
    'object' == typeof e &&
    ((null != e && e.render) ||
      (null != e && e.setup) ||
      'object' == typeof (null == e ? void 0 : e.type))
  )
}
var J = (e => ((e[(e.Enter = 0)] = 'Enter'), (e[(e.Exit = 1)] = 'Exit'), e))(
  J || {}
)
const ee = {
    containerId: {type: [String, Number], required: !1, default: ''},
    clearOnUrlChange: {type: Boolean, required: !1, default: !0},
    dangerouslyHTMLString: {type: Boolean, required: !1, default: !1},
    multiple: {type: Boolean, required: !1, default: !0},
    limit: {type: Number, required: !1, default: void 0},
    position: {type: String, required: !1, default: v.TOP_LEFT},
    bodyClassName: {type: String, required: !1, default: ''},
    autoClose: {type: [Number, Boolean], required: !1, default: !1},
    closeButton: {
      type: [Boolean, Function, Object],
      required: !1,
      default: void 0
    },
    transition: {type: [String, Object], required: !1, default: 'bounce'},
    hideProgressBar: {type: Boolean, required: !1, default: !1},
    pauseOnHover: {type: Boolean, required: !1, default: !0},
    pauseOnFocusLoss: {type: Boolean, required: !1, default: !0},
    closeOnClick: {type: Boolean, required: !1, default: !0},
    progress: {type: Number, required: !1, default: void 0},
    progressClassName: {type: String, required: !1, default: ''},
    toastStyle: {type: Object, required: !1, default: () => ({})},
    progressStyle: {type: Object, required: !1, default: () => ({})},
    role: {type: String, required: !1, default: 'alert'},
    theme: {type: String, required: !1, default: g.AUTO},
    content: {type: [String, Object, Function], required: !1, default: ''},
    toastId: {type: [String, Number], required: !1, default: ''},
    data: {type: [Object, String], required: !1, default: () => ({})},
    type: {type: String, required: !1, default: E.DEFAULT},
    icon: {
      type: [Boolean, String, Number, Object, Function],
      required: !1,
      default: void 0
    },
    delay: {type: Number, required: !1, default: void 0},
    onOpen: {type: Function, required: !1, default: void 0},
    onClose: {type: Function, required: !1, default: void 0},
    onClick: {type: Function, required: !1, default: void 0},
    isLoading: {type: Boolean, required: !1, default: void 0},
    rtl: {type: Boolean, required: !1, default: !1},
    toastClassName: {type: String, required: !1, default: ''},
    updateId: {type: [String, Number], required: !1, default: ''}
  },
  te = a({
    name: 'ProgressBar',
    props: {
      autoClose: {type: [Number, Boolean], required: !0},
      isRunning: {type: Boolean, required: !1, default: void 0},
      type: {type: String, required: !1, default: E.DEFAULT},
      theme: {type: String, required: !1, default: g.AUTO},
      hide: {type: Boolean, required: !1, default: void 0},
      className: {type: [String, Function], required: !1, default: ''},
      controlledProgress: {type: Boolean, required: !1, default: void 0},
      rtl: {type: Boolean, required: !1, default: void 0},
      isIn: {type: Boolean, required: !1, default: void 0},
      progress: {type: Number, required: !1, default: void 0},
      closeToast: {type: Function, required: !1, default: void 0}
    },
    setup(e, {attrs: t}) {
      const n = s(),
        o = r(() => (e.hide ? 'true' : 'false')),
        a = r(() => ({
          ...(t.style || {}),
          animationDuration: `${!0 === e.autoClose ? 5e3 : e.autoClose}ms`,
          animationPlayState: e.isRunning ? 'running' : 'paused',
          opacity: e.hide ? 0 : 1,
          transform: e.controlledProgress ? `scaleX(${e.progress})` : 'none'
        })),
        u = r(() =>
          [
            `${A.CSS_NAMESPACE}__progress-bar`,
            e.controlledProgress
              ? `${A.CSS_NAMESPACE}__progress-bar--controlled`
              : `${A.CSS_NAMESPACE}__progress-bar--animated`,
            `${A.CSS_NAMESPACE}__progress-bar-theme--${e.theme}`,
            `${A.CSS_NAMESPACE}__progress-bar--${e.type}`,
            e.rtl ? `${A.CSS_NAMESPACE}__progress-bar--rtl` : null
          ]
            .filter(Boolean)
            .join(' ')
        ),
        d = r(() => `${u.value} ${(null == t ? void 0 : t.class) || ''}`),
        c = () => {
          n.value &&
            ((n.value.onanimationend = null), (n.value.ontransitionend = null))
        },
        p = () => {
          e.isIn && e.closeToast && !1 !== e.autoClose && (e.closeToast(), c())
        },
        m = r(() => (e.controlledProgress ? null : p)),
        f = r(() => (e.controlledProgress ? p : null))
      return (
        l(() => {
          n.value &&
            (c(),
            (n.value.onanimationend = m.value),
            (n.value.ontransitionend = f.value))
        }),
        () =>
          i(
            'div',
            {
              ref: n,
              role: 'progressbar',
              'aria-hidden': o.value,
              'aria-label': 'notification timer',
              class: d.value,
              style: a.value
            },
            null
          )
      )
    }
  }),
  ne = a({
    name: 'CloseButton',
    inheritAttrs: !1,
    props: {
      theme: {type: String, required: !1, default: g.AUTO},
      type: {type: String, required: !1, default: g.LIGHT},
      ariaLabel: {type: String, required: !1, default: 'close'},
      closeToast: {type: Function, required: !1, default: void 0}
    },
    setup: e => () =>
      i(
        'button',
        {
          class: `${A.CSS_NAMESPACE}__close-button ${A.CSS_NAMESPACE}__close-button--${e.theme}`,
          type: 'button',
          onClick: t => {
            t.stopPropagation(), e.closeToast && e.closeToast(t)
          },
          'aria-label': e.ariaLabel
        },
        [
          i('svg', {'aria-hidden': 'true', viewBox: '0 0 14 16'}, [
            i(
              'path',
              {
                'fill-rule': 'evenodd',
                d: 'M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z'
              },
              null
            )
          ])
        ]
      )
  }),
  oe = ({theme: e, type: t, path: n, ...o}) =>
    i(
      'svg',
      p(
        {
          viewBox: '0 0 24 24',
          width: '100%',
          height: '100%',
          fill:
            'colored' === e ? 'currentColor' : `var(--toastify-icon-color-${t})`
        },
        o
      ),
      [i('path', {d: n}, null)]
    )
const ae = {
  info: function (e) {
    return i(
      oe,
      p(e, {
        path: 'M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z'
      }),
      null
    )
  },
  warning: function (e) {
    return i(
      oe,
      p(e, {
        path: 'M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z'
      }),
      null
    )
  },
  success: function (e) {
    return i(
      oe,
      p(e, {
        path: 'M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z'
      }),
      null
    )
  },
  error: function (e) {
    return i(
      oe,
      p(e, {
        path: 'M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z'
      }),
      null
    )
  },
  spinner: function () {
    return i('div', {class: `${A.CSS_NAMESPACE}__spinner`}, null)
  }
}
function ie({theme: e, type: n, isLoading: o, icon: a}) {
  let i
  const s = {theme: e, type: n}
  return (
    o
      ? (i = ae.spinner())
      : !1 === a
      ? (i = void 0)
      : Y(a)
      ? (i = t(a))
      : V(a)
      ? (i = a(s))
      : m(a)
      ? (i = y(a, s))
      : Q(a) ||
        (function (e) {
          return 'number' == typeof e && !isNaN(e)
        })(a)
      ? (i = a)
      : (e => e in ae)(n) && (i = ae[n](s)),
    i
  )
}
const se = () => {}
function re(t) {
  const n = s(!1),
    o = s(!1),
    a = s(!1),
    i = s(J.Enter),
    c = e({
      ...t,
      appendPosition: t.appendPosition || !1,
      collapse: typeof t.collapse > 'u' || t.collapse,
      collapseDuration: t.collapseDuration || A.COLLAPSE_DURATION
    }),
    p = c.done || se,
    m = r(() => (c.appendPosition ? `${c.enter}--${c.position}` : c.enter)),
    f = r(() => (c.appendPosition ? `${c.exit}--${c.position}` : c.exit)),
    y = r(() => (t.pauseOnHover ? {onMouseenter: E, onMouseleave: g} : {}))
  function v() {
    return t.toastRef.value
  }
  function g() {
    ;(!t.loading.value || void 0 === t.isLoading) && (n.value = !0)
  }
  function E() {
    n.value = !1
  }
  return (
    l(function () {
      if (!v()) return
      const e = () => {
        const t = v()
        t.removeEventListener('animationend', e),
          c.collapse
            ? (function (e, t, n = A.COLLAPSE_DURATION) {
                const {scrollHeight: o, style: a} = e,
                  i = n
                requestAnimationFrame(() => {
                  ;(a.minHeight = 'initial'),
                    (a.height = o + 'px'),
                    (a.transition = `all ${i}ms`),
                    requestAnimationFrame(() => {
                      ;(a.height = '0'),
                        (a.padding = '0'),
                        (a.margin = '0'),
                        setTimeout(t, i)
                    })
                })
              })(t, p, c.collapseDuration)
            : p()
      }
      o.value ||
        (a.value
          ? e()
          : setTimeout(() => {
              const t = v()
              ;(i.value = J.Exit),
                t &&
                  ((t.className += ` ${f.value}`),
                  t.addEventListener('animationend', e))
            }))
    }),
    l(() => {
      const e = k()
      o.value = e.findIndex(e => e.toastId === c.toastId) > -1
    }),
    l(() => {
      void 0 !== t.isLoading && (t.loading.value ? E() : g())
    }),
    u(function () {
      const e = m.value.split(' ')
      v().addEventListener(T.ENTRANCE_ANIMATION_END, g, {once: !0})
      const n = t => {
        const o = v()
        t.target === o &&
          (o.dispatchEvent(new Event(T.ENTRANCE_ANIMATION_END)),
          o.removeEventListener('animationend', n),
          o.removeEventListener('animationcancel', n),
          i.value === J.Enter &&
            'animationcancel' !== t.type &&
            o.classList.remove(...e))
      }
      t.pauseOnFocusLoss &&
        (document.hasFocus() || E(),
        window.addEventListener('focus', g),
        window.addEventListener('blur', E)),
        (() => {
          const t = v()
          t.classList.add(...e),
            t.addEventListener('animationend', n),
            t.addEventListener('animationcancel', n)
        })()
    }),
    d(() => {
      t.pauseOnFocusLoss &&
        (window.removeEventListener('focus', g),
        window.removeEventListener('blur', E))
    }),
    {
      isIn: o,
      isRunning: n,
      hideToast: function (e) {
        e && (e.stopPropagation(), e.preventDefault()), (o.value = !1)
      },
      eventHandlers: y
    }
  )
}
const le = a({
  name: 'ToastItem',
  inheritAttrs: !1,
  props: ee,
  setup(e) {
    const n = s(),
      o = r(() => !!e.isLoading),
      a = r(() => void 0 !== e.progress && null !== e.progress),
      l = r(() => ie(e)),
      u = r(() =>
        [
          `${A.CSS_NAMESPACE}__toast`,
          `${A.CSS_NAMESPACE}__toast-theme--${e.theme}`,
          `${A.CSS_NAMESPACE}__toast--${e.type}`,
          e.rtl ? `${A.CSS_NAMESPACE}__toast--rtl` : void 0,
          e.toastClassName || ''
        ]
          .filter(Boolean)
          .join(' ')
      ),
      {
        isRunning: d,
        isIn: c,
        hideToast: m,
        eventHandlers: y
      } = re({
        toastRef: n,
        loading: o,
        done: () => {
          G.remove(e.toastId)
        },
        ...O(e.transition),
        ...e
      })
    return () =>
      i(
        'div',
        p(
          {
            id: e.toastId,
            class: u.value,
            style: e.toastStyle || {},
            ref: n,
            'data-testid': `toast-item-${e.toastId}`,
            onClick: t => {
              e.closeOnClick && m(), e.onClick && e.onClick(t)
            }
          },
          y.value
        ),
        [
          i(
            'div',
            {
              role: e.role,
              'data-testid': 'toast-body',
              class: `${A.CSS_NAMESPACE}__toast-body ${e.bodyClassName || ''}`
            },
            [
              null != l.value &&
                i(
                  'div',
                  {
                    'data-testid': `toast-icon-${e.type}`,
                    class: [
                      `${A.CSS_NAMESPACE}__toast-icon`,
                      e.isLoading
                        ? ''
                        : `${A.CSS_NAMESPACE}--animate-icon ${A.CSS_NAMESPACE}__zoom-enter`
                    ].join(' ')
                  },
                  [
                    Y(l.value)
                      ? f(t(l.value), {theme: e.theme, type: e.type})
                      : V(l.value)
                      ? l.value({theme: e.theme, type: e.type})
                      : l.value
                  ]
                ),
              i('div', {'data-testid': 'toast-content'}, [
                Y(e.content)
                  ? f(t(e.content), {
                      toastProps: t(e),
                      closeToast: m,
                      data: e.data
                    })
                  : V(e.content)
                  ? e.content({toastProps: t(e), closeToast: m, data: e.data})
                  : e.dangerouslyHTMLString
                  ? f('div', {innerHTML: e.content})
                  : e.content
              ])
            ]
          ),
          (void 0 === e.closeButton || !0 === e.closeButton) &&
            i(
              ne,
              {
                theme: e.theme,
                closeToast: e => {
                  e.stopPropagation(), e.preventDefault(), m()
                }
              },
              null
            ),
          Y(e.closeButton)
            ? f(t(e.closeButton), {closeToast: m, type: e.type, theme: e.theme})
            : V(e.closeButton)
            ? e.closeButton({closeToast: m, type: e.type, theme: e.theme})
            : null,
          i(
            te,
            {
              className: e.progressClassName,
              style: e.progressStyle,
              rtl: e.rtl,
              theme: e.theme,
              isIn: c.value,
              type: e.type,
              hide: e.hideProgressBar,
              isRunning: d.value,
              autoClose: e.autoClose,
              controlledProgress: a.value,
              progress: e.progress,
              closeToast: e.isLoading ? void 0 : m
            },
            null
          )
        ]
      )
  }
})
let ue = 0
function de() {
  typeof window > 'u' ||
    (ue && window.cancelAnimationFrame(ue),
    (ue = window.requestAnimationFrame(de)),
    W.lastUrl !== window.location.href &&
      ((W.lastUrl = window.location.href), G.clear()))
}
const ce = a({
  name: 'ToastifyContainer',
  inheritAttrs: !1,
  props: ee,
  setup(e) {
    const t = r(() => e.containerId),
      n = r(() => U[t.value] || []),
      o = r(() => n.value.filter(t => t.position === e.position))
    return (
      u(() => {
        typeof window < 'u' &&
          e.clearOnUrlChange &&
          window.requestAnimationFrame(de)
      }),
      d(() => {
        typeof window < 'u' &&
          ue &&
          (window.cancelAnimationFrame(ue), (W.lastUrl = ''))
      }),
      () =>
        i(c, null, [
          o.value.map(e => {
            const {toastId: t = ''} = e
            return i(le, p({key: t}, e), null)
          })
        ])
    )
  }
})
let pe = !1
function me() {
  const e = []
  return (
    k().forEach(t => {
      const n = document.getElementById(t.containerId)
      n && !n.classList.contains(L) && e.push(t)
    }),
    e
  )
}
function fe(e) {
  ;(function (e) {
    const t = me().length,
      n = null != e ? e : 0
    return n > 0 && t + x.items.length >= n
  })(e.limit) &&
    !e.updateId &&
    x.items.push({
      toastId: e.toastId,
      containerId: e.containerId,
      toastContent: e.content,
      toastProps: e
    })
}
function ye(e, n, o = {}) {
  if (pe) return
  ;(!(o = X(K[`${A.CSS_NAMESPACE}-default-options`] || C, {type: n}, t(o)))
    .toastId ||
    ('string' != typeof o.toastId && 'number' != typeof o.toastId)) &&
    (o.toastId = Z()),
    (o = {...o, content: e, containerId: o.containerId || String(o.position)})
  const a = Number(null == o ? void 0 : o.progress)
  return (
    a < 0 && (o.progress = 0),
    a > 1 && (o.progress = 1),
    'auto' === o.theme &&
      (o.theme = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light'),
    fe(o),
    (W.lastUrl = window.location.href),
    o.multiple
      ? x.items.length
        ? o.updateId && z(e, o)
        : z(e, o)
      : ((pe = !0),
        ve.clearAll(void 0, !1),
        setTimeout(() => {
          z(e, o)
        }, 0),
        setTimeout(() => {
          pe = !1
        }, 390)),
    o.toastId
  )
}
const ve = (e, t) => ye(e, E.DEFAULT, t)
;(ve.info = (e, t) => ye(e, E.DEFAULT, {...t, type: E.INFO})),
  (ve.error = (e, t) => ye(e, E.DEFAULT, {...t, type: E.ERROR})),
  (ve.warning = (e, t) => ye(e, E.DEFAULT, {...t, type: E.WARNING})),
  (ve.warn = ve.warning),
  (ve.success = (e, t) => ye(e, E.DEFAULT, {...t, type: E.SUCCESS})),
  (ve.loading = (e, t) =>
    ye(
      e,
      E.DEFAULT,
      X(t, {
        isLoading: !0,
        autoClose: !1,
        closeOnClick: !1,
        closeButton: !1,
        draggable: !1
      })
    )),
  (ve.dark = (e, t) => ye(e, E.DEFAULT, X(t, {theme: g.DARK}))),
  (ve.remove = e => {
    e ? G.dismiss(e) : G.clear()
  }),
  (ve.clearAll = (e, t) => {
    G.clear(e, t)
  }),
  (ve.isActive = e => {
    let t = !1
    return (t = me().findIndex(t => t.toastId === e) > -1), t
  }),
  (ve.update = (e, n = {}) => {
    setTimeout(() => {
      const o = H(e)
      if (o) {
        const a = t(o),
          {content: i} = a,
          s = {...a, ...n, toastId: n.toastId || e, updateId: Z()},
          r = s.render || i
        delete s.render, ye(r, s.type, s)
      }
    }, 0)
  }),
  (ve.done = e => {
    ve.update(e, {isLoading: !1, progress: 1})
  }),
  (ve.promise = function (e, {pending: t, error: n, success: o}, a) {
    let i
    t && (i = Q(t) ? ve.loading(t, a) : ve.loading(t.render, {...a, ...t}))
    const s = {
        isLoading: void 0,
        autoClose: null,
        closeOnClick: null,
        closeButton: null,
        draggable: null,
        delay: 100
      },
      r = (e, t, n) => {
        if (null == t) return void ve.remove(i)
        const o = {type: e, ...s, ...a, data: n},
          r = Q(t) ? {render: t} : t
        return (
          i
            ? ve.update(i, {...o, ...r, isLoading: !1, autoClose: !0})
            : ve(r.render, {...o, ...r, isLoading: !1, autoClose: !0}),
          n
        )
      },
      l = V(e) ? e() : e
    return (
      l
        .then(e => {
          r('success', o, e)
        })
        .catch(e => {
          r('error', n, e)
        }),
      l
    )
  }),
  (ve.POSITION = v),
  (ve.THEME = g),
  (ve.TYPE = E),
  (ve.TRANSITIONS = {
    BOUNCE: 'bounce',
    SLIDE: 'slide',
    FLIP: 'flip',
    ZOOM: 'zoom'
  })
const ge = {
  install(e, t = {}) {
    Ee(t)
  }
}
function Ee(e = {}) {
  !(function (e = {}) {
    K[`${A.CSS_NAMESPACE}-default-options`] = e
  })(X(C, e))
}
typeof window < 'u' && (window.Vue3Toastify = ge)
export {
  J as AnimationStep,
  _ as Bounce,
  N as Flip,
  h as Slide,
  G as ToastActions,
  ce as ToastifyContainer,
  I as Zoom,
  w as addExitAnimateToNode,
  D as appendFromQueue,
  $ as cacheRenderInstance,
  M as clearContainers,
  q as containerInstances,
  ge as default,
  z as doAppend,
  k as getAllToast,
  H as getToast,
  W as globalCache,
  K as globalOptions,
  x as queue,
  B as removeContainer,
  ve as toast,
  U as toastContainers,
  Ee as updateGlobalOptions,
  re as useCssTransition
}
//# sourceMappingURL=/sm/68cc0bdbe72558802f93a4fe4f4b95b4344962c0c7006e370f93e54f485d3b3a.map
