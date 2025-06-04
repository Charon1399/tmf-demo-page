((typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] = (typeof globalThis !== 'undefined' ? globalThis : self)["makoChunk_ant-design-pro"] || []).push([
        ['vendors_5'],
{ "node_modules/@ant-design/icons-svg/lib/asn/ArrowLeftOutlined.js": function (module, exports, __mako_require__){
"use strict";
// This icon file is generated automatically.
__mako_require__.d(exports, "__esModule", {
    value: true
});
var ArrowLeftOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"
                }
            }
        ]
    },
    "name": "arrow-left",
    "theme": "outlined"
};
exports.default = ArrowLeftOutlined;

},
"node_modules/@ant-design/icons-svg/lib/asn/ArrowRightOutlined.js": function (module, exports, __mako_require__){
"use strict";
// This icon file is generated automatically.
__mako_require__.d(exports, "__esModule", {
    value: true
});
var ArrowRightOutlined = {
    "icon": {
        "tag": "svg",
        "attrs": {
            "viewBox": "64 64 896 896",
            "focusable": "false"
        },
        "children": [
            {
                "tag": "path",
                "attrs": {
                    "d": "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"
                }
            }
        ]
    },
    "name": "arrow-right",
    "theme": "outlined"
};
exports.default = ArrowRightOutlined;

},
"node_modules/@ant-design/pro-descriptions/es/index.js": function (module, exports, __mako_require__){
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
    FieldRender: function() {
        return FieldRender;
    },
    ProDescriptions: function() {
        return ProDescriptions;
    },
    default: function() {
        return _default;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _toConsumableArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"));
var _regeneratorRuntime = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"));
var _asyncToGenerator = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _icons = __mako_require__("node_modules/@ant-design/icons/es/index.js");
var _proform = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/@ant-design/pro-form/es/index.js"));
var _proskeleton = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-skeleton/es/index.js"));
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _toArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/Children/toArray.js"));
var _get = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/utils/get.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _useFetchData = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-descriptions/es/useFetchData.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
__mako_require__("node_modules/antd/es/descriptions/style/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "valueEnum",
    "render",
    "renderText",
    "mode",
    "plain",
    "dataIndex",
    "request",
    "params",
    "editable"
];
var _excluded2 = [
    "request",
    "columns",
    "params",
    "dataSource",
    "onDataSourceChange",
    "formProps",
    "editable",
    "loading",
    "onLoadingChange",
    "actionRef",
    "onRequestError",
    "emptyText",
    "contentStyle"
];
/**
 * 根据 dataIndex 获取值，支持 dataIndex 为数组
 *
 * @param item
 * @param entity
 */ var getDataFromConfig = function getDataFromConfig(item, entity) {
    var dataIndex = item.dataIndex;
    if (dataIndex) {
        var data = Array.isArray(dataIndex) ? (0, _get.default)(entity, dataIndex) : entity[dataIndex];
        if (data !== undefined || data !== null) return data;
    }
    return item.children;
};
var FieldRender = function FieldRender(props) {
    var _proTheme$useToken2;
    var valueEnum = props.valueEnum, action = props.action, index = props.index, text = props.text, entity = props.entity, mode = props.mode, render = props.render, editableUtils = props.editableUtils, valueType = props.valueType, plain = props.plain, dataIndex = props.dataIndex, request = props.request, renderFormItem = props.renderFormItem, params = props.params, emptyText = props.emptyText;
    var form = _proform.default.useFormInstance();
    var _proTheme$useToken = (_proTheme$useToken2 = _proprovider.proTheme.useToken) === null || _proTheme$useToken2 === void 0 ? void 0 : _proTheme$useToken2.call(_proprovider.proTheme), token = _proTheme$useToken.token;
    var fieldConfig = {
        text: text,
        valueEnum: valueEnum,
        mode: mode || 'read',
        proFieldProps: {
            emptyText: emptyText,
            render: render ? function(finText) {
                return render === null || render === void 0 ? void 0 : render(finText, entity, index, action, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
                    type: 'descriptions'
                }));
            } : undefined
        },
        ignoreFormItem: true,
        valueType: valueType,
        request: request,
        params: params,
        plain: plain
    };
    /** 如果是只读模式，fieldProps 的 form是空的，所以需要兜底处理 */ if (mode === 'read' || !mode || valueType === 'option') {
        var fieldProps = (0, _proutils.getFieldPropsOrFormItemProps)(props.fieldProps, undefined, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            rowKey: dataIndex,
            isEditable: false
        }));
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_proform.ProFormField, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            name: dataIndex
        }, fieldConfig), {}, {
            fieldProps: fieldProps
        }));
    }
    var renderDom = function renderDom() {
        var _editableUtils$action;
        var formItemProps = (0, _proutils.getFieldPropsOrFormItemProps)(props.formItemProps, form, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            rowKey: dataIndex,
            isEditable: true
        }));
        var fieldProps = (0, _proutils.getFieldPropsOrFormItemProps)(props.fieldProps, form, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            rowKey: dataIndex,
            isEditable: true
        }));
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            style: {
                display: 'flex',
                gap: token.marginXS,
                alignItems: 'baseline'
            },
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(_proutils.InlineErrorFormItem, (0, _objectSpread2.default)((0, _objectSpread2.default)({
                    name: dataIndex
                }, formItemProps), {}, {
                    style: (0, _objectSpread2.default)({
                        margin: 0
                    }, (formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.style) || {}),
                    initialValue: text || (formItemProps === null || formItemProps === void 0 ? void 0 : formItemProps.initialValue),
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_proform.ProFormField, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldConfig), {}, {
                        // @ts-ignore
                        proFieldProps: (0, _objectSpread2.default)({}, fieldConfig.proFieldProps),
                        renderFormItem: renderFormItem ? function() {
                            return renderFormItem === null || renderFormItem === void 0 ? void 0 : renderFormItem((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
                                type: 'descriptions'
                            }), {
                                isEditable: true,
                                recordKey: dataIndex,
                                record: form.getFieldValue([
                                    dataIndex
                                ].flat(1)),
                                defaultRender: function defaultRender() {
                                    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_proform.ProFormField, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, fieldConfig), {}, {
                                        fieldProps: fieldProps
                                    }));
                                },
                                type: 'descriptions'
                            }, form);
                        } : undefined,
                        fieldProps: fieldProps
                    }))
                })),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    style: {
                        display: 'flex',
                        maxHeight: token.controlHeight,
                        alignItems: 'center',
                        gap: token.marginXS
                    },
                    children: editableUtils === null || editableUtils === void 0 || (_editableUtils$action = editableUtils.actionRender) === null || _editableUtils$action === void 0 ? void 0 : _editableUtils$action.call(editableUtils, dataIndex || index, {
                        cancelText: /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.CloseOutlined, {}),
                        saveText: /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.CheckOutlined, {}),
                        deleteText: false
                    })
                })
            ]
        });
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        style: {
            marginTop: -5,
            marginBottom: -5,
            marginLeft: 0,
            marginRight: 0
        },
        children: renderDom()
    });
};
var schemaToDescriptionsItem = function schemaToDescriptionsItem(items, entity, action, editableUtils, emptyText) {
    var _items$map;
    var options = [];
    var isBigger58 = (0, _proutils.compareVersions)(_antd.version, '5.8.0') >= 0;
    // 因为 Descriptions 只是个语法糖，children 是不会执行的，所以需要这里处理一下
    var children = items === null || items === void 0 || (_items$map = items.map) === null || _items$map === void 0 ? void 0 : _items$map.call(items, function(item, index) {
        var _getDataFromConfig, _restItem$label, _restItem$label2;
        if (/*#__PURE__*/ _react.default.isValidElement(item)) return isBigger58 ? {
            children: item
        } : item;
        var _ref = item, valueEnum = _ref.valueEnum, render = _ref.render, renderText = _ref.renderText, mode = _ref.mode, plain = _ref.plain, dataIndex = _ref.dataIndex, request = _ref.request, params = _ref.params, editable = _ref.editable, restItem = (0, _objectWithoutProperties.default)(_ref, _excluded);
        var defaultData = (_getDataFromConfig = getDataFromConfig(item, entity)) !== null && _getDataFromConfig !== void 0 ? _getDataFromConfig : restItem.children;
        var text = renderText ? renderText(defaultData, entity, index, action) : defaultData;
        var title = typeof restItem.title === 'function' ? restItem.title(item, 'descriptions', null) : restItem.title;
        //  dataIndex 无所谓是否存在
        // 有些时候不需要 dataIndex 可以直接 render
        var valueType = typeof restItem.valueType === 'function' ? restItem.valueType(entity || {}, 'descriptions') : restItem.valueType;
        var isEditable = editableUtils === null || editableUtils === void 0 ? void 0 : editableUtils.isEditable(dataIndex || index);
        var fieldMode = mode || isEditable ? 'edit' : 'read';
        var showEditIcon = editableUtils && fieldMode === 'read' && editable !== false && (editable === null || editable === void 0 ? void 0 : editable(text, entity, index)) !== false;
        var Component = showEditIcon ? _antd.Space : _react.default.Fragment;
        var contentDom = fieldMode === 'edit' ? text : (0, _proutils.genCopyable)(text, item, text);
        var field = isBigger58 && valueType !== 'option' ? (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restItem), {}, {
            key: restItem.key || ((_restItem$label = restItem.label) === null || _restItem$label === void 0 ? void 0 : _restItem$label.toString()) || index,
            label: (title || restItem.label || restItem.tooltip) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_proutils.LabelIconTip, {
                label: title || restItem.label,
                tooltip: restItem.tooltip,
                ellipsis: item.ellipsis
            }),
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(Component, {
                children: [
                    /*#__PURE__*/ (0, _react.createElement)(FieldRender, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                        key: item === null || item === void 0 ? void 0 : item.key,
                        dataIndex: item.dataIndex || index,
                        mode: fieldMode,
                        text: contentDom,
                        valueType: valueType,
                        entity: entity,
                        index: index,
                        emptyText: emptyText,
                        action: action,
                        editableUtils: editableUtils
                    })),
                    showEditIcon && /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.EditOutlined, {
                        onClick: function onClick() {
                            editableUtils === null || editableUtils === void 0 || editableUtils.startEditable(dataIndex || index);
                        }
                    })
                ]
            })
        }) : /*#__PURE__*/ (0, _react.createElement)(_antd.Descriptions.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, restItem), {}, {
            key: restItem.key || ((_restItem$label2 = restItem.label) === null || _restItem$label2 === void 0 ? void 0 : _restItem$label2.toString()) || index,
            label: (title || restItem.label || restItem.tooltip) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_proutils.LabelIconTip, {
                label: title || restItem.label,
                tooltip: restItem.tooltip,
                ellipsis: item.ellipsis
            })
        }), /*#__PURE__*/ (0, _jsxruntime.jsxs)(Component, {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)(FieldRender, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                    dataIndex: item.dataIndex || index,
                    mode: fieldMode,
                    text: contentDom,
                    valueType: valueType,
                    entity: entity,
                    index: index,
                    action: action,
                    editableUtils: editableUtils
                })),
                showEditIcon && valueType !== 'option' && /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.EditOutlined, {
                    onClick: function onClick() {
                        editableUtils === null || editableUtils === void 0 || editableUtils.startEditable(dataIndex || index);
                    }
                })
            ]
        }));
        // 如果类型是 option 自动放到右上角
        if (valueType === 'option') {
            options.push(field);
            return null;
        }
        return field;
    }).filter(function(item) {
        return item;
    });
    return {
        // 空数组传递还是会被判定为有值
        options: options !== null && options !== void 0 && options.length ? options : null,
        children: children
    };
};
var ProDescriptionsItem = function ProDescriptionsItem(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Descriptions.Item, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        children: props.children
    }));
};
ProDescriptionsItem.displayName = 'ProDescriptionsItem';
var DefaultProDescriptionsDom = function DefaultProDescriptionsDom(dom) {
    return dom.children;
};
var ProDescriptions = function ProDescriptions(props) {
    var _props$editable;
    var request = props.request, columns = props.columns, params = props.params, dataSource = props.dataSource, onDataSourceChange = props.onDataSourceChange, formProps = props.formProps, editable = props.editable, loading = props.loading, onLoadingChange = props.onLoadingChange, actionRef = props.actionRef, onRequestError = props.onRequestError, emptyText = props.emptyText, contentStyle = props.contentStyle, rest = (0, _objectWithoutProperties.default)(props, _excluded2);
    var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
    var action = (0, _useFetchData.default)(/*#__PURE__*/ (0, _asyncToGenerator.default)(/*#__PURE__*/ (0, _regeneratorRuntime.default)().mark(function _callee() {
        var data;
        return (0, _regeneratorRuntime.default)().wrap(function _callee$(_context) {
            while(true)switch(_context.prev = _context.next){
                case 0:
                    if (!request) {
                        _context.next = 6;
                        break;
                    }
                    _context.next = 3;
                    return request(params || {});
                case 3:
                    _context.t0 = _context.sent;
                    _context.next = 7;
                    break;
                case 6:
                    _context.t0 = {
                        data: {}
                    };
                case 7:
                    data = _context.t0;
                    return _context.abrupt("return", data);
                case 9:
                case "end":
                    return _context.stop();
            }
        }, _callee);
    })), {
        onRequestError: onRequestError,
        effects: [
            (0, _proutils.stringify)(params)
        ],
        manual: !request,
        dataSource: dataSource,
        loading: loading,
        onLoadingChange: onLoadingChange,
        onDataSourceChange: onDataSourceChange
    });
    /*
   * 可编辑行的相关配置
   */ var editableUtils = (0, _proutils.useEditableMap)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props.editable), {}, {
        childrenColumnName: undefined,
        dataSource: action.dataSource,
        setDataSource: action.setDataSource
    }));
    /** 支持 reload 的功能 */ (0, _react.useEffect)(function() {
        if (actionRef) actionRef.current = (0, _objectSpread2.default)({
            reload: action.reload
        }, editableUtils);
    }, [
        action,
        actionRef,
        editableUtils
    ]);
    // loading 时展示
    // loading =  undefined 但是 request 存在时也应该展示
    if (action.loading || action.loading === undefined && request) return /*#__PURE__*/ (0, _jsxruntime.jsx)(_proskeleton.default, {
        type: "descriptions",
        list: false,
        pageHeader: false
    });
    var getColumns = function getColumns() {
        // 因为 Descriptions 只是个语法糖，children 是不会执行的，所以需要这里处理一下
        var childrenColumns = (0, _toArray.default)(props.children).filter(Boolean).map(function(item) {
            if (!/*#__PURE__*/ _react.default.isValidElement(item)) return item;
            var _ref3 = item === null || item === void 0 ? void 0 : item.props, valueEnum = _ref3.valueEnum, valueType = _ref3.valueType, dataIndex = _ref3.dataIndex, ellipsis = _ref3.ellipsis, copyable = _ref3.copyable, itemRequest = _ref3.request;
            if (!valueType && !valueEnum && !dataIndex && !itemRequest && !ellipsis && !copyable && // @ts-ignore
            item.type.displayName !== 'ProDescriptionsItem') return item;
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item === null || item === void 0 ? void 0 : item.props), {}, {
                entity: dataSource
            });
        });
        return [].concat((0, _toConsumableArray.default)(columns || []), (0, _toConsumableArray.default)(childrenColumns)).filter(function(item) {
            if (!item) return false;
            if (item !== null && item !== void 0 && item.valueType && [
                'index',
                'indexBorder'
            ].includes(item === null || item === void 0 ? void 0 : item.valueType)) return false;
            return !(item !== null && item !== void 0 && item.hideInDescriptions);
        }).sort(function(a, b) {
            if (b.order || a.order) return (b.order || 0) - (a.order || 0);
            return (b.index || 0) - (a.index || 0);
        });
    };
    var _schemaToDescriptions = schemaToDescriptionsItem(getColumns(), action.dataSource || {}, (actionRef === null || actionRef === void 0 ? void 0 : actionRef.current) || action, editable ? editableUtils : undefined, props.emptyText), options = _schemaToDescriptions.options, children = _schemaToDescriptions.children;
    /** 如果不是可编辑模式，没必要注入 ProForm */ var FormComponent = editable ? _proform.default : DefaultProDescriptionsDom;
    /** 即使组件返回null了, 在传递的过程中还是会被Description检测到为有值 */ var title = null;
    if (rest.title || rest.tooltip || rest.tip) title = /*#__PURE__*/ (0, _jsxruntime.jsx)(_proutils.LabelIconTip, {
        label: rest.title,
        tooltip: rest.tooltip || rest.tip
    });
    var className = context.getPrefixCls('pro-descriptions');
    var isBigger58 = (0, _proutils.compareVersions)(_antd.version, '5.8.0') >= 0;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_proutils.ErrorBoundary, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(FormComponent, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            form: (_props$editable = props.editable) === null || _props$editable === void 0 ? void 0 : _props$editable.form,
            component: false,
            submitter: false
        }, formProps), {}, {
            onFinish: undefined,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Descriptions, (0, _objectSpread2.default)((0, _objectSpread2.default)({
                className: className
            }, rest), {}, {
                contentStyle: (0, _objectSpread2.default)({
                    minWidth: 0
                }, contentStyle || {}),
                extra: rest.extra ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_antd.Space, {
                    children: [
                        options,
                        rest.extra
                    ]
                }) : options,
                title: title,
                items: isBigger58 ? children : undefined,
                children: isBigger58 ? null : children
            }))
        }), "form")
    });
};
ProDescriptions.Item = ProDescriptionsItem;
var _default = ProDescriptions;

},
"node_modules/@ant-design/pro-descriptions/es/useFetchData.js": function (module, exports, __mako_require__){
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
var _toConsumableArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"));
var _regeneratorRuntime = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"));
var _asyncToGenerator = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _useMergedState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/hooks/useMergedState.js"));
var _react = __mako_require__("node_modules/react/index.js");
var useFetchData = function useFetchData(getData, options) {
    var _ref = options || {}, onRequestError = _ref.onRequestError, effects = _ref.effects, manual = _ref.manual, dataSource = _ref.dataSource, defaultDataSource = _ref.defaultDataSource, onDataSourceChange = _ref.onDataSourceChange;
    var _useMergedState1 = (0, _useMergedState.default)(defaultDataSource, {
        value: dataSource,
        onChange: onDataSourceChange
    }), _useMergedState2 = (0, _slicedToArray.default)(_useMergedState1, 2), entity = _useMergedState2[0], setEntity = _useMergedState2[1];
    var _useMergedState3 = (0, _useMergedState.default)(options === null || options === void 0 ? void 0 : options.loading, {
        value: options === null || options === void 0 ? void 0 : options.loading,
        onChange: options === null || options === void 0 ? void 0 : options.onLoadingChange
    }), _useMergedState4 = (0, _slicedToArray.default)(_useMergedState3, 2), loading = _useMergedState4[0], setLoading = _useMergedState4[1];
    var updateDataAndLoading = function updateDataAndLoading(data) {
        setEntity(data);
        setLoading(false);
    };
    /** 请求数据 */ var fetchList = /*#__PURE__*/ function() {
        var _ref2 = (0, _asyncToGenerator.default)(/*#__PURE__*/ (0, _regeneratorRuntime.default)().mark(function _callee() {
            var _ref3, data, success;
            return (0, _regeneratorRuntime.default)().wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        if (!loading) {
                            _context.next = 2;
                            break;
                        }
                        return _context.abrupt("return");
                    case 2:
                        setLoading(true);
                        _context.prev = 3;
                        _context.next = 6;
                        return getData();
                    case 6:
                        _context.t0 = _context.sent;
                        if (_context.t0) {
                            _context.next = 9;
                            break;
                        }
                        _context.t0 = {};
                    case 9:
                        _ref3 = _context.t0;
                        data = _ref3.data;
                        success = _ref3.success;
                        if (success !== false) updateDataAndLoading(data);
                        _context.next = 23;
                        break;
                    case 15:
                        _context.prev = 15;
                        _context.t1 = _context["catch"](3);
                        if (!(onRequestError === undefined)) {
                            _context.next = 21;
                            break;
                        }
                        throw new Error(_context.t1);
                    case 21:
                        onRequestError(_context.t1);
                    case 22:
                        setLoading(false);
                    case 23:
                        _context.prev = 23;
                        setLoading(false);
                        return _context.finish(23);
                    case 26:
                    case "end":
                        return _context.stop();
                }
            }, _callee, null, [
                [
                    3,
                    15,
                    23,
                    26
                ]
            ]);
        }));
        return function fetchList() {
            return _ref2.apply(this, arguments);
        };
    }();
    (0, _react.useEffect)(function() {
        if (manual) return;
        fetchList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [].concat((0, _toConsumableArray.default)(effects || []), [
        manual
    ]));
    return {
        dataSource: entity,
        setDataSource: setEntity,
        loading: loading,
        reload: function reload() {
            return fetchList();
        }
    };
};
var _default = useFetchData;

},
"node_modules/@ant-design/pro-layout/es/ProLayout.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ProLayout", {
    enumerable: true,
    get: function() {
        return ProLayout;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _regeneratorRuntime = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"));
var _asyncToGenerator = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _routeutils = __mako_require__("node_modules/@umijs/route-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _useMergedState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/hooks/useMergedState.js"));
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/omit.js"));
var _warning = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/warning.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _swr = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/swr/dist/index/index.mjs"));
var _WrapContent = __mako_require__("node_modules/@ant-design/pro-layout/es/WrapContent.js");
var _Logo = __mako_require__("node_modules/@ant-design/pro-layout/es/assert/Logo.js");
var _Footer = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Footer.js");
var _Header = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Header/index.js");
var _PageLoading = __mako_require__("node_modules/@ant-design/pro-layout/es/components/PageLoading/index.js");
var _SiderMenu = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.js");
var _RouteContext = __mako_require__("node_modules/@ant-design/pro-layout/es/context/RouteContext.js");
var _defaultSettings = __mako_require__("node_modules/@ant-design/pro-layout/es/defaultSettings.js");
var _getPageTitle = __mako_require__("node_modules/@ant-design/pro-layout/es/getPageTitle.js");
var _locales = __mako_require__("node_modules/@ant-design/pro-layout/es/locales/index.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/style/index.js");
var _getBreadcrumbProps = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/getBreadcrumbProps.js");
var _getMenuData = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/getMenuData.js");
var _useCurrentMenuLayoutProps = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/useCurrentMenuLayoutProps.js");
var _utils = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/utils.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "id",
    "defaultMessage"
];
var _excluded2 = [
    "fixSiderbar",
    "navTheme",
    "layout"
];
var layoutIndex = 0;
var headerRender = function headerRender(props, matchMenuKeys) {
    var _props$stylish;
    if (props.headerRender === false || props.pure) return null;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Header.DefaultHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        matchMenuKeys: matchMenuKeys
    }, props), {}, {
        stylish: (_props$stylish = props.stylish) === null || _props$stylish === void 0 ? void 0 : _props$stylish.header
    }));
};
var footerRender = function footerRender(props) {
    if (props.footerRender === false || props.pure) return null;
    if (props.footerRender) return props.footerRender((0, _objectSpread2.default)({}, props), /*#__PURE__*/ (0, _jsxruntime.jsx)(_Footer.DefaultFooter, {}));
    return null;
};
var renderSiderMenu = function renderSiderMenu(props, matchMenuKeys) {
    var _props$stylish3;
    var layout = props.layout, isMobile = props.isMobile, selectedKeys = props.selectedKeys, openKeys = props.openKeys, splitMenus = props.splitMenus, suppressSiderWhenMenuEmpty = props.suppressSiderWhenMenuEmpty, menuRender = props.menuRender;
    if (props.menuRender === false || props.pure) return null;
    var menuData = props.menuData;
    /** 如果是分割菜单模式，需要专门实现一下 */ if (splitMenus && (openKeys !== false || layout === 'mix') && !isMobile) {
        var _ref = selectedKeys || matchMenuKeys, _ref2 = (0, _slicedToArray.default)(_ref, 1), key = _ref2[0];
        if (key) {
            var _props$menuData;
            menuData = ((_props$menuData = props.menuData) === null || _props$menuData === void 0 || (_props$menuData = _props$menuData.find(function(item) {
                return item.key === key;
            })) === null || _props$menuData === void 0 ? void 0 : _props$menuData.children) || [];
        } else menuData = [];
    }
    // 这里走了可以少一次循环
    var clearMenuData = (0, _utils.clearMenuItem)(menuData || []);
    if (clearMenuData && (clearMenuData === null || clearMenuData === void 0 ? void 0 : clearMenuData.length) < 1 && (splitMenus || suppressSiderWhenMenuEmpty)) return null;
    if (layout === 'top' && !isMobile) {
        var _props$stylish2;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_SiderMenu.SiderMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            matchMenuKeys: matchMenuKeys
        }, props), {}, {
            hide: true,
            stylish: (_props$stylish2 = props.stylish) === null || _props$stylish2 === void 0 ? void 0 : _props$stylish2.sider
        }));
    }
    var defaultDom = /*#__PURE__*/ (0, _jsxruntime.jsx)(_SiderMenu.SiderMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        matchMenuKeys: matchMenuKeys
    }, props), {}, {
        // 这里走了可以少一次循环
        menuData: clearMenuData,
        stylish: (_props$stylish3 = props.stylish) === null || _props$stylish3 === void 0 ? void 0 : _props$stylish3.sider
    }));
    if (menuRender) return menuRender(props, defaultDom);
    return defaultDom;
};
var defaultPageTitleRender = function defaultPageTitleRender(pageProps, props) {
    var pageTitleRender = props.pageTitleRender;
    var pageTitleInfo = (0, _getPageTitle.getPageTitleInfo)(pageProps);
    if (pageTitleRender === false) return {
        title: props.title || '',
        id: '',
        pageName: ''
    };
    if (pageTitleRender) {
        var title = pageTitleRender(pageProps, pageTitleInfo.title, pageTitleInfo);
        if (typeof title === 'string') return (0, _getPageTitle.getPageTitleInfo)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, pageTitleInfo), {}, {
            title: title
        }));
        (0, _warning.default)(typeof title === 'string', 'pro-layout: renderPageTitle return value should be a string');
    }
    return pageTitleInfo;
};
var getPaddingInlineStart = function getPaddingInlineStart(hasLeftPadding, collapsed, siderWidth) {
    if (hasLeftPadding) return collapsed ? 64 : siderWidth;
    return 0;
};
/**
 * 🌃 Powerful and easy to use beautiful layout 🏄‍ Support multiple topics and layout types
 *
 * @param props
 */ var BaseProLayout = function BaseProLayout(props) {
    var _props$prefixCls, _location$pathname, _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12;
    var _ref3 = props || {}, children = _ref3.children, propsOnCollapse = _ref3.onCollapse, _ref3$location = _ref3.location, location = _ref3$location === void 0 ? {
        pathname: '/'
    } : _ref3$location, contentStyle = _ref3.contentStyle, route = _ref3.route, defaultCollapsed = _ref3.defaultCollapsed, style = _ref3.style, propsSiderWidth = _ref3.siderWidth, menu = _ref3.menu, siderMenuType = _ref3.siderMenuType, propsIsChildrenLayout = _ref3.isChildrenLayout, menuDataRender = _ref3.menuDataRender, actionRef = _ref3.actionRef, bgLayoutImgList = _ref3.bgLayoutImgList, propsFormatMessage = _ref3.formatMessage, loading = _ref3.loading;
    var siderWidth = (0, _react.useMemo)(function() {
        if (propsSiderWidth) return propsSiderWidth;
        if (props.layout === 'mix') return 215;
        return 256;
    }, [
        props.layout,
        propsSiderWidth
    ]);
    var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
    var prefixCls = (_props$prefixCls = props.prefixCls) !== null && _props$prefixCls !== void 0 ? _props$prefixCls : context.getPrefixCls('pro');
    var _useMountMergeState = (0, _proutils.useMountMergeState)(false, {
        value: menu === null || menu === void 0 ? void 0 : menu.loading,
        onChange: menu === null || menu === void 0 ? void 0 : menu.onLoadingChange
    }), _useMountMergeState2 = (0, _slicedToArray.default)(_useMountMergeState, 2), menuLoading = _useMountMergeState2[0], setMenuLoading = _useMountMergeState2[1];
    // give a default key for swr
    var _useState = (0, _react.useState)(function() {
        layoutIndex += 1;
        return "pro-layout-".concat(layoutIndex);
    }), _useState2 = (0, _slicedToArray.default)(_useState, 1), defaultId = _useState2[0];
    /**
   * 处理国际化相关 formatMessage
   * 如果有用户配置的以用户为主
   * 如果没有用自己实现的
   */ var formatMessage = (0, _react.useCallback)(function(_ref4) {
        var id = _ref4.id, defaultMessage = _ref4.defaultMessage, restParams = (0, _objectWithoutProperties.default)(_ref4, _excluded);
        if (propsFormatMessage) return propsFormatMessage((0, _objectSpread2.default)({
            id: id,
            defaultMessage: defaultMessage
        }, restParams));
        var locales = (0, _locales.gLocaleObject)();
        return locales[id] ? locales[id] : defaultMessage;
    }, [
        propsFormatMessage
    ]);
    var _useSWR = (0, _swr.default)([
        defaultId,
        menu === null || menu === void 0 ? void 0 : menu.params
    ], /*#__PURE__*/ function() {
        var _ref6 = (0, _asyncToGenerator.default)(/*#__PURE__*/ (0, _regeneratorRuntime.default)().mark(function _callee(_ref5) {
            var _menu$request;
            var _ref7, params, menuDataItems;
            return (0, _regeneratorRuntime.default)().wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        _ref7 = (0, _slicedToArray.default)(_ref5, 2), params = _ref7[1];
                        setMenuLoading(true);
                        _context.next = 4;
                        return menu === null || menu === void 0 || (_menu$request = menu.request) === null || _menu$request === void 0 ? void 0 : _menu$request.call(menu, params || {}, (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || []);
                    case 4:
                        menuDataItems = _context.sent;
                        setMenuLoading(false);
                        return _context.abrupt("return", menuDataItems);
                    case 7:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }));
        return function(_x) {
            return _ref6.apply(this, arguments);
        };
    }(), {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
        revalidateOnReconnect: false
    }), data = _useSWR.data, mutate = _useSWR.mutate, isLoading = _useSWR.isLoading;
    (0, _react.useEffect)(function() {
        setMenuLoading(isLoading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isLoading
    ]);
    var _useSWRConfig = (0, _swr.useSWRConfig)(), cache = _useSWRConfig.cache;
    (0, _react.useEffect)(function() {
        return function() {
            if (cache instanceof Map) cache.delete(defaultId);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var menuInfoData = (0, _react.useMemo)(function() {
        return (0, _getMenuData.getMenuData)(data || (route === null || route === void 0 ? void 0 : route.children) || (route === null || route === void 0 ? void 0 : route.routes) || [], menu, formatMessage, menuDataRender);
    }, [
        formatMessage,
        menu,
        menuDataRender,
        data,
        route === null || route === void 0 ? void 0 : route.children,
        route === null || route === void 0 ? void 0 : route.routes
    ]);
    var _ref8 = menuInfoData || {}, breadcrumb = _ref8.breadcrumb, breadcrumbMap = _ref8.breadcrumbMap, _ref8$menuData = _ref8.menuData, menuData = _ref8$menuData === void 0 ? [] : _ref8$menuData;
    if (actionRef && menu !== null && menu !== void 0 && menu.request) actionRef.current = {
        reload: function reload() {
            mutate();
        }
    };
    var matchMenus = (0, _react.useMemo)(function() {
        return (0, _routeutils.getMatchMenu)(location.pathname || '/', menuData || [], true);
    }, [
        location.pathname,
        menuData
    ]);
    var matchMenuKeys = (0, _react.useMemo)(function() {
        return Array.from(new Set(matchMenus.map(function(item) {
            return item.key || item.path || '';
        })));
    }, [
        matchMenus
    ]);
    // 当前选中的menu，一般不会为空
    var currentMenu = matchMenus[matchMenus.length - 1] || {};
    var currentMenuLayoutProps = (0, _useCurrentMenuLayoutProps.useCurrentMenuLayoutProps)(currentMenu);
    var _props$currentMenuLay = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), currentMenuLayoutProps), fixSiderbar = _props$currentMenuLay.fixSiderbar, navTheme = _props$currentMenuLay.navTheme, propsLayout = _props$currentMenuLay.layout, rest = (0, _objectWithoutProperties.default)(_props$currentMenuLay, _excluded2);
    var colSize = (0, _proutils.useBreakpoint)();
    var isMobile = (0, _react.useMemo)(function() {
        return (colSize === 'sm' || colSize === 'xs') && !props.disableMobile;
    }, [
        colSize,
        props.disableMobile
    ]);
    // If it is a fix menu, calculate padding
    // don't need padding in phone mode
    /* Checking if the menu is loading and if it is, it will return a skeleton loading screen. */ var hasLeftPadding = propsLayout !== 'top' && !isMobile;
    var _useMergedState1 = (0, _useMergedState.default)(function() {
        if (defaultCollapsed !== undefined) return defaultCollapsed;
        if (isMobile) return true;
        if (colSize === 'md') return true;
        return false;
    }, {
        value: props.collapsed,
        onChange: propsOnCollapse
    }), _useMergedState2 = (0, _slicedToArray.default)(_useMergedState1, 2), collapsed = _useMergedState2[0], onCollapse = _useMergedState2[1];
    // Splicing parameters, adding menuData and formatMessage in props
    var defaultProps = (0, _omit.default)((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
        prefixCls: prefixCls
    }, props), {}, {
        siderWidth: siderWidth
    }, currentMenuLayoutProps), {}, {
        formatMessage: formatMessage,
        breadcrumb: breadcrumb,
        menu: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, menu), {}, {
            type: siderMenuType || (menu === null || menu === void 0 ? void 0 : menu.type),
            loading: menuLoading
        }),
        layout: propsLayout
    }), [
        'className',
        'style',
        'breadcrumbRender'
    ]);
    // gen page title
    var pageTitleInfo = defaultPageTitleRender((0, _objectSpread2.default)((0, _objectSpread2.default)({
        pathname: location.pathname
    }, defaultProps), {}, {
        breadcrumbMap: breadcrumbMap
    }), props);
    // gen breadcrumbProps, parameter for pageHeader
    var breadcrumbProps = (0, _getBreadcrumbProps.getBreadcrumbProps)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), {}, {
        breadcrumbRender: props.breadcrumbRender,
        breadcrumbMap: breadcrumbMap
    }), props);
    // render sider dom
    var siderMenuDom = renderSiderMenu((0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), {}, {
        menuData: menuData,
        onCollapse: onCollapse,
        isMobile: isMobile,
        collapsed: collapsed
    }), matchMenuKeys);
    // render header dom
    var headerDom = headerRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), {}, {
        children: null,
        hasSiderMenu: !!siderMenuDom,
        menuData: menuData,
        isMobile: isMobile,
        collapsed: collapsed,
        onCollapse: onCollapse
    }), matchMenuKeys);
    // render footer dom
    var footerDom = footerRender((0, _objectSpread2.default)({
        isMobile: isMobile,
        collapsed: collapsed
    }, defaultProps));
    var _useContext = (0, _react.useContext)(_RouteContext.RouteContext), contextIsChildrenLayout = _useContext.isChildrenLayout;
    // 如果 props 中定义，以 props 为准
    var isChildrenLayout = propsIsChildrenLayout !== undefined ? propsIsChildrenLayout : contextIsChildrenLayout;
    var proLayoutClassName = "".concat(prefixCls, "-layout");
    var _useStyle = (0, _style.useStyle)(proLayoutClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    // gen className
    var className = (0, _classnames.default)(props.className, hashId, 'ant-design-pro', proLayoutClassName, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "screen-".concat(colSize), colSize), "".concat(proLayoutClassName, "-top-menu"), propsLayout === 'top'), "".concat(proLayoutClassName, "-is-children"), isChildrenLayout), "".concat(proLayoutClassName, "-fix-siderbar"), fixSiderbar), "".concat(proLayoutClassName, "-").concat(propsLayout), propsLayout));
    /** 计算 slider 的宽度 */ var leftSiderWidth = getPaddingInlineStart(!!hasLeftPadding, collapsed, siderWidth);
    // siderMenuDom 为空的时候，不需要 padding
    var genLayoutStyle = {
        position: 'relative'
    };
    // if is some layout children, don't need min height
    if (isChildrenLayout || contentStyle && contentStyle.minHeight) genLayoutStyle.minHeight = 0;
    /** 页面切换的时候触发 */ (0, _react.useEffect)(function() {
        var _props$onPageChange;
        (_props$onPageChange = props.onPageChange) === null || _props$onPageChange === void 0 || _props$onPageChange.call(props, props.location);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        location.pathname,
        (_location$pathname = location.pathname) === null || _location$pathname === void 0 ? void 0 : _location$pathname.search
    ]);
    var _useState3 = (0, _react.useState)(false), _useState4 = (0, _slicedToArray.default)(_useState3, 2), hasFooterToolbar = _useState4[0], setHasFooterToolbar = _useState4[1];
    /**
   * 使用number是因为多标签页的时候有多个 PageContainer，只有有任意一个就应该展示这个className
   */ var _useState5 = (0, _react.useState)(0), _useState6 = (0, _slicedToArray.default)(_useState5, 2), hasPageContainer = _useState6[0], setHasPageContainer = _useState6[1];
    (0, _proutils.useDocumentTitle)(pageTitleInfo, props.title || false);
    var _useContext2 = (0, _react.useContext)(_proprovider.ProProvider), token = _useContext2.token;
    var bgImgStyleList = (0, _react.useMemo)(function() {
        if (bgLayoutImgList && bgLayoutImgList.length > 0) return bgLayoutImgList === null || bgLayoutImgList === void 0 ? void 0 : bgLayoutImgList.map(function(item, index) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
                src: item.src,
                style: (0, _objectSpread2.default)({
                    position: 'absolute'
                }, item)
            }, index);
        });
        return null;
    }, [
        bgLayoutImgList
    ]);
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)(_RouteContext.RouteContext.Provider, {
        value: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, defaultProps), {}, {
            breadcrumb: breadcrumbProps,
            menuData: menuData,
            isMobile: isMobile,
            collapsed: collapsed,
            hasPageContainer: hasPageContainer,
            setHasPageContainer: setHasPageContainer,
            isChildrenLayout: true,
            title: pageTitleInfo.pageName,
            hasSiderMenu: !!siderMenuDom,
            hasHeader: !!headerDom,
            siderWidth: leftSiderWidth,
            hasFooter: !!footerDom,
            hasFooterToolbar: hasFooterToolbar,
            setHasFooterToolbar: setHasFooterToolbar,
            pageTitleInfo: pageTitleInfo,
            matchMenus: matchMenus,
            matchMenuKeys: matchMenuKeys,
            currentMenu: currentMenu
        }),
        children: props.pure ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
            children: children
        }) : /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: className,
            children: [
                bgImgStyleList || (_token$layout = token.layout) !== null && _token$layout !== void 0 && _token$layout.bgLayout ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: (0, _classnames.default)("".concat(proLayoutClassName, "-bg-list"), hashId),
                    children: bgImgStyleList
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsxs)(_antd.Layout, {
                    style: (0, _objectSpread2.default)({
                        minHeight: '100%',
                        // hack style
                        flexDirection: siderMenuDom ? 'row' : undefined
                    }, style),
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.ConfigProvider, {
                            theme: {
                                hashed: (0, _proprovider.isNeedOpenHash)(),
                                token: {
                                    controlHeightLG: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.menuHeight) || (token === null || token === void 0 ? void 0 : token.controlHeightLG)
                                },
                                components: {
                                    Menu: (0, _proutils.coverToNewToken)({
                                        colorItemBg: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorMenuBackground) || 'transparent',
                                        colorSubItemBg: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorMenuBackground) || 'transparent',
                                        radiusItem: token.borderRadius,
                                        colorItemBgSelected: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                                        colorItemBgHover: ((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorBgMenuItemHover) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                                        colorItemBgActive: ((_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorBgMenuItemActive) || (token === null || token === void 0 ? void 0 : token.colorBgTextActive),
                                        colorItemBgSelectedHorizontal: ((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.sider) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                                        colorActiveBarWidth: 0,
                                        colorActiveBarHeight: 0,
                                        colorActiveBarBorderSize: 0,
                                        colorItemText: ((_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenu) || (token === null || token === void 0 ? void 0 : token.colorTextSecondary),
                                        colorItemTextHover: ((_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuItemHover) || 'rgba(0, 0, 0, 0.85)',
                                        // 悬浮态
                                        colorItemTextSelected: ((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.sider) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
                                        popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                                        subMenuItemBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                                        darkSubMenuItemBg: 'transparent',
                                        darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
                                    })
                                }
                            },
                            children: siderMenuDom
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            style: genLayoutStyle,
                            className: "".concat(proLayoutClassName, "-container ").concat(hashId).trim(),
                            children: [
                                headerDom,
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_WrapContent.WrapContent, (0, _objectSpread2.default)((0, _objectSpread2.default)({
                                    hasPageContainer: hasPageContainer,
                                    isChildrenLayout: isChildrenLayout
                                }, rest), {}, {
                                    hasHeader: !!headerDom,
                                    prefixCls: proLayoutClassName,
                                    style: contentStyle,
                                    children: loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_PageLoading.PageLoading, {}) : children
                                })),
                                footerDom,
                                hasFooterToolbar && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                    className: "".concat(proLayoutClassName, "-has-footer"),
                                    style: {
                                        height: 64,
                                        marginBlockStart: (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.pageContainer) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.paddingBlockPageContainerContent
                                    }
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
var ProLayout = function ProLayout(props) {
    var colorPrimary = props.colorPrimary;
    var darkProps = props.navTheme !== undefined ? {
        dark: props.navTheme === 'realDark'
    } : {};
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.ConfigProvider, {
        theme: colorPrimary ? {
            token: {
                colorPrimary: colorPrimary
            }
        } : undefined,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_proprovider.ProConfigProvider, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, darkProps), {}, {
            token: props.token,
            prefixCls: props.prefixCls,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(BaseProLayout, (0, _objectSpread2.default)((0, _objectSpread2.default)({
                logo: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Logo.Logo, {})
            }, _defaultSettings.defaultSettings), {}, {
                location: (0, _proutils.isBrowser)() ? window.location : undefined
            }, props))
        }))
    });
};

},
"node_modules/@ant-design/pro-layout/es/WrapContent.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "WrapContent", {
    enumerable: true,
    get: function() {
        return WrapContent;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var WrapContent = function WrapContent(props) {
    var _useContext = (0, _react.useContext)(_proprovider.ProProvider), hashId = _useContext.hashId;
    var style = props.style, prefixCls = props.prefixCls, children = props.children, _props$hasPageContain = props.hasPageContainer, hasPageContainer = _props$hasPageContain === void 0 ? 0 : _props$hasPageContain;
    var contentClassName = (0, _classnames.default)("".concat(prefixCls, "-content"), hashId, (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(prefixCls, "-has-header"), props.hasHeader), "".concat(prefixCls, "-content-has-page-container"), hasPageContainer > 0));
    var ErrorComponent = props.ErrorBoundary || _proutils.ErrorBoundary;
    return props.ErrorBoundary === false ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Layout.Content, {
        className: contentClassName,
        style: style,
        children: children
    }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorComponent, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Layout.Content, {
            className: contentClassName,
            style: style,
            children: children
        })
    });
};

},
"node_modules/@ant-design/pro-layout/es/assert/Logo.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "Logo", {
    enumerable: true,
    get: function() {
        return Logo;
    }
});
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var Logo = function Logo() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 200 200",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        x1: "62.1023273%",
                        y1: "0%",
                        x2: "108.19718%",
                        y2: "37.8635764%",
                        id: "linearGradient-1",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#4285EB",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#2EC7FF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        x1: "69.644116%",
                        y1: "0%",
                        x2: "54.0428975%",
                        y2: "108.456714%",
                        id: "linearGradient-2",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#29CDFF",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#148EFF",
                                offset: "37.8600687%"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#0A60FF",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        x1: "69.6908165%",
                        y1: "-12.9743587%",
                        x2: "16.7228981%",
                        y2: "117.391248%",
                        id: "linearGradient-3",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#FA816E",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#F74A5C",
                                offset: "41.472606%"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#F51D2C",
                                offset: "100%"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("linearGradient", {
                        x1: "68.1279872%",
                        y1: "-35.6905737%",
                        x2: "30.4400914%",
                        y2: "114.942679%",
                        id: "linearGradient-4",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#FA8E7D",
                                offset: "0%"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#F74A5C",
                                offset: "51.2635191%"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("stop", {
                                stopColor: "#F51D2C",
                                offset: "100%"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                    transform: "translate(-20.000000, -20.000000)",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("g", {
                        transform: "translate(20.000000, 20.000000)",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                                    fillRule: "nonzero",
                                    children: [
                                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                                            children: [
                                                /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                                    d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                                                    fill: "url(#linearGradient-1)"
                                                }),
                                                /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                                    d: "M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z",
                                                    fill: "url(#linearGradient-2)"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                            d: "M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z",
                                            fill: "url(#linearGradient-3)"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("ellipse", {
                                    fill: "url(#linearGradient-4)",
                                    cx: "100.519339",
                                    cy: "100.436681",
                                    rx: "23.6001926",
                                    ry: "23.580786"
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/AppsLogo.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "AppsLogo", {
    enumerable: true,
    get: function() {
        return AppsLogo;
    }
});
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var AppsLogo = function AppsLogo() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 12 12",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M0 0h3v3H0V0zm4.5 0h3v3h-3V0zM9 0h3v3H9V0zM0 4.5h3v3H0v-3zm4.503 0h3v3h-3v-3zM9 4.5h3v3H9v-3zM0 9h3v3H0V9zm4.503 0h3v3h-3V9zM9 9h3v3H9V9z"
        })
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/DefaultContent.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "DefaultContent", {
    enumerable: true,
    get: function() {
        return DefaultContent;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _index = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var DefaultContent = function DefaultContent(props) {
    var appList = props.appList, baseClassName = props.baseClassName, hashId = props.hashId, itemClick = props.itemClick;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("ul", {
            className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
            children: appList === null || appList === void 0 ? void 0 : appList.map(function(app, index) {
                var _app$children;
                if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
                            children: app.title
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(DefaultContent, {
                            hashId: hashId,
                            itemClick: itemClick,
                            appList: app === null || app === void 0 ? void 0 : app.children,
                            baseClassName: baseClassName
                        })
                    ]
                }, index);
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
                    className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
                    onClick: function onClick(e) {
                        e.stopPropagation();
                        itemClick === null || itemClick === void 0 || itemClick(app);
                    },
                    children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("a", {
                        href: itemClick ? undefined : app.url,
                        target: app.target,
                        rel: "noreferrer",
                        children: [
                            (0, _index.defaultRenderLogo)(app.icon),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                        children: app.title
                                    }),
                                    app.desc ? /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                        children: app.desc
                                    }) : null
                                ]
                            })
                        ]
                    })
                }, index);
            })
        })
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/SimpleContent.js": function (module, exports, __mako_require__){
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
    SimpleContent: function() {
        return SimpleContent;
    },
    renderLogo: function() {
        return renderLogo;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var renderLogo = function renderLogo(logo, title) {
    if (logo && typeof logo === 'string' && (0, _proutils.isUrl)(logo)) return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        src: logo,
        alt: "logo"
    });
    if (typeof logo === 'function') return logo();
    if (logo && typeof logo === 'string') return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        id: "avatarLogo",
        children: logo
    });
    if (!logo && title && typeof title === 'string') {
        var symbol = title.substring(0, 1);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            id: "avatarLogo",
            children: symbol
        });
    }
    return logo;
};
var SimpleContent = function SimpleContent(props) {
    var appList = props.appList, baseClassName = props.baseClassName, hashId = props.hashId, itemClick = props.itemClick;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "".concat(baseClassName, "-content ").concat(hashId).trim(),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("ul", {
            className: "".concat(baseClassName, "-content-list ").concat(hashId).trim(),
            children: appList === null || appList === void 0 ? void 0 : appList.map(function(app, index) {
                var _app$children;
                if (app !== null && app !== void 0 && (_app$children = app.children) !== null && _app$children !== void 0 && _app$children.length) return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "".concat(baseClassName, "-content-list-item-group ").concat(hashId).trim(),
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "".concat(baseClassName, "-content-list-item-group-title ").concat(hashId).trim(),
                            children: app.title
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(SimpleContent, {
                            hashId: hashId,
                            itemClick: itemClick,
                            appList: app === null || app === void 0 ? void 0 : app.children,
                            baseClassName: baseClassName
                        })
                    ]
                }, index);
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("li", {
                    className: "".concat(baseClassName, "-content-list-item ").concat(hashId).trim(),
                    onClick: function onClick(e) {
                        e.stopPropagation();
                        itemClick === null || itemClick === void 0 || itemClick(app);
                    },
                    children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("a", {
                        href: itemClick ? 'javascript:;' : app.url,
                        target: app.target,
                        rel: "noreferrer",
                        children: [
                            renderLogo(app.icon, app.title),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                    children: app.title
                                })
                            })
                        ]
                    })
                }, index);
            })
        })
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js": function (module, exports, __mako_require__){
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
    AppsLogoComponents: function() {
        return AppsLogoComponents;
    },
    defaultRenderLogo: function() {
        return defaultRenderLogo;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _AppsLogo = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/AppsLogo.js");
var _DefaultContent = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/DefaultContent.js");
var _SimpleContent = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/SimpleContent.js");
var _index = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var defaultRenderLogo = function defaultRenderLogo(logo) {
    if (typeof logo === 'string') return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        width: "auto",
        height: 22,
        src: logo,
        alt: "logo"
    });
    if (typeof logo === 'function') return logo();
    return logo;
};
var AppsLogoComponents = function AppsLogoComponents(props) {
    var _props$appList;
    var appList = props.appList, appListRender = props.appListRender, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'ant-pro' : _props$prefixCls, itemClick = props.onItemClick;
    var ref = _react.default.useRef(null);
    var popoverRef = _react.default.useRef(null);
    var baseClassName = "".concat(prefixCls, "-layout-apps");
    var _useStyle = (0, _index.useStyle)(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var _useState = (0, _react.useState)(false), _useState2 = (0, _slicedToArray.default)(_useState, 2), open = _useState2[0], setOpen = _useState2[1];
    var cloneItemClick = function cloneItemClick(app) {
        itemClick === null || itemClick === void 0 || itemClick(app, popoverRef);
    };
    var defaultDomContent = (0, _react.useMemo)(function() {
        var isSimple = appList === null || appList === void 0 ? void 0 : appList.some(function(app) {
            return !(app !== null && app !== void 0 && app.desc);
        });
        if (isSimple) return /*#__PURE__*/ (0, _jsxruntime.jsx)(_SimpleContent.SimpleContent, {
            hashId: hashId,
            appList: appList,
            itemClick: itemClick ? cloneItemClick : undefined,
            baseClassName: "".concat(baseClassName, "-simple")
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_DefaultContent.DefaultContent, {
            hashId: hashId,
            appList: appList,
            itemClick: itemClick ? cloneItemClick : undefined,
            baseClassName: "".concat(baseClassName, "-default")
        });
    }, [
        appList,
        baseClassName,
        hashId
    ]);
    if (!(props !== null && props !== void 0 && (_props$appList = props.appList) !== null && _props$appList !== void 0 && _props$appList.length)) return null;
    var popoverContent = appListRender ? appListRender(props === null || props === void 0 ? void 0 : props.appList, defaultDomContent) : defaultDomContent;
    var popoverOpenProps = (0, _proutils.openVisibleCompatible)(undefined, function(openChange) {
        return setOpen(openChange);
    });
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                ref: ref,
                onClick: function onClick(e) {
                    e.stopPropagation();
                    e.preventDefault();
                }
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Popover, (0, _objectSpread2.default)((0, _objectSpread2.default)({
                placement: "bottomRight",
                trigger: [
                    'click'
                ],
                zIndex: 9999,
                arrow: false
            }, popoverOpenProps), {}, {
                overlayClassName: "".concat(baseClassName, "-popover ").concat(hashId).trim(),
                content: popoverContent,
                getPopupContainer: function getPopupContainer() {
                    return ref.current || document.body;
                },
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    ref: popoverRef,
                    onClick: function onClick(e) {
                        e.stopPropagation();
                    },
                    className: (0, _classnames.default)("".concat(baseClassName, "-icon"), hashId, (0, _defineProperty.default)({}, "".concat(baseClassName, "-icon-active"), open)),
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_AppsLogo.AppsLogo, {})
                })
            }))
        ]
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/default.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "genAppsLogoComponentsDefaultListStyle", {
    enumerable: true,
    get: function() {
        return genAppsLogoComponentsDefaultListStyle;
    }
});
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var genAppsLogoComponentsDefaultListStyle = function genAppsLogoComponentsDefaultListStyle(token) {
    return {
        '&-content': {
            maxHeight: 'calc(100vh - 48px)',
            overflow: 'auto',
            '&-list': {
                boxSizing: 'content-box',
                maxWidth: 656,
                marginBlock: 0,
                marginInline: 0,
                paddingBlock: 0,
                paddingInline: 0,
                listStyle: 'none',
                '&-item': {
                    position: 'relative',
                    display: 'inline-block',
                    width: 328,
                    height: 72,
                    paddingInline: 16,
                    paddingBlock: 16,
                    verticalAlign: 'top',
                    listStyleType: 'none',
                    transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
                    borderRadius: token.borderRadius,
                    '&-group': {
                        marginBottom: 16,
                        '&-title': {
                            margin: '16px 0 8px 12px',
                            fontWeight: 600,
                            color: 'rgba(0, 0, 0, 0.88)',
                            fontSize: 16,
                            opacity: 0.85,
                            lineHeight: 1.5,
                            '&:first-child': {
                                marginTop: 12
                            }
                        }
                    },
                    '&:hover': {
                        backgroundColor: token.colorBgTextHover
                    },
                    '* div': _proutils.resetComponent === null || _proutils.resetComponent === void 0 ? void 0 : (0, _proutils.resetComponent)(token),
                    a: {
                        display: 'flex',
                        height: '100%',
                        fontSize: 12,
                        textDecoration: 'none',
                        '& > img': {
                            width: 40,
                            height: 40
                        },
                        '& > div': {
                            marginInlineStart: 14,
                            color: token.colorTextHeading,
                            fontSize: 14,
                            lineHeight: '22px',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        },
                        '& > div > span': {
                            color: token.colorTextSecondary,
                            fontSize: 12,
                            lineHeight: '20px'
                        }
                    }
                }
            }
        }
    };
};

},
"node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _default = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/default.js");
var _simple = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/simple.js");
var genAppsLogoComponentsStyle = function genAppsLogoComponentsStyle(token) {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
    return (0, _defineProperty.default)({}, token.componentCls, {
        '&-icon': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingInline: 4,
            paddingBlock: 0,
            fontSize: 14,
            lineHeight: '14px',
            height: 28,
            width: 28,
            cursor: 'pointer',
            color: (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextAppListIcon,
            borderRadius: token.borderRadius,
            '&:hover': {
                color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextAppListIconHover,
                backgroundColor: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgAppListIconHover
            },
            '&-active': {
                color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextAppListIconHover,
                backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgAppListIconHover
            }
        },
        '&-item-title': {
            marginInlineStart: '16px',
            marginInlineEnd: '8px',
            marginBlockStart: 0,
            marginBlockEnd: '12px',
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.88)',
            fontSize: 16,
            opacity: 0.85,
            lineHeight: 1.5,
            '&:first-child': {
                marginBlockStart: 12
            }
        },
        '&-popover': (0, _defineProperty.default)({}, "".concat(token.antCls, "-popover-arrow"), {
            display: 'none'
        }),
        '&-simple': (0, _simple.genAppsLogoComponentsSimpleListStyle)(token),
        '&-default': (0, _default.genAppsLogoComponentsDefaultListStyle)(token)
    });
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('AppsLogoComponents', function(token) {
        var proCardToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genAppsLogoComponentsStyle(proCardToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/style/simple.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "genAppsLogoComponentsSimpleListStyle", {
    enumerable: true,
    get: function() {
        return genAppsLogoComponentsSimpleListStyle;
    }
});
var genAppsLogoComponentsSimpleListStyle = function genAppsLogoComponentsSimpleListStyle(token) {
    return {
        '&-content': {
            maxHeight: 'calc(100vh - 48px)',
            overflow: 'auto',
            '&-list': {
                boxSizing: 'border-box',
                maxWidth: 376,
                marginBlock: 0,
                marginInline: 0,
                paddingBlock: 0,
                paddingInline: 0,
                listStyle: 'none',
                '&-item': {
                    position: 'relative',
                    display: 'inline-block',
                    width: 104,
                    height: 104,
                    marginBlock: 8,
                    marginInline: 8,
                    paddingInline: 24,
                    paddingBlock: 24,
                    verticalAlign: 'top',
                    listStyleType: 'none',
                    transition: 'transform 0.2s cubic-bezier(0.333, 0, 0, 1)',
                    borderRadius: token.borderRadius,
                    '&-group': {
                        marginBottom: 16,
                        '&-title': {
                            margin: '16px 0 8px 12px',
                            fontWeight: 600,
                            color: 'rgba(0, 0, 0, 0.88)',
                            fontSize: 16,
                            opacity: 0.85,
                            lineHeight: 1.5,
                            '&:first-child': {
                                marginTop: 12
                            }
                        }
                    },
                    '&:hover': {
                        backgroundColor: token.colorBgTextHover
                    },
                    a: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%',
                        fontSize: 12,
                        textDecoration: 'none',
                        '& > #avatarLogo': {
                            width: 40,
                            height: 40,
                            margin: '0 auto',
                            color: token.colorPrimary,
                            fontSize: 22,
                            lineHeight: '40px',
                            textAlign: 'center',
                            backgroundImage: 'linear-gradient(180deg, #E8F0FB 0%, #F6F8FC 100%)',
                            borderRadius: token.borderRadius
                        },
                        '& > img': {
                            width: 40,
                            height: 40
                        },
                        '& > div': {
                            marginBlockStart: 5,
                            marginInlineStart: 0,
                            color: token.colorTextHeading,
                            fontSize: 14,
                            lineHeight: '22px',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        },
                        '& > div > span': {
                            color: token.colorTextSecondary,
                            fontSize: 12,
                            lineHeight: '20px'
                        }
                    }
                }
            }
        }
    };
};

},
"node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "CollapsedIcon", {
    enumerable: true,
    get: function() {
        return CollapsedIcon;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _Arrow = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/Arrow.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/style.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "isMobile",
    "collapsed"
];
var CollapsedIcon = function CollapsedIcon(props) {
    var isMobile = props.isMobile, collapsed = props.collapsed, rest = (0, _objectWithoutProperties.default)(props, _excluded);
    var _useStyle = (0, _style.useStyle)(props.className), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    if (isMobile && collapsed) return null;
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
        className: (0, _classnames.default)(props.className, hashId, (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(props.className, "-collapsed"), collapsed), "".concat(props.className, "-is-mobile"), isMobile)),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Arrow.ArrowSvgIcon, {})
    })));
};

},
"node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/style.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genSiderMenuStyle = function genSiderMenuStyle(token) {
    var _token$layout, _token$layout2, _token$layout3;
    return (0, _defineProperty.default)({}, token.componentCls, {
        position: 'absolute',
        insetBlockStart: '18px',
        zIndex: '101',
        width: '24px',
        height: '24px',
        fontSize: [
            '14px',
            '16px'
        ],
        textAlign: 'center',
        borderRadius: '40px',
        insetInlineEnd: '-13px',
        transition: 'transform 0.3s',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextCollapsedButton,
        backgroundColor: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgCollapsedButton,
        boxShadow: '0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)',
        '&:hover': {
            color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextCollapsedButtonHover,
            boxShadow: '0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)'
        },
        '.anticon': {
            fontSize: '14px'
        },
        '& > svg': {
            transition: 'transform  0.3s',
            transform: 'rotate(90deg)'
        },
        '&-collapsed': {
            '& > svg': {
                transform: 'rotate(-90deg)'
            }
        }
    });
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('SiderMenuCollapsedIcon', function(token) {
        var siderMenuToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genSiderMenuStyle(siderMenuToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/Footer.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "DefaultFooter", {
    enumerable: true,
    get: function() {
        return DefaultFooter;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _icons = __mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _GlobalFooter = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var Footer = _antd.Layout.Footer;
var DefaultFooter = function DefaultFooter(_ref) {
    var links = _ref.links, copyright = _ref.copyright, style = _ref.style, className = _ref.className, prefixCls = _ref.prefixCls;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Footer, {
        className: className,
        style: (0, _objectSpread2.default)({
            padding: 0
        }, style),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_GlobalFooter.GlobalFooter, {
            links: links,
            prefixCls: prefixCls,
            copyright: copyright === false ? null : /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.CopyrightOutlined, {}),
                    " ",
                    copyright
                ]
            })
        })
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/FooterToolbar/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "FooterToolbar", {
    enumerable: true,
    get: function() {
        return FooterToolbar;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/omit.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _reactdom = __mako_require__("node_modules/react-dom/index.js");
var _index = __mako_require__("node_modules/@ant-design/pro-layout/es/index.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/FooterToolbar/style/index.js");
var _stylish = __mako_require__("node_modules/@ant-design/pro-layout/es/components/FooterToolbar/style/stylish.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "children",
    "className",
    "extra",
    "portalDom",
    "style",
    "renderContent"
];
var FooterToolbar = function FooterToolbar(props) {
    var children = props.children, className = props.className, extra = props.extra, _props$portalDom = props.portalDom, portalDom = _props$portalDom === void 0 ? true : _props$portalDom, style = props.style, renderContent = props.renderContent, restProps = (0, _objectWithoutProperties.default)(props, _excluded);
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls, getTargetContainer = _useContext.getTargetContainer;
    var prefixCls = props.prefixCls || getPrefixCls('pro');
    var baseClassName = "".concat(prefixCls, "-footer-bar");
    var _useStyle = (0, _style.useStyle)(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var value = (0, _react.useContext)(_index.RouteContext);
    var width = (0, _react.useMemo)(function() {
        var hasSiderMenu = value.hasSiderMenu, isMobile = value.isMobile, siderWidth = value.siderWidth;
        if (!hasSiderMenu) return undefined;
        // 0 or undefined
        if (!siderWidth) return '100%';
        return isMobile ? '100%' : "calc(100% - ".concat(siderWidth, "px)");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        value.collapsed,
        value.hasSiderMenu,
        value.isMobile,
        value.siderWidth
    ]);
    var containerDom = (0, _react.useMemo)(function() {
        if (typeof window === 'undefined' || typeof document === 'undefined') return null;
        // 只读取一次就行了，不然总是的渲染
        return (getTargetContainer === null || getTargetContainer === void 0 ? void 0 : getTargetContainer()) || document.body;
    }, []);
    var stylish = (0, _stylish.useStylish)("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
        stylish: props.stylish
    });
    var dom = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "".concat(baseClassName, "-left ").concat(hashId).trim(),
                children: extra
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "".concat(baseClassName, "-right ").concat(hashId).trim(),
                children: children
            })
        ]
    });
    /** 告诉 props 是否存在 footerBar */ (0, _react.useEffect)(function() {
        if (!value || !(value !== null && value !== void 0 && value.setHasFooterToolbar)) return function() {};
        value === null || value === void 0 || value.setHasFooterToolbar(true);
        return function() {
            var _value$setHasFooterTo;
            value === null || value === void 0 || (_value$setHasFooterTo = value.setHasFooterToolbar) === null || _value$setHasFooterTo === void 0 || _value$setHasFooterTo.call(value, false);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var renderDom = /*#__PURE__*/ (0, _jsxruntime.jsx)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({
        className: (0, _classnames.default)(className, hashId, baseClassName, (0, _defineProperty.default)({}, "".concat(baseClassName, "-stylish"), !!props.stylish)),
        style: (0, _objectSpread2.default)({
            width: width
        }, style)
    }, (0, _omit.default)(restProps, [
        'prefixCls'
    ])), {}, {
        children: renderContent ? renderContent((0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), value), {}, {
            leftWidth: width
        }), dom) : dom
    }));
    var ssrDom = !(0, _proutils.isBrowser)() || !portalDom || !containerDom ? renderDom : /*#__PURE__*/ (0, _reactdom.createPortal)(renderDom, containerDom, baseClassName);
    return stylish.wrapSSR(wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
        children: ssrDom
    }, baseClassName)));
};

},
"node_modules/@ant-design/pro-layout/es/components/FooterToolbar/style/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genFooterToolBarStyle = function genFooterToolBarStyle(token) {
    return (0, _defineProperty.default)({}, token.componentCls, {
        position: 'fixed',
        insetInlineEnd: 0,
        bottom: 0,
        zIndex: 99,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingInline: 24,
        paddingBlock: 0,
        boxSizing: 'border-box',
        lineHeight: '64px',
        /* A way to reset the style of the component. */ backgroundColor: (0, _proprovider.setAlpha)(token.colorBgElevated, 0.6),
        borderBlockStart: "1px solid ".concat(token.colorSplit),
        '-webkit-backdrop-filter': 'blur(8px)',
        backdropFilter: 'blur(8px)',
        color: token.colorText,
        transition: 'all 0.2s ease 0s',
        '&-left': {
            flex: 1,
            color: token.colorText
        },
        '&-right': {
            color: token.colorText,
            '> *': {
                marginInlineEnd: 8,
                '&:last-child': {
                    marginBlock: 0,
                    marginInline: 0
                }
            }
        }
    });
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProLayoutFooterToolbar', function(token) {
        var proCardToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genFooterToolBarStyle(proCardToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/FooterToolbar/style/stylish.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStylish", {
    enumerable: true,
    get: function() {
        return useStylish;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
function useStylish(prefixCls, _ref) {
    var stylish = _ref.stylish;
    return (0, _proprovider.useStyle)('ProLayoutFooterToolbarStylish', function(token) {
        var stylishToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        if (!stylish) return [];
        return [
            (0, _defineProperty.default)({}, "".concat(stylishToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(stylishToken))
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/GlobalFooter/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "GlobalFooter", {
    enumerable: true,
    get: function() {
        return GlobalFooter;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GlobalFooter/style.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var GlobalFooter = function GlobalFooter(_ref) {
    var className = _ref.className, prefixCls = _ref.prefixCls, links = _ref.links, copyright = _ref.copyright, style = _ref.style;
    var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
    var baseClassName = context.getPrefixCls(prefixCls || 'pro-global-footer');
    var _useStyle = (0, _style.useStyle)(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    if ((links == null || links === false || Array.isArray(links) && links.length === 0) && (copyright == null || copyright === false)) return null;
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: (0, _classnames.default)(baseClassName, hashId, className),
        style: style,
        children: [
            links && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "".concat(baseClassName, "-list ").concat(hashId).trim(),
                children: links.map(function(link) {
                    return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        className: "".concat(baseClassName, "-list-link ").concat(hashId).trim(),
                        title: link.key,
                        target: link.blankTarget ? '_blank' : '_self',
                        href: link.href,
                        rel: "noreferrer",
                        children: link.title
                    }, link.key);
                })
            }),
            copyright && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "".concat(baseClassName, "-copyright ").concat(hashId).trim(),
                children: copyright
            })
        ]
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/GlobalFooter/style.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genFooterToolBarStyle = function genFooterToolBarStyle(token) {
    return (0, _defineProperty.default)({}, token.componentCls, {
        marginBlock: 0,
        marginBlockStart: 48,
        marginBlockEnd: 24,
        marginInline: 0,
        paddingBlock: 0,
        paddingInline: 16,
        textAlign: 'center',
        '&-list': {
            marginBlockEnd: 8,
            color: token.colorTextSecondary,
            '&-link': {
                color: token.colorTextSecondary,
                textDecoration: token.linkDecoration
            },
            '*:not(:last-child)': {
                marginInlineEnd: 8
            },
            '&:hover': {
                color: token.colorPrimary
            }
        },
        '&-copyright': {
            fontSize: '14px',
            color: token.colorText
        }
    });
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProLayoutFooter', function(token) {
        var proCardToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genFooterToolBarStyle(proCardToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/GlobalHeader/ActionsContent.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ActionsContent", {
    enumerable: true,
    get: function() {
        return ActionsContent;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _regeneratorRuntime = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"));
var _asyncToGenerator = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _rcresizeobserver = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-resize-observer/es/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _rightContentStyle = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GlobalHeader/rightContentStyle.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "rightContentRender",
    "avatarProps",
    "actionsRender",
    "headerContentRender"
];
var _excluded2 = [
    "title",
    "render"
];
var ActionsContent = function ActionsContent(_ref) {
    var rightContentRender = _ref.rightContentRender, avatarProps = _ref.avatarProps, actionsRender = _ref.actionsRender, headerContentRender = _ref.headerContentRender, props = (0, _objectWithoutProperties.default)(_ref, _excluded);
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = "".concat(getPrefixCls(), "-pro-global-header");
    var _useStyle = (0, _rightContentStyle.useStyle)(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var _useState = (0, _react.useState)('auto'), _useState2 = (0, _slicedToArray.default)(_useState, 2), rightSize = _useState2[0], setRightSize = _useState2[1];
    var avatarDom = (0, _react.useMemo)(function() {
        if (!avatarProps) return null;
        var title = avatarProps.title, render = avatarProps.render, rest = (0, _objectWithoutProperties.default)(avatarProps, _excluded2);
        var domList = [
            rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/ (0, _react.createElement)(_antd.Avatar, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
                size: 28,
                key: "avatar"
            })) : null,
            title ? /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                style: {
                    marginInlineStart: 8
                },
                children: title
            }, "name") : undefined
        ];
        if (render) return render(avatarProps, /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            children: domList
        }), props);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            children: domList
        });
    }, [
        avatarProps
    ]);
    var rightActionsRender = actionsRender || avatarDom ? function(restParams) {
        var doms = actionsRender && (actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(restParams));
        if (!doms && !avatarDom) return null;
        if (!Array.isArray(doms)) return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
            children: [
                doms,
                avatarDom && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
                    children: avatarDom
                })
            ]
        }));
        return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "".concat(prefixCls, "-header-actions ").concat(hashId).trim(),
            children: [
                doms.filter(Boolean).map(function(dom, index) {
                    var hideHover = false;
                    // 如果配置了 hideHover 就不展示 hover 效果了
                    if (/*#__PURE__*/ _react.default.isValidElement(dom)) {
                        var _dom$props;
                        hideHover = !!(dom !== null && dom !== void 0 && (_dom$props = dom.props) !== null && _dom$props !== void 0 && _dom$props['aria-hidden']);
                    }
                    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)("".concat(prefixCls, "-header-actions-item ").concat(hashId), (0, _defineProperty.default)({}, "".concat(prefixCls, "-header-actions-hover"), !hideHover)),
                        children: dom
                    }, index);
                }),
                avatarDom && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    className: "".concat(prefixCls, "-header-actions-avatar ").concat(hashId).trim(),
                    children: avatarDom
                })
            ]
        }));
    } : undefined;
    /** 减少一下渲染的次数 */ var setRightSizeDebounceFn = (0, _proutils.useDebounceFn)(/*#__PURE__*/ function() {
        var _ref2 = (0, _asyncToGenerator.default)(/*#__PURE__*/ (0, _regeneratorRuntime.default)().mark(function _callee(width) {
            return (0, _regeneratorRuntime.default)().wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        setRightSize(width);
                    case 1:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }));
        return function(_x) {
            return _ref2.apply(this, arguments);
        };
    }(), 160);
    var contentRender = rightActionsRender || rightContentRender;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "".concat(prefixCls, "-right-content ").concat(hashId).trim(),
        style: {
            minWidth: rightSize,
            height: '100%'
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            style: {
                height: '100%'
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_rcresizeobserver.default, {
                onResize: function onResize(_ref3) {
                    var width = _ref3.width;
                    setRightSizeDebounceFn.run(width);
                },
                children: contentRender ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        justifyContent: 'flex-end'
                    },
                    children: contentRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
                        // 测试专用
                        //@ts-ignore
                        rightContentSize: rightSize
                    }))
                }) : null
            })
        })
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "GlobalHeader", {
    enumerable: true,
    get: function() {
        return GlobalHeader;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _icons = __mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _utils = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/utils.js");
var _AppsLogoComponents = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js");
var _SiderMenu = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js");
var _TopNavHeader = __mako_require__("node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js");
var _ActionsContent = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GlobalHeader/ActionsContent.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GlobalHeader/style.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var renderLogo = function renderLogo(menuHeaderRender, logoDom) {
    if (menuHeaderRender === false) return null;
    if (menuHeaderRender) return menuHeaderRender(logoDom, null);
    return logoDom;
};
var GlobalHeader = function GlobalHeader(props) {
    var isMobile = props.isMobile, logo = props.logo, collapsed = props.collapsed, onCollapse = props.onCollapse, rightContentRender = props.rightContentRender, menuHeaderRender = props.menuHeaderRender, onMenuHeaderClick = props.onMenuHeaderClick, propClassName = props.className, style = props.style, layout = props.layout, children = props.children, splitMenus = props.splitMenus, menuData = props.menuData, prefixCls = props.prefixCls;
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls, direction = _useContext.direction;
    var baseClassName = "".concat(prefixCls || getPrefixCls('pro'), "-global-header");
    var _useStyle = (0, _style.useStyle)(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var className = (0, _classnames.default)(propClassName, baseClassName, hashId);
    if (layout === 'mix' && !isMobile && splitMenus) {
        var noChildrenMenuData = (menuData || []).map(function(item) {
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                children: undefined,
                routes: undefined
            });
        });
        var clearMenuData = (0, _utils.clearMenuItem)(noChildrenMenuData);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_TopNavHeader.TopNavHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            mode: "horizontal"
        }, props), {}, {
            splitMenus: false,
            menuData: clearMenuData
        }));
    }
    var logoClassNames = (0, _classnames.default)("".concat(baseClassName, "-logo"), hashId, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(baseClassName, "-logo-rtl"), direction === 'rtl'), "".concat(baseClassName, "-logo-mix"), layout === 'mix'), "".concat(baseClassName, "-logo-mobile"), isMobile));
    var logoDom = /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        className: logoClassNames,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: (0, _AppsLogoComponents.defaultRenderLogo)(logo)
        })
    }, "logo");
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: className,
        style: (0, _objectSpread2.default)({}, style),
        children: [
            isMobile && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "".concat(baseClassName, "-collapsed-button ").concat(hashId).trim(),
                onClick: function onClick() {
                    onCollapse === null || onCollapse === void 0 || onCollapse(!collapsed);
                },
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.MenuOutlined, {})
            }),
            isMobile && renderLogo(menuHeaderRender, logoDom),
            layout === 'mix' && !isMobile && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_AppsLogoComponents.AppsLogoComponents, (0, _objectSpread2.default)({}, props)),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: logoClassNames,
                        onClick: onMenuHeaderClick,
                        children: (0, _SiderMenu.renderLogoAndTitle)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
                            collapsed: false
                        }), 'headerTitleRender')
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                style: {
                    flex: 1
                },
                children: children
            }),
            (rightContentRender || props.actionsRender || props.avatarProps) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_ActionsContent.ActionsContent, (0, _objectSpread2.default)({
                rightContentRender: rightContentRender
            }, props))
        ]
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/GlobalHeader/rightContentStyle.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var genTopNavHeaderStyle = function genTopNavHeaderStyle(token) {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
    return (0, _defineProperty.default)({}, token.componentCls, {
        '&-header-actions': {
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            '&-item': {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBlock: 0,
                paddingInline: 2,
                color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextRightActionsItem,
                fontSize: '16px',
                cursor: 'pointer',
                borderRadius: token.borderRadius,
                '> *': {
                    paddingInline: 6,
                    paddingBlock: 6,
                    borderRadius: token.borderRadius,
                    '&:hover': {
                        backgroundColor: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgRightActionsItemHover
                    }
                }
            },
            '&-avatar': {
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingInlineStart: token.padding,
                paddingInlineEnd: token.padding,
                cursor: 'pointer',
                color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextRightActionsItem,
                '> div': {
                    height: '44px',
                    color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextRightActionsItem,
                    paddingInline: 8,
                    paddingBlock: 8,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    lineHeight: '44px',
                    borderRadius: token.borderRadius,
                    '&:hover': {
                        backgroundColor: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.header) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgRightActionsItemHover
                    }
                }
            }
        }
    });
};
function useStyle(prefixCls) {
    return (0, _proutils.useStyle)('ProLayoutRightContent', function(token) {
        var proToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genTopNavHeaderStyle(proToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/GlobalHeader/style.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genGlobalHeaderStyle = function genGlobalHeaderStyle(token) {
    var _token$layout, _token$layout2, _token$layout3;
    return (0, _defineProperty.default)({}, token.componentCls, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        position: 'relative',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        marginBlock: 0,
        marginInline: 16,
        height: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56,
        boxSizing: 'border-box',
        '> a': {
            height: '100%'
        }
    }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
        marginInlineEnd: 16
    }), '&-collapsed-button', {
        minHeight: '22px',
        color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorHeaderTitle,
        fontSize: '18px',
        marginInlineEnd: '16px'
    }), '&-logo', {
        position: 'relative',
        marginInlineEnd: '16px',
        a: {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            minHeight: '22px',
            fontSize: '20px'
        },
        img: {
            height: '28px'
        },
        h1: {
            height: '32px',
            marginBlock: 0,
            marginInline: 0,
            marginInlineStart: 8,
            fontWeight: '600',
            color: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorHeaderTitle) || token.colorTextHeading,
            fontSize: '18px',
            lineHeight: '32px'
        },
        '&-mix': {
            display: 'flex',
            alignItems: 'center'
        }
    }), '&-logo-mobile', {
        minWidth: '24px',
        marginInlineEnd: 0
    }));
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProLayoutGlobalHeader', function(token) {
        var GlobalHeaderToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genGlobalHeaderStyle(GlobalHeaderToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/GridContent/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "GridContent", {
    enumerable: true,
    get: function() {
        return GridContent;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _RouteContext = __mako_require__("node_modules/@ant-design/pro-layout/es/context/RouteContext.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GridContent/style.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
/**
 * This component can support contentWidth so you don't need to calculate the width
 * contentWidth=Fixed, width will is 1200
 *
 * @param props
 */ var GridContent = function GridContent(props) {
    var value = (0, _react.useContext)(_RouteContext.RouteContext);
    var children = props.children, propsContentWidth = props.contentWidth, propsClassName = props.className, style = props.style;
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = props.prefixCls || getPrefixCls('pro');
    var contentWidth = propsContentWidth || value.contentWidth;
    var className = "".concat(prefixCls, "-grid-content");
    var _useStyle = (0, _style.useStyle)(className), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var isWide = contentWidth === 'Fixed' && value.layout === 'top';
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(className, hashId, propsClassName, (0, _defineProperty.default)({}, "".concat(className, "-wide"), isWide)),
        style: style,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: "".concat(prefixCls, "-grid-content-children ").concat(hashId).trim(),
            children: children
        })
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/GridContent/style.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genGridContentStyle = function genGridContentStyle(token) {
    return (0, _defineProperty.default)({}, token.componentCls, {
        width: '100%',
        '&-wide': {
            maxWidth: 1152,
            margin: '0 auto'
        }
    });
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProLayoutGridContent', function(token) {
        var GridContentToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genGridContentStyle(GridContentToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/Header/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "DefaultHeader", {
    enumerable: true,
    get: function() {
        return DefaultHeader;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _utils = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/utils.js");
var _GlobalHeader = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GlobalHeader/index.js");
var _TopNavHeader = __mako_require__("node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js");
var _header = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Header/style/header.js");
var _stylish = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Header/style/stylish.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var Header = _antd.Layout.Header;
var DefaultHeader = function DefaultHeader(props) {
    var _token$layout2, _token$layout3, _token$layout4;
    var isMobile = props.isMobile, fixedHeader = props.fixedHeader, propsClassName = props.className, style = props.style, collapsed = props.collapsed, prefixCls = props.prefixCls, onCollapse = props.onCollapse, layout = props.layout, headerRender = props.headerRender, headerContentRender = props.headerContentRender;
    var _useContext = (0, _react.useContext)(_proprovider.ProProvider), token = _useContext.token;
    var context = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext);
    var _useState = (0, _react.useState)(false), _useState2 = (0, _slicedToArray.default)(_useState, 2), isFixedHeaderScroll = _useState2[0], setIsFixedHeaderScroll = _useState2[1];
    var needFixedHeader = fixedHeader || layout === 'mix';
    var renderContent = (0, _react.useCallback)(function() {
        var isTop = layout === 'top';
        var clearMenuData = (0, _utils.clearMenuItem)(props.menuData || []);
        var defaultDom = /*#__PURE__*/ (0, _jsxruntime.jsx)(_GlobalHeader.GlobalHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            onCollapse: onCollapse
        }, props), {}, {
            menuData: clearMenuData,
            children: headerContentRender && headerContentRender(props, null)
        }));
        if (isTop && !isMobile) defaultDom = /*#__PURE__*/ (0, _jsxruntime.jsx)(_TopNavHeader.TopNavHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            mode: "horizontal",
            onCollapse: onCollapse
        }, props), {}, {
            menuData: clearMenuData
        }));
        if (headerRender && typeof headerRender === 'function') return headerRender(props, defaultDom);
        return defaultDom;
    }, [
        headerContentRender,
        headerRender,
        isMobile,
        layout,
        onCollapse,
        props
    ]);
    (0, _react.useEffect)(function() {
        var _context$getTargetCon;
        var dom = (context === null || context === void 0 || (_context$getTargetCon = context.getTargetContainer) === null || _context$getTargetCon === void 0 ? void 0 : _context$getTargetCon.call(context)) || document.body;
        var isFixedHeaderFn = function isFixedHeaderFn() {
            var _token$layout;
            var scrollTop = dom.scrollTop;
            if (scrollTop > (((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56) && !isFixedHeaderScroll) {
                setIsFixedHeaderScroll(true);
                return true;
            }
            if (isFixedHeaderScroll) setIsFixedHeaderScroll(false);
            return false;
        };
        if (!needFixedHeader) return;
        if (typeof window === 'undefined') return;
        dom.addEventListener('scroll', isFixedHeaderFn, {
            passive: true
        });
        return function() {
            dom.removeEventListener('scroll', isFixedHeaderFn);
        };
    }, [
        (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader,
        needFixedHeader,
        isFixedHeaderScroll
    ]);
    var isTop = layout === 'top';
    var baseClassName = "".concat(prefixCls, "-layout-header");
    var _useStyle = (0, _header.useStyle)(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var stylish = (0, _stylish.useStylish)("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
        proLayoutCollapsedWidth: 64,
        stylish: props.stylish
    });
    var className = (0, _classnames.default)(propsClassName, hashId, baseClassName, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(baseClassName, "-fixed-header"), needFixedHeader), "".concat(baseClassName, "-fixed-header-scroll"), isFixedHeaderScroll), "".concat(baseClassName, "-mix"), layout === 'mix'), "".concat(baseClassName, "-fixed-header-action"), !collapsed), "".concat(baseClassName, "-top-menu"), isTop), "".concat(baseClassName, "-header"), true), "".concat(baseClassName, "-stylish"), !!props.stylish));
    if (layout === 'side' && !isMobile) return null;
    return stylish.wrapSSR(wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_antd.ConfigProvider, {
            theme: {
                hashed: (0, _proprovider.isNeedOpenHash)(),
                components: {
                    Layout: {
                        headerBg: 'transparent',
                        bodyBg: 'transparent'
                    }
                }
            },
            children: [
                needFixedHeader && /*#__PURE__*/ (0, _jsxruntime.jsx)(Header, {
                    style: (0, _objectSpread2.default)({
                        height: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.heightLayoutHeader) || 56,
                        lineHeight: "".concat(((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.heightLayoutHeader) || 56, "px"),
                        backgroundColor: 'transparent',
                        zIndex: 19
                    }, style)
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Header, {
                    className: className,
                    style: style,
                    children: renderContent()
                })
            ]
        })
    })));
};

},
"node_modules/@ant-design/pro-layout/es/components/Header/style/header.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genProLayoutHeaderStyle = function genProLayoutHeaderStyle(token) {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4;
    return (0, _defineProperty.default)({}, "".concat(token.proComponentsCls, "-layout"), (0, _defineProperty.default)({}, "".concat(token.antCls, "-layout-header").concat(token.componentCls), {
        height: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader) || 56,
        lineHeight: "".concat(((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader) || 56, "px"),
        // hitu 用了这个属性，不能删除哦 @南取
        zIndex: 19,
        width: '100%',
        paddingBlock: 0,
        paddingInline: 0,
        borderBlockEnd: "1px solid ".concat(token.colorSplit),
        backgroundColor: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgHeader) || 'rgba(255, 255, 255, 0.4)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(8px)',
        transition: 'background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
        '&-fixed-header': {
            position: 'fixed',
            insetBlockStart: 0,
            width: '100%',
            zIndex: 100,
            insetInlineEnd: 0
        },
        '&-fixed-header-scroll': {
            backgroundColor: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgScrollHeader) || 'rgba(255, 255, 255, 0.8)'
        },
        '&-header-actions': {
            display: 'flex',
            alignItems: 'center',
            fontSize: '16',
            cursor: 'pointer',
            '& &-item': {
                paddingBlock: 0,
                paddingInline: 8,
                '&:hover': {
                    color: token.colorText
                }
            }
        },
        '&-header-realDark': {
            boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)'
        },
        '&-header-actions-header-action': {
            transition: 'width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
        }
    }));
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProLayoutHeader', function(token) {
        var ProLayoutHeaderToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genProLayoutHeaderStyle(ProLayoutHeaderToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/Header/style/stylish.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStylish", {
    enumerable: true,
    get: function() {
        return useStylish;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
function useStylish(prefixCls, _ref) {
    var stylish = _ref.stylish, proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
    return (0, _proprovider.useStyle)('ProLayoutHeaderStylish', function(token) {
        var stylishToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls),
            proLayoutCollapsedWidth: proLayoutCollapsedWidth
        });
        if (!stylish) return [];
        return [
            (0, _defineProperty.default)({}, "div".concat(token.proComponentsCls, "-layout"), (0, _defineProperty.default)({}, "".concat(stylishToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(stylishToken)))
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/Help/AsyncContentPanel.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "AsyncContentPanel", {
    enumerable: true,
    get: function() {
        return AsyncContentPanel;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var _HelpProvide = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/HelpProvide.js");
var _RenderContentPanel = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/RenderContentPanel.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var AsyncContentPanel = function AsyncContentPanel(_ref) {
    var item = _ref.item, _onInit = _ref.onInit;
    var _useContext = (0, _react.useContext)(_HelpProvide.ProHelpProvide), onLoadContext = _useContext.onLoadContext; // 获取上下文中的 onLoadContext
    var _useState = (0, _react.useState)(false), _useState2 = (0, _slicedToArray.default)(_useState, 2), loading = _useState2[0], setLoading = _useState2[1]; // 加载状态
    var _useState3 = (0, _react.useState)(), _useState4 = (0, _slicedToArray.default)(_useState3, 2), content = _useState4[0], setContent = _useState4[1]; // 内容数据
    (0, _react.useEffect)(function() {
        if (!item.key) return; // 如果没有key则返回
        setLoading(true); // 开始加载
        onLoadContext === null || onLoadContext === void 0 || onLoadContext(item.key, item).then(function(res) {
            // 调用加载方法
            setLoading(false); // 加载完成
            setContent(res); // 设置内容数据
        });
    }, [
        item.key
    ]);
    // 如果没有key，则返回null
    if (!item.key) return null;
    // 如果正在加载并且有key，则显示加载中的状态
    if (loading && item.key) return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        style: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            boxSizing: 'border-box',
            padding: 24
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Spin, {})
    }, item.key);
    // 加载完成后，渲染内容面板
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_RenderContentPanel.RenderContentPanel, {
        onInit: function onInit(ref) {
            _onInit === null || _onInit === void 0 || _onInit(ref);
        },
        dataSourceChildren: content
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/HelpProvide.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ProHelpProvide", {
    enumerable: true,
    get: function() {
        return ProHelpProvide;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var ProHelpProvide = /*#__PURE__*/ _react.default.createContext({
    dataSource: [],
    valueTypeMap: new Map()
});

},
"node_modules/@ant-design/pro-layout/es/components/Help/ProHelpContentPanel.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ProHelpContentPanel", {
    enumerable: true,
    get: function() {
        return ProHelpContentPanel;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _regeneratorRuntime = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _asyncToGenerator = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _AsyncContentPanel = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/AsyncContentPanel.js");
var _HelpProvide = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/HelpProvide.js");
var _RenderContentPanel = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/RenderContentPanel.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var ProHelpContentPanel = function ProHelpContentPanel(_ref) {
    var className = _ref.className, parentItem = _ref.parentItem, selectedKey = _ref.selectedKey, onScroll = _ref.onScroll;
    var _useContext = (0, _react.useContext)(_HelpProvide.ProHelpProvide), dataSource = _useContext.dataSource;
    var _useContext2 = (0, _react.useContext)(_proprovider.ProProvider), hashId = _useContext2.hashId;
    // 记录每个面板的滚动高度
    var scrollHeightMap = (0, _react.useRef)(new Map());
    var divRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(function() {
        if (!selectedKey || !(parentItem !== null && parentItem !== void 0 && parentItem.infiniteScrollFull)) return;
        var div = scrollHeightMap.current.get(selectedKey);
        if (div !== null && div !== void 0 && div.offsetTop && divRef.current) {
            if (Math.abs(divRef.current.scrollTop - (div === null || div === void 0 ? void 0 : div.offsetTop) + 40) > (div === null || div === void 0 ? void 0 : div.clientHeight)) divRef.current.scrollTop = (div === null || div === void 0 ? void 0 : div.offsetTop) - 40;
        }
    }, [
        selectedKey
    ]);
    /**
   * debounce（防抖）处理滚动事件，并根据滚动位置来实现找到当前列表的 key
   */ var onScrollEvent = (0, _proutils.useDebounceFn)(/*#__PURE__*/ function() {
        var _ref2 = (0, _asyncToGenerator.default)(/*#__PURE__*/ (0, _regeneratorRuntime.default)().mark(function _callee(e) {
            var dom, list;
            return (0, _regeneratorRuntime.default)().wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        dom = e === null || e === void 0 ? void 0 : e.target; // 根据滚动位置来找到当前列表的 key
                        list = Array.from(scrollHeightMap.current.entries()).find(function(_ref3) {
                            var _ref4 = (0, _slicedToArray.default)(_ref3, 2), value = _ref4[1];
                            if ((dom === null || dom === void 0 ? void 0 : dom.scrollTop) < value.offsetTop) return true;
                            return false;
                        });
                        if (list) {
                            _context.next = 4;
                            break;
                        }
                        return _context.abrupt("return");
                    case 4:
                        // 如果获取的 key 和当前 key 不同丢弃掉
                        if (list.at(0) !== selectedKey) // 如果不同，则触发 onScroll 事件
                        onScroll === null || onScroll === void 0 || onScroll(list.at(0));
                    case 5:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }));
        return function(_x) {
            return _ref2.apply(this, arguments);
        };
    }(), 200);
    /**
   * 当 parentItem 组件中的 infiniteScrollFull 属性变化时
   * 如果该属性为真值，则开始监听滚动事件；
   * 如果为假值，则停止监听滚动事件并取消防抖处理。
   * 在监听滚动事件时，可以实现分页（瀑布流）效果。同时，该代码还会根据 selectedKey 的变化来触发跳转
   */ (0, _react.useEffect)(function() {
        var _divRef$current;
        if (!(parentItem !== null && parentItem !== void 0 && parentItem.infiniteScrollFull)) return;
        onScrollEvent.cancel();
        (_divRef$current = divRef.current) === null || _divRef$current === void 0 || _divRef$current.addEventListener('scroll', onScrollEvent.run, false);
        return function() {
            var _divRef$current2;
            onScrollEvent.cancel();
            (_divRef$current2 = divRef.current) === null || _divRef$current2 === void 0 || _divRef$current2.removeEventListener('scroll', onScrollEvent.run, false);
        };
    }, [
        parentItem === null || parentItem === void 0 ? void 0 : parentItem.infiniteScrollFull,
        selectedKey
    ]);
    /**
   * 生成一个  Map  能根据 key 找到所有的 index
   */ var dataSourceMap = (0, _react.useMemo)(function() {
        var map = new Map();
        dataSource.forEach(function(page) {
            page.children.forEach(function(item) {
                map.set(item.key || item.title, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                    parentKey: page.key
                }));
            });
        });
        return map;
    }, [
        dataSource
    ]);
    var renderItem = function renderItem(item) {
        if (item !== null && item !== void 0 && item.asyncLoad) return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: (0, _classnames.default)(className, hashId),
            id: item.title,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_AsyncContentPanel.AsyncContentPanel, {
                item: item,
                onInit: function onInit(ref) {
                    if (!scrollHeightMap.current) return;
                    scrollHeightMap.current.set(item.key, ref);
                }
            }, item === null || item === void 0 ? void 0 : item.key)
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: (0, _classnames.default)(className, hashId),
            id: item.title,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_RenderContentPanel.RenderContentPanel, {
                onInit: function onInit(ref) {
                    if (!scrollHeightMap.current) return;
                    scrollHeightMap.current.set(item.key, ref);
                },
                dataSourceChildren: (item === null || item === void 0 ? void 0 : item.children) || []
            })
        });
    };
    if (parentItem && parentItem.infiniteScrollFull) {
        var _parentItem$children;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            ref: divRef,
            className: (0, _classnames.default)("".concat(className, "-infinite-scroll"), hashId),
            style: {
                overflow: 'auto'
            },
            children: (_parentItem$children = parentItem.children) === null || _parentItem$children === void 0 ? void 0 : _parentItem$children.map(function(item) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
                    children: renderItem(item)
                }, item.key);
            })
        });
    }
    return renderItem(dataSourceMap.get(selectedKey));
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/ProHelpDrawer.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ProHelpDrawer", {
    enumerable: true,
    get: function() {
        return ProHelpDrawer;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _useMergedState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/hooks/useMergedState.js"));
var _ProHelpPanel = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpPanel.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "drawerProps"
];
var ProHelpDrawer = function ProHelpDrawer(_ref) {
    var drawerProps = _ref.drawerProps, props = (0, _objectWithoutProperties.default)(_ref, _excluded);
    var _useMergedState1 = (0, _useMergedState.default)(false, {
        value: drawerProps.open,
        onChange: drawerProps.afterOpenChange
    }), _useMergedState2 = (0, _slicedToArray.default)(_useMergedState1, 2), drawerOpen = _useMergedState2[0], setDrawerOpen = _useMergedState2[1];
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Drawer, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        width: 720,
        closeIcon: null,
        styles: {
            header: {
                display: 'none'
            },
            body: {
                padding: 0
            }
        },
        maskClosable: true
    }, drawerProps), {}, {
        open: drawerOpen,
        onClose: function onClose() {
            return setDrawerOpen(false);
        },
        afterOpenChange: function afterOpenChange(open) {
            setDrawerOpen(open);
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_ProHelpPanel.ProHelpPanel, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            onClose: function onClose() {
                return setDrawerOpen(false);
            },
            bordered: false
        }))
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/ProHelpModal.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ProHelpModal", {
    enumerable: true,
    get: function() {
        return ProHelpModal;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _useMergedState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/hooks/useMergedState.js"));
var _ProHelpPanel = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpPanel.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "modalProps"
];
var ProHelpModal = function ProHelpModal(_ref) {
    var modalProps = _ref.modalProps, props = (0, _objectWithoutProperties.default)(_ref, _excluded);
    var _useMergedState1 = (0, _useMergedState.default)(false, {
        value: modalProps === null || modalProps === void 0 ? void 0 : modalProps.open,
        onChange: modalProps === null || modalProps === void 0 ? void 0 : modalProps.afterClose
    }), _useMergedState2 = (0, _slicedToArray.default)(_useMergedState1, 2), modalOpen = _useMergedState2[0], setModalOpen = _useMergedState2[1];
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Modal, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        onCancel: function onCancel() {
            setModalOpen(false);
        },
        styles: {
            body: {
                margin: -24
            }
        },
        centered: true,
        closable: false,
        footer: null,
        width: 720,
        open: modalOpen,
        maskClosable: true
    }, modalProps), {}, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_ProHelpPanel.ProHelpPanel, (0, _objectSpread2.default)((0, _objectSpread2.default)({
            height: 648
        }, props), {}, {
            onClose: function onClose() {
                return setModalOpen(false);
            }
        }))
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/ProHelpPanel.js": function (module, exports, __mako_require__){
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
    ProHelpPanel: function() {
        return ProHelpPanel;
    },
    SelectKeyProvide: function() {
        return SelectKeyProvide;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _icons = __mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/es/index.js");
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _useMergedState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/hooks/useMergedState.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _HelpProvide = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/HelpProvide.js");
var _ProHelpContentPanel = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpContentPanel.js");
var _Search = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/Search.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/style.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "title",
    "bordered",
    "onClose",
    "footer",
    "height",
    "extraRender"
];
var SelectKeyProvide = /*#__PURE__*/ _react.default.createContext({
    selectedKey: undefined,
    setSelectedKey: function setSelectedKey() {}
});
var ProHelpPanel = function ProHelpPanel(_ref) {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5;
    var _ref$title = _ref.title, title = _ref$title === void 0 ? '帮助中心' : _ref$title, _ref$bordered = _ref.bordered, bordered = _ref$bordered === void 0 ? true : _ref$bordered, onClose = _ref.onClose, footer = _ref.footer, height = _ref.height, extraRender = _ref.extraRender, props = (0, _objectWithoutProperties.default)(_ref, _excluded);
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
    var className = getPrefixCls('pro-help');
    var _useStyle = (0, _style.useStyle)(className), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var _useContext2 = (0, _react.useContext)(_HelpProvide.ProHelpProvide), dataSource = _useContext2.dataSource;
    var _useMergedState1 = (0, _useMergedState.default)(undefined, {
        defaultValue: props.defaultSelectedKey,
        value: props.selectedKey,
        onChange: props.onSelectedKeyChange
    }), _useMergedState2 = (0, _slicedToArray.default)(_useMergedState1, 2), selectedKey = _useMergedState2[0], setSelectedKey = _useMergedState2[1];
    var _useState = (0, _react.useState)(''), _useState2 = (0, _slicedToArray.default)(_useState, 2), openKey = _useState2[0], setOpenKey = _useState2[1];
    var _useContext3 = (0, _react.useContext)(_proprovider.ProProvider), token = _useContext3.token;
    var _useMergedState3 = (0, _useMergedState.default)(true, {
        value: props.showLeftPanel,
        onChange: props.onShowLeftPanelChange
    }), _useMergedState4 = (0, _slicedToArray.default)(_useMergedState3, 2), showLeftPanel = _useMergedState4[0], setShowLeftPanel = _useMergedState4[1];
    var dataSourceKeyMap = (0, _react.useMemo)(function() {
        var map = new Map();
        dataSource.forEach(function(page) {
            var _page$children;
            map.set(page.key, page);
            (_page$children = page.children) === null || _page$children === void 0 || _page$children.forEach(function(item) {
                map.set(item.key || item.title, (0, _objectSpread2.default)({
                    parentKey: page.key
                }, item));
            });
        });
        return map;
    }, [
        dataSource
    ]);
    var parentKey = (0, _react.useMemo)(function() {
        var _dataSourceKeyMap$get;
        return (_dataSourceKeyMap$get = dataSourceKeyMap.get(selectedKey)) === null || _dataSourceKeyMap$get === void 0 ? void 0 : _dataSourceKeyMap$get.parentKey;
    }, [
        dataSourceKeyMap,
        selectedKey
    ]);
    var defaultExtraActions = {
        collapsePanelAction: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: "".concat(className, "-actions-item ").concat(hashId).trim(),
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.ProfileOutlined, {
                title: "collapse panel",
                onClick: function onClick() {
                    setShowLeftPanel(!showLeftPanel);
                }
            })
        }),
        helpSelectAction: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Search.ProHelpSelect, {
            iconClassName: "".concat(className, "-actions-item"),
            className: "".concat(hashId, " ").concat(className, "-actions-input"),
            value: selectedKey,
            onChange: function onChange(value, item) {
                setSelectedKey(value);
                setOpenKey(item === null || item === void 0 ? void 0 : item.dataItemKey);
            }
        }),
        closeAction: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: "".concat(className, "-actions-item ").concat(hashId).trim(),
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.CloseOutlined, {
                title: "close panel",
                onClick: function onClick() {
                    onClose === null || onClose === void 0 || onClose();
                }
            })
        })
    };
    var extraDomList = function extraDomList() {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: "".concat(className, "-actions ").concat(hashId).trim(),
            children: extraRender ? extraRender(defaultExtraActions.collapsePanelAction, defaultExtraActions.helpSelectAction, defaultExtraActions.closeAction) : /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    defaultExtraActions.collapsePanelAction,
                    defaultExtraActions.helpSelectAction,
                    onClose ? defaultExtraActions.closeAction : null
                ]
            })
        });
    };
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)(SelectKeyProvide.Provider, {
        value: {
            selectedKey: selectedKey,
            setSelectedKey: setSelectedKey
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_antd.Card, {
            bordered: bordered,
            title: title,
            bodyStyle: {
                display: 'flex',
                padding: 0,
                margin: 0,
                height: '100%',
                width: '100%'
            },
            size: "small",
            extra: extraDomList(),
            children: [
                showLeftPanel ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: "".concat(hashId, " ").concat(className, "-left-panel "),
                    style: {
                        height: height
                    },
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.ConfigProvider, {
                        theme: {
                            hashed: (0, _proprovider.isNeedOpenHash)(),
                            token: {
                                lineHeight: 1.2,
                                fontSize: 12,
                                controlHeightLG: 26
                            },
                            components: {
                                Menu: (0, _proutils.coverToNewToken)({
                                    radiusItem: token.borderRadius,
                                    colorActiveBarWidth: 0,
                                    colorActiveBarBorderSize: 0,
                                    colorItemBgSelected: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorBgMenuItemSelected) || 'rgba(0, 0, 0, 0.04)',
                                    colorItemBgActive: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgMenuItemHover) || 'rgba(0, 0, 0, 0.04)',
                                    colorItemText: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextMenu) || 'rgba(0, 0, 0, 0.65)',
                                    colorItemTextHover: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuActive) || 'rgba(0, 0, 0, 0.85)',
                                    colorItemTextSelected: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
                                    colorItemBg: 'transparent',
                                    colorSubItemBg: 'transparent',
                                    popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                                    darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
                                })
                            }
                        },
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Menu, {
                            className: "".concat(hashId, " ").concat(className, "-left-panel-menu"),
                            openKeys: [
                                parentKey,
                                openKey
                            ],
                            onOpenChange: function onOpenChange(keys) {
                                setOpenKey(keys.at(-1) || '');
                            },
                            selectedKeys: selectedKey ? [
                                selectedKey
                            ] : [],
                            onSelect: function onSelect(_ref2) {
                                var selectedKeys = _ref2.selectedKeys;
                                setSelectedKey(selectedKeys.at(-1) || '');
                            },
                            mode: "inline",
                            items: dataSource.map(function(item) {
                                return {
                                    key: item.key,
                                    label: item.title,
                                    children: item.children.map(function(child) {
                                        return {
                                            key: child.key,
                                            label: child.title
                                        };
                                    })
                                };
                            })
                        })
                    })
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "".concat(hashId, " ").concat(className, "-content-panel"),
                    style: {
                        height: height
                    },
                    children: [
                        selectedKey ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_ProHelpContentPanel.ProHelpContentPanel, {
                            parentItem: dataSourceKeyMap.get(parentKey),
                            className: "".concat(className, "-content-render"),
                            selectedKey: selectedKey,
                            onScroll: function onScroll(key) {
                                return setSelectedKey(key);
                            }
                        }) : null,
                        footer ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "".concat(hashId, " ").concat(className, "-footer"),
                            children: footer
                        }) : null
                    ]
                })
            ]
        })
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/ProHelpPopover.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ProHelpPopover", {
    enumerable: true,
    get: function() {
        return ProHelpPopover;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _ProHelpContentPanel = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpContentPanel.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/style.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var ProHelpPopover = function ProHelpPopover(props) {
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
    var className = getPrefixCls('pro-help');
    var _useContext2 = (0, _react.useContext)(_proprovider.ProProvider), hashId = _useContext2.hashId;
    var _useStyle = (0, _style.useStyle)(className), wrapSSR = _useStyle.wrapSSR;
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Popover, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        overlayInnerStyle: {
            padding: 0
        },
        content: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: (0, _classnames.default)("".concat(className, "-popover-content"), hashId, props.popoverContextClassName),
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_ProHelpContentPanel.ProHelpContentPanel, {
                selectedKey: props.selectedKey
            })
        })
    }, props.popoverProps), {}, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
            className: (0, _classnames.default)("".concat(className, "-popover-text"), hashId, props.textClassName),
            children: props.children
        })
    })));
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/RenderContentPanel.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "RenderContentPanel", {
    enumerable: true,
    get: function() {
        return RenderContentPanel;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _HelpProvide = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/HelpProvide.js");
var _ProHelpPanel = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpPanel.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var HTMLRender = function HTMLRender(props) {
    var ref = (0, _react.useRef)(null);
    // 当html发生变化时，将其渲染到ref.current的innerHTML中
    (0, _react.useEffect)(function() {
        if (ref.current) ref.current.innerHTML = props.children;
    }, [
        props.children
    ]);
    // 返回一个div元素作为容器，并传递ref和className作为props
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        ref: ref,
        className: props.className || 'inner-html'
    });
};
var NavigationSwitch = function NavigationSwitch(props) {
    var context = (0, _react.useContext)(_ProHelpPanel.SelectKeyProvide);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Typography.Text, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            "data-testid": "navigation-switch",
            onClick: function onClick() {
                context.setSelectedKey(props.selectKey);
            },
            children: props.children
        })
    });
};
var RenderContentPanel = function RenderContentPanel(_ref) {
    var dataSourceChildren = _ref.dataSourceChildren, onInit = _ref.onInit;
    var _useContext = (0, _react.useContext)(_HelpProvide.ProHelpProvide), valueTypeMap = _useContext.valueTypeMap;
    var divRef = (0, _react.useRef)(null);
    (0, _react.useEffect)(function() {
        onInit === null || onInit === void 0 || onInit(divRef.current);
    }, [
        dataSourceChildren
    ]);
    /**
   * itemRender 的定义
   * @param {ProHelpDataSourceChildren} item
   * @param {number} index
   * @return {*}
   */ var itemRender = function itemRender(item, index) {
        // 自定义的渲染，优先级最高
        if (valueTypeMap.has(item.valueType)) {
            var _valueTypeMap$get;
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
                children: (_valueTypeMap$get = valueTypeMap.get(item.valueType)) === null || _valueTypeMap$get === void 0 ? void 0 : _valueTypeMap$get(item, index)
            }, index);
        }
        if (item.valueType === 'html') return /*#__PURE__*/ (0, _jsxruntime.jsx)(HTMLRender, (0, _objectSpread2.default)({}, item.children), index);
        if (item.valueType === 'h1') return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Typography.Title, {
            style: {
                marginTop: 0
            },
            level: 3,
            children: item.children
        }, index);
        if (item.valueType === 'h2') return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Typography.Title, {
            style: {
                marginTop: 20
            },
            level: 5,
            children: item.children
        }, index);
        if (item.valueType === 'image') return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            style: {
                marginBlock: 12
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Image, (0, _objectSpread2.default)({}, item.children))
        }, index);
        if (item.valueType === 'inlineLink') return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Typography.Text, {
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("a", (0, _objectSpread2.default)({}, item.children))
        }, index);
        if (item.valueType === 'link') return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Typography.Text, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("a", (0, _objectSpread2.default)({}, item.children))
            }, index)
        }, index);
        if (item.valueType === 'navigationSwitch') return /*#__PURE__*/ (0, _jsxruntime.jsx)(NavigationSwitch, (0, _objectSpread2.default)({}, item.children), index);
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Typography.Text, {
            children: item.children
        }, index);
    };
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        ref: divRef,
        children: dataSourceChildren === null || dataSourceChildren === void 0 ? void 0 : dataSourceChildren.map(itemRender)
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/Search.js": function (module, exports, __mako_require__){
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
    Highlight: function() {
        return Highlight;
    },
    ProHelpSelect: function() {
        return ProHelpSelect;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _regeneratorRuntime = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"));
var _asyncToGenerator = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _icons = __mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/es/index.js");
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _HelpProvide = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/HelpProvide.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "iconClassName"
];
var Highlight = function Highlight(_ref) {
    var label = _ref.label, words = _ref.words;
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
    var lightCls = getPrefixCls('pro-help-search-list-item-content-light');
    var optionCls = getPrefixCls('pro-help-search-list-item-content');
    // css
    var _useStyle = (0, _proprovider.useStyle)('Highlight', function(token) {
        return (0, _defineProperty.default)((0, _defineProperty.default)({}, ".".concat(lightCls), {
            color: token.colorPrimary
        }), ".".concat(optionCls), {
            flex: 'auto',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
        });
    }), wrapSSR = _useStyle.wrapSSR;
    if (words.length === 0) return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: label
    });
    // 创建正则表达式匹配关键词
    var matchKeywordsRE = new RegExp(words.map(function(word) {
        return word.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
    }).join('|'), 'gi');
    var matchText = label;
    var elements = [];
    // 遍历匹配的文本，将匹配项和非匹配项分别处理并放入elements数组中
    while(matchText.length){
        var match = matchKeywordsRE.exec(matchText);
        if (!match) {
            elements.push(matchText);
            break;
        }
        var start = match.index;
        var matchLength = match[0].length + start;
        elements.push(matchText.slice(0, start), /*#__PURE__*/ _react.default.createElement('span', {
            className: lightCls
        }, matchText.slice(start, matchLength)));
        matchText = matchText.slice(matchLength);
    }
    return wrapSSR(/*#__PURE__*/ _react.default.createElement.apply(_react.default, [
        'div',
        {
            title: label,
            className: optionCls
        }
    ].concat(elements)));
};
var ProHelpSelect = function ProHelpSelect(_ref3) {
    var iconClassName = _ref3.iconClassName, props = (0, _objectWithoutProperties.default)(_ref3, _excluded);
    var _useContext2 = (0, _react.useContext)(_HelpProvide.ProHelpProvide), dataSource = _useContext2.dataSource;
    var _useState = (0, _react.useState)(''), _useState2 = (0, _slicedToArray.default)(_useState, 2), keyWord = _useState2[0], setKeyWork = _useState2[1];
    var _useContext3 = (0, _react.useContext)(_proprovider.ProProvider), hashId = _useContext3.hashId;
    var debounceSetKeyWork = (0, _proutils.useDebounceFn)(/*#__PURE__*/ function() {
        var _ref4 = (0, _asyncToGenerator.default)(/*#__PURE__*/ (0, _regeneratorRuntime.default)().mark(function _callee(key) {
            return (0, _regeneratorRuntime.default)().wrap(function _callee$(_context) {
                while(true)switch(_context.prev = _context.next){
                    case 0:
                        return _context.abrupt("return", setKeyWork(key));
                    case 1:
                    case "end":
                        return _context.stop();
                }
            }, _callee);
        }));
        return function(_x) {
            return _ref4.apply(this, arguments);
        };
    }(), 20);
    var _useState3 = (0, _react.useState)(false), _useState4 = (0, _slicedToArray.default)(_useState3, 2), open = _useState4[0], setOpen = _useState4[1];
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            !open ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)(iconClassName, hashId),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.SearchOutlined, {
                    title: "search panel",
                    onClick: function onClick() {
                        setOpen(true);
                    }
                })
            }) : null,
            open ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Select, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
                placeholder: "please input search text",
                showSearch: true
            }, (0, _proutils.compatibleBorder)(false)), {}, {
                onBlur: function onBlur() {
                    setOpen(false);
                },
                size: "small"
            }, props), {}, {
                onSearch: function onSearch(value) {
                    debounceSetKeyWork.cancel();
                    debounceSetKeyWork.run(value);
                },
                filterOption: function filterOption(input, option) {
                    var _option$title;
                    return ((_option$title = option === null || option === void 0 ? void 0 : option.title) !== null && _option$title !== void 0 ? _option$title : '').toLowerCase().includes(input.toLowerCase());
                },
                popupMatchSelectWidth: false,
                options: dataSource.map(function(item) {
                    var _item$children;
                    return {
                        label: /*#__PURE__*/ (0, _jsxruntime.jsx)(Highlight, {
                            label: item.title,
                            words: [
                                keyWord
                            ].filter(Boolean)
                        }),
                        title: item.title,
                        value: item.key,
                        options: (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.map(function(sunItem) {
                            return {
                                label: /*#__PURE__*/ (0, _jsxruntime.jsx)(Highlight, {
                                    label: sunItem.title,
                                    words: [
                                        keyWord
                                    ].filter(Boolean)
                                }),
                                title: sunItem.title,
                                value: sunItem.key,
                                dataItemKey: item.key
                            };
                        })
                    };
                })
            })) : null
        ]
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/index.js": function (module, exports, __mako_require__){
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
    ProHelp: function() {
        return ProHelp;
    },
    ProHelpProvide: function() {
        return _HelpProvide.ProHelpProvide;
    },
    ProHelpSelect: function() {
        return _Search.ProHelpSelect;
    }
});
var _export_star = __mako_require__("@swc/helpers/_/_export_star");
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _HelpProvide = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/HelpProvide.js");
var _Search = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/Search.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
_export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpContentPanel.js"), exports);
_export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpDrawer.js"), exports);
_export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpModal.js"), exports);
_export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpPanel.js"), exports);
_export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/ProHelpPopover.js"), exports);
_export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/RenderContentPanel.js"), exports);
var _excluded = [
    "dataSource",
    "valueTypeMap",
    "onLoadContext"
];
var ProHelp = function ProHelp(_ref) {
    var dataSource = _ref.dataSource, _ref$valueTypeMap = _ref.valueTypeMap, valueTypeMap = _ref$valueTypeMap === void 0 ? new Map() : _ref$valueTypeMap, onLoadContext = _ref.onLoadContext, props = (0, _objectWithoutProperties.default)(_ref, _excluded);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_HelpProvide.ProHelpProvide.Provider, {
        value: {
            onLoadContext: onLoadContext,
            dataSource: dataSource,
            valueTypeMap: valueTypeMap
        },
        children: props.children
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/Help/style.js": function (module, exports, __mako_require__){
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
    actionsInputAnimal: function() {
        return actionsInputAnimal;
    },
    useStyle: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var actionsInputAnimal = new _cssinjs.Keyframes('actionsInputAnimal', {
    '0%': {
        width: '0px'
    },
    '30%': {
        width: '20px'
    },
    '100%': {
        width: '120px'
    }
});
var genProHelpStyle = function genProHelpStyle(token) {
    return (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.componentCls, "-popover-text"), {
        color: token.colorPrimary,
        cursor: 'pointer',
        boxSizing: 'border-box'
    }), "".concat(token.componentCls, "-popover-content"), {
        maxWidth: 300,
        height: '600px',
        maxHeight: 'calc(100vh - 200px)',
        overflow: 'auto',
        paddingInline: 20,
        paddingBlockStart: 24,
        paddingBlockEnd: 32,
        boxSizing: 'border-box'
    }), "".concat(token.componentCls, "-left-panel"), {
        overflow: 'auto',
        boxSizing: 'border-box',
        borderInlineEnd: "".concat(token === null || token === void 0 ? void 0 : token.lineWidth, "px solid ").concat(token === null || token === void 0 ? void 0 : token.colorBorderSecondary),
        minHeight: '648px',
        minWidth: 190,
        maxWidth: 190,
        '&-menu': {
            width: 190,
            boxSizing: 'border-box',
            minWidth: 190,
            height: 'calc(100% - 40px)',
            marginBlock: 20
        }
    }), "".concat(token.componentCls, "-content-panel"), {
        minWidth: '200px',
        overflow: 'auto',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        minHeight: '648px',
        img: {
            width: '100%'
        }
    }), "".concat(token.componentCls, "-content-render"), {
        paddingBlock: 20,
        paddingInline: 24,
        flex: 1
    }), "".concat(token.componentCls, "-content-footer"), {
        padding: 8
    }), "".concat(token.componentCls, "-actions"), {
        display: 'flex',
        boxSizing: 'border-box',
        gap: token.marginSM,
        '&-item': {
            display: 'flex',
            boxSizing: 'border-box',
            alignItems: 'center',
            justifyItems: 'center',
            padding: 4,
            height: 24,
            minWidth: 24,
            cursor: 'pointer',
            borderRadius: token.borderRadius,
            '&:hover': {
                backgroundColor: token.colorBgTextHover
            }
        },
        '&-input': {
            margin: 0,
            maxWidth: 120,
            padding: 0,
            width: '120px',
            boxSizing: 'border-box',
            borderRadius: token.borderRadius,
            backgroundColor: token.colorBgTextHover,
            animationName: actionsInputAnimal,
            animationDuration: '0.1s',
            animationTimingFunction: 'linear'
        }
    });
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProHelp', function(token) {
        var ProLayoutHeaderToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genProHelpStyle(ProLayoutHeaderToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/PageContainer/index.js": function (module, exports, __mako_require__){
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
    PageContainer: function() {
        return PageContainer;
    },
    ProBreadcrumb: function() {
        return ProBreadcrumb;
    },
    ProPageHeader: function() {
        return ProPageHeader;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _typeof = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/typeof.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _RouteContext = __mako_require__("node_modules/@ant-design/pro-layout/es/context/RouteContext.js");
var _FooterToolbar = __mako_require__("node_modules/@ant-design/pro-layout/es/components/FooterToolbar/index.js");
var _GridContent = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GridContent/index.js");
var _PageHeader = __mako_require__("node_modules/@ant-design/pro-layout/es/components/PageHeader/index.js");
var _PageLoading = __mako_require__("node_modules/@ant-design/pro-layout/es/components/PageLoading/index.js");
var _WaterMark = __mako_require__("node_modules/@ant-design/pro-layout/es/components/WaterMark/index.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/PageContainer/style/index.js");
var _stylish = __mako_require__("node_modules/@ant-design/pro-layout/es/components/PageContainer/style/stylish.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
__mako_require__("node_modules/antd/es/breadcrumb/style/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "title",
    "content",
    "pageHeaderRender",
    "header",
    "prefixedClassName",
    "extraContent",
    "childrenContentStyle",
    "style",
    "prefixCls",
    "hashId",
    "value",
    "breadcrumbRender"
];
var _excluded2 = [
    "children",
    "loading",
    "className",
    "style",
    "footer",
    "affixProps",
    "token",
    "fixedHeader",
    "breadcrumbRender",
    "footerToolBarProps",
    "childrenContentStyle"
];
function genLoading(spinProps) {
    if ((0, _typeof.default)(spinProps) === 'object') return spinProps;
    return {
        spinning: spinProps
    };
}
/**
 * Render Footer tabList In order to be compatible with the old version of the PageHeader basically
 * all the functions are implemented.
 */ var renderFooter = function renderFooter(_ref) {
    var tabList = _ref.tabList, tabActiveKey = _ref.tabActiveKey, onTabChange = _ref.onTabChange, hashId = _ref.hashId, tabBarExtraContent = _ref.tabBarExtraContent, tabProps = _ref.tabProps, prefixedClassName = _ref.prefixedClassName;
    if (Array.isArray(tabList) || tabBarExtraContent) return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Tabs, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        className: "".concat(prefixedClassName, "-tabs ").concat(hashId).trim(),
        activeKey: tabActiveKey,
        onChange: function onChange(key) {
            if (onTabChange) onTabChange(key);
        },
        tabBarExtraContent: tabBarExtraContent,
        items: tabList === null || tabList === void 0 ? void 0 : tabList.map(function(item, index) {
            var _item$key;
            return (0, _objectSpread2.default)((0, _objectSpread2.default)({
                label: item.tab
            }, item), {}, {
                key: ((_item$key = item.key) === null || _item$key === void 0 ? void 0 : _item$key.toString()) || (index === null || index === void 0 ? void 0 : index.toString())
            });
        })
    }, tabProps), {}, {
        children: (0, _proutils.compareVersions)(_antd.version, '4.23.0') < 0 ? tabList === null || tabList === void 0 ? void 0 : tabList.map(function(item, index) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Tabs.TabPane, (0, _objectSpread2.default)({
                tab: item.tab
            }, item), item.key || index);
        }) : null
    }));
    return null;
};
var renderPageHeader = function renderPageHeader(content, extraContent, prefixedClassName, hashId) {
    if (!content && !extraContent) return null;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "".concat(prefixedClassName, "-detail ").concat(hashId).trim(),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            className: "".concat(prefixedClassName, "-main ").concat(hashId).trim(),
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "".concat(prefixedClassName, "-row ").concat(hashId).trim(),
                children: [
                    content && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "".concat(prefixedClassName, "-content ").concat(hashId).trim(),
                        children: content
                    }),
                    extraContent && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "".concat(prefixedClassName, "-extraContent ").concat(hashId).trim(),
                        children: extraContent
                    })
                ]
            })
        })
    });
};
/**
 * 配置与面包屑相同，只是增加了自动根据路由计算面包屑的功能。此功能必须要在 ProLayout 中使用。
 *
 * @param props
 * @returns
 */ var ProBreadcrumb = function ProBreadcrumb(props) {
    var value = (0, _react.useContext)(_RouteContext.RouteContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        style: {
            height: '100%',
            display: 'flex',
            alignItems: 'center'
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Breadcrumb, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, value === null || value === void 0 ? void 0 : value.breadcrumb), value === null || value === void 0 ? void 0 : value.breadcrumbProps), props))
    });
};
var memoRenderPageHeader = function memoRenderPageHeader(props) {
    var _breadcrumb$items;
    var title = props.title, content = props.content, pageHeaderRender = props.pageHeaderRender, header = props.header, prefixedClassName = props.prefixedClassName, extraContent = props.extraContent, childrenContentStyle = props.childrenContentStyle, style = props.style, prefixCls = props.prefixCls, hashId = props.hashId, value = props.value, breadcrumbRender = props.breadcrumbRender, restProps = (0, _objectWithoutProperties.default)(props, _excluded);
    var getBreadcrumbRender = function getBreadcrumbRender() {
        if (!breadcrumbRender) return undefined;
        return breadcrumbRender;
    };
    if (pageHeaderRender === false) return null;
    if (pageHeaderRender) return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            " ",
            pageHeaderRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), value))
        ]
    });
    var pageHeaderTitle = title;
    if (!title && title !== false) pageHeaderTitle = value.title;
    var pageHeaderProps = (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, value), {}, {
        title: pageHeaderTitle
    }, restProps), {}, {
        footer: renderFooter((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
            hashId: hashId,
            breadcrumbRender: breadcrumbRender,
            prefixedClassName: prefixedClassName
        }))
    }, header);
    var _ref2 = pageHeaderProps, breadcrumb = _ref2.breadcrumb;
    var noHasBreadCrumb = (!breadcrumb || !(breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.itemRender) && !(breadcrumb !== null && breadcrumb !== void 0 && (_breadcrumb$items = breadcrumb.items) !== null && _breadcrumb$items !== void 0 && _breadcrumb$items.length)) && !breadcrumbRender;
    if ([
        'title',
        'subTitle',
        'extra',
        'tags',
        'footer',
        'avatar',
        'backIcon'
    ].every(function(item) {
        return !pageHeaderProps[item];
    }) && noHasBreadCrumb && !content && !extraContent) return null;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_PageHeader.PageHeader, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pageHeaderProps), {}, {
        className: "".concat(prefixedClassName, "-warp-page-header ").concat(hashId).trim(),
        breadcrumb: breadcrumbRender === false ? undefined : (0, _objectSpread2.default)((0, _objectSpread2.default)({}, pageHeaderProps.breadcrumb), value.breadcrumbProps),
        breadcrumbRender: getBreadcrumbRender(),
        prefixCls: prefixCls,
        children: (header === null || header === void 0 ? void 0 : header.children) || renderPageHeader(content, extraContent, prefixedClassName, hashId)
    }));
};
var PageContainerBase = function PageContainerBase(props) {
    var _restProps$header2, _token$layout;
    var children = props.children, _props$loading = props.loading, loading = _props$loading === void 0 ? false : _props$loading, className = props.className, style = props.style, footer = props.footer, affixProps = props.affixProps, propsToken = props.token, fixedHeader = props.fixedHeader, breadcrumbRender = props.breadcrumbRender, footerToolBarProps = props.footerToolBarProps, childrenContentStyle = props.childrenContentStyle, restProps = (0, _objectWithoutProperties.default)(props, _excluded2);
    var value = (0, _react.useContext)(_RouteContext.RouteContext);
    /** 告诉 props 是否存在 footerBar */ (0, _react.useEffect)(function() {
        var _value$setHasPageCont;
        if (!value || !(value !== null && value !== void 0 && value.setHasPageContainer)) return function() {};
        value === null || value === void 0 || (_value$setHasPageCont = value.setHasPageContainer) === null || _value$setHasPageCont === void 0 || _value$setHasPageCont.call(value, function(num) {
            return num + 1;
        });
        return function() {
            var _value$setHasPageCont2;
            value === null || value === void 0 || (_value$setHasPageCont2 = value.setHasPageContainer) === null || _value$setHasPageCont2 === void 0 || _value$setHasPageCont2.call(value, function(num) {
                return num - 1;
            });
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var _useContext = (0, _react.useContext)(_proprovider.ProProvider), token = _useContext.token;
    var _useContext2 = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext2.getPrefixCls;
    var prefixCls = props.prefixCls || getPrefixCls('pro');
    var basePageContainer = "".concat(prefixCls, "-page-container");
    var _useStyle = (0, _style.useStyle)(basePageContainer, propsToken), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var stylish = (0, _stylish.useStylish)("".concat(basePageContainer, ".").concat(basePageContainer, "-stylish"), {
        stylish: props.stylish
    });
    var memoBreadcrumbRender = (0, _react.useMemo)(function() {
        var _restProps$header;
        if (breadcrumbRender == false) return false;
        return breadcrumbRender || (restProps === null || restProps === void 0 || (_restProps$header = restProps.header) === null || _restProps$header === void 0 ? void 0 : _restProps$header.breadcrumbRender);
    }, [
        breadcrumbRender,
        restProps === null || restProps === void 0 || (_restProps$header2 = restProps.header) === null || _restProps$header2 === void 0 ? void 0 : _restProps$header2.breadcrumbRender
    ]);
    var pageHeaderDom = memoRenderPageHeader((0, _objectSpread2.default)((0, _objectSpread2.default)({}, restProps), {}, {
        breadcrumbRender: memoBreadcrumbRender,
        ghost: true,
        hashId: hashId,
        prefixCls: undefined,
        prefixedClassName: basePageContainer,
        value: value
    }));
    var loadingDom = (0, _react.useMemo)(function() {
        // 当loading时一个合法的ReactNode时，说明用户使用了自定义loading,直接返回改自定义loading
        if (/*#__PURE__*/ _react.default.isValidElement(loading)) return loading;
        // 当传递过来的是布尔值，并且为false时，说明不需要显示loading,返回null
        if (typeof loading === 'boolean' && !loading) return null;
        // 如非上述两种情况，那么要么用户传了一个true,要么用户传了loading配置，使用genLoading生成loading配置后返回PageLoading
        var spinProps = genLoading(loading);
        // 如果传的是loading配置，但spinning传的是false，也不需要显示loading
        return spinProps.spinning ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_PageLoading.PageLoading, (0, _objectSpread2.default)({}, spinProps)) : null;
    }, [
        loading
    ]);
    var content = (0, _react.useMemo)(function() {
        return children ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)(hashId, "".concat(basePageContainer, "-children-container"), (0, _defineProperty.default)({}, "".concat(basePageContainer, "-children-container-no-header"), !pageHeaderDom)),
                style: childrenContentStyle,
                children: children
            })
        }) : null;
    }, [
        children,
        basePageContainer,
        childrenContentStyle,
        hashId
    ]);
    var renderContentDom = (0, _react.useMemo)(function() {
        // 只要loadingDom非空我们就渲染loadingDom,否则渲染内容
        var dom = loadingDom || content;
        if (props.waterMarkProps || value.waterMarkProps) {
            var waterMarkProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, value.waterMarkProps), props.waterMarkProps);
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_WaterMark.WaterMark, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, waterMarkProps), {}, {
                children: dom
            }));
        }
        return dom;
    }, [
        props.waterMarkProps,
        value.waterMarkProps,
        loadingDom,
        content
    ]);
    var containerClassName = (0, _classnames.default)(basePageContainer, hashId, className, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(basePageContainer, "-with-footer"), footer), "".concat(basePageContainer, "-with-affix"), fixedHeader && pageHeaderDom), "".concat(basePageContainer, "-stylish"), !!restProps.stylish));
    return wrapSSR(stylish.wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                style: style,
                className: containerClassName,
                children: [
                    fixedHeader && pageHeaderDom ? /*#__PURE__*/ // 在 hasHeader 且 fixedHeader 的情况下，才需要设置高度
                    (0, _jsxruntime.jsx)(_antd.Affix, (0, _objectSpread2.default)((0, _objectSpread2.default)({
                        offsetTop: value.hasHeader && value.fixedHeader ? (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.heightLayoutHeader : 1
                    }, affixProps), {}, {
                        className: "".concat(basePageContainer, "-affix ").concat(hashId).trim(),
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "".concat(basePageContainer, "-warp ").concat(hashId).trim(),
                            children: pageHeaderDom
                        })
                    })) : pageHeaderDom,
                    renderContentDom && /*#__PURE__*/ (0, _jsxruntime.jsx)(_GridContent.GridContent, {
                        children: renderContentDom
                    })
                ]
            }),
            footer && /*#__PURE__*/ (0, _jsxruntime.jsx)(_FooterToolbar.FooterToolbar, (0, _objectSpread2.default)((0, _objectSpread2.default)({
                stylish: restProps.footerStylish,
                prefixCls: prefixCls
            }, footerToolBarProps), {}, {
                children: footer
            }))
        ]
    })));
};
var PageContainer = function PageContainer(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_proprovider.ProConfigProvider, {
        needDeps: true,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(PageContainerBase, (0, _objectSpread2.default)({}, props))
    });
};
var ProPageHeader = function ProPageHeader(props) {
    var value = (0, _react.useContext)(_RouteContext.RouteContext);
    return memoRenderPageHeader((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        hashId: '',
        value: value
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/PageContainer/style/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _map = [
    576,
    768,
    992,
    1200
].map(function(bp) {
    return "@media (max-width: ".concat(bp, "px)");
});
var _map2 = (0, _slicedToArray.default)(_map, 4);
var sm = _map2[0];
var md = _map2[1];
var lg = _map2[2];
var xl = _map2[3];
var genPageContainerStyle = function genPageContainerStyle(token) {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout$pageCon, _token$layout5, _token$layout$pageCon2, _token$layout6, _token$layout7, _token$layout8, _token$layout$pageCon3, _token$layout9, _token$layout$pageCon4, _token$layout10, _token$layout$pageCon5, _token$layout11, _token$layout$pageCon6, _token$layout12;
    return (0, _defineProperty.default)({}, token.componentCls, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        position: 'relative',
        '&-children-container': {
            paddingBlockStart: 0,
            paddingBlockEnd: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.pageContainer) === null || _token$layout === void 0 ? void 0 : _token$layout.paddingBlockPageContainerContent,
            paddingInline: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.pageContainer) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.paddingInlinePageContainerContent
        },
        '&-children-container-no-header': {
            paddingBlockStart: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.pageContainer) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.paddingBlockPageContainerContent
        },
        '&-affix': (0, _defineProperty.default)({}, "".concat(token.antCls, "-affix"), (0, _defineProperty.default)({}, "".concat(token.componentCls, "-warp"), {
            backgroundColor: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.pageContainer) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgPageContainerFixed,
            transition: 'background-color 0.3s',
            boxShadow: '0 2px 8px #f0f1f2'
        }))
    }, '& &-warp-page-header', (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        paddingBlockStart: ((_token$layout$pageCon = (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.pageContainer) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.paddingBlockPageContainerContent) !== null && _token$layout$pageCon !== void 0 ? _token$layout$pageCon : 40) / 4,
        paddingBlockEnd: ((_token$layout$pageCon2 = (_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.pageContainer) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.paddingBlockPageContainerContent) !== null && _token$layout$pageCon2 !== void 0 ? _token$layout$pageCon2 : 40) / 2,
        paddingInlineStart: (_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.pageContainer) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.paddingInlinePageContainerContent,
        paddingInlineEnd: (_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.pageContainer) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.paddingInlinePageContainerContent
    }, "& ~ ".concat(token.proComponentsCls, "-grid-content"), (0, _defineProperty.default)({}, "".concat(token.proComponentsCls, "-page-container-children-content"), {
        paddingBlock: ((_token$layout$pageCon3 = (_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.pageContainer) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.paddingBlockPageContainerContent) !== null && _token$layout$pageCon3 !== void 0 ? _token$layout$pageCon3 : 24) / 3
    })), "".concat(token.antCls, "-page-header-breadcrumb"), {
        paddingBlockStart: ((_token$layout$pageCon4 = (_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.pageContainer) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.paddingBlockPageContainerContent) !== null && _token$layout$pageCon4 !== void 0 ? _token$layout$pageCon4 : 40) / 4 + 10
    }), "".concat(token.antCls, "-page-header-heading"), {
        paddingBlockStart: ((_token$layout$pageCon5 = (_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.pageContainer) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.paddingBlockPageContainerContent) !== null && _token$layout$pageCon5 !== void 0 ? _token$layout$pageCon5 : 40) / 4
    }), "".concat(token.antCls, "-page-header-footer"), {
        marginBlockStart: ((_token$layout$pageCon6 = (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.pageContainer) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.paddingBlockPageContainerContent) !== null && _token$layout$pageCon6 !== void 0 ? _token$layout$pageCon6 : 40) / 4
    })), '&-detail', (0, _defineProperty.default)({
        display: 'flex'
    }, sm, {
        display: 'block'
    })), '&-main', {
        width: '100%'
    }), '&-row', (0, _defineProperty.default)({
        display: 'flex',
        width: '100%'
    }, md, {
        display: 'block'
    })), '&-content', {
        flex: 'auto',
        width: '100%'
    }), '&-extraContent', (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        flex: '0 1 auto',
        minWidth: '242px',
        marginInlineStart: 88,
        textAlign: 'end'
    }, xl, {
        marginInlineStart: 44
    }), lg, {
        marginInlineStart: 20
    }), md, {
        marginInlineStart: 0,
        textAlign: 'start'
    }), sm, {
        marginInlineStart: 0
    })));
};
function useStyle(prefixCls, componentsToken) {
    return (0, _proprovider.useStyle)('ProLayoutPageContainer', function(token) {
        var _token$layout13;
        var proCardToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls),
            layout: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token === null || token === void 0 ? void 0 : token.layout), {}, {
                pageContainer: (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token === null || token === void 0 || (_token$layout13 = token.layout) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.pageContainer), componentsToken)
            })
        });
        return [
            genPageContainerStyle(proCardToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/PageContainer/style/stylish.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStylish", {
    enumerable: true,
    get: function() {
        return useStylish;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
function useStylish(prefixCls, _ref) {
    var stylish = _ref.stylish;
    return (0, _proprovider.useStyle)('ProLayoutPageContainerStylish', function(token) {
        var stylishToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        if (!stylish) return [];
        return [
            (0, _defineProperty.default)({}, "div".concat(stylishToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(stylishToken))
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/PageHeader/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "PageHeader", {
    enumerable: true,
    get: function() {
        return PageHeader;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _ArrowLeftOutlined = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/ArrowLeftOutlined.js"));
var _ArrowRightOutlined = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/ArrowRightOutlined.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
__mako_require__("node_modules/antd/es/breadcrumb/style/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _rcresizeobserver = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-resize-observer/es/index.js"));
var _warning = __mako_require__("node_modules/rc-util/es/warning.js");
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _index = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/components/PageHeader/style/index.js"));
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var renderBack = function renderBack(prefixCls, hashId, backIcon, onBack) {
    if (!backIcon || !onBack) return null;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "".concat(prefixCls, "-back ").concat(hashId).trim(),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            role: "button",
            onClick: function onClick(e) {
                onBack === null || onBack === void 0 || onBack(e);
            },
            className: "".concat(prefixCls, "-back-button ").concat(hashId).trim(),
            "aria-label": "back",
            children: backIcon
        })
    });
};
var renderBreadcrumb = function renderBreadcrumb(breadcrumb, prefixCls) {
    var _breadcrumb$items;
    if (!((_breadcrumb$items = breadcrumb.items) !== null && _breadcrumb$items !== void 0 && _breadcrumb$items.length)) return null;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Breadcrumb, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, breadcrumb), {}, {
        className: (0, _classnames.default)("".concat(prefixCls, "-breadcrumb"), breadcrumb.className)
    }));
};
var getBackIcon = function getBackIcon(props) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ltr';
    if (props.backIcon !== undefined) return props.backIcon;
    return direction === 'rtl' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_ArrowRightOutlined.default, {}) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_ArrowLeftOutlined.default, {});
};
var renderTitle = function renderTitle(prefixCls, props) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'ltr';
    var hashId = arguments.length > 3 ? arguments[3] : undefined;
    var title = props.title, avatar = props.avatar, subTitle = props.subTitle, tags = props.tags, extra = props.extra, onBack = props.onBack;
    var headingPrefixCls = "".concat(prefixCls, "-heading");
    var hasHeading = title || subTitle || tags || extra;
    // If there is nothing, return a null
    if (!hasHeading) return null;
    var backIcon = getBackIcon(props, direction);
    var backIconDom = renderBack(prefixCls, hashId, backIcon, onBack);
    var hasTitle = backIconDom || avatar || hasHeading;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        className: headingPrefixCls + ' ' + hashId,
        children: [
            hasTitle && /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "".concat(headingPrefixCls, "-left ").concat(hashId).trim(),
                children: [
                    backIconDom,
                    avatar && /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Avatar, (0, _objectSpread2.default)({
                        className: (0, _classnames.default)("".concat(headingPrefixCls, "-avatar"), hashId, avatar.className)
                    }, avatar)),
                    title && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        className: "".concat(headingPrefixCls, "-title ").concat(hashId).trim(),
                        title: typeof title === 'string' ? title : undefined,
                        children: title
                    }),
                    subTitle && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        className: "".concat(headingPrefixCls, "-sub-title ").concat(hashId).trim(),
                        title: typeof subTitle === 'string' ? subTitle : undefined,
                        children: subTitle
                    }),
                    tags && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        className: "".concat(headingPrefixCls, "-tags ").concat(hashId).trim(),
                        children: tags
                    })
                ]
            }),
            extra && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: "".concat(headingPrefixCls, "-extra ").concat(hashId).trim(),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Space, {
                    children: extra
                })
            })
        ]
    });
};
var renderFooter = function renderFooter(prefixCls, footer, hashId) {
    if (footer) return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "".concat(prefixCls, "-footer ").concat(hashId).trim(),
        children: footer
    });
    return null;
};
var renderChildren = function renderChildren(prefixCls, children, hashId) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "".concat(prefixCls, "-content ").concat(hashId).trim(),
        children: children
    });
};
var transformBreadcrumbRoutesToItems = function transformBreadcrumbRoutesToItems(routes) {
    return routes === null || routes === void 0 ? void 0 : routes.map(function(route) {
        var _route$children;
        (0, _warning.noteOnce)(!!route.breadcrumbName, 'Route.breadcrumbName is deprecated, please use Route.title instead.');
        return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, route), {}, {
            breadcrumbName: undefined,
            children: undefined,
            title: route.title || route.breadcrumbName
        }, (_route$children = route.children) !== null && _route$children !== void 0 && _route$children.length ? {
            menu: {
                items: transformBreadcrumbRoutesToItems(route.children)
            }
        } : {});
    });
};
var PageHeader = function PageHeader(props) {
    var _breadcrumbRender;
    var _React$useState = _react.useState(false), _React$useState2 = (0, _slicedToArray.default)(_React$useState, 2), compact = _React$useState2[0], updateCompact = _React$useState2[1];
    var onResize = function onResize(_ref) {
        var width = _ref.width;
        return updateCompact(width < 768);
    };
    var _React$useContext = _react.useContext(_antd.ConfigProvider.ConfigContext), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
    var customizePrefixCls = props.prefixCls, style = props.style, footer = props.footer, children = props.children, breadcrumb = props.breadcrumb, breadcrumbRender = props.breadcrumbRender, customizeClassName = props.className, contentWidth = props.contentWidth, layout = props.layout, _props$ghost = props.ghost, ghost = _props$ghost === void 0 ? true : _props$ghost;
    var prefixCls = getPrefixCls('page-header', customizePrefixCls);
    var _useStyle = (0, _index.default)(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var getDefaultBreadcrumbDom = function getDefaultBreadcrumbDom() {
        if (breadcrumb && !(breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.items) && breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.routes) {
            (0, _warning.noteOnce)(false, 'The routes of Breadcrumb is deprecated, please use items instead.');
            breadcrumb.items = transformBreadcrumbRoutesToItems(breadcrumb.routes);
        }
        if (breadcrumb !== null && breadcrumb !== void 0 && breadcrumb.items) return renderBreadcrumb(breadcrumb, prefixCls);
        return null;
    };
    var defaultBreadcrumbDom = getDefaultBreadcrumbDom();
    var isBreadcrumbComponent = breadcrumb && 'props' in breadcrumb;
    // support breadcrumbRender function
    var breadcrumbRenderDomFromProps = (_breadcrumbRender = breadcrumbRender === null || breadcrumbRender === void 0 ? void 0 : breadcrumbRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        prefixCls: prefixCls
    }), defaultBreadcrumbDom)) !== null && _breadcrumbRender !== void 0 ? _breadcrumbRender : defaultBreadcrumbDom;
    var breadcrumbDom = isBreadcrumbComponent ? breadcrumb : breadcrumbRenderDomFromProps;
    var className = (0, _classnames.default)(prefixCls, hashId, customizeClassName, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(prefixCls, "-has-breadcrumb"), !!breadcrumbDom), "".concat(prefixCls, "-has-footer"), !!footer), "".concat(prefixCls, "-rtl"), direction === 'rtl'), "".concat(prefixCls, "-compact"), compact), "".concat(prefixCls, "-wide"), contentWidth === 'Fixed' && layout == 'top'), "".concat(prefixCls, "-ghost"), ghost));
    var title = renderTitle(prefixCls, props, direction, hashId);
    var childDom = children && renderChildren(prefixCls, children, hashId);
    var footerDom = renderFooter(prefixCls, footer, hashId);
    if (!breadcrumbDom && !title && !footerDom && !childDom) return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(hashId, [
            "".concat(prefixCls, "-no-children")
        ])
    });
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)(_rcresizeobserver.default, {
        onResize: onResize,
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: className,
            style: style,
            children: [
                breadcrumbDom,
                title,
                childDom,
                footerDom
            ]
        })
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/PageHeader/style/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "default", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var textOverflowEllipsis = function textOverflowEllipsis() {
    return {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    };
};
var genPageHeaderStyle = function genPageHeaderStyle(token) {
    var _token$layout;
    return (0, _defineProperty.default)({}, token.componentCls, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, _proutils.resetComponent === null || _proutils.resetComponent === void 0 ? void 0 : (0, _proutils.resetComponent)(token)), {}, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        position: 'relative',
        backgroundColor: token.colorWhite,
        paddingBlock: token.pageHeaderPaddingVertical + 2,
        paddingInline: token.pageHeaderPadding,
        '&&-ghost': {
            backgroundColor: token.pageHeaderBgGhost
        },
        '&-no-children': {
            height: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.pageContainer) === null || _token$layout === void 0 ? void 0 : _token$layout.paddingBlockPageContainerContent
        },
        '&&-has-breadcrumb': {
            paddingBlockStart: token.pageHeaderPaddingBreadCrumb
        },
        '&&-has-footer': {
            paddingBlockEnd: 0
        },
        '& &-back': (0, _defineProperty.default)({
            marginInlineEnd: token.margin,
            fontSize: 16,
            lineHeight: 1,
            '&-button': (0, _objectSpread2.default)((0, _objectSpread2.default)({
                fontSize: 16
            }, _proutils.operationUnit === null || _proutils.operationUnit === void 0 ? void 0 : (0, _proutils.operationUnit)(token)), {}, {
                color: token.pageHeaderColorBack,
                cursor: 'pointer'
            })
        }, "".concat(token.componentCls, "-rlt &"), {
            float: 'right',
            marginInlineEnd: 0,
            marginInlineStart: 0
        })
    }, "& ".concat('ant', "-divider-vertical"), {
        height: 14,
        marginBlock: 0,
        marginInline: token.marginSM,
        verticalAlign: 'middle'
    }), "& &-breadcrumb + &-heading", {
        marginBlockStart: token.marginXS
    }), '& &-heading', {
        display: 'flex',
        justifyContent: 'space-between',
        '&-left': {
            display: 'flex',
            alignItems: 'center',
            marginBlock: token.marginXS / 2,
            marginInlineEnd: 0,
            marginInlineStart: 0,
            overflow: 'hidden'
        },
        '&-title': (0, _objectSpread2.default)((0, _objectSpread2.default)({
            marginInlineEnd: token.marginSM,
            marginBlockEnd: 0,
            color: token.colorTextHeading,
            fontWeight: 600,
            fontSize: token.pageHeaderFontSizeHeaderTitle,
            lineHeight: token.controlHeight + 'px'
        }, textOverflowEllipsis()), {}, (0, _defineProperty.default)({}, "".concat(token.componentCls, "-rlt &"), {
            marginInlineEnd: 0,
            marginInlineStart: token.marginSM
        })),
        '&-avatar': (0, _defineProperty.default)({
            marginInlineEnd: token.marginSM
        }, "".concat(token.componentCls, "-rlt &"), {
            float: 'right',
            marginInlineEnd: 0,
            marginInlineStart: token.marginSM
        }),
        '&-tags': (0, _defineProperty.default)({}, "".concat(token.componentCls, "-rlt &"), {
            float: 'right'
        }),
        '&-sub-title': (0, _objectSpread2.default)((0, _objectSpread2.default)({
            marginInlineEnd: token.marginSM,
            color: token.colorTextSecondary,
            fontSize: token.pageHeaderFontSizeHeaderSubTitle,
            lineHeight: token.lineHeight
        }, textOverflowEllipsis()), {}, (0, _defineProperty.default)({}, "".concat(token.componentCls, "-rlt &"), {
            float: 'right',
            marginInlineEnd: 0,
            marginInlineStart: 12
        })),
        '&-extra': (0, _defineProperty.default)((0, _defineProperty.default)({
            marginBlock: token.marginXS / 2,
            marginInlineEnd: 0,
            marginInlineStart: 0,
            whiteSpace: 'nowrap',
            '> *': (0, _defineProperty.default)({
                'white-space': 'unset'
            }, "".concat(token.componentCls, "-rlt &"), {
                marginInlineEnd: token.marginSM,
                marginInlineStart: 0
            })
        }, "".concat(token.componentCls, "-rlt &"), {
            float: 'left'
        }), '*:first-child', (0, _defineProperty.default)({}, "".concat(token.componentCls, "-rlt &"), {
            marginInlineEnd: 0
        }))
    }), '&-content', {
        paddingBlockStart: token.pageHeaderPaddingContentPadding
    }), '&-footer', {
        marginBlockStart: token.margin
    }), '&-compact &-heading', {
        flexWrap: 'wrap'
    }), '&-wide', {
        maxWidth: 1152,
        margin: '0 auto'
    }), '&-rtl', {
        direction: 'rtl'
    })));
};
function useStyle(prefixCls) {
    return (0, _proutils.useStyle)('ProLayoutPageHeader', function(token) {
        var proCardToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls),
            pageHeaderBgGhost: 'transparent',
            pageHeaderPadding: 16,
            pageHeaderPaddingVertical: 4,
            pageHeaderPaddingBreadCrumb: token.paddingSM,
            pageHeaderColorBack: token.colorTextHeading,
            pageHeaderFontSizeHeaderTitle: token.fontSizeHeading4,
            pageHeaderFontSizeHeaderSubTitle: 14,
            pageHeaderPaddingContentPadding: token.paddingSM
        });
        return [
            genPageHeaderStyle(proCardToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/PageLoading/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "PageLoading", {
    enumerable: true,
    get: function() {
        return PageLoading;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "isLoading",
    "pastDelay",
    "timedOut",
    "error",
    "retry"
];
var PageLoading = function PageLoading(_ref) {
    var isLoading = _ref.isLoading, pastDelay = _ref.pastDelay, timedOut = _ref.timedOut, error = _ref.error, retry = _ref.retry, reset = (0, _objectWithoutProperties.default)(_ref, _excluded);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        style: {
            paddingBlockStart: 100,
            textAlign: 'center'
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Spin, (0, _objectSpread2.default)({
            size: "large"
        }, reset))
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/SettingDrawer/BlockCheckbox.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "BlockCheckbox", {
    enumerable: true,
    get: function() {
        return BlockCheckbox;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _icons = __mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = __mako_require__("node_modules/react/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var BlockCheckbox = function BlockCheckbox(_ref) {
    var value = _ref.value, configType = _ref.configType, onChange = _ref.onChange, list = _ref.list, prefixCls = _ref.prefixCls, hashId = _ref.hashId;
    var baseClassName = "".concat(prefixCls, "-block-checkbox");
    var dom = (0, _react.useMemo)(function() {
        var domList = (list || []).map(function(item) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Tooltip, {
                title: item.title,
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: (0, _classnames.default)(hashId, "".concat(baseClassName, "-item"), "".concat(baseClassName, "-item-").concat(item.key), "".concat(baseClassName, "-").concat(configType, "-item")),
                    onClick: function onClick() {
                        return onChange(item.key);
                    },
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.CheckOutlined, {
                            className: "".concat(baseClassName, "-selectIcon ").concat(hashId).trim(),
                            style: {
                                display: value === item.key ? 'block' : 'none'
                            }
                        }),
                        item !== null && item !== void 0 && item.icon ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "".concat(baseClassName, "-icon ").concat(hashId).trim(),
                            children: item.icon
                        }) : null
                    ]
                })
            }, item.key);
        });
        return domList;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        value,
        list === null || list === void 0 ? void 0 : list.length,
        onChange
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(baseClassName, hashId),
        children: dom
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/SettingDrawer/LayoutChange.js": function (module, exports, __mako_require__){
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
    LayoutSetting: function() {
        return LayoutSetting;
    },
    renderLayoutSettingItem: function() {
        return renderLayoutSettingItem;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _defaultSettings = __mako_require__("node_modules/@ant-design/pro-layout/es/defaultSettings.js");
var _index = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var renderLayoutSettingItem = function renderLayoutSettingItem(item) {
    var action = /*#__PURE__*/ _react.default.cloneElement(item.action, {
        disabled: item.disabled
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Tooltip, {
        title: item.disabled ? item.disabledReason : '',
        placement: "left",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.List.Item, {
            actions: [
                action
            ],
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                style: {
                    opacity: item.disabled ? 0.5 : 1
                },
                children: item.title
            })
        })
    });
};
var LayoutSetting = function LayoutSetting(_ref) {
    var settings = _ref.settings, prefixCls = _ref.prefixCls, changeSetting = _ref.changeSetting, hashId = _ref.hashId;
    var formatMessage = (0, _index.getFormatMessage)();
    var _ref2 = settings || _defaultSettings.defaultSettings, contentWidth = _ref2.contentWidth, splitMenus = _ref2.splitMenus, fixedHeader = _ref2.fixedHeader, layout = _ref2.layout, fixSiderbar = _ref2.fixSiderbar;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.List, {
        className: "".concat(prefixCls, "-list ").concat(hashId).trim(),
        split: false,
        dataSource: [
            {
                title: formatMessage({
                    id: 'app.setting.content-width',
                    defaultMessage: 'Content Width'
                }),
                action: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_antd.Select, {
                    value: contentWidth || 'Fixed',
                    size: "small",
                    className: "content-width ".concat(hashId).trim(),
                    onSelect: function onSelect(value) {
                        changeSetting('contentWidth', value);
                    },
                    style: {
                        width: 80
                    },
                    children: [
                        layout === 'side' ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Select.Option, {
                            value: "Fixed",
                            children: formatMessage({
                                id: 'app.setting.content-width.fixed',
                                defaultMessage: 'Fixed'
                            })
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Select.Option, {
                            value: "Fluid",
                            children: formatMessage({
                                id: 'app.setting.content-width.fluid',
                                defaultMessage: 'Fluid'
                            })
                        })
                    ]
                })
            },
            {
                title: formatMessage({
                    id: 'app.setting.fixedheader',
                    defaultMessage: 'Fixed Header'
                }),
                action: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Switch, {
                    size: "small",
                    className: "fixed-header",
                    checked: !!fixedHeader,
                    onChange: function onChange(checked) {
                        changeSetting('fixedHeader', checked);
                    }
                })
            },
            {
                title: formatMessage({
                    id: 'app.setting.fixedsidebar',
                    defaultMessage: 'Fixed Sidebar'
                }),
                disabled: layout === 'top',
                disabledReason: formatMessage({
                    id: 'app.setting.fixedsidebar.hint',
                    defaultMessage: 'Works on Side Menu Layout'
                }),
                action: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Switch, {
                    size: "small",
                    className: "fix-siderbar",
                    checked: !!fixSiderbar,
                    onChange: function onChange(checked) {
                        return changeSetting('fixSiderbar', checked);
                    }
                })
            },
            {
                title: formatMessage({
                    id: 'app.setting.splitMenus'
                }),
                disabled: layout !== 'mix',
                action: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Switch, {
                    size: "small",
                    checked: !!splitMenus,
                    className: "split-menus",
                    onChange: function onChange(checked) {
                        changeSetting('splitMenus', checked);
                    }
                })
            }
        ],
        renderItem: renderLayoutSettingItem
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/SettingDrawer/RegionalChange.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "RegionalSetting", {
    enumerable: true,
    get: function() {
        return RegionalSetting;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _LayoutChange = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/LayoutChange.js");
var _index = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var RegionalSetting = function RegionalSetting(_ref) {
    var settings = _ref.settings, prefixCls = _ref.prefixCls, changeSetting = _ref.changeSetting, hashId = _ref.hashId;
    var formatMessage = (0, _index.getFormatMessage)();
    var regionalSetting = [
        'header',
        'footer',
        'menu',
        'menuHeader'
    ];
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.List, {
        className: "".concat(prefixCls, "-list ").concat(hashId).trim(),
        split: false,
        renderItem: _LayoutChange.renderLayoutSettingItem,
        dataSource: regionalSetting.map(function(key) {
            return {
                title: formatMessage({
                    id: "app.setting.regionalsettings.".concat(key)
                }),
                action: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Switch, {
                    size: "small",
                    className: "regional-".concat(key, " ").concat(hashId).trim(),
                    checked: settings["".concat(key, "Render")] || settings["".concat(key, "Render")] === undefined,
                    onChange: function onChange(checked) {
                        return changeSetting("".concat(key, "Render"), checked === true ? undefined : false);
                    }
                })
            };
        })
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/SettingDrawer/ThemeColor.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ThemeColor", {
    enumerable: true,
    get: function() {
        return ThemeColor;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _icons = __mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _react = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/react/index.js"));
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "color",
    "check"
];
var Tag = /*#__PURE__*/ _react.default.forwardRef(function(_ref, ref) {
    var color = _ref.color, check = _ref.check, rest = (0, _objectWithoutProperties.default)(_ref, _excluded);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
        style: {
            backgroundColor: color
        },
        ref: ref,
        children: check ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.CheckOutlined, {}) : ''
    }));
});
var ThemeColor = function ThemeColor(_ref2) {
    var value = _ref2.value, colorList = _ref2.colorList, onChange = _ref2.onChange, prefixCls = _ref2.prefixCls, formatMessage = _ref2.formatMessage, hashId = _ref2.hashId;
    if (!colorList || (colorList === null || colorList === void 0 ? void 0 : colorList.length) < 1) return null;
    var baseClassName = "".concat(prefixCls, "-theme-color");
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: "".concat(baseClassName, " ").concat(hashId).trim(),
        children: colorList === null || colorList === void 0 ? void 0 : colorList.map(function(_ref3) {
            var key = _ref3.key, color = _ref3.color, title = _ref3.title;
            if (!key) return null;
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Tooltip, {
                title: title !== null && title !== void 0 ? title : formatMessage({
                    id: "app.setting.themecolor.".concat(key)
                }),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Tag, {
                    className: "".concat(baseClassName, "-block ").concat(hashId).trim(),
                    color: color,
                    check: value === color,
                    onClick: function onClick() {
                        return onChange && onChange(color);
                    }
                })
            }, color);
        })
    });
};

},
"node_modules/@ant-design/pro-layout/es/components/SettingDrawer/icon/group.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "GroupIcon", {
    enumerable: true,
    get: function() {
        return GroupIcon;
    }
});
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
function GroupIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: "1em",
        height: "1em",
        viewBox: "0 0 104 104",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        id: "path-1",
                        width: "90",
                        height: "72",
                        x: "0",
                        y: "0",
                        rx: "10"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("filter", {
                        id: "filter-2",
                        width: "152.2%",
                        height: "165.3%",
                        x: "-26.1%",
                        y: "-27.1%",
                        filterUnits: "objectBoundingBox",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feMorphology", {
                                in: "SourceAlpha",
                                radius: "0.25",
                                result: "shadowSpreadOuter1"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feOffset", {
                                dy: "1",
                                in: "shadowSpreadOuter1",
                                result: "shadowOffsetOuter1"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feGaussianBlur", {
                                in: "shadowOffsetOuter1",
                                result: "shadowBlurOuter1",
                                stdDeviation: "1"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feColorMatrix", {
                                in: "shadowBlurOuter1",
                                result: "shadowMatrixOuter1",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feMorphology", {
                                in: "SourceAlpha",
                                radius: "1",
                                result: "shadowSpreadOuter2"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feOffset", {
                                dy: "2",
                                in: "shadowSpreadOuter2",
                                result: "shadowOffsetOuter2"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feGaussianBlur", {
                                in: "shadowOffsetOuter2",
                                result: "shadowBlurOuter2",
                                stdDeviation: "4"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feColorMatrix", {
                                in: "shadowBlurOuter2",
                                result: "shadowMatrixOuter2",
                                values: "0 0 0 0 0.098466735 0 0 0 0 0.0599695403 0 0 0 0 0.0599695403 0 0 0 0.07 0"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feMorphology", {
                                in: "SourceAlpha",
                                radius: "2",
                                result: "shadowSpreadOuter3"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feOffset", {
                                dy: "4",
                                in: "shadowSpreadOuter3",
                                result: "shadowOffsetOuter3"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feGaussianBlur", {
                                in: "shadowOffsetOuter3",
                                result: "shadowBlurOuter3",
                                stdDeviation: "8"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feColorMatrix", {
                                in: "shadowBlurOuter3",
                                result: "shadowMatrixOuter3",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("feMergeNode", {
                                        in: "shadowMatrixOuter1"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("feMergeNode", {
                                        in: "shadowMatrixOuter2"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("feMergeNode", {
                                        in: "shadowMatrixOuter3"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: "1",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("use", {
                                fill: "#000",
                                filter: "url(#filter-2)",
                                xlinkHref: "#path-1"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("use", {
                                fill: "#F0F2F5",
                                xlinkHref: "#path-1"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        fill: "#FFF",
                        d: "M25 15h65v47c0 5.523-4.477 10-10 10H25V15z"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        stroke: "#E6EAF0",
                        strokeLinecap: "square",
                        d: "M0.5 15.5L90.5 15.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "14",
                        height: "3",
                        x: "4",
                        y: "26",
                        fill: "#D7DDE6",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "9",
                        height: "3",
                        x: "4",
                        y: "32",
                        fill: "#D7DDE6",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "9",
                        height: "3",
                        x: "4",
                        y: "42",
                        fill: "#E6EAF0",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "9",
                        height: "3",
                        x: "4",
                        y: "21",
                        fill: "#E6EAF0",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "9",
                        height: "3",
                        x: "4",
                        y: "53",
                        fill: "#D7DDE6",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "14",
                        height: "3",
                        x: "4",
                        y: "47",
                        fill: "#D7DDE6",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        stroke: "#E6EAF0",
                        strokeLinecap: "square",
                        d: "M25.5 15.5L25.5 72.5"
                    })
                ]
            })
        ]
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/SettingDrawer/icon/sub.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "SubIcon", {
    enumerable: true,
    get: function() {
        return SubIcon;
    }
});
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
function SubIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        width: "1em",
        height: "1em",
        viewBox: "0 0 104 104",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        id: "path-1",
                        width: "90",
                        height: "72",
                        x: "0",
                        y: "0",
                        rx: "10"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("filter", {
                        id: "filter-2",
                        width: "152.2%",
                        height: "165.3%",
                        x: "-26.1%",
                        y: "-27.1%",
                        filterUnits: "objectBoundingBox",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feMorphology", {
                                in: "SourceAlpha",
                                radius: "0.25",
                                result: "shadowSpreadOuter1"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feOffset", {
                                dy: "1",
                                in: "shadowSpreadOuter1",
                                result: "shadowOffsetOuter1"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feGaussianBlur", {
                                in: "shadowOffsetOuter1",
                                result: "shadowBlurOuter1",
                                stdDeviation: "1"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feColorMatrix", {
                                in: "shadowBlurOuter1",
                                result: "shadowMatrixOuter1",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feMorphology", {
                                in: "SourceAlpha",
                                radius: "1",
                                result: "shadowSpreadOuter2"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feOffset", {
                                dy: "2",
                                in: "shadowSpreadOuter2",
                                result: "shadowOffsetOuter2"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feGaussianBlur", {
                                in: "shadowOffsetOuter2",
                                result: "shadowBlurOuter2",
                                stdDeviation: "4"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feColorMatrix", {
                                in: "shadowBlurOuter2",
                                result: "shadowMatrixOuter2",
                                values: "0 0 0 0 0.098466735 0 0 0 0 0.0599695403 0 0 0 0 0.0599695403 0 0 0 0.07 0"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feMorphology", {
                                in: "SourceAlpha",
                                radius: "2",
                                result: "shadowSpreadOuter3"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feOffset", {
                                dy: "4",
                                in: "shadowSpreadOuter3",
                                result: "shadowOffsetOuter3"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feGaussianBlur", {
                                in: "shadowOffsetOuter3",
                                result: "shadowBlurOuter3",
                                stdDeviation: "8"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("feColorMatrix", {
                                in: "shadowBlurOuter3",
                                result: "shadowMatrixOuter3",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("feMerge", {
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("feMergeNode", {
                                        in: "shadowMatrixOuter1"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("feMergeNode", {
                                        in: "shadowMatrixOuter2"
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("feMergeNode", {
                                        in: "shadowMatrixOuter3"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                fill: "none",
                fillRule: "evenodd",
                stroke: "none",
                strokeWidth: "1",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("use", {
                                fill: "#000",
                                filter: "url(#filter-2)",
                                xlinkHref: "#path-1"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("use", {
                                fill: "#F0F2F5",
                                xlinkHref: "#path-1"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        fill: "#FFF",
                        d: "M26 0h55c5.523 0 10 4.477 10 10v8H26V0z"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        fill: "#001529",
                        d: "M10 0h19v72H10C4.477 72 0 67.523 0 62V10C0 4.477 4.477 0 10 0z"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "14",
                        height: "3",
                        x: "5",
                        y: "18",
                        fill: "#D7DDE6",
                        opacity: "0.2",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "14",
                        height: "3",
                        x: "5",
                        y: "42",
                        fill: "#D7DDE6",
                        opacity: "0.2",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "9",
                        height: "3",
                        x: "9",
                        y: "24",
                        fill: "#D7DDE6",
                        opacity: "0.2",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "9",
                        height: "3",
                        x: "9",
                        y: "48",
                        fill: "#D7DDE6",
                        opacity: "0.2",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "9",
                        height: "3",
                        x: "9",
                        y: "36",
                        fill: "#D7DDE6",
                        opacity: "0.2",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "14",
                        height: "3",
                        x: "9",
                        y: "30",
                        fill: "#D7DDE6",
                        opacity: "0.2",
                        rx: "1.5"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "14",
                        height: "3",
                        x: "9",
                        y: "54",
                        fill: "#D7DDE6",
                        opacity: "0.2",
                        rx: "1.5"
                    })
                ]
            })
        ]
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/SettingDrawer/index.js": function (module, exports, __mako_require__){
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
    SettingDrawer: function() {
        return SettingDrawer;
    },
    getFormatMessage: function() {
        return getFormatMessage;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _regeneratorRuntime = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"));
var _asyncToGenerator = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _icons = __mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _useparams = __mako_require__("node_modules/@umijs/use-params/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _useMergedState = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/hooks/useMergedState.js"));
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/omit.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _defaultSettings = __mako_require__("node_modules/@ant-design/pro-layout/es/defaultSettings.js");
var _locales = __mako_require__("node_modules/@ant-design/pro-layout/es/locales/index.js");
var _utils = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/utils.js");
var _BlockCheckbox = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/BlockCheckbox.js");
var _LayoutChange = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/LayoutChange.js");
var _RegionalChange = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/RegionalChange.js");
var _ThemeColor = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/ThemeColor.js");
var _group = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/icon/group.js");
var _sub = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/icon/sub.js");
var _index = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/style/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var Body = function Body(_ref) {
    var children = _ref.children, hashId = _ref.hashId, prefixCls = _ref.prefixCls, title = _ref.title;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        style: {
            marginBlockEnd: 12
        },
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("h3", {
                className: "".concat(prefixCls, "-body-title ").concat(hashId).trim(),
                children: title
            }),
            children
        ]
    });
};
var getDifferentSetting = function getDifferentSetting(state) {
    var stateObj = {};
    Object.keys(state).forEach(function(key) {
        if (state[key] !== _defaultSettings.defaultSettings[key] && //@ts-ignore
        key !== 'collapse') stateObj[key] = state[key];
        else stateObj[key] = undefined;
        if (key.includes('Render')) stateObj[key] = state[key] === false ? false : undefined;
    });
    stateObj.menu = undefined;
    return stateObj;
};
var getFormatMessage = function getFormatMessage() {
    var formatMessage = function formatMessage(_ref2) {
        var id = _ref2.id;
        var locales = (0, _locales.gLocaleObject)();
        return locales[id];
    };
    return formatMessage;
};
/**
 * 初始化的时候需要做的工作
 *
 * @param param0
 */ var initState = function initState(urlParams, settings, onSettingChange) {
    if (!(0, _proutils.isBrowser)()) return;
    var replaceSetting = {};
    Object.keys(urlParams).forEach(function(key) {
        if (_defaultSettings.defaultSettings[key] || _defaultSettings.defaultSettings[key] === undefined) {
            if (key === 'colorPrimary') {
                replaceSetting[key] = (0, _utils.genStringToTheme)(urlParams[key]);
                return;
            }
            replaceSetting[key] = urlParams[key];
        }
    });
    var newSettings = (0, _proutils.merge)({}, settings, replaceSetting);
    delete newSettings.menu;
    delete newSettings.title;
    delete newSettings.iconfontUrl;
    // 同步数据到外部
    onSettingChange === null || onSettingChange === void 0 || onSettingChange(newSettings);
};
var getParamsFromUrl = function getParamsFromUrl(urlParams, settings) {
    if (!(0, _proutils.isBrowser)()) return _defaultSettings.defaultSettings;
    return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, _defaultSettings.defaultSettings), settings || {}), urlParams);
};
var genCopySettingJson = function genCopySettingJson(settingState) {
    return JSON.stringify((0, _omit.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, settingState), {}, {
        colorPrimary: settingState.colorPrimary
    }), [
        'colorWeak'
    ]), null, 2);
};
var SettingDrawer = function SettingDrawer(props) {
    var _props$defaultSetting = props.defaultSettings, propsDefaultSettings = _props$defaultSetting === void 0 ? undefined : _props$defaultSetting, _props$settings = props.settings, propsSettings = _props$settings === void 0 ? undefined : _props$settings, hideHintAlert = props.hideHintAlert, hideCopyButton = props.hideCopyButton, _props$colorList = props.colorList, colorList = _props$colorList === void 0 ? [
        {
            key: 'techBlue',
            color: '#1677FF'
        },
        {
            key: 'daybreak',
            color: '#1890ff'
        },
        {
            key: 'dust',
            color: '#F5222D'
        },
        {
            key: 'volcano',
            color: '#FA541C'
        },
        {
            key: 'sunset',
            color: '#FAAD14'
        },
        {
            key: 'cyan',
            color: '#13C2C2'
        },
        {
            key: 'green',
            color: '#52C41A'
        },
        {
            key: 'geekblue',
            color: '#2F54EB'
        },
        {
            key: 'purple',
            color: '#722ED1'
        }
    ] : _props$colorList, getContainer = props.getContainer, onSettingChange = props.onSettingChange, enableDarkTheme = props.enableDarkTheme, _props$prefixCls = props.prefixCls, prefixCls = _props$prefixCls === void 0 ? 'ant-pro' : _props$prefixCls, _props$pathname = props.pathname, pathname = _props$pathname === void 0 ? (0, _proutils.isBrowser)() ? window.location.pathname : '' : _props$pathname, _props$disableUrlPara = props.disableUrlParams, disableUrlParams = _props$disableUrlPara === void 0 ? true : _props$disableUrlPara, themeOnly = props.themeOnly, drawerProps = props.drawerProps;
    var firstRender = (0, _react.useRef)(true);
    var _useMergedState1 = (0, _useMergedState.default)(false, {
        value: props.collapse,
        onChange: props.onCollapseChange
    }), _useMergedState2 = (0, _slicedToArray.default)(_useMergedState1, 2), open = _useMergedState2[0], setOpen = _useMergedState2[1];
    var _useState = (0, _react.useState)((0, _locales.getLanguage)()), _useState2 = (0, _slicedToArray.default)(_useState, 2), language = _useState2[0], setLanguage = _useState2[1];
    var _useUrlSearchParams = (0, _useparams.useUrlSearchParams)({}, {
        disabled: disableUrlParams
    }), _useUrlSearchParams2 = (0, _slicedToArray.default)(_useUrlSearchParams, 2), urlParams = _useUrlSearchParams2[0], setUrlParams = _useUrlSearchParams2[1];
    var _useMergedState3 = (0, _useMergedState.default)(function() {
        return getParamsFromUrl(urlParams, propsSettings || propsDefaultSettings);
    }, {
        value: propsSettings,
        onChange: onSettingChange
    }), _useMergedState4 = (0, _slicedToArray.default)(_useMergedState3, 2), settingState = _useMergedState4[0], setSettingState = _useMergedState4[1];
    var _ref3 = settingState || {}, navTheme = _ref3.navTheme, colorPrimary = _ref3.colorPrimary, siderMenuType = _ref3.siderMenuType, layout = _ref3.layout, colorWeak = _ref3.colorWeak;
    (0, _react.useEffect)(function() {
        // 语言修改，这个是和 locale 是配置起来的
        var onLanguageChange = function onLanguageChange() {
            if (language !== (0, _locales.getLanguage)()) setLanguage((0, _locales.getLanguage)());
        };
        /** 如果不是浏览器 都没有必要做了 */ if (!(0, _proutils.isBrowser)()) return function() {
            return null;
        };
        initState(getParamsFromUrl(urlParams, propsSettings), settingState, setSettingState);
        window.document.addEventListener('languagechange', onLanguageChange, {
            passive: true
        });
        return function() {
            return window.document.removeEventListener('languagechange', onLanguageChange);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0, _react.useEffect)(function() {
        if ((0, _proutils.compareVersions)(_antd.version, '5.0.0') < 0) _antd.ConfigProvider.config({
            theme: {
                primaryColor: settingState.colorPrimary
            }
        });
    }, [
        settingState.colorPrimary,
        settingState.navTheme
    ]);
    /**
   * 修改设置
   *
   * @param key
   * @param value
   */ var changeSetting = function changeSetting(key, value) {
        var nextState = {};
        nextState[key] = value;
        if (key === 'layout') nextState.contentWidth = value === 'top' ? 'Fixed' : 'Fluid';
        if (key === 'layout' && value !== 'mix') nextState.splitMenus = false;
        if (key === 'layout' && value === 'mix') nextState.navTheme = 'light';
        if (key === 'colorWeak' && value === true) {
            var dom = document.querySelector('body');
            if (dom) {
                dom.dataset.prosettingdrawer = dom.style.filter;
                dom.style.filter = 'invert(80%)';
            }
        }
        if (key === 'colorWeak' && value === false) {
            var _dom = document.querySelector('body');
            if (_dom) {
                _dom.style.filter = _dom.dataset.prosettingdrawer || 'none';
                delete _dom.dataset.prosettingdrawer;
            }
        }
        delete nextState.menu;
        delete nextState.title;
        delete nextState.iconfontUrl;
        delete nextState.logo;
        delete nextState.pwa;
        setSettingState((0, _objectSpread2.default)((0, _objectSpread2.default)({}, settingState), nextState));
    };
    var formatMessage = getFormatMessage();
    (0, _react.useEffect)(function() {
        /** 如果不是浏览器 都没有必要做了 */ if (!(0, _proutils.isBrowser)()) return;
        if (disableUrlParams) return;
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        /** 每次从url拿最新的防止记忆 */ var urlSearchParams = new URLSearchParams(window.location.search);
        var params = Object.fromEntries(urlSearchParams.entries());
        var diffParams = getDifferentSetting((0, _objectSpread2.default)((0, _objectSpread2.default)({}, params), settingState));
        delete diffParams.logo;
        delete diffParams.menu;
        delete diffParams.title;
        delete diffParams.iconfontUrl;
        delete diffParams.pwa;
        setUrlParams(diffParams);
    }, [
        setUrlParams,
        settingState,
        urlParams,
        pathname,
        disableUrlParams
    ]);
    var baseClassName = "".concat(prefixCls, "-setting-drawer");
    var _useStyle = (0, _index.useStyle)(baseClassName), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var drawerOpenProps = (0, _proutils.openVisibleCompatible)(open);
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: "".concat(baseClassName, "-handle ").concat(hashId).trim(),
                onClick: function onClick() {
                    return setOpen(!open);
                },
                style: {
                    width: 48,
                    height: 48
                },
                children: open ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.CloseOutlined, {
                    style: {
                        color: '#fff',
                        fontSize: 20
                    }
                }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.SettingOutlined, {
                    style: {
                        color: '#fff',
                        fontSize: 20
                    }
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Drawer, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, drawerOpenProps), {}, {
                width: 300,
                onClose: function onClose() {
                    return setOpen(false);
                },
                closable: false,
                placement: "right",
                getContainer: getContainer,
                style: {
                    zIndex: 999
                }
            }, drawerProps), {}, {
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: "".concat(baseClassName, "-drawer-content ").concat(hashId).trim(),
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(Body, {
                            title: formatMessage({
                                id: 'app.setting.pagestyle',
                                defaultMessage: 'Page style setting'
                            }),
                            hashId: hashId,
                            prefixCls: baseClassName,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_BlockCheckbox.BlockCheckbox, {
                                hashId: hashId,
                                prefixCls: baseClassName,
                                list: [
                                    {
                                        key: 'light',
                                        title: formatMessage({
                                            id: 'app.setting.pagestyle.light',
                                            defaultMessage: '亮色菜单风格'
                                        })
                                    },
                                    {
                                        key: 'realDark',
                                        title: formatMessage({
                                            id: 'app.setting.pagestyle.realdark',
                                            defaultMessage: '暗色菜单风格'
                                        })
                                    }
                                ].filter(function(item) {
                                    if (item.key === 'dark' && settingState.layout === 'mix') return false;
                                    if (item.key === 'realDark' && !enableDarkTheme) return false;
                                    return true;
                                }),
                                value: navTheme,
                                configType: "theme",
                                onChange: function onChange(value) {
                                    return changeSetting('navTheme', value);
                                }
                            }, "navTheme")
                        }),
                        colorList !== false && /*#__PURE__*/ (0, _jsxruntime.jsx)(Body, {
                            hashId: hashId,
                            title: formatMessage({
                                id: 'app.setting.themecolor',
                                defaultMessage: 'Theme color'
                            }),
                            prefixCls: baseClassName,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_ThemeColor.ThemeColor, {
                                hashId: hashId,
                                prefixCls: baseClassName,
                                colorList: colorList,
                                value: (0, _utils.genStringToTheme)(colorPrimary),
                                formatMessage: formatMessage,
                                onChange: function onChange(color) {
                                    return changeSetting('colorPrimary', color);
                                }
                            })
                        }),
                        !themeOnly && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Divider, {}),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(Body, {
                                    hashId: hashId,
                                    prefixCls: baseClassName,
                                    title: formatMessage({
                                        id: 'app.setting.navigationmode'
                                    }),
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_BlockCheckbox.BlockCheckbox, {
                                        prefixCls: baseClassName,
                                        value: layout,
                                        hashId: hashId,
                                        configType: "layout",
                                        list: [
                                            {
                                                key: 'side',
                                                title: formatMessage({
                                                    id: 'app.setting.sidemenu'
                                                })
                                            },
                                            {
                                                key: 'top',
                                                title: formatMessage({
                                                    id: 'app.setting.topmenu'
                                                })
                                            },
                                            {
                                                key: 'mix',
                                                title: formatMessage({
                                                    id: 'app.setting.mixmenu'
                                                })
                                            }
                                        ],
                                        onChange: function onChange(value) {
                                            return changeSetting('layout', value);
                                        }
                                    }, "layout")
                                }),
                                settingState.layout == 'side' || settingState.layout == 'mix' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Body, {
                                    hashId: hashId,
                                    prefixCls: baseClassName,
                                    title: formatMessage({
                                        id: 'app.setting.sidermenutype'
                                    }),
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_BlockCheckbox.BlockCheckbox, {
                                        prefixCls: baseClassName,
                                        value: siderMenuType,
                                        hashId: hashId,
                                        configType: "siderMenuType",
                                        list: [
                                            {
                                                key: 'sub',
                                                icon: /*#__PURE__*/ (0, _jsxruntime.jsx)(_sub.SubIcon, {}),
                                                title: formatMessage({
                                                    id: 'app.setting.sidermenutype-sub'
                                                })
                                            },
                                            {
                                                key: 'group',
                                                icon: /*#__PURE__*/ (0, _jsxruntime.jsx)(_group.GroupIcon, {}),
                                                title: formatMessage({
                                                    id: 'app.setting.sidermenutype-group'
                                                })
                                            }
                                        ],
                                        onChange: function onChange(value) {
                                            return changeSetting('siderMenuType', value);
                                        }
                                    }, "siderMenuType")
                                }) : null,
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_LayoutChange.LayoutSetting, {
                                    prefixCls: baseClassName,
                                    hashId: hashId,
                                    settings: settingState,
                                    changeSetting: changeSetting
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Divider, {}),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(Body, {
                                    hashId: hashId,
                                    prefixCls: baseClassName,
                                    title: formatMessage({
                                        id: 'app.setting.regionalsettings'
                                    }),
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_RegionalChange.RegionalSetting, {
                                        hashId: hashId,
                                        prefixCls: baseClassName,
                                        settings: settingState,
                                        changeSetting: changeSetting
                                    })
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Divider, {}),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(Body, {
                                    hashId: hashId,
                                    prefixCls: baseClassName,
                                    title: formatMessage({
                                        id: 'app.setting.othersettings'
                                    }),
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.List, {
                                        className: "".concat(baseClassName, "-list ").concat(hashId).trim(),
                                        split: false,
                                        size: "small",
                                        renderItem: _LayoutChange.renderLayoutSettingItem,
                                        dataSource: [
                                            {
                                                title: formatMessage({
                                                    id: 'app.setting.weakmode'
                                                }),
                                                action: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Switch, {
                                                    size: "small",
                                                    className: "color-weak",
                                                    checked: !!colorWeak,
                                                    onChange: function onChange(checked) {
                                                        changeSetting('colorWeak', checked);
                                                    }
                                                })
                                            }
                                        ]
                                    })
                                }),
                                hideHintAlert && hideCopyButton ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Divider, {}),
                                hideHintAlert ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Alert, {
                                    type: "warning",
                                    message: formatMessage({
                                        id: 'app.setting.production.hint'
                                    }),
                                    icon: /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.NotificationOutlined, {}),
                                    showIcon: true,
                                    style: {
                                        marginBlockEnd: 16
                                    }
                                }),
                                hideCopyButton ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Button, {
                                    block: true,
                                    icon: /*#__PURE__*/ (0, _jsxruntime.jsx)(_icons.CopyOutlined, {}),
                                    style: {
                                        marginBlockEnd: 24
                                    },
                                    onClick: /*#__PURE__*/ (0, _asyncToGenerator.default)(/*#__PURE__*/ (0, _regeneratorRuntime.default)().mark(function _callee() {
                                        return (0, _regeneratorRuntime.default)().wrap(function _callee$(_context) {
                                            while(true)switch(_context.prev = _context.next){
                                                case 0:
                                                    _context.prev = 0;
                                                    _context.next = 3;
                                                    return navigator.clipboard.writeText(genCopySettingJson(settingState));
                                                case 3:
                                                    _antd.message.success(formatMessage({
                                                        id: 'app.setting.copyinfo'
                                                    }));
                                                    _context.next = 8;
                                                    break;
                                                case 6:
                                                    _context.prev = 6;
                                                    _context.t0 = _context["catch"](0);
                                                case 8:
                                                case "end":
                                                    return _context.stop();
                                            }
                                        }, _callee, null, [
                                            [
                                                0,
                                                6
                                            ]
                                        ]);
                                    })),
                                    children: formatMessage({
                                        id: 'app.setting.copy'
                                    })
                                })
                            ]
                        })
                    ]
                })
            }))
        ]
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/SettingDrawer/style/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genSettingDrawerStyle = function genSettingDrawerStyle(token) {
    return (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.componentCls, "-handle"), {
        position: 'fixed',
        insetBlockStart: '240px',
        insetInlineEnd: '0px',
        zIndex: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        fontSize: '16px',
        textAlign: 'center',
        backgroundColor: token.colorPrimary,
        borderEndStartRadius: token.borderRadiusLG,
        borderStartStartRadius: token.borderRadiusLG,
        '-webkit-backdropilter': 'saturate(180%) blur(20px)',
        backdropFilter: 'saturate(180%) blur(20px)',
        cursor: 'pointer',
        pointerEvents: 'auto'
    }), token.componentCls, {
        '&-content': {
            position: 'relative',
            minHeight: '100%',
            color: token.colorText
        },
        '&-body-title': {
            marginBlock: token.marginXS,
            fontSize: '14px',
            lineHeight: '22px',
            color: token.colorTextHeading
        },
        '&-block-checkbox': {
            display: 'flex',
            minHeight: 42,
            gap: token.marginSM,
            '& &-item': {
                position: 'relative',
                width: '44px',
                height: '36px',
                overflow: 'hidden',
                borderRadius: '4px',
                boxShadow: token.boxShadow,
                cursor: 'pointer',
                fontSize: 56,
                lineHeight: '56px',
                '&::before': {
                    position: 'absolute',
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    width: '33%',
                    height: '100%',
                    content: "''"
                },
                '&::after': {
                    position: 'absolute',
                    insetBlockStart: 0,
                    insetInlineStart: 0,
                    width: '100%',
                    height: '25%',
                    content: "''"
                },
                '&-realDark': {
                    backgroundColor: 'rgba(0, 21, 41, 0.85)',
                    '&::before': {
                        backgroundColor: 'rgba(0, 0, 0, 0.65)'
                    },
                    '&::after': {
                        backgroundColor: 'rgba(0, 0, 0, 0.85)'
                    }
                },
                '&-light': {
                    backgroundColor: '#fff',
                    '&::before': {
                        backgroundColor: '#fff'
                    },
                    '&::after': {
                        backgroundColor: '#fff'
                    }
                },
                '&-dark,&-side': {
                    backgroundColor: token.colorBgElevated,
                    '&::before': {
                        zIndex: '1',
                        backgroundColor: '#001529'
                    },
                    '&::after': {
                        backgroundColor: token.colorBgContainer
                    }
                },
                '&-top': {
                    backgroundColor: token.colorBgElevated,
                    '&::before': {
                        backgroundColor: 'transparent'
                    },
                    '&::after': {
                        backgroundColor: '#001529'
                    }
                },
                '&-mix': {
                    backgroundColor: token.colorBgElevated,
                    '&::before': {
                        backgroundColor: token.colorBgContainer
                    },
                    '&::after': {
                        backgroundColor: '#001529'
                    }
                }
            },
            '& &-selectIcon': {
                position: 'absolute',
                insetInlineEnd: '6px',
                bottom: '4px',
                color: token.colorPrimary,
                fontWeight: 'bold',
                fontSize: '14px',
                pointerEvents: 'none',
                '.action': {
                    color: token.colorPrimary
                }
            },
            '& &-icon': {
                fontSize: 56,
                lineHeight: '56px'
            }
        },
        '&-theme-color': {
            marginBlockStart: '16px',
            overflow: 'hidden',
            '& &-block': {
                float: 'left',
                width: '20px',
                height: '20px',
                marginBlockStart: 8,
                marginInlineEnd: 8,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                borderRadius: '2px',
                cursor: 'pointer'
            }
        },
        '&-list': (0, _defineProperty.default)({}, "li".concat(token.antCls, "-list-item"), {
            paddingInline: 0,
            paddingBlock: 8
        })
    });
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProLayoutSettingDrawer', function(token) {
        var settingDrawerToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genSettingDrawerStyle(settingDrawerToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/SiderMenu/Arrow.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "ArrowSvgIcon", {
    enumerable: true,
    get: function() {
        return ArrowSvgIcon;
    }
});
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
function ArrowSvgIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        width: "1em",
        height: "1em",
        viewBox: "0 0 12 12",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z"
        })
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/SiderMenu/BaseMenu.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "BaseMenu", {
    enumerable: true,
    get: function() {
        return BaseMenu;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _toConsumableArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _createClass = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/createClass.js"));
var _classCallCheck = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/classCallCheck.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _icons = __mako_require__("node_modules/@ant-design/pro-layout/node_modules/@ant-design/icons/es/index.js");
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _defaultSettings = __mako_require__("node_modules/@ant-design/pro-layout/es/defaultSettings.js");
var _utils = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/utils.js");
var _menu = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/menu.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var MenuItemTooltip = function MenuItemTooltip(props) {
    var _useState = (0, _react.useState)(props.collapsed), _useState2 = (0, _slicedToArray.default)(_useState, 2), collapsed = _useState2[0], setCollapsed = _useState2[1];
    var _useState3 = (0, _react.useState)(false), _useState4 = (0, _slicedToArray.default)(_useState3, 2), open = _useState4[0], setOpen = _useState4[1];
    (0, _react.useEffect)(function() {
        setOpen(false);
        setTimeout(function() {
            setCollapsed(props.collapsed);
        }, 400);
    }, [
        props.collapsed
    ]);
    if (props.disable) return props.children;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Tooltip, {
        title: props.title,
        open: collapsed && props.collapsed ? open : false,
        placement: "right",
        onOpenChange: setOpen,
        children: props.children
    });
};
var IconFont = (0, _icons.createFromIconfontCN)({
    scriptUrl: _defaultSettings.defaultSettings.iconfontUrl
});
// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: '/favicon.png',
//   icon: <Icon type="setting" />,
var getIcon = function getIcon(icon) {
    var iconPrefixes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'icon-';
    var className = arguments.length > 2 ? arguments[2] : undefined;
    if (typeof icon === 'string' && icon !== '') {
        if ((0, _proutils.isUrl)(icon) || (0, _proutils.isImg)(icon)) return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
            width: 16,
            src: icon,
            alt: "icon",
            className: className
        }, icon);
        if (icon.startsWith(iconPrefixes)) return /*#__PURE__*/ (0, _jsxruntime.jsx)(IconFont, {
            type: icon
        });
    }
    return icon;
};
var getMenuTitleSymbol = function getMenuTitleSymbol(title) {
    if (title && typeof title === 'string') {
        var symbol = title.substring(0, 1).toUpperCase();
        return symbol;
    }
    return null;
};
var MenuUtil = /*#__PURE__*/ (0, _createClass.default)(function MenuUtil(props) {
    var _this = this;
    (0, _classCallCheck.default)(this, MenuUtil);
    (0, _defineProperty.default)(this, "props", void 0);
    (0, _defineProperty.default)(this, "getNavMenuItems", function() {
        var menusData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var level = arguments.length > 1 ? arguments[1] : undefined;
        var noGroupLevel = arguments.length > 2 ? arguments[2] : undefined;
        return menusData.map(function(item) {
            return _this.getSubMenuOrItem(item, level, noGroupLevel);
        }).filter(function(item) {
            return item;
        }).flat(1);
    });
    /** Get SubMenu or Item */ (0, _defineProperty.default)(this, "getSubMenuOrItem", function(item, level, noGroupLevel) {
        var _this$props = _this.props, subMenuItemRender = _this$props.subMenuItemRender, baseClassName = _this$props.baseClassName, prefixCls = _this$props.prefixCls, collapsed = _this$props.collapsed, menu = _this$props.menu, iconPrefixes = _this$props.iconPrefixes, layout = _this$props.layout;
        var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group' && layout !== 'top';
        var designToken = _this.props.token;
        var name = _this.getIntlName(item);
        var children = (item === null || item === void 0 ? void 0 : item.children) || (item === null || item === void 0 ? void 0 : item.routes);
        var menuType = isGroup && level === 0 ? 'group' : undefined;
        if (Array.isArray(children) && children.length > 0) {
            var _this$props2, _this$props3, _this$props4, _this$props5, _designToken$layout;
            /** Menu 第一级可以有icon，或者 isGroup 时第二级别也要有 */ var shouldHasIcon = level === 0 || isGroup && level === 1;
            //  get defaultTitle by menuItemRender
            var iconDom = getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.hashId));
            /**
       * 如果没有icon在收起的时候用首字母代替
       */ var defaultIcon = collapsed && shouldHasIcon ? getMenuTitleSymbol(name) : null;
            var defaultTitle = /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: (0, _classnames.default)("".concat(baseClassName, "-item-title"), (_this$props3 = _this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.hashId, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-group-item-title"), menuType === 'group'), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
                children: [
                    menuType === 'group' && collapsed ? null : shouldHasIcon && iconDom ? /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        className: "".concat(baseClassName, "-item-icon ").concat((_this$props4 = _this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.hashId).trim(),
                        children: iconDom
                    }) : defaultIcon,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        className: (0, _classnames.default)("".concat(baseClassName, "-item-text"), (_this$props5 = _this.props) === null || _this$props5 === void 0 ? void 0 : _this$props5.hashId, (0, _defineProperty.default)({}, "".concat(baseClassName, "-item-text-has-icon"), menuType !== 'group' && shouldHasIcon && (iconDom || defaultIcon))),
                        children: name
                    })
                ]
            });
            // subMenu only title render
            var title = subMenuItemRender ? subMenuItemRender((0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                isUrl: false
            }), defaultTitle, _this.props) : defaultTitle;
            // 如果收起来，没有子菜单了，就不需要展示 group，所以 level 不增加
            if (isGroup && level === 0 && _this.props.collapsed && !menu.collapsedShowGroupTitle) return _this.getNavMenuItems(children, level + 1, level);
            var childrenList = _this.getNavMenuItems(children, level + 1, isGroup && level === 0 && _this.props.collapsed ? level : level + 1);
            return [
                {
                    type: menuType,
                    key: item.key || item.path,
                    label: title,
                    onClick: isGroup ? undefined : item.onTitleClick,
                    children: childrenList,
                    className: (0, _classnames.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(baseClassName, "-group"), menuType === 'group'), "".concat(baseClassName, "-submenu"), menuType !== 'group'), "".concat(baseClassName, "-submenu-has-icon"), menuType !== 'group' && shouldHasIcon && iconDom))
                },
                isGroup && level === 0 ? {
                    type: 'divider',
                    prefixCls: prefixCls,
                    className: "".concat(baseClassName, "-divider"),
                    key: (item.key || item.path) + '-group-divider',
                    style: {
                        padding: 0,
                        borderBlockEnd: 0,
                        margin: _this.props.collapsed ? '4px' : '6px 16px',
                        marginBlockStart: _this.props.collapsed ? 4 : 8,
                        borderColor: designToken === null || designToken === void 0 || (_designToken$layout = designToken.layout) === null || _designToken$layout === void 0 || (_designToken$layout = _designToken$layout.sider) === null || _designToken$layout === void 0 ? void 0 : _designToken$layout.colorMenuItemDivider
                    }
                } : undefined
            ].filter(Boolean);
        }
        return {
            className: "".concat(baseClassName, "-menu-item"),
            disabled: item.disabled,
            key: item.key || item.path,
            onClick: item.onTitleClick,
            // eslint-disable-next-line react/no-is-mounted
            label: _this.getMenuItemPath(item, level, noGroupLevel)
        };
    });
    (0, _defineProperty.default)(this, "getIntlName", function(item) {
        var name = item.name, locale = item.locale;
        var _this$props6 = _this.props, menu = _this$props6.menu, formatMessage = _this$props6.formatMessage;
        var finalName = name;
        if (locale && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) finalName = formatMessage === null || formatMessage === void 0 ? void 0 : formatMessage({
            id: locale,
            defaultMessage: name
        });
        if (_this.props.menuTextRender) return _this.props.menuTextRender(item, finalName, _this.props);
        return finalName;
    });
    /**
   * 判断是否是http链接.返回 Link 或 a Judge whether it is http link.return a or Link
   *
   * @memberof SiderMenu
   */ (0, _defineProperty.default)(this, "getMenuItemPath", function(item, level, noGroupLevel) {
        var _this$props9, _this$props10, _this$props11, _this$props12;
        var itemPath = _this.conversionPath(item.path || '/');
        var _this$props7 = _this.props, _this$props7$location = _this$props7.location, location = _this$props7$location === void 0 ? {
            pathname: '/'
        } : _this$props7$location, isMobile = _this$props7.isMobile, onCollapse = _this$props7.onCollapse, menuItemRender = _this$props7.menuItemRender, iconPrefixes = _this$props7.iconPrefixes;
        // if local is true formatMessage all name。
        var menuItemTitle = _this.getIntlName(item);
        var _this$props8 = _this.props, baseClassName = _this$props8.baseClassName, menu = _this$props8.menu, collapsed = _this$props8.collapsed;
        var isGroup = (menu === null || menu === void 0 ? void 0 : menu.type) === 'group';
        /** Menu 第一级可以有icon，或者 isGroup 时第二级别也要有 */ var hasIcon = level === 0 || isGroup && level === 1;
        var icon = !hasIcon ? null : getIcon(item.icon, iconPrefixes, "".concat(baseClassName, "-icon ").concat((_this$props9 = _this.props) === null || _this$props9 === void 0 ? void 0 : _this$props9.hashId));
        // 如果没有 icon 在收起的时候用首字母代替
        var defaultIcon = collapsed && hasIcon ? getMenuTitleSymbol(menuItemTitle) : null;
        var defaultItem = /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: (0, _classnames.default)("".concat(baseClassName, "-item-title"), (_this$props10 = _this.props) === null || _this$props10 === void 0 ? void 0 : _this$props10.hashId, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    className: "".concat(baseClassName, "-item-icon ").concat((_this$props11 = _this.props) === null || _this$props11 === void 0 ? void 0 : _this$props11.hashId).trim(),
                    style: {
                        display: defaultIcon === null && !icon ? 'none' : ''
                    },
                    children: icon || /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        className: "anticon",
                        children: defaultIcon
                    })
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    className: (0, _classnames.default)("".concat(baseClassName, "-item-text"), (_this$props12 = _this.props) === null || _this$props12 === void 0 ? void 0 : _this$props12.hashId, (0, _defineProperty.default)({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
                    children: menuItemTitle
                })
            ]
        }, itemPath);
        var isHttpUrl = (0, _proutils.isUrl)(itemPath);
        // Is it a http link
        if (isHttpUrl) {
            var _this$props13, _this$props14, _this$props15;
            defaultItem = /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                onClick: function onClick() {
                    var _window, _window$open;
                    (_window = window) === null || _window === void 0 || (_window$open = _window.open) === null || _window$open === void 0 || _window$open.call(_window, itemPath, '_blank');
                },
                className: (0, _classnames.default)("".concat(baseClassName, "-item-title"), (_this$props13 = _this.props) === null || _this$props13 === void 0 ? void 0 : _this$props13.hashId, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(baseClassName, "-item-title-collapsed"), collapsed), "".concat(baseClassName, "-item-title-collapsed-level-").concat(noGroupLevel), collapsed), "".concat(baseClassName, "-item-link"), true), "".concat(baseClassName, "-item-collapsed-show-title"), (menu === null || menu === void 0 ? void 0 : menu.collapsedShowTitle) && collapsed)),
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        className: "".concat(baseClassName, "-item-icon ").concat((_this$props14 = _this.props) === null || _this$props14 === void 0 ? void 0 : _this$props14.hashId).trim(),
                        style: {
                            display: defaultIcon === null && !icon ? 'none' : ''
                        },
                        children: icon || /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            className: "anticon",
                            children: defaultIcon
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        className: (0, _classnames.default)("".concat(baseClassName, "-item-text"), (_this$props15 = _this.props) === null || _this$props15 === void 0 ? void 0 : _this$props15.hashId, (0, _defineProperty.default)({}, "".concat(baseClassName, "-item-text-has-icon"), hasIcon && (icon || defaultIcon))),
                        children: menuItemTitle
                    })
                ]
            }, itemPath);
        }
        if (menuItemRender) {
            var renderItemProps = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                isUrl: isHttpUrl,
                itemPath: itemPath,
                isMobile: isMobile,
                replace: itemPath === location.pathname,
                onClick: function onClick() {
                    return onCollapse && onCollapse(true);
                },
                children: undefined
            });
            return level === 0 ? /*#__PURE__*/ (0, _jsxruntime.jsx)(MenuItemTooltip, {
                collapsed: collapsed,
                title: menuItemTitle,
                disable: item.disabledTooltip,
                children: menuItemRender(renderItemProps, defaultItem, _this.props)
            }) : menuItemRender(renderItemProps, defaultItem, _this.props);
        }
        return level === 0 ? /*#__PURE__*/ (0, _jsxruntime.jsx)(MenuItemTooltip, {
            collapsed: collapsed,
            title: menuItemTitle,
            disable: item.disabledTooltip,
            children: defaultItem
        }) : defaultItem;
    });
    (0, _defineProperty.default)(this, "conversionPath", function(path) {
        if (path && path.indexOf('http') === 0) return path;
        return "/".concat(path || '').replace(/\/+/g, '/');
    });
    this.props = props;
});
/**
 * 生成openKeys 的对象，因为设置了openKeys 就会变成受控，所以需要一个空对象
 *
 * @param BaseMenuProps
 */ var getOpenKeysProps = function getOpenKeysProps(openKeys, _ref) {
    var layout = _ref.layout, collapsed = _ref.collapsed;
    var openKeysProps = {};
    if (openKeys && !collapsed && [
        'side',
        'mix'
    ].includes(layout || 'mix')) openKeysProps = {
        openKeys: openKeys
    };
    return openKeysProps;
};
var BaseMenu = function BaseMenu(props) {
    var mode = props.mode, className = props.className, handleOpenChange = props.handleOpenChange, style = props.style, menuData = props.menuData, prefixCls = props.prefixCls, menu = props.menu, matchMenuKeys = props.matchMenuKeys, iconfontUrl = props.iconfontUrl, propsSelectedKeys = props.selectedKeys, onSelect = props.onSelect, menuRenderType = props.menuRenderType, propsOpenKeys = props.openKeys;
    var _useContext = (0, _react.useContext)(_proprovider.ProProvider), dark = _useContext.dark, designToken = _useContext.token;
    var baseClassName = "".concat(prefixCls, "-base-menu-").concat(mode);
    // 用于减少 defaultOpenKeys 计算的组件
    var defaultOpenKeysRef = (0, _react.useRef)([]);
    var _useMountMergeState = (0, _proutils.useMountMergeState)(menu === null || menu === void 0 ? void 0 : menu.defaultOpenAll), _useMountMergeState2 = (0, _slicedToArray.default)(_useMountMergeState, 2), defaultOpenAll = _useMountMergeState2[0], setDefaultOpenAll = _useMountMergeState2[1];
    var _useMountMergeState3 = (0, _proutils.useMountMergeState)(function() {
        if (menu !== null && menu !== void 0 && menu.defaultOpenAll) return (0, _utils.getOpenKeysFromMenuData)(menuData) || [];
        if (propsOpenKeys === false) return false;
        return [];
    }, {
        value: propsOpenKeys === false ? undefined : propsOpenKeys,
        onChange: handleOpenChange
    }), _useMountMergeState4 = (0, _slicedToArray.default)(_useMountMergeState3, 2), openKeys = _useMountMergeState4[0], setOpenKeys = _useMountMergeState4[1];
    var _useMountMergeState5 = (0, _proutils.useMountMergeState)([], {
        value: propsSelectedKeys,
        onChange: onSelect ? function(keys) {
            if (onSelect && keys) onSelect(keys);
        } : undefined
    }), _useMountMergeState6 = (0, _slicedToArray.default)(_useMountMergeState5, 2), selectedKeys = _useMountMergeState6[0], setSelectedKeys = _useMountMergeState6[1];
    (0, _react.useEffect)(function() {
        if (menu !== null && menu !== void 0 && menu.defaultOpenAll || propsOpenKeys === false) return;
        if (matchMenuKeys) {
            setOpenKeys(matchMenuKeys);
            setSelectedKeys(matchMenuKeys);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        matchMenuKeys.join('-')
    ]);
    (0, _react.useEffect)(function() {
        // reset IconFont
        if (iconfontUrl) IconFont = (0, _icons.createFromIconfontCN)({
            scriptUrl: iconfontUrl
        });
    }, [
        iconfontUrl
    ]);
    (0, _react.useEffect)(function() {
        // if pathname can't match, use the nearest parent's key
        if (matchMenuKeys.join('-') !== (selectedKeys || []).join('-')) setSelectedKeys(matchMenuKeys);
        if (!defaultOpenAll && propsOpenKeys !== false && matchMenuKeys.join('-') !== (openKeys || []).join('-')) {
            var newKeys = matchMenuKeys;
            // 如果不自动关闭，我需要把 openKeys 放进去
            if ((menu === null || menu === void 0 ? void 0 : menu.autoClose) === false) newKeys = Array.from(new Set([].concat((0, _toConsumableArray.default)(matchMenuKeys), (0, _toConsumableArray.default)(openKeys || []))));
            setOpenKeys(newKeys);
        } else if (menu !== null && menu !== void 0 && menu.ignoreFlatMenu && defaultOpenAll) // 忽略用户手动折叠过的菜单状态，折叠按钮切换之后也可实现默认展开所有菜单
        setOpenKeys((0, _utils.getOpenKeysFromMenuData)(menuData));
        else setDefaultOpenAll(false);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        matchMenuKeys.join('-')
    ]);
    var openKeysProps = (0, _react.useMemo)(function() {
        return getOpenKeysProps(openKeys, props);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        openKeys && openKeys.join(','),
        props.layout,
        props.collapsed
    ]);
    var _useStyle = (0, _menu.useStyle)(baseClassName, mode), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var menuUtils = (0, _react.useMemo)(function() {
        return new MenuUtil((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            token: designToken,
            menuRenderType: menuRenderType,
            baseClassName: baseClassName,
            hashId: hashId
        }));
    }, [
        props,
        designToken,
        menuRenderType,
        baseClassName,
        hashId
    ]);
    if (menu !== null && menu !== void 0 && menu.loading) return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        style: mode !== null && mode !== void 0 && mode.includes('inline') ? {
            padding: 24
        } : {
            marginBlockStart: 16
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Skeleton, {
            active: true,
            title: false,
            paragraph: {
                rows: mode !== null && mode !== void 0 && mode.includes('inline') ? 6 : 1
            }
        })
    });
    // 这次 openKeys === false 的时候的情况，这种情况下帮用户选中一次
    // 第二此不会使用，所以用了 defaultOpenKeys
    // 这里返回 null，是为了让 defaultOpenKeys 生效
    if (props.openKeys === false && !props.handleOpenChange) defaultOpenKeysRef.current = matchMenuKeys;
    var finallyData = props.postMenuData ? props.postMenuData(menuData) : menuData;
    if (finallyData && (finallyData === null || finallyData === void 0 ? void 0 : finallyData.length) < 1) return null;
    return wrapSSR(/*#__PURE__*/ (0, _react.createElement)(_antd.Menu, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, openKeysProps), {}, {
        _internalDisableMenuItemTitleTooltip: true,
        key: "Menu",
        mode: mode,
        inlineIndent: 16,
        defaultOpenKeys: defaultOpenKeysRef.current,
        theme: dark ? 'dark' : 'light',
        selectedKeys: selectedKeys,
        style: (0, _objectSpread2.default)({
            backgroundColor: 'transparent',
            border: 'none'
        }, style),
        className: (0, _classnames.default)(className, hashId, baseClassName, (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(baseClassName, "-horizontal"), mode === 'horizontal'), "".concat(baseClassName, "-collapsed"), props.collapsed)),
        items: menuUtils.getNavMenuItems(finallyData, 0, 0),
        onOpenChange: function onOpenChange(_openKeys) {
            if (!props.collapsed) setOpenKeys(_openKeys);
        }
    }, props.menuProps)));
};

},
"node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js": function (module, exports, __mako_require__){
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
    SiderMenu: function() {
        return SiderMenu;
    },
    renderLogoAndTitle: function() {
        return renderLogoAndTitle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectWithoutProperties = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _AppsLogoComponents = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js");
var _CollapsedIcon = __mako_require__("node_modules/@ant-design/pro-layout/es/components/CollapsedIcon/index.js");
var _BaseMenu = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/BaseMenu.js");
var _stylish = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/stylish.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var _excluded = [
    "title",
    "render"
];
var _SafetyWarningProvider = /*#__PURE__*/ _react.default.memo(function(props) {
    console.warn("[pro-layout] SiderMenu required antd@^4.24.15 || antd@^5.11.2 for access the menu context, please upgrade your antd version (current ".concat(_antd.version, ")."));
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: props.children
    });
});
var Sider = _antd.Layout.Sider;
var _Layout$_InternalSide = _antd.Layout._InternalSiderContext;
var SiderContext = _Layout$_InternalSide === void 0 ? {
    Provider: _SafetyWarningProvider
} : _Layout$_InternalSide;
var renderLogoAndTitle = function renderLogoAndTitle(props) {
    var renderKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'menuHeaderRender';
    var logo = props.logo, title = props.title, layout = props.layout;
    var renderFunction = props[renderKey];
    if (renderFunction === false) return null;
    var logoDom = (0, _AppsLogoComponents.defaultRenderLogo)(logo);
    var titleDom = /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
        children: title !== null && title !== void 0 ? title : 'Ant Design Pro'
    });
    if (renderFunction) // when collapsed, no render title
    return renderFunction(logoDom, props.collapsed ? null : titleDom, props);
    /**
   * 收起来时候直接不显示
   */ if (props.isMobile) return null;
    if (layout === 'mix' && renderKey === 'menuHeaderRender') return false;
    if (props.collapsed) return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
        children: logoDom
    }, "title");
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("a", {
        children: [
            logoDom,
            titleDom
        ]
    }, "title");
};
var SiderMenu = function SiderMenu(props) {
    var _props$menu2;
    var collapsed = props.collapsed, originCollapsed = props.originCollapsed, fixSiderbar = props.fixSiderbar, menuFooterRender = props.menuFooterRender, _onCollapse = props.onCollapse, theme = props.theme, siderWidth = props.siderWidth, isMobile = props.isMobile, onMenuHeaderClick = props.onMenuHeaderClick, _props$breakpoint = props.breakpoint, breakpoint = _props$breakpoint === void 0 ? 'lg' : _props$breakpoint, style = props.style, layout = props.layout, _props$menuExtraRende = props.menuExtraRender, menuExtraRender = _props$menuExtraRende === void 0 ? false : _props$menuExtraRende, links = props.links, menuContentRender = props.menuContentRender, collapsedButtonRender = props.collapsedButtonRender, prefixCls = props.prefixCls, avatarProps = props.avatarProps, rightContentRender = props.rightContentRender, actionsRender = props.actionsRender, onOpenChange = props.onOpenChange, stylish = props.stylish, logoStyle = props.logoStyle;
    var _useContext = (0, _react.useContext)(_proprovider.ProProvider), hashId = _useContext.hashId;
    var showSiderExtraDom = (0, _react.useMemo)(function() {
        if (isMobile) return false;
        if (layout === 'mix') return false;
        return true;
    }, [
        isMobile,
        layout
    ]);
    var baseClassName = "".concat(prefixCls, "-sider");
    // 收起的宽度
    var collapsedWidth = 64;
    // 之所以这样写是为了提升样式优先级，不然会被sider 自带的覆盖掉
    var stylishClassName = (0, _stylish.useStylish)("".concat(baseClassName, ".").concat(baseClassName, "-stylish"), {
        stylish: stylish,
        proLayoutCollapsedWidth: collapsedWidth
    });
    var siderClassName = (0, _classnames.default)("".concat(baseClassName), hashId, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(baseClassName, "-fixed"), fixSiderbar), "".concat(baseClassName, "-fixed-mix"), layout === 'mix' && !isMobile && fixSiderbar), "".concat(baseClassName, "-collapsed"), props.collapsed), "".concat(baseClassName, "-layout-").concat(layout), layout && !isMobile), "".concat(baseClassName, "-light"), theme !== 'dark'), "".concat(baseClassName, "-mix"), layout === 'mix' && !isMobile), "".concat(baseClassName, "-stylish"), !!stylish));
    var headerDom = renderLogoAndTitle(props);
    var extraDom = menuExtraRender && menuExtraRender(props);
    var menuDom = (0, _react.useMemo)(function() {
        return menuContentRender !== false && /*#__PURE__*/ (0, _react.createElement)(_BaseMenu.BaseMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
            key: "base-menu",
            mode: collapsed && !isMobile ? 'vertical' : 'inline',
            handleOpenChange: onOpenChange,
            style: {
                width: '100%'
            },
            className: "".concat(baseClassName, "-menu ").concat(hashId).trim()
        }));
    }, [
        baseClassName,
        hashId,
        menuContentRender,
        onOpenChange,
        props
    ]);
    var linksMenuItems = (links || []).map(function(node, index) {
        return {
            className: "".concat(baseClassName, "-link"),
            label: node,
            key: index
        };
    });
    var menuRenderDom = (0, _react.useMemo)(function() {
        return menuContentRender ? menuContentRender(props, menuDom) : menuDom;
    }, [
        menuContentRender,
        menuDom,
        props
    ]);
    var avatarDom = (0, _react.useMemo)(function() {
        if (!avatarProps) return null;
        var title = avatarProps.title, render = avatarProps.render, rest = (0, _objectWithoutProperties.default)(avatarProps, _excluded);
        var dom = /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "".concat(baseClassName, "-actions-avatar"),
            children: [
                rest !== null && rest !== void 0 && rest.src || rest !== null && rest !== void 0 && rest.srcSet || rest.icon || rest.children ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Avatar, (0, _objectSpread2.default)({
                    size: 28
                }, rest)) : null,
                avatarProps.title && !collapsed && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    children: title
                })
            ]
        });
        if (render) return render(avatarProps, dom, props);
        return dom;
    }, [
        avatarProps,
        baseClassName,
        collapsed
    ]);
    var actionsDom = (0, _react.useMemo)(function() {
        if (!actionsRender) return null;
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Space, {
            align: "center",
            size: 4,
            direction: collapsed ? 'vertical' : 'horizontal',
            className: (0, _classnames.default)([
                "".concat(baseClassName, "-actions-list"),
                collapsed && "".concat(baseClassName, "-actions-list-collapsed"),
                hashId
            ]),
            children: [
                actionsRender === null || actionsRender === void 0 ? void 0 : actionsRender(props)
            ].flat(1).map(function(item, index) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    className: "".concat(baseClassName, "-actions-list-item ").concat(hashId).trim(),
                    children: item
                }, index);
            })
        });
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        actionsRender,
        baseClassName,
        collapsed
    ]);
    var appsDom = (0, _react.useMemo)(function() {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_AppsLogoComponents.AppsLogoComponents, {
            onItemClick: props.itemClick,
            appListRender: props.appListRender,
            appList: props.appList,
            prefixCls: props.prefixCls
        });
    }, [
        props.appList,
        props.appListRender,
        props.prefixCls
    ]);
    var collapsedDom = (0, _react.useMemo)(function() {
        if (collapsedButtonRender === false) return null;
        var dom = /*#__PURE__*/ (0, _jsxruntime.jsx)(_CollapsedIcon.CollapsedIcon, {
            isMobile: isMobile,
            collapsed: originCollapsed,
            className: "".concat(baseClassName, "-collapsed-button"),
            onClick: function onClick() {
                _onCollapse === null || _onCollapse === void 0 || _onCollapse(!originCollapsed);
            }
        });
        if (collapsedButtonRender) return collapsedButtonRender(collapsed, dom);
        return dom;
    }, [
        collapsedButtonRender,
        isMobile,
        originCollapsed,
        baseClassName,
        collapsed,
        _onCollapse
    ]);
    /** 操作区域的dom */ var actionAreaDom = (0, _react.useMemo)(function() {
        if (!avatarDom && !actionsDom) return null;
        return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: (0, _classnames.default)("".concat(baseClassName, "-actions"), hashId, collapsed && "".concat(baseClassName, "-actions-collapsed")),
            children: [
                avatarDom,
                actionsDom
            ]
        });
    }, [
        actionsDom,
        avatarDom,
        baseClassName,
        collapsed,
        hashId
    ]);
    /* Using the useMemo hook to create a CSS class that will hide the menu when the menu is collapsed. */ var hideMenuWhenCollapsedClassName = (0, _react.useMemo)(function() {
        var _props$menu;
        // 收起时完全隐藏菜单
        if (props !== null && props !== void 0 && (_props$menu = props.menu) !== null && _props$menu !== void 0 && _props$menu.hideMenuWhenCollapsed && collapsed) return "".concat(baseClassName, "-hide-menu-collapsed");
        return null;
    }, [
        baseClassName,
        collapsed,
        props === null || props === void 0 || (_props$menu2 = props.menu) === null || _props$menu2 === void 0 ? void 0 : _props$menu2.hideMenuWhenCollapsed
    ]);
    var menuFooterDom = menuFooterRender && (menuFooterRender === null || menuFooterRender === void 0 ? void 0 : menuFooterRender(props));
    var menuDomItems = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            headerDom && /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: (0, _classnames.default)([
                    (0, _classnames.default)("".concat(baseClassName, "-logo"), hashId, (0, _defineProperty.default)({}, "".concat(baseClassName, "-logo-collapsed"), collapsed))
                ]),
                onClick: showSiderExtraDom ? onMenuHeaderClick : undefined,
                id: "logo",
                style: logoStyle,
                children: [
                    headerDom,
                    appsDom
                ]
            }),
            extraDom && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: (0, _classnames.default)([
                    "".concat(baseClassName, "-extra"),
                    !headerDom && "".concat(baseClassName, "-extra-no-logo"),
                    hashId
                ]),
                children: extraDom
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                style: {
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden'
                },
                children: menuRenderDom
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(SiderContext.Provider, {
                value: {},
                children: [
                    links ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "".concat(baseClassName, "-links ").concat(hashId).trim(),
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Menu, {
                            inlineIndent: 16,
                            className: "".concat(baseClassName, "-link-menu ").concat(hashId).trim(),
                            selectedKeys: [],
                            openKeys: [],
                            theme: theme,
                            mode: "inline",
                            items: linksMenuItems
                        })
                    }) : null,
                    showSiderExtraDom && /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                        children: [
                            actionAreaDom,
                            !actionsDom && rightContentRender ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                className: (0, _classnames.default)("".concat(baseClassName, "-actions"), hashId, (0, _defineProperty.default)({}, "".concat(baseClassName, "-actions-collapsed"), collapsed)),
                                children: rightContentRender === null || rightContentRender === void 0 ? void 0 : rightContentRender(props)
                            }) : null
                        ]
                    }),
                    menuFooterDom && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: (0, _classnames.default)([
                            "".concat(baseClassName, "-footer"),
                            hashId,
                            (0, _defineProperty.default)({}, "".concat(baseClassName, "-footer-collapsed"), collapsed)
                        ]),
                        children: menuFooterDom
                    })
                ]
            })
        ]
    });
    return stylishClassName.wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            fixSiderbar && !isMobile && !hideMenuWhenCollapsedClassName && /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                style: (0, _objectSpread2.default)({
                    width: collapsed ? collapsedWidth : siderWidth,
                    overflow: 'hidden',
                    flex: "0 0 ".concat(collapsed ? collapsedWidth : siderWidth, "px"),
                    maxWidth: collapsed ? collapsedWidth : siderWidth,
                    minWidth: collapsed ? collapsedWidth : siderWidth,
                    transition: 'all 0.2s ease 0s'
                }, style)
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(Sider, {
                collapsible: true,
                trigger: null,
                collapsed: collapsed,
                breakpoint: breakpoint === false ? undefined : breakpoint,
                onCollapse: function onCollapse(collapse) {
                    if (isMobile) return;
                    _onCollapse === null || _onCollapse === void 0 || _onCollapse(collapse);
                },
                collapsedWidth: collapsedWidth,
                style: style,
                theme: theme,
                width: siderWidth,
                className: (0, _classnames.default)(siderClassName, hashId, hideMenuWhenCollapsedClassName),
                children: [
                    hideMenuWhenCollapsedClassName ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        className: "".concat(baseClassName, "-hide-when-collapsed ").concat(hashId).trim(),
                        style: {
                            height: '100%',
                            width: '100%',
                            opacity: hideMenuWhenCollapsedClassName ? 0 : 1
                        },
                        children: menuDomItems
                    }) : menuDomItems,
                    collapsedDom
                ]
            })
        ]
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/SiderMenu/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "SiderMenu", {
    enumerable: true,
    get: function() {
        return SiderMenuWrapper;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _omit = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/rc-util/es/omit.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _SiderMenu = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js");
var _index = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/index.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var SiderMenuWrapper = function SiderMenuWrapper(props) {
    var _token$layout;
    var isMobile = props.isMobile, siderWidth = props.siderWidth, collapsed = props.collapsed, onCollapse = props.onCollapse, style = props.style, className = props.className, hide = props.hide, prefixCls = props.prefixCls, getContainer = props.getContainer;
    var _useContext = (0, _react.useContext)(_proprovider.ProProvider), token = _useContext.token;
    (0, _react.useEffect)(function() {
        if (isMobile === true) onCollapse === null || onCollapse === void 0 || onCollapse(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isMobile
    ]);
    var omitProps = (0, _omit.default)(props, [
        'className',
        'style'
    ]);
    var _React$useContext = _react.default.useContext(_antd.ConfigProvider.ConfigContext), direction = _React$useContext.direction;
    var _useStyle = (0, _index.useStyle)("".concat(prefixCls, "-sider"), {
        proLayoutCollapsedWidth: 64
    }), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var siderClassName = (0, _classnames.default)("".concat(prefixCls, "-sider"), className, hashId);
    if (hide) return null;
    var drawerOpenProps = (0, _proutils.openVisibleCompatible)(!collapsed, function() {
        return onCollapse === null || onCollapse === void 0 ? void 0 : onCollapse(true);
    });
    return wrapSSR(isMobile ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd.Drawer, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        placement: direction === 'rtl' ? 'right' : 'left',
        className: (0, _classnames.default)("".concat(prefixCls, "-drawer-sider"), className)
    }, drawerOpenProps), {}, {
        style: (0, _objectSpread2.default)({
            padding: 0,
            height: '100vh'
        }, style),
        onClose: function onClose() {
            onCollapse === null || onCollapse === void 0 || onCollapse(true);
        },
        maskClosable: true,
        closable: false,
        getContainer: getContainer || false,
        width: siderWidth,
        styles: {
            body: {
                height: '100vh',
                padding: 0,
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorMenuBackground
            }
        },
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_SiderMenu.SiderMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({}, omitProps), {}, {
            isMobile: true,
            className: siderClassName,
            collapsed: isMobile ? false : collapsed,
            splitMenus: false,
            originCollapsed: collapsed
        }))
    })) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_SiderMenu.SiderMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)({
        className: siderClassName,
        originCollapsed: collapsed
    }, omitProps), {}, {
        style: style
    })));
};

},
"node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/index.js": function (module, exports, __mako_require__){
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
    proLayoutTitleHide: function() {
        return proLayoutTitleHide;
    },
    useStyle: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _cssinjs = __mako_require__("node_modules/@ant-design/cssinjs/es/index.js");
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var proLayoutTitleHide = new _cssinjs.Keyframes('antBadgeLoadingCircle', {
    '0%': {
        display: 'none',
        opacity: 0,
        overflow: 'hidden'
    },
    '80%': {
        overflow: 'hidden'
    },
    '100%': {
        display: 'unset',
        opacity: 1
    }
});
var genSiderMenuStyle = function genSiderMenuStyle(token) {
    var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12;
    return (0, _defineProperty.default)({}, "".concat(token.proComponentsCls, "-layout"), (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.antCls, "-layout-sider").concat(token.componentCls), {
        background: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorMenuBackground) || 'transparent'
    }), token.componentCls, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        position: 'relative',
        boxSizing: 'border-box',
        '&-menu': {
            position: 'relative',
            zIndex: 10,
            minHeight: '100%'
        }
    }, "& ".concat(token.antCls, "-layout-sider-children"), {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        paddingInline: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.paddingInlineLayoutMenu,
        paddingBlock: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.paddingBlockLayoutMenu,
        borderInlineEnd: "1px solid ".concat(token.colorSplit),
        marginInlineEnd: -1
    }), "".concat(token.antCls, "-menu"), (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item-group-title"), {
        fontSize: token.fontSizeSM,
        paddingBottom: 4
    }), "".concat(token.antCls, "-menu-item:not(").concat(token.antCls, "-menu-item-selected):hover"), {
        color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuItemHover
    })), '&-logo', {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingInline: 12,
        paddingBlock: 16,
        color: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenu,
        cursor: 'pointer',
        borderBlockEnd: "1px solid ".concat((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorMenuItemDivider),
        '> a': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 22,
            fontSize: 22,
            '> img': {
                display: 'inline-block',
                height: 22,
                verticalAlign: 'middle'
            },
            '> h1': {
                display: 'inline-block',
                height: 22,
                marginBlock: 0,
                marginInlineEnd: 0,
                marginInlineStart: 6,
                color: (_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuTitle,
                animationName: proLayoutTitleHide,
                animationDuration: '.4s',
                animationTimingFunction: 'ease',
                fontWeight: 600,
                fontSize: 16,
                lineHeight: '22px',
                verticalAlign: 'middle'
            }
        },
        '&-collapsed': (0, _defineProperty.default)({
            flexDirection: 'column-reverse',
            margin: 0,
            padding: 12
        }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
            marginBlockEnd: 8,
            fontSize: 16,
            transition: 'font-size 0.2s ease-in-out,color 0.2s ease-in-out'
        })
    }), '&-actions', {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBlock: 4,
        marginInline: 0,
        color: (_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.sider) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorTextMenu,
        '&-collapsed': {
            flexDirection: 'column-reverse',
            paddingBlock: 0,
            paddingInline: 8,
            fontSize: 16,
            transition: 'font-size 0.3s ease-in-out'
        },
        '&-list': {
            color: (_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuSecondary,
            '&-collapsed': {
                marginBlockEnd: 8,
                animationName: 'none'
            },
            '&-item': {
                paddingInline: 6,
                paddingBlock: 6,
                lineHeight: '16px',
                fontSize: 16,
                cursor: 'pointer',
                borderRadius: token.borderRadius,
                '&:hover': {
                    background: token.colorBgTextHover
                }
            }
        },
        '&-avatar': {
            fontSize: 14,
            paddingInline: 8,
            paddingBlock: 8,
            display: 'flex',
            alignItems: 'center',
            gap: token.marginXS,
            borderRadius: token.borderRadius,
            '& *': {
                cursor: 'pointer'
            },
            '&:hover': {
                background: token.colorBgTextHover
            }
        }
    }), '&-hide-menu-collapsed', {
        insetInlineStart: "-".concat(token.proLayoutCollapsedWidth - 12, "px"),
        position: 'absolute'
    }), '&-extra', {
        marginBlockEnd: 16,
        marginBlock: 0,
        marginInline: 16,
        '&-no-logo': {
            marginBlockStart: 16
        }
    }), '&-links', {
        width: '100%',
        ul: {
            height: 'auto'
        }
    }), '&-link-menu', {
        border: 'none',
        boxShadow: 'none',
        background: 'transparent'
    }), '&-footer', {
        color: (_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuSecondary,
        paddingBlockEnd: 16,
        fontSize: token.fontSize,
        animationName: proLayoutTitleHide,
        animationDuration: '.4s',
        animationTimingFunction: 'ease'
    })), "".concat(token.componentCls).concat(token.componentCls, "-fixed"), {
        position: 'fixed',
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: '100',
        height: '100%',
        '&-mix': {
            height: "calc(100% - ".concat(((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.header) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.heightLayoutHeader) || 56, "px)"),
            insetBlockStart: "".concat(((_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.header) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.heightLayoutHeader) || 56, "px")
        }
    }));
};
function useStyle(prefixCls, _ref2) {
    var proLayoutCollapsedWidth = _ref2.proLayoutCollapsedWidth;
    return (0, _proprovider.useStyle)('ProLayoutSiderMenu', function(token) {
        var siderMenuToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls),
            proLayoutCollapsedWidth: proLayoutCollapsedWidth
        });
        return [
            genSiderMenuStyle(siderMenuToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/menu.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genProLayoutBaseMenuStyle = function genProLayoutBaseMenuStyle(token, mode) {
    var _token$layout, _token$layout2;
    var menuToken = mode.includes('horizontal') ? (_token$layout = token.layout) === null || _token$layout === void 0 ? void 0 : _token$layout.header : (_token$layout2 = token.layout) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.sider;
    return (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _defineProperty.default)({}, "".concat(token.componentCls), (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        background: 'transparent',
        color: menuToken === null || menuToken === void 0 ? void 0 : menuToken.colorTextMenu,
        border: 'none'
    }, "".concat(token.componentCls, "-menu-item"), {
        transition: 'none !important'
    }), "".concat(token.componentCls, "-submenu-has-icon"), (0, _defineProperty.default)({}, "> ".concat(token.antCls, "-menu-sub"), {
        paddingInlineStart: 10
    })), "".concat(token.antCls, "-menu-title-content"), {
        width: '100%',
        height: '100%',
        display: 'inline-flex'
    }), "".concat(token.antCls, "-menu-title-content"), {
        '&:first-child': {
            width: '100%'
        }
    }), "".concat(token.componentCls, "-item-icon"), {
        display: 'flex',
        alignItems: 'center'
    }), "&&-collapsed", (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item, \n        ").concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-item, \n        ").concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-submenu > ").concat(token.antCls, "-menu-submenu-title, \n        ").concat(token.antCls, "-menu-submenu > ").concat(token.antCls, "-menu-submenu-title"), {
        paddingInline: '0 !important',
        marginBlock: '4px !important'
    }), "".concat(token.antCls, "-menu-item-group > ").concat(token.antCls, "-menu-item-group-list > ").concat(token.antCls, "-menu-submenu-selected > ").concat(token.antCls, "-menu-submenu-title, \n        ").concat(token.antCls, "-menu-submenu-selected > ").concat(token.antCls, "-menu-submenu-title"), {
        backgroundColor: menuToken === null || menuToken === void 0 ? void 0 : menuToken.colorBgMenuItemSelected,
        borderRadius: token.borderRadiusLG
    }), "".concat(token.componentCls, "-group"), (0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item-group-title"), {
        paddingInline: 0
    }))), '&-item-title', (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: token.marginXS
    }, "".concat(token.componentCls, "-item-text"), {
        maxWidth: '100%',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        wordBreak: 'break-all',
        whiteSpace: 'nowrap'
    }), '&-collapsed', (0, _defineProperty.default)((0, _defineProperty.default)({
        minWidth: 40,
        height: 40
    }, "".concat(token.componentCls, "-item-icon"), {
        height: '16px',
        width: '16px',
        lineHeight: '16px !important',
        '.anticon': {
            lineHeight: '16px !important',
            height: '16px'
        }
    }), "".concat(token.componentCls, "-item-text-has-icon"), {
        display: 'none !important'
    })), '&-collapsed-level-0', {
        flexDirection: 'column',
        justifyContent: 'center'
    }), "&".concat(token.componentCls, "-group-item-title"), {
        gap: token.marginXS,
        height: 18,
        overflow: 'hidden'
    }), "&".concat(token.componentCls, "-item-collapsed-show-title"), (0, _defineProperty.default)({
        lineHeight: '16px',
        gap: 0
    }, "&".concat(token.componentCls, "-item-title-collapsed"), (0, _defineProperty.default)((0, _defineProperty.default)({
        display: 'flex'
    }, "".concat(token.componentCls, "-item-icon"), {
        height: '16px',
        width: '16px',
        lineHeight: '16px !important',
        '.anticon': {
            lineHeight: '16px!important',
            height: '16px'
        }
    }), "".concat(token.componentCls, "-item-text"), {
        opacity: '1 !important',
        display: 'inline !important',
        textAlign: 'center',
        fontSize: 12,
        height: 12,
        lineHeight: '12px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
        margin: 0,
        padding: 0,
        marginBlockStart: 4
    })))), '&-group', (0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item-group-title"), {
        fontSize: 12,
        color: token.colorTextLabel,
        '.anticon': {
            marginInlineEnd: 8
        }
    })), '&-group-divider', {
        color: token.colorTextSecondary,
        fontSize: 12,
        lineHeight: 20
    })), mode.includes('horizontal') ? {} : (0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-submenu").concat(token.antCls, "-menu-submenu-popup"), (0, _defineProperty.default)({}, "".concat(token.componentCls, "-item-title"), {
        alignItems: 'flex-start'
    }))), {}, (0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-submenu-popup"), {
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        '-webkit-backdrop-filter': 'blur(8px)',
        backdropFilter: 'blur(8px)'
    }));
};
function useStyle(prefixCls, mode) {
    return (0, _proprovider.useStyle)('ProLayoutBaseMenu' + mode, function(token) {
        var proLayoutMenuToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genProLayoutBaseMenuStyle(proLayoutMenuToken, mode || 'inline')
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/SiderMenu/style/stylish.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStylish", {
    enumerable: true,
    get: function() {
        return useStylish;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
function useStylish(prefixCls, _ref) {
    var stylish = _ref.stylish, proLayoutCollapsedWidth = _ref.proLayoutCollapsedWidth;
    return (0, _proprovider.useStyle)('ProLayoutSiderMenuStylish', function(token) {
        var siderMenuToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls),
            proLayoutCollapsedWidth: proLayoutCollapsedWidth
        });
        if (!stylish) return [];
        return [
            (0, _defineProperty.default)({}, "div".concat(token.proComponentsCls, "-layout"), (0, _defineProperty.default)({}, "".concat(siderMenuToken.componentCls), stylish === null || stylish === void 0 ? void 0 : stylish(siderMenuToken)))
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "TopNavHeader", {
    enumerable: true,
    get: function() {
        return TopNavHeader;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _AppsLogoComponents = __mako_require__("node_modules/@ant-design/pro-layout/es/components/AppsLogoComponents/index.js");
var _ActionsContent = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GlobalHeader/ActionsContent.js");
var _BaseMenu = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/BaseMenu.js");
var _SiderMenu = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SiderMenu/SiderMenu.js");
var _style = __mako_require__("node_modules/@ant-design/pro-layout/es/components/TopNavHeader/style.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
var TopNavHeader = function TopNavHeader(props) {
    var _token$layout13, _token$layout14, _token$layout15, _token$layout16, _token$layout17, _token$layout18, _token$layout19;
    var ref = (0, _react.useRef)(null);
    var onMenuHeaderClick = props.onMenuHeaderClick, contentWidth = props.contentWidth, rightContentRender = props.rightContentRender, propsClassName = props.className, style = props.style, headerContentRender = props.headerContentRender, layout = props.layout, actionsRender = props.actionsRender;
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
    var _useContext2 = (0, _react.useContext)(_proprovider.ProProvider), dark = _useContext2.dark;
    var prefixCls = "".concat(props.prefixCls || getPrefixCls('pro'), "-top-nav-header");
    var _useStyle = (0, _style.useStyle)(prefixCls), wrapSSR = _useStyle.wrapSSR, hashId = _useStyle.hashId;
    var renderKey = undefined;
    if (props.menuHeaderRender !== undefined) renderKey = 'menuHeaderRender';
    else if (layout === 'mix' || layout === 'top') renderKey = 'headerTitleRender';
    var headerDom = (0, _SiderMenu.renderLogoAndTitle)((0, _objectSpread2.default)((0, _objectSpread2.default)({}, props), {}, {
        collapsed: false
    }), renderKey);
    var _useContext3 = (0, _react.useContext)(_proprovider.ProProvider), token = _useContext3.token;
    var contentDom = (0, _react.useMemo)(function() {
        var _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12, _props$menuProps;
        var defaultDom = /*#__PURE__*/ (0, _jsxruntime.jsx)(_antd // @ts-ignore
        .ConfigProvider, {
            theme: {
                hashed: (0, _proprovider.isNeedOpenHash)(),
                components: {
                    Layout: {
                        headerBg: 'transparent',
                        bodyBg: 'transparent'
                    },
                    Menu: (0, _objectSpread2.default)({}, (0, _proutils.coverToNewToken)({
                        colorItemBg: ((_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorBgHeader) || 'transparent',
                        colorSubItemBg: ((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorBgHeader) || 'transparent',
                        radiusItem: token.borderRadius,
                        colorItemBgSelected: ((_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.header) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                        itemHoverBg: ((_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.header) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorBgMenuItemHover) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                        colorItemBgSelectedHorizontal: ((_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.header) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorBgMenuItemSelected) || (token === null || token === void 0 ? void 0 : token.colorBgTextHover),
                        colorActiveBarWidth: 0,
                        colorActiveBarHeight: 0,
                        colorActiveBarBorderSize: 0,
                        colorItemText: ((_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.header) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorTextMenu) || (token === null || token === void 0 ? void 0 : token.colorTextSecondary),
                        colorItemTextHoverHorizontal: ((_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.header) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuActive) || (token === null || token === void 0 ? void 0 : token.colorText),
                        colorItemTextSelectedHorizontal: ((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.header) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorTextMenuSelected) || (token === null || token === void 0 ? void 0 : token.colorTextBase),
                        horizontalItemBorderRadius: 4,
                        colorItemTextHover: ((_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.header) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuActive) || 'rgba(0, 0, 0, 0.85)',
                        horizontalItemHoverBg: ((_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.header) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorBgMenuItemHover) || 'rgba(0, 0, 0, 0.04)',
                        colorItemTextSelected: ((_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.header) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected) || 'rgba(0, 0, 0, 1)',
                        popupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                        subMenuItemBg: token === null || token === void 0 ? void 0 : token.colorBgElevated,
                        darkSubMenuItemBg: 'transparent',
                        darkPopupBg: token === null || token === void 0 ? void 0 : token.colorBgElevated
                    }))
                },
                token: {
                    colorBgElevated: ((_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.header) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.colorBgHeader) || 'transparent'
                }
            },
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_BaseMenu.BaseMenu, (0, _objectSpread2.default)((0, _objectSpread2.default)((0, _objectSpread2.default)({
                theme: dark ? 'dark' : 'light'
            }, props), {}, {
                className: "".concat(prefixCls, "-base-menu ").concat(hashId).trim()
            }, props.menuProps), {}, {
                style: (0, _objectSpread2.default)({
                    width: '100%'
                }, (_props$menuProps = props.menuProps) === null || _props$menuProps === void 0 ? void 0 : _props$menuProps.style),
                collapsed: false,
                menuRenderType: "header",
                mode: "horizontal"
            }))
        });
        if (headerContentRender) return headerContentRender(props, defaultDom);
        return defaultDom;
    }, [
        (_token$layout13 = token.layout) === null || _token$layout13 === void 0 || (_token$layout13 = _token$layout13.header) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.colorBgHeader,
        (_token$layout14 = token.layout) === null || _token$layout14 === void 0 || (_token$layout14 = _token$layout14.header) === null || _token$layout14 === void 0 ? void 0 : _token$layout14.colorBgMenuItemSelected,
        (_token$layout15 = token.layout) === null || _token$layout15 === void 0 || (_token$layout15 = _token$layout15.header) === null || _token$layout15 === void 0 ? void 0 : _token$layout15.colorBgMenuItemHover,
        (_token$layout16 = token.layout) === null || _token$layout16 === void 0 || (_token$layout16 = _token$layout16.header) === null || _token$layout16 === void 0 ? void 0 : _token$layout16.colorTextMenu,
        (_token$layout17 = token.layout) === null || _token$layout17 === void 0 || (_token$layout17 = _token$layout17.header) === null || _token$layout17 === void 0 ? void 0 : _token$layout17.colorTextMenuActive,
        (_token$layout18 = token.layout) === null || _token$layout18 === void 0 || (_token$layout18 = _token$layout18.header) === null || _token$layout18 === void 0 ? void 0 : _token$layout18.colorTextMenuSelected,
        (_token$layout19 = token.layout) === null || _token$layout19 === void 0 || (_token$layout19 = _token$layout19.header) === null || _token$layout19 === void 0 ? void 0 : _token$layout19.colorBgMenuElevated,
        token.borderRadius,
        token === null || token === void 0 ? void 0 : token.colorBgTextHover,
        token === null || token === void 0 ? void 0 : token.colorTextSecondary,
        token === null || token === void 0 ? void 0 : token.colorText,
        token === null || token === void 0 ? void 0 : token.colorTextBase,
        token.colorBgElevated,
        dark,
        props,
        prefixCls,
        hashId,
        headerContentRender
    ]);
    return wrapSSR(/*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(prefixCls, hashId, propsClassName, (0, _defineProperty.default)({}, "".concat(prefixCls, "-light"), true)),
        style: style,
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            ref: ref,
            className: (0, _classnames.default)("".concat(prefixCls, "-main"), hashId, (0, _defineProperty.default)({}, "".concat(prefixCls, "-wide"), contentWidth === 'Fixed' && layout === 'top')),
            children: [
                headerDom && /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                    className: (0, _classnames.default)("".concat(prefixCls, "-main-left ").concat(hashId)),
                    onClick: onMenuHeaderClick,
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)(_AppsLogoComponents.AppsLogoComponents, (0, _objectSpread2.default)({}, props)),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                            className: "".concat(prefixCls, "-logo ").concat(hashId).trim(),
                            id: "logo",
                            children: headerDom
                        }, "logo")
                    ]
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                    style: {
                        flex: 1
                    },
                    className: "".concat(prefixCls, "-menu ").concat(hashId).trim(),
                    children: contentDom
                }),
                (rightContentRender || actionsRender || props.avatarProps) && /*#__PURE__*/ (0, _jsxruntime.jsx)(_ActionsContent.ActionsContent, (0, _objectSpread2.default)((0, _objectSpread2.default)({
                    rightContentRender: rightContentRender
                }, props), {}, {
                    prefixCls: prefixCls
                }))
            ]
        })
    }));
};

},
"node_modules/@ant-design/pro-layout/es/components/TopNavHeader/style.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var genTopNavHeaderStyle = function genTopNavHeaderStyle(token) {
    var _token$layout, _token$layout2;
    return (0, _defineProperty.default)({}, token.componentCls, {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        '.anticon': {
            color: 'inherit'
        },
        '&-main': {
            display: 'flex',
            height: '100%',
            paddingInlineStart: '16px',
            '&-left': (0, _defineProperty.default)({
                display: 'flex',
                alignItems: 'center'
            }, "".concat(token.proComponentsCls, "-layout-apps-icon"), {
                marginInlineEnd: 16,
                marginInlineStart: -8
            })
        },
        '&-wide': {
            maxWidth: 1152,
            margin: '0 auto'
        },
        '&-logo': {
            position: 'relative',
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            overflow: 'hidden',
            '> *:first-child': {
                display: 'flex',
                alignItems: 'center',
                minHeight: '22px',
                fontSize: '22px'
            },
            '> *:first-child > img': {
                display: 'inline-block',
                height: '32px',
                verticalAlign: 'middle'
            },
            '> *:first-child > h1': {
                display: 'inline-block',
                marginBlock: 0,
                marginInline: 0,
                lineHeight: '24px',
                marginInlineStart: 6,
                fontWeight: '600',
                fontSize: '16px',
                color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.header) === null || _token$layout === void 0 ? void 0 : _token$layout.colorHeaderTitle,
                verticalAlign: 'top'
            }
        },
        '&-menu': {
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            paddingInline: 6,
            paddingBlock: 6,
            lineHeight: "".concat(Math.max((((_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.header) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.heightLayoutHeader) || 56) - 12, 40), "px")
        }
    });
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProLayoutTopNavHeader', function(token) {
        var topNavHeaderToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genTopNavHeaderStyle(topNavHeaderToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/components/WaterMark/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "WaterMark", {
    enumerable: true,
    get: function() {
        return WaterMark;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _interop_require_wildcard = __mako_require__("@swc/helpers/_/_interop_require_wildcard");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _classnames = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/classnames/index.js"));
var _react = /*#__PURE__*/ _interop_require_wildcard._(__mako_require__("node_modules/react/index.js"));
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
/**
 * 返回当前显示设备的物理像素分辨率与CSS像素分辨率之比
 *
 * @param context
 * @see api 有些废弃了，其实类型 CanvasRenderingContext2D
 */ var getPixelRatio = function getPixelRatio(context) {
    if (!context) return 1;
    var backingStore = context.backingStorePixelRatio || context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / backingStore;
};
var WaterMark = function WaterMark(props) {
    var _useToken = (0, _proprovider.useToken)(), token = _useToken.token;
    var children = props.children, style = props.style, className = props.className, markStyle = props.markStyle, markClassName = props.markClassName, _props$zIndex = props.zIndex, zIndex = _props$zIndex === void 0 ? 9 : _props$zIndex, _props$gapX = props.gapX, gapX = _props$gapX === void 0 ? 212 : _props$gapX, _props$gapY = props.gapY, gapY = _props$gapY === void 0 ? 222 : _props$gapY, _props$width = props.width, width = _props$width === void 0 ? 120 : _props$width, _props$height = props.height, height = _props$height === void 0 ? 64 : _props$height, _props$rotate = props.rotate, rotate = _props$rotate === void 0 ? -22 : _props$rotate, image = props.image, offsetLeft = props.offsetLeft, outOffsetTop = props.offsetTop, _props$fontStyle = props.fontStyle, fontStyle = _props$fontStyle === void 0 ? 'normal' : _props$fontStyle, _props$fontWeight = props.fontWeight, fontWeight = _props$fontWeight === void 0 ? 'normal' : _props$fontWeight, _props$fontColor = props.fontColor, fontColor = _props$fontColor === void 0 ? token.colorFill : _props$fontColor, _props$fontSize = props.fontSize, fontSize = _props$fontSize === void 0 ? 16 : _props$fontSize, _props$fontFamily = props.fontFamily, fontFamily = _props$fontFamily === void 0 ? 'sans-serif' : _props$fontFamily, customizePrefixCls = props.prefixCls;
    var _useContext = (0, _react.useContext)(_antd.ConfigProvider.ConfigContext), getPrefixCls = _useContext.getPrefixCls;
    var prefixCls = getPrefixCls('pro-layout-watermark', customizePrefixCls);
    var wrapperCls = (0, _classnames.default)("".concat(prefixCls, "-wrapper"), className);
    var waterMarkCls = (0, _classnames.default)(prefixCls, markClassName);
    var _useState = (0, _react.useState)(''), _useState2 = (0, _slicedToArray.default)(_useState, 2), base64Url = _useState2[0], setBase64Url = _useState2[1];
    (0, _react.useEffect)(function() {
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var ratio = getPixelRatio(ctx);
        var canvasWidth = "".concat((gapX + width) * ratio, "px");
        var canvasHeight = "".concat((gapY + height) * ratio, "px");
        var canvasOffsetLeft = offsetLeft || gapX / 2;
        var canvasOffsetTop = outOffsetTop || gapY / 2;
        canvas.setAttribute('width', canvasWidth);
        canvas.setAttribute('height', canvasHeight);
        if (!ctx) {
            // eslint-disable-next-line no-console
            console.error('当前环境不支持Canvas');
            return;
        }
        // 旋转字符 rotate
        ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
        ctx.rotate(Math.PI / 180 * Number(rotate));
        var markWidth = width * ratio;
        var markHeight = height * ratio;
        var writeContent = function writeContent(contentText) {
            var offsetTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var markSize = Number(fontSize) * ratio;
            ctx.font = "".concat(fontStyle, " normal ").concat(fontWeight, " ").concat(markSize, "px/").concat(markHeight, "px ").concat(fontFamily);
            ctx.fillStyle = fontColor;
            if (Array.isArray(contentText)) contentText === null || contentText === void 0 || contentText.forEach(function(item, index) {
                return ctx.fillText(item, 0, index * markSize + offsetTop);
            });
            else ctx.fillText(contentText, 0, offsetTop ? offsetTop + markSize : 0);
            setBase64Url(canvas.toDataURL());
        };
        if (image) {
            var img = new Image();
            img.crossOrigin = 'anonymous';
            img.referrerPolicy = 'no-referrer';
            img.src = image;
            img.onload = function() {
                ctx.drawImage(img, 0, 0, markWidth, markHeight);
                setBase64Url(canvas.toDataURL());
                if (props.content) {
                    writeContent(props.content, img.height + 8);
                    return;
                }
            };
            return;
        }
        if (props.content) {
            writeContent(props.content);
            return;
        }
    }, [
        gapX,
        gapY,
        offsetLeft,
        outOffsetTop,
        rotate,
        fontStyle,
        fontWeight,
        width,
        height,
        fontFamily,
        fontColor,
        image,
        props.content,
        fontSize
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        style: (0, _objectSpread2.default)({
            position: 'relative'
        }, style),
        className: wrapperCls,
        children: [
            children,
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                className: waterMarkCls,
                style: (0, _objectSpread2.default)((0, _objectSpread2.default)({
                    zIndex: zIndex,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: "".concat(gapX + width, "px"),
                    pointerEvents: 'none',
                    backgroundRepeat: 'repeat'
                }, base64Url ? {
                    backgroundImage: "url('".concat(base64Url, "')")
                } : {}), markStyle)
            })
        ]
    });
};

},
"node_modules/@ant-design/pro-layout/es/context/RouteContext.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "RouteContext", {
    enumerable: true,
    get: function() {
        return RouteContext;
    }
});
var _react = __mako_require__("node_modules/react/index.js");
var RouteContext = /*#__PURE__*/ (0, _react.createContext)({});

},
"node_modules/@ant-design/pro-layout/es/defaultSettings.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "defaultSettings", {
    enumerable: true,
    get: function() {
        return defaultSettings;
    }
});
var defaultSettings = {
    navTheme: 'light',
    layout: 'side',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: true,
    iconfontUrl: '',
    colorPrimary: '#1677FF',
    splitMenus: false
};

},
"node_modules/@ant-design/pro-layout/es/getPageTitle.js": function (module, exports, __mako_require__){
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
    getPageTitle: function() {
        return getPageTitle;
    },
    getPageTitleInfo: function() {
        return getPageTitleInfo;
    },
    matchParamsPath: function() {
        return matchParamsPath;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _toConsumableArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"));
var _pathtoregexp = __mako_require__("node_modules/path-to-regexp/dist/index.js");
var matchParamsPath = function matchParamsPath(pathname, breadcrumb, breadcrumbMap) {
    // Internal logic use breadcrumbMap to ensure the order
    // 内部逻辑使用 breadcrumbMap 来确保查询顺序
    if (breadcrumbMap) {
        var pathKey = (0, _toConsumableArray.default)(breadcrumbMap.keys()).find(function(key) {
            try {
                if (key.startsWith('http')) return false;
                return (0, _pathtoregexp.match)(key)(pathname);
            } catch (error) {
                console.log('key', key, error);
                return false;
            }
        });
        if (pathKey) return breadcrumbMap.get(pathKey);
    }
    // External uses use breadcrumb
    // 外部用户使用 breadcrumb 参数
    if (breadcrumb) {
        var _pathKey = Object.keys(breadcrumb).find(function(key) {
            try {
                if (key !== null && key !== void 0 && key.startsWith('http')) return false;
                return (0, _pathtoregexp.match)(key)(pathname);
            } catch (error) {
                console.log('key', key, error);
                return false;
            }
        });
        if (_pathKey) return breadcrumb[_pathKey];
    }
    return {
        path: ''
    };
};
var getPageTitleInfo = function getPageTitleInfo(props, ignoreTitle) {
    var _props$pathname = props.pathname, pathname = _props$pathname === void 0 ? '/' : _props$pathname, breadcrumb = props.breadcrumb, breadcrumbMap = props.breadcrumbMap, formatMessage = props.formatMessage, title = props.title, _props$menu = props.menu, menu = _props$menu === void 0 ? {
        locale: false
    } : _props$menu;
    var pageTitle = ignoreTitle ? '' : title || '';
    var currRouterData = matchParamsPath(pathname, breadcrumb, breadcrumbMap);
    if (!currRouterData) return {
        title: pageTitle,
        id: '',
        pageName: pageTitle
    };
    var pageName = currRouterData.name;
    if (menu.locale !== false && currRouterData.locale && formatMessage) pageName = formatMessage({
        id: currRouterData.locale || '',
        defaultMessage: currRouterData.name
    });
    if (!pageName) return {
        title: pageTitle,
        id: currRouterData.locale || '',
        pageName: pageTitle
    };
    if (ignoreTitle || !title) return {
        title: pageName,
        id: currRouterData.locale || '',
        pageName: pageName
    };
    return {
        title: "".concat(pageName, " - ").concat(title),
        id: currRouterData.locale || '',
        pageName: pageName
    };
};
var getPageTitle = function getPageTitle(props, ignoreTitle) {
    return getPageTitleInfo(props, ignoreTitle).title;
};

},
"node_modules/@ant-design/pro-layout/es/index.js": function (module, exports, __mako_require__){
// 兼容代码-----------
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
    DefaultFooter: function() {
        return _Footer.DefaultFooter;
    },
    DefaultHeader: function() {
        return _Header.DefaultHeader;
    },
    FooterToolbar: function() {
        return _FooterToolbar.FooterToolbar;
    },
    GridContent: function() {
        return _GridContent.GridContent;
    },
    PageContainer: function() {
        return _PageContainer.PageContainer;
    },
    PageHeader: function() {
        return _PageHeader.PageHeader;
    },
    PageLoading: function() {
        return _PageLoading.PageLoading;
    },
    ProBreadcrumb: function() {
        return _PageContainer.ProBreadcrumb;
    },
    ProLayout: function() {
        return _ProLayout.ProLayout;
    },
    ProPageHeader: function() {
        return _PageContainer.ProPageHeader;
    },
    RouteContext: function() {
        return _RouteContext.RouteContext;
    },
    SettingDrawer: function() {
        return _SettingDrawer.SettingDrawer;
    },
    TopNavHeader: function() {
        return _TopNavHeader.TopNavHeader;
    },
    WaterMark: function() {
        return _WaterMark.WaterMark;
    },
    default: function() {
        return _default;
    },
    getMenuData: function() {
        return _getMenuData.getMenuData;
    },
    getPageTitle: function() {
        return _getPageTitle.getPageTitle;
    }
});
var _export_star = __mako_require__("@swc/helpers/_/_export_star");
__mako_require__("node_modules/antd/es/anchor/style/index.js");
__mako_require__("node_modules/antd/es/avatar/style/index.js");
__mako_require__("node_modules/antd/es/breadcrumb/style/index.js");
__mako_require__("node_modules/antd/es/divider/style/index.js");
__mako_require__("node_modules/antd/es/drawer/style/index.js");
__mako_require__("node_modules/antd/es/layout/style/index.js");
__mako_require__("node_modules/antd/es/list/style/index.js");
__mako_require__("node_modules/antd/es/menu/style/index.js");
__mako_require__("node_modules/antd/es/message/style/index.js");
__mako_require__("node_modules/antd/es/popover/style/index.js");
__mako_require__("node_modules/antd/es/select/style/index.js");
__mako_require__("node_modules/antd/es/space/style/index.js");
__mako_require__("node_modules/antd/es/spin/style/index.js");
__mako_require__("node_modules/antd/es/switch/style/index.js");
__mako_require__("node_modules/antd/es/tabs/style/index.js");
__mako_require__("node_modules/antd/es/tooltip/style/index.js");
__mako_require__("node_modules/antd/es/typography/style/index.js");
var _FooterToolbar = __mako_require__("node_modules/@ant-design/pro-layout/es/components/FooterToolbar/index.js");
var _GridContent = __mako_require__("node_modules/@ant-design/pro-layout/es/components/GridContent/index.js");
var _PageContainer = __mako_require__("node_modules/@ant-design/pro-layout/es/components/PageContainer/index.js");
var _PageHeader = __mako_require__("node_modules/@ant-design/pro-layout/es/components/PageHeader/index.js");
var _Footer = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Footer.js");
var _Header = __mako_require__("node_modules/@ant-design/pro-layout/es/components/Header/index.js");
var _PageLoading = __mako_require__("node_modules/@ant-design/pro-layout/es/components/PageLoading/index.js");
var _SettingDrawer = __mako_require__("node_modules/@ant-design/pro-layout/es/components/SettingDrawer/index.js");
var _TopNavHeader = __mako_require__("node_modules/@ant-design/pro-layout/es/components/TopNavHeader/index.js");
var _WaterMark = __mako_require__("node_modules/@ant-design/pro-layout/es/components/WaterMark/index.js");
var _RouteContext = __mako_require__("node_modules/@ant-design/pro-layout/es/context/RouteContext.js");
var _getPageTitle = __mako_require__("node_modules/@ant-design/pro-layout/es/getPageTitle.js");
var _ProLayout = __mako_require__("node_modules/@ant-design/pro-layout/es/ProLayout.js");
var _getMenuData = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/getMenuData.js");
_export_star._(__mako_require__("node_modules/@ant-design/pro-layout/es/components/Help/index.js"), exports);
var _default = _ProLayout.ProLayout;

},
"node_modules/@ant-design/pro-layout/es/locales/en-US.js": function (module, exports, __mako_require__){
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
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _settingDrawer = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/en-US/settingDrawer.js"));
var _default = (0, _objectSpread2.default)({}, _settingDrawer.default);

},
"node_modules/@ant-design/pro-layout/es/locales/en-US/settingDrawer.js": function (module, exports, __mako_require__){
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
var _default = {
    'app.setting.pagestyle': 'Page style setting',
    'app.setting.pagestyle.dark': 'Dark Menu style',
    'app.setting.pagestyle.light': 'Light Menu style',
    'app.setting.pagestyle.realdark': 'Dark style (Beta)',
    'app.setting.content-width': 'Content Width',
    'app.setting.content-width.fixed': 'Fixed',
    'app.setting.content-width.fluid': 'Fluid',
    'app.setting.themecolor': 'Theme Color',
    'app.setting.themecolor.dust': 'Dust Red',
    'app.setting.themecolor.volcano': 'Volcano',
    'app.setting.themecolor.sunset': 'Sunset Orange',
    'app.setting.themecolor.cyan': 'Cyan',
    'app.setting.themecolor.green': 'Polar Green',
    'app.setting.themecolor.techBlue': 'Tech Blue (default)',
    'app.setting.themecolor.daybreak': 'Daybreak Blue',
    'app.setting.themecolor.geekblue': 'Geek Blue',
    'app.setting.themecolor.purple': 'Golden Purple',
    'app.setting.sidermenutype': 'SideMenu Type',
    'app.setting.sidermenutype-sub': 'Classic',
    'app.setting.sidermenutype-group': 'Grouping',
    'app.setting.navigationmode': 'Navigation Mode',
    'app.setting.regionalsettings': 'Regional Settings',
    'app.setting.regionalsettings.header': 'Header',
    'app.setting.regionalsettings.menu': 'Menu',
    'app.setting.regionalsettings.footer': 'Footer',
    'app.setting.regionalsettings.menuHeader': 'Menu Header',
    'app.setting.sidemenu': 'Side Menu Layout',
    'app.setting.topmenu': 'Top Menu Layout',
    'app.setting.mixmenu': 'Mix Menu Layout',
    'app.setting.splitMenus': 'Split Menus',
    'app.setting.fixedheader': 'Fixed Header',
    'app.setting.fixedsidebar': 'Fixed Sidebar',
    'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
    'app.setting.hideheader': 'Hidden Header when scrolling',
    'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
    'app.setting.othersettings': 'Other Settings',
    'app.setting.weakmode': 'Weak Mode',
    'app.setting.copy': 'Copy Setting',
    'app.setting.loading': 'Loading theme',
    'app.setting.copyinfo': 'copy success，please replace defaultSettings in src/models/setting.js',
    'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify'
};

},
"node_modules/@ant-design/pro-layout/es/locales/index.js": function (module, exports, __mako_require__){
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
    gLocaleObject: function() {
        return gLocaleObject;
    },
    getLanguage: function() {
        return getLanguage;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _enUS = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/en-US.js"));
var _itIT = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/it-IT.js"));
var _koKR = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/ko-KR.js"));
var _zhCN = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/zh-CN.js"));
var _zhTW = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/zh-TW.js"));
var locales = {
    'zh-CN': _zhCN.default,
    'zh-TW': _zhTW.default,
    'en-US': _enUS.default,
    'it-IT': _itIT.default,
    'ko-KR': _koKR.default
};
var getLanguage = function getLanguage() {
    // support ssr
    if (!(0, _proutils.isBrowser)()) return 'zh-CN';
    var lang = window.localStorage.getItem('umi_locale');
    return lang || window.g_locale || navigator.language;
};
var gLocaleObject = function gLocaleObject() {
    var gLocale = getLanguage();
    return locales[gLocale] || locales['zh-CN'];
};

},
"node_modules/@ant-design/pro-layout/es/locales/it-IT.js": function (module, exports, __mako_require__){
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
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _settingDrawer = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/it-IT/settingDrawer.js"));
var _default = (0, _objectSpread2.default)({}, _settingDrawer.default);

},
"node_modules/@ant-design/pro-layout/es/locales/it-IT/settingDrawer.js": function (module, exports, __mako_require__){
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
var _default = {
    'app.setting.pagestyle': 'Impostazioni di stile',
    'app.setting.pagestyle.dark': 'Tema scuro',
    'app.setting.pagestyle.light': 'Tema chiaro',
    'app.setting.content-width': 'Largezza contenuto',
    'app.setting.content-width.fixed': 'Fissa',
    'app.setting.content-width.fluid': 'Fluida',
    'app.setting.themecolor': 'Colore del tema',
    'app.setting.themecolor.dust': 'Rosso polvere',
    'app.setting.themecolor.volcano': 'Vulcano',
    'app.setting.themecolor.sunset': 'Arancione tramonto',
    'app.setting.themecolor.cyan': 'Ciano',
    'app.setting.themecolor.green': 'Verde polare',
    'app.setting.themecolor.techBlue': 'Tech Blu (default)',
    'app.setting.themecolor.daybreak': 'Blu cielo mattutino',
    'app.setting.themecolor.geekblue': 'Blu geek',
    'app.setting.themecolor.purple': 'Viola dorato',
    'app.setting.navigationmode': 'Modalità di navigazione',
    'app.setting.sidemenu': 'Menu laterale',
    'app.setting.topmenu': 'Menu in testata',
    'app.setting.mixmenu': 'Menu misto',
    'app.setting.splitMenus': 'Menu divisi',
    'app.setting.fixedheader': 'Testata fissa',
    'app.setting.fixedsidebar': 'Menu laterale fisso',
    'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
    'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
    'app.setting.hideheader.hint': 'Solo se abilitato Nascondi testata durante lo scorrimento',
    'app.setting.othersettings': 'Altre impostazioni',
    'app.setting.weakmode': 'Inverti colori',
    'app.setting.copy': 'Copia impostazioni',
    'app.setting.loading': 'Carico tema...',
    'app.setting.copyinfo': 'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
    'app.setting.production.hint': 'Questo pannello è visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente'
};

},
"node_modules/@ant-design/pro-layout/es/locales/ko-KR.js": function (module, exports, __mako_require__){
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
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _settingDrawer = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/ko-KR/settingDrawer.js"));
var _default = (0, _objectSpread2.default)({}, _settingDrawer.default);

},
"node_modules/@ant-design/pro-layout/es/locales/ko-KR/settingDrawer.js": function (module, exports, __mako_require__){
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
var _default = {
    'app.setting.pagestyle': '스타일 설정',
    'app.setting.pagestyle.dark': '다크 모드',
    'app.setting.pagestyle.light': '라이트 모드',
    'app.setting.content-width': '컨텐츠 너비',
    'app.setting.content-width.fixed': '고정',
    'app.setting.content-width.fluid': '흐름',
    'app.setting.themecolor': '테마 색상',
    'app.setting.themecolor.dust': 'Dust Red',
    'app.setting.themecolor.volcano': 'Volcano',
    'app.setting.themecolor.sunset': 'Sunset Orange',
    'app.setting.themecolor.cyan': 'Cyan',
    'app.setting.themecolor.green': 'Polar Green',
    'app.setting.themecolor.techBlue': 'Tech Blu (default)',
    'app.setting.themecolor.daybreak': 'Daybreak Blue',
    'app.setting.themecolor.geekblue': 'Geek Blue',
    'app.setting.themecolor.purple': 'Golden Purple',
    'app.setting.navigationmode': '네비게이션 모드',
    'app.setting.regionalsettings': '영역별 설정',
    'app.setting.regionalsettings.header': '헤더',
    'app.setting.regionalsettings.menu': '메뉴',
    'app.setting.regionalsettings.footer': '바닥글',
    'app.setting.regionalsettings.menuHeader': '메뉴 헤더',
    'app.setting.sidemenu': '메뉴 사이드 배치',
    'app.setting.topmenu': '메뉴 상단 배치',
    'app.setting.mixmenu': '혼합형 배치',
    'app.setting.splitMenus': '메뉴 분리',
    'app.setting.fixedheader': '헤더 고정',
    'app.setting.fixedsidebar': '사이드바 고정',
    'app.setting.fixedsidebar.hint': "'메뉴 사이드 배치'를 선택했을 때 동작함",
    'app.setting.hideheader': '스크롤 중 헤더 감추기',
    'app.setting.hideheader.hint': "'헤더 감추기 옵션'을 선택했을 때 동작함",
    'app.setting.othersettings': '다른 설정',
    'app.setting.weakmode': '고대비 모드',
    'app.setting.copy': '설정값 복사',
    'app.setting.loading': '테마 로딩 중',
    'app.setting.copyinfo': '복사 성공. src/models/settings.js에 있는 defaultSettings를 교체해 주세요.',
    'app.setting.production.hint': '설정 판넬은 개발 환경에서만 보여집니다. 직접 수동으로 변경바랍니다.'
};

},
"node_modules/@ant-design/pro-layout/es/locales/zh-CN.js": function (module, exports, __mako_require__){
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
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _settingDrawer = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/zh-CN/settingDrawer.js"));
var _default = (0, _objectSpread2.default)({}, _settingDrawer.default);

},
"node_modules/@ant-design/pro-layout/es/locales/zh-CN/settingDrawer.js": function (module, exports, __mako_require__){
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
var _default = {
    'app.setting.pagestyle': '整体风格设置',
    'app.setting.pagestyle.dark': '暗色菜单风格',
    'app.setting.pagestyle.light': '亮色菜单风格',
    'app.setting.pagestyle.realdark': '暗色风格(实验功能)',
    'app.setting.content-width': '内容区域宽度',
    'app.setting.content-width.fixed': '定宽',
    'app.setting.content-width.fluid': '流式',
    'app.setting.themecolor': '主题色',
    'app.setting.themecolor.dust': '薄暮',
    'app.setting.themecolor.volcano': '火山',
    'app.setting.themecolor.sunset': '日暮',
    'app.setting.themecolor.cyan': '明青',
    'app.setting.themecolor.green': '极光绿',
    'app.setting.themecolor.techBlue': '科技蓝（默认）',
    'app.setting.themecolor.daybreak': '拂晓',
    'app.setting.themecolor.geekblue': '极客蓝',
    'app.setting.themecolor.purple': '酱紫',
    'app.setting.navigationmode': '导航模式',
    'app.setting.sidermenutype': '侧边菜单类型',
    'app.setting.sidermenutype-sub': '经典模式',
    'app.setting.sidermenutype-group': '分组模式',
    'app.setting.regionalsettings': '内容区域',
    'app.setting.regionalsettings.header': '顶栏',
    'app.setting.regionalsettings.menu': '菜单',
    'app.setting.regionalsettings.footer': '页脚',
    'app.setting.regionalsettings.menuHeader': '菜单头',
    'app.setting.sidemenu': '侧边菜单布局',
    'app.setting.topmenu': '顶部菜单布局',
    'app.setting.mixmenu': '混合菜单布局',
    'app.setting.splitMenus': '自动分割菜单',
    'app.setting.fixedheader': '固定 Header',
    'app.setting.fixedsidebar': '固定侧边菜单',
    'app.setting.fixedsidebar.hint': '侧边菜单布局时可配置',
    'app.setting.hideheader': '下滑时隐藏 Header',
    'app.setting.hideheader.hint': '固定 Header 时可配置',
    'app.setting.othersettings': '其他设置',
    'app.setting.weakmode': '色弱模式',
    'app.setting.copy': '拷贝设置',
    'app.setting.loading': '正在加载主题',
    'app.setting.copyinfo': '拷贝成功，请到 src/defaultSettings.js 中替换默认配置',
    'app.setting.production.hint': '配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改配置文件'
};

},
"node_modules/@ant-design/pro-layout/es/locales/zh-TW.js": function (module, exports, __mako_require__){
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
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _settingDrawer = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@ant-design/pro-layout/es/locales/zh-TW/settingDrawer.js"));
var _default = (0, _objectSpread2.default)({}, _settingDrawer.default);

},
"node_modules/@ant-design/pro-layout/es/locales/zh-TW/settingDrawer.js": function (module, exports, __mako_require__){
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
var _default = {
    'app.setting.pagestyle': '整體風格設置',
    'app.setting.pagestyle.dark': '暗色菜單風格',
    'app.setting.pagestyle.realdark': '暗色風格(实验功能)',
    'app.setting.pagestyle.light': '亮色菜單風格',
    'app.setting.content-width': '內容區域寬度',
    'app.setting.content-width.fixed': '定寬',
    'app.setting.content-width.fluid': '流式',
    'app.setting.themecolor': '主題色',
    'app.setting.themecolor.dust': '薄暮',
    'app.setting.themecolor.volcano': '火山',
    'app.setting.themecolor.sunset': '日暮',
    'app.setting.themecolor.cyan': '明青',
    'app.setting.themecolor.green': '極光綠',
    'app.setting.themecolor.techBlue': '科技蓝（默認）',
    'app.setting.themecolor.daybreak': '拂曉藍',
    'app.setting.themecolor.geekblue': '極客藍',
    'app.setting.themecolor.purple': '醬紫',
    'app.setting.navigationmode': '導航模式',
    'app.setting.sidemenu': '側邊菜單布局',
    'app.setting.topmenu': '頂部菜單布局',
    'app.setting.mixmenu': '混合菜單布局',
    'app.setting.splitMenus': '自动分割菜单',
    'app.setting.fixedheader': '固定 Header',
    'app.setting.fixedsidebar': '固定側邊菜單',
    'app.setting.fixedsidebar.hint': '側邊菜單布局時可配置',
    'app.setting.hideheader': '下滑時隱藏 Header',
    'app.setting.hideheader.hint': '固定 Header 時可配置',
    'app.setting.othersettings': '其他設置',
    'app.setting.weakmode': '色弱模式',
    'app.setting.copy': '拷貝設置',
    'app.setting.loading': '正在加載主題',
    'app.setting.copyinfo': '拷貝成功，請到 src/defaultSettings.js 中替換默認配置',
    'app.setting.production.hint': '配置欄只在開發環境用於預覽，生產環境不會展現，請拷貝後手動修改配置文件'
};

},
"node_modules/@ant-design/pro-layout/es/style/index.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useStyle", {
    enumerable: true,
    get: function() {
        return useStyle;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _defineProperty = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/defineProperty.js"));
var _proprovider = __mako_require__("node_modules/@ant-design/pro-provider/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
const process = __mako_require__("node_modules/node-libs-browser-okam/polyfill/process.js");
var getVersion = function getVersion() {
    var _process;
    if (typeof process === 'undefined') return _antd.version;
    return ((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.ANTD_VERSION) || _antd.version;
};
/**
 * 主要区别：
 * 需要手动引入 import 'antd/dist/antd.css';
 * 需要重置 menu 的样式
 * @param token
 * @returns
 */ var compatibleStyle = function compatibleStyle(token) {
    var _getVersion, _token$layout, _token$layout2, _token$layout3, _token$layout4, _token$layout5, _token$layout6, _token$layout7, _token$layout8, _token$layout9, _token$layout10, _token$layout11, _token$layout12, _token$layout13, _token$layout14, _token$layout15, _token$layout16, _token$layout17, _token$layout18, _token$layout19, _$concat6, _token$layout20, _token$layout21, _token$layout22, _token$layout23, _token$layout24, _token$layout25, _token$layout26, _token$layout27, _token$layout28, _token$layout29, _token$layout30;
    if ((_getVersion = getVersion()) !== null && _getVersion !== void 0 && _getVersion.startsWith('5')) return {};
    return (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, token.componentCls, (0, _defineProperty.default)((0, _defineProperty.default)({
        width: '100%',
        height: '100%'
    }, "".concat(token.proComponentsCls, "-base-menu"), (_$concat6 = {
        color: (_token$layout = token.layout) === null || _token$layout === void 0 || (_token$layout = _token$layout.sider) === null || _token$layout === void 0 ? void 0 : _token$layout.colorTextMenu
    }, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)(_$concat6, "".concat(token.antCls, "-menu-sub"), {
        backgroundColor: 'transparent!important',
        color: (_token$layout2 = token.layout) === null || _token$layout2 === void 0 || (_token$layout2 = _token$layout2.sider) === null || _token$layout2 === void 0 ? void 0 : _token$layout2.colorTextMenu
    }), "& ".concat(token.antCls, "-layout"), {
        backgroundColor: 'transparent',
        width: '100%'
    }), "".concat(token.antCls, "-menu-submenu-expand-icon, ").concat(token.antCls, "-menu-submenu-arrow"), {
        color: 'inherit'
    }), "&".concat(token.antCls, "-menu"), (0, _defineProperty.default)((0, _defineProperty.default)({
        color: (_token$layout3 = token.layout) === null || _token$layout3 === void 0 || (_token$layout3 = _token$layout3.sider) === null || _token$layout3 === void 0 ? void 0 : _token$layout3.colorTextMenu
    }, "".concat(token.antCls, "-menu-item"), {
        '*': {
            transition: 'none !important'
        }
    }), "".concat(token.antCls, "-menu-item a"), {
        color: 'inherit'
    })), "&".concat(token.antCls, "-menu-inline"), (0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-selected::after,").concat(token.antCls, "-menu-item-selected::after"), {
        display: 'none'
    })), "".concat(token.antCls, "-menu-sub ").concat(token.antCls, "-menu-inline"), {
        backgroundColor: 'transparent!important'
    }), "".concat(token.antCls, "-menu-item:active, \n        ").concat(token.antCls, "-menu-submenu-title:active"), {
        backgroundColor: 'transparent!important'
    }), "&".concat(token.antCls, "-menu-light"), (0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-active, \n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0, _defineProperty.default)({
        color: (_token$layout4 = token.layout) === null || _token$layout4 === void 0 || (_token$layout4 = _token$layout4.sider) === null || _token$layout4 === void 0 ? void 0 : _token$layout4.colorTextMenuActive,
        borderRadius: token.borderRadius
    }, "".concat(token.antCls, "-menu-submenu-arrow"), {
        color: (_token$layout5 = token.layout) === null || _token$layout5 === void 0 || (_token$layout5 = _token$layout5.sider) === null || _token$layout5 === void 0 ? void 0 : _token$layout5.colorTextMenuActive
    }))), "&".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-horizontal)"), (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item-selected"), {
        backgroundColor: (_token$layout6 = token.layout) === null || _token$layout6 === void 0 || (_token$layout6 = _token$layout6.sider) === null || _token$layout6 === void 0 ? void 0 : _token$layout6.colorBgMenuItemSelected,
        borderRadius: token.borderRadius
    }), "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0, _defineProperty.default)({
        color: (_token$layout7 = token.layout) === null || _token$layout7 === void 0 || (_token$layout7 = _token$layout7.sider) === null || _token$layout7 === void 0 ? void 0 : _token$layout7.colorTextMenuActive,
        borderRadius: token.borderRadius,
        backgroundColor: "".concat((_token$layout8 = token.layout) === null || _token$layout8 === void 0 || (_token$layout8 = _token$layout8.header) === null || _token$layout8 === void 0 ? void 0 : _token$layout8.colorBgMenuItemHover, " !important")
    }, "".concat(token.antCls, "-menu-submenu-arrow"), {
        color: (_token$layout9 = token.layout) === null || _token$layout9 === void 0 || (_token$layout9 = _token$layout9.sider) === null || _token$layout9 === void 0 ? void 0 : _token$layout9.colorTextMenuActive
    }))), "".concat(token.antCls, "-menu-item-selected"), {
        color: (_token$layout10 = token.layout) === null || _token$layout10 === void 0 || (_token$layout10 = _token$layout10.sider) === null || _token$layout10 === void 0 ? void 0 : _token$layout10.colorTextMenuSelected
    }), (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)(_$concat6, "".concat(token.antCls, "-menu-submenu-selected"), {
        color: (_token$layout11 = token.layout) === null || _token$layout11 === void 0 || (_token$layout11 = _token$layout11.sider) === null || _token$layout11 === void 0 ? void 0 : _token$layout11.colorTextMenuSelected
    }), "&".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-inline) ").concat(token.antCls, "-menu-submenu-open"), {
        color: (_token$layout12 = token.layout) === null || _token$layout12 === void 0 || (_token$layout12 = _token$layout12.sider) === null || _token$layout12 === void 0 ? void 0 : _token$layout12.colorTextMenuSelected
    }), "&".concat(token.antCls, "-menu-vertical"), (0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-submenu-selected"), {
        borderRadius: token.borderRadius,
        color: (_token$layout13 = token.layout) === null || _token$layout13 === void 0 || (_token$layout13 = _token$layout13.sider) === null || _token$layout13 === void 0 ? void 0 : _token$layout13.colorTextMenuSelected
    })), "".concat(token.antCls, "-menu-submenu:hover > ").concat(token.antCls, "-menu-submenu-title > ").concat(token.antCls, "-menu-submenu-arrow"), {
        color: (_token$layout14 = token.layout) === null || _token$layout14 === void 0 || (_token$layout14 = _token$layout14.sider) === null || _token$layout14 === void 0 ? void 0 : _token$layout14.colorTextMenuActive
    }), "&".concat(token.antCls, "-menu-horizontal"), (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item:hover,\n          ").concat(token.antCls, "-menu-submenu:hover,\n          ").concat(token.antCls, "-menu-item-active,\n          ").concat(token.antCls, "-menu-submenu-active"), {
        borderRadius: 4,
        transition: 'none',
        color: (_token$layout15 = token.layout) === null || _token$layout15 === void 0 || (_token$layout15 = _token$layout15.header) === null || _token$layout15 === void 0 ? void 0 : _token$layout15.colorTextMenuActive,
        backgroundColor: "".concat((_token$layout16 = token.layout) === null || _token$layout16 === void 0 || (_token$layout16 = _token$layout16.header) === null || _token$layout16 === void 0 ? void 0 : _token$layout16.colorBgMenuItemHover, " !important")
    }), "".concat(token.antCls, "-menu-item-open,\n          ").concat(token.antCls, "-menu-submenu-open,\n          ").concat(token.antCls, "-menu-item-selected,\n          ").concat(token.antCls, "-menu-submenu-selected"), (0, _defineProperty.default)({
        backgroundColor: (_token$layout17 = token.layout) === null || _token$layout17 === void 0 || (_token$layout17 = _token$layout17.header) === null || _token$layout17 === void 0 ? void 0 : _token$layout17.colorBgMenuItemSelected,
        borderRadius: token.borderRadius,
        transition: 'none',
        color: "".concat((_token$layout18 = token.layout) === null || _token$layout18 === void 0 || (_token$layout18 = _token$layout18.header) === null || _token$layout18 === void 0 ? void 0 : _token$layout18.colorTextMenuSelected, " !important")
    }, "".concat(token.antCls, "-menu-submenu-arrow"), {
        color: "".concat((_token$layout19 = token.layout) === null || _token$layout19 === void 0 || (_token$layout19 = _token$layout19.header) === null || _token$layout19 === void 0 ? void 0 : _token$layout19.colorTextMenuSelected, " !important")
    })), "> ".concat(token.antCls, "-menu-item, > ").concat(token.antCls, "-menu-submenu"), {
        paddingInline: 16,
        marginInline: 4
    }), "> ".concat(token.antCls, "-menu-item::after, > ").concat(token.antCls, "-menu-submenu::after"), {
        display: 'none'
    })))), "".concat(token.proComponentsCls, "-top-nav-header-base-menu"), (0, _defineProperty.default)((0, _defineProperty.default)({}, "&".concat(token.antCls, "-menu"), (0, _defineProperty.default)({
        color: (_token$layout20 = token.layout) === null || _token$layout20 === void 0 || (_token$layout20 = _token$layout20.header) === null || _token$layout20 === void 0 ? void 0 : _token$layout20.colorTextMenu
    }, "".concat(token.antCls, "-menu-item a"), {
        color: 'inherit'
    })), "&".concat(token.antCls, "-menu-light"), (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item:hover, \n            ").concat(token.antCls, "-menu-item-active,\n            ").concat(token.antCls, "-menu-submenu-active, \n            ").concat(token.antCls, "-menu-submenu-title:hover"), (0, _defineProperty.default)({
        color: (_token$layout21 = token.layout) === null || _token$layout21 === void 0 || (_token$layout21 = _token$layout21.header) === null || _token$layout21 === void 0 ? void 0 : _token$layout21.colorTextMenuActive,
        borderRadius: token.borderRadius,
        transition: 'none',
        backgroundColor: (_token$layout22 = token.layout) === null || _token$layout22 === void 0 || (_token$layout22 = _token$layout22.header) === null || _token$layout22 === void 0 ? void 0 : _token$layout22.colorBgMenuItemSelected
    }, "".concat(token.antCls, "-menu-submenu-arrow"), {
        color: (_token$layout23 = token.layout) === null || _token$layout23 === void 0 || (_token$layout23 = _token$layout23.header) === null || _token$layout23 === void 0 ? void 0 : _token$layout23.colorTextMenuActive
    })), "".concat(token.antCls, "-menu-item-selected"), {
        color: (_token$layout24 = token.layout) === null || _token$layout24 === void 0 || (_token$layout24 = _token$layout24.header) === null || _token$layout24 === void 0 ? void 0 : _token$layout24.colorTextMenuSelected,
        borderRadius: token.borderRadius,
        backgroundColor: (_token$layout25 = token.layout) === null || _token$layout25 === void 0 || (_token$layout25 = _token$layout25.header) === null || _token$layout25 === void 0 ? void 0 : _token$layout25.colorBgMenuItemSelected
    })))), "".concat(token.antCls, "-menu-sub").concat(token.antCls, "-menu-inline"), {
        backgroundColor: 'transparent!important'
    }), "".concat(token.antCls, "-menu-submenu-popup"), (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({
        backgroundColor: 'rgba(255, 255, 255, 0.42)',
        '-webkit-backdrop-filter': 'blur(8px)',
        backdropFilter: 'blur(8px)'
    }, "".concat(token.antCls, "-menu"), (0, _defineProperty.default)({
        background: 'transparent !important',
        backgroundColor: 'transparent !important'
    }, "".concat(token.antCls, "-menu-item:active, \n        ").concat(token.antCls, "-menu-submenu-title:active"), {
        backgroundColor: 'transparent!important'
    })), "".concat(token.antCls, "-menu-item-selected"), {
        color: (_token$layout26 = token.layout) === null || _token$layout26 === void 0 || (_token$layout26 = _token$layout26.sider) === null || _token$layout26 === void 0 ? void 0 : _token$layout26.colorTextMenuSelected
    }), "".concat(token.antCls, "-menu-submenu-selected"), {
        color: (_token$layout27 = token.layout) === null || _token$layout27 === void 0 || (_token$layout27 = _token$layout27.sider) === null || _token$layout27 === void 0 ? void 0 : _token$layout27.colorTextMenuSelected
    }), "".concat(token.antCls, "-menu:not(").concat(token.antCls, "-menu-horizontal)"), (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.antCls, "-menu-item-selected"), {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        borderRadius: token.borderRadius,
        color: (_token$layout28 = token.layout) === null || _token$layout28 === void 0 || (_token$layout28 = _token$layout28.sider) === null || _token$layout28 === void 0 ? void 0 : _token$layout28.colorTextMenuSelected
    }), "".concat(token.antCls, "-menu-item:hover, \n          ").concat(token.antCls, "-menu-item-active,\n          ").concat(token.antCls, "-menu-submenu-title:hover"), (0, _defineProperty.default)({
        color: (_token$layout29 = token.layout) === null || _token$layout29 === void 0 || (_token$layout29 = _token$layout29.sider) === null || _token$layout29 === void 0 ? void 0 : _token$layout29.colorTextMenuActive,
        borderRadius: token.borderRadius
    }, "".concat(token.antCls, "-menu-submenu-arrow"), {
        color: (_token$layout30 = token.layout) === null || _token$layout30 === void 0 || (_token$layout30 = _token$layout30.sider) === null || _token$layout30 === void 0 ? void 0 : _token$layout30.colorTextMenuActive
    }))));
};
var genProLayoutStyle = function genProLayoutStyle(token) {
    var _token$layout31, _token$layout32, _token$layout33, _token$layout34;
    return (0, _defineProperty.default)((0, _defineProperty.default)({}, "".concat(token.antCls, "-layout"), {
        backgroundColor: 'transparent !important'
    }), token.componentCls, (0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)((0, _defineProperty.default)({}, "& ".concat(token.antCls, "-layout"), {
        display: 'flex',
        backgroundColor: 'transparent',
        width: '100%'
    }), "".concat(token.componentCls, "-content"), {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: ((_token$layout31 = token.layout) === null || _token$layout31 === void 0 || (_token$layout31 = _token$layout31.pageContainer) === null || _token$layout31 === void 0 ? void 0 : _token$layout31.colorBgPageContainer) || 'transparent',
        position: 'relative',
        paddingBlock: (_token$layout32 = token.layout) === null || _token$layout32 === void 0 || (_token$layout32 = _token$layout32.pageContainer) === null || _token$layout32 === void 0 ? void 0 : _token$layout32.paddingBlockPageContainerContent,
        paddingInline: (_token$layout33 = token.layout) === null || _token$layout33 === void 0 || (_token$layout33 = _token$layout33.pageContainer) === null || _token$layout33 === void 0 ? void 0 : _token$layout33.paddingInlinePageContainerContent,
        '&-has-page-container': {
            padding: 0
        }
    }), "".concat(token.componentCls, "-container"), {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        minHeight: 0,
        backgroundColor: 'transparent'
    }), "".concat(token.componentCls, "-bg-list"), {
        pointerEvents: 'none',
        position: 'fixed',
        overflow: 'hidden',
        insetBlockStart: 0,
        insetInlineStart: 0,
        zIndex: 0,
        height: '100%',
        width: '100%',
        background: (_token$layout34 = token.layout) === null || _token$layout34 === void 0 ? void 0 : _token$layout34.bgLayout
    }));
};
function useStyle(prefixCls) {
    return (0, _proprovider.useStyle)('ProLayout', function(token) {
        var proLayoutToken = (0, _objectSpread2.default)((0, _objectSpread2.default)({}, token), {}, {
            componentCls: ".".concat(prefixCls)
        });
        return [
            genProLayoutStyle(proLayoutToken),
            compatibleStyle(proLayoutToken)
        ];
    });
}

},
"node_modules/@ant-design/pro-layout/es/utils/getBreadcrumbProps.js": function (module, exports, __mako_require__){
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
    genBreadcrumbProps: function() {
        return genBreadcrumbProps;
    },
    getBreadcrumb: function() {
        return getBreadcrumb;
    },
    getBreadcrumbFromProps: function() {
        return getBreadcrumbFromProps;
    },
    getBreadcrumbProps: function() {
        return getBreadcrumbProps;
    },
    getVersion: function() {
        return getVersion;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _antd = __mako_require__("node_modules/antd/es/index.js");
var _pathtoregexp = __mako_require__("node_modules/path-to-regexp/dist/index.js");
var _pathTools = __mako_require__("node_modules/@ant-design/pro-layout/es/utils/pathTools.js");
var _jsxruntime = __mako_require__("node_modules/react/jsx-runtime.js");
const process = __mako_require__("node_modules/node-libs-browser-okam/polyfill/process.js");
var getVersion = function getVersion() {
    var _process;
    if (typeof process === 'undefined') return _antd.version;
    return ((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.ANTD_VERSION) || _antd.version;
};
// 渲染 Breadcrumb 子节点
// Render the Breadcrumb child node
var defaultItemRender = function defaultItemRender(route, _, routes) {
    var _ref = route, breadcrumbName = _ref.breadcrumbName, title = _ref.title, path = _ref.path;
    var last = routes.findIndex(function(i) {
        return(// @ts-ignore
        i.linkPath === route.path);
    }) === routes.length - 1;
    return last ? /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        children: title || breadcrumbName
    }) : /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
        onClick: path ? function() {
            return location.href = path;
        } : undefined,
        children: title || breadcrumbName
    });
};
var renderItemLocal = function renderItemLocal(item, props) {
    var formatMessage = props.formatMessage, menu = props.menu;
    if (item.locale && formatMessage && (menu === null || menu === void 0 ? void 0 : menu.locale) !== false) return formatMessage({
        id: item.locale,
        defaultMessage: item.name
    });
    return item.name;
};
var getBreadcrumb = function getBreadcrumb(breadcrumbMap, url) {
    var breadcrumbItem = breadcrumbMap.get(url);
    if (!breadcrumbItem) {
        // Find the first matching path in the order defined by route config
        // 按照 route config 定义的顺序找到第一个匹配的路径
        var keys = Array.from(breadcrumbMap.keys()) || [];
        var targetPath = keys.find(function(path) {
            try {
                if (path !== null && path !== void 0 && path.startsWith('http')) return false;
                return (0, _pathtoregexp.match)(path.replace('?', ''))(url);
            } catch (error) {
                console.log('path', path, error);
                return false;
            }
        });
        if (targetPath) breadcrumbItem = breadcrumbMap.get(targetPath);
    }
    return breadcrumbItem || {
        path: ''
    };
};
var getBreadcrumbFromProps = function getBreadcrumbFromProps(props) {
    var location1 = props.location, breadcrumbMap = props.breadcrumbMap;
    return {
        location: location1,
        breadcrumbMap: breadcrumbMap
    };
};
var conversionFromLocation = function conversionFromLocation(routerLocation, breadcrumbMap, props) {
    // Convertor the url to an array
    var pathSnippets = (0, _pathTools.urlToList)(routerLocation === null || routerLocation === void 0 ? void 0 : routerLocation.pathname);
    // Loop data mosaic routing
    var extraBreadcrumbItems = pathSnippets.map(function(url) {
        var currentBreadcrumb = getBreadcrumb(breadcrumbMap, url);
        var name = renderItemLocal(currentBreadcrumb, props);
        var hideInBreadcrumb = currentBreadcrumb.hideInBreadcrumb;
        return name && !hideInBreadcrumb ? {
            linkPath: url,
            breadcrumbName: name,
            title: name,
            component: currentBreadcrumb.component
        } : {
            linkPath: '',
            breadcrumbName: '',
            title: ''
        };
    }).filter(function(item) {
        return item && item.linkPath;
    });
    return extraBreadcrumbItems;
};
var genBreadcrumbProps = function genBreadcrumbProps(props) {
    var _getBreadcrumbFromPro = getBreadcrumbFromProps(props), location1 = _getBreadcrumbFromPro.location, breadcrumbMap = _getBreadcrumbFromPro.breadcrumbMap;
    // 根据 location 生成 面包屑
    // Generate breadcrumbs based on location
    if (location1 && location1.pathname && breadcrumbMap) return conversionFromLocation(location1, breadcrumbMap, props);
    return [];
};
var getBreadcrumbProps = function getBreadcrumbProps(props, layoutPros // ProLayoutProps类型的layoutPros
) {
    // 解构赋值获取props中的breadcrumbRender和props中的itemRender，如果props中没有itemRender则使用默认的defaultItemRender函数
    var breadcrumbRender = props.breadcrumbRender, propsItemRender = props.itemRender;
    // 解构赋值获取layoutPros.breadcrumbProps.minLenght的值，如果没有设置，则默认为2
    var _ref2 = layoutPros.breadcrumbProps || {}, _ref2$minLength = _ref2.minLength, minLength = _ref2$minLength === void 0 ? 2 : _ref2$minLength;
    // 生成面包屑的路由数组，该数组中包含菜单项和面包屑项
    var routesArray = genBreadcrumbProps(props);
    // 如果props中有itemRender，则使用props中的itemRender，否则使用默认函数defaultItemRender
    var itemRender = function itemRender(item) {
        var renderFunction = propsItemRender || defaultItemRender;
        for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)rest[_key - 1] = arguments[_key];
        return renderFunction === null || renderFunction === void 0 ? void 0 : renderFunction.apply(void 0, [
            (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                // 如果item.linkPath存在，则使用item.linkPath，否则使用item.path
                // @ts-ignore
                path: item.linkPath || item.path
            })
        ].concat(rest));
    };
    var items = routesArray;
    // 如果面包屑渲染函数breadcrumbRender存在，则使用其渲染数组items
    if (breadcrumbRender) items = breadcrumbRender(items || []) || undefined;
    // 如果items（渲染后的数组）的长度小于minLength或者breadcrumbRender为false，则items为undefined
    if (items && items.length < minLength || breadcrumbRender === false) items = undefined;
    // 如果当前 ant design 包的版本大于等于5.3.0，则返回一个对象{items,itemRender},否则返回一个对象{routes:item,itemRender}
    return (0, _proutils.compareVersions)(getVersion(), '5.3.0') > -1 ? {
        items: items,
        itemRender: itemRender
    } : {
        routes: items,
        itemRender: itemRender
    };
};

},
"node_modules/@ant-design/pro-layout/es/utils/getMenuData.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "getMenuData", {
    enumerable: true,
    get: function() {
        return getMenuData;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _toConsumableArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"));
var _routeutils = __mako_require__("node_modules/@umijs/route-utils/es/index.js");
function fromEntries(iterable) {
    return (0, _toConsumableArray.default)(iterable).reduce(function(obj, _ref) {
        var _ref2 = (0, _slicedToArray.default)(_ref, 2), key = _ref2[0], val = _ref2[1];
        // eslint-disable-next-line no-param-reassign
        obj[key] = val;
        return obj;
    }, {});
}
var getMenuData = function getMenuData(routes, menu, formatMessage, menuDataRender) {
    var _transformRoute = (0, _routeutils.transformRoute)(routes, (menu === null || menu === void 0 ? void 0 : menu.locale) || false, formatMessage, true), menuData = _transformRoute.menuData, breadcrumb = _transformRoute.breadcrumb;
    if (!menuDataRender) return {
        breadcrumb: fromEntries(breadcrumb),
        breadcrumbMap: breadcrumb,
        menuData: menuData
    };
    return getMenuData(menuDataRender(menuData), menu, formatMessage, undefined);
};

},
"node_modules/@ant-design/pro-layout/es/utils/pathTools.js": function (module, exports, __mako_require__){
// /userInfo/2144/id => ['/userInfo','/userInfo/2144,'/userInfo/2144/id']
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "urlToList", {
    enumerable: true,
    get: function() {
        return urlToList;
    }
});
function urlToList(url) {
    if (!url || url === '/') return [
        '/'
    ];
    var urlList = url.split('/').filter(function(i) {
        return i;
    });
    return urlList.map(function(urlItem, index) {
        return "/".concat(urlList.slice(0, index + 1).join('/'));
    });
}

},
"node_modules/@ant-design/pro-layout/es/utils/useCurrentMenuLayoutProps.js": function (module, exports, __mako_require__){
"use strict";
__mako_require__.d(exports, "__esModule", {
    value: true
});
__mako_require__.d(exports, "useCurrentMenuLayoutProps", {
    enumerable: true,
    get: function() {
        return useCurrentMenuLayoutProps;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _typeof = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/typeof.js"));
var _slicedToArray = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));
var _proutils = __mako_require__("node_modules/@ant-design/pro-utils/es/index.js");
var _react = __mako_require__("node_modules/react/index.js");
var useCurrentMenuLayoutProps = function useCurrentMenuLayoutProps(currentMenu) {
    var _useState = (0, _react.useState)({}), _useState2 = (0, _slicedToArray.default)(_useState, 2), currentMenuLayoutProps = _useState2[0], setCurrentMenuLayoutProps = _useState2[1];
    (0, _react.useEffect)(function() {
        setCurrentMenuLayoutProps((0, _proutils.omitUndefined)({
            // 有时候会变成对象，是原来的方式
            layout: (0, _typeof.default)(currentMenu.layout) !== 'object' ? currentMenu.layout : undefined,
            navTheme: currentMenu.navTheme,
            menuRender: currentMenu.menuRender,
            footerRender: currentMenu.footerRender,
            menuHeaderRender: currentMenu.menuHeaderRender,
            headerRender: currentMenu.headerRender,
            fixSiderbar: currentMenu.fixSiderbar
        }));
    }, [
        currentMenu.layout,
        currentMenu.navTheme,
        currentMenu.menuRender,
        currentMenu.footerRender,
        currentMenu.menuHeaderRender,
        currentMenu.headerRender,
        currentMenu.fixSiderbar
    ]);
    return currentMenuLayoutProps;
};

},
"node_modules/@ant-design/pro-layout/es/utils/utils.js": function (module, exports, __mako_require__){
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
    clearMenuItem: function() {
        return clearMenuItem;
    },
    genStringToTheme: function() {
        return genStringToTheme;
    },
    getOpenKeysFromMenuData: function() {
        return getOpenKeysFromMenuData;
    }
});
var _interop_require_default = __mako_require__("@swc/helpers/_/_interop_require_default");
var _objectSpread2 = /*#__PURE__*/ _interop_require_default._(__mako_require__("node_modules/@babel/runtime/helpers/esm/objectSpread2.js"));
var getOpenKeysFromMenuData = function getOpenKeysFromMenuData(menuData) {
    return (menuData || []).reduce(function(pre, item) {
        if (item.key) pre.push(item.key);
        if (item.children || item.routes) {
            var newArray = pre.concat(getOpenKeysFromMenuData(item.children || item.routes) || []);
            return newArray;
        }
        return pre;
    }, []);
};
var themeConfig = {
    techBlue: '#1677FF',
    daybreak: '#1890ff',
    dust: '#F5222D',
    volcano: '#FA541C',
    sunset: '#FAAD14',
    cyan: '#13C2C2',
    green: '#52C41A',
    geekblue: '#2F54EB',
    purple: '#722ED1'
};
function genStringToTheme(val) {
    return val && themeConfig[val] ? themeConfig[val] : val || '';
}
function clearMenuItem(menusData) {
    return menusData.map(function(item) {
        var children = item.children || [];
        var finalItem = (0, _objectSpread2.default)({}, item);
        if (!finalItem.children && finalItem.routes) finalItem.children = finalItem.routes;
        if (!finalItem.name || finalItem.hideInMenu) return null;
        if (finalItem && finalItem !== null && finalItem !== void 0 && finalItem.children) {
            if (!finalItem.hideChildrenInMenu && children.some(function(child) {
                return child && child.name && !child.hideInMenu;
            })) return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, item), {}, {
                children: clearMenuItem(children)
            });
            // children 为空就直接删掉
            delete finalItem.children;
        }
        delete finalItem.routes;
        return finalItem;
    }).filter(function(item) {
        return item;
    });
}

},
"node_modules/node-libs-browser-okam/polyfill/path.js": function (module, exports, __mako_require__){
module.exports = __mako_require__("node_modules/path-browserify/index.js");

},
"node_modules/path-browserify/index.js": function (module, exports, __mako_require__){
// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
const process = __mako_require__("node_modules/node-libs-browser-okam/polyfill/process.js");
function normalizeArray(parts, allowAboveRoot) {
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for(var i = parts.length - 1; i >= 0; i--){
        var last = parts[i];
        if (last === '.') parts.splice(i, 1);
        else if (last === '..') {
            parts.splice(i, 1);
            up++;
        } else if (up) {
            parts.splice(i, 1);
            up--;
        }
    }
    // if the path is allowed to go above the root, restore leading ..s
    if (allowAboveRoot) for(; up--; up)parts.unshift('..');
    return parts;
}
// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
    var resolvedPath = '', resolvedAbsolute = false;
    for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
        var path = i >= 0 ? arguments[i] : process.cwd();
        // Skip empty and invalid entries
        if (typeof path !== 'string') throw new TypeError('Arguments to path.resolve must be strings');
        else if (!path) continue;
        resolvedPath = path + '/' + resolvedPath;
        resolvedAbsolute = path.charAt(0) === '/';
    }
    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)
    // Normalize the path
    resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
        return !!p;
    }), !resolvedAbsolute).join('/');
    return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
};
// path.normalize(path)
// posix version
exports.normalize = function(path) {
    var isAbsolute = exports.isAbsolute(path), trailingSlash = substr(path, -1) === '/';
    // Normalize the path
    path = normalizeArray(filter(path.split('/'), function(p) {
        return !!p;
    }), !isAbsolute).join('/');
    if (!path && !isAbsolute) path = '.';
    if (path && trailingSlash) path += '/';
    return (isAbsolute ? '/' : '') + path;
};
// posix version
exports.isAbsolute = function(path) {
    return path.charAt(0) === '/';
};
// posix version
exports.join = function() {
    var paths = Array.prototype.slice.call(arguments, 0);
    return exports.normalize(filter(paths, function(p, index) {
        if (typeof p !== 'string') throw new TypeError('Arguments to path.join must be strings');
        return p;
    }).join('/'));
};
// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
    from = exports.resolve(from).substr(1);
    to = exports.resolve(to).substr(1);
    function trim(arr) {
        var start = 0;
        for(; start < arr.length; start++){
            if (arr[start] !== '') break;
        }
        var end = arr.length - 1;
        for(; end >= 0; end--){
            if (arr[end] !== '') break;
        }
        if (start > end) return [];
        return arr.slice(start, end - start + 1);
    }
    var fromParts = trim(from.split('/'));
    var toParts = trim(to.split('/'));
    var length = Math.min(fromParts.length, toParts.length);
    var samePartsLength = length;
    for(var i = 0; i < length; i++)if (fromParts[i] !== toParts[i]) {
        samePartsLength = i;
        break;
    }
    var outputParts = [];
    for(var i = samePartsLength; i < fromParts.length; i++)outputParts.push('..');
    outputParts = outputParts.concat(toParts.slice(samePartsLength));
    return outputParts.join('/');
};
exports.sep = '/';
exports.delimiter = ':';
exports.dirname = function(path) {
    if (typeof path !== 'string') path = path + '';
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/ ;
    var end = -1;
    var matchedSlash = true;
    for(var i = path.length - 1; i >= 1; --i){
        code = path.charCodeAt(i);
        if (code === 47 /*/*/ ) {
            if (!matchedSlash) {
                end = i;
                break;
            }
        } else // We saw the first non-path separator
        matchedSlash = false;
    }
    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) // return '//';
    // Backwards-compat fix:
    return '/';
    return path.slice(0, end);
};
function basename(path) {
    if (typeof path !== 'string') path = path + '';
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;
    for(i = path.length - 1; i >= 0; --i){
        if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        {
            if (!matchedSlash) {
                start = i + 1;
                break;
            }
        } else if (end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // path component
            matchedSlash = false;
            end = i + 1;
        }
    }
    if (end === -1) return '';
    return path.slice(start, end);
}
// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function(path, ext) {
    var f = basename(path);
    if (ext && f.substr(-1 * ext.length) === ext) f = f.substr(0, f.length - ext.length);
    return f;
};
exports.extname = function(path) {
    if (typeof path !== 'string') path = path + '';
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for(var i = path.length - 1; i >= 0; --i){
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/ ) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
                startPart = i + 1;
                break;
            }
            continue;
        }
        if (end === -1) {
            // We saw the first non-path separator, mark this as the end of our
            // extension
            matchedSlash = false;
            end = i + 1;
        }
        if (code === 46 /*.*/ ) {
            // If this is our first dot, mark it as the start of our extension
            if (startDot === -1) startDot = i;
            else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return '';
    return path.slice(startDot, end);
};
function filter(xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for(var i = 0; i < xs.length; i++)if (f(xs[i], i, xs)) res.push(xs[i]);
    return res;
}
// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ? function(str, start, len) {
    return str.substr(start, len);
} : function(str, start, len) {
    if (start < 0) start = str.length + start;
    return str.substr(start, len);
};

},
 }]);
//# sourceMappingURL=vendors_5-async.js.map