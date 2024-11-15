import heroSmall from '@/assets/images/integrations-landing-small.jpg';
import heroLarge from '@/assets/images/integrations-landing-large.jpg';
import { Common } from '@/assets/svgs';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const heroBanner: SolutionsTemplateProps['heroBanner'] = {
  pageIndicatorIcon: Common.Integrations,
  pageIndicatorTitle: 'Integrations',
  bannerTitle: 'Unify your restaurant operations on a single platform',
  bannerBody:
    'Powerful integrations across delivery platforms, payment channels, credit cards and more.',
  heroSmallImage: heroSmall,
  heroLargeImage: heroLarge,
  imageAlt:
    'Restaurant owner in blue apron operates Hubbo POS, highlighting powerful delivery and payment integrations.',
};
