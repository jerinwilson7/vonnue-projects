import { Common } from '@/assets/svgs';
import solutionsFeatureImgSm from '@/assets/images/reporting-feature-1.png';
import solutionsFeatureImgLg from '@/assets/images/reporting-feature-1.png';
import { SolutionsFeaturesProps } from '@/sections/solutions/SolutionFeatures';

// solution features of cloud POS
export const solutionFeatures: SolutionsFeaturesProps = {
  title: 'Data driven insights to level up your business',
  features: [
    {
      smallImage: solutionsFeatureImgSm,
      largeImage: solutionsFeatureImgLg,
      altText:
        '25 year old man in white shirt views real-time sales reports on his tablet with Hubbo POS.',
      content: [
        {
          icon: Common.ProgressChartIcon,
          title: 'Accessibility at your fingertips',
          body: 'Keep an eye on your business with live sales data accessible through our intuitive platforms: Portal, HUBBO Business App, and HUBBO POS app.',
        },
        {
          icon: Common.BarCharIcon,
          title: 'Real time reporting',
          body: 'Monitor your business finances, revenue trends, menu performance, and overall inventory efficiently.',
        },
        {
          icon: Common.PerformanceIcon,
          title: 'Data and performance insights',
          body: 'Dive into detailed performance metrics to pinpoint improvement opportunities for your business.',
        },
      ],
    },
  ],
};
