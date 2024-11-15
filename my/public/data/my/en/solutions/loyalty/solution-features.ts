import { Common } from '@/assets/svgs';
import solutionsFeatureImg1 from '@/assets/images/loyalty-feature1.png';
import solutionsFeatureImg2Sm from '@/assets/images/loyalty-feature-2-sm.png';
import solutionsFeatureImg2Lg from '@/assets/images/loyalty-feature-2-lg.png';
import { SolutionsFeaturesProps } from '@/sections/solutions/SolutionFeatures';

// solution features of loyalty
export const solutionFeatures: SolutionsFeaturesProps = {
  title: 'Grow Your Business with Cashback Rewards',
  features: [
    {
      smallImage: solutionsFeatureImg1,
      largeImage: solutionsFeatureImg1,
      altText:
        'Image of a 6-column Hubbo POS interface for enhancing customer management and retention.',
      content: [
        {
          icon: Common.Bag,
          title: 'Improve customer engagement',
          body: 'Our loyalty programme employs a proven method to entice customer participation without relying on staff upselling, setting HUBBO POS apart from other loyalty programmes.',
        },
        {
          icon: Common.CusomterRetention,
          title: 'Drive customer retention',
          body: 'Drive repeat purchases through automated cashback rewards for existing customers.',
        },
      ],
    },
    {
      smallImage: solutionsFeatureImg2Sm,
      largeImage: solutionsFeatureImg2Lg,
      altText:
        'Restaurant owner serves a customer on a laptop, with a menu blackboard and Hubbo POS customer insights.',
      content: [
        {
          icon: Common.Graph,
          title: 'Powerful customer insights',
          body: 'Gain deeper insights into customer spending patterns to enhance your business strategy.',
        },
        {
          icon: Common.WinbackCustomer,
          title: 'Win back customers',
          body: 'Re-engage and win back customers with SMS, WhatsApp, and Facebook.',
        },
      ],
    },
  ],
};
