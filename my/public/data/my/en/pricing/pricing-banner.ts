import heroSmall from '@/assets/images/pricing-landing-small.png';
import heroLarge from '@/assets/images/pricing-landing-large.png';
import { Common } from '@/assets/svgs';
import { PricingPageProps } from '@/sections/pricing';

export const pricingHeroBannerData: PricingPageProps['pricingHeroBannerData'] =
  {
    pageIndicatorIcon: Common.Pricing,
    pageIndicatorTitle: 'Pricing',
    bannerTitle: 'Flexible plans to suit your business needs',
    bannerBody:
      'Choose from a variety of software packages or opt for a comprehensive software and hardware bundle to fit your unique business needs.',
    heroSmallImage: heroSmall,
    heroLargeImage: heroLarge,
    imageAlt:
      'Black Hubbo POS device displaying various dishes and a summary of the order.',
  };
