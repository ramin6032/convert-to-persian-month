"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts the month names in a locale object to Persian month names
 * @param {Locale} locale - The locale object to customize
 * @returns {Locale} - The customized locale object with Persian month names
 */
function convertToPersianMonths(locale) {
    // Persian month names
    var persianMonths = [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
        "دی",
        "بهمن",
        "اسفند",
    ];
    // Customize locale to use Persian month names
    var customLocale = __assign(__assign({}, locale), { lang: __assign(__assign({}, locale.lang), { shortMonths: persianMonths.map(function (month) { return month.substring(0, 3); }), months: persianMonths, monthFormat: "MMMM", formatMonth: function () { return "MMMM"; }, monthSelect: "انتخاب ماه" }) });
    return customLocale;
}
exports.default = convertToPersianMonths;
