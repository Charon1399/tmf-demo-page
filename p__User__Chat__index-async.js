((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['p__User__Chat__index'],
{ "src/components/Typewriter/index.tsx": function (module, exports, __mako_require__){
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
var _s = $RefreshSig$();
const Typewriter = ({ text, typingSpeed })=>{
    _s();
    const [displayText, setDisplayText] = (0, _react.useState)('');
    const [currentIndex, setCurrentIndex] = (0, _react.useState)(0);
    (0, _react.useEffect)(()=>{
        const interval = setInterval(()=>{
            if (currentIndex < text.length) {
                setDisplayText((prevText)=>prevText + text[currentIndex]);
                setCurrentIndex((prevIndex)=>prevIndex + 1);
            } else clearInterval(interval);
        }, typingSpeed);
        return ()=>{
            clearInterval(interval);
        };
    }, [
        text,
        typingSpeed,
        currentIndex
    ]);
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
        children: displayText
    }, void 0, false, {
        fileName: "src/components/Typewriter/index.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
};
_s(Typewriter, "hIUgadE6edYynGHHGmHPDKhBDus=");
_c = Typewriter;
var _default = Typewriter;
var _c;
$RefreshReg$(_c, "Typewriter");
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
"src/pages/User/Chat/automobile.png": function (module, exports, __mako_require__){
module.exports = `${__mako_require__.publicPath}automobile.9f648f60.png`;

},
"src/pages/User/Chat/chatScript.tsx": function (module, exports, __mako_require__){
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

},
"src/pages/User/Chat/education.png": function (module, exports, __mako_require__){
module.exports = `${__mako_require__.publicPath}education.03ab4e32.png`;

},
"src/pages/User/Chat/healthcare.png": function (module, exports, __mako_require__){
module.exports = `${__mako_require__.publicPath}healthcare.9a7e72e3.png`;

},
"src/pages/User/Chat/healthcare_bg.png": function (module, exports, __mako_require__){
module.exports = `${__mako_require__.publicPath}healthcare_bg.26f89b73.png`;

},
"src/pages/User/Chat/index.less?asmodule": function (module, exports, __mako_require__){
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
    "agentMessage": `agentMessage-PGRO7Fuf`,
    "ant-pro-sider": `ant-pro-sider-yvi5E7Vu`,
    "inputArea": `inputArea-_mCA-TeQ`,
    "messageLoading": `messageLoading-FZFeC4hX`,
    "textAreaWrapper": `textAreaWrapper-JazEXUZi`,
    "messageContent": `messageContent-cn2cYvf3`,
    "sessionTitle": `sessionTitle-Gk8N9fzy`,
    "ant-table-tbody": `ant-table-tbody-kS3R2bWT`,
    "messageTime": `messageTime-rM6mwYyr`,
    "activeSession": `activeSession-jv4_Zbdr`,
    "sendButtonInTextArea": `sendButtonInTextArea-MGHwdFjA`,
    "ant-pro-layout": `ant-pro-layout-wo6sld9R`,
    "siderContent": `siderContent-QYnPOh7a`,
    "sessionMessage": `sessionMessage-DL11KuWG`,
    "messageText": `messageText-R8LvqjLs`,
    "root": `root-wqG0_1Lq`,
    "chatLayout": `chatLayout-9tdAs-tr`,
    "sessionTime": `sessionTime-D5DSgI7W`,
    "textArea": `textArea-Mybjqx36`,
    "messageDivider": `messageDivider-RH5zacDB`,
    "ant-table": `ant-table-lDmPHI5K`,
    "message": `message-wblpSIvS`,
    "sessionCard": `sessionCard-Y4TglxiL`,
    "sessionList": `sessionList-ko3BRuzM`,
    "siderContentTitle": `siderContentTitle-Zj2yDF1j`,
    "ant-pro-sider-fixed": `ant-pro-sider-fixed-bTu95BWe`,
    "sider": `sider-w8FnSB3P`,
    "chatWindow": `chatWindow-nD8_HYY9`,
    "colorWeak": `colorWeak-mAAoYLcy`,
    "newSessionProductList": `newSessionProductList-aDfDPMXw`,
    "ant-table-thead": `ant-table-thead-jJ9SfdLT`,
    "productImage": `productImage-CK6ebiSI`,
    "messages": `messages-rW_cRF_0`,
    "userMessage": `userMessage--TzF6d8F`,
    "ant-pro-layout-content": `ant-pro-layout-content-uIQZP5S5`,
    "avatar": `avatar-K1REuv86`,
    "ant-layout": `ant-layout-_IAyrM-8`,
    "ant-layout-sider": `ant-layout-sider-w9iU0yxh`,
    "newChatButton": `newChatButton-vpr_tRxc`,
    "productItem": `productItem-BdTf-5Fc`,
    "newSessionTitle": `newSessionTitle-ABCDUd0I`,
    "siderHeader": `siderHeader-zAkQAMxY`,
    "content": `content-gYnHwv2u`,
    "productName": `productName-A9_Ps0kY`
};

},
"src/pages/User/Chat/index.tsx": function (module, exports, __mako_require__){
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
var _indexlessasmodule = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/pages/User/Chat/index.less?asmodule"));
var _chatScript = __mako_require__("src/pages/User/Chat/chatScript.tsx");
var _constants = __mako_require__("src/contexts/constants.tsx");
var _Typewriter = /*#__PURE__*/ _interop_require_default._(__mako_require__("src/components/Typewriter/index.tsx"));
var prevRefreshReg;
var prevRefreshSig;
prevRefreshReg = self.$RefreshReg$;
prevRefreshSig = self.$RefreshSig$;
self.$RefreshReg$ = (type, id)=>{
    _reactrefresh.register(type, module.id + id);
};
self.$RefreshSig$ = _reactrefresh.createSignatureFunctionForTransform;
var _s = $RefreshSig$();
const { Content, Sider } = _antd.Layout;
const { TextArea } = _antd.Input;
const { Title } = _antd.Typography;
const USER_CHAT_STORAGE_KEY = 'user_chat_sessions';
const ChatPage = ()=>{
    _s();
    // 从 localStorage 加载会话数据，如果没有则使用默认值
    const [sessions, setSessions] = (0, _react.useState)(()=>{
        const savedSessions = localStorage.getItem(USER_CHAT_STORAGE_KEY);
        if (savedSessions && savedSessions !== '[]') return JSON.parse(savedSessions);
        return [
            {
                id: 1,
                title: 'New Chat',
                lastMessage: '',
                timestamp: new Date().toLocaleString(),
                messages: []
            }
        ];
    });
    const [currentSessionId, setCurrentSessionId] = (0, _react.useState)(1);
    const [inputValue, setInputValue] = (0, _react.useState)('');
    const [inputDisabled, setInputDisabled] = (0, _react.useState)(false);
    const [comparisonDetailFlag, setComparisonDetailFlag] = (0, _react.useState)(false);
    const [orderDetailFlag, setOrderDetailFlag] = (0, _react.useState)(true);
    // 当会话数据更新时，保存到 localStorage
    (0, _react.useEffect)(()=>{
        localStorage.setItem(USER_CHAT_STORAGE_KEY, JSON.stringify(sessions));
        const scrollableArea = document.getElementById('scrollableArea');
        if (scrollableArea) scrollableArea.scrollTop = scrollableArea.scrollHeight;
    }, [
        sessions
    ]);
    const currentSession = sessions.find((session)=>session.id === currentSessionId);
    const handleSendMessage = async ()=>{
        if (!inputValue.trim() || !currentSession) return;
        // disable input until the agent finishes responding
        setInputDisabled(true);
        // append user message to the session
        const newUserMessage = {
            id: currentSession.messages.length + 1,
            content: inputValue,
            sender: 'user',
            timestamp: new Date().toLocaleString(),
            loading: false
        };
        let updatedSessions = updateMessageToSession(newUserMessage, sessions);
        setInputValue('');
        const newAgentMessages = (0, _chatScript.GetAgentResponses)(newUserMessage);
        for (const message of newAgentMessages){
            // thinking
            if (message.loading === true) {
                updateMessageToSession(message, updatedSessions);
                // wait for 1 second
                await new Promise((resolve)=>setTimeout(resolve, message.loadingTime || 1000));
            }
            // finish thinking
            message.loading = false;
            updatedSessions = updateMessageToSession(message, updatedSessions);
            // order confirmed
            if (message.content === '44444') localStorage.setItem(_constants.SCENARIO_STORAGE_KEY, _constants.Scenario.orderReceived.toString());
        }
        setInputDisabled(false);
    };
    const handleNewChat = ()=>{
        const newSession = {
            id: sessions.length + 1,
            title: `New Chat ${sessions.length + 1}`,
            lastMessage: '',
            timestamp: new Date().toLocaleString(),
            messages: []
        };
        setSessions([
            ...sessions,
            newSession
        ]);
        setCurrentSessionId(newSession.id);
    };
    const updateMessageToSession = (newMessage, sessions)=>{
        const updatedSessions = sessions.map((session)=>{
            if (session.id === currentSessionId) return {
                ...session,
                messages: [
                    ...session.messages,
                    newMessage
                ],
                lastMessage: newMessage.loading ? session.lastMessage : newMessage.content,
                timestamp: newMessage.timestamp
            };
            return session;
        });
        setSessions(updatedSessions);
        return updatedSessions;
    };
    const isNewSession = currentSession && currentSession.messages.length === 0;
    return /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Layout, {
        className: _indexlessasmodule.default.chatLayout,
        children: [
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Sider, {
                width: 160,
                className: _indexlessasmodule.default.sider,
                children: [
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.siderHeader,
                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                            type: "text",
                            icon: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.PlusOutlined, {}, void 0, false, {
                                fileName: "src/pages/User/Chat/index.tsx",
                                lineNumber: 135,
                                columnNumber: 19
                            }, void 0),
                            onClick: handleNewChat,
                            className: _indexlessasmodule.default.newChatButton,
                            children: "New Chat"
                        }, void 0, false, {
                            fileName: "src/pages/User/Chat/index.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "src/pages/User/Chat/index.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                        className: _indexlessasmodule.default.siderContent,
                        children: [
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Title, {
                                level: 5,
                                className: _indexlessasmodule.default.siderContentTitle,
                                children: "Past Sessions"
                            }, void 0, false, {
                                fileName: "src/pages/User/Chat/index.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List, {
                                className: _indexlessasmodule.default.sessionList,
                                dataSource: sessions,
                                renderItem: (session)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.List.Item, {
                                        style: {
                                            padding: "4px 0"
                                        },
                                        children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Card, {
                                            size: "small",
                                            className: `${_indexlessasmodule.default.sessionCard} ${session.id === currentSessionId ? _indexlessasmodule.default.activeSession : ''}`,
                                            onClick: ()=>setCurrentSessionId(session.id),
                                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Space, {
                                                direction: "vertical",
                                                style: {
                                                    width: '100%'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.sessionTitle,
                                                        children: session.title
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Chat/index.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.sessionMessage,
                                                        children: (0, _chatScript.GetMessagePreview)(session.lastMessage)
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Chat/index.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                        className: _indexlessasmodule.default.sessionTime,
                                                        children: session.timestamp
                                                    }, void 0, false, {
                                                        fileName: "src/pages/User/Chat/index.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "src/pages/User/Chat/index.tsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, void 0)
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 149,
                                            columnNumber: 17
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Chat/index.tsx",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, void 0)
                            }, void 0, false, {
                                fileName: "src/pages/User/Chat/index.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/pages/User/Chat/index.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/pages/User/Chat/index.tsx",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(Content, {
                className: _indexlessasmodule.default.content,
                children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                    className: _indexlessasmodule.default.chatWindow,
                    style: isNewSession ? {
                        background: '#fff'
                    } : {
                        backgroundImage: `url(${__mako_require__("src/pages/User/Chat/healthcare_bg.png")})`
                    },
                    children: [
                        isNewSession && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.newSessionTitle,
                            children: "Welcome! Tell me what you want~"
                        }, void 0, false, {
                            fileName: "src/pages/User/Chat/index.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        !isNewSession && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.messages,
                            id: 'scrollableArea',
                            children: currentSession === null || currentSession === void 0 ? void 0 : currentSession.messages.map((message)=>/*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: `${_indexlessasmodule.default.message} ${message.sender === 'user' ? _indexlessasmodule.default.userMessage : _indexlessasmodule.default.agentMessage}`,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Avatar, {
                                            icon: message.sender === 'user' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.UserOutlined, {}, void 0, false, {
                                                fileName: "src/pages/User/Chat/index.tsx",
                                                lineNumber: 181,
                                                columnNumber: 55
                                            }, void 0) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.RobotOutlined, {}, void 0, false, {
                                                fileName: "src/pages/User/Chat/index.tsx",
                                                lineNumber: 181,
                                                columnNumber: 74
                                            }, void 0),
                                            className: _indexlessasmodule.default.avatar
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 180,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: _indexlessasmodule.default.messageContent,
                                            children: [
                                                message.loading ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    className: _indexlessasmodule.default.messageText,
                                                    children: [
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Spin, {
                                                            indicator: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_icons.LoadingOutlined, {
                                                                spin: true
                                                            }, void 0, false, {
                                                                fileName: "src/pages/User/Chat/index.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 42
                                                            }, void 0),
                                                            className: _indexlessasmodule.default.messageLoading
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/index.tsx",
                                                            lineNumber: 187,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                            className: _indexlessasmodule.default.messageLoading,
                                                            children: message.content === '11111' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_Typewriter.default, {
                                                                text: _chatScript.InitThinkingText,
                                                                typingSpeed: 2
                                                            }, void 0, false, {
                                                                fileName: "src/pages/User/Chat/index.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 31
                                                            }, this) : _chatScript.DefaultThinkingText
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/index.tsx",
                                                            lineNumber: 188,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/User/Chat/index.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    className: _indexlessasmodule.default.messageText,
                                                    children: [
                                                        message.content === '11111' && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_jsxdevruntime.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("span", {
                                                                    className: _indexlessasmodule.default.messageLoading,
                                                                    children: _chatScript.InitThinkingText
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/User/Chat/index.tsx",
                                                                    lineNumber: 201,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                                    className: _indexlessasmodule.default.messageDivider
                                                                }, void 0, false, {
                                                                    fileName: "src/pages/User/Chat/index.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true),
                                                        message.content === '22222' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            children: (0, _chatScript.GetResponseReactNode)(message.content, comparisonDetailFlag, setComparisonDetailFlag)
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/index.tsx",
                                                            lineNumber: 206,
                                                            columnNumber: 29
                                                        }, this) : message.content === '33333' ? /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                            children: (0, _chatScript.GetResponseReactNode)(message.content, orderDetailFlag, setOrderDetailFlag)
                                                        }, void 0, false, {
                                                            fileName: "src/pages/User/Chat/index.tsx",
                                                            lineNumber: 210,
                                                            columnNumber: 31
                                                        }, this) : (0, _chatScript.GetResponseReactNode)(message.content, false, ()=>{})
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "src/pages/User/Chat/index.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                                    className: _indexlessasmodule.default.messageTime,
                                                    children: message.timestamp
                                                }, void 0, false, {
                                                    fileName: "src/pages/User/Chat/index.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 184,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, message.id, true, {
                                    fileName: "src/pages/User/Chat/index.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "src/pages/User/Chat/index.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.inputArea,
                            children: /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                className: _indexlessasmodule.default.textAreaWrapper,
                                children: [
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(TextArea, {
                                        value: inputValue,
                                        className: _indexlessasmodule.default.textArea,
                                        onChange: (e)=>setInputValue(e.target.value),
                                        placeholder: "Type your message...",
                                        autoSize: {
                                            minRows: 2,
                                            maxRows: 6
                                        },
                                        onPressEnter: (e)=>{
                                            if (!e.shiftKey) {
                                                e.preventDefault();
                                                handleSendMessage();
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Chat/index.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)(_antd.Button, {
                                        type: "primary",
                                        onClick: handleSendMessage,
                                        className: _indexlessasmodule.default.sendButtonInTextArea,
                                        disabled: inputDisabled,
                                        children: "Send"
                                    }, void 0, false, {
                                        fileName: "src/pages/User/Chat/index.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/pages/User/Chat/index.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "src/pages/User/Chat/index.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        isNewSession && /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                            className: _indexlessasmodule.default.newSessionProductList,
                            children: [
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: _indexlessasmodule.default.productItem,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: __mako_require__("src/pages/User/Chat/healthcare.png"),
                                            alt: "Healthcare",
                                            className: _indexlessasmodule.default.productImage
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: _indexlessasmodule.default.productName,
                                            children: "Healthcare"
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/User/Chat/index.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: _indexlessasmodule.default.productItem,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: __mako_require__("src/pages/User/Chat/education.png"),
                                            alt: "Education",
                                            className: _indexlessasmodule.default.productImage
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: _indexlessasmodule.default.productName,
                                            children: "Education"
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/User/Chat/index.tsx",
                                    lineNumber: 254,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                    className: _indexlessasmodule.default.productItem,
                                    children: [
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("img", {
                                            src: __mako_require__("src/pages/User/Chat/automobile.png"),
                                            alt: "Automobile",
                                            className: _indexlessasmodule.default.productImage
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, _jsxdevruntime.jsxDEV)("div", {
                                            className: _indexlessasmodule.default.productName,
                                            children: "Automobile"
                                        }, void 0, false, {
                                            fileName: "src/pages/User/Chat/index.tsx",
                                            lineNumber: 260,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "src/pages/User/Chat/index.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/pages/User/Chat/index.tsx",
                            lineNumber: 249,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/pages/User/Chat/index.tsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/pages/User/Chat/index.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/pages/User/Chat/index.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
};
_s(ChatPage, "U4k3OqULME86LRLoXGMCkHAgh1A=");
_c = ChatPage;
var _default = ChatPage;
var _c;
$RefreshReg$(_c, "ChatPage");
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
//# sourceMappingURL=p__User__Chat__index-async.js.map