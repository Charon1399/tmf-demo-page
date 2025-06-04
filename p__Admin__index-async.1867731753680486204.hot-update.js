globalThis.makoModuleHotUpdate('p__Admin__index', {
    modules: {
        "src/pages/Admin/Chat/chat.tsx": function(module, exports, __mako_require__) {
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
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var _chatlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Chat/chat.less?asmodule"));
            "";
            var _AgentChatContext = __mako_require__("src/contexts/AgentChatContext.tsx");
            var _constants = __mako_require__("src/contexts/constants.tsx");
            var _MasterAgentLog = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Chat/MasterAgentLog.tsx"));
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            var _s = $RefreshSig$();
            const AgentsChat = ({ changeMenu })=>{
                _s();
                const { messages, loadScenario } = (0, _AgentChatContext.useAgentChat)();
                const [currentScenario, setCurrentScenario] = (0, _react.useState)(Number(localStorage.getItem(_constants.SCENARIO_STORAGE_KEY)));
                const [showSourceLog, setShowSourceLog] = (0, _react.useState)(false);
                (0, _react.useEffect)(()=>{
                    scrollToBottom();
                }, [
                    messages
                ]);
                // load scenario
                (0, _react.useEffect)(()=>{
                    if (currentScenario) loadScenario(currentScenario);
                    if (currentScenario === _constants.Scenario.resourceCompleted) setTimeout(()=>{
                        localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.serverCanBeHibernated.toString());
                        setCurrentScenario(_constants.Scenario.serverCanBeHibernated);
                    }, 3000);
                    else if (currentScenario === _constants.Scenario.serverHibernated) setTimeout(()=>{
                        localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.temperatureAbnormal.toString());
                        setCurrentScenario(_constants.Scenario.temperatureAbnormal);
                    }, 3000);
                    else if (currentScenario === _constants.Scenario.temperatureRecovered) setTimeout(()=>{
                        localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.bssMetricAbnormal.toString());
                        setCurrentScenario(_constants.Scenario.bssMetricAbnormal);
                    }, 3000);
                }, [
                    loadScenario,
                    currentScenario
                ]);
                // automatically menu change
                (0, _react.useEffect)(()=>{
                    if (currentScenario === _constants.Scenario.orderReceived) {
                        const resourceStatus = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY);
                        if (!resourceStatus || resourceStatus && Number(resourceStatus) === _constants.ResourceAgentStatus.init) {
                            // set resource agent status to bss plan generated
                            localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY, _constants.ResourceAgentStatus.bssPlanGenerated.toString());
                            let statusTimestamps = new Map();
                            const statusTimestampsStr = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY);
                            if (statusTimestampsStr && statusTimestampsStr !== '[]') statusTimestamps = new Map(JSON.parse(statusTimestampsStr));
                            statusTimestamps.set(_constants.ResourceAgentStatus.bssPlanGenerated.toString(), new Date().toLocaleString());
                            localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY, JSON.stringify(Array.from(statusTimestamps.entries())));
                        }
                    // setTimeout(() => {
                    //   changeMenu('resource-agent', true);
                    // }, 3000);
                    } else if (currentScenario === _constants.Scenario.temperatureAbnormal) ;
                    else if (currentScenario === _constants.Scenario.serverCanBeHibernated) ;
                    else _constants.Scenario.bssMetricAbnormal;
                }, [
                    currentScenario
                ]);
                const scrollToBottom = ()=>{
                    const scrollableCard = document.getElementById('scrollableCard');
                    if (scrollableCard) scrollableCard.scrollTop = scrollableCard.scrollHeight;
                };
                // 获取 Agent 头像
                const getAgentAvatar = (type)=>{
                    switch(type){
                        case 'master':
                            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RobotOutlined, {}, void 0, false, {
                                    fileName: "src/pages/Admin/Chat/chat.tsx",
                                    lineNumber: 87,
                                    columnNumber: 30
                                }, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/Admin/Chat/chat.tsx",
                                lineNumber: 87,
                                columnNumber: 16
                            }, this);
                        case 'bss':
                            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CloudServerOutlined, {}, void 0, false, {
                                    fileName: "src/pages/Admin/Chat/chat.tsx",
                                    lineNumber: 89,
                                    columnNumber: 30
                                }, void 0),
                                style: {
                                    backgroundColor: "#6a7b8c"
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Admin/Chat/chat.tsx",
                                lineNumber: 89,
                                columnNumber: 16
                            }, this);
                        case 'resource':
                            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CloudServerOutlined, {}, void 0, false, {
                                    fileName: "src/pages/Admin/Chat/chat.tsx",
                                    lineNumber: 91,
                                    columnNumber: 30
                                }, void 0),
                                style: {
                                    backgroundColor: "#6a8c6a"
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Admin/Chat/chat.tsx",
                                lineNumber: 91,
                                columnNumber: 16
                            }, this);
                        case 'assurance':
                            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.MonitorOutlined, {}, void 0, false, {
                                    fileName: "src/pages/Admin/Chat/chat.tsx",
                                    lineNumber: 93,
                                    columnNumber: 30
                                }, void 0),
                                style: {
                                    backgroundColor: "#8c6b6a"
                                }
                            }, void 0, false, {
                                fileName: "src/pages/Admin/Chat/chat.tsx",
                                lineNumber: 93,
                                columnNumber: 16
                            }, this);
                        default:
                            return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RobotOutlined, {}, void 0, false, {
                                    fileName: "src/pages/Admin/Chat/chat.tsx",
                                    lineNumber: 95,
                                    columnNumber: 30
                                }, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/Admin/Chat/chat.tsx",
                                lineNumber: 95,
                                columnNumber: 16
                            }, this);
                    }
                };
                const getMessageClass = (type)=>{
                    switch(type){
                        case 'master':
                            return _chatlessasmodule.default.master;
                        case 'bss':
                            return _chatlessasmodule.default.bss;
                        case 'resource':
                            return _chatlessasmodule.default.resource;
                        case 'assurance':
                            return _chatlessasmodule.default.assurance;
                        default:
                            return '';
                    }
                };
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                    className: _chatlessasmodule.default.container,
                    id: 'scrollableCard',
                    children: [
                        showSourceLog ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.FloatButton, {
                            style: {
                                right: 64,
                                bottom: 64
                            },
                            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                fileName: "src/pages/Admin/Chat/chat.tsx",
                                lineNumber: 117,
                                columnNumber: 62
                            }, void 0),
                            onClick: ()=>setShowSourceLog(false)
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Chat/chat.tsx",
                            lineNumber: 117,
                            columnNumber: 9
                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.FloatButton, {
                            style: {
                                right: 64,
                                bottom: 64
                            },
                            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CodeOutlined, {}, void 0, false, {
                                fileName: "src/pages/Admin/Chat/chat.tsx",
                                lineNumber: 119,
                                columnNumber: 62
                            }, void 0),
                            onClick: ()=>setShowSourceLog(true)
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Chat/chat.tsx",
                            lineNumber: 119,
                            columnNumber: 9
                        }, this),
                        showSourceLog && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                            className: _chatlessasmodule.default.title,
                            children: "Master Agent"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Chat/chat.tsx",
                            lineNumber: 121,
                            columnNumber: 25
                        }, this),
                        showSourceLog && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_MasterAgentLog.default, {}, void 0, false, {
                            fileName: "src/pages/Admin/Chat/chat.tsx",
                            lineNumber: 122,
                            columnNumber: 25
                        }, this),
                        !showSourceLog && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _chatlessasmodule.default.messages,
                            children: messages.map((message)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: `${_chatlessasmodule.default.message} ${getMessageClass(message.type)} ${message.type === 'master' ? _chatlessasmodule.default.master : _chatlessasmodule.default.other}`,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: _chatlessasmodule.default.avatar,
                                            children: getAgentAvatar(message.type)
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/Chat/chat.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: _chatlessasmodule.default.messageContent,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    className: _chatlessasmodule.default.messageHeader,
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            className: _chatlessasmodule.default.sender,
                                                            children: message.sender
                                                        }, void 0, false, {
                                                            fileName: "src/pages/Admin/Chat/chat.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            className: _chatlessasmodule.default.timestamp,
                                                            children: message.timestamp
                                                        }, void 0, false, {
                                                            fileName: "src/pages/Admin/Chat/chat.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/Admin/Chat/chat.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    className: _chatlessasmodule.default.messageText,
                                                    children: message.content
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/Chat/chat.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/Admin/Chat/chat.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, message.id, true, {
                                    fileName: "src/pages/Admin/Chat/chat.tsx",
                                    lineNumber: 126,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "src/pages/Admin/Chat/chat.tsx",
                            lineNumber: 124,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/Chat/chat.tsx",
                    lineNumber: 115,
                    columnNumber: 5
                }, this);
            };
            _s(AgentsChat, "LNEZSTqKy+tG607GIoe/oGcz2qw=", false, function() {
                return [
                    _AgentChatContext.useAgentChat
                ];
            });
            _c = AgentsChat;
            var _default = AgentsChat;
            var _c;
            $RefreshReg$(_c, "AgentsChat");
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
    runtime._h = '17835990755651353780';
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

//# sourceMappingURL=p__Admin__index-async.1867731753680486204.hot-update.js.map