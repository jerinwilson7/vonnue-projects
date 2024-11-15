import heroSmall from '@/assets/images/contactless-landing-sm.jpg';
import heroLarge from '@/assets/images/contactless-landing-large.jpg';
import { Common } from '@/assets/svgs';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const heroBanner: SolutionsTemplateProps['heroBanner'] = {
  pageIndicatorIcon: Common.ContactlessOrdering,
  pageIndicatorTitle: 'Contactless ordering',
  bannerTitle: 'Contactless Ordering Made Easy',
  bannerBody:
    'Minimise wait times and prioritise the customer ordering experience through contactless ordering.',
  heroSmallImage: heroSmall,
  heroLargeImage: heroLarge,
  imageAlt:
    'Customer scans QR code with mobile for Hubbo POS contactless ordering.',
};
