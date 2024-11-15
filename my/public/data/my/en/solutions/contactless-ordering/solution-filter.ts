import filterSmallImage from '@/assets/images/contactless-cta-small.png';
import filterLargeImage from '@/assets/images/contactless-cta-large.png';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const solutionsFilter: SolutionsTemplateProps['solutionsFilter'] = {
  largeImage: filterLargeImage,
  smallImage: filterSmallImage,
  altText:
    "Customer's hand holding credit card near black tablet for Hubbo POS contactless payment.",
  buttonTitle: 'Request Free Demo',
  buttonLink: `/request-demo`,
  title: 'Quicker Turnaround Times and Smoother Workflows',
  body: 'With HUBBO POS, customers can easily browse menus, place orders, and make payments all on their own. This means lesser wait times, reduced congestion, and improved customer satisfaction.',
};
