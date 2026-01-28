'use client'

import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { locales, localeNames, type Locale } from '@/i18n/config'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const t = useTranslations('languageSwitcher')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (newLocale: Locale) => {
    if (newLocale === locale) return

    // Get the current path without the locale prefix
    const currentPathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

    startTransition(() => {
      router.push(`/${newLocale}${currentPathWithoutLocale}`)
    })
  }

  const otherLocale = locale === 'en' ? 'ar' : 'en'

  return (
    <button
      onClick={() => switchLocale(otherLocale as Locale)}
      disabled={isPending}
      className="language-switcher"
      aria-label={t('label')}
      title={localeNames[otherLocale as Locale]}
    >
      <Globe size={18} aria-hidden="true" />
      <span>{localeNames[otherLocale as Locale]}</span>
    </button>
  )
}
