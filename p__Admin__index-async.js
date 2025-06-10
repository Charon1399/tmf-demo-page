((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__Admin__index'],
{ "src/pages/Admin/AssuranceAgent/AssuranceAgentLog.tsx": function (module, exports, __mako_require__){
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
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _react1 = __mako_require__("node_modules/@monaco-editor/react/dist/index.mjs");
var _constants = __mako_require__("src/contexts/constants.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const AssuranceAgentLog = ()=>{
    let scenarioTimestamps = new Map();
    const scenarioTimestampsStr = localStorage.getItem(_constants.TIMESTAMPS_STORAGE_KEY);
    if (scenarioTimestampsStr && scenarioTimestampsStr !== '[]') scenarioTimestamps = new Map(JSON.parse(scenarioTimestampsStr));
    const now = new Date();
    let startTimestamp = now.toLocaleString();
    if (scenarioTimestamps.get(_constants.Scenario.resourceCompleted.toString())) startTimestamp = scenarioTimestamps.get(_constants.Scenario.resourceCompleted.toString());
    let startTimestampPrefix = startTimestamp.split(':').slice(0, -1).join(':');
    const logStr = `${startTimestampPrefix}:20.156 | INFO | main:monitor_kpi:68 - Received a request for AI medical imaging business operation from a medical client, and started monitoring key performance indicators.

${startTimestampPrefix}:22.378 | INFO | ran.monitoring:radio_resource:124 - RAN-side monitoring:

Wireless access bandwidth utilization: 25% currently, threshold 80%
Network latency: 18ms, target ≤50ms
Number of user connections: 428/10000, sufficient resources

${startTimestampPrefix}:25.621 | INFO | idc.monitoring:server_status:156 - IDC data center monitoring:
▶ GPU server cluster: A100*8, utilization 30% (target ≤70%)
▶ Storage IOPS: 2450/10000, meeting the read/write requirements of imaging data
▶ Data center PUE value: 1.28, in line with the green data center standard

${startTimestampPrefix}:28.893 | INFO | center_cloud.monitoring:resource_allocate:192 - Central cloud resource allocation:

CPU cores: 256 cores allocated / 512 cores total
Memory: 1TB / 2TB, normal loading of imaging analysis models
Network egress bandwidth: 500Mbps dedicated channel reserved

${startTimestampPrefix}:32.105 | INFO | edge_computing.monitoring:latency_optimize:224 - Edge computing node optimization:
✅ Deployed edge node EC-20250527-01 in the medical client's region
✅ Network latency from edge node to client hospital: 8ms (target ≤15ms)
✅ Imaging preprocessing task offloading rate: planned to reach 70%

${startTimestampPrefix}:35.378 | WARNING | kpi.analysis:potential_risk:256 - Potential risk analysis:
▶ Possible GPU resource peaks during nighttime batch imaging processing
▶ Encryption latency for cross-regional data transmission needs continuous monitoring
▶ It is recommended to expand the bandwidth of the data synchronization link between the edge node and central cloud to 1Gbps

${startTimestampPrefix}:38.621 | INFO | assurance.decision:resource_adjust:289 - Execution of assurance decisions:
● Created an exclusive resource pool for AI medical imaging business: ID=POOL-MED-01
● Activated intelligent load balancing strategy, prioritizing A100 GPU resource scheduling
● Added 3 imaging preprocessing servers to the edge node (model: Dell R750xa)

${startTimestampPrefix}:41.893 | INFO | real_time.adjust:network_tune:321 - Real-time network adjustment:
◆ Opened a 1000Mbps dedicated fiber link from IDC to the hospital
◆ Enabled QoS policy to ensure priority for imaging data transmission
◆ Optimized edge node caching strategy to reduce duplicate data transmission

${startTimestampPrefix}:45.105 | INFO | performance.optimize:model_inference:356 - Performance optimization measures:
▶ Deployed a distributed inference framework to improve multi-modal imaging processing efficiency
▶ Enabled model quantization technology, reducing GPU memory usage by 30%
▶ Edge-central cloud collaborative inference solution has been activated

${startTimestampPrefix}:48.378 | INFO | kpi.report:generate_summary:389 - KPI summary report:
✔ Core indicator compliance rate: 98.7%
✔ Resource reservation rate: GPU 40%, storage 50%
✔ Business continuity assurance: RTO ≤15 minutes, RPO ≤5 minutes

${startTimestampPrefix}:51.621 | INFO | main:complete_assurance:421 - AI medical imaging business assurance completed, follow-up monitoring plan:
▶ Conduct full-link performance inspection every 15 minutes
▶ Generate daily resource usage trend analysis reports
▶ Conduct a fault simulation drill once a week
`;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react1.Editor, {
        // height="100vh"
        defaultLanguage: "yaml",
        defaultValue: logStr
    }, void 0, false, {
        fileName: "src/pages/Admin/AssuranceAgent/AssuranceAgentLog.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
};
_c = AssuranceAgentLog;
var _default = AssuranceAgentLog;
var _c;
$RefreshReg$(_c, "AssuranceAgentLog");
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
"src/pages/Admin/AssuranceAgent/index.less?asmodule": function (module, exports, __mako_require__){
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
    "siderTitle": `siderTitle-GyYq4WLT`,
    "alertContainer": `alertContainer-7lK4SE8l`,
    "ant-pro-sider": `ant-pro-sider-nMtDsPVU`,
    "container": `container-UKipj-vy`,
    "adminLayout": `adminLayout-PLTe58lj`,
    "bss-agent": `bss-agent-Be38lbPg`,
    "warningIcon": `warningIcon-Ok3xaVEg`,
    "ant-table-tbody": `ant-table-tbody-6T0u4EAX`,
    "assurance-agent": `assurance-agent-yVlkv0v0`,
    "ant-pro-layout": `ant-pro-layout-iWheIYi-`,
    "siderFooter": `siderFooter-fyaplH5x`,
    "root": `root-6k7ZURtP`,
    "card": `card-p6UkpolZ`,
    "mainMessage": `mainMessage-_DvFUIsG`,
    "contentExpanded": `contentExpanded-hkkj2wjZ`,
    "alert-pulse": `alert-pulse-HHsujzWI`,
    "ant-table": `ant-table-XBzrumDS`,
    "trigger": `trigger-O8BE6P3A`,
    "ant-pro-sider-fixed": `ant-pro-sider-fixed-qQgrwv48`,
    "sider": `sider-tqScFLG5`,
    "title": `title-SsZxCnRG`,
    "colorWeak": `colorWeak-zlaq6ut6`,
    "alertContent": `alertContent-UzUxKs7Q`,
    "ant-table-thead": `ant-table-thead-B8uHsfKC`,
    "subMessage": `subMessage-houv3hdJ`,
    "overlayAlert": `overlayAlert-6zp93_Va`,
    "ant-pro-layout-content": `ant-pro-layout-content-rj3UDDFT`,
    "resource-agent": `resource-agent-G4eBMV_u`,
    "ant-layout": `ant-layout-sVPoywHm`,
    "ant-layout-sider": `ant-layout-sider-HIlh-LM0`,
    "content": `content-JybcRPM9`
};

},
"src/pages/Admin/AssuranceAgent/index.tsx": function (module, exports, __mako_require__){
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
var _charts = __mako_require__("node_modules/@ant-design/charts/es/index.js");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/AssuranceAgent/index.less?asmodule"));
var _constants = __mako_require__("src/contexts/constants.tsx");
var _AssuranceAgentLog = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/AssuranceAgent/AssuranceAgentLog.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const AssuranceAgent = ({ changeMenu })=>{
    _s();
    const [currentScenario, setCurrentScenario] = (0, _react.useState)(Number(localStorage.getItem(_constants.SCENARIO_STORAGE_KEY)));
    // const currentScenario = Number(localStorage.getItem(SCENARIO_STORAGE_KEY));
    const [chartHeight, setChartHeight] = (0, _react.useState)(180);
    const [showSourceLog, setShowSourceLog] = (0, _react.useState)(false);
    const [minsAxis, setMinsAxis] = (0, _react.useState)([]);
    const [hoursAxis, setHoursAxis] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        currentScenario === _constants.Scenario.serverHibernated || _constants.Scenario.temperatureRecovered;
        // BSS time
        const now = new Date();
        if (currentScenario <= _constants.Scenario.serverCanBeHibernated) {
            setMinsAxis(getLastHourBy5Minutes(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 4, 10, 0)));
            setHoursAxis(getLast12Hours(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 4, 10, 0)));
        } else if (currentScenario === _constants.Scenario.serverHibernated) {
            setMinsAxis(getLastHourBy5Minutes(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 4, 35, 0)));
            setHoursAxis(getLast12Hours(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 4, 35, 0)));
        } else if (currentScenario <= _constants.Scenario.temperatureAbnormal) {
            setMinsAxis(getLastHourBy5Minutes(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 5, 0, 0)));
            setHoursAxis(getLast12Hours(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 5, 0, 0)));
        } else if (currentScenario === _constants.Scenario.temperatureRecovered) {
            setMinsAxis(getLastHourBy5Minutes(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 5, 25, 0)));
            setHoursAxis(getLast12Hours(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 5, 25, 0)));
        } else if (currentScenario === _constants.Scenario.bssMetricAbnormal) {
            setMinsAxis(getLastHourBy5Minutes(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 0, 0)));
            setHoursAxis(getLast12Hours(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 0, 0)));
        } else {
            setMinsAxis(getLastHourBy5Minutes(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 35, 0)));
            setHoursAxis(getLast12Hours(new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 10, 35, 0)));
        }
    }, [
        currentScenario
    ]);
    // // 在接收数据的标签页中
    // const channel = new BroadcastChannel('tab-communication');
    // channel.onmessage = (event) => {
    //   if (event.data.type === SCENARIO_STORAGE_KEY) {
    //     console.log('收到数据：', event.data.data);
    //   }
    // };
    // make chart height resize with window height
    (0, _react.useEffect)(()=>{
        const handleWindowResize = ()=>{
            setChartHeight((window.innerHeight - 232) / 2);
        };
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        // 定义事件处理函数
        const handleStorageChange = (event)=>{
            if (event.key === _constants.SCENARIO_STORAGE_KEY && event.newValue) setCurrentScenario(Number(event.newValue));
        };
        // 添加事件监听
        window.addEventListener('storage', handleStorageChange);
        return ()=>{
            window.removeEventListener('resize', handleWindowResize);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);
    // help fuctions
    const getLastHourBy5Minutes = (startTime)=>{
        const now = startTime || new Date();
        // Round down to the nearest 5 minutes
        const roundedMinutes = Math.floor(now.getMinutes() / 5) * 5;
        const baseTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), roundedMinutes, 0);
        const times = [];
        for(let i = 12; i >= 0; i--){
            const time = new Date(baseTime.getTime() - i * 300000);
            times.push(`${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`);
        }
        return times;
    };
    const getLast12Hours = (startTime)=>{
        const now = startTime || new Date();
        const hours = [];
        for(let i = 12; i >= 0; i--){
            const time = new Date(now.getTime() - i * 3600000);
            hours.push(time.getHours());
        }
        return hours;
    };
    // Energy saving scenario 1: temperature line chart
    let energySaveTempData = [];
    if (currentScenario === _constants.Scenario.temperatureAbnormal) energySaveTempData = [
        {
            time: minsAxis[0],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[1],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[2],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[3],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[4],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[5],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[6],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[7],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[8],
            temperature: 21,
            type: 'temperature'
        },
        {
            time: minsAxis[9],
            temperature: 20,
            type: 'temperature'
        },
        {
            time: minsAxis[10],
            temperature: 19,
            type: 'temperature'
        },
        {
            time: minsAxis[11],
            temperature: 18,
            type: 'temperature'
        },
        {
            time: minsAxis[12],
            temperature: 18,
            type: 'temperature'
        }
    ];
    else if (currentScenario === _constants.Scenario.temperatureRecovered) energySaveTempData = [
        {
            time: minsAxis[0],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[1],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[2],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[3],
            temperature: 21,
            type: 'temperature'
        },
        {
            time: minsAxis[4],
            temperature: 20,
            type: 'temperature'
        },
        {
            time: minsAxis[5],
            temperature: 19,
            type: 'temperature'
        },
        {
            time: minsAxis[6],
            temperature: 18,
            type: 'temperature'
        },
        {
            time: minsAxis[7],
            temperature: 18,
            type: 'temperature'
        },
        {
            time: minsAxis[8],
            temperature: 19,
            type: 'temperature'
        },
        {
            time: minsAxis[9],
            temperature: 21,
            type: 'temperature'
        },
        {
            time: minsAxis[10],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[11],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[12],
            temperature: 22,
            type: 'temperature'
        }
    ];
    else energySaveTempData = [
        {
            time: minsAxis[0],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[1],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[2],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[3],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[4],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[5],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[6],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[7],
            temperature: 22,
            type: 'temperature'
        },
        {
            time: minsAxis[8],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[9],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[10],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[11],
            temperature: 23,
            type: 'temperature'
        },
        {
            time: minsAxis[12],
            temperature: 23,
            type: 'temperature'
        }
    ];
    const energySaveTempThresholdData = [
        {
            time: energySaveTempData[0].time,
            temperature: 20,
            type: 'min'
        },
        {
            time: energySaveTempData[energySaveTempData.length - 1].time,
            temperature: 20,
            type: 'min'
        },
        {
            time: energySaveTempData[0].time,
            temperature: 24,
            type: 'max'
        },
        {
            time: energySaveTempData[energySaveTempData.length - 1].time,
            temperature: 24,
            type: 'max'
        }
    ];
    const energySaveTempConfig = {
        height: chartHeight,
        title: {
            title: "ambient temperature(℃)",
            align: "center",
            size: 12,
            titleFontSize: 12
        },
        theme: 'academy',
        margin: 0,
        data: [
            ...energySaveTempData,
            ...energySaveTempThresholdData
        ],
        xField: 'time',
        yField: 'temperature',
        seriesField: 'type',
        colorField: 'type',
        scale: {
            y: {
                domain: [
                    16,
                    26
                ]
            },
            color: {
                range: [
                    `rgba(78,121,167,1)`,
                    'rgba(177, 97, 94, 1)',
                    'rgba(177, 97, 94, 1)'
                ]
            }
        },
        axis: {
            y: {
                grid: true
            }
        },
        legend: {
            color: {
                title: false,
                position: 'bottom',
                layout: {
                    justifyContent: 'center'
                }
            }
        }
    };
    // Energy saving scenario 2: server pie chart
    let energySaveServerData = [];
    if (currentScenario === _constants.Scenario.serverCanBeHibernated) energySaveServerData = [
        {
            type: 'active',
            value: 5
        },
        {
            type: 'shutdown',
            value: 1
        }
    ];
    else if (currentScenario >= _constants.Scenario.serverHibernated) energySaveServerData = [
        {
            type: 'active',
            value: 4
        },
        {
            type: 'hibernated',
            value: 1
        },
        {
            type: 'shutdown',
            value: 1
        }
    ];
    else energySaveServerData = [
        {
            type: 'active',
            value: 5
        },
        {
            type: 'shutdown',
            value: 1
        }
    ];
    const energySaveServerConfig = {
        height: chartHeight,
        title: {
            title: "server status",
            align: "center",
            size: 12,
            titleFontSize: 12
        },
        margin: 0,
        theme: 'academy',
        data: energySaveServerData,
        angleField: 'value',
        colorField: 'type',
        scale: {
            color: {
                range: [
                    `rgba(78,121,167,1)`,
                    'grey',
                    'rgb(94, 177, 151)'
                ]
            }
        },
        innerRadius: 0.6,
        label: {
            text: 'value',
            style: {
                fontWeight: 'bold'
            }
        },
        legend: {
            color: {
                title: false,
                position: 'bottom',
                layout: {
                    justifyContent: 'center'
                }
            }
        }
    };
    // BSS metric 1: system latency
    let bssLatencyData = [];
    if (currentScenario === _constants.Scenario.bssMetricAbnormal) bssLatencyData = [
        {
            time: minsAxis[0],
            latency: 97,
            type: 'latency'
        },
        {
            time: minsAxis[1],
            latency: 102,
            type: 'latency'
        },
        {
            time: minsAxis[2],
            latency: 98,
            type: 'latency'
        },
        {
            time: minsAxis[3],
            latency: 88,
            type: 'latency'
        },
        {
            time: minsAxis[4],
            latency: 96,
            type: 'latency'
        },
        {
            time: minsAxis[5],
            latency: 105,
            type: 'latency'
        },
        {
            time: minsAxis[6],
            latency: 97,
            type: 'latency'
        },
        {
            time: minsAxis[7],
            latency: 120,
            type: 'latency'
        },
        {
            time: minsAxis[8],
            latency: 167,
            type: 'latency'
        },
        {
            time: minsAxis[9],
            latency: 344,
            type: 'latency'
        },
        {
            time: minsAxis[10],
            latency: 566,
            type: 'latency'
        },
        {
            time: minsAxis[11],
            latency: 540,
            type: 'latency'
        },
        {
            time: minsAxis[12],
            latency: 577,
            type: 'latency'
        }
    ];
    else if (currentScenario === _constants.Scenario.bssMetricRecovered) bssLatencyData = [
        {
            time: minsAxis[0],
            latency: 120,
            type: 'latency'
        },
        {
            time: minsAxis[1],
            latency: 167,
            type: 'latency'
        },
        {
            time: minsAxis[2],
            latency: 344,
            type: 'latency'
        },
        {
            time: minsAxis[3],
            latency: 566,
            type: 'latency'
        },
        {
            time: minsAxis[4],
            latency: 540,
            type: 'latency'
        },
        {
            time: minsAxis[5],
            latency: 544,
            type: 'latency'
        },
        {
            time: minsAxis[6],
            latency: 430,
            type: 'latency'
        },
        {
            time: minsAxis[7],
            latency: 208,
            type: 'latency'
        },
        {
            time: minsAxis[8],
            latency: 120,
            type: 'latency'
        },
        {
            time: minsAxis[9],
            latency: 100,
            type: 'latency'
        },
        {
            time: minsAxis[10],
            latency: 98,
            type: 'latency'
        },
        {
            time: minsAxis[11],
            latency: 105,
            type: 'latency'
        },
        {
            time: minsAxis[12],
            latency: 95,
            type: 'latency'
        }
    ];
    else bssLatencyData = [
        {
            time: minsAxis[0],
            latency: 100,
            type: 'latency'
        },
        {
            time: minsAxis[1],
            latency: 105,
            type: 'latency'
        },
        {
            time: minsAxis[2],
            latency: 99,
            type: 'latency'
        },
        {
            time: minsAxis[3],
            latency: 95,
            type: 'latency'
        },
        {
            time: minsAxis[4],
            latency: 102,
            type: 'latency'
        },
        {
            time: minsAxis[5],
            latency: 99,
            type: 'latency'
        },
        {
            time: minsAxis[6],
            latency: 80,
            type: 'latency'
        },
        {
            time: minsAxis[7],
            latency: 89,
            type: 'latency'
        },
        {
            time: minsAxis[8],
            latency: 97,
            type: 'latency'
        },
        {
            time: minsAxis[9],
            latency: 102,
            type: 'latency'
        },
        {
            time: minsAxis[10],
            latency: 98,
            type: 'latency'
        },
        {
            time: minsAxis[11],
            latency: 88,
            type: 'latency'
        },
        {
            time: minsAxis[12],
            latency: 96,
            type: 'latency'
        }
    ];
    const bssLatencyThresholdData = [
        {
            time: bssLatencyData[0].time,
            latency: 500,
            type: 'threshold'
        },
        {
            time: bssLatencyData[bssLatencyData.length - 1].time,
            latency: 500,
            type: 'threshold'
        }
    ];
    const bssLatencyConfig = {
        height: chartHeight,
        title: {
            title: "system latency(ms)",
            align: "center",
            size: 12,
            titleFontSize: 12
        },
        theme: 'academy',
        data: [
            ...bssLatencyData,
            ...bssLatencyThresholdData
        ],
        xField: 'time',
        yField: 'latency',
        seriesField: 'type',
        colorField: 'type',
        scale: {
            y: {
                domain: [
                    0,
                    600
                ]
            },
            color: {
                range: [
                    `rgba(78,121,167,1)`,
                    'rgba(177, 97, 94, 1)'
                ]
            }
        },
        axis: {
            y: {
                grid: true
            }
        },
        legend: {
            color: {
                title: false,
                position: 'bottom',
                layout: {
                    justifyContent: 'center'
                }
            }
        },
        margin: 0
    };
    // BSS metric 2: diagnostic accuracy rate
    let bssAccuracyData = [
        {
            time: `${hoursAxis[0]}`,
            rate: 84
        },
        {
            time: `${hoursAxis[1]}`,
            rate: 84
        },
        {
            time: `${hoursAxis[2]}`,
            rate: 83
        },
        {
            time: `${hoursAxis[3]}`,
            rate: 85
        },
        {
            time: `${hoursAxis[4]}`,
            rate: 87
        },
        {
            time: `${hoursAxis[5]}`,
            rate: 86
        },
        {
            time: `${hoursAxis[6]}`,
            rate: 89
        },
        {
            time: `${hoursAxis[7]}`,
            rate: 89
        },
        {
            time: `${hoursAxis[8]}`,
            rate: 90
        },
        {
            time: `${hoursAxis[9]}`,
            rate: 92
        },
        {
            time: `${hoursAxis[10]}`,
            rate: 91
        },
        {
            time: `${hoursAxis[11]}`,
            rate: 92
        },
        {
            time: `${hoursAxis[12]}`,
            rate: 93
        }
    ];
    const bssAccuracyConfig = {
        height: chartHeight,
        title: {
            title: "diagnostic accuracy rate(%)",
            align: "center",
            size: 12,
            titleFontSize: 12
        },
        theme: 'academy',
        margin: 0,
        data: bssAccuracyData,
        xField: 'time',
        yField: 'rate',
        scale: {
            y: {
                domain: [
                    0,
                    100
                ]
            }
        },
        style: {
            inset: 3
        }
    };
    // BSS metric 3: processed task number
    let bssTaskNumData = [];
    if (currentScenario === _constants.Scenario.bssMetricAbnormal) bssTaskNumData = [
        {
            time: `${minsAxis[0]}`,
            number: 7
        },
        {
            time: `${minsAxis[1]}`,
            number: 5
        },
        {
            time: `${minsAxis[2]}`,
            number: 4
        },
        {
            time: `${minsAxis[3]}`,
            number: 5
        },
        {
            time: `${minsAxis[4]}`,
            number: 3
        },
        {
            time: `${minsAxis[5]}`,
            number: 6
        },
        {
            time: `${minsAxis[6]}`,
            number: 5
        },
        {
            time: `${minsAxis[7]}`,
            number: 9
        },
        {
            time: `${minsAxis[8]}`,
            number: 15
        },
        {
            time: `${minsAxis[9]}`,
            number: 22
        },
        {
            time: `${minsAxis[10]}`,
            number: 26
        },
        {
            time: `${minsAxis[11]}`,
            number: 32
        },
        {
            time: `${minsAxis[12]}`,
            number: 35
        }
    ];
    else if (currentScenario === _constants.Scenario.bssMetricRecovered) bssTaskNumData = [
        {
            time: `${minsAxis[0]}`,
            number: 9
        },
        {
            time: `${minsAxis[1]}`,
            number: 15
        },
        {
            time: `${minsAxis[2]}`,
            number: 22
        },
        {
            time: `${minsAxis[3]}`,
            number: 26
        },
        {
            time: `${minsAxis[4]}`,
            number: 32
        },
        {
            time: `${minsAxis[5]}`,
            number: 35
        },
        {
            time: `${minsAxis[6]}`,
            number: 28
        },
        {
            time: `${minsAxis[7]}`,
            number: 20
        },
        {
            time: `${minsAxis[8]}`,
            number: 15
        },
        {
            time: `${minsAxis[9]}`,
            number: 9
        },
        {
            time: `${minsAxis[10]}`,
            number: 5
        },
        {
            time: `${minsAxis[11]}`,
            number: 4
        },
        {
            time: `${minsAxis[12]}`,
            number: 6
        }
    ];
    else bssTaskNumData = [
        {
            time: `${minsAxis[0]}`,
            number: 2
        },
        {
            time: `${minsAxis[1]}`,
            number: 3
        },
        {
            time: `${minsAxis[2]}`,
            number: 4
        },
        {
            time: `${minsAxis[3]}`,
            number: 2
        },
        {
            time: `${minsAxis[4]}`,
            number: 5
        },
        {
            time: `${minsAxis[5]}`,
            number: 1
        },
        {
            time: `${minsAxis[6]}`,
            number: 3
        },
        {
            time: `${minsAxis[7]}`,
            number: 6
        },
        {
            time: `${minsAxis[8]}`,
            number: 7
        },
        {
            time: `${minsAxis[9]}`,
            number: 5
        },
        {
            time: `${minsAxis[10]}`,
            number: 4
        },
        {
            time: `${minsAxis[11]}`,
            number: 5
        },
        {
            time: `${minsAxis[12]}`,
            number: 3
        }
    ];
    const bssTaskNumConfig = {
        height: chartHeight,
        title: {
            title: "processed task number(pieces)",
            align: "center",
            size: 12,
            titleFontSize: 12
        },
        theme: 'academy',
        margin: 0,
        data: bssTaskNumData,
        xField: 'time',
        yField: 'number',
        scale: {
            y: {
                domain: [
                    0,
                    40
                ]
            }
        },
        style: {
            inset: 3,
            fill: ({ number })=>{
                if (number >= 25) return 'rgba(177, 97, 94, 1)';
                else return 'rgba(78,121,167,1)';
            }
        }
    };
    // BSS metric 4: Misdiagnostic rate
    let bssMisdiagnosticData = [
        {
            time: `${hoursAxis[0]}`,
            rate: 6,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[1]}`,
            rate: 7,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[2]}`,
            rate: 6,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[3]}`,
            rate: 7,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[4]}`,
            rate: 5,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[5]}`,
            rate: 5,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[6]}`,
            rate: 4,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[7]}`,
            rate: 3,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[8]}`,
            rate: 3,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[9]}`,
            rate: 2,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[10]}`,
            rate: 3,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[11]}`,
            rate: 1,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[12]}`,
            rate: 2,
            type: 'false positive'
        },
        {
            time: `${hoursAxis[0]}`,
            rate: 10,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[1]}`,
            rate: 9,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[2]}`,
            rate: 11,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[3]}`,
            rate: 8,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[4]}`,
            rate: 8,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[5]}`,
            rate: 9,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[6]}`,
            rate: 7,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[7]}`,
            rate: 8,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[8]}`,
            rate: 7,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[9]}`,
            rate: 6,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[10]}`,
            rate: 6,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[11]}`,
            rate: 7,
            type: 'false negative'
        },
        {
            time: `${hoursAxis[12]}`,
            rate: 5,
            type: 'false negative'
        }
    ];
    const bssMisdiagnosticConfig = {
        height: chartHeight,
        title: {
            title: "misdiagnostic rate(%)",
            align: "center",
            size: 12,
            titleFontSize: 12
        },
        theme: 'academy',
        margin: 0,
        data: bssMisdiagnosticData,
        xField: 'time',
        yField: 'rate',
        colorField: 'type',
        scale: {
            y: {
                domain: [
                    0,
                    100
                ]
            }
        },
        group: true,
        style: {
            inset: 1
        },
        legend: {
            color: {
                title: false,
                position: 'bottom',
                layout: {
                    justifyContent: 'center'
                }
            }
        }
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: _indexlessasmodule.default.container,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                className: _indexlessasmodule.default.title,
                children: "Assurance Agent"
            }, void 0, false, {
                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, this),
            showSourceLog && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_AssuranceAgentLog.default, {}, void 0, false, {
                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                lineNumber: 576,
                columnNumber: 25
            }, this),
            !showSourceLog && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                gutter: [
                    24,
                    24
                ],
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        style: {
                            paddingRight: 0
                        },
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            title: "Energy Saving Metrics",
                            className: _indexlessasmodule.default.card,
                            style: {
                                backgroundColor: '#e0eee0'
                            },
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card.Grid, {
                                    hoverable: false,
                                    style: {
                                        width: "100%",
                                        position: 'relative'
                                    },
                                    children: [
                                        currentScenario === _constants.Scenario.temperatureAbnormal && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.alertContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WarningOutlined, {
                                                        className: _indexlessasmodule.default.warningIcon
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 25
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.alertContent,
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                className: _indexlessasmodule.default.mainMessage,
                                                                children: "Energy savings out of range"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                lineNumber: 588,
                                                                columnNumber: 27
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                className: _indexlessasmodule.default.subMessage,
                                                                children: "cause: HVAC temperature issue"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                lineNumber: 591,
                                                                columnNumber: 27
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 25
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 585,
                                                columnNumber: 23
                                            }, void 0),
                                            type: "warning",
                                            showIcon: false,
                                            className: _indexlessasmodule.default.overlayAlert,
                                            onClick: ()=>{
                                                window.open("/tmf-demo-page/admin/hvac?flag=3");
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                            lineNumber: 583,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Line, {
                                            ...energySaveTempConfig
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                            lineNumber: 605,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 581,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card.Grid, {
                                    hoverable: false,
                                    style: {
                                        width: "100%",
                                        position: 'relative'
                                    },
                                    children: [
                                        currentScenario === _constants.Scenario.serverCanBeHibernated && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
                                            message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.alertContainer,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WarningOutlined, {
                                                        className: _indexlessasmodule.default.warningIcon
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 25
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.alertContent,
                                                        children: [
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                className: _indexlessasmodule.default.mainMessage,
                                                                children: "Real-time Alert:"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                lineNumber: 614,
                                                                columnNumber: 27
                                                            }, void 0),
                                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                className: _indexlessasmodule.default.subMessage,
                                                                children: "Server ID A03 has reached hibernation threshold"
                                                            }, void 0, false, {
                                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                lineNumber: 617,
                                                                columnNumber: 27
                                                            }, void 0)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                        lineNumber: 613,
                                                        columnNumber: 25
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 611,
                                                columnNumber: 23
                                            }, void 0),
                                            type: "warning",
                                            showIcon: false,
                                            className: _indexlessasmodule.default.overlayAlert,
                                            onClick: ()=>{
                                                window.open("/tmf-demo-page/admin/hvac?flag=1");
                                            }
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                            lineNumber: 609,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Pie, {
                                            ...energySaveServerConfig
                                        }, void 0, false, {
                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                            lineNumber: 631,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 607,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                            lineNumber: 580,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                        lineNumber: 579,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 16,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                            title: "Business Metrics",
                            className: _indexlessasmodule.default.card,
                            style: {
                                backgroundColor: '#e3e7f0'
                            },
                            children: [
                                currentScenario === _constants.Scenario.bssMetricAbnormal && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Alert, {
                                    message: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                        className: _indexlessasmodule.default.alertContainer,
                                        children: [
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.WarningOutlined, {
                                                className: _indexlessasmodule.default.warningIcon
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 641,
                                                columnNumber: 23
                                            }, void 0),
                                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                className: _indexlessasmodule.default.alertContent,
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.mainMessage,
                                                        children: "Business Metrics Warning:"
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                        lineNumber: 643,
                                                        columnNumber: 25
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.subMessage,
                                                        children: "High system latency && High backlog of tasks."
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 25
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 642,
                                                columnNumber: 23
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                        lineNumber: 640,
                                        columnNumber: 21
                                    }, void 0),
                                    type: "warning",
                                    showIcon: false,
                                    className: _indexlessasmodule.default.overlayAlert,
                                    onClick: ()=>{
                                        window.open("/tmf-demo-page/admin/fault");
                                    }
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 638,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card.Grid, {
                                    hoverable: false,
                                    style: {
                                        width: "50%"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Line, {
                                        ...bssLatencyConfig
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                        lineNumber: 661,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card.Grid, {
                                    hoverable: false,
                                    style: {
                                        width: "50%"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Column, {
                                        ...bssAccuracyConfig
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                        lineNumber: 664,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 663,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card.Grid, {
                                    hoverable: false,
                                    style: {
                                        width: "50%"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Column, {
                                        ...bssTaskNumConfig
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                        lineNumber: 667,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 666,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card.Grid, {
                                    hoverable: false,
                                    style: {
                                        width: "50%"
                                    },
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Column, {
                                        ...bssMisdiagnosticConfig
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                        lineNumber: 670,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 669,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                            lineNumber: 636,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                        lineNumber: 635,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                lineNumber: 578,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
        lineNumber: 569,
        columnNumber: 5
    }, this);
};
_s(AssuranceAgent, "Y545uTWn0t8io6MwxoUcMo5je3M=");
_c = AssuranceAgent;
var _default = AssuranceAgent;
var _c;
$RefreshReg$(_c, "AssuranceAgent");
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
"src/pages/Admin/BSSAgent/BSSAgentLog.tsx": function (module, exports, __mako_require__){
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
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _react1 = __mako_require__("node_modules/@monaco-editor/react/dist/index.mjs");
var _constants = __mako_require__("src/contexts/constants.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const BSSAgentLog = ()=>{
    let scenarioTimestamps = new Map();
    const scenarioTimestampsStr = localStorage.getItem(_constants.TIMESTAMPS_STORAGE_KEY);
    if (scenarioTimestampsStr && scenarioTimestampsStr !== '[]') scenarioTimestamps = new Map(JSON.parse(scenarioTimestampsStr));
    const now = new Date();
    let startTimestamp = now.toLocaleString();
    if (scenarioTimestamps.get(_constants.Scenario.orderReceived.toString())) startTimestamp = scenarioTimestamps.get(_constants.Scenario.orderReceived.toString());
    const startTimestampPrefix = startTimestamp.split(':').slice(0, -1).join(':');
    const initTimestamp = new Date(new Date(startTimestamp).getTime() - 3600000);
    const initTimestampPrefix = initTimestamp.toLocaleString().split(':').slice(0, -1).join(':');
    const logStr = `${initTimestampPrefix}:32.697 | INFO     | __main__:initialize:25 - Initializing MCPAgent with sse connection...
${initTimestampPrefix}:35.010 | INFO     | __main__:register_tool:76 - Registered tool: TMF632_party_management_api
${initTimestampPrefix}:35.013 | INFO     | __main__:register_tool:76 - Registered tool: TMF921_intent_management_api
${initTimestampPrefix}:35.015 | INFO     | __main__:register_tool:76 - Registered tool: TMF620_product_catalog_management_api
${initTimestampPrefix}:35.015 | INFO     | __main__:register_tool:76 - Registered tool: TMF679_product_offering_qualification_management_api
${initTimestampPrefix}:35.016 | INFO     | __main__:register_tool:76 - Registered tool: initiate_process
${initTimestampPrefix}:35.016 | INFO     | __main__:run:159 - Starting BusinessAgent server (sse mode)      
INFO:mcp.server.lowlevel.server:Processing request of type ListToolsRequest
${initTimestampPrefix}:35.032 | INFO     | app.tool.mcp:_initialize_and_list_tools:124 - Connected to server with tools: ['TMF632_party_management_api', 'TMF921_intent_management_api', 'TMF620_product_catalog_management_api', 'TMF679_product_offering_qualification_management_api', 'initiate_process']  
INFO:mcp.server.lowlevel.server:Processing request of type ListToolsRequest
${initTimestampPrefix}:35.035 | INFO     | app.agent.mcp:_refresh_tools:118 - Added MCP tools: ['TMF632_party_management_api', 'TMF921_intent_management_api', 'TMF620_product_catalog_management_api', 'TMF679_product_offering_qualification_management_api', 'initiate_process']
${initTimestampPrefix}:35.035 | INFO     | __main__:initialize:36 - Connected to MCP server via sse
${startTimestampPrefix}:10.321 | INFO | main:handle_request:56 - Received a request to activate AI medical imaging services for a healthcare industry client
${startTimestampPrefix}:12.543 | INFO | customer.onboarding:TMF632_party_management_api:89 - Customer industry validated as healthcare, meeting the eligibility requirements for AI medical imaging services
${startTimestampPrefix}:15.762 | INFO | product.matching:TMF921_intent_management_api:124 - Parsed customer requirements: Need to activate AI medical imaging analysis services, including intelligent diagnostic functions for DR/CT/MRI images
${startTimestampPrefix}:18.921 | INFO | product.catalog:TMF620_product_catalog_management_api:156 - Matched product catalog: Recommended "Medical Imaging AI-Assisted Diagnosis Platform V3.0", including the following core modules:
- Intelligent image segmentation and lesion detection
- Deep learning assisted diagnosis models (supporting 20+ diseases)
- Structured report generation system
- Multi-modal image fusion analysis
${startTimestampPrefix}:22.105 | WARNING | compliance.check:data_security:203 - Triggered data security compliance check: Medical imaging data is sensitive information, requiring confirmation that the customer complies with the "Medical Health Data Security Management Specifications"
${startTimestampPrefix}:25.378 | INFO | customer.onboarding:gather_documents:245 - Customer document collection list generated:
✅ Medical institution practice license
✅ Data security commitment letter
✅ Image data samples (with desensitization processing)
✅ Technical contact information
${startTimestampPrefix}:28.591 | INFO | onboarding.workflow:initiate_process:287 - Activation process initialized, assigned dedicated account manager: AM-20250527-012
${startTimestampPrefix}:31.756 | INFO | technical docking:TMF679_product_offering_qualification_management_api:321 - Confirmation of preconditions for technical docking:
- Need to provide HIS/PACS system interface documentation
- Server configuration requirements: GPU cluster (NVIDIA A100*4)
- Network bandwidth: Dedicated line access ≥100Mbps
${startTimestampPrefix}:34.912 | INFO | billing.system:generate_quote:356 - Preliminary quotation generated:
▶ Basic service package: ¥128,000/year
▶ Custom model development: ¥30,000/disease
▶ Implementation and deployment fee: ¥25,000 (one-time)
${startTimestampPrefix}:38.103 | INFO | customer.onboarding:send_package:392 - Customer activation package sent to: medical_customer@healthcare.com, including:
● Business solution specification
● Data security agreement template
● Technical docking list
● Quotation and service terms
${startTimestampPrefix}:41.327 | INFO | workflow.tracking:create_task:428 - Activation task created:
Task ID: ONB-20250527-1145
Deadline: 2025-06-10
Status: Pending customer document submission
${startTimestampPrefix}:44.556 | INFO | main:complete_initial_response:461 - Initial response completed, expected subsequent key milestones:
▶ Document review
▶ Technical solution review
▶ Contract signing
▶ System deployment acceptance
`;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react1.Editor, {
        // height="100vh"
        defaultLanguage: "yaml",
        defaultValue: logStr
    }, void 0, false, {
        fileName: "src/pages/Admin/BSSAgent/BSSAgentLog.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, this);
};
_c = BSSAgentLog;
var _default = BSSAgentLog;
var _c;
$RefreshReg$(_c, "BSSAgentLog");
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
"src/pages/Admin/BSSAgent/TaskDetail.less?asmodule": function (module, exports, __mako_require__){
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
    "siderTitle": `siderTitle-6Ioy26wH`,
    "flowArrow": `flowArrow-58umIpKu`,
    "boxText": `boxText-F9mI2MS6`,
    "ant-pro-sider": `ant-pro-sider-x32NIhcj`,
    "adminLayout": `adminLayout-XlylsID3`,
    "bss-agent": `bss-agent-GdxEKjPi`,
    "ant-table-tbody": `ant-table-tbody-il-W81rJ`,
    "boxLeft": `boxLeft-HVdKeuWE`,
    "boxRight": `boxRight-LZDnCa3A`,
    "assurance-agent": `assurance-agent-mvVepoIK`,
    "ant-pro-layout": `ant-pro-layout-HkdOEtRD`,
    "siderFooter": `siderFooter-lTOIGgYb`,
    "boxTitle": `boxTitle-4SdQaKv5`,
    "flowStepNotReady": `flowStepNotReady-g0aZpLTS`,
    "root": `root--xu5iZdZ`,
    "flowArrowNotReady": `flowArrowNotReady-XVafJcTe`,
    "contentExpanded": `contentExpanded-pW-RM1fX`,
    "ant-table": `ant-table-iHhIRJz2`,
    "flowStep": `flowStep-mubaKVyC`,
    "trigger": `trigger-p-QlYYF0`,
    "ant-pro-sider-fixed": `ant-pro-sider-fixed-8KFRv2YJ`,
    "sider": `sider-6ELeCdFq`,
    "colorWeak": `colorWeak-HJ7sz3zb`,
    "ant-table-thead": `ant-table-thead-1i3jI8a4`,
    "flowContainer": `flowContainer-vuNd9WoT`,
    "ant-pro-layout-content": `ant-pro-layout-content-8tpV6nak`,
    "resource-agent": `resource-agent-7wNANWHT`,
    "ant-layout": `ant-layout-6BpEdS1Q`,
    "ant-layout-sider": `ant-layout-sider-wuKFlWQ3`,
    "content": `content-z0D8g5Rm`
};

},
"src/pages/Admin/BSSAgent/index.less?asmodule": function (module, exports, __mako_require__){
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
    "ant-table": `ant-table-sYrA2n_G`,
    "siderTitle": `siderTitle-VdC8IpuN`,
    "trigger": `trigger-b1BOMkx4`,
    "innerContainer": `innerContainer-awADispY`,
    "ant-pro-sider": `ant-pro-sider-YasoCapw`,
    "ant-pro-sider-fixed": `ant-pro-sider-fixed-kaWJnqKc`,
    "sider": `sider-zcPgfSs5`,
    "container": `container-hQhxlkNo`,
    "colorWeak": `colorWeak-KoN0o3jZ`,
    "adminLayout": `adminLayout-DKym9IaM`,
    "ant-table-thead": `ant-table-thead-sRpQcgln`,
    "bss-agent": `bss-agent-YdeVXCGr`,
    "title": `title-D2mlhFTj`,
    "ant-table-tbody": `ant-table-tbody-vGlQI6AG`,
    "assurance-agent": `assurance-agent-JUUJSpCS`,
    "ant-pro-layout": `ant-pro-layout-NlN6-80L`,
    "siderFooter": `siderFooter-0vO6_DJ8`,
    "ant-pro-layout-content": `ant-pro-layout-content-LR87BUuj`,
    "resource-agent": `resource-agent-mUhJYMLR`,
    "root": `root-HJlm6g8e`,
    "ant-layout": `ant-layout-eWJioOID`,
    "ant-layout-sider": `ant-layout-sider-YUNvWQqE`,
    "contentExpanded": `contentExpanded-5FFd3mes`,
    "content": `content-M9cCAG20`
};

},
"src/pages/Admin/BSSAgent/index.tsx": function (module, exports, __mako_require__){
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
var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/BSSAgent/index.less?asmodule"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _BSSAgentLog = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/BSSAgent/BSSAgentLog.tsx"));
var _constants = __mako_require__("src/contexts/constants.tsx");
var _TaskDetail = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskDetail.tsx"));
var _TaskDetaillessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/BSSAgent/TaskDetail.less?asmodule"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const BSSAgent = ()=>{
    _s();
    const [showSourceLog, setShowSourceLog] = (0, _react.useState)(false);
    const resourceReadyStatus = Number(localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY));
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        className: _indexlessasmodule.default.container,
        children: [
            showSourceLog ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.FloatButton, {
                style: {
                    right: 64,
                    bottom: 64
                },
                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                    fileName: "src/pages/Admin/BSSAgent/index.tsx",
                    lineNumber: 18,
                    columnNumber: 62
                }, void 0),
                onClick: ()=>setShowSourceLog(false)
            }, void 0, false, {
                fileName: "src/pages/Admin/BSSAgent/index.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.FloatButton, {
                style: {
                    right: 64,
                    bottom: 64
                },
                icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CodeOutlined, {}, void 0, false, {
                    fileName: "src/pages/Admin/BSSAgent/index.tsx",
                    lineNumber: 20,
                    columnNumber: 62
                }, void 0),
                onClick: ()=>setShowSourceLog(true)
            }, void 0, false, {
                fileName: "src/pages/Admin/BSSAgent/index.tsx",
                lineNumber: 20,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                className: _indexlessasmodule.default.title,
                children: "BSS Agent"
            }, void 0, false, {
                fileName: "src/pages/Admin/BSSAgent/index.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            showSourceLog && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BSSAgentLog.default, {}, void 0, false, {
                fileName: "src/pages/Admin/BSSAgent/index.tsx",
                lineNumber: 23,
                columnNumber: 25
            }, this),
            !showSourceLog && resourceReadyStatus >= _constants.ResourceAgentStatus.resourceSolutionGenerated && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                className: _indexlessasmodule.default.innerContainer,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_TaskDetail.default, {
                    readyStatus: resourceReadyStatus,
                    setReadyStatus: ()=>{},
                    styles: _TaskDetaillessasmodule.default
                }, void 0, false, {
                    fileName: "src/pages/Admin/BSSAgent/index.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/pages/Admin/BSSAgent/index.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Admin/BSSAgent/index.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
};
_s(BSSAgent, "prOTEojhpw5I+wjhMEV5iiaWRyY=");
_c = BSSAgent;
var _default = BSSAgent;
var _c;
$RefreshReg$(_c, "BSSAgent");
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
"src/pages/Admin/Chat/MasterAgentLog.tsx": function (module, exports, __mako_require__){
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
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _react1 = __mako_require__("node_modules/@monaco-editor/react/dist/index.mjs");
var _constants = __mako_require__("src/contexts/constants.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const MasterAgentLog = ()=>{
    let scenarioTimestamps = new Map();
    const scenarioTimestampsStr = localStorage.getItem(_constants.TIMESTAMPS_STORAGE_KEY);
    if (scenarioTimestampsStr && scenarioTimestampsStr !== '[]') scenarioTimestamps = new Map(JSON.parse(scenarioTimestampsStr));
    const now = new Date();
    let startTimestamp = now.toLocaleString();
    if (scenarioTimestamps.get(_constants.Scenario.orderReceived.toString())) startTimestamp = scenarioTimestamps.get(_constants.Scenario.orderReceived.toString());
    const startTimestampPrefix = startTimestamp.split(':').slice(0, -1).join(':');
    const initTimestamp = new Date(new Date(startTimestamp).getTime() - 3600000);
    const initTimestampPrefix = initTimestamp.toLocaleString().split(':').slice(0, -1).join(':');
    const next5minTimestamp = new Date(new Date(startTimestamp).getTime() + 300000);
    const next5minTimestampPrefix = next5minTimestamp.toLocaleString().split(':').slice(0, -1).join(':');
    const logStr = `${initTimestampPrefix}:32.697 | INFO     | __main__:initialize:25 - Initializing MCPAgent with sse connection...  
${initTimestampPrefix}:35.010 | INFO     | __main__:register_tool:76 - Registered tool: bash  
${initTimestampPrefix}:35.013 | INFO     | __main__:register_tool:76 - Registered tool: design_workflow       
${initTimestampPrefix}:35.015 | INFO     | __main__:register_tool:76 - Registered tool: assign_tasks  
${initTimestampPrefix}:35.016 | INFO     | __main__:register_tool:76 - Registered tool: track_progress  
${initTimestampPrefix}:35.016 | INFO     | __main__:run:159 - Starting MasterAgent server (sse mode)      
INFO:mcp.server.lowlevel.server:Processing request of type ListToolsRequest  
${initTimestampPrefix}:35.032 | INFO     | app.tool.mcp:_initialize_and_list_tools:124 - Connected to with tools: ['bash', 'design_workflow', 'assign_tasks', 'track_progress']  
INFO:mcp.server.lowlevel.server:Processing request of type ListToolsRequest  
${initTimestampPrefix}:35.035 | INFO     | app.agent.mcp:_refresh_tools:118 - Added MCP tools: ['bash', 'design_workflow', 'assign_tasks', 'track_progress']  
${initTimestampPrefix}:35.035 | INFO     | __main__:initialize:36 - Connected to MCP server via sse  

${startTimestampPrefix}:10.123 | INFO | MasterAgent:handle_request:101 - Received a request to activate AI medical imaging services for a medical client, starting to design the overall workflow  
${startTimestampPrefix}:12.456 | INFO | MasterAgent:analyze_intent:152 - Needs to complete the entire process of requirement matching, resource allocation, and service assurance  
${startTimestampPrefix}:15.789 | INFO | MasterAgent:design_workflow:203 - Workflow design:  
                        ┌───────────────────────────────┐  
                        │ Stage 1: Requirement Matching │  
                        └───┬───────────────────────┬───┘  
                            │                       │ 
                            ▼                       ▼  
┌──────────────────────────────────────┐ ┌─────────────────────────────────────┐  
│ Product Matching/Document Collection │ │ Resource Monitoring & Early Warning │  
└──────────────────┬───────────────────┘ └──────────────────┬──────────────────┘  
                   │                                        │  
                   ▼                                        ▼ 
                ┌──────────────────────────────────────────────┐  
                │         Stage 2: Resource Deployment         │  
                └──────────────────────┬───────────────────────┘  
                                       │  
                                       ▼  
                          ┌────────────────────────┐  
                          │  Computing & Network   │  
                          │  Resource Agent        │  
                          └────────────┬───────────┘  
                                       │  
                                       ▼  
                ┌──────────────────────────────────────────────┐  
                │     Resource Allocation/Service Activation   │  
                └──────────────────────┬───────────────────────┘   
                                       │  
                                       ▼  
                          ┌────────────────────────┐  
                          │  Computing & Network   │  
                          │  Resource Agent        │  
                          └────────────────────────┘  
${startTimestampPrefix}:19.123 | INFO | MasterAgent:assign_tasks:254 - Task assignment:  
▶ Assigned to Resource Agent: resource allocation and service deployment activation (Task ID: RES-20250527-001)  
▶ Assigned to Assurance Agent: full-link resource monitoring and performance assurance (Task ID: ASS-20250527-001)  
${startTimestampPrefix}:22.456 | INFO | MasterAgent:track_progress:305 - Subtask progress tracking:  
◆ Resource Agent task start time: ${startTimestampPrefix}:23  
◆ Assurance Agent task will start after requirement confirmation
${startTimestampPrefix}:36.456 | INFO | MasterAgent:trigger_resource:458 - Triggered Resource Agent task (Task ID: RES-20250527-001)
${startTimestampPrefix}:45.789 | INFO | MasterAgent:process_resource:611 - Processed Resource Agent results:  
▶ Allocated 5G dedicated slice, 4 A100 servers, and exclusive VPC  
▶ Service deployment and activation completed, total time: 3.5 minutes  
▶ Resource monitoring alerts enabled  
${startTimestampPrefix}:46.123 | INFO | receive_subtask:MasterAgent:560 - Received completion notification from Resource Agent subtask (Task ID: RES-20250527-001)  
${startTimestampPrefix}:48.789 | INFO | MasterAgent:receive_subtask:509 - Received progress update from Assurance Agent subtask:  
▶ Completed initialization of RAN/IDC/central cloud/edge computing resource monitoring  
▶ Potential risks: nighttime GPU resource peaks, data transmission encryption latency  
▶ Assurance measures: created exclusive resource pool, enabled intelligent load balancing  
${next5minTimestampPrefix}:26.789 | INFO | MasterAgent:summarize_results:662 - Summarized results from each Agent:  
============== AI Medical Imaging Service Activation Summary Report ==============  
▶ Resource deployment stage: computing/network resources allocated, service activation successful  
▶ Assurance monitoring stage: full-link performance monitoring initiated, risk response plans ready  
▶ Overall time: 10 minutes (from request to service activation)  
${next5minTimestampPrefix}:33.456 | INFO | MasterAgent:complete_workflow:764 - AI medical imaging service activation workflow completed
┌────────────────────────────────────────────┐
│     Agent Task Time Statistics:            │
│     - Resource Agent: 7 minutes            │
│     - Assurance Agent: 10 minutes          │
└────────────────────────────────────────────┘
`;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react1.Editor, {
        defaultLanguage: "yaml",
        defaultValue: logStr
    }, void 0, false, {
        fileName: "src/pages/Admin/Chat/MasterAgentLog.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
};
_c = MasterAgentLog;
var _default = MasterAgentLog;
var _c;
$RefreshReg$(_c, "MasterAgentLog");
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
"src/pages/Admin/Chat/chat.less?asmodule": function (module, exports, __mako_require__){
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
    "siderTitle": `siderTitle-T_4rmuHb`,
    "ant-pro-sider": `ant-pro-sider-lV8Y4W97`,
    "container": `container-giJTcuGd`,
    "ant-avatar": `ant-avatar-DK0k-yfd`,
    "bss": `bss-pKiAO0C4`,
    "adminLayout": `adminLayout-e7BMGtkD`,
    "bss-agent": `bss-agent-SiXZZVPs`,
    "resource": `resource-9vEf77or`,
    "messageContent": `messageContent-8oesuE5c`,
    "ant-table-tbody": `ant-table-tbody-3Oh2CGzd`,
    "assurance-agent": `assurance-agent-ZcKEpJsq`,
    "ant-pro-layout": `ant-pro-layout-LYdZqrdY`,
    "siderFooter": `siderFooter-j8zHYZU1`,
    "messageText": `messageText-k5v8Cw1G`,
    "root": `root-nqRr-xy8`,
    "assurance": `assurance-EUMSX3io`,
    "contentExpanded": `contentExpanded--2Ddd_L7`,
    "ant-table": `ant-table-9XELfaCB`,
    "message": `message-OI6oPkv7`,
    "trigger": `trigger-QgDP5jcB`,
    "ant-avatar-icon": `ant-avatar-icon-hJqNlnLM`,
    "messages": `messages-O4ORUXU8`,
    "ant-pro-sider-fixed": `ant-pro-sider-fixed-tmqG8K8a`,
    "sider": `sider-Uyt2UAfc`,
    "title": `title-So2ohGdc`,
    "colorWeak": `colorWeak-Js8N_UUM`,
    "other": `other-WagFmNNS`,
    "ant-table-thead": `ant-table-thead-h6bJbjVv`,
    "timestamp": `timestamp-uTMQYkqr`,
    "ant-pro-layout-content": `ant-pro-layout-content-KVpPuc-X`,
    "resource-agent": `resource-agent-SbxYZaMo`,
    "master": `master-V4lXRLgW`,
    "ant-layout": `ant-layout-BiFOmdfQ`,
    "ant-layout-sider": `ant-layout-sider-AXwyiQGQ`,
    "avatar": `avatar-5-K7d3ge`,
    "messageHeader": `messageHeader-Jpt6M3O6`,
    "sender": `sender-slda7P6O`,
    "content": `content-AqZ6VwBb`
};

},
"src/pages/Admin/Chat/chat.tsx": function (module, exports, __mako_require__){
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

},
"src/pages/Admin/ResourceAgent/Graph/getGraphDataFunc.js": function (module, exports, __mako_require__){
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
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _appsvg = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/app.svg"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const getGraphData = (current_step, containerWidth, containerHeight)=>{
    // 这里可以根据实际情况调整缩放因子
    const scaleFactor = Math.min(containerWidth / 800, containerHeight / 800);
    const nodes1 = [
        {
            id: '1',
            x: 250 * scaleFactor,
            y: 150 * scaleFactor,
            type: 'svg-image-node',
            label: 'NX Computing Resource Pool'
        },
        {
            id: '2',
            x: 550 * scaleFactor,
            y: 150 * scaleFactor,
            type: 'svg-image-node',
            label: 'BJ Data Center'
        },
        {
            id: '3',
            x: 220 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'circle'
        },
        {
            id: '4',
            x: 520 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'circle'
        }
    ];
    const nodes2 = [
        {
            id: '1',
            x: 250 * scaleFactor,
            y: 150 * scaleFactor,
            type: 'svg-image-node-green',
            label: 'NX Computing Resource Pool'
        },
        {
            id: '2',
            x: 550 * scaleFactor,
            y: 150 * scaleFactor,
            type: 'svg-image-node-green',
            label: 'BJ Data Center'
        },
        {
            id: '3',
            x: 220 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'background-animate',
            color: '#40a9ff',
            size: 20
        },
        {
            id: '4',
            x: 520 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'background-animate',
            color: '#40a9ff',
            size: 20
        },
        {
            id: '5',
            x: 400 * scaleFactor,
            y: 300 * scaleFactor,
            type: 'rect',
            label: 'BJ -> Hebei -> Shanxi -> NX',
            style: {
                fill: 'transparent',
                stroke: 'gray',
                lineWidth: 1,
                width: 380 * scaleFactor,
                height: 30 * scaleFactor,
                lineDash: [
                    2,
                    2
                ]
            }
        }
    ];
    const nodes3 = [
        {
            id: '1',
            x: 250 * scaleFactor,
            y: 150 * scaleFactor,
            type: 'svg-image-node-green',
            label: 'NX Computing Resource Pool'
        },
        {
            id: '2',
            x: 550 * scaleFactor,
            y: 150 * scaleFactor,
            type: 'svg-image-node-green',
            label: 'BJ Data Center'
        },
        {
            id: '3',
            x: 220 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'background-animate',
            color: '#40a9ff',
            size: 20
        },
        {
            id: '4',
            x: 520 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'background-animate',
            color: '#40a9ff',
            size: 20
        },
        {
            id: 'app',
            x: 200 * scaleFactor,
            y: 100 * scaleFactor,
            size: [
                40 * scaleFactor,
                40 * scaleFactor
            ],
            type: 'inner-animate',
            img: _appsvg.default,
            label: 'App Deployment',
            labelCfg: {
                position: 'right'
            }
        },
        {
            id: '5',
            x: 400 * scaleFactor,
            y: 300 * scaleFactor,
            type: 'rect',
            label: 'BJ -> Hebei -> Shanxi -> NX',
            style: {
                fill: 'transparent',
                stroke: 'gray',
                lineWidth: 1,
                width: 380 * scaleFactor,
                height: 30 * scaleFactor,
                lineDash: [
                    2,
                    2
                ]
            }
        }
    ];
    const nodes4 = [
        {
            id: '1',
            x: 250 * scaleFactor,
            y: 150 * scaleFactor,
            type: 'svg-image-node-green',
            label: 'NX Computing Resource Pool'
        },
        {
            id: '2',
            x: 550 * scaleFactor,
            y: 150 * scaleFactor,
            type: 'svg-image-node-green',
            label: 'BJ Data Center'
        },
        {
            id: '3',
            x: 220 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'circle'
        },
        {
            id: '4',
            x: 520 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'circle'
        },
        {
            id: '5',
            x: 400 * scaleFactor,
            y: 300 * scaleFactor,
            type: 'rect',
            label: 'BJ -> Hebei -> Shanxi -> NX',
            style: {
                fill: 'transparent',
                stroke: 'gray',
                lineWidth: 1,
                width: 380 * scaleFactor,
                height: 30 * scaleFactor,
                lineDash: [
                    2,
                    2
                ]
            }
        }
    ];
    // 节点
    let nodesComm = [
        {
            id: '6',
            x: 400 * scaleFactor,
            y: 130 * scaleFactor,
            type: "ellipse",
            label: 'Cloud Center',
            labelCfg: {
                fontSize: 16 * scaleFactor,
                fontWeight: 'italic'
            },
            size: [
                750 * scaleFactor,
                200 * scaleFactor
            ],
            style: {
                fill: 'transparent',
                stroke: 'gray',
                lineWidth: 1,
                lineDash: [
                    10,
                    5,
                    2,
                    5
                ]
            }
        },
        {
            id: '7',
            x: 400 * scaleFactor,
            y: 450 * scaleFactor,
            type: 'ellipse',
            label: 'Private Cloud Network',
            labelCfg: {
                fontSize: 16 * scaleFactor,
                fontWeight: 'italic'
            },
            size: [
                750 * scaleFactor,
                200 * scaleFactor
            ],
            style: {
                fill: 'transparent',
                stroke: 'gray',
                lineWidth: 1,
                lineDash: [
                    10,
                    5,
                    2,
                    5
                ]
            }
        }
    ];
    // 边
    const edges1 = [
        {
            source: '2',
            target: '4',
            type: 'line-dash',
            // controlPoints: [{ x: 100, y: 150 }], // 控制点用于控制曲线形状
            style: {
                stroke: '#00FF00',
                lineWidth: 2,
                lineDash: [
                    5,
                    5
                ]
            }
        },
        {
            source: '4',
            target: '3',
            type: 'line-dash',
            controlPoints: [
                {
                    x: 275 * scaleFactor,
                    y: 500 * scaleFactor
                }
            ],
            style: {
                stroke: '#00FF00',
                lineWidth: 2,
                lineDash: [
                    5,
                    5
                ]
            }
        },
        {
            source: '3',
            target: '1',
            type: 'line-dash',
            controlPoints: [
                {
                    x: 275 * scaleFactor,
                    y: 350 * scaleFactor
                }
            ],
            style: {
                stroke: '#00FF00',
                lineWidth: 2,
                lineDash: [
                    5,
                    5
                ]
            }
        }
    ];
    // 边
    const edges2 = [
        {
            source: '2',
            target: '4',
            type: 'quadratic',
            // controlPoints: [{ x: 100, y: 150 }], // 控制点用于控制曲线形状
            style: {
                stroke: '#00FF00',
                lineWidth: 2,
                lineDash: [
                    5,
                    5
                ]
            }
        },
        {
            source: '4',
            target: '3',
            type: 'quadratic',
            controlPoints: [
                {
                    x: 275 * scaleFactor,
                    y: 500 * scaleFactor
                }
            ],
            style: {
                stroke: '#00FF00',
                lineWidth: 2,
                lineDash: [
                    5,
                    5
                ]
            }
        },
        {
            source: '3',
            target: '1',
            type: 'quadratic',
            controlPoints: [
                {
                    x: 275 * scaleFactor,
                    y: 350 * scaleFactor
                }
            ],
            style: {
                stroke: '#00FF00',
                lineWidth: 2,
                lineDash: [
                    5,
                    5
                ]
            }
        }
    ];
    if (current_step === 6) return {
        nodes: nodes1.concat(nodesComm)
    };
    if (current_step === 7) return {
        nodes: nodes2.concat(nodesComm)
    };
    if (current_step === 8) return {
        nodes: nodes2.concat(nodesComm),
        edges: edges1
    };
    if (current_step === 9) return {
        nodes: nodes3.concat(nodesComm),
        edges: edges1
    };
    if (current_step === 10) return {
        nodes: nodes4.concat(nodesComm),
        edges: edges2
    };
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
"src/pages/Admin/ResourceAgent/Graph/graphModal.js": function (module, exports, __mako_require__){
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
var _getGraphDataFunc = __mako_require__("src/pages/Admin/ResourceAgent/Graph/getGraphDataFunc.js");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function Component$$({ graph, current_step }) {
    _s();
    // 创建对container11 DOM元素的引用
    const containerRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(()=>{
        if (!containerRef.current) return;
        // 获取container11的实际宽度和高度
        const rect = containerRef.current.getBoundingClientRect();
        let grData = (0, _getGraphDataFunc.getGraphData)(current_step, rect.width, rect.height);
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
        current_step
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        ref: containerRef,
        id: "container21",
        className: "x6-graph"
    }, void 0, false, {
        fileName: "src/pages/Admin/ResourceAgent/Graph/graphModal.js",
        lineNumber: 34,
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
"src/pages/Admin/ResourceAgent/Graph/index.ts": function (module, exports, __mako_require__){
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
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _g6 = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@antv/g6/es/index.js"));
var _cloudsvg = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/cloud.svg"));
var _cloudgreensvg = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/cloud-green.svg"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const Util = _g6.default.Util;
class FlowGraph {
    static graph1;
    static init() {
        const container = document.getElementById('container21');
        function setContainerHeight() {
            // 计算新的高度
            const newHeight = window.innerHeight - 200;
            // 应用到container上
            container.style.height = `${newHeight}px`;
        }
        // 初始化设置高度
        setContainerHeight();
        // 监听窗口大小改变事件
        window.addEventListener('resize', ()=>{
            setContainerHeight();
        });
        // G6.registerNode('cloud', {
        //   draw(cfg, group) {
        //     // 原始路径数据（未缩放）
        //     const originalPath = [
        //       ['M', 40, 60],
        //       ['C', 20, 30, 60, 20, 80, 40],
        //       ['C', 100, 20, 140, 20, 160, 40],
        //       ['C', 180, 60, 160, 80, 120, 80],
        //       ['C', 100, 100, 60, 100, 40, 80],
        //       ['C', 20, 70, 30, 50, 40, 60],
        //       ['Z']
        //     ];
        //     // 计算关键参数
        //     const originalBBox = {        // 原始包围盒（手动计算或通过 getBBox 获取）
        //       minX: 20, maxX: 180,       // X 范围 20~180 → 宽度 160
        //       minY: 20, maxY: 100        // Y 范围 20~100 → 高度 80
        //     };
        //     const targetSize = [1000, 1000]; // 目标尺寸
        //     const scaleX = targetSize[0] / (originalBBox.maxX - originalBBox.minX); // 1000 / 160 = 6.25
        //     const scaleY = targetSize[1] / (originalBBox.maxY - originalBBox.minY); // 1000 / 80 = 12.5
        //     const centerX = (originalBBox.minX + originalBBox.maxX) / 2; // 原始中心 X: 100
        //     const centerY = (originalBBox.minY + originalBBox.maxY) / 2; // 原始中心 Y: 60
        //     // 构建变换矩阵（关键步骤）
        //     const transform = [
        //       `translate(${-centerX}, ${-centerY})`, // 平移到原点（以原始中心为基准）
        //       `scale(${scaleX}, ${scaleY})`,         // 应用缩放
        //       `translate(${cfg.x}, ${cfg.y})`        // 移动到节点坐标
        //     ].join(' ');
        //     // 计算缩放比例
        //     const shape = group.addShape('path', {
        //       attrs: {
        //         path: originalPath,
        //         stroke: '#ccc',
        //         fill: cfg.color || '#fff',
        //         lineWidth: 2,
        //         // 关键缩放配置
        //         transform: transform
        //       },
        //       name: 'main-shape'
        //     });
        //     // 添加文本标签
        //     if (cfg.label) {
        //       group.addShape('text', {
        //         attrs: {
        //           text: cfg.label,
        //           x: 0,
        //           y: -20,
        //           textAlign: 'center',
        //           fontSize: 14,
        //           fill: '#000',
        //         },
        //         name: 'label-shape',
        //       });
        //     }
        //     return shape;
        //   }
        // });
        // Scale Animation
        _g6.default.registerNode('circle-animate', {
            afterDraw (cfg, group) {
                const shape = group.get('children')[0];
                shape.animate((ratio)=>{
                    const diff = ratio <= 0.5 ? ratio * 10 : (1 - ratio) * 10;
                    return {
                        r: cfg.size / 2 + diff
                    };
                }, {
                    repeat: true,
                    duration: 3000,
                    easing: 'easeCubic'
                });
            }
        }, 'circle');
        // Background Animation
        _g6.default.registerNode('background-animate', {
            afterDraw (cfg, group) {
                const r = cfg.size / 2;
                const back1 = group.addShape('circle', {
                    zIndex: -3,
                    attrs: {
                        x: 0,
                        y: 0,
                        r,
                        fill: cfg.color,
                        opacity: 0.6
                    },
                    // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                    name: 'back1-shape'
                });
                const back2 = group.addShape('circle', {
                    zIndex: -2,
                    attrs: {
                        x: 0,
                        y: 0,
                        r,
                        fill: cfg.color,
                        opacity: 0.6
                    },
                    // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                    name: 'back2-shape'
                });
                const back3 = group.addShape('circle', {
                    zIndex: -1,
                    attrs: {
                        x: 0,
                        y: 0,
                        r,
                        fill: cfg.color,
                        opacity: 0.6
                    },
                    // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                    name: 'back3-shape'
                });
                group.sort(); // Sort according to the zIndex
                back1.animate({
                    // Magnifying and disappearing
                    r: r + 10,
                    opacity: 0.1
                }, {
                    duration: 3000,
                    easing: 'easeCubic',
                    delay: 0,
                    repeat: true
                }); // no delay
                back2.animate({
                    // Magnifying and disappearing
                    r: r + 10,
                    opacity: 0.1
                }, {
                    duration: 3000,
                    easing: 'easeCubic',
                    delay: 1000,
                    repeat: true
                }); // 1s delay
                back3.animate({
                    // Magnifying and disappearing
                    r: r + 10,
                    opacity: 0.1
                }, {
                    duration: 3000,
                    easing: 'easeCubic',
                    delay: 2000,
                    repeat: true
                }); // 3s delay
            }
        }, 'circle');
        // Image animation
        _g6.default.registerNode('inner-animate', {
            afterDraw (cfg, group) {
                const size = cfg.size;
                const width = size[0] - 12;
                const height = size[1] - 12;
                const image = group.addShape('image', {
                    attrs: {
                        x: -width / 2,
                        y: -height / 2,
                        width,
                        height,
                        img: cfg.img
                    },
                    // must be assigned in G6 3.3 and later versions. it can be any string you want, but should be unique in a custom item type
                    name: 'image-shape'
                });
                image.animate((ratio)=>{
                    const toMatrix = Util.transform([
                        1,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        1
                    ], [
                        [
                            'r',
                            ratio * Math.PI * 2
                        ]
                    ]);
                    return {
                        matrix: toMatrix
                    };
                }, {
                    repeat: true,
                    duration: 3000,
                    easing: 'easeCubic'
                });
            }
        }, 'rect');
        // 注册自定义节点
        _g6.default.registerNode('svg-image-node', {
            draw (cfg, group) {
                // 定义基础参数
                const width = cfg.size ? cfg.size[0] : 100; // 默认宽度
                const height = cfg.size ? cfg.size[1] : 100; // 默认高度
                // 关键：使用本地 SVG 文件路径
                const imageShape = group.addShape('image', {
                    attrs: {
                        x: -width / 2,
                        y: -height / 2,
                        width: 60,
                        height: 60,
                        img: _cloudsvg.default
                    }
                });
                // 添加文字标签（可选）
                group.addShape('text', {
                    attrs: {
                        text: cfg.label || '',
                        fill: '#666',
                        x: 0,
                        y: height / 2 - 30,
                        textAlign: 'center'
                    }
                });
                return imageShape;
            }
        });
        _g6.default.registerNode('svg-image-node-green', {
            draw (cfg, group) {
                // 定义基础参数
                const width = cfg.size ? cfg.size[0] : 100; // 默认宽度
                const height = cfg.size ? cfg.size[1] : 100; // 默认高度
                // 关键：使用本地 SVG 文件路径
                const imageShape = group.addShape('image', {
                    attrs: {
                        x: -width / 2,
                        y: -height / 2,
                        width: 60,
                        height: 60,
                        img: _cloudgreensvg.default
                    }
                });
                // 添加文字标签（可选）
                group.addShape('text', {
                    attrs: {
                        text: cfg.label || '',
                        fill: '#666',
                        x: 0,
                        y: height / 2 - 30,
                        textAlign: 'center'
                    }
                });
                return imageShape;
            }
        });
        const lineDash = [
            4,
            2,
            1,
            2
        ];
        _g6.default.registerEdge('line-dash', {
            afterDraw (cfg, group) {
                // get the first shape in the group, it is the edge's path here=
                const shape = group.get('children')[0];
                let index = 0;
                // Define the animation
                shape.animate(()=>{
                    index++;
                    if (index > 9) index = 0;
                    const res = {
                        lineDash,
                        lineDashOffset: -index
                    };
                    // returns the modified configurations here, lineDash and lineDashOffset here
                    return res;
                }, {
                    repeat: true,
                    duration: 3000
                });
            }
        }, 'cubic');
        this.graph1 = new _g6.Graph({
            container: 'container21',
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
"src/pages/Admin/ResourceAgent/Graph/main.js": function (module, exports, __mako_require__){
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
var _index = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/Graph/index.ts"));
var _graphModal = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/Graph/graphModal.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
function Component$$({ current_step }) {
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
            current_step: current_step
        }, void 0, false, {
            fileName: "src/pages/Admin/ResourceAgent/Graph/main.js",
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
"src/pages/Admin/ResourceAgent/ResourceAgentLog.tsx": function (module, exports, __mako_require__){
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
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _react1 = __mako_require__("node_modules/@monaco-editor/react/dist/index.mjs");
var _constants = __mako_require__("src/contexts/constants.tsx");
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const ResourceAgentLog = ()=>{
    let statusTimestamps = new Map();
    const statusTimestampsStr = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY);
    if (statusTimestampsStr && statusTimestampsStr !== '[]') statusTimestamps = new Map(JSON.parse(statusTimestampsStr));
    const now = new Date();
    let startTimestamp = now.toLocaleString();
    if (statusTimestamps.get(_constants.ResourceAgentStatus.bssPlanGenerated.toString())) startTimestamp = statusTimestamps.get(_constants.ResourceAgentStatus.bssPlanGenerated.toString());
    let startTimestampPrefix = startTimestamp.split(':').slice(0, -1).join(':');
    let actionTimestamp = new Date(now.getTime() + 300000).toLocaleString();
    if (statusTimestamps.get(_constants.ResourceAgentStatus.taskStarted.toString())) actionTimestamp = statusTimestamps.get(_constants.ResourceAgentStatus.taskStarted.toString());
    let actionTimestampPrefix = actionTimestamp.split(':').slice(0, -1).join(':');
    const logStr = `${startTimestampPrefix}:32.697 | INFO     | __main__:initialize:25 - Initializing MCPAgent with stdio connection...  
${startTimestampPrefix}:35.010 | INFO     | __main__:register_tool:76 - Registered tool: query_availability  
${startTimestampPrefix}:35.013 | INFO     | __main__:register_tool:76 - Registered tool: create_plan       
${startTimestampPrefix}:35.015 | INFO     | __main__:register_tool:76 - Registered tool: initiate_workflow  
${startTimestampPrefix}:35.016 | INFO     | __main__:register_tool:76 - Registered tool: deploy_servers  
${startTimestampPrefix}:35.016 | INFO     | __main__:run:159 - Starting ResourceAgent server (stdio mode)      
INFO:mcp.server.lowlevel.server:Processing request of type ListToolsRequest  
${startTimestampPrefix}:35.032 | INFO     | app.tool.mcp:_initialize_and_list_tools:124 - Connected to server with tools: ['query_availability', 'create_plan', 'initiate_workflow', 'deploy_servers']  
INFO:mcp.server.lowlevel.server:Processing request of type ListToolsRequest  
${startTimestampPrefix}:35.035 | INFO     | app.agent.mcp:_refresh_tools:118 - Added MCP tools: ['query_availability', 'create_plan', 'initiate_workflow', 'deploy_servers']  
${startTimestampPrefix}:35.035 | INFO     | __main__:initialize:36 - Connected to MCP server via stdio  

${actionTimestampPrefix}:10.222 | INFO | main:handle_request:72 - Received deployment activation request for AI medical imaging services from medical client  
${actionTimestampPrefix}:12.555 | INFO | resource.catalog:query_availability:110 - Resource availability query:  
- RAN resource pool: 5G slice available (slice ID: MED-001)  
- IDC physical resources: 8 A100 GPU servers, 10PB NVMe storage  
- Central cloud virtual resources: 256vCPU/1TB memory/500Gbps bandwidth available  
- Edge node: 3U rack space remaining in Beijing EC-202505 node  

${actionTimestampPrefix}:15.888 | INFO | resource.allocation:create_plan:155 - Resource allocation plan generated:  
▶ RAN resources: Allocated 5G dedicated slice (MED-001), 500Mbps bandwidth  
▶ IDC resources: Deployed 4 A100 servers (cluster ID: GPU-MED-01)  
▶ Central cloud resources: Partitioned exclusive VPC (VPC-MED-007), configured with 200vCPU/800GB memory  
▶ Edge resources: Deployed 2 imaging preprocessing servers (model: Dell R750xa) at Beijing EC node  

${actionTimestampPrefix}:19.111 | INFO | service.deploy:initiate_workflow:199 - Service deployment workflow initiated:  
Workflow ID: DEP-MED-20250527  
Person in charge: RA-20250527-003  
Dependent components: Imaging storage system/AI inference engine/data security gateway  

${actionTimestampPrefix}:22.333 | INFO | ran.resource:activate_slice:244 - RAN resource activation:  
◆ 5G slice MED-001 activated successfully  
◆ QoS policy configured: Medical imaging service priority 9 (highest level)  
◆ Slice performance indicators: Latency ≤20ms, packet loss rate ≤0.1%  

${actionTimestampPrefix}:25.666 | INFO | idc.resource:provision_servers:288 - IDC server provisioning:  
✅ 4 A100 servers connected to GPU-MED-01 cluster  
✅ Installed CUDA 12.1, Docker 24.0, medical imaging analysis image  
✅ Configured RDMA network, inter-server latency ≤100μs  

${actionTimestampPrefix}:28.999 | INFO | center_cloud.resource:create_vpc:333 - Central cloud VPC creation:  
▶ VPC-MED-007 created successfully (network segment: 10.240.0.0/16)  
▶ Configured 3 subnets: compute subnet/storage subnet/management subnet  
▶ Enabled NAT gateway and DDoS protection (20Gbps bandwidth)  

${actionTimestampPrefix}:32.222 | INFO | edge.resource:deploy_servers:377 - Edge node server deployment:  
● 2 Dell R750xa servers racked at Beijing EC node  
● Installed edge computing agent software, connected to central cloud management platform  
● Configured local cache (256TB SSD) for imaging data preprocessing  

${actionTimestampPrefix}:35.555 | WARNING | resource.optimize:load_balancing:422 - Load balancing optimization:  
▶ Configured Kubernetes cluster for GPU cluster, enabled HPA auto-scaling  
▶ Upgraded edge-central cloud data synchronization link bandwidth to 1Gbps  
▶ Enabled EC (12+4) redundancy for imaging storage system to improve reliability  

${actionTimestampPrefix}:38.888 | INFO | service.activation:execute_checklist:466 - Service activation checklist execution:  
✅ Resource readiness check: 100% passed  
✅ Network connectivity test: Full-link connectivity between central cloud-IDC-edge-hospital  
✅ Application health check: AI inference service response time ≤50ms  

${actionTimestampPrefix}:42.111 | INFO | resource.monitoring:enable_alerts:511 - Resource monitoring alerts enabled:  
◆ Trigger alert when GPU utilization >70%  
◆ Automatically switch links when network latency >50ms  
◆ Start capacity expansion process when edge node storage usage >80%  

${actionTimestampPrefix}:45.444 | INFO | main:complete_deployment:555 - AI medical imaging service deployment activation completed:  
▶ Total time: 35 minutes  
▶ Resource allocation efficiency: 92.5%  
▶ Next step: customer acceptance test
`;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_react1.Editor, {
        defaultLanguage: "yaml",
        defaultValue: logStr
    }, void 0, false, {
        fileName: "src/pages/Admin/ResourceAgent/ResourceAgentLog.tsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
};
_c = ResourceAgentLog;
var _default = ResourceAgentLog;
var _c;
$RefreshReg$(_c, "ResourceAgentLog");
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
"src/pages/Admin/ResourceAgent/TaskDetail.less?asmodule": function (module, exports, __mako_require__){
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
    "siderTitle": `siderTitle-JEIrYd4R`,
    "flowArrow": `flowArrow-hFDjrTO5`,
    "boxText": `boxText-0MB2Jzvk`,
    "ant-pro-sider": `ant-pro-sider-RwbDF4-Z`,
    "adminLayout": `adminLayout-rkW-Grx2`,
    "bss-agent": `bss-agent-bJj3H0oo`,
    "ant-table-tbody": `ant-table-tbody-a2jYPCtp`,
    "boxLeft": `boxLeft-LtCufwcc`,
    "boxRight": `boxRight-DrlCioNs`,
    "assurance-agent": `assurance-agent-UHi7ACd6`,
    "ant-pro-layout": `ant-pro-layout-v6-tjn-k`,
    "siderFooter": `siderFooter-6i7ZnahP`,
    "boxTitle": `boxTitle-dchqW_db`,
    "flowStepNotReady": `flowStepNotReady-sY78OzJ_`,
    "root": `root-0htTfA-w`,
    "flowArrowNotReady": `flowArrowNotReady-7eTi1zSA`,
    "contentExpanded": `contentExpanded-vNzS1lfE`,
    "ant-table": `ant-table-9AkAiwS-`,
    "flowStep": `flowStep-9oNBw9I-`,
    "trigger": `trigger-_vGAUlnz`,
    "ant-pro-sider-fixed": `ant-pro-sider-fixed-2a8JmaqL`,
    "sider": `sider-ykI4bhph`,
    "colorWeak": `colorWeak-syxcOUcC`,
    "ant-table-thead": `ant-table-thead-l6klI252`,
    "flowContainer": `flowContainer-4F71To8S`,
    "ant-pro-layout-content": `ant-pro-layout-content-zt5j7VIz`,
    "resource-agent": `resource-agent-nwzp6Djd`,
    "ant-layout": `ant-layout-B9TDzP2p`,
    "ant-layout-sider": `ant-layout-sider-o_7u8I73`,
    "content": `content-eEoX-JwB`
};

},
"src/pages/Admin/ResourceAgent/TaskDetail.tsx": function (module, exports, __mako_require__){
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
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _TaskDetaillessasmodule = _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskDetail.less?asmodule"));
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
                localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY, newReadyStatus.toString());
                let statusTimestamps = new Map();
                const statusTimestampsStr = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY);
                if (statusTimestampsStr && statusTimestampsStr !== '[]') statusTimestamps = new Map(JSON.parse(statusTimestampsStr));
                statusTimestamps.set(newReadyStatus.toString(), new Date().toLocaleString());
                localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY, JSON.stringify(Array.from(statusTimestamps.entries())));
                return newReadyStatus;
            });
        }, 1000);
        return ()=>{
            if (intervalId) clearInterval(intervalId);
        };
    }, []);
    return (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
        gutter: 24,
        align: "middle",
        justify: "center",
        style: {
            flexWrap: 'nowrap'
        },
        children: [
            (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                style: {
                    padding: 0
                },
                children: (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.boxLeft,
                    children: [
                        (0, _jsxdevruntime.jsxDEV)("div", {
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
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.boxText,
                            style: readyStatus === _constants.ResourceAgentStatus.bssPlanGenerated ? {} : {
                                color: '#bfc8b7'
                            },
                            children: readyStatus >= _constants.ResourceAgentStatus.bssPlanGenerated && (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                children: [
                                    (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: "Operator Resources​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 49,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 49,
                                        columnNumber: 69
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• 5G Medical Private Network​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 50,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 50,
                                        columnNumber: 75
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• 200TB IDC Encrypted Storage​​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 51,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 51,
                                        columnNumber: 77
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• AI Cloud Resources​​​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 52,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 52,
                                        columnNumber: 69
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: "Cloud Vendor Services​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 53,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 53,
                                        columnNumber: 72
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Tenc Cloud AI Imaging Platform​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 54,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 54,
                                        columnNumber: 79
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Model Fine - Tuning Service​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 55,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 55,
                                        columnNumber: 76
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: "Value - Added Services​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 56,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 56,
                                        columnNumber: 73
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Privacy Computing Service​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 57,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 57,
                                        columnNumber: 74
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Energy - Saving Optimization Service​​"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 58,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
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
            (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                children: (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.flowContainer,
                    children: [
                        (0, _jsxdevruntime.jsxDEV)(_icons.ArrowRightOutlined, {
                            className: styles.flowArrow
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 66,
                            columnNumber: 21
                        }, this),
                        readyStatus < _constants.ResourceAgentStatus.resourceMatched ? readyStatus === _constants.ResourceAgentStatus.bssPlanGenerated ? (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
                            children: (0, _jsxdevruntime.jsxDEV)("div", {
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
                        }, this) : (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.flowStepNotReady,
                            children: "Resource Matching"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 70,
                            columnNumber: 29
                        }, this) : (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.flowStep,
                            children: "Resource Matching"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 71,
                            columnNumber: 25
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_icons.ArrowRightOutlined, {
                            className: readyStatus < 1 ? styles.flowArrowNotReady : styles.flowArrow
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 72,
                            columnNumber: 21
                        }, this),
                        readyStatus < _constants.ResourceAgentStatus.resourceVerificated ? readyStatus === _constants.ResourceAgentStatus.resourceMatched ? (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
                            children: (0, _jsxdevruntime.jsxDEV)("div", {
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
                        }, this) : (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.flowStepNotReady,
                            children: "Resource Verification"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 76,
                            columnNumber: 29
                        }, this) : (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.flowStep,
                            children: "Resource Verification"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 77,
                            columnNumber: 25
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_icons.ArrowRightOutlined, {
                            className: readyStatus < 2 ? styles.flowArrowNotReady : styles.flowArrow
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this),
                        readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated ? readyStatus === _constants.ResourceAgentStatus.resourceVerificated ? (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
                            children: (0, _jsxdevruntime.jsxDEV)("div", {
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
                        }, this) : (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.flowStepNotReady,
                            children: "Resource Solution Generation"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 82,
                            columnNumber: 29
                        }, this) : (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.flowStep,
                            children: "Resource Solution Generation"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                            lineNumber: 83,
                            columnNumber: 25
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_icons.ArrowRightOutlined, {
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
            (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                style: {
                    padding: 0
                },
                children: (0, _jsxdevruntime.jsxDEV)("div", {
                    className: styles.boxRight,
                    children: [
                        (0, _jsxdevruntime.jsxDEV)("div", {
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
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            className: styles.boxText,
                            style: readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated ? {
                                color: '#bfc8b7'
                            } : {},
                            children: readyStatus >= _constants.ResourceAgentStatus.resourceSolutionGenerated && (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                children: [
                                    (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: "Service Content"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 93,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 93,
                                        columnNumber: 65
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Complete the deployment of the 5G private network and slice configuration within 3 working days, and simultaneously enable the intelligent power - saving function."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 94,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 94,
                                        columnNumber: 211
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: '• Allocate to the AI Cloud Resources of the Qing Shan Green Data Center, a "Green Data Center", and achieve high - speed interconnection via SD - WAN.'
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 95,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 95,
                                        columnNumber: 196
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Complete the docking between the cloud platform and the PACS system within 5 working days."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 96,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 96,
                                        columnNumber: 138
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Provide 7×24 - hour operation and maintenance, with a fault response time of ≤5 minutes."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 97,
                                        columnNumber: 136
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Provide an energy - efficiency report every quarter to optimize resource utilization."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 98,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 98,
                                        columnNumber: 133
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: "Performance Requirements"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 99,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 99,
                                        columnNumber: 74
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• 5G Private Network: Latency < 10ms, bandwidth ≥ 1Gbps, packet loss rate < 0.01%."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 100,
                                        columnNumber: 132
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• AI Cloud: Inference response ≤ 3 seconds, training throughput ≥ 100 images per minute."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 101,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 101,
                                        columnNumber: 134
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Business Availability ≥ 99.9%, data storage reliability ≥ 99.9999%."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 102,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 102,
                                        columnNumber: 115
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Energy - saving Indicator: The overall system energy consumption is reduced by more than 25% compared to traditional solutions."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 103,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 103,
                                        columnNumber: 175
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: "Application Location"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 104,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 104,
                                        columnNumber: 70
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• No. 88 Keji Road, Qingxiu District, Qingshan City."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 105,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 105,
                                        columnNumber: 98
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: "Resource Requirements"
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 106,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 106,
                                        columnNumber: 71
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: '• Data Center: The Qing Shan Green Data Center certified as a "Green Data Center"; real - time intelligent energy - saving solution.'
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 107,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 107,
                                        columnNumber: 178
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Cloud Resource Pool: Qing Shan Green Cloud Resource Pool."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 108,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 108,
                                        columnNumber: 105
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Computing Resources: 8 NVIDIA A100 GPUs, 64 - core CPUs, 256GB of memory."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 109,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 109,
                                        columnNumber: 121
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Storage Resources: 200TB IDC Encrypted Storage (SSD solid - state drives)."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 110,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 110,
                                        columnNumber: 122
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Network Technologies: 5G SA standalone networking (including i ntelligent power - saving technology), SD - WAN interconnection."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 111,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 111,
                                        columnNumber: 175
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("span", {
                                        children: "• Protection Requirements: Dual - active disaster recovery, daily incremental data backup, and weekly full - volume off - site backup."
                                    }, void 0, false, {
                                        fileName: "src/pages/Admin/ResourceAgent/TaskDetail.tsx",
                                        lineNumber: 112,
                                        columnNumber: 33
                                    }, this),
                                    (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
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

},
"src/pages/Admin/ResourceAgent/TaskWorkflow.js": function (module, exports, __mako_require__){
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
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _TaskWorkflowlessasmodule = _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskWorkflow.less?asmodule"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _constants = __mako_require__("src/contexts/constants.tsx");
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _main = _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/Graph/main.js"));
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
        if (current_step >= 10) return "finish";
        return current_step < step_n ? 'wait' : current_step === step_n ? "process" : 'finish';
    };
    return [
        {
            title: 'Start',
            status: desStatus(6),
            icon: (0, _jsxdevruntime.jsxDEV)(_icons.RightCircleOutlined, {}, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                lineNumber: 21,
                columnNumber: 23
            }, this)
        },
        {
            title: 'Create Computing',
            status: desStatus(7),
            icon: (0, _jsxdevruntime.jsxDEV)(_icons.ApiOutlined, {}, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                lineNumber: 26,
                columnNumber: 23
            }, this)
        },
        {
            title: 'Create Network',
            status: desStatus(8),
            icon: (0, _jsxdevruntime.jsxDEV)(_icons.OneToOneOutlined, {}, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                lineNumber: 31,
                columnNumber: 23
            }, this)
        },
        {
            title: 'Deploy Application',
            status: desStatus(9),
            icon: (0, _jsxdevruntime.jsxDEV)(_icons.AppstoreOutlined, {}, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                lineNumber: 36,
                columnNumber: 23
            }, this)
        },
        {
            title: 'Complete',
            status: desStatus(10),
            icon: (0, _jsxdevruntime.jsxDEV)(_icons.InteractionOutlined, {}, void 0, false, {
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
        return ()=>clearInterval(timerIdxxx);
    }, [
        current_step
    ]);
    return (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
        children: [
            (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                className: _TaskWorkflowlessasmodule.default.orch,
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        children: "Create Computing"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 89,
                        columnNumber: 17
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        children: "Node Name: NX Computing"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 92,
                        columnNumber: 17
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        children: [
                            "Progress: ",
                            (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
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
            (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                className: _TaskWorkflowlessasmodule.default.orch,
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        children: "Create Network"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 100,
                        columnNumber: 17
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        children: "Path: Beijing-Hebei-Shanxi-Shanxi-Ningxia"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 103,
                        columnNumber: 17
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        children: [
                            "Progress: ",
                            (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
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
            (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
                className: _TaskWorkflowlessasmodule.default.orch,
                children: [
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        children: "Deploy Application"
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 111,
                        columnNumber: 17
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8
                    }, void 0, false, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                        span: 8,
                        children: [
                            "Progress: ",
                            (0, _jsxdevruntime.jsxDEV)(_antd.Progress, {
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
        title: (0, _jsxdevruntime.jsxDEV)("div", {
            children: step_map.get('5')
        }, void 0, false, {
            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
            lineNumber: 129,
            columnNumber: 16
        }, this),
        description: (0, _jsxdevruntime.jsxDEV)("div", {
            children: [
                "Start ",
                (0, _jsxdevruntime.jsxDEV)("a", {
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
        title: (0, _jsxdevruntime.jsxDEV)("div", {
            children: step_map.get('7')
        }, void 0, false, {
            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
            lineNumber: 135,
            columnNumber: 16
        }, this),
        description: (0, _jsxdevruntime.jsxDEV)("div", {
            children: "Compute Power Activation Begins"
        }, void 0, false, {
            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
            lineNumber: 137,
            columnNumber: 13
        }, this)
    };
    const thre = {
        title: (0, _jsxdevruntime.jsxDEV)("div", {
            children: step_map.get('8')
        }, void 0, false, {
            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
            lineNumber: 143,
            columnNumber: 16
        }, this),
        description: (0, _jsxdevruntime.jsxDEV)("div", {
            children: "Network Activation Begins"
        }, void 0, false, {
            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
            lineNumber: 145,
            columnNumber: 13
        }, this)
    };
    const fo = {
        title: (0, _jsxdevruntime.jsxDEV)("div", {
            children: step_map.get('9')
        }, void 0, false, {
            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
            lineNumber: 151,
            columnNumber: 16
        }, this),
        description: (0, _jsxdevruntime.jsxDEV)("div", {
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
    let executionCount = initConut + 1;
    (0, _react.useEffect)(()=>{
        const timerId = setInterval(()=>{
            if (executionCount >= totalExecutions) clearInterval(timerId);
            executionCount++;
            setCount(executionCount);
            localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_STORAGE_KEY, executionCount);
            setReadyStatus(executionCount);
            let statusTimestamps = new Map();
            const statusTimestampsStr = localStorage.getItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY);
            if (statusTimestampsStr) statusTimestamps = new Map(JSON.parse(statusTimestampsStr));
            statusTimestamps.set(executionCount.toString(), new Date().toLocaleString());
            localStorage.setItem(_constants.RESOURCE_AGENT_STATUS_TIMESTAMP_STORAGE_KEY, JSON.stringify(Array.from(statusTimestamps.entries())));
        }, 2000);
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
    return (0, _jsxdevruntime.jsxDEV)("div", {
        children: (0, _jsxdevruntime.jsxDEV)(_antd.Row, {
            children: [
                (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                    span: 12,
                    style: {
                        overflowY: "scroll"
                    },
                    className: _TaskWorkflowlessasmodule.default.container,
                    children: [
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            children: [
                                (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: "Orchestration Process"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 238,
                                    columnNumber: 25
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Steps, {
                                    labelPlacement: "vertical",
                                    size: "small",
                                    current: parseInt(count),
                                    items: displayCom(count)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 239,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 237,
                            columnNumber: 21
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {}, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 246,
                            columnNumber: 21
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            children: [
                                (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: "Orchestration Progress and Details"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 248,
                                    columnNumber: 25
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(DisplayOrch, {
                                    current_step: parseInt(count)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 249,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 247,
                            columnNumber: 21
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)(_antd.Divider, {}, void 0, false, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 251,
                            columnNumber: 21
                        }, this),
                        (0, _jsxdevruntime.jsxDEV)("div", {
                            children: [
                                (0, _jsxdevruntime.jsxDEV)("h3", {
                                    children: "Interaction Logs"
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 253,
                                    columnNumber: 25
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Steps, {
                                    progressDot: true,
                                    size: "small",
                                    current: parseInt(count),
                                    direction: "vertical",
                                    items: displayInteractionLogs(count, handleOK)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 254,
                                    columnNumber: 25
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Modal, {
                                    title: "log detail",
                                    open: isModalVisible,
                                    footer: null,
                                    onCancel: handleCancel,
                                    width: "80%",
                                    children: (0, _jsxdevruntime.jsxDEV)("pre", {
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
                                        lineNumber: 268,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                    lineNumber: 261,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                            lineNumber: 252,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                    lineNumber: 236,
                    columnNumber: 17
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_antd.Col, {
                    span: 12,
                    children: (0, _jsxdevruntime.jsxDEV)("div", {
                        children: [
                            (0, _jsxdevruntime.jsxDEV)("h3", {
                                children: "Network and Computing Orchestration Process"
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                lineNumber: 606,
                                columnNumber: 25
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)(_main.default, {
                                current_step: parseInt(count)
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                                lineNumber: 607,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                        lineNumber: 605,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
                    lineNumber: 604,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
            lineNumber: 235,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/pages/Admin/ResourceAgent/TaskWorkflow.js",
        lineNumber: 234,
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

},
"src/pages/Admin/ResourceAgent/TaskWorkflow.less?asmodule": function (module, exports, __mako_require__){
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
    "container": `container-luahKDeV`,
    "red": `red-quHccAve`,
    "blue": `blue-UwJws4jo`,
    "gray": `gray-O5x2o9Hx`,
    "card": `card-T_uhWP72`,
    "orch": `orch-IiP0nk65`,
    "green": `green-4q7hOUtv`,
    "black": `black-u6Fivd0v`
};

},
"src/pages/Admin/ResourceAgent/app.svg": function (module, exports, __mako_require__){
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
    ReactComponent: function() {
        return SvgComponent;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const SvgComponent = (props)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
        t: 1748230203855,
        className: "icon",
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": 1619,
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: 200,
        height: 200,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M878.159424 565.40635l-327.396585 0c-11.307533 0-20.466124 9.168824-20.466124 20.466124l0 327.396585c0 11.307533 9.15859 20.466124 20.466124 20.466124l327.396585 0c11.2973 0 20.466124-9.15859 20.466124-20.466124l0-327.396585C898.625548 574.575174 889.456724 565.40635 878.159424 565.40635zM857.6933 892.802936l-286.464337 0 0-286.464337 286.464337 0L857.6933 892.802936z",
                "p-id": 1620
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/app.svg",
                lineNumber: 2,
                columnNumber: 220
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M430.606225 565.40635l-327.396585 0c-11.2973 0-20.466124 9.168824-20.466124 20.466124l0 327.396585c0 11.307533 9.168824 20.466124 20.466124 20.466124l327.396585 0c11.307533 0 20.466124-9.15859 20.466124-20.466124l0-327.396585C451.072349 574.575174 441.913758 565.40635 430.606225 565.40635zM410.140101 892.802936l-286.464337 0 0-286.464337 286.464337 0L410.140101 892.802936z",
                "p-id": 1621
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/app.svg",
                lineNumber: 2,
                columnNumber: 614
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M430.606225 115.601878l-327.396585 0c-11.2973 0-20.466124 9.15859-20.466124 20.466124l0 327.386352c0 11.307533 9.168824 20.466124 20.466124 20.466124l327.396585 0c11.307533 0 20.466124-9.15859 20.466124-20.466124l0-327.386352C451.072349 124.760468 441.913758 115.601878 430.606225 115.601878zM410.140101 442.98823l-286.464337 0 0-286.454104 286.464337 0L410.140101 442.98823z",
                "p-id": 1622
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/app.svg",
                lineNumber: 2,
                columnNumber: 1013
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M965.529307 277.744745l-214.433814-214.433814c-3.837398-3.837398-9.046027-5.996574-14.46955-5.996574-5.433756 0-10.632151 2.159176-14.479783 5.996574l-214.433814 214.433814c-7.992021 7.992021-7.992021 20.957311 0 28.949332l214.433814 214.433814c4.001127 3.990894 9.240455 5.996574 14.479783 5.996574 5.229095 0 10.468422-2.00568 14.46955-5.996574l214.433814-214.433814c3.837398-3.837398 5.996574-9.046027 5.996574-14.46955C971.525881 286.790772 969.366705 281.582143 965.529307 277.744745zM736.625944 477.709009l-185.494715-185.484482 185.494715-185.494715 185.484482 185.494715L736.625944 477.709009z",
                "p-id": 1623
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/app.svg",
                lineNumber: 2,
                columnNumber: 1412
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Admin/ResourceAgent/app.svg",
        lineNumber: 2,
        columnNumber: 31
    }, this);
_c = SvgComponent;
var _default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzQ4MjMwMjAzODU1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE2MTkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTg3OC4xNTk0MjQgNTY1LjQwNjM1bC0zMjcuMzk2NTg1IDBjLTExLjMwNzUzMyAwLTIwLjQ2NjEyNCA5LjE2ODgyNC0yMC40NjYxMjQgMjAuNDY2MTI0bDAgMzI3LjM5NjU4NWMwIDExLjMwNzUzMyA5LjE1ODU5IDIwLjQ2NjEyNCAyMC40NjYxMjQgMjAuNDY2MTI0bDMyNy4zOTY1ODUgMGMxMS4yOTczIDAgMjAuNDY2MTI0LTkuMTU4NTkgMjAuNDY2MTI0LTIwLjQ2NjEyNGwwLTMyNy4zOTY1ODVDODk4LjYyNTU0OCA1NzQuNTc1MTc0IDg4OS40NTY3MjQgNTY1LjQwNjM1IDg3OC4xNTk0MjQgNTY1LjQwNjM1ek04NTcuNjkzMyA4OTIuODAyOTM2bC0yODYuNDY0MzM3IDAgMC0yODYuNDY0MzM3IDI4Ni40NjQzMzcgMEw4NTcuNjkzMyA4OTIuODAyOTM2eiIgcC1pZD0iMTYyMCI+PC9wYXRoPjxwYXRoIGQ9Ik00MzAuNjA2MjI1IDU2NS40MDYzNWwtMzI3LjM5NjU4NSAwYy0xMS4yOTczIDAtMjAuNDY2MTI0IDkuMTY4ODI0LTIwLjQ2NjEyNCAyMC40NjYxMjRsMCAzMjcuMzk2NTg1YzAgMTEuMzA3NTMzIDkuMTY4ODI0IDIwLjQ2NjEyNCAyMC40NjYxMjQgMjAuNDY2MTI0bDMyNy4zOTY1ODUgMGMxMS4zMDc1MzMgMCAyMC40NjYxMjQtOS4xNTg1OSAyMC40NjYxMjQtMjAuNDY2MTI0bDAtMzI3LjM5NjU4NUM0NTEuMDcyMzQ5IDU3NC41NzUxNzQgNDQxLjkxMzc1OCA1NjUuNDA2MzUgNDMwLjYwNjIyNSA1NjUuNDA2MzV6TTQxMC4xNDAxMDEgODkyLjgwMjkzNmwtMjg2LjQ2NDMzNyAwIDAtMjg2LjQ2NDMzNyAyODYuNDY0MzM3IDBMNDEwLjE0MDEwMSA4OTIuODAyOTM2eiIgcC1pZD0iMTYyMSI+PC9wYXRoPjxwYXRoIGQ9Ik00MzAuNjA2MjI1IDExNS42MDE4NzhsLTMyNy4zOTY1ODUgMGMtMTEuMjk3MyAwLTIwLjQ2NjEyNCA5LjE1ODU5LTIwLjQ2NjEyNCAyMC40NjYxMjRsMCAzMjcuMzg2MzUyYzAgMTEuMzA3NTMzIDkuMTY4ODI0IDIwLjQ2NjEyNCAyMC40NjYxMjQgMjAuNDY2MTI0bDMyNy4zOTY1ODUgMGMxMS4zMDc1MzMgMCAyMC40NjYxMjQtOS4xNTg1OSAyMC40NjYxMjQtMjAuNDY2MTI0bDAtMzI3LjM4NjM1MkM0NTEuMDcyMzQ5IDEyNC43NjA0NjggNDQxLjkxMzc1OCAxMTUuNjAxODc4IDQzMC42MDYyMjUgMTE1LjYwMTg3OHpNNDEwLjE0MDEwMSA0NDIuOTg4MjNsLTI4Ni40NjQzMzcgMCAwLTI4Ni40NTQxMDQgMjg2LjQ2NDMzNyAwTDQxMC4xNDAxMDEgNDQyLjk4ODIzeiIgcC1pZD0iMTYyMiI+PC9wYXRoPjxwYXRoIGQ9Ik05NjUuNTI5MzA3IDI3Ny43NDQ3NDVsLTIxNC40MzM4MTQtMjE0LjQzMzgxNGMtMy44MzczOTgtMy44MzczOTgtOS4wNDYwMjctNS45OTY1NzQtMTQuNDY5NTUtNS45OTY1NzQtNS40MzM3NTYgMC0xMC42MzIxNTEgMi4xNTkxNzYtMTQuNDc5NzgzIDUuOTk2NTc0bC0yMTQuNDMzODE0IDIxNC40MzM4MTRjLTcuOTkyMDIxIDcuOTkyMDIxLTcuOTkyMDIxIDIwLjk1NzMxMSAwIDI4Ljk0OTMzMmwyMTQuNDMzODE0IDIxNC40MzM4MTRjNC4wMDExMjcgMy45OTA4OTQgOS4yNDA0NTUgNS45OTY1NzQgMTQuNDc5NzgzIDUuOTk2NTc0IDUuMjI5MDk1IDAgMTAuNDY4NDIyLTIuMDA1NjggMTQuNDY5NTUtNS45OTY1NzRsMjE0LjQzMzgxNC0yMTQuNDMzODE0YzMuODM3Mzk4LTMuODM3Mzk4IDUuOTk2NTc0LTkuMDQ2MDI3IDUuOTk2NTc0LTE0LjQ2OTU1Qzk3MS41MjU4ODEgMjg2Ljc5MDc3MiA5NjkuMzY2NzA1IDI4MS41ODIxNDMgOTY1LjUyOTMwNyAyNzcuNzQ0NzQ1ek03MzYuNjI1OTQ0IDQ3Ny43MDkwMDlsLTE4NS40OTQ3MTUtMTg1LjQ4NDQ4MiAxODUuNDk0NzE1LTE4NS40OTQ3MTUgMTg1LjQ4NDQ4MiAxODUuNDk0NzE1TDczNi42MjU5NDQgNDc3LjcwOTAwOXoiIHAtaWQ9IjE2MjMiPjwvcGF0aD48L3N2Zz4=";
var _c;
$RefreshReg$(_c, "SvgComponent");
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
"src/pages/Admin/ResourceAgent/cloud-green.svg": function (module, exports, __mako_require__){
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
    ReactComponent: function() {
        return SvgComponent;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const SvgComponent = (props)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
        t: 1748238031221,
        className: "icon",
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": 7233,
        "data-spm-anchor-id": "a313x.search_index.0.i8.81493a81rDl7bg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: 200,
        height: 200,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M792.367447 420.849633c0.053242-2.220807 0.328667-4.416017 0.328667-6.661398 0-120.159086-97.403235-217.563345-217.563345-217.563345-86.685203 0-161.308014 50.825668-196.289055 124.188075-15.159646-7.621802-32.019966-12.310173-50.140689-12.310173-55.541683 0-101.353384 40.410706-110.37279 93.37527-66.316029 22.643224-114.07004 85.340842-114.07004 159.306317 0 92.962644 75.361032 168.326747 168.298078 168.407635h520.137841v-0.027645c84.931288-0.438223 153.605324-69.359016 153.605324-154.343546 0-85.150399-68.867551-154.124434-153.933991-154.37119z",
                fill: "#2aa515",
                "p-id": 7234
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/cloud-green.svg",
                lineNumber: 2,
                columnNumber: 280
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M764.295583 392.776745c0.053242-2.220807 0.328667-4.416017 0.328667-6.661398 0-120.159086-97.403235-217.563345-217.563345-217.563345-86.685203 0-161.308014 50.825668-196.289055 124.188075-15.159646-7.621802-32.019966-12.310173-50.140689-12.310173-55.541683 0-101.353384 40.410706-110.37279 93.37527-66.316029 22.643224-114.07004 85.340842-114.07004 159.306318 0 92.962644 75.361032 168.326747 168.298079 168.407634h520.138864v-0.027645c84.931288-0.438223 153.605324-69.359016 153.605324-154.343546-0.002048-85.149375-68.869599-154.124434-153.935015-154.37119z",
                fill: "#2aa515",
                "p-id": 7235
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/cloud-green.svg",
                lineNumber: 2,
                columnNumber: 871
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M370.209746 360.015352a25.256179 53.668997 55.515 1 0 88.475966-60.773749 25.256179 53.668997 55.515 1 0-88.475966 60.773749Z",
                fill: "#2aa515",
                "p-id": 7236
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/cloud-green.svg",
                lineNumber: 2,
                columnNumber: 1469
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M315.976612 448.336543a16.837794 29.465372 55.515 1 0 48.575107-33.366025 16.837794 29.465372 55.515 1 0-48.575107 33.366025Z",
                fill: "#2aa515",
                "p-id": 7237
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/cloud-green.svg",
                lineNumber: 2,
                columnNumber: 1633
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Admin/ResourceAgent/cloud-green.svg",
        lineNumber: 2,
        columnNumber: 31
    }, this);
_c = SvgComponent;
var _default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzQ4MjM4MDMxMjIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcyMzMiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTguODE0OTNhODFyRGw3YmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc5Mi4zNjc0NDcgNDIwLjg0OTYzM2MwLjA1MzI0Mi0yLjIyMDgwNyAwLjMyODY2Ny00LjQxNjAxNyAwLjMyODY2Ny02LjY2MTM5OCAwLTEyMC4xNTkwODYtOTcuNDAzMjM1LTIxNy41NjMzNDUtMjE3LjU2MzM0NS0yMTcuNTYzMzQ1LTg2LjY4NTIwMyAwLTE2MS4zMDgwMTQgNTAuODI1NjY4LTE5Ni4yODkwNTUgMTI0LjE4ODA3NS0xNS4xNTk2NDYtNy42MjE4MDItMzIuMDE5OTY2LTEyLjMxMDE3My01MC4xNDA2ODktMTIuMzEwMTczLTU1LjU0MTY4MyAwLTEwMS4zNTMzODQgNDAuNDEwNzA2LTExMC4zNzI3OSA5My4zNzUyNy02Ni4zMTYwMjkgMjIuNjQzMjI0LTExNC4wNzAwNCA4NS4zNDA4NDItMTE0LjA3MDA0IDE1OS4zMDYzMTcgMCA5Mi45NjI2NDQgNzUuMzYxMDMyIDE2OC4zMjY3NDcgMTY4LjI5ODA3OCAxNjguNDA3NjM1aDUyMC4xMzc4NDF2LTAuMDI3NjQ1Yzg0LjkzMTI4OC0wLjQzODIyMyAxNTMuNjA1MzI0LTY5LjM1OTAxNiAxNTMuNjA1MzI0LTE1NC4zNDM1NDYgMC04NS4xNTAzOTktNjguODY3NTUxLTE1NC4xMjQ0MzQtMTUzLjkzMzk5MS0xNTQuMzcxMTl6IiBmaWxsPSIjMmFhNTE1IiBwLWlkPSI3MjM0Ij48L3BhdGg+PHBhdGggZD0iTTc2NC4yOTU1ODMgMzkyLjc3Njc0NWMwLjA1MzI0Mi0yLjIyMDgwNyAwLjMyODY2Ny00LjQxNjAxNyAwLjMyODY2Ny02LjY2MTM5OCAwLTEyMC4xNTkwODYtOTcuNDAzMjM1LTIxNy41NjMzNDUtMjE3LjU2MzM0NS0yMTcuNTYzMzQ1LTg2LjY4NTIwMyAwLTE2MS4zMDgwMTQgNTAuODI1NjY4LTE5Ni4yODkwNTUgMTI0LjE4ODA3NS0xNS4xNTk2NDYtNy42MjE4MDItMzIuMDE5OTY2LTEyLjMxMDE3My01MC4xNDA2ODktMTIuMzEwMTczLTU1LjU0MTY4MyAwLTEwMS4zNTMzODQgNDAuNDEwNzA2LTExMC4zNzI3OSA5My4zNzUyNy02Ni4zMTYwMjkgMjIuNjQzMjI0LTExNC4wNzAwNCA4NS4zNDA4NDItMTE0LjA3MDA0IDE1OS4zMDYzMTggMCA5Mi45NjI2NDQgNzUuMzYxMDMyIDE2OC4zMjY3NDcgMTY4LjI5ODA3OSAxNjguNDA3NjM0aDUyMC4xMzg4NjR2LTAuMDI3NjQ1Yzg0LjkzMTI4OC0wLjQzODIyMyAxNTMuNjA1MzI0LTY5LjM1OTAxNiAxNTMuNjA1MzI0LTE1NC4zNDM1NDYtMC4wMDIwNDgtODUuMTQ5Mzc1LTY4Ljg2OTU5OS0xNTQuMTI0NDM0LTE1My45MzUwMTUtMTU0LjM3MTE5eiIgZmlsbD0iIzJhYTUxNSIgcC1pZD0iNzIzNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zNzAuMjA5NzQ2IDM2MC4wMTUzNTJhMjUuMjU2MTc5IDUzLjY2ODk5NyA1NS41MTUgMSAwIDg4LjQ3NTk2Ni02MC43NzM3NDkgMjUuMjU2MTc5IDUzLjY2ODk5NyA1NS41MTUgMSAwLTg4LjQ3NTk2NiA2MC43NzM3NDlaIiBmaWxsPSIjMmFhNTE1IiBwLWlkPSI3MjM2Ij48L3BhdGg+PHBhdGggZD0iTTMxNS45NzY2MTIgNDQ4LjMzNjU0M2ExNi44Mzc3OTQgMjkuNDY1MzcyIDU1LjUxNSAxIDAgNDguNTc1MTA3LTMzLjM2NjAyNSAxNi44Mzc3OTQgMjkuNDY1MzcyIDU1LjUxNSAxIDAtNDguNTc1MTA3IDMzLjM2NjAyNVoiIGZpbGw9IiMyYWE1MTUiIHAtaWQ9IjcyMzciPjwvcGF0aD48L3N2Zz4=";
var _c;
$RefreshReg$(_c, "SvgComponent");
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
"src/pages/Admin/ResourceAgent/cloud.svg": function (module, exports, __mako_require__){
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
    ReactComponent: function() {
        return SvgComponent;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
const SvgComponent = (props)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("svg", {
        t: 1748238031221,
        className: "icon",
        viewBox: "0 0 1024 1024",
        xmlns: "http://www.w3.org/2000/svg",
        "p-id": 7233,
        "data-spm-anchor-id": "a313x.search_index.0.i8.81493a81rDl7bg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: 200,
        height: 200,
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M792.367447 420.849633c0.053242-2.220807 0.328667-4.416017 0.328667-6.661398 0-120.159086-97.403235-217.563345-217.563345-217.563345-86.685203 0-161.308014 50.825668-196.289055 124.188075-15.159646-7.621802-32.019966-12.310173-50.140689-12.310173-55.541683 0-101.353384 40.410706-110.37279 93.37527-66.316029 22.643224-114.07004 85.340842-114.07004 159.306317 0 92.962644 75.361032 168.326747 168.298078 168.407635h520.137841v-0.027645c84.931288-0.438223 153.605324-69.359016 153.605324-154.343546 0-85.150399-68.867551-154.124434-153.933991-154.37119z",
                fill: "#e6e6e6",
                "p-id": 7234
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/cloud.svg",
                lineNumber: 2,
                columnNumber: 280
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M764.295583 392.776745c0.053242-2.220807 0.328667-4.416017 0.328667-6.661398 0-120.159086-97.403235-217.563345-217.563345-217.563345-86.685203 0-161.308014 50.825668-196.289055 124.188075-15.159646-7.621802-32.019966-12.310173-50.140689-12.310173-55.541683 0-101.353384 40.410706-110.37279 93.37527-66.316029 22.643224-114.07004 85.340842-114.07004 159.306318 0 92.962644 75.361032 168.326747 168.298079 168.407634h520.138864v-0.027645c84.931288-0.438223 153.605324-69.359016 153.605324-154.343546-0.002048-85.149375-68.869599-154.124434-153.935015-154.37119z",
                fill: "#e6e6e6",
                "p-id": 7235
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/cloud.svg",
                lineNumber: 2,
                columnNumber: 871
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M370.209746 360.015352a25.256179 53.668997 55.515 1 0 88.475966-60.773749 25.256179 53.668997 55.515 1 0-88.475966 60.773749Z",
                fill: "#e6e6e6",
                "p-id": 7236
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/cloud.svg",
                lineNumber: 2,
                columnNumber: 1469
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("path", {
                d: "M315.976612 448.336543a16.837794 29.465372 55.515 1 0 48.575107-33.366025 16.837794 29.465372 55.515 1 0-48.575107 33.366025Z",
                fill: "#e6e6e6",
                "p-id": 7237
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/cloud.svg",
                lineNumber: 2,
                columnNumber: 1633
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Admin/ResourceAgent/cloud.svg",
        lineNumber: 2,
        columnNumber: 31
    }, this);
_c = SvgComponent;
var _default = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzQ4MjM4MDMxMjIxIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjcyMzMiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guc2VhcmNoX2luZGV4LjAuaTguODE0OTNhODFyRGw3YmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTc5Mi4zNjc0NDcgNDIwLjg0OTYzM2MwLjA1MzI0Mi0yLjIyMDgwNyAwLjMyODY2Ny00LjQxNjAxNyAwLjMyODY2Ny02LjY2MTM5OCAwLTEyMC4xNTkwODYtOTcuNDAzMjM1LTIxNy41NjMzNDUtMjE3LjU2MzM0NS0yMTcuNTYzMzQ1LTg2LjY4NTIwMyAwLTE2MS4zMDgwMTQgNTAuODI1NjY4LTE5Ni4yODkwNTUgMTI0LjE4ODA3NS0xNS4xNTk2NDYtNy42MjE4MDItMzIuMDE5OTY2LTEyLjMxMDE3My01MC4xNDA2ODktMTIuMzEwMTczLTU1LjU0MTY4MyAwLTEwMS4zNTMzODQgNDAuNDEwNzA2LTExMC4zNzI3OSA5My4zNzUyNy02Ni4zMTYwMjkgMjIuNjQzMjI0LTExNC4wNzAwNCA4NS4zNDA4NDItMTE0LjA3MDA0IDE1OS4zMDYzMTcgMCA5Mi45NjI2NDQgNzUuMzYxMDMyIDE2OC4zMjY3NDcgMTY4LjI5ODA3OCAxNjguNDA3NjM1aDUyMC4xMzc4NDF2LTAuMDI3NjQ1Yzg0LjkzMTI4OC0wLjQzODIyMyAxNTMuNjA1MzI0LTY5LjM1OTAxNiAxNTMuNjA1MzI0LTE1NC4zNDM1NDYgMC04NS4xNTAzOTktNjguODY3NTUxLTE1NC4xMjQ0MzQtMTUzLjkzMzk5MS0xNTQuMzcxMTl6IiBmaWxsPSIjZTZlNmU2IiBwLWlkPSI3MjM0Ij48L3BhdGg+PHBhdGggZD0iTTc2NC4yOTU1ODMgMzkyLjc3Njc0NWMwLjA1MzI0Mi0yLjIyMDgwNyAwLjMyODY2Ny00LjQxNjAxNyAwLjMyODY2Ny02LjY2MTM5OCAwLTEyMC4xNTkwODYtOTcuNDAzMjM1LTIxNy41NjMzNDUtMjE3LjU2MzM0NS0yMTcuNTYzMzQ1LTg2LjY4NTIwMyAwLTE2MS4zMDgwMTQgNTAuODI1NjY4LTE5Ni4yODkwNTUgMTI0LjE4ODA3NS0xNS4xNTk2NDYtNy42MjE4MDItMzIuMDE5OTY2LTEyLjMxMDE3My01MC4xNDA2ODktMTIuMzEwMTczLTU1LjU0MTY4MyAwLTEwMS4zNTMzODQgNDAuNDEwNzA2LTExMC4zNzI3OSA5My4zNzUyNy02Ni4zMTYwMjkgMjIuNjQzMjI0LTExNC4wNzAwNCA4NS4zNDA4NDItMTE0LjA3MDA0IDE1OS4zMDYzMTggMCA5Mi45NjI2NDQgNzUuMzYxMDMyIDE2OC4zMjY3NDcgMTY4LjI5ODA3OSAxNjguNDA3NjM0aDUyMC4xMzg4NjR2LTAuMDI3NjQ1Yzg0LjkzMTI4OC0wLjQzODIyMyAxNTMuNjA1MzI0LTY5LjM1OTAxNiAxNTMuNjA1MzI0LTE1NC4zNDM1NDYtMC4wMDIwNDgtODUuMTQ5Mzc1LTY4Ljg2OTU5OS0xNTQuMTI0NDM0LTE1My45MzUwMTUtMTU0LjM3MTE5eiIgZmlsbD0iI2U2ZTZlNiIgcC1pZD0iNzIzNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zNzAuMjA5NzQ2IDM2MC4wMTUzNTJhMjUuMjU2MTc5IDUzLjY2ODk5NyA1NS41MTUgMSAwIDg4LjQ3NTk2Ni02MC43NzM3NDkgMjUuMjU2MTc5IDUzLjY2ODk5NyA1NS41MTUgMSAwLTg4LjQ3NTk2NiA2MC43NzM3NDlaIiBmaWxsPSIjZTZlNmU2IiBwLWlkPSI3MjM2Ij48L3BhdGg+PHBhdGggZD0iTTMxNS45NzY2MTIgNDQ4LjMzNjU0M2ExNi44Mzc3OTQgMjkuNDY1MzcyIDU1LjUxNSAxIDAgNDguNTc1MTA3LTMzLjM2NjAyNSAxNi44Mzc3OTQgMjkuNDY1MzcyIDU1LjUxNSAxIDAtNDguNTc1MTA3IDMzLjM2NjAyNVoiIGZpbGw9IiNlNmU2ZTYiIHAtaWQ9IjcyMzciPjwvcGF0aD48L3N2Zz4=";
var _c;
$RefreshReg$(_c, "SvgComponent");
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
"src/pages/Admin/ResourceAgent/constant.tsx": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "Tab", {
    enumerable: true,
    get: function() {
        return Tab;
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
var Tab;
(function(Tab) {
    Tab[Tab["TaskList"] = 0] = "TaskList";
    Tab[Tab["TaskDetail"] = 1] = "TaskDetail";
    Tab[Tab["TaskWorkflow"] = 2] = "TaskWorkflow";
})(Tab || (Tab = {}));
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
"src/pages/Admin/ResourceAgent/index.less?asmodule": function (module, exports, __mako_require__){
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
    "siderTitle": `siderTitle-uOroMpGT`,
    "innerContainer": `innerContainer-ervo_cuM`,
    "ant-pro-sider": `ant-pro-sider-K9zUgMrw`,
    "container": `container-KS07otO3`,
    "statusCompleted": `statusCompleted-POhS4NTC`,
    "adminLayout": `adminLayout-SopLRKRA`,
    "bss-agent": `bss-agent--tB1k-za`,
    "ant-table-tbody": `ant-table-tbody-IAMf_Wr2`,
    "assurance-agent": `assurance-agent-DkYwgb62`,
    "ant-pro-layout": `ant-pro-layout-Y_uT8vsP`,
    "siderFooter": `siderFooter-AQd0P5U9`,
    "root": `root-QM1QjHU_`,
    "breadcrumb": `breadcrumb-hX-nplqY`,
    "contentExpanded": `contentExpanded-8eTM-Nd6`,
    "statusProcessing": `statusProcessing-T_tKfCVt`,
    "statusNotStarted": `statusNotStarted-SEAtrQXS`,
    "ant-table": `ant-table-1k3nznaa`,
    "trigger": `trigger-Iij265b7`,
    "ant-pro-sider-fixed": `ant-pro-sider-fixed-fU9HGg5i`,
    "sider": `sider-vU5WlmUT`,
    "title": `title-3mSff4_m`,
    "colorWeak": `colorWeak-nKFmoADu`,
    "table": `table-3sf1_YLn`,
    "ant-table-thead": `ant-table-thead-6i2dlley`,
    "actionButton": `actionButton-2tBE9TBQ`,
    "ant-pro-layout-content": `ant-pro-layout-content-abEVbvJ0`,
    "resource-agent": `resource-agent-x19iQEHi`,
    "ant-layout": `ant-layout-9jTgCRUi`,
    "ant-layout-sider": `ant-layout-sider-NVM8FbTD`,
    "content": `content-HoS9ez0A`
};

},
"src/pages/Admin/ResourceAgent/index.tsx": function (module, exports, __mako_require__){
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
var _reactrefresh = _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
var _react = _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _indexlessasmodule = _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/index.less?asmodule"));
var _constants = __mako_require__("src/contexts/constants.tsx");
var _TaskDetail = _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskDetail.tsx"));
var _constant = __mako_require__("src/pages/Admin/ResourceAgent/constant.tsx");
var _TaskWorkflow = _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/TaskWorkflow.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _ResourceAgentLog = _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/ResourceAgentLog.tsx"));
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
        }, 1000);
        else if (readyStatus === _constants.ResourceAgentStatus.resourceSolutionGenerated && tab === _constant.Tab.TaskDetail) ;
        else if (readyStatus === _constants.ResourceAgentStatus.taskStarted && tab === _constant.Tab.TaskList) setTimeout(()=>{
            setTab(_constant.Tab.TaskWorkflow);
        }, 1000);
        else if (readyStatus === _constants.ResourceAgentStatus.taskCompleted && tab === _constant.Tab.TaskWorkflow) ;
        else if (readyStatus === _constants.ResourceAgentStatus.taskCompleted && tab === _constant.Tab.TaskList) {
            if (localStorage.getItem(_constants.SCENARIO_STORAGE_KEY) === _constants.Scenario.orderReceived.toString()) localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.resourceCompleted.toString());
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
            taskStatus: readyStatus < _constants.ResourceAgentStatus.resourceSolutionGenerated ? (0, _jsxdevruntime.jsxDEV)("div", {
                className: _indexlessasmodule.default.statusProcessing,
                children: "CREATING"
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                lineNumber: 61,
                columnNumber: 11
            }, this) : readyStatus === _constants.ResourceAgentStatus.resourceSolutionGenerated ? (0, _jsxdevruntime.jsxDEV)("div", {
                className: _indexlessasmodule.default.statusNotStarted,
                children: "NOT STARTED"
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                lineNumber: 63,
                columnNumber: 15
            }, this) : readyStatus < _constants.ResourceAgentStatus.taskCompleted ? (0, _jsxdevruntime.jsxDEV)("div", {
                className: _indexlessasmodule.default.statusProcessing,
                children: "PROCESSING"
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                lineNumber: 65,
                columnNumber: 17
            }, this) : (0, _jsxdevruntime.jsxDEV)("div", {
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
        return (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
            children: [
                (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                    type: "link",
                    onClick: ()=>setTab(_constant.Tab.TaskDetail),
                    className: _indexlessasmodule.default.actionButton,
                    children: "Detail"
                }, void 0, false, {
                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this),
                (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
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
                (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
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
    return (0, _jsxdevruntime.jsxDEV)("div", {
        className: _indexlessasmodule.default.container,
        children: [
            (0, _jsxdevruntime.jsxDEV)("h1", {
                className: _indexlessasmodule.default.title,
                children: "Resource Agent"
            }, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            showSourceLog && (0, _jsxdevruntime.jsxDEV)(_ResourceAgentLog.default, {}, void 0, false, {
                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                lineNumber: 113,
                columnNumber: 25
            }, this),
            !showSourceLog && tab === _constant.Tab.TaskList && (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.breadcrumb,
                        children: (0, _jsxdevruntime.jsxDEV)("span", {
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
                    (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.innerContainer,
                        children: (0, _jsxdevruntime.jsxDEV)(_antd.Table, {
                            className: _indexlessasmodule.default.table,
                            dataSource: readyStatus >= _constants.ResourceAgentStatus.bssPlanGenerated ? tableData : [],
                            children: [
                                (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                    title: "NO.",
                                    dataIndex: "no"
                                }, "no", false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                    title: "Task ID",
                                    dataIndex: "taskId"
                                }, "taskId", false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                    title: "Task Type",
                                    dataIndex: "taskType"
                                }, "taskType", false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                    title: "Product Name",
                                    dataIndex: "productName"
                                }, "productName", false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                    title: "Task Status",
                                    dataIndex: "taskStatus"
                                }, "taskStatus", false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                    title: "Creation Time",
                                    dataIndex: "creationTime"
                                }, "creationTime", false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
                                    title: "Completion Time",
                                    dataIndex: "completionTime"
                                }, "completionTime", false, {
                                    fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                (0, _jsxdevruntime.jsxDEV)(_antd.Table.Column, {
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
            !showSourceLog && tab === _constant.Tab.TaskDetail && (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.breadcrumb,
                        children: [
                            (0, _jsxdevruntime.jsxDEV)("a", {
                                onClick: ()=>setTab(_constant.Tab.TaskList),
                                children: "Task List"
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                lineNumber: 137,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)("span", {
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
                    (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.innerContainer,
                        children: (0, _jsxdevruntime.jsxDEV)(_TaskDetail.default, {
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
            !showSourceLog && tab === _constant.Tab.TaskWorkflow && (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                children: [
                    (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.breadcrumb,
                        children: [
                            (0, _jsxdevruntime.jsxDEV)("a", {
                                onClick: ()=>setTab(_constant.Tab.TaskList),
                                children: "Task List"
                            }, void 0, false, {
                                fileName: "src/pages/Admin/ResourceAgent/index.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            (0, _jsxdevruntime.jsxDEV)("span", {
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
                    (0, _jsxdevruntime.jsxDEV)("div", {
                        children: (0, _jsxdevruntime.jsxDEV)(_TaskWorkflow.default, {
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

},
"src/pages/Admin/index.less?asmodule": function (module, exports, __mako_require__){
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
    "ant-table": `ant-table-ED9Kp9qd`,
    "siderTitle": `siderTitle-ovcb79TL`,
    "trigger": `trigger-2R-CXETp`,
    "ant-pro-sider": `ant-pro-sider-AjMJvAFf`,
    "ant-pro-sider-fixed": `ant-pro-sider-fixed-7IygBbot`,
    "sider": `sider-qD6yyQ__`,
    "colorWeak": `colorWeak-aE49pe2D`,
    "adminLayout": `adminLayout-02GzHMYw`,
    "ant-table-thead": `ant-table-thead-pg584ZqF`,
    "bss-agent": `bss-agent-40Iz0I3H`,
    "ant-table-tbody": `ant-table-tbody-3KaQHPl4`,
    "assurance-agent": `assurance-agent-3FGVbRh4`,
    "ant-pro-layout": `ant-pro-layout-tSxEFllY`,
    "siderFooter": `siderFooter-OBTLUXGe`,
    "ant-pro-layout-content": `ant-pro-layout-content-ZrBUn8ee`,
    "resource-agent": `resource-agent-EJUwvzy7`,
    "root": `root-Upug93Ym`,
    "ant-layout": `ant-layout-bDI6jErO`,
    "ant-layout-sider": `ant-layout-sider-laD6v2nV`,
    "contentExpanded": `contentExpanded-XJeYoMua`,
    "content": `content-fg70cUmV`
};

},
"src/pages/Admin/index.tsx": function (module, exports, __mako_require__){
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
var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/index.less?asmodule"));
var _chat = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/Chat/chat.tsx"));
var _AssuranceAgent = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/AssuranceAgent/index.tsx"));
var _BSSAgent = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/BSSAgent/index.tsx"));
var _ResourceAgent = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/Admin/ResourceAgent/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const { Sider, Content } = _antd.Layout;
const Admin = ()=>{
    _s();
    const [selectedMenu, setSelectedMenu] = (0, _react.useState)('agents-chat');
    const [collapsed, setCollapsed] = (0, _react.useState)(false);
    const menuItems = [
        {
            key: 'agents-chat',
            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.MessageOutlined, {}, void 0, false, {
                fileName: "src/pages/Admin/index.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            label: 'Agents Chat',
            onClick: ()=>setCollapsed(false)
        },
        {
            key: 'bss-agent',
            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.ShoppingOutlined, {}, void 0, false, {
                fileName: "src/pages/Admin/index.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            label: 'BSS Agent',
            onClick: ()=>setCollapsed(true)
        },
        {
            key: 'resource-agent',
            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CloudServerOutlined, {}, void 0, false, {
                fileName: "src/pages/Admin/index.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            label: 'Resource Agent',
            onClick: ()=>setCollapsed(true)
        },
        {
            key: 'assurance-agent',
            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.MonitorOutlined, {}, void 0, false, {
                fileName: "src/pages/Admin/index.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            label: 'Assurance Agent',
            onClick: ()=>setCollapsed(true)
        }
    ];
    const changeMenu = (menu, collapsed)=>{
        setSelectedMenu(menu);
        setCollapsed(collapsed);
    };
    // 根据选中的菜单项渲染对应的内容组件
    const renderContent = ()=>{
        switch(selectedMenu){
            case 'agents-chat':
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_chat.default, {
                    changeMenu: changeMenu
                }, void 0, false, {
                    fileName: "src/pages/Admin/index.tsx",
                    lineNumber: 59,
                    columnNumber: 16
                }, this);
            case 'bss-agent':
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_BSSAgent.default, {}, void 0, false, {
                    fileName: "src/pages/Admin/index.tsx",
                    lineNumber: 61,
                    columnNumber: 16
                }, this);
            case 'resource-agent':
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_ResourceAgent.default, {
                    changeMenu: changeMenu
                }, void 0, false, {
                    fileName: "src/pages/Admin/index.tsx",
                    lineNumber: 63,
                    columnNumber: 16
                }, this);
            case 'assurance-agent':
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_AssuranceAgent.default, {
                    changeMenu: changeMenu
                }, void 0, false, {
                    fileName: "src/pages/Admin/index.tsx",
                    lineNumber: 65,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_chat.default, {
                    changeMenu: changeMenu
                }, void 0, false, {
                    fileName: "src/pages/Admin/index.tsx",
                    lineNumber: 67,
                    columnNumber: 16
                }, this);
        }
    };
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Layout, {
        className: _indexlessasmodule.default.adminLayout,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Sider, {
                width: 180,
                className: _indexlessasmodule.default.sider,
                collapsible: true,
                collapsed: collapsed,
                onCollapse: (value)=>setCollapsed(value),
                trigger: null,
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Menu, {
                        mode: "inline",
                        selectedKeys: [
                            selectedMenu
                        ],
                        items: menuItems,
                        onClick: ({ key })=>setSelectedMenu(key),
                        inlineCollapsed: collapsed
                    }, void 0, false, {
                        fileName: "src/pages/Admin/index.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.siderFooter,
                        children: [
                            !collapsed && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                className: _indexlessasmodule.default.siderTitle
                            }, void 0, false, {
                                fileName: "src/pages/Admin/index.tsx",
                                lineNumber: 89,
                                columnNumber: 26
                            }, this),
                            /*#__PURE__*/ _react.default.createElement(collapsed ? _icons.DoubleRightOutlined : _icons.DoubleLeftOutlined, {
                                className: _indexlessasmodule.default.trigger,
                                onClick: ()=>setCollapsed(!collapsed)
                            })
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/Admin/index.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/Admin/index.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Content, {
                className: `${_indexlessasmodule.default.content} ${collapsed ? _indexlessasmodule.default.contentExpanded : ''}`,
                children: renderContent()
            }, void 0, false, {
                fileName: "src/pages/Admin/index.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/Admin/index.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
};
_s(Admin, "GrEkPj1ykPxntaEZgwgcUba2pOw=");
_c = Admin;
var _default = Admin;
var _c;
$RefreshReg$(_c, "Admin");
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
//# sourceMappingURL=p__Admin__index-async.js.map