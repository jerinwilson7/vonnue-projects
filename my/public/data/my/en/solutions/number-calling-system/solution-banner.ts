import heroSmall from '@/assets/images/number-calling-landing-sm.png';
import heroLarge from '@/assets/images/number-calling-landing-large.png';
import { Common } from '@/assets/svgs';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const heroBanner: SolutionsTemplateProps['heroBanner'] = {
  pageIndicatorIcon: Common.NumberCallingSystem,
  pageIndicatorTitle: 'Number calling system',
  bannerTitle: 'Smart Number Calling System',
  bannerBody:
    'Enhance your service speed using HUBBO POS intelligent queue management system.',
  heroSmallImage: heroSmall,
  heroLargeImage: heroLarge,
  imageAlt:
    'Giant TV shows Hubbo POS kitchen display system for improved service speed and queue management.',
};
