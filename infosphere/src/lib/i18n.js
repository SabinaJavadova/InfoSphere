export const locales = ["aze", "rus", "turk", "eng"];
export const defaultLocale = "aze";

export const getDictionary = async (locale) => {
  return (await import(`../messages/${locale}.json`)).default;
};