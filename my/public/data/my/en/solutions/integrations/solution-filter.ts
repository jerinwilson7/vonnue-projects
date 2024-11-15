import filterSmallImage from '@/assets/images/integrations-cta.png';
import filterLargeImage from '@/assets/images/integrations-cta.png';
import { SolutionsTemplateProps } from '@/sections/solutions';

export const solutionsFilter: SolutionsTemplateProps['solutionsFilter'] = {
  largeImage: filterLargeImage,
  smallImage: filterSmallImage,
  altText:
    'Webscreen on black tablet showing a list of platforms integrated with Hubbo POS.',
  buttonTitle: 'Request Free Demo',
  buttonLink: `/request-demo`,
  title: 'One Device to Power All Your Business Operations',
  body: 'With our powerful integration solutions, you can manage everything you need on a single device and take charge of your business effortlessly.',
};
