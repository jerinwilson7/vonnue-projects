import filterSmallImage from '@/assets/images/loyalty-cta-small.png';
import filterLargeImage from '@/assets/images/loyalty-cta-large.png';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const solutionsFilter: SolutionsTemplateProps['solutionsFilter'] = {
  largeImage: filterLargeImage,
  smallImage: filterSmallImage,
  altText:
    "Couple gets a 25% discount on female's mobile, served by manager in yellow with Hubbo POS.",
  buttonTitle: 'Request Free Demo',
  buttonLink: `/request-demo`,
  title: 'Reward Existing Customers to Drive Repeats',
  body: "Boost your sales and customer loyalty with HUBBO POS's Cashback Loyalty feature. Automatically reward customers with cashback incentives to get customers back to your store.",
};
