globalThis.makoModuleHotUpdate('p__Admin__index', {
    modules: {
        "src/pages/Admin/ResourceAgent/TaskDetail.tsx": function(module, exports, __mako_require__) {
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
            var _TaskDetaillessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskDetail.less?asmodule"));
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
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
            const TaskDetail = ({ readyStatus, setReadyStatus, styles = _TaskDetaillessasmodule.default })=>{
                _s();
                (0, _react.useEffect)(()=>{
                    let intervalId = null;
                    if (readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated) intervalId = setInterval(()=>{
                        setReadyStatus((prevReadyStatus)=>{
                            let newReadyStatus = prevReadyStatus + 1;
                            if (intervalId && newReadyStatus >= _constants.ResourceAgentStatus.resourceSolutionGenerated) {
                                clearInterval(intervalId);
                                newReadyStatus = _constants.ResourceAgentStatus.resourceSolutionGenerated;
                            }
                            // update status stored in localStorage
                            localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY, newReadyStatus.toString());
                            // update status timestamp stored in localStorage
                            let statusTimestamps = new Map();
                            const statusTimestampsStr = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY);
                            if (statusTimestampsStr && statusTimestampsStr !== '[]') statusTimestamps = new Map(JSON.parse(statusTimestampsStr));
                            statusTimestamps.set(newReadyStatus.toString(), new Date().toLocaleString());
                            localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY, JSON.stringify(Array.from(statusTimestamps.entries())));
                            return newReadyStatus;
                        });
                    }, 1500);
                    return ()=>{
                        if (intervalId) clearInterval(intervalId);
                    };
                }, []);
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                    gutter: 24,
                    align: "middle",
                    justify: "center",
                    style: {
                        flexWrap: 'nowrap'
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            style: {
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: styles.boxLeft,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.boxTitle,
                                        style: readyStatus === _constants.ResourceAgentStatus.bssPlanGenerated ? {} : {
                                            color: '#bfc8b7'
                                        },
                                        children: "Business Order"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 45,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.boxText,
                                        style: readyStatus === _constants.ResourceAgentStatus.bssPlanGenerated ? {} : {
                                            color: '#bfc8b7'
                                        },
                                        children: readyStatus >= _constants.ResourceAgentStatus.bssPlanGenerated && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "Operator Resources​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 69
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• 5G Medical Private Network​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 75
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• 200TB IDC Encrypted Storage​​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 77
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• AI Cloud Resources​​​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 69
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "Cloud Vendor Services​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 72
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Tenc Cloud AI Imaging Platform​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 79
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Model Fine - Tuning Service​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 76
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "Value - Added Services​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 73
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Privacy Computing Service​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 74
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Energy - Saving Optimization Service​​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 86
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 46,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                lineNumber: 44,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: styles.flowContainer,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowRightOutlined, {
                                        className: styles.flowArrow
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 66,
                                        columnNumber: 21
                                    }, this),
                                    readyStatus < _constants.ResourceAgentStatus.resourceMatched ? readyStatus === _constants.ResourceAgentStatus.bssPlanGenerated ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: styles.flowStepNotReady,
                                            children: "Resource Matching"
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                            lineNumber: 69,
                                            columnNumber: 35
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 69,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.flowStepNotReady,
                                        children: "Resource Matching"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 70,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.flowStep,
                                        children: "Resource Matching"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowRightOutlined, {
                                        className: readyStatus < 1 ? styles.flowArrowNotReady : styles.flowArrow
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 72,
                                        columnNumber: 21
                                    }, this),
                                    readyStatus < _constants.ResourceAgentStatus.resourceVerificated ? readyStatus === _constants.ResourceAgentStatus.resourceMatched ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: styles.flowStepNotReady,
                                            children: "Resource Verification"
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                            lineNumber: 75,
                                            columnNumber: 35
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.flowStepNotReady,
                                        children: "Resource Verification"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.flowStep,
                                        children: "Resource Verification"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 77,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowRightOutlined, {
                                        className: readyStatus < 2 ? styles.flowArrowNotReady : styles.flowArrow
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 78,
                                        columnNumber: 21
                                    }, this),
                                    readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated ? readyStatus === _constants.ResourceAgentStatus.resourceVerificated ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: styles.flowStepNotReady,
                                            children: "Resource Solution Generation"
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                            lineNumber: 81,
                                            columnNumber: 35
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 81,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.flowStepNotReady,
                                        children: "Resource Solution Generation"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.flowStep,
                                        children: "Resource Solution Generation"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 83,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ArrowRightOutlined, {
                                        className: readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated ? styles.flowArrowNotReady : styles.flowArrow
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 84,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                lineNumber: 65,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                            style: {
                                padding: 0
                            },
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: styles.boxRight,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.boxTitle,
                                        style: readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated ? {
                                            color: '#bfc8b7'
                                        } : {},
                                        children: "Resource Service Order"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 89,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: styles.boxText,
                                        style: readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated ? {
                                            color: '#bfc8b7'
                                        } : {},
                                        children: readyStatus >= _constants.ResourceAgentStatus.resourceSolutionGenerated && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "Service Content"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 65
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Complete the deployment of the 5G private network and slice configuration within 3 working days, and simultaneously enable the intelligent power - saving function."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 211
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: '• Allocate to the AI Cloud Resources of the Qing Shan Green Data Center, a "Green Data Center", and achieve high - speed interconnection via SD - WAN.'
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 196
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Complete the docking between the cloud platform and the PACS system within 5 working days."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 96,
                                                    columnNumber: 138
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Provide 7×24 - hour operation and maintenance, with a fault response time of ≤5 minutes."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 136
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Provide an energy - efficiency report every quarter to optimize resource utilization."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 133
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "Performance Requirements"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 99,
                                                    columnNumber: 74
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• 5G Private Network: Latency < 10ms, bandwidth ≥ 1Gbps, packet loss rate < 0.01%."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 132
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• AI Cloud: Inference response ≤ 3 seconds, training throughput ≥ 100 images per minute."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 134
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Business Availability ≥ 99.9%, data storage reliability ≥ 99.9999%."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 115
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Energy - saving Indicator: The overall system energy consumption is reduced by more than 25% compared to traditional solutions."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 175
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "Application Location"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 104,
                                                    columnNumber: 70
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• No. 88 Keji Road, Qingxiu District, Qingshan City."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 98
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "Resource Requirements"
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 71
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: '• Data Center: The Qing Shan Green Data Center certified as a "Green Data Center"; real - time intelligent energy - saving solution.'
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 178
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Cloud Resource Pool: Qing Shan Green Cloud Resource Pool."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 105
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Computing Resources: 8 NVIDIA A100 GPUs, 64 - core CPUs, 256GB of memory."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 121
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Storage Resources: 200TB IDC Encrypted Storage (SSD solid - state drives)."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 122
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Network Technologies: 5G SA standalone networking (including i ntelligent power - saving technology), SD - WAN interconnection."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 175
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                    children: "• Protection Requirements: Dual - active disaster recovery, daily incremental data backup, and weekly full - volume off - site backup."
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 180
                                                }, this)
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 90,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                lineNumber: 88,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this);
            };
            _s(TaskDetail, "OD7bBpZva5O2jO+Puf00hKivP7c=");
            _c = TaskDetail;
            var _default = TaskDetail;
            var _c;
            $RefreshReg$(_c, "TaskDetail");
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
    runtime._h = '8369378747534358189';
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

//# sourceMappingURL=p__Admin__index-async.14581958329507672982.hot-update.js.map