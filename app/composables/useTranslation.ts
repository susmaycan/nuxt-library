import { useI18n } from 'vue-i18n'

export function useTranslation() {
  const { t } = useI18n()

  const { locales, locale: selectedLocale, setLocale } = useI18n()
  console.log('🚀 ~ useTranslation ~ locales:', locales.value)

  const localeOptions = computed(() => {
    return locales.value.map((locale) => ({
      name: locale.name || '',
      value: locale.code
    }))
  })

  return {
    localeOptions,
    selectedLocale,
    setLocale,
    t,
    locales
  }
}
