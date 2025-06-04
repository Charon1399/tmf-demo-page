globalThis.makoModuleHotUpdate('p__User__Chat__index', {
    modules: {
        "src/pages/User/Chat/chatScript.tsx": function(module, exports, __mako_require__) {
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
                DefaultThinkingText: function() {
                    return DefaultThinkingText;
                },
                GetAgentResponses: function() {
                    return GetAgentResponses;
                },
                GetMessagePreview: function() {
                    return GetMessagePreview;
                },
                GetResponseReactNode: function() {
                    return GetResponseReactNode;
                },
                InitThinkingText: function() {
                    return InitThinkingText;
                }
            });
            var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
            var _reactrefresh = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react-refresh/runtime.js"));
            var _jsxdevruntime = __mako_require__("node_modules/react/jsx-dev-runtime.js");
            var prevRefreshReg;
            var prevRefreshSig;
            prevRefreshReg = self.$RefreshReg$;
            prevRefreshSig = self.$RefreshSig$;
            self.$RefreshReg$ = (type, id)=>{
                _reactrefresh.register(type, module.id + id);
            };
            self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
            const DefaultThinkingText = "I am thinking...";
            const InitThinkingText = `( Now I need to address the user's inquiry. 
The user is a medical institution looking to add a new AI medical imaging analysis application to their hospital and wants to know how to order such a product. I need to understand their specific needs and then guide them on how to select and order the appropriate product.
First, I need to review the Business Model to identify the considerations and configuration requirements for medical-related services. I will outline the business framework and request key information from the Customer.
Next, I will check the Product Inventory, including both our company's products and those of our partners, to determine which suitable products, resources, and services can be matched.
In the next step, I will finalize the Product Portfolio Solution, generate a Product Order, and communicate the value of our solution to the Customer to persuade them to place an order. )
`;
            const comparisonDetailData = [
                {
                    comparisonDimension: 'Monetary Cost',
                    purchasingThroughOperator: 'First - year cost: 528,900 RMB.  [$73,572] (A 3 - year contract includes discounts).',
                    selfProcurementAndDeployment: '1. 5G Private Network: Building it independently requires purchasing base stations, core network equipment, etc. Estimated initial investment exceeds 800,000 RMB, with an annual O&M cost of 150,000 RMB .',
                    costDifference: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: "First - year additional cost: approximately 1,009,900 RMB [$140,509]"
                            }, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 35,
                                columnNumber: 98
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 35,
                                columnNumber: 104
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: "(saving 65.63% of IT and resource costs)"
                            }, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    comparisonDimensionRowSpan: 6,
                    purchasingThroughOperatorRowSpan: 6,
                    selfProcurementAndDeploymentRowSpan: 1,
                    costDifferenceRowSpan: 6
                },
                {
                    comparisonDimension: '',
                    purchasingThroughOperator: '',
                    selfProcurementAndDeployment: '2. IDC Storage: Purchasing 200TB SSD storage separately, with an annual cost of about 30,000 RMB.',
                    costDifference: '',
                    selfProcurementAndDeploymentRowSpan: 1
                },
                {
                    comparisonDimension: '',
                    purchasingThroughOperator: '',
                    selfProcurementAndDeployment: '3. AI Cloud Resources: Independently leasing resources with the same configuration without discounts, with an annual cost of about 340,000 RMB.',
                    costDifference: '',
                    selfProcurementAndDeploymentRowSpan: 1
                },
                {
                    comparisonDimension: '',
                    purchasingThroughOperator: '',
                    selfProcurementAndDeployment: '4. AI Platform and Model Fine - Tuning: Purchasing from Tenc Cloud without package discounts, and no discount for per - case fees. The original price is 1,600 RMB/1,000 cases, so the first - year cost is 116,800 RMB; The cost for a single model fine - tuning is 60,000 RMB.',
                    costDifference: '',
                    selfProcurementAndDeploymentRowSpan: 1
                },
                {
                    comparisonDimension: '',
                    purchasingThroughOperator: '',
                    selfProcurementAndDeployment: '5. Privacy Computing and Energy - saving Services: Privacy computing remains unchanged at 12,000 RMB in the first year. Without an overall energy-saving optimization mechanism, it is estimated that the annual electricity consumption cost will increase by 30,000 RMB.',
                    costDifference: '',
                    selfProcurementAndDeploymentRowSpan: 1
                },
                {
                    comparisonDimension: '',
                    purchasingThroughOperator: '',
                    selfProcurementAndDeployment: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: "Total first - year cost: approximately 1,538,800 RMB [$214,095]"
                    }, void 0, false, {
                        fileName: "src/pages/User/Chat/chatScript.tsx",
                        lineNumber: 74,
                        columnNumber: 39
                    }, this),
                    costDifference: '',
                    selfProcurementAndDeploymentRowSpan: 1
                },
                {
                    comparisonDimension: 'Human Cost',
                    purchasingThroughOperator: '1. One - stop service by the operator, only requiring 1 - 2 IT staff from the hospital for docking. Calculated at an average annual salary of 200,000 RMB per person, the annual human cost is 200,000 - 400,000 RMB [$27,826-$55,652].',
                    selfProcurementAndDeployment: '1. Need to form a 5 - 8 - person cross - departmental team (including procurement, technical, and coordination personnel) to be responsible for supplier docking, contract negotiation, system integration, etc. Calculated at an average annual salary of 200,000 RMB per person, the annual human cost is 1,000,000 - 1,600,000 RMB.',
                    costDifference: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: "Annual additional human cost: 1,400,000 - 2,200,000 RMB [$194,783 - $306,088]"
                            }, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 83,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 83,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                children: "(saving about 85% of human costs)"
                            }, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    comparisonDimensionRowSpan: 3,
                    purchasingThroughOperatorRowSpan: 1,
                    selfProcurementAndDeploymentRowSpan: 1,
                    costDifferenceRowSpan: 3
                },
                {
                    comparisonDimension: '',
                    purchasingThroughOperator: '2. The operator is responsible for all deployment, debugging, and O&M, so the hospital does not need to invest additional human resources.',
                    selfProcurementAndDeployment: '2. System O&M requires an additional 3 - 5 full - time personnel, with an annual human cost of 600,000 - 1,000,000 RMB.',
                    costDifference: '',
                    purchasingThroughOperatorRowSpan: 1,
                    selfProcurementAndDeploymentRowSpan: 1
                },
                {
                    comparisonDimension: '',
                    purchasingThroughOperator: '',
                    selfProcurementAndDeployment: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                        children: "Total annual human cost: approximately 1,600,000 - 2,600,000 RMB [$222,609 - $361,740]"
                    }, void 0, false, {
                        fileName: "src/pages/User/Chat/chatScript.tsx",
                        lineNumber: 102,
                        columnNumber: 39
                    }, this),
                    costDifference: '',
                    purchasingThroughOperatorRowSpan: 1,
                    selfProcurementAndDeploymentRowSpan: 1
                }
            ];
            const comparisonDetailTable = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("table", {
                border: 1,
                style: {
                    width: '100%',
                    borderCollapse: 'collapse',
                    margin: '8px 0px'
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Comparison Dimension"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 113,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Purchasing through Operator"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Self - Procurement and Deployment"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Cost Difference"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 116,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/User/Chat/chatScript.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/User/Chat/chatScript.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                        children: comparisonDetailData.map((row, index)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: [
                                    row.comparisonDimensionRowSpan && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        rowSpan: row.comparisonDimensionRowSpan,
                                        children: row.comparisonDimension
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Chat/chatScript.tsx",
                                        lineNumber: 122,
                                        columnNumber: 56
                                    }, this),
                                    row.purchasingThroughOperatorRowSpan && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        rowSpan: row.purchasingThroughOperatorRowSpan,
                                        children: row.purchasingThroughOperator
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Chat/chatScript.tsx",
                                        lineNumber: 123,
                                        columnNumber: 62
                                    }, this),
                                    row.selfProcurementAndDeploymentRowSpan && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        rowSpan: row.selfProcurementAndDeploymentRowSpan,
                                        children: row.selfProcurementAndDeployment
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Chat/chatScript.tsx",
                                        lineNumber: 124,
                                        columnNumber: 65
                                    }, this),
                                    row.costDifferenceRowSpan && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                        rowSpan: row.costDifferenceRowSpan,
                                        children: row.costDifference
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Chat/chatScript.tsx",
                                        lineNumber: 125,
                                        columnNumber: 51
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 121,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "src/pages/User/Chat/chatScript.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/User/Chat/chatScript.tsx",
                lineNumber: 110,
                columnNumber: 5
            }, this);
            const orderDetailData = [
                {
                    productCategory: 'Operator Resources',
                    specificProduct: '5G Medical Private Network',
                    specificationsConfigurations: '5G SA Stand - Alone Networking with Slice Isolation',
                    unitPrice: '8,000 RMB/month',
                    periodYears: '3 years',
                    firstYearCost: '96000',
                    energySavingFeatures: 'Used for transmitting medical data within the hospital. Equipped with intelligent power - saving technology, automatically reduces power consumption at night',
                    rowSpan: 3
                },
                {
                    productCategory: '',
                    specificProduct: '200TB IDC Encrypted Storage',
                    specificationsConfigurations: 'DICOM Format Support',
                    unitPrice: '1,500 RMB/month',
                    periodYears: '3 years',
                    firstYearCost: '18000',
                    energySavingFeatures: 'Including basic storage, retrieval, and archiving functions'
                },
                {
                    productCategory: '',
                    specificProduct: 'AI Cloud Resources',
                    specificationsConfigurations: '4 A100 GPUs and 64 CPU Cores',
                    unitPrice: '20,000 RMB/month',
                    periodYears: '3 years',
                    firstYearCost: '240000',
                    energySavingFeatures: 'Fine - tuning of specific models to improve accuracy. The data center has obtained the "Green Data Center" certification, with high energy efficiency'
                },
                {
                    productCategory: 'Cloud Vendor Services',
                    specificProduct: 'Tenc Cloud AI Imaging Platform',
                    specificationsConfigurations: 'Lung Nodule/Liver AI Models, Pay - per - Instance',
                    unitPrice: '1,300 RMB/1,000 cases',
                    periodYears: '3 years (200 cases / day)',
                    firstYearCost: '94900',
                    energySavingFeatures: 'Original price 1,600 RMB/1,000 cases, discounted price 1,300 RMB/1,000 cases',
                    rowSpan: 2
                },
                {
                    productCategory: '',
                    specificProduct: 'Model Fine - Tuning Service',
                    specificationsConfigurations: 'Including Data Labeling Guidance',
                    unitPrice: '50,000 RMB/time',
                    periodYears: '1 time',
                    firstYearCost: '50000',
                    energySavingFeatures: '-'
                },
                {
                    productCategory: 'Value - Added Services',
                    specificProduct: 'Privacy Computing Service',
                    specificationsConfigurations: 'AES-256 + Blockchain evidence storage',
                    unitPrice: '1,000 RMB/month',
                    periodYears: '3 years',
                    firstYearCost: '12000',
                    energySavingFeatures: '-',
                    rowSpan: 2
                },
                {
                    productCategory: '',
                    specificProduct: 'Energy - Saving Optimization Service',
                    specificationsConfigurations: 'Regular Energy Efficiency Assessment and Dynamic Optimization',
                    unitPrice: 'Included in the package',
                    periodYears: '3 years',
                    firstYearCost: '-',
                    energySavingFeatures: 'Reduces overall system energy consumption'
                },
                {
                    productCategory: 'Total First - Year Cost: 528900 RMB [$73,572] (including 3 - year contract framework)',
                    specificProduct: '',
                    specificationsConfigurations: '',
                    unitPrice: '',
                    periodYears: '',
                    firstYearCost: '',
                    energySavingFeatures: '',
                    colSpan: 7
                }
            ];
            const orderDetailTable = /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("table", {
                border: 1,
                style: {
                    width: '100%',
                    borderCollapse: 'collapse',
                    margin: '8px 0px'
                },
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("thead", {
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Product Category"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Specific Product"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 228,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Specifications/Configurations"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Unit Price"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Period (year)"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "First - Year Cost (USD)"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 232,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("th", {
                                    children: "Energy - Saving Features"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/User/Chat/chatScript.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/User/Chat/chatScript.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tbody", {
                        children: orderDetailData.map((row, index)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("tr", {
                                children: row.colSpan ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                    colSpan: row.colSpan,
                                    children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                        children: row.productCategory
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Chat/chatScript.tsx",
                                        lineNumber: 240,
                                        columnNumber: 51
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 240,
                                    columnNumber: 25
                                }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                    children: [
                                        row.rowSpan && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            rowSpan: row.rowSpan,
                                            children: row.productCategory
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 243,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: row.specificProduct
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 244,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: row.specificationsConfigurations
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 245,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: row.unitPrice
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 246,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: row.periodYears
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 247,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: row.firstYearCost
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 248,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("td", {
                                            children: row.energySavingFeatures
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 249,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, index, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 238,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "src/pages/User/Chat/chatScript.tsx",
                        lineNumber: 236,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/User/Chat/chatScript.tsx",
                lineNumber: 224,
                columnNumber: 5
            }, this);
            const GetAgentResponses = (userMessage)=>{
                const requestContent = userMessage.content.toLowerCase();
                let agentResponses = [];
                if ((requestContent.includes('need') || requestContent.includes('want')) && (requestContent.includes('healthcare') || requestContent.includes('medical') || requestContent.includes('doctor') || requestContent.includes('hospital'))) // example request:
                // I need to add a new AI medical imaging analysis application for my hospital. How should I order such a product?
                agentResponses.push({
                    id: userMessage.id + 1,
                    content: '11111',
                    sender: 'agent',
                    loading: true,
                    loadingTime: 5000,
                    timestamp: new Date().toLocaleString()
                });
                else if (requestContent.includes('model') || requestContent.includes('requirements')) // example request:
                // We primarily use CT and MRI imaging for screening pulmonary nodules, liver lesions, and cardiovascular and cerebrovascular diseases.
                // Currently, we process 200 cases daily, with an expected increase to 300 cases per day within one year.
                // A 5G private network is required to ensure data transmission, and we also hope to fine-tune the AI model to adapt to our hospital's data. Our hospital is located at No. 88 Keji Road, Qingxiu District, Qingshan City.
                // We have no designated supplier at present, please recommend qualified vendors.
                // Business Availability must reach 99.9%.
                // It is essential to meet the energy-saving requirements of the "Green Hospital" initiative.
                agentResponses.push({
                    id: userMessage.id + 1,
                    content: '22222',
                    sender: 'agent',
                    loading: true,
                    loadingTime: 3000,
                    timestamp: new Date().toLocaleString()
                });
                else if (requestContent.includes('confirm') && requestContent.includes('plan')) // example request:
                // OK, Confirm the plan. Please deploy it as soon as possible.
                agentResponses.push({
                    id: userMessage.id + 1,
                    content: '33333',
                    sender: 'agent',
                    loading: true,
                    loadingTime: 2000,
                    timestamp: new Date().toLocaleString()
                });
                else if (requestContent.includes('confirm') && requestContent.includes('order')) // example request:
                // OK, Confirm the order.
                agentResponses.push({
                    id: userMessage.id + 1,
                    content: '44444',
                    sender: 'agent',
                    loading: true,
                    timestamp: new Date().toLocaleString()
                });
                else agentResponses.push({
                    id: userMessage.id + 1,
                    content: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                        children: "Sorry, I don't understand. Please try again."
                    }, void 0, false, {
                        fileName: "src/pages/User/Chat/chatScript.tsx",
                        lineNumber: 314,
                        columnNumber: 23
                    }, this),
                    sender: 'agent',
                    loading: false,
                    timestamp: new Date().toLocaleString()
                });
                return agentResponses;
            };
            _c = GetAgentResponses;
            const GetResponseReactNode = (messageStr, detailFlag = false, setDetailFlag)=>{
                switch(messageStr){
                    case '11111':
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "Hello! Welcome to inquire about the ordering service for AI medical imaging analysis applications. To quickly customize a solution for you, we need to confirm the following key information:"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 329,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 329,
                                    columnNumber: 223
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: "Requirement Scenarios:"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 330,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 330,
                                    columnNumber: 60
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "• Which medical imaging modalities (such as X-ray, CT, MRI, etc.) do you plan to apply this to?"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 331,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 331,
                                    columnNumber: 129
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "• What diseases will be the primary focus of analysis?"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 332,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 332,
                                    columnNumber: 88
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "• What is the current daily processing volume and the expected daily processing volume within the next year?"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 333,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 333,
                                    columnNumber: 142
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "• Is a 5G private network required for data transmission?"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 334,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 334,
                                    columnNumber: 91
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "• Are there any needs for model training or fine-tuning?"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 335,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 335,
                                    columnNumber: 90
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: "Compliance and Suppliers:"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 336,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 336,
                                    columnNumber: 63
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "• Do you have a designated supplier? If not, would you like us to recommend manufacturers with NMPA certification?"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 337,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 337,
                                    columnNumber: 148
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                    children: "Special Requirements:"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 338,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 338,
                                    columnNumber: 59
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: '• Are there specific requirements for business assurance, "Green Hospital" energy-saving construction, etc.?'
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 339,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 339,
                                    columnNumber: 142
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "• Additionally, please provide the specific geographical location of the hospital to facilitate the planning of edge cloud resources."
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 340,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true);
                    case '22222':
                        const offerContainerStyle = {
                            // width: '800px',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 12,
                            margin: '12px 0px'
                        };
                        const offerStyle = {
                            width: '100%',
                            border: '1px solid #e5e7eb',
                            borderRadius: 8,
                            padding: 8,
                            background: '#fff',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        };
                        const offerTitleStyle = {
                            fontWeight: 700,
                            fontSize: 14,
                            marginBottom: 4
                        };
                        const offerDescriptionStyle = {
                            width: '100%',
                            color: '#6b7280',
                            fontSize: 12
                        };
                        const offerPriceStyle = {
                            fontWeight: 700,
                            fontSize: 14
                        };
                        // const totalPriceStyle: React.CSSProperties = {
                        //     fontWeight: 700,
                        //     fontSize: 16,
                        //     color: 'red',
                        //     textAlign: 'right',
                        //     marginBottom: 8,
                        // };
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "Combining your requirements, we have designed the following product portfolio for you:"
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 388,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 388,
                                    columnNumber: 120
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: offerContainerStyle,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            style: offerStyle,
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerTitleStyle,
                                                    children: "Operator Resources"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 391,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerDescriptionStyle,
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            children: "• 5G Medical Private Network: Standalone networking with slice isolation, latency < 10ms, bandwidth ≥ 1Gbps, equipped with intelligent power-saving technology to automatically reduce power consumption during nighttime low-peak periods."
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 393,
                                                            columnNumber: 285
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            children: "• IDC Storage: 200TB encrypted storage (supporting DICOM format), compliant with the Healthcare Data Security Guidelines."
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 394,
                                                            columnNumber: 171
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            children: "• AI Cloud Resources: Proximity-based allocation according to the hospital’s location, using the Qing Shan Green Data Center Cloud Resource Pool certified as a \"Green Data Center,\" configured with 4 NVIDIA A100 GPUs and 64-core CPUs for model inference and training. High-speed interconnection via SD-WAN with dual-active disaster recovery."
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 392,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerPriceStyle,
                                                    children: "First Year:  372000 RMB [$51,746]"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 397,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 390,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            style: {
                                                ...offerStyle,
                                                width: 'calc(50% - 6px)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerTitleStyle,
                                                    children: "Cloud Vendor Services"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 400,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerDescriptionStyle,
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            children: "• Tenc Cloud AI Imaging Platform: Includes NMPA-certified lung nodule/liver AI models, supporting pay-per-instance purchase."
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 402,
                                                            columnNumber: 170
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            children: "• Model Fine-Tuning Services: Integrate with the hospital’s local data for training."
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 401,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerPriceStyle,
                                                    children: "First Year: 144900 RMB [$20,157]"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 405,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 399,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            style: {
                                                ...offerStyle,
                                                width: 'calc(50% - 6px)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerTitleStyle,
                                                    children: "Value - Added Services​"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 408,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerDescriptionStyle,
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            children: "• Privacy Computing: AES-256 encryption + blockchain evidence storage."
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 410,
                                                            columnNumber: 116
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            children: "• Model Fine-Tuning Service (including data labeling guidance)."
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 33
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 411,
                                                            columnNumber: 109
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            children: "• Energy-Saving Optimization Service: Regular energy efficiency assessments for 5G networks and AI cloud resources, with dynamic resource allocation adjustment to reduce energy consumption."
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                                            lineNumber: 412,
                                                            columnNumber: 33
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    style: offerPriceStyle,
                                                    children: "First Year: 12000 RMB [$1,669]"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 414,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 407,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 389,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                            children: [
                                                "Through our One-Stop Service Solution, we expect to save you at least ",
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "$140,509(65.63%)"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 101
                                                }, this),
                                                " in first-year CAPEX and ",
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "$194,783 – $306,088(around 85%)"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 159
                                                }, this),
                                                " in annual labor costs. "
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 418,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                            onClick: ()=>setDetailFlag(!detailFlag),
                                            style: {
                                                fontSize: 12
                                            },
                                            children: [
                                                "[",
                                                detailFlag ? 'Hide Details' : 'View Details',
                                                "]"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 419,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 417,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 420,
                                    columnNumber: 28
                                }, this),
                                detailFlag && comparisonDetailTable,
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: [
                                        "Your total first-year cost is: ",
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                            style: {
                                                fontSize: 16,
                                                color: 'red'
                                            },
                                            children: "528900 RMB [$73,572]"
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 422,
                                            columnNumber: 58
                                        }, this),
                                        ". Please confirm if you agree!"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 422,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true);
                    case '33333':
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                    children: "Thank you for confirming the order, here are the details of the order: "
                                }, void 0, false, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 428,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("a", {
                                    onClick: ()=>setDetailFlag(!detailFlag),
                                    style: {
                                        fontSize: 12
                                    },
                                    children: [
                                        "[",
                                        detailFlag ? 'Hide Details' : 'View Details',
                                        "]"
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 429,
                                    columnNumber: 21
                                }, this),
                                detailFlag && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    style: {
                                        margin: '8px 0px'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                style: {
                                                    fontSize: 16
                                                },
                                                children: "Customer Order Confirmation"
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                                lineNumber: 432,
                                                columnNumber: 35
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 432,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 432,
                                            columnNumber: 111
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                    children: "Customer Name:"
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                                    lineNumber: 433,
                                                    columnNumber: 35
                                                }, this),
                                                " People's Hospital of Qingshan City"
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 433,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 433,
                                            columnNumber: 108
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("strong", {
                                                children: "Ordered Product Portfolio:"
                                            }, void 0, false, {
                                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                                lineNumber: 434,
                                                columnNumber: 35
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 434,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("br", {}, void 0, false, {
                                            fileName: "src/pages/User/Chat/chatScript.tsx",
                                            lineNumber: 434,
                                            columnNumber: 85
                                        }, this),
                                        orderDetailTable
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/User/Chat/chatScript.tsx",
                                    lineNumber: 431,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true);
                    case '44444':
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                children: "We will proceed with the resource activation."
                            }, void 0, false, {
                                fileName: "src/pages/User/Chat/chatScript.tsx",
                                lineNumber: 443,
                                columnNumber: 21
                            }, this)
                        }, void 0, false);
                    default:
                        return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                            children: messageStr
                        }, void 0, false, {
                            fileName: "src/pages/User/Chat/chatScript.tsx",
                            lineNumber: 447,
                            columnNumber: 20
                        }, this);
                }
            };
            _c1 = GetResponseReactNode;
            const GetMessagePreview = (messageStr)=>{
                switch(messageStr){
                    case '11111':
                        return 'Hello! Welcome to inquire about the ordering service for AI medical imaging analysis applications...';
                    case '22222':
                        return 'Combining your requirements, we have designed the following product portfolio for you:...';
                    case '33333':
                        return 'Thank you for confirming the order, here are the details of the order:...';
                    case '44444':
                        return 'We will proceed with the resource activation.';
                    default:
                        return messageStr.length > 30 ? messageStr.substring(0, 30) + '...' : messageStr;
                }
            };
            _c2 = GetMessagePreview;
            var _c;
            var _c1;
            var _c2;
            $RefreshReg$(_c, "GetAgentResponses");
            $RefreshReg$(_c1, "GetResponseReactNode");
            $RefreshReg$(_c2, "GetMessagePreview");
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
    runtime._h = '7367424013554555777';
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

//# sourceMappingURL=p__User__Chat__index-async.347118477756704627.hot-update.js.map