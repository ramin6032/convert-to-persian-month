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
function convertToPersianMonths(locale: Locale): Locale {
  // Persian month names
  const persianMonths: string[] = [
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
  const customLocale: Locale = {
    ...locale,
    lang: {
      ...locale.lang,
      shortMonths: persianMonths.map((month) => month.substring(0, 3)),
      months: persianMonths,
      monthFormat: "MMMM",
      formatMonth: () => "MMMM",
      monthSelect: "انتخاب ماه",
    },
  };

  return customLocale;
}

export default convertToPersianMonths;
