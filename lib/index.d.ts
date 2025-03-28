/**
 * Interface for the locale lang object
 */
interface LocaleLang {
    shortMonths?: string[];
    months?: string[];
    monthFormat?: string;
    formatMonth?: () => string;
    monthSelect?: string;
    [key: string]: any;
}
/**
 * Interface for the locale object
 */
interface Locale {
    lang: LocaleLang;
    [key: string]: any;
}
/**
 * Converts the month names in a locale object to Persian month names
 * @param {Locale} locale - The locale object to customize
 * @returns {Locale} - The customized locale object with Persian month names
 */
declare function convertToPersianMonths(locale: Locale): Locale;
export default convertToPersianMonths;
