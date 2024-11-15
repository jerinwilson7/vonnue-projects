import filterSmallImage from '@/assets/images/reporting-cta-small.png';
import filterLargeImage from '@/assets/images/reporting-cta-large.png';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const solutionsFilter: SolutionsTemplateProps['solutionsFilter'] = {
  largeImage: filterLargeImage,
  smallImage: filterSmallImage,
  altText:
    'Restaurant owner serving a customer in an orange t-shirt, facilitated by Hubbo POS.',
  buttonTitle: ' Request Free Demo',
  buttonLink: `/request-demo`,
  title: 'All Your Restaurant Operations at a Glance',
  body: "At a single glance, you'll have the status of your deliveries, self-pickup, and dine-in orders neatly organised by platform to improve your restaurant productivity.",
};
