globalThis.makoModuleHotUpdate('p__Admin__index', {
    modules: {
        "src/pages/Admin/ResourceAgent/TaskWorkflow.js": function(module, exports, __mako_require__) {
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
            var _TaskWorkflowlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskWorkflow.less?asmodule"));
            var _antd = __mako_require__("node_modules/antd/es/index.js");
            var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
            var _constants = __mako_require__("src/contexts/constants.tsx");
            var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
            var _main = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/Graph/main.js"));
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
            const displayCom = (current_step)=>{
                const desStatus = (step_n)=>{
                    // 小于step等待，等于进行中，大于完成
                    if (current_step >= 10) return "finish";
                    return current_step < step_n ? 'wait' : current_step === step_n ? "process" : 'finish';
                };
                return [
                    {
                        title: 'Start',
                        status: desStatus(6),
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RightCircleOutlined, {}, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 21,
                            columnNumber: 23
                        }, this)
                    },
                    {
                        title: 'Create Computing',
                        status: desStatus(7),
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ApiOutlined, {}, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 26,
                            columnNumber: 23
                        }, this)
                    },
                    {
                        title: 'Create Network',
                        status: desStatus(8),
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.OneToOneOutlined, {}, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 31,
                            columnNumber: 23
                        }, this)
                    },
                    {
                        title: 'Deploy Application',
                        status: desStatus(9),
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.AppstoreOutlined, {}, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 36,
                            columnNumber: 23
                        }, this)
                    },
                    {
                        title: 'Complete',
                        status: desStatus(10),
                        icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.InteractionOutlined, {}, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 41,
                            columnNumber: 23
                        }, this)
                    }
                ];
            };
            const DisplayOrch = ({ current_step })=>{
                _s();
                let cfProgress = 0;
                let netProgress = 0;
                let appProgress = 0;
                const [cfProgressS, setCfProgress] = (0, _react.useState)(0);
                const [netProgressS, setNetProgress] = (0, _react.useState)(0);
                const [appProgressS, setAppProgress] = (0, _react.useState)(0);
                (0, _react.useEffect)(()=>{
                    // 创建一个新的定时器，在每一秒钟执行一次函数来更新时间状态。
                    const timerIdxxx = setInterval(()=>{
                        if (current_step === 7) {
                            cfProgress = cfProgress + 30;
                            if (cfProgress >= 100) cfProgress = 100;
                            setCfProgress(cfProgress);
                        }
                        if (current_step === 8) {
                            netProgress = netProgress + 30;
                            if (netProgress >= 100) netProgress = 100;
                            setNetProgress(netProgress);
                        }
                        if (current_step === 9) {
                            appProgress = appProgress + 30;
                            if (appProgress >= 100) appProgress = 100;
                            setAppProgress(appProgress);
                        }
                    }, 400);
                    // 清除定时器以防止内存泄漏。
                    return ()=>clearInterval(timerIdxxx);
                }, [
                    current_step
                ]);
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            className: _TaskWorkflowlessasmodule.default.orch,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8,
                                    children: "Create Computing"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 89,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8,
                                    children: "Node Name: NX Computing"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8,
                                    children: [
                                        "Progress: ",
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                            percent: cfProgressS
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                            lineNumber: 96,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            className: _TaskWorkflowlessasmodule.default.orch,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8,
                                    children: "Create Network"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8,
                                    children: "Path: Beijing-Hebei-Shanxi-Shanxi-Ningxia"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8,
                                    children: [
                                        "Progress: ",
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                            percent: netProgressS
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                            lineNumber: 107,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                            className: _TaskWorkflowlessasmodule.default.orch,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8,
                                    children: "Deploy Application"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                    span: 8,
                                    children: [
                                        "Progress: ",
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
                                            percent: appProgressS
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                            lineNumber: 118,
                                            columnNumber: 31
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true);
            };
            _s(DisplayOrch, "Aad97m9TUuVjTb+KumkIZKPZZxU=");
            _c = DisplayOrch;
            const displayInteractionLogs = (current_step, showDetail)=>{
                const step_map = new Map(JSON.parse(localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY)));
                const one = {
                    title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: step_map.get('5')
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 129,
                        columnNumber: 16
                    }, this),
                    description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: [
                            "Start ",
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                onClick: ()=>showDetail('5'),
                                children: "Detail"
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                lineNumber: 131,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this)
                };
                const two = {
                    title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: step_map.get('7')
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 135,
                        columnNumber: 16
                    }, this),
                    description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: "Compute Power Activation Begins"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 137,
                        columnNumber: 13
                    }, this)
                };
                const thre = {
                    title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: step_map.get('8')
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 143,
                        columnNumber: 16
                    }, this),
                    description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: "Network Activation Begins"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 145,
                        columnNumber: 13
                    }, this)
                };
                const fo = {
                    title: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: step_map.get('9')
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 151,
                        columnNumber: 16
                    }, this),
                    description: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        children: "Application Deployment Begins"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 153,
                        columnNumber: 13
                    }, this)
                };
                let temp = parseInt(current_step);
                if (temp < 6) return [
                    one
                ];
                else if (temp === 6) return [
                    one
                ];
                else if (temp === 7) return [
                    one,
                    two
                ];
                else if (temp === 8) return [
                    one,
                    two,
                    thre
                ];
                else if (temp === 9) return [
                    one,
                    two,
                    thre,
                    fo
                ];
                else if (temp > 9) return [
                    one,
                    two,
                    thre,
                    fo
                ];
            };
            const TaskWorkflow = ({ readyStatus, setReadyStatus })=>{
                _s1();
                let initConut = parseInt(localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY));
                const [count, setCount] = (0, _react.useState)(initConut + 1);
                const totalExecutions = 9;
                // 进来的值从local中拿
                let executionCount = initConut + 1;
                (0, _react.useEffect)(()=>{
                    // 创建一个新的定时器，在每一秒钟执行一次函数来更新时间状态。
                    const timerId = setInterval(()=>{
                        // 如果大于9直接不定时走了
                        if (executionCount >= totalExecutions) clearInterval(timerId);
                        executionCount++;
                        // 放key
                        setCount(executionCount);
                        localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY, executionCount);
                        setReadyStatus(executionCount);
                        // 拿出来时间继续往里放
                        let statusTimestamps = new Map();
                        const statusTimestampsStr = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY);
                        if (statusTimestampsStr) statusTimestamps = new Map(JSON.parse(statusTimestampsStr));
                        // 往里放值
                        statusTimestamps.set(executionCount.toString(), new Date().toLocaleString());
                        localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY, JSON.stringify(Array.from(statusTimestamps.entries())));
                    }, 3000);
                    // 清除定时器以防止内存泄漏。
                    return ()=>clearInterval(timerId);
                }, []);
                const [isModalVisible, setIsModalVisible] = (0, _react.useState)(false);
                const [logF, setLogF] = (0, _react.useState)('');
                const handleCancel = ()=>{
                    setIsModalVisible(false);
                };
                const handleOK = (logflag)=>{
                    setIsModalVisible(true);
                    setLogF(logflag);
                };
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                span: 12,
                                style: {
                                    overflowY: "scroll"
                                },
                                className: _TaskWorkflowlessasmodule.default.container,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                                children: "Orchestration Process"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                                lineNumber: 237,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Steps, {
                                                labelPlacement: "vertical",
                                                size: "small",
                                                current: parseInt(count),
                                                items: displayCom(count)
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                                lineNumber: 238,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                        lineNumber: 236,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                        lineNumber: 245,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                                children: "Orchestration Progress and Details"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                                lineNumber: 247,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(DisplayOrch, {
                                                current_step: parseInt(count)
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                                lineNumber: 248,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                        lineNumber: 246,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                        lineNumber: 250,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                                children: "Interaction Logs"
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                                lineNumber: 252,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Steps, {
                                                progressDot: true,
                                                size: "small",
                                                current: parseInt(count),
                                                direction: "vertical",
                                                items: displayInteractionLogs(count, handleOK)
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                                lineNumber: 253,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
                                                title: "log detail",
                                                open: isModalVisible,
                                                footer: null,
                                                onCancel: handleCancel,
                                                width: "80%",
                                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("pre", {
                                                    children: `"@context": {
    "tmf": "http://www.tmforum.org/ns/tmf921#",
    "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "xsd": "http://www.w3.org/2001/XMLSchema#",
    "dct": "http://purl.org/dc/terms/",
    "locn": "http://www.w3.org/ns/locn#",
    "sla": "http://www.sla-ontologies.org/ontology/SLA#",
    "prov": "http://www.w3.org/ns/prov#",
    "ex": "http://example.com/ns#",
    "identifier": "dct:identifier",
    "title": "dct:title",
    "created": {
      "@id": "dct:created",
      "@type": "xsd:dateTime"
    },
    "name": "rdfs:label",
    "description": "dct:description",
    "priority": "tmf:hasPriority",
    "category": "tmf:hasCategory",
    "requestedService": "tmf:requestedService",
    "relatedParty": "tmf:relatedParty",
    "serviceLocation": "tmf:serviceLocation",
    "governedBy": "tmf:governedBy",
    "requiresResource": "tmf:requiresResource",
    "supportedBy": "tmf:supportedBy",
    "serviceStatus": "tmf:serviceStatus",
    "serviceCharacteristic": "tmf:hasServiceCharacteristic",
    "conformsTo": "tmf:conformsTo",
    "contactMedium": "tmf:hasContactMedium",
    "contactType": "tmf:contactType",
    "value": "tmf:value",
    "address": "locn:address",
    "fullAddress": "locn:fullAddress",
    "locatorDesignator": "locn:locatorDesignator",
    "thoroughfare": "locn:thoroughfare",
    "locality": "locn:locality",
    "adminUnitL2": "locn:adminUnitL2",
    "postCode": "locn:postCode",
    "adminUnitL1": "locn:adminUnitL1",
    "geometry": "locn:geometry",
    "serviceLevelObjective": "sla:hasServiceLevelObjective",
    "hasTarget": "sla:hasTarget",
    "hasMeasurementUnit": "sla:hasMeasurementUnit",
    "hasThreshold": "sla:hasThreshold",
    "warningLevel": "sla:warningLevel",
    "criticalLevel": "sla:criticalLevel",
    "resourceCharacteristic": "tmf:hasResourceCharacteristic"
  },
  "@id": "ex:serviceRequest-SVC-REQ-20250604-001",
  "@type": "tmf:ServiceRequest",
  "identifier": "SVC-REQ-20250604-001",
  "title": "5G Medical Private Network and AI Cloud Resource Deployment Service Request",
  "created": "2025-06-04T10:30:00Z",
  "priority": "high",
  "category": "tmf:NetworkService",
  "requestedService": {
    "@id": "ex:service-SVC-5GAI-20250604",
    "@type": "tmf:TelecommunicationService",
    "identifier": "SVC-5GAI-20250604",
    "title": "5G+AI Medical Informatization Service",
    "description": "Comprehensive service including 5G private network, AI cloud resources, cloud platform integration, and operation and maintenance",
    "serviceStatus": "tmf:requested",
    "serviceCharacteristic": [
      {
        "@type": "tmf:ServiceCharacteristic",
        "name": "deploymentTimeframe",
        "value": "Complete the deployment of the 5G private network and slice configuration within 3 working days"
      },
      {
        "@type": "tmf:ServiceCharacteristic",
        "name": "greenDataCenter",
        "value": "Qing Shan Green Data Center"
      },
      {
        "@type": "tmf:ServiceCharacteristic",
        "name": "interconnectionTechnology",
        "value": "SD-WAN high-speed interconnection"
      },
      {
        "@type": "tmf:ServiceCharacteristic",
        "name": "systemInterfacing",
        "value": "Complete the docking between the cloud platform and the PACS system within 5 working days"
      },
      {
        "@type": "tmf:ServiceCharacteristic",
        "name": "maintenanceService",
        "value": "7×24-hour operation and maintenance with a fault response time of ≤5 minutes"
      },
      {
        "@type": "tmf:ServiceCharacteristic",
        "name": "energyEfficiencyReport",
        "value": "Provide an energy efficiency report quarterly"
      }
    ],
    "conformsTo": {
      "@id": "ex:specification-SPS-5GAI-2023",
      "@type": "tmf:ServiceSpecification",
      "name": "5G+AI Medical Service Specification"
    }
  },
  "relatedParty": [
    {
      "@id": "ex:customer-CUST-001",
      "@type": "tmf:Customer",
      "identifier": "CUST-001",
      "name": "Qingxiu District Science and Technology Hospital, Qingshan City",
      "contactMedium": [
        {
          "@type": "tmf:ContactMedium",
          "contactType": "email",
          "value": "contact@hospital.example.com"
        },
        {
          "@type": "tmf:ContactMedium",
          "contactType": "phone",
          "value": "+86-123-4567-8901"
        }
      ]
    },
    {
      "@id": "ex:provider-PROV-001",
      "@type": "tmf:ServiceProvider",
      "identifier": "PROV-001",
      "name": "Service Provider Name"
    }
  ],
  "serviceLocation": {
    "@id": "ex:location-LOC-001",
    "@type": "locn:Location",
    "identifier": "LOC-001",
    "name": "Service Application Location",
    "address": {
      "@type": "locn:Address",
      "fullAddress": "No. 88 Keji Road, Qingshan City, Guangxi Zhuang Autonomous Region, 530000, China",
      "locatorDesignator": "88",
      "thoroughfare": "Keji Road",
      "locality": "Qingshan City",
      "adminUnitL2": "Guangxi Zhuang Autonomous Region",
      "postCode": "530000",
      "adminUnitL1": "China"
    },
    "geometry": "POINT(108.2946 22.8455)"
  },
  "governedBy": {
    "@id": "ex:sla-SLA-2025-001",
    "@type": "sla:ServiceLevelAgreement",
    "identifier": "SLA-2025-001",
    "name": "5G+AI Medical Service SLA",
    "serviceLevelObjective": [
      {
        "@type": "sla:ServiceLevelObjective",
        "name": "5G Network Latency",
        "hasTarget": "latency < 10ms",
        "hasMeasurementUnit": "ms",
        "hasThreshold": {
          "@type": "sla:Threshold",
          "warningLevel": "8ms",
          "criticalLevel": "9ms"
        }
      },
      {
        "@type": "sla:ServiceLevelObjective",
        "name": "5G Network Bandwidth",
        "hasTarget": "bandwidth ≥ 1Gbps",
        "hasMeasurementUnit": "Gbps"
      },
      {
        "@type": "sla:ServiceLevelObjective",
        "name": "5G Packet Loss Rate",
        "hasTarget": "packet loss rate < 0.01%",
        "hasMeasurementUnit": "%"
      },
      {
        "@type": "sla:ServiceLevelObjective",
        "name": "AI Inference Response Time",
        "hasTarget": "inference response ≤ 3 seconds",
        "hasMeasurementUnit": "s"
      },
      {
        "@type": "sla:ServiceLevelObjective",
        "name": "AI Training Throughput",
        "hasTarget": "training throughput ≥ 100 images per minute",
        "hasMeasurementUnit": "images/minute"
      },
      {
        "@type": "sla:ServiceLevelObjective",
        "name": "Business Availability",
        "hasTarget": "business availability ≥ 99.9%",
        "hasMeasurementUnit": "%"
      },
      {
        "@type": "sla:ServiceLevelObjective",
        "name": "Data Storage Reliability",
        "hasTarget": "data storage reliability ≥ 99.9999%",
        "hasMeasurementUnit": "%"
      },
      {
        "@type": "sla:ServiceLevelObjective",
        "name": "Energy Saving Indicator",
        "hasTarget": "overall system energy consumption reduced by > 25% compared to traditional solutions",
        "hasMeasurementUnit": "%"
      }
    ]
  },
  "requiresResource": [
    {
      "@id": "ex:resource-RES-DC-001",
      "@type": "tmf:DataCenter",
      "identifier": "RES-DC-001",
      "name": "Qing Shan Green Data Center",
      "resourceCharacteristic": [
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "greenCertification",
          "value": "Green Data Center Certification"
        },
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "energySavingSolution",
          "value": "Real-time intelligent energy saving solution"
        }
      ]
    },
    {
      "@id": "ex:resource-RES-CLOUD-001",
      "@type": "tmf:CloudResourcePool",
      "identifier": "RES-CLOUD-001",
      "name": "Qing Shan Green Cloud Resource Pool"
    },
    {
      "@id": "ex:resource-RES-COMPUTE-001",
      "@type": "tmf:ComputeResource",
      "identifier": "RES-COMPUTE-001",
      "name": "AI Computing Resources",
      "resourceCharacteristic": [
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "GPU",
          "value": "4×NVIDIA A100"
        },
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "CPU",
          "value": "64-core"
        },
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "memory",
          "value": "256GB"
        }
      ]
    },
    {
      "@id": "ex:resource-RES-STORAGE-001",
      "@type": "tmf:StorageResource",
      "identifier": "RES-STORAGE-001",
      "name": "Medical Data Storage",
      "resourceCharacteristic": [
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "capacity",
          "value": "200TB"
        },
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "storageType",
          "value": "SSD Solid State Drive"
        },
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "encryption",
          "value": "AES-256 Encryption"
        }
      ]
    },
    {
      "@id": "ex:resource-RES-NETWORK-001",
      "@type": "tmf:NetworkResource",
      "identifier": "RES-NETWORK-001",
      "name": "5G Network",
      "resourceCharacteristic": [
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "networkType",
          "value": "5G SA Standalone Networking"
        },
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "specialFunction",
          "value": "Intelligent Power Saving Technology"
        }
      ]
    },
    {
      "@id": "ex:resource-RES-NETWORK-002",
      "@type": "tmf:NetworkResource",
      "identifier": "RES-NETWORK-002",
      "name": "WAN Interconnection",
      "resourceCharacteristic": [
        {
          "@type": "tmf:ResourceCharacteristic",
          "name": "networkTechnology",
          "value": "SD-WAN"
        }
      ]
    }
  ],
  "supportedBy": [
    {
      "@id": "ex:service-SUP-001",
      "@type": "tmf:DisasterRecoveryService",
      "identifier": "SUP-001",
      "name": "Active-Active Disaster Recovery Service"
    },
    {
      "@id": "ex:service-SUP-002",
      "@type": "tmf:DataBackupService",
      "identifier": "SUP-002",
      "name": "Data Backup Service",
      "serviceCharacteristic": [
        {
          "@type": "tmf:ServiceCharacteristic",
          "name": "backupFrequency",
          "value": "Daily incremental backup, weekly full-volume off-site backup"
        }
      ]
    }
  ]
}`
                                                }, void 0, false, {
                                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                                    lineNumber: 267,
                                                    columnNumber: 29
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                                lineNumber: 260,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                        lineNumber: 251,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                lineNumber: 235,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                                span: 12,
                                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h3", {
                                            children: "Network and Computing Orchestration Process"
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                            lineNumber: 605,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_main.default, {
                                            current_step: parseInt(count)
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                            lineNumber: 606,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 604,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                lineNumber: 603,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 234,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                    lineNumber: 233,
                    columnNumber: 9
                }, this);
            };
            _s1(TaskWorkflow, "eZUL7jXfGu0mHEsGi3XDZdlqSdg=");
            _c1 = TaskWorkflow;
            var _default = TaskWorkflow;
            var _c;
            var _c1;
            $RefreshReg$(_c, "DisplayOrch");
            $RefreshReg$(_c1, "TaskWorkflow");
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
    runtime._h = '10282179569916290731';
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

//# sourceMappingURL=p__Admin__index-async.3167972499623303974.hot-update.js.map