globalThis.makoModuleHotUpdate('p__Admin__index', {
    modules: {
        "src/pages/Admin/ResourceAgent/index.tsx": function(module, exports, __mako_require__) {
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
            var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/index.less?asmodule"));
            var _constants = __mako_require__("src/contexts/constants.tsx");
            var _TaskDetail = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskDetail.tsx"));
            var _constant = __mako_require__("src/pages/Admin/ResourceAgent/constant.tsx");
            var _TaskWorkflow = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskWorkflow.js"));
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _ResourceAgentLog = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/ResourceAgentLog.tsx"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            var _s = $RefreshSig$();
            const ResourceAgent = ({ changeMenu })=>{
                _s();
                const [readyStatus, setReadyStatus] = (0, _react.useState)(()=>{
                    const storedStatus = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY);
                    return parseInt(storedStatus || _constants.ResourceAgentStatus.init.toString());
                });
                const [tab, setTab] = (0, _react.useState)(_constant.Tab.TaskList);
                const [showSourceLog, setShowSourceLog] = (0, _react.useState)(false);
                (0, _react.useEffect)(()=>{
                    if (_constants.ResourceAgentStatus.bssPlanGenerated <= readyStatus && readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated && tab === _constant.Tab.TaskList) setTimeout(()=>{
                        setTab(_constant.Tab.TaskDetail);
                    }, 1500);
                    else if (readyStatus === _constants.ResourceAgentStatus.resourceSolutionGenerated && tab === _constant.Tab.TaskDetail) ;
                    else if (readyStatus === _constants.ResourceAgentStatus.taskStarted && tab === _constant.Tab.TaskList) setTimeout(()=>{
                        setTab(_constant.Tab.TaskWorkflow);
                    }, 1500);
                    else if (readyStatus === _constants.ResourceAgentStatus.taskCompleted && tab === _constant.Tab.TaskWorkflow) ;
                    else if (readyStatus === _constants.ResourceAgentStatus.taskCompleted && tab === _constant.Tab.TaskList) {
                        if (localStorage.getItem(_constants.SCENARIO_STORAGE_KEY) === _constants.Scenario.orderReceived.toString()) localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.resourceCompleted.toString());
                    // setTimeout(() => {
                    //   changeMenu('agents-chat', false);
                    // }, 2000)
                    }
                }, [
                    readyStatus,
                    tab
                ]);
                let statusTimestamps = new Map();
                const statusTimestampsStr = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY);
                if (statusTimestampsStr && statusTimestampsStr !== '[]') statusTimestamps = new Map(JSON.parse(statusTimestampsStr));
                const tableData = [
                    {
                        key: 1,
                        no: 1,
                        taskId: new Date(statusTimestamps.get(_constants.ResourceAgentStatus.bssPlanGenerated.toString())).getTime(),
                        taskType: 'create',
                        productName: 'AI Medical Model Training',
                        taskStatus: readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.statusProcessing,
                            children: "CREATING"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this) : readyStatus === _constants.ResourceAgentStatus.resourceSolutionGenerated ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.statusNotStarted,
                            children: "NOT STARTED"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this) : readyStatus < _constants.ResourceAgentStatus.taskCompleted ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.statusProcessing,
                            children: "PROCESSING"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                            lineNumber: 65,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.statusCompleted,
                            children: "COMPLETED"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                            lineNumber: 66,
                            columnNumber: 17
                        }, this),
                        creationTime: statusTimestamps.get(_constants.ResourceAgentStatus.bssPlanGenerated.toString()) || '',
                        completionTime: statusTimestamps.get(_constants.ResourceAgentStatus.taskCompleted.toString()) || ''
                    }
                ];
                const actionColumn = ()=>{
                    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                type: "link",
                                onClick: ()=>setTab(_constant.Tab.TaskDetail),
                                className: _indexlessasmodule.default.actionButton,
                                children: "Detail"
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                lineNumber: 74,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                type: "link",
                                onClick: ()=>{
                                    setReadyStatus(_constants.ResourceAgentStatus.taskStarted);
                                    localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY, _constants.ResourceAgentStatus.taskStarted.toString());
                                    let statusTimestamps = new Map();
                                    const statusTimestampsStr = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY);
                                    if (statusTimestampsStr && statusTimestampsStr !== '[]') statusTimestamps = new Map(JSON.parse(statusTimestampsStr));
                                    statusTimestamps.set(_constants.ResourceAgentStatus.taskStarted.toString(), new Date().toLocaleString());
                                    localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY, JSON.stringify(Array.from(statusTimestamps.entries())));
                                },
                                disabled: readyStatus !== _constants.ResourceAgentStatus.resourceSolutionGenerated,
                                className: _indexlessasmodule.default.actionButton,
                                children: "Start"
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                lineNumber: 75,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                type: "link",
                                onClick: ()=>setTab(_constant.Tab.TaskWorkflow),
                                disabled: readyStatus !== _constants.ResourceAgentStatus.taskStarted,
                                className: _indexlessasmodule.default.actionButton,
                                children: "Workflow"
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                lineNumber: 93,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true);
                };
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: _indexlessasmodule.default.container,
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                            className: _indexlessasmodule.default.title,
                            children: "Resource Agent"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                            lineNumber: 112,
                            columnNumber: 7
                        }, this),
                        showSourceLog && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_ResourceAgentLog.default, {}, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this),
                        !showSourceLog && tab === _constant.Tab.TaskList && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: _indexlessasmodule.default.breadcrumb,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "Task List"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 116,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: _indexlessasmodule.default.innerContainer,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table, {
                                        className: _indexlessasmodule.default.table,
                                        dataSource: readyStatus >= _constants.ResourceAgentStatus.bssPlanGenerated ? tableData : [],
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                                title: "NO.",
                                                dataIndex: "no"
                                            }, "no", false, {
                                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                                title: "Task ID",
                                                dataIndex: "taskId"
                                            }, "taskId", false, {
                                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                                title: "Task Type",
                                                dataIndex: "taskType"
                                            }, "taskType", false, {
                                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                                title: "Product Name",
                                                dataIndex: "productName"
                                            }, "productName", false, {
                                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                                lineNumber: 124,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                                title: "Task Status",
                                                dataIndex: "taskStatus"
                                            }, "taskStatus", false, {
                                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                                lineNumber: 125,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                                title: "Creation Time",
                                                dataIndex: "creationTime"
                                            }, "creationTime", false, {
                                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                                title: "Completion Time",
                                                dataIndex: "completionTime"
                                            }, "completionTime", false, {
                                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                                lineNumber: 127,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                                title: "Action",
                                                render: ()=>actionColumn()
                                            }, "action", false, {
                                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                        lineNumber: 120,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 119,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true),
                        !showSourceLog && tab === _constant.Tab.TaskDetail && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: _indexlessasmodule.default.breadcrumb,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                            onClick: ()=>setTab(_constant.Tab.TaskList),
                                            children: "Task List"
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                            lineNumber: 137,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                            children: " \\ Task Detail"
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                            lineNumber: 138,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 136,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: _indexlessasmodule.default.innerContainer,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_TaskDetail.default, {
                                        readyStatus: readyStatus,
                                        setReadyStatus: setReadyStatus
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 140,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true),
                        !showSourceLog && tab === _constant.Tab.TaskWorkflow && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: _indexlessasmodule.default.breadcrumb,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                            onClick: ()=>setTab(_constant.Tab.TaskList),
                                            children: "Task List"
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                            lineNumber: 148,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                            children: " \\ Workflow"
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                            lineNumber: 149,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 147,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_TaskWorkflow.default, {
                                        readyStatus: readyStatus,
                                        setReadyStatus: setReadyStatus
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 151,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                    lineNumber: 106,
                    columnNumber: 5
                }, this);
            };
            _s(ResourceAgent, "bGCIboLETzP89JIa2ibfXFsC8uM=");
            _c = ResourceAgent;
            var _default = ResourceAgent;
            var _c;
            $RefreshReg$(_c, "ResourceAgent");
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
    runtime._h = '15410503137710534637';
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

//# sourceMappingURL=p__Admin__index-async.17181184101106928077.hot-update.js.map