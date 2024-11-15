import filterSmallImage from '@/assets/images/cta-small.png';
import filterLargeImage from '@/assets/images/cta-large.png';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const solutionsFilter: SolutionsTemplateProps['solutionsFilter'] = {
  largeImage: filterLargeImage,
  smallImage: filterSmallImage,
  altText:
    'Restaurant owner with white tablet uses HUBBO POS for reliable, efficient operational management.',
  buttonTitle: 'Request Free Demo',
  buttonLink: `/request-demo`,
  title: 'Ensure Business Continuity with HUBBO POS',
  body: "HUBBO POS's cloud-based POS with offline mode reduces operational overhead and ensures unwavering reliability even on the busiest days.",
};
