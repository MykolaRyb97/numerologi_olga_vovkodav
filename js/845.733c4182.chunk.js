"use strict";
(self.webpackChunk = self.webpackChunk || []).push([[845], {
    2845: (e, n, t) => {
        t.r(n),
        t.d(n, {
            default: () => U
        });
        var a = t(7528)
          , r = t(9335)
          , i = t(4891)
          , s = t(8547)
          , l = t(9950)
          , o = t(446)
          , d = t(8299)
          , c = t(666)
          , h = t(3939)
          , x = t(2590)
          , u = t(5251)
          , m = t(4414);
        const p = {
            userName: "",
            date: ""
        }
          , b = e => {
            let {setUserData: n, input: t, button: a, t: r} = e;
            const i = c.Ik({
                userName: c.Yj().lowercase().trim().min(3, r("validation.name")).required(r("validation.required")),
                date: c.Yj().trim().min(10, r("validation.date")).required(r("validation.required"))
            });
            return (0,
            m.jsx)(h.l1, {
                initialValues: p,
                onSubmit: (e, t) => {
                    n(e),
                    t.setSubmitting(!1)
                }
                ,
                validationSchema: i,
                children: e => (0,
                m.jsxs)(x.q, {
                    children: [(0,
                    m.jsxs)(x.IC, {
                        htmlFor: "userName",
                        children: [(0,
                        m.jsx)(x.L9, {
                            children: t.name
                        }), (0,
                        m.jsx)(x.sQ, {
                            id: "userName",
                            name: "userName",
                            placeholder: "",
                            value: e.values.userName,
                            onChange: e.handleChange
                        }), (0,
                        m.jsx)(h.Kw, {
                            component: x.IW,
                            name: "userName"
                        })]
                    }), (0,
                    m.jsxs)(x.zN, {
                        htmlFor: "date",
                        children: [(0,
                        m.jsx)(x.L9, {
                            children: t.date
                        }), (0,
                        m.jsx)(x.Mh, {
                            id: "date",
                            name: "date",
                            placeholder: r("validation.placeholder"),
                            value: e.values.date,
                            onChange: n => {
                                e.handleChange(n),
                                e.setFieldValue("date", (0,
                                u.createDate)(n.target.value))
                            }
                        }), (0,
                        m.jsx)(h.Kw, {
                            component: x.IW,
                            name: "date"
                        })]
                    }), (0,
                    m.jsx)(x.g6, {
                        disabled: e.isSubmitting,
                        as: "button",
                        type: "submit",
                        children: a.calculate
                    })]
                })
            })
        }
        ;
        var j, g, f, y;
        const v = r.Ay.table(j || (j = (0,
        a.A)(["\n  border: none;\n  border-collapse: collapse;\n"])))
          , N = r.Ay.td(g || (g = (0,
        a.A)(["\n  font-family: 'Montserrat';\n  font-weight: ", ";\n  font-size: 14px;\n  line-height: 1.5;\n\n  width: 56px;\n  height: 24px;\n  text-align: center;\n  background-color: ", ";\n  border: 1px solid ", ";\n\n  ", " {\n    font-size: 16px;\n  }\n  ", " {\n    width: 96px;\n  }\n"])), (e => e.weight), (e => e.theme.colors.backgroundProgram), (e => e.theme.colors.main), (e => e.theme.breakpoints.tab), (e => e.theme.breakpoints.desc))
          , k = (0,
        r.Ay)(N)(f || (f = (0,
        a.A)(["\n  width: 80px;\n  height: 24px;\n  background-color: white;\n  ", " {\n    width: 120px;\n  }\n"])), (e => e.theme.breakpoints.desc))
          , A = r.Ay.div(y || (y = (0,
        a.A)(["\n  display: flex;\n  //center\n  justify-content: center;\n  ", " {\n    justify-content: center;\n  }\n"])), (e => e.theme.breakpoints.desc))
          , w = e => {
            let {data: n} = e;
            const {year: t, energy: a} = n;
            return (0,
            m.jsxs)("tr", {
                children: [(0,
                m.jsx)(N, {
                    children: t
                }), (0,
                m.jsx)(k, {
                    children: a
                })]
            })
        }
          , S = e => {
            let {start: n, end: t, energyTableValues: a, fieldName: r} = e;
            return (0,
            m.jsxs)(v, {
                children: [(0,
                m.jsx)("thead", {
                    children: (0,
                    m.jsxs)("tr", {
                        children: [(0,
                        m.jsx)(N, {
                            as: "th",
                            weight: "500",
                            children: r.year
                        }), (0,
                        m.jsx)(k, {
                            as: "th",
                            weight: "500",
                            children: r.energy
                        })]
                    })
                }), (0,
                m.jsx)("tbody", {
                    children: a.slice(n, t).map((e => (0,
                    m.jsx)(w, {
                        data: e
                    }, e.year)))
                })]
            })
        }
          , z = e => {
            let {energyTableValues: n, tableSize: t, fieldName: a} = e;
            const r = Number(t);
            let i = n.length / r;
            const s = [];
            let l = 0
              , o = r;
            for (; i > 0; )
                s.push((0,
                m.jsx)(S, {
                    fieldName: a,
                    start: l,
                    end: o,
                    energyTableValues: n
                }, i)),
                l += r,
                o += r,
                i -= 1;
            return (0,
            m.jsx)(A, {
                children: s
            })
        }
        ;
        var C, F = t(1724), T = t(4307), V = t(4256), q = t(527), E = t(6214), I = t(254), D = t(8116), M = t(1504);
        const B = r.Ay.a(C || (C = (0,
        a.A)(["\n  font-family: 'Comfortaa';\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.78;\n  color: #ffffff;\n  padding: 12px 13px;\n\n  background-color: ", ";\n  cursor: pointer;\n  display: block;\n  width: fit-content;\n  margin-left: auto;\n  margin-right: auto;\n\n  text-decoration: none;\n  transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1),\n    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover,\n  &:active,\n  &:focus {\n    transform: scale(1.1);\n    background-color: ", ";\n  }\n  ", " {\n    font-size: 24px;\n    line-height: 1.5;\n    padding: 16px 24px;\n  }\n\n  ", " {\n    ", "\n  }\n"])), (e => e.theme.colors[e.color] || e.theme.colors.main), (e => e.theme.colors.main), (e => e.theme.breakpoints.tab), (e => e.theme.breakpoints.desc), (e => e.side && "margin-left: 0; margin-right: 0;"))
          , K = e => {
            let {color: n, href: t, text: a} = e;
            return (0,
            m.jsx)(B, {
                color: n,
                href: t,
                children: a
            })
        }
          , L = e => {
            let {t: n} = e;
            const [t,a] = (0,
            l.useState)(null)
              , r = (0,
            o.useMediaQuery)({
                query: "(min-width: 744px)"
            })
              , i = n("matrixSoul.explanation")
              , s = n("matrixSoul.userInfo")
              , c = {};
            t && (c.day = t.date.slice(0, 2),
            c.month = t.date.slice(3, 5),
            c.year = t.date.slice(6, 10));
            const {positionForMatrix: h, personNumber: x, explanationNumbers: u, energyTableValues: p, chakra: j} = (0,
            q._)(c.day, c.month, c.year);
            return (0,
            m.jsx)(m.Fragment, {
                children: (0,
                m.jsx)(I.CR, {
                    children: (0,
                    m.jsxs)(d.mc, {
                        children: [(0,
                        m.jsx)(I.hE, {
                            children: n("matrixSoul.title")
                        }), (0,
                        m.jsx)(I.tK, {
                            children: n("matrixSoul.subTitle")
                        }), (0,
                        m.jsx)(b, {
                            t: n,
                            setUserData: a,
                            input: n("matrixSoul.input"),
                            button: n("button")
                        }), t && (0,
                        m.jsxs)(m.Fragment, {
                            children: [(0,
                            m.jsx)(I.SX, {
                                children: null === t || void 0 === t ? void 0 : t.userName
                            }), (0,
                            m.jsx)(I.f7, {
                                children: x.dateBdayNumber
                            }), (0,
                            m.jsxs)(I.rT, {
                                children: [(0,
                                m.jsx)(V.A, {
                                    calculationData: h,
                                    marginLRside: "0"
                                }), (0,
                                m.jsxs)(I.$w, {
                                    margin: "0",
                                    children: [(0,
                                    m.jsx)(E.A, {
                                        personNumber: x,
                                        person: s
                                    }), (0,
                                    m.jsx)(F.A, {
                                        chakra: j,
                                        t: n
                                    })]
                                })]
                            }), (0,
                            m.jsxs)(D.d9, {
                                children: [(0,
                                m.jsx)(T.A, {
                                    explanation: i.self,
                                    explanationNumbers: u.ExplSelf
                                }), (0,
                                m.jsx)(T.A, {
                                    explanation: i.social,
                                    explanationNumbers: u.ExplSocial
                                }), (0,
                                m.jsx)(T.A, {
                                    explanation: i.general,
                                    explanationNumbers: u.ExplGeneral
                                }), (0,
                                m.jsx)(T.A, {
                                    explanation: i.planet,
                                    explanationNumbers: u.ExplPlanet,
                                    marginB: "32"
                                })]
                            }), (0,
                            m.jsx)(z, {
                                energyTableValues: p,
                                fieldName: n("table.energy.headField"),
                                tableSize: r ? "16" : "40"
                            }), (0,
                            m.jsx)("br", {}), (0,
                            m.jsx)("br", {}), (0,
                            m.jsx)(M.fz, {
                                children: n("matrixSoul.postExplanation")
                            }), (0,
                            m.jsx)("br", {}), (0,
                            m.jsx)(K, {
                                color: "brown",
                                href: "/#course",
                                text: n("button.details")
                            })]
                        })]
                    })
                })
            })
        }
        ;
        var P, Q = t(1779);
        const R = r.Ay.main(P || (P = (0,
        a.A)(["\n  padding-top: 67px;\n  min-height: calc(100vh - 67px - 191px);\n  ", " {\n    padding-top: 105px;\n    min-height: calc(100vh - 105px - 191px);\n  }\n"])), (e => e.theme.breakpoints.tab))
          , U = () => {
            const {t: e, i18n: n} = (0,
            i.Bd)();
            return (0,
            m.jsxs)(m.Fragment, {
                children: [(0,
                m.jsx)(Q.A, {
                    t: e,
                    i18n: n
                }), (0,
                m.jsx)(R, {
                    children: (0,
                    m.jsx)(L, {
                        t: e
                    })
                }), (0,
                m.jsx)(s.A, {
                    t: e
                })]
            })
        }
    }
}]);
