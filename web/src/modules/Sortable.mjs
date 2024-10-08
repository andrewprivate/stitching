/* eslint-disable */
// Minified to reduce loading time (https://minify-js.com/)
/** !
 * Sortable 1.15.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function t(t, e) {
    const n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
        let o = Object.getOwnPropertySymbols(t);
        e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }
        ))),
        n.push.apply(n, o)
    }
    return n
}
function e(e) {
    for (let i = 1; i < arguments.length; i++) {
        var n = null != arguments[i] ? arguments[i] : {};
        i % 2 ? t(Object(n), !0).forEach((function(t) {
            o(e, t, n[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
        }
        ))
    }
    return e
}
function n(t) {
    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    }
    : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    n(t)
}
function o(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = n,
    t
}
function i() {
    return i = Object.assign || function(t) {
        for (let e = 1; e < arguments.length; e++) {
            const n = arguments[e];
            for (const e in n)
                Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e])
        }
        return t
    }
    ,
    i.apply(this, arguments)
}
function r(t, e) {
    if (null == t)
        return {};
    const n = function(t, e) {
        if (null == t)
            return {};
        const n = {}
          , o = Object.keys(t);
        let i, r;
        for (r = 0; r < o.length; r++)
            i = o[r],
            e.indexOf(i) >= 0 || (n[i] = t[i]);
        return n
    }(t, e);
    let o, i;
    if (Object.getOwnPropertySymbols) {
        const r = Object.getOwnPropertySymbols(t);
        for (i = 0; i < r.length; i++)
            o = r[i],
            e.indexOf(o) >= 0 || Object.prototype.propertyIsEnumerable.call(t, o) && (n[o] = t[o])
    }
    return n
}
function l(t) {
    return function(t) {
        if (Array.isArray(t))
            return a(t)
    }(t) || function(t) {
        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"])
            return Array.from(t)
    }(t) || function(t, e) {
        if (!t)
            return;
        if ("string" == typeof t)
            return a(t, e);
        let n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n)
            return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return a(t, e)
    }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }()
}
function a(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, o = new Array(e); n < e; n++)
        o[n] = t[n];
    return o
}
function s(t) {
    if ("undefined" != typeof window && window.navigator)
        return !!navigator.userAgent.match(t)
}
const c = s(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i)
  , u = s(/Edge/i)
  , d = s(/firefox/i)
  , h = s(/safari/i) && !s(/chrome/i) && !s(/android/i)
  , f = s(/iP(ad|od|hone)/i)
  , p = s(/chrome/i) && s(/android/i)
  , g = {
    capture: !1,
    passive: !1
};
function m(t, e, n) {
    t.addEventListener(e, n, !c && g)
}
function b(t, e, n) {
    t.removeEventListener(e, n, !c && g)
}
function v(t, e) {
    if (e) {
        if (">" === e[0] && (e = e.substring(1)),
        t)
            try {
                if (t.matches)
                    return t.matches(e);
                if (t.msMatchesSelector)
                    return t.msMatchesSelector(e);
                if (t.webkitMatchesSelector)
                    return t.webkitMatchesSelector(e)
            } catch (t) {
                return !1
            }
        return !1
    }
}
function y(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
}
function w(t, e, n, o) {
    if (t) {
        n = n || document;
        do {
            if (null != e && (">" === e[0] ? t.parentNode === n && v(t, e) : v(t, e)) || o && t === n)
                return t;
            if (t === n)
                break
        } while (t = y(t))
    }
    return null
}
const S = /\s+/g;
function E(t, e, n) {
    if (t && e)
        if (t.classList)
            t.classList[n ? "add" : "remove"](e);
        else {
            const o = (" " + t.className + " ").replace(S, " ").replace(" " + e + " ", " ");
            t.className = (o + (n ? " " + e : "")).replace(S, " ")
        }
}
function D(t, e, n) {
    const o = t && t.style;
    if (o) {
        if (void 0 === n)
            return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle),
            void 0 === e ? n : n[e];
        e in o || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e),
        o[e] = n + ("string" == typeof n ? "" : "px")
    }
}
function _(t, e) {
    let n = "";
    if ("string" == typeof t)
        n = t;
    else
        do {
            const e = D(t, "transform");
            e && "none" !== e && (n = e + " " + n)
        } while (!e && (t = t.parentNode));
    const o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return o && new o(n)
}
function C(t, e, n) {
    if (t) {
        const o = t.getElementsByTagName(e);
        let i = 0;
        const r = o.length;
        if (n)
            for (; i < r; i++)
                n(o[i], i);
        return o
    }
    return []
}
function T() {
    const t = document.scrollingElement;
    return t || document.documentElement
}
function x(t, e, n, o, i) {
    if (!t.getBoundingClientRect && t !== window)
        return;
    let r, l, a, s, u, d, h;
    if (t !== window && t.parentNode && t !== T() ? (r = t.getBoundingClientRect(),
    l = r.top,
    a = r.left,
    s = r.bottom,
    u = r.right,
    d = r.height,
    h = r.width) : (l = 0,
    a = 0,
    s = window.innerHeight,
    u = window.innerWidth,
    d = window.innerHeight,
    h = window.innerWidth),
    (e || n) && t !== window && (i = i || t.parentNode,
    !c))
        do {
            if (i && i.getBoundingClientRect && ("none" !== D(i, "transform") || n && "static" !== D(i, "position"))) {
                const t = i.getBoundingClientRect();
                l -= t.top + parseInt(D(i, "border-top-width")),
                a -= t.left + parseInt(D(i, "border-left-width")),
                s = l + r.height,
                u = a + r.width;
                break
            }
        } while (i = i.parentNode);
    if (o && t !== window) {
        const e = _(i || t)
          , n = e && e.a
          , o = e && e.d;
        e && (l /= o,
        a /= n,
        h /= n,
        d /= o,
        s = l + d,
        u = a + h)
    }
    return {
        top: l,
        left: a,
        bottom: s,
        right: u,
        width: h,
        height: d
    }
}
function O(t, e, n) {
    let o = P(t, !0);
    const i = x(t)[e];
    for (; o; ) {
        const t = x(o)[n];
        let e;
        if (e = "top" === n || "left" === n ? i >= t : i <= t,
        !e)
            return o;
        if (o === T())
            break;
        o = P(o, !1)
    }
    return !1
}
function M(t, e, n, o) {
    let i = 0
      , r = 0;
    const l = t.children;
    for (; r < l.length; ) {
        if ("none" !== l[r].style.display && l[r] !== Sortable.ghost && (o || l[r] !== Sortable.dragged) && w(l[r], n.draggable, t, !1)) {
            if (i === e)
                return l[r];
            i++
        }
        r++
    }
    return null
}
function A(t, e) {
    let n = t.lastElementChild;
    for (; n && (n === Sortable.ghost || "none" === D(n, "display") || e && !v(n, e)); )
        n = n.previousElementSibling;
    return n || null
}
function N(t, e) {
    let n = 0;
    if (!t || !t.parentNode)
        return -1;
    for (; t = t.previousElementSibling; )
        "TEMPLATE" === t.nodeName.toUpperCase() || t === Sortable.clone || e && !v(t, e) || n++;
    return n
}
function I(t) {
    let e = 0
      , n = 0;
    const o = T();
    if (t)
        do {
            const o = _(t)
              , i = o.a
              , r = o.d;
            e += t.scrollLeft * i,
            n += t.scrollTop * r
        } while (t !== o && (t = t.parentNode));
    return [e, n]
}
function P(t, e) {
    if (!t || !t.getBoundingClientRect)
        return T();
    let n = t
      , o = !1;
    do {
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            const t = D(n);
            if (n.clientWidth < n.scrollWidth && ("auto" == t.overflowX || "scroll" == t.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == t.overflowY || "scroll" == t.overflowY)) {
                if (!n.getBoundingClientRect || n === document.body)
                    return T();
                if (o || e)
                    return n;
                o = !0
            }
        }
    } while (n = n.parentNode);
    return T()
}
function k(t, e) {
    return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
}
let R;
function X(t, e) {
    return function() {
        if (!R) {
            const n = arguments
              , o = this;
            1 === n.length ? t.call(o, n[0]) : t.apply(o, n),
            R = setTimeout((function() {
                R = void 0
            }
            ), e)
        }
    }
}
function Y(t, e, n) {
    t.scrollLeft += e,
    t.scrollTop += n
}
function B(t) {
    const e = window.Polymer
      , n = window.jQuery || window.Zepto;
    return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0)
}
function F(t, e) {
    D(t, "position", "absolute"),
    D(t, "top", e.top),
    D(t, "left", e.left),
    D(t, "width", e.width),
    D(t, "height", e.height)
}
function j(t) {
    D(t, "position", ""),
    D(t, "top", ""),
    D(t, "left", ""),
    D(t, "width", ""),
    D(t, "height", "")
}
function H(t, e, n) {
    const o = {};
    return Array.from(t.children).forEach((function(i) {
        let r, l, a, s;
        if (!w(i, e.draggable, t, !1) || i.animated || i === n)
            return;
        const c = x(i);
        o.left = Math.min(null !== (r = o.left) && void 0 !== r ? r : 1 / 0, c.left),
        o.top = Math.min(null !== (l = o.top) && void 0 !== l ? l : 1 / 0, c.top),
        o.right = Math.max(null !== (a = o.right) && void 0 !== a ? a : -1 / 0, c.right),
        o.bottom = Math.max(null !== (s = o.bottom) && void 0 !== s ? s : -1 / 0, c.bottom)
    }
    )),
    o.width = o.right - o.left,
    o.height = o.bottom - o.top,
    o.x = o.left,
    o.y = o.top,
    o
}
const L = "Sortable" + (new Date).getTime();
function K() {
    let t, n = [];
    return {
        captureAnimationState: function() {
            if (n = [],
            !this.options.animation)
                return;
            [].slice.call(this.el.children).forEach((function(t) {
                if ("none" === D(t, "display") || t === Sortable.ghost)
                    return;
                n.push({
                    target: t,
                    rect: x(t)
                });
                const o = e({}, n[n.length - 1].rect);
                if (t.thisAnimationDuration) {
                    const e = _(t, !0);
                    e && (o.top -= e.f,
                    o.left -= e.e)
                }
                t.fromRect = o
            }
            ))
        },
        addAnimationState: function(t) {
            n.push(t)
        },
        removeAnimationState: function(t) {
            n.splice(function(t, e) {
                for (const n in t)
                    if (t.hasOwnProperty(n))
                        for (const o in e)
                            if (e.hasOwnProperty(o) && e[o] === t[n][o])
                                return Number(n);
                return -1
            }(n, {
                target: t
            }), 1)
        },
        animateAll: function(e) {
            const o = this;
            if (!this.options.animation)
                return clearTimeout(t),
                void ("function" == typeof e && e());
            let i = !1
              , r = 0;
            n.forEach((function(t) {
                let e = 0;
                const n = t.target
                  , l = n.fromRect
                  , a = x(n)
                  , s = n.prevFromRect
                  , c = n.prevToRect
                  , u = t.rect
                  , d = _(n, !0);
                d && (a.top -= d.f,
                a.left -= d.e),
                n.toRect = a,
                n.thisAnimationDuration && k(s, a) && !k(l, a) && (u.top - a.top) / (u.left - a.left) == (l.top - a.top) / (l.left - a.left) && (e = function(t, e, n, o) {
                    return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * o.animation
                }(u, s, c, o.options)),
                k(a, l) || (n.prevFromRect = l,
                n.prevToRect = a,
                e || (e = o.options.animation),
                o.animate(n, u, a, e)),
                e && (i = !0,
                r = Math.max(r, e),
                clearTimeout(n.animationResetTimer),
                n.animationResetTimer = setTimeout((function() {
                    n.animationTime = 0,
                    n.prevFromRect = null,
                    n.fromRect = null,
                    n.prevToRect = null,
                    n.thisAnimationDuration = null
                }
                ), e),
                n.thisAnimationDuration = e)
            }
            )),
            clearTimeout(t),
            i ? t = setTimeout((function() {
                "function" == typeof e && e()
            }
            ), r) : "function" == typeof e && e(),
            n = []
        },
        animate: function(t, e, n, o) {
            if (o) {
                D(t, "transition", ""),
                D(t, "transform", "");
                const i = _(this.el)
                  , r = i && i.a
                  , l = i && i.d
                  , a = (e.left - n.left) / (r || 1)
                  , s = (e.top - n.top) / (l || 1);
                t.animatingX = !!a,
                t.animatingY = !!s,
                D(t, "transform", "translate3d(" + a + "px," + s + "px,0)"),
                this.forRepaintDummy = function(t) {
                    return t.offsetWidth
                }(t),
                D(t, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")),
                D(t, "transform", "translate3d(0,0,0)"),
                "number" == typeof t.animated && clearTimeout(t.animated),
                t.animated = setTimeout((function() {
                    D(t, "transition", ""),
                    D(t, "transform", ""),
                    t.animated = !1,
                    t.animatingX = !1,
                    t.animatingY = !1
                }
                ), o)
            }
        }
    }
}
const W = []
  , z = {
    initializeByDefault: !0
}
  , G = {
    mount: function(t) {
        for (const e in z)
            z.hasOwnProperty(e) && !(e in t) && (t[e] = z[e]);
        W.forEach((function(e) {
            if (e.pluginName === t.pluginName)
                throw "Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once")
        }
        )),
        W.push(t)
    },
    pluginEvent: function(t, n, o) {
        const i = this;
        this.eventCanceled = !1,
        o.cancel = function() {
            i.eventCanceled = !0
        }
        ;
        const r = t + "Global";
        W.forEach((function(i) {
            n[i.pluginName] && (n[i.pluginName][r] && n[i.pluginName][r](e({
                sortable: n
            }, o)),
            n.options[i.pluginName] && n[i.pluginName][t] && n[i.pluginName][t](e({
                sortable: n
            }, o)))
        }
        ))
    },
    initializePlugins: function(t, e, n, o) {
        W.forEach((function(o) {
            const r = o.pluginName;
            if (!t.options[r] && !o.initializeByDefault)
                return;
            const l = new o(t,e,t.options);
            l.sortable = t,
            l.options = t.options,
            t[r] = l,
            i(n, l.defaults)
        }
        ));
        for (const e in t.options) {
            if (!t.options.hasOwnProperty(e))
                continue;
            const n = this.modifyOption(t, e, t.options[e]);
            void 0 !== n && (t.options[e] = n)
        }
    },
    getEventProperties: function(t, e) {
        const n = {};
        return W.forEach((function(o) {
            "function" == typeof o.eventProperties && i(n, o.eventProperties.call(e[o.pluginName], t))
        }
        )),
        n
    },
    modifyOption: function(t, e, n) {
        let o;
        return W.forEach((function(i) {
            t[i.pluginName] && i.optionListeners && "function" == typeof i.optionListeners[e] && (o = i.optionListeners[e].call(t[i.pluginName], n))
        }
        )),
        o
    }
};
function U(t) {
    let n = t.sortable;
    const o = t.rootEl
      , i = t.name
      , r = t.targetEl
      , l = t.cloneEl
      , a = t.toEl
      , s = t.fromEl
      , d = t.oldIndex
      , h = t.newIndex
      , f = t.oldDraggableIndex
      , p = t.newDraggableIndex
      , g = t.originalEvent
      , m = t.putSortable
      , b = t.extraEventProperties;
    if (n = n || o && o[L],
    !n)
        return;
    let v;
    const y = n.options
      , w = "on" + i.charAt(0).toUpperCase() + i.substr(1);
    !window.CustomEvent || c || u ? (v = document.createEvent("Event"),
    v.initEvent(i, !0, !0)) : v = new CustomEvent(i,{
        bubbles: !0,
        cancelable: !0
    }),
    v.to = a || o,
    v.from = s || o,
    v.item = r || o,
    v.clone = l,
    v.oldIndex = d,
    v.newIndex = h,
    v.oldDraggableIndex = f,
    v.newDraggableIndex = p,
    v.originalEvent = g,
    v.pullMode = m ? m.lastPutMode : void 0;
    const S = e(e({}, b), G.getEventProperties(i, n));
    for (const t in S)
        v[t] = S[t];
    o && o.dispatchEvent(v),
    y[w] && y[w].call(n, v)
}
const q = ["evt"]
  , V = function(t, n) {
    const o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
      , i = o.evt
      , l = r(o, q);
    G.pluginEvent.bind(Sortable)(t, n, e({
        dragEl: $,
        parentEl: Q,
        ghostEl: J,
        rootEl: tt,
        nextEl: et,
        lastDownEl: nt,
        cloneEl: ot,
        cloneHidden: it,
        dragStarted: wt,
        putSortable: ut,
        activeSortable: Sortable.active,
        originalEvent: i,
        oldIndex: rt,
        oldDraggableIndex: at,
        newIndex: lt,
        newDraggableIndex: st,
        hideGhostForTarget: Yt,
        unhideGhostForTarget: Bt,
        cloneNowHidden: function() {
            it = !0
        },
        cloneNowShown: function() {
            it = !1
        },
        dispatchSortableEvent: function(t) {
            Z({
                sortable: n,
                name: t,
                originalEvent: i
            })
        }
    }, l))
};
function Z(t) {
    U(e({
        putSortable: ut,
        cloneEl: ot,
        targetEl: $,
        rootEl: tt,
        oldIndex: rt,
        oldDraggableIndex: at,
        newIndex: lt,
        newDraggableIndex: st
    }, t))
}
let $, Q, J, tt, et, nt, ot, it, rt, lt, at, st, ct, ut, dt = !1, ht = !1;
const ft = [];
let pt, gt, mt, bt, vt, yt, wt, St, Et, Dt, _t, Ct = !1, Tt = !1, xt = [], Ot = !1;
const Mt = []
  , At = "undefined" != typeof document
  , Nt = f
  , It = u || c ? "cssFloat" : "float"
  , Pt = At && !p && !f && "draggable"in document.createElement("div")
  , kt = function() {
    if (!At)
        return;
    if (c)
        return !1;
    const t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto",
    "auto" === t.style.pointerEvents
}()
  , Rt = function(t, e) {
    const n = D(t)
      , o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth)
      , i = M(t, 0, e)
      , r = M(t, 1, e)
      , l = i && D(i)
      , a = r && D(r)
      , s = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + x(i).width
      , c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + x(r).width;
    if ("flex" === n.display)
        return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
    if ("grid" === n.display)
        return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
    if (i && l.float && "none" !== l.float) {
        const t = "left" === l.float ? "left" : "right";
        return !r || "both" !== a.clear && a.clear !== t ? "horizontal" : "vertical"
    }
    return i && ("block" === l.display || "flex" === l.display || "table" === l.display || "grid" === l.display || s >= o && "none" === n[It] || r && "none" === n[It] && s + c > o) ? "vertical" : "horizontal"
}
  , Xt = function(t) {
    function e(t, n) {
        return function(o, i, r, l) {
            const a = o.options.group.name && i.options.group.name && o.options.group.name === i.options.group.name;
            if (null == t && (n || a))
                return !0;
            if (null == t || !1 === t)
                return !1;
            if (n && "clone" === t)
                return t;
            if ("function" == typeof t)
                return e(t(o, i, r, l), n)(o, i, r, l);
            {
                const e = (n ? o : i).options.group.name;
                return !0 === t || "string" == typeof t && t === e || t.join && t.indexOf(e) > -1
            }
        }
    }
    const o = {};
    let i = t.group;
    i && "object" == n(i) || (i = {
        name: i
    }),
    o.name = i.name,
    o.checkPull = e(i.pull, !0),
    o.checkPut = e(i.put),
    o.revertClone = i.revertClone,
    t.group = o
};
var Yt = function() {
    !kt && J && D(J, "display", "none")
}
  , Bt = function() {
    !kt && J && D(J, "display", "")
};
At && !p && document.addEventListener("click", (function(t) {
    if (ht)
        return t.preventDefault(),
        t.stopPropagation && t.stopPropagation(),
        t.stopImmediatePropagation && t.stopImmediatePropagation(),
        ht = !1,
        !1
}
), !0);
const Ft = function(t) {
    if ($) {
        const e = function(t, e) {
            let n;
            return ft.some((function(o) {
                const i = o[L].options.emptyInsertThreshold;
                if (!i || A(o))
                    return;
                const r = x(o)
                  , l = t >= r.left - i && t <= r.right + i
                  , a = e >= r.top - i && e <= r.bottom + i;
                return l && a ? n = o : void 0
            }
            )),
            n
        }((t = t.touches ? t.touches[0] : t).clientX, t.clientY);
        if (e) {
            const n = {};
            for (const e in t)
                t.hasOwnProperty(e) && (n[e] = t[e]);
            n.target = n.rootEl = e,
            n.preventDefault = void 0,
            n.stopPropagation = void 0,
            e[L]._onDragOver(n)
        }
    }
}
  , jt = function(t) {
    $ && $.parentNode[L]._isOutsideThisEl(t.target)
};
export function Sortable(t, e) {
    if (!t || !t.nodeType || 1 !== t.nodeType)
        throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
    this.el = t,
    this.options = e = i({}, e),
    t[L] = this;
    const n = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function() {
            return Rt(t, this.options)
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function(t, e) {
            t.setData("Text", e.textContent)
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: !1 !== Sortable.supportPointer && "PointerEvent"in window && !h,
        emptyInsertThreshold: 5
    };
    G.initializePlugins(this, t, n);
    for (const t in n)
        !(t in e) && (e[t] = n[t]);
    Xt(e);
    for (const t in this)
        "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
    this.nativeDraggable = !e.forceFallback && Pt,
    this.nativeDraggable && (this.options.touchStartThreshold = 1),
    e.supportPointer ? m(t, "pointerdown", this._onTapStart) : (m(t, "mousedown", this._onTapStart),
    m(t, "touchstart", this._onTapStart)),
    this.nativeDraggable && (m(t, "dragover", this),
    m(t, "dragenter", this)),
    ft.push(this.el),
    e.store && e.store.get && this.sort(e.store.get(this) || []),
    i(this, K())
}
function Ht(t, e, n, o, i, r, l, a) {
    let s;
    const d = t[L]
      , h = d.options.onMove;
    let f;
    return !window.CustomEvent || c || u ? (s = document.createEvent("Event"),
    s.initEvent("move", !0, !0)) : s = new CustomEvent("move",{
        bubbles: !0,
        cancelable: !0
    }),
    s.to = e,
    s.from = t,
    s.dragged = n,
    s.draggedRect = o,
    s.related = i || e,
    s.relatedRect = r || x(e),
    s.willInsertAfter = a,
    s.originalEvent = l,
    t.dispatchEvent(s),
    h && (f = h.call(d, s, l)),
    f
}
function Lt(t) {
    t.draggable = !1
}
function Kt() {
    Ot = !1
}
function Wt(t) {
    const e = t.tagName + t.className + t.src + t.href + t.textContent;
    let n = e.length
      , o = 0;
    for (; n--; )
        o += e.charCodeAt(n);
    return o.toString(36)
}
function zt(t) {
    return setTimeout(t, 0)
}
function Gt(t) {
    return clearTimeout(t)
}
Sortable.prototype = {
    constructor: Sortable,
    _isOutsideThisEl: function(t) {
        this.el.contains(t) || t === this.el || (St = null)
    },
    _getDirection: function(t, e) {
        return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, $) : this.options.direction
    },
    _onTapStart: function(t) {
        if (!t.cancelable)
            return;
        const e = this
          , n = this.el
          , o = this.options
          , i = o.preventOnFilter
          , r = t.type
          , l = t.touches && t.touches[0] || t.pointerType && "touch" === t.pointerType && t;
        let a = (l || t).target;
        const s = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || a;
        let c = o.filter;
        if (function(t) {
            Mt.length = 0;
            const e = t.getElementsByTagName("input");
            let n = e.length;
            for (; n--; ) {
                const t = e[n];
                t.checked && Mt.push(t)
            }
        }(n),
        !$ && !(/mousedown|pointerdown/.test(r) && 0 !== t.button || o.disabled) && !s.isContentEditable && (this.nativeDraggable || !h || !a || "SELECT" !== a.tagName.toUpperCase()) && (a = w(a, o.draggable, n, !1),
        !(a && a.animated || nt === a))) {
            if (rt = N(a),
            at = N(a, o.draggable),
            "function" == typeof c) {
                if (c.call(this, t, a, this))
                    return Z({
                        sortable: e,
                        rootEl: s,
                        name: "filter",
                        targetEl: a,
                        toEl: n,
                        fromEl: n
                    }),
                    V("filter", e, {
                        evt: t
                    }),
                    void (i && t.cancelable && t.preventDefault())
            } else if (c && (c = c.split(",").some((function(o) {
                if (o = w(s, o.trim(), n, !1))
                    return Z({
                        sortable: e,
                        rootEl: o,
                        name: "filter",
                        targetEl: a,
                        fromEl: n,
                        toEl: n
                    }),
                    V("filter", e, {
                        evt: t
                    }),
                    !0
            }
            )),
            c))
                return void (i && t.cancelable && t.preventDefault());
            o.handle && !w(s, o.handle, n, !1) || this._prepareDragStart(t, l, a)
        }
    },
    _prepareDragStart: function(t, e, n) {
        const o = this
          , i = o.el
          , r = o.options
          , l = i.ownerDocument;
        let a;
        if (n && !$ && n.parentNode === i) {
            const s = x(n);
            if (tt = i,
            $ = n,
            Q = $.parentNode,
            et = $.nextSibling,
            nt = n,
            ct = r.group,
            Sortable.dragged = $,
            pt = {
                target: $,
                clientX: (e || t).clientX,
                clientY: (e || t).clientY
            },
            vt = pt.clientX - s.left,
            yt = pt.clientY - s.top,
            this._lastX = (e || t).clientX,
            this._lastY = (e || t).clientY,
            $.style["will-change"] = "all",
            a = function() {
                V("delayEnded", o, {
                    evt: t
                }),
                Sortable.eventCanceled ? o._onDrop() : (o._disableDelayedDragEvents(),
                !d && o.nativeDraggable && ($.draggable = !0),
                o._triggerDragStart(t, e),
                Z({
                    sortable: o,
                    name: "choose",
                    originalEvent: t
                }),
                E($, r.chosenClass, !0))
            }
            ,
            r.ignore.split(",").forEach((function(t) {
                C($, t.trim(), Lt)
            }
            )),
            m(l, "dragover", Ft),
            m(l, "mousemove", Ft),
            m(l, "touchmove", Ft),
            m(l, "mouseup", o._onDrop),
            m(l, "touchend", o._onDrop),
            m(l, "touchcancel", o._onDrop),
            d && this.nativeDraggable && (this.options.touchStartThreshold = 4,
            $.draggable = !0),
            V("delayStart", this, {
                evt: t
            }),
            !r.delay || r.delayOnTouchOnly && !e || this.nativeDraggable && (u || c))
                a();
            else {
                if (Sortable.eventCanceled)
                    return void this._onDrop();
                m(l, "mouseup", o._disableDelayedDrag),
                m(l, "touchend", o._disableDelayedDrag),
                m(l, "touchcancel", o._disableDelayedDrag),
                m(l, "mousemove", o._delayedDragTouchMoveHandler),
                m(l, "touchmove", o._delayedDragTouchMoveHandler),
                r.supportPointer && m(l, "pointermove", o._delayedDragTouchMoveHandler),
                o._dragStartTimer = setTimeout(a, r.delay)
            }
        }
    },
    _delayedDragTouchMoveHandler: function(t) {
        const e = t.touches ? t.touches[0] : t;
        Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
    },
    _disableDelayedDrag: function() {
        $ && Lt($),
        clearTimeout(this._dragStartTimer),
        this._disableDelayedDragEvents()
    },
    _disableDelayedDragEvents: function() {
        const t = this.el.ownerDocument;
        b(t, "mouseup", this._disableDelayedDrag),
        b(t, "touchend", this._disableDelayedDrag),
        b(t, "touchcancel", this._disableDelayedDrag),
        b(t, "mousemove", this._delayedDragTouchMoveHandler),
        b(t, "touchmove", this._delayedDragTouchMoveHandler),
        b(t, "pointermove", this._delayedDragTouchMoveHandler)
    },
    _triggerDragStart: function(t, e) {
        e = e || "touch" == t.pointerType && t,
        !this.nativeDraggable || e ? this.options.supportPointer ? m(document, "pointermove", this._onTouchMove) : m(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (m($, "dragend", this),
        m(tt, "dragstart", this._onDragStart));
        try {
            document.selection ? zt((function() {
                document.selection.empty()
            }
            )) : window.getSelection().removeAllRanges()
        } catch (t) {}
    },
    _dragStarted: function(t, e) {
        if (dt = !1,
        tt && $) {
            V("dragStarted", this, {
                evt: e
            }),
            this.nativeDraggable && m(document, "dragover", jt);
            const n = this.options;
            !t && E($, n.dragClass, !1),
            E($, n.ghostClass, !0),
            Sortable.active = this,
            t && this._appendGhost(),
            Z({
                sortable: this,
                name: "start",
                originalEvent: e
            })
        } else
            this._nulling()
    },
    _emulateDragOver: function() {
        if (gt) {
            this._lastX = gt.clientX,
            this._lastY = gt.clientY,
            Yt();
            let t = document.elementFromPoint(gt.clientX, gt.clientY)
              , e = t;
            for (; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(gt.clientX, gt.clientY),
            t !== e); )
                e = t;
            if ($.parentNode[L]._isOutsideThisEl(t),
            e)
                do {
                    if (e[L]) {
                        let n;
                        if (n = e[L]._onDragOver({
                            clientX: gt.clientX,
                            clientY: gt.clientY,
                            target: t,
                            rootEl: e
                        }),
                        n && !this.options.dragoverBubble)
                            break
                    }
                    t = e
                } while (e = e.parentNode);
            Bt()
        }
    },
    _onTouchMove: function(t) {
        if (pt) {
            const e = this.options
              , n = e.fallbackTolerance
              , o = e.fallbackOffset
              , i = t.touches ? t.touches[0] : t;
            let r = J && _(J, !0);
            const l = J && r && r.a
              , a = J && r && r.d
              , s = Nt && _t && I(_t)
              , c = (i.clientX - pt.clientX + o.x) / (l || 1) + (s ? s[0] - xt[0] : 0) / (l || 1)
              , u = (i.clientY - pt.clientY + o.y) / (a || 1) + (s ? s[1] - xt[1] : 0) / (a || 1);
            if (!Sortable.active && !dt) {
                if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n)
                    return;
                this._onDragStart(t, !0)
            }
            if (J) {
                r ? (r.e += c - (mt || 0),
                r.f += u - (bt || 0)) : r = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: c,
                    f: u
                };
                const t = "matrix(".concat(r.a, ",").concat(r.b, ",").concat(r.c, ",").concat(r.d, ",").concat(r.e, ",").concat(r.f, ")");
                D(J, "webkitTransform", t),
                D(J, "mozTransform", t),
                D(J, "msTransform", t),
                D(J, "transform", t),
                mt = c,
                bt = u,
                gt = i
            }
            t.cancelable && t.preventDefault()
        }
    },
    _appendGhost: function() {
        if (!J) {
            const t = this.options.fallbackOnBody ? document.body : tt
              , e = x($, !0, Nt, !0, t)
              , n = this.options;
            if (Nt) {
                for (_t = t; "static" === D(_t, "position") && "none" === D(_t, "transform") && _t !== document; )
                    _t = _t.parentNode;
                _t !== document.body && _t !== document.documentElement ? (_t === document && (_t = T()),
                e.top += _t.scrollTop,
                e.left += _t.scrollLeft) : _t = T(),
                xt = I(_t)
            }
            J = $.cloneNode(!0),
            E(J, n.ghostClass, !1),
            E(J, n.fallbackClass, !0),
            E(J, n.dragClass, !0),
            D(J, "transition", ""),
            D(J, "transform", ""),
            D(J, "box-sizing", "border-box"),
            D(J, "margin", 0),
            D(J, "top", e.top),
            D(J, "left", e.left),
            D(J, "width", e.width),
            D(J, "height", e.height),
            D(J, "opacity", "0.8"),
            D(J, "position", Nt ? "absolute" : "fixed"),
            D(J, "zIndex", "100000"),
            D(J, "pointerEvents", "none"),
            Sortable.ghost = J,
            t.appendChild(J),
            D(J, "transform-origin", vt / parseInt(J.style.width) * 100 + "% " + yt / parseInt(J.style.height) * 100 + "%")
        }
    },
    _onDragStart: function(t, e) {
        const n = this
          , o = t.dataTransfer
          , i = n.options;
        V("dragStart", this, {
            evt: t
        }),
        Sortable.eventCanceled ? this._onDrop() : (V("setupClone", this),
        Sortable.eventCanceled || (ot = B($),
        ot.removeAttribute("id"),
        ot.draggable = !1,
        ot.style["will-change"] = "",
        this._hideClone(),
        E(ot, this.options.chosenClass, !1),
        Sortable.clone = ot),
        n.cloneId = zt((function() {
            V("clone", n),
            Sortable.eventCanceled || (n.options.removeCloneOnHide || tt.insertBefore(ot, $),
            n._hideClone(),
            Z({
                sortable: n,
                name: "clone"
            }))
        }
        )),
        !e && E($, i.dragClass, !0),
        e ? (ht = !0,
        n._loopId = setInterval(n._emulateDragOver, 50)) : (b(document, "mouseup", n._onDrop),
        b(document, "touchend", n._onDrop),
        b(document, "touchcancel", n._onDrop),
        o && (o.effectAllowed = "move",
        i.setData && i.setData.call(n, o, $)),
        m(document, "drop", n),
        D($, "transform", "translateZ(0)")),
        dt = !0,
        n._dragStartId = zt(n._dragStarted.bind(n, e, t)),
        m(document, "selectstart", n),
        wt = !0,
        h && D(document.body, "user-select", "none"))
    },
    _onDragOver: function(t) {
        const n = this.el;
        let o, i, r, l = t.target;
        const a = this.options
          , s = a.group
          , c = Sortable.active
          , u = ct === s
          , d = a.sort
          , h = ut || c;
        let f;
        const p = this;
        let g = !1;
        if (!Ot) {
            if (void 0 !== t.preventDefault && t.cancelable && t.preventDefault(),
            l = w(l, a.draggable, n, !0),
            m("dragOver"),
            Sortable.eventCanceled)
                return g;
            if ($.contains(t.target) || l.animated && l.animatingX && l.animatingY || p._ignoreWhileAnimating === l)
                return v(!1);
            if (ht = !1,
            c && !a.disabled && (u ? d || (r = Q !== tt) : ut === this || (this.lastPutMode = ct.checkPull(this, c, $, t)) && s.checkPut(this, c, $, t))) {
                if (f = "vertical" === this._getDirection(t, l),
                o = x($),
                m("dragOverValid"),
                Sortable.eventCanceled)
                    return g;
                if (r)
                    return Q = tt,
                    b(),
                    this._hideClone(),
                    m("revert"),
                    Sortable.eventCanceled || (et ? tt.insertBefore($, et) : tt.appendChild($)),
                    v(!0);
                const e = A(n, a.draggable);
                if (!e || function(t, e, n) {
                    const o = x(A(n.el, n.options.draggable))
                      , i = H(n.el, n.options, J)
                      , r = 10;
                    return e ? t.clientX > i.right + r || t.clientY > o.bottom && t.clientX > o.left : t.clientY > i.bottom + r || t.clientX > o.right && t.clientY > o.top
                }(t, f, this) && !e.animated) {
                    if (e === $)
                        return v(!1);
                    if (e && n === t.target && (l = e),
                    l && (i = x(l)),
                    !1 !== Ht(tt, n, $, o, l, i, t, !!l))
                        return b(),
                        e && e.nextSibling ? n.insertBefore($, e.nextSibling) : n.appendChild($),
                        Q = n,
                        y(),
                        v(!0)
                } else if (e && function(t, e, n) {
                    const o = x(M(n.el, 0, n.options, !0))
                      , i = H(n.el, n.options, J)
                      , r = 10;
                    return e ? t.clientX < i.left - r || t.clientY < o.top && t.clientX < o.right : t.clientY < i.top - r || t.clientY < o.bottom && t.clientX < o.left
                }(t, f, this)) {
                    const e = M(n, 0, a, !0);
                    if (e === $)
                        return v(!1);
                    if (l = e,
                    i = x(l),
                    !1 !== Ht(tt, n, $, o, l, i, t, !1))
                        return b(),
                        n.insertBefore($, e),
                        Q = n,
                        y(),
                        v(!0)
                } else if (l.parentNode === n) {
                    i = x(l);
                    let e, r = 0;
                    const s = $.parentNode !== n
                      , c = !function(t, e, n) {
                        const o = n ? t.left : t.top
                          , i = n ? t.right : t.bottom
                          , r = n ? t.width : t.height
                          , l = n ? e.left : e.top
                          , a = n ? e.right : e.bottom
                          , s = n ? e.width : e.height;
                        return o === l || i === a || o + r / 2 === l + s / 2
                    }($.animated && $.toRect || o, l.animated && l.toRect || i, f)
                      , u = f ? "top" : "left"
                      , d = O(l, "top", "top") || O($, "top", "top")
                      , h = d ? d.scrollTop : void 0;
                    let p;
                    if (St !== l && (e = i[u],
                    Ct = !1,
                    Tt = !c && a.invertSwap || s),
                    r = function(t, e, n, o, i, r, l, a) {
                        const s = o ? t.clientY : t.clientX
                          , c = o ? n.height : n.width
                          , u = o ? n.top : n.left
                          , d = o ? n.bottom : n.right;
                        let h = !1;
                        if (!l)
                            if (a && Dt < c * i) {
                                if (!Ct && (1 === Et ? s > u + c * r / 2 : s < d - c * r / 2) && (Ct = !0),
                                Ct)
                                    h = !0;
                                else if (1 === Et ? s < u + Dt : s > d - Dt)
                                    return -Et
                            } else if (s > u + c * (1 - i) / 2 && s < d - c * (1 - i) / 2)
                                return function(t) {
                                    return N($) < N(t) ? 1 : -1
                                }(e);
                        if (h = h || l,
                        h && (s < u + c * r / 2 || s > d - c * r / 2))
                            return s > u + c / 2 ? 1 : -1;
                        return 0
                    }(t, l, i, f, c ? 1 : a.swapThreshold, null == a.invertedSwapThreshold ? a.swapThreshold : a.invertedSwapThreshold, Tt, St === l),
                    0 !== r) {
                        let t = N($);
                        do {
                            t -= r,
                            p = Q.children[t]
                        } while (p && ("none" === D(p, "display") || p === J))
                    }
                    if (0 === r || p === l)
                        return v(!1);
                    St = l,
                    Et = r;
                    const g = l.nextElementSibling;
                    let m = !1;
                    m = 1 === r;
                    const w = Ht(tt, n, $, o, l, i, t, m);
                    if (!1 !== w)
                        return 1 !== w && -1 !== w || (m = 1 === w),
                        Ot = !0,
                        setTimeout(Kt, 30),
                        b(),
                        m && !g ? n.appendChild($) : l.parentNode.insertBefore($, m ? g : l),
                        d && Y(d, 0, h - d.scrollTop),
                        Q = $.parentNode,
                        void 0 === e || Tt || (Dt = Math.abs(e - x(l)[u])),
                        y(),
                        v(!0)
                }
                if (n.contains($))
                    return v(!1)
            }
            return !1
        }
        function m(a, s) {
            V(a, p, e({
                evt: t,
                isOwner: u,
                axis: f ? "vertical" : "horizontal",
                revert: r,
                dragRect: o,
                targetRect: i,
                canSort: d,
                fromSortable: h,
                target: l,
                completed: v,
                onMove: function(e, i) {
                    return Ht(tt, n, $, o, e, x(e), t, i)
                },
                changed: y
            }, s))
        }
        function b() {
            m("dragOverAnimationCapture"),
            p.captureAnimationState(),
            p !== h && h.captureAnimationState()
        }
        function v(e) {
            return m("dragOverCompleted", {
                insertion: e
            }),
            e && (u ? c._hideClone() : c._showClone(p),
            p !== h && (E($, ut ? ut.options.ghostClass : c.options.ghostClass, !1),
            E($, a.ghostClass, !0)),
            ut !== p && p !== Sortable.active ? ut = p : p === Sortable.active && ut && (ut = null),
            h === p && (p._ignoreWhileAnimating = l),
            p.animateAll((function() {
                m("dragOverAnimationComplete"),
                p._ignoreWhileAnimating = null
            }
            )),
            p !== h && (h.animateAll(),
            h._ignoreWhileAnimating = null)),
            (l === $ && !$.animated || l === n && !l.animated) && (St = null),
            a.dragoverBubble || t.rootEl || l === document || ($.parentNode[L]._isOutsideThisEl(t.target),
            !e && Ft(t)),
            !a.dragoverBubble && t.stopPropagation && t.stopPropagation(),
            g = !0
        }
        function y() {
            lt = N($),
            st = N($, a.draggable),
            Z({
                sortable: p,
                name: "change",
                toEl: n,
                newIndex: lt,
                newDraggableIndex: st,
                originalEvent: t
            })
        }
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        b(document, "mousemove", this._onTouchMove),
        b(document, "touchmove", this._onTouchMove),
        b(document, "pointermove", this._onTouchMove),
        b(document, "dragover", Ft),
        b(document, "mousemove", Ft),
        b(document, "touchmove", Ft)
    },
    _offUpEvents: function() {
        const t = this.el.ownerDocument;
        b(t, "mouseup", this._onDrop),
        b(t, "touchend", this._onDrop),
        b(t, "pointerup", this._onDrop),
        b(t, "touchcancel", this._onDrop),
        b(document, "selectstart", this)
    },
    _onDrop: function(t) {
        const e = this.el
          , n = this.options;
        lt = N($),
        st = N($, n.draggable),
        V("drop", this, {
            evt: t
        }),
        Q = $ && $.parentNode,
        lt = N($),
        st = N($, n.draggable),
        Sortable.eventCanceled || (dt = !1,
        Tt = !1,
        Ct = !1,
        clearInterval(this._loopId),
        clearTimeout(this._dragStartTimer),
        Gt(this.cloneId),
        Gt(this._dragStartId),
        this.nativeDraggable && (b(document, "drop", this),
        b(e, "dragstart", this._onDragStart)),
        this._offMoveEvents(),
        this._offUpEvents(),
        h && D(document.body, "user-select", ""),
        D($, "transform", ""),
        t && (wt && (t.cancelable && t.preventDefault(),
        !n.dropBubble && t.stopPropagation()),
        J && J.parentNode && J.parentNode.removeChild(J),
        (tt === Q || ut && "clone" !== ut.lastPutMode) && ot && ot.parentNode && ot.parentNode.removeChild(ot),
        $ && (this.nativeDraggable && b($, "dragend", this),
        Lt($),
        $.style["will-change"] = "",
        wt && !dt && E($, ut ? ut.options.ghostClass : this.options.ghostClass, !1),
        E($, this.options.chosenClass, !1),
        Z({
            sortable: this,
            name: "unchoose",
            toEl: Q,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: t
        }),
        tt !== Q ? (lt >= 0 && (Z({
            rootEl: Q,
            name: "add",
            toEl: Q,
            fromEl: tt,
            originalEvent: t
        }),
        Z({
            sortable: this,
            name: "remove",
            toEl: Q,
            originalEvent: t
        }),
        Z({
            rootEl: Q,
            name: "sort",
            toEl: Q,
            fromEl: tt,
            originalEvent: t
        }),
        Z({
            sortable: this,
            name: "sort",
            toEl: Q,
            originalEvent: t
        })),
        ut && ut.save()) : lt !== rt && lt >= 0 && (Z({
            sortable: this,
            name: "update",
            toEl: Q,
            originalEvent: t
        }),
        Z({
            sortable: this,
            name: "sort",
            toEl: Q,
            originalEvent: t
        })),
        Sortable.active && (null != lt && -1 !== lt || (lt = rt,
        st = at),
        Z({
            sortable: this,
            name: "end",
            toEl: Q,
            originalEvent: t
        }),
        this.save())))),
        this._nulling()
    },
    _nulling: function() {
        V("nulling", this),
        tt = $ = Q = J = et = ot = nt = it = pt = gt = wt = lt = st = rt = at = St = Et = ut = ct = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null,
        Mt.forEach((function(t) {
            t.checked = !0
        }
        )),
        Mt.length = mt = bt = 0
    },
    handleEvent: function(t) {
        switch (t.type) {
        case "drop":
        case "dragend":
            this._onDrop(t);
            break;
        case "dragenter":
        case "dragover":
            $ && (this._onDragOver(t),
            function(t) {
                t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                t.cancelable && t.preventDefault()
            }(t));
            break;
        case "selectstart":
            t.preventDefault()
        }
    },
    toArray: function() {
        const t = [];
        let e;
        const n = this.el.children;
        let o = 0;
        const i = n.length
          , r = this.options;
        for (; o < i; o++)
            e = n[o],
            w(e, r.draggable, this.el, !1) && t.push(e.getAttribute(r.dataIdAttr) || Wt(e));
        return t
    },
    sort: function(t, e) {
        const n = {}
          , o = this.el;
        this.toArray().forEach((function(t, e) {
            const i = o.children[e];
            w(i, this.options.draggable, o, !1) && (n[t] = i)
        }
        ), this),
        e && this.captureAnimationState(),
        t.forEach((function(t) {
            n[t] && (o.removeChild(n[t]),
            o.appendChild(n[t]))
        }
        )),
        e && this.animateAll()
    },
    save: function() {
        const t = this.options.store;
        t && t.set && t.set(this)
    },
    closest: function(t, e) {
        return w(t, e || this.options.draggable, this.el, !1)
    },
    option: function(t, e) {
        const n = this.options;
        if (void 0 === e)
            return n[t];
        {
            const o = G.modifyOption(this, t, e);
            n[t] = void 0 !== o ? o : e,
            "group" === t && Xt(n)
        }
    },
    destroy: function() {
        V("destroy", this);
        let t = this.el;
        t[L] = null,
        b(t, "mousedown", this._onTapStart),
        b(t, "touchstart", this._onTapStart),
        b(t, "pointerdown", this._onTapStart),
        this.nativeDraggable && (b(t, "dragover", this),
        b(t, "dragenter", this)),
        Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), (function(t) {
            t.removeAttribute("draggable")
        }
        )),
        this._onDrop(),
        this._disableDelayedDragEvents(),
        ft.splice(ft.indexOf(this.el), 1),
        this.el = t = null
    },
    _hideClone: function() {
        if (!it) {
            if (V("hideClone", this),
            Sortable.eventCanceled)
                return;
            D(ot, "display", "none"),
            this.options.removeCloneOnHide && ot.parentNode && ot.parentNode.removeChild(ot),
            it = !0
        }
    },
    _showClone: function(t) {
        if ("clone" === t.lastPutMode) {
            if (it) {
                if (V("showClone", this),
                Sortable.eventCanceled)
                    return;
                $.parentNode != tt || this.options.group.revertClone ? et ? tt.insertBefore(ot, et) : tt.appendChild(ot) : tt.insertBefore(ot, $),
                this.options.group.revertClone && this.animate($, ot),
                D(ot, "display", ""),
                it = !1
            }
        } else
            this._hideClone()
    }
},
At && m(document, "touchmove", (function(t) {
    (Sortable.active || dt) && t.cancelable && t.preventDefault()
}
)),
Sortable.utils = {
    on: m,
    off: b,
    css: D,
    find: C,
    is: function(t, e) {
        return !!w(t, e, t, !1)
    },
    extend: function(t, e) {
        if (t && e)
            for (const n in e)
                e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    },
    throttle: X,
    closest: w,
    toggleClass: E,
    clone: B,
    index: N,
    nextTick: zt,
    cancelNextTick: Gt,
    detectDirection: Rt,
    getChild: M
},
Sortable.get = function(t) {
    return t[L]
}
,
Sortable.mount = function() {
    for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
    n[0].constructor === Array && (n = n[0]),
    n.forEach((function(t) {
        if (!t.prototype || !t.prototype.constructor)
            throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(t));
        t.utils && (Sortable.utils = e(e({}, Sortable.utils), t.utils)),
        G.mount(t)
    }
    ))
}
,
Sortable.create = function(t, e) {
    return new Sortable(t,e)
}
,
Sortable.version = "1.15.2";
let Ut, qt, Vt, Zt, $t, Qt, Jt = [], te = !1;
function ee() {
    Jt.forEach((function(t) {
        clearInterval(t.pid)
    }
    )),
    Jt = []
}
function ne() {
    clearInterval(Qt)
}
var oe = X((function(t, e, n, o) {
    if (!e.scroll)
        return;
    const i = (t.touches ? t.touches[0] : t).clientX
      , r = (t.touches ? t.touches[0] : t).clientY
      , l = e.scrollSensitivity
      , a = e.scrollSpeed
      , s = T();
    let c, u = !1;
    qt !== n && (qt = n,
    ee(),
    Ut = e.scroll,
    c = e.scrollFn,
    !0 === Ut && (Ut = P(n, !0)));
    let d = 0
      , h = Ut;
    do {
        const e = h
          , n = x(e)
          , f = n.top
          , p = n.bottom
          , g = n.left
          , m = n.right
          , b = n.width
          , v = n.height;
        let y, w;
        const S = e.scrollWidth
          , E = e.scrollHeight
          , _ = D(e)
          , C = e.scrollLeft
          , T = e.scrollTop;
        e === s ? (y = b < S && ("auto" === _.overflowX || "scroll" === _.overflowX || "visible" === _.overflowX),
        w = v < E && ("auto" === _.overflowY || "scroll" === _.overflowY || "visible" === _.overflowY)) : (y = b < S && ("auto" === _.overflowX || "scroll" === _.overflowX),
        w = v < E && ("auto" === _.overflowY || "scroll" === _.overflowY));
        const O = y && (Math.abs(m - i) <= l && C + b < S) - (Math.abs(g - i) <= l && !!C)
          , M = w && (Math.abs(p - r) <= l && T + v < E) - (Math.abs(f - r) <= l && !!T);
        if (!Jt[d])
            for (let t = 0; t <= d; t++)
                Jt[t] || (Jt[t] = {});
        Jt[d].vx == O && Jt[d].vy == M && Jt[d].el === e || (Jt[d].el = e,
        Jt[d].vx = O,
        Jt[d].vy = M,
        clearInterval(Jt[d].pid),
        0 == O && 0 == M || (u = !0,
        Jt[d].pid = setInterval(function() {
            o && 0 === this.layer && Sortable.active._onTouchMove($t);
            const e = Jt[this.layer].vy ? Jt[this.layer].vy * a : 0
              , n = Jt[this.layer].vx ? Jt[this.layer].vx * a : 0;
            "function" == typeof c && "continue" !== c.call(Sortable.dragged.parentNode[L], n, e, t, $t, Jt[this.layer].el) || Y(Jt[this.layer].el, n, e)
        }
        .bind({
            layer: d
        }), 24))),
        d++
    } while (e.bubbleScroll && h !== s && (h = P(h, !1)));
    te = u
}
), 30);
const ie = function(t) {
    const e = t.originalEvent
      , n = t.putSortable
      , o = t.dragEl
      , i = t.activeSortable
      , r = t.dispatchSortableEvent
      , l = t.hideGhostForTarget
      , a = t.unhideGhostForTarget;
    if (!e)
        return;
    const s = n || i;
    l();
    const c = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e
      , u = document.elementFromPoint(c.clientX, c.clientY);
    a(),
    s && !s.el.contains(u) && (r("spill"),
    this.onSpill({
        dragEl: o,
        putSortable: n
    }))
};
function re() {}
function le() {}
let ae;
re.prototype = {
    startIndex: null,
    dragStart: function(t) {
        const e = t.oldDraggableIndex;
        this.startIndex = e
    },
    onSpill: function(t) {
        const e = t.dragEl
          , n = t.putSortable;
        this.sortable.captureAnimationState(),
        n && n.captureAnimationState();
        const o = M(this.sortable.el, this.startIndex, this.options);
        o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e),
        this.sortable.animateAll(),
        n && n.animateAll()
    },
    drop: ie
},
i(re, {
    pluginName: "revertOnSpill"
}),
le.prototype = {
    onSpill: function(t) {
        const e = t.dragEl
          , n = t.putSortable || this.sortable;
        n.captureAnimationState(),
        e.parentNode && e.parentNode.removeChild(e),
        n.animateAll()
    },
    drop: ie
},
i(le, {
    pluginName: "removeOnSpill"
});
let se = [];
const ce = [];
let ue, de, he, fe, pe, ge = !1, me = !1, be = !1;
function ve(t, e) {
    ce.forEach((function(n, o) {
        const i = e.children[n.sortableIndex + (t ? Number(o) : 0)];
        i ? e.insertBefore(n, i) : e.appendChild(n)
    }
    ))
}
function ye() {
    se.forEach((function(t) {
        t !== he && t.parentNode && t.parentNode.removeChild(t)
    }
    ))
}
Sortable.mount(new function() {
    function t() {
        this.defaults = {
            scroll: !0,
            forceAutoScrollFallback: !1,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0
        };
        for (const t in this)
            "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this))
    }
    return t.prototype = {
        dragStarted: function(t) {
            const e = t.originalEvent;
            this.sortable.nativeDraggable ? m(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? m(document, "pointermove", this._handleFallbackAutoScroll) : e.touches ? m(document, "touchmove", this._handleFallbackAutoScroll) : m(document, "mousemove", this._handleFallbackAutoScroll)
        },
        dragOverCompleted: function(t) {
            const e = t.originalEvent;
            this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e)
        },
        drop: function() {
            this.sortable.nativeDraggable ? b(document, "dragover", this._handleAutoScroll) : (b(document, "pointermove", this._handleFallbackAutoScroll),
            b(document, "touchmove", this._handleFallbackAutoScroll),
            b(document, "mousemove", this._handleFallbackAutoScroll)),
            ne(),
            ee(),
            clearTimeout(R),
            R = void 0
        },
        nulling: function() {
            $t = qt = Ut = te = Qt = Vt = Zt = null,
            Jt.length = 0
        },
        _handleFallbackAutoScroll: function(t) {
            this._handleAutoScroll(t, !0)
        },
        _handleAutoScroll: function(t, e) {
            const n = this
              , o = (t.touches ? t.touches[0] : t).clientX
              , i = (t.touches ? t.touches[0] : t).clientY
              , r = document.elementFromPoint(o, i);
            if ($t = t,
            e || this.options.forceAutoScrollFallback || u || c || h) {
                oe(t, this.options, r, e);
                let l = P(r, !0);
                !te || Qt && o === Vt && i === Zt || (Qt && ne(),
                Qt = setInterval((function() {
                    const r = P(document.elementFromPoint(o, i), !0);
                    r !== l && (l = r,
                    ee()),
                    oe(t, n.options, r, e)
                }
                ), 10),
                Vt = o,
                Zt = i)
            } else {
                if (!this.options.bubbleScroll || P(r, !0) === T())
                    return void ee();
                oe(t, this.options, P(r, !1), !1)
            }
        }
    },
    i(t, {
        pluginName: "scroll",
        initializeByDefault: !0
    })
}
),
Sortable.mount(le, re),
Sortable.mount(new function() {
    function t() {
        this.defaults = {
            swapClass: "sortable-swap-highlight"
        }
    }
    return t.prototype = {
        dragStart: function(t) {
            const e = t.dragEl;
            ae = e
        },
        dragOverValid: function(t) {
            const e = t.completed
              , n = t.target
              , o = t.onMove
              , i = t.activeSortable
              , r = t.changed
              , l = t.cancel;
            if (!i.options.swap)
                return;
            const a = this.sortable.el
              , s = this.options;
            if (n && n !== a) {
                const t = ae;
                !1 !== o(n) ? (E(n, s.swapClass, !0),
                ae = n) : ae = null,
                t && t !== ae && E(t, s.swapClass, !1)
            }
            r(),
            e(!0),
            l()
        },
        drop: function(t) {
            const e = t.activeSortable
              , n = t.putSortable
              , o = t.dragEl
              , i = n || this.sortable
              , r = this.options;
            ae && E(ae, r.swapClass, !1),
            ae && (r.swap || n && n.options.swap) && o !== ae && (i.captureAnimationState(),
            i !== e && e.captureAnimationState(),
            function(t, e) {
                const n = t.parentNode
                  , o = e.parentNode;
                let i, r;
                if (!n || !o || n.isEqualNode(e) || o.isEqualNode(t))
                    return;
                i = N(t),
                r = N(e),
                n.isEqualNode(o) && i < r && r++;
                n.insertBefore(e, n.children[i]),
                o.insertBefore(t, o.children[r])
            }(o, ae),
            i.animateAll(),
            i !== e && e.animateAll())
        },
        nulling: function() {
            ae = null
        }
    },
    i(t, {
        pluginName: "swap",
        eventProperties: function() {
            return {
                swapItem: ae
            }
        }
    })
}
),
Sortable.mount(new function() {
    function t(t) {
        for (const t in this)
            "_" === t.charAt(0) && "function" == typeof this[t] && (this[t] = this[t].bind(this));
        t.options.avoidImplicitDeselect || (t.options.supportPointer ? m(document, "pointerup", this._deselectMultiDrag) : (m(document, "mouseup", this._deselectMultiDrag),
        m(document, "touchend", this._deselectMultiDrag))),
        m(document, "keydown", this._checkKeyDown),
        m(document, "keyup", this._checkKeyUp),
        this.defaults = {
            selectedClass: "sortable-selected",
            multiDragKey: null,
            avoidImplicitDeselect: !1,
            setData: function(e, n) {
                let o = "";
                se.length && de === t ? se.forEach((function(t, e) {
                    o += (e ? ", " : "") + t.textContent
                }
                )) : o = n.textContent,
                e.setData("Text", o)
            }
        }
    }
    return t.prototype = {
        multiDragKeyDown: !1,
        isMultiDrag: !1,
        delayStartGlobal: function(t) {
            const e = t.dragEl;
            he = e
        },
        delayEnded: function() {
            this.isMultiDrag = ~se.indexOf(he)
        },
        setupClone: function(t) {
            const e = t.sortable
              , n = t.cancel;
            if (this.isMultiDrag) {
                for (let t = 0; t < se.length; t++)
                    ce.push(B(se[t])),
                    ce[t].sortableIndex = se[t].sortableIndex,
                    ce[t].draggable = !1,
                    ce[t].style["will-change"] = "",
                    E(ce[t], this.options.selectedClass, !1),
                    se[t] === he && E(ce[t], this.options.chosenClass, !1);
                e._hideClone(),
                n()
            }
        },
        clone: function(t) {
            const e = t.sortable
              , n = t.rootEl
              , o = t.dispatchSortableEvent
              , i = t.cancel;
            this.isMultiDrag && (this.options.removeCloneOnHide || se.length && de === e && (ve(!0, n),
            o("clone"),
            i()))
        },
        showClone: function(t) {
            const e = t.cloneNowShown
              , n = t.rootEl
              , o = t.cancel;
            this.isMultiDrag && (ve(!1, n),
            ce.forEach((function(t) {
                D(t, "display", "")
            }
            )),
            e(),
            pe = !1,
            o())
        },
        hideClone: function(t) {
            const e = this
              , n = (t.sortable,
            t.cloneNowHidden)
              , o = t.cancel;
            this.isMultiDrag && (ce.forEach((function(t) {
                D(t, "display", "none"),
                e.options.removeCloneOnHide && t.parentNode && t.parentNode.removeChild(t)
            }
            )),
            n(),
            pe = !0,
            o())
        },
        dragStartGlobal: function(t) {
            t.sortable;
            !this.isMultiDrag && de && de.multiDrag._deselectMultiDrag(),
            se.forEach((function(t) {
                t.sortableIndex = N(t)
            }
            )),
            se = se.sort((function(t, e) {
                return t.sortableIndex - e.sortableIndex
            }
            )),
            be = !0
        },
        dragStarted: function(t) {
            const e = this
              , n = t.sortable;
            if (this.isMultiDrag) {
                if (this.options.sort && (n.captureAnimationState(),
                this.options.animation)) {
                    se.forEach((function(t) {
                        t !== he && D(t, "position", "absolute")
                    }
                    ));
                    const t = x(he, !1, !0, !0);
                    se.forEach((function(e) {
                        e !== he && F(e, t)
                    }
                    )),
                    me = !0,
                    ge = !0
                }
                n.animateAll((function() {
                    me = !1,
                    ge = !1,
                    e.options.animation && se.forEach((function(t) {
                        j(t)
                    }
                    )),
                    e.options.sort && ye()
                }
                ))
            }
        },
        dragOver: function(t) {
            const e = t.target
              , n = t.completed
              , o = t.cancel;
            me && ~se.indexOf(e) && (n(!1),
            o())
        },
        revert: function(t) {
            const e = t.fromSortable
              , n = t.rootEl
              , o = t.sortable
              , i = t.dragRect;
            se.length > 1 && (se.forEach((function(t) {
                o.addAnimationState({
                    target: t,
                    rect: me ? x(t) : i
                }),
                j(t),
                t.fromRect = i,
                e.removeAnimationState(t)
            }
            )),
            me = !1,
            function(t, e) {
                se.forEach((function(n, o) {
                    const i = e.children[n.sortableIndex + (t ? Number(o) : 0)];
                    i ? e.insertBefore(n, i) : e.appendChild(n)
                }
                ))
            }(!this.options.removeCloneOnHide, n))
        },
        dragOverCompleted: function(t) {
            const e = t.sortable
              , n = t.isOwner
              , o = t.insertion
              , i = t.activeSortable
              , r = t.parentEl
              , l = t.putSortable
              , a = this.options;
            if (o) {
                if (n && i._hideClone(),
                ge = !1,
                a.animation && se.length > 1 && (me || !n && !i.options.sort && !l)) {
                    const t = x(he, !1, !0, !0);
                    se.forEach((function(e) {
                        e !== he && (F(e, t),
                        r.appendChild(e))
                    }
                    )),
                    me = !0
                }
                if (!n)
                    if (me || ye(),
                    se.length > 1) {
                        const t = pe;
                        i._showClone(e),
                        i.options.animation && !pe && t && ce.forEach((function(t) {
                            i.addAnimationState({
                                target: t,
                                rect: fe
                            }),
                            t.fromRect = fe,
                            t.thisAnimationDuration = null
                        }
                        ))
                    } else
                        i._showClone(e)
            }
        },
        dragOverAnimationCapture: function(t) {
            const e = t.dragRect
              , n = t.isOwner
              , o = t.activeSortable;
            if (se.forEach((function(t) {
                t.thisAnimationDuration = null
            }
            )),
            o.options.animation && !n && o.multiDrag.isMultiDrag) {
                fe = i({}, e);
                const t = _(he, !0);
                fe.top -= t.f,
                fe.left -= t.e
            }
        },
        dragOverAnimationComplete: function() {
            me && (me = !1,
            ye())
        },
        drop: function(t) {
            const e = t.originalEvent
              , n = t.rootEl
              , o = t.parentEl
              , i = t.sortable
              , r = t.dispatchSortableEvent
              , l = t.oldIndex
              , a = t.putSortable
              , s = a || this.sortable;
            if (!e)
                return;
            const c = this.options
              , u = o.children;
            if (!be)
                if (c.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(),
                E(he, c.selectedClass, !~se.indexOf(he)),
                ~se.indexOf(he))
                    se.splice(se.indexOf(he), 1),
                    ue = null,
                    U({
                        sortable: i,
                        rootEl: n,
                        name: "deselect",
                        targetEl: he,
                        originalEvent: e
                    });
                else {
                    if (se.push(he),
                    U({
                        sortable: i,
                        rootEl: n,
                        name: "select",
                        targetEl: he,
                        originalEvent: e
                    }),
                    e.shiftKey && ue && i.el.contains(ue)) {
                        const t = N(ue)
                          , o = N(he);
                        if (~t && ~o && t !== o) {
                            let r, l;
                            for (o > t ? (l = t,
                            r = o) : (l = o,
                            r = t + 1); l < r; l++)
                                ~se.indexOf(u[l]) || (E(u[l], c.selectedClass, !0),
                                se.push(u[l]),
                                U({
                                    sortable: i,
                                    rootEl: n,
                                    name: "select",
                                    targetEl: u[l],
                                    originalEvent: e
                                }))
                        }
                    } else
                        ue = he;
                    de = s
                }
            if (be && this.isMultiDrag) {
                if (me = !1,
                (o[L].options.sort || o !== n) && se.length > 1) {
                    const t = x(he);
                    let e = N(he, ":not(." + this.options.selectedClass + ")");
                    if (!ge && c.animation && (he.thisAnimationDuration = null),
                    s.captureAnimationState(),
                    !ge && (c.animation && (he.fromRect = t,
                    se.forEach((function(e) {
                        if (e.thisAnimationDuration = null,
                        e !== he) {
                            const n = me ? x(e) : t;
                            e.fromRect = n,
                            s.addAnimationState({
                                target: e,
                                rect: n
                            })
                        }
                    }
                    ))),
                    ye(),
                    se.forEach((function(t) {
                        u[e] ? o.insertBefore(t, u[e]) : o.appendChild(t),
                        e++
                    }
                    )),
                    l === N(he))) {
                        let t = !1;
                        se.forEach((function(e) {
                            e.sortableIndex === N(e) || (t = !0)
                        }
                        )),
                        t && (r("update"),
                        r("sort"))
                    }
                    se.forEach((function(t) {
                        j(t)
                    }
                    )),
                    s.animateAll()
                }
                de = s
            }
            (n === o || a && "clone" !== a.lastPutMode) && ce.forEach((function(t) {
                t.parentNode && t.parentNode.removeChild(t)
            }
            ))
        },
        nullingGlobal: function() {
            this.isMultiDrag = be = !1,
            ce.length = 0
        },
        destroyGlobal: function() {
            this._deselectMultiDrag(),
            b(document, "pointerup", this._deselectMultiDrag),
            b(document, "mouseup", this._deselectMultiDrag),
            b(document, "touchend", this._deselectMultiDrag),
            b(document, "keydown", this._checkKeyDown),
            b(document, "keyup", this._checkKeyUp)
        },
        _deselectMultiDrag: function(t) {
            if (!(void 0 !== be && be || de !== this.sortable || t && w(t.target, this.options.draggable, this.sortable.el, !1) || t && 0 !== t.button))
                for (; se.length; ) {
                    const e = se[0];
                    E(e, this.options.selectedClass, !1),
                    se.shift(),
                    U({
                        sortable: this.sortable,
                        rootEl: this.sortable.el,
                        name: "deselect",
                        targetEl: e,
                        originalEvent: t
                    })
                }
        },
        _checkKeyDown: function(t) {
            t.key === this.options.multiDragKey && (this.multiDragKeyDown = !0)
        },
        _checkKeyUp: function(t) {
            t.key === this.options.multiDragKey && (this.multiDragKeyDown = !1)
        }
    },
    i(t, {
        pluginName: "multiDrag",
        utils: {
            select: function(t) {
                const e = t.parentNode[L];
                e && e.options.multiDrag && !~se.indexOf(t) && (de && de !== e && (de.multiDrag._deselectMultiDrag(),
                de = e),
                E(t, e.options.selectedClass, !0),
                se.push(t))
            },
            deselect: function(t) {
                const e = t.parentNode[L]
                  , n = se.indexOf(t);
                e && e.options.multiDrag && ~n && (E(t, e.options.selectedClass, !1),
                se.splice(n, 1))
            }
        },
        eventProperties: function() {
            const t = this
              , e = []
              , n = [];
            return se.forEach((function(o) {
                let i;
                e.push({
                    multiDragElement: o,
                    index: o.sortableIndex
                }),
                i = me && o !== he ? -1 : me ? N(o, ":not(." + t.options.selectedClass + ")") : N(o),
                n.push({
                    multiDragElement: o,
                    index: i
                })
            }
            )),
            {
                items: l(se),
                clones: [].concat(ce),
                oldIndicies: e,
                newIndicies: n
            }
        },
        optionListeners: {
            multiDragKey: function(t) {
                return "ctrl" === (t = t.toLowerCase()) ? t = "Control" : t.length > 1 && (t = t.charAt(0).toUpperCase() + t.substr(1)),
                t
            }
        }
    })
}
);
