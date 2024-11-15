import heroSmall from '@/assets/images/reporting-landing-small.jpg';
import heroLarge from '@/assets/images/reporting-landing-large.jpg';
import { Common } from '@/assets/svgs';
import { SolutionAndPricingHeroBannerProps } from '@/sections/common/SolutionAndPricingHeroBanner';

export const heroBanner: SolutionAndPricingHeroBannerProps = {
  pageIndicatorIcon: Common.Reporting,
  pageIndicatorTitle: 'Reporting',
  bannerTitle: 'Advanced Business Insights and Reporting',
  bannerBody:
    'Empower your business decisions with advanced, real-time reporting from HUBBO POS System.',
  heroSmallImage: heroSmall,
  heroLargeImage: heroLarge,
  imageAlt:
    'Male and female analyzing business reports on a tablet with Hubbo POS, pleased with the analytics displayed.',
};
