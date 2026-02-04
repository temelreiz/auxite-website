import { getTranslations, getLocale } from 'next-intl/server';
import HomeContent from '@/components/HomeContent';

export default async function Home() {
  const t = await getTranslations('home');
  const locale = await getLocale();
  
  // RTL languages
  const isRTL = locale === 'ar';

  const metals = [
    { symbol: 'AUXG', name: t('goldName'), icon: '/metals/gold.png', href: '/metals/auxg' },
    { symbol: 'AUXS', name: t('silverName'), icon: '/metals/silver.png', href: '/metals/auxs' },
    { symbol: 'AUXPT', name: t('platinumName'), icon: '/metals/platinum.png', href: '/metals/auxpt' },
    { symbol: 'AUXPD', name: t('palladiumName'), icon: '/metals/palladium.png', href: '/metals/auxpd' },
  ];

  return (
    <HomeContent
      t={{
        // New Hero - Institutional
        heroSlogan1: t('heroSlogan1'),
        heroSloganHighlight: t('heroSloganHighlight'),
        heroSlogan2: t('heroSlogan2'),
        heroSubline1: t('heroSubline1'),
        heroSubline2: t('heroSubline2'),
        getStarted: t('getStarted'),
        viewTrustCenter: t('viewTrustCenter'),
        // Trust Bar
        trustBar: {
          fullyAllocated: t('trustBar.fullyAllocated'),
          independentCustody: t('trustBar.independentCustody'),
          auditedFramework: t('trustBar.auditedFramework'),
          redeemable: t('trustBar.redeemable'),
          bankruptcyRemote: t('trustBar.bankruptcyRemote'),
        },
        longTermSignal: t('longTermSignal'),
        // Legacy
        badge: t('badge'),
        lbmaVaults: t('lbmaVaults'),
        audited: t('audited'),
        stats: {
          onChain: t('stats.onChain'),
          backing: t('stats.backing'),
          trading: t('stats.trading'),
          metals: t('stats.metals'),
        },
        whyAuxite: t('whyAuxite'),
        whyAuxiteHighlight: t('whyAuxiteHighlight'),
        whySubtitle: t('whySubtitle'),
        features: {
          onChain: t('features.onChain'),
          onChainDesc: t('features.onChainDesc'),
          physical: t('features.physical'),
          physicalDesc: t('features.physicalDesc'),
          stake: t('features.stake'),
          stakeDesc: t('features.stakeDesc'),
          transparent: t('features.transparent'),
          transparentDesc: t('features.transparentDesc'),
        },
        howItWorks: t('howItWorks'),
        howItWorksHighlight: t('howItWorksHighlight'),
        howItWorksDiagram: {
          step1: t('howItWorksDiagram.step1'),
          step1Desc: t('howItWorksDiagram.step1Desc'),
          step2: t('howItWorksDiagram.step2'),
          step2Desc: t('howItWorksDiagram.step2Desc'),
          step3: t('howItWorksDiagram.step3'),
          step3Desc: t('howItWorksDiagram.step3Desc'),
          step4: t('howItWorksDiagram.step4'),
          step4Desc: t('howItWorksDiagram.step4Desc'),
          step5: t('howItWorksDiagram.step5'),
          step5Desc: t('howItWorksDiagram.step5Desc'),
        },
        steps: {
          buy: t('steps.buy'),
          buyDesc: t('steps.buyDesc'),
          verify: t('steps.verify'),
          verifyDesc: t('steps.verifyDesc'),
          stake: t('steps.stake'),
          stakeDesc: t('steps.stakeDesc'),
        },
        // Structure Section
        structureTitle: t('structureTitle'),
        structureTitleHighlight: t('structureTitleHighlight'),
        structureSubtitle: t('structureSubtitle'),
        structure: {
          foundation: t('structure.foundation'),
          foundationDesc: t('structure.foundationDesc'),
          operator: t('structure.operator'),
          operatorDesc: t('structure.operatorDesc'),
          metals: t('structure.metals'),
          metalsDesc: t('structure.metalsDesc'),
          vaults: t('structure.vaults'),
          vaultsDesc: t('structure.vaultsDesc'),
        },
        ctaTitle: t('ctaTitle'),
        ctaTitleHighlight: t('ctaTitleHighlight'),
        ctaSubtitle: t('ctaSubtitle'),
        startTrading: t('startTrading'),
        readWhitepaper: t('readWhitepaper'),
      }}
      metals={metals}
      isRTL={isRTL}
    />
  );
}
