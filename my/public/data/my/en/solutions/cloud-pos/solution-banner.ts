import heroSmall from '@/assets/images/cloud-landing-small.jpg';
import heroLarge from '@/assets/images/cloud-landing-large.jpg';
import { Common } from '@/assets/svgs';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const heroBanner: SolutionsTemplateProps['heroBanner'] = {
  pageIndicatorIcon: Common.CloudPos,
  pageIndicatorTitle: 'Cloud POS',
  bannerTitle: 'Unparalleled Reliability with Cloud',
  bannerBody:
    'Harness the power of cloud computing for greater reliability in your store operations.',
  heroSmallImage: heroSmall,
  heroLargeImage: heroLarge,
  imageAlt:
    'Hubbo POS dashboard report displayed on tablet, highlighting cloud-based POS system capabilities.',
};
