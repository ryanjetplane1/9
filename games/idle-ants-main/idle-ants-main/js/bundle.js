// var _interopRequireDefault = require("../babel/runtime/helpers/interopRequireDefault");

var _assertThisInitialized2 = _interopRequireDefault(require("../babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("../babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("../babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("../babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("../babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("../babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("../babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("../babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("../babel/runtime/helpers/inherits"));

var _typeof2 = _interopRequireDefault(require("../babel/runtime/helpers/typeof"));

function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) {
            var i = 0;
            var F = function F() { };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var it, normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally {
                if (didErr) throw err;
            }
        }
    };
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function _createSuper(Derived) {
    return function () {
        var Super = (0, _getPrototypeOf2.default)(Derived), result;
        if (_isNativeReflectConstruct()) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return (0, _possibleConstructorReturn2.default)(this, result);
    };
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () { }));
        return true;
    } catch (e) {
        return false;
    }
}

(function () {
    "use strict";
    /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
    /* global Reflect, Promise */    var _ExportPageSlotID, _ExportPageIconNum;
    var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function (d, b) {
            d.__proto__ = b;
        } || function (d, b) {
            for (var p in b) {
                if (b.hasOwnProperty(p)) d[p] = b[p];
            }
        };
        return _extendStatics(d, b);
    };
    function __extends(d, b) {
        _extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) {
                    if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
            }
            return t;
        };
        return _assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
        }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) {
            if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex);
        };
    }
    function __metadata(metadataKey, metadataValue) {
        if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof2.default)(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : new P(function (resolve) {
                    resolve(result.value);
                }).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function sent() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        return g = {
            next: verb(0),
            throw: verb(1),
            return: verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
        }), g;
        function verb(n) {
            return function (v) {
                return step([n, v]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) {
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y),
                        0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                    if (y = 0, t) op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;

                        case 4:
                            _.label++;
                            return {
                                value: op[1],
                                done: false
                            };

                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;

                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;

                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2]) _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                } catch (e) {
                    op = [6, e];
                    y = 0;
                } finally {
                    f = t = 0;
                }
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
    }
    function __exportStar(m, exports) {
        for (var p in m) {
            if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function next() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
                ar.push(r.value);
            }
        } catch (error) {
            e = {
                error: error
            };
        } finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally {
                if (e) throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
            ar = ar.concat(__read(arguments[i]));
        }
        return ar;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
            return this;
        }, i;
        function verb(n) {
            if (g[n]) i[n] = function (v) {
                return new Promise(function (a, b) {
                    q.push([n, v, a, b]) > 1 || resume(n, v);
                });
            };
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume("next", value);
        }
        function reject(value) {
            resume("throw", value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
            return this;
        }, i;
        function verb(n, f) {
            i[n] = o[n] ? function (v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === "return"
                } : f ? f(v) : v;
            } : f;
        }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](),
            i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
                return this;
            }, i);
        function verb(n) {
            i[n] = o[n] && function (v) {
                return new Promise(function (resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }
        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function (v) {
                resolve({
                    value: v,
                    done: d
                });
            }, reject);
        }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", {
                value: raw
            });
        } else {
            cooked.raw = raw;
        }
        return cooked;
    }
    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
            if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result.default = mod;
        return result;
    }
    function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
            default: mod
        };
    }
    var LHandler = /* */ function (_Laya$Handler) {
        (0, _inherits2.default)(LHandler, _Laya$Handler);
        var _super = _createSuper(LHandler);
        function LHandler() {
            (0, _classCallCheck2.default)(this, LHandler);
            return _super.apply(this, arguments);
        }
        (0, _createClass2.default)(LHandler, null, [{
            key: "createloop",
            value: function createloop(caller, method, args) {
                return LHandler.create(caller, method, args, false);
            }
        }]);
        return LHandler;
    }(Laya.Handler);
    var Utils = /* */ function () {
        function Utils() {
            (0, _classCallCheck2.default)(this, Utils);
        }
        (0, _createClass2.default)(Utils, null, [{
            key: "getSceneConfig",
            value: function getSceneConfig() {
                var remoteConfig = [{
                    url: "subpackage/scene/LayaScene_GameScene/Conventional/GameScene.ls",
                    tag: 0
                }, {
                    url: "subpackage/scene/LayaScene_PrizeScene/Conventional/PrizeScene.ls",
                    tag: 1
                }];
                return remoteConfig;
            }
        }, {
            key: "getPrefabConfig",
            value: function getPrefabConfig() {
                var url = null;
                if (Laya.Browser.onMiniGame) {
                    url = "subpackage/scene/LayaScene_PrefabScene/Conventional";
                } else {
                    url = "subpackage/scene/LayaScene_PrefabScene/Conventional";
                }
                return url;
            }
        }, {
            key: "RealityY",
            value: function RealityY() {
                // if (Laya.Browser.onMiniGame) {
                //     var systemInfo = wx.getSystemInfoSync();
                //     var rateX = systemInfo.screenWidth / 750;
                //     return systemInfo.screenHeight / rateX - 1334;
                // }
                return 0;
            }
        }, {
            key: "autoCheckObj3DVisible",
            value: function autoCheckObj3DVisible(player, obj) {
                if (!player) return;
                if (!obj) return;
                var pos;
                var spr;
                var ppos = player.transform.position;
                bigfor: for (var i = 0; i < obj.numChildren; i++) {
                    spr = obj.getChildAt(i);
                    var _iterator = _createForOfIteratorHelper(this.IgnoreAutoCheckVisibleObj3ds), _step;
                    try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            var reg = _step.value;
                            reg.lastIndex = 0;
                            if (reg.test(spr.name)) {
                                continue bigfor;
                            }
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally {
                        _iterator.f();
                    }
                    if (spr.meshRenderer && spr.meshRenderer.bounds) {
                        pos = spr.meshRenderer.bounds.getCenter();
                    } else {
                        pos = spr.transform.position;
                    }
                    if (Laya.Vector3.distance(ppos, pos) > this.AutoCheckObj3DVisibleDist) {
                        spr.active = false;
                    } else {
                        spr.active = true;
                    }
                }
            }
        }, {
            key: "delayHandle",
            value: function delayHandle(ms, cb) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        cb();
                        resolve();
                    }, ms);
                });
            }
        }, {
            key: "rotateEulerYtween",
            value: function rotateEulerYtween(t, tweenObj, toAngle, duration) {
                var newry = Math.floor(toAngle % 360);
                var oldry = Math.floor(t.localRotationEulerY % 360);
                if (oldry < 0) oldry += 360;
                if (newry < 0) newry += 360;
                var diffry = newry - oldry;
                var diffry_abs = Math.abs(diffry);
                if (diffry_abs > 180) {
                    var bu = 360 - diffry_abs;
                    newry = oldry + (diffry > 0 ? -bu : bu);
                }
                t.localRotationEulerY = oldry;
                tweenObj.localRotationEulerY = oldry;
                Laya.Tween.to(tweenObj, {
                    localRotationEulerY: newry
                }, duration).update = LHandler.createloop(this, function () {
                    t.localRotationEulerY = tweenObj.localRotationEulerY;
                });
            }
        }, {
            key: "rotateYto",
            value: function rotateYto(toangle, root, tweenObj) {
                toangle = toangle + Utils._rotRadius;
                var brot = root.transform.localRotationEuler;
                tweenObj.localRotationEulerY = brot.y;
                var t = root.transform;
                Utils.rotateEulerYtween(t, tweenObj, toangle, 300);
            }
        }, {
            key: "nFormatter",
            value: function nFormatter(num, digits) {
                var si = [{
                    value: 1,
                    symbol: ""
                }, {
                    value: 1e3,
                    symbol: "K"
                }, {
                    value: 1e6,
                    symbol: "M"
                }, {
                    value: 1e9,
                    symbol: "G"
                }, {
                    value: 1e12,
                    symbol: "T"
                }, {
                    value: 1e15,
                    symbol: "P"
                }, {
                    value: 1e18,
                    symbol: "E"
                }];
                var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
                var i;
                for (i = si.length - 1; i > 0; i--) {
                    if (num >= si[i].value) {
                        break;
                    }
                }
                return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
            }
        }, {
            key: "getRangePos",
            value: function getRangePos(pos) {
                var x = pos.x;
                var y = 0;
                var z = pos.z;
                if (Math.random() > .5) {
                    x += Math.random() * .3;
                } else {
                    x -= Math.random() * .3;
                }
                if (Math.random() > .5) {
                    z += Math.random() * .3;
                } else {
                    z -= Math.random() * .3;
                }
                return new Laya.Vector3(x, y, z);
            }
        }]);
        return Utils;
    }();
    Utils.ZERO = new Laya.Vector3(0, 0, 0);
    Utils.fpsLerp = .25;
    Utils.AutoCheckObj3DVisibleDist = 15;
    Utils.IgnoreAutoCheckVisibleObj3ds = [/colliders/];
    Utils._rotRadius = 90;
    var PrefabName;
    (function (PrefabName) {
        PrefabName["AntPrefab"] = "AntPrefab";
        PrefabName["ScenePrefab"] = "ScenePrefab";
        PrefabName["EffectPrefab"] = "EffectPrefab";
    })(PrefabName || (PrefabName = {}));
    var FoodName;
    (function (FoodName) {
        FoodName["Bread"] = "Bread";
        FoodName["Doughnut"] = "Doughnut";
        FoodName["Cangying"] = "Cangying";
        FoodName["Mazha"] = "Mazha";
        FoodName["Wenzi"] = "Wenzi";
        FoodName["Bread2"] = "Bread2";
        FoodName["Binggan"] = "Binggan";
        FoodName["Ningmeng"] = "Ningmeng";
        FoodName["Qiaokeli"] = "Qiaokeli";
        FoodName["Weihuaibinggan"] = "Weihuaibinggan";
        FoodName["Huangjin"] = "Huaungjin";
    })(FoodName || (FoodName = {}));
    var AntName;
    (function (AntName) {
        AntName["Ant_black"] = "Ant_black";
        AntName["Ant_King"] = "Ant_King";
    })(AntName || (AntName = {}));
    var SecenName;
    (function (SecenName) {
        SecenName["DefaultScene"] = "DefaultScene";
        SecenName["DefaultScene1"] = "DefaultScene1";
    })(SecenName || (SecenName = {}));
    var EffectName;
    (function (EffectName) {
        EffectName["FxBorn"] = "FxBorn";
        EffectName["FxSpeed"] = "FXSpeed";
        EffectName["FxGetMilu"] = "FxGetMilu";
    })(EffectName || (EffectName = {}));
    var AntAniName;
    (function (AntAniName) {
        AntAniName["UP"] = "walkup";
        AntAniName["WALK"] = "walk";
        AntAniName["EAT"] = "eat";
        AntAniName["DOWN"] = "walkdown";
        AntAniName["RESET"] = "reset";
    })(AntAniName || (AntAniName = {}));
    var EventData;
    (function (EventData) {
        EventData["UpdateCoin"] = "UpdateCoin";
        EventData["UpdateAntCount"] = "UpdateAntCount";
        EventData["UpgradeMoveSpeed"] = "UpgradeMoveSpeed";
        EventData["UpgradeCoinRate"] = "UpgradeCoinRate";
        EventData["UpdateLevelProgress"] = "UpdateLevelProgress";
        EventData["CoinNotEnough"] = "CoinNotEnough";
        EventData["AntKingTimer"] = "AntKingTimer";
        EventData["IconCallBack"] = "IconCallBack";
        EventData["AddExp"] = "AddExp";
    })(EventData || (EventData = {}));
    var MAX_ANT_COUNT = 50;
    var ANT_COUNT_COST = [0, 10, 22, 35, 50, 67, 88, 111, 137, 252, 305, 365,
        435, 516, 608, 714, 837, 980, 1140, 1325, 1533, 1770,
        2040, 1346, 2694, 3086,
        3531, 4034, 4601, 5241, 5964, 8136, 9238, 10480, 11876, 13448, 15215,
        17203, 19435, 21940, 24752, 27564, 30501, 34659, 40156, 46188,
        52536, 60598,
        70984, 82560, 100456];
    var MAX_USER_LEVEL = 50;
    var LEVEL_EXP = [0, 8, 9, 11, 12, 14, 16, 19, 21, 24, 28, 31, 34, 37, 41, 45, 50, 55, 60, 66, 73, 80, 88, 97, 107, 118, 129, 142, 156, 172, 189, 201, 213, 225, 239, 253, 269, 285, 302, 320, 339, 359, 381, 404, 428, 454, 481, 510, 540, 573, 607];
    var MAX_MOVESPEED_LEVEL = 40;
    var MAX_COINRATE_LEVEL = 25;
    var ConfigManager = /* */ function () {
        function ConfigManager() {
            (0, _classCallCheck2.default)(this, ConfigManager);
            this._moveSpeedConfigURL = "Config/MoveSpeedConfig.json";
            this._coinRateConfigURL = "Config/CoinRateConfig.json";
        }
        (0, _createClass2.default)(ConfigManager, [{
            key: "init",
            value: function init() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee() {
                    var ret;
                    return _regenerator.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    ret = false;

                                case 1:
                                    _context.next = 3;
                                    return this._initMoveSpeedConfigURL();

                                case 3:
                                    ret = _context.sent;

                                case 4:
                                    if (!ret) {
                                        _context.next = 1;
                                        break;
                                    }

                                case 5:
                                    _context.next = 7;
                                    return this._initCoinRateConfigURL();

                                case 7:
                                    ret = _context.sent;

                                case 8:
                                    if (!ret) {
                                        _context.next = 5;
                                        break;
                                    }

                                case 9:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
            }
        }, {
            key: "_initMoveSpeedConfigURL",
            value: function _initMoveSpeedConfigURL() {
                var _this = this;
                return new Promise(function (resolve, reject) {
                    Laya.loader.load(_this._moveSpeedConfigURL, Laya.Handler.create(_this, function () {
                        try {
                            _this._moveSpeedConfig = Laya.loader.getRes(_this._moveSpeedConfigURL);
                            Laya.loader.clearRes(_this._moveSpeedConfigURL);
                            resolve(true);
                        } catch (e) {
                            console.log("init game info error", e);
                            resolve(false);
                        }
                    }));
                });
            }
        }, {
            key: "_initCoinRateConfigURL",
            value: function _initCoinRateConfigURL() {
                var _this2 = this;
                return new Promise(function (resolve, reject) {
                    Laya.loader.load(_this2._coinRateConfigURL, Laya.Handler.create(_this2, function () {
                        try {
                            _this2._coinRateConfig = Laya.loader.getRes(_this2._coinRateConfigURL);
                            Laya.loader.clearRes(_this2._coinRateConfigURL);
                            resolve(true);
                        } catch (e) {
                            console.log("init game info error", e);
                            resolve(false);
                        }
                    }));
                });
            }
        }, {
            key: "moveSpeedConfig",
            get: function get() {
                return this._moveSpeedConfig;
            }
        }, {
            key: "coinRateConfig",
            get: function get() {
                return this._coinRateConfig;
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (!ConfigManager._instance) {
                    ConfigManager._instance = new ConfigManager();
                }
                return ConfigManager._instance;
            }
        }]);
        return ConfigManager;
    }();
    var DataManager = /* */ function () {
        function DataManager() {
            (0, _classCallCheck2.default)(this, DataManager);
            this._antKingTimer = 120;
        }
        (0, _createClass2.default)(DataManager, [{
            key: "init",
            value: function init(data) {
                if (data != null && typeof data !== "string") {
                    this._coin = data.coin;
                    this._level = data.level;
                    this._userLevel = data.userLevel || 1;
                    this._userExp = data.userExp || 0;
                    this._moveSpeedLevel = data.moveSpeedLevel;
                    this._antCountLevel = data.antCountLevel;
                    this._coinRateLevel = data.coinRateLevel;
                } else {
                    this._coin = 0;
                    this._level = 1;
                    this._userLevel = 1;
                    this._userExp = 0;
                    this._moveSpeedLevel = 1;
                    this._antCountLevel = 1;
                    this._coinRateLevel = 1;
                }
                this._doublieCoin = 1;
                this._moveSpeed = ConfigManager.Instance.moveSpeedConfig[this._moveSpeedLevel].MoveSpeed;
                this._antCount = this._antCountLevel;
                this._coinRate = ConfigManager.Instance.coinRateConfig[this._coinRateLevel].CoinRate;
            }
        }, {
            key: "checkCoin",
            value: function checkCoin(type) {
                switch (type) {
                    case 1:
                        {
                            var config = ConfigManager.Instance.moveSpeedConfig[this._moveSpeedLevel + 1];
                            return this._coin - config.CostCoin >= 0;
                        }

                    case 2:
                        {
                            var costCoin = ANT_COUNT_COST[this._antCountLevel];
                            return this._coin - costCoin >= 0;
                        }

                    case 3:
                        {
                            var _config = ConfigManager.Instance.coinRateConfig[this._coinRateLevel + 1];
                            return this._coin - _config.CostCoin >= 0;
                        }
                }
            }
        }, {
            key: "upgradeMoveSpeed",
            value: function upgradeMoveSpeed(stat) {
                if (this._moveSpeedLevel + 1 > MAX_MOVESPEED_LEVEL) return;
                var config = ConfigManager.Instance.moveSpeedConfig[this._moveSpeedLevel + 1];
                if (this._coin - config.CostCoin >= 0 || !stat) {
                    if (stat) this.coin -= config.CostCoin;
                    this._moveSpeedLevel += 1;
                    this._moveSpeed = config.MoveSpeed;
                    Laya.stage.event(EventData.UpgradeMoveSpeed);
                } else {
                    Laya.stage.event(EventData.CoinNotEnough);
                }
            }
        }, {
            key: "upgradeAntCount",
            value: function upgradeAntCount(stat) {
                if (this._antCountLevel + 1 > MAX_ANT_COUNT) return;
                var costCoin = ANT_COUNT_COST[this._antCountLevel];
                if (this._coin - costCoin >= 0 || !stat) {
                    if (stat) this.coin -= costCoin;
                    this._antCountLevel += 1;
                    this._antCount = this._antCountLevel;
                    Laya.stage.event(EventData.UpdateAntCount, 1);
                } else {
                    Laya.stage.event(EventData.CoinNotEnough);
                }
            }
        }, {
            key: "upgradeCoinRate",
            value: function upgradeCoinRate(stat) {
                if (this._coinRateLevel + 1 > MAX_COINRATE_LEVEL) return;
                var config = ConfigManager.Instance.coinRateConfig[this._coinRateLevel + 1];
                if (this._coin - config.CostCoin >= 0 || !stat) {
                    if (stat) this.coin -= config.CostCoin;
                    this._coinRateLevel += 1;
                    this._coinRate = config.CoinRate;
                    Laya.stage.event(EventData.UpgradeCoinRate);
                } else {
                    Laya.stage.event(EventData.CoinNotEnough);
                }
            }
        }, {
            key: "callAntKing",
            value: function callAntKing() {
                var _this3 = this;
                clearInterval(this._timer);
                this._antKingTimer = 120;
                this._timer = setInterval(function () {
                    _this3._antKingTimer--;
                    if (_this3._antKingTimer <= 0) {
                        clearInterval(_this3._timer);
                        _this3._antKingTimer = 0;
                    }
                    Laya.stage.event(EventData.AntKingTimer, _this3._antKingTimer);
                }, 1e3);
            }
        }, {
            key: "clearAntKing",
            value: function clearAntKing() {
                clearInterval(this._timer);
                this._antKingTimer = 0;
                Laya.stage.event(EventData.AntKingTimer, this._antKingTimer);
            }
        }, {
            key: "levelUpHandle",
            value: function levelUpHandle() {
                if (this._userLevel >= MAX_USER_LEVEL) return;
                this._userLevel += 1;
                this.userExp = 0;
            }
        }, {
            key: "setDoubleCoin",
            value: function setDoubleCoin(rate) {
                this._doublieCoin = rate;
            }
        }, {
            key: "coin",
            get: function get() {
                return this._coin;
            },
            set: function set(value) {
                this._coin = value;
                Laya.stage.event(EventData.UpdateCoin, this._coin);
            }
        }, {
            key: "level",
            get: function get() {
                return this._level;
            },
            set: function set(value) {
                this._level = value;
            }
        }, {
            key: "userLevel",
            get: function get() {
                return this._userLevel;
            }
        }, {
            key: "userExp",
            get: function get() {
                return this._userExp;
            },
            set: function set(value) {
                if (this._userLevel >= MAX_USER_LEVEL) return;
                var needExp = LEVEL_EXP[this._userLevel];
                this._userExp = value;
                if (this._userExp >= needExp) {
                    this._userExp = needExp;
                }
                Laya.stage.event(EventData.AddExp);
            }
        }, {
            key: "moveSpeed",
            get: function get() {
                return this._moveSpeed;
            }
        }, {
            key: "antCount",
            get: function get() {
                return this._antCount;
            }
        }, {
            key: "coinRate",
            get: function get() {
                return this._coinRate;
            }
        }, {
            key: "moveSpeedLevel",
            get: function get() {
                return this._moveSpeedLevel;
            }
        }, {
            key: "antCountLevel",
            get: function get() {
                return this._antCountLevel;
            }
        }, {
            key: "coinRateLevel",
            get: function get() {
                return this._coinRateLevel;
            }
        }, {
            key: "doublieCoin",
            get: function get() {
                return this._doublieCoin;
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (DataManager._instance == null) {
                    DataManager._instance = new DataManager();
                }
                return DataManager._instance;
            }
        }]);
        return DataManager;
    }();
    var GameID = 10033;
    var VideoAdParams = {
        adUnitId: "adunit-66480f024ba6aed2",
        slotId: "4b2e5d492caefde0"
    };
    var BannerParams = {
        adUnitId: [],
        slotId: "0e6062a8e94c8d95"
    };
    var ShareParams = {
        slotId: "",
        data: {
            title: "",
            imageUrl: "",
            imageUrlId: "",
            query: {}
        }
    };
    var ADState;
    (function (ADState) {
        ADState["PLAY_AD_ERROR"] = "PLAY_AD_ERROR";
        ADState["PLAY_AD_SUCCESS"] = "PLAY_AD_SUCCESS";
    })(ADState || (ADState = {}));
    var ExportPage;
    (function (ExportPage) {
        ExportPage[ExportPage["MysticalBoxView"] = 0] = "MysticalBoxView";
        ExportPage[ExportPage["OldUsersView"] = 1] = "OldUsersView";
        ExportPage[ExportPage["NewMoreGameView"] = 2] = "NewMoreGameView";
        ExportPage[ExportPage["OldMoreGameView"] = 3] = "OldMoreGameView";
        ExportPage[ExportPage["ReturnPageView"] = 4] = "ReturnPageView";
    })(ExportPage || (ExportPage = {}));
    var ExportPageType;
    (function (ExportPageType) {
        ExportPageType[ExportPageType["OldUsersPage"] = 0] = "OldUsersPage";
        ExportPageType[ExportPageType["NewMoreGameView"] = 1] = "NewMoreGameView";
        ExportPageType[ExportPageType["OldMoreGameTopView"] = 2] = "OldMoreGameTopView";
        ExportPageType[ExportPageType["OldMoreGameBottomView"] = 3] = "OldMoreGameBottomView";
        ExportPageType[ExportPageType["ReturnPageTop"] = 4] = "ReturnPageTop";
        ExportPageType[ExportPageType["ReturnPageBottom"] = 5] = "ReturnPageBottom";
        ExportPageType[ExportPageType["LeftDrawerView"] = 6] = "LeftDrawerView";
        ExportPageType[ExportPageType["CoupletList"] = 7] = "CoupletList";
        ExportPageType[ExportPageType["RecommendGrid"] = 8] = "RecommendGrid";
        ExportPageType[ExportPageType["HorizontalList"] = 9] = "HorizontalList";
        ExportPageType[ExportPageType["GameViewIcon"] = 10] = "GameViewIcon";
    })(ExportPageType || (ExportPageType = {}));
    var ExportPageSlotID = (_ExportPageSlotID = {}, (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.OldUsersPage, "1551387fa2a6d1d2"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.NewMoreGameView, "fde2bd10f267364f"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.OldMoreGameTopView, "1551387fa2a6d1d2"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.OldMoreGameBottomView, "fde2bd10f267364f"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.ReturnPageTop, "fde2bd10f267364f"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.ReturnPageBottom, "43fb96ccd12b8bc5"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.LeftDrawerView, "1551387fa2a6d1d2"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.CoupletList, "1551387fa2a6d1d2"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.RecommendGrid, "1551387fa2a6d1d2"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.HorizontalList, "5f9b2292adf54463"),
        (0, _defineProperty2.default)(_ExportPageSlotID, ExportPageType.GameViewIcon, "b3b58b6bf25a0bf8"),
        _ExportPageSlotID);
    var ExportPageIconNum = (_ExportPageIconNum = {}, (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.OldUsersPage, {
        iconNum: 16,
        iconShaking: true,
        listScrollAni: "None"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.NewMoreGameView, {
        iconNum: 20,
        iconShaking: false,
        listScrollAni: "vertical"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.OldMoreGameTopView, {
        iconNum: 20,
        iconShaking: true,
        listScrollAni: "vertical"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.OldMoreGameBottomView, {
        iconNum: 20,
        iconShaking: false,
        listScrollAni: "horizontal"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.ReturnPageTop, {
        iconNum: 20,
        iconShaking: false,
        listScrollAni: "horizontal"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.ReturnPageBottom, {
        iconNum: 20,
        iconShaking: false,
        listScrollAni: "vertical"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.LeftDrawerView, {
        iconNum: 15,
        iconShaking: true,
        listScrollAni: "None"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.CoupletList, {
        iconNum: 4,
        iconShaking: true,
        listScrollAni: "None"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.RecommendGrid, {
        iconNum: 16,
        iconShaking: true,
        listScrollAni: "None"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.HorizontalList, {
        iconNum: 20,
        iconShaking: false,
        listScrollAni: "horizontal"
    }), (0, _defineProperty2.default)(_ExportPageIconNum, ExportPageType.GameViewIcon, {
        iconNum: 20,
        iconShaking: true,
        listScrollAni: "None"
    }), _ExportPageIconNum);
    var GameValue = /* */ function () {
        function GameValue() {
            (0, _classCallCheck2.default)(this, GameValue);
            this.VideoStatus = 1;
            this.VideoIconStatus = 1;
            this.ExportStatus = 0;
            this.BannerStatus = 0;
            this.BannerDelayTimer = 0;
            this.OldUserExportStatus = 0;
            this.IconCallBackStatus = 0;
            this.BannerExcludeCity = "";
            this.MysticBoxStatus = 1;
            this.AutoRefreshBanner = 5;
            this.BannerIdMap = [];
        }
        (0, _createClass2.default)(GameValue, [{
            key: "init",
            value: function init(umSDK) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee2() {
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    this._umSDK = umSDK;
                                    _context2.next = 3;
                                    return this._getGameValue();

                                case 3:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, this);
                }));
            }
        }, {
            key: "_getGameValue",
            value: function _getGameValue() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee3() {
                    var config;
                    return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                            switch (_context3.prev = _context3.next) {
                                case 0:
                                    if (!(this._umSDK == null)) {
                                        _context3.next = 2;
                                        break;
                                    }
                                    return _context3.abrupt("return");

                                case 2:
                                    _context3.prev = 2;
                                    _context3.next = 5;
                                    return this._umSDK.umSDK.fetchConfig();

                                case 5:
                                    config = _context3.sent;
                                    if (!(config == null)) {
                                        _context3.next = 8;
                                        break;
                                    }
                                    return _context3.abrupt("return");

                                case 8:
                                    console.log("在线参数", config);
                                    this.VideoStatus = Number(config.VideoStatus);
                                    this.VideoIconStatus = Number(config.VideoIconStatus);
                                    this.ExportStatus = Number(config.ExportStatus);
                                    this.BannerStatus = Number(config.BannerStatus);
                                    this.BannerDelayTimer = Number(config.BannerDelayTimer);
                                    this.BannerExcludeCity = config.BannerExcludeCity;
                                    this.MysticBoxStatus = Number(config.MysticBoxStatus);
                                    this.AutoRefreshBanner = Number(config.AutoRefreshBanner);
                                    this.OldUserExportStatus = Number(config.OldUserExportStatus);
                                    this.IconCallBackStatus = Number(config.IconCallBackStatus);
                                    this._checkLocation();
                                    this.BannerIdMap = config.BannerIdMap ? config.BannerIdMap.split(",") : [];
                                    _context3.next = 26;
                                    break;

                                case 23:
                                    _context3.prev = 23;
                                    _context3.t0 = _context3["catch"](2);
                                    console.log("在线参数加载失败 ========>", _context3.t0);

                                case 26:
                                case "end":
                                    return _context3.stop();
                            }
                        }
                    }, _callee3, this, [[2, 23]]);
                }));
            }
        }, {
            key: "_checkLocation",
            value: function _checkLocation() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee4() {
                    var Location;
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                        while (1) {
                            switch (_context4.prev = _context4.next) {
                                case 0:
                                    if (!(this.BannerExcludeCity === "")) {
                                        _context4.next = 2;
                                        break;
                                    }
                                    return _context4.abrupt("return");

                                case 2:
                                    _context4.next = 4;
                                    return this._umSDK.umSDK.fetchLocation();

                                case 4:
                                    Location = _context4.sent;
                                    if (Location && Location.province) {
                                        this.BannerStatus = this.BannerExcludeCity.indexOf(Location.province) === -1 ? this.BannerStatus : 0;
                                    }
                                    if (Location && Location.city) {
                                        this.BannerStatus = this.BannerExcludeCity.indexOf(Location.province) === -1 ? this.BannerStatus : 0;
                                    }

                                case 7:
                                case "end":
                                    return _context4.stop();
                            }
                        }
                    }, _callee4, this);
                }));
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (GameValue._instance == null) {
                    GameValue._instance = new GameValue();
                }
                return GameValue._instance;
            }
        }]);
        return GameValue;
    }();
    var BannerAD = /* */ function () {
        function BannerAD() {
            (0, _classCallCheck2.default)(this, BannerAD);
            this._bannerIsShow = false;
            this._showBannerIndex = 0;
        }
        (0, _createClass2.default)(BannerAD, [{
            key: "initBannerAD",
            value: function initBannerAD(umSDK) {
                // return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee5() {
                //     return _regenerator.default.wrap(function _callee5$(_context5) {
                //         while (1) {
                //             switch (_context5.prev = _context5.next) {
                //                 case 0:
                //                     this._umSDK = umSDK;
                //                     this._bannerMap = [];
                //                     _context5.next = 4;
                //                     return this._createBannerAD();

                //                 case 4:
                //                 case "end":
                //                     return _context5.stop();
                //             }
                //         }
                //     }, _callee5, this);
                // }));
            }
        }, {
            key: "showBanner",
            value: function showBanner() {
                // if (!Laya.Browser.onMiniGame) return;
                // if (this._bannerMap.length <= 0) return;
                // this.bannerIsShow = true;
                // this._currentBanner = this._bannerMap[this._showBannerIndex];
                // this._currentBanner.banner.show();
                // this._currentBanner.isShow = true;
            }
        }, {
            key: "hideBanner",
            value: function hideBanner() {
                // if (!Laya.Browser.onMiniGame) return;
                // if (this._bannerMap.length <= 0) return;
                // this.bannerIsShow = false;
                // this._bannerMap.forEach(function (item) {
                //     item.banner.hide();
                //     item.isShow = false;
                // });
            }
        }, {
            key: "_autoRefreshBanner",
            value: function _autoRefreshBanner() {
                // var _this4 = this;
                // if (this._timerStep == null) {
                //     this._timerStep = GameValue.Instance.AutoRefreshBanner;
                // }
                // this._closeRefreshBanner();
                // this._refreshBannerTimer = setInterval(function () {
                //     if (!_this4._bannerIsShow) return;
                //     _this4._timerStep -= 1;
                //     if (_this4._timerStep <= 0) {
                //         _this4._timerStep = GameValue.Instance.AutoRefreshBanner;
                //         console.log("refresh banner");
                //         _this4._refreshBanner();
                //     }
                // }, 1e3);
            }
        }, {
            key: "_closeRefreshBanner",
            value: function _closeRefreshBanner() {
                // clearInterval(this._refreshBannerTimer);
            }
        }, {
            key: "_refreshBanner",
            value: function _refreshBanner() {
                // if (this._bannerMap.length <= 0 && this._currentBanner) return;
                // var lastBanner = this._currentBanner;
                // lastBanner.banner.hide();
                // var index = this._bannerMap.findIndex(function (item) {
                //     return item.isShow;
                // });
                // if (index + 1 >= this._bannerMap.length) {
                //     this._showBannerIndex = 0;
                // } else {
                //     this._showBannerIndex = index + 1;
                // }
                // this._currentBanner = this._bannerMap[this._showBannerIndex];
                // this._currentBanner.banner.show();
                // this._currentBanner.isShow = true;
                // lastBanner.isShow = false;
            }
        }, {
            key: "_createBannerAD",
            value: function _createBannerAD() {
                // return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee6() {
                //     var params, i, adUnitId;
                //     return _regenerator.default.wrap(function _callee6$(_context6) {
                //         while (1) {
                //             switch (_context6.prev = _context6.next) {
                //                 case 0:
                //                     params = BannerParams;
                //                     params.adUnitId = GameValue.Instance.BannerIdMap;
                //                     if (!(params.adUnitId.length <= 0)) {
                //                         _context6.next = 4;
                //                         break;
                //                     }
                //                     return _context6.abrupt("return");

                //                 case 4:
                //                     i = 0;

                //                 case 5:
                //                     if (!(i < params.adUnitId.length)) {
                //                         _context6.next = 12;
                //                         break;
                //                     }
                //                     adUnitId = params.adUnitId[i];
                //                     _context6.next = 9;
                //                     return this._banner(adUnitId, params.slotId);

                //                 case 9:
                //                     i++;
                //                     _context6.next = 5;
                //                     break;

                //                 case 12:
                //                 case "end":
                //                     return _context6.stop();
                //             }
                //         }
                //     }, _callee6, this);
                // }));
            }
        }, {
            key: "_banner",
            value: function _banner(adUnitId, slotId) {
                // var _this5 = this;
                // return new Promise(function (resolve, reject) {
                //     var _wx$getSystemInfoSync = wx.getSystemInfoSync(), windowWidth = _wx$getSystemInfoSync.windowWidth, windowHeight = _wx$getSystemInfoSync.windowHeight;
                //     var banner = _this5._umSDK.umSDK.createBannerAd({
                //         adUnitId: adUnitId,
                //         slotId: slotId,
                //         adIntervals: 30,
                //         style: {
                //             left: 0,
                //             top: 0,
                //             width: windowWidth,
                //             height: 80
                //         }
                //     });
                //     banner.onError(function (err) {
                //         console.log("banner", err);
                //         resolve();
                //     });
                //     banner.onLoad(function () {
                //         console.log("banner 广告加载成功");
                //         _this5._bannerMap.push({
                //             banner: banner,
                //             isShow: false
                //         });
                //         resolve();
                //     });
                //     banner.onResize(function (size) {
                //         banner.style.top = windowHeight - size.height;
                //         banner.style.left = (windowWidth - size.width) / 2;
                //     });
                // });
            }
        }, {
            key: "bannerIsShow",
            set: function set(value) {
                // this._bannerIsShow = value;
                // if (value) {
                //     this._autoRefreshBanner();
                // } else {
                //     this._closeRefreshBanner();
                // }
            }
        }]);
        return BannerAD;
    }();
    var RecommendAD = /* */ function (_Laya$Script) {
        (0, _inherits2.default)(RecommendAD, _Laya$Script);
        var _super2 = _createSuper(RecommendAD);
        function RecommendAD() {
            (0, _classCallCheck2.default)(this, RecommendAD);
            return _super2.apply(this, arguments);
        }
        (0, _createClass2.default)(RecommendAD, [{
            key: "initRecommendAD",
            value: function initRecommendAD(umSDK) {
                this._umSDK = umSDK;
                this._recommendAwater = {};
                this._getRecommendData();
            }
        }, {
            key: "_getRecommendData",
            value: function _getRecommendData() {
                for (var key in ExportPageSlotID) {
                    if (this._recommendAwater[ExportPageSlotID[key]] != null) continue;
                    var iconAD = this._umSDK.umSDK.createIconAd({
                        slotId: ExportPageSlotID[key],
                        limit: 20
                    });
                    this._recommendAwater[ExportPageSlotID[key]] = iconAD.load();
                }
            }
        }, {
            key: "recommendAwater",
            get: function get() {
                return this._recommendAwater;
            }
        }]);
        return RecommendAD;
    }(Laya.Script);
    var ShareAD = /* */ function () {
        function ShareAD() {
            (0, _classCallCheck2.default)(this, ShareAD);
        }
        (0, _createClass2.default)(ShareAD, [{
            key: "initShareAD",
            value: function initShareAD(umSDK) {
                this._umSDK = umSDK;
            }
        }, {
            key: "shareAppMessage",
            value: function shareAppMessage() {
                this._umSDK.umSDK.shareAppMessage(ShareParams);
            }
        }]);
        return ShareAD;
    }();
    var AudioManager = /* */ function () {
        function AudioManager() {
            (0, _classCallCheck2.default)(this, AudioManager);
            this._mIsWx = Laya.Browser.onMiniGame;
            this._musicPool = {};
            this.musicStatus = true;
            this.audioStatus = true;
            this.vibrateStatus = true;
            this._bgmKey = null;
            this._bgmVolume = 1;
        }
        (0, _createClass2.default)(AudioManager, [{
            key: "init",
            value: function init() {
                this._musicBaseUrl = "music";
                this.setMusicStatus();
            }
        }, {
            key: "onPlayFunc",
            value: function onPlayFunc(target, res, name) {
                target.status = "play";
            }
        }, {
            key: "onPauseFunc",
            value: function onPauseFunc(target, res, name) {
                target.status = "paused";
            }
        }, {
            key: "onStopFunc",
            value: function onStopFunc(target, res, name) {
                target.status = "stop";
                if (!this._musicPool[name]) this._musicPool[name] = [];
                this._musicPool[name].push(target);
            }
        }, {
            key: "createAudio",
            value: function createAudio(name, type) {
                var _this6 = this;
                var target;
                var musicInfo = {
                    url: "".concat(this._musicBaseUrl, "/").concat(name)
                };
                if (this._mIsWx) {
                    target = wx.createInnerAudioContext();
                } else {
                    return {};
                }
                target.src = musicInfo.url;
                target.onPlay(function (res) {
                    _this6.onPlayFunc(target, res, name);
                });
                target.onStop(function (res) {
                    _this6.onStopFunc(target, res, name);
                });
                target.onPause(function (res) {
                    _this6.onPauseFunc(target, res, name);
                });
                target.onEnded(function (res) {
                    _this6.onStopFunc(target, res, name);
                });
                target.onError(function (e) { });
                return target;
            }
        }, {
            key: "playBgm",
            value: function playBgm(url) {
                if (!this.musicStatus) return;
                if (this._bgmKey == url) return;
                if (this._mIsWx) {
                    var target = this._musicPool[url] && this._musicPool[url].shift();
                    if (this._bgmChannel) {
                        this._bgmChannel.stop();
                        this._bgmChannel = null;
                    }
                    if (!target) {
                        return;
                    }
                    target.volume = this._bgmVolume;
                    target.nowPlay = true;
                    target.play();
                    this._bgmChannel = target;
                } else {
                    try {
                        Laya.SoundManager.playMusic("".concat(this._musicBaseUrl, "/").concat(url), 0);
                    } catch (e) { }
                }
                this._bgmKey = url;
            }
        }, {
            key: "playSound",
            value: function playSound(name) {
                var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                if (!this.audioStatus) return;
                if (this._mIsWx) {
                    if (name === "") return;
                    var target = this._musicPool[name] && this._musicPool[name].shift();
                    if (!target) {
                        return;
                    }
                    if (target.status === "paused") {
                        target.seek(0);
                    }
                    target.volume = volume;
                    target.play();
                } else {
                    try { } catch (e) { }
                }
            }
        }, {
            key: "_preloadMusic",
            value: function _preloadMusic(name) {
                var _this7 = this;
                if (this._mIsWx) {
                    return new Promise(function (resolve, reject) {
                        var target = _this7.createAudio(name, "music");
                        target.type = "music";
                        target.nowPlay = false;
                        target.loop = true;
                        if (!_this7._musicPool[name]) {
                            _this7._musicPool[name] = [];
                        }
                        var fun = function fun() {
                            _this7._musicPool[name].push(target);
                            target.offCanplay(fun);
                            resolve();
                        };
                        target.onCanplay(fun);
                    });
                }
            }
        }, {
            key: "preloadMusic",
            value: function preloadMusic(nameArray) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee7() {
                    var i;
                    return _regenerator.default.wrap(function _callee7$(_context7) {
                        while (1) {
                            switch (_context7.prev = _context7.next) {
                                case 0:
                                    i = 0;

                                case 1:
                                    if (!(i < nameArray.length)) {
                                        _context7.next = 7;
                                        break;
                                    }
                                    _context7.next = 4;
                                    return this._preloadMusic(nameArray[i]);

                                case 4:
                                    i++;
                                    _context7.next = 1;
                                    break;

                                case 7:
                                    return _context7.abrupt("return");

                                case 8:
                                case "end":
                                    return _context7.stop();
                            }
                        }
                    }, _callee7, this);
                }));
            }
        }, {
            key: "_preloadAudio",
            value: function _preloadAudio(name, count) {
                var _this8 = this;
                if (this._mIsWx) {
                    return new Promise(function (resolve, reject) {
                        if (!_this8._musicPool[name]) {
                            _this8._musicPool[name] = [];
                        }
                        var _loop = function _loop(i) {
                            var target = _this8.createAudio(name, "sound");
                            target.type = "audio";
                            var index = i;
                            var fun = function fun() {
                                _this8._musicPool[name].push(target);
                                target.offCanplay(fun);
                                if (index == count - 1) {
                                    resolve();
                                }
                            };
                            target.onCanplay(fun);
                        };
                        for (var i = 0; i < count; i++) {
                            _loop(i);
                        }
                    });
                }
            }
        }, {
            key: "preloadAudio",
            value: function preloadAudio(nameArray) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee8() {
                    var i, element;
                    return _regenerator.default.wrap(function _callee8$(_context8) {
                        while (1) {
                            switch (_context8.prev = _context8.next) {
                                case 0:
                                    i = 0;

                                case 1:
                                    if (!(i < nameArray.length)) {
                                        _context8.next = 8;
                                        break;
                                    }
                                    element = nameArray[i];
                                    _context8.next = 5;
                                    return this._preloadAudio(element.url, element.count);

                                case 5:
                                    i++;
                                    _context8.next = 1;
                                    break;

                                case 8:
                                    return _context8.abrupt("return");

                                case 9:
                                case "end":
                                    return _context8.stop();
                            }
                        }
                    }, _callee8, this);
                }));
            }
        }, {
            key: "musicControl",
            value: function musicControl(type) {
                if (type === "music") {
                    this.musicStatus = !this.musicStatus;
                    if (!this.musicStatus) {
                        this.closeMusic("music");
                    } else {
                        this.openMusic("music");
                    }
                } else if (type === "audio") {
                    this.audioStatus = !this.audioStatus;
                    if (!this.audioStatus) this.closeMusic("audio");
                } else if (type === "all_pause") {
                    this.pauseMusic();
                } else if (type === "all_resume") {
                    this.resumeMusic();
                }
                this.saveMusicStatus();
            }
        }, {
            key: "pauseMusic",
            value: function pauseMusic() {
                if (this._mIsWx) {
                    if (this._bgmChannel) this._bgmChannel.pause();
                }
            }
        }, {
            key: "resumeMusic",
            value: function resumeMusic() {
                if (this._mIsWx) {
                    if (this._bgmChannel && this._bgmChannel.status === "paused") this._bgmChannel.play();
                }
            }
        }, {
            key: "stopMusic",
            value: function stopMusic() {
                if (this._bgmKey) {
                    if (this._mIsWx) {
                        if (this._bgmChannel && this._bgmChannel.status === "play") {
                            this._bgmChannel.stop();
                        }
                    } else {
                        Laya.SoundManager.stopMusic();
                    }
                    this._bgmKey = null;
                }
            }
        }, {
            key: "closeMusic",
            value: function closeMusic(type) {
                if (this._bgmChannel) {
                    this._bgmChannel.nowPlay = true;
                    this._bgmChannel.stop();
                }
            }
        }, {
            key: "openMusic",
            value: function openMusic(type) {
                if (this._bgmChannel) {
                    this._bgmChannel.play();
                }
            }
        }, {
            key: "saveMusicStatus",
            value: function saveMusicStatus() {
                // Laya.LocalStorage.setJSON("Idle-Ants-music", {
                //     music: this.musicStatus,
                //     audio: this.audioStatus
                // });
            }
        }, {
            key: "setMusicStatus",
            value: function setMusicStatus() {
                // var status = Laya.LocalStorage.getJSON("Idle-Ants-music");
                // if (status) {
                //     this.musicStatus = status.music;
                //     this.audioStatus = status.audio;
                // }
                // status = Laya.LocalStorage.getJSON("Idle-Ants-vibrate");
                // if (status) {
                //     this.vibrateStatus = status.vibrate;
                // }
            }
        }, {
            key: "setVibrateStatus",
            value: function setVibrateStatus() {
                this.vibrateStatus = !this.vibrateStatus;
                Laya.LocalStorage.setJSON("Idle-Ants-vibrate", {
                    vibrate: this.vibrateStatus
                });
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (AudioManager._instance === null) AudioManager._instance = new AudioManager();
                return AudioManager._instance;
            }
        }]);
        return AudioManager;
    }();
    AudioManager._instance = null;
    var VideoAD = /* */ function () {
        function VideoAD() {
            (0, _classCallCheck2.default)(this, VideoAD);
            this._isVideoing = false;
            this._startVideo = false;
            this._videoStatus = null;
        }
        (0, _createClass2.default)(VideoAD, [{
            key: "initVideoAD",
            value: function initVideoAD(umSDK) {
                this._umSDK = umSDK;
            }
        }, {
            key: "_createVideoAD",
            value: function _createVideoAD(options) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee11() {
                    var _this9 = this;
                    var endFunc;
                    return _regenerator.default.wrap(function _callee11$(_context11) {
                        while (1) {
                            switch (_context11.prev = _context11.next) {
                                case 0:
                                    if (!(options.data.loc === "")) {
                                        _context11.next = 4;
                                        break;
                                    }
                                    this._isVideoing = false;
                                    options.caller && options.caller.call(this, {
                                        status: 0,
                                        tips: "请传入广告位"
                                    });
                                    return _context11.abrupt("return");

                                case 4:
                                    if (!(wx == null)) {
                                        _context11.next = 8;
                                        break;
                                    }
                                    if (options.caller) {
                                        options.caller.call(this, {
                                            status: 0,
                                            tips: "非头条平台无法播放视频"
                                        });
                                        this._videoAd = null;
                                    } else {
                                        this._defaultComplete(options);
                                    }
                                    this._isVideoing = false;
                                    return _context11.abrupt("return");

                                case 8:
                                    if (wx.createRewardedVideoAd) {
                                        _context11.next = 14;
                                        break;
                                    }
                                    options.fail_tips = "版本过低";
                                    options.caller && options.caller.call(this, {
                                        status: 0,
                                        tips: "版本过低，请升级版本"
                                    });
                                    this._videoAd = null;
                                    this._isVideoing = false;
                                    return _context11.abrupt("return");

                                case 14:
                                    options.preCallback && options.preCallback();
                                    if (!this._videoAd) {
                                        console.log("wx.createRewardedVideoAd==", "防止多次调用创建接口", this);
                                        this._videoAd = this._umSDK.umSDK.createRewardedVideoAd(VideoAdParams);
                                    }
                                    if (!options.callback) options.callback = this._defaultComplete;
                                    if (!options.caller) options.caller = null;
                                    if (!options.fail) options.fail = this._defaultFail;
                                    if (!options.error) options.error = this._defaultError;
                                    if (!options.fail_tips) options.fail_tips = "视频加载失败";
                                    if (!options.success_tips) options.success_tips = "";
                                    if (!options.failed_tips) options.failed_tips = "视频播放未完成";
                                    this._videoAd.endFunc && this._videoAd.offClose(this._videoAd.endFunc);
                                    this._errorPlayFunc && this._videoAd.offError(this._errorPlayFunc);
                                    _context11.prev = 25;
                                    this._errorPlayFunc = function (res) {
                                        return __awaiter(_this9, void 0, void 0, /* */ _regenerator.default.mark(function _callee9() {
                                            return _regenerator.default.wrap(function _callee9$(_context9) {
                                                while (1) {
                                                    switch (_context9.prev = _context9.next) {
                                                        case 0:
                                                            console.log("无法打开广告", "".concat(this._startVideo), res);
                                                            if (this._videoStatus === null) {
                                                                this._videoStatus = false;
                                                            }
                                                            if (!(this._startVideo === false)) {
                                                                _context9.next = 5;
                                                                break;
                                                            }
                                                            this._isVideoing = false;
                                                            return _context9.abrupt("return");

                                                        case 5:
                                                            this._startVideo = false;
                                                            _context9.next = 8;
                                                            return this._defaultError(options, res);

                                                        case 8:
                                                            options.failCallback.call(this, options);

                                                        case 9:
                                                        case "end":
                                                            return _context9.stop();
                                                    }
                                                }
                                            }, _callee9, this);
                                        }));
                                    };
                                    this._videoAd.onError(this._errorPlayFunc);
                                    endFunc = function endFunc(res) {
                                        return __awaiter(_this9, void 0, void 0, /* */ _regenerator.default.mark(function _callee10() {
                                            return _regenerator.default.wrap(function _callee10$(_context10) {
                                                while (1) {
                                                    switch (_context10.prev = _context10.next) {
                                                        case 0:
                                                            console.log("关闭视频========", res.isEnded);
                                                            if (this._videoStatus === null) {
                                                                this._videoStatus = true;
                                                            }
                                                            if (res.isEnded) {
                                                                options.callback.call(this, options);
                                                            } else {
                                                                if (options.fail) options.fail(options);
                                                                options.fail_tips = null;
                                                                options.failCallback.call(this, options);
                                                            }

                                                        case 3:
                                                        case "end":
                                                            return _context10.stop();
                                                    }
                                                }
                                            }, _callee10, this);
                                        }));
                                    };
                                    this._videoAd.endFunc = endFunc;
                                    this._videoAd.onClose(this._videoAd.endFunc);
                                    _context11.next = 33;
                                    return this._videoAd.load();

                                case 33:
                                    _context11.next = 35;
                                    return this._videoAd.show();

                                case 35:
                                    _context11.next = 49;
                                    break;

                                case 37:
                                    _context11.prev = 37;
                                    _context11.t0 = _context11["catch"](25);
                                    console.log("打开广告失败", "".concat(this._startVideo, " "));
                                    Laya.timer.scale = 1;
                                    if (!(this._startVideo === false)) {
                                        _context11.next = 44;
                                        break;
                                    }
                                    this._isVideoing = false;
                                    return _context11.abrupt("return");

                                case 44:
                                    this._startVideo = false;
                                    console.log("打开广告失败", "", JSON.stringify(_context11.t0));
                                    _context11.next = 48;
                                    return this._defaultError(options, _context11.t0);

                                case 48:
                                    options.failCallback.call(this, options);

                                case 49:
                                case "end":
                                    return _context11.stop();
                            }
                        }
                    }, _callee11, this, [[25, 37]]);
                }));
            }
        }, {
            key: "Video",
            value: function Video(option) {
                var time = new Date().getTime();
                if (this._startTime && time - this._startTime > 5e3 && this._isVideoing) {
                    this._isVideoing = false;
                }
                console.log("广告是否已经在播放中=====", "".concat(this._isVideoing, " "));
                if (this._isVideoing) {
                    return;
                }
                this._startTime = time;
                this._isVideoing = true;
                this._startVideo = true;
                AudioManager.Instance.pauseMusic();
                Laya.timer.scale = 0;
                this._createVideoAD({
                    data: {
                        loc: option.loc
                    },
                    preCallback: option.preCallback,
                    caller: option.callback,
                    callback: this._videoComplete,
                    failCallback: this._videoFail
                });
            }
        }, {
            key: "_videoComplete",
            value: function _videoComplete(options) {
                this._isVideoing = false;
                AudioManager.Instance.resumeMusic();
                Laya.timer.scale = 1;
                console.log("广告播放完成==========", "".concat(JSON.stringify(options), ", ").concat(this._isVideoing, " "));
                options.caller && options.caller({
                    status: 1,
                    tips: options.success_tips
                });
            }
        }, {
            key: "_videoFail",
            value: function _videoFail(options) {
                this._isVideoing = false;
                AudioManager.Instance.resumeMusic();
                Laya.timer.scale = 1;
                if (options.fail_tips) {
                    console.log("广告播放失败=========", "", "".concat(JSON.stringify(options), ", ").concat(this._isVideoing, " "));
                    options.caller && options.caller({
                        status: 0,
                        tips: options.fail_tips
                    });
                } else {
                    console.log("广告播放失败==用户主动关闭=======", {
                        status: 2,
                        tips: options.failed_tips
                    });
                    options.caller && options.caller({
                        status: 2,
                        tips: options.failed_tips
                    });
                }
            }
        }, {
            key: "_defaultError",
            value: function _defaultError(options, err) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee12() {
                    return _regenerator.default.wrap(function _callee12$(_context12) {
                        while (1) {
                            switch (_context12.prev = _context12.next) {
                                case 0:
                                case "end":
                                    return _context12.stop();
                            }
                        }
                    }, _callee12);
                }));
            }
        }, {
            key: "_defaultComplete",
            value: function _defaultComplete(options) { }
        }, {
            key: "_defaultFail",
            value: function _defaultFail(options) { }
        }]);
        return VideoAD;
    }();
    var UMSDK = /* */ function () {
        function UMSDK() {
            (0, _classCallCheck2.default)(this, UMSDK);
        }
        (0, _createClass2.default)(UMSDK, [{
            key: "init",
            value: function init() {
                var _this10 = this;
                return new Promise(function (resolve, reject) {
                    return __awaiter(_this10, void 0, void 0, /* */ _regenerator.default.mark(function _callee13() {
                        return _regenerator.default.wrap(function _callee13$(_context13) {
                            while (1) {
                                switch (_context13.prev = _context13.next) {
                                    case 0:
                                        this._umSdk = SDK.default;
                                        this._umSdk.init({
                                            gameId: GameID
                                        });
                                        _context13.next = 4;
                                        return GameValue.Instance.init(this);

                                    case 4:
                                        this._bannerAdController = new BannerAD();
                                        this._videoAdController = new VideoAD();
                                        this._shareAdController = new ShareAD();
                                        this._recommendAdController = new RecommendAD();
                                        _context13.next = 10;
                                        return this._bannerAdController.initBannerAD(this);

                                    case 10:
                                        this._videoAdController.initVideoAD(this);
                                        this._shareAdController.initShareAD(this);
                                        this._recommendAdController.initRecommendAD(this);
                                        resolve();

                                    case 14:
                                    case "end":
                                        return _context13.stop();
                                }
                            }
                        }, _callee13, this);
                    }));
                });
            }
        }, {
            key: "umSDK",
            get: function get() {
                return this._umSdk;
            }
        }, {
            key: "videoAdController",
            get: function get() {
                return this._videoAdController;
            }
        }, {
            key: "bannerAdController",
            get: function get() {
                return this._bannerAdController;
            }
        }, {
            key: "recommendAdController",
            get: function get() {
                return this._recommendAdController;
            }
        }, {
            key: "shareAdController",
            get: function get() {
                return this._shareAdController;
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (UMSDK._instance == null) {
                    UMSDK._instance = new UMSDK();
                }
                return UMSDK._instance;
            }
        }]);
        return UMSDK;
    }();
    var MysticalDialogController = /* */ function (_Laya$Script2) {
        (0, _inherits2.default)(MysticalDialogController, _Laya$Script2);
        var _super3 = _createSuper(MysticalDialogController);
        function MysticalDialogController() {
            var _this11;
            (0, _classCallCheck2.default)(this, MysticalDialogController);
            _this11 = _super3.apply(this, arguments);
            _this11._progressWidth = 565;
            _this11._errorStatus = false;
            _this11._stopProgress = false;
            return _this11;
        }
        (0, _createClass2.default)(MysticalDialogController, [{
            key: "init",
            value: function init(gameMainController) {
                this._gameMainController = gameMainController;
                this._root = this.owner;
                this._root.ClickBtn.on(Laya.Event.CLICK, this, this._clickHandle);
                this._root.ReceiveBtn.on(Laya.Event.CLICK, this, this._closeView);
                this._root.ReceiveBtn.visible = false;
                this._root.ClickBtn.visible = true;
                this._root.height += Utils.RealityY();
                this._errorStatus = false;
                this._stopProgress = false;
                this._root.boxscaleAni.on(Laya.Event.COMPLETE, this, this._onFinished);
                Laya.timer.loop(10, this, this._timerHandle);
            }
        }, {
            key: "_clickHandle",
            value: function _clickHandle() {
                if (!this._errorStatus) {
                    this._errorStatus = true;
                    this._errorBanner();
                }
                var width = this._root.Progress.width + this._progressWidth * .08;
                this._progressAni(width);
            }
        }, {
            key: "_timerHandle",
            value: function _timerHandle() {
                var width = this._root.Progress.width - this._progressWidth * .005;
                this._progressAni(width);
            }
        }, {
            key: "_progressAni",
            value: function _progressAni(width) {
                if (this._stopProgress) return;
                if (width >= this._progressWidth) {
                    Laya.timer.clear(this, this._timerHandle);
                    this._root.ClickBtn.visible = false;
                    this._root.boxscaleAni.play(0, false);
                    this._root.Glow.visible = true;
                    this._root.glowAni.play(0, true);
                    this._root.Progress.width = this._progressWidth;
                }
                if (width <= 0) {
                    this._root.Progress.width = 0;
                    return;
                }
                this._root.Progress.width = width;
            }
        }, {
            key: "_errorBanner",
            value: function _errorBanner() {
                var _this12 = this;
                setTimeout(function () {

                    _this12._stopProgress = true;
                    _this12._root.ClickBtn.visible = false;
                    _this12._root.boxscaleAni.play(0, false);
                    _this12._root.ReceiveBtn.visible = true;
                    setTimeout(function () {

                        _this12._closeView();
                    }, 2e3);
                }, 1e3);
            }
        }, {
            key: "_onFinished",
            value: function _onFinished() {
                this._root.ReceiveBtn.visible = true;
            }
        }, {
            key: "_closeView",
            value: function _closeView() {
                Laya.timer.clearAll(this);
                this._root.close();
                DataManager.Instance.coin += 200;
                this._gameMainController.gameSceneController.startGame();
                StorageManager.Instance.syncData();
            }
        }]);
        return MysticalDialogController;
    }(Laya.Script);
    var RecommendList = /* */ function (_Laya$Script3) {
        (0, _inherits2.default)(RecommendList, _Laya$Script3);
        var _super4 = _createSuper(RecommendList);
        function RecommendList() {
            var _this13;
            (0, _classCallCheck2.default)(this, RecommendList);
            _this13 = _super4.apply(this, arguments);
            _this13._showTimer = 0;
            _this13._data = [];
            return _this13;
        }
        (0, _createClass2.default)(RecommendList, [{
            key: "init",
            value: function init(pageType) {
                var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                var refresh = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
                var failCb = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                this._root = this.owner;
                this._pos = pos;
                this._isRefresh = refresh;
                this._failCb = failCb;
                if (!GameValue.Instance.ExportStatus) {
                    this._root.visible = false;
                    return;
                }
                this._pageType = pageType;
                this._pageSlotID = ExportPageSlotID[pageType];
                this._pageProp = ExportPageIconNum[pageType];
                this._iconCount = count ? count : this._pageProp.iconNum;
                this._root.array = [];
                this._root.scrollBar.hide = true;
                this._root.scrollBar.touchScrollEnable = false;
                this._updateRecommendList();
            }
        }, {
            key: "_updateRecommendList",
            value: function _updateRecommendList() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee14() {
                    var length, timer;
                    return _regenerator.default.wrap(function _callee14$(_context14) {
                        while (1) {
                            switch (_context14.prev = _context14.next) {
                                case 0:
                                    _context14.next = 2;
                                    return UMSDK.Instance.recommendAdController.recommendAwater[this._pageSlotID];

                                case 2:
                                    this._data = _context14.sent;
                                    if (this._isRefresh) {
                                        this._root.array = this._getRandomArrayElements(this._data, this._iconCount);
                                    } else {
                                        this._root.array = this._data.slice(this._pos, this._pos + this._iconCount);
                                    }
                                    this._root.renderHandler = new Laya.Handler(this, this._renderIcon);
                                    this._root.mouseHandler = new Laya.Handler(this, this._clickIcon);
                                    length = this._root.array.length;
                                    if (length > 6 && this._pageProp.listScrollAni !== "None") {
                                        timer = Math.abs((length - 6) / 3) * 1e4 + Math.abs((length - 6) / 3) * 9e3 + 500;
                                        this._ListAni(length);
                                        Laya.timer.loop(timer, this, this._ListAni, [length]);
                                    }

                                case 8:
                                case "end":
                                    return _context14.stop();
                            }
                        }
                    }, _callee14, this);
                }));
            }
        }, {
            key: "_ListAni",
            value: function _ListAni(length) {
                var _this14 = this;
                this._root.tweenTo(length - 1, Math.abs((length - 6) / 3) * 1e4, new Laya.Handler(this, function () {
                    _this14._root.tweenTo(0, Math.abs((length - 6) / 3) * 9e3);
                }));
            }
        }, {
            key: "_renderIcon",
            value: function _renderIcon(cell, index) {
                var cellData = cell.dataSource;
                var icon = cell.getChildByName("icon");
                var name = cell.getChildByName("name");
                var redDot = cell.getChildByName("redPoint");
                var nameBg = cell.getChildByName("nameBg");
                icon.skin = cellData.data.icon;
                if (name != null) {
                    name.text = cellData.data.title;
                }
                redDot.visible = cellData.dot();
                if (nameBg != null) {
                    nameBg.skin = this._getRandomBg();
                }
                if (this._pageProp.iconShaking) {
                    this._iconShake(cell);
                }
                cellData.show();
            }
        }, {
            key: "_getRandomArrayElements",
            value: function _getRandomArrayElements(arr, count) {
                var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
                while (i-- > min) {
                    index = Math.floor((i + 1) * Math.random());
                    temp = shuffled[index];
                    shuffled[index] = shuffled[i];
                    shuffled[i] = temp;
                }
                return shuffled.slice(min);
            }
        }, {
            key: "_iconShake",
            value: function _iconShake(icon) {
                if (icon.dataSource.timeLine) return;
                icon.dataSource.timeLine = new Laya.TimeLine();
                icon.dataSource.timeLine.addLabel("left", 0).to(icon, {
                    rotation: -20
                }, 200, Laya.Ease.linearIn, 0).addLabel("idle", 0).to(icon, {
                    rotation: 0
                }, 200, Laya.Ease.linearIn, 0).addLabel("right", 0).to(icon, {
                    rotation: 20
                }, 200, Laya.Ease.linearIn, 0).addLabel("idle", 0).to(icon, {
                    rotation: 0
                }, 200, Laya.Ease.linearIn, 0).addLabel("idle", 0).to(icon, {
                    rotation: 0
                }, 3e3, null, 0);
                icon.dataSource.timeLine.play(0, true);
            }
        }, {
            key: "_getRandomBg",
            value: function _getRandomBg() {
                var index = Math.ceil(Math.random() * 6);
                return "ExportUI/bg".concat(index, ".png");
            }
        }, {
            key: "_clickIcon",
            value: function _clickIcon(e, index) {
                if (e.type !== Laya.Event.CLICK) return;
                var data = this._root.array[index];
                data.click({
                    fail: this._clickIconFailHandle
                });
            }
        }, {
            key: "_clickIconFailHandle",
            value: function _clickIconFailHandle() {
                if (!GameValue.Instance.IconCallBackStatus || this._failCb) return;
                Laya.stage.event(EventData.IconCallBack);
            }
        }, {
            key: "randonIconClick",
            value: function randonIconClick() {
                if (this._data.length <= 0) return;
                var index = Math.floor(Math.random() * this._data.length);
                this._data[index].click();
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this._isRefresh) {
                    this._showTimer += Laya.timer.delta;
                    if (this._showTimer >= 2e4) {
                        this._root.array = this._getRandomArrayElements(this._data, this._iconCount);
                        this._showTimer = 0;
                    }
                }
            }
        }]);
        return RecommendList;
    }(Laya.Script);
    var NewMoreGameController = /* */ function (_Laya$Script4) {
        (0, _inherits2.default)(NewMoreGameController, _Laya$Script4);
        var _super5 = _createSuper(NewMoreGameController);
        function NewMoreGameController() {
            var _this15;
            (0, _classCallCheck2.default)(this, NewMoreGameController);
            _this15 = _super5.apply(this, arguments);
            _this15._bannerStatus = false;
            return _this15;
        }
        (0, _createClass2.default)(NewMoreGameController, [{
            key: "init",
            value: function init(gameMainController, pageType) {
                this._gameMainController = gameMainController;
                this._root = this.owner;
                this._root.ContinueBtn.on(Laya.Event.CLICK, this, this._closeDialog);
                this._root.height += Utils.RealityY();
                this._root.RecommendList.height += Utils.RealityY();
                this._recommendListController = this._root.RecommendList.addComponent(RecommendList);
                this._recommendListController.init(pageType);
            }
        }, {
            key: "setStatus",
            value: function setStatus(status) {
                this._pageStatus = status;
            }
        }, {
            key: "errBanner",
            value: function errBanner() {
                var _this16 = this;
                if (GameValue.Instance.BannerStatus) {
                    this._root.ContinueBtn.visible = true;
                    this._root.ContinueBtn.bottom = 0;
                    if (this._pageStatus) {
                        this._bannerHandle1();
                    } else {
                        Laya.timer.loop(1500, this, this._bannerHandle2);
                    }
                } else {
                    this._root.ContinueBtn.visible = false;
                    this._root.ContinueBtn.bottom = 260;
                    setTimeout(function () {
                        _this16._root.ContinueBtn.visible = true;
                    }, 2e3);

                }
            }
        }, {
            key: "_bannerHandle1",
            value: function _bannerHandle1() {
                var _this17 = this;
                setTimeout(function () {

                }, 1e3);
                setTimeout(function () {
                    Laya.Tween.to(_this17._root.ContinueBtn, {
                        bottom: 260
                    }, 500);
                }, 3e3);
            }
        }, {
            key: "_bannerHandle2",
            value: function _bannerHandle2() {
                if (this._bannerStatus) {

                    this._bannerStatus = false;
                } else {

                    this._bannerStatus = true;
                }
            }
        }, {
            key: "_closeDialog",
            value: function _closeDialog() {
                Laya.timer.clearAll(this);
                this._root.close();

                if (this._pageStatus) {
                    this._gameMainController.openExportView(ExportPage.ReturnPageView, true);
                } else {
                    this._gameMainController.openExportView(ExportPage.OldMoreGameView);
                }
            }
        }]);
        return NewMoreGameController;
    }(Laya.Script);
    var OldMoreGameController = /* */ function (_Laya$Script5) {
        (0, _inherits2.default)(OldMoreGameController, _Laya$Script5);
        var _super6 = _createSuper(OldMoreGameController);
        function OldMoreGameController() {
            var _this18;
            (0, _classCallCheck2.default)(this, OldMoreGameController);
            _this18 = _super6.apply(this, arguments);
            _this18._bannerStatus = false;
            return _this18;
        }
        (0, _createClass2.default)(OldMoreGameController, [{
            key: "init",
            value: function init(gameMainController) {
                this._root = this.owner;
                this._gameMainController = gameMainController;
                this._root.CloseBtn.on(Laya.Event.CLICK, this, this._closeDialog);
                this._root.height += Utils.RealityY();
                this._root.TopList.parent.height += Utils.RealityY();
                this._root.TopList.height += Utils.RealityY();
                this._topListController = this._root.TopList.addComponent(RecommendList);
                this._topListController.init(ExportPageType.OldMoreGameTopView);
                this._bottomListController = this._root.BottomList.addComponent(RecommendList);
                this._bottomListController.init(ExportPageType.OldMoreGameBottomView);
            }
        }, {
            key: "errBanner",
            value: function errBanner() {
                var _this19 = this;
                this._root.CloseBtn.visible = false;
                if (GameValue.Instance.BannerStatus) {
                    setTimeout(function () {
                        _this19._root.CloseBtn.visible = true;
                    }, 2e3);
                    this._root.CloseBtn.bottom = 197;
                    Laya.timer.loop(1500, this, this._bannerHandle);
                } else {
                    this._root.CloseBtn.visible = false;
                    this._root.CloseBtn.bottom = 197;
                    setTimeout(function () {
                        _this19._root.CloseBtn.visible = true;
                    }, 2e3);
                }
            }
        }, {
            key: "_bannerHandle",
            value: function _bannerHandle() {
                if (this._bannerStatus) {

                    this._bannerStatus = false;
                } else {

                    this._bannerStatus = true;
                }
            }
        }, {
            key: "_closeDialog",
            value: function _closeDialog() {
                Laya.timer.clearAll(this);
                this._root.close();

                if (GameValue.Instance.ExportStatus) {
                    this._gameMainController.openExportView(ExportPage.ReturnPageView);
                }
            }
        }]);
        return OldMoreGameController;
    }(Laya.Script);
    var OldUserController = /* */ function (_Laya$Script6) {
        (0, _inherits2.default)(OldUserController, _Laya$Script6);
        var _super7 = _createSuper(OldUserController);
        function OldUserController() {
            var _this20;
            (0, _classCallCheck2.default)(this, OldUserController);
            _this20 = _super7.apply(this, arguments);
            _this20._bannerStatus = false;
            return _this20;
        }
        (0, _createClass2.default)(OldUserController, [{
            key: "init",
            value: function init(gameMainController, pageType) {
                this._root = this.owner;
                this._gameMainController = gameMainController;
                this._root.CloseBtn.on(Laya.Event.CLICK, this, this._closeDialog);
                this._root.CloseBtn1.on(Laya.Event.CLICK, this, this._closeDialog);
                this._recommendListController = this._root.RecommendList.addComponent(RecommendList);
                this._recommendListController.init(pageType);
                this._root.height += Utils.RealityY();
            }
        }, {
            key: "errBanner",
            value: function errBanner() {
                var _this21 = this;
                if (GameValue.Instance.BannerStatus) {
                    this._root.CloseBtn.visible = true;
                    this._root.CloseBtn1.visible = false;
                    this._root.CloseBtn.bottom = 120;
                    Laya.timer.loop(1500, this, this._bannerHandle);
                } else {
                    this._root.CloseBtn1.visible = false;
                    this._root.CloseBtn.visible = false;
                    setTimeout(function () {
                        _this21._root.CloseBtn1.visible = true;
                    }, 2e3);

                }
            }
        }, {
            key: "_bannerHandle",
            value: function _bannerHandle() {
                if (this._bannerStatus) {

                    this._bannerStatus = false;
                } else {

                    this._bannerStatus = true;
                }
            }
        }, {
            key: "_closeDialog",
            value: function _closeDialog() {

                Laya.timer.clearAll(this);
                this._root.close();
                if (GameValue.Instance.MysticBoxStatus) {
                    this._gameMainController.openExportView(ExportPage.MysticalBoxView);
                }
            }
        }]);
        return OldUserController;
    }(Laya.Script);
    var ReturnPageController = /* */ function (_Laya$Script7) {
        (0, _inherits2.default)(ReturnPageController, _Laya$Script7);
        var _super8 = _createSuper(ReturnPageController);
        function ReturnPageController() {
            var _this22;
            (0, _classCallCheck2.default)(this, ReturnPageController);
            _this22 = _super8.apply(this, arguments);
            _this22._bannerStatus = false;
            return _this22;
        }
        (0, _createClass2.default)(ReturnPageController, [{
            key: "init",
            value: function init(gameMainController) {
                this._root = this.owner;
                this._gameMainController = gameMainController;
                this._root.BackBtn.on(Laya.Event.CLICK, this, this._closeDialog);
                this._root.ContinueBtn.on(Laya.Event.CLICK, this, this._openRandomIcon);
                this._root.height += Utils.RealityY();
                this._root.DownList.height += Utils.RealityY();
                this._topListController = this._root.UpList.addComponent(RecommendList);
                this._topListController.init(ExportPageType.ReturnPageTop);
                this._bottomListController = this._root.DownList.addComponent(RecommendList);
                this._bottomListController.init(ExportPageType.ReturnPageBottom);
            }
        }, {
            key: "setStatus",
            value: function setStatus(status) {
                this._pageStatus = status;
            }
        }, {
            key: "_openRandomIcon",
            value: function _openRandomIcon() {
                this._bottomListController.randonIconClick();
            }
        }, {
            key: "errBanner",
            value: function errBanner() {
                var _this23 = this;
                this._root.BackBtn.visible = false;
                setTimeout(function () {
                    _this23._root.BackBtn.visible = true;
                }, 2e3);
                if (GameValue.Instance.BannerStatus) {
                    this._root.ContinueBtn.visible = true;
                    this._root.ContinueBtn.bottom = 0;
                    if (this._pageStatus) {
                        this._bannerHandle1();
                    } else {
                        Laya.timer.loop(1500, this, this._bannerHandle2);
                    }
                } else {
                    this._root.ContinueBtn.visible = false;
                    this._root.ContinueBtn.bottom = 250;

                }
            }
        }, {
            key: "_bannerHandle1",
            value: function _bannerHandle1() {
                var _this24 = this;
                setTimeout(function () {

                }, 1e3);
                setTimeout(function () {
                    Laya.Tween.to(_this24._root.ContinueBtn, {
                        bottom: 260
                    }, 500);
                }, 3e3);
            }
        }, {
            key: "_bannerHandle2",
            value: function _bannerHandle2() {
                if (this._bannerStatus) {

                    this._bannerStatus = false;
                } else {

                    this._bannerStatus = true;
                }
            }
        }, {
            key: "_closeDialog",
            value: function _closeDialog() {
                Laya.timer.clearAll(this);

                this._root.close();
                if (!this._pageStatus) {
                    if (GameValue.Instance.MysticBoxStatus) {
                        this._gameMainController.openExportView(ExportPage.MysticalBoxView);
                    } else {
                        this._gameMainController.gameSceneController.startGame();
                    }
                }
            }
        }]);
        return ReturnPageController;
    }(Laya.Script);
    var GameSuccessController = /* */ function (_Laya$Script8) {
        (0, _inherits2.default)(GameSuccessController, _Laya$Script8);
        var _super9 = _createSuper(GameSuccessController);
        function GameSuccessController() {
            var _this25;
            (0, _classCallCheck2.default)(this, GameSuccessController);
            _this25 = _super9.apply(this, arguments);
            _this25._bannerStatus = false;
            _this25._status = false;
            return _this25;
        }
        (0, _createClass2.default)(GameSuccessController, [{
            key: "init",
            value: function init(gameMainController, coin) {
                this._gameMainController = gameMainController;
                this._prizeCoin = coin;
                this._root = this.owner;
                this._root.NextGameBtn.on(Laya.Event.CLICK, this, this._nextGame);
                this._root.VideoBtn.on(Laya.Event.CLICK, this, this._videoBtnHandle);
                this._root.height += Utils.RealityY();
                this._root.PrizeLabel.value = Utils.nFormatter(coin, 2);
                if (GameValue.Instance.VideoStatus) {
                    this._root.VideoBtn.visible = true;
                } else {
                    this._root.VideoBtn.visible = false;
                }
                if (GameValue.Instance.VideoIconStatus) {
                    this._root.VideoBtn.getChildByName("AD").visible = true;
                } else {
                    this._root.VideoBtn.getChildByName("AD").visible = false;
                }
                this._root.loadingLayer.visible = false;
            }
        }, {
            key: "_errBanner",
            value: function _errBanner() {
                var _this26 = this;
                if (GameValue.Instance.BannerStatus) {
                    this._root.NextGameBtn.visible = true;
                    this._root.NextGameBtn.bottom = -270 - Utils.RealityY() / 2;
                    this._root.NextGameBtn.centerX = 0;
                    Laya.timer.loop(2e3, this, this._bannerHandle);
                } else {
                    this._root.NextGameBtn.visible = false;
                    this._root.NextGameBtn.bottom = 554;
                    this._root.NextGameBtn.centerX = 234;
                    setTimeout(function () {
                        _this26._root.NextGameBtn.visible = true;
                    }, 2e3);

                }
            }
        }, {
            key: "_bannerHandle",
            value: function _bannerHandle() {
                if (this._bannerStatus) {

                    this._bannerStatus = false;
                } else {

                    this._bannerStatus = true;
                }
            }
        }, {
            key: "_nextGame",
            value: function _nextGame() {
                this._root.loadingLayer.visible = true;
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee15() {
                    return _regenerator.default.wrap(function _callee15$(_context15) {
                        while (1) {
                            switch (_context15.prev = _context15.next) {
                                case 0:
                                    if (!this._status) {
                                        _context15.next = 2;
                                        break;
                                    }
                                    return _context15.abrupt("return");

                                case 2:
                                    this._status = true;
                                    if (!(Laya.Browser.onMiniGame && GameValue.Instance.ExportStatus)) {
                                        _context15.next = 8;
                                        break;
                                    }
                                    // this._gameMainController.openExportView(ExportPage.NewMoreGameView);
                                    // this._gameMainController.gameSceneController.initScene();
                                    // _context15.next = 11;
                                    break;

                                case 8:
                                    _context15.next = 10;
                                    return this._gameMainController.gameSceneController.initScene();

                                case 10:
                                    this._gameMainController.gameSceneController.startGame();
                                case 11:
                                    this._closeDialog();
                                case 12:
                                case "end":
                                    return _context15.stop();
                            }
                        }
                    }, _callee15, this);
                }));
            }
        }, {
            key: "_videoBtnHandle",
            value: function _videoBtnHandle() {
                var _this27 = this;
                platform.getInstance().showReward(() => {
                    DataManager.Instance.coin += this._prizeCoin * 2;
                    this._nextGame();
                    StorageManager.Instance.syncData();
                })
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                console.log("销毁");
            }
        }, {
            key: "onDisable",
            value: function onDisable() {
                Laya.timer.clearAll(this);
                if (Laya.Browser.onMiniGame) {

                }
            }
        }, {
            key: "_closeDialog",
            value: function _closeDialog() {
                Laya.timer.clearAll(this);
                this._root.close();
            }
        }]);
        return GameSuccessController;
    }(Laya.Script);
    var StorageManager = /* */ function () {
        function StorageManager() {
            (0, _classCallCheck2.default)(this, StorageManager);
            this._firstAntColony = false;
            this._firstPrizeLevel = false;
        }
        (0, _createClass2.default)(StorageManager, [{
            key: "initData",
            value: function initData() {
                var _this28 = this;
                var data = null;
                data = Laya.LocalStorage.getJSON("Idle-Ants-save");
                if (data && data.hasOwnProperty("firstAntColony")) {
                    this._firstAntColony = data["firstAntColony"];
                } else {
                    this._firstAntColony = false;
                }
                DataManager.Instance.init(data);
                StorageManager.Instance.syncData();
            }
        }, {
            key: "syncData",
            value: function syncData() {
                var data = {
                    coin: DataManager.Instance.coin,
                    moveSpeedLevel: DataManager.Instance.moveSpeedLevel,
                    antCountLevel: DataManager.Instance.antCountLevel,
                    coinRateLevel: DataManager.Instance.coinRateLevel,
                    level: DataManager.Instance.level,
                    firstAntColony: this.firstAntColony,
                    firstPrizeLevel: this.firstPrizeLevel,
                    userLevel: DataManager.Instance.userLevel,
                    userExp: DataManager.Instance.userExp
                };
                Laya.LocalStorage.setJSON("Idle-Ants-save", data);
            }
        }, {
            key: "gameLifeCycleShow",
            value: function gameLifeCycleShow() { }
        }, {
            key: "gameLifeCycleHide",
            value: function gameLifeCycleHide() {
                this.syncData();
            }
        }, {
            key: "firstAntColony",
            get: function get() {
                return this._firstAntColony;
            },
            set: function set(value) {
                this._firstAntColony = value;
            }
        }, {
            key: "firstPrizeLevel",
            get: function get() {
                return this._firstPrizeLevel;
            },
            set: function set(value) {
                this._firstPrizeLevel = value;
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (!StorageManager._instance) {
                    StorageManager._instance = new StorageManager();
                }
                return StorageManager._instance;
            }
        }]);
        return StorageManager;
    }();
    var GameViewController = /* */ function (_Laya$Script9) {
        (0, _inherits2.default)(GameViewController, _Laya$Script9);
        var _super10 = _createSuper(GameViewController);
        function GameViewController() {
            var _this29;
            (0, _classCallCheck2.default)(this, GameViewController);
            _this29 = _super10.apply(this, arguments);
            _this29._maxProgressWidth = 423;
            _this29._antColonyBtnShow = false;
            _this29._isGameOver = false;
            _this29._showPrizeAnt = false;
            _this29._videoPrize = false;
            _this29._videoBtnIndex = -1;
            _this29._curPoint = 0;
            _this29._antKingBtnStat = 1;
            _this29._angle = -90;
            _this29._bannerTimer = false;
            return _this29;
        }
        (0, _createClass2.default)(GameViewController, [{
            key: "_recommendListChange2",
            value: function _recommendListChange2() {
                this._root.RecommendList4.visible = !this._root.RecommendList4.visible;
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                var _this30 = this;
                this._root = this.owner;
                Laya.stage.on(EventData.UpdateCoin, this, this._setCoinLabel);
                Laya.stage.on(EventData.UpdateAntCount, this, function () {
                    _this30._setAntCountLabel();
                    _this30._setAntCountBtn();
                });
                Laya.stage.on(EventData.UpdateLevelProgress, this, this._setLevelProgress);
                Laya.stage.on(EventData.UpgradeMoveSpeed, this, this._setMoveSpeedBtn);
                Laya.stage.on(EventData.UpgradeCoinRate, this, this._setCoinRateBtn);
                Laya.stage.on(EventData.AntKingTimer, this, this._updateAntKingProgress);
                Laya.stage.on(EventData.AddExp, this, this._setUserLevel);
                this._root.SkillBtn1.on(Laya.Event.CLICK, this, function () {
                    _this30._upgradeVideoHandle(1);
                });
                this._root.SkillBtn2.on(Laya.Event.CLICK, this, function () {
                    _this30._upgradeVideoHandle(2);
                });
                this._root.SkillBtn3.on(Laya.Event.CLICK, this, function () {
                    _this30._upgradeVideoHandle(3);
                });
                this._root.AntColonyBtn.on(Laya.Event.CLICK, this, this._antColonyHandle);
                this._root.AntKingBtn.on(Laya.Event.CLICK, this, this._callAntKing);
                this._root.DoublePrizeBtn.on(Laya.Event.CLICK, this, this._doublePrizeHandle);
                this._root.LevelUpBtn.on(Laya.Event.CLICK, this, this._levelUpHandle);
                this._root.musicState.on(Laya.Event.CLICK, this, this._musicChange);
                this._root.musicState.skin = window.WebAudioEngine.pause ? "UI/btn_sound_off.png" : "UI/btn_sound_on.png";
            }
        }, {
            key: "_musicChange",
            value: function _musicChange() {
                window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
                Laya.LocalStorage.setJSON("Idle-Ants-music", window.WebAudioEngine.pause);
                this._root.musicState.skin = window.WebAudioEngine.pause ? "UI/btn_sound_off.png" : "UI/btn_sound_on.png";
            }
        }, {
            key: "_upgradeVideoHandle",
            value: function _upgradeVideoHandle(index) {
                var _this31 = this;
                // if (Laya.Browser.onMiniGame && this._videoPrize && this._videoBtnIndex === index) {
                //     if (Laya.Browser.onMiniGame) {
                //         UMSDK.Instance.videoAdController.Video({
                //             loc: "UpgradeSkill",
                //             callback: function callback(result) {
                //                 if (result.status === 1) {
                //                     _this31._completeVideoHandle(index, false);
                //                     _this31._videoBtnIndex = -1;
                //                     _this31._videoPrize = false;
                //                     _this31._setUpgradeBtnVideo();
                //                 } else {
                //                     result.tips && wx.showToast({
                //                         title: result.tips,
                //                         icon: "none"
                //                     });
                //                 }
                //             }
                //         });
                //     } else {
                //         this._completeVideoHandle(index, false);
                //         this._videoBtnIndex = -1;
                //         this._videoPrize = false;
                //         this._setUpgradeBtnVideo();
                //     }
                // } else {
                //     this._completeVideoHandle(index, true);
                // }
                if (this._videoPrize && this._videoBtnIndex === index) {
                    platform.getInstance().showReward(() => {
                        _this31._completeVideoHandle(index, false);
                        _this31._videoBtnIndex = -1;
                        _this31._videoPrize = false;
                        _this31._setUpgradeBtnVideo();
                    })
                } else {
                    this._completeVideoHandle(index, true);
                }
            }
        }, {
            key: "_completeVideoHandle",
            value: function _completeVideoHandle(index, cost) {
                switch (index) {
                    case 1:
                        this._moveSpeedHandle(cost);
                        break;

                    case 2:
                        this._antCountHandle(cost);
                        break;

                    case 3:
                        this._coinRateHandle(cost);
                        break;
                }
            }
        }, {
            key: "_moveSpeedHandle",
            value: function _moveSpeedHandle(stat) {
                DataManager.Instance.upgradeMoveSpeed(stat);
                this._setBtnClickAni(this._root.SkillBtn1);
                AudioManager.Instance.playSound("audio_speed.mp3");
                this._playUpgradeAni(this._root.SkillBtn1);
                if (Laya.Browser.onMiniGame) {
                    wx.vibrateShort();
                }
                this._errBanner(1);
            }
        }, {
            key: "_antCountHandle",
            value: function _antCountHandle(stat) {
                DataManager.Instance.upgradeAntCount(stat);
                this._setBtnClickAni(this._root.SkillBtn2);
                this._playUpgradeAni(this._root.SkillBtn2);
                if (Laya.Browser.onMiniGame) {
                    wx.vibrateShort();
                }
                this._errBanner(2);
            }
        }, {
            key: "_coinRateHandle",
            value: function _coinRateHandle(stat) {
                DataManager.Instance.upgradeCoinRate(stat);
                this._setBtnClickAni(this._root.SkillBtn3);
                AudioManager.Instance.playSound("audio_coin.mp3");
                this._playUpgradeAni(this._root.SkillBtn3);
                if (Laya.Browser.onMiniGame) {
                    wx.vibrateShort();
                }
                this._errBanner(3);
            }
        }, {
            key: "init",
            value: function init(gameMainController) {
                this._gameMainController = gameMainController;
                this._setMoveSpeedBtn();
                this._setAntCountBtn();
                this._setCoinRateBtn();
                this._setCoinLabel();
                this._setAntCountLabel();
                this._setAntKingBtn();
                this._setUserLevel();
                if (Laya.Browser.onMiniGame && GameValue.Instance.ExportStatus) {
                    var listController1 = this._root.RecommendList1.addComponent(RecommendList);
                    listController1.init(ExportPageType.GameViewIcon, 1, 0, true, true);
                    var listController2 = this._root.RecommendList2.addComponent(RecommendList);
                    listController2.init(ExportPageType.GameViewIcon, 1, 1, true, true);
                    var listController4 = this._root.RecommendList4.addComponent(RecommendList);
                    listController4.init(ExportPageType.GameViewIcon, 2, 4, true, true);
                } else {
                    this._root.RecommendList1.visible = false;
                    this._root.RecommendList2.visible = false;
                    this._root.RecommendList4.visible = false;
                }
            }
        }, {
            key: "_setUserLevel",
            value: function _setUserLevel() {
                this._root.UserLevelLabel.value = DataManager.Instance.userLevel.toString();
                var width = DataManager.Instance.userExp / LEVEL_EXP[DataManager.Instance.userLevel] * 240;
                Laya.Tween.to(this._root.Progress, {
                    width: width
                }, 200);
                if (DataManager.Instance.userExp >= LEVEL_EXP[DataManager.Instance.userLevel]) {
                    this._root.LevelUpBtn.visible = true;
                    this._root.LevelUpAni.play(0, true);
                    if (DataManager.Instance.userLevel === 1) {
                        this._root.LevelUpBtn.getChildAt(0).visible = true;
                        this._root.NewPlayerAni1.play(0, true);
                    } else {
                        this._root.NewPlayerAni1.stop();
                        this._root.LevelUpBtn.getChildAt(0).visible = false;
                    }
                    StorageManager.Instance.syncData();
                } else {
                    this._root.LevelUpBtn.visible = false;
                    this._root.LevelUpBtn.getChildAt(0).visible = false;
                    this._root.LevelUpAni.stop();
                    this._root.NewPlayerAni1.stop();
                }
            }
        }, {
            key: "_setCoinLabel",
            value: function _setCoinLabel() {
                this._root.CoinLabel.value = Utils.nFormatter(DataManager.Instance.coin, 2);
                this._root.CoinAni.play(0, false);
                if ((DataManager.Instance.coin >= this._moveSpeedCost || this._videoPrize && this._videoBtnIndex === 1) && DataManager.Instance.moveSpeedLevel != MAX_MOVESPEED_LEVEL) {
                    this._root.upgradeBtn1.visible = true;
                    this._root.upgradeAni1.play(0, true);
                    this._root.SkillBtn1.disabled = false;
                    this._setBtnScaleAni(this._root.SkillBtn1, 1);
                } else {
                    this._root.upgradeBtn1.visible = false;
                    this._root.SkillBtn1.disabled = true;
                    this._setBtnScaleAni(this._root.SkillBtn1, .9);
                    if (DataManager.Instance.moveSpeedLevel == MAX_MOVESPEED_LEVEL) {
                        this._root.SkillLevel1.text = "MAX";
                        this._root.SkillCoin1.value = "";
                    }
                }
                if ((DataManager.Instance.coin >= this._antCountCost || this._videoPrize && this._videoBtnIndex === 2) && DataManager.Instance.antCountLevel != MAX_ANT_COUNT) {
                    this._root.upgradeBtn2.visible = true;
                    this._root.upgradeAni2.play(0, true);
                    this._root.SkillBtn2.disabled = false;
                    this._setBtnScaleAni(this._root.SkillBtn2, 1);
                    this._playerNewPlayer();
                } else {
                    this._root.upgradeBtn2.visible = false;
                    this._root.SkillBtn2.disabled = true;
                    this._root.NewPlayer.visible = false;
                    this._setBtnScaleAni(this._root.SkillBtn2, .9);
                    if (DataManager.Instance.antCountLevel == MAX_ANT_COUNT) {
                        this._root.SkillLevel2.text = "MAX";
                        this._root.SkillCoin2.value = "";
                    }
                }
                if ((DataManager.Instance.coin >= this._coinRateCost || this._videoPrize && this._videoBtnIndex === 3) && DataManager.Instance.coinRateLevel != MAX_COINRATE_LEVEL) {
                    this._root.upgradeBtn3.visible = true;
                    this._root.upgradeAni3.play(0, true);
                    this._root.SkillBtn3.disabled = false;
                    this._setBtnScaleAni(this._root.SkillBtn3, 1);
                } else {
                    this._root.upgradeBtn3.visible = false;
                    this._root.SkillBtn3.disabled = true;
                    this._setBtnScaleAni(this._root.SkillBtn3, .9);
                    if (DataManager.Instance.coinRateLevel == MAX_COINRATE_LEVEL) {
                        this._root.SkillLevel2.text = "MAX";
                        this._root.SkillCoin3.value = "";
                    }
                }
            }
        }, {
            key: "_setAntCountLabel",
            value: function _setAntCountLabel() {
                this._root.AntLabel.value = DataManager.Instance.antCount.toString();
                this._root.AntCountAni.play(0, false);
            }
        }, {
            key: "_setLevelProgress",
            value: function _setLevelProgress(cur, max) {
                var width = cur / max * this._maxProgressWidth;
                if (width >= this._maxProgressWidth) width = this._maxProgressWidth;
                var rate = width / this._maxProgressWidth;
                // if (!this._antColonyBtnShow && rate > .01 && rate < .75) {
                //     this._curPoint = max * .6;
                this._showAntColonyBtn(true);
                // }
                // if (rate >= .75) {
                //     this._showAntColonyBtn(false);
                // }
                if (this._antColonyBtnShow) {
                    var point = max * .75;
                    this._curPoint -= 1;
                    this._root.AntColonyProgress.width = this._curPoint / point * 123;
                }
            }
        }, {
            key: "_setMoveSpeedBtn",
            value: function _setMoveSpeedBtn() {
                var moveSpeedConfig = ConfigManager.Instance.moveSpeedConfig[DataManager.Instance.moveSpeedLevel + 1];
                this._root.SkillLevel1.text = "LV ".concat(DataManager.Instance.moveSpeedLevel);
                this._root.SkillCoin1.value = Utils.nFormatter(moveSpeedConfig.CostCoin, 2);
                this._moveSpeedCost = moveSpeedConfig.CostCoin;
                if (DataManager.Instance.coin >= this._moveSpeedCost && DataManager.Instance.moveSpeedLevel != MAX_MOVESPEED_LEVEL) {
                    this._root.upgradeBtn1.visible = true;
                    this._root.upgradeAni1.play(0, true);
                    this._root.SkillBtn1.disabled = false;
                    this._setBtnScaleAni(this._root.SkillBtn1, 1);
                    StorageManager.Instance.syncData();
                } else {
                    this._root.upgradeBtn1.visible = false;
                    this._root.SkillBtn1.disabled = true;
                    this._setBtnScaleAni(this._root.SkillBtn1, .9);
                    if (DataManager.Instance.moveSpeedLevel == MAX_MOVESPEED_LEVEL) {
                        this._root.SkillLevel1.text = "MAX";
                        this._root.SkillCoin1.value = "";
                    }
                }
            }
        }, {
            key: "_setAntCountBtn",
            value: function _setAntCountBtn() {
                var antCountCost = ANT_COUNT_COST[DataManager.Instance.antCountLevel];
                this._root.SkillLevel2.text = "LV ".concat(DataManager.Instance.antCountLevel);
                this._root.SkillCoin2.value = Utils.nFormatter(antCountCost, 2);
                this._antCountCost = antCountCost;
                if (DataManager.Instance.coin >= this._antCountCost && DataManager.Instance.antCountLevel != MAX_ANT_COUNT) {
                    this._root.upgradeBtn2.visible = true;
                    this._root.upgradeAni2.play(0, true);
                    this._root.SkillBtn2.disabled = false;
                    this._setBtnScaleAni(this._root.SkillBtn2, 1);
                    this._playerNewPlayer();
                    StorageManager.Instance.syncData();
                } else {
                    this._root.upgradeBtn2.visible = false;
                    this._root.SkillBtn2.disabled = true;
                    this._setBtnScaleAni(this._root.SkillBtn2, .9);
                    this._root.NewPlayer.visible = false;
                    if (DataManager.Instance.antCountLevel == MAX_ANT_COUNT) {
                        this._root.SkillLevel2.text = "MAX";
                        this._root.SkillCoin2.value = "";
                    }
                }
            }
        }, {
            key: "_setCoinRateBtn",
            value: function _setCoinRateBtn() {
                var coinRateConfig = ConfigManager.Instance.coinRateConfig[DataManager.Instance.coinRateLevel + 1];
                this._root.SkillLevel3.text = "LV ".concat(DataManager.Instance.coinRateLevel);
                this._root.SkillCoin3.value = Utils.nFormatter(coinRateConfig.CostCoin, 2);
                this._coinRateCost = coinRateConfig.CostCoin;
                if (DataManager.Instance.coin >= this._coinRateCost && DataManager.Instance.coinRateLevel != MAX_COINRATE_LEVEL) {
                    this._root.upgradeBtn3.visible = true;
                    this._root.upgradeAni3.play(0, true);
                    this._root.SkillBtn3.disabled = false;
                    this._setBtnScaleAni(this._root.SkillBtn3, 1);
                    StorageManager.Instance.syncData();
                } else {
                    this._root.upgradeBtn3.visible = false;
                    this._root.SkillBtn3.disabled = true;
                    this._setBtnScaleAni(this._root.SkillBtn3, .9);
                    if (DataManager.Instance.coinRateLevel == MAX_COINRATE_LEVEL) {
                        this._root.SkillLevel2.text = "MAX";
                        this._root.SkillCoin3.value = "";
                    }
                }
            }
        }, {
            key: "_setUpgradeBtnVideo",
            value: function _setUpgradeBtnVideo() {
                var btnIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
                if (GameValue.Instance.VideoStatus && btnIndex !== -1) {
                    this._videoPrize = true;
                    this._root["SkillBtn".concat(btnIndex)].getChildByName("ADText").visible = true;
                    this._root["SkillBtn".concat(btnIndex)].getChildByName("SkillCoinIcon").visible = false;
                    this._root["SkillCoin".concat(btnIndex)].visible = false;
                    if (GameValue.Instance.VideoIconStatus) {
                        this._root["SkillBtn".concat(btnIndex)].getChildByName("ADIcon").visible = true;
                    } else {
                        this._root["SkillBtn".concat(btnIndex)].getChildByName("ADIcon").visible = false;
                    }
                    this._root["SkillBtn".concat(btnIndex)].disabled = false;
                    this._root["upgradeAni".concat(btnIndex)].play(0, true);
                    this._setBtnScaleAni(this._root["SkillBtn".concat(btnIndex)], 1);
                } else {
                    this._root.SkillBtn1.getChildByName("ADText").visible = false;
                    this._root.SkillBtn1.getChildByName("ADIcon").visible = false;
                    this._root.SkillBtn1.getChildByName("SkillCoinIcon").visible = true;
                    this._root.SkillCoin1.visible = true;
                    this._root.SkillBtn2.getChildByName("ADText").visible = false;
                    this._root.SkillBtn2.getChildByName("ADIcon").visible = false;
                    this._root.SkillBtn2.getChildByName("SkillCoinIcon").visible = true;
                    this._root.SkillCoin2.visible = true;
                    this._root.SkillBtn3.getChildByName("ADText").visible = false;
                    this._root.SkillBtn3.getChildByName("ADIcon").visible = false;
                    this._root.SkillBtn3.getChildByName("SkillCoinIcon").visible = true;
                    this._root.SkillCoin3.visible = true;
                }
            }
        }, {
            key: "_setBtnScaleAni",
            value: function _setBtnScaleAni(btn, num) {
                Laya.Tween.to(btn, {
                    scaleX: num,
                    scaleY: num
                }, 200, null);
            }
        }, {
            key: "_setBtnClickAni",
            value: function _setBtnClickAni(btn) {
                var _this32 = this;
                Laya.Tween.to(btn, {
                    scaleX: 1.1,
                    scaleY: 1.1
                }, 100, Laya.Ease.bounceIn, Laya.Handler.create(this, function () {
                    Laya.Tween.to(btn, {
                        scaleX: 1,
                        scaleY: 1
                    }, 100, Laya.Ease.bounceOut, Laya.Handler.create(_this32, function () {
                        _this32._setCoinLabel();
                    }));
                }));
            }
        }, {
            key: "_playUpgradeAni",
            value: function _playUpgradeAni(btn) {
                this._root.Upgrade.x = btn.x;
                this._root.Upgrade.y = btn.y;
                this._root.Upgrade.visible = true;
                this._root.UpgradeAni.play(0, false);
            }
        }, {
            key: "_playerNewPlayer",
            value: function _playerNewPlayer() {
                if (DataManager.Instance.antCountLevel <= 3) {
                    this._root.NewPlayer.visible = true;
                    this._root.NewPlayerAni.play(0, true);
                } else {
                    this._root.NewPlayer.visible = false;
                }
            }
        }, {
            key: "_showAntColonyBtn",
            value: function _showAntColonyBtn(visible) {
                var _this33 = this;
                // if (visible && GameValue.Instance.VideoStatus && DataManager.Instance.antCountLevel > 3) {
                this._setAntColonyBtn();
                this._antColonyBtnShow = true;
                this._root.AntColonyBtn.scale(1, 1);
                this._root.AntColonyBtn.visible = true;
                // Laya.Tween.to(this._root.AntColonyBtn, {
                //     scaleX: 1,
                //     scaleY: 1
                // }, 300, Laya.Ease.bounceOut, Laya.Handler.create(this, function () {
                //     _this33._root.AntColonyAni.play(0, true);
                // }));
                // } else {
                //     this._root.AntColonyBtn.visible = false;
                //     this._root.AntColonyAni.stop();
                //     this._antColonyBtnShow = false;
                // }
            }
        }, {
            key: "_setAntColonyBtn",
            value: function _setAntColonyBtn() {
                if (!StorageManager.Instance.firstAntColony) {
                    this._root.AntColonyBtn.getChildByName("AD").visible = false;
                    this._root.AntColonyBtn.getChildByName("firstText").visible = true;
                } else {
                    if (GameValue.Instance.VideoIconStatus) {
                        this._root.AntColonyBtn.getChildByName("AD").visible = true;
                    } else {
                        this._root.AntColonyBtn.getChildByName("AD").visible = false;
                    }
                    this._root.AntColonyBtn.getChildByName("firstText").visible = false;
                }
            }
        }, {
            key: "_antColonyHandle",
            value: function _antColonyHandle() {
                var _this34 = this;
                if (!StorageManager.Instance.firstAntColony) {
                    Laya.stage.event(EventData.UpdateAntCount, [10, true]);
                    StorageManager.Instance.firstAntColony = true;
                    this._setAntColonyBtn();
                    StorageManager.Instance.syncData();
                } else {
                    platform.getInstance().showReward(() => {
                        Laya.stage.event(EventData.UpdateAntCount, 10);
                    })
                }
            }
        }, {
            key: "_setAntKingBtn",
            value: function _setAntKingBtn() {
                if (GameValue.Instance.VideoStatus) {
                    this._root.AntKingBtn.visible = true;
                } else {
                    this._root.AntKingAni.stop();
                }
                // this.antKingBtnStat = 1;
            }
        }, {
            key: "_drawPie",
            value: function _drawPie() {
                this._root.img_box.graphics.clear();
                this._root.img_box.graphics.drawPie(63, 63, 63, -90, this._angle, "#00ff00", "#00ff00");
            }
        }, {
            key: "_callAntKing",
            value: function _callAntKing() {
                // if (this._antKingBtnStat === 1) {
                //     this._antKingClickHandle();
                // }
                // if (this._antKingBtnStat === 2) {
                this._antKingVideoHandle();
                // }
                this._root.AntKingAni.play(0, false);
            }
        }, {
            key: "_antKingClickHandle",
            value: function _antKingClickHandle() {
                // var angle = this.angle + 360 * .08;
                // this._progressAni(angle);
                // if (angle > 120) {
                this._antKingVideoHandle();
                // }
            }
        }, {
            key: "_progressChangeLoop",
            value: function _progressChangeLoop() {
                var angle = this.angle - 360 * .01;
                this._progressAni(angle);
            }
        }, {
            key: "_progressAni",
            value: function _progressAni(angle) {
                // if (angle >= 270) {
                //     this.antKingBtnStat = 2;
                //     this.angle = 270;
                //     return;
                // }
                // if (angle <= -90) {
                //     this.angle = -90;
                //     return;
                // }
                // this.angle = angle;
            }
        }, {
            key: "_antKingVideoHandle",
            value: function _antKingVideoHandle() {
                var _this35 = this;
                platform.getInstance().showReward(() => {
                    this._antKingHandle();
                })
            }
        }, {
            key: "_antKingHandle",
            value: function _antKingHandle() {
                if (this._isGameOver) return;
                this._gameMainController.gameSceneController.addAntKing();
            }
        }, {
            key: "_updateAntKingProgress",
            value: function _updateAntKingProgress(step) {
                // if (step <= 0) {
                //     this.angle = 0;
                //     this.antKingBtnStat = 1;
                // } else {
                //     this.angle = step / 120 * 360 - 90;
                // }
            }
        }, {
            key: "_setDoublePrizeBtn",
            value: function _setDoublePrizeBtn() {
                var _this36 = this;
                if (GameValue.Instance.VideoStatus) {
                    this._root.DoublePrizeBtn.scale(1, 1);
                    this._root.DoublePrizeBtn.visible = true;
                    // Laya.Tween.to(this._root.DoublePrizeBtn, {
                    //     scaleX: 1,
                    //     scaleY: 1
                    // }, 300, Laya.Ease.bounceOut, Laya.Handler.create(this, function () {
                    //     _this36._root.DoublePrizeAni.play(0, true);
                    // }));
                } else {
                    this._root.DoublePrizeBtn.visible = false;
                }
                if (GameValue.Instance.VideoIconStatus) {
                    this._root.DoublePrizeBtn.getChildByName("AD").visible = true;
                } else {
                    this._root.DoublePrizeBtn.getChildByName("AD").visible = false;
                }
                this._stopDoublePrizeAni();
            }
        }, {
            key: "_doublePrizeHandle",
            value: function _doublePrizeHandle() {
                var _this37 = this;
                platform.getInstance().showReward(() => {
                    DataManager.Instance.setDoubleCoin(2);
                    this._root.DoublePrizeBtn.visible = false;
                    this._playDoublePrizeAni();
                })
            }
        }, {
            key: "_playDoublePrizeAni",
            value: function _playDoublePrizeAni() {
                this._root.PrizeOutLine.visible = true;
                this._root.PrizeOutAni.play(0, true);
            }
        }, {
            key: "_stopDoublePrizeAni",
            value: function _stopDoublePrizeAni() {
                this._root.PrizeOutAni.stop();
                this._root.PrizeOutLine.visible = false;
            }
        }, {
            key: "_errBanner",
            value: function _errBanner(type) {
                var _this38 = this;
                if (this._bannerTimer) return;
                if (!Laya.Browser.onMiniGame || !DataManager.Instance.checkCoin(type) || !GameValue.Instance.BannerStatus) return;
                this._bannerTimer = true;
                Laya.timer.once(250, this, function () {

                });
                Laya.timer.once(1250, this, function () {

                });
                Laya.timer.once(4250, this, function () {
                    _this38._bannerTimer = false;
                });
            }
        }, {
            key: "_levelUpHandle",
            value: function _levelUpHandle() {
                this._gameMainController.openLevelUpDialog();
            }
        }, {
            key: "root",
            get: function get() {
                return this._root;
            }
        }, {
            key: "isGameOver",
            get: function get() {
                return this._isGameOver;
            },
            set: function set(value) {
                this._isGameOver = value;
                if (!this._isGameOver) {
                    this._root.AntKingBtn.parent.visible = true;
                    this._root.btnView.visible = true;
                    this._showPrizeAnt = false;
                    Laya.timer.clear(this, this._recommendListChange2);
                    if (Laya.Browser.onMiniGame && GameValue.Instance.ExportStatus) {
                        this._root.RecommendList1.visible = true;
                        this._root.RecommendList2.visible = true;
                        this._root.RecommendList4.visible = false;
                        Laya.timer.once(12e3, this, this._recommendListChange2);
                    } else {
                        this._root.RecommendList1.visible = false;
                        this._root.RecommendList2.visible = false;
                        this._root.RecommendList4.visible = false;
                    }
                    DataManager.Instance.setDoubleCoin(1);
                    this._setDoublePrizeBtn();
                    this._setUpgradeBtnVideo();
                }
            }
        }, {
            key: "antKingBtnStat",
            get: function get() {
                return this._antKingBtnStat;
            },
            set: function set(value) {
                // this._antKingBtnStat = value;
                // if (this.antKingBtnStat === 1) {
                //     Laya.timer.loop(100, this, this._progressChangeLoop);
                // this._root.AntKingText.skin = "UI/kingText1.png";
                // } else if (this.antKingBtnStat === 2) {
                // this._root.AntKingText.skin = "UI/kingText2.png";
                DataManager.Instance.callAntKing();
                this._antKingHandle();
                Laya.timer.clear(this, this._progressChangeLoop);
                // }
                // if (GameValue.Instance.VideoIconStatus) {
                this._root.AntKingBtn.getChildByName("icon").skin = "UI/kingIcon2.png";
                // } else {
                // this._root.AntKingBtn.getChildByName("icon").skin = "UI/kingIcon1.png";
                // }
            }
        }, {
            key: "angle",
            get: function get() {
                return this._angle;
            },
            set: function set(value) {
                this._angle = value;
                this._drawPie();
            }
        }]);
        return GameViewController;
    }(Laya.Script);
    var HomeViewController = /* */ function (_Laya$Script10) {
        (0, _inherits2.default)(HomeViewController, _Laya$Script10);
        var _super11 = _createSuper(HomeViewController);
        function HomeViewController() {
            (0, _classCallCheck2.default)(this, HomeViewController);
            return _super11.apply(this, arguments);
        }
        (0, _createClass2.default)(HomeViewController, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
            }
        }, {
            key: "init",
            value: function init(gameMainController) {
                this._gameMainController = gameMainController;
                this._root.StartGameBtn.on(Laya.Event.CLICK, this, this._startGameClick);
                this._root.StartAni.play(0, true);
                AudioManager.Instance.playBgm("audio_bgm.mp3");
                // if (Laya.Browser.onMiniGame && GameValue.Instance.ExportStatus && GameValue.Instance.OldUserExportStatus) {
                //     this._gameMainController.openExportUI();
                // }
            }
        }, {
            key: "_startGameClick",
            value: function _startGameClick() {
                if (!this._gameMainController._gameSceneController.foodController || !this._gameMainController._gameSceneController.foodController._foodPoint) {
                    return;
                }
                platform.getInstance().showInterstitial();
                this._gameMainController.startGame();
                window.yad.scale(0.6, 0.6);
                window.yad.centerX = NaN;
                window.yad.bottom = NaN;
                window.yad.right = 10;
                window.yad.top = 5;
            }
        }, {
            key: "root",
            get: function get() {
                return this._root;
            }
        }]);
        return HomeViewController;
    }(Laya.Script);
    var CoinAntController = /* */ function (_Laya$Script3D) {
        (0, _inherits2.default)(CoinAntController, _Laya$Script3D);
        var _super12 = _createSuper(CoinAntController);
        function CoinAntController() {
            var _this39;
            (0, _classCallCheck2.default)(this, CoinAntController);
            _this39 = _super12.apply(this, arguments);
            _this39._speed = .8;
            _this39._moveSpeedScale = .36;
            return _this39;
        }
        (0, _createClass2.default)(CoinAntController, [{
            key: "init",
            value: function init(gameSceneController) {
                this._root = this.owner;
                this._gameSceneController = gameSceneController;
                this._startPos = this._gameSceneController.prizeAntStartPoint.transform.position.clone();
                this._endPos = this._gameSceneController.prizeAntEndPoint.transform.position.clone();
                this._root.transform.position = this._startPos;
                this._root.transform.localPosition = this._startPos;
                this._root.transform.localScale = new Laya.Vector3(.6, .6, .6);
                this._animator = this._root.getComponent(Laya.Animator);
                this._createCannon();
            }
        }, {
            key: "showPrizeAnt",
            value: function showPrizeAnt() {
                this._root.active = true;
                this._root.getChildByName("qiandai").active = true;
                this._antMoveStart(this._root.transform.localPosition, this._endPos);
            }
        }, {
            key: "hidePrizeAnt",
            value: function hidePrizeAnt() {
                this._root.getChildByName("qiandai").active = false;
                this._root.active = false;
                this._root.transform.position = this._startPos;
                this._root.transform.localPosition = this._startPos;
                this._root.transform.rotation = new Laya.Quaternion();
            }
        }, {
            key: "_createCannon",
            value: function _createCannon() {
                var rigidBody = this._root.addComponent(Laya.CannonRigidbody3D);
                rigidBody.isKinematic = true;
                var boxShape = new Laya.CannonBoxColliderShape(.3, .3, .3);
                rigidBody.colliderShape = boxShape;
            }
        }, {
            key: "_antMoveStart",
            value: function _antMoveStart(startPos, endPos) {
                var _this40 = this;
                Laya.Tween.clearAll(this._walkTarget);
                var time = Laya.Vector3.distance(startPos, endPos) / (this._speed * this._moveSpeedScale);
                time *= 1e3;
                var t = this._root.transform;
                var pos = t.localPosition;
                this._walkTarget = {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                };
                var up = new Laya.Vector3();
                t.getUp(up);
                t.lookAt(endPos, up);
                this._animator.crossFade(AntAniName.WALK, 0, 0, 0);
                Laya.Tween.to(this._walkTarget, {
                    x: endPos.x,
                    y: endPos.y,
                    z: endPos.z
                }, time, null, Laya.Handler.create(this, this._antMoveEnd)).update = LHandler.createloop(this, function () {
                    t.localPositionX = _this40._walkTarget.x;
                    t.localPositionZ = _this40._walkTarget.z;
                });
            }
        }, {
            key: "_antMoveEnd",
            value: function _antMoveEnd() {
                this._animator.crossFade(AntAniName.EAT, 0, 0, 0);
            }
        }]);
        return CoinAntController;
    }(Laya.Script3D);
    var JoyController = /* */ function (_Laya$Script11) {
        (0, _inherits2.default)(JoyController, _Laya$Script11);
        var _super13 = _createSuper(JoyController);
        function JoyController() {
            var _this41;
            (0, _classCallCheck2.default)(this, JoyController);
            _this41 = _super13.apply(this, arguments);
            _this41._ray = new Laya.Ray(new Laya.Vector3(0, 0, 0), new Laya.Vector3(0, 0, 0));
            return _this41;
        }
        (0, _createClass2.default)(JoyController, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
            }
        }, {
            key: "init",
            value: function init(gameMainController) {
                this._gameMainController = gameMainController;
                this._root.on(Laya.Event.MOUSE_DOWN, this, this._onMouseDown);
            }
        }, {
            key: "_onMouseDown",
            value: function _onMouseDown(e) {
                this._point = new Laya.Vector2(Laya.stage.mouseX, Laya.stage.mouseY);
                this._gameMainController.gameSceneController.camera.viewportPointToRay(this._point, this._ray);
                var out = new Laya.CannonHitResult();
                this._gameMainController.gameSceneController.root.cannonPhysicsSimulation.rayCast(this._ray, out);
                if (out.succeeded) {
                    var selectSprite3D = out.collider.owner;
                    console.log("click", selectSprite3D);
                    var ctrl = selectSprite3D.getComponent(CoinAntController);
                    if (ctrl) {
                        ctrl.hidePrizeAnt();
                        this._gameMainController.openPrizeLevelDialog();
                        console.log("点击成功");
                    }
                } else {
                    console.log("click fail");
                }
            }
        }, {
            key: "root",
            get: function get() {
                return this._root;
            }
        }]);
        return JoyController;
    }(Laya.Script);
    var ExportUIController = /* */ function (_Laya$Script12) {
        (0, _inherits2.default)(ExportUIController, _Laya$Script12);
        var _super14 = _createSuper(ExportUIController);
        function ExportUIController() {
            var _this42;
            (0, _classCallCheck2.default)(this, ExportUIController);
            _this42 = _super14.apply(this, arguments);
            _this42._bannerStatus = false;
            return _this42;
        }
        (0, _createClass2.default)(ExportUIController, [{
            key: "init",
            value: function init(gameMainController) {
                this._gameMainController = gameMainController;
                this._root = this.owner;
                this._root.height += Utils.RealityY();
                this._root.CloseBtn.on(Laya.Event.CLICK, this, this._closeDialog);
                if (Laya.Browser.onMiniGame && GameValue.Instance.ExportStatus) {
                    var listController = this._root.RecommendList.addComponent(RecommendList);
                    listController.init(ExportPageType.RecommendGrid);
                } else {
                    this._root.RecommendList.visible = false;
                }
                if (Laya.Browser.onMiniGame) {
                    this._errBanner();
                }
            }
        }, {
            key: "_errBanner",
            value: function _errBanner() {
                var _this43 = this;
                if (GameValue.Instance.BannerStatus) {
                    this._root.CloseBtn.visible = true;
                    this._root.CloseBtn.bottom = -300;
                    this._root.CloseBtn.centerX = 0;
                    Laya.timer.loop(2e3, this, this._bannerHandle);
                } else {
                    this._root.CloseBtn.visible = false;
                    this._root.CloseBtn.bottom = 580;
                    this._root.CloseBtn.centerX = 286;
                    setTimeout(function () {
                        _this43._root.CloseBtn.visible = true;
                    }, 2e3);

                }
            }
        }, {
            key: "_bannerHandle",
            value: function _bannerHandle() {
                if (this._bannerStatus) {

                    this._bannerStatus = false;
                } else {

                    this._bannerStatus = true;
                }
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                console.log("销毁");
            }
        }, {
            key: "onDisable",
            value: function onDisable() {
                Laya.timer.clearAll(this);

            }
        }, {
            key: "_closeDialog",
            value: function _closeDialog() {
                Laya.timer.clearAll(this);
                this._root.close();
            }
        }]);
        return ExportUIController;
    }(Laya.Script);
    var View = Laya.View;
    var Dialog = Laya.Dialog;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var Export;
        (function (Export) {
            var CoupletListUI = /* */ function (_View) {
                (0, _inherits2.default)(CoupletListUI, _View);
                var _super15 = _createSuper(CoupletListUI);
                function CoupletListUI() {
                    (0, _classCallCheck2.default)(this, CoupletListUI);
                    return _super15.call(this);
                }
                (0, _createClass2.default)(CoupletListUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(CoupletListUI.prototype), "createChildren", this).call(this);
                        this.createView(CoupletListUI.uiView);
                    }
                }]);
                return CoupletListUI;
            }(View);
            CoupletListUI.uiView = {
                type: "View",
                props: {
                    width: 300,
                    height: 978
                },
                compId: 2,
                child: [{
                    type: "List",
                    props: {
                        y: 0,
                        x: 0,
                        width: 300,
                        var: "RecommendList",
                        vScrollBarSkin: "ExportUI/Progress.png",
                        spaceY: 15,
                        repeatY: 5,
                        repeatX: 1,
                        height: 978
                    },
                    compId: 5,
                    child: [{
                        type: "Image",
                        props: {
                            y: 110,
                            x: 150,
                            width: 140,
                            skin: "ExportUI/iconBg.png",
                            renderType: "render",
                            pivotY: 89,
                            pivotX: 70,
                            name: "item",
                            height: 177
                        },
                        compId: 6,
                        child: [{
                            type: "Image",
                            props: {
                                y: 9,
                                width: 120,
                                name: "icon",
                                height: 120,
                                centerX: 0
                            },
                            compId: 7
                        }, {
                            type: "Label",
                            props: {
                                y: 129,
                                x: 0,
                                width: 140,
                                valign: "middle",
                                text: "游戏名称",
                                name: "name",
                                height: 48,
                                fontSize: 24,
                                color: "#131138",
                                bold: false,
                                align: "center"
                            },
                            compId: 8
                        }, {
                            type: "Image",
                            props: {
                                width: 40,
                                top: 0,
                                skin: "ExportUI/IconRedNew.png",
                                right: 0,
                                name: "redPoint",
                                height: 40
                            },
                            compId: 9
                        }]
                    }]
                }, {
                    type: "Script",
                    props: {
                        runtime: "Export/Controller/CoupletList.ts"
                    },
                    compId: 12
                }],
                loadList: ["ExportUI/Progress.png", "ExportUI/iconBg.png", "ExportUI/IconRedNew.png"],
                loadList3D: []
            };
            Export.CoupletListUI = CoupletListUI;
            REG("ui.Export.CoupletListUI", CoupletListUI);
            var ExitAdDialogUI = /* */ function (_Dialog) {
                (0, _inherits2.default)(ExitAdDialogUI, _Dialog);
                var _super16 = _createSuper(ExitAdDialogUI);
                function ExitAdDialogUI() {
                    (0, _classCallCheck2.default)(this, ExitAdDialogUI);
                    return _super16.call(this);
                }
                (0, _createClass2.default)(ExitAdDialogUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(ExitAdDialogUI.prototype), "createChildren", this).call(this);
                        this.createView(ExitAdDialogUI.uiView);
                    }
                }]);
                return ExitAdDialogUI;
            }(Dialog);
            ExitAdDialogUI.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        var: "BackBtn",
                        top: 32,
                        skin: "ExportUI/backBtn.png",
                        left: 37
                    },
                    compId: 3
                }, {
                    type: "Box",
                    props: {
                        width: 750,
                        var: "UpView",
                        top: 110,
                        height: 200,
                        centerX: 0
                    },
                    compId: 4,
                    child: [{
                        type: "Image",
                        props: {
                            y: 15,
                            x: 31,
                            skin: "ExportUI/line.png"
                        },
                        compId: 7
                    }, {
                        type: "Image",
                        props: {
                            y: 15,
                            x: 495,
                            skin: "ExportUI/line.png"
                        },
                        compId: 8
                    }, {
                        type: "Image",
                        props: {
                            top: 0,
                            skin: "ExportUI/title3.png",
                            centerX: 0
                        },
                        compId: 9
                    }, {
                        type: "List",
                        props: {
                            y: 44,
                            x: 0,
                            width: 753,
                            var: "UpList",
                            spaceX: 15,
                            repeatY: 1,
                            repeatX: 10,
                            height: 178,
                            hScrollBarSkin: "ExportUI/Progress.png"
                        },
                        compId: 13,
                        child: [{
                            type: "Box",
                            props: {
                                y: 29,
                                x: 36,
                                width: 120,
                                renderType: "render",
                                height: 120
                            },
                            compId: 24,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 120,
                                    renderType: "render",
                                    name: "icon",
                                    height: 120
                                },
                                compId: 14
                            }, {
                                type: "Image",
                                props: {
                                    y: -14,
                                    x: 106,
                                    top: -14,
                                    skin: "ExportUI/AdPoint.png",
                                    right: -14,
                                    name: "redPoint"
                                },
                                compId: 15
                            }]
                        }]
                    }]
                }, {
                    type: "Box",
                    props: {
                        y: 333,
                        x: 1,
                        width: 750,
                        var: "DownView",
                        height: 1004
                    },
                    compId: 5,
                    child: [{
                        type: "Image",
                        props: {
                            y: 15,
                            x: 31,
                            skin: "ExportUI/line.png"
                        },
                        compId: 10
                    }, {
                        type: "Image",
                        props: {
                            y: 15,
                            x: 495,
                            skin: "ExportUI/line.png"
                        },
                        compId: 11
                    }, {
                        type: "Image",
                        props: {
                            y: 0,
                            x: 0,
                            top: 0,
                            skin: "ExportUI/title1.png",
                            centerX: 0
                        },
                        compId: 12
                    }, {
                        type: "List",
                        props: {
                            y: 52,
                            width: 712,
                            var: "DownList",
                            vScrollBarSkin: "ExportUI/Progress.png",
                            spaceY: 56,
                            spaceX: 12,
                            repeatY: 5,
                            repeatX: 2,
                            height: 947,
                            centerX: 0
                        },
                        compId: 16,
                        child: [{
                            type: "Box",
                            props: {
                                width: 350,
                                renderType: "render",
                                height: 200
                            },
                            compId: 25,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 350,
                                    renderType: "render",
                                    name: "icon",
                                    height: 200
                                },
                                compId: 18
                            }, {
                                type: "Image",
                                props: {
                                    y: 200,
                                    x: 0,
                                    width: 350,
                                    skin: "ExportUI/bg1.png",
                                    sizeGrid: "0,63,27,62",
                                    name: "nameBg",
                                    bottom: -50
                                },
                                compId: 19
                            }, {
                                type: "Label",
                                props: {
                                    y: 200,
                                    x: 0,
                                    width: 351,
                                    valign: "middle",
                                    text: "游戏名称",
                                    name: "name",
                                    height: 46,
                                    fontSize: 30,
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 20
                            }, {
                                type: "Image",
                                props: {
                                    y: -10,
                                    x: 323,
                                    top: -10,
                                    skin: "ExportUI/AdPoint.png",
                                    right: -1,
                                    name: "redPoint"
                                },
                                compId: 21
                            }]
                        }]
                    }]
                }, {
                    type: "Button",
                    props: {
                        var: "ContinueBtn",
                        stateNum: 1,
                        skin: "ExportUI/GreenBtn.png",
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 22,
                    child: [{
                        type: "Label",
                        props: {
                            y: 0,
                            x: 0,
                            width: 267,
                            valign: "middle",
                            text: "继续游戏",
                            height: 117,
                            fontSize: 50,
                            font: "HELIUMF0000",
                            color: "#ffffff",
                            bold: true,
                            align: "center"
                        },
                        compId: 23
                    }]
                }],
                loadList: ["ExportUI/backBtn.png", "ExportUI/line.png", "ExportUI/title3.png", "ExportUI/Progress.png", "ExportUI/AdPoint.png", "ExportUI/title1.png", "ExportUI/bg1.png", "ExportUI/GreenBtn.png"],
                loadList3D: []
            };
            Export.ExitAdDialogUI = ExitAdDialogUI;
            REG("ui.Export.ExitAdDialogUI", ExitAdDialogUI);
            var HorizontalListUI = /* */ function (_View2) {
                (0, _inherits2.default)(HorizontalListUI, _View2);
                var _super17 = _createSuper(HorizontalListUI);
                function HorizontalListUI() {
                    (0, _classCallCheck2.default)(this, HorizontalListUI);
                    return _super17.call(this);
                }
                (0, _createClass2.default)(HorizontalListUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(HorizontalListUI.prototype), "createChildren", this).call(this);
                        this.createView(HorizontalListUI.uiView);
                    }
                }]);
                return HorizontalListUI;
            }(View);
            HorizontalListUI.uiView = {
                type: "View",
                props: {
                    width: 750,
                    height: 300
                },
                compId: 2,
                child: [{
                    type: "List",
                    props: {
                        width: 730,
                        var: "RecommendList",
                        spaceX: 15,
                        repeatY: 1,
                        repeatX: 20,
                        height: 223,
                        hScrollBarSkin: "ExportUI/Progress.png",
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 110,
                            x: 70,
                            width: 140,
                            skin: "ExportUI/iconBg.png",
                            renderType: "render",
                            pivotY: 89,
                            pivotX: 70,
                            name: "item",
                            height: 177
                        },
                        compId: 4,
                        child: [{
                            type: "Image",
                            props: {
                                y: 9,
                                width: 120,
                                name: "icon",
                                height: 120,
                                centerX: 0
                            },
                            compId: 5
                        }, {
                            type: "Label",
                            props: {
                                y: 129,
                                x: 0,
                                width: 140,
                                valign: "middle",
                                text: "游戏名称",
                                name: "name",
                                height: 48,
                                fontSize: 24,
                                color: "#131138",
                                bold: false,
                                align: "center"
                            },
                            compId: 6
                        }, {
                            type: "Image",
                            props: {
                                width: 40,
                                top: 0,
                                skin: "ExportUI/IconRedNew.png",
                                right: 0,
                                name: "redPoint",
                                height: 40
                            },
                            compId: 7
                        }]
                    }]
                }, {
                    type: "Script",
                    props: {
                        runtime: "Export/Controller/HorizontalList.ts"
                    },
                    compId: 9
                }],
                loadList: ["ExportUI/Progress.png", "ExportUI/iconBg.png", "ExportUI/IconRedNew.png"],
                loadList3D: []
            };
            Export.HorizontalListUI = HorizontalListUI;
            REG("ui.Export.HorizontalListUI", HorizontalListUI);
            var LeftDrawerUI = /* */ function (_View3) {
                (0, _inherits2.default)(LeftDrawerUI, _View3);
                var _super18 = _createSuper(LeftDrawerUI);
                function LeftDrawerUI() {
                    (0, _classCallCheck2.default)(this, LeftDrawerUI);
                    return _super18.call(this);
                }
                (0, _createClass2.default)(LeftDrawerUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(LeftDrawerUI.prototype), "createChildren", this).call(this);
                        this.createView(LeftDrawerUI.uiView);
                    }
                }]);
                return LeftDrawerUI;
            }(View);
            LeftDrawerUI.uiView = {
                type: "View",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        x: -531,
                        width: 529,
                        var: "LeftDrawer",
                        skin: "ExportUI/left_out.png",
                        sizeGrid: "180,198,180,0",
                        mouseThrough: true,
                        height: 1036,
                        centerY: 16
                    },
                    compId: 3,
                    child: [{
                        type: "List",
                        props: {
                            width: 519,
                            var: "RecommendList",
                            vScrollBarSkin: "ExportUI/Progress.png",
                            spaceY: 15,
                            spaceX: 10,
                            repeatY: 5,
                            repeatX: 3,
                            mouseEnabled: true,
                            left: 7,
                            height: 956,
                            centerY: 12
                        },
                        compId: 5,
                        child: [{
                            type: "Image",
                            props: {
                                y: 89,
                                x: 100,
                                width: 140,
                                skin: "ExportUI/iconBg.png",
                                renderType: "render",
                                pivotY: 89,
                                pivotX: 70,
                                name: "item",
                                height: 177
                            },
                            compId: 7,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 9,
                                    width: 120,
                                    name: "icon",
                                    height: 120,
                                    centerX: 0
                                },
                                compId: 8
                            }, {
                                type: "Label",
                                props: {
                                    y: 129,
                                    x: 0,
                                    width: 140,
                                    valign: "middle",
                                    text: "游戏名称",
                                    name: "name",
                                    height: 48,
                                    fontSize: 24,
                                    color: "#131138",
                                    bold: false,
                                    align: "center"
                                },
                                compId: 9
                            }, {
                                type: "Image",
                                props: {
                                    width: 40,
                                    top: 0,
                                    skin: "ExportUI/IconRedNew.png",
                                    right: 0,
                                    name: "redPoint",
                                    height: 40
                                },
                                compId: 10
                            }]
                        }]
                    }, {
                        type: "Image",
                        props: {
                            var: "OpenBtn",
                            skin: "ExportUI/left_in.png",
                            scaleY: .7,
                            scaleX: .7,
                            mouseEnabled: true,
                            left: 526,
                            centerY: -30
                        },
                        compId: 6
                    }, {
                        type: "Image",
                        props: {
                            var: "CloseBtn",
                            skin: "ExportUI/left_in.png",
                            scaleY: .7,
                            scaleX: .7,
                            mouseEnabled: true,
                            left: 526,
                            centerY: -30
                        },
                        compId: 4
                    }]
                }, {
                    type: "Script",
                    props: {
                        y: 0,
                        x: 0,
                        runtime: "Export/Controller/LeftDrawerController.ts"
                    },
                    compId: 11
                }],
                loadList: ["ExportUI/left_out.png", "ExportUI/Progress.png", "ExportUI/iconBg.png", "ExportUI/IconRedNew.png", "ExportUI/left_in.png"],
                loadList3D: []
            };
            Export.LeftDrawerUI = LeftDrawerUI;
            REG("ui.Export.LeftDrawerUI", LeftDrawerUI);
            var MysticalDialogUI = /* */ function (_Dialog2) {
                (0, _inherits2.default)(MysticalDialogUI, _Dialog2);
                var _super19 = _createSuper(MysticalDialogUI);
                function MysticalDialogUI() {
                    (0, _classCallCheck2.default)(this, MysticalDialogUI);
                    return _super19.call(this);
                }
                (0, _createClass2.default)(MysticalDialogUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(MysticalDialogUI.prototype), "createChildren", this).call(this);
                        this.createView(MysticalDialogUI.uiView);
                    }
                }]);
                return MysticalDialogUI;
            }(Dialog);
            MysticalDialogUI.uiView = {
                type: "Dialog",
                props: {
                    y: 0,
                    x: 0,
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        skin: "ExportUI/MysticalTitle.png",
                        centerY: -312,
                        centerX: 0
                    },
                    compId: 4
                }, {
                    type: "Image",
                    props: {
                        width: 303,
                        skin: "ExportUI/MysticalBox.png",
                        scaleY: 1,
                        scaleX: 1,
                        pivotY: 151,
                        pivotX: 152,
                        name: "box",
                        height: 302,
                        centerY: -75,
                        centerX: 0
                    },
                    compId: 5,
                    child: [{
                        type: "Image",
                        props: {
                            width: 303,
                            skin: "ExportUI/MysticalBoxLid.png",
                            rotation: 0,
                            pivotY: 151,
                            name: "boxlid",
                            height: 302,
                            centerY: 0,
                            centerX: -1
                        },
                        compId: 14
                    }]
                }, {
                    type: "Button",
                    props: {
                        width: 344,
                        var: "ClickBtn",
                        stateNum: 1,
                        skin: "ExportUI/GreenBtn1.png",
                        sizeGrid: "37,27,0,29",
                        runtime: "Export/Controller/Components/EffrctButton.ts",
                        pivotY: 76,
                        pivotX: 172,
                        height: 151,
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 6,
                    child: [{
                        type: "Label",
                        props: {
                            valign: "middle",
                            text: "狂点打开",
                            fontSize: 60,
                            color: "#ffffff",
                            centerY: -11,
                            centerX: 0,
                            bold: true,
                            align: "center"
                        },
                        compId: 7
                    }]
                }, {
                    type: "Button",
                    props: {
                        width: 282,
                        var: "ReceiveBtn",
                        stateNum: 1,
                        skin: "ExportUI/GreenBtn1.png",
                        sizeGrid: "36,34,58,25",
                        runtime: "Export/Controller/Components/EffrctButton.ts",
                        pivotY: 63,
                        pivotX: 141,
                        height: 125,
                        centerX: 1,
                        bottom: 0
                    },
                    compId: 9,
                    child: [{
                        type: "Label",
                        props: {
                            valign: "middle",
                            text: "确定",
                            fontSize: 60,
                            color: "#ffffff",
                            centerY: -5,
                            centerX: -1,
                            bold: true,
                            align: "center"
                        },
                        compId: 11
                    }]
                }, {
                    type: "Image",
                    props: {
                        width: 576,
                        skin: "ExportUI/ProgressBG.png",
                        sizeGrid: "20,36,20,34",
                        height: 55,
                        centerY: 154,
                        centerX: -9
                    },
                    compId: 12,
                    child: [{
                        type: "Image",
                        props: {
                            width: 300,
                            var: "Progress",
                            skin: "ExportUI/Progress.png",
                            sizeGrid: "13,24,13,22",
                            left: 5,
                            height: 45,
                            centerY: -3
                        },
                        compId: 13
                    }]
                }, {
                    type: "Sprite",
                    props: {
                        y: 558,
                        x: 375,
                        width: 128,
                        visible: false,
                        var: "Glow",
                        texture: "ExportUI/glow1.png",
                        scaleY: 0,
                        scaleX: 0,
                        pivotY: 64,
                        pivotX: 64,
                        name: "glow",
                        height: 128
                    },
                    compId: 20
                }],
                animations: [{
                    nodes: [{
                        target: 5,
                        keyframes: {
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1.3,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleY",
                                index: 4
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleY",
                                index: 7
                            }, {
                                value: 1.2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleY",
                                index: 12
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1.3,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleX",
                                index: 4
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleX",
                                index: 7
                            }, {
                                value: 1.2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleX",
                                index: 12
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 5,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 14,
                        keyframes: {
                            rotation: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 14,
                                key: "rotation",
                                index: 0
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 14,
                                key: "rotation",
                                index: 15
                            }, {
                                value: -108,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 14,
                                key: "rotation",
                                index: 20
                            }]
                        }
                    }, {
                        target: 20,
                        keyframes: {
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 20,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 20,
                                key: "scaleY",
                                index: 15
                            }, {
                                value: 6,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 20,
                                key: "scaleY",
                                index: 20
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 20,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 20,
                                key: "scaleX",
                                index: 15
                            }, {
                                value: 6,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 20,
                                key: "scaleX",
                                index: 20
                            }],
                            name: [{
                                value: "glow",
                                tweenMethod: "linearNone",
                                tween: false,
                                target: 20,
                                key: "name",
                                index: 0
                            }]
                        }
                    }],
                    name: "boxscaleAni",
                    id: 1,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 20,
                        keyframes: {
                            rotation: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 20,
                                key: "rotation",
                                index: 0
                            }, {
                                value: 360,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 20,
                                key: "rotation",
                                index: 7
                            }]
                        }
                    }],
                    name: "glowAni",
                    id: 2,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 9,
                        keyframes: {
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1.3,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                key: "scaleY",
                                index: 20
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                key: "scaleY",
                                index: 40
                            }, {
                                value: 1.3,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                label: null,
                                key: "scaleY",
                                index: 60
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                label: null,
                                key: "scaleY",
                                index: 80
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1.3,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                key: "scaleX",
                                index: 20
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                key: "scaleX",
                                index: 40
                            }, {
                                value: 1.3,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                label: null,
                                key: "scaleX",
                                index: 60
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 9,
                                label: null,
                                key: "scaleX",
                                index: 80
                            }]
                        }
                    }, {
                        target: 62,
                        keyframes: {
                            x: [{
                                value: -52,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 62,
                                key: "x",
                                index: 0
                            }, {
                                value: 414,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 62,
                                key: "x",
                                index: 30
                            }, {
                                value: 414,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 62,
                                label: null,
                                key: "x",
                                index: 80
                            }]
                        }
                    }],
                    name: "MysticalBtnani",
                    id: 3,
                    frameRate: 60,
                    action: 2
                }],
                loadList: ["ExportUI/MysticalTitle.png", "ExportUI/MysticalBox.png", "ExportUI/MysticalBoxLid.png", "ExportUI/GreenBtn1.png", "ExportUI/ProgressBG.png", "ExportUI/Progress.png", "ExportUI/glow1.png"],
                loadList3D: []
            };
            Export.MysticalDialogUI = MysticalDialogUI;
            REG("ui.Export.MysticalDialogUI", MysticalDialogUI);
            var NewMoreGameViewUI = /* */ function (_Dialog3) {
                (0, _inherits2.default)(NewMoreGameViewUI, _Dialog3);
                var _super20 = _createSuper(NewMoreGameViewUI);
                function NewMoreGameViewUI() {
                    (0, _classCallCheck2.default)(this, NewMoreGameViewUI);
                    return _super20.call(this);
                }
                (0, _createClass2.default)(NewMoreGameViewUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(NewMoreGameViewUI.prototype), "createChildren", this).call(this);
                        this.createView(NewMoreGameViewUI.uiView);
                    }
                }]);
                return NewMoreGameViewUI;
            }(Dialog);
            NewMoreGameViewUI.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Rect",
                    props: {
                        y: -252,
                        x: -114,
                        width: 1e3,
                        lineWidth: 1,
                        height: 2e3,
                        fillColor: "#80E3FC"
                    },
                    compId: 23
                }, {
                    type: "Label",
                    props: {
                        y: 43,
                        x: 49,
                        text: " 热门推荐",
                        fontSize: 60,
                        color: "#323232",
                        bold: true
                    },
                    compId: 22
                }, {
                    type: "List",
                    props: {
                        width: 683,
                        var: "RecommendList",
                        vScrollBarSkin: "ExportUI/Progress.png",
                        spaceY: 56,
                        spaceX: 16,
                        repeatY: 8,
                        repeatX: 2,
                        height: 1191,
                        centerY: 71,
                        centerX: 0
                    },
                    compId: 12,
                    child: [{
                        type: "Box",
                        props: {
                            x: 24,
                            width: 320,
                            renderType: "render",
                            name: "item",
                            height: 360
                        },
                        compId: 13,
                        child: [{
                            type: "Box",
                            props: {
                                y: 0,
                                x: 0,
                                width: 320,
                                height: 360
                            },
                            compId: 34,
                            child: [{
                                type: "Rect",
                                props: {
                                    width: 320,
                                    lineWidth: 1,
                                    height: 360,
                                    fillColor: "#7BC97D"
                                },
                                compId: 35
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 320,
                                    skin: "ExportUI/iconBg.png",
                                    renderType: "mask",
                                    height: 360
                                },
                                compId: 29
                            }]
                        }, {
                            type: "Image",
                            props: {
                                width: 300,
                                skin: "ExportUI/iconBg.png",
                                sizeGrid: "0,0,0,0",
                                name: "icon",
                                height: 300,
                                centerY: -19,
                                centerX: 0
                            },
                            compId: 14
                        }, {
                            type: "Label",
                            props: {
                                y: 311,
                                x: 60,
                                width: 200,
                                valign: "middle",
                                text: "游戏名称",
                                name: "name",
                                height: 51,
                                fontSize: 30,
                                color: "#ffffff",
                                align: "center"
                            },
                            compId: 15
                        }, {
                            type: "Image",
                            props: {
                                top: 0,
                                skin: "ExportUI/new.png",
                                right: 0,
                                name: "redPoint"
                            },
                            compId: 17
                        }]
                    }]
                }, {
                    type: "Button",
                    props: {
                        x: 10,
                        var: "ContinueBtn",
                        stateNum: 1,
                        skin: "ExportUI/GreenBtn.png",
                        centerX: 0,
                        bottom: 0
                    },
                    compId: 19,
                    child: [{
                        type: "Label",
                        props: {
                            y: 0,
                            x: 0,
                            width: 267,
                            valign: "middle",
                            text: "继续游戏",
                            height: 117,
                            fontSize: 50,
                            font: "HELIUMF0000",
                            color: "#ffffff",
                            bold: true,
                            align: "center"
                        },
                        compId: 20
                    }]
                }],
                loadList: ["ExportUI/Progress.png", "ExportUI/iconBg.png", "ExportUI/new.png", "ExportUI/GreenBtn.png"],
                loadList3D: []
            };
            Export.NewMoreGameViewUI = NewMoreGameViewUI;
            REG("ui.Export.NewMoreGameViewUI", NewMoreGameViewUI);
            var OldMoreGameViewUI = /* */ function (_Dialog4) {
                (0, _inherits2.default)(OldMoreGameViewUI, _Dialog4);
                var _super21 = _createSuper(OldMoreGameViewUI);
                function OldMoreGameViewUI() {
                    (0, _classCallCheck2.default)(this, OldMoreGameViewUI);
                    return _super21.call(this);
                }
                (0, _createClass2.default)(OldMoreGameViewUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(OldMoreGameViewUI.prototype), "createChildren", this).call(this);
                        this.createView(OldMoreGameViewUI.uiView);
                    }
                }]);
                return OldMoreGameViewUI;
            }(Dialog);
            OldMoreGameViewUI.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        width: 683,
                        top: 104,
                        skin: "ExportUI/uiBg.png",
                        sizeGrid: "149,55,45,66",
                        height: 994,
                        centerX: 0
                    },
                    compId: 4,
                    child: [{
                        type: "Image",
                        props: {
                            top: 32,
                            skin: "ExportUI/title2.png",
                            centerX: 0
                        },
                        compId: 6
                    }, {
                        type: "List",
                        props: {
                            x: 0,
                            width: 683,
                            var: "TopList",
                            vScrollBarSkin: "ExportUI/Progress.png",
                            spaceY: 56,
                            spaceX: 16,
                            repeatY: 7,
                            repeatX: 3,
                            height: 882,
                            bottom: 0
                        },
                        compId: 12,
                        child: [{
                            type: "Box",
                            props: {
                                y: 100,
                                x: 124,
                                width: 200,
                                renderType: "render",
                                pivotY: 100,
                                pivotX: 100,
                                height: 200
                            },
                            compId: 19,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 200,
                                    x: 0,
                                    skin: "ExportUI/bg1.png",
                                    sizeGrid: "14,51,24,51",
                                    name: "nameBg",
                                    bottom: -50
                                },
                                compId: 14
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 0,
                                    width: 200,
                                    renderType: "render",
                                    name: "icon",
                                    height: 200
                                },
                                compId: 13
                            }, {
                                type: "Label",
                                props: {
                                    y: 200,
                                    x: 0,
                                    width: 200,
                                    valign: "middle",
                                    text: "游戏名称",
                                    name: "name",
                                    height: 51,
                                    fontSize: 30,
                                    color: "#ffffff",
                                    align: "center"
                                },
                                compId: 15
                            }, {
                                type: "Image",
                                props: {
                                    y: 0,
                                    x: 140,
                                    top: 0,
                                    skin: "ExportUI/new.png",
                                    right: 0,
                                    name: "redPoint"
                                },
                                compId: 17
                            }]
                        }]
                    }]
                }, {
                    type: "Label",
                    props: {
                        var: "CloseBtn",
                        valign: "middle",
                        text: "关闭",
                        fontSize: 30,
                        font: "HELIUMF0000",
                        color: "#ffffff",
                        centerX: 0,
                        bottom: 197,
                        align: "center"
                    },
                    compId: 18
                }, {
                    type: "List",
                    props: {
                        width: 683,
                        var: "BottomList",
                        spaceX: 10,
                        repeatY: 1,
                        repeatX: 10,
                        height: 176,
                        hScrollBarSkin: "ExportUI/Progress.png",
                        centerX: 0,
                        bottom: 10
                    },
                    compId: 7,
                    child: [{
                        type: "Image",
                        props: {
                            width: 140,
                            skin: "ExportUI/iconBg.png",
                            renderType: "render",
                            name: "item",
                            height: 177
                        },
                        compId: 8,
                        child: [{
                            type: "Image",
                            props: {
                                y: 9,
                                width: 120,
                                name: "icon",
                                height: 120,
                                centerX: 0
                            },
                            compId: 9
                        }, {
                            type: "Label",
                            props: {
                                y: 129,
                                x: 0,
                                width: 140,
                                valign: "middle",
                                text: "游戏名称",
                                name: "name",
                                height: 48,
                                fontSize: 24,
                                color: "#131138",
                                bold: false,
                                align: "center"
                            },
                            compId: 10
                        }, {
                            type: "Image",
                            props: {
                                width: 40,
                                top: 0,
                                skin: "ExportUI/IconRedNew.png",
                                right: 0,
                                name: "redPoint",
                                height: 40
                            },
                            compId: 11
                        }]
                    }]
                }],
                loadList: ["ExportUI/uiBg.png", "ExportUI/title2.png", "ExportUI/Progress.png", "ExportUI/bg1.png", "ExportUI/new.png", "ExportUI/iconBg.png", "ExportUI/IconRedNew.png"],
                loadList3D: []
            };
            Export.OldMoreGameViewUI = OldMoreGameViewUI;
            REG("ui.Export.OldMoreGameViewUI", OldMoreGameViewUI);
            var OldUserDialogUI = /* */ function (_Dialog5) {
                (0, _inherits2.default)(OldUserDialogUI, _Dialog5);
                var _super22 = _createSuper(OldUserDialogUI);
                function OldUserDialogUI() {
                    (0, _classCallCheck2.default)(this, OldUserDialogUI);
                    return _super22.call(this);
                }
                (0, _createClass2.default)(OldUserDialogUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(OldUserDialogUI.prototype), "createChildren", this).call(this);
                        this.createView(OldUserDialogUI.uiView);
                    }
                }]);
                return OldUserDialogUI;
            }(Dialog);
            OldUserDialogUI.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        width: 622,
                        skin: "ExportUI/toastBg.png",
                        sizeGrid: "122,75,88,79",
                        height: 908,
                        centerY: -120,
                        centerX: 0
                    },
                    compId: 3,
                    child: [{
                        type: "Label",
                        props: {
                            y: 19,
                            valign: "middle",
                            text: "今日爆款",
                            fontSize: 50,
                            centerX: 0,
                            bold: true,
                            align: "center"
                        },
                        compId: 4
                    }, {
                        type: "Box",
                        props: {
                            y: 102,
                            x: 0,
                            width: 622,
                            var: "UpView",
                            height: 738
                        },
                        compId: 6,
                        child: [{
                            type: "List",
                            props: {
                                y: 0,
                                x: 0,
                                width: 622,
                                var: "RecommendList",
                                vScrollBarSkin: "ExportUI/Progress.png",
                                spaceY: 10,
                                spaceX: 10,
                                repeatY: 4,
                                repeatX: 4,
                                height: 738
                            },
                            compId: 10,
                            child: [{
                                type: "Image",
                                props: {
                                    y: 99,
                                    x: 80,
                                    width: 140,
                                    skin: "ExportUI/iconBg.png",
                                    renderType: "render",
                                    pivotY: 89,
                                    pivotX: 70,
                                    name: "item",
                                    height: 177
                                },
                                compId: 13,
                                child: [{
                                    type: "Image",
                                    props: {
                                        y: 9,
                                        width: 120,
                                        name: "icon",
                                        height: 120,
                                        centerX: 0
                                    },
                                    compId: 14
                                }, {
                                    type: "Label",
                                    props: {
                                        y: 129,
                                        x: 0,
                                        width: 140,
                                        valign: "middle",
                                        text: "游戏名称",
                                        name: "name",
                                        height: 48,
                                        fontSize: 24,
                                        color: "#131138",
                                        bold: false,
                                        align: "center"
                                    },
                                    compId: 15
                                }, {
                                    type: "Image",
                                    props: {
                                        width: 40,
                                        top: 0,
                                        skin: "ExportUI/IconRedNew.png",
                                        right: 0,
                                        name: "redPoint",
                                        height: 40
                                    },
                                    compId: 16
                                }]
                            }]
                        }]
                    }, {
                        type: "Image",
                        props: {
                            var: "CloseBtn1",
                            skin: "ExportUI/closeBtn.png",
                            centerX: 261,
                            bottom: 833
                        },
                        compId: 27
                    }]
                }, {
                    type: "Image",
                    props: {
                        var: "CloseBtn",
                        skin: "ExportUI/closeBtn.png",
                        centerX: 0,
                        bottom: 100
                    },
                    compId: 5
                }],
                loadList: ["ExportUI/toastBg.png", "ExportUI/Progress.png", "ExportUI/iconBg.png", "ExportUI/IconRedNew.png", "ExportUI/closeBtn.png"],
                loadList3D: []
            };
            Export.OldUserDialogUI = OldUserDialogUI;
            REG("ui.Export.OldUserDialogUI", OldUserDialogUI);
            var RecommendGridUI = /* */ function (_View4) {
                (0, _inherits2.default)(RecommendGridUI, _View4);
                var _super23 = _createSuper(RecommendGridUI);
                function RecommendGridUI() {
                    (0, _classCallCheck2.default)(this, RecommendGridUI);
                    return _super23.call(this);
                }
                (0, _createClass2.default)(RecommendGridUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(RecommendGridUI.prototype), "createChildren", this).call(this);
                        this.createView(RecommendGridUI.uiView);
                    }
                }]);
                return RecommendGridUI;
            }(View);
            RecommendGridUI.uiView = {
                type: "View",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "List",
                    props: {
                        width: 750,
                        var: "RecommendList",
                        vScrollBarSkin: "ExportUI/Progress.png",
                        spaceY: 10,
                        spaceX: 10,
                        repeatY: 4,
                        repeatX: 4,
                        height: 778,
                        centerY: 0,
                        centerX: 0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 109,
                            x: 148,
                            width: 140,
                            skin: "ExportUI/iconBg.png",
                            renderType: "render",
                            pivotY: 89,
                            pivotX: 70,
                            name: "item",
                            height: 177
                        },
                        compId: 4,
                        child: [{
                            type: "Image",
                            props: {
                                y: 9,
                                width: 120,
                                name: "icon",
                                height: 120,
                                centerX: 0
                            },
                            compId: 5
                        }, {
                            type: "Label",
                            props: {
                                y: 129,
                                x: 0,
                                width: 140,
                                valign: "middle",
                                text: "游戏名称",
                                name: "name",
                                height: 48,
                                fontSize: 24,
                                color: "#131138",
                                bold: false,
                                align: "center"
                            },
                            compId: 6
                        }, {
                            type: "Image",
                            props: {
                                width: 40,
                                top: 0,
                                skin: "ExportUI/IconRedNew.png",
                                right: 0,
                                name: "redPoint",
                                height: 40
                            },
                            compId: 7
                        }]
                    }]
                }, {
                    type: "Script",
                    props: {
                        runtime: "Export/Controller/RecommendGridController.ts"
                    },
                    compId: 8
                }],
                loadList: ["ExportUI/Progress.png", "ExportUI/iconBg.png", "ExportUI/IconRedNew.png"],
                loadList3D: []
            };
            Export.RecommendGridUI = RecommendGridUI;
            REG("ui.Export.RecommendGridUI", RecommendGridUI);
        })(Export = ui.Export || (ui.Export = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameMainUI = /* */ function (_View5) {
            (0, _inherits2.default)(GameMainUI, _View5);
            var _super24 = _createSuper(GameMainUI);
            function GameMainUI() {
                (0, _classCallCheck2.default)(this, GameMainUI);
                return _super24.call(this);
            }
            (0, _createClass2.default)(GameMainUI, [{
                key: "createChildren",
                value: function createChildren() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(GameMainUI.prototype), "createChildren", this).call(this);
                    this.createView(GameMainUI.uiView);
                }
            }]);
            return GameMainUI;
        }(View);
        GameMainUI.uiView = {
            type: "View",
            props: {
                width: 750,
                top: 0,
                right: 0,
                left: 0,
                height: 1334,
                bottom: 0
            },
            compId: 2,
            child: [{
                type: "Box",
                props: {
                    zOrder: 1e3,
                    var: "MskBox",
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0
                },
                compId: 3
            }],
            loadList: [],
            loadList3D: []
        };
        ui.GameMainUI = GameMainUI;
        REG("ui.GameMainUI", GameMainUI);
        var LoadingViewUI = /* */ function (_View6) {
            (0, _inherits2.default)(LoadingViewUI, _View6);
            var _super25 = _createSuper(LoadingViewUI);
            function LoadingViewUI() {
                (0, _classCallCheck2.default)(this, LoadingViewUI);
                return _super25.call(this);
            }
            (0, _createClass2.default)(LoadingViewUI, [{
                key: "createChildren",
                value: function createChildren() {
                    (0, _get2.default)((0, _getPrototypeOf2.default)(LoadingViewUI.prototype), "createChildren", this).call(this);
                    this.createView(LoadingViewUI.uiView);
                }
            }]);
            return LoadingViewUI;
        }(View);
        LoadingViewUI.uiView = {
            "x": 0,
            "type": "View",
            "selectedBox": 4,
            "selecteID": 10,
            "searchKey": "View",
            "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
            "nodeParent": -1,
            "maxID": 11,
            "loadList3D": [
            ],
            "loadList": [
                "LoadingUI/bg.png",
                "LoadingUI/logo.png",
                "LoadingUI/progressBG.png",
                "LoadingUI/progress.png",
                "LoadingUI/loadingText.png",
                "LoadingUI/chicheng game.png",
                "LoadingUI/text.png"],
            "label": "View",
            "isOpen": true,
            "isDirectory": true,
            "isAniNode": true,
            "hasChild": true,
            "compId": 2,
            "child": [
                {
                    "x": 15,
                    "type": "Image",
                    "searchKey": "Image",
                    "props": { "skin": "LoadingUI/bg.png", "centerY": 0, "centerX": 0 },
                    "nodeParent": 2,
                    "label": "Image",
                    "isOpen": true,
                    "isDirectory": true,
                    "isAniNode": true,
                    "hasChild": true,
                    "compId": 4,
                    "child": [
                        {
                            "x": 30,
                            "type": "Image",
                            "searchKey": "Image",
                            "props": { "top": 180, "skin": "LoadingUI/logo.png", "centerX": 0 },
                            "nodeParent": 4,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 5,
                            "child": [
                            ]
                        },
                        {
                            "x": 30,
                            "type": "Image",
                            "searchKey": "Image",
                            "props": { "width": 600, "skin": "LoadingUI/progressBG.png", "sizeGrid": "15,30,20,27", "centerX": 23, "bottom": 734 },
                            "nodeParent": 4,
                            "label": "Image",
                            "isOpen": null,
                            "isDirectory": true,
                            "isAniNode": true,
                            "hasChild": true,
                            "compId": 6,
                            "child": [
                                {
                                    "type": "Image",
                                    "searchKey": "Image,Progress",
                                    "props": { "y": 3, "x": 3, "width": 0, "var": "Progress", "skin": "LoadingUI/progress.png", "sizeGrid": "0,30,0,30", "height": 30 },
                                    "nodeParent": 6,
                                    "label": "Progress",
                                    "isDirectory": false,
                                    "isAniNode": true,
                                    "hasChild": false,
                                    "compId": 7,
                                    "child": [
                                    ]
                                }]
                        },
                        {
                            "x": 30,
                            "type": "Image",
                            "searchKey": "Image",
                            "props": { "skin": "LoadingUI/loadingText.png", "centerX": 0, "bottom": 781 },
                            "nodeParent": 4,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 8,
                            "child": [
                            ]
                        },
                        {
                            "x": 30,
                            "type": "Image",
                            "searchKey": "Image",
                            "props": { "visible": false, "centerX": -718, "bottom": 115 },
                            "nodeParent": 4,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 9,
                            "child": [
                            ]
                        },
                        {
                            "x": 30,
                            "type": "Image",
                            "searchKey": "Image",
                            "props": { "visible": false, "centerX": -718, "bottom": 192 },
                            "nodeParent": 4,
                            "label": "Image",
                            "isDirectory": false,
                            "isAniNode": true,
                            "hasChild": false,
                            "compId": 10,
                            "child": [
                            ]
                        }]
                }],
            "animations": [
                {
                    "nodes": [
                    ],
                    "name": "ani1",
                    "id": 1,
                    "frameRate": 24,
                    "action": 0
                }]
        };
        ui.LoadingViewUI = LoadingViewUI;
        REG("ui.LoadingViewUI", LoadingViewUI);
    })(ui || (ui = {}));
    (function (ui) {
        var GameUI;
        (function (GameUI) {
            var ExportUIUI = /* */ function (_Dialog6) {
                (0, _inherits2.default)(ExportUIUI, _Dialog6);
                var _super26 = _createSuper(ExportUIUI);
                function ExportUIUI() {
                    (0, _classCallCheck2.default)(this, ExportUIUI);
                    return _super26.call(this);
                }
                (0, _createClass2.default)(ExportUIUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(ExportUIUI.prototype), "createChildren", this).call(this);
                        this.createView(ExportUIUI.uiView);
                    }
                }]);
                return ExportUIUI;
            }(Dialog);
            ExportUIUI.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        width: 750,
                        skin: "UI/LevelUpBg.png",
                        sizeGrid: "357,199,163,199",
                        height: 1083,
                        centerY: -208,
                        centerX: 0
                    },
                    compId: 3,
                    child: [{
                        type: "Image",
                        props: {
                            y: 150,
                            width: 496,
                            skin: "UI/ExportText.png",
                            height: 144,
                            centerX: 0
                        },
                        compId: 4
                    }, {
                        type: "Image",
                        props: {
                            width: 553,
                            skin: "UI/bg.png",
                            sizeGrid: "25,32,40,25",
                            height: 707,
                            centerY: 120,
                            centerX: 0
                        },
                        compId: 18
                    }, {
                        type: "List",
                        props: {
                            width: 530,
                            visible: true,
                            var: "RecommendList",
                            vScrollBarSkin: "ExportUI/Progress.png",
                            spaceY: 32,
                            spaceX: 15,
                            repeatY: 3,
                            repeatX: 3,
                            height: 629,
                            centerY: 132,
                            centerX: 0
                        },
                        compId: 6,
                        child: [{
                            type: "Image",
                            props: {
                                y: 54,
                                x: 60,
                                width: 162,
                                skin: "ExportUI/WechatIMG46.png",
                                renderType: "render",
                                pivotY: 50,
                                pivotX: 50,
                                name: "item",
                                height: 179
                            },
                            compId: 7,
                            child: [{
                                type: "Image",
                                props: {
                                    width: 158,
                                    skin: "UI/doublePrize.png",
                                    name: "icon",
                                    height: 175,
                                    centerY: 0,
                                    centerX: 0
                                },
                                compId: 8
                            }, {
                                type: "Label",
                                props: {
                                    y: 108,
                                    x: 2,
                                    width: 102,
                                    valign: "middle",
                                    text: "游戏名称",
                                    name: "name",
                                    height: 28,
                                    fontSize: 16,
                                    color: "#131138",
                                    centerX: -1,
                                    bottom: -28,
                                    bold: false,
                                    align: "center"
                                },
                                compId: 10
                            }, {
                                type: "Image",
                                props: {
                                    width: 40,
                                    top: -14,
                                    skin: "ExportUI/IconRedNew.png",
                                    right: -18,
                                    name: "redPoint",
                                    height: 40
                                },
                                compId: 9
                            }]
                        }]
                    }, {
                        type: "Image",
                        props: {
                            var: "CloseBtn",
                            skin: "UI/CloseBtn.png",
                            centerX: 0,
                            bottom: -300
                        },
                        compId: 17
                    }]
                }],
                loadList: ["UI/LevelUpBg.png", "UI/ExportText.png", "UI/bg.png", "ExportUI/Progress.png", "ExportUI/WechatIMG46.png", "UI/doublePrize.png", "ExportUI/IconRedNew.png", "UI/CloseBtn.png"],
                loadList3D: []
            };
            GameUI.ExportUIUI = ExportUIUI;
            REG("ui.GameUI.ExportUIUI", ExportUIUI);
            var GameSuccessUI = /* */ function (_Dialog7) {
                (0, _inherits2.default)(GameSuccessUI, _Dialog7);
                var _super27 = _createSuper(GameSuccessUI);
                function GameSuccessUI() {
                    (0, _classCallCheck2.default)(this, GameSuccessUI);
                    return _super27.call(this);
                }
                (0, _createClass2.default)(GameSuccessUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(GameSuccessUI.prototype), "createChildren", this).call(this);
                        this.createView(GameSuccessUI.uiView);
                    }
                }]);
                return GameSuccessUI;
            }(Dialog);
            GameSuccessUI.uiView = {
                "x":0,
                "type":"Dialog",
                "selectedBox":7,
                "selecteID":20,
                "searchKey":"Dialog",
                "props":{"y":0,"x":0,"width":750,"height":1334},
                "nodeParent":-1,
                "maxID":21,
                "loadList3D":[
                    ],
                "loadList":[
                    "UI/toastBG.png",
                    "UI/ToastText.png",
                    "UI/ToastLogo.png",
                    "UI/PrizeBG.png",
                    "UI/CoinIcon.png",
                    "font/fontclip_text.png",
                    "UI/CloseBtn.png",
                    "UI/PrizeBtn.png",
                    "UI/WechatIMG37.png",
                    "UI/WechatIMG35.png"],
                "label":"Dialog",
                "isOpen":true,
                "isDirectory":true,
                "isAniNode":true,
                "hasChild":true,
                "compId":2,
                "child":[
                    {
                        "x":15,
                        "type":"Image",
                        "searchKey":"Image",
                        "props":{"skin":"UI/toastBG.png","centerY":-118,"centerX":0},
                        "nodeParent":2,
                        "label":"Image",
                        "isOpen":true,
                        "isDirectory":true,
                        "isAniNode":true,
                        "hasChild":true,
                        "compId":7,
                        "child":[
                            {
                                "x":30,
                                "type":"Image",
                                "searchKey":"Image",
                                "props":{"y":149,"skin":"UI/ToastText.png","centerX":0},
                                "nodeParent":7,
                                "label":"Image",
                                "isDirectory":false,
                                "isAniNode":true,
                                "hasChild":false,
                                "compId":8,
                                "child":[
                                    ]
                            },
                            {
                                "x":30,
                                "type":"Image",
                                "searchKey":"Image",
                                "props":{"skin":"UI/ToastLogo.png","centerY":24,"centerX":-10},
                                "nodeParent":7,
                                "label":"Image",
                                "isDirectory":false,
                                "isAniNode":true,
                                "hasChild":false,
                                "compId":9,
                                "child":[
                                    ]
                            },
                            {
                                "x":30,
                                "type":"Image",
                                "searchKey":"Image",
                                "props":{"skin":"UI/PrizeBG.png","centerY":231,"centerX":0},
                                "nodeParent":7,
                                "label":"Image",
                                "isOpen":null,
                                "isDirectory":true,
                                "isAniNode":true,
                                "hasChild":true,
                                "compId":10,
                                "child":[
                                    {
                                        "type":"Sprite",
                                        "searchKey":"Sprite",
                                        "props":{"y":27,"x":0,"texture":"UI/CoinIcon.png","scaleY":0.8,"scaleX":0.8},
                                        "nodeParent":10,
                                        "label":"Sprite",
                                        "isDirectory":false,
                                        "isAniNode":true,
                                        "hasChild":false,
                                        "compId":11,
                                        "child":[
                                            ]
                                    },
                                    {
                                        "type":"FontClip",
                                        "searchKey":"FontClip,PrizeLabel",
                                        "props":{"x":68,"width":402,"var":"PrizeLabel","value":"99.9K","skin":"font/fontclip_text.png","sheet":"0123456789KMGTPE.","scaleY":0.5,"scaleX":0.36,"height":82,"centerY":-4},
                                        "nodeParent":10,
                                        "label":"PrizeLabel",
                                        "isDirectory":false,
                                        "isAniNode":true,
                                        "hasChild":false,
                                        "compId":14,
                                        "child":[
                                            ]
                                    }]
                            },
                            {
                                "x":30,
                                "type":"Button",
                                "searchKey":"Button,NextGameBtn",
                                "props":{"var":"NextGameBtn","stateNum":1,"skin":"UI/CloseBtn.png","centerX":0,"bottom":-100},
                                "nodeParent":7,
                                "label":"NextGameBtn",
                                "isDirectory":false,
                                "isAniNode":true,
                                "hasChild":false,
                                "compId":4,
                                "child":[
                                    ]
                            },
                            {
                                "x":30,
                                "type":"Image",
                                "searchKey":"Image,VideoBtn",
                                "props":{"y":774,"x":283.5,"visible":true,"var":"VideoBtn","skin":"UI/PrizeBtn.png"},
                                "nodeParent":7,
                                "label":"VideoBtn",
                                "isOpen":true,
                                "isDirectory":true,
                                "isAniNode":true,
                                "hasChild":true,
                                "compId":13,
                                "child":[
                                    {
                                        "x":45,
                                        "type":"Image",
                                        "searchKey":"Image,AD",
                                        "props":{"y":28,"x":11,"skin":"UI/WechatIMG37.png","scaleY":0.8,"scaleX":0.8,"name":"AD"},
                                        "nodeParent":13,
                                        "label":"AD",
                                        "isDirectory":false,
                                        "isAniNode":true,
                                        "hasChild":false,
                                        "compId":16,
                                        "child":[
                                            ]
                                    },
                                    {
                                        "x":45,
                                        "type":"Image",
                                        "searchKey":"Image",
                                        "props":{"y":31,"x":70,"skin":"UI/WechatIMG35.png","scaleY":0.8,"scaleX":0.8,"centerY":-3,"centerX":24},
                                        "nodeParent":13,
                                        "label":"Image",
                                        "isDirectory":false,
                                        "isAniNode":true,
                                        "hasChild":false,
                                        "compId":15,
                                        "child":[
                                            ]
                                    }]
                            },
                            {
                                "x":30,
                                "type":"Box",
                                "searchKey":"Box,loadingLayer",
                                "props":{"y":-107,"x":-4,"visible":false,"var":"loadingLayer"},
                                "nodeParent":7,
                                "label":"loadingLayer",
                                "isOpen":true,
                                "isDirectory":true,
                                "isAniNode":true,
                                "hasChild":true,
                                "compId":20,
                                "child":[
                                    {
                                        "x":45,
                                        "type":"Box",
                                        "searchKey":"Box",
                                        "props":{"width":750,"height":1334,"bgColor":"#000000","alpha":0.8},
                                        "nodeParent":20,
                                        "label":"Box",
                                        "isOpen":true,
                                        "isDirectory":false,
                                        "isAniNode":true,
                                        "hasChild":false,
                                        "compId":18,
                                        "child":[
                                            ]
                                    },
                                    {
                                        "x":45,
                                        "type":"Label",
                                        "searchKey":"Label",
                                        "props":{"y":642,"x":265,"text":"Loading...","fontSize":50,"color":"#ffffff"},
                                        "nodeParent":20,
                                        "label":"Label",
                                        "isDirectory":false,
                                        "isAniNode":true,
                                        "hasChild":false,
                                        "compId":19,
                                        "child":[
                                            ]
                                    }]
                            }]
                    }],
                "animations":[
                    {
                        "nodes":[
                            ],
                        "name":"ani1",
                        "id":1,
                        "frameRate":24,
                        "action":0
                    }]
            };
            GameUI.GameSuccessUI = GameSuccessUI;
            REG("ui.GameUI.GameSuccessUI", GameSuccessUI);
            var HomeViewUI = /* */ function (_View7) {
                (0, _inherits2.default)(HomeViewUI, _View7);
                var _super28 = _createSuper(HomeViewUI);
                function HomeViewUI() {
                    (0, _classCallCheck2.default)(this, HomeViewUI);
                    return _super28.call(this);
                }
                (0, _createClass2.default)(HomeViewUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(HomeViewUI.prototype), "createChildren", this).call(this);
                        this.createView(HomeViewUI.uiView);
                    }
                }]);
                return HomeViewUI;
            }(View);
            HomeViewUI.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 9,
                "selecteID": 22,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 23,
                "loadList3D": [
                ],
                "loadList": [
                    "UI/startBtn.png",
                    "UI/点击出动蚂蚁.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,StartGameBtn",
                        "props": { "var": "StartGameBtn", "top": 0, "right": 0, "mouseThrough": false, "mouseEnabled": true, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "StartGameBtn",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 4,
                        "child": [
                            {
                                "x": 30,
                                "type": "Button",
                                "searchKey": "Button",
                                "props": { "y": 826, "x": 375, "width": 448, "stateNum": 1, "skin": "UI/startBtn.png", "height": 115, "centerX": 0, "bottom": 450, "anchorY": 0.5, "anchorX": 0.5 },
                                "nodeParent": 4,
                                "label": "Button",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 9,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "skin": "UI/goAnt.png", "centerY": 0, "centerX": 0 },
                                        "nodeParent": 9,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 22,
                                        "child": [
                                        ]
                                    }]
                            }]
                    }],
                "animations": [
                    {
                        "nodes": [
                            {
                                "target": 9,
                                "keyframes": {
                                    "rotation": [
                                        {
                                            "value": 0,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 0
                                        },
                                        {
                                            "value": -8,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 5
                                        },
                                        {
                                            "value": 0,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 10
                                        },
                                        {
                                            "value": 8,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 15
                                        },
                                        {
                                            "value": 0,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 20
                                        },
                                        {
                                            "value": -3,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 23
                                        },
                                        {
                                            "value": 0,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 26
                                        },
                                        {
                                            "value": 3,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 29
                                        },
                                        {
                                            "value": 0,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "key": "rotation",
                                            "index": 32
                                        },
                                        {
                                            "value": 0,
                                            "tweenMethod": "linearNone",
                                            "tween": true,
                                            "target": 9,
                                            "label": null,
                                            "key": "rotation",
                                            "index": 45
                                        }]
                                }
                            }],
                        "name": "StartAni",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            };
            GameUI.HomeViewUI = HomeViewUI;
            REG("ui.GameUI.HomeViewUI", HomeViewUI);
            var LevelUpDialogUI = /* */ function (_Dialog8) {
                (0, _inherits2.default)(LevelUpDialogUI, _Dialog8);
                var _super29 = _createSuper(LevelUpDialogUI);
                function LevelUpDialogUI() {
                    (0, _classCallCheck2.default)(this, LevelUpDialogUI);
                    return _super29.call(this);
                }
                (0, _createClass2.default)(LevelUpDialogUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(LevelUpDialogUI.prototype), "createChildren", this).call(this);
                        this.createView(LevelUpDialogUI.uiView);
                    }
                }]);
                return LevelUpDialogUI;
            }(Dialog);
            LevelUpDialogUI.uiView = {
                "x": 0,
                "type": "Dialog",
                "selectedBox": 3,
                "selecteID": 27,
                "searchKey": "Dialog",
                "props": { "width": 750, "height": 1334 },
                "nodeParent": -1,
                "maxID": 30,
                "loadList3D": [
                ],
                "loadList": [
                    "UI/LevelUpBg.png",
                    "UI/LevelUpText.png",
                    "ExportUI/Progress.png",
                    "ExportUI/iconBg.png",
                    "ExportUI/new.png",
                    "UI/PrizeBG.png",
                    "UI/CoinIcon.png",
                    "font/fontclip_text.png",
                    "UI/NextGame.png"],
                "label": "Dialog",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Box",
                        "searchKey": "Box",
                        "props": { "top": 0, "styleSkin": "UI/LevelUpBg.png", "right": 0, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 3,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 87, "skin": "UI/LevelUpText.png", "centerX": 0 },
                                "nodeParent": 3,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 4,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "List",
                                "searchKey": "List,RecommendList",
                                "props": { "width": 702, "visible": false, "var": "RecommendList", "vScrollBarSkin": "ExportUI/Progress.png", "spaceY": 32, "spaceX": 15, "repeatY": 2, "repeatX": 2, "height": 768, "centerY": -31, "centerX": -920 },
                                "nodeParent": 3,
                                "label": "RecommendList",
                                "isOpen": true,
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 6,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "skin": "UI/PrizeBG.png", "centerX": 0, "bottom": 240 },
                                "nodeParent": 3,
                                "label": "Image",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 11,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 27, "x": -14, "texture": "UI/CoinIcon.png", "scaleY": 0.8, "scaleX": 0.8 },
                                        "nodeParent": 11,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 12,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "x": 45,
                                        "type": "FontClip",
                                        "searchKey": "FontClip,PrizeLabel",
                                        "props": { "x": 55, "width": 402, "var": "PrizeLabel", "value": "99.9K", "skin": "font/fontclip_text.png", "sheet": "0123456789KMGTPE.", "scaleY": 0.5, "scaleX": 0.36, "height": 82, "centerY": -4 },
                                        "nodeParent": 11,
                                        "label": "PrizeLabel",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 13,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Button",
                                "searchKey": "Button,CloseBtn",
                                "props": { "var": "CloseBtn", "stateNum": 1, "skin": "UI/NextGame.png", "scaleY": 0.7, "scaleX": 0.7, "centerX": 233, "bottom": 240 },
                                "nodeParent": 3,
                                "label": "CloseBtn",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 14,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "List",
                                "searchKey": "List,showList,showList",
                                "props": { "y": 327, "x": 55, "width": 640, "var": "showList", "repeatY": 2, "repeatX": 2, "name": "showList", "height": 480 },
                                "nodeParent": 3,
                                "label": "showList",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 27,
                                "child": [
                                    {
                                        "x": 45,
                                        "type": "Box",
                                        "searchKey": "Box",
                                        "props": { "renderType": "render" },
                                        "nodeParent": 27,
                                        "label": "Box",
                                        "isOpen": true,
                                        "isDirectory": true,
                                        "isAniNode": false,
                                        "hasChild": true,
                                        "compId": 28,
                                        "child": [
                                            {
                                                "x": 60,
                                                "type": "Image",
                                                "searchKey": "Image,thumb",
                                                "props": { "width": 320, "name": "thumb", "height": 240 },
                                                "nodeParent": 28,
                                                "label": "thumb",
                                                "isDirectory": false,
                                                "isAniNode": false,
                                                "hasChild": false,
                                                "compId": 29,
                                                "child": [
                                                ]
                                            }]
                                    }]
                            }]
                    }],
                "animations": [
                    {
                        "nodes": [
                        ],
                        "name": "ani1",
                        "id": 1,
                        "frameRate": 24,
                        "action": 0
                    }]
            };
            GameUI.LevelUpDialogUI = LevelUpDialogUI;
            REG("ui.GameUI.LevelUpDialogUI", LevelUpDialogUI);
            var PrizeDialogUI = /* */ function (_Dialog9) {
                (0, _inherits2.default)(PrizeDialogUI, _Dialog9);
                var _super30 = _createSuper(PrizeDialogUI);
                function PrizeDialogUI() {
                    (0, _classCallCheck2.default)(this, PrizeDialogUI);
                    return _super30.call(this);
                }
                (0, _createClass2.default)(PrizeDialogUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(PrizeDialogUI.prototype), "createChildren", this).call(this);
                        this.createView(PrizeDialogUI.uiView);
                    }
                }]);
                return PrizeDialogUI;
            }(Dialog);
            PrizeDialogUI.uiView = {
                type: "Dialog",
                props: {
                    width: 750,
                    height: 1334
                },
                compId: 2,
                child: [{
                    type: "Image",
                    props: {
                        skin: "UI/PrizeBG1.png",
                        centerY: -186,
                        centerX: 0
                    },
                    compId: 3
                }, {
                    type: "Image",
                    props: {
                        y: 948,
                        var: "VideoBtn",
                        skin: "UI/PrizeBtn1.png",
                        centerX: 0
                    },
                    compId: 4,
                    child: [{
                        type: "Image",
                        props: {
                            y: 22,
                            x: 0,
                            skin: "UI/WechatIMG37.png",
                            name: "AD"
                        },
                        compId: 6
                    }]
                }, {
                    type: "Image",
                    props: {
                        y: 1082,
                        x: 335.5,
                        var: "CloseBtn",
                        skin: "UI/PrizeText.png"
                    },
                    compId: 5
                }],
                loadList: ["UI/PrizeBG1.png", "UI/PrizeBtn1.png", "UI/WechatIMG37.png", "UI/PrizeText.png"],
                loadList3D: []
            };
            GameUI.PrizeDialogUI = PrizeDialogUI;
            REG("ui.GameUI.PrizeDialogUI", PrizeDialogUI);
        })(GameUI = ui.GameUI || (ui.GameUI = {}));
    })(ui || (ui = {}));
    (function (ui) {
        var GameView;
        (function (GameView) {
            var GameViewUI = /* */ function (_View8) {
                (0, _inherits2.default)(GameViewUI, _View8);
                var _super31 = _createSuper(GameViewUI);
                function GameViewUI() {
                    (0, _classCallCheck2.default)(this, GameViewUI);
                    return _super31.call(this);
                }
                (0, _createClass2.default)(GameViewUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(GameViewUI.prototype), "createChildren", this).call(this);
                        this.createView(GameViewUI.uiView);
                    }
                }]);
                return GameViewUI;
            }(View);
            GameViewUI.uiView = {
                "x": 0,
                "type": "View",
                "selectedBox": 2,
                "selecteID": 80,
                "searchKey": "View",
                "props": { "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 },
                "nodeParent": -1,
                "maxID": 173,
                "loadList3D": [
                ],
                "loadList": [
                    "UI/doublePrizeOut.png",
                    "UI/WechatIMG77.png",
                    "UI/bottomK.png",
                    "UI/miluNum.png",
                    "UI/CoinIcon.png",
                    "font/fontclip_text.png",
                    "UI/btnIcon2.png",
                    "UI/bottomA.png",
                    "UI/ProgressBg.png",
                    "UI/Progress.png",
                    "UI/LevelBtn.png",
                    "ExportUI/hang2.png",
                    "ExportUI/hang.png",
                    "UI/lv.png",
                    "UI/BtnBG.png",
                    "UI/BtnText1.png",
                    "UI/btnIcon1.png",
                    "UI/CoinBtnBg.png",
                    "UI/upBtn.png",
                    "UI/WechatIMG37.png",
                    "UI/FreeText.png",
                    "UI/BtnText2.png",
                    "UI/BtnText3.png",
                    "UI/btnIcon3.png",
                    "UI/anColonybtn.png",
                    "UI/+10.png",
                    "UI/firstFree.png",
                    "UI/videoBtn.png",
                    "UI/25getPass.png",
                    "UI/25getPassBottom.png",
                    "UI/doublePrize.png",
                    "UI/timeBottom.png",
                    "UI/times.png",
                    "UI/clickBtn.png",
                    "UI/kingIcon1.png",
                    "UI/kingText1.png",
                    "ExportUI/Progress.png",
                    "ExportUI/WechatIMG46.png",
                    "ExportUI/IconRedNew.png"],
                "label": "View",
                "isOpen": true,
                "isDirectory": true,
                "isAniNode": true,
                "hasChild": true,
                "compId": 2,
                "child": [
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,PrizeOutLine",
                        "props": { "visible": false, "var": "PrizeOutLine", "top": 0, "skin": "UI/doublePrizeOut.png", "sizeGrid": "117,132,132,117", "right": 0, "left": 0, "bottom": 0 },
                        "nodeParent": 2,
                        "label": "PrizeOutLine",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 164,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "top": 240, "skin": "UI/WechatIMG77.png", "centerX": 0 },
                                "nodeParent": 164,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 165,
                                "child": [
                                ]
                            }],
                        "$HIDDEN": true
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image",
                        "props": { "zOrder": 2, "x": 0, "top": -120, "skin": "UI/bottomK.png" },
                        "nodeParent": 2,
                        "label": "Image",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 112,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image,CoinView",
                                "props": { "skin": "UI/miluNum.png", "name": "CoinView", "left": 53, "bottom": 29 },
                                "nodeParent": 112,
                                "label": "CoinView",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 65,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 41, "x": 10, "skin": "UI/CoinIcon.png", "pivotY": 39, "pivotX": 28 },
                                        "nodeParent": 65,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 66,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "FontClip",
                                        "searchKey": "FontClip,CoinLabel",
                                        "props": { "x": 68, "width": 402, "var": "CoinLabel", "value": "99.9K", "skin": "font/fontclip_text.png", "sheet": "0123456789KMGTPE.", "scaleY": 0.45, "scaleX": 0.4, "height": 82, "centerY": 0 },
                                        "nodeParent": 65,
                                        "label": "CoinLabel",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 104,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "type": "Image",
                                "searchKey": "Image,AntView",
                                "props": { "skin": "UI/miluNum.png", "name": "AntView", "left": 311, "bottom": 29 },
                                "nodeParent": 112,
                                "label": "AntView",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 68,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": -2, "x": -13, "skin": "UI/btnIcon2.png", "scaleY": 0.66, "scaleX": 0.66 },
                                        "nodeParent": 68,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 69,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "FontClip",
                                        "searchKey": "FontClip,AntLabel",
                                        "props": { "x": 78, "width": 402, "var": "AntLabel", "value": "99.9K", "skin": "font/fontclip_text.png", "sheet": "0123456789KMGTPE.", "scaleY": 0.45, "scaleX": 0.4, "height": 82, "centerY": 0 },
                                        "nodeParent": 68,
                                        "label": "AntLabel",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 105,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "width": 362, "skin": "UI/bottomA.png", "height": 44, "centerX": 0, "bottom": -30 },
                                "nodeParent": 112,
                                "label": "Image",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 151,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "width": 240, "skin": "UI/ProgressBg.png", "sizeGrid": "0,43,0,34", "height": 26, "centerY": 0, "centerX": 39 },
                                        "nodeParent": 151,
                                        "label": "Image",
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 64,
                                        "child": [
                                            {
                                                "type": "Image",
                                                "searchKey": "Image,Progress",
                                                "props": { "y": 1, "x": 1, "width": 238, "var": "Progress", "skin": "UI/Progress.png", "sizeGrid": "0,71,0,63", "height": 24 },
                                                "nodeParent": 64,
                                                "label": "Progress",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 63,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "type": "Button",
                                        "searchKey": "Button,LevelUpBtn",
                                        "props": { "y": 76, "width": 138, "var": "LevelUpBtn", "stateNum": 1, "skin": "UI/LevelBtn.png", "pivotY": 27, "pivotX": 69, "height": 54, "centerX": 0 },
                                        "nodeParent": 151,
                                        "label": "LevelUpBtn",
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 152,
                                        "child": [
                                            {
                                                "type": "Box",
                                                "searchKey": "Box",
                                                "props": { "y": 18, "x": 61, "width": 100, "visible": true, "height": 100 },
                                                "nodeParent": 152,
                                                "label": "Box",
                                                "isDirectory": true,
                                                "isAniNode": true,
                                                "hasChild": true,
                                                "compId": 155,
                                                "child": [
                                                    {
                                                        "type": "Sprite",
                                                        "searchKey": "Sprite",
                                                        "props": { "y": 9, "x": 10, "width": 128, "texture": "ExportUI/hang2.png", "scaleY": 1.2, "scaleX": 1.2, "pivotY": 64, "pivotX": 64, "height": 128, "alpha": 0.8 },
                                                        "nodeParent": 155,
                                                        "label": "Sprite",
                                                        "isDirectory": false,
                                                        "isAniNode": true,
                                                        "hasChild": false,
                                                        "compId": 156,
                                                        "child": [
                                                        ]
                                                    },
                                                    {
                                                        "type": "Sprite",
                                                        "searchKey": "Sprite",
                                                        "props": { "texture": "ExportUI/hang.png", "scaleY": 0.8, "scaleX": 0.8, "alpha": 1 },
                                                        "nodeParent": 155,
                                                        "label": "Sprite",
                                                        "isDirectory": false,
                                                        "isAniNode": true,
                                                        "hasChild": false,
                                                        "compId": 157,
                                                        "child": [
                                                        ]
                                                    }]
                                            }]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "y": 9, "x": 22, "skin": "UI/lv.png", "scaleY": 0.8, "scaleX": 0.6 },
                                        "nodeParent": 151,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 153,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "FontClip",
                                        "searchKey": "FontClip,UserLevelLabel",
                                        "props": { "x": 48, "width": 140, "var": "UserLevelLabel", "value": "50", "skin": "font/fontclip_text.png", "sheet": "0123456789KMGTPE.", "scaleY": 0.4, "scaleX": 0.36, "height": 82, "centerY": -1, "align": "center" },
                                        "nodeParent": 151,
                                        "label": "UserLevelLabel",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 154,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "type": "Button",
                                "searchKey": "Button,musicState",
                                "props": { "y": 149, "x": 561, "var": "musicState", "stateNum": "1", "skin": "UI/btn_sound_on.png" },
                                "nodeParent": 112,
                                "label": "musicState",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 166,
                                "child": [
                                ]
                            }],
                        "$HIDDEN": false
                    },
                    {
                        "x": 15,
                        "type": "Box",
                        "searchKey": "Box,btnView,btnView",
                        "props": { "zOrder": 2, "width": 750, "visible": false, "var": "btnView", "name": "btnView", "height": 300, "direction": "horizontal", "centerX": 0, "bottom": 0, "align": "none" },
                        "nodeParent": 2,
                        "label": "btnView",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 36,
                        "child": [
                            {
                                "type": "Button",
                                "searchKey": "Button,SkillBtn1",
                                "props": { "width": 207, "var": "SkillBtn1", "stateNum": 1, "skin": "UI/BtnBG.png", "sizeGrid": "62,0,119,0", "height": 257, "centerY": 18, "centerX": -249, "anchorY": 0.5, "anchorX": 0.5 },
                                "nodeParent": 36,
                                "label": "SkillBtn1",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 37,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "skin": "UI/BtnText1.png", "scaleY": 0.7, "scaleX": 0.7, "centerY": -106, "centerX": -37 },
                                        "nodeParent": 37,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 38,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "skin": "UI/btnIcon1.png", "scaleY": 0.7, "scaleX": 0.7, "centerY": -37, "centerX": 3 },
                                        "nodeParent": 37,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 39,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 142, "x": 66, "texture": "UI/CoinBtnBg.png" },
                                        "nodeParent": 37,
                                        "label": "Sprite",
                                        "isOpen": null,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 95,
                                        "child": [
                                            {
                                                "type": "Label",
                                                "searchKey": "Label,SkillLevel1",
                                                "props": { "y": 2, "x": 0, "width": 87, "var": "SkillLevel1", "valign": "middle", "text": "LV  99", "height": 26, "fontSize": 22, "color": "#f8da03", "bold": true, "align": "center" },
                                                "nodeParent": 95,
                                                "label": "SkillLevel1",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 40,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,upgradeBtn1",
                                        "props": { "y": -42, "x": 156, "var": "upgradeBtn1", "skin": "UI/upBtn.png" },
                                        "nodeParent": 37,
                                        "label": "upgradeBtn1",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 60,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,SkillCoinIcon",
                                        "props": { "y": 186, "x": 15, "skin": "UI/CoinIcon.png", "scaleY": 0.7, "scaleX": 0.7, "name": "SkillCoinIcon" },
                                        "nodeParent": 37,
                                        "label": "SkillCoinIcon",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 43,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "FontClip",
                                        "searchKey": "FontClip,SkillCoin1",
                                        "props": { "y": 190, "x": 73, "width": 402, "var": "SkillCoin1", "value": "99.9K", "skin": "font/fontclip_text.png", "sheet": "0123456789KMGTPE.", "scaleY": 0.4, "scaleX": 0.3, "height": 82 },
                                        "nodeParent": 37,
                                        "label": "SkillCoin1",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 100,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,ADIcon",
                                        "props": { "y": 178, "x": 8, "visible": false, "skin": "UI/WechatIMG37.png", "name": "ADIcon" },
                                        "nodeParent": 37,
                                        "label": "ADIcon",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 160,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,ADText",
                                        "props": { "y": 190, "visible": false, "skin": "UI/FreeText.png", "name": "ADText", "centerX": 0 },
                                        "nodeParent": 37,
                                        "label": "ADText",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 161,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "type": "Button",
                                "searchKey": "Button,SkillBtn2",
                                "props": { "x": 375, "width": 207, "var": "SkillBtn2", "stateNum": 1, "skin": "UI/BtnBG.png", "sizeGrid": "71,0,126,0", "height": 257, "centerY": 18, "centerX": 0, "anchorY": 0.5, "anchorX": 0.5 },
                                "nodeParent": 36,
                                "label": "SkillBtn2",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 46,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "skin": "UI/BtnText2.png", "centerY": -106, "centerX": -37 },
                                        "nodeParent": 46,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 47,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "skin": "UI/btnIcon2.png", "centerY": -39, "centerX": 0 },
                                        "nodeParent": 46,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 48,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 142, "x": 60, "texture": "UI/CoinBtnBg.png" },
                                        "nodeParent": 46,
                                        "label": "Sprite",
                                        "isOpen": null,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 97,
                                        "child": [
                                            {
                                                "type": "Label",
                                                "searchKey": "Label,SkillLevel2",
                                                "props": { "y": 2, "x": 0, "width": 87, "var": "SkillLevel2", "valign": "middle", "text": "LV  99", "height": 26, "fontSize": 22, "color": "#f8da03", "bold": true, "align": "center" },
                                                "nodeParent": 97,
                                                "label": "SkillLevel2",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 49,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,upgradeBtn2",
                                        "props": { "y": -44.5, "x": 154, "var": "upgradeBtn2", "skin": "UI/upBtn.png" },
                                        "nodeParent": 46,
                                        "label": "upgradeBtn2",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 61,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,SkillCoinIcon",
                                        "props": { "y": 186, "x": 13, "skin": "UI/CoinIcon.png", "scaleY": 0.7, "scaleX": 0.7, "name": "SkillCoinIcon" },
                                        "nodeParent": 46,
                                        "label": "SkillCoinIcon",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 51,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "FontClip",
                                        "searchKey": "FontClip,SkillCoin2",
                                        "props": { "y": 190, "x": 77, "width": 402, "var": "SkillCoin2", "value": "99.9K", "skin": "font/fontclip_text.png", "sheet": "0123456789KMGTPE.", "scaleY": 0.4, "scaleX": 0.3, "height": 82 },
                                        "nodeParent": 46,
                                        "label": "SkillCoin2",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 101,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,ADIcon",
                                        "props": { "y": 180, "x": 9, "visible": false, "skin": "UI/WechatIMG37.png", "name": "ADIcon" },
                                        "nodeParent": 46,
                                        "label": "ADIcon",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 159,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,ADText",
                                        "props": { "y": 192, "visible": false, "skin": "UI/FreeText.png", "name": "ADText", "centerX": 0 },
                                        "nodeParent": 46,
                                        "label": "ADText",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 158,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "type": "Button",
                                "searchKey": "Button,SkillBtn3",
                                "props": { "width": 207, "var": "SkillBtn3", "stateNum": 1, "skin": "UI/BtnBG.png", "sizeGrid": "59,0,113,0", "height": 257, "centerY": 17, "centerX": 248, "anchorY": 0.5, "anchorX": 0.5 },
                                "nodeParent": 36,
                                "label": "SkillBtn3",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 53,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "skin": "UI/BtnText3.png", "scaleY": 0.8, "scaleX": 0.8, "centerY": -105, "centerX": -36 },
                                        "nodeParent": 53,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 54,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image",
                                        "props": { "skin": "UI/btnIcon3.png", "centerY": -40, "centerX": 0 },
                                        "nodeParent": 53,
                                        "label": "Image",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 55,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 142, "x": 60, "texture": "UI/CoinBtnBg.png" },
                                        "nodeParent": 53,
                                        "label": "Sprite",
                                        "isOpen": null,
                                        "isDirectory": true,
                                        "isAniNode": true,
                                        "hasChild": true,
                                        "compId": 96,
                                        "child": [
                                            {
                                                "type": "Label",
                                                "searchKey": "Label,SkillLevel3",
                                                "props": { "y": 2, "x": 0, "width": 87, "var": "SkillLevel3", "valign": "middle", "text": "LV  99", "height": 26, "fontSize": 22, "color": "#f8da03", "bold": true, "align": "center" },
                                                "nodeParent": 96,
                                                "label": "SkillLevel3",
                                                "isDirectory": false,
                                                "isAniNode": true,
                                                "hasChild": false,
                                                "compId": 56,
                                                "child": [
                                                ]
                                            }]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,upgradeBtn3",
                                        "props": { "y": -44.5, "x": 153, "var": "upgradeBtn3", "skin": "UI/upBtn.png" },
                                        "nodeParent": 53,
                                        "label": "upgradeBtn3",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 62,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,SkillCoinIcon",
                                        "props": { "y": 187, "x": 19, "skin": "UI/CoinIcon.png", "scaleY": 0.7, "scaleX": 0.7, "name": "SkillCoinIcon" },
                                        "nodeParent": 53,
                                        "label": "SkillCoinIcon",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 58,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "FontClip",
                                        "searchKey": "FontClip,SkillCoin3",
                                        "props": { "y": 189, "x": 78, "width": 402, "var": "SkillCoin3", "value": "99.9K", "skin": "font/fontclip_text.png", "sheet": "0123456789KMGTPE.", "scaleY": 0.4, "scaleX": 0.3, "height": 82 },
                                        "nodeParent": 53,
                                        "label": "SkillCoin3",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 102,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,ADIcon",
                                        "props": { "y": 178, "x": 8.5, "visible": false, "skin": "UI/WechatIMG37.png", "name": "ADIcon" },
                                        "nodeParent": 53,
                                        "label": "ADIcon",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 162,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,ADText",
                                        "props": { "y": 191, "visible": false, "skin": "UI/FreeText.png", "name": "ADText", "centerX": 0 },
                                        "nodeParent": 53,
                                        "label": "ADText",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 163,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "type": "Box",
                                "searchKey": "Box,Upgrade",
                                "props": { "y": 170, "x": 126, "width": 252, "visible": false, "var": "Upgrade", "pivotY": 170, "pivotX": 126, "height": 339 },
                                "nodeParent": 36,
                                "label": "Upgrade",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 81,
                                "child": [
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 180, "x": 126, "width": 56, "texture": "UI/CoinIcon.png", "scaleY": 0, "scaleX": 0, "pivotY": 39, "pivotX": 28, "height": 77 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 82,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 180, "x": 126, "width": 56, "texture": "UI/CoinIcon.png", "scaleY": 0, "scaleX": 0, "pivotY": 39, "pivotX": 28, "height": 77 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 83,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 182, "x": 126, "width": 56, "texture": "UI/CoinIcon.png", "scaleY": 0, "scaleX": 0, "pivotY": 39, "pivotX": 28, "height": 77 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 84,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 182, "x": 126, "width": 56, "texture": "UI/CoinIcon.png", "scaleY": 0, "scaleX": 0, "pivotY": 39, "pivotX": 28, "height": 77 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 85,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 182, "x": 126, "width": 56, "texture": "UI/CoinIcon.png", "scaleY": 0, "scaleX": 0, "pivotY": 39, "pivotX": 28, "height": 77 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 86,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 180, "x": 126, "width": 56, "texture": "UI/CoinIcon.png", "scaleY": 0, "scaleX": 0, "pivotY": 39, "pivotX": 28, "height": 77 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 87,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 182, "x": 126, "width": 56, "texture": "UI/CoinIcon.png", "scaleY": 0, "scaleX": 0, "pivotY": 39, "pivotX": 28, "height": 77 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 88,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 182, "x": 126, "width": 56, "texture": "UI/CoinIcon.png", "scaleY": 0, "scaleX": 0, "pivotY": 39, "pivotX": 28, "height": 77 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 89,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 182, "x": 126, "width": 128, "texture": "ExportUI/hang2.png", "pivotY": 64, "pivotX": 64, "height": 128 },
                                        "nodeParent": 81,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 94,
                                        "child": [
                                        ],
                                        "$HIDDEN": true
                                    }],
                                "$HIDDEN": true
                            },
                            {
                                "type": "Box",
                                "searchKey": "Box,NewPlayer",
                                "props": { "y": 91, "x": 325, "width": 100, "visible": false, "var": "NewPlayer", "height": 100 },
                                "nodeParent": 36,
                                "label": "NewPlayer",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 90,
                                "child": [
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "y": 9, "x": 10, "width": 128, "texture": "ExportUI/hang2.png", "scaleY": 2, "scaleX": 2, "pivotY": 64, "pivotX": 64, "height": 128, "alpha": 0.8 },
                                        "nodeParent": 90,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 92,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Sprite",
                                        "searchKey": "Sprite",
                                        "props": { "texture": "ExportUI/hang.png", "scaleY": 1.4, "scaleX": 1.4 },
                                        "nodeParent": 90,
                                        "label": "Sprite",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 91,
                                        "child": [
                                        ]
                                    }]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Image",
                        "searchKey": "Image,AntColonyBtn",
                        "props": { "zOrder": 2, "x": 666, "visible": false, "var": "AntColonyBtn", "skin": "UI/anColonybtn.png", "scaleY": 1, "scaleX": 1, "centerY": -378, "anchorY": 0.5, "anchorX": 0.5 },
                        "nodeParent": 2,
                        "label": "AntColonyBtn",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 73,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 19, "x": 20.5, "skin": "UI/btnIcon2.png" },
                                "nodeParent": 73,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 113,
                                "child": [
                                ]
                            },
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "skin": "UI/add10.png", "centerY": 24, "centerX": 1 },
                                "nodeParent": 73,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 75,
                                "child": [
                                ]
                            },
                            {
                                "type": "Sprite",
                                "searchKey": "Sprite,firstText",
                                "props": { "y": 228, "x": 28.5, "texture": "UI/firstFree.png", "name": "firstText" },
                                "nodeParent": 73,
                                "label": "firstText",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 77,
                                "child": [
                                ]
                            },
                            {
                                "type": "Image",
                                "searchKey": "Image,AD",
                                "props": { "y": -18.5, "x": -15, "skin": "UI/videoBtn.png", "name": "AD" },
                                "nodeParent": 73,
                                "label": "AD",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 78,
                                "child": [
                                ]
                            },
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 177, "x": 23.5, "skin": "UI/25getPass.png" },
                                "nodeParent": 73,
                                "label": "Image",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 114,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,AntColonyProgress",
                                        "props": { "y": 2, "x": 2, "var": "AntColonyProgress", "skin": "UI/25getPassBottom.png", "sizeGrid": "0,29,0,17" },
                                        "nodeParent": 114,
                                        "label": "AntColonyProgress",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 115,
                                        "child": [
                                        ]
                                    }]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Button",
                        "searchKey": "Button,DoublePrizeBtn",
                        "props": { "zOrder": 2, "width": 168, "visible": false, "var": "DoublePrizeBtn", "stateNum": 1, "skin": "UI/doublePrize.png", "pivotY": 113, "pivotX": 84, "left": 0, "height": 225, "centerY": -378 },
                        "nodeParent": 2,
                        "label": "DoublePrizeBtn",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 116,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image,AD",
                                "props": { "y": -18.5, "x": 137, "skin": "UI/videoBtn.png", "name": "AD" },
                                "nodeParent": 116,
                                "label": "AD",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 117,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "Box",
                        "searchKey": "Box",
                        "props": { "zOrder": 2, "width": 200, "visible": false, "right": 0, "height": 200, "centerY": 89 },
                        "nodeParent": 2,
                        "label": "Box",
                        "isOpen": true,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 111,
                        "child": [
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,img_circle,img_circle",
                                "props": { "y": 34, "x": 36, "var": "img_circle", "skin": "UI/timeBottom.png", "name": "img_circle" },
                                "nodeParent": 111,
                                "label": "img_circle",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 126,
                                "child": [
                                ]
                            },
                            {
                                "x": 30,
                                "type": "Box",
                                "searchKey": "Box,img_box",
                                "props": { "y": 36, "x": 38, "width": 126, "var": "img_box", "height": 126 },
                                "nodeParent": 111,
                                "label": "img_box",
                                "isOpen": null,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 127,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,img_circle",
                                        "props": { "y": 0, "x": 0, "skin": "UI/times.png", "renderType": "mask", "name": "img_circle" },
                                        "nodeParent": 127,
                                        "label": "img_circle",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 128,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "x": 30,
                                "type": "Image",
                                "searchKey": "Image,AntKingBtn",
                                "props": { "y": 100, "x": 100.5, "visible": true, "var": "AntKingBtn", "skin": "UI/clickBtn.png", "anchorY": 0.5, "anchorX": 0.5 },
                                "nodeParent": 111,
                                "label": "AntKingBtn",
                                "isOpen": false,
                                "isDirectory": true,
                                "isAniNode": true,
                                "hasChild": true,
                                "compId": 79,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,icon",
                                        "props": { "skin": "UI/kingIcon2.png", "name": "icon", "centerY": 0, "centerX": 0 },
                                        "nodeParent": 79,
                                        "label": "icon",
                                        "isDirectory": false,
                                        "isAniNode": true,
                                        "hasChild": false,
                                        "compId": 125,
                                        "child": [
                                        ]
                                    }]
                            },
                            {
                                "type": "Image",
                                "searchKey": "Image",
                                "props": { "y": 171, "x": -10, "width": 208, "skin": "UI/kingText1.png", "height": 29 },
                                "nodeParent": 111,
                                "label": "Image",
                                "isDirectory": false,
                                "isAniNode": true,
                                "hasChild": false,
                                "compId": 80,
                                "child": [
                                ]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "List",
                        "searchKey": "List,RecommendList1",
                        "props": { "zOrder": 2, "width": 154, "visible": false, "var": "RecommendList1", "vScrollBarSkin": "ExportUI/Progress.png", "spaceY": 15, "right": 902, "repeatY": 2, "repeatX": 1, "height": 124, "centerY": 263 },
                        "nodeParent": 2,
                        "label": "RecommendList1",
                        "isOpen": null,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 129,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image,item",
                                "props": { "y": 60, "x": 70, "width": 108, "skin": "ExportUI/WechatIMG46.png", "renderType": "render", "pivotY": 50, "pivotX": 50, "name": "item", "height": 108 },
                                "nodeParent": 129,
                                "label": "item",
                                "isDirectory": true,
                                "isAniNode": false,
                                "hasChild": true,
                                "compId": 130,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,icon",
                                        "props": { "width": 100, "skin": "UI/doublePrize.png", "name": "icon", "height": 100, "centerY": 0, "centerX": 0 },
                                        "nodeParent": 130,
                                        "label": "icon",
                                        "isDirectory": false,
                                        "isAniNode": false,
                                        "hasChild": false,
                                        "compId": 131,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,redPoint",
                                        "props": { "width": 40, "top": -14, "skin": "ExportUI/IconRedNew.png", "right": -18, "name": "redPoint", "height": 40 },
                                        "nodeParent": 130,
                                        "label": "redPoint",
                                        "isDirectory": false,
                                        "isAniNode": false,
                                        "hasChild": false,
                                        "compId": 133,
                                        "child": [
                                        ]
                                    }]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "List",
                        "searchKey": "List,RecommendList2",
                        "props": { "zOrder": 2, "width": 154, "visible": false, "var": "RecommendList2", "vScrollBarSkin": "ExportUI/Progress.png", "spaceY": 15, "repeatY": 1, "repeatX": 1, "left": -306, "height": 134, "centerY": 89 },
                        "nodeParent": 2,
                        "label": "RecommendList2",
                        "isOpen": false,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 139,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image,item",
                                "props": { "y": 70, "x": 70, "width": 108, "skin": "ExportUI/WechatIMG46.png", "renderType": "render", "pivotY": 50, "pivotX": 50, "name": "item", "height": 108 },
                                "nodeParent": 139,
                                "label": "item",
                                "isOpen": true,
                                "isDirectory": true,
                                "isAniNode": false,
                                "hasChild": true,
                                "compId": 140,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,icon",
                                        "props": { "width": 100, "skin": "UI/doublePrize.png", "name": "icon", "height": 100, "centerY": 0, "centerX": 0 },
                                        "nodeParent": 140,
                                        "label": "icon",
                                        "isDirectory": false,
                                        "isAniNode": false,
                                        "hasChild": false,
                                        "compId": 141,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,redPoint",
                                        "props": { "width": 40, "top": -14, "skin": "ExportUI/IconRedNew.png", "right": -18, "name": "redPoint", "height": 40 },
                                        "nodeParent": 140,
                                        "label": "redPoint",
                                        "isDirectory": false,
                                        "isAniNode": false,
                                        "hasChild": false,
                                        "compId": 142,
                                        "child": [
                                        ]
                                    }]
                            }]
                    },
                    {
                        "x": 15,
                        "type": "List",
                        "searchKey": "List,RecommendList4",
                        "props": { "zOrder": 2, "width": 154, "visible": false, "var": "RecommendList4", "vScrollBarSkin": "ExportUI/Progress.png", "spaceY": 15, "right": 910, "repeatY": 2, "repeatX": 1, "height": 251, "centerY": -153 },
                        "nodeParent": 2,
                        "label": "RecommendList4",
                        "isOpen": null,
                        "isDirectory": true,
                        "isAniNode": true,
                        "hasChild": true,
                        "compId": 147,
                        "child": [
                            {
                                "type": "Image",
                                "searchKey": "Image,item",
                                "props": { "y": 70, "x": 70, "width": 108, "skin": "ExportUI/WechatIMG46.png", "renderType": "render", "pivotY": 50, "pivotX": 50, "name": "item", "height": 108 },
                                "nodeParent": 147,
                                "label": "item",
                                "isDirectory": true,
                                "isAniNode": false,
                                "hasChild": true,
                                "compId": 148,
                                "child": [
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,icon",
                                        "props": { "width": 100, "skin": "UI/doublePrize.png", "name": "icon", "height": 100, "centerY": 0, "centerX": 0 },
                                        "nodeParent": 148,
                                        "label": "icon",
                                        "isDirectory": false,
                                        "isAniNode": false,
                                        "hasChild": false,
                                        "compId": 149,
                                        "child": [
                                        ]
                                    },
                                    {
                                        "type": "Image",
                                        "searchKey": "Image,redPoint",
                                        "props": { "width": 40, "top": -14, "skin": "ExportUI/IconRedNew.png", "right": -18, "name": "redPoint", "height": 40 },
                                        "nodeParent": 148,
                                        "label": "redPoint",
                                        "isDirectory": false,
                                        "isAniNode": false,
                                        "hasChild": false,
                                        "compId": 150,
                                        "child": [
                                        ]
                                    }]
                            }]
                    }],
                animations: [{
                    nodes: [{
                        target: 60,
                        keyframes: {
                            y: [{
                                value: -42,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 60,
                                key: "y",
                                index: 0
                            }, {
                                value: -77,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 60,
                                key: "y",
                                index: 15
                            }, {
                                value: -42,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 60,
                                label: null,
                                key: "y",
                                index: 30
                            }],
                            x: [{
                                value: 156,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 60,
                                key: "x",
                                index: 0
                            }]
                        }
                    }],
                    name: "upgradeAni1",
                    id: 2,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 73,
                        keyframes: {
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 73,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 73,
                                key: "scaleY",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 73,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 73,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 73,
                                key: "scaleX",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 73,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }],
                    name: "AntColonyAni",
                    id: 3,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 66,
                        keyframes: {
                            y: [{
                                value: 41,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 66,
                                key: "y",
                                index: 0
                            }, {
                                value: 5,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 66,
                                key: "y",
                                index: 5
                            }, {
                                value: 41,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 66,
                                key: "y",
                                index: 8
                            }]
                        }
                    }],
                    name: "CoinAni",
                    id: 5,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 82,
                        keyframes: {
                            y: [{
                                value: 180,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "y",
                                index: 0
                            }, {
                                value: 118,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "y",
                                index: 15
                            }],
                            x: [{
                                value: 126,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "x",
                                index: 0
                            }, {
                                value: 182,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "x",
                                index: 15
                            }],
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "scaleY",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "scaleY",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "scaleX",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "scaleX",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 82,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 83,
                        keyframes: {
                            y: [{
                                value: 179,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "y",
                                index: 0
                            }, {
                                value: 195,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "y",
                                index: 15
                            }],
                            x: [{
                                value: 126,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "x",
                                index: 0
                            }, {
                                value: 224,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "x",
                                index: 15
                            }],
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "scaleY",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "scaleY",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "scaleX",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "scaleX",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 83,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 84,
                        keyframes: {
                            y: [{
                                value: 181,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "y",
                                index: 0
                            }, {
                                value: 280,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "y",
                                index: 15
                            }],
                            x: [{
                                value: 126,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "x",
                                index: 0
                            }, {
                                value: 196,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "x",
                                index: 15
                            }],
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "scaleY",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "scaleY",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "scaleX",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "scaleX",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 84,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 85,
                        keyframes: {
                            y: [{
                                value: 181,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "y",
                                index: 0
                            }, {
                                value: 300.5,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "y",
                                index: 15
                            }],
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "scaleY",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "scaleY",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "scaleX",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "scaleX",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 85,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 86,
                        keyframes: {
                            y: [{
                                value: 181,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "y",
                                index: 0
                            }, {
                                value: 272,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "y",
                                index: 15
                            }],
                            x: [{
                                value: 126,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "x",
                                index: 0
                            }, {
                                value: 48,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "x",
                                index: 15
                            }],
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "scaleY",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "scaleY",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "scaleX",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "scaleX",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 86,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 87,
                        keyframes: {
                            y: [{
                                value: 179,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "y",
                                index: 0
                            }, {
                                value: 195,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "y",
                                index: 15
                            }],
                            x: [{
                                value: 126,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "x",
                                index: 0
                            }, {
                                value: 37,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "x",
                                index: 15
                            }],
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "scaleY",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "scaleY",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "scaleX",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "scaleX",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 87,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 88,
                        keyframes: {
                            y: [{
                                value: 181,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "y",
                                index: 0
                            }, {
                                value: 92.5,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "y",
                                index: 15
                            }],
                            x: [{
                                value: 126,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "x",
                                index: 0
                            }, {
                                value: 132,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "x",
                                index: 15
                            }],
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "scaleY",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "scaleY",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "scaleX",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "scaleX",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 88,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 89,
                        keyframes: {
                            y: [{
                                value: 181,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "y",
                                index: 0
                            }, {
                                value: 118,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "y",
                                index: 15
                            }],
                            x: [{
                                value: 126,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "x",
                                index: 0
                            }, {
                                value: 76,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "x",
                                index: 15
                            }],
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "scaleY",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "scaleY",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "scaleX",
                                index: 3
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "scaleX",
                                index: 5
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 89,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 94,
                        keyframes: {
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 94,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 94,
                                key: "scaleY",
                                index: 8
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 94,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 94,
                                key: "scaleX",
                                index: 8
                            }],
                            alpha: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 94,
                                key: "alpha",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 94,
                                key: "alpha",
                                index: 8
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 94,
                                key: "alpha",
                                index: 13
                            }]
                        }
                    }],
                    name: "UpgradeAni",
                    id: 6,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 91,
                        keyframes: {
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 91,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1.5,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 91,
                                key: "scaleY",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 91,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 91,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1.5,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 91,
                                key: "scaleX",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 91,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 92,
                        keyframes: {
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 92,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 92,
                                key: "scaleY",
                                index: 10
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 92,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 92,
                                key: "scaleX",
                                index: 10
                            }],
                            alpha: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 92,
                                key: "alpha",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 92,
                                key: "alpha",
                                index: 10
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 92,
                                key: "alpha",
                                index: 15
                            }]
                        }
                    }],
                    name: "NewPlayerAni",
                    id: 7,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 69,
                        keyframes: {
                            y: [{
                                value: -6,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 69,
                                key: "y",
                                index: 0
                            }, {
                                value: -33,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 69,
                                key: "y",
                                index: 5
                            }, {
                                value: -6,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 69,
                                key: "y",
                                index: 8
                            }]
                        }
                    }],
                    name: "AntCountAni",
                    id: 5,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 79,
                        keyframes: {
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 79,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 79,
                                key: "scaleY",
                                index: 2
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 79,
                                key: "scaleY",
                                index: 5
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 79,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 79,
                                key: "scaleX",
                                index: 2
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 79,
                                key: "scaleX",
                                index: 5
                            }]
                        }
                    }],
                    name: "AntKingAni",
                    id: 3,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 61,
                        keyframes: {
                            y: [{
                                value: -42,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 61,
                                key: "y",
                                index: 0
                            }, {
                                value: -77,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 61,
                                key: "y",
                                index: 15
                            }, {
                                value: -42,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 61,
                                label: null,
                                key: "y",
                                index: 30
                            }],
                            x: [{
                                value: 156,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 61,
                                key: "x",
                                index: 0
                            }]
                        }
                    }],
                    name: "upgradeAni2",
                    id: 2,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 62,
                        keyframes: {
                            y: [{
                                value: -42,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 62,
                                key: "y",
                                index: 0
                            }, {
                                value: -77,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 62,
                                key: "y",
                                index: 15
                            }, {
                                value: -42,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 62,
                                label: null,
                                key: "y",
                                index: 30
                            }],
                            x: [{
                                value: 156,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 62,
                                key: "x",
                                index: 0
                            }]
                        }
                    }],
                    name: "upgradeAni3",
                    id: 2,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 116,
                        keyframes: {
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 116,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 116,
                                key: "scaleY",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 116,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 116,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 116,
                                key: "scaleX",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 116,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }],
                    name: "DoublePrizeAni",
                    id: 3,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 152,
                        keyframes: {
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 152,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 152,
                                key: "scaleY",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 152,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 152,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: .85,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 152,
                                key: "scaleX",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 152,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }],
                    name: "LevelUpAni",
                    id: 3,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 156,
                        keyframes: {
                            scaleY: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 156,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 1.5,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 156,
                                key: "scaleY",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 156,
                                key: "scaleY",
                                index: 15
                            }],
                            scaleX: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 156,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 1.5,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 156,
                                key: "scaleX",
                                index: 10
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 156,
                                key: "scaleX",
                                index: 15
                            }]
                        }
                    }, {
                        target: 157,
                        keyframes: {
                            scaleY: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 157,
                                key: "scaleY",
                                index: 0
                            }, {
                                value: 2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 157,
                                key: "scaleY",
                                index: 10
                            }],
                            scaleX: [{
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 157,
                                key: "scaleX",
                                index: 0
                            }, {
                                value: 2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 157,
                                key: "scaleX",
                                index: 10
                            }],
                            alpha: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 157,
                                key: "alpha",
                                index: 0
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 157,
                                key: "alpha",
                                index: 10
                            }, {
                                value: 0,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 157,
                                key: "alpha",
                                index: 15
                            }]
                        }
                    }],
                    name: "NewPlayerAni1",
                    id: 7,
                    frameRate: 24,
                    action: 0
                }, {
                    nodes: [{
                        target: 164,
                        keyframes: {
                            alpha: [{
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 164,
                                key: "alpha",
                                index: 0
                            }, {
                                value: .2,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 164,
                                key: "alpha",
                                index: 20
                            }, {
                                value: 1,
                                tweenMethod: "linearNone",
                                tween: true,
                                target: 164,
                                key: "alpha",
                                index: 40
                            }]
                        }
                    }],
                    name: "PrizeOutAni",
                    id: 8,
                    frameRate: 24,
                    action: 0
                }]
            };
            GameView.GameViewUI = GameViewUI;
            REG("ui.GameView.GameViewUI", GameViewUI);
            var JoyViewUI = /* */ function (_View9) {
                (0, _inherits2.default)(JoyViewUI, _View9);
                var _super32 = _createSuper(JoyViewUI);
                function JoyViewUI() {
                    (0, _classCallCheck2.default)(this, JoyViewUI);
                    return _super32.call(this);
                }
                (0, _createClass2.default)(JoyViewUI, [{
                    key: "createChildren",
                    value: function createChildren() {
                        (0, _get2.default)((0, _getPrototypeOf2.default)(JoyViewUI.prototype), "createChildren", this).call(this);
                        this.createView(JoyViewUI.uiView);
                    }
                }]);
                return JoyViewUI;
            }(View);
            JoyViewUI.uiView = {
                type: "View",
                props: {
                    width: 750,
                    top: 0,
                    right: 0,
                    left: 0,
                    height: 1334,
                    bottom: 0
                },
                compId: 2,
                loadList: [],
                loadList3D: []
            };
            GameView.JoyViewUI = JoyViewUI;
            REG("ui.GameView.JoyViewUI", JoyViewUI);
        })(GameView = ui.GameView || (ui.GameView = {}));
    })(ui || (ui = {}));
    var LevelUpDialogController = /* */ function (_Laya$Script13) {
        (0, _inherits2.default)(LevelUpDialogController, _Laya$Script13);
        var _super33 = _createSuper(LevelUpDialogController);
        function LevelUpDialogController() {
            var _this44;
            (0, _classCallCheck2.default)(this, LevelUpDialogController);
            _this44 = _super33.apply(this, arguments);
            _this44._prizeCoin = 0;
            _this44._bannerStatus = false;
            return _this44;
        }
        (0, _createClass2.default)(LevelUpDialogController, [{
            key: "init",
            value: function init(gameMainController) {
                this._gameMainController = gameMainController;
                this._prizeCoin = DataManager.Instance.coinRate * 15;
                this._root = this.owner;
                this._root.PrizeLabel.value = Utils.nFormatter(this._prizeCoin, 2);
                this._root.height += Utils.RealityY();
                this._root.CloseBtn.on(Laya.Event.CLICK, this, this._getLevelUpPrize);
                // if (Laya.Browser.onMiniGame && GameValue.Instance.ExportStatus) {
                //     var listController = this._root.RecommendList.addComponent(RecommendList);
                //     listController.init(ExportPageType.RecommendGrid, 4, 0, true);
                // } else {
                this._root.RecommendList.visible = false;
                // }
                // if (Laya.Browser.onMiniGame) {
                //     this._errBanner();
                // }
                platform.getInstance().initList(this.owner.showList)
            }
        }, {
            key: "_errBanner",
            value: function _errBanner() {
                var _this45 = this;
                if (GameValue.Instance.BannerStatus) {
                    this._root.CloseBtn.visible = true;
                    this._root.CloseBtn.bottom = 100;
                    this._root.CloseBtn.centerX = 0;
                    Laya.timer.loop(2e3, this, this._bannerHandle);
                } else {
                    this._root.CloseBtn.visible = false;
                    this._root.CloseBtn.bottom = 240;
                    this._root.CloseBtn.centerX = 233;
                    setTimeout(function () {
                        _this45._root.CloseBtn.visible = true;
                    }, 2e3);

                }
            }
        }, {
            key: "_bannerHandle",
            value: function _bannerHandle() {
                if (this._bannerStatus) {

                    this._bannerStatus = false;
                } else {

                    this._bannerStatus = true;
                }
            }
        }, {
            key: "_getLevelUpPrize",
            value: function _getLevelUpPrize() {
                DataManager.Instance.coin += this._prizeCoin;
                this._closeDialog();
                StorageManager.Instance.syncData();
                // if (Laya.Browser.onMiniGame) {
                //     wx.showToast({
                //         title: "Get ".concat(Math.floor(this._prizeCoin), " Money"),
                //         icon: "none"
                //     });
                // }
                // if (Laya.Browser.onMiniGame && GameValue.Instance.ExportStatus) {
                //     Laya.stage.event(EventData.IconCallBack);
                // }
            }
        }, {
            key: "onDestroy",
            value: function onDestroy() {
                console.log("销毁");
            }
        }, {
            key: "onDisable",
            value: function onDisable() {
                Laya.timer.clearAll(this);

            }
        }, {
            key: "_closeDialog",
            value: function _closeDialog() {
                DataManager.Instance.levelUpHandle();
                Laya.timer.clearAll(this);
                this._root.close();
            }
        }]);
        return LevelUpDialogController;
    }(Laya.Script);
    var PrizeLevelDialog = /* */ function (_Laya$Script14) {
        (0, _inherits2.default)(PrizeLevelDialog, _Laya$Script14);
        var _super34 = _createSuper(PrizeLevelDialog);
        function PrizeLevelDialog() {
            (0, _classCallCheck2.default)(this, PrizeLevelDialog);
            return _super34.apply(this, arguments);
        }
        (0, _createClass2.default)(PrizeLevelDialog, [{
            key: "init",
            value: function init(gameMainController) {
                var _this46 = this;
                this._gameMainController = gameMainController;
                this._root = this.owner;
                this._root.VideoBtn.on(Laya.Event.CLICK, this, this._videoBtnHandle);
                this._root.CloseBtn.on(Laya.Event.CLICK, this, this._closeDialog);
                this._root.CloseBtn.visible = false;
                Laya.timer.once(5e3, this, function () {
                    _this46._root.CloseBtn.visible = true;
                });
                if (StorageManager.Instance.firstPrizeLevel) {
                    if (GameValue.Instance.VideoIconStatus) {
                        this._root.VideoBtn.getChildByName("AD").visible = true;
                    } else {
                        this._root.VideoBtn.getChildByName("AD").visible = false;
                    }
                } else {
                    this._root.VideoBtn.getChildByName("AD").visible = false;
                }
            }
        }, {
            key: "_videoBtnHandle",
            value: function _videoBtnHandle() {
                var _this47 = this;
                platform.getInstance().showReward(() => {
                    this._closeDialog();
                    this._gameMainController.openPrizeLevel();
                })
            }
        }, {
            key: "_closeDialog",
            value: function _closeDialog() {
                console.log("关闭");
                this._root.close();
            }
        }]);
        return PrizeLevelDialog;
    }(Laya.Script);
    var SceneManager = /* */ function () {
        function SceneManager() {
            (0, _classCallCheck2.default)(this, SceneManager);
            this._scenesStack = [];
            this._sceneConfig = {};
        }
        (0, _createClass2.default)(SceneManager, [{
            key: "init",
            value: function init(configArr) {
                var _this48 = this;
                if (configArr) {
                    configArr.forEach(function (config) {
                        _this48._sceneConfig[config.tag] = config;
                    });
                }
            }
        }, {
            key: "loadScene",
            value: function loadScene(indentify) {
                var _this49 = this;
                var loadOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var isAdditive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                var progress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var priority = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
                return new Promise(function (resolve, reject) {
                    var scene = indentify;
                    if (typeof indentify == "number") {
                        scene = _this49._sceneConfig[indentify];
                    }
                    var loadFinish = function loadFinish(createdScene) {
                        if (createdScene && !loadOnly) {
                            if (!isAdditive) {
                                _this49._clearScenes();
                            }
                            if (scene.controller) {
                                createdScene.addComponent(scene.controller);
                            }
                            _this49._scenesStack.push(createdScene);
                            Laya.stage.addChild(createdScene);
                        }
                        resolve(createdScene);
                    };
                    Laya.loader.create(scene.url, Laya.Handler.create(_this49, loadFinish), progress, null, scene.constructParams, scene.propertyParams, priority, false);
                });
            }
        }, {
            key: "_clearScenes",
            value: function _clearScenes() {
                var _this50 = this;
                this._scenesStack.forEach(function (item) {
                    return _this50._destroyScene(item);
                });
                this._scenesStack = [];
            }
        }, {
            key: "removeSceneByIndex",
            value: function removeSceneByIndex(index) {
                var scenes = this._scenesStack.splice(index, 1);
                if (scenes.length) this._destroyScene(scenes[0]);
            }
        }, {
            key: "_destroyScene",
            value: function _destroyScene(scene) {
                scene.destroy(true);
            }
        }, {
            key: "removeCurrentScene",
            value: function removeCurrentScene() {
                this._destroyScene(this._scenesStack.pop());
            }
        }, {
            key: "SceneStack",
            get: function get() {
                return this._scenesStack;
            }
        }, {
            key: "currentScene",
            get: function get() {
                return this._scenesStack[this._scenesStack.length - 1] || null;
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (SceneManager._instance == null) SceneManager._instance = new SceneManager();
                return SceneManager._instance;
            }
        }]);
        return SceneManager;
    }();
    SceneManager._instance = null;
    var PrefabManager = /* */ function () {
        function PrefabManager() {
            (0, _classCallCheck2.default)(this, PrefabManager);
        }
        (0, _createClass2.default)(PrefabManager, [{
            key: "init",
            value: function init() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee16() {
                    return _regenerator.default.wrap(function _callee16$(_context16) {
                        while (1) {
                            switch (_context16.prev = _context16.next) {
                                case 0:
                                    this._prefabBaseURL = Utils.getPrefabConfig();
                                    _context16.next = 3;
                                    return this._initAntPrefab();

                                case 3:
                                    _context16.next = 5;
                                    return this._initScenePrefab();

                                case 5:
                                    _context16.next = 7;
                                    return this._initEffectPrefab();

                                case 7:
                                case "end":
                                    return _context16.stop();
                            }
                        }
                    }, _callee16, this);
                }));
            }
        }, {
            key: "getFoodPrefab",
            value: function getFoodPrefab(name) {
                return this._loadPrefab(name);
            }
        }, {
            key: "getAntPrefab",
            value: function getAntPrefab(name) {
                if (this._antPrefab.hasOwnProperty(name)) {
                    return this._antPrefab[name];
                } else {
                    return null;
                }
            }
        }, {
            key: "getScenePrefab",
            value: function getScenePrefab(name) {
                if (this._scenePrefab.hasOwnProperty(name)) {
                    return this._scenePrefab[name];
                } else {
                    return null;
                }
            }
        }, {
            key: "getEffectPrefab",
            value: function getEffectPrefab(name) {
                if (this._effectPrefab.hasOwnProperty(name)) {
                    return this._effectPrefab[name];
                } else {
                    return null;
                }
            }
        }, {
            key: "_initAntPrefab",
            value: function _initAntPrefab() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee17() {
                    var prefab, i, child;
                    return _regenerator.default.wrap(function _callee17$(_context17) {
                        while (1) {
                            switch (_context17.prev = _context17.next) {
                                case 0:
                                    this._antPrefab = {};
                                    _context17.next = 3;
                                    return this._loadPrefab(PrefabName.AntPrefab);

                                case 3:
                                    prefab = _context17.sent;
                                    for (i = 0; i < prefab.numChildren; i++) {
                                        child = prefab.getChildAt(i);
                                        this._antPrefab[child.name] = child;
                                    }

                                case 5:
                                case "end":
                                    return _context17.stop();
                            }
                        }
                    }, _callee17, this);
                }));
            }
        }, {
            key: "_initScenePrefab",
            value: function _initScenePrefab() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee18() {
                    var prefab, i, child;
                    return _regenerator.default.wrap(function _callee18$(_context18) {
                        while (1) {
                            switch (_context18.prev = _context18.next) {
                                case 0:
                                    this._scenePrefab = {};
                                    _context18.next = 3;
                                    return this._loadPrefab(PrefabName.ScenePrefab);

                                case 3:
                                    prefab = _context18.sent;
                                    for (i = 0; i < prefab.numChildren; i++) {
                                        child = prefab.getChildAt(i);
                                        this._scenePrefab[child.name] = child;
                                    }

                                case 5:
                                case "end":
                                    return _context18.stop();
                            }
                        }
                    }, _callee18, this);
                }));
            }
        }, {
            key: "_initEffectPrefab",
            value: function _initEffectPrefab() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee19() {
                    var prefab, i, child;
                    return _regenerator.default.wrap(function _callee19$(_context19) {
                        while (1) {
                            switch (_context19.prev = _context19.next) {
                                case 0:
                                    this._effectPrefab = {};
                                    _context19.next = 3;
                                    return this._loadPrefab(PrefabName.EffectPrefab);

                                case 3:
                                    prefab = _context19.sent;
                                    for (i = 0; i < prefab.numChildren; i++) {
                                        child = prefab.getChildAt(i);
                                        this._effectPrefab[child.name] = child;
                                    }

                                case 5:
                                case "end":
                                    return _context19.stop();
                            }
                        }
                    }, _callee19, this);
                }));
            }
        }, {
            key: "_loadPrefab",
            value: function _loadPrefab(name) {
                var _this51 = this;
                return new Promise(function (resolve, reject) {
                    var url = "".concat(_this51._prefabBaseURL, "/").concat(name, ".lh");
                    Laya.loader.create(url, Laya.Handler.create(_this51, function (prefab) {
                        if (prefab) {
                            resolve(prefab);
                        } else {
                            console.log("levelManager errpr");
                            reject();
                        }
                    }), null, null, null, null, 1, false);
                });
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (!PrefabManager._instance) {
                    PrefabManager._instance = new PrefabManager();
                }
                return PrefabManager._instance;
            }
        }]);
        return PrefabManager;
    }();
    var EffectController = /* */ function (_Laya$Script3D2) {
        (0, _inherits2.default)(EffectController, _Laya$Script3D2);
        var _super35 = _createSuper(EffectController);
        function EffectController() {
            (0, _classCallCheck2.default)(this, EffectController);
            return _super35.apply(this, arguments);
        }
        (0, _createClass2.default)(EffectController, [{
            key: "init",
            value: function init(controller, prefabKey) {
                this._controller = controller;
                this._prefabKey = prefabKey;
            }
        }, {
            key: "recover",
            value: function recover() {
                this._controller.effectPool.recoverEffectObj(this.owner, this._prefabKey);
            }
        }, {
            key: "recovered",
            get: function get() {
                return this._recovered;
            },
            set: function set(value) {
                this._recovered = value;
            }
        }]);
        return EffectController;
    }(Laya.Script3D);
    var MoveType;
    (function (MoveType) {
        MoveType[MoveType["MoveUp"] = 0] = "MoveUp";
        MoveType[MoveType["Move"] = 1] = "Move";
        MoveType[MoveType["Eat"] = 2] = "Eat";
        MoveType[MoveType["MoveBack"] = 3] = "MoveBack";
        MoveType[MoveType["MoveDwon"] = 4] = "MoveDwon";
    })(MoveType || (MoveType = {}));
    var PrizeAntController = /* */ function (_Laya$Script3D3) {
        (0, _inherits2.default)(PrizeAntController, _Laya$Script3D3);
        var _super36 = _createSuper(PrizeAntController);
        function PrizeAntController() {
            var _this52;
            (0, _classCallCheck2.default)(this, PrizeAntController);
            _this52 = _super36.apply(this, arguments);
            _this52._recovered = false;
            _this52._moveSpeedScale = .8;
            _this52._eatFoodTimer = 3e3;
            _this52._foodCount = 1;
            _this52._isAntKing = false;
            _this52._lifeTiemr = 12e4;
            _this52._isDead = false;
            _this52._isTemp = false;
            _this52._isStop = false;
            return _this52;
        }
        (0, _createClass2.default)(PrizeAntController, [{
            key: "init",
            value: function init(gameSceneController) {
                this._root = this.owner;
                this._gameSceneController = gameSceneController;
                this._foodView = this._root.getChildByName("food");
                this._foodView.transform.localPositionY = .15;
                this._animator = this._root.getComponent(Laya.Animator);
                Laya.stage.on(EventData.UpgradeMoveSpeed, this, this._refreshAntStat);
            }
        }, {
            key: "setAntKing",
            value: function setAntKing(stat) {
                this._isAntKing = stat;
                this._isDead = false;
            }
        }, {
            key: "setTempStatus",
            value: function setTempStatus(stat) {
                this._isTemp = stat;
            }
        }, {
            key: "resetAntAni",
            value: function resetAntAni() {
                this._playAniStart(AntAniName.RESET);
            }
        }, {
            key: "startAction",
            value: function startAction(stat) {
                if (this._isStop) return;
                if (stat == null) {
                    this._moveStat = MoveType.MoveUp;
                } else {
                    this._moveStat = stat;
                }
                switch (this._moveStat) {
                    case MoveType.MoveUp:
                        this._playAniStart(AntAniName.UP);
                        break;

                    case MoveType.Move:
                        if (this._gameSceneController.foodController.isEmpty()) {
                            this.startAction(MoveType.MoveBack);
                        } else {
                            this._moveHandle();
                        }
                        break;

                    case MoveType.Eat:
                        this._playAniStart(AntAniName.EAT);
                        this._foodScaleTween();
                        break;

                    case MoveType.MoveBack:
                        this._radiusX = 0;
                        this._radiusZ = 0;
                        this._antMoveStart(Utils.ZERO.clone());
                        break;

                    case MoveType.MoveDwon:
                        break;
                }
            }
        }, {
            key: "_moveHandle",
            value: function _moveHandle() {
                var _this53 = this;
                if (this._isAntKing) {
                    this._targetFood = new Laya.Sprite3D();
                    var foodArr = this._gameSceneController.foodController.popBigFoodPoint();
                    this._foodCount = foodArr.length;
                    foodArr[0].parent.addChild(this._targetFood);
                    foodArr.forEach(function (ele) {
                        _this53._targetFood.addChild(ele);
                    });
                    this._radiusX = .2;
                    this._radiusZ = .1;
                    this._antMoveStart(foodArr[0].transform.position);
                } else {
                    this._targetFood = this._gameSceneController.foodController.popFoodPoint();
                    this._radiusX = .2;
                    this._radiusZ = .1;
                    this._foodCount = 1;
                    this._antMoveStart(this._targetFood.transform.position);
                }
            }
        }, {
            key: "_antMoveStart",
            value: function _antMoveStart(targetPos) {
                var _this54 = this;
                Laya.Tween.clearAll(this._walkTarget);
                var time = Laya.Vector3.distance(this.fromPos, targetPos) / (DataManager.Instance.moveSpeed * this._moveSpeedScale);
                time *= 1e3;
                var t = this._root.transform;
                var pos = t.localPosition;
                this._walkTarget = {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                };
                var up = new Laya.Vector3();
                t.getUp(up);
                t.lookAt(targetPos, up);
                this._playAniStart(AntAniName.WALK);
                Laya.Tween.to(this._walkTarget, {
                    x: targetPos.x - this._radiusX,
                    y: targetPos.y,
                    z: targetPos.z + this._radiusZ
                }, time, null, Laya.Handler.create(this, this._antMoveEnd)).update = LHandler.createloop(this, function () {
                    t.localPositionX = _this54._walkTarget.x;
                    t.localPositionY = 0;
                    t.localPositionZ = _this54._walkTarget.z;
                });
            }
        }, {
            key: "_antMoveEnd",
            value: function _antMoveEnd() {
                switch (this._moveStat) {
                    case MoveType.Move:
                        this.startAction(MoveType.Eat);
                        break;

                    case MoveType.MoveBack:
                        this._playAniStart(AntAniName.DOWN);
                        this._foodView.removeChildren();
                        this.playCoinEffect(EffectName.FxGetMilu);
                        break;
                }
            }
        }, {
            key: "_playAniStart",
            value: function _playAniStart(name) {
                var duration = this._animator.getControllerLayer().getAnimatorState(name).clip.duration();
                this._animator.crossFade(name, 0, 0, 0);
                Laya.timer.once(duration * 1e3, this, this._playAniEnd, [name]);
            }
        }, {
            key: "_playAniEnd",
            value: function _playAniEnd(name) {
                switch (name) {
                    case AntAniName.UP:
                        this.startAction(MoveType.Move);
                        break;

                    case AntAniName.DOWN:
                        this._resetAntStat();
                        if (!this._gameSceneController.foodController.isEmpty()) {
                            if (this._isAntKing && this._isDead) {
                                this._gameSceneController.recoverAnt(this._root);
                            } else if (this._isTemp) {
                                this._gameSceneController.recoverAnt(this._root);
                                this._isTemp = false;
                            } else {
                                this.startAction();
                            }
                        } else {
                            this._isTemp = false;
                            this._gameSceneController.recoverAnt(this._root);
                        }
                        this._gameSceneController.updateLevelPrpgress(this._foodCount);
                        break;
                }
            }
        }, {
            key: "_refreshAntStat",
            value: function _refreshAntStat() {
                if (this._recovered) return;
                switch (this._moveStat) {
                    case MoveType.MoveBack:
                        if (this._targetFood !== null) {
                            this._antMoveStart(Utils.ZERO.clone());
                        }
                        break;

                    case MoveType.Move:
                        this._antMoveStart(this._targetFood.transform.position);
                        break;
                }
                this._playSpeedUpEffect();
            }
        }, {
            key: "_playSpeedUpEffect",
            value: function _playSpeedUpEffect() {
                var _this55 = this;
                if (this._speedEffect != null) return;
                this._speedEffect = this._gameSceneController.gameMainController.gameSceneController.effectPool.getEffectObj(EffectName.FxSpeed);
                this._root.addChild(this._speedEffect);
                this._speedEffect.active = true;
                Laya.timer.once(1e3, this, function () {
                    var ctrl = _this55._speedEffect.getComponent(EffectController);
                    ctrl.recover();
                    _this55._speedEffect = null;
                });
            }
        }, {
            key: "playAntEffect",
            value: function playAntEffect(effectName) {
                var effect = this._gameSceneController.gameMainController.gameSceneController.effectPool.getEffectObj(effectName);
                this._root.addChild(effect);
                effect.active = true;
                Laya.timer.once(1e3, this, function () {
                    var ctrl = effect.getComponent(EffectController);
                    ctrl.recover();
                });
            }
        }, {
            key: "playCoinEffect",
            value: function playCoinEffect(effectName) {
                var effect = this._gameSceneController.gameMainController.gameSceneController.effectPool.getEffectObj(effectName);
                this._root.addChild(effect);
                effect.transform.position.y = .3;
                effect.active = true;
                AudioManager.Instance.playSound("audio_getcoin.mp3");
                Laya.timer.once(1e3, this, function () {
                    var ctrl = effect.getComponent(EffectController);
                    ctrl.recover();
                });
            }
        }, {
            key: "_foodScaleTween",
            value: function _foodScaleTween() {
                var _this56 = this;
                if (this._isAntKing) {
                    var _loop2 = function _loop2(i) {
                        var foodPoint = _this56._targetFood.getChildAt(i);
                        Laya.Tween.to(foodPoint.transform, {
                            localScaleX: 0,
                            localScaleY: 0,
                            localScaleZ: 0
                        }, _this56._eatFoodTimer, null, Laya.Handler.create(_this56, function () {
                            if (_this56._isStop) {
                                foodPoint.transform.localScale = new Laya.Vector3(1, 1, 1);
                            } else {
                                _this56._eatFoodEndHandle(foodPoint);
                            }
                        }));
                    };
                    for (var i = 0; i < this._targetFood.numChildren; i++) {
                        _loop2(i);
                    }
                } else {
                    Laya.Tween.to(this._targetFood.transform, {
                        localScaleX: 0,
                        localScaleY: 0,
                        localScaleZ: 0
                    }, this._eatFoodTimer, null, Laya.Handler.create(this, function () {
                        if (_this56._isStop) {
                            _this56._targetFood.transform.localScale = new Laya.Vector3(1, 1, 1);
                        } else {
                            _this56._eatFoodEndHandle(_this56._targetFood);
                        }
                    }));
                }
            }
        }, {
            key: "_eatFoodEndHandle",
            value: function _eatFoodEndHandle(food) {
                this._foodView.addChild(food);
                food.transform.localScale = new Laya.Vector3(.8, .8, .8);
                food.transform.position = Utils.ZERO.clone();
                food.transform.localPosition = Utils.ZERO.clone();
                if (this._targetFood.numChildren <= 0) {
                    this.startAction(MoveType.MoveBack);
                }
            }
        }, {
            key: "_resetAntStat",
            value: function _resetAntStat() {
                this._foodView.removeChildren();
                this._root.transform.position = new Laya.Vector3();
                this._root.transform.localPosition = new Laya.Vector3();
                this._root.transform.rotation = new Laya.Quaternion();
            }
        }, {
            key: "stop",
            value: function stop() {
                this._isStop = true;
                this._animator.speed = 0;
                Laya.Tween.clearAll(this._walkTarget);
            }
        }, {
            key: "resume",
            value: function resume() {
                this._isStop = false;
                this._animator.speed = 1;
                switch (this._moveStat) {
                    case MoveType.MoveBack:
                        if (this._targetFood !== null) {
                            this._antMoveStart(Utils.ZERO.clone());
                        }
                        break;

                    case MoveType.Move:
                        this._antMoveStart(this._targetFood.transform.position);
                        break;

                    case MoveType.Eat:
                        this._foodScaleTween();
                        break;

                    default:
                        this.startAction(this._moveStat);
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this._isStop) return;
                if (this._isAntKing && !this._isDead) {
                    this._lifeTiemr -= Laya.timer.delta;
                    if (this._lifeTiemr <= 0) {
                        this._isDead = true;
                    }
                }
            }
        }, {
            key: "recovered",
            get: function get() {
                return this._recovered;
            },
            set: function set(value) {
                this._recovered = value;
            }
        }, {
            key: "fromPos",
            get: function get() {
                return this._root.transform.position;
            },
            set: function set(value) {
                this._root.transform.position = value;
            }
        }]);
        return PrizeAntController;
    }(Laya.Script3D);
    var FoodController = /* */ function (_Laya$Script3D4) {
        (0, _inherits2.default)(FoodController, _Laya$Script3D4);
        var _super37 = _createSuper(FoodController);
        function FoodController() {
            (0, _classCallCheck2.default)(this, FoodController);
            return _super37.apply(this, arguments);
        }
        (0, _createClass2.default)(FoodController, [{
            key: "init",
            value: function init(gameSceneController) {
                this._root = this.owner;
                this._gameSceneController = gameSceneController;
                this._createFood();
            }
        }, {
            key: "popFoodPoint",
            value: function popFoodPoint() {
                return this._foodPoint.pop();
            }
        }, {
            key: "popBigFoodPoint",
            value: function popBigFoodPoint() {
                var _this57 = this;
                var center = this.popFoodPoint();
                var pos = center.transform.position;
                var arr = [center];
                this._foodPoint.forEach(function (item, index) {
                    if (Laya.Vector3.distance(item.transform.position, pos) < .3 && arr.length < 10) {
                        arr.push(_this57._foodPoint.splice(index, 1)[0]);
                    }
                });
                return arr;
            }
        }, {
            key: "isEmpty",
            value: function isEmpty() {
                return this.foodSize === 0;
            }
        }, {
            key: "_createFood",
            value: function _createFood() {
                this._foodPoint = [];
                for (var i = 0; i < this._root.numChildren; i++) {
                    var food = this._root.getChildAt(i);
                    if (food.name.indexOf("Disable") === -1) {
                        this._foodPoint.push(food);
                    }
                }
                this._maxFoodSize = this._foodPoint.length;
                Laya.stage.event(EventData.UpdateLevelProgress, [0, this._maxFoodSize]);
                this._setSortPoint();
            }
        }, {
            key: "_setSortPoint",
            value: function _setSortPoint() {
                var len = this._foodPoint.length;
                for (var i = 0; i < len; i++) {
                    for (var j = 0; j < len; j++) {
                        if (j + 1 < len && this._setSortRule(this._foodPoint[j].transform.position, this._foodPoint[j + 1].transform.position)) {
                            var tmp = this._foodPoint[j];
                            this._foodPoint[j] = this._foodPoint[j + 1];
                            this._foodPoint[j + 1] = tmp;
                        }
                    }
                }
            }
        }, {
            key: "_setSortRule",
            value: function _setSortRule(p1, p2) {
                if (p1.z > p2.z) {
                    return true;
                } else if (p1.z === p2.z) {
                    return p1.x > p2.x;
                } else {
                    return false;
                }
            }
        }, {
            key: "foodSize",
            get: function get() {
                return this._foodPoint.length;
            }
        }, {
            key: "maxFoodSize",
            get: function get() {
                return this._maxFoodSize;
            }
        }]);
        return FoodController;
    }(Laya.Script3D);
    var PrizeLevelController = /* */ function (_Laya$Script3D5) {
        (0, _inherits2.default)(PrizeLevelController, _Laya$Script3D5);
        var _super38 = _createSuper(PrizeLevelController);
        function PrizeLevelController() {
            var _this58;
            (0, _classCallCheck2.default)(this, PrizeLevelController);
            _this58 = _super38.apply(this, arguments);
            _this58._currentAntName = AntName.Ant_black;
            _this58._currentAnt = [];
            _this58._currentFood = FoodName.Huangjin;
            _this58._count = 0;
            return _this58;
        }
        (0, _createClass2.default)(PrizeLevelController, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
                this._sceneView = this._root.getChildByName("SceneView");
                this._foodView = this._root.getChildByName("FoodView");
                this._antView = this._root.getChildByName("AntView");
                this._bornPoint = this._root.getChildByName("BornPoint");
                Laya.stage.on(EventData.UpdateAntCount, this, this._updateAnt);
            }
        }, {
            key: "init",
            value: function init(gameMainController) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee20() {
                    return _regenerator.default.wrap(function _callee20$(_context20) {
                        while (1) {
                            switch (_context20.prev = _context20.next) {
                                case 0:
                                    this._gameMainController = gameMainController;
                                    _context20.next = 3;
                                    return this.initScene();

                                case 3:
                                case "end":
                                    return _context20.stop();
                            }
                        }
                    }, _callee20, this);
                }));
            }
        }, {
            key: "startGame",
            value: function startGame() {
                if (this._gameSceneController.foodController || !this._gameSceneController.foodController._foodPoint) {
                    return;
                }
                var _this59 = this;
                this._gameMainController.gameViewController.isGameOver = false;
                this._count = 0;
                this._currentAnt.forEach(function (ant, index) {
                    return __awaiter(_this59, void 0, void 0, /* */ _regenerator.default.mark(function _callee21() {
                        return _regenerator.default.wrap(function _callee21$(_context21) {
                            while (1) {
                                switch (_context21.prev = _context21.next) {
                                    case 0:
                                        _context21.next = 2;
                                        return Utils.delayHandle(500 * index, function () {
                                            var ctrl = ant.getComponent(PrizeAntController);
                                            ctrl.setAntKing(false);
                                            ctrl.startAction();
                                            ant.active = true;
                                        });

                                    case 2:
                                    case "end":
                                        return _context21.stop();
                                }
                            }
                        }, _callee21);
                    }));
                });
                this.addAntKing();
                this.addAntKing();
            }
        }, {
            key: "initScene",
            value: function initScene() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee22() {
                    return _regenerator.default.wrap(function _callee22$(_context22) {
                        while (1) {
                            switch (_context22.prev = _context22.next) {
                                case 0:
                                    this._clearScenePrefab();
                                    _context22.next = 3;
                                    return this._setFoodPrefab();

                                case 3:
                                    this._createAnt();

                                case 4:
                                case "end":
                                    return _context22.stop();
                            }
                        }
                    }, _callee22, this);
                }));
            }
        }, {
            key: "_clearScenePrefab",
            value: function _clearScenePrefab() {
                this._antView.removeChildren();
                this._foodView.removeChildren();
            }
        }, {
            key: "_createAnt",
            value: function _createAnt() {
                for (var i = 0; i < DataManager.Instance.antCount; i++) {
                    var gameObject = this._getAnt(this._currentAntName);
                    this._antView.addChild(gameObject);
                    gameObject.transform.localPosition = Utils.ZERO.clone();
                    this._currentAnt.push(gameObject);
                }
            }
        }, {
            key: "_setFoodPrefab",
            value: function _setFoodPrefab() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee23() {
                    var food;
                    return _regenerator.default.wrap(function _callee23$(_context23) {
                        while (1) {
                            switch (_context23.prev = _context23.next) {
                                case 0:
                                    _context23.next = 2;
                                    return PrefabManager.Instance.getFoodPrefab(this._currentFood);

                                case 2:
                                    food = _context23.sent;
                                    this._food = Laya.Sprite3D.instantiate(food, this._foodView, false, this._foodView.transform.position);
                                    this._foodController = this._food.addComponent(FoodController);
                                    this._foodController.init(this);
                                    this._food.active = true;

                                case 7:
                                case "end":
                                    return _context23.stop();
                            }
                        }
                    }, _callee23, this);
                }));
            }
        }, {
            key: "_updateAnt",
            value: function _updateAnt(count) {
                var isTemp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee24() {
                    var _this60 = this;
                    var i;
                    return _regenerator.default.wrap(function _callee24$(_context24) {
                        while (1) {
                            switch (_context24.prev = _context24.next) {
                                case 0:
                                    i = 0;

                                case 1:
                                    if (!(i < count)) {
                                        _context24.next = 7;
                                        break;
                                    }
                                    _context24.next = 4;
                                    return Utils.delayHandle(Math.random() * 200 * i, function () {
                                        _this60._addAnt(isTemp);
                                    });

                                case 4:
                                    i++;
                                    _context24.next = 1;
                                    break;

                                case 7:
                                case "end":
                                    return _context24.stop();
                            }
                        }
                    }, _callee24);
                }));
            }
        }, {
            key: "_addAnt",
            value: function _addAnt() {
                var isTemp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var gameObject = this._getAnt(this._currentAntName);
                this._antView.addChild(gameObject);
                gameObject.transform.localPosition = Utils.getRangePos(this._bornPoint.transform.position);
                gameObject.transform.rotation = new Laya.Quaternion();
                this._currentAnt.push(gameObject);
                gameObject.active = true;
                var ctrl = gameObject.getComponent(PrizeAntController);
                ctrl.resetAntAni();
                Laya.timer.frameOnce(2, this, function () {
                    ctrl.setAntKing(false);
                    ctrl.setTempStatus(isTemp);
                    ctrl.startAction(MoveType.Move);
                    ctrl.playAntEffect(EffectName.FxBorn);
                    AudioManager.Instance.playSound("audio_count.mp3");
                });
            }
        }, {
            key: "addAntKing",
            value: function addAntKing() {
                var gameObject = this._getAnt(AntName.Ant_King);
                this._antView.addChild(gameObject);
                this._currentAnt.push(gameObject);
                gameObject.transform.localPosition = Utils.getRangePos(this._bornPoint.transform.position);
                var ctrl = gameObject.getComponent(PrizeAntController);
                ctrl.setAntKing(true);
                ctrl.startAction(MoveType.Move);
                gameObject.active = true;
                ctrl.playAntEffect(EffectName.FxBorn);
                AudioManager.Instance.playSound("audio_count.mp3");
            }
        }, {
            key: "recoverAnt",
            value: function recoverAnt(root) {
                var index = this._currentAnt.findIndex(function (ele) {
                    return ele.id === root.id;
                });
                this._currentAnt.splice(index, 1);
                root.active = false;
                Laya.timer.once(1e3, this, function () {
                    root.destroy();
                });
            }
        }, {
            key: "_getAnt",
            value: function _getAnt(skinID) {
                var prefab = PrefabManager.Instance.getAntPrefab(skinID);
                if (prefab) {
                    var ant = Laya.Sprite3D.instantiate(prefab, this._antView, false);
                    var ctrl = ant.addComponent(PrizeAntController);
                    ctrl.init(this);
                    ctrl.recovered = false;
                    ant.active = false;
                    return ant;
                }
                return null;
            }
        }, {
            key: "updateLevelPrpgress",
            value: function updateLevelPrpgress(count) {
                if (count == null) count = 0;
                this._count += count;
                Laya.stage.event(EventData.UpdateLevelProgress, [this._count, this._foodController.maxFoodSize]);
                var coin = DataManager.Instance.coinRate * count * DataManager.Instance.doublieCoin;
                DataManager.Instance.coin += coin;
                DataManager.Instance.userExp += count;
                if (this._currentAnt.length === 0) {
                    StorageManager.Instance.firstPrizeLevel = true;
                    this._gameMainController.closePrizeLevel();
                }
                StorageManager.Instance.syncData();
            }
        }, {
            key: "remove",
            value: function remove() {
                Laya.stage.off(EventData.UpdateAntCount, this, this._updateAnt);
            }
        }, {
            key: "root",
            get: function get() {
                return this._root;
            }
        }, {
            key: "gameMainController",
            get: function get() {
                return this._gameMainController;
            }
        }, {
            key: "foodController",
            get: function get() {
                return this._foodController;
            }
        }, {
            key: "currentAntName",
            get: function get() {
                return this._currentAntName;
            }
        }]);
        return PrizeLevelController;
    }(Laya.Script3D);
    var GameMainController = /* */ function (_Laya$Script15) {
        (0, _inherits2.default)(GameMainController, _Laya$Script15);
        var _super39 = _createSuper(GameMainController);
        function GameMainController() {
            var _this61;
            (0, _classCallCheck2.default)(this, GameMainController);
            _this61 = _super39.apply(this, arguments);
            _this61._exportView = {};
            return _this61;
        }
        (0, _createClass2.default)(GameMainController, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
            }
        }, {
            key: "setupController",
            value: function setupController(controllerAwaiter) {
                var _this62 = this;
                controllerAwaiter.then(function (controller) {
                    _this62._gameSceneController = controller;
                    _this62._controllerPromise = null;
                });
                this._controllerPromise = controllerAwaiter;
            }
        }, {
            key: "startGame",
            value: function startGame() {
                this._hideHomeView();
                this._gameSceneController.startGame();
            }
        }, {
            key: "_createGameView",
            value: function _createGameView() {
                if (!this._gameViewController) {
                    var pro = (Laya.Browser.clientHeight / Laya.Browser.clientWidth).toFixed(2);
                    var gameView = new ui.GameView.GameViewUI();
                    gameView.width = gameView.height * parseFloat(pro);
                    this._root.addChild(gameView);
                    this._gameViewController = gameView.addComponent(GameViewController);
                    this._gameViewController.init(this);
                } else {
                    this._gameViewController.root.visible = true;
                }
            }
        }, {
            key: "_createJoyController",
            value: function _createJoyController() {
                if (!this._joyController) {
                    var joyView = new ui.GameView.JoyViewUI();
                    this._gameViewController.root.addChild(joyView);
                    joyView.zOrder = 1;
                    this._joyController = joyView.addComponent(JoyController);
                    this._joyController.init(this);
                } else {
                    this._joyController.root.visible = true;
                }
            }
        }, {
            key: "_createPrizeLevel",
            value: function _createPrizeLevel() {
                var _this63 = this;
                return new Promise(function (resolve, reject) {
                    return __awaiter(_this63, void 0, void 0, /* */ _regenerator.default.mark(function _callee25() {
                        var gameScene, gameSceneController;
                        return _regenerator.default.wrap(function _callee25$(_context25) {
                            while (1) {
                                switch (_context25.prev = _context25.next) {
                                    case 0:
                                        _context25.next = 2;
                                        return SceneManager.Instance.loadScene(1, false, true);

                                    case 2:
                                        gameScene = _context25.sent;
                                        gameSceneController = gameScene.addComponent(PrizeLevelController);
                                        resolve(gameSceneController);

                                    case 5:
                                    case "end":
                                        return _context25.stop();
                                }
                            }
                        }, _callee25);
                    }));
                });
            }
        }, {
            key: "openPrizeLevel",
            value: function openPrizeLevel() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee26() {
                    return _regenerator.default.wrap(function _callee26$(_context26) {
                        while (1) {
                            switch (_context26.prev = _context26.next) {
                                case 0:
                                    this._startGameAni();
                                    this._gameSceneController.stopGame();
                                    _context26.next = 4;
                                    return this._createPrizeLevel();

                                case 4:
                                    this._prizeLevelController = _context26.sent;
                                    _context26.next = 7;
                                    return this._prizeLevelController.init(this);

                                case 7:
                                    this._prizeLevelController.startGame();
                                    this._gameSceneController.root.active = false;
                                    this._endGameAni();

                                case 10:
                                case "end":
                                    return _context26.stop();
                            }
                        }
                    }, _callee26, this);
                }));
            }
        }, {
            key: "closePrizeLevel",
            value: function closePrizeLevel() {
                if (this._prizeLevelController == null) return;
                this._startGameAni();
                this._gameSceneController.root.active = true;
                this._gameSceneController.resumeGame();
                this._prizeLevelController.remove();
                var scene = this._prizeLevelController.root;
                scene.active = false;
                Laya.stage.removeChild(scene);
                Laya.timer.once(1e3, this, function () {
                    scene.destroy();
                });
            }
        }, {
            key: "_startGameAni",
            value: function _startGameAni() {
                this._raduis = 0;
                this._root.MskBox.visible = true;
                Laya.Tween.to(this._root.MskBox, {
                    update: new Laya.Handler(this, this._drawPieIn)
                }, 2e3, Laya.Ease.linearIn);
            }
        }, {
            key: "_endGameAni",
            value: function _endGameAni() {
                this._raduis = 1e3;
                Laya.Tween.clearAll(this._root.MskBox);
                Laya.Tween.to(this._root.MskBox, {
                    update: new Laya.Handler(this, this._drawPieOut)
                }, 2e3, Laya.Ease.linearOut);
            }
        }, {
            key: "_drawPieIn",
            value: function _drawPieIn() {
                if (this._raduis >= 1e3) {
                    Laya.Tween.clearAll(this._root.MskBox);
                    this._endGameAni();
                    return;
                }
                this._root.MskBox.graphics.clear();
                this._root.MskBox.graphics.drawCircle(this._root.width / 2, this._root.height / 2, this._raduis, "#000000");
                this._raduis += 20;
            }
        }, {
            key: "_drawPieOut",
            value: function _drawPieOut() {
                if (this._raduis <= 0) {
                    Laya.Tween.clearAll(this._root.MskBox);
                    this._root.MskBox.visible = false;
                    return;
                }
                this._root.MskBox.graphics.clear();
                this._root.MskBox.graphics.drawCircle(this._root.width / 2, this._root.height / 2, this._raduis, "#000000");
                this._raduis -= 20;
            }
        }, {
            key: "initHomeView",
            value: function initHomeView() {
                var _this64 = this;
                this._createGameView();
                this._createJoyController();
                this._createHomeView();
                Laya.stage.on(EventData.IconCallBack, this, function () {
                    _this64.openExportView(ExportPage.NewMoreGameView, true);
                });
            }
        }, {
            key: "_createHomeView",
            value: function _createHomeView() {
                if (!this._homeViewController) {
                    var homeView = new ui.GameUI.HomeViewUI();
                    this._root.addChild(homeView);
                    this._homeViewController = homeView.addComponent(HomeViewController);
                    this._homeViewController.init(this);
                } else {
                    this._homeViewController.root.visible = true;
                }
            }
        }, {
            key: "_hideHomeView",
            value: function _hideHomeView() {
                this._homeViewController.root.visible = false;
            }
        }, {
            key: "openGameSuccessDialog",
            value: function openGameSuccessDialog(coin) {
                var dialog = new ui.GameUI.GameSuccessUI();
                var controller = dialog.addComponent(GameSuccessController);
                controller.init(this, coin);
                dialog.popup(true, true);
            }
        }, {
            key: "openLevelUpDialog",
            value: function openLevelUpDialog() {
                var dialog = new ui.GameUI.LevelUpDialogUI();
                var controller = dialog.addComponent(LevelUpDialogController);
                controller.init(this);
                dialog.popup(true, true);
            }
        }, {
            key: "openExportUI",
            value: function openExportUI() {
                var dialog = new ui.GameUI.ExportUIUI();
                var controller = dialog.addComponent(ExportUIController);
                controller.init(this);
                dialog.popup(true, true);
            }
        }, {
            key: "openPrizeLevelDialog",
            value: function openPrizeLevelDialog() {
                var dialog = new ui.GameUI.PrizeDialogUI();
                var controller = dialog.addComponent(PrizeLevelDialog);
                controller.init(this);
                dialog.popup(true, true);
            }
        }, {
            key: "openExportView",
            value: function openExportView(pageType) {
                var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                switch (pageType) {
                    case ExportPage.OldUsersView:
                        this._openOldUserDialog(ExportPageType.OldUsersPage);
                        break;

                    case ExportPage.NewMoreGameView:
                        this._openNewMoreGame(ExportPageType.NewMoreGameView, status);
                        break;

                    case ExportPage.OldMoreGameView:
                        this._openOldMoreGame(ExportPageType.OldMoreGameTopView);
                        break;

                    case ExportPage.ReturnPageView:
                        this._openReturnPage(ExportPageType.ReturnPageTop, status);
                        break;

                    case ExportPage.MysticalBoxView:
                        this._openMysticBox(pageType);
                        break;
                }
            }
        }, {
            key: "_openOldUserDialog",
            value: function _openOldUserDialog(pageType) {
                if (this._exportView[pageType] == null) {
                    this._exportView[pageType] = new ui.Export.OldUserDialogUI();
                    var controller = this._exportView[pageType].addComponent(OldUserController);
                    controller.init(this, pageType);
                    controller.errBanner();
                } else {
                    var _controller = this._exportView[pageType].getComponent(OldUserController);
                    _controller.errBanner();
                }
                this._exportView[pageType].popup(false, true);
            }
        }, {
            key: "_openNewMoreGame",
            value: function _openNewMoreGame(pageType, status) {
                var controller;
                if (this._exportView[pageType] == null) {
                    this._exportView[pageType] = new ui.Export.NewMoreGameViewUI();
                    controller = this._exportView[pageType].addComponent(NewMoreGameController);
                    controller.init(this, pageType);
                } else {
                    controller = this._exportView[pageType].getComponent(NewMoreGameController);
                }
                controller.setStatus(status);
                controller.errBanner();
                this._exportView[pageType].popup(false, true);
            }
        }, {
            key: "_openOldMoreGame",
            value: function _openOldMoreGame(pageType) {
                if (this._exportView[pageType] == null) {
                    this._exportView[pageType] = new ui.Export.OldMoreGameViewUI();
                    var controller = this._exportView[pageType].addComponent(OldMoreGameController);
                    controller.init(this);
                    controller.errBanner();
                } else {
                    var _controller2 = this._exportView[pageType].getComponent(OldMoreGameController);
                    _controller2.errBanner();
                }
                this._exportView[pageType].popup(false, true);
            }
        }, {
            key: "_openReturnPage",
            value: function _openReturnPage(pageType, status) {
                var controller;
                if (this._exportView[pageType] == null) {
                    this._exportView[pageType] = new ui.Export.ExitAdDialogUI();
                    controller = this._exportView[pageType].addComponent(ReturnPageController);
                    controller.init(this);
                } else {
                    controller = this._exportView[pageType].getComponent(ReturnPageController);
                }
                controller.setStatus(status);
                controller.errBanner();
                this._exportView[pageType].popup(false, true);
            }
        }, {
            key: "_openMysticBox",
            value: function _openMysticBox(pageType) {
                if (this._exportView[pageType]) this._exportView[pageType] = null;
                this._exportView[pageType] = new ui.Export.MysticalDialogUI();
                var controller = this._exportView[pageType].addComponent(MysticalDialogController);
                controller.init(this);
                this._exportView[pageType].popup(false, true);
            }
        }, {
            key: "controllerPromise",
            get: function get() {
                return this._controllerPromise;
            }
        }, {
            key: "gameSceneController",
            get: function get() {
                return this._gameSceneController;
            }
        }, {
            key: "gameViewController",
            get: function get() {
                return this._gameViewController;
            }
        }, {
            key: "joyController",
            get: function get() {
                return this._joyController;
            }
        }, {
            key: "prizeLevelController",
            get: function get() {
                return this._prizeLevelController;
            }
        }]);
        return GameMainController;
    }(Laya.Script);
    var CameraController = /* */ function (_Laya$Script3D6) {
        (0, _inherits2.default)(CameraController, _Laya$Script3D6);
        var _super40 = _createSuper(CameraController);
        function CameraController() {
            var _this65;
            (0, _classCallCheck2.default)(this, CameraController);
            _this65 = _super40.apply(this, arguments);
            _this65._shakeRadio = .1;
            _this65._shakeCount = 0;
            return _this65;
        }
        (0, _createClass2.default)(CameraController, [{
            key: "init",
            value: function init(gameSceneController) {
                this._gameSceneController = gameSceneController;
            }
        }, {
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
                this._startPos = this._root.transform.position.clone();
                this._defaultRotation = this._root.transform.rotation.clone();
                this._basePos = new Laya.Vector3();
                this._animator = this._root.getComponent(Laya.Animator);
            }
        }, {
            key: "playCameraAni",
            value: function playCameraAni(ani) {
                this._animator.speed = 1;
                var layer = this._animator.getControllerLayer(0);
                var aniName = layer.defaultState.name;
                this._animator.crossFade(aniName, 0, 0, 0);
            }
        }, {
            key: "resetPos",
            value: function resetPos() {
                this._root.transform.position = this._startPos.clone();
                this._root.transform.rotation = this._defaultRotation.clone();
            }
        }]);
        return CameraController;
    }(Laya.Script3D);
    var MoveType$1;
    (function (MoveType) {
        MoveType[MoveType["MoveUp"] = 0] = "MoveUp";
        MoveType[MoveType["Move"] = 1] = "Move";
        MoveType[MoveType["Eat"] = 2] = "Eat";
        MoveType[MoveType["MoveBack"] = 3] = "MoveBack";
        MoveType[MoveType["MoveDwon"] = 4] = "MoveDwon";
    })(MoveType$1 || (MoveType$1 = {}));
    var AntController = /* */ function (_Laya$Script3D7) {
        (0, _inherits2.default)(AntController, _Laya$Script3D7);
        var _super41 = _createSuper(AntController);
        function AntController() {
            var _this66;
            (0, _classCallCheck2.default)(this, AntController);
            _this66 = _super41.apply(this, arguments);
            _this66._recovered = false;
            _this66._moveSpeedScale = .8;
            _this66._eatFoodTimer = 3e3;
            _this66._foodCount = 1;
            _this66._isAntKing = false;
            _this66._lifeTiemr = 12e4;
            _this66._isDead = false;
            _this66._isTemp = false;
            _this66._isStop = false;
            return _this66;
        }
        (0, _createClass2.default)(AntController, [{
            key: "init",
            value: function init(gameSceneController) {
                this._root = this.owner;
                this._gameSceneController = gameSceneController;
                this._foodView = this._root.getChildByName("food");
                this._foodView.transform.localPositionY = .15;
                this._animator = this._root.getComponent(Laya.Animator);
                Laya.stage.on(EventData.UpgradeMoveSpeed, this, this._refreshAntStat);
            }
        }, {
            key: "setAntKing",
            value: function setAntKing(stat) {
                this._isAntKing = stat;
                this._isDead = false;
            }
        }, {
            key: "setTempStatus",
            value: function setTempStatus(stat) {
                this._isTemp = stat;
            }
        }, {
            key: "resetAntAni",
            value: function resetAntAni() {
                this._playAniStart(AntAniName.RESET);
            }
        }, {
            key: "startAction",
            value: function startAction(stat) {
                if (this._isStop) return;
                if (stat == null) {
                    this._moveStat = MoveType$1.MoveUp;
                } else {
                    this._moveStat = stat;
                }
                switch (this._moveStat) {
                    case MoveType$1.MoveUp:
                        this._playAniStart(AntAniName.UP);
                        break;

                    case MoveType$1.Move:
                        if (this._gameSceneController && this._gameSceneController.foodController && this._gameSceneController.foodController.isEmpty()) {
                            this.startAction(MoveType$1.MoveBack);
                        } else {
                            this._moveHandle();
                        }
                        break;

                    case MoveType$1.Eat:
                        this._playAniStart(AntAniName.EAT);
                        this._foodScaleTween();
                        break;

                    case MoveType$1.MoveBack:
                        this._radiusX = 0;
                        this._radiusZ = 0;
                        this._antMoveStart(Utils.ZERO.clone());
                        break;

                    case MoveType$1.MoveDwon:
                        break;
                }
            }
        }, {
            key: "_moveHandle",
            value: function _moveHandle() {
                var _this67 = this;
                if (this._isAntKing) {
                    this._targetFood = new Laya.Sprite3D();
                    var foodArr = this._gameSceneController.foodController.popBigFoodPoint();
                    this._foodCount = foodArr.length;
                    foodArr[0].parent.addChild(this._targetFood);
                    foodArr.forEach(function (ele) {
                        _this67._targetFood.addChild(ele);
                    });
                    this._radiusX = .2;
                    this._radiusZ = .1;
                    this._antMoveStart(foodArr[0].transform.position);
                } else {
                    this._targetFood = this._gameSceneController.foodController.popFoodPoint();
                    this._radiusX = .2;
                    this._radiusZ = .1;
                    this._foodCount = 1;
                    this._antMoveStart(this._targetFood.transform.position);
                }
            }
        }, {
            key: "_antMoveStart",
            value: function _antMoveStart(targetPos) {
                var _this68 = this;
                Laya.Tween.clearAll(this._walkTarget);
                var time = Laya.Vector3.distance(this.fromPos, targetPos) / (DataManager.Instance.moveSpeed * this._moveSpeedScale);
                time *= 1e3;
                var t = this._root.transform;
                var pos = t.localPosition;
                this._walkTarget = {
                    x: pos.x,
                    y: pos.y,
                    z: pos.z
                };
                var up = new Laya.Vector3();
                t.getUp(up);
                t.lookAt(targetPos, up);
                this._playAniStart(AntAniName.WALK);
                Laya.Tween.to(this._walkTarget, {
                    x: targetPos.x - this._radiusX,
                    y: targetPos.y,
                    z: targetPos.z + this._radiusZ
                }, time, null, Laya.Handler.create(this, this._antMoveEnd)).update = LHandler.createloop(this, function () {
                    t.localPositionX = _this68._walkTarget.x;
                    t.localPositionY = 0;
                    t.localPositionZ = _this68._walkTarget.z;
                });
            }
        }, {
            key: "_antMoveEnd",
            value: function _antMoveEnd() {
                switch (this._moveStat) {
                    case MoveType$1.Move:
                        this.startAction(MoveType$1.Eat);
                        break;

                    case MoveType$1.MoveBack:
                        this._playAniStart(AntAniName.DOWN);
                        this._foodView.removeChildren();
                        this.playCoinEffect(EffectName.FxGetMilu);
                        break;
                }
            }
        }, {
            key: "_playAniStart",
            value: function _playAniStart(name) {
                if (!this._animator.getControllerLayer() || !this._animator.getControllerLayer().getAnimatorState(name)) {
                    return;
                }
                var duration = this._animator.getControllerLayer().getAnimatorState(name).clip.duration();
                this._animator.crossFade(name, 0, 0, 0);
                Laya.timer.once(duration * 1e3, this, this._playAniEnd, [name]);
            }
        }, {
            key: "_playAniEnd",
            value: function _playAniEnd(name) {
                switch (name) {
                    case AntAniName.UP:
                        this.startAction(MoveType$1.Move);
                        break;

                    case AntAniName.DOWN:
                        this._resetAntStat();
                        if (!this._gameSceneController.foodController.isEmpty()) {
                            if (this._isAntKing && this._isDead) {
                                this._gameSceneController.recoverAnt(this._root);
                            } else if (this._isTemp) {
                                this._gameSceneController.recoverAnt(this._root);
                                this._isTemp = false;
                            } else {
                                this.startAction();
                            }
                        } else {
                            this._isTemp = false;
                            this._gameSceneController.recoverAnt(this._root);
                        }
                        this._gameSceneController.updateLevelPrpgress(this._foodCount);
                        break;
                }
            }
        }, {
            key: "_refreshAntStat",
            value: function _refreshAntStat() {
                if (this._recovered || this._isStop) return;
                switch (this._moveStat) {
                    case MoveType$1.MoveBack:
                        if (this._targetFood !== null) {
                            this._antMoveStart(Utils.ZERO.clone());
                        }
                        break;

                    case MoveType$1.Move:
                        this._antMoveStart(this._targetFood.transform.position);
                        break;
                }
                this._playSpeedUpEffect();
            }
        }, {
            key: "_playSpeedUpEffect",
            value: function _playSpeedUpEffect() {
                var _this69 = this;
                if (this._speedEffect != null) return;
                this._speedEffect = this._gameSceneController.effectPool.getEffectObj(EffectName.FxSpeed);
                this._root.addChild(this._speedEffect);
                this._speedEffect.active = true;
                Laya.timer.once(1e3, this, function () {
                    var ctrl = _this69._speedEffect.getComponent(EffectController);
                    ctrl.recover();
                    _this69._speedEffect = null;
                });
            }
        }, {
            key: "playAntEffect",
            value: function playAntEffect(effectName) {
                var effect = this._gameSceneController.effectPool.getEffectObj(effectName);
                this._root.addChild(effect);
                effect.active = true;
                Laya.timer.once(1e3, this, function () {
                    var ctrl = effect.getComponent(EffectController);
                    ctrl.recover();
                });
            }
        }, {
            key: "playCoinEffect",
            value: function playCoinEffect(effectName) {
                var effect = this._gameSceneController.effectPool.getEffectObj(effectName);
                this._root.addChild(effect);
                effect.transform.position.y = .3;
                effect.active = true;
                AudioManager.Instance.playSound("audio_getcoin.mp3");
                Laya.timer.once(1e3, this, function () {
                    var ctrl = effect.getComponent(EffectController);
                    ctrl.recover();
                });
            }
        }, {
            key: "_foodScaleTween",
            value: function _foodScaleTween() {
                var _this70 = this;
                if (this._isAntKing) {
                    var _loop3 = function _loop3(i) {
                        var foodPoint = _this70._targetFood.getChildAt(i);
                        Laya.Tween.to(foodPoint.transform, {
                            localScaleX: 0,
                            localScaleY: 0,
                            localScaleZ: 0
                        }, _this70._eatFoodTimer, null, Laya.Handler.create(_this70, function () {
                            if (_this70._isStop) {
                                foodPoint.transform.localScale = new Laya.Vector3(1, 1, 1);
                            } else {
                                _this70._eatFoodEndHandle(foodPoint);
                            }
                        }));
                    };
                    for (var i = 0; i < this._targetFood.numChildren; i++) {
                        _loop3(i);
                    }
                } else {
                    Laya.Tween.to(this._targetFood.transform, {
                        localScaleX: 0,
                        localScaleY: 0,
                        localScaleZ: 0
                    }, this._eatFoodTimer, null, Laya.Handler.create(this, function () {
                        if (_this70._isStop) {
                            _this70._targetFood.transform.localScale = new Laya.Vector3(1, 1, 1);
                        } else {
                            _this70._eatFoodEndHandle(_this70._targetFood);
                        }
                    }));
                }
            }
        }, {
            key: "_eatFoodEndHandle",
            value: function _eatFoodEndHandle(food) {
                this._foodView.addChild(food);
                food.transform.localScale = new Laya.Vector3(.8, .8, .8);
                food.transform.position = Utils.ZERO.clone();
                food.transform.localPosition = Utils.ZERO.clone();
                if (this._targetFood.numChildren <= 0) {
                    this.startAction(MoveType$1.MoveBack);
                }
            }
        }, {
            key: "_resetAntStat",
            value: function _resetAntStat() {
                this._foodView.removeChildren();
                this._root.transform.position = new Laya.Vector3();
                this._root.transform.localPosition = new Laya.Vector3();
                this._root.transform.rotation = new Laya.Quaternion();
            }
        }, {
            key: "stop",
            value: function stop() {
                this._isStop = true;
                this._animator.speed = 0;
                Laya.Tween.clearAll(this._walkTarget);
            }
        }, {
            key: "resume",
            value: function resume() {
                this._isStop = false;
                this._animator.speed = 1;
                switch (this._moveStat) {
                    case MoveType$1.MoveBack:
                        if (this._targetFood !== null) {
                            this._antMoveStart(Utils.ZERO.clone());
                        }
                        break;

                    case MoveType$1.Move:
                        this._antMoveStart(this._targetFood.transform.position);
                        break;

                    case MoveType$1.Eat:
                        this._foodScaleTween();
                        break;

                    default:
                        this.startAction(this._moveStat);
                }
            }
        }, {
            key: "onUpdate",
            value: function onUpdate() {
                if (this._isStop) return;
                if (this._isAntKing && !this._isDead) {
                    this._lifeTiemr -= Laya.timer.delta;
                    if (this._lifeTiemr <= 0) {
                        this._isDead = true;
                    }
                }
            }
        }, {
            key: "recovered",
            get: function get() {
                return this._recovered;
            },
            set: function set(value) {
                this._recovered = value;
            }
        }, {
            key: "fromPos",
            get: function get() {
                return this._root.transform.position;
            },
            set: function set(value) {
                this._root.transform.position = value;
            }
        }]);
        return AntController;
    }(Laya.Script3D);
    var AntPool = /* */ function () {
        function AntPool() {
            (0, _classCallCheck2.default)(this, AntPool);
            this._antPool = {};
            this.getTimer = 0;
        }
        (0, _createClass2.default)(AntPool, [{
            key: "init",
            value: function init(controller) {
                this._controller = controller;
            }
        }, {
            key: "prewarmAllAnt",
            value: function prewarmAllAnt() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee27() {
                    var _this71 = this;
                    return _regenerator.default.wrap(function _callee27$(_context27) {
                        while (1) {
                            switch (_context27.prev = _context27.next) {
                                case 0:
                                    return _context27.abrupt("return", new Promise(function (resolve, reject) {
                                        for (var skinID in _this71._antPool) {
                                            var list = _this71._antPool[skinID];
                                            for (var i = 0; i < list.length; i++) {
                                                list[i].active = true;
                                            }
                                        }
                                        Laya.timer.once(3e3, _this71, function () {
                                            for (var _skinID in _this71._antPool) {
                                                var _list = _this71._antPool[_skinID];
                                                for (var _i = 0; _i < _list.length; _i++) {
                                                    _list[_i].active = false;
                                                }
                                            }
                                            resolve();
                                        });
                                    }));

                                case 1:
                                case "end":
                                    return _context27.stop();
                            }
                        }
                    }, _callee27);
                }));
            }
        }, {
            key: "preloadAnt",
            value: function preloadAnt(list) {
                var _this72 = this;
                list.forEach(function (item) {
                    for (var i = 0; i < item.count; i++) {
                        var ant = _this72._createAntObj(item.skinID);
                        _this72.recoverAnt(ant, item.skinID);
                    }
                });
            }
        }, {
            key: "getAnt",
            value: function getAnt(skinID) {
                var antDict = this._antPool[skinID];
                this.getTimer++;
                if (antDict) {
                    if (antDict && antDict.length > 0) {
                        var obj = antDict.shift();
                        var ctrl = obj.getComponent(AntController);
                        ctrl.recovered = false;
                        return obj;
                    }
                }
                return this._createAntObj(skinID);
            }
        }, {
            key: "recoverAnt",
            value: function recoverAnt(ant, skinID) {
                var ctrl = ant.getComponent(AntController);
                if (ctrl.recovered) return;
                ctrl.recovered = true;
                if (!this._antPool[skinID]) {
                    this._antPool[skinID] = [];
                }
                ant.active = false;
                this._controller.poolRoot.addChild(ant);
                this._antPool[skinID].push(ant);
            }
        }, {
            key: "_createAntObj",
            value: function _createAntObj(skinID) {
                var prefab = PrefabManager.Instance.getAntPrefab(skinID);
                if (prefab) {
                    var ant = Laya.Sprite3D.instantiate(prefab, this._controller.poolRoot, false);
                    var ctrl = ant.addComponent(AntController);
                    ctrl.init(this._controller);
                    ctrl.recovered = false;
                    ant.active = false;
                    return ant;
                }
                return null;
            }
        }]);
        return AntPool;
    }();
    var EffectPool = /* */ function () {
        function EffectPool() {
            (0, _classCallCheck2.default)(this, EffectPool);
            this._effectPool = {};
        }
        (0, _createClass2.default)(EffectPool, [{
            key: "prewarmAllEffect",
            value: function prewarmAllEffect() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee28() {
                    var _this73 = this;
                    return _regenerator.default.wrap(function _callee28$(_context28) {
                        while (1) {
                            switch (_context28.prev = _context28.next) {
                                case 0:
                                    return _context28.abrupt("return", new Promise(function (resolve, reject) {
                                        for (var key in _this73._effectPool) {
                                            var list = _this73._effectPool[key];
                                            for (var i = 0; i < list.length; i++) {
                                                list[i].active = true;
                                            }
                                        }
                                        Laya.timer.once(1e3, _this73, function () {
                                            for (var _key in _this73._effectPool) {
                                                var _list2 = _this73._effectPool[_key];
                                                for (var _i2 = 0; _i2 < _list2.length; _i2++) {
                                                    _list2[_i2].active = false;
                                                }
                                            }
                                            resolve();
                                        });
                                    }));

                                case 1:
                                case "end":
                                    return _context28.stop();
                            }
                        }
                    }, _callee28);
                }));
            }
        }, {
            key: "init",
            value: function init(controller) {
                this._controller = controller;
            }
        }, {
            key: "_createEffectObj",
            value: function _createEffectObj(prefabKey) {
                var prefab = PrefabManager.Instance.getEffectPrefab(prefabKey);
                if (prefab) {
                    var effect = Laya.Sprite3D.instantiate(prefab, this._controller.poolRoot, false);
                    var ctrl = effect.addComponent(EffectController);
                    ctrl.init(this._controller, prefabKey);
                    ctrl.recovered = false;
                    return effect;
                }
                return null;
            }
        }, {
            key: "preloadEffectObj",
            value: function preloadEffectObj(list) {
                var _this74 = this;
                list.forEach(function (element) {
                    for (var i = 0; i < element.count; i++) {
                        var item = _this74._createEffectObj(element.prefabKey);
                        _this74.recoverEffectObj(item, element.prefabKey);
                    }
                });
            }
        }, {
            key: "getEffectObj",
            value: function getEffectObj(prefabKey) {
                var battleItemList = this._effectPool[prefabKey];
                if (battleItemList && battleItemList.length > 0) {
                    var obj = battleItemList.shift();
                    var ctrl = obj.getComponent(EffectController);
                    ctrl.recovered = false;
                    return obj;
                }
                return this._createEffectObj(prefabKey);
            }
        }, {
            key: "recoverEffectObj",
            value: function recoverEffectObj(item, prefabKey) {
                var ctrl = item.getComponent(EffectController);
                if (ctrl.recovered) return;
                ctrl.recovered = true;
                if (!this._effectPool[prefabKey]) {
                    this._effectPool[prefabKey] = [];
                }
                item.active = false;
                this._controller.poolRoot.addChild(item);
                this._effectPool[prefabKey].push(item);
            }
        }]);
        return EffectPool;
    }();
    var GameSceneController = /* */ function (_Laya$Script3D8) {
        (0, _inherits2.default)(GameSceneController, _Laya$Script3D8);
        var _super42 = _createSuper(GameSceneController);
        function GameSceneController() {
            var _this75;
            (0, _classCallCheck2.default)(this, GameSceneController);
            _this75 = _super42.apply(this, arguments);
            _this75._currentScene = SecenName.DefaultScene;
            _this75._currentAntName = AntName.Ant_black;
            _this75._currentAnt = [];
            _this75._currentFood = FoodName.Doughnut;
            _this75._currentLevelCoin = 0;
            _this75._level = 0;
            _this75._levelArr = [FoodName.Binggan, FoodName.Weihuaibinggan, FoodName.Qiaokeli, FoodName.Ningmeng, FoodName.Bread2, FoodName.Doughnut, FoodName.Bread, FoodName.Cangying, FoodName.Wenzi, FoodName.Mazha];
            _this75._count = 0;
            _this75._isStop = false;
            return _this75;
        }
        (0, _createClass2.default)(GameSceneController, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
                this._camera = this._root.getChildByName("Main Camera");
                this._sceneView = this._root.getChildByName("SceneView");
                this._foodView = this._root.getChildByName("FoodView");
                this._antView = this._root.getChildByName("AntView");
                this._bornPoint = this._root.getChildByName("BornPoint");
                this._poolRoot = this._root.getChildByName("AntPool");
                this._prizeAntStartPoint = this._root.getChildByName("PrizeAntStartPoint");
                this._prizeAntEndPoint = this._root.getChildByName("PrizeAntEndPoint");
                this._antPool = new AntPool();
                this._antPool.init(this);
                this._effectPool = new EffectPool();
                this._effectPool.init(this);
                this._preloadResource();
                this._initPrizeAnt();
                Laya.stage.on(EventData.UpdateAntCount, this, this._updateAnt);
            }
        }, {
            key: "init",
            value: function init(gameMainController) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee29() {
                    return _regenerator.default.wrap(function _callee29$(_context29) {
                        while (1) {
                            switch (_context29.prev = _context29.next) {
                                case 0:
                                    this._gameMainController = gameMainController;
                                    this._cameraController = this._camera.addComponent(CameraController);
                                    if (!this._effectPrewardAwaiter) {
                                        _context29.next = 6;
                                        break;
                                    }
                                    _context29.next = 5;
                                    return this._effectPrewardAwaiter;

                                case 5:
                                    this._effectPrewardAwaiter = null;

                                case 6:
                                    this._changeScene();
                                    this.initScene();

                                case 8:
                                case "end":
                                    return _context29.stop();
                            }
                        }
                    }, _callee29, this);
                }));
            }
        }, {
            key: "startGame",
            value: function startGame() {
                var _this76 = this;
                this._gameMainController.gameViewController.isGameOver = false;
                this._count = 0;
                this._currentAnt.forEach(function (ant, index) {
                    return __awaiter(_this76, void 0, void 0, /* */ _regenerator.default.mark(function _callee30() {
                        return _regenerator.default.wrap(function _callee30$(_context30) {
                            while (1) {
                                switch (_context30.prev = _context30.next) {
                                    case 0:
                                        _context30.next = 2;
                                        return Utils.delayHandle(500 * index, function () {
                                            var ctrl = ant.getComponent(AntController);
                                            ctrl.setAntKing(false);
                                            ctrl.startAction();
                                            ant.active = true;
                                        });

                                    case 2:
                                    case "end":
                                        return _context30.stop();
                                }
                            }
                        }, _callee30);
                    }));
                });
            }
        }, {
            key: "_preloadResource",
            value: function _preloadResource() {
                var preloadInfo = [{
                    skinID: AntName.Ant_black,
                    count: 50
                }];
                this._antPool.preloadAnt(preloadInfo);
                var preloadEffect = [{
                    prefabKey: EffectName.FxBorn,
                    count: 5
                }, {
                    prefabKey: EffectName.FxSpeed,
                    count: 50
                }, {
                    prefabKey: EffectName.FxGetMilu,
                    count: 20
                }];
                this._effectPool.preloadEffectObj(preloadEffect);
            }
        }, {
            key: "prewarmEffect",
            value: function prewarmEffect() {
                this._effectPrewardAwaiter = this._effectPool.prewarmAllEffect();
            }
        }, {
            key: "initScene",
            value: function initScene() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee31() {
                    return _regenerator.default.wrap(function _callee31$(_context31) {
                        while (1) {
                            switch (_context31.prev = _context31.next) {
                                case 0:
                                    this._clearScenePrefab();
                                    this._createAnt();
                                    _context31.next = 4;
                                    return this._setFoodPrefab();

                                case 4:
                                case "end":
                                    return _context31.stop();
                            }
                        }
                    }, _callee31, this);
                }));
            }
        }, {
            key: "_clearScenePrefab",
            value: function _clearScenePrefab() {
                this._antView.removeChildren();
                this._foodView.removeChildren();
                this._level = DataManager.Instance.level % this._levelArr.length;
                this._currentFood = this._levelArr[this._level];
                this._currentLevelCoin = 0;
            }
        }, {
            key: "_changeScene",
            value: function _changeScene() {
                this._sceneView.removeChildren();
                var scene = PrefabManager.Instance.getScenePrefab(this._currentScene);
                scene = Laya.Sprite3D.instantiate(scene, this._sceneView, false, this._sceneView.transform.position);
                scene.active = true;
            }
        }, {
            key: "_createAnt",
            value: function _createAnt() {
                for (var i = 0; i < DataManager.Instance.antCount; i++) {
                    var gameObject = this._antPool.getAnt(this._currentAntName);
                    this._antView.addChild(gameObject);
                    gameObject.transform.localPosition = Utils.ZERO.clone();
                    this._currentAnt.push(gameObject);
                }
            }
        }, {
            key: "_setFoodPrefab",
            value: function _setFoodPrefab() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee32() {
                    var food;
                    return _regenerator.default.wrap(function _callee32$(_context32) {
                        while (1) {
                            switch (_context32.prev = _context32.next) {
                                case 0:
                                    _context32.next = 2;
                                    return PrefabManager.Instance.getFoodPrefab(this._currentFood);

                                case 2:
                                    food = _context32.sent;
                                    this._food = Laya.Sprite3D.instantiate(food, this._foodView, false, this._foodView.transform.position);
                                    this._foodController = this._food.addComponent(FoodController);
                                    this._foodController.init(this);
                                    this._food.active = true;

                                case 7:
                                case "end":
                                    return _context32.stop();
                            }
                        }
                    }, _callee32, this);
                }));
            }
        }, {
            key: "_updateAnt",
            value: function _updateAnt(count) {
                var isTemp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee33() {
                    var _this77 = this;
                    var i;
                    return _regenerator.default.wrap(function _callee33$(_context33) {
                        while (1) {
                            switch (_context33.prev = _context33.next) {
                                case 0:
                                    i = 0;

                                case 1:
                                    if (!(i < count)) {
                                        _context33.next = 7;
                                        break;
                                    }
                                    _context33.next = 4;
                                    return Utils.delayHandle(Math.random() * 200 * i, function () {
                                        _this77._addAnt(isTemp);
                                    });

                                case 4:
                                    i++;
                                    _context33.next = 1;
                                    break;

                                case 7:
                                case "end":
                                    return _context33.stop();
                            }
                        }
                    }, _callee33);
                }));
            }
        }, {
            key: "_addAnt",
            value: function _addAnt() {
                var _this78 = this;
                var isTemp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var gameObject = this._antPool.getAnt(this._currentAntName);
                this._antView.addChild(gameObject);
                gameObject.transform.localPosition = Utils.getRangePos(this._bornPoint.transform.position);
                gameObject.transform.rotation = new Laya.Quaternion();
                this._currentAnt.push(gameObject);
                gameObject.active = true;
                var ctrl = gameObject.getComponent(AntController);
                ctrl.resetAntAni();
                Laya.timer.frameOnce(2, this, function () {
                    ctrl.setAntKing(false);
                    ctrl.setTempStatus(isTemp);
                    ctrl.startAction(MoveType$1.Move);
                    ctrl.playAntEffect(EffectName.FxBorn);
                    AudioManager.Instance.playSound("audio_count.mp3");
                    if (_this78._isStop) {
                        ctrl.stop();
                    }
                });
            }
        }, {
            key: "addAntKing",
            value: function addAntKing() {
                if (this._isStop) {
                    this._gameMainController.prizeLevelController.addAntKing();
                } else {
                    var gameObject = this._antPool.getAnt(AntName.Ant_King);
                    this._antView.addChild(gameObject);
                    this._currentAnt.push(gameObject);
                    gameObject.transform.localPosition = Utils.getRangePos(this._bornPoint.transform.position);
                    var ctrl = gameObject.getComponent(AntController);
                    ctrl.setAntKing(true);
                    ctrl.startAction(MoveType$1.Move);
                    gameObject.active = true;
                    ctrl.playAntEffect(EffectName.FxBorn);
                    AudioManager.Instance.playSound("audio_count.mp3");
                }
            }
        }, {
            key: "_initPrizeAnt",
            value: function _initPrizeAnt() {
                var prefab = PrefabManager.Instance.getAntPrefab(AntName.Ant_King);
                this._prizeAnt = Laya.Sprite3D.instantiate(prefab, this._root, false);
                this._prizeAnt.active = false;
                this._prizeAntController = this._prizeAnt.addComponent(CoinAntController);
                this._prizeAntController.init(this);
            }
        }, {
            key: "recoverAnt",
            value: function recoverAnt(root) {
                this._antPool.recoverAnt(root, this.currentAntName);
                var index = this._currentAnt.findIndex(function (ele) {
                    return ele.id === root.id;
                });
                this._currentAnt.splice(index, 1);
            }
        }, {
            key: "updateLevelPrpgress",
            value: function updateLevelPrpgress(count) {
                if (count == null) count = 0;
                this._count += count;
                Laya.stage.event(EventData.UpdateLevelProgress, [this._count, this._foodController.maxFoodSize]);
                var coin = DataManager.Instance.coinRate * count * DataManager.Instance.doublieCoin;
                DataManager.Instance.coin += coin;
                DataManager.Instance.userExp += count;
                this._currentLevelCoin += coin;
                if (this._currentAnt.length === 0) {
                    DataManager.Instance.clearAntKing();
                    DataManager.Instance.level++;
                    AudioManager.Instance.playSound("audio_win.mp3");
                    this._gameMainController.openGameSuccessDialog(this._currentLevelCoin);
                    this._gameMainController.gameViewController.isGameOver = true;
                    this._prizeAntController.hidePrizeAnt();
                }
                StorageManager.Instance.syncData();
            }
        }, {
            key: "stopGame",
            value: function stopGame() {
                this._currentAnt.forEach(function (item) {
                    var ctrl = item.getComponent(AntController);
                    ctrl.stop();
                });
                this._isStop = true;
            }
        }, {
            key: "resumeGame",
            value: function resumeGame() {
                this._currentAnt.forEach(function (item) {
                    var ctrl = item.getComponent(AntController);
                    ctrl.resume();
                });
                this._isStop = false;
            }
        }, {
            key: "prizeAntController",
            get: function get() {
                return this._prizeAntController;
            }
        }, {
            key: "prizeAntStartPoint",
            get: function get() {
                return this._prizeAntStartPoint;
            }
        }, {
            key: "prizeAntEndPoint",
            get: function get() {
                return this._prizeAntEndPoint;
            }
        }, {
            key: "root",
            get: function get() {
                return this._root;
            }
        }, {
            key: "camera",
            get: function get() {
                return this._camera;
            }
        }, {
            key: "cameraController",
            get: function get() {
                return this._cameraController;
            }
        }, {
            key: "gameMainController",
            get: function get() {
                return this._gameMainController;
            }
        }, {
            key: "poolRoot",
            get: function get() {
                return this._poolRoot;
            }
        }, {
            key: "foodController",
            get: function get() {
                return this._foodController;
            }
        }, {
            key: "antPool",
            get: function get() {
                return this._antPool;
            }
        }, {
            key: "effectPool",
            get: function get() {
                return this._effectPool;
            }
        }, {
            key: "currentAntName",
            get: function get() {
                return this._currentAntName;
            }
        }]);
        return GameSceneController;
    }(Laya.Script3D);
    var LoadingViewController = /* */ function (_Laya$Script16) {
        (0, _inherits2.default)(LoadingViewController, _Laya$Script16);
        var _super43 = _createSuper(LoadingViewController);
        function LoadingViewController() {
            var _this79;
            (0, _classCallCheck2.default)(this, LoadingViewController);
            _this79 = _super43.apply(this, arguments);
            _this79._loadFinish = false;
            _this79._progress = 0;
            _this79._maskLength = 594;
            return _this79;
        }
        (0, _createClass2.default)(LoadingViewController, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
            }
        }, {
            key: "_progressIncrease",
            value: function _progressIncrease() {
                if (this._progress < .9) {
                    this._progress = Math.min(.9, this._progress + .015);
                } else {
                    this._progress = Math.min(.99, this._progress + .001);
                }
                var intValue = Math.ceil(this._maskLength * this._progress);
                this._root.Progress.width = intValue;
            }
        }, {
            key: "init",
            value: function init(sdkAwaiter, resourceAwaiter) {
                this._sdkAwaiter = sdkAwaiter;
                this._resourceAwaiter = resourceAwaiter;
            }
        }, {
            key: "updateProgress",
            value: function updateProgress(ticker) {
                if (!this._loadFinish) {
                    this._progress = 0;
                    this._loadFinish = true;
                    Laya.timer.frameLoop(2, this, this._progressIncrease);
                }
            }
        }, {
            key: "removeProgress",
            value: function removeProgress(gameMainController) {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee34() {
                    var _this80 = this;
                    return _regenerator.default.wrap(function _callee34$(_context34) {
                        while (1) {
                            switch (_context34.prev = _context34.next) {
                                case 0:
                                    this._loadFinish = true;
                                    _context34.next = 3;
                                    return this._sdkAwaiter;

                                case 3:
                                    _context34.next = 5;
                                    return this._resourceAwaiter;

                                case 5:
                                    if (!gameMainController.controllerPromise) {
                                        _context34.next = 8;
                                        break;
                                    }
                                    _context34.next = 8;
                                    return gameMainController.controllerPromise;

                                case 8:
                                    console.log("loading success");
                                    _context34.next = 11;
                                    return gameMainController.gameSceneController.init(gameMainController);

                                case 11:
                                    platform.getInstance().yadstartup("Idle-Ants", () => {
                                        window.WebAudioEngine.pause = Laya.LocalStorage.getJSON("Idle-Ants-music", window.WebAudioEngine.pause) || false;
                                        window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => {
                                            e.stopPropagation();
                                            platform.getInstance().navigate("GAME", "LOGO");
                                        });
                                        gameMainController.initHomeView();
                                        Laya.timer.clear(this, this._progressIncrease);
                                        Laya.Tween.to(this._root.Progress, {
                                            width: this._maskLength
                                        }, 800, null, Laya.Handler.create(this, function () {
                                            Laya.Tween.to(_this80._root, {
                                                alpha: 0
                                            }, 1e3, null, Laya.Handler.create(_this80, function () {
                                                _this80._root.active = false;
                                                _this80._root.destroy(true);
                                            }));
                                        }));
                                    })
                                case 14:
                                case "end":
                                    return _context34.stop();
                            }
                        }
                    }, _callee34, this);
                }));
            }
        }]);
        return LoadingViewController;
    }(Laya.Script);
    var CoupletList = /* */ function (_Laya$Script17) {
        (0, _inherits2.default)(CoupletList, _Laya$Script17);
        var _super44 = _createSuper(CoupletList);
        function CoupletList() {
            (0, _classCallCheck2.default)(this, CoupletList);
            return _super44.apply(this, arguments);
        }
        (0, _createClass2.default)(CoupletList, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
                this._recommendListController = this._root.RecommendList.addComponent(RecommendList);
                this._recommendListController.init(ExportPageType.CoupletList);
            }
        }]);
        return CoupletList;
    }(Laya.Script);
    var HorizontalList = /* */ function (_Laya$Script18) {
        (0, _inherits2.default)(HorizontalList, _Laya$Script18);
        var _super45 = _createSuper(HorizontalList);
        function HorizontalList() {
            (0, _classCallCheck2.default)(this, HorizontalList);
            return _super45.apply(this, arguments);
        }
        (0, _createClass2.default)(HorizontalList, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
                this._recommendListController = this._root.RecommendList.addComponent(RecommendList);
                this._recommendListController.init(ExportPageType.HorizontalList);
            }
        }]);
        return HorizontalList;
    }(Laya.Script);
    var LeftDrawerController = /* */ function (_Laya$Script19) {
        (0, _inherits2.default)(LeftDrawerController, _Laya$Script19);
        var _super46 = _createSuper(LeftDrawerController);
        function LeftDrawerController() {
            (0, _classCallCheck2.default)(this, LeftDrawerController);
            return _super46.apply(this, arguments);
        }
        (0, _createClass2.default)(LeftDrawerController, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
                this._init();
            }
        }, {
            key: "_init",
            value: function _init() {
                this._root.CloseBtn.visible = false;
                this._root.OpenBtn.visible = true;
                this._root.OpenBtn.on(Laya.Event.CLICK, this, this._openView);
                this._root.CloseBtn.on(Laya.Event.CLICK, this, this._closeView);
                this._recommendListController = this._root.RecommendList.addComponent(RecommendList);
                this._recommendListController.init(ExportPageType.LeftDrawerView);
            }
        }, {
            key: "_openView",
            value: function _openView() {
                var _this81 = this;
                Laya.Tween.to(this._root.LeftDrawer, {
                    x: 0
                }, 600, Laya.Ease.linearIn, Laya.Handler.create(this, function () {
                    _this81._root.OpenBtn.visible = false;
                    _this81._root.CloseBtn.visible = true;
                }));
            }
        }, {
            key: "_closeView",
            value: function _closeView() {
                var _this82 = this;
                Laya.Tween.to(this._root.LeftDrawer, {
                    x: -531
                }, 600, Laya.Ease.linearIn, Laya.Handler.create(this, function () {
                    _this82._root.CloseBtn.visible = false;
                    _this82._root.OpenBtn.visible = true;
                }));
            }
        }]);
        return LeftDrawerController;
    }(Laya.Script);
    var EffrctButton = /* */ function (_Laya$Button) {
        (0, _inherits2.default)(EffrctButton, _Laya$Button);
        var _super47 = _createSuper(EffrctButton);
        function EffrctButton() {
            var _this83;
            (0, _classCallCheck2.default)(this, EffrctButton);
            _this83 = _super47.call(this);
            _this83._scale = .85;
            _this83._color = 16777215;
            _this83._buttonDown = false;
            _this83.on(Laya.Event.ADDED, (0, _assertThisInitialized2.default)(_this83), _this83.onEnter);
            _this83.on(Laya.Event.REMOVED, (0, _assertThisInitialized2.default)(_this83), _this83.onRemove);
            return _this83;
        }
        (0, _createClass2.default)(EffrctButton, [{
            key: "onEnter",
            value: function onEnter() {
                this.on(Laya.Event.MOUSE_DOWN, this, this._onTouchIt);
                this.on(Laya.Event.MOUSE_UP, this, this._onTouchEnd);
                this.on(Laya.Event.MOUSE_OUT, this, this._onTouchEnd);
                this.on(Laya.Event.MOUSE_OVER, this, this._onTouchEnd);
                this.on(Laya.Event.CLICK, this, this._onTouchEnd);
                if (this.pivotX == 0 && this.pivotY == 0) {
                    this.pivot(this.width / 2, this.height / 2);
                    this.pos(this.x + this.width / 2, this.y + this.height / 2);
                }
                this._originalScaleX = this.scaleX;
                this._originalScaleY = this.scaleY;
                var matrix = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                this._colorFilter = new Laya.ColorFilter();
                this._colorFilter.setByMatrix(matrix);
                if (this.filters) {
                    this.filters.push(this._colorFilter);
                } else {
                    this.filters = [this._colorFilter];
                }
            }
        }, {
            key: "onRemove",
            value: function onRemove() {
                this.off(Laya.Event.MOUSE_DOWN, this, this._onTouchIt);
                this.off(Laya.Event.MOUSE_UP, this, this._onTouchEnd);
                this.off(Laya.Event.MOUSE_OUT, this, this._onTouchEnd);
                this.off(Laya.Event.MOUSE_OVER, this, this._onTouchEnd);
                this.off(Laya.Event.CLICK, this, this._onTouchEnd);
                this.off(Laya.Event.ADDED, this, this.onEnter);
                this.off(Laya.Event.REMOVED, this, this.onRemove);
            }
        }, {
            key: "_onTouchIt",
            value: function _onTouchIt() {
                var _this84 = this;
                if (!this._buttonDown) {
                    if (!this._btnTween) {
                        this._btnTween = Laya.Tween.to(this, {
                            scaleX: this._originalScaleX * this._scale,
                            scaleY: this._originalScaleY * this._scale,
                            rotation: 0
                        }, 200, Laya.Ease.elasticOut);
                    } else {
                        this._btnTween.clear();
                        this._btnTween.to(this, {
                            scaleX: this._originalScaleX * this._scale,
                            scaleY: this._originalScaleY * this._scale,
                            rotation: 0
                        }, 200, Laya.Ease.elasticOut);
                    }
                    this._buttonDown = true;
                    Laya.timer.once(400, this, function () {
                        _this84.scaleX = _this84._originalScaleX;
                        _this84.scaleY = _this84._originalScaleY;
                    });
                }
            }
        }, {
            key: "_onTouchEnd",
            value: function _onTouchEnd() {
                if (this._buttonDown) {
                    if (!this._btnTween) {
                        this._btnTween = Laya.Tween.to(this, {
                            scaleX: this._originalScaleX,
                            scaleY: this._originalScaleY
                        }, 100, Laya.Ease.sineOut);
                    } else {
                        this._btnTween.clear();
                        this._btnTween.to(this, {
                            scaleX: this._originalScaleX,
                            scaleY: this._originalScaleY
                        }, 100, Laya.Ease.sineOut);
                    }
                    this._buttonDown = false;
                }
            }
        }, {
            key: "onBtnHide",
            value: function onBtnHide() {
                this.visible = false;
            }
        }, {
            key: "onBtnShow",
            value: function onBtnShow() {
                this.scaleX = 0;
                this.scaleY = 0;
                this.visible = true;
                Laya.Tween.to(this, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.elasticInOut);
            }
        }, {
            key: "color",
            get: function get() {
                return this._color;
            },
            set: function set(value) {
                var b = value % 256;
                var g = Math.floor(value / 256 % 256);
                var r = Math.floor(value / 256 / 256);
                var colorMatrix = [r / 255, 0, 0, 0, 0, 0, g / 255, 0, 0, 0, 0, 0, b / 255, 0, 0, 0, 0, 0, 1, 0];
                this._colorFilter.setByMatrix(colorMatrix);
            }
        }]);
        return EffrctButton;
    }(Laya.Button);
    var RecommendGridController = /* */ function (_Laya$Script20) {
        (0, _inherits2.default)(RecommendGridController, _Laya$Script20);
        var _super48 = _createSuper(RecommendGridController);
        function RecommendGridController() {
            (0, _classCallCheck2.default)(this, RecommendGridController);
            return _super48.apply(this, arguments);
        }
        (0, _createClass2.default)(RecommendGridController, [{
            key: "onAwake",
            value: function onAwake() {
                this._root = this.owner;
                this._recommendListController = this._root.RecommendList.addComponent(RecommendList);
                this._recommendListController.init(ExportPageType.RecommendGrid);
            }
        }]);
        return RecommendGridController;
    }(Laya.Script);
    var GameConfig = /* */ function () {
        function GameConfig() {
            (0, _classCallCheck2.default)(this, GameConfig);
        }
        (0, _createClass2.default)(GameConfig, null, [{
            key: "init",
            value: function init() {
                var reg = Laya.ClassUtils.regClass;
                reg("Export/Controller/CoupletList.ts", CoupletList);
                reg("Export/Controller/HorizontalList.ts", HorizontalList);
                reg("Export/Controller/LeftDrawerController.ts", LeftDrawerController);
                reg("Export/Controller/Components/EffrctButton.ts", EffrctButton);
                reg("Export/Controller/RecommendGridController.ts", RecommendGridController);
            }
        }]);
        return GameConfig;
    }();
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "showall";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "GameView/GameView.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();
    var ResourceManager = /* */ function () {
        function ResourceManager() {
            (0, _classCallCheck2.default)(this, ResourceManager);
            if (Laya.Browser.window.wx) {
                this._fs = wx.getFileSystemManager();
            }
        }
        (0, _createClass2.default)(ResourceManager, [{
            key: "init",
            value: function init() { }
        }, {
            key: "loadFont",
            value: function loadFont(url) {
                var _this85 = this;
                return new Promise(function (resolve, reject) {
                    if (Laya.Browser.onMiniGame) {
                        var result = wx.loadFont(url);
                        console.log(url, result);
                        resolve(result);
                    } else {
                        Laya.loader.load(url, Laya.Handler.create(_this85, function (res) {
                            console.log("字体加载成功", res);
                            resolve(res);
                        }));
                    }
                });
            }
        }, {
            key: "downLoadFile",
            value: function downLoadFile(url, destUrl, callback, caller) {
                var _this86 = this;
                if (!Laya.Browser.onMiniGame) return;
                return new Promise(function (resolve, reject) {
                    var downloadTask = wx.downloadFile({
                        url: url,
                        filePath: destUrl,
                        success: function success(data) {
                            if (data.statusCode === 200) {
                                console.log("下载完成", data);
                                resolve(true);
                            } else {
                                console.error("下载失败", data);
                                _this86._fs.unlinkSync(destUrl);
                                resolve(false);
                            }
                        },
                        fail: function fail(data) {
                            console.error("下载失败", data);
                            resolve(false);
                        }
                    });
                    downloadTask.onProgressUpdate(function (res) {
                        if (callback) {
                            callback.call(caller, res.progress / 100);
                        }
                    });
                });
            }
        }], [{
            key: "Instance",
            get: function get() {
                if (!ResourceManager._instance) {
                    ResourceManager._instance = new ResourceManager();
                }
                return ResourceManager._instance;
            }
        }]);
        return ResourceManager;
    }();
    var Main = /* */ function () {
        function Main() {
            (0, _classCallCheck2.default)(this, Main);
            this._fontAwaiter = [];
            this._runGame();
        }
        (0, _createClass2.default)(Main, [{
            key: "_runGame",
            value: function _runGame() {
                console.log("Laya version", Laya.version);
                if (window["Laya3D"]) {
                    Laya3D.init(GameConfig.width, GameConfig.height, null, Laya.Handler.create(null, function () {
                        Config3D.useCannonPhysics = true;
                    }));
                } else {
                    Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
                }
                this._gameSetting();
                this._showLoadingView();
            }
        }, {
            key: "_gameSetting",
            value: function _gameSetting() {
                Laya["Physics"] && Laya["Physics"].enable();
                Laya["DebugPanel"] && Laya["DebugPanel"].enable();
                Laya.stage.scaleMode = GameConfig.scaleMode;
                Laya.stage.screenMode = GameConfig.screenMode;
                Laya.stage.alignV = GameConfig.alignV;
                Laya.stage.alignH = GameConfig.alignH;
                Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
                if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
                if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
                if (GameConfig.stat) Laya.Stat.show();
                Laya.alertGlobalError(true);
                UIConfig.closeDialogOnSide = false;
                UIConfig.popupBgAlpha = .8;
                UIConfig.popupBgColor = "#000000";
                Laya.MouseManager.multiTouchEnabled = false;
                window.yad = platform.getInstance().createLogo();
                window.yad.bottom = 0;
                window.yad.centerX = 0;
                // htmlfs.saveui();
            }
        }, {
            key: "_showLoadingView",
            value: function _showLoadingView() {
                var view = new ui.LoadingViewUI();
                Laya.stage.addChild(view);
                view.zOrder = 101;
                this._loadingViewController = view.addComponent(LoadingViewController);
                var sdkAwater = this._sdkInit();
                var resourceAwater = this._resourceInit();
                this._loadingViewController.init(sdkAwater, resourceAwater);
                this._loadingViewController.updateProgress(0);
            }
        }, {
            key: "_sdkInit",
            value: function _sdkInit() {
                var _this87 = this;
                return new Promise(function (resolve, reject) {
                    return __awaiter(_this87, void 0, void 0, /* */ _regenerator.default.mark(function _callee35() {
                        return _regenerator.default.wrap(function _callee35$(_context35) {
                            while (1) {
                                switch (_context35.prev = _context35.next) {
                                    case 0:
                                        if (!Laya.Browser.onMiniGame) {
                                            _context35.next = 4;
                                            break;
                                        }
                                        _context35.next = 3;
                                        return UMSDK.Instance.init();

                                    case 3:
                                        console.log("sdk load success");

                                    case 4:
                                        resolve();

                                    case 5:
                                    case "end":
                                        return _context35.stop();
                                }
                            }
                        }, _callee35);
                    }));
                });
            }
        }, {
            key: "_resourceInit",
            value: function _resourceInit() {
                var _this88 = this;
                return new Promise(function (resolve, reject) {
                    Laya.ResourceVersion.enable("version.json", Laya.Handler.create(_this88, function () {
                        return __awaiter(_this88, void 0, void 0, /* */ _regenerator.default.mark(function _callee36() {
                            return _regenerator.default.wrap(function _callee36$(_context36) {
                                while (1) {
                                    switch (_context36.prev = _context36.next) {
                                        case 0:
                                            _context36.next = 2;
                                            return this._loadSubPackage();

                                        case 2:
                                            _context36.next = 4;
                                            return PrefabManager.Instance.init();

                                        case 4:
                                            _context36.next = 6;
                                            return ConfigManager.Instance.init();

                                        case 6:
                                            StorageManager.Instance.initData();
                                            ResourceManager.Instance.init();
                                            this._gameSceneAwaiter = this._loadGameScene();
                                            this._onVersionLoaded();
                                            resolve();

                                        case 11:
                                        case "end":
                                            return _context36.stop();
                                    }
                                }
                            }, _callee36, this);
                        }));
                    }), Laya.ResourceVersion.FILENAME_VERSION);
                });
            }
        }, {
            key: "_onVersionLoaded",
            value: function _onVersionLoaded() {
                AudioManager.Instance.init();
                AudioManager.Instance.preloadMusic(["audio_bgm.mp3"]);
                AudioManager.Instance.preloadAudio([{
                    url: "audio_win.mp3",
                    count: 1
                }, {
                    url: "audio_coin.mp3",
                    count: 1
                }, {
                    url: "audio_count.mp3",
                    count: 3
                }, {
                    url: "audio_speed.mp3",
                    count: 3
                }, {
                    url: "audio_getcoin.mp3",
                    count: 1
                }]);
                Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this._onResourceLoaded));
            }
        }, {
            key: "_onResourceLoaded",
            value: function _onResourceLoaded() {
                return __awaiter(this, void 0, void 0, /* */ _regenerator.default.mark(function _callee37() {
                    var i, scene2D, gameMainController;
                    return _regenerator.default.wrap(function _callee37$(_context37) {
                        while (1) {
                            switch (_context37.prev = _context37.next) {
                                case 0:
                                    i = 0;

                                case 1:
                                    if (!(i < this._fontAwaiter.length)) {
                                        _context37.next = 7;
                                        break;
                                    }
                                    _context37.next = 4;
                                    return this._fontAwaiter[i];

                                case 4:
                                    i++;
                                    _context37.next = 1;
                                    break;

                                case 7:
                                    scene2D = new ui.GameMainUI();
                                    scene2D.width = Laya.stage.width;
                                    scene2D.height = Laya.stage.height;
                                    scene2D.zOrder = 100;
                                    gameMainController = scene2D.addComponent(GameMainController);
                                    Laya.stage.addChild(scene2D);
                                    gameMainController.setupController(this._gameSceneAwaiter);
                                    this._loadingViewController.removeProgress(gameMainController);

                                case 15:
                                case "end":
                                    return _context37.stop();
                            }
                        }
                    }, _callee37, this);
                }));
            }
        }, {
            key: "_loadSubPackage",
            value: function _loadSubPackage() {
                var _this89 = this;
                return new Promise(function (resolve, reject) {
                    if (Laya.Browser.onMiniGame) {
                        wx.loadSubpackage({
                            name: "subpackage",
                            success: function success(res) {
                                return __awaiter(_this89, void 0, void 0, /* */ _regenerator.default.mark(function _callee38() {
                                    return _regenerator.default.wrap(function _callee38$(_context38) {
                                        while (1) {
                                            switch (_context38.prev = _context38.next) {
                                                case 0:
                                                    resolve(res);

                                                case 1:
                                                case "end":
                                                    return _context38.stop();
                                            }
                                        }
                                    }, _callee38);
                                }));
                            },
                            fail: function fail(res) {
                                return __awaiter(_this89, void 0, void 0, /* */ _regenerator.default.mark(function _callee39() {
                                    return _regenerator.default.wrap(function _callee39$(_context39) {
                                        while (1) {
                                            switch (_context39.prev = _context39.next) {
                                                case 0:
                                                    reject(res);

                                                case 1:
                                                case "end":
                                                    return _context39.stop();
                                            }
                                        }
                                    }, _callee39);
                                }));
                            }
                        });
                    } else {
                        resolve();
                    }
                });
            }
        }, {
            key: "_loadGameScene",
            value: function _loadGameScene() {
                var _this90 = this;
                return new Promise(function (resolve, reject) {
                    return __awaiter(_this90, void 0, void 0, /* */ _regenerator.default.mark(function _callee40() {
                        var sceneParams, gameScene, gameSceneController;
                        return _regenerator.default.wrap(function _callee40$(_context40) {
                            while (1) {
                                switch (_context40.prev = _context40.next) {
                                    case 0:
                                        sceneParams = Utils.getSceneConfig();
                                        SceneManager.Instance.init(sceneParams);
                                        _context40.next = 4;
                                        return SceneManager.Instance.loadScene(0);

                                    case 4:
                                        gameScene = _context40.sent;
                                        gameSceneController = gameScene.addComponent(GameSceneController);
                                        gameSceneController.prewarmEffect();
                                        resolve(gameSceneController);

                                    case 8:
                                    case "end":
                                        return _context40.stop();
                                }
                            }
                        }, _callee40);
                    }));
                });
            }
        }]);
        return Main;
    }();
    new Main();
})();