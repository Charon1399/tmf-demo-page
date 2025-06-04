globalThis.makoModuleHotUpdate('src/.umi/umi.ts?hmr', {
    modules: {
        "src/app.tsx": function(module, exports, __mako_require__) {
            "use strict";
            __mako_require__.d(exports, "__esModule", {
                value: true
            });
            function _export(target, all) {
                for(var name in all)Object.defineProperty(target, name, {
                    enumerable: true,
                    get: all[name]
                });
            }
            __mako_require__.e(exports, {
                getInitialState: function() {
                    return getInitialState;
                },
                layout: function() {
                    return layout;
                },
                request: function() {
                    return request;
                }
            });
            var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var _max = __mako_require__("src/.umi/exports.ts");
            var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
            var _defaultSettings = /*#__PURE__*/ _interop_require_default._(__mako_require__("config/defaultSettings.ts"));
            var _requestErrorConfig = __mako_require__("src/requestErrorConfig.ts");
            var _global = __mako_require__("src/global.tsx");
            var _AgentChatContext = __mako_require__("src/contexts/AgentChatContext.tsx");
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _constants = __mako_require__("src/contexts/constants.tsx");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const isDev = true;
            async function getInitialState() {
                // 根据当前路径决定系统类型
                const pathname = window.location.pathname;
                const isAdminPath = pathname.includes('admin');
                const currentSystem = isAdminPath ? 'admin' : 'user';
                const settings = {
                    ..._defaultSettings.default
                };
                settings.title = currentSystem === 'user' ? 'User System' : 'Admin System';
                settings.colorPrimary = currentSystem === 'user' ? _global.SYSTEM_PRIMARY_COLORS.user : _global.SYSTEM_PRIMARY_COLORS.admin;
                return {
                    settings,
                    currentSystem
                };
            }
            const layout = ({ initialState, setInitialState })=>{
                var _initialState_settings;
                return {
                    actionsRender: ()=>[
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                style: {
                                    marginRight: '16px'
                                },
                                onClick: ()=>{
                                    localStorage.setItem(_constants.USER_CHAT_STORAGE_KEY, JSON.stringify([]));
                                    localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, '0');
                                    localStorage.setItem(_constants.TIMESTAMPS_STORAGE_KEY, JSON.stringify(Array.from(new Map().entries())));
                                    localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY, _constants.ResourceAgentStatus.init.toString());
                                    let statusTimestamps = new Map();
                                    statusTimestamps.set(_constants.ResourceAgentStatus.init.toString(), new Date().toLocaleString());
                                    localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY, JSON.stringify(Array.from(statusTimestamps.entries())));
                                    window.location.reload();
                                },
                                children: "reset"
                            }, void 0, false, {
                                fileName: "src/app.tsx",
                                lineNumber: 43,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Select, {
                                title: "测试切换场景",
                                style: {
                                    minWidth: '160px'
                                },
                                onChange: (value)=>{
                                    localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, value);
                                    window.location.reload();
                                },
                                children: Object.values(_constants.Scenario).filter((value)=>typeof value === 'string').map((value, index)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Select.Option, {
                                        value: index,
                                        children: value
                                    }, index, false, {
                                        fileName: "src/app.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this))
                            }, void 0, false, {
                                fileName: "src/app.tsx",
                                lineNumber: 55,
                                columnNumber: 7
                            }, this)
                        ],
                    bgLayoutImgList: [
                        {
                            src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
                            left: 85,
                            bottom: 100,
                            height: '303px'
                        },
                        {
                            src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
                            bottom: -68,
                            right: -45,
                            height: '303px'
                        },
                        {
                            src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
                            bottom: 0,
                            left: 0,
                            width: '331px'
                        }
                    ],
                    // links: isDev
                    //   ? [
                    //       <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
                    //         <LinkOutlined />
                    //         <span>OpenAPI 文档</span>
                    //       </Link>,
                    //     ]
                    //   : [],
                    menuHeaderRender: undefined,
                    childrenRender: (children)=>{
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_AgentChatContext.AgentChatProvider, {
                            children: children
                        }, void 0, false, {
                            fileName: "src/app.tsx",
                            lineNumber: 97,
                            columnNumber: 9
                        }, this);
                    },
                    ...initialState === null || initialState === void 0 ? void 0 : initialState.settings,
                    // 覆盖settings中的默认配置
                    logo: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            padding: '0 8px'
                        },
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserSwitchOutlined, {
                            style: {
                                fontSize: '24px',
                                color: initialState === null || initialState === void 0 ? void 0 : (_initialState_settings = initialState.settings) === null || _initialState_settings === void 0 ? void 0 : _initialState_settings.colorPrimary
                            }
                        }, void 0, false, {
                            fileName: "src/app.tsx",
                            lineNumber: 113,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "src/app.tsx",
                        lineNumber: 105,
                        columnNumber: 7
                    }, this),
                    onMenuHeaderClick: ()=>{
                        const newSystem = (initialState === null || initialState === void 0 ? void 0 : initialState.currentSystem) === 'user' ? 'admin' : 'user';
                        const newSettings = {
                            ..._defaultSettings.default
                        };
                        newSettings.title = newSystem === 'user' ? 'User System' : 'Admin System';
                        newSettings.colorPrimary = newSystem === 'user' ? _global.SYSTEM_PRIMARY_COLORS.user : _global.SYSTEM_PRIMARY_COLORS.admin;
                        setInitialState((preInitialState)=>({
                                ...preInitialState,
                                currentSystem: newSystem,
                                settings: newSettings
                            }));
                        _max.history.push(newSystem === 'user' ? '/user/chat' : '/admin');
                    }
                };
            };
            const request = {
                ..._requestErrorConfig.errorConfig
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
        }
    }
}, function(runtime) {
    runtime._h = '12030793173859677919';
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

//# sourceMappingURL=umi.3983536416333373877.hot-update.js.map