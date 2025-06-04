globalThis.makoModuleHotUpdate('p__Admin__index', {
    modules: {
        "src/pages/Admin/AssuranceAgent/index.tsx": function(module, exports, __mako_require__) {
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
                (0, _react.useEffect)(()=>{
                    if (currentScenario === _constants.Scenario.serverHibernated || currentScenario === _constants.Scenario.temperatureRecovered) setTimeout(()=>{
                        changeMenu('agents-chat', false);
                    }, 2000);
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
                        time: getLastHourBy5Minutes()[0],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[1],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[2],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[3],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[4],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[5],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[6],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[7],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[8],
                        temperature: 21,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[9],
                        temperature: 20,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[10],
                        temperature: 19,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[11],
                        temperature: 18,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[12],
                        temperature: 18,
                        type: 'temperature'
                    }
                ];
                else if (currentScenario === _constants.Scenario.temperatureRecovered) energySaveTempData = [
                    {
                        time: getLastHourBy5Minutes()[0],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[1],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[2],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[3],
                        temperature: 21,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[4],
                        temperature: 20,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[5],
                        temperature: 19,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[6],
                        temperature: 18,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[7],
                        temperature: 18,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[8],
                        temperature: 19,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[9],
                        temperature: 21,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[10],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[11],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[12],
                        temperature: 22,
                        type: 'temperature'
                    }
                ];
                else energySaveTempData = [
                    {
                        time: getLastHourBy5Minutes()[0],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[1],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[2],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[3],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[4],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[5],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[6],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[7],
                        temperature: 22,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[8],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[9],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[10],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[11],
                        temperature: 23,
                        type: 'temperature'
                    },
                    {
                        time: getLastHourBy5Minutes()[12],
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
                // BSS time
                const now = new Date();
                const bssTimeBy5Mins = getLastHourBy5Minutes(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0));
                const bssTimeBy1Hour = getLast12Hours(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0));
                // BSS metric 1: system latency
                let bssLatencyData = [];
                if (currentScenario === _constants.Scenario.bssMetricAbnormal) bssLatencyData = [
                    {
                        time: bssTimeBy5Mins[0],
                        latency: 97,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[1],
                        latency: 102,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[2],
                        latency: 98,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[3],
                        latency: 88,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[4],
                        latency: 96,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[5],
                        latency: 105,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[6],
                        latency: 97,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[7],
                        latency: 120,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[8],
                        latency: 167,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[9],
                        latency: 344,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[10],
                        latency: 566,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[11],
                        latency: 540,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[12],
                        latency: 577,
                        type: 'latency'
                    }
                ];
                else if (currentScenario === _constants.Scenario.bssMetricRecovered) bssLatencyData = [
                    {
                        time: bssTimeBy5Mins[0],
                        latency: 120,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[1],
                        latency: 167,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[2],
                        latency: 344,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[3],
                        latency: 566,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[4],
                        latency: 540,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[5],
                        latency: 544,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[6],
                        latency: 430,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[7],
                        latency: 208,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[8],
                        latency: 120,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[9],
                        latency: 100,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[10],
                        latency: 98,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[11],
                        latency: 105,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[12],
                        latency: 95,
                        type: 'latency'
                    }
                ];
                else bssLatencyData = [
                    {
                        time: bssTimeBy5Mins[0],
                        latency: 100,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[1],
                        latency: 105,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[2],
                        latency: 99,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[3],
                        latency: 95,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[4],
                        latency: 102,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[5],
                        latency: 99,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[6],
                        latency: 80,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[7],
                        latency: 89,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[8],
                        latency: 97,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[9],
                        latency: 102,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[10],
                        latency: 98,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[11],
                        latency: 88,
                        type: 'latency'
                    },
                    {
                        time: bssTimeBy5Mins[12],
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
                        time: `${bssTimeBy1Hour[0]}`,
                        rate: 84
                    },
                    {
                        time: `${bssTimeBy1Hour[1]}`,
                        rate: 84
                    },
                    {
                        time: `${bssTimeBy1Hour[2]}`,
                        rate: 83
                    },
                    {
                        time: `${bssTimeBy1Hour[3]}`,
                        rate: 85
                    },
                    {
                        time: `${bssTimeBy1Hour[4]}`,
                        rate: 87
                    },
                    {
                        time: `${bssTimeBy1Hour[5]}`,
                        rate: 86
                    },
                    {
                        time: `${bssTimeBy1Hour[6]}`,
                        rate: 89
                    },
                    {
                        time: `${bssTimeBy1Hour[7]}`,
                        rate: 89
                    },
                    {
                        time: `${bssTimeBy1Hour[8]}`,
                        rate: 90
                    },
                    {
                        time: `${bssTimeBy1Hour[9]}`,
                        rate: 92
                    },
                    {
                        time: `${bssTimeBy1Hour[10]}`,
                        rate: 91
                    },
                    {
                        time: `${bssTimeBy1Hour[11]}`,
                        rate: 92
                    },
                    {
                        time: `${bssTimeBy1Hour[12]}`,
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
                        time: `${bssTimeBy5Mins[0]}`,
                        number: 7
                    },
                    {
                        time: `${bssTimeBy5Mins[1]}`,
                        number: 5
                    },
                    {
                        time: `${bssTimeBy5Mins[2]}`,
                        number: 4
                    },
                    {
                        time: `${bssTimeBy5Mins[3]}`,
                        number: 5
                    },
                    {
                        time: `${bssTimeBy5Mins[4]}`,
                        number: 3
                    },
                    {
                        time: `${bssTimeBy5Mins[5]}`,
                        number: 6
                    },
                    {
                        time: `${bssTimeBy5Mins[6]}`,
                        number: 5
                    },
                    {
                        time: `${bssTimeBy5Mins[7]}`,
                        number: 9
                    },
                    {
                        time: `${bssTimeBy5Mins[8]}`,
                        number: 15
                    },
                    {
                        time: `${bssTimeBy5Mins[9]}`,
                        number: 22
                    },
                    {
                        time: `${bssTimeBy5Mins[10]}`,
                        number: 26
                    },
                    {
                        time: `${bssTimeBy5Mins[11]}`,
                        number: 32
                    },
                    {
                        time: `${bssTimeBy5Mins[12]}`,
                        number: 35
                    }
                ];
                else if (currentScenario === _constants.Scenario.bssMetricRecovered) bssTaskNumData = [
                    {
                        time: `${bssTimeBy5Mins[0]}`,
                        number: 9
                    },
                    {
                        time: `${bssTimeBy5Mins[1]}`,
                        number: 15
                    },
                    {
                        time: `${bssTimeBy5Mins[2]}`,
                        number: 22
                    },
                    {
                        time: `${bssTimeBy5Mins[3]}`,
                        number: 26
                    },
                    {
                        time: `${bssTimeBy5Mins[4]}`,
                        number: 32
                    },
                    {
                        time: `${bssTimeBy5Mins[5]}`,
                        number: 35
                    },
                    {
                        time: `${bssTimeBy5Mins[6]}`,
                        number: 28
                    },
                    {
                        time: `${bssTimeBy5Mins[7]}`,
                        number: 20
                    },
                    {
                        time: `${bssTimeBy5Mins[8]}`,
                        number: 15
                    },
                    {
                        time: `${bssTimeBy5Mins[9]}`,
                        number: 9
                    },
                    {
                        time: `${bssTimeBy5Mins[10]}`,
                        number: 5
                    },
                    {
                        time: `${bssTimeBy5Mins[11]}`,
                        number: 4
                    },
                    {
                        time: `${bssTimeBy5Mins[12]}`,
                        number: 6
                    }
                ];
                else bssTaskNumData = [
                    {
                        time: `${bssTimeBy5Mins[0]}`,
                        number: 2
                    },
                    {
                        time: `${bssTimeBy5Mins[1]}`,
                        number: 3
                    },
                    {
                        time: `${bssTimeBy5Mins[2]}`,
                        number: 4
                    },
                    {
                        time: `${bssTimeBy5Mins[3]}`,
                        number: 2
                    },
                    {
                        time: `${bssTimeBy5Mins[4]}`,
                        number: 5
                    },
                    {
                        time: `${bssTimeBy5Mins[5]}`,
                        number: 1
                    },
                    {
                        time: `${bssTimeBy5Mins[6]}`,
                        number: 3
                    },
                    {
                        time: `${bssTimeBy5Mins[7]}`,
                        number: 6
                    },
                    {
                        time: `${bssTimeBy5Mins[8]}`,
                        number: 7
                    },
                    {
                        time: `${bssTimeBy5Mins[9]}`,
                        number: 5
                    },
                    {
                        time: `${bssTimeBy5Mins[10]}`,
                        number: 4
                    },
                    {
                        time: `${bssTimeBy5Mins[11]}`,
                        number: 5
                    },
                    {
                        time: `${bssTimeBy5Mins[12]}`,
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
                        time: `${bssTimeBy1Hour[0]}`,
                        rate: 6,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[1]}`,
                        rate: 7,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[2]}`,
                        rate: 6,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[3]}`,
                        rate: 7,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[4]}`,
                        rate: 5,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[5]}`,
                        rate: 5,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[6]}`,
                        rate: 4,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[7]}`,
                        rate: 3,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[8]}`,
                        rate: 3,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[9]}`,
                        rate: 2,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[10]}`,
                        rate: 3,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[11]}`,
                        rate: 1,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[12]}`,
                        rate: 2,
                        type: 'false positive'
                    },
                    {
                        time: `${bssTimeBy1Hour[0]}`,
                        rate: 10,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[1]}`,
                        rate: 9,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[2]}`,
                        rate: 11,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[3]}`,
                        rate: 8,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[4]}`,
                        rate: 8,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[5]}`,
                        rate: 9,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[6]}`,
                        rate: 7,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[7]}`,
                        rate: 8,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[8]}`,
                        rate: 7,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[9]}`,
                        rate: 6,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[10]}`,
                        rate: 6,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[11]}`,
                        rate: 7,
                        type: 'false negative'
                    },
                    {
                        time: `${bssTimeBy1Hour[12]}`,
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
                        showSourceLog ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.FloatButton, {
                            style: {
                                right: 64,
                                bottom: 64
                            },
                            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                lineNumber: 527,
                                columnNumber: 62
                            }, void 0),
                            onClick: ()=>setShowSourceLog(false)
                        }, void 0, false, {
                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                            lineNumber: 527,
                            columnNumber: 9
                        }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.FloatButton, {
                            style: {
                                right: 64,
                                bottom: 64
                            },
                            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.CodeOutlined, {}, void 0, false, {
                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                lineNumber: 529,
                                columnNumber: 62
                            }, void 0),
                            onClick: ()=>setShowSourceLog(true)
                        }, void 0, false, {
                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                            lineNumber: 529,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("h1", {
                            className: _indexlessasmodule.default.title,
                            children: "Assurance Agent"
                        }, void 0, false, {
                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                            lineNumber: 531,
                            columnNumber: 7
                        }, this),
                        showSourceLog && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_AssuranceAgentLog.default, {}, void 0, false, {
                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                            lineNumber: 532,
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
                                                                    lineNumber: 542,
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
                                                                            lineNumber: 544,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                            className: _indexlessasmodule.default.subMessage,
                                                                            children: "cause: HVAC temperature issue"
                                                                        }, void 0, false, {
                                                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                            lineNumber: 547,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                            lineNumber: 541,
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
                                                        lineNumber: 539,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Line, {
                                                        ...energySaveTempConfig
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                        lineNumber: 561,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 537,
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
                                                                    lineNumber: 568,
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
                                                                            lineNumber: 570,
                                                                            columnNumber: 27
                                                                        }, void 0),
                                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                            className: _indexlessasmodule.default.subMessage,
                                                                            children: "Server ID A03 has reached hibernation threshold"
                                                                        }, void 0, false, {
                                                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                            lineNumber: 573,
                                                                            columnNumber: 27
                                                                        }, void 0)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                    lineNumber: 569,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                            lineNumber: 567,
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
                                                        lineNumber: 565,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_charts.Pie, {
                                                        ...energySaveServerConfig
                                                    }, void 0, false, {
                                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                        lineNumber: 587,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 563,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                        lineNumber: 536,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 535,
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
                                                            lineNumber: 597,
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
                                                                    lineNumber: 599,
                                                                    columnNumber: 25
                                                                }, void 0),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    className: _indexlessasmodule.default.subMessage,
                                                                    children: "High system latency && High backlog of tasks."
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 25
                                                                }, void 0)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 23
                                                        }, void 0)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                    lineNumber: 596,
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
                                                lineNumber: 594,
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
                                                    lineNumber: 617,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 616,
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
                                                    lineNumber: 620,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 619,
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
                                                    lineNumber: 623,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 622,
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
                                                    lineNumber: 626,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                                lineNumber: 625,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                                    lineNumber: 591,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                            lineNumber: 534,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/Admin/AssuranceAgent/index.tsx",
                    lineNumber: 525,
                    columnNumber: 5
                }, this);
            };
            _s(AssuranceAgent, "B56Ps/wX30hhmRMbhn6PcojG5Xw=");
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
        }
    }
}, function(runtime) {
    runtime._h = '10834498868942581607';
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

//# sourceMappingURL=p__Admin__index-async.17429166017648039187.hot-update.js.map