"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[298], {
    254: (n, e, t) => {
        t.d(e, {
            $w: () => x,
            CR: () => y,
            SX: () => d,
            f7: () => f,
            hE: () => u,
            rT: () => b,
            tK: () => h
        });
        var r, a, o, s, i, m, l, p = t(7528), c = t(9335), g = t(8299);
        const y = (0,
        c.Ay)(g.wn)(r || (r = (0,
        p.A)(["\n  padding-top: 25px;\n  /* min-height: 100%; */\n  ", " {\n    padding-top: 40px;\n  }\n  ", " {\n    padding-top: 56px;\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , u = c.Ay.h2(a || (a = (0,
        p.A)(["\n  font-family: 'Comfortaa';\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.5;\n  margin-bottom: 8px;\n  ", " {\n    font-weight: 600;\n    font-size: 32px;\n    margin-bottom: 24px;\n  }\n  ", " {\n    font-size: 64px;\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , h = c.Ay.p(o || (o = (0,
        p.A)(["\n  font-family: 'Comfortaa';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 44px;\n  ", " {\n    line-height: 1.33;\n\n    font-size: 24px;\n    margin-bottom: 52px;\n  }\n  ", " {\n    font-weight: 600;\n    line-height: 1.5;\n\n    font-size: 32px;\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , d = c.Ay.h3(s || (s = (0,
        p.A)(["\n  font-family: 'Montserrat';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 8px;\n  text-transform: capitalize;\n  ", " {\n    font-weight: 600;\n    font-size: 20px;\n  }\n  ", " {\n    /* font-weight: 600; */\n    font-size: 32px;\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , f = c.Ay.p(i || (i = (0,
        p.A)(["\n  font-family: 'Montserrat';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  ", " {\n    font-weight: 600;\n    font-size: 20px;\n    margin-bottom: 32px;\n  }\n  ", " {\n    /* font-weight: 600; */\n    font-size: 32px;\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , x = c.Ay.div(m || (m = (0,
        p.A)(["\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  ", " {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: baseline;\n    justify-content: flex-end;\n    gap: 40px;\n    margin-bottom: 32px;\n    ", " {\n      margin: ", ";\n      /* margin-left: 0;\n      margin-right: 0; */\n      justify-content: space-between;\n      /* margin-bottom: 0; */\n      flex-direction: column;\n    }\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc), (n => n.margin))
          , b = c.Ay.div(l || (l = (0,
        p.A)(["\n  ", " {\n    display: flex;\n    justify-content: center;\n    gap: 40px;\n    margin-bottom: 32px;\n  }\n"])), (n => n.theme.breakpoints.desc))
    }
    ,
    527: (n, e, t) => {
        t.d(e, {
            _: () => s
        });
        var r = t(5251);
        const {sumTwoParams: a} = t(5251)
          , o = (n, e, t) => {
            const a = Number(n) > 22 ? (0,
            r.rule22)(n) : Number(n)
              , o = Number(e)
              , s = (0,
            r.rule22)(t)
              , i = a + o + s
              , m = i > 22 ? (0,
            r.rule22)(i) : i
              , l = (0,
            r.sumTwoParams)(i, m)
              , p = (0,
            r.sumTwoParams)(a, o)
              , c = (0,
            r.sumTwoParams)(o, s)
              , g = (0,
            r.sumTwoParams)(s, m);
            return {
                point_A: a,
                point_B: o,
                point_V: s,
                point_G: m,
                point_D: l,
                point_E: p,
                point_J: c,
                point_Z: (0,
                r.sumTwoParams)(m, a),
                point_I: g
            }
        }
          , s = function() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "0"
              , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0"
              , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "0"
              , s = arguments.length > 3 ? arguments[3] : void 0
              , i = null;
            s && (i = ( (n, e, t, a, s, i) => {
                const {point_A: m, point_B: l, point_V: p, point_G: c, point_D: g, point_E: y, point_J: u, point_Z: h, point_I: d} = o(n, e, t)
                  , {point_A: f, point_B: x, point_V: b, point_G: w, point_D: A, point_E: T, point_J: P, point_Z: j, point_I: k} = o(a, s, i)
                  , v = (0,
                r.sumTwoParams)(m, f)
                  , _ = (0,
                r.sumTwoParams)(l, x)
                  , N = (0,
                r.sumTwoParams)(p, b)
                  , z = (0,
                r.sumTwoParams)(c, w)
                  , D = (0,
                r.sumTwoParams)(g, A)
                  , B = (0,
                r.sumTwoParams)(y, T)
                  , M = (0,
                r.sumTwoParams)(u, P)
                  , C = (0,
                r.sumTwoParams)(d, k);
                return {
                    point_A: v,
                    point_B: _,
                    point_V: N,
                    point_G: z,
                    point_D: D,
                    point_E: B,
                    point_J: M,
                    point_Z: (0,
                    r.sumTwoParams)(h, j),
                    point_I: C
                }
            }
            )(n, e, t, s, arguments.length > 4 ? arguments[4] : void 0, arguments.length > 5 ? arguments[5] : void 0)),
            s || (i = o(n, e, t));
            const {point_A: m, point_B: l, point_V: p, point_G: c, point_D: g, point_E: y, point_J: u, point_Z: h, point_I: d} = i
              , f = (0,
            r.sumTwoParams)(c, g)
              , x = (0,
            r.sumTwoParams)(p, g)
              , b = (0,
            r.sumTwoParams)(f, x)
              , w = (0,
            r.sumTwoParams)(b, x)
              , A = (0,
            r.sumTwoParams)(f, b)
              , T = (0,
            r.sumTwoParams)(l, g)
              , P = (0,
            r.sumTwoParams)(T, l)
              , j = (0,
            r.sumTwoParams)(p, x)
              , k = (0,
            r.sumTwoParams)(d, g)
              , v = (0,
            r.sumTwoParams)(k, d)
              , _ = (0,
            r.sumTwoParams)(c, f)
              , N = (0,
            r.sumTwoParams)(h, g)
              , z = (0,
            r.sumTwoParams)(h, N)
              , D = (0,
            r.sumTwoParams)(m, g)
              , B = (0,
            r.sumTwoParams)(m, D)
              , M = (0,
            r.sumTwoParams)(y, g)
              , C = (0,
            r.sumTwoParams)(y, M)
              , E = (0,
            r.sumTwoParams)(u, g)
              , V = (0,
            r.sumTwoParams)(u, E)
              , F = (0,
            r.sumTwoParams)(l, c)
              , L = (0,
            r.sumTwoParams)(m, p)
              , I = (0,
            r.sumTwoParams)(F, L)
              , S = (0,
            r.sumTwoParams)(y, d)
              , G = (0,
            r.sumTwoParams)(u, h)
              , J = (0,
            r.sumTwoParams)(S, G)
              , K = (0,
            r.sumTwoParams)(I, J)
              , Z = (0,
            r.sumTwoParams)(J, K)
              , W = (0,
            r.sumTwoParams)(D, g)
              , O = (0,
            r.sumTwoParams)(T, g)
              , R = [m, l, p, c, g, x, f, b, w, A, y, u, h, d, P, T, j, v, k, _, z, N, B, D, C, M, E, V, W, O]
              , U = {
                ExplSelf: {
                    upperNumber: F,
                    lowerNumber: L,
                    resultNumber: I
                },
                ExplSocial: {
                    upperNumber: S,
                    lowerNumber: G,
                    resultNumber: J
                },
                ExplGeneral: {
                    upperNumber: I,
                    lowerNumber: J,
                    resultNumber: K
                },
                ExplPlanet: {
                    upperNumber: J,
                    lowerNumber: K,
                    resultNumber: Z
                }
            }
              , q = (0,
            r.personNumberFunc)(n, e, t, m, l, g, I, J, K)
              , Q = ( (n, e, t, a, o, s, i, m) => {
                const l = o
                  , p = (0,
                r.sumTwoParams)(n, o)
                  , c = (0,
                r.sumTwoParams)(n, p)
                  , g = (0,
                r.sumTwoParams)(n, c)
                  , y = (0,
                r.sumTwoParams)(c, p)
                  , u = (0,
                r.sumTwoParams)(y, p)
                  , h = (0,
                r.sumTwoParams)(p, o)
                  , d = (0,
                r.sumTwoParams)(p, h)
                  , f = (0,
                r.sumTwoParams)(h, o)
                  , x = (0,
                r.sumTwoParams)(f, o)
                  , b = e
                  , w = (0,
                r.sumTwoParams)(o, e)
                  , A = (0,
                r.sumTwoParams)(o, w)
                  , T = (0,
                r.sumTwoParams)(o, A)
                  , P = (0,
                r.sumTwoParams)(A, w)
                  , j = (0,
                r.sumTwoParams)(P, w)
                  , k = (0,
                r.sumTwoParams)(w, e)
                  , v = (0,
                r.sumTwoParams)(w, k)
                  , _ = (0,
                r.sumTwoParams)(k, e)
                  , N = (0,
                r.sumTwoParams)(_, e)
                  , z = s
                  , D = (0,
                r.sumTwoParams)(e, s)
                  , B = (0,
                r.sumTwoParams)(e, D)
                  , M = (0,
                r.sumTwoParams)(e, B)
                  , C = (0,
                r.sumTwoParams)(B, D)
                  , E = (0,
                r.sumTwoParams)(C, D)
                  , V = (0,
                r.sumTwoParams)(D, z)
                  , F = (0,
                r.sumTwoParams)(D, V)
                  , L = (0,
                r.sumTwoParams)(V, s)
                  , I = (0,
                r.sumTwoParams)(L, s)
                  , S = t
                  , G = (0,
                r.sumTwoParams)(s, t)
                  , J = (0,
                r.sumTwoParams)(s, G)
                  , K = (0,
                r.sumTwoParams)(s, J)
                  , Z = (0,
                r.sumTwoParams)(J, G)
                  , W = (0,
                r.sumTwoParams)(Z, G)
                  , O = (0,
                r.sumTwoParams)(G, t)
                  , R = (0,
                r.sumTwoParams)(G, O)
                  , U = (0,
                r.sumTwoParams)(O, t)
                  , q = (0,
                r.sumTwoParams)(U, t)
                  , Q = m
                  , X = (0,
                r.sumTwoParams)(t, m)
                  , Y = (0,
                r.sumTwoParams)(t, X)
                  , $ = (0,
                r.sumTwoParams)(t, Y)
                  , H = (0,
                r.sumTwoParams)(Y, X)
                  , nn = (0,
                r.sumTwoParams)(H, X)
                  , en = (0,
                r.sumTwoParams)(X, m)
                  , tn = (0,
                r.sumTwoParams)(X, en)
                  , rn = (0,
                r.sumTwoParams)(en, m)
                  , an = (0,
                r.sumTwoParams)(rn, m)
                  , on = a
                  , sn = (0,
                r.sumTwoParams)(m, a)
                  , mn = (0,
                r.sumTwoParams)(m, sn)
                  , ln = (0,
                r.sumTwoParams)(a, Y)
                  , pn = (0,
                r.sumTwoParams)(mn, sn)
                  , cn = (0,
                r.sumTwoParams)(pn, sn)
                  , gn = (0,
                r.sumTwoParams)(sn, a)
                  , yn = (0,
                r.sumTwoParams)(sn, gn)
                  , un = (0,
                r.sumTwoParams)(gn, a)
                  , hn = (0,
                r.sumTwoParams)(un, a)
                  , dn = i
                  , fn = (0,
                r.sumTwoParams)(a, i)
                  , xn = (0,
                r.sumTwoParams)(a, fn)
                  , bn = (0,
                r.sumTwoParams)(a, xn)
                  , wn = (0,
                r.sumTwoParams)(xn, fn)
                  , An = (0,
                r.sumTwoParams)(wn, fn)
                  , Tn = (0,
                r.sumTwoParams)(fn, i)
                  , Pn = (0,
                r.sumTwoParams)(fn, Tn)
                  , jn = (0,
                r.sumTwoParams)(Tn, i)
                  , kn = (0,
                r.sumTwoParams)(jn, i)
                  , vn = n
                  , _n = (0,
                r.sumTwoParams)(i, n)
                  , Nn = (0,
                r.sumTwoParams)(n, _n)
                  , zn = (0,
                r.sumTwoParams)(i, Nn)
                  , Dn = (0,
                r.sumTwoParams)(Nn, _n)
                  , Bn = (0,
                r.sumTwoParams)(Dn, _n)
                  , Mn = (0,
                r.sumTwoParams)(_n, n)
                  , Cn = (0,
                r.sumTwoParams)(_n, Mn)
                  , En = (0,
                r.sumTwoParams)(Mn, n);
                return [{
                    year: 1,
                    energy: g
                }, {
                    year: 2,
                    energy: c
                }, {
                    year: 3,
                    energy: y
                }, {
                    year: 4,
                    energy: u
                }, {
                    year: 5,
                    energy: p
                }, {
                    year: 6,
                    energy: d
                }, {
                    year: 7,
                    energy: h
                }, {
                    year: 8,
                    energy: f
                }, {
                    year: 9,
                    energy: x
                }, {
                    year: 10,
                    energy: l
                }, {
                    year: 11,
                    energy: T
                }, {
                    year: 12,
                    energy: A
                }, {
                    year: 13,
                    energy: P
                }, {
                    year: 14,
                    energy: j
                }, {
                    year: 15,
                    energy: w
                }, {
                    year: 16,
                    energy: v
                }, {
                    year: 17,
                    energy: k
                }, {
                    year: 18,
                    energy: _
                }, {
                    year: 19,
                    energy: N
                }, {
                    year: 20,
                    energy: b
                }, {
                    year: 21,
                    energy: M
                }, {
                    year: 22,
                    energy: B
                }, {
                    year: 23,
                    energy: C
                }, {
                    year: 24,
                    energy: E
                }, {
                    year: 25,
                    energy: D
                }, {
                    year: 26,
                    energy: F
                }, {
                    year: 27,
                    energy: V
                }, {
                    year: 28,
                    energy: L
                }, {
                    year: 29,
                    energy: I
                }, {
                    year: 30,
                    energy: z
                }, {
                    year: 31,
                    energy: K
                }, {
                    year: 32,
                    energy: J
                }, {
                    year: 33,
                    energy: Z
                }, {
                    year: 34,
                    energy: W
                }, {
                    year: 35,
                    energy: G
                }, {
                    year: 36,
                    energy: R
                }, {
                    year: 37,
                    energy: O
                }, {
                    year: 38,
                    energy: U
                }, {
                    year: 39,
                    energy: q
                }, {
                    year: 40,
                    energy: S
                }, {
                    year: 41,
                    energy: $
                }, {
                    year: 42,
                    energy: Y
                }, {
                    year: 43,
                    energy: H
                }, {
                    year: 44,
                    energy: nn
                }, {
                    year: 45,
                    energy: X
                }, {
                    year: 46,
                    energy: tn
                }, {
                    year: 47,
                    energy: en
                }, {
                    year: 48,
                    energy: rn
                }, {
                    year: 49,
                    energy: an
                }, {
                    year: 50,
                    energy: Q
                }, {
                    year: 51,
                    energy: ln
                }, {
                    year: 52,
                    energy: mn
                }, {
                    year: 53,
                    energy: pn
                }, {
                    year: 54,
                    energy: cn
                }, {
                    year: 55,
                    energy: sn
                }, {
                    year: 56,
                    energy: yn
                }, {
                    year: 57,
                    energy: gn
                }, {
                    year: 58,
                    energy: un
                }, {
                    year: 59,
                    energy: hn
                }, {
                    year: 60,
                    energy: on
                }, {
                    year: 61,
                    energy: bn
                }, {
                    year: 62,
                    energy: xn
                }, {
                    year: 63,
                    energy: wn
                }, {
                    year: 64,
                    energy: An
                }, {
                    year: 65,
                    energy: fn
                }, {
                    year: 66,
                    energy: Pn
                }, {
                    year: 67,
                    energy: Tn
                }, {
                    year: 68,
                    energy: jn
                }, {
                    year: 69,
                    energy: kn
                }, {
                    year: 70,
                    energy: dn
                }, {
                    year: 71,
                    energy: zn
                }, {
                    year: 72,
                    energy: Nn
                }, {
                    year: 73,
                    energy: Dn
                }, {
                    year: 74,
                    energy: Bn
                }, {
                    year: 75,
                    energy: _n
                }, {
                    year: 76,
                    energy: Cn
                }, {
                    year: 77,
                    energy: Mn
                }, {
                    year: 78,
                    energy: En
                }, {
                    year: 79,
                    energy: (0,
                    r.sumTwoParams)(En, n)
                }, {
                    year: 80,
                    energy: vn
                }]
            }
            )(m, l, p, c, y, u, h, d)
              , X = ( (n, e, t, r, o, s, i, m, l, p, c, g, y) => {
                const u = [{
                    value: {
                        physics: n,
                        energy: e,
                        emotion: a(n, e)
                    }
                }, {
                    value: {
                        physics: t,
                        energy: r,
                        emotion: a(r, t)
                    }
                }, {
                    value: {
                        physics: s,
                        energy: o,
                        emotion: a(s, o)
                    }
                }, {
                    value: {
                        physics: i,
                        energy: m,
                        emotion: a(i, m)
                    }
                }, {
                    value: {
                        physics: l,
                        energy: l,
                        emotion: a(l, l)
                    }
                }, {
                    value: {
                        physics: g,
                        energy: y,
                        emotion: a(g, y)
                    }
                }, {
                    value: {
                        physics: p,
                        energy: c,
                        emotion: a(p, c)
                    }
                }]
                  , h = u.reduce(( (n, e) => (n.emotion += e.value.emotion,
                n.physics += e.value.physics,
                n.energy += e.value.energy,
                n)), {
                    physics: 0,
                    energy: 0,
                    emotion: 0
                })
                  , d = {
                    value: {
                        physics: a(h.physics, 0),
                        energy: a(h.energy, 0),
                        emotion: a(h.emotion, 0)
                    }
                };
                return u.concat(d)
            }
            )(m, l, B, P, T, D, W, O, g, p, c, x, f);
            return {
                positionForMatrix: R,
                personNumber: q,
                explanationNumbers: U,
                energyTableValues: Q,
                chakra: X
            }
        }
    }
    ,
    1724: (n, e, t) => {
        t.d(e, {
            A: () => f
        });
        t(9950);
        var r, a, o, s, i, m = t(7528), l = t(9335);
        const p = l.Ay.caption(r || (r = (0,
        m.A)(["\n  padding: 0;\n  /* text-align: left; */\n  caption-side: top;\n  color: ", ";\n\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 8px;\n  ", " {\n    font-size: 20px;\n  }\n"])), (n => n.theme.colors.main), (n => n.theme.breakpoints.tab))
          , c = l.Ay.table(a || (a = (0,
        m.A)(["\n  border: none;\n  border-collapse: collapse;\n"])))
          , g = l.Ay.td(o || (o = (0,
        m.A)(["\n  /* font-weight: ", "; */\n  padding: 4px 6px;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  line-height: 1.5;\n  text-align: ", ";\n\n  ", " {\n    font-size: 14px;\n    padding: 4px 15px;\n  }\n"])), (n => n.weight || "400"), (n => n.side || "center"), (n => n.theme.breakpoints.tab))
          , y = l.Ay.tr(s || (s = (0,
        m.A)(["\n  background-color: ", ";\n"])), (n => n.color))
          , u = l.Ay.div(i || (i = (0,
        m.A)(["\n  width: fit-content;\n  margin-bottom: 24px;\n  ", " {\n    margin-bottom: 0;\n  }\n\n  ", " {\n    flex-shrink: 0;\n  }\n  //center\n  /* margin-left: auto;\n  margin-right: auto; */\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc));
        var h = t(4414);
        const d = n => {
            let {data: e} = n;
            const {physics: t, energy: r, emotion: a} = e.value
              , {name: o, color: s} = e.sideField;
            return (0,
            h.jsxs)(y, {
                color: s,
                children: [(0,
                h.jsx)(g, {
                    children: t
                }), (0,
                h.jsx)(g, {
                    children: r
                }), (0,
                h.jsx)(g, {
                    children: a
                }), (0,
                h.jsx)(g, {
                    side: "left",
                    children: o
                })]
            })
        }
          , f = n => {
            let {chakra: e, t: t} = n;
            const r = Object.values(t("table.chakra.sideField"));
            return (0,
            h.jsx)(u, {
                children: (0,
                h.jsxs)(c, {
                    children: [(0,
                    h.jsx)(p, {
                        children: t("table.chakra.caption")
                    }), (0,
                    h.jsx)("thead", {
                        children: (0,
                        h.jsx)(y, {
                            color: "#D9CDBE",
                            children: t("table.chakra.headField").map((n => (0,
                            h.jsx)(g, {
                                as: "th",
                                weight: "500",
                                children: n.text
                            }, n.text)))
                        })
                    }), (0,
                    h.jsx)("tbody", {
                        children: Object.values(e).map(( (n, e) => (n.sideField = r[e],
                        (0,
                        h.jsx)(d, {
                            data: n
                        }, n.sideField.name))))
                    })]
                })
            })
        }
    }
    ,
    2590: (n, e, t) => {
        t.d(e, {
            IC: () => d,
            IW: () => T,
            L9: () => x,
            Mh: () => w,
            g6: () => A,
            q: () => h,
            sQ: () => b,
            zN: () => f
        });
        var r, a, o, s, i, m, l, p, c = t(7528), g = t(9335), y = t(3939), u = t(2242);
        const h = (0,
        g.Ay)(y.lV)(r || (r = (0,
        c.A)(["\n  margin-bottom: 40px;\n  ", " {\n    margin-bottom: 64px;\n  }\n"])), (n => n.theme.breakpoints.tab))
          , d = g.Ay.label(a || (a = (0,
        c.A)(["\n  width: 288px;\n  position: relative;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 28px;\n  ", " {\n    width: 320px;\n    margin-bottom: 36px;\n  }\n  ", " {\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , f = (0,
        g.Ay)(d)(o || (o = (0,
        c.A)(["\n  ", " {\n    margin-bottom: 40px;\n  }\n"])), (n => n.theme.breakpoints.tab))
          , x = g.Ay.span(s || (s = (0,
        c.A)(["\n  position: absolute;\n  z-index: 10;\n  top: -12px;\n  left: 12px;\n  padding: 0px 8px;\n  background: #fff;\n  display: block;\n\n  font-family: 'Montserrat';\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  ", " {\n    font-size: 14px;\n  }\n"])), (n => n.theme.breakpoints.tab))
          , b = (0,
        g.Ay)(y.D0)(i || (i = (0,
        c.A)(["\n  box-sizing: border-box;\n  padding: 10px;\n  background: #ffffff;\n  border: 1px solid #010101;\n  width: 100%;\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.5;\n  color: #010101;\n  text-transform: capitalize;\n\n  ", " {\n  }\n  ", " {\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , w = (0,
        g.Ay)(b)(m || (m = (0,
        c.A)(["\n  ", " {\n    /* width: 320px; */\n  }\n  ", " {\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , A = (0,
        g.Ay)(u.D)(l || (l = (0,
        c.A)(["\n  padding: 12px 24px;\n\n  background-color: #7f5336;\n  border: none;\n  font-family: 'Comfortaa';\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.78;\n  color: #ffffff;\n  &:hover {\n    background-color: #000;\n  }\n  ", " {\n    font-size: 24px;\n    padding: 16px 24px;\n    line-height: 1.33;\n  }\n"])), (n => n.theme.breakpoints.tab))
          , T = g.Ay.span(p || (p = (0,
        c.A)(["\n  position: absolute;\n  bottom: -12px;\n  color: red;\n  font-size: 14px;\n  left: 12px;\n  background: #fff;\n  border: 1px solid #010101;\n  ", " {\n    font-size: 16px;\n  }\n"])), (n => n.theme.breakpoints.desc))
    }
    ,
    4256: (n, e, t) => {
        t.d(e, {
            A: () => jn
        });
        var r = t(7528)
          , a = (t(9950),
        t(4891))
          , o = t(9335);
        const s = t.p + "static/media/matrix_ru.a82d3a907852b0f9bd03fb6349a06890.svg";
        const i = t.p + "static/media/matrix_ua.1f43f635f0f787340e280aa8f02ba72e.svg";
        const m = t.p + "static/media/backDrop.41b7815e4d9c338afbaaa5c504244a28.svg";
        const l = t.p + "static/media/backDrop_ru.f10b2c555dc394f277da81ff34c0fd5a.svg";
        var p, c, g, y, u, h, d, f, x, b, w, A, T, P, j, k, v, _, N, z, D, B, M, C, E, V, F, L, I, S, G, J, K = t(4414);
        const Z = function(n) {
            return 100 * n / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 284)
        }
          , W = function(n) {
            return 100 * n / (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 288)
        }
          , O = o.Ay.div(p || (p = (0,
        r.A)(["\n  position: relative;\n  width: 288px;\n  height: 284px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 16px;\n  background-color: #ffffff;\n  background-image: url(", ");\n  background-position: center;\n  background-size: cover;\n  ", " {\n    width: 618px;\n    height: 610px;\n    margin-bottom: 32px;\n  }\n  ", " {\n    /* margin-left: 0;\n    margin-right: 0; */\n    flex-shrink: 0;\n    align-self: flex-start;\n    margin: ", ";\n  }\n"])), (n => "ru" === n.lang ? l : m), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc), (n => n.margin))
          , R = o.Ay.span(c || (c = (0,
        r.A)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n\n  font-family: 'Comfortaa';\n  font-weight: 600;\n  font-size: 14px;\n  ", " {\n    font-size: 26px;\n    width: 38px;\n    height: 38px;\n  }\n  /* background-color: rgb(201 216 97 / 50%); */\n"])), (n => n.theme.breakpoints.tab))
          , U = (0,
        o.Ay)(R)(g || (g = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(53), W(55))
          , q = (0,
        o.Ay)(R)(y || (y = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(212), W(55))
          , Q = (0,
        o.Ay)(R)(u || (u = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(52), W(214))
          , X = (0,
        o.Ay)(R)(h || (h = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(213), W(214))
          , Y = (0,
        o.Ay)(R)(d || (d = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(160), W(190))
          , $ = (0,
        o.Ay)(R)(f || (f = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(169), W(168))
          , H = (0,
        o.Ay)(R)(x || (x = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(189), W(160))
          , nn = (0,
        o.Ay)(R)(b || (b = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(134), W(22))
          , en = (0,
        o.Ay)(R)(w || (w = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(134), W(39))
          , tn = (0,
        o.Ay)(R)(A || (A = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(134), W(56))
          , rn = (0,
        o.Ay)(R)(T || (T = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(134), W(88))
          , an = (0,
        o.Ay)(R)(P || (P = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(134), W(135))
          , on = (0,
        o.Ay)(R)(j || (j = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(134), W(214))
          , sn = (0,
        o.Ay)(R)(k || (k = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(134), W(231))
          , mn = (0,
        o.Ay)(R)(v || (v = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(134), W(248))
          , ln = (0,
        o.Ay)(R)(_ || (_ = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(20), W(135))
          , pn = (0,
        o.Ay)(R)(N || (N = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(37), W(135))
          , cn = (0,
        o.Ay)(R)(z || (z = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(54), W(135))
          , gn = (0,
        o.Ay)(R)(D || (D = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(89), W(135))
          , yn = (0,
        o.Ay)(R)(B || (B = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(212), W(135))
          , un = (0,
        o.Ay)(R)(M || (M = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(229), W(135))
          , hn = (0,
        o.Ay)(R)(C || (C = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(246), W(135))
          , dn = (0,
        o.Ay)(R)(E || (E = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(65), W(203))
          , fn = (0,
        o.Ay)(R)(V || (V = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(201), W(203))
          , xn = (0,
        o.Ay)(R)(F || (F = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(77), W(191))
          , bn = (0,
        o.Ay)(R)(L || (L = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(189), W(191))
          , wn = (0,
        o.Ay)(R)(I || (I = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(65), W(67))
          , An = (0,
        o.Ay)(R)(S || (S = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(201), W(67))
          , Tn = (0,
        o.Ay)(R)(G || (G = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(77), W(79))
          , Pn = (0,
        o.Ay)(R)(J || (J = (0,
        r.A)(["\n  top: ", "%;\n  left: ", "%;\n"])), Z(189), W(79))
          , jn = n => {
            let {calculationData: e, marginLRside: t} = n;
            const {i18n: r} = (0,
            a.Bd)()
              , [o,m,l,p,c,g,y,u,h,d,f,x,b,w,A,T,P,j,k,v,_,N,z,D,B,M,C,E,V,F] = e;
            return (0,
            K.jsxs)(O, {
                margin: t,
                lang: r.resolvedLanguage,
                children: [(0,
                K.jsx)("img", {
                    alt: "matrix ",
                    src: "ua" === r.resolvedLanguage ? i : s,
                    style: {
                        display: "block",
                        maxWidth: "100%",
                        height: "auto"
                    }
                }), (0,
                K.jsx)(nn, {
                    children: o
                }), (0,
                K.jsx)(U, {
                    children: f
                }), (0,
                K.jsx)(ln, {
                    children: m
                }), (0,
                K.jsx)(Q, {
                    children: x
                }), (0,
                K.jsx)(mn, {
                    children: l
                }), (0,
                K.jsx)(X, {
                    children: w
                }), (0,
                K.jsx)(hn, {
                    children: p
                }), (0,
                K.jsx)(q, {
                    children: b
                }), (0,
                K.jsx)(on, {
                    children: g
                }), (0,
                K.jsx)(an, {
                    children: c
                }), (0,
                K.jsx)(yn, {
                    children: y
                }), (0,
                K.jsx)($, {
                    children: u
                }), (0,
                K.jsx)(Y, {
                    children: h
                }), (0,
                K.jsx)(H, {
                    children: d
                }), (0,
                K.jsx)(pn, {
                    children: A
                }), (0,
                K.jsx)(cn, {
                    children: T
                }), (0,
                K.jsx)(sn, {
                    children: P
                }), (0,
                K.jsx)(fn, {
                    children: j
                }), (0,
                K.jsx)(bn, {
                    children: k
                }), (0,
                K.jsx)(un, {
                    children: v
                }), (0,
                K.jsx)(An, {
                    children: _
                }), (0,
                K.jsx)(Pn, {
                    children: N
                }), (0,
                K.jsx)(en, {
                    children: z
                }), (0,
                K.jsx)(tn, {
                    children: D
                }), (0,
                K.jsx)(wn, {
                    children: B
                }), (0,
                K.jsx)(Tn, {
                    children: M
                }), (0,
                K.jsx)(xn, {
                    children: C
                }), (0,
                K.jsx)(dn, {
                    children: E
                }), (0,
                K.jsx)(rn, {
                    children: V
                }), (0,
                K.jsx)(gn, {
                    children: F
                })]
            })
        }
    }
    ,
    4307: (n, e, t) => {
        t.d(e, {
            A: () => o
        });
        var r = t(8116)
          , a = t(4414);
        const o = n => {
            let {explanation: e, marginB: t, explanationNumbers: o} = n;
            const {topic: s, definition: i, part1: m, part2: l} = e
              , {upperNumber: p, lowerNumber: c, resultNumber: g} = o;
            return (0,
            a.jsxs)(r.LT, {
                marginB: t,
                children: [(0,
                a.jsxs)("div", {
                    children: [(0,
                    a.jsx)(r.KK, {
                        children: s
                    }), (0,
                    a.jsx)(r.CU, {
                        children: i
                    })]
                }), (0,
                a.jsxs)(r.Ln, {
                    children: [(0,
                    a.jsxs)("div", {
                        children: [m && (0,
                        a.jsxs)(r.eB, {
                            children: [(0,
                            a.jsx)(r.eS, {
                                children: m
                            }), (0,
                            a.jsx)(r.hV, {
                                children: p
                            })]
                        }), l && (0,
                        a.jsxs)(r.eB, {
                            children: [(0,
                            a.jsx)(r.eS, {
                                children: l
                            }), (0,
                            a.jsx)(r.hV, {
                                children: c
                            })]
                        })]
                    }), l && (0,
                    a.jsx)(r.Db, {}), (0,
                    a.jsx)(r.hV, {
                        children: g
                    })]
                })]
            })
        }
    }
    ,
    5251: (n, e, t) => {
        t.r(e),
        t.d(e, {
            createDate: () => p,
            personNumberFunc: () => i,
            rule22: () => m,
            sumTwoParams: () => l
        });
        const r = (n, e, t) => {
            const r = new Date
              , a = r.getFullYear()
              , o = r.getMonth() + 1
              , s = r.getDate();
            let i = a - +n;
            return o === +e && s === +t || o > +e || o === +e && s > +t ? i : i - 1
        }
          , a = function() {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "11"
              , e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "1984";
            return "".concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "10", ".").concat(n, ".").concat(e)
        }
          , o = (n, e, t) => "".concat(n, ", ").concat(e, ", ").concat(t)
          , s = function() {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8
              , e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8;
            return "".concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8, ", ").concat(n, ", ").concat(e)
        }
          , i = (n, e, t, i, m, l, p, c, g) => ({
            dateBdayNumber: a(n, e, t),
            ageNumber: r(t, e, n),
            powerNumber: o(p, c, g),
            portraitNumber: s(i, m, l)
        })
          , m = n => {
            const e = n.toString().split("");
            let t = 0;
            for (const r of e)
                t += Number(r);
            if (t > 22) {
                const n = "".concat(t)
                  , e = n[0]
                  , r = n[1];
                return Number(e) + Number(r)
            }
            return t
        }
          , l = (n, e) => {
            const t = n + e;
            if (t > 22) {
                return m(t)
            }
            return t
        }
          , p = n => {
            const e = n.trim();
            if (e.endsWith("."))
                return e.slice(0, e.length - 1);
            let t = "";
            for (let s = 0; s < e.length; s++) {
                const n = e[s];
                Number.isNaN(+n) || (t += n)
            }
            const r = (n => {
                const e = n.slice(0, 2);
                return e > 31 ? "" : "".concat(n.length >= 3 ? e + "." : e)
            }
            )(t)
              , a = (n => {
                const e = n.slice(2, 4);
                return e > 12 ? "" : "".concat(n.length >= 4 ? e + "." : e)
            }
            )(t)
              , o = t.slice(4, 8);
            return "".concat(r).concat(a).concat(o)
        }
    }
    ,
    6214: (n, e, t) => {
        t.d(e, {
            A: () => u
        });
        var r, a, o, s, i = t(7528), m = t(9335), l = t(4414);
        const p = m.Ay.ul(r || (r = (0,
        i.A)(["\n  width: fit-content;\n  list-style: none;\n  margin-bottom: 24px;\n  align-self: center;\n  ", " {\n    margin-bottom: 0;\n    align-self: auto;\n    flex-shrink: 0;\n    /* width: 193px; */\n  }\n  //center\n  /* margin-left: auto;\n  margin-right: auto; */\n"])), (n => n.theme.breakpoints.desc))
          , c = m.Ay.li(a || (a = (0,
        i.A)(["\n  display: flex;\n  text-align: left;\n  align-items: baseline;\n  gap: 8px;\n  &:not(:last-child) {\n    margin-bottom: 4px;\n    ", " {\n      margin-bottom: 8px;\n    }\n    ", " {\n      flex-wrap: wrap;\n      margin-bottom: 12px;\n      /* flex-direction: column; */\n    }\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , g = m.Ay.span(o || (o = (0,
        i.A)(["\n  font-family: 'Montserrat';\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5;\n  ", " {\n    font-size: 16px;\n    flex-shrink: 0;\n  }\n"])), (n => n.theme.breakpoints.desc))
          , y = (0,
        m.Ay)(g)(s || (s = (0,
        i.A)(["\n  font-size: 16px;\n  font-weight: 500;\n  ", " {\n    font-size: 18px;\n    flex-shrink: 1;\n  }\n"])), (n => n.theme.breakpoints.desc));
        function u(n) {
            let {person: e, personNumber: t} = n;
            const [r,a,o,s] = e
              , {dateBdayNumber: i, ageNumber: m, powerNumber: u, portraitNumber: h} = t;
            return (0,
            l.jsxs)(p, {
                children: [(0,
                l.jsxs)(c, {
                    children: [(0,
                    l.jsx)(y, {
                        children: r.dateBday
                    }), (0,
                    l.jsx)(g, {
                        children: i
                    })]
                }), (0,
                l.jsxs)(c, {
                    children: [(0,
                    l.jsx)(y, {
                        children: a.age
                    }), (0,
                    l.jsx)(g, {
                        children: m
                    })]
                }), (0,
                l.jsxs)(c, {
                    children: [(0,
                    l.jsx)(y, {
                        children: o.power
                    }), (0,
                    l.jsx)(g, {
                        children: u
                    })]
                }), (0,
                l.jsxs)(c, {
                    children: [(0,
                    l.jsx)(y, {
                        children: s.portrait
                    }), (0,
                    l.jsx)(g, {
                        children: h
                    })]
                })]
            })
        }
    }
    ,
    8116: (n, e, t) => {
        t.d(e, {
            eB: () => A,
            Db: () => P,
            CU: () => x,
            LT: () => d,
            d9: () => h,
            Ln: () => T,
            eS: () => b,
            hV: () => w,
            KK: () => f
        });
        var r = t(7528)
          , a = t(9335);
        t(9950);
        const o = t.p + "static/media/brace.db90289ecc4452f2e0dc415b5e3ddeff.svg";
        var s, i, m, l, p, c, g, y, u;
        const h = a.Ay.div(s || (s = (0,
        r.A)(["\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n  ", " {\n    width: 564px;\n    display: flex;\n    row-gap: 24px;\n    column-gap: calc(100% - 548px);\n    flex-wrap: wrap;\n    margin-bottom: 32px;\n    //center\n    justify-content: center;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  ", " {\n    width: auto;\n    column-gap: 26px;\n    justify-content: center;\n    margin-left: auto;\n    margin-right: auto;\n  }\n"])), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , d = a.Ay.div(i || (i = (0,
        r.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-width: 288px;\n  margin-bottom: ", "px;\n  /* flex-basis: 288px; */\n  ", " {\n    margin-bottom: 0;\n\n    /* flex-basis: calc((100% - 16px) / 2); */\n    flex-basis: 274px;\n  }\n  ", " {\n    flex-basis: 226px;\n  }\n  //center\n  /* margin-left: auto;\n  margin-right: auto; */\n"])), (n => n.marginB || "16"), (n => n.theme.breakpoints.tab), (n => n.theme.breakpoints.desc))
          , f = a.Ay.h3(m || (m = (0,
        r.A)(["\n  font-family: 'Montserrat';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  margin-bottom: 8px;\n  /* text-align: left; */\n  //center\n  text-align: center;\n"])))
          , x = a.Ay.p(l || (l = (0,
        r.A)(["\n  font-family: 'Montserrat';\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.5;\n  margin-bottom: 16px;\n  text-align: left;\n  //center\n  /* text-align: center; */\n"])))
          , b = a.Ay.span(p || (p = (0,
        r.A)(["\n  font-family: 'Montserrat';\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n  margin-right: 16px;\n  min-width: 48px;\n"])))
          , w = a.Ay.span(c || (c = (0,
        r.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 34px;\n  height: 34px;\n  background: #ffffff;\n  border: 1px solid #010101;\n  padding: 4px;\n"])))
          , A = a.Ay.div(g || (g = (0,
        r.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 4px;\n"])))
          , T = a.Ay.div(y || (y = (0,
        r.A)(["\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  //center\n  justify-content: center;\n"])))
          , P = a.Ay.span(u || (u = (0,
        r.A)(["\n  display: block;\n  align-self: stretch;\n  width: 12px;\n  background-image: url(", ");\n  background-repeat: no-repeat;\n  background-position: center;\n"])), o)
    }
}]);