import { Common } from '@/assets/svgs';
import solutionsFeatureImg from '@/assets/images/reporting-feature.jpg';
import { SolutionsFeaturesProps } from '@/sections/solutions/SolutionFeatures';

// solution features of number calling system
export const solutionFeatures: SolutionsFeaturesProps = {
  title: 'Improve workflow efficiency and overall productivity',
  features: [
    {
      smallImage: solutionsFeatureImg,
      largeImage: solutionsFeatureImg,
      altText:
        'Man packing Avocado Tomato Salad among 7 Hubbo POS differentiated orders, showcasing order efficiency.',
      content: [
        {
          icon: Common.SmartCallingSytem,
          title: 'Automated Item Grouping',
          body: 'Reduce preparation times with efficient item grouping and automated order syncing.',
        },
        {
          icon: Common.AdvancedDisplaySystem,
          title: 'Differentiate orders by platform',
          body: 'Our unique ticket display system automatically separates orders from delivery platforms and dine-in, reducing overall wait times.',
        },
      ],
    },
  ],
};
