((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__Admin__hvac__index'],
{ "src/pages/Admin/hvac/Graph/getGraphDataFunc.js": function (module, exports, __mako_require__){
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
const getGraphData = (flag, containerWidth, containerHeight, flagKt, tt)=>{
    let color = flag === '1' ? 'green' : flag === '2' || flag === '3' || flag === '4' ? "gray" : '';
    let svd = flagKt === '5' ? "22 °C ↑" : flag === '3' ? '19 °C' : '';
    let vvd = tt;
    let vvdColor = tt < 20 ? '#F4664A' : "rgba(0, 255, 0, 0.3)";
    // 动态计算节点的大小比例
    const baseNodeWidth = 80;
    const baseNodeHeight = 80;
    const baseNodeWidth1 = 100;
    const baseNodeHeight1 = 330;
    const baseNodeWidth2 = 400;
    const baseNodeHeight2 = 120;
    // 这里可以根据实际情况调整缩放因子
    const scaleFactor = Math.min(containerWidth / 650, containerHeight / 650);
    const dynamicNodeWidth = baseNodeWidth * scaleFactor;
    const dynamicNodeHeight = baseNodeHeight * scaleFactor;
    const dynamicNodeWidth1 = baseNodeWidth1 * scaleFactor;
    const dynamicNodeHeight1 = baseNodeHeight1 * scaleFactor;
    const dynamicNodeWidth2 = baseNodeWidth2 * scaleFactor;
    const dynamicNodeHeight2 = baseNodeHeight2 * scaleFactor;
    // 节点
    let nodes = [
        {
            id: 'C 01',
            x: 130 * scaleFactor,
            y: 100 * scaleFactor,
            label: `C 01`,
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            },
            style: {
                fill: '',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            }
        },
        {
            id: 'C 02',
            x: 130 * scaleFactor,
            y: 200 * scaleFactor,
            label: 'C 02',
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            },
            style: {
                fill: '',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            }
        },
        {
            id: 'C 03',
            x: 130 * scaleFactor,
            y: 300 * scaleFactor,
            label: 'C 03',
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            },
            style: {
                fill: '',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            }
        },
        {
            id: 'A 01',
            x: 400 * scaleFactor,
            y: 150 * scaleFactor,
            label: `A 01
Running`,
            style: {
                fill: 'green',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            }
        },
        {
            id: 'A 02',
            x: 500 * scaleFactor,
            y: 150 * scaleFactor,
            label: `A 02
Running`,
            style: {
                fill: 'green',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            }
        },
        {
            id: 'A 03',
            x: 600 * scaleFactor,
            y: 150 * scaleFactor,
            label: `A 03
Hibernating`,
            style: {
                fill: color,
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            }
        },
        {
            id: 'B 01',
            x: 400 * scaleFactor,
            y: 350 * scaleFactor,
            label: `B 01
Running`,
            style: {
                fill: 'green',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            }
        },
        {
            id: 'B 02',
            x: 500 * scaleFactor,
            y: 350 * scaleFactor,
            label: `B 02
Running`,
            style: {
                fill: 'green',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            }
        },
        {
            id: 'B 03',
            x: 600 * scaleFactor,
            y: 350 * scaleFactor,
            label: `B 03
Shutdown`,
            style: {
                fill: '',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                style: {
                    fontSize: 14 * scaleFactor
                }
            }
        },
        {
            id: 'Battery Packs1',
            x: 130 * scaleFactor,
            y: 500 * scaleFactor,
            label: 'Battery Packs1',
            style: {
                fill: '',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                style: {
                    fontSize: 12 * scaleFactor
                }
            }
        },
        {
            id: 'Battery Packs2',
            x: 230 * scaleFactor,
            y: 500 * scaleFactor,
            label: 'Battery Packs2',
            style: {
                fill: '',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0.2,
                width: dynamicNodeWidth,
                height: dynamicNodeHeight,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                style: {
                    fontSize: 12 * scaleFactor
                }
            }
        },
        {
            id: 'Comm Devices',
            x: 130 * scaleFactor,
            y: 190 * scaleFactor,
            style: {
                fill: '#ffcc00',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0,
                width: dynamicNodeWidth1,
                height: dynamicNodeHeight1,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                position: 'top',
                offset: 120 * scaleFactor,
                style: {
                    fill: '#333',
                    fontSize: 14 * scaleFactor // 字体大小
                }
            },
            label: 'Comm Devices'
        },
        {
            id: 'IT Equipment1',
            x: 500 * scaleFactor,
            y: 140 * scaleFactor,
            style: {
                fill: '#ffcc00',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0,
                width: dynamicNodeWidth2,
                height: dynamicNodeHeight2,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                position: 'top',
                offset: 10 * scaleFactor,
                style: {
                    fill: '#333',
                    fontSize: 14 * scaleFactor // 字体大小
                }
            },
            label: 'IT Equipment'
        },
        {
            id: 'IT Equipment2',
            x: 500 * scaleFactor,
            y: 340 * scaleFactor,
            style: {
                fill: '#ffcc00',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0,
                width: dynamicNodeWidth2,
                height: dynamicNodeHeight2,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                position: 'top',
                offset: 10 * scaleFactor,
                style: {
                    fill: '#333',
                    fontSize: 14 * scaleFactor // 字体大小
                }
            },
            label: 'IT Equipment'
        },
        {
            id: 'Power Equipment',
            x: 180 * scaleFactor,
            y: 490 * scaleFactor,
            style: {
                fill: '#ffcc00',
                stroke: '#999',
                lineWidth: 2,
                fillOpacity: 0,
                width: dynamicNodeWidth2 / 2,
                height: dynamicNodeHeight2,
                radius: 10,
                lineDash: [
                    1,
                    1
                ] // 虚线配置，[间隔, 长度]
            },
            labelCfg: {
                position: 'top',
                offset: 10 * scaleFactor,
                style: {
                    fill: '#333',
                    fontSize: 14 * scaleFactor // 字体大小
                }
            },
            label: 'Power Equipment'
        }
    ];
    if (flag === '3' || flag === '4') nodes.push({
        id: 'node1',
        x: 400 * scaleFactor,
        y: 40 * scaleFactor,
        type: 'rect',
        label: `air-condition temperature：${svd}`,
        labelCfg: {
            style: {
                fill: '#333',
                fontSize: 14 * scaleFactor,
                fontFamily: 'CustomFont'
            }
        },
        style: {
            x: -135 * scaleFactor,
            y: -22.5 * scaleFactor,
            width: 270 * scaleFactor,
            height: 45 * scaleFactor,
            fill: 'rgba(0, 255, 0, 0.3)',
            stroke: 'rgba(0, 255, 0, 0.3)',
            radius: 20 * scaleFactor
        }
    }, {
        id: 'node2',
        x: 500 * scaleFactor,
        y: 240 * scaleFactor,
        type: 'rect',
        label: `        ambient temperature：${vvd}`,
        labelCfg: {
            style: {
                fill: '#333',
                fontSize: 14 * scaleFactor,
                fontFamily: 'CustomFont'
            }
        },
        style: {
            x: -135 * scaleFactor,
            y: -22.5 * scaleFactor,
            width: 270 * scaleFactor,
            height: 45 * scaleFactor,
            fill: vvdColor,
            stroke: vvdColor,
            radius: 20 * scaleFactor
        }
    }, {
        id: 'node3',
        x: 600 * scaleFactor,
        y: 480 * scaleFactor,
        type: 'rect',
        label: `air-condition temperature：${svd}`,
        labelCfg: {
            style: {
                fill: '#333',
                fontSize: 14 * scaleFactor,
                fontFamily: 'CustomFont'
            }
        },
        style: {
            x: -135 * scaleFactor,
            y: -22.5 * scaleFactor,
            width: 270 * scaleFactor,
            height: 45 * scaleFactor,
            fill: 'rgba(0, 255, 0, 0.3)',
            stroke: 'rgba(0, 255, 0, 0.3)',
            radius: 20 * scaleFactor
        }
    });
    // 边
    const edges = [];
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
"src/pages/Admin/hvac/Graph/graphModal.js": function (module, exports, __mako_require__){
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
var _getGraphDataFunc = __mako_require__("src/pages/Admin/hvac/Graph/getGraphDataFunc.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function Component$$({ flag, graph, flagKt, tt }) {
    _s();
    // 创建对container11 DOM元素的引用
    const containerRef1 = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (!containerRef1.current) return;
        // 获取container11的实际宽度和高度
        const rect = containerRef1.current.getBoundingClientRect();
        let grData = (0, _getGraphDataFunc.getGraphData)(flag, rect.width, rect.height, flagKt, tt);
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
        flag,
        flagKt,
        tt
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        ref: containerRef1,
        id: "container",
        className: "x6-graph"
    }, void 0, false, {
        fileName: "src/pages/Admin/hvac/Graph/graphModal.js",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
_s(Component$$, "RIwPVN9ogbYhR2kiROf/butXYB4=");
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
"src/pages/Admin/hvac/Graph/index.ts": function (module, exports, __mako_require__){
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
var _g6 = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@antv/g6/es/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
class FlowGraph {
    static graph;
    static init() {
        const container = document.getElementById('container');
        function setContainerHeight() {
            // 计算新的高度
            const newHeight = window.innerHeight - 172;
            // 应用到container上
            container.style.height = `${newHeight}px`;
        }
        // 初始化设置高度
        setContainerHeight();
        // 监听窗口大小改变事件
        window.addEventListener('resize', ()=>{
            setContainerHeight();
        });
        _g6.default.registerNode('custom-node', {
            draw (cfg, group) {
                const padding = 10; // 内边距
                let totalWidth = 0;
                let maxHeight = 0;
                // if (cfg.label) {
                //   const textSize = this.getTextSize(cfg.label, cfg.labelCfg.style.fontSize, cfg.labelCfg.style.fontFamily);
                //   totalWidth += textSize.width + padding * 2;
                //   maxHeight = Math.max(maxHeight, textSize.height);
                // }
                // 添加矩形背景
                const rect = group.addShape('rect', {
                    attrs: {
                        x: -totalWidth / 2,
                        y: -maxHeight / 2,
                        width: cfg.width,
                        height: cfg.height,
                        // radius: 20, // 圆角半径
                        fill: 'rgba(0, 255, 0, 0.3)',
                        stroke: 'rgba(0, 255, 0, 0.3)',
                        lineWidth: 2
                    },
                    name: 'background-shape'
                });
                // 添加文本
                // if (cfg.label) {
                //   const textSize = this.getTextSize(cfg.label, cfg.labelCfg.style.fontSize, cfg.labelCfg.style.fontFamily);
                //   group.addShape('text', {
                //     attrs: {
                //       text: cfg.label,
                //       x: -totalWidth / 2 + cfg.imgSize.width + padding * 2 + textSize.width / 2 - 200, // 文本居中
                //       y: -maxHeight / 2 + (maxHeight - textSize.height) / 2, // 垂直居中
                //       textAlign: 'start',
                //       fontFamily: 'CustomFont', // 使用自定义字体
                //       fontSize: cfg.labelCfg.style.fontSize,
                //       fill: cfg.labelCfg.style.fill,
                //     },
                //     name: 'text-shape'
                //   });
                // }
                return rect; // 返回背景形状作为关键图形
            }
        }, 'single-node');
        this.graph = new _g6.Graph({
            container: 'container',
            width: container.clientWidth,
            height: parseInt(container.clientHeight),
            // plugins: [{ type: 'grid-line', size: 30 }],
            /* style for the keyShape */ layout: {
                type: 'grid' // 使用网格布局，默认情况下节点可能会重叠
            },
            defaultNode: {
                /* node type */ type: 'rect',
                /* node size */ size: [
                    50
                ],
                labelCfg: {
                    /* label's position, options: center, top, bottom, left, right */ position: 'center'
                }
            }
        });
        return this.graph;
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
"src/pages/Admin/hvac/Graph/main.js": function (module, exports, __mako_require__){
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
var _index = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/hvac/Graph/index.ts"));
var _graphModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/hvac/Graph/graphModal.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function Component$$({ flag, flagKt, tt }) {
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
            flag: flag,
            flagKt: flagKt,
            tt: tt
        }, void 0, false, {
            fileName: "src/pages/Admin/hvac/Graph/main.js",
            lineNumber: 19,
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
"src/pages/Admin/hvac/index.js": function (module, exports, __mako_require__){
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
        }, 10000); // 5000 毫秒等于 5 秒钟
        // const channel = new BroadcastChannel('tab-communication');
        let timer3 = setTimeout(()=>{
            // 在即将关闭的标签页中
            window.addEventListener('beforeunload', ()=>{
                if (flag === '2' || flag === '1') localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.serverHibernated.toString());
                if (flag === '4' || flag === '3') localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.temperatureRecovered.toString());
            });
        // window.close();
        }, 15000);
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

},
"src/pages/Admin/hvac/index.less?asmodule": function (module, exports, __mako_require__){
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
    "canvas": `canvas-qfAGWcbj`,
    "shutDown": `shutDown-Eu10Ndy1`,
    "container": `container-R_-_IWAS`,
    "cardW": `cardW-kvE0bouo`,
    "cardS": `cardS-mMlZICxX`,
    "green": `green-E9OP9Vpe`,
    "card": `card-KZoLFapF`,
    "blink": `blink-FDe1fxbU`,
    "red": `red-LLRXqCJT`,
    "blue": `blue-hLJQ7Pr3`,
    "blinkText": `blinkText-UK4lSzqZ`,
    "gray": `gray-za4iTNRy`,
    "cardW1": `cardW1-Pd2L5Fve`,
    "containerTop": `containerTop-bG98dg94`
};

},
"src/pages/Admin/hvac/serverInfo.js": function (module, exports, __mako_require__){
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
var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/hvac/index.less?asmodule"));
var _plots = __mako_require__("node_modules/@ant-design/plots/es/index.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const DemoGauge1 = ({ svd })=>{
    const config = {
        width: 200,
        height: 200,
        autoFit: true,
        data: {
            target: svd - 15,
            total: 10,
            name: 'score',
            thresholds: [
                5,
                9,
                10
            ]
        },
        "axis": {
            "y": {
                "labelFormatter": (value)=>value + 15
            }
        },
        style: {
            textContent: (target, total)=>``
        },
        legend: false,
        scale: {
            color: {
                range: [
                    '#F4664A',
                    'green',
                    '#F4664A'
                ]
            }
        }
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_plots.Gauge, {
        ...config
    }, void 0, false, {
        fileName: "src/pages/Admin/hvac/serverInfo.js",
        lineNumber: 32,
        columnNumber: 12
    }, this);
};
_c = DemoGauge1;
const DemoGauge2 = ({ svd })=>{
    const config = {
        width: 200,
        height: 200,
        autoFit: true,
        data: {
            target: svd - 15,
            total: 10,
            name: 'score'
        },
        "axis": {
            "y": {
                "labelFormatter": (value)=>value + 15
            }
        },
        style: {
            textContent: (target, total)=>``
        },
        legend: false
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_plots.Gauge, {
        ...config
    }, void 0, false, {
        fileName: "src/pages/Admin/hvac/serverInfo.js",
        lineNumber: 55,
        columnNumber: 12
    }, this);
};
_c1 = DemoGauge2;
const ServerInfo = ({ flag, flagKt, tt, cfProgressS })=>{
    _s();
    let initCurrentStep = 0;
    const [currentStep, setCurrentStep] = (0, _react.useState)(initCurrentStep);
    (0, _react.useEffect)(()=>{
        // 5秒变成modal：ture，
        let timer1 = setInterval(()=>{
            if (flag === '3') {
                initCurrentStep++;
                setCurrentStep(initCurrentStep);
                if (initCurrentStep > 2) clearInterval(timer1);
            }
        }, 2000);
        // 清除定时器以防内存泄漏
        return ()=>{
            clearInterval(timer1);
        };
    }, []); // 空数组依赖项意味着只会在组件挂载和卸载时运行
    let svd = flagKt === '5' ? 22 : flag === '3' ? 17 : 17;
    let currs = flag === '4' ? 4 : currentStep;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                    children: "Intelligent Analysis"
                }, void 0, false, {
                    fileName: "src/pages/Admin/hvac/serverInfo.js",
                    lineNumber: 94,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center'
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
                            fileName: "src/pages/Admin/hvac/serverInfo.js",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                            children: "AC Units"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/hvac/serverInfo.js",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/hvac/serverInfo.js",
                    lineNumber: 95,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                    className: _indexlessasmodule.default.canvas,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            span: 12,
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Steps, {
                                    current: currs,
                                    percent: 60,
                                    direction: "vertical",
                                    items: [
                                        {
                                            title: 'Notify AI Algorithm',
                                            description: "Send alerts to the AI module"
                                        },
                                        {
                                            title: 'Analyze Data',
                                            description: "AI assesses real-time data"
                                        },
                                        {
                                            title: "Output Strategy",
                                            description: 'AI generates an energy-saving plan'
                                        },
                                        {
                                            title: 'Restore State',
                                            description: 'System returns to energy-saving mode'
                                        }
                                    ]
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverInfo.js",
                                    lineNumber: 109,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/Admin/hvac/serverInfo.js",
                                lineNumber: 108,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Admin/hvac/serverInfo.js",
                            lineNumber: 107,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            span: 12,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                                    style: {
                                        margin: '0 10px',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DemoGauge2, {
                                            svd: svd
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/serverInfo.js",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            style: {
                                                marginTop: '-50px'
                                            },
                                            children: [
                                                "AC temperature:",
                                                svd,
                                                " °C"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/Admin/hvac/serverInfo.js",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/hvac/serverInfo.js",
                                    lineNumber: 136,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                                    style: {
                                        margin: '0 10px',
                                        textAlign: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DemoGauge1, {
                                            svd: tt
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/serverInfo.js",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            style: {
                                                marginTop: '-50px'
                                            },
                                            children: [
                                                "ambient temperature: ",
                                                tt,
                                                " °C"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/Admin/hvac/serverInfo.js",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/hvac/serverInfo.js",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/serverInfo.js",
                            lineNumber: 135,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/hvac/serverInfo.js",
                    lineNumber: 106,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Admin/hvac/serverInfo.js",
            lineNumber: 93,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Admin/hvac/serverInfo.js",
        lineNumber: 90,
        columnNumber: 9
    }, this);
};
_s(ServerInfo, "aOCxKR8glnqKVZbbPwdgCUEWTuQ=");
_c2 = ServerInfo;
var _default = ServerInfo;
var _c;
var _c1;
var _c2;
$RefreshReg$(_c, "DemoGauge1");
$RefreshReg$(_c1, "DemoGauge2");
$RefreshReg$(_c2, "ServerInfo");
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
"src/pages/Admin/hvac/serverModal.js": function (module, exports, __mako_require__){
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
var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/hvac/index.less?asmodule"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const MyModalComponent = ({ flag })=>{
    _s();
    // 定义模态框的可见性状态
    const [isModalVisible, setIsModalVisible] = (0, _react.useState)(false);
    (0, _react.useEffect)(()=>{
        // 5秒变成modal：ture，
        let timer1 = setTimeout(()=>{
            if (flag === '1') setIsModalVisible(true);
        }, 1000);
        // 10秒关闭弹窗 modal变成false，flag为4
        // let timer2 = setTimeout(() => {
        //     if (flag === '1') {
        //         setIsModalVisible(false);
        //     }
        // }, 6000);
        // 清除定时器以防内存泄漏
        return ()=>{
            clearTimeout(timer1);
        // clearTimeout(timer2);
        };
    }, []); // 空数组依赖项意味着只会在组件挂载和卸载时运行
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: isModalVisible ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {
                    children: "Intelligent Analysis Results"
                }, void 0, false, {
                    fileName: "src/pages/Admin/hvac/serverModal.js",
                    lineNumber: 42,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center'
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
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 44,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h2", {
                            children: "IT Equipment: A 03"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 51,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/hvac/serverModal.js",
                    lineNumber: 43,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    children: [
                        "Operation Status: ",
                        flag === '1' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            className: _indexlessasmodule.default.blinkText,
                            style: {
                                color: "green"
                            },
                            children: "Running   ->   Hibernating"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 56,
                            columnNumber: 33
                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            style: {
                                color: "green"
                            },
                            children: "Hibernating"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 58,
                            columnNumber: 33
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/hvac/serverModal.js",
                    lineNumber: 54,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
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
                                                children: "CPU Usage"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/serverModal.js",
                                                lineNumber: 64,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: "2 %"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/serverModal.js",
                                                lineNumber: 65,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 63,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 62,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.card,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: "GPU Usage"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/serverModal.js",
                                                lineNumber: 70,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: "1 %"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/serverModal.js",
                                                lineNumber: 71,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 69,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 68,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 61,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.card,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: "RAM Usage"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/serverModal.js",
                                                lineNumber: 78,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: "5 %"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/serverModal.js",
                                                lineNumber: 79,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 77,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 76,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 12,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.card,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: "Storage Usage"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/serverModal.js",
                                                lineNumber: 84,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                children: "5 %"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/hvac/serverModal.js",
                                                lineNumber: 85,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 83,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 82,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 75,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/hvac/serverModal.js",
                    lineNumber: 60,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {}, void 0, false, {
                    fileName: "src/pages/Admin/hvac/serverModal.js",
                    lineNumber: 90,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                    children: "Control Command"
                }, void 0, false, {
                    fileName: "src/pages/Admin/hvac/serverModal.js",
                    lineNumber: 91,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h4", {
                            children: "Hibernation Threshold  ✔"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 93,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 6,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: "CPU Usage  "
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 96,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 95,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 4,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: "≤"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 99,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 98,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 7,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                                            defaultValue: '5%'
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/serverModal.js",
                                            lineNumber: 102,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 102,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 101,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 7,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                                            defaultValue: '10 Mins'
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/serverModal.js",
                                            lineNumber: 105,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 105,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 104,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 94,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            style: {
                                margin: '10px -8px'
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 6,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: "GPU Usage  "
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 111,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 110,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 4,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: "≤"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 114,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 113,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 7,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                                            defaultValue: '1%'
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/serverModal.js",
                                            lineNumber: 117,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 117,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 116,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 7,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                                            defaultValue: '10 Mins'
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/serverModal.js",
                                            lineNumber: 120,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 120,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 119,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 109,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            gutter: 16,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 6,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: "RAM Usage  "
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 125,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 124,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 4,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: "≤"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 128,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 127,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 7,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                                            defaultValue: '10%'
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/serverModal.js",
                                            lineNumber: 131,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 131,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 130,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 7,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Input, {
                                            defaultValue: '10 Mins'
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/hvac/serverModal.js",
                                            lineNumber: 134,
                                            columnNumber: 42
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/hvac/serverModal.js",
                                        lineNumber: 134,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/hvac/serverModal.js",
                                    lineNumber: 133,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/hvac/serverModal.js",
                            lineNumber: 123,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/hvac/serverModal.js",
                    lineNumber: 92,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Admin/hvac/serverModal.js",
            lineNumber: 41,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Skeleton, {}, void 0, false, {
            fileName: "src/pages/Admin/hvac/serverModal.js",
            lineNumber: 186,
            columnNumber: 21
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Admin/hvac/serverModal.js",
        lineNumber: 36,
        columnNumber: 9
    }, this);
};
_s(MyModalComponent, "DwYyXKZhqxNq7bk7RJfmi0CjwE8=");
_c = MyModalComponent;
var _default = MyModalComponent;
var _c;
$RefreshReg$(_c, "MyModalComponent");
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
//# sourceMappingURL=p__Admin__hvac__index-async.js.map