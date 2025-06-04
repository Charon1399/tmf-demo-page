globalThis.makoModuleHotUpdate('p__Admin__hvac__index', {
    modules: {
        "src/pages/Admin/hvac/index.js": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            __mako_require__.d(exports, "default", {
                enumerable: true,
                get: function() {
                    return _default;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _main = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/hvac/Graph/main.js"));
            var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/hvac/index.less?asmodule"));
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var _umi = __mako_require__("src/.umi/exports.ts");
            var _serverModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/hvac/serverModal.js"));
            var _constants = __mako_require__("src/contexts/constants.tsx");
            var _serverInfo = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/hvac/serverInfo.js"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            var _s = $RefreshSig$();
            var _s1 = $RefreshSig$();
            const displayData = (flag, flagKt, tt, cfProgressS)=>{
                switch(flag){
                    case "1":
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    style: {
                                        overflowY: "scroll"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.container,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                                gutter: 16,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                        span: 12,
                                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            className: _indexlessasmodule.default.card,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    children: "Total Energy Saved"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 39,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    className: _indexlessasmodule.default.green,
                                                                    children: "616.99 kw/h"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 40,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                            lineNumber: 38,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 37,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                        span: 12,
                                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            className: _indexlessasmodule.default.card,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    children: "Avg. Saving Rate"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 45,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    className: _indexlessasmodule.default.green,
                                                                    children: "21.5%"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 46,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                            lineNumber: 44,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 43,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 36,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.cardW1,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Device Status"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 82,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Total Servers"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 83,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.blue,
                                                        children: "6"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 84,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Running Servers"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 85,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.green,
                                                        children: "5"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 86,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Hibernating Servers"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.gray,
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 88,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Shutdown Servers"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.shutDown,
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_serverModal.default, {
                                                flag: flag
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/hvac/index.js",
                                        lineNumber: 19,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 17,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.container,
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_main.default, {
                                            flag: flag
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/index.js",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/index.js",
                                        lineNumber: 100,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 99,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/index.js",
                            lineNumber: 16,
                            columnNumber: 9
                        }, this);
                    case "2":
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    style: {
                                        overflowY: "scroll"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.container,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                                gutter: 16,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                        span: 12,
                                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            className: _indexlessasmodule.default.card,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    children: [
                                                                        "Total Energy Saved ",
                                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowUpOutlined, {}, void 0, false, {
                                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                                            lineNumber: 132,
                                                                            columnNumber: 46
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 132,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    className: _indexlessasmodule.default.green,
                                                                    children: "619.99 kw/h"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 133,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                            lineNumber: 131,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                        span: 12,
                                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            className: _indexlessasmodule.default.card,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    children: [
                                                                        "Avg. Saving Rate ",
                                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowUpOutlined, {}, void 0, false, {
                                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                                            lineNumber: 138,
                                                                            columnNumber: 44
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 138,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    className: _indexlessasmodule.default.green,
                                                                    children: "22.5%"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 139,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                            lineNumber: 137,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 136,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.cardW1,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Device Status"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 175,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Total Servers"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 176,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.blue,
                                                        children: "6"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 177,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Running Servers"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 178,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.green,
                                                        children: [
                                                            "4 ",
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowDownOutlined, {}, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 179,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 179,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Hibernating Servers"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 180,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.gray,
                                                        children: [
                                                            "1 ",
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowUpOutlined, {}, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 181,
                                                                columnNumber: 48
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 181,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Shutdown Servers"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 182,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.shutDown,
                                                        children: "1"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 183,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_serverModal.default, {
                                                flag: flag
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/hvac/index.js",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 110,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.container,
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_main.default, {
                                            flag: flag
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/index.js",
                                            lineNumber: 193,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/index.js",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 191,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/index.js",
                            lineNumber: 109,
                            columnNumber: 9
                        }, this);
                    case "3":
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    style: {
                                        overflowY: "scroll"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.container,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                                gutter: 16,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                        span: 12,
                                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            className: _indexlessasmodule.default.card,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    children: "Total Energy Saved"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 224,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    className: _indexlessasmodule.default.green,
                                                                    children: "619.99 kw/h"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 225,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                            lineNumber: 223,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 222,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                        span: 12,
                                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            className: _indexlessasmodule.default.card,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    children: "Avg. Saving Rate"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 230,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    className: _indexlessasmodule.default.green,
                                                                    children: "22.5%"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 231,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                            lineNumber: 229,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 228,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.cardW,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Device Status"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 267,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Online Devices"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 268,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.green,
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 269,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Offline Devices"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 270,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.red,
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 271,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.cardS,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Device Type Summary"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 275,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "AC Units"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 276,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                className: _indexlessasmodule.default.green,
                                                                children: "2 / "
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 277,
                                                                columnNumber: 22
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                className: _indexlessasmodule.default.red,
                                                                children: "0"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 277,
                                                                columnNumber: 64
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 277,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Temp/Humidity Sensors"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 278,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                className: _indexlessasmodule.default.green,
                                                                children: "1 / "
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 279,
                                                                columnNumber: 22
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                className: _indexlessasmodule.default.red,
                                                                children: "0"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 279,
                                                                columnNumber: 64
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 279,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 274,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_serverInfo.default, {
                                                flag: flag,
                                                flagKt: flagKt,
                                                tt: tt,
                                                cfProgressS: cfProgressS
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 282,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/hvac/index.js",
                                        lineNumber: 204,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 202,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.container,
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_main.default, {
                                            flag: flag,
                                            flagKt: flagKt,
                                            tt: tt,
                                            cfProgressS: cfProgressS
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/index.js",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/index.js",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 288,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/index.js",
                            lineNumber: 201,
                            columnNumber: 9
                        }, this);
                    case "4":
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    style: {
                                        overflowY: "scroll"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.container,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                                gutter: 16,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                        span: 12,
                                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            className: _indexlessasmodule.default.card,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    children: [
                                                                        "Total Energy Saved ",
                                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowUpOutlined, {}, void 0, false, {
                                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                                            lineNumber: 323,
                                                                            columnNumber: 45
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 323,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    className: _indexlessasmodule.default.green,
                                                                    children: "622.99 kw/h"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 324,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                            lineNumber: 322,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 321,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                                        span: 12,
                                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            className: _indexlessasmodule.default.card,
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    children: [
                                                                        "Avg. Saving Rate ",
                                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowUpOutlined, {}, void 0, false, {
                                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                                            lineNumber: 329,
                                                                            columnNumber: 43
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 329,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    className: _indexlessasmodule.default.green,
                                                                    children: "23.5%"
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/hvac/index.js",
                                                                    lineNumber: 330,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/hvac/index.js",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 327,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 320,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.cardW,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Device Status"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 366,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Online Devices"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 367,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.green,
                                                        children: "3"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 368,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Offline Devices"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 369,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.red,
                                                        children: "0"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 370,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 365,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.cardS,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Device Type Summary"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 374,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "AC Units"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 375,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                className: _indexlessasmodule.default.green,
                                                                children: "2 / "
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 376,
                                                                columnNumber: 22
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                className: _indexlessasmodule.default.red,
                                                                children: "0"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 376,
                                                                columnNumber: 64
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 376,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: "Temp/Humidity Sensors"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 377,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                className: _indexlessasmodule.default.green,
                                                                children: "1 / "
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 378,
                                                                columnNumber: 22
                                                            }, this),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                className: _indexlessasmodule.default.red,
                                                                children: "0"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/hvac/index.js",
                                                                lineNumber: 378,
                                                                columnNumber: 64
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/Admin/hvac/index.js",
                                                        lineNumber: 378,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 373,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_serverInfo.default, {
                                                flag: flag,
                                                flagKt: flagKt,
                                                tt: tt
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/index.js",
                                                lineNumber: 381,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/hvac/index.js",
                                        lineNumber: 303,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 301,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.container,
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_main.default, {
                                            flag: flag,
                                            flagKt: flagKt,
                                            tt: tt
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/index.js",
                                            lineNumber: 391,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/index.js",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 387,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/index.js",
                            lineNumber: 300,
                            columnNumber: 9
                        }, this);
                    default:
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {}, void 0, false);
                }
            };
            const CurrentTime = ()=>{
                _s();
                const [currentTime, setCurrentTime] = (0, _react.useState)(new Date());
                (0, _react.useEffect)(()=>{
                    // 创建一个新的定时器，在每一秒钟执行一次函数来更新时间状态。
                    const timerId = setInterval(()=>{
                        setCurrentTime(new Date());
                    }, 1000);
                    // 清除定时器以防止内存泄漏。
                    return ()=>clearInterval(timerId);
                }, []);
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: _indexlessasmodule.default.containerTop,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                float: 'left'
                            },
                            children: [
                                "current time：",
                                currentTime.toLocaleString()
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/index.js",
                            lineNumber: 418,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                float: 'right'
                            },
                            children: [
                                "AI Control： ",
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Switch, {
                                    defaultChecked: true,
                                    size: "small"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/index.js",
                                    lineNumber: 422,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/index.js",
                            lineNumber: 421,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/hvac/index.js",
                    lineNumber: 417,
                    columnNumber: 5
                }, this);
            };
            _s(CurrentTime, "f3elDUct5ap4W3FuLtGG73aMsLc=");
            _c = CurrentTime;
            const style = {
                background: '#0092ff',
                padding: '8px 0'
            };
            const Hvac = ()=>{
                _s1();
                const location = (0, _umi.useLocation)();
                let initf = location.search.split('?')[1].split("=")[1];
                const [flag, setFlag] = (0, _react.useState)(initf);
                let cfProgress = 0;
                const [cfProgressS, setCfProgress] = (0, _react.useState)(0);
                const [tt, SetTT] = (0, _react.useState)(18);
                // 空调调节：临时的
                const [flagKt, setFlagKt] = (0, _react.useState)('');
                const display = displayData(flag, flagKt, tt, cfProgressS);
                (0, _react.useEffect)(()=>{
                    let timF = 0; // 定时器
                    // 创建一个新的定时器，在6秒后将温度调整一下。
                    const timerIdxxx = setInterval(()=>{
                        timF++;
                        if (flag === '3' && timF > 2) {
                            cfProgress = cfProgress + 30;
                            if (cfProgress >= 100) cfProgress = 100;
                            setCfProgress(cfProgress);
                            SetTT(cfProgress * 0.04 + 18);
                        }
                    }, 2000);
                    // 清除定时器以防内存泄漏
                    return ()=>{
                        clearInterval(timerIdxxx);
                    };
                }, []); // 空数组依赖项意味着只会在组件挂载和卸载时运行
                (0, _react.useEffect)(()=>{
                    // 设置定时器，在五秒钟后执行回调函数
                    let timer1 = setTimeout(()=>{
                        if (flag === "1") setFlag("2"); // 改变标志变量的值
                    }, 3000); // 5000 毫秒等于 5 秒钟
                    // const channel = new BroadcastChannel('tab-communication');
                    let timer3 = setTimeout(()=>{
                        // 在即将关闭的标签页中
                        window.addEventListener('beforeunload', ()=>{
                            if (flag === '2' || flag === '1') localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.serverHibernated.toString());
                            if (flag === '4' || flag === '3') localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.temperatureRecovered.toString());
                        });
                        window.close();
                    }, 6000);
                    // 12秒flag为4，完成了
                    let timer2 = setTimeout(()=>{
                        if (flag === '3') setFlag("4"); // 改变标志变量的值
                    }, 12000);
                    // 4秒后改成5， 让空调温度从19改成22
                    let timer4 = setTimeout(()=>{
                        if (flag === '3') setFlagKt("5"); // 改变标志变量的值
                    }, 4000);
                    // 清除定时器以防内存泄漏
                    return ()=>{
                        clearTimeout(timer1);
                        clearTimeout(timer2);
                        clearTimeout(timer3);
                        clearTimeout(timer4);
                    };
                }, []); // 空数组依赖项意味着只会在组件挂载和卸载时运行
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: [
                        CurrentTime(),
                        display
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/hvac/index.js",
                    lineNumber: 519,
                    columnNumber: 5
                }, this);
            };
            _s1(Hvac, "dcX2tMaQ3sij0hTq/541i7Mn4f8=", false, function() {
                return [
                    _umi.useLocation
                ];
            });
            _c1 = Hvac;
            var _default = Hvac;
            var _c;
            var _c1;
            $RefreshReg$(_c, "CurrentTime");
            $RefreshReg$(_c1, "Hvac");
            if (prevRefreshReg) self.$RefreshReg$ = prevRefreshReg;
            if (prevRefreshSig) self.$RefreshSig$ = prevRefreshSig;
            function registerClassComponent(filename, moduleExports) {
                for(const key in moduleExports)try {
                    if (key === "__esModule") continue;
                    const exportValue = moduleExports[key];
                    if (_reactrefresh.isLikelyComponentType(exportValue) && exportValue.prototype && exportValue.prototype.isReactComponent) _reactrefresh.register(exportValue, filename + " " + key);
                } catch (e) {}
            }
            function $RefreshIsReactComponentLike$(moduleExports) {
                if (_reactrefresh.isLikelyComponentType(moduleExports || moduleExports.default)) return true;
                for(var key in moduleExports)try {
                    if (_reactrefresh.isLikelyComponentType(moduleExports[key])) return true;
                } catch (e) {}
                return false;
            }
            registerClassComponent(module.id, module.exports);
            if ($RefreshIsReactComponentLike$(module.exports)) {
                module.meta.hot.accept();
                _reactrefresh.performReactRefresh();
            }
        }
    }
}, function(runtime) {
    runtime._h = '14383469697941653386';
    runtime.updateEnsure2Map({
        "node_modules/react-dom/client.js": [
            "node_modules/react-dom/client.js"
        ],
        "src/.umi/core/EmptyRoute.tsx": [
            "src/.umi/core/EmptyRoute.tsx"
        ],
        "src/.umi/plugin-layout/Layout.tsx": [
            "vendors_5",
            "vendors_2",
            "vendors_3",
            "vendors_4",
            "src/.umi/plugin-layout/Layout.tsx"
        ],
        "src/.umi/plugin-openapi/openapi.tsx": [
            "vendors_5",
            "vendors_0",
            "src/.umi/plugin-openapi/openapi.tsx"
        ],
        "src/pages/404.tsx": [
            "p__404"
        ],
        "src/pages/Admin/Fault/index.js": [
            "vendors_0",
            "vendors_1",
            "vendors_2",
            "vendors_3",
            "p__Admin__Fault__index"
        ],
        "src/pages/Admin/hvac/index.js": [
            "vendors_0",
            "vendors_1",
            "vendors_2",
            "vendors_3",
            "p__Admin__hvac__index"
        ],
        "src/pages/Admin/index.tsx": [
            "vendors_0",
            "vendors_1",
            "vendors_2",
            "vendors_3",
            "p__Admin__index"
        ],
        "src/pages/User/Chat/index.tsx": [
            "p__User__Chat__index"
        ]
    });
    ;
});

//# sourceMappingURL=p__Admin__hvac__index-async.1589754940899857373.hot-update.js.map