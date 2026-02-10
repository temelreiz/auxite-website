import { getTranslations, getLocale } from 'next-intl/server';
import HomeContent from '@/components/HomeContent';

export default async function Home() {
  const t = await getTranslations('home');
  const locale = await getLocale();

  // RTL languages
  const isRTL = locale === 'ar';

  const metals = [
    { symbol: 'AUXG', name: t('goldName'), icon: '/auxg_icon.png', href: '/metals/auxg' },
    { symbol: 'AUXS', name: t('silverName'), icon: '/auxs_icon.png', href: '/metals/auxs' },
    { symbol: 'AUXPT', name: t('platinumName'), icon: '/auxpt_icon.png', href: '/metals/auxpt' },
    { symbol: 'AUXPD', name: t('palladiumName'), icon: '/auxpd_icon.png', href: '/metals/auxpd' },
  ];

  return (
    <HomeContent
      t={{
        hero: {
          headline: t('hero.headline'),
          line1: t('hero.line1'),
          line2: t('hero.line2'),
          line3: t('hero.line3'),
          ctaPrimary: t('hero.ctaPrimary'),
          ctaSecondary: t('hero.ctaSecondary'),
        },
        trustBadges: {
          fullyAllocated: t('trustBadges.fullyAllocated'),
          segregated: t('trustBadges.segregated'),
          bankruptcyRemote: t('trustBadges.bankruptcyRemote'),
          independentlyCustodied: t('trustBadges.independentlyCustodied'),
        },
        whatIsAuxite: {
          headline: t('whatIsAuxite.headline'),
          text: t('whatIsAuxite.text'),
        },
        howItWorks: {
          headline: t('howItWorks.headline'),
          fund: t('howItWorks.fund'),
          fundDesc: t('howItWorks.fundDesc'),
          allocate: t('howItWorks.allocate'),
          allocateDesc: t('howItWorks.allocateDesc'),
          store: t('howItWorks.store'),
          storeDesc: t('howItWorks.storeDesc'),
          redeem: t('howItWorks.redeem'),
          redeemDesc: t('howItWorks.redeemDesc'),
        },
        metals: {
          headline: t('metals.headline'),
          subtitle: t('metals.subtitle'),
          lbma: t('metals.lbma'),
          allocated: t('metals.allocated'),
          execution: t('metals.execution'),
        },
        custody: {
          headline: t('custody.headline'),
          bullet1: t('custody.bullet1'),
          bullet2: t('custody.bullet2'),
          bullet3: t('custody.bullet3'),
          bullet4: t('custody.bullet4'),
          cta: t('custody.cta'),
        },
        execution: {
          headline: t('execution.headline'),
          text: t('execution.text'),
        },
        yield: {
          headline: t('yield.headline'),
          text: t('yield.text'),
        },
        whoWeServe: {
          headline: t('whoWeServe.headline'),
          familyOffices: t('whoWeServe.familyOffices'),
          familyOfficesDesc: t('whoWeServe.familyOfficesDesc'),
          assetManagers: t('whoWeServe.assetManagers'),
          assetManagersDesc: t('whoWeServe.assetManagersDesc'),
          corporates: t('whoWeServe.corporates'),
          corporatesDesc: t('whoWeServe.corporatesDesc'),
          professionalInvestors: t('whoWeServe.professionalInvestors'),
          professionalInvestorsDesc: t('whoWeServe.professionalInvestorsDesc'),
        },
        trustPreview: {
          headline: t('trustPreview.headline'),
          audit: t('trustPreview.audit'),
          reserves: t('trustPreview.reserves'),
          custodyItem: t('trustPreview.custodyItem'),
          legal: t('trustPreview.legal'),
          cta: t('trustPreview.cta'),
        },
        cta: {
          headline: t('cta.headline'),
          ctaPrimary: t('cta.ctaPrimary'),
          ctaSecondary: t('cta.ctaSecondary'),
          disclaimer: t('cta.disclaimer'),
        },
      }}
      metals={metals}
      isRTL={isRTL}
    />
  );
}
