import heroSmall from '@/assets/images/loyalty-landing-sm.jpg';
import heroLarge from '@/assets/images/loyalty-landing-lg.jpg';
import { Common } from '@/assets/svgs';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const heroBanner: SolutionsTemplateProps['heroBanner'] = {
  pageIndicatorIcon: Common.Loyalty,
  pageIndicatorTitle: 'Loyalty',
  bannerTitle: 'Win back customers with Cashback Loyalty',
  bannerBody:
    'The smarter way to reward your customers and grow your business.',
  heroSmallImage: heroSmall,
  heroLargeImage: heroLarge,
  imageAlt:
    'A happy customer receiving her order through Hubbo POS contactless ordering.',
};
