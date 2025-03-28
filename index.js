/**
 * Converts the month names in a locale object to Persian month names
 * @param {Object} locale - The locale object to customize
 * @returns {Object} - The customized locale object with Persian month names
 */
function convertToPersianMonths(locale) {
  // Persian month names
  const persianMonths = [
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
  const customLocale = {
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
