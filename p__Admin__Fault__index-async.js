((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__Admin__Fault__index'],
{ "src/pages/Admin/Fault/Graph/getGraphDataFunc.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "getGraphData", {
    enumerable: true,
    get: function() {
        return getGraphData;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getGraphData = (restore, containerWidth, containerHeight)=>{
    // 动态计算节点的大小比例
    const baseNodeWidth = 100;
    const baseNodeHeight = 50;
    // 这里可以根据实际情况调整缩放因子
    const scaleFactor = Math.min(containerWidth / 400, containerHeight / 300);
    const dynamicNodeWidth = baseNodeWidth * scaleFactor;
    const dynamicNodeHeight = baseNodeHeight * scaleFactor;
    const col = restore ? 'block' : 'red';
    const fill = restore ? 'transparent' : 'red';
    // 节点
    let nodes = [
        {
            id: '1',
            x: 100 * scaleFactor,
            y: 50 * scaleFactor,
            label: 'Teminal',
            type: 'ellipse',
            size: [
                dynamicNodeWidth,
                dynamicNodeHeight
            ],
            style: {
                fill: 'transparent',
                stroke: 'black' // 边框颜色为黑色
            },
            labelCfg: {
                position: 'center',
                style: {
                    fontSize: 12,
                    textAlign: 'center',
                    textBaseline: 'middle' // 基准线对齐方式
                }
            }
        },
        {
            id: '2',
            x: 100 * scaleFactor,
            y: 100 * scaleFactor,
            label: 'Bearer',
            type: 'ellipse',
            size: [
                dynamicNodeWidth,
                dynamicNodeHeight
            ],
            style: {
                fill: 'transparent',
                stroke: 'black' // 边框颜色为黑色
            },
            labelCfg: {
                position: 'center',
                style: {
                    fontSize: 12,
                    textAlign: 'center',
                    textBaseline: 'middle' // 基准线对齐方式
                }
            }
        },
        {
            id: '3',
            x: 100 * scaleFactor,
            y: 150 * scaleFactor,
            label: 'SP',
            type: 'ellipse',
            size: [
                dynamicNodeWidth,
                dynamicNodeHeight
            ],
            style: {
                fill: 'transparent',
                stroke: 'black' // 边框颜色为黑色
            },
            labelCfg: {
                position: 'center',
                style: {
                    fontSize: 12,
                    textAlign: 'center',
                    textBaseline: 'middle' // 基准线对齐方式
                }
            }
        },
        {
            id: '4',
            x: 100 * scaleFactor,
            y: 200 * scaleFactor,
            label: 'Resource',
            type: 'ellipse',
            size: [
                dynamicNodeWidth,
                dynamicNodeHeight
            ],
            style: {
                fill: 'transparent',
                stroke: col // 边框颜色为黑色
            },
            labelCfg: {
                position: 'center',
                style: {
                    fontSize: 12,
                    textAlign: 'center',
                    textBaseline: 'middle' // 基准线对齐方式
                }
            }
        },
        {
            id: '5',
            x: 250 * scaleFactor,
            y: 100 * scaleFactor,
            label: 'Resource Load',
            type: 'ellipse',
            size: [
                dynamicNodeWidth,
                dynamicNodeHeight
            ],
            style: {
                fill: 'transparent',
                stroke: col,
                lineDash: [
                    5,
                    5
                ]
            },
            labelCfg: {
                position: 'center',
                style: {
                    fontSize: 12,
                    textAlign: 'center',
                    textBaseline: 'middle' // 基准线对齐方式
                }
            }
        },
        {
            id: '6',
            x: 250 * scaleFactor,
            y: 200 * scaleFactor,
            label: 'Fault',
            type: 'ellipse',
            size: [
                dynamicNodeWidth,
                dynamicNodeHeight
            ],
            style: {
                fill: fill,
                stroke: col,
                lineDash: [
                    5,
                    5
                ]
            },
            labelCfg: {
                position: 'center',
                style: {
                    fontSize: 12,
                    textAlign: 'center',
                    textBaseline: 'middle' // 基准线对齐方式
                }
            }
        },
        {
            id: '7',
            x: 250 * scaleFactor,
            y: 300 * scaleFactor,
            label: 'Network Performance',
            type: 'ellipse',
            size: [
                dynamicNodeWidth,
                dynamicNodeHeight
            ],
            style: {
                fill: 'transparent',
                stroke: col,
                lineDash: [
                    5,
                    5
                ]
            },
            labelCfg: {
                position: 'center',
                style: {
                    fontSize: 12,
                    textAlign: 'center',
                    textBaseline: 'middle' // 基准线对齐方式
                }
            }
        }
    ];
    // 边
    const edges = [
        {
            source: '4',
            target: '5',
            // type: 'cubic-horizontal',
            style: {
                stroke: col,
                // lineWidth: 2,
                endArrow: true
            }
        },
        {
            source: '4',
            target: '6',
            // type: 'cubic-horizontal',
            style: {
                stroke: col,
                // lineWidth: 2,
                endArrow: true
            }
        },
        {
            source: '4',
            target: '7',
            // type: 'cubic-horizontal',
            style: {
                stroke: col,
                // lineWidth: 2,
                endArrow: true
            }
        }
    ];
    const res = {
        nodes: nodes,
        edges: edges
    };
    return res;
};
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

},
"src/pages/Admin/Fault/Graph/graphModal.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return Component$$;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _getGraphDataFunc = __mako_require__("src/pages/Admin/Fault/Graph/getGraphDataFunc.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function Component$$({ graph, restore }) {
    _s();
    // 创建对container11 DOM元素的引用
    const containerRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (!containerRef.current) return;
        // 获取container11的实际宽度和高度
        const rect = containerRef.current.getBoundingClientRect();
        let grData = (0, _getGraphDataFunc.getGraphData)(restore, rect.width, rect.height);
        try {
            graph && graph.data(grData);
            graph && graph.render();
        } catch (error) {
            console.error(error);
        }
        // 如果需要的话，可以根据获取到的宽度和高度调整graph的配置
        if (graph) graph.changeSize(rect.width, rect.height);
    }, [
        graph,
        restore
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        ref: containerRef,
        id: "container11",
        className: "x6-graph"
    }, void 0, false, {
        fileName: "src/pages/Admin/Fault/Graph/graphModal.js",
        lineNumber: 31,
        columnNumber: 9
    }, this);
}
_s(Component$$, "8puyVO4ts1RhCfXUmci3vLI3Njw=");
_c = Component$$;
var _c;
$RefreshReg$(_c, "Component$$");
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

},
"src/pages/Admin/Fault/Graph/index.ts": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return FlowGraph;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _g6 = __mako_require__("node_modules/@antv/g6/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
class FlowGraph {
    static graph1;
    static init() {
        const container = document.getElementById('container11');
        function setContainerHeight() {
            // 计算新的高度
            const newHeight = window.innerHeight - 300;
            // 应用到container上
            container.style.height = `${newHeight}px`;
        }
        // 初始化设置高度
        setContainerHeight();
        // 监听窗口大小改变事件
        window.addEventListener('resize', ()=>{
            setContainerHeight();
        });
        this.graph1 = new _g6.Graph({
            container: 'container11',
            width: container.clientWidth,
            height: parseInt(container.clientHeight)
        });
        return this.graph1;
    }
}
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

},
"src/pages/Admin/Fault/Graph/main.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return Component$$;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _index = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Fault/Graph/index.ts"));
var _graphModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Fault/Graph/graphModal.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function Component$$({ restore }) {
    _s();
    const [graph, setGraph] = (0, _react.useState)(undefined);
    const [isReady, setIsReady] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        const graph = _index.default.init();
        setIsReady(true);
        setGraph(graph);
    }, []);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_graphModal.default, {
            graph: graph,
            isReady: isReady,
            restore: restore
        }, void 0, false, {
            fileName: "src/pages/Admin/Fault/Graph/main.js",
            lineNumber: 18,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
_s(Component$$, "b+UaPrART63o1v4MD/5ZbEhaEjo=");
_c = Component$$;
var _c;
$RefreshReg$(_c, "Component$$");
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

},
"src/pages/Admin/Fault/index.js": function (module, exports, __mako_require__){
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
var _umi = __mako_require__("src/.umi/exports.ts");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Fault/index.less?asmodule"));
var _main = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Fault/Graph/main.js"));
var _overview = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Fault/overview.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
// faultState: 1 是恢复，0 是故障； 关闭窗口 将faultState清理掉
const Fault = ()=>{
    _s();
    (0, _umi.useLocation)();
    // let initf = location.search.split('?')[1].split("=")[1];
    const [currentTime, setCurrentTime] = (0, _react.useState)(new Date());
    (0, _react.useEffect)(()=>{
        // 创建一个新的定时器，在每一秒钟执行一次函数来更新时间状态。
        const timerId = setInterval(()=>{
            setCurrentTime(new Date());
        }, 1000);
        // 清除定时器以防止内存泄漏。
        return ()=>clearInterval(timerId);
    }, []);
    // 定时5秒后，修改状态
    const [restore, setRestore] = (0, _react.useState)(false);
    // 点击accept以后，将状态调整成true
    const getFaultState = ()=>{
        // 使用 setTimeout 实现3秒延迟
        setTimeout(()=>{
            setRestore(true) // 执行实际的操作
            ;
        }, 1000); // 2000毫秒等于3秒
    };
    const [currentStep, setCurrentStep] = (0, _react.useState)(0);
    let ss = 0;
    (0, _react.useEffect)(()=>{
        // 创建一个新的定时器，在每一秒钟执行一次函数来更新时间状态。
        const timerIdU = setInterval(()=>{
            ss++;
            setCurrentStep(ss);
            if (ss >= 4) clearInterval(timerIdU);
        }, 2000);
        // 清除定时器以防止内存泄漏。
        return ()=>clearInterval(timerIdU);
    }, []);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: _indexlessasmodule.default.container,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                children: "Demarcation Result"
            }, void 0, false, {
                fileName: "src/pages/Admin/Fault/index.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Steps, {
                style: {
                    padding: '0 80px'
                },
                current: currentStep,
                percent: 60,
                items: [
                    {
                        title: 'Quality Statistics'
                    },
                    {
                        title: 'Decision Condition'
                    },
                    {
                        title: "Decision Analysis"
                    },
                    {
                        title: 'Decision Result'
                    }
                ]
            }, void 0, false, {
                fileName: "src/pages/Admin/Fault/index.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 6,
                        children: currentStep >= 1 ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.card,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: "Quality Statistics"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                    style: {
                                        marginTop: '70px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                            span: 12,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.BorderOuterOutlined, {
                                                        className: _indexlessasmodule.default.iconFontSize
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/Fault/index.js",
                                                        lineNumber: 89,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: "Teminal"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 90,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 91,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/Admin/Fault/index.js",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                            span: 12,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ControlOutlined, {
                                                        className: _indexlessasmodule.default.iconFontSize
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/Fault/index.js",
                                                        lineNumber: 95,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: "Bearer"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 96,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/Admin/Fault/index.js",
                                            lineNumber: 94,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                            span: 12,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ExceptionOutlined, {
                                                        className: _indexlessasmodule.default.iconFontSize
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/Fault/index.js",
                                                        lineNumber: 102,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: "SP"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: "0"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 104,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/Admin/Fault/index.js",
                                            lineNumber: 101,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                            span: 12,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CloudOutlined, {
                                                        className: _indexlessasmodule.default.iconFontSize
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/Fault/index.js",
                                                        lineNumber: 108,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 108,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    children: "Resource Pool"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 109,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    className: restore ? _indexlessasmodule.default.black : _indexlessasmodule.default.red,
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 110,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/Admin/Fault/index.js",
                                            lineNumber: 107,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/Fault/index.js",
                            lineNumber: 85,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Skeleton, {
                            style: {
                                margin: '30px 0'
                            }
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/index.js",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Admin/Fault/index.js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 6,
                        children: currentStep >= 2 ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.card,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: "Decision Condition"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 122,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_main.default, {
                                    restore: restore
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/Fault/index.js",
                            lineNumber: 121,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Skeleton, {
                            style: {
                                margin: '30px 0'
                            }
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/index.js",
                            lineNumber: 125,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Admin/Fault/index.js",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 6,
                        children: currentStep >= 3 ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.card,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: [
                                        "host: 172.17.1.3 currentTime: ",
                                        currentTime.toLocaleString()
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        marginTop: '30px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            children: [
                                                "CPU: ",
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Slider, {
                                                    value: restore ? 45 : 92,
                                                    styles: {
                                                        track: restore ? {
                                                            background: 'green'
                                                        } : {
                                                            background: 'red'
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Fault/index.js",
                                                    lineNumber: 135,
                                                    columnNumber: 29
                                                }, this),
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/Admin/Fault/index.js",
                                            lineNumber: 135,
                                            columnNumber: 19
                                        }, this),
                                        "Hard disk: ",
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Slider, {
                                            defaultValue: 49,
                                            styles: {
                                                track: {
                                                    background: 'green'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/Fault/index.js",
                                            lineNumber: 136,
                                            columnNumber: 30
                                        }, this),
                                        "Memort: ",
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Slider, {
                                            defaultValue: 49,
                                            styles: {
                                                track: {
                                                    background: 'green'
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/Fault/index.js",
                                            lineNumber: 137,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/Fault/index.js",
                            lineNumber: 132,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Skeleton, {
                            style: {
                                margin: '30px 0'
                            }
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/index.js",
                            lineNumber: 141,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Admin/Fault/index.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 6,
                        children: currentStep >= 4 ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.card,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: "Decision Result"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        marginTop: '30px'
                                    },
                                    children: restore ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                            children: "everything is OK."
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/Fault/index.js",
                                            lineNumber: 154,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/Fault/index.js",
                                        lineNumber: 153,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        style: {
                                            textAlign: 'left'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                                                children: "Root cause analysis : "
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/Fault/index.js",
                                                lineNumber: 158,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                                className: restore ? _indexlessasmodule.default.black : _indexlessasmodule.default.red,
                                                children: [
                                                    "Too high load on the CPU node （172.17.1.3） ",
                                                    "->",
                                                    " task queue accumulation"
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/Fault/index.js",
                                                lineNumber: 159,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                                                children: "Impact scope : "
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/Fault/index.js",
                                                lineNumber: 160,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("p", {
                                                children: "Image processing module （80% task delay）"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/Fault/index.js",
                                                lineNumber: 161,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/Fault/index.js",
                                        lineNumber: 157,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/index.js",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/Fault/index.js",
                            lineNumber: 148,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Skeleton, {
                            style: {
                                margin: '30px 0'
                            }
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/index.js",
                            lineNumber: 167,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Admin/Fault/index.js",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Admin/Fault/index.js",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_overview.default, {
                getFaultState: getFaultState
            }, void 0, false, {
                fileName: "src/pages/Admin/Fault/index.js",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Admin/Fault/index.js",
        lineNumber: 57,
        columnNumber: 5
    }, this);
};
_s(Fault, "XYrWERQ7wtOmSfpNw+iR+1zejZQ=", false, function() {
    return [
        _umi.useLocation
    ];
});
_c = Fault;
var _default = Fault;
var _c;
$RefreshReg$(_c, "Fault");
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

},
"src/pages/Admin/Fault/index.less?asmodule": function (module, exports, __mako_require__){
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
"";
var _default = {
    "h3Inline": `h3Inline-yMZccrtb`,
    "rectangle": `rectangle-WFEZORdL`,
    "container": `container-xu9yqGJj`,
    "blue": `blue-1i1HKiPc`,
    "gray": `gray-RT2j5jVg`,
    "black": `black-DppRT-_H`,
    "card": `card-f3nGXJmF`,
    "green": `green-12MY4gHJ`,
    "red": `red-XVkUMQfq`,
    "iconFontSize": `iconFontSize-aN5CWUbl`,
    "inlineContainer": `inlineContainer-70Bjcb_T`
};

},
"src/pages/Admin/Fault/overview.js": function (module, exports, __mako_require__){
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
var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Fault/index.less?asmodule"));
var _constants = __mako_require__("src/contexts/constants.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const Overview = ({ getFaultState })=>{
    _s();
    const [current3Time, setCurrent3Time] = (0, _react.useState)();
    const [current2Time, setCurrent2Time] = (0, _react.useState)();
    const [current1Time, setCurrent1Time] = (0, _react.useState)();
    (0, _react.useEffect)(()=>{
        const now = new Date();
        now.setSeconds(now.getSeconds() - 30);
        setCurrent3Time(now);
        const now1 = new Date();
        now1.setSeconds(now1.getSeconds() - 20);
        setCurrent2Time(now1);
        const now2 = new Date();
        now2.setSeconds(now2.getSeconds() - 10);
        setCurrent1Time(now2);
    }, []);
    const [isModalOpen, setIsModalOpen] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        // 创建一个新的定时器，在每一秒钟执行一次函数来更新时间状态。
        const timerId = setTimeout(()=>{
            setIsModalOpen(true);
        }, 10000);
        // 清除定时器以防止内存泄漏。
        return ()=>clearTimeout(timerId);
    }, []);
    const handleCancel = ()=>{
        setIsModalOpen(false);
    };
    // const channel = new BroadcastChannel('tab-communication');
    const restart = ()=>{
        _antd.message.info('Operation successful, restarting in progress');
        setIsModalOpen(false);
        getFaultState('1');
        setTimeout(()=>{
            // 在即将关闭的标签页中
            window.addEventListener('beforeunload', ()=>{
                localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.bssMetricRecovered.toString());
            // channel.postMessage({ type: SCENARIO_STORAGE_KEY, data: Scenario.bssMetricRecovered.toString() });
            });
            window.close();
        }, 4000); // 4000毫秒等于3秒
    };
    const borderedItems = [
        {
            key: '1',
            label: 'Fault Description',
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                    style: {
                        color: 'red'
                    },
                    children: "Controller host 172.17.1.3 is in alarm status （cpu utilization of host hypervisor too high） because some processes consume high CPU"
                }, void 0, false, {
                    fileName: "src/pages/Admin/Fault/overview.js",
                    lineNumber: 66,
                    columnNumber: 21
                }, this)
            }, void 0, false),
            span: "filled"
        },
        {
            key: '2',
            label: 'Root Cause Device',
            children: 'host-172.17.1.3',
            span: "filled"
        },
        {
            key: '3',
            label: 'Suggestion',
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("b", {
                        style: {
                            marginRight: '5px'
                        },
                        children: "Restart this process can fix this issue."
                    }, void 0, false, {
                        fileName: "src/pages/Admin/Fault/overview.js",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                        size: "small",
                        onClick: restart,
                        type: "primary",
                        children: "accept"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/Fault/overview.js",
                        lineNumber: 82,
                        columnNumber: 99
                    }, this)
                ]
            }, void 0, true),
            span: "filled"
        },
        {
            key: '4',
            label: 'Root Cause Device Type',
            children: 'Controller',
            span: {
                xl: 2,
                xxl: 2
            }
        },
        {
            key: '5',
            label: 'Diagnosis Result',
            children: 'Faulty',
            span: {
                xl: 2,
                xxl: 2
            }
        },
        {
            key: '6',
            label: 'Fault Raised Time',
            span: {
                xl: 2,
                xxl: 2
            },
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: current3Time === null || current3Time === void 0 ? void 0 : current3Time.toLocaleString()
            }, void 0, false)
        },
        {
            key: '7',
            label: 'Fault Analysis Time',
            span: {
                xl: 2,
                xxl: 2
            },
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: current1Time === null || current1Time === void 0 ? void 0 : current1Time.toLocaleString()
            }, void 0, false)
        }
    ];
    const items = [
        {
            key: '1',
            label: 'Collection Object',
            children: 'host-172.17.1.3'
        },
        {
            key: '2',
            label: 'Collection Result',
            children: 'Success'
        },
        {
            key: '3',
            label: 'Collection Time',
            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: current2Time === null || current2Time === void 0 ? void 0 : current2Time.toLocaleString()
            }, void 0, false)
        }
    ];
    const columns = [
        {
            title: 'No.',
            dataIndex: 'No.',
            key: 'No.'
        },
        {
            title: 'PID',
            dataIndex: 'PID',
            key: 'PID'
        },
        {
            title: 'Process Status',
            dataIndex: 'Process',
            key: 'Process'
        },
        {
            title: 'CPU Usage(%)',
            dataIndex: 'CPU',
            key: 'CPU',
            render: (text, recoord)=>{
                if (text === '135') return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    style: {
                        color: '#ff0000'
                    },
                    children: text
                }, void 0, false, {
                    fileName: "src/pages/Admin/Fault/overview.js",
                    lineNumber: 165,
                    columnNumber: 28
                }, this);
                else return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: text
                }, void 0, false, {
                    fileName: "src/pages/Admin/Fault/overview.js",
                    lineNumber: 167,
                    columnNumber: 28
                }, this);
            }
        },
        {
            title: 'CMD',
            dataIndex: 'CMD',
            key: 'CMD'
        },
        {
            title: 'PSR',
            dataIndex: 'PSR',
            key: 'PSR'
        },
        {
            title: 'PPID',
            dataIndex: 'PPID',
            key: 'PPID'
        },
        {
            title: 'User',
            dataIndex: 'User',
            key: 'User'
        }
    ];
    const data = [
        {
            key: '1',
            "No.": '1',
            PID: 627315,
            Process: 'S',
            CPU: '135',
            CMD: '/usr/bin/python3.6/opt/tec',
            PSR: 14,
            PPID: 62697,
            User: "itool"
        },
        {
            key: '2',
            "No.": '2',
            PID: 327016,
            Process: 'S',
            CPU: '12.6',
            CMD: 'sh /usr/bin/time-log 30 50',
            PSR: 9,
            PPID: 4481,
            User: "root"
        },
        {
            key: '3',
            "No.": '3',
            PID: 12635,
            Process: 'S',
            CPU: '11.4',
            CMD: './wsssr_defence_service -c',
            PSR: 18,
            PPID: 1,
            User: "root"
        },
        {
            key: '4',
            "No.": '4',
            PID: 4522,
            Process: 'S',
            CPU: '7.5',
            CMD: '/usr/libexec/platform-pythp',
            PSR: 11,
            PPID: 1,
            User: "root"
        },
        {
            key: '5',
            "No.": '5',
            PID: 627639,
            Process: 'S',
            CPU: '7',
            CMD: '/usr/bin/systemd/systemd --',
            PSR: 23,
            PPID: 1,
            User: "itool"
        },
        {
            key: '6',
            "No.": '6',
            PID: 627316,
            Process: 'S',
            CPU: '25',
            CMD: '/usr/bin/python/opt/tec',
            PSR: 14,
            PPID: 62693,
            User: "itool"
        }
    ];
    const columns1 = [
        {
            title: 'Alarm Code Name',
            dataIndex: 'alarm',
            key: 'alarm'
        },
        {
            title: 'Object Type',
            dataIndex: 'object',
            key: 'object'
        },
        {
            title: 'Object Name',
            dataIndex: 'Name',
            key: 'Name'
        },
        {
            title: 'Occurrence Time',
            dataIndex: 'Occurrence',
            key: 'Occurrence'
        },
        {
            title: 'Clear Time',
            dataIndex: 'Clear',
            key: 'Clear'
        },
        {
            title: 'Additional Information',
            dataIndex: 'Additional',
            key: 'Additional'
        }
    ];
    const data1 = [
        {
            key: '6xx',
            alarm: 'CPU Utilization of Host Hypervisor too Higt',
            "Object": "Controller",
            "Name": "host-172.17.1.3",
            Occurrence: current3Time === null || current3Time === void 0 ? void 0 : current3Time.toLocaleString(),
            Clear: "--",
            Additional: 'cloudname=tecs_public_test01,hid=721560600092'
        }
    ];
    // 分页配置
    const paginationConfig = {
        pageSize: 5,
        showSizeChanger: false,
        total: data.length
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
        title: "Diagnosis List",
        open: isModalOpen,
        footer: null,
        onCancel: handleCancel,
        width: "80%",
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                    style: {
                        textAlign: 'center'
                    },
                    children: "Controller host 172.17.1.3 is in alarm status （cpu utilization of host hypervisor too high）"
                }, void 0, false, {
                    fileName: "src/pages/Admin/Fault/overview.js",
                    lineNumber: 330,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                margin: '5px 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        width: '10px',
                                        height: '2em',
                                        backgroundColor: '#faad14',
                                        marginRight: '8px',
                                        marginTop: '-6px'
                                    }
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/overview.js",
                                    lineNumber: 334,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: "Fault Overview"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/overview.js",
                                    lineNumber: 341,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 333,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions, {
                            bordered: true,
                            title: "",
                            size: 'small',
                            items: borderedItems
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 344,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/Fault/overview.js",
                    lineNumber: 331,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        margin: '5px 0'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                width: '10px',
                                height: '2em',
                                backgroundColor: '#faad14',
                                marginRight: '8px',
                                marginTop: '-6px'
                            }
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 352,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                            children: "Root Cause Details (some processes consume high CPU)"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 359,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/Fault/overview.js",
                    lineNumber: 351,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: _indexlessasmodule.default.container,
                    style: {
                        height: '400px'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                            children: "Collect Processer Information With Large Amuount od CPU Usage"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 362,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Descriptions, {
                            items: items
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 363,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                            children: "TCP Process List"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 364,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table, {
                            columns: columns,
                            dataSource: data,
                            bordered: true,
                            size: "small",
                            pagination: paginationConfig
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 365,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/Fault/overview.js",
                    lineNumber: 361,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                margin: '5px 0'
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        width: '10px',
                                        height: '2em',
                                        backgroundColor: '#faad14',
                                        marginRight: '8px',
                                        marginTop: '-6px'
                                    }
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/overview.js",
                                    lineNumber: 369,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: "Alarms Trigger This Diagnosis"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/Fault/overview.js",
                                    lineNumber: 376,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 368,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table, {
                            columns: columns1,
                            dataSource: data1,
                            bordered: true,
                            size: "small",
                            pagination: false
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Fault/overview.js",
                            lineNumber: 378,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/Fault/overview.js",
                    lineNumber: 367,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Admin/Fault/overview.js",
            lineNumber: 328,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Admin/Fault/overview.js",
        lineNumber: 315,
        columnNumber: 9
    }, this);
};
_s(Overview, "9WR12aTA79K1esdCUvP7wAxPivI=");
_c = Overview;
var _default = Overview;
var _c;
$RefreshReg$(_c, "Overview");
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

},
 }]);
//# sourceMappingURL=p__Admin__Fault__index-async.js.map